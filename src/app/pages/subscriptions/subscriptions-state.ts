export interface TrainingCatState {
    errorCode?: string;
    errorMsg?: string;
    loading?: boolean;
    loadingMsg?: string;
    trainingCat: TrainingCat[];
    equipmentType : EquipmentType[];
    equipmentData : EquipmentData[];
    count: number;
    currentPage: number;
  
  }
  
  export interface TrainingCat {
    id: string;
    trainingName: string;
    equipment: string;
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
  
  