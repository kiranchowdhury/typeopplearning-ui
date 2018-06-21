export interface TrainingCatState {
    errorCode?: string;
    errorMsg?: string;
    loading?: boolean;
    loadingMsg?: string;
    trainingCat: TrainingCat[];
    equipmentType : EquipmentType[];
    equipmentData : EquipmentData[];
    invoiceList ?: Invoice[];
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
  
  export interface Invoice {
    id: string;
    invoiceNumber: number;
    invoiceDate: Date ;
    invoiceTotal: number;
    dueDate : Date;
    status : string;
  }