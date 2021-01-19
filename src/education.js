import Listing from './listing.js';
import SectionTitle from './sectionTitle';


function Education(){
    return (
        <div>
            <SectionTitle title="Education"/>
            <Listing title="Bachelor of Medincine" location="Unversity of the Capital"
                startYear="1917" endYear="1920"/>
            <Listing title="Master of Thanatology" location="University of the Capital"
                startYear="1920" endYear="1922"
                description="Thesis title: 'A Meta-Analysis Of The Existing Methodology Employed to Slow or Stop Natural Death In Various Mammals' " />
        </div>
    );

} export default Education;