import { Container, Grid, Typography,Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart }) => {
    const classes =useStyles();

    const EmptyCart =()=>(
        <Typography variant='subtitle1'>You have no items in your cart.<Link to="/" className={classes.link}>Start adding some!</Link></Typography>
    )

    const FilledCart =()=>
       (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item)=>(
                
                    <Grid item xs={6} sm={6} md={4} lg={3} key={item.id}>
                          { console.log('item',item)} 
                          <CartItem item={item}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant='h6'>
                            Subtotal: {cart.subtotal.formatted_with_symbol}
                    </Typography>
                    <div>
                    <Button className={classes.emptyButton} size='large' type='button' color='secondary' variant='contained'>Empty Cart</Button>
                    <Button className={classes.checkoutButton} size='large' type='button' color='primary' variant='contained'>Checkout</Button>
                    </div>
            </div>
        </>
        );
                
    if (!cart.line_items) return(
            <div>
                <div className={classes.toolbar}/>
                    <Typography className={classes.title} variant='h5'>
                        Loading...
                    </Typography>
           </div>)
 
    return (
            <Container>
               <div className={classes.toolbar}/>
                <Typography className={classes.title} variant='h4' gutterBottom>
                    Your Shopping Cart
                </Typography>
                {!cart.line_items.length? <EmptyCart/> : <FilledCart/>}
            </Container>
    )
}


export default Cart
