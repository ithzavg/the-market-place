import React from 'react';
import '../sass/pages/_Product.scss';
import ProductDescription from '../components/ProductDescription';
import RelatedProducts from '../components/RelatedProducts';
import PurchaseModal from '../components/PurchaseModal';
import FullNavbar from '../components/FullNavbar';

function Product() {
    return(
        <>
        <FullNavbar/>
        <main className="product">
                <ProductDescription />
                <RelatedProducts />
                <PurchaseModal/>
        </main>
        </>
    ) 
    
}

export default Product;