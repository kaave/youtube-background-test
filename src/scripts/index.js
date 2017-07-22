import 'babel-polyfill';  // アプリ内で1度だけ読み込む エントリーポイントのてっぺん推奨
import YouTubePlayer from 'youtube-player';

const videoIDs = [
  'Cnj64DsO8T8',
  '6MK2TKFFtQA',
  'BAXQ6HaRG8s',
  'fTyewgmEoGU',
  'kzjMI00A1f8',
  'vfJAaFaxqiE',
  '3NZGbD236fw',
];

window.addEventListener('DOMContentLoaded', () => {
  videoIDs.forEach((videoId, i) => {
    const player = YouTubePlayer(`video-${i + 1}`, {
      videoId,
      playerVars: {
        loop: 1,
        controls: 0,
        autoplay: 1,
        showinfo: 0
      },
      suggestedQuality: 'small'
    });
    player.mute();
  });
});

let lastCurrentSection = 0;
document.body.addEventListener('mousewheel', ({ currentTarget }) => {
  const rect = currentTarget.getBoundingClientRect();
  const top = Math.abs(rect.top);
  const height = window.innerHeight;
  let currentSection = Math.floor(top / height);
  if (top % height > height / 2) {
    currentSection += 1;
  }
  if (lastCurrentSection === currentSection) {
    return;
  }

  lastCurrentSection = currentSection;
  Array.from(document.querySelectorAll('.video'))
    .forEach((element, i) => element.style.opacity = i === currentSection ? 1 : 0);
});
