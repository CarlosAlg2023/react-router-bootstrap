import { Container, Row, Col } from "react-bootstrap";
import "../Css/ReactCss.css";

const ReactFooter = () => {
  return (
    <Container>
      <footer className="py-4 react-footer">
        <Row>
          <Col xs={12} className="text-center">
            <div className="footer-content">
              <p className="fw-bold mb-2">Todos los derechos reservados</p>
              <p className="mb-4"><small>Creado con React - React Router - React Bootstrap</small></p>
            </div>
               {/*Reemplazar por enlaces (a) válidos*/}
              <ul>
                <li><i className="bi bi-facebook ms-2"></i></li>
                <li><i className="bi bi-twitter ms-2"></i></li>
                <li><i className="bi bi-whatsapp ms-2"></i></li>
                <li><i className="bi bi-envelope ms-2"></i></li>
                <li><i className="bi bi-discord ms-2"></i></li>
              </ul>
              <ul>
                <li className="btn-link text-primary">Política de privacidad</li>
                <li className="btn-link text-primary">Términos del servicio</li>
                <li className="btn-link text-primary">Preguntas frecuentes</li>
              </ul>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};

export default ReactFooter;
