import {Container,Row,Col,Figure} from "react-bootstrap"

import  React from "../Assets/Libs/react.png"
import ReactRouter from "../Assets/Libs/react-router-dom.png"
import ReactBootstrap from "../Assets/Libs/react-bootstrap.png"

import "../Css/ImagesNav.css"

const ReactRouterBootsrap = () => {
	return(
		<Container fluid className="mb-4">
		 <Row className="text-center">
		  <Col xs={12} md={4} className="mx-auto">
		   <Figure>
                        <Figure.Image
                            width={200}
                            height={200}
                            alt="React"
                            src={React}
                            className="rotating-image"
                        />
                        <Figure.Caption>
                            <h1>React</h1>
                        </Figure.Caption>
                    </Figure>
		  </Col>
				  <Col xs={12} md={4} className="mx-auto">
		   <Figure>
                        <Figure.Image
                            width={200}
                            height={200}
                            alt="React-router-dom"
                            src={ReactRouter}
                            className="gir-image"
                        />
                        <Figure.Caption>
                            <h1>React-router-dom</h1>
                        </Figure.Caption>
                    </Figure>
		  </Col>
				  <Col xs={12} md={4} className="mx-auto">
		   <Figure>
                        <Figure.Image
                            width={200}
                            height={200}
                            alt="Astronauta"
                            src={ReactBootstrap}
                            className="rotating-image"
                        />
                        <Figure.Caption>
                            <h1>React-bootstrap</h1>
                        </Figure.Caption>
                    </Figure>
		  </Col>
		 </Row>
		 <hr/>
		</Container>
		)
}

export default ReactRouterBootsrap;