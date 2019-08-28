import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

    async function handleLike(id) {
        await api.post(`/devs/${id}/like`, null, {
            headers: { user: match.params.id }
        });
        setUsers(users.filter(user => user._id !== id));
    }

    async function handleDislike(id) {
        await api.post(`/devs/${id}/dislike`, null, {
            headers: { user: match.params.id }
        });
        setUsers(users.filter(user => user._id !== id));
    }

    return(
        <div className="main-container">
            <Link to="/">
                <img className="logo" src={logo} alt="Tindev"/>
            </Link>
            {users.length === 0 ? <h1 className="empty">Acabou, volte mais tarde!</h1> : (
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
                                <button type="button" onClick={() => handleDislike(user._id)}>
                                    <img src={dislike} alt="dislike"/>
                                </button>
                                <button type="button" onClick={() => handleLike(user._id)}>
                                    <img src={like} alt="Like" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
};
