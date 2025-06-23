import UserService from "../services/users.js";
import { ok, serverError } from "../helpers/httpResponse.js"

export default class UsersController {
    constructor() {
        this.service = new UserService();
    }

    async getUsers() {
        try {
            const users = await this.service.getUsers();
            return ok(users);
        } catch (error){
            return serverError(error);
        }
    }

    async deleteUser(userId) {
        try {
            const result = await this.service.deleteUser(userId);
            return ok(result);
        } catch (error){
            return serverError(error);
        }
    }

    async updateUser(userID, userData) {
        try {
            const result = await this.service.updateUser(userID, userData);
            return ok(result);
        } catch (error){
            return serverError(error);
        }
    }
}