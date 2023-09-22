const worksCards = [{
  id: 1,
  image: './images/Project1.PNG',
  topic: 'Space Travellers Hub',
  jobPosition: ['Self-Employed', 'Web Dev', '2023'],
  jobDescription: 'A web application for a company that provides commercial and scientific space travel services. Users can book rockets and join selected space missions.',
  TechStack: ['ReactJS', 'Redux', 'Javascript', 'HTML', 'CSS', 'Github'],
  liveDemoButton: 'https://github.com/joyapisi/space-traveler-hub',
  sourceLinkButton: 'https://my-space-travellers-hub.netlify.app/',
},
{
  id: 2,
  image: 'images/Project2.PNG',
  topic: 'Teens\' Conference',
  jobPosition: ['Self-Employed', 'Web Dev', '2023'],
  jobDescription: 'A website for an annual teenager\'s conference where teen creators can learn how to create content and produce it using Adobe products.',
  TechStack: ['Javascript', 'HTML', 'CSS'],
  liveDemoButton: 'joyapisi.github.io/1st-Capstone-Project/',
  sourceLinkButton: 'https://joyapisi.github.io/1st-Capstone-Project/',
},
{
  id: 3,
  image: 'images/Project3.PNG',
  topic: 'Artwork App',
  jobPosition: ['Self-Employed', 'Web Dev', '2023'],
  jobDescription: 'This is a mobile app that can be used to learn more about various Artwork by clicking on its displayed name. All data is fetched from the Art Institute of Chicago API.',
  TechStack: ['Javascript', 'HTML', 'CSS'],
  liveDemoButton: 'https://github.com/joyapisi/artwork-app',
  sourceLinkButton: 'https://joys-artwork-app.netlify.app/',
},
{
  id: 4,
  image: 'images/Project4.PNG',
  topic: 'Lifestyle Budget App',
  jobPosition: ['Self-Employed', 'Web Dev', '2022'],
  jobDescription: 'A mobile app that can be used to find details of various artwork displayed on the home page. All data is fetched from the Art Institute of Chicago API.',
  TechStack: ['Rails', 'PostgreSQL', 'ReactJS', 'Redux', 'Javascript', 'Github'],
  liveDemoButton: 'https://github.com/joyapisi/budget-app',
  sourceLinkButton: 'https://my-lifestyle-budget-app.onrender.com/',
}];

function generateWorksCards(
  id,
  image,
  topic,
  jobPosition,
  jobDescription,
  TechStack,
  seeProject,
  liveDemoButton,
  sourceLinkButton,
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
  
  <div class="popupaction">
  <a href = "${liveDemoButton}" target="_blank">
    <button class="popupseeLiveButton">
      <div class="btnwrap"> 
        See Live 
        <img src="./images/popupaction.png" alt="see image live" />
      </div>
    </button>
  </a> 
  
  <a href="${sourceLinkButton}" target="_blank">
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
    index.liveDemoButton,
    index.sourceLinkButton,
  );
  projectCard += projectCardDetails;
});

// execute dynamic works section
document.getElementById('all-cards').innerHTML = projectCard;
