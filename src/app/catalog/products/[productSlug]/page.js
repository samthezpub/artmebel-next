import React from 'react'
import './products.scss'
import Image from "next/image";
import ProductImageSlider from "../../../../Components/ProductImageSlider";


export default function Page() {
    return (
        <>
            <div id="products">
                <div className="mainContainer">
                    <div className="container">
                        <div className="carousel">
                            <ProductImageSlider productId={1} imagesCount={2}></ProductImageSlider>
                        </div>
                        <div className="text">
                            <div className="firstLine">
                                <h1>Черный квадрат</h1>
                                <Image src="/products/heart.png" className="favorite" width="40" height="40"
                                       alt="favorite"/>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus
                                ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis
                                rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat
                                feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec
                                ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. Nulla
                                faucibus mi at nunc mattis placerat. Pellentesque quis augue quis elit tristique auctor.
                                Integer varius est orci, vel egestas felis dictum nec. Phasellus porta ex sit amet
                                turpis finibus, sed vestibulum nisl efficitur. Praesent ultrices diam enim. In ut tellus
                                sed sem placerat sollicitudin. Donec quis mollis dolor. Etiam viverra, arcu cursus
                                porttitor porttitor, diam nunc auctor nisl, quis placerat magna erat et odio. Phasellus
                                feugiat turpis quis mollis lacinia. Sed ac orci et nisi venenatis pharetra ac non
                                arcu.</p>
                            <div className="price">
                                <h1>100₽</h1>
                                <Image src="/products/Line.png" height="4" width="500" alt="/"/>
                                <Image src="/products/shoppingCart.png" width="67" height="44" alt="shoppingCart"
                                       className="shoppingCart"/>
                            </div>
                        </div>
                    </div>

                    <div className="similar-products">

                    </div>
                </div>
            </div>
        </>
    )
}
