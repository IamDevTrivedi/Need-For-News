
import React from "react";

export class NewsItem extends React.Component {

    render() {
        const { image, title, description, link, author, publishedAt, source } = this.props;

        return (
            <div>
                <div className="bg-slate-950 border border-gray-600 rounded-lg shadow">
                    <div>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <img
                                className="object-fill rounded-t-lg"
                                src={image}
                                alt={title}
                            />
                        </a>
                    </div>
                    <div className="p-5">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">
                                {title}
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-400 text-sm">
                            {description}
                        </p>
                        <div className="mb-3 font-normal text-gray-400 text-sm flex items-center justify-between">
                            <span className="text-sm">{`By ${author || 'Unknown'} At ${new Date(publishedAt).toDateString() + " " + new Date(publishedAt).toLocaleTimeString()}`}</span>
                            <span className="text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-slate-800 text-gray-300">{source}</span>
                        </div>
                        <div className="my-3">

                        </div>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-slate-800 rounded-lg hover:bg-slate-900 focus:outline-none"
                        >
                            Read more
                            <svg
                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}