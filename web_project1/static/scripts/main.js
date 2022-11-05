const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  // alert(mySrc);   // for show mySrc content
    
  if (mySrc === "/static/images/funny_pic1.jpg" ) {
    myImage.setAttribute("src", '/static/images/funny_pic2.jpg');
  } else {
    myImage.setAttribute("src", "/static/images/funny_pic1.jpg");
  }

};

/*
https://flask.palletsprojects.com/en/2.2.x/patterns/javascript/

It is important to understand the difference between templates and JavaScript.
Templates are rendered on the server, before the response is sent to the user’s browser.
JavaScript runs in the user’s browser, after the template is rendered and sent.
Therefore, it is impossible to use JavaScript to affect how the Jinja template is rendered, 
but it is possible to render data into the JavaScript that will run.

因為上面的理由，所以本範例先使用 root path方式

*/

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  


  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };