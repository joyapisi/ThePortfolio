const projectsDetails = [{
  id: 'popupCard1',
  featuredimage: './sources/Snapshoot-Portfolio.png',
  title: 'Tonic',
  jobDescription: {
    jobCompany: 'CANOPY',
    jobTitle: 'BackEndDev',
    jobYear: '2015',
  },
  jobDescriptionDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem',
  myTechStack: ['Javascript', 'HTML', 'CSS', 'Github', 'Ruby', 'Bootstrap'],
  liveDemoButton: {
    buttonText: 'See Live',
    buttonImage: './sources/popupaction.png',
    buttonLink: 'https://joyapisi.github.io/Quote-Generator/',
  },
  sourceLinkButton: {
    buttonText: 'See Source',
    buttonImage: './sources/popupgithub.png',
    buttonLink: 'https://github.com/joyapisi/Quote-Generator',
  },
},
{
  id: 'popupCard2',
  featuredimage: 'sources/Portfolio2.png',
  title: 'Tonic',
  jobDescription: {
    jobCompany: 'CANOPY',
    jobTitle: 'BackEndDev',
    jobYear: '2015',
  },
  jobDescriptionDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem',
  myTechStack: ['Javascript', 'HTML', 'CSS', 'Github', 'Ruby', 'Bootstrap'],
  liveDemoButton: {
    buttonText: 'See Live',
    buttonImage: './sources/popupaction.png',
    buttonLink: 'https://joyapisi.github.io/Quote-Generator/',
  },
  sourceLinkButton: {
    buttonText: 'See Source',
    buttonImage: './sources/popupgithub.png',
    buttonLink: 'https://github.com/joyapisi/Quote-Generator',
  },
},
{
  id: 'popupCard3',
  featuredimage: 'sources/Portfolio3.png',
  title: 'Tonic',
  jobDescription: {
    jobCompany: 'CANOPY',
    jobTitle: 'BackEndDev',
    jobYear: '2015',
  },
  jobDescriptionDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem',
  myTechStack: ['Javascript', 'HTML', 'CSS', 'Github', 'Ruby', 'Bootstrap'],
  liveDemoButton: {
    buttonText: 'See Live',
    buttonImage: './sources/popupaction.png',
    buttonLink: 'https://joyapisi.github.io/Quote-Generator/',
  },
  sourceLinkButton: {
    buttonText: 'See Source',
    buttonImage: './sources/popupgithub.png',
    buttonLink: 'https://github.com/joyapisi/Quote-Generator',
  },
},
{
  id: 'popupCard4',
  featuredimage: 'sources/Portfolio4.png',
  title: 'Tonic',
  jobDescription: {
    jobCompany: 'CANOPY',
    jobTitle: 'BackEndDev',
    jobYear: '2015',
  },
  jobDescriptionDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem',
  myTechStack: ['Javascript', 'HTML', 'CSS', 'Github', 'Ruby', 'Bootstrap'],
  liveDemoButton: {
    buttonText: 'See Live',
    buttonImage: './sources/popupaction.png',
    buttonLink: 'https://joyapisi.github.io/Quote-Generator/',
  },
  sourceLinkButton: {
    buttonText: 'See Source',
    buttonImage: './sources/popupgithub.png',
    buttonLink: 'https://github.com/joyapisi/Quote-Generator',
  },
}];

// popup page: Call HTML elements that Implement Popup
const modalCards = document.getElementById('modalCards');
const popupContainer = document.getElementById('popupContainer');
const closeButton = document.getElementsByClassName('closeButton');
const topcontainter = document.getElementsByClassName('topcontainter');

// action when modalButtons are clicked
function togglePopup() {
  modalCards.classList.toggle('active');
  popupContainer.classList.toggle('active');
  closeButton.classList.toggle('active');
  topcontainter.classList.toggle('active');
}

const popupButtons = [
  document.getElementById('modalButton1'),
  document.getElementById('modalButton2'),
  document.getElementById('modalButton3'),
  document.getElementById('modalButton4'),
];

