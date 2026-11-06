(function(){
var roles=["Java Developer","Spring Boot Developer","Backend Enthusiast","Software Developer"],ri=0,ci=0,del=false,el=document.getElementById("ty");
function tick(){var w=roles[ri];ci+=del?-1:1;el.textContent=w.slice(0,ci);var d=del?45:90;
if(!del&&ci===w.length){del=true;d=1400}else if(del&&ci===0){del=false;ri=(ri+1)%roles.length;d=400}setTimeout(tick,d)}
tick();
var cv=document.getElementById("cv"),cx=cv.getContext("2d"),P=[],W,H;
function size(){var r=cv.getBoundingClientRect();W=cv.width=r.width;H=cv.height=r.height}
function init(){size();P=[];var n=Math.min(110,Math.floor(W*H/9000));
for(var i=0;i<n;i++){var a=Math.random()*6.283,rad=Math.pow(Math.random(),.6)*Math.min(W,H)*.42;
P.push({x:W*.68+Math.cos(a)*rad*1.1,y:H*.45+Math.sin(a)*rad,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*2+.8})}}
function draw(){cx.clearRect(0,0,W,H);
for(var i=0;i<P.length;i++){var p=P[i];p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
for(var j=i+1;j<P.length;j++){var q=P[j],dx=p.x-q.x,dy=p.y-q.y,d=dx*dx+dy*dy;
if(d<13000){cx.strokeStyle="rgba(34,211,238,"+(0.55-d/26000)+")";cx.lineWidth=.8;cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(q.x,q.y);cx.stroke()}}
cx.fillStyle="rgba(125,211,252,.9)";cx.beginPath();cx.arc(p.x,p.y,p.r,0,6.283);cx.fill()}
requestAnimationFrame(draw)}
init();draw();window.addEventListener("resize",init);
var links=document.querySelectorAll("nav a"),secs=document.querySelectorAll("section");
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(l){l.classList.toggle("on",l.getAttribute("href")==="#"+e.target.id)})}})},{threshold:.5});
secs.forEach(function(s){io.observe(s)});
})();

(function(){var w=["Java Developer","Spring Boot Learner","Problem Solver"],i=0,c=0,d=false,e=document.getElementById("ty2");
function t(){var s=w[i];c+=d?-1:1;e.textContent=s.slice(0,c);var m=d?50:100;if(!d&&c===s.length){d=true;m=1400}else if(d&&c===0){d=false;i=(i+1)%w.length;m=400}setTimeout(t,m)}t()})();

(function(){var c=document.querySelector("aside .soc").cloneNode(true);c.classList.add("big");document.getElementById("csoc").appendChild(c);
document.getElementById("cf").addEventListener("submit",function(e){e.preventDefault();var f=e.target.elements,b="Name: "+f.n.value+"\nPhone: "+f.p.value+"\nEmail: "+f.e.value+"\n\n"+f.m.value;
var a=document.createElement("a");a.href="mailto:chepatil2004@gmail.com?subject="+encodeURIComponent(f.s.value)+"&body="+encodeURIComponent(b);a.target="_blank";document.body.appendChild(a);a.click();a.remove()})})();
