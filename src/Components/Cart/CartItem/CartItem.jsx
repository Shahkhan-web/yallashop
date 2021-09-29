import { Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react'

import useStyles from './styles'
const CartItem = ({item}) => {

    const classes = useStyles();
    return (
        <div>
            <Card>
                <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
                <CardContent className={classes.cardContent}>
                    <Typography variant='h5'>{item.name}</Typography>
                    <Typography variant='h6'>{item.line_total.formatted_with_symbol}</Typography>
                </CardContent>
                <CardContent className={classes.cardActions}>
                        <div className={classes.buttons}>
                            <Button type='button' size='small'>-</Button>
                                 <Typography>{item.quantity}</Typography>
                            <Button type='button' size='small'>+</Button>
                            <Button type='button' variant='contained' color='secondary'>Remove</Button>
                        </div>
                        
                </CardContent>
            </Card>
        </div>
    )
}

export default CartItem
