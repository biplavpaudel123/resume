const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // resp.write('<link rel="stylsheet" type="text/css" href="C:\Users\Funky\Desktop\Harddisk\Web development tutorial\betterone\index.css">');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Biplav</title>
      <link rel="stylesheet" href="index.css">
      <link rel="stylesheet" media="screen and (max-width: 600px)" href="responsive.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Kanit&display=swap" rel="stylesheet">
  </head>
  
  <body>
      <nav class="navigation">
          <div id="logo"><img id="logoimg" src="logo.png"></div>
          <ul>
              <li class="item"><a href="#">Home</a></li>
              <li class="item"><a href="#skills">Skills</a></li>
              <li class="item"><a href="#about">About</a></li>
              <li class="item"><a href="#contact">Contact</a></li>
          </ul>
      </nav>
      <section id="home">
          <div><img src="My photo.JPEG" alt="my-photo"></div>
          <div class="h1-primary-center">
              <h1>
                  Welcome to my site.
              </h1>
          </div>
          <div class="secondary">
              <p>Hello, This is me, 'Biplav Paudel'.</p>
          </div>
      </section>
      <section id="skills">
          <div class="h1-primary-center">
              <h1>My Skills</h1>
          </div>
          <div class="secondary" id="skillscontainer">
              <div class="skills-container">
                  <h3>Video Editing</h3>
                  <img src="video editing.png" alt="video editing">
                  <p>I do video editing, creating gaming montages of games that I play. I can help a content creater with
                      sound and vidoes,color grading,making highlights with my creativity.</p>
              </div>
              <div class="skills-container">
                  <h3>Coding</h3>
                  <img src="coding.png" alt="video editing">
                  <p>Being a computer engineer I can do coding in different languages.I can create websites like this
                      without any frameworks. I am always seeking to upgrade my coding skills.</p>
              </div>
              <div class="skills-container">
                  <h3>Gaming</h3>
                  <img src="gaming.png" alt="video editing">
                  <p>I play games preety good, I can compete in several fps and esports games and I can have skills close
                      to professional players.</p>
              </div>
          </div>
      </section>
      <section id="about">
          <img src="about.jpg" alt="about">
          <div id="des">
              <div class="h1-primary-center">
                  <h1>About Me</h1>
              </div>
              <div class="secondary" id="aboutdes">
                  I am a computer engineering student who is more focused on experience then the bookish knowledege. My
                  mind prefers gain knowledege by deploying body at the battleground of field I wish to be. This makes me
                  always eger to learn about softwares and codes. As per now, my goal is to acquire most of the
                  programming skills and find out a better aspect of modern era to make people enjoy and utilize
                  technologies.
              </div>
          </div>
      </section>
      <section id="contact">
          <div><h3 class="h1-primary-center">Contact Me</h3></div>
          <div id="contact-items">
              <div class="contact-items"><img class="image" src="facebbook.png"><a
                      href="https://www.facebook.com/biplav.paudel12" target="_blank">@Catrimate-Encolate</a></div>
              <div class="contact-items"><img class="image" src="phone.png"><a
                      href="tel:+977-9848942262">+977-9848942262</a></div>
              <div class="contact-items"><img class="image" src="instagram.png"><a
                      href="https://www.instagram.com/edrine__tridialin/" target="_blank">@edrine__tridialin</a></div>
              <div class="contact-items"><img class="image" src="gmail.png"><a
                      href="mailto:biplavpaudel123@gmail.com">biplavpaudel123@gmail.com</a></div>
          </div>
      </section>
      <footer>
          <p>&copy; 2022. Biplav Paudel </p>
      </footer>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});