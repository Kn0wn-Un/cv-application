import React, { Component } from 'react';

class Social extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const socArr = this.props.data.map((handle) => {
            return (
                <div className="container" key={handle.id}>
                    <span className="subtitle has-text-black">
                        {handle.website + ': '}
                    </span>
                    <span className="subtitle has-text-black">
                        {handle.userName}
                    </span>
                </div>
            );
        });
        return socArr;
    }
}

export default Social;
