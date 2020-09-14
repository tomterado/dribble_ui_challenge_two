import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    LeftColumnContainer,
    RightColumnContainer

} from "./styles"
import LeftCol from "./components/leftCol"
import RightCol from "./components/rightCol"
import { theme } from './theme';

/*
Structure of the UI
    Left Column (Flex Column)
        Logo
        Titles
        Premium Section
    Right Column
        Navigation
        Activity
        Daily Revenue + Support Center
        Appointments + Team

Libraries
    Styled Components
    React
    React Feathers
    vx React

Improvements
    Figma coding for time
    Limited Copy Paste.

 */

function App() {
    return (
        <div className="App">
            <div style={{display: 'flex', backgroundColor: theme.wholeBackground}}>
                <LeftCol/>
                <RightCol/>
            </div>
    </div>
    );
}

export default App;
