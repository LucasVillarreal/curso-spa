(()=>{"use strict";const a="https://rickandmortyapi.com/api/character/",n=async n=>{const s=n?`${a}${n}`:a;try{const a=await fetch(s);return await a.json()}catch(a){console.log("Fetch error ",a)}},s=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",e=async()=>{const a=await s(),e=await n(a);let t=[];for(let a=1;a<=e.info.pages;a++)t.push(a);let c=0;return`\n    <div class="characters-count">\n      Characters: <span>${e.info.count}</span>\n    </div>\n    <div class="characters">\n      ${e.results.map((a=>`\n      <article class="character-item">\n        <a href="#/${a.id}/">\n          <img src="${a.image}" height="250" alt="${a.name}">\n          <h3>${a.name}</h3>\n        </a>\n      </article>\n      `)).join("")}\n    </div>\n    <div class="pages-content">\n        <div class="pages-link">\n          <h3>Pages:</h3>\n            ${t.map((()=>`<a href="#/?page=${++c}/">${c}</a>`)).join("")}\n        </div>\n    </div>\n    `},t=()=>'\n    <div class="error404">\n      <h2>Error 404</h2>\n    </div>\n  ',c={"/":e,"/:id":async()=>{const a=s(),e=await n(a);let t=e.status;return`\n    <div class="characters-inner">\n      <article class="characters-card">\n        <img src="${e.image}" alt="${e.name}">\n      </article>\n      <article class="characters-card--description">\n        <div class="character-detail">\n          <h2 class="character-card--name">${e.name}</h2>\n          <p class="character-card--status">\n            <span class="character-status">\n            ${"Alive"===t?'<span class="character-status--live"></span>':"Dead"===t?'<span class="character-status--dead"></span>':'<span class="character-status--unknown"></span>'}\n            ${e.status} - ${e.species} - ${e.gender}\n          </span>\n          </p>\n        </div>\n      <p class="card-detail">Episodes</p>\n      <h4>${e.episode.length}</h4>\n      <p class="card-detail">Origin</p>\n      <h4><a href="${e.origin.url}">${e.origin.name}</a></h4>\n      <p class="card-detail">Last Location</p>\n      <h4><a href="${e.location.url}">${e.location.name}</a></h4>\n  `},"/contact":"Contact","/:pages":e},r=async()=>{const a=document.getElementById("header"),n=document.getElementById("content");a.innerHTML=await'\n    <div class="header-main">\n      <div class="header-logo">\n        <h1>\n          <a href="/curso-spa">\n          Rick & Morty\n          </a>\n        </h1>\n      </div>\n\n      <div class="header-nav">\n        <a href="#/about/">\n          About\n        </a>\n    </div>\n  ';let e=s(),r=await(a=>{if("about"!=a){if("/"===a)return a;if(a.length<=3)return"/:id";if(a.includes("page"))return"/:pages"}return"/"+a})(e),i=c[r]?c[r]:t;n.innerHTML=await i()};window.addEventListener("load",r),window.addEventListener("hashchange",r)})();