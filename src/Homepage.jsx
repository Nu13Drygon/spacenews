import React from "react";
import newLogo from './warp.svg'





const Homepage = ({onClickHomepage}) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={newLogo} className="App-logo" alt="logo" />
                <button onClick={onClickHomepage} style={{padding: '10px 15px', marginTop: '40px'}} className="btn btn-link">Enter</button>
            </header>
        </div>
    )
}

export default Homepage