import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigation from './components/Navigation.jsx'
import LandingView from './components/LandingView.jsx'

function App() {
    return (
        <div>
            <Navigation />
            <LandingView/>
        </div>
    );
}

export default App;