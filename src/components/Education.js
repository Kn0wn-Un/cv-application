import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let carArr = this.props.edu.map((study) => {
            return (
                <div class="level box" key={study.id}>
                    <div class="level-left">
                        <div>
                            <div class="subtitle">{study.year}</div>
                        </div>
                    </div>
                    <div class="level-right">
                        <div>
                            <div class="subtitle">{study.title}</div>
                            <div class="heading">{study.school}</div>
                        </div>
                    </div>
                </div>
            );
        });
        return <div>{carArr}</div>;
    }
}

export default Education;
