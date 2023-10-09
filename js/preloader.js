window.addEventListener('load', function () {
    const preloader = document.querySelector('.preloader');
  
    setTimeout(function () {
      preloader.style.opacity = '0';
      setTimeout(function () {
        preloader.style.display = 'none';
      }, 1000);
    }, 500);
  });