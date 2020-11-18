import React from 'react';
import './styles/styles.css';
import Name from './components/Name';
import Info from './components/Info';
function App() {
    return (
        <div className="cvarea">
            <div className="personal">
                <Name />
            </div>
            <div className="info">
                <Info />
            </div>
        </div>
    );
}

export default App;
