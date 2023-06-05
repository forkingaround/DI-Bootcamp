import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserFavoriteColors from './UserFavoriteColors';
import Exercise4 from './Exercise4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/*
Create an element without JSX and render it. The element should be an <h1> with the content “I do not use JSX”
*/
const myelement1 = React.createElement('h1', {}, 'I do not use JSX!');
root.render(myelement1);

/*
Display a “Hello World!” message on the page.
Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;, and render it on the page.
Create a constant variable named sum, which value is 5 + 5. Render on the page, the following sentence "React is <sum> times better with JSX"
*/
const myelement2 = <h2>I Love JSX!</h2>;
root.render(myelement2);
const sum = 5 + 5;
root.render(sum);
/*
Using the following object:

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};
In the React App, render the first name and the last name of the user in two <h3>.
In a separate Javascript file, create a new Component called UserFavoriteColors. Use props to pass the fav_animals array to the UserFavoriteColors component.
In the UserFavoriteColors component, use the map function to create a new array of <li>‘s.
Each <li> corresponds to one animal from the fav_animals array.
Display the <li>‘s. Tip : You can use the second parameter of the map function as a key to uniquely identify each HTML item
*/
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};
const someshit = (
  <div>
    <h3>{user.firstName}</h3>
    <h3>{user.lastName}</h3>
  </div>
);
root.render(someshit);


root.render(<UserFavoriteColors arr={user.favAnimals}/>);

root.render(<Exercise4 />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
