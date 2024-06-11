import React, {ChangeEvent, useEffect, useState} from 'react';
import "../components/add-image/AddImage.css";
import "../components/add-info/AddInfo.css"
import {Category, Condition, CreateProductDto, Product} from "../models/models";
import {createProduct, uploadProductImages} from "../api/productApi";
import {fetchCategories} from "../api/categoryApi";

function AddPage() {
    const [images, setImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [condition, setCondition] = useState<number | ''>('');
    const [categoryId, setCategoryId] = useState('');
    const [sellerId, setSellerId] = useState<number | null>(null);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        fetchCategories().then(setCategories).catch(console.error);
        // Fetch current user
        const userId = Number(localStorage.getItem('userId'));
        setSellerId(userId)

    }, []);
    function getEnumKeys(e: any): string[] {
        return Object.keys(e).filter(key => isNaN(Number(key)));
    }
    const handleSubmit = async () => {

        if (!sellerId || condition === '') {
            console.error('Required information not set.');
            return;
        }

        const productDto: CreateProductDto = {
            name,
            description,
            price: Number(price),
            quantity: Number(quantity),
            condition: Number(condition),
            sellerId: sellerId,
            categoryId: Number(categoryId),
        };
        try {
            const newProduct = await createProduct(productDto);
            console.log(newProduct.id)
            console.log('Product created:', newProduct);
            if (images.length > 0) {
                await uploadProductImages(newProduct.id, images);
                console.log('Images uploaded successfully');
            }
        } catch (error) {
            console.error('Failed to create product or upload images:', error);
        }
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files ? Array.from(event.target.files) : [];
        setImages(fileList);

        const filePreviews = fileList.map(file => URL.createObjectURL(file));
        setImagePreviews(filePreviews);
    };

    const handleRemoveImage = (index: number) => {
        setImages(prev => prev.filter((_, i) => i !== index));
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="add-page">
            <div className="add-image">
                <label htmlFor="file-upload" className="custom-file-upload">+</label>
                <input id="file-upload" type="file" multiple onChange={handleFileChange}/>
                <div className="image-preview-container">
                    {imagePreviews.map((image, index) => (
                        <div key={index} className="image-container">
                            <img src={image} alt={`Uploaded ${index}`}/>
                            <button onClick={() => handleRemoveImage(index)} className="remove-image-button">Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="add-info">
                {/* Input for product name */}
                <div className="info-input">
                    <p>Назва товару</p>
                    <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                </div>

                {/* Category selection */}
                <div className="info-input">
                    <p>Вибір категорії</p>
                    <select value={categoryId} onChange={e => setCategoryId(e.target.value)}>
                        <option value="">Виберіть потрібну категорію</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>

                {/* Product condition */}
                <div className="info-input">
                    <p>Стан товару</p>
                    <select value={condition} onChange={e => setCondition(Number(e.target.value))}>
                        <option value="">Виберіть стан товару</option>
                        {Object.entries(Condition).filter(([key, value]) => !isNaN(Number(value))).map(([key, value]) => (
                            <option key={key} value={value}>{key}</option>
                        ))}
                    </select>
                </div>

                {/* Price and Quantity */}
                <div className="info-block">
                    <div className="info-price">
                        <div className="price-input">
                            <p>Ціна товару</p>
                            <input type="text" value={price} onChange={e => setPrice(e.target.value)}/>
                        </div>
                        <p className="price-button">Визначити ціну</p>
                    </div>
                    <div className="info-amount">
                        <p>Кількість товару</p>
                        <input type="text" value={quantity} onChange={e => setQuantity(e.target.value)}/>
                    </div>
                </div>

                {/* Description */}
                <div className="info-input">
                    <p>Опис</p>
                    <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
                </div>

                {/* Submit Button */}
                <button onClick={handleSubmit} className="submit-button">Додати товар</button>
            </div>
        </div>
    );
}

export default AddPage;


