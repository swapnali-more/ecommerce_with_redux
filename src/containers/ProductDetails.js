import { Box, Container, Grid, Typography } from '@mui/material';
import axios from 'axios'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProducts, removeProducts } from "../redux/actions/ProductActions"
import { LoaderCom } from './LoaderCom';

const ProductDetails = () => {
    const { productId } = useParams();
    const productDetail = useSelector((state) => state.selectedProduct)
    const dispatch = useDispatch()

    const fetchDetails = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log("Error", err)
            })

        dispatch(selectedProducts(res.data))
    }

    useEffect(() => {
        if(productId && productId !== '') fetchDetails();
        return () => {
            dispatch(removeProducts())
        }
    }, [productId])

    console.log(productDetail)
    return (
        <Box mt={3} mb={3}>
            <Container>
            {Object.keys(productDetail).length === 0 ? (
        <LoaderCom />
      ) : (
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
                display="flex" alignItems="center">
                    <Grid item xs={4}>
                        <img src={productDetail.image} alt={productDetail.title} 
                        style={{width: "100%", objectFit: "contain"}}/>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={7}>
                        <Typography gutterBottom variant="h5" component="h5"
                            style={{ color: "#002984", fontSize: "2rem", fontWeight: "600" }}
                        >
                            {productDetail.title}
                        </Typography>
                        <Typography>{productDetail.description}</Typography>
                        <Typography color="text.secondary">{productDetail.category}</Typography>
                        <Typography variant="h6" color="text.primary" mb={2}
                            style={{ color: "#ba000d", fontSize: "3rem", fontWeight: "600" }}>
                            $ {productDetail.price}</Typography>
                    </Grid>
                </Grid>
                )}
            </Container>
        </Box>
    )
}

export default ProductDetails
