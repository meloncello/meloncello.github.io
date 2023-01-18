import React, { useState } from "react";
import wiki, { pageOptions } from "wikipedia";

type pageProps = { title: string, font?: string};

export const Article = ({ title, font }: pageProps): JSX.Element => {
    const options: pageOptions = {
        redirect: true,
        preload: true,
        fields: ["html"]
    };

    const [state, setState] = useState("");

    (async () => {
        const page = await wiki.page(title, options);
        const html = await page.html();
        setState(html);
    })();

    return (<div    style={{fontFamily: font}}
                    dangerouslySetInnerHTML={{ __html: state }}></div>);
} 