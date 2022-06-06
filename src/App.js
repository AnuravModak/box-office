import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Navs from './components/Navs.js';
import Home from './pages/Home.js';
import Starred from './pages/Starred.js';
import Show from './pages/show';
import { ThemeProvider } from 'styled-components';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};
function App() {
  // inside switch we need to define routes
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/starred">
          <Starred />
        </Route>

        <Route exact path="/show/:id">
          <Show />
        </Route>
        <Route>404 error!! Not found!!</Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
