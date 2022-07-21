import React from 'react';
import './MenuRistorante.css';
import CardRicette from '../cardRicette/CardRicette';
import AggiungiPiatto from '../aggiungiPiatto/AggiungiPiatto';
import Bottone from '../bottone/Bottone';

class MenuRistorante extends React.Component {

    state = {
        listaPiatti: []
    }

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

                    {this.state.listaPiatti.map((piatto, index) => {
                        return (
                            <CardRicette
                                categoria={piatto.categoria}
                                titolo={piatto.nomePiatto}
                                ingredienti={piatto.ingredienti}
                                colore={piatto.colore}
                            ></CardRicette>
                        )
                    })}

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
