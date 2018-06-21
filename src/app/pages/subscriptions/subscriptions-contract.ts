import{TrainingCat, EquipmentType, EquipmentData, Invoice } from './subscriptions-state'

export interface TrainingCatContract {
    status: number;
    code: string;
    message: string;
    count: number;
    equipmentCat: TrainingCat[];
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

  export interface InvoiceContract {
    status: number;
    code: string;
    message: string;
    count: number;
    invoiceList: Invoice[];
  } 