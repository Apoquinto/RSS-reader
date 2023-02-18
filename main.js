import getRSSContent from "./utils/getRSSContent.js";

const RSS_URL = 'https://tools.cdc.gov/podcasts/createrss.asp?t=r&c=151';

getRSSContent(RSS_URL).then((xmlDoc) => {
  const items = xmlDoc.querySelectorAll('item');
  const articles = document.getElementById('articles');
  items.forEach((item) => {
    const newItem = document.createElement('li');
    newItem.innerHTML = item.innerHTML;
    articles.appendChild(newItem);
  })
})