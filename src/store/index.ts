import SpaceXStore from "./SpaceXStore";

export class Root {
    public SpaceXStore: any = new SpaceXStore(this);

    constructor() {
        Object.keys(this).forEach(storeName => this[storeName].init && this[storeName].init())
    }
}

const stores = new Root();

(window as any).stores = stores;

export default stores;