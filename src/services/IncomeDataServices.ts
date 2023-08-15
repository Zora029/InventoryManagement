import http from '../http-common';
import { IAddIncomeData } from '../types';

class IncomeDataServices {
  getAll() {
    return http.get('/AllEntries');
  }
  create(data: IAddIncomeData) {
    return http.post('/ManyEntries', data);
  }
}

export default new IncomeDataServices();
