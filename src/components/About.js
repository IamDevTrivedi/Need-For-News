import React from 'react';

const About = () => {
    document.title = "Need For News | About" 
    return (
        <div className="bg-gray-900 text-gray-300 min-h-screen p-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-white">About Need For News</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-400">Our Mission</h2>
                    <p className="mb-4">
                        At Need For News, we believe in the power of information to shape our world. Our mission is to provide accurate, timely, and insightful news to empower our readers to make informed decisions and understand the complex world around them.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-400">Who We Are</h2>
                    <p className="mb-4">
                        We are a team of passionate journalists, researchers, and technology experts committed to delivering high-quality news content. Our diverse backgrounds and expertise allow us to cover a wide range of topics with depth and nuance.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-400">Our Values</h2>
                    <ul className="list-disc list-inside mb-4 ml-4">
                        <li>Accuracy: We strive for factual correctness in all our reporting.</li>
                        <li>Integrity: We maintain high ethical standards in our journalistic practices.</li>
                        <li>Transparency: We are open about our sources and methods.</li>
                        <li>Independence: We report without fear or favor, free from external influences.</li>
                        <li>Innovation: We embrace new technologies to enhance our storytelling and reach.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-400">Our Approach</h2>
                    <p className="mb-4">
                        We combine traditional journalistic practices with cutting-edge technology to deliver news that matters. Our AI-assisted research tools help us uncover stories and patterns that might otherwise go unnoticed, while our human journalists provide the context, analysis, and ethical oversight essential to responsible reporting.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-400">Join Us</h2>
                    <p className="mb-4">
                        We invite you to be part of our community. Whether you're a casual reader or a news enthusiast, Need For News is your trusted source for staying informed in today's fast-paced world.
                    </p>
                </section>

                <footer className="text-sm text-gray-500 mt-12">
                    <p>Need For News - Illuminating the world, one story at a time.</p>
                </footer>
            </div>
        </div>
    );
};

export default About;