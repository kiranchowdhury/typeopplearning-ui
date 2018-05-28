export interface ProfileState {
  errorCode?: string;
  errorMsg?: string;
  loading?: boolean;
  loadingMsg?: string;
  profileDetails?: Profile;
}

export interface Profile {
  id: number,
  fullName: string,
  profileImageUrl: string,
  email: string,
  phone: string,
  address: string,
  specialCredits: string
}
