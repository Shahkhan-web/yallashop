import { Container, Grid, Typography,Button } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Cart = ({ cart }) => {
    const classes =useStyles();

    const EmptyCart =()=>(
        <Typography variant='subtitle1'>You have no items in your cart.Start adding some!</Typography>
    )

    const FilledCart =()=>
       (
        <>
            <Grid Container spacing={3}>
                {cart.line_items.map((item)=>(
                    <Grid item xs={12} s={4} key={item.id}>
                        <div>{item.name}</div>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant='h4'>
                            Subtotal: {cart.subtotal.formatted_with_symbol}
                    </Typography>
                    <div>
                    <Button className={classes.emptyButton} size='large' type='button' color='secondary' variant='contained'>Empty Cart</Button>
                    <Button className={classes.checkoutButton} size='large' type='button' color='primary' variant='contained'>Checkout</Button>
                    </div>
            </div>
        </>
        );
                
    if (!cart.line_item) return(
            <div>
                <div className={classes.toolbar}/>
                    <Typography className={classes.title} variant='h5'>
                        Loading...
                    </Typography>
           </div>)
 
    return (
            <Container>
               <div className={classes.toolbar}/>
                <Typography className={classes.title} variant='h3'>
                    Your Shopping Cart
                </Typography>
                {!cart.line_items.length? <EmptyCart/> : <FilledCart/>}
            </Container>
    )
}


export default Cart
