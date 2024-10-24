import React from 'react'
import TypewriterEffect from "../Components/TypeWriterEffect";
import nanoId from 'nano-id';


const Projects = () => {
  

  const myProjects = [
    {
     title:"10 Html CSS Projects",
     thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/sheikhhuzaifa77o9%40gmail.com%20%2B%201729756983030?alt=media&token=31d5613a-e98f-4221-a388-102313397171",
     linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_i-completed-10-html-css-projects-with-the-activity-7216078428339380224-xdKz?utm_source=share&utm_medium=member_desktop",
     hostedLink: 'https://10-html-css-projects-portfolio.netlify.app/',
     githubRepo:"https://github.com/MuhammadHuzaifa22/10-HTML-CSS-Projects.git",
     linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7216078277575077888",
     cateogry:'html',
     details:"abcd",
     isForWeb:true,
     id:nanoId()
    },
    {
      title:"Price Oye Landing Page",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/sheikhhuzaifa7979%40gmail.com%20%2B%201729754975039?alt=media&token=0954c80d-9c56-4214-ba45-30aebed69f5a",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_i-created-priceoye-landing-page-with-the-activity-7216015760475758592-FSET?utm_source=share&utm_medium=member_desktop",
      hostedLink: 'https://priceoye-landing-page.netlify.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/PriceOye-Landing-Page.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7216015443231162368",
      category:'html',
      details:"abcd",
      isForWeb:true,
      id:nanoId()
     },
     {
      title:"Price Oye(Landing Page) With JS Objects Rendered Cards",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/sheikhhuzaifa7m79%40gmail.com%20%2B%201729757384144?alt=media&token=7da073d8-980f-40af-9cb5-c627d67d6345",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_i-rendered-js-object-cards-in-priceoye-with-activity-7216306277746978816-I6xJ?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://priceoye-with-js.netlify.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/Priceoye-With-JS-Object-Rendering.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7216306056665137152",
      category:'js',
      details:"abcd",
      isForWeb:true,
      id:nanoId(),
     },
     {
      title:"Percentage Generator",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/huzaifafurqan99k%40gmail.com%20%2B%201729761328172?alt=media&token=c8950104-e12b-46bf-8f0a-4e149d024fbf",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_i-created-percentage-generator-with-html-activity-7216340902447861760-hymR?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://percentage-generator.vercel.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/Percentage-Generator.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7216340685791055872",
      category:'js',
      details:"abcd",
      isForWeb:true,
      id:nanoId()
     },
     {
      title:"Todo App",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/huzaifafurqan99kj%40gmail.com%20%2B%201729762298263?alt=media&token=e7019b6f-46a4-455d-8d62-a1be0b1b4793",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_%F0%9D%99%B8-%F0%9D%9A%8C%F0%9D%9A%9B%F0%9D%9A%8E%F0%9D%9A%8A%F0%9D%9A%9D%F0%9D%9A%8E%F0%9D%9A%8D-%F0%9D%9A%83%F0%9D%9A%98%F0%9D%9A%8D%F0%9D%9A%98-%F0%9D%9A%8A%F0%9D%9A%99%F0%9D%9A%99-%F0%9D%9A%A0%F0%9D%9A%92%F0%9D%9A%9D%F0%9D%9A%91-activity-7216388970518048768-dZBe?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://todo-app-xi-snowy.vercel.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/Todo-App.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7216388823079874561",
      category:'js',
      details:"abcd",
      isForWeb:true,
      id:nanoId()
     },
     {
      title:"Rendering YouTube Cards Using the Filter Method",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/huzaifafurqan99kj%40gmail.com%20%2B%201729762298263?alt=media&token=e7019b6f-46a4-455d-8d62-a1be0b1b4793",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_%F0%9D%99%B0%F0%9D%9A%97%F0%9D%9A%98%F0%9D%9A%9D%F0%9D%9A%91%F0%9D%9A%8E%F0%9D%9A%9B-%F0%9D%9A%8E%F0%9D%9A%A1%F0%9D%9A%92%F0%9D%9A%9D%F0%9D%9A%8E%F0%9D%9A%8D-%F0%9D%9A%99%F0%9D%9A%9B%F0%9D%9A%98%F0%9D%9A%93%F0%9D%9A%8E%F0%9D%9A%8C%F0%9D%9A%9D-activity-7216443676443463680-1FEr?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://todo-app-xi-snowy.vercel.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/Todo-App.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7216443357613498368",
      category:'js',
      details:"abcd",
      isForWeb:true,
      id:nanoId()
     },

  ]

  return (
    <div id="projects">
<h1 className='text-center pt-5 text-3xl text-[#24ff18]'> <TypewriterEffect details1={"Projects"} /></h1>
    </div>
  )
}

export default Projects