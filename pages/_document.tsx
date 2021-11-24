import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="description" content=""/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <title>EXODIA.FI | Fantom Opera Blockchain</title>
                <meta name="description"
                      content="Exodia utilizes Treasury Reserves on the Fantom Opera blockchain to enable long-term price consistency and scarcity within an infinite supply system"/>


                <link rel="icon" href="favicon.png"/>

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"crossOrigin"}/>
                <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;800&display=swap"
                      rel="stylesheet"/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
