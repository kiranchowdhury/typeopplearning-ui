import { Equipment } from "./training-state";

export interface TrainingContract {
  status: number;
  code: string;
  message: string;
  count: number;
  equipmentList: Equipment[];
}

