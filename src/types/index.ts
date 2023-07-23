export interface IincomeTableData {
  NumBonLiv: string;
  DateE: string;
  NomFournisseur: string;
  NumProduit: string;
  Design: string;
  QtStk: number;
}
export interface IincomeTableProps {
  headers: string[];
  data: IincomeTableData[];
}
export interface IincomeFormProps {
  currentIncomeTableData:IincomeTableData[];
  onSubmit: (newIncomeTableData: IincomeTableData[]) => void;
}

export interface IAddFluxProducts {
  NumProduit: string;
  Design: string;
  QtStk: number;
}
export interface IaddIncomeData {
  NumBonLiv: string;
  DateE: string;
  NomFournisseur: string;
  products: IAddFluxProducts[];
}

export interface IAddFluxProducts {
  NumProduit: string;
  Design: string;
  QtStk: number;
  [key: string]: string | number;
}

export interface IProductInputSelect {
  NumProduit: string;
  Design: string;
}

export interface IProductInputData {
  NumProduit: string;
  QtStk: number;
}

export interface IProductInputProps {
  selectedProduct: IProductInputData;
  availableProducts: IProductInputSelect[];
  index: number;
  onChange: (index: number, selectedProduct: IProductInputData) => void;
  onRemove: (index: number) => void;
}

export interface IoutcomeTableData {
  NumFacture: string;
  DateS: string;
  NomClient: string;
  NumProduit: string;
  Design: string;
  QtStk: number;
}
export interface IoutcomeTableProps {
  headers: string[];
  data: IoutcomeTableData[];
}
export interface IAddOutcomeData {
  NumFacture: string;
  DateS: string;
  NomClient: string;
  products: IProductInputData[];
}