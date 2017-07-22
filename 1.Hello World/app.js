import React from 'react';
import ReactDom from 'react-dom';
import Header from './src/header';
import Body from './src/body';

class App extends React.Component {
    render() {
        return <div>
            <Header/>
            <Body/>
        </div>
    }
}

ReactDom.render(
    <App/>
    ,
    document.getElementById("app")
)
;