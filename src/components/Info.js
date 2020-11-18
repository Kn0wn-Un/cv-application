import React from 'react';
import Summary from './Summary';
import Career from './Career';
import Education from './Education';
import Skills from './Skills';
import data from '../data';

function Info() {
    return (
        <div class="tile is-ancestor is-vertical">
            <div class="tile is-parent">
                <article class="tile is-child notification box">
                    <div class="subtitle per-heading">Summary:</div>
                    <div class="content">
                        <Summary summary={data.summary} />
                    </div>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification box">
                    <div class="subtitle per-heading">Career:</div>
                    <div class="content">
                        <Career career={data.career} />
                    </div>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification box">
                    <div class="subtitle per-heading">Education:</div>
                    <div class="content">
                        <Education edu={data.education} />
                    </div>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification box">
                    <div class="subtitle per-heading">Skills:</div>
                    <div class="content">
                        <Skills />
                    </div>
                </article>
            </div>
        </div>
    );
}

export default Info;
