AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc:
      "<li>Python is an interpreted high-level general-purpose programming language</li>",
  },
  {
    langImage: "assets/images/techstack-page/c.png",
    langName: "C",
    langDesc:
      "<li>C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc:
      "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
    langDesc:
      "<li>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components</li>",
  },
  {
    langImage: "assets/images/techstack-page/MERN.jpg",
    langName: "MERN",
    langDesc:
      "<li>The MERN stack is a JavaScript-based technology stack used to build modern web applications.</li>",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc:
      "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
  },
  {
    langImage: "assets/images/techstack-page/MongoDB.png",
    langName: "Mongo DB",
    langDesc:
      "<li>Mongo DB is a no relational database that is primarily used for storing large amounts of data</li>",
  },
  {
    langImage: "assets/images/techstack-page/node.png",
    langName: "Node",
    langDesc:
      "<li>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/fastapi.png",
    langName: "FastAPI",
    langDesc:
      "<li>FastAPI is a Python web framework for building APIs. It's designed to make it easy to build APIs quickly and efficiently. FastAPI is a popular choice for building web services and microservices.</li>",
  },
  {
    langImage: "assets/images/techstack-page/DataScience.jpg",
    langName: "Data Science",
    langDesc:
      "<li>Data science is the study of data to extract meaningful insights for business. It's an interdisciplinary field that combines principles and practices from: Mathematics, Statistics, Artificial intelligence, Computer engineering, Scientific computing, Scientific methods, Processes, Algorithms, Systems.</li>",
  },
  {
    langImage: "assets/images/techstack-page/MachineLearning.jpg",
    langName: "Machine Learning",
    langDesc:
      "<li>Machine learning is a type of artificial intelligence (AI) that allows software applications to become more accurate in predicting outcomes without being explicitly programmed to do so</li>",
  },
  {
    langImage: "assets/images/techstack-page/java.jpeg",
    langName: "Java",
    langDesc:
      "<li>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible</li>",
  },
  {
    langImage: "assets/images/techstack-page/mysql.jpeg",
    langName: "MySQL",
    langDesc:
      "<li>MySQL is an open-source relational database management system. Its name is a combination of 'My', the name of co-founder Michael Widenius's daughter, and 'SQL', the abbreviation for Structured Query Language</li>",
  },
  {
    langImage: "assets/images/techstack-page/tailwind.jpeg",
    langName: "Tailwind CSS",
    langDesc:
      "<li>Tailwind CSS is a utility-first CSS framework that provides a set of pre-built classes to style your HTML elements directly, enabling rapid UI development</li>",
  },
  {
    langImage: "assets/images/techstack-page/bigquery.jpeg",
    langName: "BigQuery",
    langDesc:
      "<li>Google BigQuery is a fully-managed, serverless data warehouse that enables scalable analysis over petabytes of data. It's a Platform as a Service that supports querying using ANSI SQL</li>",
  },
  {
    langImage: "assets/images/techstack-page/powerbi.jpeg",
    langName: "Power BI",
    langDesc: "<li>Power BI is a business analytics service by Microsoft that provides interactive visualizations and business intelligence capabilities</li><li>Expertise in DAX, Power Query, and data modeling</li><li>Experience creating interactive dashboards and reports</li>",
  },
  {
    langImage: "assets/images/techstack-page/tableau.jpeg",
    langName: "Tableau",
    langDesc: "<li>Tableau is a powerful data visualization and business intelligence tool</li><li>Proficient in creating interactive dashboards and stories</li><li>Experience with data blending, calculations, and advanced visualizations</li>",
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate = techStack
    .map((stack) => {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `;
    })
    .join("");
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
