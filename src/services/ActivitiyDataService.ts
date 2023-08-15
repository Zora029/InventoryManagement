import http from '../http-common';

class ActivityDataService {
    getRecent() {
        return http.get("/Activity/activities")
    }
}

export default new ActivityDataService();