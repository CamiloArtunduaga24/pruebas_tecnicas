import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

    {
        path: 'contacts/contacts-list',
        loadChildren: () => import('./contacts-list/contacts-list.module').then(m => m.ContactsListPageModule)
    },
    {
        path: 'contacts/contacts-permission',
        loadChildren: () => import('./contact-permission/contact-permission.module').then(m => m.ContactPermissionPageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ContactsRoutingModule { }
