import createArticleItem from "./components/ArticleItem.js";

import getRSSContent from "./utils/getRSSContent.js";

const RSS_URL = 'https://tools.cdc.gov/podcasts/createrss.asp?t=r&c=151';

getRSSContent(RSS_URL).then((xmlDoc) => {
  const items = xmlDoc.querySelectorAll('item');
  const articles = document.getElementById('articles');
  items.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.appendChild(createArticleItem(item))
    articles.appendChild(listItem);
  })
})