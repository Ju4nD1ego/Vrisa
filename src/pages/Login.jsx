import { Container, Card, Form, Button } from 'react-bootstrap';

export default function Login() {
  return (
    
    <div className="d-flex align-items-center justify-content-center vh-100 w-100">
      
      
      <Card style={{ width: '400px' }} className="shadow-lg p-3 mb-5 bg-white rounded border border-3 border-dark">
        <Card.Body>
          
          <div className="text-center mb-4">
            <h2 className="text-success fw-bold">VriSA</h2>
            <h5 className="text-secondary">INICIAR SESIÓN</h5>
          </div>

          <Form>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su correo" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="success" size="lg" type="submit">
                Ingreso
              </Button>
              <Button variant="outline-secondary" size="lg">
                Registrarse
              </Button>
            </div>
          </Form>

          <div className="text-center mt-3">
            <a href="#" className="text-muted small text-decoration-none">
              ¿Olvidó su contraseña?
            </a>
          </div>

        </Card.Body>
      </Card>
    </div>
  );
}