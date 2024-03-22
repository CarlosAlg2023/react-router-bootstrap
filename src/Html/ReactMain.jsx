import { Container, Row, Col } from 'react-bootstrap';
import '../Css/ReactCss.css';

import ReactRouterBootstrap from "../Components/react_router_bootstrsp.jsx"

const ReactMain = ({ Config }) => {
    return (
        <Container fluid>
            <main>
                <Row>
                 <Col xs={12}>
                  <ReactRouterBootstrap />
                 </Col>
                 <Col xs={12}>
                   <article
                   className="fw-bold
                   text-center p-5"><h2>¡{Config.Main.Articles.Detalles}!</h2></article>
                   </Col>
                   </Row>
                    <Row>
                    {Config.Main.Section.Detalles.map((event, index) => (
                        <Col key={index} xs={12} md={6} className="my-3 mx-auto text-center">
                            <section>
                                <div className="fw-bold">
                                    <h3>{event.Title}</h3>
                                </div>
                                <div>
                                    <p dangerouslySetInnerHTML={{ __html: event.Text }}></p>
                                    <div className="text-center">
                                        <img
                                            src={event.Image.Src}
                                            alt={event.Image.Alt}
                                            width="320px"
                                            height="300px"
                                            
                                        />
                                    </div>
                                </div>
                            </section>
                        </Col>
                    ))}
                  
                </Row>
            </main>
        </Container>
    );
};

export default ReactMain;
