/**
 * Represents a title of a section of our CV
 * 
 * props.title -> title of our section
 */


function SectionTitle(props){
   return ( 
    <div>
        <h2>{props.title}</h2>
        <hr />
    </div>);
} export default SectionTitle;
