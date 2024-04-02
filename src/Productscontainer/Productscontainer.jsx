import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import './Productscontainer.css'
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter } from '../Redux/Toggle';
import { addproducts } from '../Redux/Products';
import Products from '../Products/Products'
function Productscontainer() {
const dispatch = useDispatch();
const ProductsData = useSelector(state=>state.products)

//fetching products data
useEffect(()=>{
  async  function fetchProducts(){
    dispatch(toggleFilter("toggleloading"))
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch(addproducts(response.data))

      } catch (error) {
        console.error('Error fetching products:', error);
      }finally{
        dispatch(toggleFilter("toggleloading"))
      }
      
    }
fetchProducts()
},[]);
  return (
    <div className='Productscontainer'>
        {
            ProductsData.length > 0  ? (
           ProductsData.map((product,index)=>
          <Products product= {product} key= {index}/>
            )  ) : (
              <div className='NPA'>No products found</div>
            )
        }
    </div>
  )
}

export default Productscontainer