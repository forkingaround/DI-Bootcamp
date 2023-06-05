import React from 'react';
import './styles.css';
import './Exercise4.css';
/*
In a separate Javascript file, create a new Component called Exercise4 
that contains some HTML tags.
create a <h1> tag and set its color to red, and the background color to 
lightblue.
create a paragraph, a link, a form, an image and a list.
Import Exercise4 to the App.js file and display it.
*/
const Exercise4 = (props) => {
    return (
        <div className="bg">
            <h1 className="title">Heading</h1>
            <p className="para">Bla bla bla</p>
            <form>
                <input type="text" />
            </form>
            <img src="https://play-lh.googleusercontent.com/cJokjWYV_EhTZJvJG0zbV6CowN5V8EoyjzF4LssGyjhTo6rAVntx3XjD7AkBQ2IdFKw"></img>
            <ul>
                <li>Lorem ipsum</li>
            </ul>
        </div>
    );
}


export default Exercise4;