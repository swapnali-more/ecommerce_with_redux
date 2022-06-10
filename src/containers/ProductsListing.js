import React, { useEffect } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/ProductActions"

export const ProductsListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products').catch(
      (err) => {
        console.log("Error", err)
      }
    )
    dispatch(setProducts(res.data))
  }

  console.log(products)

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <ProductComponent />
  )
}
