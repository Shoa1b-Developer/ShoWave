const userInput = document.querySelector('.Input')
, display = document.querySelector('.command')
, form = document.querySelector('form')
, help = '.help for commands<br>.gg-search for google search<br>.yt-search for youtube search<br>.clg - Collage<br>.font - google fonts<br>.clear - clear display<br>.git -github<br>'

form.addEventListener('submit', function show(e) {
  const user = userInput.value;
  display.innerHTML += `${user}<br>`;
  if (user == '.help') {
    e.preventDefault();
    display.innerHTML += help;
    userInput.value = '';
  } else if (user.includes('.gg-')) {
    const search = user.split('').slice(4).join('');
    userInput.value = search;
    form.action = 'https://www.google.com/search?' + search;
  } else if (user == '.clg') {
    form.action = 'https://ajcbosecollege.org/';
    } else if (user == '.font') {
      form.action = 'https://fonts.google.com/';
      userInput.value = '';
    } else if (user == '.clear') {
      e.preventDefault();
      userInput.value = '';
      display.innerHTML = '';
  } else if (user == '.git') {
      form.action = 'https://github.com/';
      userInput.value = '';
    } else {
    e.preventDefault();
    userInput.value = '';
  }
});


