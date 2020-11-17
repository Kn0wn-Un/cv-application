import React from 'react';
import data from '../data';
import Contact from './Contact';
import Social from './Social';
import Interests from './Interests';

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
                    {data.social && (
                        <div className="container has-text-black">
                            <div className="is-size-5 has-text-weight-bold per-heading">
                                Social
                            </div>
                            <Social data={data.social} />
                        </div>
                    )}
                    {data.interests && (
                        <div className="container has-text-black">
                            <div className="is-size-5 has-text-weight-bold per-heading">
                                Interests
                            </div>
                            <Interests data={data.interests} />
                        </div>
                    )}
                </div>
            </section>
        );
    }
}

export default Name;
