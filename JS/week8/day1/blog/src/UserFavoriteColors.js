import React from 'react';
/*
In a separate Javascript file, create a new Component called UserFavoriteColors. 
Use props to pass the fav_animals array to the UserFavoriteColors component.
In the UserFavoriteColors component, use the map function to create a new array of <li>‘s.
Each <li> corresponds to one animal from the fav_animals array.
Display the <li>‘s. Tip : You can use the second parameter of the map function as a key to uniquely identify each HTML item
*/

const UserFavoriteColors = (props) => {
    console.log(props);
    console.log(props.arr);
    return (
        <ul>
        {props.arr.map( val => {
            return <li key={val}>{val}</li>
        })}
        </ul>
    );
}

export default UserFavoriteColors;