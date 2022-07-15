import React from 'react';
import './MenuRistorante.css';
import CardRicette from '../cardRicette/CardRicette';
import AggiungiPiatto from '../aggiungiPiatto/AggiungiPiatto';
import Bottone from '../bottone/Bottone';

class MenuRistorante extends React.Component {

    state = {
        categoria: "null",
        titolo: "null",
        ingredienti: "null",
        colore: "null"
    }

    creaCard() {
        this.selezionaColore()
        return (
            <CardRicette
                categoria={this.state.categoria}
                titolo={this.state.titolo}
                ingredienti={this.state.ingredienti}
                colore={this.state.colore}>
            </CardRicette>
        )
    }

    selezionaColore() {
        var colori = [
            'yellow',
            'blue',
            'green'
        ];

        var indiceRandom = Math.floor(Math.random() * colori.length);
        var coloreRandom = colori[indiceRandom];

        this.setState({ colore: coloreRandom });
    }

    render() {
        return (
            <div>
                <h2>Elenco dei piatti nel menù</h2>

                <div className='contenitoreCard'>

                    <CardRicette
                        categoria='PRIMI'
                        titolo='Pasta alla carbonara'
                        ingredienti="pasta, uovo, guanciale, pecorino, pepe"
                        colore='yellow'>
                    </CardRicette>

                    <CardRicette
                        categoria='SECONDI'
                        titolo='Polpette'
                        ingredienti="carne macinata, pane, latte, pomodoro"
                        colore='green'>
                    </CardRicette>

                    <CardRicette
                        categoria='CONTORNI'
                        titolo='Insalata mista'
                        ingredienti="insalata, pomodori"
                        colore='blue'>
                    </CardRicette>

                </div>

                <div className='contenitoreAggiungi'>
                    <AggiungiPiatto></AggiungiPiatto>
                </div>

                <Bottone
                    testo='Torna alla home'
                    linkBottone='/'>
                </Bottone>

            </div>
        );
    }
}

export default MenuRistorante;
