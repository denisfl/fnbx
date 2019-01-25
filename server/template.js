module.exports = ({ markup }) => `
  <html>
    <link rel="stylesheet" type="text/css" href="/app.css">
    <script type="text/javascript" src="/app.js"></script>
    <body>
      <div id="appRoot">${markup}</div>
    </body>
  </html>
`;
