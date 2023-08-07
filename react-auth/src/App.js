import { Container, Col, Row, Tabs, Tab } from 'react-bootstrap';

// Components
import Register from './components/Register/index';
import Login from './components/Login/index';

const App = () => {
  return (
    <Container>
			<Row>
				<Col xs={12} sm={12} md={{span: 10, offset: 1}}  lg={{span: 8, offset: 2}}>
					<Tabs
						defaultActiveKey="register"
						transition={false}
						id="noanim-tab-example"
						className="mb-3"
					>
						<Tab eventKey="register" title="Register">
							<Register />
						</Tab>
						<Tab eventKey="login" title="Login">
							<Login />
						</Tab>
					</Tabs>
				</Col>
			</Row>
		</Container>
  );
}

export default App;
