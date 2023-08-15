import ProductTypes from './ProductTypes';

export interface IProductInputData {
  num_produit: string;
  qt: number;
}
// ***************** INCOME **********************
export interface IincomeTableData {
  num_bon_liv: string;
  dateEntree: string;
  nom_fournisseur: string;
  num_produit: string;
  design: string;
  quantite_entree: number;
}
export interface IAddIncomeData {
  num_bon_liv: string;
  DateEntree: string;
  nom_fournisseur: string;
  products: IProductInputData[];
}
export interface IincomeTableProps {
  headers: string[];
  data: IincomeTableData[];
}
export interface IincomeFormProps {
  num_bon_livList: string[];
  onSubmitForm: (formData: IAddIncomeData) => void;
}

// ***************** PRODUCT INPUT SELECT **********************
export interface IProductInputSelect {
  num_produit: string;
  design: string;
}

export interface IProductInputProps {
  useMax?: boolean;
  selectedProduct: IProductInputData;
  availableProducts: ProductTypes[];
  index: number;
  onChange: (index: number, selectedProduct: IProductInputData) => void;
  onRemove: (index: number) => void;
}

// ***************** OUTCOME **********************
export interface IoutcomeTableData {
  num_facture: string;
  dateSortie: string;
  nom_client: string;
  num_produit: string;
  design: string;
  quantite_sortie: number;
}
export interface IoutcomeTableProps {
  headers: string[];
  data: IoutcomeTableData[];
}
export interface IAddOutcomeData {
  num_facture: string;
  DateSortie: string;
  nom_cli: string;
  products: IProductInputData[];
}
export interface IoutcomeFormProps {
  num_factureList: string[];
  onSubmitForm: (formData: IAddOutcomeData) => void;
}

// ***************** MODALS **********************
export interface ImodalBoxProps {
  setisOpen: (isOpen: boolean) => void;
}
export interface IconfirmModalBoxProps {
  setisOpen: (isOpen: boolean) => void;
  onConfirm: () => void;
}
