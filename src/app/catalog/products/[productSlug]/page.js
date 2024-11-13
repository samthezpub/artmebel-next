import React from 'react'
import './products.scss'
import Image from "next/image";
import ProductImageSlider from "../../../../Components/ProductImageSlider";
import {BASE_URL} from "../../../../config";
import SimilarProducts from "./SimilarProducts";
import FavouriteProductSlug from "../../../../Components/FavouriteProductSlug";
import CartProductSlug from "../../../../Components/CartProductSlug";
import { redirect } from 'next/navigation'
import Link from "next/link";

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const productSlug = (await params).productSlug
    console.log("Категорислюг:" + productSlug)

    // fetch data
    const product = await fetch(`${BASE_URL}/api/v1/catalog/get/${productSlug}`).then(response => {return response.json();});


    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: `${product.titleSEO}`,
        description: `${product.descriptionSEO}`,
        keywords: `${product.keywords}`,
    }
}

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
            redirect("/404")
            console.error("Ошибка при получении данных продукта:", error);
            return null;
        }
    }




    let product = await getProduct();
    let category = product.category;

    return (
        <>
            <div id="products">
                <div className="map">
                    <Link href={"/"}>Главная</Link>/<Link href={"/catalog"}>Каталог</Link>/<Link
                    href={`/catalog/${category.slug}`} >{category.name}</Link>/<span className="active">{product.name}</span>
                </div>
                <div className="mainContainer">

                    <div className="container">
                        <div className="carousel">
                            <ProductImageSlider productSlug={product.slug}
                                                imagesCount={product.photosCount}></ProductImageSlider>
                        </div>
                        <div className="text">
                            <div className="firstLine">
                                <h1>{product.name}</h1>
                                <div className="noneMobile">
                                <FavouriteProductSlug productID={product.id}></FavouriteProductSlug>
                                </div>
                            </div>
                            <p>{product.description}</p>
                            <div className="price">
                                <h1>{product.price} ₽</h1>
                                <Image src="/products/Line.png" height="4" width="500" alt="/"/>
                                <div className="forMobile">
                                    <CartProductSlug productID={product.id}></CartProductSlug>
                                    <div className="nonePC">
                                        <FavouriteProductSlug productID={product.id}
                                                              className="OnMobile"></FavouriteProductSlug>
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="similar-products">
                        <SimilarProducts categoryId={category.id} currentProductId={product.id}></SimilarProducts>
                    </div>
                </div>
            </div>
        </>
    )
}
