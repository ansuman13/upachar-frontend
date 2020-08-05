import React from 'react'
import logo from '../../logo.png'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    state = {
        isLoggedIn: false
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="Navbar brand-logo"><img src={logo} alt="upachar logo" width='48px' /> Upachar</Link>
                    <ul id="nav-mobile" className="right hide-on-small-and-down">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar