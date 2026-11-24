const toggle=document.getElementById('menuToggle');
const nav=document.getElementById('nav');
toggle.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('ideaForm').addEventListener('submit',event=>{
  event.preventDefault();
  const name=document.getElementById('ideaName').value.trim();
  const idea=document.getElementById('ideaText').value.trim();
  if(!name||!idea)return;
  document.getElementById('formMessage').textContent=`Thanks, ${name}! Your idea has been added to this demo.`;
  event.target.reset();
});