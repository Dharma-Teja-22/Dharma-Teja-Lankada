AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Student Grade Prediction",
    cardImage: "assets/images/project/sgp.png",
    description: "Build a AI-powered academic performance forecasting tool",
    Previewlink: "https://github.com/Dharma-Teja-22/Student-Grade-Prediction",
    Githublink: "https://github.com/Dharma-Teja-22/Student-Grade-Prediction",
  },
  {
    title: "E-Assessment in ∞ Exams",
    cardImage: "assets/images/project/Eas.png",
    description: "Automated exam grading via images.",
    Previewlink:
      "https://github.com/Dharma-Teja-22/E-Assessment-Using-Image-Processing-in-Exams",
    Githublink:
      "https://github.com/Dharma-Teja-22/E-Assessment-Using-Image-Processing-in-Exams",
  },
  {
    title: "Weather App",
    cardImage: "assets/images/project/wapp.jpg",
    description: "Real-time weather updates using Python Django framework.",
    Previewlink:
      "https://github.com/Dharma-Teja-22/Weather-App-with-Python-Django",
    Githublink:
      "https://github.com/Dharma-Teja-22/Weather-App-with-Python-Django",
  },
  {
    title: "Hiring Portal - Next.js",
    cardImage: "assets/images/project/hire.png",
    description: "Efficient job matching with Next.js platform.",
    Previewlink: "https://github.com/Dharma-Teja-22/Hiring-Portal-Using-Next",
    Githublink: "https://github.com/Dharma-Teja-22/Hiring-Portal-Using-Next",
  },
  {
    title: "Youtube Video Summarization",
    cardImage: "assets/images/project/yts.png",
    description: "Summarizing YouTube videos using AI automation.",
    Previewlink:
      "https://github.com/Dharma-Teja-22/YouTube-Video-summarization",
    Githublink: "https://github.com/Dharma-Teja-22/YouTube-Video-summarization",
  },
  {
    title: "Sentiment Analysis using Flask and ML",
    cardImage: "assets/images/project/sa.jpg",
    description:
      "Analyzing text to determine its emotional tone or sentiment polarity.",
    Previewlink:
      "https://github.com/Dharma-Teja-22/Sentiment-Analysis-Using-ML",
    Githublink: "https://github.com/Dharma-Teja-22/Sentiment-Analysis-Using-ML",
  },
  {
    title: "Dermatology Image analysis using CNN",
    cardImage: "assets/images/project/skd.jpg",
    description:
      "Using Convolutional Neural Networks to analyze dermatology images for diagnosis.",
    Previewlink:
      "https://github.com/Dharma-Teja-22/Dermatology-Image-Analysis-Using-CNN",
    Githublink:
      "https://github.com/Dharma-Teja-22/Dermatology-Image-Analysis-Using-CNN",
  },
  {
    title: "Hiring Portal using React and Node",
    cardImage: "assets/images/project/hire.png",
    description:
      "A platform for managing recruitment with React frontend and Node backend.",
    Previewlink: "https://github.com/Dharma-Teja-22/Hire",
    Githublink: "https://github.com/Dharma-Teja-22/Hire",
  },
  {
    title: "Chatbot using Streamlit and GenAI",
    cardImage: "assets/images/project/chat.png",
    description: "Built using Python streamlit and GenAI based chatbot",
    Previewlink: "https://chat-bot-qmfudkxqpfxcjryznevcub.streamlit.app/",
    Githublink: "https://github.com/Dharma-Teja-22/chat-bot",
  },
  {
    title: "Omni Food",
    cardImage: "assets/images/project/omni.jpg",
    description:
      "A concept offering diverse food options from various cuisines in one place.",
    Previewlink: "https://dharma-teja-22.github.io/Omni-Food/",
    Githublink: "https://github.com/Dharma-Teja-22/Omni-Food",
  },
  {
    title: "Digital - Analog",
    cardImage: "assets/images/project/dtat.png",
    description:
      "A timekeeping device showing time in digital or traditional analog format.",
    Previewlink: "https://dharma-teja-22.github.io/Digital-Analog-Clock/",
    Githublink: "https://github.com/Dharma-Teja-22/Digital-Analog-Clock",
  },
  {
    title: "Sprills - HTML",
    cardImage: "assets/images/project/sprils.png",
    description: "Sprills using HTML and JS",
    Previewlink: "https://dharma-teja-22.github.io/Sprills/",
    Githublink: "https://github.com/Dharma-Teja-22/Sprills",
  },
  {
    title: "Flat-pack Restaurant web application",
    cardImage: "assets/images/project/res.png",
    description:
      "Minimalist web app for browsing menus, placing orders, and checkout.",
    Previewlink: "https://dharma-teja-22.github.io/Restaurant/",
    Githublink: "https://github.com/Dharma-Teja-22/Restaurant",
  },
  {
    title: "Rice grain quality prediction",
    cardImage: "assets/images/project/rqp.jpg",
    description:
      "Predicting rice grain quality using machine learning algorithms and data.",
    Previewlink:
      "https://github.com/Dharma-Teja-22/Rice-Grain-Quality-prediction",
    Githublink:
      "https://github.com/Dharma-Teja-22/Rice-Grain-Quality-prediction",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    // Check if it's one of the specific cards that needs left alignment
    const isSpecialCard = title === "N S Raju Institute of Technology" || title === "GVMC High School - Sriharipuram";
    
    output += `       
        <div class="column skill-card card" style="margin: 10px" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data" style="height: 79%;">
              <div class="content" style="display: flex; flex-direction: column; height: 95%; justify-content: space-between;">
                <div class="title-div" style="padding: 10px; text-align: ${isSpecialCard ? 'left' : 'center'};">
                  <h1 class="title" style="text-align: ${isSpecialCard ? 'left' : 'center'};"><a href="#">${title}</a></h1>
                  ${isSpecialCard ? `
                    <div style="text-align: left; margin-top: 10px;">
                      ${title === "N S Raju Institute of Technology" ? `
                        <p>Bachelors of Technology, Computer Science and Engineering</p>
                        <p>9.31 CGPA</p>
                        <p>Mastered communication & developed interest towards tech</p>
                      ` : `
                        <p>High School</p>
                        <p>Passed in distinction with 98%</p>
                        <p>Excellence in Speech and Essay Contests</p>
                        <p>Participated in Essay and Acting events</p>
                      `}
                    </div>
                  ` : ''}
                </div>
                <ul class="menu-content" style="display: flex; justify-content: flex-end; gap: 15px; padding: 15px; margin: 0; bottom: 0; right: 0; border-top-left-radius: 10px;">
                  <li>
                    <a href="${Previewlink}" class="social-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="${Githublink}" class="social-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
