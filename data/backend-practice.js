const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log('Response from backend practice server:', xhr.response);
}); 
xhr.open('GET', 'https://supersimplebackend.dev/hello');
xhr.send();

