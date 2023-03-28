import '../component/club-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const clubListElement = document.querySelector('club-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchClub(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };
  // const renderResult = (results) => {
  //   clubListElement.innerHTML = '';

  //   results.forEach((club) => {
  //     const { name, fanArt, description } = club;
  //     const clubElement = document.createElement('div');
  //     clubElement.setAttribute('class', 'club');

  //     clubElement.innerHTML = `
  //       <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
  //       <div class="club-info">
  //         <h2>${name}</h2>
  //         <p>${description}</p>
  //       </div>
  //     `;

  //     clubListElement.appendChild(clubElement);
  //   });
  // };

  const renderResult = (results) => {
    clubListElement.clubs = results;
  };

  const fallbackResult = (message) => {
    clubListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
