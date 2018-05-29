export interface EquipmentCatState {
    errorCode?: string;
    errorMsg?: string;
    loading?: boolean;
    loadingMsg?: string;
    equipmentCat: EquipmentCat[];
    count: number;
    currentPage: number;
  
  }
  
  export interface EquipmentCat {
    id: string;
    trainingName: string;
    equipment: string ;
    date : Date;
   
  }
  