import {CartItemDto, UserDto} from "../models/models";
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

export const getUserById = async (id: number): Promise<UserDto> => {
    try {
        const response = await api.get<UserDto>(`/User/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching current user:', error);
        throw error;  // Rethrowing the error as needed
    }
}

export const fetchCartItemsByUserId = async (userId: number):Promise<CartItemDto[]> => {
    const response = await api.get<CartItemDto[]>(`Cart/GetCartItems/${userId}`);
    return response.data;
};

export const fetchCartPriceItemsByUserId = async (userId: number):Promise<number> => {
    const response = await api.get<number>(`Cart/price/${userId}`);
    return response.data;
};
