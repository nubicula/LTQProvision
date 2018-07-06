import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LtqProvisionVcenterModule } from './vcenter/vcenter.module';
import { LtqProvisionPhysicalDatacenterModule } from './physical-datacenter/physical-datacenter.module';
import { LtqProvisionVMHostClusterModule } from './vm-host-cluster/vm-host-cluster.module';
import { LtqProvisionDatastoreClusterModule } from './datastore-cluster/datastore-cluster.module';
import { LtqProvisionVMHostModule } from './vm-host/vm-host.module';
import { LtqProvisionDatastoreModule } from './datastore/datastore.module';
import { LtqProvisionStorageArrayModule } from './storage-array/storage-array.module';
import { LtqProvisionVirtualVolumeModule } from './virtual-volume/virtual-volume.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        LtqProvisionVcenterModule,
        LtqProvisionPhysicalDatacenterModule,
        LtqProvisionVMHostClusterModule,
        LtqProvisionDatastoreClusterModule,
        LtqProvisionVMHostModule,
        LtqProvisionDatastoreModule,
        LtqProvisionStorageArrayModule,
        LtqProvisionVirtualVolumeModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LtqProvisionEntityModule {}
