import React from 'react';
import logo from '../../assets/logo.svg';
import './Login.css'
export default function() {
    return (
        <div className="login-container">
            <form>
                <img src={logo} alt="tindev" />
                <input 
                    placeholder="Digite seu usuário do github"
                />
                <button type="submit">
                    Enviar
                </button>
            </form>
        </div>
    );
}
