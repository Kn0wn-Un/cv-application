import React, { Component } from 'react';

class Career extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let carArr = this.props.career.map((work) => {
            return (
                <div className="level box" key={work.id}>
                    <div className="level-left">
                        <div>
                            <div className="subtitle">{work.year}</div>
                        </div>
                    </div>
                    <div className="level-right">
                        <div>
                            <div className="subtitle">{work.company}</div>
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
