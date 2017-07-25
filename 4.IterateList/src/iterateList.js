import React from 'react';

export default class IterateList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            listItems: [1, 2, 3, 4, 5],
            tempNum: ""

        };

    }

    render() {

        let list = this.state.listItems.map((number, key) =>
            <li key={key}>{number}</li>
        );

        const isEnable = this.state.tempNum !== "";


        return <div>
            <ul>
                {list}
            </ul>

            <input type="number" value={this.state.tempNum} onChange={this.onChangeNumber}/>

            <button disabled={!isEnable} onClick={this.addData}>Add</button>

            <button onClick={this.removeData}>Remove</button>
        </div>
    }

    addData = () => {


        this.state.listItems.push(this.state.tempNum);

        this.setState({
            listItems: this.state.listItems,
            tempNum: ""


        })


    };

    onChangeNumber = (event) => {
        this.setState({
            tempNum: event.target.value
        })
    };

    removeData = (event) => {

        this.state.listItems.splice(0, 1);
        this.setState({
            listItems: this.state.listItems,
            tempNum: ""

        });

        console.log(this.state.listItems.length);
    }

}