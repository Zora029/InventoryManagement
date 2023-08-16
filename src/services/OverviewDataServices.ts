import http from '../http-common';
class OverviewDataServices {
  getMostOrderedProducts() {
    return http.get('/MostOrderedProducts');
  }
  getMostOrderedProductsThisMonth() {
    return http.get('/MostOrderedProducts/CurrentMonth');
  }
  getMostCommandedProductsThisMonth() {
    return http.get('/MostCommandedProduct/CurrentMonth');
  }
}

export default new OverviewDataServices();
