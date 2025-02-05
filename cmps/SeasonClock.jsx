
const { useState, useEffect } = React
const seasonImages = {
  winter: "assets/img/seasons/winter.png",
  spring: "assets/img/seasons/spring.png",
  summer: "assets/img/seasons/summer.png",
  autumn: "assets/img/seasons/autumn.png",
};

const getSeason = (month) => {
  if ([11, 0, 1].includes(month)) return "winter";
  if ([2, 3, 4].includes(month)) return "spring";
  if ([5, 6, 7].includes(month)) return "summer";
  return "autumn";
};

export function SeasonClock() {
  const [time, setTime] = useState(new Date());
  const [isDark, setIsDark] = useState(false);

  const getBackgroundColor = (season, isDark) => {
    switch (season) {
        case 'winter': return isDark ? '#d5e8e9' : '#6fd9df';
        case 'spring': return isDark ? '#7eb381' : '#486649';
        case 'summer': return isDark ? '#ebe6a5' : '#e7df64';
        case 'autumn': return isDark ? '#93a9d3' : '#57637a';
        default:
            return isDark ? '#d5e8e9' : '#6fd9df';
      }
};
const getTextColors = (isDark) => {
    return isDark ? '#000000' :'#ffffff';
};

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const month = time.toLocaleString("default", { month: "long" });
  const day = time.toLocaleString("default", { weekday: "long" });
  const season = getSeason(time.getMonth());

  return (
    <section
      className="SeasonClockSection"
      onClick={() => setIsDark(isDark =>!isDark)}
      style={{ backgroundImage: `url(${seasonImages[season]})`, backgroundSize: 'cover', backgroundPosition: 'center'
    , backgroundColor: getBackgroundColor(season, isDark), color: getTextColors(isDark)}}
    >
        <h1 className="text-2xl font-bold">{season.toUpperCase()}</h1>
        <h2 className="text-xl">{day}, {month}</h2>
        <h3 className="text-lg mt-2">{time.toLocaleTimeString()}</h3>
    </section>
  );
}