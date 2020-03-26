import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Registar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para o resolver.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="E02041" />
                        Voltar para home
                    </Link>

                </section>

                <form>
                    <input placeholder="Título do Caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em euros" />
                    <button>Registar</button>
                    <button className="button">Registar</button>
                </form>
            </div >
        </div >
    );
}