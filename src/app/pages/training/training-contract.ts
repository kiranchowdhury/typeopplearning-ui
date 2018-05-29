import { EquipmentCat } from './training-state'

export interface EquipmentContract {
    status: number;
    code: string;
    message: string;
    count: number;
    equipmentCat: EquipmentCat[];
  }