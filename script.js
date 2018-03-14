let once = false
const nav = document.querySelector('nav')
const title = document.querySelector('h4')
const burger = document.querySelector('.burger')
const sidebar = document.querySelector('aside')
const closer = document.querySelector('.sidebar-close')
const mid = document.querySelector('.mid-main')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 160) {
    nav.classList.add('scrolly')
    nav.classList.remove('hide')
    title.classList.add('show')
    // const children = Array.from(burger.children)
    // children.forEach(node => node.classList.add('burger-row-white'))
    if (!once) {
      once = true
    } 
  } else {
    if (once) {
      nav.classList.add('hide')
    }
    // const children = Array.from(burger.children)
    // children.forEach(node => node.classList.remove('burger-row-white'))
    nav.classList.remove('scrolly')
    title.classList.remove('show')
  }
  // const yPos = -(window.pageYOffset / mid.dataset.speed)
  // const coords = 'calc(50% + ' + yPos + 'px) 40%'
  // mid.style.backgroundPosition = coords
})

burger.addEventListener('click', () => {
  sidebar.classList.add('sidebar-open')
  closer.classList.add('sidebar-close-active')
})

closer.addEventListener('click', () => {
  sidebar.classList.remove('sidebar-open')
  closer.classList.remove('sidebar-close-active')
})

// $('header').each(function(){
//     var $bgobj = $(this); // assigning the object

//     $(window).scroll(function() {

//       // Scroll the background at var speed
//       // the yPos is a negative value because we're scrolling it UP!                              
//       var yPos = -($window.scrollTop() / $bgobj.data('speed')); 

//       // Put together our final background position
//       var coords = '50% '+ yPos + 'px';

//       // Move the background
//       $bgobj.css({ backgroundPosition: coords });

//     });

//   });