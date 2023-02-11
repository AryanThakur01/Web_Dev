// console.log('hello world');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  
//   res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html');

//   res.end('Hello World This is Aryan Thakur');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>pseudo selector and more designing</title>
      <style>
      .container{
              background-color: rgb(229, 243, 240);
              border: 4px solid rgb(123, 12, 175);
              border-radius:15px ;
              padding: 20px;
              margin: 193px auto;
              width: 500px;
              
      }
      .btn{
          /* border: none; */
          background-color:rgb(205, 97, 226);
          border: 1px solid purple;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
      }
      a{
          text-decoration: none;
      }
      a:hover{
          background-color: cornsilk;
          font-size: large;
      }
      a:visited{
          color: rgb(255, 10, 10);
      }
      button:hover{
          background-color: cornsilk;
      }
      /* a/btn : hover/active/visited etc.. for different functions are known as psudo selectors */
      </style>
  </head>
  <body>
      <div id="cont1" class="container">
      <h1>BUTTON</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facilis quod repudiandae vel iure iste, repellendus dolorum laborum hic quaerat, exercitationem sequi at necessitatibus natus excepturi accusantium tempora sint esse temporibus error eaque.</p>
      <a href="www.google.com" class="btn">read more</a>
      <button class="btn">contact us</button>
      </div>
  </body>
  </html>`);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});