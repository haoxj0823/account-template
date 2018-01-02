import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppTestComponent } from './app-test/app-test.component';

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: '',
                component: AppTestComponent
            },
            {
                path: 'test',
                component: AppTestComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [
    AppComponent,
    AppTestComponent
];
