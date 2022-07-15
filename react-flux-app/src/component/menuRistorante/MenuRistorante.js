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
        /*var colori = [
            'yellow',
            'blue',
            'green',
            'brown',
            'purple',
            'orange'
        ]; */

        switch (this.state.categoria) {
            case "ANTIPASTI": this.setState({ colore: 'yellow' });
                break;
            case "PRIMI": this.setState({ colore: 'blue' });
                break;
            case "SECONDI": this.setState({ colore: 'green' });
                break;
            case "CONTORNI": this.setState({ colore: 'brown' });
                break;
            case "DOLCI": this.setState({ colore: 'purple' });
                break;
            /*case "": this.setState({ colore: 'orange' });
                break; */
        }
    }

    render() {
        return (
            <div>
                <h2>Elenco dei piatti nel menù</h2>

                <div className='row contenitoreCard'>

                    <CardRicette
                        categoria='PRIMI'
                        titolo='Pasta alla carbonara'
                        ingredienti="pasta, uovo, guanciale, pecorino, pepe"
                        colore='blue'>
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
                        colore='brown'>
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
