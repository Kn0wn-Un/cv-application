import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let { Phone, email, LinkedIn } = this.props.data;
        return (
            <div className="container has-text-black">
                <div className="is-size-5 has-text-weight-bold per-heading">
                    Contact Me
                </div>
                {Phone === '' || (
                    <div className="container">
                        <span className="subtitle has-text-black">Phone: </span>
                        <span className="subtitle has-text-black">{Phone}</span>
                    </div>
                )}
                {email === '' || (
                    <div className="container has-text-black">
                        <span className="subtitle has-text-black">Email: </span>
                        <span className="subtitle has-text-black">{email}</span>
                    </div>
                )}
                {LinkedIn === '' || (
                    <div className="container has-text-black">
                        <span className="subtitle has-text-black">
                            LinkedIn:{' '}
                        </span>
                        <span className="subtitle has-text-black">
                            {LinkedIn}
                        </span>
                    </div>
                )}
            </div>
        );
    }
}

export default Contact;
