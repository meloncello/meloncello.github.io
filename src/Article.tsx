import React, { useState } from "react";
import wiki, { infobox, langLinks, pageOptions, randomFormats, wikiSummary } from "wikipedia";
import './wiki.css'
import iso6391 from "iso-639-1" 

type pageProps = { title: string, font?: string, langCode: string };
type onClickFun = React.Dispatch<React.SetStateAction<string>>
type langElemProps = { code: string
                     , funcs: onClickFun[]
                     , title: string };

const getTitle = (url: URL): string => url.pathname.split("/")[2] // puo' dare errori, ocio

const LangElement = ({ code, funcs, title }: langElemProps): JSX.Element => {
    return (
            <li onClick={() => {
                                funcs[0](code);
                                funcs[1](encodeURI(title));
                              }}>
                {iso6391.getNativeName(code)}
                </li>
            )
}

//const Langs = 

export const Article = ({ title, font, langCode }: pageProps): JSX.Element => {
    const options: pageOptions = {
        redirect: true,
        preload: true,
        fields: ["html", "content", "tables"]
    };
    
    const [state, setState] = useState("");
    const [lang, setLang]   = useState(langCode); 
    const [elements, setElements] = useState(<div></div>);
    const [titleState, setTitle] = useState(title);

    (async () => {
        const change = await wiki.setLang(lang);
        const page = await wiki.page(titleState, options);
        const html = await page.html();
        const langs = await page.langLinks({redirect: false, limit: 100});
        const elem = langs.map(x => [x.lang, x.url])
                          .map(([c, url]) => LangElement({ code: c,
                                                           funcs: [setLang, setTitle], 
                                                           title: getTitle(new URL(url))}));
        console.log(change);
        setElements(<ul className="lang-names">{elem}</ul>);
        setState(html);
    })();

    return (<div    style={{fontFamily: font}}>
            {elements} 
            <div dangerouslySetInnerHTML={{ __html: state }}></div>
    </div>);
} 
