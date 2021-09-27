import React from "react";
import { Grid } from "@material-ui/core";
import { ShortTextSharp } from "@material-ui/icons";

const products = [
    {id:1,  Name:'shoes',   'description':'running shoes'},
    {id:2,  Name:'table',   'description':'mirror tablen'}
    
]

const product =()=>
{
<main>
<Grid container justify= "center" spacing={4}>
{products.map((product)=>(
    <grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
        <Product product={product}/>
    </grid>
))}
</Grid>
</main>
}
export default Products;