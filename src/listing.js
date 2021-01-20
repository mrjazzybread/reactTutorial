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


function Listing(props){
    return (
        null
    );
} export default Listing;

Listing.defaultProps = {
    endYear : "Ongoing"
}