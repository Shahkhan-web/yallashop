import React from 'react'
import { Typography, List, ListItem, ListItemText} from '@material-ui/core';
import useStyles from './styles';

const ReviewCart = ({cart}) => {

    const classes = useStyles();
    return (
  <>
    <div
    className={classes.receipt}>
        <Typography variant="h6" gutterBottom className={classes.receipt__header}>
            <Typography className={classes.receipt__title}>Order summary</Typography>
        </Typography>
        <List disablePadding className={classes.receiptlist}>
                {cart.line_items.map((product) => (
                
                    <ListItem key={classes.receiptlistrow}>
                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} className={classes.receipt__item}  />
                        <Typography variant="body2" className={classes.receipt__cost}>
                            {product.line_total.formatted_with_symbol}
                        </Typography>
                    </ListItem>
                
                ))}
                <ListItem className={classes.receipt__listrow_total} >
                    <ListItemText primary="Total"  className={classes.receipt__item}/>
                    <Typography variant="subtitle1"  className={classes.receipt__item}>
                        {cart.subtotal.formatted_with_symbol}
                    </Typography>
                </ListItem>
           
        </List>
    </div>
  </>
    )
}

export default ReviewCart
