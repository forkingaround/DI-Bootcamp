//function takes two parameters - one is an element, the other is the lement to be appended to it
//function should create and append the second element to the first one
//function should return the element that was appended
//function should throw an error if the first argument is not an element
//function should throw an error if the second argument is not an element
const addElement = (parent,child,childArgs,content) => {
    if(!(parent instanceof Element)){
        throw new Error('First argument is not an element');
    }
    const newElement = document.createElement(child);
    // if childArgs has key -> attributes assign to newElement
    console.log(childArgs);
    Object.entries(childArgs).forEach(([key, value]) => {
        newElement.setAttribute(key,value);
    });
    newElement.innerHTML = content;
    parent.appendChild(newElement);
    return newElement;
}
addElement(document.body,'div',{class:'test', id:'test'},"hello world");