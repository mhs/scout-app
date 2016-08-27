/*
  Since this page uses only a small amount of JS,
  I'm skipping loading jQuery and using some nasty
  looking native JS.
*/

var os = ['mac', 'linux', 'win'];
var el = '';

for (var i = os.length - 1; i >= 0; i--) {
    el = document.querySelectorAll('.' + os[i] + ' #swap')[0];
    if (el) {
        el.setAttribute('src', '_img/screenshots/' + os[i] + '.png');
        break;
    }
}

/*
  The above is basically the same as the following:

  $('.win #swap').attr('src', '_img/screenshots/win.png');
  $('.mac #swap').attr('src', '_img/screenshots/mac.png');
  $('.linux #swap').attr('src', '_img/screenshots/linux.png');
*/
