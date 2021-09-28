import React from "react";
import { Grid } from "@material-ui/core";
import Product from './product/products';
import useStyles from './styles';
const products = [
    {id:1,  name:'Cup',description:'tea cup',price:'15.99',image:'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGFibGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    {id:2,  name:'Shoes',description:'Jogging shoes',price:'49.99',image:'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI='}
    
]

const Products =({product})=>{
    const classes = useStyles();
    return(
<main className={classes.content}>
<div className={classes.toolbar}/>
<Grid container justifyContent= "center" spacing={4}>
{products.map((product)=>(
    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
        <Product product={product}/>
        
    </Grid>
))}
</Grid>
</main>
)}
export default Products;