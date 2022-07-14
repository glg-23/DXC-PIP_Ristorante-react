import './MenuRistorante.css';
import CardRicette from '../cardRicette/CardRicette';
import AggiungiPiatto from '../aggiungiPiatto/AggiungiPiatto';
import BottoneHome from '../bottoneHome/BottoneHome';

function MenuRistorante() {
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

            <BottoneHome />

        </div>
    );
}

export default MenuRistorante;
