(()=>{var e={682:e=>{e.exports=function(){const e=document.querySelector(".calculating__result span"),t=document.querySelectorAll("#choose div"),o=document.querySelectorAll("#gender div"),n=document.querySelectorAll(".calculating__choose_medium input"),a=document.querySelector("#female"),r=document.querySelector("#small");let l,i,s,c="female",d=1.375;var u;function m(){e.textContent=l&&i&&s&&c&&d?"female"!=c?`${Math.round((88.36+13.4*i+4.8*l-5.7*s)*d)}`:`${Math.round((447.6+9.2*i+3.1*l-4.3*s)*d)}`:"0"}localStorage.getItem("gender")&&(c=localStorage.getItem("gender")),localStorage.getItem("ration")&&(d=localStorage.getItem("ration")),u="calculating__choose-item_active",document.querySelectorAll(".calculating__choose div").forEach((e=>{e.classList.remove(u),e.getAttribute("data-ration")?e.getAttribute("data-ration")===localStorage.getItem("ration")&&(r.classList.remove(u),e.classList.add(u)):e.getAttribute("id")===localStorage.getItem("gender")?(a.classList.remove(u),e.classList.add(u)):a.classList.add(u)})),m(),function(e,n){const a=document.querySelectorAll(".calculating__choose div");a.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("data-ration")?(d=e.target.getAttribute("data-ration"),localStorage.setItem("ration",e.target.getAttribute("data-ration"))):(c=e.target.id,localStorage.setItem("gender",e.target.id)),a.forEach((()=>{e.target.getAttribute("data-ration")?t.forEach((e=>{e.classList.remove(n)})):o.forEach((e=>{e.classList.remove(n)}))})),e.target.classList.add(n),m()}))}))}(0,"calculating__choose-item_active"),n.forEach((e=>{e.addEventListener("input",(e=>{switch(e.target.value.match(/\D/g)?(e.target.style.border="1px solid red",e.target.style.boxShadow="0px 0px 5px 0px rgba(255, 0, 0, 0.75)"):(e.target.style.border="none",e.target.style.boxShadow="0 4px 15px rgb(0 0 0 / 20%)"),e.target.id){case"height":l=e.target.value,console.log(l);break;case"weight":i=e.target.value;break;case"age":s=e.target.value}m()}))}))}},983:e=>{e.exports=function(){class e{constructor(e,t,o,n,a,...r){this.bgImage=e,this.title=t,this.alt=o,this.description=n,this.price=a,this.classes=r}addCard(){const e=document.createElement("div"),t=document.querySelector(".menu__field").querySelector(".container");e.innerHTML=`\n                <img src="${this.bgImage}" alt="${this.alt}">\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.description}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                </div>\n        `,t.append(e),this.classes.forEach((t=>e.classList.add(t)))}}(async e=>{const t=await fetch("http://localhost:3000/menu");return await t.json()})().then((t=>{t.forEach((({img:t,title:o,altimg:n,descr:a,price:r})=>{new e(t,o,n,a,r,"menu__item").addCard()}))}))}},824:e=>{e.exports=function(){const e=document.querySelectorAll("form");function t(e){const t=document.querySelector(".modal__dialog"),o=document.createElement("div");t.classList.add("hide"),o.classList.add("modal__dialog"),o.innerHTML=`\n        <div class="modal__content">\n                <form action="#">\n                    <div data-close="" class="modal__close">×</div>\n                    <div class="modal__title">${e}</div>\n                    <img src = "https://sun9-27.userapi.com/impg/ZqC_W62l_zUalZZyKe54NKLzr2MbyFgt7IZMPw/ifZxblymdR8.jpg?size=512x512&quality=96&sign=73f5528f4b431fe3051b3a80a35cae5e&type=album" style="height: 300px; width: 300px; margin: 0 auto; display: block;">\n                </form>\n            </div>\n        `,modal.append(o),setTimeout((()=>{t.classList.remove("hide"),o.remove()}),4e3)}e.forEach((e=>function(e){e.addEventListener("submit",(o=>{o.preventDefault();const n=new FormData(e);(async(e,t)=>{const o=await fetch("http://localhost:3000/requests",{method:"POST",body:t,headers:{"Content-type":"application/json"}});return await o.json()})(0,JSON.stringify(Object.fromEntries(n.entries()))).then((e=>{modal.style.display="block",t("Спасибо, мы с вами скоро свяжемся!"),console.log(e)})).catch((()=>{t("Что-то пошло не так...")})).finally((()=>{e.reset()}))}))}(e)))}},221:e=>{e.exports=function(){const e=document.querySelectorAll("[data-modal]"),t=document.querySelector("[data-close]"),o=document.querySelector(".modal"),n=setTimeout(a,2e3);function a(){o.style.display="block",document.body.style.overflow="hidden"}e.forEach((e=>{e.addEventListener("click",(()=>{a(),clearInterval(n)}))})),t.addEventListener("click",(e=>{o.style.display="none",document.body.style.overflow="visible"})),o.addEventListener("click",(e=>{e.target==o&&(o.style.display="none",document.body.style.overflow="visible")})),window.addEventListener("keydown",(e=>{27===e.keyCode&&(o.style.display="none",document.body.style.overflow="visible")})),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(a(),clearInterval(n),window.removeEventListener("scroll",e))}))}},459:e=>{e.exports=function(){const e=document.querySelectorAll(".offer__slide"),t=document.querySelector(".offer__slider"),o=document.querySelector("#current"),n=document.querySelector("#total"),a=document.querySelector(".offer__slider-prev"),r=document.querySelector(".offer__slider-next"),l=document.querySelector(".offer__slider-wrapper"),i=window.getComputedStyle(l).width,s=document.querySelector(".offer__slider-inner");let c=1,d=0;s.style.display="flex",s.style.width=100*e.length+"%",s.style.transition="0.6s all",e.forEach((e=>{e.style.width=i})),l.style.overflow="hidden",n.textContent=getZero(e.length),o.textContent=getZero(c),t.style.position="relative";const u=document.createElement("div");t.append(u),u.classList.add("carousel-indicators");for(let t=0;t<e.length;t++){const e=document.createElement("div");u.append(e),e.classList.add("dot")}const m=document.querySelectorAll(".dot");function g(e){return+e.replace(/\D/g,"")}m[c-1].style.backgroundColor="black",m.forEach(((e,t)=>{e.addEventListener("click",(()=>{m.forEach((e=>{e.style.backgroundColor="#fff",c=t+1,o.innerHTML=getZero(c)})),d=g(i)*t,s.style.transform=`translateX(-${d}px)`,e.style.backgroundColor="black"}))})),r.addEventListener("click",(()=>{m[c-1].style.backgroundColor="#fff",d==g(i)*(e.length-1)?d=0:d+=g(i),s.style.transform=`translateX(-${d}px)`,c==e.length?c=1:c++,o.innerHTML=getZero(c),m[c-1].style.backgroundColor="black"})),a.addEventListener("click",(()=>{m[c-1].style.backgroundColor="#fff",0==d?d=g(i)*(e.length-1):d-=g(i),s.style.transform=`translateX(-${d}px)`,1==c?c=e.length:c--,o.innerHTML=getZero(c),m[c-1].style.backgroundColor="black"}))}},523:e=>{e.exports=function(){const e=document.querySelectorAll(".tabcontent"),t=document.querySelector(".tabheader__items"),o=document.querySelectorAll(".tabheader__item");function n(){e.forEach((e=>{e.classList.remove("show","fade"),e.classList.add("hide")})),o.forEach((e=>{e.classList.remove("tabheader__item_active")}))}function a(t=0){e[t].classList.remove("hide"),e[t].classList.add("show","fade"),o[t].classList.add("tabheader__item_active")}n(),a(),t.addEventListener("click",(e=>{e.preventDefault();const t=e.target;t&&t.classList.contains("tabheader__item")&&o.forEach(((e,o)=>{e==t&&(n(),a(o))}))}))}},945:e=>{e.exports=function(){const e="2021-08-23";function t(e){let t=Date.parse(e)-Date.parse(new Date);return{totalTimeRemaining:t,daysRemaining:Math.floor(t/864e5),hoursRemaining:Math.floor(t/36e5%24),minutesRemaining:Math.floor(t/6e4%60),secondsRemaining:Math.floor(t/1e3%60)}}function o(e){return e>=0&&e<10?`0${e}`:e}!function n(){const a=document.querySelector("#days"),r=document.querySelector("#hours"),l=document.querySelector("#minutes"),i=document.querySelector("#seconds"),s=setInterval(n,1e3);a.innerHTML=o(t(e).daysRemaining),r.innerHTML=o(t(e).hoursRemaining),l.innerHTML=o(t(e).minutesRemaining),i.innerHTML=o(t(e).secondsRemaining),t(e).totalTimeRemaining<=0&&(clearInterval(s),a.innerHTML="00",r.innerHTML="00",l.innerHTML="00",i.innerHTML="00")}()}}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}(()=>{"use strict";window.addEventListener("DOMContentLoaded",(()=>{const e=o(523),t=o(945),n=o(221),a=o(824),r=o(459),l=o(983),i=o(682);e(),t(),n(),a(),r(),l(),i()}))})()})();