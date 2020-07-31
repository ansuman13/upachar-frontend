import React, { Component } from 'react'
import './search.css'

export default class Search extends Component {
    render() {
        return (
            <nav className='Search-nav'>
                <div class="nav-wrapper">
                    <form>
                        <div class="input-field">
                            <input id="search" type="search" placeholder='Search for Products and Medicine' required />
                            <label class="label-icon" for="search">
                                <i class="material-icons">search</i>
                            </label>
                            <i class="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>
        )
    }
}
