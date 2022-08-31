import React from 'react';
import './NoPage.css';
import Bottone from '../bottone/Bottone';

class NoPage extends React.Component {

    render() {
        return (
            <div>
                <h2>La pagina non è stata trovata</h2>

                <Bottone
                    testo='Torna alla home'
                    linkBottone='/home'>
                </Bottone>
            </div>
        );
    }
}

export default NoPage;
