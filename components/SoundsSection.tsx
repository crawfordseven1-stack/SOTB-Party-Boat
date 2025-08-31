import React from 'react';
import { SoundsSectionData, Artist } from '../types';

interface SoundsSectionProps {
  data: SoundsSectionData;
}

const ArtistCard: React.FC<{ artist: Artist }> = ({ artist }) => (
  <div className="bg-gray-800 bg-opacity-50 border border-orange-500/30 rounded-lg p-6 transform hover:scale-105 hover:border-orange-500 transition-all duration-300 shadow-lg h-full">
    <div className="text-center">
      <h3 className="text-2xl font-bold text-orange-400">{artist.floor}</h3>
      <p className="text-lg font-semibold text-white mb-4">{artist.genre}</p>
      <div className="border-t border-gray-600 my-4"></div>
      <div className="space-y-4">
        {artist.performers.map((performer, index) => (
          <div key={index}>
            {performer.imageUrl && (
              <img 
                src={performer.imageUrl} 
                alt={performer.name}
                className="w-28 h-28 rounded-full mx-auto mb-3 object-cover border-2 border-orange-500/50 shadow-md"
              />
            )}
            <p className="font-bold text-xl text-white">{performer.name}</p>
            <p className="text-sm text-gray-400">{performer.info}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PhoneIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const SoundsSection: React.FC<SoundsSectionProps> = ({ data }) => {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-orange-400 mb-4">{data.title}</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">{data.description}</p>
        
        {data.liveBand && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-orange-300 mb-8 tracking-wider uppercase">Live Performance By</h3>
            <div className="bg-gray-800 bg-opacity-50 border border-orange-500/30 rounded-lg p-6 md:p-8 flex flex-col items-center gap-6 max-w-lg mx-auto shadow-lg">
              <img 
                src={data.liveBand.imageUrl} 
                alt={data.liveBand.name}
                className="w-full h-auto rounded-lg object-cover shadow-md"
              />
              <div className="text-center mt-4">
                <h4 className="font-cinzel text-4xl font-bold text-white">{data.liveBand.name}</h4>
                <p className="text-lg text-gray-400 mt-2">{data.liveBand.info}</p>
              </div>
            </div>
            <div className="border-t border-gray-700 my-12 max-w-sm mx-auto"></div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.artists.map((artist, index) => (
            <ArtistCard key={index} artist={artist} />
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-gray-700/50">
           <div className="max-w-2xl mx-auto">
                <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-orange-300 mb-8 tracking-wider uppercase">
                  VIP TABLES + BOTTLE SERVICE
                </h3>
                <div className="bg-gray-800 bg-opacity-50 border border-orange-500/30 rounded-lg p-8 shadow-lg">
                  <p className="text-gray-300 mb-8 text-lg">
                    Elevate your experience. Reserve a private table for you and your guests.
                  </p>
                  <a 
                    href="tel:3106297904" 
                    className="inline-flex items-center bg-orange-500 text-black font-bold text-lg py-3 px-8 rounded-full uppercase tracking-wider hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/30">
                    <PhoneIcon />
                    Call to Reserve
                  </a>
                </div>
            </div>
        </div>

        <div className="mt-16 pt-12 border-t border-gray-700/50">
           <div className="max-w-2xl mx-auto">
                <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-orange-300 mb-8 tracking-wider uppercase">
                  PURCHASING GROUP TICKETS
                </h3>
                <div className="bg-gray-800 bg-opacity-50 border border-orange-500/30 rounded-lg p-8 shadow-lg text-left">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To avoid confusion, we encourage every group to board at the same time. Mary buys 6 tickets. Mary meets her 5 friends @ 8pm at entry so everyone boards at same time.
                  </p>
                </div>
            </div>
        </div>

        <div className="mt-16 pt-12 border-t border-gray-700/50">
           <div className="max-w-2xl mx-auto">
                <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-orange-300 mb-8 tracking-wider uppercase">
                  BOARDING + PARKING INFO
                </h3>
                <div className="text-left bg-gray-800 bg-opacity-50 border border-orange-500/30 rounded-lg p-8 shadow-lg space-y-6">
                    <div>
                        <h4 className="font-bold text-xl text-orange-400 mb-2">Boarding Details</h4>
                        <p className="text-gray-300">Boarding: 8:00 PM - 9:00 PM. Gates close at 9:00 PM sharp.</p>
                        <p className="text-gray-400 text-sm">Early arrival is strongly suggested.</p>
                    </div>
                     <div className="border-t border-gray-700/50"></div>
                    <div>
                        <h4 className="font-bold text-xl text-orange-400 mb-2">Parking Information</h4>
                        <p className="text-gray-300">Paid street parking and paid parking lots are available nearby.</p>
                        <p className="text-gray-300 mt-2 font-semibold">1800 N. Harbor Drive<br/>San Diego, CA 92101</p>
                    </div>
                    <div className="mt-4 aspect-w-16 aspect-h-9">
                        <iframe
                            src="https://maps.google.com/maps?q=1800%20N.%20Harbor%20Drive%20San%20Diego,%20CA%2092101&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Event Location Map"
                            className="rounded-lg border-2 border-orange-500/30 shadow-lg w-full h-full min-h-[300px]"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SoundsSection;