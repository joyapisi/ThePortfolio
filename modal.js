const projectsDetails = [{
  id: 1,
  title: 'Tonic',
  jobDetails: ['CANOPY', 'BackEndDev', '2015'],
  featuredimage: './sources/Snapshoot-Portfolio.png',
  jobDescriptionDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem',
  myTechStack: ['Javascript', 'HTML', 'CSS', 'Github', 'Ruby', 'Bootstrap'],
  liveDemoButton: 'https://joyapisi.github.io/Quote-Generator/',
  sourceLinkButton: 'https://github.com/joyapisi/Quote-Generator',
},
{
  id: 2,
  title: 'Multi-Post Stories',
  jobDetails: ['CANOPY', 'BackEndDev', '2015'],
  featuredimage: 'sources/Portfolio2.png',
  jobDescriptionDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem',
  myTechStack: ['Javascript', 'HTML', 'CSS', 'Github', 'Ruby', 'Bootstrap'],
  liveDemoButton: 'https://joyapisi.github.io/Quote-Generator/',
  sourceLinkButton: 'https://github.com/joyapisi/Quote-Generator',
},
{
  id: 3,
  title: 'Facebook 360',
  jobDetails: ['FACEBOOK', 'FullStack', '2015'],
  featuredimage: 'sources/Portfolio3.png',
  jobDescriptionDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem',
  myTechStack: ['Javascript', 'HTML', 'CSS', 'Github', 'Ruby', 'Bootstrap'],
  liveDemoButton: 'https://joyapisi.github.io/Quote-Generator/',
  sourceLinkButton: 'https://github.com/joyapisi/Quote-Generator',
},
{
  id: 4,
  title: 'Uber Navigation',
  jobDetails: ['Uber', 'Uber Lead Developer', '2015'],
  featuredimage: 'sources/Portfolio4.png',
  jobDescriptionDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem',
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
           <button class="popupseeLiveButton">
             <a href="${liveDemoButton}"> 
             See Live
             <img src="./sources/popupaction.png" alt="see image live" />
             </a> 
             </button> 
           <button class="popupseeSourceButton " > 
           <a href="${sourceLinkButton}"> 
           See Source 
             <img src="./sources/popupgithub.png" alt="github source" />
             </a>
             </button>
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
