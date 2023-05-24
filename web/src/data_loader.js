const axios = require('axios');
const { subDays } = require('date-fns');
const { format, utcToZonedTime } = require('date-fns-tz');
const _ = require('lodash');

const countryInfo = require('../../api/googlesheets/downloaded/countryInfo.json');

async function getDataSource() {
    const countryByCC = _.keyBy(countryInfo, 'cc');
    const globalStats = await generateGlobalStats();

    return {
        globalStats,
        countryByCC,
    };
}

async function generateGlobalStats() {

    const apiClient = axios.create({
        baseURL: process.env.CORONABOARD_API_BASE_URL || 'http://localhost:8080',
    });

    const response = await apiClient.get('global-stats');
    const groupedByDate = _.groupBy(response.data.globalStats, 'date');

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