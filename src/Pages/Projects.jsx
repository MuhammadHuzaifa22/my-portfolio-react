import React from 'react'
import nanoId from 'nano-id';
import { FaLink } from "react-icons/fa6";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoVideocamSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";


const Projects = () => {
  

  const myProjects = [
    {
     title:"10 Html CSS Projects",
     thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/sheikhhuzaifa77o9%40gmail.com%20%2B%201729756983030?alt=media&token=31d5613a-e98f-4221-a388-102313397171",
     linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_i-completed-10-html-css-projects-with-the-activity-7216078428339380224-xdKz?utm_source=share&utm_medium=member_desktop",
     hostedLink: 'https://10-html-css-projects-portfolio.netlify.app/',
     githubRepo:"https://github.com/MuhammadHuzaifa22/10-HTML-CSS-Projects.git",
     linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7216078277575077888?compact=1",
     category:'html',
     details:"abcd",
     isForWeb:true,
     useOfApi:false,
     useOfFirebase:false,
     isOnlyUi:true,
     usedTailwind:false,
     id:nanoId()
    },
    {
      title:"Price Oye Landing Page",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/sheikhhuzaifa7979%40gmail.com%20%2B%201729754975039?alt=media&token=0954c80d-9c56-4214-ba45-30aebed69f5a",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_i-created-priceoye-landing-page-with-the-activity-7216015760475758592-FSET?utm_source=share&utm_medium=member_desktop",
      hostedLink: 'https://priceoye-landing-page.netlify.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/PriceOye-Landing-Page.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7216015443231162368?compact=1",
      category:'html',
      details:"abcd",
      isForWeb:true,
      useOfApi:false,
      useOfFirebase:false,
      isOnlyUi:true,
      usedTailwind:false,
      id:nanoId()
     },
     {
      title:"Price Oye(Landing Page) With JS Objects Rendered Cards",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/sheikhhuzaifa7m79%40gmail.com%20%2B%201729757384144?alt=media&token=7da073d8-980f-40af-9cb5-c627d67d6345",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_i-rendered-js-object-cards-in-priceoye-with-activity-7216306277746978816-I6xJ?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://priceoye-with-js.netlify.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/Priceoye-With-JS-Object-Rendering.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7216306056665137152?compact=1",
      category:'js',
      details:"abcd",
      isForWeb:true,
      useOfApi:false,
      useOfFirebase:false,
      isOnlyUi:false,
      usedTailwind:false,
      id:nanoId(),
     },
     {
      title:"Percentage Generator",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/huzaifafurqan99k%40gmail.com%20%2B%201729761328172?alt=media&token=c8950104-e12b-46bf-8f0a-4e149d024fbf",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_i-created-percentage-generator-with-html-activity-7216340902447861760-hymR?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://percentage-generator.vercel.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/Percentage-Generator.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7216340685791055872?compact=1",
      category:'js',
      details:"abcd",
      isForWeb:true,
      useOfApi:false,
      useOfFirebase:false,
      isOnlyUi:false,
      usedTailwind:false,
      id:nanoId()
     },
     {
      title:"Todo App",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/huzaifafurqan99kj%40gmail.com%20%2B%201729762298263?alt=media&token=e7019b6f-46a4-455d-8d62-a1be0b1b4793",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_%F0%9D%99%B8-%F0%9D%9A%8C%F0%9D%9A%9B%F0%9D%9A%8E%F0%9D%9A%8A%F0%9D%9A%9D%F0%9D%9A%8E%F0%9D%9A%8D-%F0%9D%9A%83%F0%9D%9A%98%F0%9D%9A%8D%F0%9D%9A%98-%F0%9D%9A%8A%F0%9D%9A%99%F0%9D%9A%99-%F0%9D%9A%A0%F0%9D%9A%92%F0%9D%9A%9D%F0%9D%9A%91-activity-7216388970518048768-dZBe?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://todo-app-xi-snowy.vercel.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/Todo-App.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7216388823079874561?compact=1",
      category:'js',
      details:"abcd",
      isForWeb:true,
      useOfApi:false,
      useOfFirebase:false,
      isOnlyUi:false,
      usedTailwind:false,
      id:nanoId()
     },
     {
      title:"Rendering YouTube Cards Using the Filter Method",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/huzaifafurqan9jj92%40gmail.com%20%2B%201729772896107?alt=media&token=a3f4aec5-74c3-4964-90b8-0e34fd4f1afe",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_%F0%9D%99%B0%F0%9D%9A%97%F0%9D%9A%98%F0%9D%9A%9D%F0%9D%9A%91%F0%9D%9A%8E%F0%9D%9A%9B-%F0%9D%9A%8E%F0%9D%9A%A1%F0%9D%9A%92%F0%9D%9A%9D%F0%9D%9A%8E%F0%9D%9A%8D-%F0%9D%9A%99%F0%9D%9A%9B%F0%9D%9A%98%F0%9D%9A%93%F0%9D%9A%8E%F0%9D%9A%8C%F0%9D%9A%9D-activity-7216443676443463680-1FEr?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://effervescent-otter-5f9cba.netlify.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/YouTube-Landing-Page--With-Filter-Method.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7216443357613498368?compact=1",
      category:'js',
      details:"abcd",
      isForWeb:true,
      useOfApi:false,
      useOfFirebase:false,
      isOnlyUi:false,
      usedTailwind:false,
      id:nanoId()
     },
     {
      title:"JS Weather App",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/huzaifafurqan392%40gmail.com%20%2B%201729775013737?alt=media&token=63cf7107-92ec-450f-91c5-8c046089b20c",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_i-created-a-weather-app-with-the-help-of-activity-7216771491546210305-t8mw?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://weather-app-opal-pi.vercel.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/Weather-App.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7216771240970092544?compact=1",
      category:'js',
      details:"abcd",
      isForWeb:true,
      useOfApi:true,
      useOfFirebase:false,
      isOnlyUi:false,
      usedTailwind:false,
      id:nanoId()
     },
     {
      title:"JS Ecommerce App",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/huzaifafurqan2%40gmail.com%20%2B%201729776681455?alt=media&token=f12e1019-7466-4972-bbba-a4918fcadb95",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_i-created-simple-e-commerce-app-with-html-activity-7217485949537026050-IFvb?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://simple-ecommerce-with-react.vercel.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/Simple-Ecommerce-With-React.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7217485690844921858?compact=1",
      category:'js',
      details:"abcd",
      isForWeb:true,
      useOfApi:true,
      useOfFirebase:false,
      isOnlyUi:false,
      usedTailwind:false,
      id:nanoId()
     },
     {
      title:"Digital Tasbeeh Counter",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/huzaifafurqan2%40gmail.com%20%2B%201729778410798?alt=media&token=bbca628f-c895-4e94-aaa0-fca6cc1329b6",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_webdevelopment-javascript-html-activity-7218314160009338880-5f2c?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://digital-tasbeeh-counter.netlify.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/Digital-Tasbeeh-Counter.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7218313808501473280?compact=1",
      category:'js',
      details:"abcd",
      isForWeb:true,
      useOfApi:false,
      useOfFirebase:false,
      isOnlyUi:false,
      usedTailwind:false,
      id:nanoId()
     },
     {
      title:"Expnese Management App",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/huzaifafurqan32%40gmail.com%20%2B%201729860222603?alt=media&token=fcbe1a3a-7f1d-4036-bd24-e3ed2864aba4",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_expense-management-app-with-javascript-activity-7238181211171414016-LSsP?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://fir-authentication111.web.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/Expense-Management-App.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7238180760405311488?compact=1",
      category:'js',
      details:"abcd",
      isForWeb:true,
      useOfApi:false,
      useOfFirebase:false,
      isOnlyUi:false,
      usedTailwind:false,
      id:nanoId()
     },
     {
      title:"9 Tailwind CSS Projects UI Design",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/sheikhhuzaifa779%40gmail.com%20%2B%201729860447341?alt=media&token=dc81b07b-26ed-488e-a210-d9b6af276362",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_9-tailwind-css-ui-design-projects-responsive-activity-7239205955320610817-sgkx?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://magical-bombolone-b4827c.netlify.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/Tailwind-CSS-Practice/tree/main/10%20Html%20CSS%20Tailwind%20Projects",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7239202037219917825?compact=1",
      category:'html',
      details:"abcd",
      isForWeb:true,
      useOfApi:false,
      useOfFirebase:false,
      isOnlyUi:true,
      usedTailwind:true,
      id:nanoId()
     },
     {
      title:"Todo App With Firestore",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/huzaifafurqan992%40gmail.com%20%2B%201729860750568?alt=media&token=082e728e-b82a-4480-aad5-e94abe1d909f",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_full-crud-todo-app-with-firestore-firebase-activity-7240354017443274752-CfH6?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://todo-app-with-cloud-firestore.web.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/Todo-App-With-Firestore.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7240353516106530817?compact=1",
      category:'js',
      details:"abcd",
      isForWeb:true,
      useOfApi:false,
      useOfFirebase:true,
      isOnlyUi:false,
      usedTailwind:false,
      id:nanoId()
     },
     {
      title:"Buy Sell Corner Fullstack App",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/huzaifafurqan32%40gmail.com%20%2B%201729861385978?alt=media&token=c726b75a-521b-4a9e-95ed-c1cc9cb4632b",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_full-stack-app-with-firebase-auth-firestore-activity-7240409652209844224-1Esy?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://buy-sell-corner-fullstack.web.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/Buy-Sell-Corner--Full-Stack.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7240408920400269312?compact=1",
      category:'js',
      details:"abcd",
      isForWeb:true,
      useOfApi:false,
      useOfFirebase:true,
      isOnlyUi:false,
      usedTailwind:true,
      id:nanoId()
     },
     {
      title:"React Simple Counter",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/huzaifafurqan2%40gmail.com%20%2B%201730479766490?alt=media&token=9f16f43e-fd3c-456a-9c0a-e06ec14234d5",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_completed-my-first-project-in-react-created-activity-7256201083570544641-3Nc6?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://react-counter1-ten.vercel.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/react-counter.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7256200870516707328?compact=1",
      category:'react',
      details:"abcd",
      isForWeb:true,
      useOfApi:false,
      useOfFirebase:false,
      isOnlyUi:false,
      usedTailwind:false,
      id:nanoId()
     },
     {
      title:"Todo App In React",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/huzaifafurqan2%40gmail.com%20%2B%201730480595747?alt=media&token=94bb64e8-6c19-42d0-b542-ec7a94b4de37",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_build-a-to-do-app-in-react-with-sorting-activity-7256287543300673537-Hpz6?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://react-todo-app-alpha-six.vercel.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/react-todo-app.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7256287318062288896?compact=1",
      category:'react',
      details:"abcd",
      isForWeb:true,
      useOfApi:false,
      useOfFirebase:false,
      isOnlyUi:false,
      usedTailwind:true,
      id:nanoId()
     },
     {
      title:"Olx Style Card Rendered With Parent To Child Data Transfering",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/huzaifafurqan2%40gmail.com%20%2B%201730481225589?alt=media&token=856e9f3d-c0ff-4b77-b7cd-338c425d247e",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_olx-style-cards-with-parent-to-child-data-activity-7256332340598112256-JVW2?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://react-olx-cards-omega.vercel.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/react-olx-cards-.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7256332162424066048?compact=1",
      category:'react',
      details:"abcd",
      isForWeb:true,
      useOfApi:false,
      useOfFirebase:false,
      isOnlyUi:false,
      usedTailwind:true,
      id:nanoId()
     },
     {
      title:"Weather App In React",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/huzaifafurqan2%40gmail.com%20%2B%201730481909540?alt=media&token=f0a2e06e-950c-4ff2-989e-88142dfc80ab",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_built-a-react-weather-app-with-api-sorting-activity-7256349186407682049-b3Ex?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://weather-app-react-xc62.vercel.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/weather-app-react.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7256348765081485313?compact=1",
      category:'react',
      details:"abcd",
      isForWeb:true,
      useOfApi:true,
      useOfFirebase:false,
      isOnlyUi:false,
      usedTailwind:true,
      id:nanoId()
     },
     {
      title:"Quiz App In React",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/huzaifafurqan2%40gmail.com%20%2B%201730482224231?alt=media&token=82296b77-6b04-4027-bdc4-6eb3cd0ff8a9",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_built-a-complex-quiz-app-in-react-using-the-activity-7256611442584391680-SMDq?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://quiz-app-with-react-efqf.vercel.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/Quiz-App-With-React.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7256611141424979968?compact=1",
      category:'react',
      details:"abcd",
      isForWeb:true,
      useOfApi:true,
      useOfFirebase:false,
      isOnlyUi:false,
      usedTailwind:true,
      id:nanoId()
     },
     {
      title:"React Todo App Fullstack",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/huzaifafurqan2%40gmail.com%20%2B%201730484684631?alt=media&token=6887bebd-365e-4351-ad6e-923384edf21f",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_developed-a-smooth-crud-todo-app-in-react-activity-7256717235891683329-e5rU?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://react-todo-app-with-firestore-41v6.vercel.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/React-Todo-App-with-Firestore.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7256716712983625729?compact=1",
      category:'react',
      details:"abcd",
      isForWeb:true,
      useOfApi:false,
      useOfFirebase:true,
      isOnlyUi:false,
      usedTailwind:true,
      id:nanoId()
     },
     {
      title:"Countries Informative Web React",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/huzaifafurqan2%40gmail.com%20%2B%201730485016773?alt=media&token=5b64553d-9f88-4059-b6e8-716e8c96a7f7",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_build-a-react-app-that-displays-world-countries-activity-7257099509581684736-Lk_b?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://simple-ecommerce-with-react.vercel.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/Simple-Ecommerce-With-React.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7257099064725438465?compact=1",
      category:'react',
      details:"abcd",
      isForWeb:true,
      useOfApi:true,
      useOfFirebase:false,
      isOnlyUi:false,
      usedTailwind:true,
      id:nanoId()
     },
     {
      title:"Redux Toolkit Todo App",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/huzaifafurqan2%40gmail.com%20%2B%201730486288606?alt=media&token=28381189-b6a8-4e68-a862-19f8437881e6",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_developed-a-fast-smooth-todo-app-with-crud-activity-7257125857595428865-Iz7V?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://redux-toolkit-todo-app-lemon-psi.vercel.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/Redux-Toolkit-Todo-App.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7257125731179122690?compact=1",
      category:'react',
      details:"abcd",
      isForWeb:true,
      useOfApi:false,
      useOfFirebase:false,
      isOnlyUi:false,
      usedTailwind:true,
      id:nanoId()
     },
     {
      title:"React Hook Form Admission Portal",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/huzaifafurqan2%40gmail.com%20%2B%201730488518666?alt=media&token=413c5a80-da20-4120-8c0d-54e83bf9d3f8",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_designed-an-admission-form-with-react-hook-activity-7257325751425769475-OkDm?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://react-hook-form-rho-beige.vercel.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/React-Hook-Form.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7257325555841187840?compact=1",
      category:'react',
      details:"abcd",
      isForWeb:true,
      useOfApi:false,
      useOfFirebase:false,
      isOnlyUi:false,
      usedTailwind:true,
      id:nanoId()
     },
     {
      title:"React FullStack Project Blog App",
      thumbnail:"https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/huzaifafurqan2%40gmail.com%20%2B%201730488518666?alt=media&token=413c5a80-da20-4120-8c0d-54e83bf9d3f8",
      linkedIN:"https://www.linkedin.com/posts/muhammad-huzaifa-4008362a5_designed-an-admission-form-with-react-hook-activity-7257325751425769475-OkDm?utm_source=share&utm_medium=member_desktop",
      hostedLink:'https://react-hook-form-rho-beige.vercel.app/',
      githubRepo:"https://github.com/MuhammadHuzaifa22/React-Hook-Form.git",
      linkedEmbedCode:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7257325555841187840?compact=1",
      category:'react',
      details:"abcd",
      isForWeb:true,
      useOfApi:false,
      useOfFirebase:true,
      isOnlyUi:false,
      usedTailwind:true,
      id:nanoId()
     },
  ]

  

  return (
    <div id="projects" className=' mx-auto'>
<h1 className='text-center pt-5 text-3xl playfair-display font-medium'>Projects</h1>
<div className='mt-5  flex justify-center items-center gap-2 playfair-display'>
<select name="" id="">
  <option value="">filter</option>
  <option value="">Name 1</option>
  <option value="">Name 1</option>
</select>
<select name="" id="">
  <option value="">filter</option>
  <option value="">Name 1</option>
  <option value="">Name 1</option>
</select>

</div>
<div className='mt-5 text-me-one-regular justify-center flex flex-wrap max-w-4xl gap-[20px] mx-auto'>
{myProjects.map((item) => (

    <div key={item.id} 
      className="border border-black rounded-[10px] cursor-pointer border-opacity-25 hover:border-opacity-100  shadow-[0px_0px_2px_black] transition-all duration-300 w-[245px] hover:scale-110"
    >
      <img src={item.thumbnail} alt="project-thumbnail" className='w-full h-[150px] rounded-[10px]' />

      <h1 className='border-b-[1px] border-black  my-[5px] px-[10px] playfair-display font-semibold'>
      <b>Title:</b> {item.title.length > 45 ? <span className='tracking-tight'>{item.title.slice(0,45)}...</span> : item.title}

      </h1>
      <h1 className='my-[5px] px-[10px] playfair-display font-semibold'>
       <b>Details:</b> {item.details}
      </h1>
      <div className='flex gap-2 flex-wrap text-sm justify-center border-black pb-[5px]'>
        <a href={item.hostedLink} target="_blank" rel="noopener noreferrer" className='hover:text-white border-[1px] border-black hover:bg-black  active:border-white    transition duration-300 p-[2px]  rounded-[5px] oxanium font-bold'>
          <button className='inline-flex items-center gap-[5px]'>
          View Project<FaLink  className='text-lg'/>
          </button>
        </a>
        
        <a href={item.githubRepo} target="_blank" rel="noopener noreferrer" className='hover:text-white border-[1px] border-black hover:bg-black  active:border-white  transition duration-300 p-[2px]  rounded-[5px] oxanium font-bold'>
          <button className='inline-flex items-center gap-[5px]'>
            View Code <IoCodeSlashOutline className='text-lg' />
          </button>
        </a>
      </div>
      
      <div className='flex gap-[5px] flex-wrap text-sm justify-center my-[5px]'>
        <a href={item.linkedEmbedCode} target="_blank" rel="noopener noreferrer" className='hover:text-white border-[1px] border-black hover:bg-black  active:border-white transition duration-300 p-[2px]  rounded-[5px] oxanium font-bold'>
          <button className='inline-flex items-center gap-[3px]'>
            Watch Video <IoVideocamSharp className='text-lg' />
          </button>
        </a>
        
        <a href={item.linkedIN} target="_blank" rel="noopener noreferrer" className='hover:text-white border-[1px] border-black hover:bg-black  active:border-white transition duration-300 p-[2px]  rounded-[5px] oxanium font-bold'>
          <button className='inline-flex items-center gap-[3px]'>
            View LinkedIN <FaLinkedin  className='text-lg'/>
          </button>
        </a>
      </div>
    </div>

))}

</div>
    </div>
  )
}

export default Projects
