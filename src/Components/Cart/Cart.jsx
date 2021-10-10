import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import ReviewCart from './ReviewCart/ReviewCart'
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className={classes.link} to="/">start adding some</Link>!
    </Typography>
  );
    console.log(cart)
  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
    <Grid container alignItems='flex-start' justifyContent='space-between' >
      <Grid container spacing='3' className={classes.contain}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} lg={5} m={4} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
       
      </Grid>
      <Grid justifyContent='flexstart' alignItems='flex-end' >
            <ReviewCart cart={cart}/>    
     </Grid>
     </Grid>
        <div className={classes.cardDetails}>
                  <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
                  <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
              
        </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }

    </Container>
  );
};

export default Cart;
