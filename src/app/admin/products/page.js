import React from 'react'
import './admin.scss'
import Image from "next/image";
import Link from "next/link";
import ProductList from "@/app/admin/products/ProductList";



export default function Page() {
    return (
        <>
            <ProductList></ProductList>
        </>
    )
}
