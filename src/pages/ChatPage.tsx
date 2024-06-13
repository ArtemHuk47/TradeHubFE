import Search from "../components/search/Search";
import CarouselBlock from "../components/carousel/Carousel";
import ProductName from "../components/product-name/ProductName";
import ProductDescription from "../components/product-description/ProductDescription";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {fetchProductById, fetchProductImages} from "../api/productApi";
import {Category, Product} from "../models/models";
import {fetchCategoryById} from "../api/categoryApi";
import ProductCartItem from "../components/product/ProductCartItem";
import MessageList from "../components/MessageList";
import ChatInput from "../components/ChatInput";
import ChatInfo from "../components/ChatInfo";
import api from "../api/api";


function ChatPage() {

    const chatId = 3;
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null); // Define the state based on your product structure
    const [images, setImages] = useState<string[] | null>(null);

    useEffect(() => {
        const getCategory = async () => {
            if (id) {
                const productId = Number(id)
                const p = await fetchProductById(productId);
                setProduct(p);
                console.log('s', product?.id)
                if(p?.id){
                    const imgs = await fetchProductImages(p.id);
                    if (imgs) {
                        if(!images){
                            setImages(imgs);
                            console.log(imgs)
                        }

                    }
                }

            }
        };
        getCategory();

    }, [id, images]);
    const userId = Number(localStorage.getItem('userId'));
    console.log(images)

    return (
        <div className="chat-page">

            <div className="chat-left">
                <ChatInfo/>
            </div>

            <div className="chat-right">
                <MessageList chatId={chatId}/>
                <ChatInput chatId={chatId} userId={userId}/>
            </div>


        </div>
    );
}

export default ChatPage;