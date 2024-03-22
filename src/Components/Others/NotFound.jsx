import { Container, Row, Col, Figure } from "react-bootstrap";
import IMG from "../../Assets/Images/Others/Astronauta.png";

const NotFound = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center text-center" style={{ width: "100vw", height: "100vh" }}>
            <Row>
                <Col xs={12}>
                    <Figure>
                        <Figure.Image
                            width={200}
                            height={200}
                            alt="Astronauta"
                            src={IMG}
                        />
                        <Figure.Caption>
                            <h1>¿Hola, hay alguien ahí?</h1>
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col xs={12}>
                    <p>
                        Se presentó un problema y no pudimos encontrar su destino, intente lo siguiente:
                    </p>
                    <div className="my-3 p-3">
                        <ul className="text-start">
                            <li>Verifique el destino al que intenta acceder.</li>
                            <li>Posiblemente, el destino se encuentra en mantenimiento.</li>
                            <li>Considere que el destino ya no se encuentra en nuestra plataforma.</li>
                        </ul>
                    </div>
                    <p>
                        Si necesita atención más personalizada, contacte con <a href={`${process.env.REACT_APP_FRONTEND_URL}/support`} className="btn-link mx-1"><em>soporte técnico</em></a> para más información.
                    </p>
                </Col>
                <Col xs={12} md={6} className="mx-auto my-3">
                    <a href={`${process.env.REACT_APP_FRONTEND_URL}/`} className="btn btn-primary w-100">Despegar a la página principal. <i className="bi bi-rocket-takeoff ms-2"></i></a>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;
