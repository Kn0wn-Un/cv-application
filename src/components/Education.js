import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let carArr = this.props.edu.map((study) => {
            return (
                <div className="level box" key={study.id}>
                    <div className="level-left">
                        <div>
                            <div className="subtitle">{study.year}</div>
                        </div>
                    </div>
                    <div className="level-right">
                        <div>
                            <div className="subtitle">{study.title}</div>
                            <div className="heading">{study.school}</div>
                        </div>
                    </div>
                </div>
            );
        });
        return <div>{carArr}</div>;
    }
}

export default Education;