popupButtons.forEach((item) => {
  modalCards.addEventListener('click', () => {
    popupContainer.innerHTML = '';

    // create contents of popup pages

    const section = document.createElement('section');
    section.id = 'modalCard1';
    section.className = 'modal';
    document.body.appendChild(section);

    const div1 = document.createElement('div');
    div1.className = 'popupcontainter';
    section.appendChild(div1);

    const div2 = document.createElement('div');
    div2.className = 'topcontainter';
    div1.appendChild(div2);

    const h2 = document.createElement('h2');
    h2.className = 'h2popup';
    // h2.textContent = projectsDetails.title;
    h2.textContent = projectsDetails[item].title;
    div2.appendChild(h2);

    //  let closingButton = document.createElement('button');
    //  closingButton.className = 'closeButton';
    // //  closeButton.textContent = 'Tonic'; ?????
    //  div2.appendChild(closingButton);

    const ul = document.createElement('ul');
    ul.className = 'popuptonic';
    div1.appendChild(ul);

    const li1 = document.createElement('li');
    li1.className = 'popuptonic canopy';
    li1.textContent = projectsDetails[item].jobDescription.jobCompany;
    ul.appendChild(li1);

    const li2 = document.createElement('li');
    li2.className = 'popuptonic back';
    li2.textContent = projectsDetails[item].jobDescription.jobTitle;
    ul.appendChild(li2);

    const li3 = document.createElement('li');
    li3.className = 'popuptonic year';
    li3.textContent = projectsDetails[item].jobDescription.jobYear;
    ul.appendChild(li3);

    const img = document.createElement('img');
    img.src = projectsDetails[item].featuredImage;
    //  image.appendChild(img);
    div1.appendChild(img);

    // const paragraph = document.createElement("p");
    // paragraph.innerText = projectsDetails[item].jobDescriptionDetails;
    // div1.appendChild(paragraph);
    div1.innerHTML = projectsDetails[item].jobDescriptionDetails;

    const div3 = document.createElement('div');
    div3.className = 'techstackbuttons';
    div1.appendChild(div3);

    const ul2 = document.createElement('ul');
    ul2.className = 'popupresources';
    div1.appendChild(ul2);

    // techstack list
    // const techstack1 = document.createElement('li');
    // techstack1.className = 'popupbutton';
    // techstack1.textContent = projectsDetails[0].jobDescriptionDetails[0]
    // ul2.appendChild(techstack1)

    // const techstack2 = document.createElement('li');
    // techstack2.className = 'popupbutton';
    // techstack2.textContent = projectsDetails[0].jobDescriptionDetails[1]
    // ul2.appendChild(techstack2);

    // const techstack2 = document.createElement('li');
    // techstack2.className = 'popupbutton';
    // techstack2.textContent = projectsDetails[0].jobDescriptionDetails[2]
    // ul2.appendChild(techstack2);

    // const techstack2 = document.createElement('li');
    // techstack2.className = 'popupbutton';
    // techstack2.textContent = projectsDetails[0].jobDescriptionDetails[3]
    // ul2.appendChild(techstack2);

    // const techstack2 = document.createElement('li');
    // techstack2.className = 'popupbutton';
    // techstack2.textContent = projectsDetails[0].jobDescriptionDetails[1]
    // ul2.appendChild(techstack2);

    // const techstack2 = document.createElement('li');
    // techstack2.className = 'popupbutton';
    // techstack2.textContent = projectsDetails[0].jobDescriptionDetails[1]
    // ul2.appendChild(techstack2);

    // const techstack2 = document.createElement('li');
    // techstack2.className = 'popupbutton';
    // techstack2.textContent = projectsDetails[0].jobDescriptionDetails[1]
    // ul2.appendChild(techstack2);

    // const techstack2 = document.createElement('li');
    // techstack2.className = 'popupbutton';
    // techstack2.textContent = projectsDetails[0].jobDescriptionDetails[1]
    // ul2.appendChild(techstack2);

    // end techstack list

    const div4 = document.createElement('div');
    div4.className = 'popupaction';
    div1.appendChild(div4);

    const button5 = document.createElement('button');
    button5.className = 'seeLiveButton';
    button5.textContent = projectsDetails[item].sourceLinkButton.buttonText;
    button5.innerHTML = '<a href="https://github.com/joyapisi/Quote-Generator"> <img src="./sources/popupaction.png" alt="see image live" />';
    div1.appendChild('button5');

    const button6 = document.createElement('a');
    button6.className = 'seeSourceButton';
    button6.textContent = projectsDetails[item].sourceLinkButton.buttonText;
    button6.innerHTML = '<a href="https://github.com/joyapisi/Quote-Generator"> <img src="./sources/popupaction.png" alt="see image live" />';
    div1.appendChild('button6');
    // document.getElementById("div1").appendChild(button6);

    modalCards.style.display = 'block';
  });
});
closeButton.addEventListener('click', togglePopup);

// function togglePopup() {
//   closeButton.addEventListener('click', () => {
//   modalCards.style.display = 'none';
//   modalContent.innerHTML = '';
// })};