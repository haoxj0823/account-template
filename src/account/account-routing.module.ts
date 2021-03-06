import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordEmailComponent } from './password/forgot-password-email.component';
import { ResetPasswordComponent } from './password/reset-password.component';
import { ForgotPasswordPhoneComponent } from './password/forgot-password-phone.component';
import { EmailActivationComponent } from './email-activation/email-activation.component';
import { SuccessComponent } from './shared/success.component';
import { TwoFactorCodeComponent } from './login/two-factor-code.component';

const routes: Routes = [
    {
        path: '',
        component: AccountComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'two-factor-code', component: TwoFactorCodeComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'forgot-password-email', component: ForgotPasswordEmailComponent },
            { path: 'forgot-password-phone', component: ForgotPasswordPhoneComponent },
            { path: 'reset-password', component: ResetPasswordComponent },
            { path: 'email-activation', component: EmailActivationComponent },
            { path: 'success', component: SuccessComponent }
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
    TwoFactorCodeComponent,
    RegisterComponent,
    ForgotPasswordEmailComponent,
    ForgotPasswordPhoneComponent,
    ResetPasswordComponent,
    EmailActivationComponent,
    SuccessComponent
];
