(function(){
  const openBtn = document.getElementById('openBtn');
  const gallery = document.getElementById('gallery');
  const closeBtn = document.getElementById('closeBtn');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  let current = 0;
  let interval = null;
  let audio = null;

  function show(index){
    slides.forEach(s => s.classList.remove('active'));
    slides[index].classList.add('active');
    current = index;
  }

  function nextSlide(){
    show((current + 1) % slides.length);
  }
  function prevSlide(){
    show((current - 1 + slides.length) % slides.length);
  }

  function startAuto(){
    if(interval) clearInterval(interval);
    interval = setInterval(nextSlide, 4200);
  }
  function stopAuto(){
    if(interval) clearInterval(interval); interval = null;
  }

  function openGallery(){
    gallery.setAttribute('aria-hidden','false');
    openBtn.setAttribute('aria-expanded','true');
    show(0);
    startAuto();
    // Start music on user interaction
    if(!audio){
      audio = new Audio('assets/mia.mp3');
      audio.loop = true; audio.volume = 0.5;
      audio.play().catch(()=>{
        // Browsers may block autoplay — user already clicked so most will allow it; otherwise ignore.
        console.info('Music playback blocked or missing. Place an MP3 at assets/music.mp3 to enable.');
      });
    } else {
      audio.play().catch(()=>{});
    }
  }

  function closeGallery(){
    gallery.setAttribute('aria-hidden','true');
    openBtn.setAttribute('aria-expanded','false');
    stopAuto();
    if(audio){ audio.pause(); }
  }

  openBtn.addEventListener('click', openGallery);
  closeBtn.addEventListener('click', closeGallery);
  next.addEventListener('click', ()=>{ nextSlide(); startAuto(); });
  prev.addEventListener('click', ()=>{ prevSlide(); startAuto(); });

  // Close when clicking outside the inner dialog
  gallery.addEventListener('click', (e)=>{
    if(e.target === gallery) closeGallery();
  });

  // keyboard
  document.addEventListener('keydown', (e)=>{
    if(gallery.getAttribute('aria-hidden') === 'false'){
      if(e.key === 'Escape') closeGallery();
      if(e.key === 'ArrowRight') { nextSlide(); startAuto(); }
      if(e.key === 'ArrowLeft') { prevSlide(); startAuto(); }
    }
  });

  // Progressive enhancement: if JS disabled, gallery stays hidden — button could link to a separate page.
})();