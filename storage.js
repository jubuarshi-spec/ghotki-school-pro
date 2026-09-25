function saveData(k,v){localStorage.setItem(k,JSON.stringify(v))}
function loadData(k){try{return JSON.parse(localStorage.getItem(k))}catch{return null}}
function startSindhiVoice(){
 let s=document.getElementById('voiceStatus');
 if(!('webkitSpeechRecognition' in window)){s.innerText='Use Chrome browser';return;}
 let SR=window.SpeechRecognition||window.webkitSpeechRecognition;let rec=new SR();rec.lang='ur-PK';
 s.innerText='🎧 Sunh raha hu... Chayo Ali Hazir';rec.start();
 rec.onresult=e=>{
  let t=e.results[0][0].transcript; s.innerText='You said: '+t+' - Hazri Marked!';
  if('speechSynthesis' in window){let u=new SpeechSynthesisUtterance('Hazri lagayi gayi '+t);u.lang='ur-PK';speechSynthesis.speak(u);}
 };
}
function sendSindhiAlert(name){alert('Sindhi Alert: Tawhan jo bacha '+name+' aaj hazir aahe - By Subash Arshi');}
