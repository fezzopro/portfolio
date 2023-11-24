document.addEventListener('DOMContentLoaded', () => {
  // Project object

  const projectArray = [
    {
      id: 1,
      title: 'React Dashboard',
      projectMeta: ['SELF-EMPLOYED', 'Front End Dev', '2023'],
      projectImage: {
        desktop: 'assets/images/projects/dashboard-big-web.png',
        smallDevice: 'assets/images/projects/dashboard-big.png',
        modelImage: 'assets/images/projects/dashboard-big.png',
      },
      projectDescription: "React Admin Dashboard. This application was built using using React, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, 4 different Charts, 3 different Data Table Pages, FAQ Page, Form Page, and Calendar Integration",
      projectStacks: ['React', 'React Pro SideBar', 'MaterialUI', 'Nivo Charts'],
      liveLink: 'https://react-admin-dashboard-mu-five.vercel.app/',
      sourceLink: 'https://github.com/fezzopro/react-admin-dashboard',
    },
    {
      id: 2,
      title: 'To-Do List',
      projectMeta: ['Microverse', 'Full Stack Dev', '2023'],
      projectImage: {
        desktop: 'assets/images/to-do-list-big-screen.png',
        smallDevice: 'assets/images/to-do-list-phone.png',
        modelImage: 'assets/images/to-do-list-big-screen.png',
      },
      projectDescription: 'Stay on top of your busy schedule with TaskOrganizer, the online to-do list that combines the power of Webpack, JavaScript, HTML, CSS, and Bootstrap to bring you a seamless, efficient, and visually pleasing task management experience. Start using TaskOrganizer today and unlock the potential of productivity at your fingertips!',
      projectStacks: ['webpack', 'html5', 'css', 'javascript'],
      liveLink: 'https://fezzopro.github.io/todo-list/dist/',
      sourceLink: 'https://github.com/fezzopro/todo-list',
    },
    {
      id: 3,
      title: 'TV Shows',
      projectMeta: ['MICROVERSE', 'Full Stack Dev', '2023'],
      projectImage: {
        desktop: 'assets/images/projects/tv-shows-web.png',
        smallDevice: 'assets/images/projects/tv-shows-big.png',
        modelImage: 'assets/images/projects/tv-shows-big.png',
      },
      projectDescription: 'A website displaying movies, comments, likes & reservations. This project displays TV Shows from the TV- Maze API.It also allows you to add likes, comments, and reservations to each movie using the Involvement API.All data is preserved thanks to the external TV - Maze API service.',
      projectStacks: ['html', 'css', 'javascript', 'API', 'web-pack'],
      liveLink: 'https://waelelsafty07.github.io/JavaScript-capstone-project/dist/',
      sourceLink: 'https://github.com/waelelsafty07/JavaScript-capstone-project',
    },
    {
      id: 4,
      title: 'Home Finance Tracker',
      projectMeta: ['Microverse', 'Full Stack Dev', '2023'],
      projectImage: {
        desktop: 'assets/images/projects/home-finance-web.png',
        smallDevice: 'assets/images/projects/home-finance.png',
        modelImage: 'assets/images/projects/home-finance.png',
      },
      projectDescription: 'Introducing "HomeFin Tracker," a user-friendly mobile application designed to revolutionize your home finance management. With HomeFin Tracker, effortlessly monitor and control your household expenses, track savings goals, and gain insights into your financial habits. This intuitive app provides real-time updates on your spending patterns, allowing you to set budgets, categorize expenditures.',
      projectStacks: ['React', 'Ruby on rails', 'css', 'javascript'],
      liveLink: 'https://home-budget-tracker.onrender.com/',
      sourceLink: 'https://github.com/fezzopro/Budget-app',
    },
    {
      id: 5,
      title: 'Car Rental',
      projectMeta: ['Microverse', 'Full Stack Dev', '2023'],
      projectImage: {
        desktop: 'assets/images/projects/car-rental.png',
        smallDevice: 'assets/images/projects/car-rental.png',
        modelImage: 'assets/images/projects/car-rental.png',
      },
      projectDescription: 'Car Rental is a web application that allows users to add, rent, and reserve vehicles. It is built using React as a Front-end library along with redux and Ruby On Rails at the backend for building the APIs together with the PostgreSQL database.',
      projectStacks: ['html', 'Ruby on rails', 'css', 'javascript'],
      liveLink: 'https://vehicle-company.onrender.com/',
      sourceLink: 'https://github.com/tumainimaganiko/front-end-capstone-group',
    },
  ];

  // Create Project Card

  const createProjectCard = (project) => {
    const card = document.createElement('div');
    card.className = 'card work-1';
    const cardImage = document.createElement('img');
    cardImage.className = 'card-image';
    cardImage.src = project.projectImage.desktop;
    card.appendChild(cardImage);
    const leftBlock = document.createElement('div');
    leftBlock.className = 'left-block details';
    const cardTitle = document.createElement('h2');
    cardTitle.className = 'project-title';
    cardTitle.textContent = project.title;
    leftBlock.appendChild(cardTitle);
    const cardProjectMetaUl = document.createElement('ul');
    cardProjectMetaUl.className = 'project-meta';
    const projectMetaLii = document.createElement('li');
    const projectMetaLiSpan = document.createElement('span');
    const projectMetaLiSpan1 = document.createElement('span');
    projectMetaLiSpan.className = 'circle';
    projectMetaLiSpan1.className = 'role cirlce';
    projectMetaLii.appendChild(projectMetaLiSpan);

    let counter = 1;
    project.projectMeta.forEach((dataItem) => {
      const projectMetaLi = document.createElement('li');
      if (counter === 1) {
        projectMetaLi.textContent = dataItem;
      } else if (counter % 2 === 0) {
        projectMetaLi.className = 'role';
        cardProjectMetaUl.appendChild(projectMetaLii);
        projectMetaLi.textContent = dataItem;
      } else {
        projectMetaLi.className = 'role';
        projectMetaLi.textContent = dataItem;
      }
      cardProjectMetaUl.appendChild(projectMetaLi);
      counter += 1;
    });

    leftBlock.appendChild(cardProjectMetaUl);
    const cardParagraph = document.createElement('p');
    cardParagraph.className = 'project-description';
    cardParagraph.textContent = project.projectDescription;
    leftBlock.appendChild(cardParagraph);
    const cardStackUl = document.createElement('ul');
    cardStackUl.className = 'stacks';
    project.projectStacks.forEach((stack) => {
      const projectStackLi = document.createElement('li');
      projectStackLi.textContent = stack;
      cardStackUl.appendChild(projectStackLi);
    });
    const cardButtonMoreDiv = document.createElement('div');
    cardButtonMoreDiv.className = 'more';
    const cardButtonMorespan = document.createElement('span');
    const cardButtonMore = document.createElement('button');
    cardButtonMore.className = 'btn-more see-project';
    cardButtonMore.id = `project-${project.id}`;
    cardButtonMore.textContent = 'See Project';
    cardButtonMorespan.appendChild(cardButtonMore);
    cardButtonMoreDiv.appendChild(cardButtonMorespan);
    leftBlock.appendChild(cardStackUl);
    leftBlock.appendChild(cardButtonMoreDiv);
    card.appendChild(leftBlock);
    return card;
  };
  const workSection = document.querySelector('.work');

  if (projectArray.length > 0) {
    projectArray.forEach((project) => {
      workSection.appendChild(createProjectCard(project));
    });
  }

  // Mobile Menu Start
  const humbergMenu = document.querySelector('.burger-menu');
  const mobilePopUpMenue = document.createElement('div');
  mobilePopUpMenue.className = 'left-navigation hide mt-3-5';
  const sections = document.querySelectorAll('section');
  const wrapper = document.querySelector('.wrapper');
  const topToolbar = document.querySelector('.top-toolbar');

  const mobileMenu = document.querySelector('.burger > div > ul');
  const mobileMenulinks = document.querySelectorAll('.menu-link');
  const logoPlaceHolder = document.querySelector('.logo-placeholder a');

  mobilePopUpMenue.appendChild(mobileMenu);
  wrapper.appendChild(mobilePopUpMenue);
  const createBlurBackground = () => {
    sections.forEach((section) => {
      section.classList.toggle('hide');
    });
    sections[0].classList.toggle('left-navigation-backgound');
    sections[0].classList.toggle('hide');
  };

  const toggleMenu = () => {
    logoPlaceHolder.classList.toggle('hide');
    mobilePopUpMenue.classList.toggle('hide');
    topToolbar.classList.toggle('menu-background');
    humbergMenu.classList.toggle('close-icon');
    createBlurBackground();
  };

  humbergMenu.addEventListener('click', toggleMenu);
  mobileMenulinks.forEach((link) => {
    link.addEventListener('click', toggleMenu);
  });
  // Mobile Menu End

  // Project Details Model Start
  const modelDiv = document.querySelector('.models');
  const seeDetailsButtons = document.querySelectorAll('.see-project');
  const closeModel = document.querySelector('.close-model');

  const toggleModel = () => {
    modelDiv.classList.toggle('hide');
    topToolbar.classList.toggle('hide');
    createBlurBackground();
  };

  const createModel = () => {
    // Crean the already existing stacks
    const stacks = document.querySelectorAll('.stack-li');
    if (stacks.length > 0) {
      // remove clean stack list
      stacks.forEach((stack) => {
        document.querySelector('.model-technologies').removeChild(stack);
      });
    }
    // codes to Populate model goes here
    const project = document.activeElement.id.split('-')[1];
    const modelProjectTitle = document.querySelector('.model-project-header h2');
    const modelProjectCompany = document.querySelector('.project-meta-model > .company');
    const modelProjectRole = document.querySelector('.project-meta-model > .role');
    const modelProjectYear = document.querySelector('.project-meta-model > .year')
    const modelProjectDescr = document.querySelector('.model-project-description');
    const modelProjectImage = document.querySelector('.model-image');
    const modeButtons = document.querySelectorAll('.model-buttons a');
    modelProjectTitle.textContent = projectArray[project - 1].title;
    modelProjectDescr.textContent = projectArray[project - 1].projectDescription;
    modelProjectCompany.textContent = projectArray[project - 1].projectMeta[0];
    modelProjectRole.textContent = projectArray[project - 1].projectMeta[1];
    modelProjectYear.textContent = projectArray[project - 1].projectMeta[2];
    modelProjectImage.src = projectArray[project - 1].projectImage.modelImage;
    modeButtons[0].href = projectArray[project - 1].liveLink;
    modeButtons[1].href = projectArray[project - 1].sourceLink;
    modeButtons[0].target = '_blank';
    modeButtons[1].target = '_blank';

    const stacksUl = document.querySelector('.model-technologies');
    projectArray[project - 1].projectStacks.forEach((stack) => {
      const li = document.createElement('li');
      li.className = 'stack-li';
      li.textContent = stack;
      stacksUl.appendChild(li);
    });

    // Display Model
    toggleModel();
  };

  seeDetailsButtons.forEach((button) => {
    button.addEventListener('click', createModel);
  });

  closeModel.addEventListener('click', toggleModel);

  // Project Details Model End

  // Populate form with local data
  const form = document.querySelector('.form');
  const names = document.querySelector('input[name="names"]');
  const emailText = document.querySelector('input[name="email"]');
  const message = document.querySelector('.form textarea');

  const temporaryData = JSON.parse(localStorage.getItem('formData'));
  if (temporaryData) {
    names.value = (temporaryData.names.length > 0) ? temporaryData.names : '';
    emailText.value = (temporaryData.emailText.length > 0) ? temporaryData.emailText : '';
    message.value = (temporaryData.message.length > 0) ? temporaryData.message : '';
  }

  form.addEventListener('input', () => {
    const formData = {
      names: names.value,
      emailText: emailText.value,
      message: message.value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  });

  // Start validation to the form
  form.addEventListener('submit', (event) => {
    if (emailText.value !== emailText.value.toLowerCase()) {
      event.preventDefault();

      // Remove any previous error messages
      const previousErrorMessage = form.querySelector('.error-message');
      if (previousErrorMessage) {
        form.removeChild(previousErrorMessage);
      }

      const errorMessage = document.createElement('span');
      const formText = document.querySelector('.form textarea');
      errorMessage.textContent = 'Invalid Email. Email should be all lower case.';
      errorMessage.classList.add('error-message');
      formText.insertAdjacentElement('afterend', errorMessage);
    }
  });
  // End of validation form
});
