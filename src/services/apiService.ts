import * as HttpService from './httpService';

function get(path: string, params?: any, url = 'https://api.spacexdata.com/v3') {
    return HttpService.get(url + path, params);
}

export async function getAllLaunches() {
    return await get('/launches');
}

export async function getLatestLaunch() {
    return await get('/launches/latest');
}

export async function getLaunch(launchNum: string) {
    return await get(`/launches/${launchNum}`);
}