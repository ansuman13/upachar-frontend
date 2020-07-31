import React, { Component } from 'react'
import Navbar from '../../Navbar/Navbar'

export default class Signup extends Component {
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
                                <input id="email" type="email"/>
                                <label for="email">Mobile Number</label>
                            </div>
                            <div class="input-field col s12">
                                <i class="material-icons prefix">verified_user</i>
                                <input id="password" type="password"/>
                                <label for="password">Password</label>
                            </div>
                            <div class="input-field col s12">
                                <i class="material-icons prefix">replay</i>
                                <input id="password" type="password"/>
                                <label for="password">Confirm Password</label>
                            </div>
                            <input className="waves-effect waves-light btn right" type="submit" value="Sign Up"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
