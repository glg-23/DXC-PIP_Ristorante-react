import './AggiungiPiatto.css';
import BottoneHome from '../bottoneHome/BottoneHome';

function AggiungiPiatto() {
    return (
        <div>

            <form>
                <div class="form-group">
                    <label>Nome del piatto</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""></input>
                </div>

                <div class="form-group">
                    <label>Categoria</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option></option>
                        <option>Antipasti</option>
                        <option>Primi</option>
                        <option>Secondi</option>
                        <option>Contorni</option>
                        <option>Dolci</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>ingredienti</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>

            <BottoneHome></BottoneHome>

        </div>
    );
}

export default AggiungiPiatto;
