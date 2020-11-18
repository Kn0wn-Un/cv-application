import React, { Component } from 'react';

class Career extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let carArr = this.props.career.map((work) => {
            return (
                <div class="level box" key={work.id}>
                    <div class="level-left">
                        <div>
                            <div class="subtitle">{work.year}</div>
                        </div>
                    </div>
                    <div class="level-right">
                        <div>
                            <div class="subtitle">{work.company}</div>
                            <div class="subtitle">{work.position}</div>
                            <div class="work-done">{work.workDone}</div>
                        </div>
                    </div>
                </div>
            );
        });
        return <div>{carArr}</div>;
    }
}

export default Career;
