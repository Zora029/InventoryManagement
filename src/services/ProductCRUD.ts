import ProductDataService from "./ProductDataService";
import ProductTypes from "../types/ProductTypes";

export const getAllResources = async () => {
    try {
      const response = await ProductDataService.getAll();
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des ressources:', error);
      return []; // Retourne une liste vide en cas d'erreur
    }
};

export const getElement = async (resourceId: string) => {
    try {
      const response = await ProductDataService.get(resourceId);
      return response.data;
    } catch(error) {
      console.log("Get Product " + error);
      return null;

    }
}

// Fonction pour créer une nouvelle ressource
export const createResource = async (newResourceData:any) => {
    try {
      const response = await ProductDataService.create(newResourceData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création de la ressource:', error);
      return null; // Retourne null en cas d'erreur
    }
};

// Fonction pour mettre à jour une ressource existante
export const updateResource = async (resourceId:any, updatedResourceData:ProductTypes) => {
    try {
      const response = await ProductDataService.update(resourceId, updatedResourceData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la ressource:', error);
      return null; // Retourne null en cas d'erreur
    }
};


export const deleteResource = async (resourceId:any) => {
  try {
    await ProductDataService.delete(resourceId);
    return true; // Retourne true si la suppression a réussi
  } catch (error) {
    console.error('Erreur lors de la suppression de la ressource:', error);
    return false; // Retourne false en cas d'erreur
  }
};