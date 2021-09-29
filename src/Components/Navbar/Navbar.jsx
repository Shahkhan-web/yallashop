import React from 'react'
import {AppBar,Toolbar, Typography,IconButton, Badge} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link,useLocation } from 'react-router-dom'

import logo from "../../assets/logo.png"
import useStyles from "./styles"

const Navbar = ({totalItems}) => {
    const classes= useStyles();
    const location = useLocation();
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" vriant="h6" color="inherit" className={classes.title}>
                        <img src={logo} alt="Yallashop" height="50px" className={classes.image}/>
                        YallaShop
                    </Typography>
                    <div className={classes.grow}/>
                    {location.pathname === '/' &&(
                        <div className={classes.button}>
                        
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>)}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
