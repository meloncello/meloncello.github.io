import React, { useState, useEffect } from 'react';
import './App.css';
import './menu.css';
import logo from './logo.png';
import { Article } from './Article';
import P404 from './404'
import { SearchWidget } from './Search';
import Home from './Home';

interface ParentCompProps {
  child?: React.ReactNode;
}

const Main: React.FC<ParentCompProps> = (props) => {
  const { child } = props;
  const [state, setState] = useState(false);
  const getFont = (b: boolean): string => b ? 'Unifrakturmaguntia' : 'Roboto';
  
  const Page = () => (
    <div style={{fontFamily: getFont(state)}}>
      {child}
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
              <li><a href="/home">Home</a></li>
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
              <li><a href="/search">Search</a></li>
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
  const url: URL = new URL(window.location.href);
  const [_, head, title] = url.pathname.split("/");
  const args = url.search;
  console.log(head, title, args);

  const child: React.ReactNode = (() => {
    console.log(url.pathname)
    if (url.pathname == "/")
      return (<Home/>);
    switch (head) {
    case "home":
      return (<Home/>);
    case "search":
      return (<SearchWidget/>)
    case "wiki":
      return (<Article title={title}/>);
    default:
      return(undefined);
    }
  })()

  if (child === undefined) {
    const body = document.getElementsByTagName("body").item(0);
    if (body != null)
      body.setAttribute("style", "background-color:black");
    return(
      <div className='Not-Found'>
      <P404/>
      </div>);
  }

  return (
    <div className="App">
    <Main child={child}></Main>
    </div>
  );
}
export default App;
