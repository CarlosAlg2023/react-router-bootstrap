import {
	Container,
	Row,
	Col
} from "react-bootstrap"

import ReactHeader from "../../Html/ReactHeader.jsx"
import ReactFooter from "../../Html/ReactFooter.jsx"
import ReactMain from "../../Html/ReactMain.jsx"

//Importación de imagenes
import AppJsx from "../../Assets/Principal/App-jsx.jpg"
import HtmlCeo from "../../Assets/Principal/Html-ceo.jpg"
import Vistas from "../../Assets/Principal/Vistas.jpg"

//Ajusta la informacion enviada a los HTML componentes.

const Config = {
    Main: {
        Articles: {
            Presentacion: "React-Router-Bootstrap",
            Detalles: "Comienza ahora"
        },
        Section: {
            Detalles: [
                {
                    Title: "Edite su componente de rutas",
                    Text: "Para comenzar a editar el proyecto, vaya a <code>./src/App.jsx</code> para configurar sus rutas",
                    Image: {
                        Src: AppJsx,
                        Alt: "App.jsx"
                    }
                },
                {
                    Title: "Mantenga el CEO",
                    Text: "Cumpla con las normas del CEO manteniendo intacta la estructura de los HTML componentes en <code> ./src/HTML</code>",
                    Image: {
                        Src: HtmlCeo,
                        Alt: "Html ceo"
                    }
                },
                {
                    Title: "Vistas",
                    Text: "Agregue sus vistas al directorio pre-establecido en <code> ./src/Views </code>",
                    Image: {
                        Src: Vistas,
                        Alt: "Vistas"
                    }
                }
            ]
        }
    }
}


const Index = () => {
	return (<Container fluid>
	        <Row>
	          <Col xs={12}>
	          <ReactHeader />
	          </Col>
	         <Col xs={12}>
	         <Col xs={12}>
	          <ReactMain Config={Config} />
	         </Col>
	           <ReactFooter />
	         </Col>
	        </Row>
	        </Container>
	)
}

export default Index;