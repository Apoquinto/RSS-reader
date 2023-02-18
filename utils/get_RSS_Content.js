/**
 * Fetches the content of an RSS feed from a specified URL and parses it into an XML document.
 * @param {string} RSS_URL - The URL of the RSS feed.
 * @returns {Promise<Document>} - A promise that resolves to an XML document representing the contents of the RSS feed.
 */
const get_RSS_Content = async (RSS_URL) => {
  const response = await fetch(RSS_URL);
  const RSS_content = await response.text();
  return new window.DOMParser().parseFromString(RSS_content, "text/xml");
}

export default get_RSS_Content;