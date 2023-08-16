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
export interface IconfirmModalBoxDeleteProps {
  setisOpen: (isOpen: boolean) => void;
  onConfirm: (num_produit: string) => void;
  num_produit: string;
}

// ***************** OVERVIEW **********************
export interface ImostRequestedProduct {
  num_produit: string;
  product_name: string;
  ordered_quantity: number;
}
export interface ImostRequestedProductThisMonth {
  product_name: string;
  ordered_quantity: number;
}
export interface ImostCommandedProductsThisMonth {
  product_name: string;
  commanded_quantity: number;
}

// ****************** Product Card*********************

export interface IProductCardProps {
  num_produit: string;
  design: string;
  quantite: number;
  description: string;
  image: string;
  onReload: () => void;
}

// ****************** Product Table*********************

export interface IProductTableProps {
  products : ProductTypes[];
  onReload: () => void;
}