import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PhysicalDatacenter } from 'app/shared/model/physical-datacenter.model';
import { PhysicalDatacenterService } from './physical-datacenter.service';
import { PhysicalDatacenterComponent } from './physical-datacenter.component';
import { PhysicalDatacenterDetailComponent } from './physical-datacenter-detail.component';
import { PhysicalDatacenterUpdateComponent } from './physical-datacenter-update.component';
import { PhysicalDatacenterDeletePopupComponent } from './physical-datacenter-delete-dialog.component';
import { IPhysicalDatacenter } from 'app/shared/model/physical-datacenter.model';

@Injectable({ providedIn: 'root' })
export class PhysicalDatacenterResolve implements Resolve<IPhysicalDatacenter> {
    constructor(private service: PhysicalDatacenterService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((physicalDatacenter: HttpResponse<PhysicalDatacenter>) => physicalDatacenter.body));
        }
        return of(new PhysicalDatacenter());
    }
}

export const physicalDatacenterRoute: Routes = [
    {
        path: 'physical-datacenter',
        component: PhysicalDatacenterComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ltqProvisionApp.physicalDatacenter.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'physical-datacenter/:id/view',
        component: PhysicalDatacenterDetailComponent,
        resolve: {
            physicalDatacenter: PhysicalDatacenterResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ltqProvisionApp.physicalDatacenter.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'physical-datacenter/new',
        component: PhysicalDatacenterUpdateComponent,
        resolve: {
            physicalDatacenter: PhysicalDatacenterResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ltqProvisionApp.physicalDatacenter.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'physical-datacenter/:id/edit',
        component: PhysicalDatacenterUpdateComponent,
        resolve: {
            physicalDatacenter: PhysicalDatacenterResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ltqProvisionApp.physicalDatacenter.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const physicalDatacenterPopupRoute: Routes = [
    {
        path: 'physical-datacenter/:id/delete',
        component: PhysicalDatacenterDeletePopupComponent,
        resolve: {
            physicalDatacenter: PhysicalDatacenterResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ltqProvisionApp.physicalDatacenter.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
