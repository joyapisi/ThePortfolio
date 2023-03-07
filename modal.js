const popupCard1 = document.getElementById("modalCard1")

function togglePopup1(){
  popupCard1.classList.toggle("active");
}

function togglePopup2(){
  document.getElementById("modalCard2").classList.toggle("active");
}

function togglePopup3(){
  document.getElementById("modalCard3").classList.toggle("active");
}

function togglePopup4(){
  document.getElementById("modalCard4").classList.toggle("active");
}

function closeButton(){
  document.getElementsByClassName("close").classList.toggle("active");
}

// const popupCard1=document.getElementById("popup1");
// const popupCard2=document.getElementById("popupCard2");
// const popupCard3=document.getElementById("popupCard3");
// const popupCard4=document.getElementById("popupCard4");
 
//   function togglePopup1(){
//     popupCard1.classList.toggle("active")
//   }
  
//   function togglePopup2(){
//     popupCard2.classList.toggle("active");
//   }
  
//   function togglePopup3(){
//     popupCard3.classList.toggle("active");
//   }
  
//   function togglePopup4(){
//     popupCard4.classList.toggle("active");
//   }
//   popupCard1.addEventListener('click', menuPopup);

// const projects = document.getElementsByClassName('modal');

const projectsDetails = 
  [{
    id: 'popupCard1',
    featuredimage: './sources/Snapshoot-Portfolio.png',
    title: 'Tonic',
    jobDescription: {
      jobCompany: 'CANOPY',
      jobTitle: 'BackEndDev',
      jobYear: '2015',
    },
    jobDescriptionDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem',
    myTechStack: ['Javascript' 'HTML' 'CSS' 'Github' 'Ruby' 'Bootstrap'],
    liveDemoButton: {
      'See Live',
      'https://joyapisi.github.io/Quote-Generator/',
    }
    sourceLinkButton: {
      'See Source',
      'https://github.com/joyapisi/Quote-Generator',
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
    myTechStack: ['Javascript' 'HTML' 'CSS' 'Github' 'Ruby' 'Bootstrap'],
    liveDemoButton: {
      'See Live',
      'https://joyapisi.github.io/Quote-Generator/',
    }
    sourceLinkButton: {
      'See Source',
      'https://github.com/joyapisi/Quote-Generator',
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
    myTechStack: ['Javascript' 'HTML' 'CSS' 'Github' 'Ruby' 'Bootstrap'],
    liveDemoButton: {
      'See Live',
      'https://joyapisi.github.io/Quote-Generator/',
    }
    sourceLinkButton: {
      'See Source',
      'https://github.com/joyapisi/Quote-Generator',
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
    myTechStack: ['Javascript' 'HTML' 'CSS' 'Github' 'Ruby' 'Bootstrap'],
    liveDemoButton: {
      'See Live',
      'https://joyapisi.github.io/Quote-Generator/',
    }
    sourceLinkButton: {
      'See Source',
      'https://github.com/joyapisi/Quote-Generator',
    },
  },]

  // buttons to click
  const modalButton1 = document.getElementById('modalButton1');
  const modalButton2 = document.getElementById('modalButton2');
  const modalButton3 = document.getElementById('modalButton3');
  const modalButton4 = document.getElementById('modalButton4');

  //popup page HTML elements
  const modalCards = document.getElementById('modalCards');
  const topcontainter = document.getElementsByClassName('topcontainter');
  const closeButton = document.getElementsByClassName('closeButton');
  const modalContainerItems = document.getElementById('modalContainerItems');
  
 //create popup pages
 let section = document.createElement('section');
 section.id = 'modalCards';
 section.className = 'modal';
 document.body.appendChild(section);

 let div = document.createElement('div');
 div.className = 'topcontainter';
 section.appendChild(div);

 let h2 = document.createElement('h2');
 h2.className= 'h2popup'
 h2.textContent = 'Tonic';
 div.appendChild(h2);

 let closeButton = document.createElement('button');
 closeButton.className = 'closeButton';
 closeButton.textContent = 'Tonic'; ?????
 div.appendChild(closeButton);

 let ul = document.createElement('ul');
 ul.className = popuptonic
 h2.textContent = 'Tonic';
 div.appendChild(h2);




 
 const img = document.createElement("img");
 img.src = projectsDetails[featuredImage];
//  img.src = projectsDetails[index].featuredImage;
//  image.appendChild(img);
div.appendChild(img);



