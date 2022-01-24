import React from 'react';

let fruits = [
    { id: 'apple', value: '🍎 apple' },
    { id: 'orange', value: '🍊 orange' },
    { id: 'grape', value: '🍇 grape' },
    { id: 'pear', value: '🍐 pear' },
  ];

function App() {
    function handleClick(event) {
        alert('Hello React Event');
    }
    function handleClickHello(name, event) {
        alert('Hello ' + name);
    }
    function handleClickHelp(event) {
        alert('To learn React use https://reactjs.org');
        alert('React and ReactDOM works together');
        alert('Babel helps in writing JSX'); 
    }
    return (
        <div class="container">
        <button onClick={(event) => {handleClick(event)}}> Click Me! </button>
        <button onClick={(event) => {handleClickHelp(event)}}> How can I help you? </button>
        <div>
        <button onClick={(event) => {handleClickHello("Arya", event)}}> Arya </button>
        <button onClick={(event) => {handleClickHello("John", event)}}> John </button>
        <button onClick={(event) => {handleClickHello("Bran", event)}}> Bran </button>
        <MyButton />
        { fruits.map((fruit, i) => <Fruit key= {i} {...fruit} />)}

        </div>
        </div>
    )
}

class MyButton extends React.Component {
    handleClick = function(name, event) {
        alert('Hello ' + name);
    }
    render(){
        return <div>
        <p>This code is not working</p>
        {/* <button onClick={(event) => {handleClick("Arya", event)}}> Arya </button>
        <button onClick={(event) => {handleClick("John", event)}}> John </button>
        <button onClick={(event) => {handleClick("Bran", event)}}> Bran </button> */}
        </div>
        
    }
}

function Fruit(props) {
    function handleClick(fruit, event) {
        alert("You clicked " + fruit);
    }
    return (
        <button onClick={(event) => handleClick(props.id)}>{props.value}</button>
    );
}

export default App;