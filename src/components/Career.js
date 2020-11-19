import React, { Component } from 'react';
import data from '../data';

class Career extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data.career,
        };
        this.delJob = this.delJob.bind(this);
    }

    delJob(e) {
        data.career.splice(Number(e.target.id), 1);
        this.setState({ data: data.career });
    }
    render() {
        let carArr = this.props.career.map((work, index) => {
            return (
                <div className="level box" key={index}>
                    <div className="level-left">
                        <div>
                            <div className="subtitle">{work.year}</div>
                        </div>
                    </div>
                    <div className="level-right">
                        <div>
                            <div className="subtitle">
                                {work.company}
                                {this.props.edit ? (
                                    <span
                                        id={index}
                                        className="fa fa-trash info-del"
                                        onClick={this.delJob}
                                    ></span>
                                ) : null}
                            </div>
                            <div className="subtitle">{work.position}</div>
                            <div className="work-done">{work.workDone}</div>
                        </div>
                    </div>
                </div>
            );
        });
        return <div>{carArr}</div>;
    }
}

export default Career;
