import React from 'react';
import ReactDOM from 'react-dom';

const  moundNode = document.getElementById('app');

// const HelloWorld = (props) => {
//   console.log(props);
//   return <h1>Hello World {props.userName}</h1>;
// };
//
// ReactDOM.render(<HelloWorld userName = 'Natalia'/>, moundNode);

// let counter = 0;
//
// setInterval(() => {
//   ReactDOM.render(counter++, moundNode);
// }, 1000);

// const ShowFrameworks = (props) => {
//   console.log(props.frameworks);
//   const frameworks = props.frameworks.map(framework => {
//       return <li>{framework}</li>
//     })
//   ;
//   return <ul>
//     {frameworks}
//   </ul>
// }
//
// ReactDOM.render(<ShowFrameworks  frameworks = {['vue', 'angular', 'react']}/>, moundNode);

let arr = ['vue', 'angular', 'react'];
let frameworks = arr.map(framework => {
  return <li>{framework}</li>;
});

ReactDOM.render(React.createElement('ul', null, frameworks), moundNode);
