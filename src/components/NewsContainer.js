import React from 'react';
import { NewsItem } from './NewsItem';
import { capitalize } from '@mui/material';
import InfiniteScroll from "react-infinite-scroll-component";

class NewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      totalArticles: 0,
      isLoading: true,
      error: null,
      page: 1,
      pageSize: props.pageSize,
      startNumber: 1,
      endNumber: Math.min(this.pageSize, this.totalArticles),
      category: props.category,
      country: props.country,
    };
    
    this.apiKey = process.env.REACT_APP_NEWS_API_KEY;
    // console.log(this.apiKey);
    
    this.setProgress = props.setProgress;
  }

  async componentDidMount() {
    await this.fetchNews();
  }

  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.setState({
        category: this.props.category,
        page: 1,
        isLoading: true
      }, this.fetchNews);
    }
  }

  fetchNews = async () => {
    if (!this.apiKey) {
      console.error("API Key is missing");
      this.setState({ error: "API Key missing", isLoading: false });
      return;
    }

    // console.log(this.apiKey);
    this.setProgress(10);

    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=${this.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
      let response = await fetch(url);
      this.setProgress(30);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data = await response.json();
      this.setProgress(50);
      this.setState(prevState => ({
        articles: data.articles,
        isLoading: false,
        totalArticles: data.totalResults,
        startNumber: (prevState.page - 1) * prevState.pageSize + 1,
        endNumber: Math.min(prevState.page * prevState.pageSize, data.totalResults)
      }));
      this.setProgress(80);

    } catch (error) {
      console.error("Fetching news failed:", error);
      this.setState({ error: error.message || "Failed to fetch news", isLoading: false });
    }
    this.setProgress(100);
  }

  fetchMoreData = async () => {
    if (this.state.articles.length >= this.state.totalArticles) {
      return;
    }

    try {
      const nextPage = this.state.page + 1;
      let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=${this.apiKey}&page=${nextPage}&pageSize=${this.state.pageSize}`;

      let response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let data = await response.json();

      this.setState(prevState => ({
        articles: prevState.articles.concat(data.articles),
        page: nextPage,
        totalArticles: data.totalResults,
        endNumber: Math.min(nextPage * this.state.pageSize, data.totalResults)
      }));
    } catch (error) {
      console.error("Fetching more news failed:", error);
      this.setState({ error: error.message || "Failed to fetch more news" });
    }
  };

  capitalize(a) {
    if (!a) return '';
    return a.charAt(0).toUpperCase() + a.slice(1);
  }

  render() {

    document.title = `Need For News | ${capitalize(this.state.category)}`;
    const { articles, isLoading, error, startNumber, endNumber, totalArticles } = this.state;

    if (isLoading) {
      return (
        <div role="status" className="flex items-center justify-center w-screen overflow-hidden h-screen bg-gray-900">
          <svg aria-hidden="true" className="w-16 h-16 text-gray-600 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      );
    }

    if (error) return <div>Error: {error}</div>;

    return (
      <div className='mb-8 bg-gray-900'>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length != this.state.totalArticles}
          loader={<div role="status" className="flex items-center justify-center w-screen overflow-hidden h-screen bg-gray-900">
            <svg aria-hidden="true" className="w-16 h-16 text-gray-600 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>}
        >
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 py-6 px-8 grid-cols-1'>
            {articles.map((article) => (
              article.title !== "[Removed]" && <NewsItem
                key={article.url || article.publishedAt}
                title={article.title || 'No title'}
                description={article.description || 'No description'}
                image={article.urlToImage || 'https://via.placeholder.com/150'}
                link={article.url || '#'}
                author={article.author}
                publishedAt={article.publishedAt}
                source={article.source.name}
              />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default NewsContainer;