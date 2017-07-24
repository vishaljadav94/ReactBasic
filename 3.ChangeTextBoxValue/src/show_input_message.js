import React from 'react';


export default class ShowInputMsg extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            message: this.props.message,
            tempMsg: ""
        }
    }


    render() {
        return <div>
            <input
                type="text"
                placeholder ={this.state.message}
                onChange={this.handleChange}

            />
            <button id="showmsg" onClick={this.showMessage}>Show</button>
            <p>{this.state.message}</p>

        </div>
    }

    /*showMessage = (event) => {
        let msg = document.getElementById("message");
        this.setState({
            message: msg.value
        })
    }*/

    showMessage = (event) => {
        this.setState({
            message: this.state.tempMsg
        })
    };

    handleChange = (event) => {
        this.setState({
            tempMsg: event.target.value
        })
    };
}