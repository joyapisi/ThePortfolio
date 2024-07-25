const worksCards = [{
  id: 1,
  image: './images/Project1.PNG',
  topic: 'ADMI CO CIRRUCULAR APP',
  jobPosition: ['SELF-EMPLOYED', 'UI/UX', '2024'],
  jobDescription: 'A case study for enhancing co-cirricular activities in ADMI.',
  TechStack: ['Figma'],
  seeProject: 'See Project',
},
{
  id: 2,
  image: 'images/Project2.PNG',
  topic: 'Meal Prep App',
  jobPosition: ['SELF-EMPLOYED', 'UI/UX', '2024'],
  jobDescription: 'Meal Prep App is a UI/UX design which displays menu items for order/preperation for busy people who do not have time to prepare their own meals',
  TechStack: ['Figma'],
  seeProject: 'See Project',
},
{
  id: 3,
  image: 'images/Project3.PNG',
  topic: 'ADMI CO CIRRUCULAR APP',
  jobPosition: ['CONTRACTOR', 'UI/UX', '2024'],
  jobDescription: 'A mobile app that allows students to participate in co-cirricular activities such as club registration.',
  TechStack: ['Figma'],
  seeProject: 'See Project',
},
{
  id: 4,
  image: 'images/Project4.PNG',
  topic: 'Quote Generator',
  jobPosition: ['Zero to Mastery', 'FrontEndDev', '2022'],
  jobDescription: 'A web page that uses a custom-made API to generate different quotes',
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
    index.seeProject,
  );
  projectCard += projectCardDetails;
});

// execute dynamic works section
document.getElementById('all-cards').innerHTML = projectCard;
