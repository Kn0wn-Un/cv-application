import React, { Component } from 'react';
import data from '../data';

class SkillsInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            rating: 0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.addSkill = this.addSkill.bind(this);
    }
    addSkill(e) {
        let { name, rating } = this.state;
        if (name.trim() === '') {
            this.props.done();
            e.preventDefault();
            return;
        }
        const obj = (() => {
            return { id: '', name, rating };
        })();
        data.skills = data.skills.map((skill, index) => {
            return { ...skill, id: index };
        });
        data.skills.push({ ...obj, id: data.skills.length });
        this.props.done();
        e.preventDefault();
        console.log(data.skills);
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    render() {
        return (
            <div className="level box">
                <form onSubmit={this.addSkill}>
                    <label>Add Skill:</label>
                    <br />
                    <input
                        type="text"
                        placeholder="eg: teamwork!"
                        id="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    ></input>
                    <br />
                    <label>Rating(0-5):</label>
                    <br />
                    <input
                        type="number"
                        min={0}
                        max={5}
                        id="rating"
                        value={this.state.rating}
                        onChange={this.handleChange}
                    ></input>
                    <br />
                    <button>Submit</button>
                    <button onClick={this.props.done}>Cancel</button>
                </form>
            </div>
        );
    }
}

export default SkillsInput;
