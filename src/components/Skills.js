import React, { Component } from 'react';

class Skills extends Component {
    constructor() {
        super();
        this.state = {};
    }
    genStars(num) {
        let stars = [...Array(5).keys()];
        console.log(stars);
        let stArr = stars.map((n, index) => {
            if (n < num)
                return <span key={index} class="fa fa-star fa-lg"></span>;
            else return <span key={index} class="fa fa-star-o fa-lg"></span>;
        });
        console.log(stArr);
        return <div>{stArr}</div>;
    }
    render() {
        const skArr = this.props.skills.map((skill) => {
            return (
                <div class="level" key={skill.id}>
                    <div class="level-item">
                        <div>
                            <div class="subtitle">{skill.name}</div>
                        </div>
                    </div>
                    <div class="level-item">{this.genStars(skill.rating)}</div>
                </div>
            );
        });
        return <div className="container">{skArr}</div>;
    }
}

export default Skills;
