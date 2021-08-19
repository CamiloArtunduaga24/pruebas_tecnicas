import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },

  {
    path: '',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: '',
    loadChildren: () =>
      import('./pages/contacts/contacts.module').then((m) => m.ContactsModule),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./pages/home/menu/menu.module').then((m) => m.MenuPageModule),
  },
  {
    path: 'contact-edit/:id',
    loadChildren: () =>
      import('./pages/contact-edit/contact-edit.module').then(
        (m) => m.ContactEditPageModule
      ),
  },
  {
    path: 'lista-prueba',
    loadChildren: () =>
      import('./pages/lista-prueba/lista-prueba.module').then(
        (m) => m.ListaPruebaPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
