import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angulartics2Module } from 'angulartics2';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(homeRoutes), NgbModule, Angulartics2Module],
  exports: [HomeComponent]
})
export class HomeRoutingModule {}
