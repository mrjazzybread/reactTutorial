import SectionTitle from "./sectionTitle";

import Lang from './lang.js'

function Languages (){
    return (
        <div>
            <SectionTitle title="Languages" />
            <Lang lang="Russian" level="5"/>
            <Lang lang="English" level="4"/>
            <Lang lang="Latin" level="5"/>
        </div>
    )

}export default Languages;