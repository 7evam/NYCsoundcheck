import React from 'react';
import Nav from './Nav';

export default (props) => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>NYC Soundcheck</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js" />
      <link rel="stylesheet" href="/css/styles.css" />
      <link rel="stylesheet" href="/css/showArtist.css" />
    </head>
    <body>
    <Nav></Nav>

      <section className="section">
        <div className="container">
          {props.children}
        </div>
      </section>
      <script src="/scripts/script.js"></script>
    </body>
  </html>
);
