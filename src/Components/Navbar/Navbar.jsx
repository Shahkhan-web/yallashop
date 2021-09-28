import React from 'react'
import {AppBar,Toolbar, Typography,IconButton, Badge} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import logo from "../../assets/logo.png"
import useStyles from "./styles"

const Navbar = () => {
    const classes= useStyles();
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography vriant="h6" color="inherit" className={classes.title}>
                        <img src={logo} alt="Yallashop" height="50px" className={classes.image}/>
                        YallaShop
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
