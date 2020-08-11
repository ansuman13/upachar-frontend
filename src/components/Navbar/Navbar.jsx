import React from 'react'
import logo from '../../logo.png'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';



class Navbar extends React.Component {
    state = {
        isLoggedIn: false
    }


    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                            <img src={logo} width='48px' height='48px'/>
                        {/* <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton> */}
                        <Typography variant="h6">
                            Upachar
                         </Typography>
                         
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Navbar