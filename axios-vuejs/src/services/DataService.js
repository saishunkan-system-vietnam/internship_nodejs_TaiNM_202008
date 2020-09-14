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
        return http.post('/insertAirline', {data})
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

    updateSeat(id, data) {
        return http.put(`/updateSeat/${id}`, {data})
    }

    insertSeat(data) {
        return http.post('/insertSeat', {data})
    }

    insertCategory(data) {
        return http.post('/insertCategory', {data})
    }

    getCategory() {
        return http.get('/findAllSeatByAirline')
    }

    deleteCategory(alID, sID) {
        return http.delete(`/deleteCategory/${alID}/${sID}`)
    }

}

export default new DataService();