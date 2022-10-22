import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch, FaInstagram } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosel from '../BrandCarosel/BrandCarosel';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)

            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))


    }

    return (
        <div>
            <ButtonGroup vertical >
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-info"><FaGoogle></FaGoogle> Log in with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Log in with Github</Button>
            </ButtonGroup>
            <div>
                <h5 className='mt-2'>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> What's app</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaInstagram></FaInstagram> Instragranm</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarosel></BrandCarosel>
            </div>
        </div>
    );
};

export default RightSideNav;