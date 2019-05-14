import { Root } from '.';
import { observable, action, autorun } from 'mobx';
import * as Api from '../services/apiService'
import { ISingularLaunch } from '../types';

class SpaceXStore {
    public rootStore: Root;

    constructor(rootStore: Root) {
        this.rootStore = rootStore;
    }
    @observable public allLaunches: ISingularLaunch[];

    public columns = [{
        Header: 'Flight Number',
        accessor: 'flight_number'
    }, {
        Header: 'Mission Name',
        accessor: 'mission_name'
    }, {
        Header: 'Launch Date',
        accessor: 'launch_date_utc'
    }, {
        Header: 'Rocket Name',
        accessor: 'rocket.rocket_name'
    }, {
        Header: 'Rocket Type',
        accessor: 'rocket.rocket_type'
    }, {
        Header: 'Launch Year',
        accessor: 'launch_year'
    }, {
        Header: 'Launch Site',
        accessor: 'launch_site.site_name'
    }, {
        Header: 'Launch Success?',
        accessor: 'launch_success',
        Cell: (row) => (
            row.original.launch_success !== null ? row.original.launch_success.toString() : ""
        ),
    }]

    public async init() {
        autorun(() => {
            this.getLaunches();
        })
    }

    @action
    public async changeCurrentLaunch(number: number) {
        number = number--;
        return this.allLaunches[number];
    }

    @action
    public async getLaunches() {
        this.allLaunches = (await Api.getAllLaunches());
    }
}

export default SpaceXStore;