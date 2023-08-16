import OverviewDataServices from './OverviewDataServices';

export const getMostOrderedProducts = async () => {
  try {
    const response = await OverviewDataServices.getMostOrderedProducts();
    return response.data;
  } catch (error) {
    console.error('Error when using getMostOrderedProducts : ', error);
    return [];
  }
};
export const getMostOrderedProductsThisMonth = async () => {
  try {
    const response =
      await OverviewDataServices.getMostOrderedProductsThisMonth();
    return response.data;
  } catch (error) {
    console.error('Error when using getMostOrderedProductsThisMonth : ', error);
    return [];
  }
};
export const getMostCommandedProductsThisMonth = async () => {
  try {
    const response =
      await OverviewDataServices.getMostCommandedProductsThisMonth();
    return response.data;
  } catch (error) {
    console.error(
      'Error when using getMostCommandedProductsThisMonth : ',
      error
    );
    return [];
  }
};
