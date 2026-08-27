'use client';

import { useRef } from 'react';

const slides = [
  {
    title: 'One clear matchday.',
    body: 'Live, finished and upcoming fixtures — organized around what matters to you.',
    image: '/assets/home-en.png',
    alt: 'Ninety Home showing matches grouped by competition',
    tone: 'lime',
  },
  {
    title: 'The whole story.',
    body: 'Open any match for scorers, key moments, lineups, stats and the live table.',
    image: '/assets/match-story-en.png',
    alt: 'Ninety match detail showing the score and match events',
    tone: 'blue',
  },
  {
    title: 'Every player in place.',
    body: 'Confirmed formations, ratings, substitutes and player journeys on one pitch.',
    image: '/assets/lineups-en.png',
    alt: 'Ninety lineup shown on a football pitch',
    tone: 'green',
  },
  {
    title: 'Numbers with meaning.',
    body: 'Match stats, standings, qualification zones, scorers and assist leaders.',
    image: '/assets/stats-en.png',
    alt: 'Ninety match statistics comparison',
    tone: 'amber',
  },
  {
    title: 'Everything you follow.',
    body: 'Clubs, competitions and individual matches stay together in one focused place.',
    image: '/assets/following-en.png',
    alt: 'Ninety Following screen with a live match',
    tone: 'violet',
  },
];

export default function TourRail() {
  const railRef = useRef<HTMLDivElement>(null);

  const move = (direction: number) => {
    railRef.current?.scrollBy({
      left: direction * Math.min(420, window.innerWidth * 0.82),
      behavior: 'smooth',
    });
  };

  return (
    <div className="tour-shell">
      <div className="tour-rail" ref={railRef} aria-label="Ninety app previews">
        {slides.map((slide) => (
          <article className={`tour-card tone-${slide.tone}`} key={slide.title}>
            <div className="tour-copy">
              <p className="tour-kicker">Ninety for iPhone</p>
              <h3>{slide.title}</h3>
              <p>{slide.body}</p>
            </div>
            <div className="tour-phone">
              <img src={slide.image} alt={slide.alt} loading="lazy" />
            </div>
          </article>
        ))}
      </div>
      <button
        className="tour-arrow tour-prev"
        type="button"
        onClick={() => move(-1)}
        aria-label="Show previous preview"
      >
        <span aria-hidden="true">←</span>
      </button>
      <button
        className="tour-arrow tour-next"
        type="button"
        onClick={() => move(1)}
        aria-label="Show next preview"
      >
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
