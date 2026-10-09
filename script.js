const scenes = [
["Before Ayush","A beginning","Titli's quiet world","Somewhere, a little butterfly was feeling alone.","Prachi had feelings she didn't always know how to explain. Life carried on around her, while inside she sometimes felt unseen and unheard.","Sometimes, being surrounded by people still doesn't stop you from feeling lonely."],
["Before Ayush","A new message","A little hope on the screen","One message can make an ordinary evening feel different.","A new person entered her world. The conversations brought curiosity, attention, and the feeling that someone might understand her.","I understand why a little attention can mean a lot."],
["Before Ayush","First chapter","Foreigner","A connection began across the distance.","Her first relationship brought new feelings and expectations. It became one chapter in her life, even though it eventually came to an end.","Not every chapter lasts forever. That doesn't mean it never mattered."],
["Before Ayush","School days","Krish — class eleven","Growing up means learning what your heart is trying to say.","In class eleven, another relationship became part of her story. School, growing up, and changing feelings became part of the same memory.","Sometimes we understand a lesson only after time has passed."],
["Before Ayush","Another chapter","Akshit","New people can bring new hopes—and new questions.","Akshit became another part of Prachi's journey. I worried about whether she was being treated well, but I couldn't make her choices for her.","I wanted you to be happy, Titli. I also wanted you to be careful with your heart."],
["Before Ayush","A turning point","NDA","Sometimes two people begin walking in different directions.","NDA became the next relationship in her timeline. Eventually, that chapter ended too, and the story moved into a new phase.","I couldn't know exactly what you were feeling. I only hoped you would be okay."],
["When Ayush arrived","My own difficult days","While I was recovering","I was trying to heal, too.","After my accident, I was on bed rest and dealing with my own uncertainty. I didn't have all the answers for my own life, but I was learning how to be there for someone else.","I wasn't a hero who had everything figured out. I was just Ayush, trying to get better."],
["When Ayush arrived","A message becomes a meeting","When we met online","Two lives crossed through a little screen.","Prachi and I started talking online. At first it was just a conversation. Neither of us could know how important that connection would become to me.","I didn't plan to become your brother in this way. It happened one conversation at a time."],
["When Ayush arrived","A bond grows","You became my little sister","Trust often grows through the smallest conversations.","Our conversations became familiar. I started caring about what happened to you, what you were feeling, and whether you had someone to turn to.","Somewhere along the way, you became my Titli."],
["When Ayush arrived","Listening","I wanted to understand","Sometimes care looks like staying and listening.","When something troubled you, I wanted to listen and help you think it through. I wanted you to feel safe enough to speak honestly, even when things were complicated.","I wanted to be someone you could talk to without feeling alone or judged."],
["The brother's effort","Late nights","Months of explaining","I kept searching for the right words.","There were long conversations, late nights, and repeated attempts to explain why I was worried. I wanted to help you notice things that I feared could hurt you.","Maybe I repeated myself because I was scared for you. Maybe I didn't always explain my worries in the best way."],
["The brother's effort","When we disagreed","I couldn't choose for you","Love cannot make another person's decisions.","Sometimes you didn't see things the way I did. I felt frustrated and helpless because I believed I was trying to protect you. But your choices were still yours to make.","I wanted you to hear me. I had to learn that caring for you doesn't mean I can decide your path."],
["The brother's effort","Something practical","Books for your future","I tried to make the next step a little easier.","I helped arrange college books, stationery, and study materials. To me, these weren't just things to give. They were small ways to support your future.","I wanted you to have what you needed to study, grow, and build a life you're proud of."],
["The brother's effort","A new beginning","Getting you ready for college","I was proud to help you take that step.","I helped you prepare for college because I wanted you to have a fair chance to begin well. I hoped you'd feel supported as you started a new part of your life.","I wanted to treat you like a princess—not because you owed me anything, but because you're my little sister and you matter to me."],
["The brother's effort","Showing up","The care you couldn't always see","A lot of love lives in the things nobody applauds.","My care was often in small actions: checking, explaining, finding materials, staying awake, and worrying. I began to connect being a good brother with always trying one more time.","I gave what I could. I wish I had also remembered that I needed rest and care myself."],
["The distance","Things I learned later","A world I couldn't control","Your life kept moving in ways I didn't always understand.","I later learned about conversations with SK, Bulla, Nit, and Manshu. I had worries about some choices, but I didn't know every detail of what each connection meant to you.","I was afraid you might get hurt. I also had to accept that I couldn't know everything or control what happened."],
["The distance","The part that hurt","I began to lose trust","It hurt to feel that the bond had changed.","As I learned things later than I expected, I felt disappointed and confused. I started wondering whether we understood our bond in the same way. My trust became harder to give freely.","I don't want to punish you for my hurt. I just wish you could understand why I started feeling distant, too."],
["The distance","Ayush, alone","The brother was hurting too","Even the person who supports others can run out of strength.","I was already facing difficult things in my own life. The worry and sadness piled up, and I began feeling alone with emotions I didn't know how to explain.","I was trying so hard to be there for you. Somewhere in that, I forgot that I needed someone to ask if I was okay, too."],
["What remains","What I never said clearly","A letter for Titli","I don't need you to be perfect. I want us to understand each other.","I still care about you. I still worry. But I don't want my love to become pressure, and I don't want my hurt to become anger. I want us to speak honestly and respect each other's choices.","I can tell you what scares me, and you can tell me what you need. We can disagree without losing our kindness."],
["What remains","For my little sister","Always my Titli","I can't choose your path. I can still love you as your brother.","You are allowed to make your own decisions, and I am allowed to feel hurt when our bond feels different. I hope time helps us find a more honest, balanced way to be there for each other.","Titli, I want you to be safe, happy, and proud of the person you become. I hope we both learn to care for each other without losing ourselves."]
];
const $=id=>document.getElementById(id);let i=0,playing=false,timer=null,music=false,exts=["png","jpg","jpeg","webp"],tried=[];
function imgFor(n){tried=[];const im=$("image");$("missing").classList.add("hidden");im.style.display="block";im.onerror=()=>{const e=exts.find(x=>!tried.includes(x));if(e){tried.push(e);im.src=`assets/images/${n}.${e}`}else{im.style.display="none";$("missing").classList.remove("hidden")}};im.onload=()=>{$("missing").classList.add("hidden");im.style.display="block"};tried.push("png");im.src=`assets/images/${n}.png`}
function dots(){const d=$("dots");d.innerHTML="";scenes.forEach((s,n)=>{const b=document.createElement("button");b.className=n===i?"active":"";b.title=`${n+1}. ${s[2]}`;b.setAttribute("aria-label",`Go to scene ${n+1}`);b.onclick=()=>{stop();show(n)};d.appendChild(b)})}
function show(n){i=Math.max(0,Math.min(19,n));const s=scenes[i];$("chapter").textContent=s[0];$("kicker").textContent=s[1];$("title").textContent=s[2];$("caption").textContent=s[3];$("text").textContent=s[4];$("voice").textContent=`“${s[5]}”`;$("number").textContent=`${String(i+1).padStart(2,"0")} / 20`;$("count").textContent=`Memory ${i+1} of 20`;$("percent").textContent=`${Math.round((i+1)/20*100)}%`;$("fill").style.width=`${(i+1)/20*100}%`;$("prev").disabled=i===0;$("next").textContent=i===19?"Finish →":"Next →";imgFor(i+1);dots();if(playing)schedule()}
async function startBackgroundMusic(){const a=$("audio");if(!a||music)return;try{a.volume=0;await a.play();music=true;$("music").innerHTML="♫ <span>Music on</span>";let v=0;const fade=setInterval(()=>{v=Math.min(.28,v+.02);a.volume=v;if(v>=.28)clearInterval(fade)},180)}catch(e){$("music").innerHTML="♫ <span>Tap for music</span>"}}
function start(){startBackgroundMusic();stop();$("intro").classList.add("hidden");$("ending").classList.add("hidden");$("story").classList.remove("hidden");show(0);play()}
function stop(){playing=false;clearTimeout(timer);$("play").textContent="▶ Play"}
function play(){playing=true;$("play").textContent="Ⅱ Pause";schedule()}
function schedule(){clearTimeout(timer);if(playing)timer=setTimeout(()=>{if(i===19)finish();else show(i+1)},i===19?11000:8500)}
function next(){if(i===19)finish();else show(i+1)}function finish(){stop();$("story").classList.add("hidden");$("ending").classList.remove("hidden")}
$("begin").onclick=start;$("next").onclick=next;$("prev").onclick=()=>{stop();show(i-1)};$("play").onclick=()=>playing?stop():play();$("home").onclick=e=>{e.preventDefault();stop();$("story").classList.add("hidden");$("ending").classList.add("hidden");$("intro").classList.remove("hidden")};$("replay").onclick=start;
$("music").onclick=async()=>{const a=$("audio");if(!music){try{a.volume=0;await a.play();music=true;let v=0;const fade=setInterval(()=>{v=Math.min(0.42,v+0.035);a.volume=v;if(v>=0.42)clearInterval(fade)},120);$("music").innerHTML="♫ <span>Music on</span>";$("music").classList.add("active")}catch{$("music").innerHTML="♫ <span>Tap to play</span>"}}else{let v=a.volume;const fade=setInterval(()=>{v=Math.max(0,v-0.06);a.volume=v;if(v<=0){clearInterval(fade);a.pause()}},80);music=false;$("music").innerHTML="♫ <span>Music off</span>";$("music").classList.remove("active")}}
document.addEventListener("keydown",e=>{if(!$("story").classList.contains("hidden")){if(e.key==="ArrowRight"){stop();next()}if(e.key==="ArrowLeft"){stop();show(i-1)}if(e.code==="Space"){e.preventDefault();playing?stop():play()}if(e.key==="Escape"){stop();$("story").classList.add("hidden");$("intro").classList.remove("hidden")}}});
const hero=$("heroimg");hero.onerror=()=>{hero.style.display="none";$("heroimg").parentElement.style.background="linear-gradient(140deg,#765536,#29291f)"};hero.src="assets/images/1.png";


