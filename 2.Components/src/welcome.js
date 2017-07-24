import React from 'react';

export default class Welcome extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: ""
        };

    }

    render() {
        return <div>
            <h1>{this.props.message}</h1>
            <h2>{this.state.name}</h2>
            <button onClick={this.changeName}>Change Name</button>
        </div>
    }

    changeName = (event) => {
        this.setState({
            name: "Vishal"
        })
    }
}