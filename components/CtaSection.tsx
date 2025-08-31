
import React, { useState } from 'react';
import { CtaSectionData } from '../types';

interface CtaSectionProps {
  data: CtaSectionData;
}

const CtaSection: React.FC<CtaSectionProps> = ({ data }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
      }
      setIsSubmitted(true);
      setError('');
    } catch (err) {
      console.error('Failed to save to localStorage', err);
      setError('Something went wrong. Please try again.');
    }
  };


  return (
    <section className="py-20 px-6 text-center bg-gradient-to-t from-black to-gray-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-orange-400 mb-4">{data.title}</h2>
        <p className="text-gray-300 mb-8">{data.description}</p>
        <a 
          href="https://www.saboronthebay.com/sabor-on-the-bay-events/sd-dia-de-los-muertos-cruise/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 text-black font-bold text-lg py-4 px-10 rounded-full uppercase tracking-wider hover:bg-orange-400 transform hover:scale-110 transition-all duration-300 shadow-lg shadow-orange-500/30">
          Secure Your Spot
        </a>

        <div className="mt-16 pt-12 border-t border-gray-700/50">
          <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-orange-300 mb-4 tracking-wider">
            STAY UPDATED
          </h3>
          <p className="text-gray-400 mb-8">
            Join our newsletter for exclusive updates, announcements, and special offers.
          </p>
          
          {isSubmitted ? (
            <div className="text-green-400 text-xl font-semibold">
              <p>🎉 Thank you for subscribing! 🎉</p>
              <p className="text-sm text-gray-400 mt-2">You're on the list for future events.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" noValidate>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                aria-label="Email address for newsletter"
                required
                className="flex-grow bg-gray-800 text-white placeholder-gray-500 px-6 py-4 rounded-full border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 w-full"
              />
              <button
                type="submit"
                className="bg-orange-600 text-white font-bold py-4 px-8 rounded-full uppercase tracking-wider hover:bg-orange-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/30 shrink-0">
                Subscribe
              </button>
            </form>
          )}
           {error && <p className="text-red-400 mt-3 text-sm">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
