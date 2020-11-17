import React from 'react';
import Contact from './Contact';
import data from '../data';

class Name extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        console.log(data);
        return (
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <span className="title">First </span>
                        <span className="title">Last</span>
                    </div>
                    <Contact data={data.contact} />
                </div>
            </section>
        );
    }
}

export default Name;
