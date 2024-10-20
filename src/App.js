// App.js
import './App.css';
import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import NewsContainer from './components/NewsContainer';
import LoadingBar from 'react-top-loading-bar'
import SearchResults from './components/SearchResults';
import Footer from './components/Footer'
import Privacy from './components/Privacy'
import About from './components/About';


const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

function App() {

  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <NavBar />

        <Routes>
          <Route path="/" element={<Navigate replace to="/general" />} />

          {categories.map((category) => (
            <Route
              key={category}
              path={`/${category}`}
              element={<NewsContainer pageSize={15} country="us" category={category} setProgress={setProgress} />}
            />
          ))}

          {/* New Search Route */}
          <Route
            path="/search/:query"
            element={<SearchResults setProgress={setProgress} />
            }
          />

          <Route path="/privacy" element={<Privacy />} />

          <Route path="/about" element={<About />} />

          <Route path="*" element={

            <section className="bg-white dark:bg-gray-900 min-h-screen">
              <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                  <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                  <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
                  <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                  <a href="/" className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>
                </div>
              </div>
            </section>

          } />

        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
