import { useState } from 'react';
import axios from 'axios';

// components
import { Button, Form } from 'react-bootstrap';

const Register = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [register, setRegister] = useState(false);

	const configuration = {
		method: "post",
		url: "http://localhost:3003/register",
		data: {
			firstName,
			lastName,
			email,
			password,
		},
	};

	axios(configuration)
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		})

	const handleSubmit = (e) => {
    e.preventDefault();
		console.log(firstName, lastName, email, password);
    alert("Submited");
  }

	return (
		<>
			<h2>Register</h2>
      <Form 
				onSubmit={(e) => handleSubmit(e)}
			>
        {/* firstName */}
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
						type="text"
						name="firstName"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						placeholder="First Name"
					/>
        </Form.Group>
        
				{/* lastName */}
        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
						type="text"
						name="lastName"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						placeholder="Last Name"
					/>
        </Form.Group>
        
				{/* email */}
        <Form.Group controlId="formBasicRegisterEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
						type="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Enter Email"
					/>
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicRegisterPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
						type="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
					/>
        </Form.Group>

        {/* submit button */}
        <Button
					variant="primary"
					type="submit"
					onClick={(e) => handleSubmit(e)}
				>
          Submit
        </Button>
      </Form>
		</>
	);
}

export default Register;