import React from 'react';

const Privacy = () => {
    document.title = "Need For News | Privacy" ; 
    return (
        <div className="bg-gray-900 text-gray-300 min-h-screen p-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-400">1. Information We Collect</h2>
                    <p className="mb-4">
                        We collect information you provide directly to us, such as when you create an account,
                        subscribe to our newsletter, or contact us for support.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. How We Use Your Information</h2>
                    <p className="mb-4">
                        We use the information we collect to provide, maintain, and improve our services,
                        to develop new ones, and to protect our company and our users.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-400">3. Sharing of Information</h2>
                    <p className="mb-4">
                        We may share information about you in the following ways:
                    </p>
                    <ul className="list-disc list-inside mb-4 ml-4">
                        <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf;</li>
                        <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process;</li>
                        <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of our company or others.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. Data Security</h2>
                    <p className="mb-4">
                        We take reasonable measures to help protect information about you from loss, theft, misuse,
                        unauthorized access, disclosure, alteration, and destruction.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-400">5. Changes to this Policy</h2>
                    <p className="mb-4">
                        We may change this privacy policy from time to time. If we make changes,
                        we will notify you by revising the date at the top of the policy.
                    </p>
                </section>

                <footer className="text-sm text-gray-500 mt-12">
                    <p>Last updated: {new Date().toDateString()}</p>
                </footer>
            </div>
        </div>
    );
};

export default Privacy;