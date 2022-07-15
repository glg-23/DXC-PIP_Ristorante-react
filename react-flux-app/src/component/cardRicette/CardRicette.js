import './CardRicette.css';

function CardRicette(props) {
    return (
        <div className="col-md-4 col-sm-6 content-card">
            <div className="card-big-shadow">
                <div className="card card-just-text " data-background="color" data-color={props.colore} data-radius="none">
                    <div className="content">
                        <h6 className="category">{props.categoria}</h6>
                        <h4 className="title">{props.titolo}</h4>
                        <p className="description"> INGREDIENTI: {props.ingredienti}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardRicette;
