const SheetApiClientFactory = require('./sheet_api_client_factory');
const SheetDownloader = require('./sheet_downloader');

async function main() {
    try {
        const sheetApiClient = await SheetApiClientFactory.create();
        const downloader = new SheetDownloader(sheetApiClient);

        // https://docs.google.com/document/d/1bZbLi45kqRyE1fSBphWzFFKaJobcaMplBzr82rRXjPM/edit#
        const spreadsheetId = '1kHjxBpkTN_6mmFbs4YzjgMbKYSaNxd_Z67PkGpX2k-0';

        const notice = await downloader.downloadToJson(
            spreadsheetId,
            'notice',
            'downloaded/notice.json',
        );

        console.log(notice);

        const countryInfo = await downloader.downloadToJson(
            spreadsheetId,
            'countryInfo',
            'downloaded/countryInfo.json',
        );

        console.log(countryInfo);
    } catch (e) {
        console.error(e);
    }
}

main();