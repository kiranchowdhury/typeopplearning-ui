import { LoginState } from '../@core/login/login.state';
import { AuthState } from '../@core/auth/auth.state';
import { CustomersState } from '../pages/customers/customers-state';
import { TrainingLibraryState } from '../pages/training-library/training-library-state';
import { CertificateState } from "../pages/certificates/certificate-state";
import { ProfileState } from "../pages/profiles/profile-state"
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
    certificate : {
      certificateState: CertificateState
    };
    profile : {
      profileState: ProfileState
    }
}
