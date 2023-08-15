import http from '../http-common';

// stat for every month

class IncomeOutComeDataService {
    get() {
        return http.get("/StatMonth");
    }
}

export default new IncomeOutComeDataService();