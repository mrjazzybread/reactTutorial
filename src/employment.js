import SectionTitle from './sectionTitle.js';
import Listing from './listing.js';
import {Container} from 'react-bootstrap';


function Employment(){
    return (
        <div>
            <SectionTitle title="Employment History"/>
            <Listing title="Professor of Medicine" location="University of the Capital"
                startYear="1924" endYear="1930"/>
            <Listing title="Head Researcher in Thanatology" location="Thanatica Institue"
                startYear="1930" 
                description="As founder of Thanatica, I, along with the rest of my team of dedicatied
                researchers, have dedicated my life to the pursuit of immortality and humanity's ascendance into godhood"/>
            <Listing title="Envoy of the Powers That Be" location="Deep in the Russian Steppe"
                startYear="1937"
                description="Currently my research has taken a backseat seeing as I have been sent to a strange small folksy town fending off a ruthless sand plague" />
        </div>
    );

} export default Employment;