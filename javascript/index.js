let btn = document.querySelector('#hamburger');
let leftside = document.querySelector('.col-left');
let ShowSideBar = false;
btn.addEventListener(
  'click',
  () => {
    console.log('hello');
    if (!ShowSideBar) {
      leftside.classList.add('visiblity');
      btn.classList.add('transform');
      document.body.classList.add('hide__scrollBar');
      ShowSideBar = true;
    } else {
      leftside.classList.remove('visiblity');
      btn.classList.remove('transform');
      document.body.classList.remove('hide__scrollBar');
      ShowSideBar = false;
    }
  },
  true
);
