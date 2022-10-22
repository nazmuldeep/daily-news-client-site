import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch, FaInstagram } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosel from '../BrandCarosel/BrandCarosel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical >
                <Button className='mb-2' variant="outline-info"><FaGoogle></FaGoogle> Log in with Google</Button>
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