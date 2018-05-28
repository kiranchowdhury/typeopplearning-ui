import { ProfileState } from './profile-state';
import { ProfileContract } from './profile-contract';
import { Action } from "@ngrx/store";
import { ErrorResponse } from "../../@core/error/error-response";
import { AppState } from "../../@models/app-state";

export enum ProfileActionTypes {
  GET_PROFILE = "Get profile",
  GET_PROFILE_SUCCESS = "Get Profile Success",
  GET_PROFILE_FAILED = "Get Profile Failed"
}

export class GetProfileAction implements Action {
  readonly type = ProfileActionTypes.GET_PROFILE;
  constructor (){}
}

export class GetProfileSuccessAction implements Action {
  readonly type = ProfileActionTypes.GET_PROFILE_SUCCESS;
  constructor (public payload: ProfileContract){}
}

export class GetProfileFailedAction implements Action {
  readonly type = ProfileActionTypes.GET_PROFILE_FAILED;
  constructor (public payload: ErrorResponse){}
}


export type ProfileActions = GetProfileAction | GetProfileSuccessAction | GetProfileFailedAction

export const initialProfileState: ProfileState = {
  errorCode: '',
  errorMsg: '',
  loading: true,
  loadingMsg: 'Loading Profile Details'
  // ,
  // profileDetails: {
  //   id: 1231,
  //   fullName: 'Kiran Chowdhary',
  //   profileImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJqWtCdNAfCdf3FhiqZ6ebvFw1bfCLYSTvIKwWDn0Yea58VnK',
  //   email: 'kiran.soft@gmail.com',
  //   phone: '77173267239',
  //   address: 'G-145, Damlur',
  //   specialCredits: 'XYZ'
  // }

}


export const selectorProfile = (state: AppState) => state.profile.profileState || initialProfileState;

export function profileReducer (
  state: ProfileState = initialProfileState,
  action: ProfileActions
): ProfileState {
  switch (action.type) {
    case ProfileActionTypes.GET_PROFILE:
      return {
        ...state,
        loading: true,
        loadingMsg: "Loading Profile"
      }

      case ProfileActionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        loadingMsg: '',
        profileDetails: {
            id: action.payload.id,
            fullName: action.payload.fullName,
            profileImageUrl: action.payload.profileImageUrl,
            email: action.payload.email,
            phone: action.payload.phone,
            address: action.payload.address,
            specialCredits: action.payload.specialCredits
          }
      }

      case ProfileActionTypes.GET_PROFILE_FAILED:
      return {
        ...state,
        errorCode: action.payload.code,
        errorMsg: action.payload.message,

      }

    default:
      return state;
  }
}
