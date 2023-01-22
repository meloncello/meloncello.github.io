import React, { useState } from "react";
import wiki, { infobox, langLinks, pageOptions, randomFormats, wikiSummary } from "wikipedia";
import P404 from "./404";

type pageProps = { title: string, font?: string };

export const Article = ({ title, font }: pageProps): JSX.Element => {
    const options: pageOptions = {
        redirect: true,
        preload: true,
        fields: ["html", "content","infobox", "tables"]
    };
    
    const [state, setState] = useState("");

    (async () => {
        const page = await wiki.page(title, options);
        const html = await page.html();
        await console.log(`contentmodel: ${page.contentmodel} \n
                    pagelanguagedir: ${page.pagelanguagedir}
                    pagelanguagehtmlcode: ${page.pagelanguagehtmlcode}
                    length: ${page.length}
                    ns: ${page.ns}
                    
                    contnet: ${page.content}
                    langLinks: ${page._langLinks}`)
        setState(html);
    })();

    //if (state == "")
    //    return(<P404></P404>)
    return (<div    style={{fontFamily: font}}
                    dangerouslySetInnerHTML={{ __html: state }}></div>);
} 
