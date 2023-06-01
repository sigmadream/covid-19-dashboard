const { subDays } = require('date-fns');
const { format, utcToZonedTime } = require('date-fns-tz');
const _ = require('lodash');
const ApiClient = require('./api-client');

const countryInfo = require('../../api/googlesheets/downloaded/countryInfo.json');

async function getDataSource() {
    const countryByCC = _.keyBy(countryInfo, 'cc');
    const apiClient = new ApiClient ();
    
    const allGlobalStats = await apiClient.getAllGlobalStats();
    const groupedByDate = _.groupBy(allGlobalStats.globalStats, 'date');
    const globalStats = generateGlobalStats(groupedByDate);

    return {
        lastUpdated: Date.now(),
        globalStats,
        countryByCC,
    };
}

function generateGlobalStats(groupedByDate) {
    const now = new Date('2020-02-01');
    const timeZone = 'Asia/Seoul';
    const today = format(utcToZonedTime(now, timeZone), 'yyyy-MM-dd');
    const yesterday = format(
        utcToZonedTime(subDays(now, 1), timeZone),
        'yyyy-MM-dd',
    );

    if (!groupedByDate[today]) {
        throw new Error('Data for today is missing');
    }
    return createGlobalStatWithPrevField(
        groupedByDate[today],
        groupedByDate[yesterday],
    );
}

function createGlobalStatWithPrevField(todayStats, yesterdayStats) {
    const yesterdayStatsByCc = _.keyBy(yesterdayStats, 'cc');

    const globalStatWithPrev = todayStats.map((todayStat) => {
        const cc = todayStat.cc;
        const yesterdayStat = yesterdayStatsByCc[cc];
        if (yesterdayStat) {
            return {
                ...todayStat,
                confirmedPrev: yesterdayStat.confirmed || 0,
                deathPrev: yesterdayStat.death || 0,
                negativePrev: yesterdayStat.negative || 0,
                releasedPrev: yesterdayStat.released || 0,
                testedPrev: yesterdayStat.tested || 0,
            };
        }

        return todayStat;
    });

    return globalStatWithPrev;
}

module.exports = {
    getDataSource
}