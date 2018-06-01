export interface TrainingState {
  errorCode?: string;
  errorMsg?: string;
  loading?: boolean;
  loadingMsg?: string;
  equipmentList? : Equipment[];
  equipmentType? : EquipmentType[];
  equipmentData? : EquipmentData[];
  count: number;
  currentPage: number;
}

export interface Equipment {
  id?: string;
  name: string;
  details?: string;
  icon?: string;
  url : string;
}

export interface EquipmentType{
  id: string;
  equipmentType: string;
}

export interface EquipmentData{
  id: string;
  equipmentName: string;
  url: string;
}
