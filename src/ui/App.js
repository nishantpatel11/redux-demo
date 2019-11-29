import React from 'react';
import './App.css';

import {DevTools} from './DevTool';
import {NavBar} from './Nav';
import {Footer} from './Footer';

const App = () => (
    <div>
        <NavBar />
        <DevTools />
        <Footer />
    </div>
  );

  export default App;