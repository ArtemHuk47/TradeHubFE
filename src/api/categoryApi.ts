import {Category} from "../models/models";
import api from "./api";


export const fetchCategoryById= async (id: number): Promise<Category> => {
    try {
        const response = await api.get<Category>(`/Category/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;  // Rethrowing the error or handling it as needed
    }
}

export const fetchCategories= async (): Promise<Category[]> => {
    try {
        const response = await api.get<Category[]>(`/Category`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;  // Rethrowing the error or handling it as needed
    }
}