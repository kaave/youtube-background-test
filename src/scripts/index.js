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
  // // YouTubeの埋め込み
  // function onYouTubeIframeAPIReady() {
  //   ytPlayer = new YT.Player(
  //     'youtube', // 埋め込む場所をIDで設定
  //     {
  //       videoId: 'vk2XlND2kQ0', // YouTubeのIDを指定
  //       width: 640,
  //       height: 400,
  //       playerVars: {
  //         controls: 0,
  //         autoplay: 1,
  //         showinfo: 0,
  //       },
  //       events: {
  //         onReady: onPlayerReady,
  //         onStateChange: onPlayerStateChange
  //       }
  //     }
  //   );
  // }

  // function onPlayerReady(event) {
  //   event.target.playVideo();
  //   event.target.mute();
  // }

  // function onPlayerStateChange(e) {
  //   const ytStatus = e.target.getPlayerState();
  //   if (ytStatus === YT.PlayerState.ENDED) {
  //     ytPlayer.playVideo();
  //     ytPlayer.mute();
  //   }
  // }
});
