import React from 'react';
import ReactDom from 'react-dom';
import Welcome from './src/welcome';
import Header from './src/header';


class App extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            headerTitle: "Welcome to React"
        }

    }

    render() {
        return <div>
            <Header message={this.state.headerTitle}/>
            <Welcome message={this.showAlert} changeNewHeader={this.changeHeader}/>
        </div>

    }

    showAlert = () => {
        alert("Welcome to react")
    };

    changeHeader = (newHeaderTitle) => {
        this.setState({
            headerTitle: newHeaderTitle
        });
    }
}


ReactDom.render(
    <App/>,
    document.getElementById("app")
)
;
