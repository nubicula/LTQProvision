import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Datastore } from 'app/shared/model/datastore.model';
import { DatastoreService } from './datastore.service';
import { DatastoreComponent } from './datastore.component';
import { DatastoreDetailComponent } from './datastore-detail.component';
import { DatastoreUpdateComponent } from './datastore-update.component';
import { DatastoreDeletePopupComponent } from './datastore-delete-dialog.component';
import { IDatastore } from 'app/shared/model/datastore.model';

@Injectable({ providedIn: 'root' })
export class DatastoreResolve implements Resolve<IDatastore> {
    constructor(private service: DatastoreService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((datastore: HttpResponse<Datastore>) => datastore.body));
        }
        return of(new Datastore());
    }
}

export const datastoreRoute: Routes = [
    {
        path: 'datastore',
        component: DatastoreComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ltqProvisionApp.datastore.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'datastore/:id/view',
        component: DatastoreDetailComponent,
        resolve: {
            datastore: DatastoreResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ltqProvisionApp.datastore.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'datastore/new',
        component: DatastoreUpdateComponent,
        resolve: {
            datastore: DatastoreResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ltqProvisionApp.datastore.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'datastore/:id/edit',
        component: DatastoreUpdateComponent,
        resolve: {
            datastore: DatastoreResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ltqProvisionApp.datastore.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const datastorePopupRoute: Routes = [
    {
        path: 'datastore/:id/delete',
        component: DatastoreDeletePopupComponent,
        resolve: {
            datastore: DatastoreResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ltqProvisionApp.datastore.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
