import React from "react";
import { Grid } from "@material-ui/core";
import Product from './product/products'

const products = [
    {id:1,  name:'shoes',description:'running shoes',price:'$5',image:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FpjcUw1kyqVQA8sbGFd1mz2g9pog%3D%2F1400x1400%2Ffilters%3Aformat(jpeg)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F22406771%2FExbfpl2WgAAQkl8_resized.jpeg&imgrefurl=https%3A%2F%2Fwww.theverge.com%2F2021%2F3%2F29%2F22357225%2Fnike-sues-lil-nas-x-unauthorized-satan-shoes-mschf&tbnid=ts1_qF_A2zJMlM&vet=12ahUKEwjxk73UlqDzAhUPwoUKHSN2DSEQMygFegUIARDYAQ..i&docid=S9_q8mcrne1a6M&w=1400&h=1400&q=shoes&ved=2ahUKEwjxk73UlqDzAhUPwoUKHSN2DSEQMygFegUIARDYAQ'},
    {id:2,  name:'table',description:'mirror tablen',price:'$10',image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theone.com%2Ftora-dining-table-180x93-clear&psig=AOvVaw2CKvWH-wMnlAqg6ASX3ns2&ust=1632867183029000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKit_r6WoPMCFQAAAAAdAAAAABAD'}
    
]

const product =()=>{
    return(
<main>
<Grid container justify= "center" spacing={4}>
{products.map((product)=>(
    <grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
        <Product product={product}/>
    </grid>
))}
</Grid>
</main>
)}
export default product;