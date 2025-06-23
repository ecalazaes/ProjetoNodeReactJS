import { ok, serverError } from "../helpers/httpResponse.js"
import OrdersService from "../services/orders.js";

export default class OrdersController {
    constructor() {
        this.service = new OrdersService();
    }

    async getOrders() {
        try {
            const orders = await this.service.getOrders();
            return ok(orders);
        } catch (error){
            return serverError(error);
        }
    }

    async addOrder(orderData) {
        try {
            const result = await this.service.addOrder(orderData);
            return ok(result);
        } catch (error){
            return serverError(error);
        }
    }

    async deleteOrder(orderId) {
        try {
            const result = await this.service.deleteOrder(orderId);
            return ok(result);
        } catch (error){
            return serverError(error);
        }
    }

    async updateOrder(orderID, orderData) {
        try {
            const result = await this.service.updateOrder(orderID, orderData);
            return ok(result);
        } catch (error){
            return serverError(error);
        }
    }
}