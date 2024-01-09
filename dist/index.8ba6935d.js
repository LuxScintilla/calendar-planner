let t;const e=document.querySelector(".modal__backdrop"),a=document.querySelector(".modal__new-task"),n=document.querySelector(".modal__edit-task"),o=document.querySelector(".modal__delete-task"),s=document.querySelector(".modal__weather"),l=document.querySelector(".modal__profile"),r=document.querySelector(".modal__form"),d=document.querySelector(".modal__task-input"),c=document.querySelector(".username-input"),i=document.querySelector(".location-input"),u=document.querySelector(".modal__render-edit-container"),y=document.querySelector(".modal__render-delete-container"),k=document.querySelector(".modal__btn-save"),m=document.querySelector(".modal__btn-profile-save"),h=document.querySelectorAll(".modal__btn-done"),p=document.querySelectorAll(".modal__btn-cancel"),_=document.querySelector(".modal__btn-ok");r.addEventListener("keydown",function(t){"Enter"===t.key&&t.preventDefault()}),k.addEventListener("click",function(n){let o={taskDate:Number(t),taskMonth:K.month,taskTitle:d.value};F[F.length]=o,localStorage.setItem("tasks",JSON.stringify(F)),e.style.display="none",a.style.display="none",d.value="",Q()});const f=function(){e.style.display="block",a.style.display="flex",d.focus()},b=function(){let a="",o=1;F.filter(e=>e.taskDate===Number(t)&&e.taskMonth===K.month).forEach(t=>{a+=`<div class="modal__task-container">
      <label class="modal__task-label--edit" for="task">Task ${o}:</label>
      <input class="modal__task-input" name="task" type="text" data-task=${o} value="${t.taskTitle}" autocomplete="off" maxlength="30"
      readonly>
      <button class="edit-task-btn" data-task=${o}>Edit</button>
    </div>`,o++}),u.innerHTML="",u.insertAdjacentHTML("afterbegin",a),e.style.display="block",n.style.display="flex"},g=function(){let a="",n=1;F.filter(e=>e.taskDate===Number(t)&&e.taskMonth===K.month).forEach(t=>{a+=`<div class="modal__task-container">
      <label class="modal__task-label--delete" for="task">Task ${n}:</label>
      <input class="modal__task-input" name="task" type="text" data-task=${n} value="${t.taskTitle}" autocomplete="off" maxlength="30"
      readonly>
      <button class="delete-task-btn" data-task=${n}>Delete</button>
    </div>`,n++}),y.innerHTML="",y.insertAdjacentHTML("afterbegin",a),e.style.display="block",o.style.display="flex"},S=document.querySelector(".weather__img"),v=document.querySelector(".weather__temp"),D=document.querySelector(".humidity__text"),x=document.querySelector(".wind__text"),E=async function(){e.style.display="block",s.style.display="flex";try{S.classList.add("spinner-class");let t=await $("Inverness");if(!t)throw Error("Something went wrong with the data!");S.classList.remove("spinner-class"),S.src=t.current.condition.icon,v.textContent=`${t.current.temp_c}\xb0C`,D.textContent=`${t.current.humidity}%`,x.textContent=`${t.current.wind_mph} mph`}catch(t){console.error(t)}},$=async function(t){try{let e=await fetch(`http://api.weatherapi.com/v1/current.json?key=9b3d812c470e4cc4abf95058240901&q=${t}&aqi=no`);if(!e.ok)throw Error("Network response was not OK");let a=await e.json();return console.log(a),a}catch(t){console.error("Something went wrong here ..."),console.error(t)}},q=function(){U=JSON.parse(localStorage.getItem("profile")),localStorage.getItem("profile")?(c.placeholder=U.username,i.placeholder=U.location):(c.placeholder="Username",i.placeholder="Location"),e.style.display="block",l.style.display="flex"};m.addEventListener("click",function(){let t={username:localStorage.getItem("profile")&&""===c.value?U.username:c.value,location:localStorage.getItem("profile")&&""===i.value?U.location:i.value};localStorage.setItem("profile",JSON.stringify(t)),te(),e.style.display="none",l.style.display="none",c.value="",i.value=""}),p.forEach(t=>{t.addEventListener("click",function(){e.style.display="none",a.style.display="none",n.style.display="none",o.style.display="none",l.style.display="none"})}),h.forEach(t=>{t.addEventListener("click",function(){e.style.display="none",a.style.display="none",n.style.display="none",o.style.display="none",Q()})}),_.addEventListener("click",function(){e.style.display="none",s.style.display="none"});const w=document.querySelector(".organiser__dates"),L=document.getElementById("month-year"),M=document.querySelector(".month__button--previous"),C=document.querySelector(".month__button--next"),I=document.querySelector(".profile__avatar"),T=document.querySelector(".profile__username"),A=document.querySelector(".profile__location"),N=document.querySelector(".profile__weather-img"),O=document.querySelector(".profile__weather-text"),J=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];let H=new Date,j=new Date().getDate(),F=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[],U=localStorage.getItem("profile")?JSON.parse(localStorage.getItem("profile")):[];const K={},Y=function(){K.day=H.getDay(),K.month=H.getMonth(),K.year=H.getFullYear(),K.daysInMonth=new Date(K.year,K.month+1,0).getDate(),K.firstDayOfMonth=new Date(K.year,K.month,1),K.dateString=K.firstDayOfMonth.toLocaleDateString("en-UK",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),K.paddingDays=J.indexOf(K.dateString.split(", ")[0])},B=function(t,e){let a=F.filter(e=>e.taskDate===t&&K.month===e.taskMonth);return a[e]&&a[e].taskMonth===K.month?`${a[e].taskTitle}`:""},W=function(t){return F.some(e=>e.taskDate===t)?`<button class="tasks__btn tasks__btn--edit" aria-label="button to edit existing tasks for this date" data-date="${t}"><i class="fa-solid fa-pen-to-square"></i></button>`:""},z=function(t){return F.some(e=>e.taskDate===t)?`<button class="tasks__btn tasks__btn--delete" aria-label="button to delete some tasks for this date" data-date="${t}"><i class="fa-solid fa-trash"></i></button>`:""},G=function(){let t="";for(let n=1;n<=K.paddingDays+K.daysInMonth;n++)if(n>K.paddingDays){var e,a;t+=`
      <div class="tasks">
          <div class="tasks__date${n-K.paddingDays===j&&K.month===new Date().getMonth()?"--current":""}"><span>${n-K.paddingDays}</span></div>
          <div class="tasks__divider">
            ${(e=n-K.paddingDays)===j?`<button class="tasks__btn tasks__btn--weather" aria-label="button to see current weather for this date" data-date="${e}"><i class="fa-solid fa-cloud-sun"></i></button>`:""}
            ${(a=n-K.paddingDays)<j?"":`<button class="tasks__btn tasks__btn--add" aria-label="button to add task for this date" data-date="${a}"><i class="fa-solid fa-plus"></i></button>`}
            ${W(n-K.paddingDays)}
            ${z(n-K.paddingDays)}
          </div>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-1-${n-K.paddingDays}">
          </div>
          <label class="tasks__todo" for="task-1" data-task="task-1-${n-K.paddingDays}">${B(n-K.paddingDays,0)?B(n-K.paddingDays,0):""}</label>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-2-${n-K.paddingDays}">
          </div>
          <label class="tasks__todo" for="task-2" data-task="task-2-${n-K.paddingDays}">${B(n-K.paddingDays,1)?B(n-K.paddingDays,1):""}</label>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-3-${n-K.paddingDays}">
          </div>
          <label class="tasks__todo" for="task-3" data-task="task-3-${n-K.paddingDays}">${B(n-K.paddingDays,2)?B(n-K.paddingDays,2):""}</label>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-4-${n-K.paddingDays}">
          </div>
          <label class="tasks__todo" for="task-4" data-task="task-4-${n-K.paddingDays}">${B(n-K.paddingDays,3)?B(n-K.paddingDays,3):""}</label>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-5-${n-K.paddingDays}">
          </div>
          <label class="tasks__todo" for="task-5" data-task="task-5-${n-K.paddingDays}">${B(n-K.paddingDays,4)?B(n-K.paddingDays,4):""}</label>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-6-${n-K.paddingDays}">
          </div>
          <label class="tasks__todo" for="task-6" data-task="task-6-${n-K.paddingDays}">${B(n-K.paddingDays,5)?B(n-K.paddingDays,5):""}</label>
        </div>
      `}else t+=`
      <div class="padding"></div>
      `;w.innerHTML="",w.insertAdjacentHTML("afterbegin",t)},P=function(){L.textContent=`${new Intl.DateTimeFormat("en-UK",{month:"long"}).format(H)} ${H.getFullYear()}`},Q=function(){F=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[],P(),Y(),G(),R(),Z()};M.addEventListener("click",function(){H=0===H.getMonth()?new Date(K.year-1,11):new Date(K.year,K.month-1),Q()}),C.addEventListener("click",function(){H=11===H.getMonth()?new Date(K.year+1,0):new Date(K.year,K.month+1),Q()});const R=function(){let e=document.querySelectorAll(".tasks__btn--add"),a=document.querySelectorAll(".tasks__btn--edit"),n=document.querySelectorAll(".tasks__btn--delete"),o=document.querySelectorAll(".tasks__btn--weather");e.forEach(e=>e.addEventListener("click",function(e){t=e.target.closest(".tasks__btn--add").dataset.date,f()})),a.forEach(e=>{e.addEventListener("click",function(e){t=e.target.closest(".tasks__btn--edit").dataset.date,b(),V()})}),n.forEach(e=>{e.addEventListener("click",function(e){t=e.target.closest(".tasks__btn--delete").dataset.date,g(),X()})}),o.forEach(e=>{e.addEventListener("click",function(e){t=e.target.closest(".tasks__btn--weather").dataset.date,E()})})},V=function(){let e,a;let n=document.querySelectorAll(".edit-task-btn"),o=document.querySelectorAll(".modal__task-input");n.forEach(n=>{n.addEventListener("click",()=>{"Edit"===n.textContent?(n.textContent="Save",o.forEach(t=>{n.dataset.task===t.dataset.task&&t.hasAttribute("readonly")&&(e=t.value,t.removeAttribute("readonly"))})):"Save"===n.textContent&&(n.textContent="Edit",o.forEach(o=>{if(n.dataset.task===o.dataset.task&&!o.hasAttribute("readonly")){a=o.value;let n=F.map(n=>n.taskDate!==Number(t)&&n.taskMonth===K.month||n.taskDate===Number(t)&&n.taskTitle!==e&&n.taskMonth===K.month?n:n.taskDate===Number(t)&&n.taskTitle===e&&n.taskMonth===K.month?(n.taskTitle=a,n):void 0);o.setAttribute("readonly","readonly"),localStorage.setItem("tasks",JSON.stringify(n))}}))})})},X=function(){let e=document.querySelectorAll(".delete-task-btn"),a=document.querySelectorAll(".modal__task-input"),n=[];e.forEach(e=>{e.addEventListener("click",()=>{"Delete"===e.textContent?e.textContent="Confirm":"Confirm"===e.textContent&&(e.textContent="Delete",a.forEach(a=>{e.dataset.task===a.dataset.task&&n.push(a.value);let o=F.filter(e=>{if(e.taskDate!==Number(t)&&e.taskMonth===K.month||e.taskDate===Number(t)&&!n.some(t=>t===e.taskTitle)&&e.taskMonth===K.month)return e;if(e.taskDate===Number(t)&&n.some(t=>t===e.taskTitle)&&e.taskMonth===K.month)return});localStorage.setItem("tasks",JSON.stringify(o))}))})})},Z=function(){let t=document.querySelectorAll('input[type="checkbox"]'),e=document.querySelectorAll(".tasks__todo");t.forEach(t=>t.addEventListener("change",function(){this.checked?e.forEach(t=>{t.dataset.task===this.id&&(t.style.opacity=.5,t.style.textDecoration="line-through",tt(this.parentElement.nextElementSibling.textContent,!0))}):e.forEach(t=>{t.dataset.task===this.id&&(t.style.opacity=1,t.style.textDecoration="none",tt(this.parentElement.nextElementSibling.textContent,!1))})})),t.forEach(t=>{let a=t.parentElement.nextElementSibling.textContent;F.forEach(n=>{n.taskTitle===a&&!0===n.checked&&(t.setAttribute("checked",""),e.forEach(t=>{t.textContent===a&&(t.style.opacity=.5,t.style.textDecoration="line-through")}))})})},tt=function(t,e){F.forEach(a=>{a.taskTitle===t&&(a.checked=e,localStorage.setItem("tasks",JSON.stringify(F)))})};I.addEventListener("click",function(){q()});const te=function(){U=JSON.parse(localStorage.getItem("profile")),localStorage.getItem("profile")?(T.textContent=U.username,A.textContent=U.location):(T.textContent="User",A.textContent="Location")},ta=async function(){try{N.classList.add("spinner-class");let t=await $("Inverness");if(!t)throw Error("Something went wrong with the data!");N.classList.remove("spinner-class"),N.src=t.current.condition.icon,O.textContent=`${t.current.temp_c}\xb0C`}catch(t){console.error(t)}};te(),ta(),Y(),P(),G(),R(),Z();
//# sourceMappingURL=index.8ba6935d.js.map
