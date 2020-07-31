import React, { Component } from 'react'
import Navbar from '../../Navbar'
import './Login.css'

export default class Login extends Component {
    state={
        email:'',
        password:''
    }

    handleInputChange = () =>{
        
    }



    render() {
        return (
            <div>
                <Navbar />
                <div class="row">
                    <form class="Login-form">
                        <div className="col s12">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">phone</i>
                                <input id="phone" type="number"/>
                                <label for="phone">Mobile Number</label>
                            </div>
                            <div class="input-field col s12">
                                <i class="material-icons prefix">verified_user</i>
                                <input id="password" type="password"/>
                                <label for="password">Password</label>
                            </div>
                            <input className="waves-effect waves-light btn right" type="submit" value="Login"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
