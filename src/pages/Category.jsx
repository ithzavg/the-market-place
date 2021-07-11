import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import '../sass/pages/_ProductList.scss';
import CategoryProductList from '../components/CategoryProductList';
import SideFilter from '../components/SideFilter';
import FullNavbar from '../components/FullNavbar';
import PurchaseModal from '../components/PurchaseModal';

function Category () {
    
    const { cat } = useParams();
    const [products, setProducts] = useState([]);

    useEffect (()=>{
        getCategoryProducts(cat)
    },[cat])

    function getCategoryProducts (filter) {
        fetch('/mockAPI/categoryProducts.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            let capitalizedCat = filter.charAt(0).toUpperCase() + filter.slice(1);
            let filtered = data.filter( element => element.category === capitalizedCat);
            setProducts(filtered);
        })
    }

    return (
        <>
        <FullNavbar/>
        <main className="category grid">
            <SideFilter title={cat}/>
            <div id="separator" className="category__separator"/>
            <CategoryProductList products={products} btn_text_1="View" btn_text_2="Buy"/>
            <PurchaseModal />
        </main>
        </>
    )  
};

export default Category;