import React, { useState, useEffect } from 'react';
import './App.css';
import './menu.css';
import logo from './logo.png';
import { Article } from './Article';



function Content() {
  return (<Article title='Work_in_progress' />);
}

const Main = (): JSX.Element => {
  const [state, setState] = useState(true);
  const getFont = (b: boolean): string => b ? 'Unifrakturmaguntia' : 'Roboto';
  
  const Page = () => (
    <div style={{fontFamily: getFont(state)}}>
      <Content></Content>
    </div>
  )

  return (
    <>
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
      <Page/>
      </>
  )
}

// todo: generare pag automaticamente in base a url

function App(): JSX.Element {
  const Page: JSX.Element = Article({title: 'dog'});
  return (
    <div className="App">
    <Main></Main>
    </div>
  );
}
export default App;
