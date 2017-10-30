var timeLeft = (840000 - data) * 150;
var clock = $('.clock').FlipClock(timeLeft, {
  clockFace: 'DailyCounter',
  countdown: true
});
