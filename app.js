const $=id=>document.getElementById(id);
const ids=["match","status","teamA","runsA","wkA","oversA","target","teamB","runsB","wkB","oversB","innings","batting","message","batter1","batter2","bowler","last"];
$("batting").addEventListener("change",()=>{const a=$("batting").value==="A";$("batting").options[0].text=$("teamA").value;$("batting").options[1].text=$("teamB").value;});
$("teamA").addEventListener("input",()=>{$("batting").options[0].text=$("teamA").value});
$("teamB").addEventListener("input",()=>{$("batting").options[1].text=$("teamB").value});
function build(){const d={};ids.forEach(id=>d[id]=$(id).value);const url=new URL("ticker.html",location.href);url.searchParams.set("data",btoa(unescape(encodeURIComponent(JSON.stringify(d)))));return url.href}
$("makeLink").onclick=()=>{const u=build();$("obsUrl").value=u;$("preview").href=u;$("result").classList.remove("hidden")};
$("copy").onclick=async()=>{try{await navigator.clipboard.writeText($("obsUrl").value);$("copy").textContent="કોપી થઈ ગઈ"}catch(e){$("obsUrl").select();document.execCommand("copy");$("copy").textContent="કોપી થઈ ગઈ"}};
$("reset").onclick=()=>{if(confirm("બધી સ્કોર વિગતો રીસેટ કરવી છે?"))location.reload()};
