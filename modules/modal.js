const projectsDetails = [{
  id: 1,
  title: 'Space Travellers Hub',
  jobDetails: ['SELF-EMPLOYED', 'FrontEndDev', '2023'],
  featuredimage: './images/Project1.PNG',
  jobDescriptionDetails: 'A web application for a company that provides commercial and scientific space travel services. Users can book rockets and join selected space missions.',
  myTechStack: ['ReactJS', 'Redux', 'Javascript', 'HTML', 'CSS', 'Github'],
  liveDemoButton: 'https://my-space-travellers-hub.netlify.app/',
  sourceLinkButton: 'https://github.com/joyapisi/space-traveler-hub.git',
},
{
  id: 2,
  title: 'Bookstore App',
  jobDetails: ['SELF-EMPLOYED', 'FrontEndDev', '2023'],
  featuredimage: './images/Project2.PNG',
  jobDescriptionDetails: 'Bookstore App is a web app for all fans of books. It is a Single Page App (SPA) that allows users to add remove & display books in/from a list',
  myTechStack: ['ReactJS', 'Redux', 'Javascript', 'HTML', 'CSS', 'Github'],
  liveDemoButton: 'https://joys-bookstore-app.netlify.app/',
  sourceLinkButton: 'https://github.com/joyapisi/bookstore-app.git',
},
{
  id: 3,
  title: 'Artwork App',
  jobDetails: ['SELF-EMPLOYED', 'FrontEndDev', '2023'],
  featuredimage: './images/Project3.PNG',
  jobDescriptionDetails: 'A mobile app that can be used to find details of various artwork displayed on the home page. All data is fetched from the Art Institute of Chicago API.',
  myTechStack: ['ReactJS', 'Redux', 'Javascript', 'HTML', 'CSS', 'Github'],
  liveDemoButton: 'https://joys-artwork-app.netlify.app/',
  sourceLinkButton: 'https://github.com/joyapisi/artwork-app.git',
},
{
  id: 4,
  title: 'Quote Generator',
  jobDetails: ['Zero to Mastery', 'FrontEndDev', '2022'],
  featuredimage: './images/Project4.PNG',
  jobDescriptionDetails: 'A web page that uses an API to generate different quotes',
  myTechStack: ['Javascript', 'HTML', 'CSS', 'Github', 'Ruby', 'Bootstrap'],
  liveDemoButton: 'https://joyapisi.github.io/Quote-Generator/',
  sourceLinkButton: 'https://github.com/joyapisi/Quote-Generator',
}];

function generateModal(
  id,
  title,
  jobDetails,
  featuredimage,
  jobDescriptionDetails,
  myTechStack,
  liveDemoButton,
  sourceLinkButton,
) {
  return `<section class="popupwindow" id="popup-project-${id}">
  <div class="popup">
    <div class="top-title">
      <h2 class="title">${title}</h2>
      <button id="closed-popup-${id}" class="closed-popup"> 
      <img src="./images/closeButton.png" alt=""> </button>  
    </div>
  
    <ul class="job-title">
      <li class="canopy-title">
      ${jobDetails[0]}
      </li>
      <li class="dot-icon">
        <img class="dot-icon-img" src="./images/dot.png" alt="dot"/>
        ${jobDetails[1]}
      </li>
      <li class="year-2015">
        <img class="year-tonic" src="./images/dot.png" alt="year-tonic"/>
        ${jobDetails[2]}
      </li>
    </ul>

  <img id="modal-image" src="${featuredimage}" alt="picture">


   <div class="bottom-content">
       <p class="popupparagraph2">${jobDescriptionDetails}</p>
   
       <div class="right-block">
         <div class="techstackbuttons">
           <ul class="popupresources" title="popup-resources">
             <li><a  class="popupbutton" href="#">${myTechStack[0]}</a><li>
             <li><a  class="popupbutton" href="#">${myTechStack[1]}</a></li>
             <li><a  class="popupbutton" href="#">${myTechStack[2]}</a></li>           
           </ul>
         </div>
         
         <div class="popupaction">
            <a href = "${liveDemoButton}">
              <button class="popupseeLiveButton">
                <div class="btnwrap"> 
                  See Live 
                  <img src="./images/popupaction.png" alt="see image live" />
                </div>
              </button>
            </a> 
            
            <a href="${sourceLinkButton}">
              <button class="popupseeSourceButton" >
                <div class="btnwrap">
                  See Source
                  <img src="./images/popupgithub.png" alt="github source" />
                </div>
              </button> 
            </a>

         </div>
       </div>
     </div>
   </div>
</section>
  `;
}

let modalCard = '';

projectsDetails.forEach((index) => {
  const modalDetails = generateModal(
    index.id,
    index.title,
    index.jobDetails,
    index.featuredimage,
    index.jobDescriptionDetails,
    index.myTechStack,
    index.liveDemoButton,
    index.sourceLinkButton,
  );
  modalCard += modalDetails;
});

// execute popup
document.getElementById('modal-popup').innerHTML = modalCard;

projectsDetails.forEach((item) => {
  const { id } = item;
  document.getElementById(`modalButton-${id}`).addEventListener('click', () => {
    document.getElementById(`popup-project-${id}`).classList.add('active');
  });
  document.getElementById(`closed-popup-${id}`).addEventListener('click', () => {
    document.getElementById(`popup-project-${id}`).classList.remove('active');
  });
});
