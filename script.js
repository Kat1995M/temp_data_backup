function setLanguage(lang) {
  document.querySelectorAll('.message').forEach(el => el.classList.add('hidden'));
  document.getElementById('message-' + lang).classList.remove('hidden');
}

function acceptDisclaimer() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('content').style.display = 'block';
}