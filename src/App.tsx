import React, { useState, useEffect } from 'react';
import './App.css';
import './menu.css';
import logo from './logo.png';
import { Article } from './Article';
import { JsxEmit } from 'typescript';

const Main = (Child: JSX.Element): JSX.Element {
  const [state, setState] = useState(false);
  const getFont = (b: boolean): string => b ? 'Unifrakturmaguntia' : 'Roboto';

  return (
    <header className="App-Header">
      <div id="top-header">
        <img src={logo} id="logo" alt="logo" />
        <div id="menu">
          <nav>
            <ul>
              <li><a href="#">Default</a></li>
              <li>
                <button style={{
                  fontFamily: 'UnifrakturMaguntia',
                  textTransform: 'capitalize',
                  fontSize: '17.8pt'
                }}
                  value='input-botton'
                  onClick={() => setState(!state)}
                 >
                  Fraktur
                </button>
              </li>
              <li><a href="#">Search</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div id="header-image-menu">
      </div>
      </header>
      <div style={fontFamily: {getFont(state)} }>
      <Child></Child>
      </div>
  )
}


function App(): JSX.Element {
  const Page: JSX.Element = Article({title: 'dog'});
  return (
    <div className="App">
    <Main Child={Page}></Main>
    </div>
  );
}
export default App;
