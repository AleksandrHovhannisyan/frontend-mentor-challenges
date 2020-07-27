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
    challengeURL:
      'https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt',
    solutionURL:
      'https://frontend-mentor-challenges.aleksandrhovhannisyan.now.sh/static-job-listings/',
    thumbnail: './static-job-listings/assets/design/desktop-preview.jpg',
  },
  {
    title: 'Rock, Paper, Scissors game',
    difficulty: difficulties.ADVANCED,
    description:
      "This challenge will test your HTML, CSS and JavaScript skills. There's even a Rock, Paper, Scissors, Lizard, Spock version if you really want to challenge yourself.",
    languages: ['html', 'css', 'js'],
    challengeURL:
      'https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH',
    solutionURL:
      'https://frontend-mentor-challenges.aleksandrhovhannisyan.now.sh/rock-paper-scissors/',
    thumbnail: './rock-paper-scissors/assets/design/desktop-preview.jpg',
  },
];

document.getElementById('solutions').innerHTML = projects
  .map((project) => {
    const difficultyClass = project.difficulty.label.toLowerCase();

    return `<li class="card solution">
<header class="solution-header">
    <a href="${
      project.solutionURL
    }" class="solution-link" aria-hidden="true" tabindex="-1">
        <img src="${project.thumbnail}" alt="" class="solution-thumbnail" />
    </a>
</header>
<div class="solution-body">
    <ul class="languages-used">
        ${project.languages
          .map(
            (language) =>
              `<li class="lang ${language}">${language.toUpperCase()}</li>`
          )
          .join('')}
    </ul>
    <div class="solution-about">
        <h3 class="solution-title"><a href="${
          project.solutionURL
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
        <div class="button-group">
          <a href="${
            project.challengeURL
          }" class="button" aria-label="View challenge">CHALLENGE</a>
          <a href="${
            project.solutionURL
          }" class="button" aria-label="View solution">SOLUTION</a>
        </div>
    </footer>
</div>
</li>`;
  })
  .join('');
