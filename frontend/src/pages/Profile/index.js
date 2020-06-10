import React, {useEffect, useState} from 'react';
import Logo from '../../assets/logo.png';
import {FiPower} from 'react-icons/fi';
import './estilo.css';
import api from '../../services/api';
import {useHistory} from 'react-router-dom';

export default function Profile() {

    const [totais, setTotais] = useState([]);
    const nome = localStorage.getItem('nome');
    const id = localStorage.getItem('id');
    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: id,
            }
        }).then(response => {
            setTotais(response.data);
        })
    }, [id]);

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return(
        <div className="profile-container">
            <header>
                <img src={Logo} alt="Hospital Evangelico de Londrina" />
                <span>Bem vindo, {nome}</span>

                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>
 
            <select>
                <option>Janeiro</option>
                <option>Fevereiro</option>
                <option>Março</option>
                <option>Abril</option>
                <option>Maio</option>
                <option>Junho</option>
                <option>Julho</option>
                <option>Agosto</option>
                <option>Setembro</option>
                <option>Outubro</option>
                <option>Novembro</option>
                <option>Dezembro</option>
            </select>

            <h2>Totais de </h2>

            <ul>
                {totais.map(total => (
                    <li key={total.id}>
                        <strong>Total Proventos</strong>
                        <p style={{color: "#63B8FF"}}>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(total.total_proventos)}</p>

                        <strong>Total Desconto</strong>
                        <p style={{color: "#CD0000"}}>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(total.total_desconto)}</p>

                        <strong>Total Liquido</strong>
                        <p style={{color: "#00EE76"}}>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(total.total_liquido)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}