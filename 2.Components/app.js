import React from 'react';
import ReactDom from 'react-dom';
import Welcome from './src/welcome'

class App extends React.Component {
    render() {
        return <Welcome message="Hello Vishal"/>

    }
}


ReactDom.render(
    <App/>,
    document.getElementById("app")
)
;