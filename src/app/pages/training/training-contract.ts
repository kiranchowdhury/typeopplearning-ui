import { Equipment, EquipmentType, EquipmentData, EquipmentDetail } from "./training-state";

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

export interface EquipmentDataContract {
  status: number;
  code: string;
  message: string;
  count: number;
  equipmentData: EquipmentData[];
} 
 
export interface EquipmentTypeRes {
  equipmentCat : string;
}

export interface EquipmentTypeIdRequest {
  equipmentId : string;
  equipmentType: string;
}

export interface EquipmentDetailReq {
  equipmentId : string;
}

export interface EquipmentDetailContract{
  status: number;
  code: string;
  message: string;
  count: number;
  equipmentDetail: EquipmentDetail[];
}
