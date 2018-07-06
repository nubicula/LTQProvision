import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LtqProvisionSharedModule } from 'app/shared';
import {
    VMHostComponent,
    VMHostDetailComponent,
    VMHostUpdateComponent,
    VMHostDeletePopupComponent,
    VMHostDeleteDialogComponent,
    vMHostRoute,
    vMHostPopupRoute
} from './';

const ENTITY_STATES = [...vMHostRoute, ...vMHostPopupRoute];

@NgModule({
    imports: [LtqProvisionSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [VMHostComponent, VMHostDetailComponent, VMHostUpdateComponent, VMHostDeleteDialogComponent, VMHostDeletePopupComponent],
    entryComponents: [VMHostComponent, VMHostUpdateComponent, VMHostDeleteDialogComponent, VMHostDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LtqProvisionVMHostModule {}
