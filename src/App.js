import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigation from './components/Navigation.jsx'
import LandingView from './components/LandingView.jsx'
import SkillCard from './components/SkillsCard.jsx'
import GraphicDesign from './components/GraphicDesign.jsx'
import FooterContent from './components/FooterContent.jsx'

function App() {
    return (
        <div>
            <Navigation />
            <LandingView/>
            <SkillCard/>
            <GraphicDesign/>
            <FooterContent/>
        </div>
    );
}

export default App;