import React from "react";
import { useState } from "react";
import wiki from "wikipedia";
type searchProps = { query: string };

export const SearchWidget = () => {
    const [state, setState] = useState("");
    const url: URL = new URL(window.location.href);
    const handleSubmit = (e: any) => {
        e.preventDefault();
    
        const hostname = window.location.hostname;
        const redirectUrl = `/wiki/${state}`;
    
        window.location.href = redirectUrl;
      };

    return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" 
                 value={state} 
                 onChange={e => setState(e.target.value)}/>
        <input type="submit"></input>
        </label>
      </form>
    </div>
    )
}

