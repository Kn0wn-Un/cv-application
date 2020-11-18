import React, { Component } from 'react';
import data from '../data';

class SummaryInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: data.summary,
        };
        this.handleChange = this.handleChange.bind(this);
        this.changeSumm = this.changeSumm.bind(this);
    }
    changeSumm(e) {
        data.summary = this.state.summary.trim();
        this.props.done();
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    render() {
        return (
            <form onSubmit={this.changeSumm}>
                <textarea
                    placeholder="write something about yourself..."
                    id="summary"
                    value={this.state.summary}
                    onChange={this.handleChange}
                    className="summary-ta"
                />
                <br />
                <button>Submit</button>
                <button>Cancel</button>
            </form>
        );
    }
}

export default SummaryInput;
