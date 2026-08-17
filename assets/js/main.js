(function(){
  var burger = document.querySelector('.nav-burger');
  var links = document.querySelector('.nav-links');
  if(burger){
    burger.addEventListener('click', function(){
      links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
      links.style.cssText += 'display:flex;position:fixed;top:78px;left:0;right:0;flex-direction:column;background:rgba(22,17,13,.98);padding:24px;gap:20px;border-bottom:1px solid rgba(200,162,94,.32);';
    });
  }
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if('IntersectionObserver' in window && !reduce){
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('is-visible'); obs.unobserve(e.target); }
      });
    },{threshold:.15});
    document.querySelectorAll('.reveal').forEach(function(el){ obs.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('is-visible'); });
  }
})();
