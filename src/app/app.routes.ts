
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ModuleWithProviders } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';
import { RegistrationComponent } from '../app/registration/registration.component';
export const appRoutes: Routes = [
    {
        path: '',
        component: RegistrationComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });