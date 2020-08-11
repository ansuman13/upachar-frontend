import React, { Component } from 'react'
import Navbar from '../../Navbar/Navbar'
import './Login.css'
import { Container, CssBaseline, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Grid, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';



class Login extends React.Component {

    render() {
        const loginInlineStyles = {
            'paper': {
                'marginTop': '8px',
                'display': 'flex',
                'alignItems': 'center',
                'flexDirection': 'column'
            },
            'avatar': {
                'margin': '1px',
                'backgroundColor': 'red'
            },
            'form': {
                'width': '100%',
                'marginTop': '1px'

            }
        }

        return (
            <Container component="main" maxWidth="xs" >
                <CssBaseline />
                <div className="paper" style={loginInlineStyles.paper}>
                    <Avatar style={loginInlineStyles.avatar} >
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        SignIn
                    </Typography>

                    <form style={loginInlineStyles.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autocomplete="email"
                            autoFocus
                        />
                        <TextField
                            type="password"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="password"
                            name="password"
                            autocomplete="password" />

                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="remember me" />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >Sign In
                    </Button>

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">Forget Password</Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Don't Have an account? Sign Up
                            </Link>
                            </Grid>


                        </Grid>



                    </form>
                </div>

            </Container>
        )
    }

}

export default Login