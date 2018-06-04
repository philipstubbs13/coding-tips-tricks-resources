import React from 'react';

//const App = () => <h1>Hello</h1>
class App extends React.Component {
    render(){
        return <Button>I <Heart /> React</Button>
    }
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
    render(){
        return <span>&hearts;</span>
    }
}

export default App;