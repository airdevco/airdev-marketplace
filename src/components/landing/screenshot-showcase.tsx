export const ScreenshotShowcase = () => {
  const screenshots = [
    "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1768942292841x753883318458439700/docseek.webp",
    "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769431327914x326072329645070460/craftly2.webp",
    "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769446581327x991888232717732400/kidsbook2.webp",
    "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769444704254x747992525882827000/learnmate.webp",
    "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769446640637x420605172794157100/ch.webp",
    "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769645813496x468485436757218600/hire2.webp",
    "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769645304714x406176510810474200/listing1.webp",
    "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769647224654x585966976925444100/events2.webp",
  ];

  return (
    <div className="w-full">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="relative rounded overflow-hidden border border-gray-100 h-[140px] sm:h-[160px] md:h-[190px]"
            >
              <img
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
