import React from 'react';
import './MenuRistorante.css';
import CardRicette from '../cardRicette/CardRicette';
import AggiungiPiatto from '../aggiungiPiatto/AggiungiPiatto';
import Bottone from '../bottone/Bottone';

class MenuRistorante extends React.Component {

    state = {
        listaPiatti: []
    }
    
    /* 
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
    */

    recuperaPiattoInserito = (piatto) => {
        const listaPiattiCopia = Object.assign(this.state.listaPiatti)
        listaPiattiCopia.push(piatto)

        this.setState({ listaPiatti: listaPiattiCopia })

        /* TODO togliere console log */
        console.log("STATE recuperaPiattoInserito() in menuRistorante")
        console.log(this.state.listaPiatti)
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
                        colore='orange'>
                    </CardRicette>

                </div>

                <div className='contenitoreAggiungi'>
                    <AggiungiPiatto
                        recuperaPiattoInserito={this.recuperaPiattoInserito}
                    ></AggiungiPiatto>
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
