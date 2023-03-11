const worksCards = [{
    id: 01,
    featuredimage: './sources/Snapshoot-Portfolio.png',
    title: 'Tonic',
    jobDetails: ['CANOPY', 'BackEndDev', '2015'],
    jobDescriptionDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    myTechStack: ['HTML', 'CSS', 'Javascript'],
    seeProject: 'See Project',
  },
  {
    id: 02,
    featuredimage: 'sources/Portfolio2.png',
    title: 'Multi-Post Stories',
    jobDetails: ['CANOPY', 'BackEndDev', '2015'],
    jobDescriptionDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    myTechStack: ['HTML', 'CSS', 'Javascript'],
    seeProject: 'See Project',
  },
  {
    id: 03,
    featuredimage: 'sources/Portfolio3.png',
    title: 'Facebook 360',
    jobDetails: ['CANOPY', 'BackEndDev', '2015'],
    jobDescriptionDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    myTechStack: ['HTML', 'CSS', 'Javascript'],
    seeProject: 'See Project',
  },
  {
    id: 04,
    featuredimage: 'sources/Portfolio4.png',
    title: 'Uber Navigation',
    jobDetails: ['CANOPY', 'BackEndDev', '2015'],
    jobDescriptionDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    myTechStack: ['HTML', 'CSS', 'Javascript'],
    seeProject: 'See Project',
  }];
  
  function generateWorksCards(
    id,
    featuredimage,
    title,
    jobDetails,
    jobDescriptionDetails,
    myTechStack,
    seeProject,
  ) {
    return `  <section class="works" id="portfolio" title="works-cards">
    <div class="cards" id= "project-${id}"  title="works-card-2">
    <img id="avator" src=${featuredimage}>
    <div class="container2">
      <h2><b>${title}</b></h2>

     <ul class="tonic">
      <li><a class="tonic canopy" href="#">${jobDetails[0]}</a></li>
      <li class="tonic dot"></li>
      <li class="tonic back">${jobDetails[1]}</li>
      <li class="tonic dot"></li>
      <li class="tonic year">${jobDetails[2]}</li>
     </ul>

     <p class="paragraph2">${jobDescriptionDetails}</p>
   
     <ul class="resources1" title="resources">
      <li><a  class="button" href="#">${myTechStack[0]}</a> <li>
      <li><a  class="button" href="#">${myTechStack[1]}</a> </li>
      <li><a  class="button" href="#">${myTechStack[2]}</a></li>      
    </ul>
    <button id="modalButton-" class="normalbutton seeproject">
    ${seeProject}
    </button>      
    </div>
  </div>
  </section>
    `;
  }
  
  let projectCard = '';
  
  worksCards.forEach((index) => {
    const projectCardDetails = generateWorksCards(
      index.id,
      index.featuredimage,
      index.title,
      index.jobDetails,
      index.jobDescriptionDetails,
      index.myTechStack,
      index.seeProject
    );
    projectCard += projectCardDetails;
  });
  
  // execute popup
  document.getElementById('all-cards').innerHTML = projectCard;
  
//   worksCards.forEach((item) => {
//     const { id } = item;
//     document.getElementById(`avator-${id[1]}`).addEventListener('click', () => {
//     avator.style.order=2;
//   })
// });