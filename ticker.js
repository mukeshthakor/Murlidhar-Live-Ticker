(()=>{const p=new URLSearchParams(location.search);let d={};try{const raw=p.get("data");if(raw)d=JSON.parse(decodeURIComponent(escape(atob(raw))))}catch(e){console.warn("Ticker data could not be read",e)}
const put=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=(v??"")};
["match","status","teamA","runsA","wkA","oversA","teamB","runsB","wkB","oversB","innings","message"].forEach(k=>put(k,d[k]));
const target=d.target?("TARGET "+d.target):"";put("target",target);
if(document.body.classList.contains("full-page")){put("target",target);document.querySelectorAll(".full-teams article")[0].querySelector("small").textContent="TEAM A";document.querySelectorAll(".full-teams article")[1].querySelector("small").textContent="TEAM B";}
})();