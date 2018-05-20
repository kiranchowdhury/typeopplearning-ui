export interface TrainingLibraryState {
  errorCode?: string;
  errorMsg?: string;
  loading?: boolean;
  loadingMsg?: string;
  trainingLibraries: TrainingLibrary[];
  count: number;
  currentPage: number;

}

export interface TrainingLibrary {
  id: string;
  equipment: string;
  trainingName: string;
  date: Date;
}
