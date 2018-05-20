import { TrainingLibrary } from './training-library-state';

export interface TrainingLibraryContract {
  status: number;
  code: string;
  message: string;
  count: number;
  trainingLibrary: TrainingLibrary[];
}
