// 1.Easy assessment
//1. changin <h1> tag 
document.getElementById("main-heading").textContent = "My Awesome Shop";
//2.selecting <p> tag and changing its inner html 
document.querySelector(".tagline").innerHTML = "Find the <strong>best</strong> products here!";
//3. selecting footer <p> tag and including my name as b.v.kowshik and current year
document.querySelector("footer p").textContent = `© ${new Date().getFullYear()} Byrapuneni Venkata Kowshik`;

// Medium
//1.Select the <main id="app-container">.
const main = document.getElementById("app-container");

//2. createing a new <h2> and setting its text conetent to aboutus
const aboutHeading = document.createElement("h2");
aboutHeading.textContent = "About Us";

//3. createing a new <p> and setting its text content to "We are a small team passionate about quality products."
const aboutPara = document.createElement("p");
aboutPara.textContent = "We are a small team passionate about quality products.";

//4.appending both <h2> and <p> tho the main container
main.appendChild(aboutHeading);
main.appendChild(aboutPara);



// 3. Hard assessment
// 1. Create a new <ul> element and set its id to "product-list".

const contactDiv = document.createElement("div");
contactDiv.className = "contact-info";

//2.creating email and phone no
const emailPara = document.createElement("p");
emailPara.textContent = "Email: contact@awesomeshop.com";

const phonePara = document.createElement("p");
phonePara.textContent = "Phone: 123-456-7890";

//3.footer element anfd insertBefore the footer
contactDiv.appendChild(emailPara);
contactDiv.appendChild(phonePara);

const footer = document.querySelector("footer");
document.body.insertBefore(contactDiv, footer);
