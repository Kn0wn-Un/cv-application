import React, { Component } from 'react';
import data from '../data';

class Interests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
        };
        this.delInt = this.delInt.bind(this);
    }
    delInt(e) {
        data.interests.splice(Number(e.target.id), 1);
        this.setState({ data: data.interests });
    }
    render() {
        const arr = this.state.data.map((interest, index) => {
            return (
                <li key={index}>
                    <span>{interest}</span>
                    {this.props.edit ? (
                        <i
                            id={index}
                            className="fa fa-trash per-edit"
                            onClick={this.delInt}
                        ></i>
                    ) : null}
                </li>
            );
        });
        return <div className="container list">{arr}</div>;
    }
}

export default Interests;
