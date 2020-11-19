import React, { Component } from 'react';
import data from '../data';

class CareerInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startYear: '',
            endYear: '',
            year: '',
            company: '',
            position: '',
            workDone: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.addJob = this.addJob.bind(this);
    }
    addJob(e) {
        let {
            startYear,
            endYear,
            year,
            company,
            position,
            workDone,
        } = this.state;
        if (
            startYear.trim() === '' ||
            endYear.trim() === '' ||
            company.trim() === '' ||
            position.trim() === '' ||
            workDone.trim() === ''
        ) {
            this.props.done();
            e.preventDefault();
            return;
        }
        year = startYear + ' - ' + endYear;
        const obj = (() => {
            return { id: '', year, company, position, workDone };
        })();
        data.career = data.career.map((job, index) => {
            return { ...job, id: index };
        });
        data.career.push({ ...obj, id: data.career.length });
        this.props.done();
        e.preventDefault();
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    render() {
        return (
            <div className="level box">
                <form onSubmit={this.addJob}>
                    <label>Add Career Details:</label>
                    <br />
                    <label>Starting Year:</label>
                    <br />
                    <input
                        type="text"
                        placeholder="start year"
                        id="startYear"
                        value={this.state.startYear}
                        onChange={this.handleChange}
                    ></input>
                    <br />
                    <label>Ending Year:</label>
                    <br />
                    <input
                        type="text"
                        placeholder="end year(/current)"
                        id="endYear"
                        value={this.state.endYear}
                        onChange={this.handleChange}
                    ></input>
                    <br />
                    <label>Company Name:</label>
                    <br />
                    <input
                        type="text"
                        placeholder="eg: Monsters.Inc"
                        id="company"
                        value={this.state.company}
                        onChange={this.handleChange}
                    ></input>
                    <br />
                    <label>Position:</label>
                    <br />
                    <input
                        type="text"
                        placeholder="eg: Manager"
                        id="position"
                        value={this.state.position}
                        onChange={this.handleChange}
                    ></input>
                    <br />
                    <label>Work Done/Handled</label>
                    <br />
                    <textarea
                        placeholder="write something about your work..."
                        id="workDone"
                        value={this.state.workDone}
                        onChange={this.handleChange}
                    />
                    <br />
                    <button>Submit</button>
                    <button onClick={this.props.done}>Cancel</button>
                </form>
            </div>
        );
    }
}

export default CareerInput;
