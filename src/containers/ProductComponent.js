import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box, Container } from '@mui/system';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { LoaderCom } from './LoaderCom';

export default function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products)
  return (
    <Box mt={3} mb={3}>
      <Container>
      {Object.keys(products).length === 0 ? (
        <LoaderCom />
      ) : (
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {products.map((e) => {
            return (
              <Grid item xs={3} key={e.id}>
                <Card style={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={e.image}
                    alt={e.title}
                    style={{ objectFit: "contain", borderBottom: "1px solid #e0e0e0", padding: "15px 0" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h5"
                      style={{ color: "#002984", fontSize: "1rem", fontWeight: "600" }}
                    >
                      {e.title}
                    </Typography>
                    <Typography color="text.secondary">{e.category}</Typography>
                    <Typography variant="h6" color="text.primary" mb={2}
                      style={{ color: "#ba000d", fontSize: "1rem", fontWeight: "600" }}>
                      $ {e.price}
                    </Typography>

                    <Link 
                    style={{padding: "10px 20px", backgroundColor: "#757de8", color: "#fff", textDecoration: "none",
                    fontWeight: "600", borderRadius: "5px"}} 
                    to={`/products/${e.id}`}>Show Details</Link>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}

        </Grid>
      )}
      </Container>
    </Box>
  );
}
