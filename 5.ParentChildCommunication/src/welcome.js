import React from 'react';

export default class Welcome extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            newHeader: "sdgsidghiswgdfiwegfiew"

        }
    }

    changeHeader = () => {
        this.props.changeNewHeader(this.state.newHeader)
    };

    render() {
        return <div>
            <button onClick={this.props.message}>Show Alert</button>
            <button onClick={this.changeHeader}>change header</button>
        </div>


    }
}