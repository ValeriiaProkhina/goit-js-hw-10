import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as i,i as l}from"./assets/vendor-651d7991.js";const m=document.querySelector("#datetime-picker"),o=document.querySelector("button"),f=document.querySelector("span[data-days"),h=document.querySelector("span[data-hours"),y=document.querySelector("span[data-minutes"),p=document.querySelector("span[data-seconds");let r;const S=i(m,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),t[0].getTime()<=new Date().getTime()?(l.error({message:"Please choose a date in the future",position:"topRight"}),o.disabled=!0):o.disabled=!1}});o.addEventListener("click",g);function g(){o.disabled=!0,setInterval(()=>{r=S.selectedDates[0];const t=new Date,s=r-t;if(s>=0){const e=L(s);f.textContent=n(e.days),h.textContent=n(e.hours),y.textContent=n(e.minutes),p.textContent=n(e.seconds)}},1e3)}function n(t){return t.toString().padStart(2,"0")}function L(t){const a=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:c,minutes:u,seconds:d}}
//# sourceMappingURL=commonHelpers.js.map
