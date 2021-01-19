import ContactInfo from './ContactInfo.js'
import {Row, Col} from 'react-bootstrap';
import {faAt, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faGit, faInternetExplorer, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons"
import photo from "./dd.jpg"
import './App.css';


function Header(){
        return (
            <div >
            <Row>
                <Col md="auto">
                    <h1 className>DANIIL DANKOVSKY</h1>
                    <h3 className>Bachelor of Medicine</h3>
                    <Row>
                        <ContactInfo icon={faAt} contact="dd_the_bachelor@yahoo.com" />
                        <ContactInfo icon={faPhone} contact="22 244 4222" />
                        <ContactInfo icon={faEnvelope} contact="Plague Town, Russia" />
                        <ContactInfo icon={faTwitter} contact="@pompusBufoon"/>
                        <ContactInfo icon={faInternetExplorer} contact={<a href="https://www.pathologic-game.com/">https://www.pathologic-game.com/</a>} />
                        <ContactInfo icon={faGit} contact={"plagueDisliker"} />
                        <ContactInfo icon={faLinkedin} contact={"bestBachelorEU"} />
                    </Row>
                </Col>
                <Col className="PhotoContainer">
                    <img className="photo" src={photo}/>
                </Col>
            </Row>
            </div>
        );
} export default Header;