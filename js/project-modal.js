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

const projectTemplate = (project) => {
  const pictureSources = project.pictures.sources.map((pictureSource) => `<source media="${pictureSource.media}" srcset="${pictureSource.srcset}" />`).join('');

  const highlights = project.highlights.map((highlight) => `<div class="project-client">${highlight}</div>`).join('');

  const tags = project.tags.map((tag) => `<li>${tag}</li>`).join('');

  return `
    <article class="card-works">
      <!-- Responsive images: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images -->
      <picture>
        ${pictureSources}
        <img
          class="${project.pictures.image.class}"
          src="${project.pictures.image.source}"
          alt="${project.pictures.image.alt}"
        />
      </picture>
      <div class="card-details">
        <header>
          <h3 class="project-title">${project.title}</h3>
          <div class="project-highlights">${highlights}</div>
        </header>
        <p class="project-summary">${project.summary}</p>
        <ul class="project-tags">${tags}</ul>
        <a href="#" class="btn">See Project</a>
      </div>
    </article>

  `;
};

const projectsContainer = document.getElementById('portfolio').parentElement;// the portfolio heading's parent

projects.forEach((project) => {
  // add the project
  projectsContainer.innerHTML += projectTemplate(project);
});
