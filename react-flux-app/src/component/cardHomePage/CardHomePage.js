import './CardHomePage.css';


function CardHomePage(props) {
    return (
        <div>
            <a href={props.collegamento}>
                <div className='container' >
                    <div className="col-md-4 col-sm-6 content-card">
                        <div className="card-big-shadow">
                            <div className="card card-just-text " data-background="color" data-color={props.colore} data-radius="none">
                                <div className="content">
                                    <h4 className="title">{props.titolo}</h4>
                                    <p className="description"> {props.testo}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a >
        </div>

    );
}

export default CardHomePage;
