const projects = [
  {
    id: 1,
    title: 'Tonic',
    summary: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    pictures: {
      sources: [
        {
          media: '(max-width: 400px)',
          srcset: 'images/works/project_01.main_snapshot_295w.jpg',
        },
        {
          media: '(min-width: 400px)',
          srcset: 'images/works/project_01.main_snapshot_544w.jpg',
        },
      ],
      image: {
        class: 'card-image',
        source: 'images/works/project_01.main_snapshot_544w.jpg',
        alt: 'Main snapshot of project 1',
      },
    },
    highlights: ['Canopy', 'Back End Dev', '2015'],
    tags: ['html', 'css', 'javascript'],
    live_link: '#',
    source_link: '#',
  },
  {
    id: 2,
    title: 'Multi-Post <br />Stories',
    summary: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    pictures: {
      sources: [
        {
          media: '(max-width: 400px)',
          srcset: 'images/works/project_02.main_snapshot_295w.jpg',
        },
        {
          media: '(min-width: 400px)',
          srcset: 'images/works/project_02.main_snapshot_544w.jpg',
        },
      ],
      image: {
        class: 'card-image',
        source: 'images/works/project_02.main_snapshot_544w.jpg',
        alt: 'Main snapshot of project 2',
      },
    },
    highlights: ['Canopy', 'Back End Dev', '2015'],
    tags: ['html', 'css', 'javascript'],
    live_link: '#',
    source_link: '#',
  },
  {
    id: 3,
    title: 'Facebook 360',
    summary:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    pictures: {
      sources: [
        {
          media: '(max-width: 400px)',
          srcset: 'images/works/project_03.main_snapshot_295w.jpg',
        },
        {
          media: '(min-width: 400px)',
          srcset: 'images/works/project_03.main_snapshot_544w.jpg',
        },
      ],
      image: {
        class: 'card-image',
        source: 'images/works/project_03.main_snapshot_544w.jpg',
        alt: 'Main snapshot of project 3',
      },
    },
    highlights: ['Facebook', 'Full Stack Dev', '2015'],
    tags: ['html', 'css', 'javascript'],
    live_link: '#',
    source_link: '#',
  },
  {
    id: 4,
    title: 'Uber Navigation',
    summary:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    pictures: {
      sources: [
        {
          media: '(max-width: 400px)',
          srcset: 'images/works/project_04.main_snapshot_295w.jpg',
        },
        {
          media: '(min-width: 400px)',
          srcset: 'images/works/project_04.main_snapshot_544w.jpg',
        },
      ],
      image: {
        class: 'card-image',
        source: 'images/works/project_04.main_snapshot_544w.jpg',
        alt: 'Main snapshot of project 4',
      },
    },
    highlights: ['Uber', 'Lead Developer', '2018'],
    tags: ['html', 'Ruby on Rails', 'css', 'javascript'],
    live_link: '#',
    source_link: '#',
  },
];

const buildPictureSources = (project) => project.pictures.sources.map((pictureSource) => `<source media="${pictureSource.media}" srcset="${pictureSource.srcset}" />`).join('');

const buildHighlights = (project) => project.highlights?.map((highlight) => `<div class="project-client">${highlight}</div>`).join('');

const buildProjectTags = (project) => project.tags.map((tag) => `<li>${tag}</li>`).join('');

const projectTemplate = (project) => `
    <article class="card-works">
      <!-- Responsive images: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images -->
      <picture>
        ${buildPictureSources(project)}
        <img
          class="${project.pictures.image.class}"
          src="${project.pictures.image.source}"
          alt="${project.pictures.image.alt}"
        />
      </picture>
      <div class="card-details">
        <header>
          <div class="modal-title-container">
            <h3 class="project-title">${project.title}</h3>
            <button class="close-modal" onclick="hidePopup()" >&#x292B;</button>
          </div>
          <div class="project-highlights">${buildHighlights(project.id)}</div>
        </header>
        <p class="project-summary">${project.summary}</p>
        <ul class="project-tags">${buildProjectTags(project)}</ul>
        <button class="btn" onclick="showPopup(${project.id})" >See Project</button>
      </div>
    </article>

  `;

const projectsContainer = document.getElementById('portfolio').parentElement;// the portfolio heading's parent

projects.forEach((project) => {
  // add the project
  projectsContainer.innerHTML += projectTemplate(project);
});

/* PROJECT MODAL POPUP */
const projectModal = document.getElementById('project-modal');

const popupTemplate = (project) => `
    <article class="popup-card-works">
      <header>
        <div class="modal-title-container">
          <h3 class="project-title">${project.title}</h3>
          <button class="close-modal" onclick="hidePopup()" >&#x292B;</button>
        </div>
        <div class="project-highlights">${buildHighlights(project)}</div>
      </header><br>

      <!-- Responsive images: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images -->
      <picture>
        ${buildPictureSources(project)}
        <img
          class="card-image"
          src="${project.pictures.image.source}"
          alt="${project.pictures.image.alt}"
        />
      </picture>
      <div class="card-details">
        <p class="project-summary">${project.summary}</p>
        <ul class="project-tags">${buildProjectTags(project)}</ul>
      </div>

    </article>
  `;

/* eslint-disable no-unused-vars */
/* These functions are being used in the HTML code of the projectTemplate */

function showPopup(projectId) {
  projectModal.innerHTML = popupTemplate(projects[projectId - 1]);
  window.scrollTo(0, 0);
}

function hidePopup() {
  projectModal.innerHTML = '';
}

/* eslint-disable no-unused-vars */
