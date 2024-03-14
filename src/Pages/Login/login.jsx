import React from 'react'
import './login.css'

import Button from '../../Component/Button/button.jsx';
import Formular from '../../Component/Formular/formular.jsx';


function login() {
    return (
        <main className="main-login">
            <section className="section-login">

                <div className="form_header">
                    <i className="fa fa-user-circle"></i>
                    <h2>Sign In</h2>
                </div>




                <Formular label="Username" content="email" type="email" />
                <Formular label="Password" content="password" type="password" />

                <div className="login_check">
                    <input type="checkbox" id="remember" name="check-remember" />
                    <label htmlFor="remember">Remember me</label>
                </div>

                <Button style={{ textDecoration: "underline" }} content="Sign In" className="btn-login" />

            </section>
        </main>

    )
}

export default login
