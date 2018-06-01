import { TrainingCat } from './subscriptions-state';

export interface TrainingCatContract {
    status: number;
    code: string;
    message: string;
    count: number;
    equipmentCat: TrainingCat[];
  }