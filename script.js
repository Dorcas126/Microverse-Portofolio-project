const body = document.querySelector('body');
const navigation = document.querySelector('.icons');

navigation.addEventListener('click', () => {
  body.classList.toggle('open-menu');
});


menuLink.forEach((e) => e.addEventListener('click', () => {
  body.classList.remove('open-menu');
}));