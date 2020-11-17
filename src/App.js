import React from 'react';
import './styles/styles.css';
import Name from './components/Name';

function App() {
    return (
        <div className="cvarea">
            <div className="personal">
                <Name />
            </div>
            <div className="info"></div>
        </div>
    );
}

export default App;
