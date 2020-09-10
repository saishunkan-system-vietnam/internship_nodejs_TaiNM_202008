import http from "../http-common";

class DataService {
    getAirline() {
        return http.get("/findAllAirline");
    }
    
    getAirlineByID(id) {
        return http.get(`/findAirlineById/${id}`)
    }

    deteleAirline(id) {
        return http.delete(`/deleteAirline/${id}`)
    }

    updateAirline(id,data) {
        return http.put(`/updateAirline/${id}`,{data})
    }

    insertAirline(data) {
        return http.post('insertAirline', {data})
    }

    getSeat() {
        return http.get('/findAllSeat')
    }

    getSeatbyID(id) {
        return http.get(`/findSeatById/${id}`)
    }

    deleteSeat(id) {
        return http.delete(`/deleteSeat/${id}`)
    }

    updateSeat(id) {
        return http.put(`updateSeat/${id}`, {data})
    }

    
    insertSeat(data) {
        return http.post('insertSeat', {data})
    }

    insertCategory(data) {
        return this.post('insertCategory', {data})
    }

    //   get(id) {
    //     return http.get(`/tutorials/${id}`);
    //   }

    //   create(data) {
    //     return http.post("/tutorials", data);
    //   }

    //   update(id, data) {
    //     return http.put(`/tutorials/${id}`, data);
    //   }

    //   delete(id) {
    //     return http.delete(`/tutorials/${id}`);
    //   }

    //   deleteAll() {
    //     return http.delete(`/tutorials`);
    //   }

    //   findByTitle(title) {
    //     return http.get(`/tutorials?title=${title}`);
    //   }
}

export default new DataService();