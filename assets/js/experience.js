AOS.init();
const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Python Full Stack Development Intern",
    cardImage: "assets/images/experience-page/hmi.jpeg",
    // place: "HMI Engineering Services.",
    place: "Budhil Park Road, Dwaraka Nagar, Visakhapatnam.",
    info: "Budhil Park Road Dwaraka Nagar, Visakhapatnam, Andhra Pradesh 530016",
    time: "(June, 2022 - July, 2022)",
    desp: "<li>Developed and maintained full-stack web applications using Python and Django.</li> <li>Assisted in both frontend and backend development, ensuring smooth integration.</li> <li>Collaborated with the QA team to identify and fix bugs, improving application performance.</li> <li>Optimized API endpoints and worked on enhancing database efficiency.</li>",
  },

  {
    title: "Senior Research Developer Intern",
    cardImage: "assets/images/experience-page/hmi2.jpeg",
    place: "Dwaraka Nagar, Visakhapatnam, Andhra Pradesh - 530016",
    time: "(January, 2023 - September, 2023)",
    desp: "<li>Worked on data analytics using Power BI and Tableau.</li> <li>Mentored students in Python Full Stack, Machine Learning, and Data Analytics.</li> <li>Developed mini projects in Python as a technical trainer.</li><li> <b>OJT</b> trainee focused on Python development, mentoring students and project management skills.</li>",
  },
  {
    title: "Demy Software Solutions Front-End Intern",
    cardImage: "assets/images/experience-page/DSS.png",
    place: "Remote",
    time: "(December, 2023 - March, 2024)",
    desp: "<li>Developed responsive web pages using HTML, CSS, and JavaScript.</li> <li>Worked with React to create interactive user interfaces.</li> <li>Gained hands-on experience with Git for version control and collaboration.</li> <li>Enhanced skills in frontend design, styling, and component-based architecture.</li>",
  },

  {
    title: "Senior Project Developer Intern",
    cardImage: "assets/images/experience-page/ints.jpg",
    place: "Vijayawada",
    time: "(April, 2024 - June, 2024)",
    desp: "<li>Led project development initiatives, ensuring timely delivery and optimal performance.</li> <li>Developed full-stack applications using modern frameworks and best practices.</li> <li>Collaborated with teams to mentor junior developers and optimize project workflows.</li>"
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Ineuron-Hackathon",
    cardImage: "assets/images/experience-page/Ineuron.png",
    description:
      "Developed a web project as a part of Ineuron 2 day hackathon at my college.",
  },
  {
    title: "National Sysmposium on Data Driven Deep Disruptions",
    cardImage: "assets/images/experience-page/IIITH.jpg",
    description:
      "Taken part in a symposium where experts from diverse fields have showcased their effective ideas.",
  },
  {
    title: "Division Evaluation Contest",
    cardImage: "assets/images/experience-page/TM3.jpg",
    description:
      "Won 2nd Place at Club level and Area Level Evaluation Contest and have Participated in Division Level",
  },
  {
    title: "Area Level TableTopics Contest",
    cardImage: "assets/images/experience-page/TM4.jpg",
    description:
      "I did a podium finish in an impromptu speaking competition in Toastmasters.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "K-Hub",
    subtitle: "Senior Research Developer Intern",
    image: "assets/images/experience-page/K-HUB.png",
    desp: "K-Hub is affliated to IIIT-H. To know more click below",
    href: "K-Hub.html",
  },
  {
    title: "Global Coding Club",
    subtitle: "Team Leader",
    image: "assets/images/experience-page/GCC.png",
    desp: "Global Coding Club(GCC) is a Tech Club @KIET.",
    href: "GCC.html",
  },
  {
    title: "KIET Toastmasters Club",
    subtitle: "Area I1 Director | District 126",
    image: "assets/images/experience-page/KTMC.png",
    desp: "Toastmasters is a self-learning platform and KIET Toastmsters is one such club.",
    href: "KTMC.html",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Click here!</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
