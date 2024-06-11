import {CreateProductDto, Product, ProductImageResponse, ProductSearchDto} from "../models/models";
import api from "./api";
import axios, { AxiosResponse } from "axios";


export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await api.get<Product[]>('/Product');
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;  // Rethrowing the error or handling it as needed
    }
}
export const fetchProductById = async (id: number): Promise<Product> => {
    try {
        const response = await api.get<Product>(`/Product/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;  // Rethrowing the error or handling it as needed
    }
}

export const createProduct = async (productDto: CreateProductDto): Promise<Product> => {
    try {
        const response = await api.post<Product>('/Product', productDto); // Pass productDto in the POST request
        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;  // Rethrowing the error as needed
    }
}

export const searchProducts = async (searchParams: ProductSearchDto): Promise<Product[]> => {
    try {
        // Construct the query string from searchParams
        const queryParams = new URLSearchParams();
        if (searchParams.searchTerm) queryParams.append('searchTerm', searchParams.searchTerm);
        if (searchParams.categoryId !== undefined) queryParams.append('categoryId', searchParams.categoryId.toString());
        if (searchParams.minPrice !== undefined) queryParams.append('minPrice', searchParams.minPrice.toString());
        if (searchParams.maxPrice !== undefined) queryParams.append('maxPrice', searchParams.maxPrice.toString());
        if (searchParams.condition) queryParams.append('condition', searchParams.condition);

        // Append the query string to the URL
        const response = await api.get<Product[]>(`/Product/search?${queryParams.toString()}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;  // Rethrowing the error as needed
    }
}


// Assuming axios is set up correctly in your project
export const uploadProductImages = async (productId: number, files: File[]): Promise<ProductImageResponse[]> => {
    const formData = new FormData();
    files.forEach(file => formData.append('files', file));

    try {
        const response: AxiosResponse<ProductImageResponse[]> = await axios.post(`http://localhost:5292/api/Product/${productId}/images`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error: any) {
        console.error('Error uploading product images:', error);
        throw error;  // Rethrowing the error as needed
    }
};

export const fetchProductImages = async (productId: number): Promise<string[]> => {
    try {
        const response = await api.get<string[]>(`Product/${productId}/images`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product images:', error);
        throw error;  // Rethrowing the error as needed
    }
}