import http from '../http-common';
import ProductTypes from '../types/ProductTypes';

class ProductDataService {
  getAll() {
    return http.get("/Product");
  }

  get(id: any) {
    return http.get(`/Product/${id}/`);
  }

  create(data: any) {
    return http.post("/Product", data);
  }

  update(id: any, data: ProductTypes) {
    return http.put(`/Product/${id}/`, data);
  }

  delete(id: any) {
    return http.delete(`/Product/${id}`);
  }
}

export default new ProductDataService();
