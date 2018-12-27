import React from "react";
import propTypes from "prop-types";

const Login = (props) => (
    <nav className="login">
        <h2>Inventory Login</h2>
        <p>Sign in to manager your store's inventory.</p>
        <button className="github" onClick={() => props.authenticate('Github')}>
            Login with GitHub
        </button>
        <button className="facebook" onClick={() => props.authenticate('Facebook')}>
            Login with Facebook
        </button>
        <button className="twitter" onClick={() => props.authenticate('Twitter')}>
            Login with Twitter
        </button>
    </nav>
);

Login.propTypes = {
    authenticate: propTypes.func.isRequired
};

export default Login;