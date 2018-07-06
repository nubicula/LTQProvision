import { IDatastore } from 'app/shared/model//datastore.model';
import { IStorageArray } from 'app/shared/model//storage-array.model';

export interface IVirtualVolume {
    id?: number;
    name?: string;
    wwn?: string;
    lunID?: string;
    replicated?: boolean;
    datastore?: IDatastore;
    storagearray?: IStorageArray;
}

export class VirtualVolume implements IVirtualVolume {
    constructor(
        public id?: number,
        public name?: string,
        public wwn?: string,
        public lunID?: string,
        public replicated?: boolean,
        public datastore?: IDatastore,
        public storagearray?: IStorageArray
    ) {
        this.replicated = false;
    }
}
