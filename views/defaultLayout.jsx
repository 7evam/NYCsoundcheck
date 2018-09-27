import React from 'react';

export default ({ title, children }) => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
    </head>
    <body>
      <section className="section">
        <div className="container">
          {children}
        </div>
      </section>
    </body>
  </html>
);