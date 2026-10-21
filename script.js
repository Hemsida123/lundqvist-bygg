const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
function closeMenu(){nav?.classList.remove('is-open');menuButton?.setAttribute('aria-expanded','false');menuButton?.querySelector('span')?.replaceChildren('Meny');}
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);menuButton.querySelector('span').textContent=open?'Stäng':'Meny';});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menuButton?.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus();}});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
const mobileContact=document.querySelector('.mobile-contact');
const marker=document.querySelector('.hero,.page-heading');
if(marker&&mobileContact&&'IntersectionObserver'in window){new IntersectionObserver(entries=>mobileContact.classList.toggle('show',!entries[0].isIntersecting),{threshold:0}).observe(marker);}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));let count=0;document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=button.dataset.filter!=='alla'&&card.dataset.category!==button.dataset.filter;if(!card.hidden)count++;});document.querySelector('.result-count').textContent=`Visar ${count} av 6 projekt`; }));
const photos=[...document.querySelectorAll('[data-gallery]')],dialog=document.querySelector('.lightbox');let activePhoto=0,lastTrigger;
function displayPhoto(index){activePhoto=(index+photos.length)%photos.length;const source=photos[activePhoto];dialog.querySelector('img').src=source.dataset.gallery;dialog.querySelector('img').alt=source.querySelector('img').alt;dialog.querySelector('.lightbox-caption').textContent=`${source.querySelector('img').alt} · ${activePhoto+1} / ${photos.length}`;}
photos.forEach((button,index)=>button.addEventListener('click',()=>{lastTrigger=button;displayPhoto(index);dialog.showModal();document.body.style.overflow='hidden';}));
dialog?.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog?.addEventListener('close',()=>{document.body.style.overflow='';lastTrigger?.focus();});
dialog?.querySelector('[data-prev]').addEventListener('click',()=>displayPhoto(activePhoto-1));
dialog?.querySelector('[data-next]').addEventListener('click',()=>displayPhoto(activePhoto+1));
dialog?.addEventListener('keydown',e=>{if(e.key==='ArrowRight')displayPhoto(activePhoto+1);if(e.key==='ArrowLeft')displayPhoto(activePhoto-1);});
dialog?.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
