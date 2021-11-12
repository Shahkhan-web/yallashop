import React,{useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Categories from './Categories/categories'
import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart,categories }) => {

  const [Products, setProducts] = useState([])
  const classes = useStyles(); 

  const renderProductBycategory = async (CategoryID)=>{
      const data =await products.filter((FProducts)=> FProducts.categories[0].id===CategoryID)
      setProducts(data)
  }
    if (!products.length) return <p>Loading...</p>;
      return (
        <>
        <Categories categories={categories} renderProductBycategory={renderProductBycategory}/>
        <main className={classes.content}>
        <div className={classes.toolbar}/>
          <Grid container justifyContent="center" spacing={4}>
            {Products.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddToCart={onAddToCart} /> 
              </Grid>
            ))}
          </Grid>
        </main>
        </>
      );
};

export default Products;

