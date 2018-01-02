import { NgModule } from '@angular/core';

import { AccountRoutingModule, routedComponents } from './account-routing.module';

@NgModule({
    imports: [
        AccountRoutingModule
    ],
    exports: [],
    declarations: [
        routedComponents
    ],
    providers: [],
})
export class AccountModule { }
