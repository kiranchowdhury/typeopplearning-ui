import { LoginState } from '../@core/login/login.state';
import { AuthState } from '../@core/auth/auth.state';
import { CustomersState } from '../pages/customers/customers-state';
import { TrainingLibraryState } from '../pages/training-library/training-library-state';
import { CertificateState } from "../pages/certificates/certificate-state";
import { ProfileState } from "../pages/profiles/profile-state"
import { InvoiceState } from '../pages/invoices/invoices-state';
import { TrainingState } from '../pages/training/training-state'


import { UserListState } from "../pages/user-list/user-list-state"
export interface AppState {
    login: LoginState;
    auth: AuthState;
    breadcrumbs: {
        title: string;
        link: string;
        active: boolean;
    };
    customers: {
        custState: CustomersState
    };
    trainingLibrary : {
      trainingLibraryState : TrainingLibraryState
    };
    training: {
      trainingState: TrainingState
    };
    invoices : {
        invoiceState : InvoiceState
    };
    certificate : {
      certificateState: CertificateState
    };
    profile : {
      profileState: ProfileState
    };
    userList : {
      userListState: UserListState
    };
}
