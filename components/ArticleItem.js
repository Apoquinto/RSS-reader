const createArticleItem = ( articleData ) => {
  const item = document.createElement('a');
  const title = document.createElement('h3');
  title.textContent = articleData.querySelector('title').textContent;
  const pubDate = document.createElement('time');
  pubDate.textContent = articleData.querySelector('pubDate').textContent;
  const articleURL = articleData.querySelector('link').textContent;
  item.addEventListener('click', (event) => {
    const articlePreview = document.getElementById('articlePreview');
    articlePreview.src = articleURL;
  })
  item.append(title, pubDate);
  return item;
}

export default createArticleItem;