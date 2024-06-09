import {UserDto} from "../models/models";
import api from "./api";


export const getCurrentUser = async (): Promise<UserDto> => {
    try {
        const response = await api.get<UserDto>('/User/me');
        return response.data;
    } catch (error) {
        console.error('Error fetching current user:', error);
        throw error;  // Rethrowing the error as needed
    }
}