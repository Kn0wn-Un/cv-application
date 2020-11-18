import React, { Component } from 'react';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    genStars(num) {
        let stars = [...Array(5).keys()];
        let stArr = stars.map((n, index) => {
            if (n < num)
                return <span key={index} className="fa fa-star fa-lg"></span>;
            else
                return <span key={index} className="fa fa-star-o fa-lg"></span>;
        });
        return <div>{stArr}</div>;
    }
    render() {
        const skArr = this.props.skills.map((skill) => {
            return (
                <div className="level" key={skill.id}>
                    <div className="level-item">
                        <div>
                            <div className="subtitle">{skill.name}</div>
                        </div>
                    </div>
                    <div className="level-item">
                        {this.genStars(skill.rating)}
                    </div>
                </div>
            );
        });
        return <div className="container">{skArr}</div>;
    }
}

export default Skills;
