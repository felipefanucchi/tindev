import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

import './Main.css';

export default function Main({ match }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async function loadUsers() {
            const response = await api.get('/devs', {
                headers: { user: match.params.id }
            });
            setUsers(response.data);
        })();
    }, [match.params.id]);

    return(
        <div className="main-container">
            <img className="logo" src={logo} alt="Tindev"/>
            <ul className="list-dev">
                {users.map(user => (
                    <li className="dev">
                        <figure>
                            <img className="dev-avatar" src={user.avatar} alt={user.name} />
                            <div className="dev-info">
                                <footer className="dev-footer">
                                    <strong>{user.name}</strong>
                                    <p className="bio">
                                        {user.bio}
                                    </p>
                                </footer>
                            </div>
                        </figure>
                        
                        <div className="buttons">
                            <button type="button">
                                <img src={dislike} alt="dislike"/>
                            </button>
                            <button type="button">
                                <img src={like} alt="Like" />
                            </button>
                        </div>
                    </li>

                ))}
            </ul>
        </div>
    )
};
