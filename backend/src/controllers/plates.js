import { ok, serverError } from "../helpers/httpResponse.js"
import PlatesService from "../services/plates.js";

export default class PlatesController {
    constructor() {
        this.service = new PlatesService();
    }

    async getPlates() {
        try {
            const plates = await this.service.getPlates();
            return ok(plates);
        } catch (error){
            return serverError(error);
        }
    }

    async getAvailablePlates() {
        try {
            const plates = await this.service.getAvailablePlates();
            return ok(plates);
        } catch (error){
            return serverError(error);
        }
    }

    async addPlate(plateData) {
        try {
            const result = await this.service.addPlate(plateData);
            return ok(result);
        } catch (error){
            return serverError(error);
        }
    }

    async deletePlate(plateId) {
        try {
            const result = await this.service.deletePlate(plateId);
            return ok(result);
        } catch (error){
            return serverError(error);
        }
    }

    async updatePlate(plateID, plateData) {
        try {
            const result = await this.service.updatePlate(plateID, plateData);
            return ok(result);
        } catch (error){
            return serverError(error);
        }
    }
}