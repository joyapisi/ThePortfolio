const worksCards = [{
  id: 1,
  image: './sources/Snapshoot-Portfolio.png',
  topic: 'Tonic',
  jobPosition: ['CANOPY', 'BackEndDev', '2015'],
  jobDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  TechStack: ['HTML', 'CSS', 'Javascript'],
  seeProject: 'See Project',
},
{
  id: 2,
  image: 'sources/Portfolio2.png',
  topic: 'Multi-Post Stories',
  jobPosition: ['CANOPY', 'BackEndDev', '2015'],
  jobDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  TechStack: ['HTML', 'CSS', 'Javascript'],
  seeProject: 'See Project',
},
{
  id: 3,
  image: 'sources/Portfolio3.png',
  topic: 'Tonic',
  jobPosition: ['CANOPY', 'BackEndDev', '2015'],
  jobDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  TechStack: ['HTML', 'CSS', 'Javascript'],
  seeProject: 'See Project',
},
{
  id: 4,
  image: 'sources/Portfolio4.png',
  topic: 'Multi-Post Stories',
  jobPosition: ['CANOPY', 'BackEndDev', '2015'],
  jobDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  TechStack: ['HTML', 'CSS', 'Javascript'],
  seeProject: 'See Project',
}];

function generateWorksCards(
  id,
  image,
  topic,
  jobPosition,
  jobDescription,
  TechStack,
  seeProject,
) {
  return `  <section class="works" id="portfolio" title="works-cards">
  <div class="cards" id= "project-${id}"  title="works-card-2">
  <img id="avator" src=${image}>
  <div class="container2">
    <h2><b>${topic}</b></h2>

   <ul class="tonic">
    <li><a class="tonic canopy" href="#">${jobPosition[0]}</a></li>
    <li class="tonic dot"></li>
    <li class="tonic back">${jobPosition[1]}</li>
    <li class="tonic dot"></li>
    <li class="tonic year">${jobPosition[2]}</li>
   </ul>

   <p class="paragraph2">${jobDescription}</p>
 
   <ul class="resources1" title="resources">
    <li><a  class="button" href="#">${TechStack[0]}</a> <li>
    <li><a  class="button" href="#">${TechStack[1]}</a> </li>
    <li><a  class="button" href="#">${TechStack[2]}</a></li>      
  </ul>
  <button id="modalButton-${id}" class="normalbutton seeproject">
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
    index.image,
    index.topic,
    index.jobPosition,
    index.jobDescription,
    index.TechStack,
    index.seeProject
  );
  projectCard += projectCardDetails;
});

// execute dynamic works section
document.getElementById('all-cards').innerHTML = projectCard;










// const worksCards = [{
//     id: 01,
//     image: './sources/Snapshoot-Portfolio.png',
//     topic: 'Tonic',
//     jobPosition: ['CANOPY', 'BackEndDev', '2015'],
//     jobDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
//     TechStack: ['HTML', 'CSS', 'Javascript'],
//     seeProject: 'See Project',
//   },
//   {
//     id: 02,
//     image: 'sources/Portfolio2.png',
//     topic: 'Multi-Post Stories',
//     jobPosition: ['CANOPY', 'BackEndDev', '2015'],
//     jobDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
//     TechStack: ['HTML', 'CSS', 'Javascript'],
//     seeProject: 'See Project',
//   },
//   {
//     id: 03,
//     image: 'sources/Portfolio3.png',
//     topic: 'Facebook 360',
//     jobPosition: ['CANOPY', 'BackEndDev', '2015'],
//     jobDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
//     TechStack: ['HTML', 'CSS', 'Javascript'],
//     seeProject: 'See Project',
//   },
//   {
//     id: 04,
//     image: 'sources/Portfolio4.png',
//     topic: 'Uber Navigation',
//     jobPosition: ['CANOPY', 'BackEndDev', '2015'],
//     jobDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
//     TechStack: ['HTML', 'CSS', 'Javascript'],
//     seeProject: 'See Project',
//   }];
  
//   function generateWorksCards(
//     id,
//     image,
//     topic,
//     jobPosition,
//     jobDescription,
//     TechStack,
//     seeProject,
//   ) {
//     return `  <section class="works" id="portfolio" title="works-cards">
//     <div class="cards" id= "project-${id}"  title="works-card-2">
//     <img id="avator" src=${image}>
//     <div class="container2">
//       <h2><b>${topic}</b></h2>

//      <ul class="tonic">
//       <li><a class="tonic canopy" href="#">${jobPosition[0]}</a></li>
//       <li class="tonic dot"></li>
//       <li class="tonic back">${jobPosition[1]}</li>
//       <li class="tonic dot"></li>
//       <li class="tonic year">${jobPosition[2]}</li>
//      </ul>

//      <p class="paragraph2">${jobDescription}</p>
   
//      <ul class="resources1" title="resources">
//       <li><a  class="button" href="#">${TechStack[0]}</a> <li>
//       <li><a  class="button" href="#">${TechStack[1]}</a> </li>
//       <li><a  class="button" href="#">${TechStack[2]}</a></li>      
//     </ul>
//     <button id="modalButton-" class="normalbutton seeproject">
//     ${seeProject}
//     </button>      
//     </div>
//   </div>
//   </section>
//     `;
//   }
  
//   let projectCard = '';
  
//   worksCards.forEach((index) => {
//     const projectCardDetails = generateWorksCards(
//       index.id,
//       index.image,
//       index.topic,
//       index.jobPosition,
//       index.jobDescription,
//       index.TechStack,
//       index.seeProject
//     );
//     projectCard += projectCardDetails;
//   });
  
//   // execute popup
//   document.getElementById('all-cards').innerHTML = projectCard;
  
//   worksCards.forEach((item) => {
//     const { id } = item;
//     document.getElementById(`avator-${id[1]}`).addEventListener('click', () => {
//     avator.style.order=2;
//   })
// });