import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LtqProvisionSharedModule } from 'app/shared';
import {
    VirtualVolumeComponent,
    VirtualVolumeDetailComponent,
    VirtualVolumeUpdateComponent,
    VirtualVolumeDeletePopupComponent,
    VirtualVolumeDeleteDialogComponent,
    virtualVolumeRoute,
    virtualVolumePopupRoute
} from './';

const ENTITY_STATES = [...virtualVolumeRoute, ...virtualVolumePopupRoute];

@NgModule({
    imports: [LtqProvisionSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        VirtualVolumeComponent,
        VirtualVolumeDetailComponent,
        VirtualVolumeUpdateComponent,
        VirtualVolumeDeleteDialogComponent,
        VirtualVolumeDeletePopupComponent
    ],
    entryComponents: [
        VirtualVolumeComponent,
        VirtualVolumeUpdateComponent,
        VirtualVolumeDeleteDialogComponent,
        VirtualVolumeDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LtqProvisionVirtualVolumeModule {}
