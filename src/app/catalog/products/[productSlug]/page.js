import React from 'react'
import './products.scss'
import Image from "next/image";
import ProductImageSlider from "../../../../Components/ProductImageSlider";
import {BASE_URL} from "../../../../../config";
import SimilarProducts from "./SimilarProducts";


export default async function Page({params}) {

    const slug = params.productSlug;


    async function getProduct() {
        console.log(slug)
        try {
            let response = await fetch(`${BASE_URL}/api/v1/catalog/get/${slug}`);
            if (!response.ok) {
                throw new Error(`Ошибка сети: ${response.status}`);
            }
            let result = await response.json();
            console.log(result);
            return result;
        } catch (error) {
            console.error("Ошибка при получении данных продукта:", error);
            return null;
        }
    }




    let product = await getProduct();
    let category = product.category;

    return (
        <>
            <div id="products">
                <div className="mainContainer">
                    <div className="container">
                        <div className="carousel">
                            <ProductImageSlider productId={product.id} imagesCount={product.photosCount}></ProductImageSlider>
                        </div>
                        <div className="text">
                            <div className="firstLine">
                                <h1>{product.name}</h1>
                                <Image src="/products/heart.png" className="favorite" width="40" height="40"
                                       alt="favorite"/>
                            </div>
                            <p>{product.description}</p>
                            <div className="price">
                                <h1>{product.price} ₽</h1>
                                <Image src="/products/Line.png" height="4" width="500" alt="/"/>
                                <Image src="/products/shoppingCart.png" width="67" height="44" alt="shoppingCart"
                                       className="shoppingCart"/>
                            </div>
                        </div>
                    </div>

                    <div className="similar-products">
                        <SimilarProducts category_id={category.id} currentProductId={product.id}></SimilarProducts>
                    </div>
                </div>
            </div>
        </>
    )
}
