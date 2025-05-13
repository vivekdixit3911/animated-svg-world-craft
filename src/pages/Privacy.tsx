import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Nucleas IT</title>
        <meta name="description" content="Read Nucleas IT's privacy policy to learn how we protect your data and privacy." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-nucleas-dark text-white">
        <Navbar />
        <main className="flex-grow">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
              <p className="text-lg text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="prose prose-lg max-w-none prose-invert">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                <p className="text-gray-300 mb-4">
                  Welcome to Nucleas IT Solutions. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                </p>
                <p className="text-gray-300 mb-4">
                  This policy applies to all services provided by Nucleas IT Solutions, including but not limited to web development, software development, IT consulting, and digital transformation services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
                <p className="text-gray-300 mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li>Identity Data includes first name, last name, username, company name, job title, or similar identifier</li>
                  <li>Contact Data includes email address, telephone numbers, business address, and social media handles</li>
                  <li>Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, device information, and unique device identifiers</li>
                  <li>Usage Data includes information about how you use our website, services, and products, including access times, pages viewed, and interaction patterns</li>
                  <li>Project Data includes information about your business requirements, technical specifications, and project details</li>
                  <li>Communication Data includes records of our interactions with you, including emails, calls, and support tickets</li>
                  <li>Marketing Data includes your preferences in receiving marketing from us and your communication preferences</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li>To provide and maintain our services and products</li>
                  <li>To process and manage your projects and requirements</li>
                  <li>To notify you about changes to our services</li>
                  <li>To provide customer support and technical assistance</li>
                  <li>To gather analysis or valuable information so that we can improve our services</li>
                  <li>To monitor the usage of our services</li>
                  <li>To detect, prevent and address technical issues</li>
                  <li>To provide you with news, special offers and general information about our services</li>
                  <li>To manage our relationship with you</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
                <p className="text-gray-300 mb-4">
                  We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. Our security measures include:
                </p>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and penetration testing</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Secure data centers and cloud infrastructure</li>
                  <li>Regular backups and disaster recovery procedures</li>
                  <li>Employee security training and awareness programs</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-4">5. Data Retention</h2>
                <p className="text-gray-300 mb-4">
                  We will retain your personal data only for as long as is necessary for the purposes set out in this privacy policy. We will retain and use your data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
                </p>
                <p className="text-gray-300 mb-4">
                  The retention period may vary depending on the type of data and the purpose for which it was collected. Generally, we retain:
                </p>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li>Project-related data for 7 years after project completion</li>
                  <li>Customer relationship data for 5 years after the last interaction</li>
                  <li>Technical logs for 1 year</li>
                  <li>Marketing data until you opt out or request deletion</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-4">6. Your Legal Rights</h2>
                <p className="text-gray-300 mb-4">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Request transfer of your personal data</li>
                  <li>Right to withdraw consent</li>
                  <li>Right to data portability</li>
                  <li>Right to lodge a complaint with a supervisory authority</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-4">7. Third-Party Services</h2>
                <p className="text-gray-300 mb-4">
                  We may use third-party services to help us provide our services. These services may collect, process, and store your data. We ensure that all third-party services we use comply with applicable data protection laws and have appropriate security measures in place.
                </p>
                <p className="text-gray-300 mb-4">Our third-party services include:</p>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li>Cloud service providers</li>
                  <li>Analytics tools</li>
                  <li>Customer relationship management systems</li>
                  <li>Project management tools</li>
                  <li>Communication platforms</li>
                  <li>Payment processors</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-4">8. International Data Transfers</h2>
                <p className="text-gray-300 mb-4">
                  We may transfer your personal data to countries outside your country of residence. When we do so, we ensure that appropriate safeguards are in place to protect your data, including:
                </p>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li>Standard contractual clauses</li>
                  <li>Binding corporate rules</li>
                  <li>Data processing agreements</li>
                  <li>Compliance with international data protection standards</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-4">9. Children's Privacy</h2>
                <p className="text-gray-300 mb-4">
                  Our services are not intended for use by children under the age of 16. We do not knowingly collect personal data from children under 16. If you are a parent or guardian and believe that your child has provided us with personal data, please contact us.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to This Policy</h2>
                <p className="text-gray-300 mb-4">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date. You are advised to review this privacy policy periodically for any changes.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  For collaborations, queries, or just to say hi! Feel free to reach out to us at:
                </p>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <p className="text-gray-300 mb-2">
                    <span className="font-semibold text-white">Phone:</span> +91 9129999362, +91 9044632203
                  </p>
                  <p className="text-gray-300 mb-2">
                    <span className="font-semibold text-white">Email:</span> nucleasitsolutions@gmail.com
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Address:</span> Noida Sector 62, India
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Privacy; 