import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from './test1/test1.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./test/test.module').then(m => m.TestModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
