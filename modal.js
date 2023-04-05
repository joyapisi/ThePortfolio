const projectsDetails = [{
  id: 1,
  title: 'Infinite Photo-Scroll',
  jobDetails: ['CANOPY', 'BackEndDev', '2015'],
  featuredimage: './sources/Project4.PNG',
  jobDescriptionDetails: 'A web page that uses an API to display various photos from top to bottom infinitely',
  myTechStack: ['Javascript', 'HTML', 'CSS', 'Github', 'Ruby', 'Bootstrap'],
  liveDemoButton: 'https://joyapisi.github.io/Infinite-Photos-Scrolling/',
  sourceLinkButton: 'https://github.com/joyapisi/Infinite-Photos-Scrolling',
},
{
  id: 2,
  title: 'Conference Website',
  jobDetails: ['CANOPY', 'BackEndDev', '2015'],
  featuredimage: './sources/Project2.PNG',
  jobDescriptionDetails: 'Conference Website is a HTML, CSS and JavaScript project that uses a Behance web design to create a UI in both mobile and desktop version. It also uses JavaScript events and DOM elements to create pages dynamically. This project\'s content is personalized to a Teen Creators Conference that helps teenagers learn production using Adobe products.',
  myTechStack: ['Javascript', 'HTML', 'CSS', 'Github', 'Ruby', 'Bootstrap'],
  liveDemoButton: 'joyapisi.github.io/1st-Capstone-Project/',
  sourceLinkButton: 'https://github.com/joyapisi/1st-Capstone-Project',
},
{
  id: 3,
  title: 'To Do List',
  jobDetails: ['CANOPY', 'BackEndDev', '2015'],
  featuredimage: './sources/Project3.PNG',
  jobDescriptionDetails: 'A simple web page that displays a list of To Do tasks. User can add, edit or delete tasks. Tasks checked on the check box can be deleted using the Clear All button',
  myTechStack: ['Javascript', 'HTML', 'CSS', 'Github', 'Ruby', 'Bootstrap'],
  liveDemoButton: 'joyapisi.github.io/To-Do-List/',
  sourceLinkButton: 'https://github.com/joyapisi/To-Do-List',
},
{
  id: 4,
  title: 'Quote Generator',
  jobDetails: ['CANOPY', 'BackEndDev', '2015'],
  featuredimage: './sources/Project1.PNG',
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
      <img src="./sources/closeButton.png" alt=""> </button>  
    </div>
  
    <ul class="job-title">
      <li class="canopy-title">
      ${jobDetails[0]}
      </li>
      <li class="dot-icon">
        <img class="dot-icon-img" src="./sources/dot.png" alt="dot"/>
        ${jobDetails[1]}
      </li>
      <li class="year-2015">
        <img class="year-tonic" src="./sources/dot.png" alt="year-tonic"/>
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
                  <img src="./sources/popupaction.png" alt="see image live" />
                </div>
              </button>
            </a> 
            
            <a href="${sourceLinkButton}">
              <button class="popupseeSourceButton" >
                <div class="btnwrap">
                  See Source
                  <img src="./sources/popupgithub.png" alt="github source" />
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
