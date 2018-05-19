import { LoginState } from '../@core/login/login.state';
import { AuthState } from '../@core/auth/auth.state';
import { CustomersState } from '../pages/customers/customers-state';

export interface AppState {
    login: LoginState;
    auth: AuthState;
    customers: {
        custState: CustomersState
    }
}
