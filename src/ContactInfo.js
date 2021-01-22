import {Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';

function ContactInfo(props){
        return (
            <Col md="auto" className="contact">
                <FontAwesomeIcon icon={props.icon} /> {props.contact}
            </Col>
        );
    }

export default ContactInfo;
