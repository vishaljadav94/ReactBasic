import React from 'react';
import ReactDom from 'react-dom';
import IterateList from './src/iterateList'




class App extends React.Component {
    render() {
        return <IterateList/>

    }
}


ReactDom.render(
    <App/>,
    document.getElementById("app")
)
;
