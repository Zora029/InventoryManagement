import http from '../http-common';
import { IAddOutcomeData } from '../types';

class OutcomeDataServices {
  getAll() {
    return http.get('/AllSorties');
  }
  create(data: IAddOutcomeData) {
    return http.post('/ManySorties', data);
  }
}

export default new OutcomeDataServices();
