import React, { Component } from 'react';
import Summary from './Summary';
import Career from './Career';
import Education from './Education';
import Skills from './Skills';
import SummaryInput from './SummaryInput';
import data from '../data';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sumEdit: false,
        };
        this.editSum = this.editSum.bind(this);
    }
    editSum() {
        this.setState({ sumEdit: !this.state.sumEdit });
    }
    render() {
        return (
            <div className="tile is-ancestor is-vertical">
                <div className="tile is-parent">
                    <article className="tile is-child notification box">
                        <div className="subtitle per-heading">
                            Summary:
                            <i
                                className="fa fa-pencil per-edit"
                                aria-hidden="true"
                                onClick={this.editSum}
                            ></i>
                        </div>
                        <div className="content">
                            {this.state.sumEdit ? (
                                <SummaryInput done={this.editSum} />
                            ) : (
                                <Summary
                                    summary={data.summary}
                                    done={this.editSum}
                                />
                            )}
                        </div>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification box">
                        <div className="subtitle per-heading">Career:</div>
                        <div className="content">
                            <Career career={data.career} />
                        </div>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification box">
                        <div className="subtitle per-heading">Education:</div>
                        <div className="content">
                            <Education edu={data.education} />
                        </div>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification box">
                        <div className="subtitle per-heading">Skills:</div>
                        <div className="content">
                            <Skills skills={data.skills} />
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}

export default Info;