// Landscape guidance: request orientation lock where the browser supports it.
// Some iPhones and browsers do not allow a webpage to force orientation; the prompt
// remains a helpful suggestion and the story can still be viewed in portrait.
const rotatePrompt = document.getElementById("rotatePrompt");
let portraitOverride = false;
function updateLandscapePrompt() {
  const storyVisible = !$("story").classList.contains("hidden");
  const isSmallPortrait = window.matchMedia("(max-width: 900px) and (orientation: portrait)").matches;
  if (storyVisible && isSmallPortrait && !portraitOverride) rotatePrompt.classList.remove("hidden");
  else rotatePrompt.classList.add("hidden");
}
async function requestLandscape() {
  portraitOverride = false;
  try {
    if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
      await document.documentElement.requestFullscreen();
    }
  } catch (_) {}
  try {
    if (screen.orientation && screen.orientation.lock) await screen.orientation.lock("landscape");
  } catch (_) {
    // Orientation lock isn't supported in every mobile browser.
  }
  updateLandscapePrompt();
}
document.getElementById("landscapeButton").addEventListener("click", requestLandscape);
document.getElementById("portraitButton").addEventListener("click", () => {
  portraitOverride = true;
  rotatePrompt.classList.add("hidden");
});
window.addEventListener("resize", updateLandscapePrompt);
window.addEventListener("orientationchange", updateLandscapePrompt);
const originalStartForLandscape = start;
start = function() {
  portraitOverride = false;
  originalStartForLandscape();
  updateLandscapePrompt();
};
const originalShowForLandscape = show;
show = function(n) {
  originalShowForLandscape(n);
  updateLandscapePrompt();
};
