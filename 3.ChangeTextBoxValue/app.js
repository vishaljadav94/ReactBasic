import React from 'react';
import ReactDom from 'react-dom';
import ShowInputMsg from './src/show_input_message'


class App extends React.Component {
    render() {
        return <ShowInputMsg message="kdsakdh"/>

    }
}


ReactDom.render(
    <App/>,
    document.getElementById("app")
)
;
