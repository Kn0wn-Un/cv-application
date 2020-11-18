import React, { Component } from 'react';

class Interests extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let i = 0;
        const arr = this.props.data.map((interest) => {
            return <li key={i++}>{interest}</li>;
        });
        return <div className="container list">{arr}</div>;
    }
}

export default Interests;
