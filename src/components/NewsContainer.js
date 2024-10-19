import React from 'react';
import { NewsItem } from './NewsItem';

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
      endNumber: Math.min(this.pageSize, this.totalArticles)
    };
    this.apiKey = "60ed5e54f1ea4ea6a1c27a7778b26513";
  }

  async componentDidMount() {
    await this.fetchNews();
  }

  fetchNews = async () => {
    if (!this.apiKey) {
      console.error("API Key is missing");
      this.setState({ error: "API Key missing", isLoading: false });
      return;
    }

    try {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data = await response.json();
      this.setState(prevState => ({
        articles: data.articles,
        isLoading: false,
        totalArticles: data.totalResults,
        startNumber: (prevState.page - 1) * prevState.pageSize + 1,
        endNumber: Math.min(prevState.page * prevState.pageSize, data.totalResults)
      }));
    } catch (error) {
      console.error("Fetching news failed:", error);
      this.setState({ error: error.message || "Failed to fetch news", isLoading: false });
    }
  }

  handleNextClick = async () => {
    await this.setState(prevState => ({
      page: prevState.page + 1
    }));
    await this.fetchNews();
  };

  handlePrevClick = async () => {
    if (this.state.page > 1) {
      await this.setState(prevState => ({
        page: prevState.page - 1
      }));
      await this.fetchNews();
    }
  };

  render() {
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
      <div className='my-4'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 py-6 px-8 grid-cols-1'>
          {articles.map((article) => (
            <NewsItem
              key={article.url || article.publishedAt}
              title={article.title || 'No title'}
              description={article.description || 'No description'}
              image={article.urlToImage || 'https://via.placeholder.com/150'}
              link={article.url || '#'}
            />
          ))}
        </div>

        <div className="md:hidden flex flex-col items-center">
          <div className="inline-flex mt-2 xs:mt-0">
            <button onClick={this.handlePrevClick} disabled={this.state.page === 1} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-300 bg-slate-900 rounded-s hover:bg-slate-950 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed">
              <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
              </svg>
              Prev
            </button>
            <button onClick={this.handleNextClick} disabled={endNumber >= totalArticles} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-400 bg-slate-900 border-0 border-s border-gray-700 rounded-e hover:bg-slate-950 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed">
              Next
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center mt-4">
          <span className="text-sm text-gray-400">
            Showing <span className="font-bold text-black text-lg">{startNumber}</span> to <span className="font-semibold text-black text-lg">{endNumber}</span> of <span className="font-semibold text-black text-lg">{totalArticles}</span> Entries
          </span>
          <div className="inline-flex mt-2 xs:mt-0">
            <button onClick={this.handlePrevClick} disabled={this.state.page === 1} className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-400 bg-slate-900 rounded-s hover:bg-slate-950 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed">
              <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
              </svg>
              Prev
            </button>
            <button onClick={this.handleNextClick} disabled={endNumber >= totalArticles} className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-400 bg-slate-900 border-0 border-s border-gray-700 rounded-e hover:bg-slate-950 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed">
              Next
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsContainer;