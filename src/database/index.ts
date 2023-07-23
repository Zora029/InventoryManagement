import { IincomeTableData, IProductInputSelect, IoutcomeTableData } from "../types";

export const incomeTableData:IincomeTableData[]= [
  {
    NumBonLiv: 'B001',
    DateE: '2023-02-02',
    NomFournisseur: 'Ralay',
    NumProduit: 'P001',
    Design: 'Lenovo G580',
    QtStk: 69,
  },
  {
    NumBonLiv: 'B001',
    DateE: '2023-02-02',
    NomFournisseur: 'Ralay',
    NumProduit: 'P002',
    Design: 'Dell Latitude',
    QtStk: 50,
  },
  {
    NumBonLiv: 'B001',
    DateE: '2023-02-02',
    NomFournisseur: 'Ralay',
    NumProduit: 'P003',
    Design: 'HP Probook',
    QtStk: 22,
  }
]

export const outcomeTableData:IoutcomeTableData[]= [
  {
    NumFacture: 'F001',
    DateS: '2023-02-02',
    NomClient: 'Dezy',
    NumProduit: 'P001',
    Design: 'Lenovo G580',
    QtStk: 29,
  },
  {
    NumFacture: 'F002',
    DateS: '2023-02-02',
    NomClient: 'MazavaLoha',
    NumProduit: 'P003',
    Design: 'HP Probook',
    QtStk: 29,
  },
  {
    NumFacture: 'F001',
    DateS: '2023-02-02',
    NomClient: 'Dezy',
    NumProduit: 'P001',
    Design: 'Lenovo G580',
    QtStk: 29,
  },
]

export const productOptions:IProductInputSelect[] = [
  {
    NumProduit: '',
    Design: ''
  },
  {
    NumProduit: 'P001',
    Design: 'Lenovo G580'
  },
  {
    NumProduit: 'P002',
    Design: 'Dell Latitude'
  },
  {
    NumProduit: 'P003',
    Design: 'HP Probook'
  },
]