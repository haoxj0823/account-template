import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordEmailComponent } from './password/forgot-password-email.component';
import { ResetPasswordComponent } from './password/reset-password.component';
import { ForgotPasswordPhoneComponent } from './password/forgot-password-phone.component';
import { ResetPasswordMailComponent } from './password/reset-password-mail.component';
import { ResetPasswordSuccessComponent } from './password/reset-password-success.component';
import { EmailActivationComponent } from './email-activation/email-activation.component';
import { EmailActivationSuccessComponent } from './email-activation/email-activation-success.component';

const routes: Routes = [
    {
        path: '',
        component: AccountComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'forgot-password-email', component: ForgotPasswordEmailComponent },
            { path: 'forgot-password-phone', component: ForgotPasswordPhoneComponent },
            { path: 'reset-password', component: ResetPasswordComponent },
            { path: 'reset-password-mail', component: ResetPasswordMailComponent },
            { path: 'reset-password-success', component: ResetPasswordSuccessComponent },
            { path: 'email-activation', component: EmailActivationComponent },
            { path: 'email-activation-success', component: EmailActivationSuccessComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AccountRoutingModule { }

export const routedComponents = [
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordEmailComponent,
    ForgotPasswordPhoneComponent,
    ResetPasswordComponent,
    ResetPasswordMailComponent,
    ResetPasswordSuccessComponent,
    EmailActivationComponent,
    EmailActivationSuccessComponent
];
