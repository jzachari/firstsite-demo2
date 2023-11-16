const jqueryScript = document.createElement('script');
jqueryScript.type = 'text/javascript';
jqueryScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';

document.getElementsByTagName('head')[0]
  .appendChild(jqueryScript);

$('.hero-wrapper').ripples({
  resolution: 512,
  radius: 20,
  perturbance: 0.09,
});
