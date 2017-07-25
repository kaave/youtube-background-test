import 'babel-polyfill';  // アプリ内で1度だけ読み込む エントリーポイントのてっぺん推奨
import YouTubePlayer from 'youtube-player';
import $ from 'jquery';

const videoIDs = [
  'Cnj64DsO8T8',
  '6MK2TKFFtQA',
  'BAXQ6HaRG8s',
  'fTyewgmEoGU',
  'kzjMI00A1f8',
  'vfJAaFaxqiE',
  '3NZGbD236fw',
];

class Test {
  constructor () {
    this.aaa = 'aaa';
  }
}

const test = new Test();
console.log(test);

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
let isSlideNow = false;
document.body.addEventListener('mousewheel', event => {
  event.preventDefault();
  if (isSlideNow) {
    return;
  }
  if (Math.abs(event.wheelDeltaY) < 20) {
    return;
  }
  if (lastCurrentSection === 0 && event.wheelDeltaY > 0) {
    return;
  }
  if (lastCurrentSection + 1 >= videoIDs.length && event.wheelDeltaY < 0) {
    return;
  }
  const currentSection = lastCurrentSection + (event.wheelDeltaY > 0 ? -1 : 1);
  isSlideNow = true;
  // scroll.animateScroll(document.getElementById(`section-${currentSection + 1}`));
  $('body').animate({ scrollTop: window.innerHeight * currentSection }, 500, 'swing');
  setTimeout(() => isSlideNow = false, 1000);
  lastCurrentSection = currentSection;
  Array.from(document.querySelectorAll('.video'))
    .forEach((element, i) => element.style.opacity = i === currentSection ? 1 : 0);
});
