/**
 * This Container is supposed to represent how good our language is 
 * 
 */

import { Container } from "react-bootstrap";

function makeLevel(level){
    const array = new Array(5);
    for(var i = 0; i <5; i=i+1)
        if(i < level)
            array[i]=<span class="dot red-dot"></span>;
        else
            array[i]=<span class="dot grey-dot"></span>;
    return array;
}

function Lang(props){
    return (
        <h3>{props.lang} : {makeLevel(props.level)}</h3> 
    )
} export default Lang;