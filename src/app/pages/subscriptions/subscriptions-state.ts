export interface TrainingCatState {
    errorCode?: string;
    errorMsg?: string;
    loading?: boolean;
    loadingMsg?: string;
    trainingCat: TrainingCat[];
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
  