AOS.init();
const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "NPTEL - Cyber Security",
    cardImage: "assets/images/education-page/Certificates/Cyber_Security.png",
    moocLink:
      "https://drive.google.com/file/d/1IPCCVI897qdXu5hwt9A_KN94sDKaOzmC/view",
  },
  {
    title: "Jobaaj - Data Analytics",
    cardImage: "assets/images/education-page/Certificates/DA.jpg",
    moocLink:
      "https://drive.google.com/file/d/1Wf7WWxFTTzLKsIt2-rmZlXdxKCAde9aI/view",
  },
  {
    title: "NPTEL - Deep Learning",
    cardImage: "assets/images/education-page/Certificates/Deep_Learning.png",
    moocLink:
      "https://drive.google.com/file/d/1AelEOzuayccmtrp_hXKpF2r1fXWTSwHz/view",
  },
  {
    title: "HMI - Data Analytics",
    cardImage:
      "assets/images/education-page/Certificates/Data_Analytics_HMI.png",
    moocLink:
      "https://drive.google.com/file/d/18kQp4sI_zHaeo6WL7O-Ng-iRAq-8qLOp/view",
  },

  {
    title: "Great Learning - Data Vizualization using python",
    cardImage:
      "assets/images/education-page/Certificates/Data_Visualization_Py.png",
    moocLink:
      "https://drive.google.com/file/d/1CTVhDleiCLEI-H5nlaVG5C_qdHaI-ulM/view",
  },
  {
    title: "Infosys Springboard - Deep Learning",
    cardImage: "assets/images/education-page/Certificates/DL_Infosys.png",
    moocLink:
      "https://drive.google.com/file/d/1s08g_pgSwKX7WkOzPbTt4DqhBzmtyDKV/view",
  },
  {
    title: "NASSCOM - Data Science",
    cardImage: "assets/images/education-page/Certificates/DS.png",
    moocLink:
      "https://drive.google.com/file/d/1nUmS6lVcynk5Weu3TnnEAkIxJu7qCPRe/view",
  },
  {
    title: "HMI - Data Science",
    cardImage: "assets/images/education-page/Certificates/SI.png",
    moocLink:
      "https://drive.google.com/file/d/1Q7yKKa2cYnFDDCaRkzBEqF9rgzCdEtEU/view",
  },
  {
    title: "Lumos - HTML",
    cardImage: "assets/images/education-page/Certificates/HTML_Lumos.png",
    moocLink:
      "https://drive.google.com/file/d/1DBSo5It8M2mq0IuD-_obu8HMp2qkQsIZ/view4",
  },
  {
    title: "CodeMode - Python for Data Science ",
    cardImage: "assets/images/education-page/Certificates/PDS.png",
    moocLink:
      "https://drive.google.com/file/d/15soZ3g3PhRC-lH0v1xnnuk0dJdpXo2SG/view",
  },
  {
    title: "Power-BI",
    cardImage: "assets/images/education-page/Certificates/PowerBI.jpeg",
    moocLink:
      "https://drive.google.com/file/d/1t2LxPi3bgVriRZE08rQWBztitT9-D9m3/view",
  },
  {
    title: "TJCSE - Pubish Paper",
    cardImage: "assets/images/education-page/Certificates/publish.png",
    moocLink:
      "https://drive.google.com/file/d/10l1vnkNnWh49l1GHLbaKTYjQbLyHIVK6/view",
  },

  {
    title: "Board Infinity - Data Science",
    cardImage: "assets/images/education-page/Certificates/Data_Science.png",
    moocLink:
      "https://drive.google.com/file/d/1e4BBZDBeDhijofVJ8eGMNRh2zqHHJaq-/view",
  },
  {
    title: "Board Infinity - Full Stack Development",
    cardImage: "assets/images/education-page/Certificates/FSD_BI.png",
    moocLink:
      "https://drive.google.com/file/d/1lgxNVIxlJO_MIZLcs8aX-TLKAjDM9F5I/view",
  },
  {
    title: "DSS - Front End Developer",
    cardImage: "assets/images/education-page/Certificates/FED_DSS.png",
    moocLink:
      "https://drive.google.com/file/d/1RBA56G5dGbGan0_0akJaWqmH_chlrHS1/view",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image " style="height: 240px; object-fit: cover;">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
