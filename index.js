const difficulties = {
  NEWBIE: { label: 'NEWBIE', level: 1 },
  JUNIOR: { label: 'JUNIOR', level: 2 },
  INTERMEDIATE: { label: 'INTERMEDIATE', level: 3 },
  ADVANCED: { label: 'ADVANCED', level: 4 },
  GURU: { label: 'GURU', level: 5 },
};

const projects = [
  {
    title: 'Job listings with filtering',
    difficulty: difficulties.INTERMEDIATE,
    description:
      "In this challenge, you'll be using JavaScript to filter out jobs based on the categories selected.",
    languages: ['html', 'css', 'js'],
    url:
      'https://filtered-job-listings-frontendmentor.aleksandrhovhannisyan.now.sh/',
    thumbnail: './static-job-listings/assets/design/desktop-preview.jpg',
  },
  {
    title: 'Rock, Paper, Scissors game',
    difficulty: difficulties.ADVANCED,
    description:
      "This challenge will test your HTML, CSS and JavaScript skills. There's even a Rock, Paper, Scissors, Lizard, Spock version if you really want to challenge yourself.",
    languages: ['html', 'css', 'js'],
    url: 'https://rock-paper-scissors.aleksandrhovhannisyan.now.sh/',
    thumbnail: './rock-paper-scissors/assets/design/desktop-preview.jpg',
  },
];

document.getElementById('solutions').innerHTML = projects
  .map((project) => {
    const difficultyClass = project.difficulty.label.toLowerCase();

    return `<li class="card solution">
<header class="solution-header">
    <a href="${project.url}" class="solution-link" tabindex="-1">
        <img src="${project.thumbnail}" alt="Thumbnail for the ${
      project.title
    } challenge" class="solution-thumbnail" />
    </a>
</header>
<div class="solution-body">
    <div class="languages-used">
        ${project.languages
          .map(
            (language) =>
              `<div class="lang ${language}">${language.toUpperCase()}</div>`
          )
          .join('')}
    </div>
    <div class="solution-about">
        <h3 class="solution-title"><a href="${
          project.url
        }" class="solution-link" tabindex="-1">${project.title}</a></h3>
        <p class="solution-description">${project.description}</p>
    </div>
    <footer class="solution-actions">
        <div class="difficulty">
            <ul class="difficulty-rating ${difficultyClass}">
              ${[null, null, null, null, null]
                .map(
                  (li, index) =>
                    `<li${
                      index < project.difficulty.level
                        ? ' class="highlighted"'
                        : ''
                    }></li>`
                )
                .join('')}
            </ul>
            <p class="difficulty-text ${difficultyClass}">${
      project.difficulty.label
    }</p>
        </div>
        <a href="${project.url}" class="button view-solution">VIEW SOLUTION</a>
    </footer>
</div>
</li>`;
  })
  .join('');
