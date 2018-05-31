export interface TrainingState {
  errorCode?: string;
  errorMsg?: string;
  loading?: boolean;
  loadingMsg?: string;
  equipmentList? : Equipment[];
  count: number;
  currentPage: number;
}

export interface Equipment {
  id?: string;
  name: string;
  details?: string;
  icon?: string;
}
