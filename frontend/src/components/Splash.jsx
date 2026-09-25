import React, { useMemo } from 'react';

export default function Splash({ onEnter }) {
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  }, []);

  return (
    <div id="splash">
      <div className="greeting">{greeting}</div>
      <h1>Welcome to MU League</h1>
      <p className="sub">
        Your campus. Your teams. Your football — live scores, standings and top scorers from every faculty pitch.
      </p>
      <button className="enter-btn" onClick={onEnter}>
        Enter the league
      </button>
    </div>
  );
}