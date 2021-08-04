const { Projects } = require("../models");

const projectsData = [
  {
    name: "MyKNL ZAP",
    isTeamProject: true,
    thumbnail: "myknl-thumbnail.PNG",
    description:
      "This app allows pet owners to be able to easily book a reservation at their local pet hotel. Users will be able to make an account with their own pet and reservation data.",
    github_link: "https://github.com/zzangu0215/zzangu-and-the-pals",
    deployed_link: "https://myknl-zap.herokuapp.com/",
    technologies:
      "HTML, CSS, JavaScript, js-Datepicker, Express, Sequelize, MySQL",
  },
  {
    name: "FANTOM",
    isTeamProject: true,
    thumbnail: "fantom-thumbnail.PNG",
    description:
      "Do you want to explore about your favorite MARVEL heroes? You should checkout our FANTOM app to get more familiar with your favorite heroes!",
    github_link: "https://github.com/zzangu0215/fantom",
    deployed_link: "https://zzangu0215.github.io/fantom/",
    technologies: "HTML, CSS, JavaScript, BootStrap, jQuery",
  },
  {
    name: "Employee Tracker",
    isTeamProject: false,
    thumbnail: "employee-tracker-thumbnail.PNG",
    description:
      "As a business owner, don't you want to manage your employees, their roles, and their deparmtnets? It's time to use Employee Tracker to fulfill your needs!",
    github_link: "https://github.com/zzangu0215/employee-tracker",
    technologies: "JavaScript, Node.js, Inquirer, MySQL",
  },
  {
    name: "Team Profile Generator",
    isTeamProject: false,
    thumbnail: "teamPFG-thumbnail.PNG",
    description:
      "As a project manager, don't you want to have a nice team profile page? Let my Team Profile Generator do that for you! Just run my app and type information of you and your team members!",
    github_link: "https://github.com/zzangu0215/Team-Profile-Generator",
    technologies: "JavaScript, Node.js, Inquirer, Jest",
  },
  {
    name: "Professional README Generator",
    isTeamProject: false,
    thumbnail: "readmeGEN-thumbnail.PNG",
    description:
      "Do you want to save your time on making README.md for your project? You should checkout my Professional README Generator to make your life easier!",
    github_link: "https://github.com/zzangu0215/Professional_README_Generator",
    technologies: "JavaScript, Node.js, Inquirer",
  },
  {
    name: "Weather Dashboard",
    isTeamProject: false,
    thumbnail: "weather-dashboard-thumbnail.PNG",
    description:
      "Do you want to search weather for your favorite cities? Come to my Weather Dashboard to be a forecaster!",
    github_link: "https://github.com/zzangu0215/Weather_Dashboard",
    deployed_link: "https://zzangu0215.github.io/Weather_Dashboard/",
    technologies: "HTML, CSS, JavaScript, jQuery",
  },
  {
    name: "Work Day Scheduler",
    isTeamProject: false,
    thumbnail: "scheduler-thumbnail.PNG",
    description:
      "If you want to organize your daily schedule? Come to my Work Day Scheduler to put your schedules!",
    github_link: "https://github.com/zzangu0215/Work_Day_Scheduler",
    deployed_link: "https://zzangu0215.github.io/Work_Day_Scheduler/",
    technologies: "HTML, CSS, JavaScript, jQuery",
  },
  {
    name: "Code Quiz Challenge",
    isTeamProject: false,
    thumbnail: "codequiz-thumbnail.PNG",
    description:
      "If you want to test out your knowledge of JavaScript? Come take a well-made quiz here! Jun's Code Quiz",
    github_link: "https://github.com/zzangu0215/Code_Quiz_Challenge",
    deployed_link: "https://zzangu0215.github.io/Code_Quiz_Challenge/",
    technologies: "HTML, CSS, JavaScript, jQuery",
  },
];

const seedProjects = () => Projects.bulkCreate(projectsData);

module.exports = seedProjects;
