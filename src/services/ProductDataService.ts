import http from '../http-common';

class ProductDataService {
  getAll() {
    return http.get("/location/");
  }

  get(id: number) {
    return http.get(`/location/${id}`);
  }

  create(data: any) {
    return http.post("/location/create/", data);
  }

  update(id: number, data: any) {
    return http.put(`/location/${id}/`, data);
  }

  delete(id: number) {
    return http.delete(`/location/${id}`);
  }
}

export default new ProductDataService();
