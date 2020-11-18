import React from 'react';
import Summary from './Summary';
import Career from './Career';
import Education from './Education';
import Skills from './Skills';
import data from '../data';

function Info() {
    return (
        <div className="tile is-ancestor is-vertical">
            <div className="tile is-parent">
                <article className="tile is-child notification box">
                    <div className="subtitle per-heading">Summary:</div>
                    <div className="content">
                        <Summary summary={data.summary} />
                    </div>
                </article>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child notification box">
                    <div className="subtitle per-heading">Career:</div>
                    <div className="content">
                        <Career career={data.career} />
                    </div>
                </article>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child notification box">
                    <div className="subtitle per-heading">Education:</div>
                    <div className="content">
                        <Education edu={data.education} />
                    </div>
                </article>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child notification box">
                    <div className="subtitle per-heading">Skills:</div>
                    <div className="content">
                        <Skills skills={data.skills} />
                    </div>
                </article>
            </div>
        </div>
    );
}

export default Info;
