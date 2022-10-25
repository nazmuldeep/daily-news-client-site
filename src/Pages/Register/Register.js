import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const Register = () => {
    const [error, setError] = useState();
    const [accepted, setAccepted] = useState(false)
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                form.reset();
                handleUpdateUserProfile(name, photoURL)
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })

    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));

    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    return (

        < Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter your name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo url</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Photo Url" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    onClick={handleAccepted}

                    type="checkbox"
                    label={<>Accepted <Link to='/terms'>Tearms and Conditions</Link></>} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!accepted}>

                Register
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form >
    );
};

export default Register;