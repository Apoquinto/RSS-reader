const createArticleItem = ( articleData ) => {
  const item = document.createElement('article');
  const title = document.createElement('h3');
  title.textContent = articleData.querySelector('title').textContent;
  const pubDate = document.createElement('time');
  pubDate.textContent = articleData.querySelector('pubDate').textContent;
  
  item.append(title, pubDate);
  return item;
}

export default createArticleItem;