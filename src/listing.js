/*
* Represents a listing for the employment or the education section that follows the follwing format
* Title
* Location
* Start - End
* Description
*
* props.title -> Name of the position we held
* props.location -> Name of the institution
* props.startYear -> Year which we began our tenure
* props.endYear -> Year which our tenure ended, if not supplied, defaults to "Ongoing"
* props.description -> a small description of the position we held
*/

function endYear(y){
    if (y === undefined)
        return "Ongoing";
    else
        return y;
}

function makeDescription(d){
    if(d===undefined)
        return null;
    else
        return <li> {d} </li>;
}

function Listing(props){
    return (
    <div>
        <h3>{props.title}</h3>
        <h5 className> {props.location}</h5>
        <p> {props.startYear}-{endYear(props.endYear)}</p>
        {makeDescription(props.description)}
    </div>
    );
} export default Listing;