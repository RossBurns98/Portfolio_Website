(function(){
  const key="pref-theme";
  const saved=localStorage.getItem(key);
  if(saved) document.documentElement.setAttribute("data-theme",saved);
  const btn=document.getElementById("theme-toggle");
  if(btn){
    btn.addEventListener("click",function(){
      const current=document.documentElement.getAttribute("data-theme")||"light";
      const next=current==="dark"?"light":"dark";
      document.documentElement.setAttribute("data-theme",next);
      localStorage.setItem(key,next);
    });
  }
})();
const y=document.getElementById("year");
if(y) y.textContent=new Date().getFullYear();
