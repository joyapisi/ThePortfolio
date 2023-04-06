const worksCards = [{
  id: 1,
  image: './sources/Project4.PNG',
  topic: 'Infinite Photo-Scroll',
  jobPosition: ['CANOPY', 'BackEndDev', '2015'],
  jobDescription: 'A web page that uses an API to display various photos from top to bottom infinitely',
  TechStack: ['HTML', 'CSS', 'Javascript'],
  seeProject: 'See Project',
},
{
  id: 2,
  image: 'sources/Project2.PNG',
  topic: 'Conference Website',
  jobPosition: ['CANOPY', 'BackEndDev', '2015'],
  jobDescription: 'A project that uses a Behance design for the UI and JavaScript to create pages dynamically.',
  TechStack: ['HTML', 'CSS', 'Javascript'],
  seeProject: 'See Project',
},
{
  id: 3,
  image: 'sources/Project3.PNG',
  topic: 'To Do List',
  jobPosition: ['CANOPY', 'BackEndDev', '2015'],
  jobDescription: 'A simple web page that displays a list of To Do tasks. User can add, edit or delete tasks.',
  TechStack: ['HTML', 'CSS', 'Javascript'],
  seeProject: 'See Project',
},
{
  id: 4,
  image: 'sources/Project1.PNG',
  topic: 'Quote Generator',
  jobPosition: ['CANOPY', 'BackEndDev', '2015'],
  jobDescription: 'A web page that uses an API to generate different quotes',
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
