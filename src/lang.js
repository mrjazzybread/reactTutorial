/**
 * This Container is supposed to represent how good our skill at a certain language is
 * 
 * props.lang  -> name of the language
 * props.level -> a value between 1 and 5 that describes our skill (values below 1 and above 5 are defaulted to 0 and 5 respectively)
 * 
 */

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