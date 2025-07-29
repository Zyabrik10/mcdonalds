const e=[{date:new Date(2025,7,1,14),shiftTime:9},{date:new Date(2025,7,3,11),shiftTime:9},{date:new Date(2025,7,4,14),shiftTime:9},{date:new Date(2025,7,6,10),shiftTime:9},{date:new Date(2025,7,7,14),shiftTime:9},{date:new Date(2025,7,8,12),shiftTime:9},{date:new Date(2025,7,9,12),shiftTime:9},{date:new Date(2025,7,11,14),shiftTime:9},{date:new Date(2025,7,12,14),shiftTime:9},{date:new Date(2025,7,14,10),shiftTime:9},{date:new Date(2025,7,15,14),shiftTime:9},{date:new Date(2025,7,18,13),shiftTime:9},{date:new Date(2025,7,19,10),shiftTime:9},{date:new Date(2025,7,20,14),shiftTime:9},{date:new Date(2025,7,25,14),shiftTime:9},{date:new Date(2025,7,26,14),shiftTime:9},{date:new Date(2025,7,27,14),shiftTime:9},{date:new Date(2025,7,28,11),shiftTime:9},{date:new Date(2025,7,30,14),shiftTime:9}],t=[{date:new Date(2025,7,25,9),shiftTime:7},{date:new Date(2025,7,26,14),shiftTime:9},{date:new Date(2025,7,27,14),shiftTime:8},{date:new Date(2025,7,30,14),shiftTime:8},{date:new Date(2025,7,31,13),shiftTime:8}],a=document.querySelector("table tbody"),i=new Date,n=new Date(i.getFullYear(),i.getMonth()+1,0),d=new Date(i.getFullYear(),i.getMonth(),1);console.log();let s="";for(let e=1;e<d.getDay();e++)s+="<td class='empty'></td>";a.insertAdjacentHTML("beforeend",`<tr>${s}</tr>`);const r=a.querySelector("tr");let f="",D=1;for(let e=0;e<7-(d.getDay()-1);e++)f+=h(new Date(i.getFullYear(),i.getMonth(),D++));r.insertAdjacentHTML("beforeend",`${f}`),f=[];for(let e=0;e<=n.getDate();e++){let t=new Date(i.getFullYear(),i.getMonth(),e+D);if(1===t.getDay()&&e+D+7>n.getDate()){D=e+D;break}f.push(t),(e+D+1)%7==0&&(a.insertAdjacentHTML("beforeend",`<tr>
        ${f.map(e=>h(e)).join("\n")}
      </tr>`),f=[])}f="";for(let e=0;e+D<=n.getDate();e++)f+=h(new Date(i.getFullYear(),i.getMonth(),e+D));function h(a){let i=e.filter(({date:e})=>e.getDate()===a.getDate())[0],n=t.filter(({date:e})=>e.getDate()===a.getDate())[0];return`<td class='${!i&&!n?"green":""}'>
    <p>${a.getDate()}</p>
    <div>
        <p>
            Alex1 | 
            ${void 0!==i?i.date.getHours()+1:""}
            -
            ${void 0!==i?i.date.getHours()+1+i.shiftTime+":15":""} 
            | ${void 0!==i?i.shiftTime:""}
        </p>
    </div>
    <div>
        <p>
        Alex2 |
            ${void 0!==n?n.date.getHours()+1:""}
            -
            ${void 0!==n?n.date.getHours()+1+n.shiftTime+":15":""} 
            | ${void 0!==n?n.shiftTime:""}
        </p>
    </div>
    </td>`}a.insertAdjacentHTML("beforeend",`<tr>${f}</tr>`);const o=document.querySelector("caption");let m=e.reduceRight((e,t)=>e+t.shiftTime,0),l=t.reduceRight((e,t)=>e+t.shiftTime,0);o.innerHTML=`Alex1 - Shift time = ${m} Salary = ${25*m}z\u{142} <br> Alex2 - Shift time = ${l} Salary = ${25*l}z\u{142}`;
//# sourceMappingURL=mcdonalds.cf036b68.js.map
