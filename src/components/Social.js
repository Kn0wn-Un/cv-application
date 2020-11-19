import React, { Component } from 'react';
import data from '../data';

class Social extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data.social,
        };
        this.delSocial = this.delSocial.bind(this);
    }
    delSocial(e) {
        data.social.splice(Number(e.target.id), 1);
        data.social = data.social.map((acc, index) => {
            return { ...acc, id: index };
        });
        this.setState({ data: data.social });
    }
    componentDidUpdate(prevProps) {
        if (prevProps.edit !== this.props.edit) {
            this.setState({ data: data.social });
        }
    }
    render() {
        const socArr = this.state.data.map((handle) => {
            return (
                <div className="container" key={handle.id}>
                    <span className="subtitle has-text-black">
                        {handle.website + ': '}
                    </span>
                    <span className="subtitle has-text-black">
                        {handle.userName}
                    </span>
                    {this.props.edit ? (
                        <i
                            id={handle.id}
                            className="fa fa-trash per-edit"
                            onClick={this.delSocial}
                        ></i>
                    ) : null}
                </div>
            );
        });
        return socArr;
    }
}

export default Social;
