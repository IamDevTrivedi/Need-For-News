import React from 'react';
import { NewsItem } from './NewsItem'; 


function NewsContainer() {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 py-6 px-8 grid-cols-1'>
      <NewsItem/>
      <NewsItem/>
      <NewsItem/>
      <NewsItem/>
      <NewsItem/>
      <NewsItem/>
    </div>
  );
}

export default NewsContainer;
