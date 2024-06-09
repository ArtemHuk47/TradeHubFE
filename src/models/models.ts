export interface Product{
    id : number,
    name: string,
    description: string,
    price: number,
    quantity: number,
    condition: Condition,
    categoryId: number,
}

export enum Condition {
    New ,
    Unused,
    Used,
}

export interface Category{
    id: number,
    name: string,
    description: string,
}

export interface CreateProductDto
{
    name: string,
    description: string,
    price: number,
    quantity: number,
    condition: Condition,
    sellerId: number,
    categoryId: number,
}

export interface UserDto
{
    id: number,
    userName: string,
    email: string,
    firstName: string,
    lastName: string,
    rating: number,
    imageUrl: string,
}

export interface ProductImageResponse {
    imageUrl: string;
    id: number;
    // Include other relevant properties based on your actual API response
}

export interface ProductImageResponse {
    imageUrl: string;
}