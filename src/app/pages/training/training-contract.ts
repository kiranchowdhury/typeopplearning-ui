import { Equipment, EquipmentType } from "./training-state";

export interface TrainingContract {
  status: number;
  code: string;
  message: string;
  count: number;
  equipmentList: Equipment[];
}

export interface EquipmentTypeContract {
  status: number;
  code: string;
  message: string;
  count: number;
  equipmentType: EquipmentType[];
} 
 
export interface EquipmentTypeRes {
  equipmentCat : string;
}