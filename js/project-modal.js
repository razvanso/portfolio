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
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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

const projectsContainer = document.getElementById('portfolio').parentElement;// the portfolio heading's parent

projects.forEach((element) => {
  const pictureSources = element.pictures.sources.map((pictureSource) => `<source media="${pictureSource.media}" srcset="${pictureSource.srcset}" />`).join('');

  const highlights = element.highlights.map((highlight) => `<div class="project-client">${highlight}</div>`).join('');

  const tags = element.tags.map((tag) => `<li>${tag}</li>`).join('');

  // add the project
  projectsContainer.innerHTML += `
    <article class="card-works">
      <!-- Responsive images: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images -->
      <picture>
        ${pictureSources}
        <img
          class="${element.pictures.image.class}"
          src="${element.pictures.image.source}"
          alt="${element.pictures.image.alt}"
        />
      </picture>
      <div class="card-details">
        <header>
          <h3 class="project-title">${element.title}</h3>
          <div class="project-highlights">${highlights}</div>
        </header>
        <p class="project-summary">${element.summary}</p>
        <ul class="project-tags">${tags}</ul>
        <a href="#" class="btn">See Project</a>
      </div>
    </article>

  `;
});
