(()=>{"use strict";var t={p:""};t.p;class e{constructor(t){if(!t)throw Error("Элемент не найден");this.parentEl=t,this.page=document.createElement("div")}init(){this.page.classList.add("collapse"),this.page.innerHTML='<div class="collapse-container">\n                      <div class="collapse-header">\n                        <div class="btn-box">\n                          <button class="collapse-btn">Collapse</button>\n                        </div>\n                        <div class="header-container hidden">\n                          <div class="header-content">\n                            <p class="header-title"></p>\n                          </div>\n                        </div>\n                      </div>\n                      <div class="collapse-content">\n                        <p class="content-title">Copy</p>\n                      </div>\n                    </div>\n',this.parentEl.prepend(this.page);document.querySelector(".header-title").textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fugit provident tenetur unde, architecto, dolorem itaque reiciendis eos porro obcaecati facilis omnis rem aperiam? Et fugit eveniet, alias iusto voluptatem iste tempore nam laudantium laboriosam maxime excepturi, ullam numquam voluptate dolores minima non, exercitationem placeat saepe. Totam quod aliquam beatae?",this.collapseBtn=this.parentEl.querySelector(".collapse-btn"),this.headerContainer=this.parentEl.querySelector(".header-container")}}class a{static animate(t){let{timing:e,draw:a,duration:i}=t;const n=performance.now();requestAnimationFrame((function t(s){let o=(s-n)/i;o>1&&(o=1);const l=e(o);a(l),o<1&&requestAnimationFrame(t)}))}static makeEaseOut(t){return function(e){return 1-t(1-e)}}static linear(t){return t}static quad(t){return t**2}static bounce(t){for(let e=0,a=1;;e+=a,a/=2)if(t>=(7-4*e)/11)return-(((11-6*e-11*t)/4)**2)+a**2}static animationOpacity(t,e){a.animate({duration:e,timing:a.makeEaseOut(a.linear),draw(e){t.style.opacity=e}})}static animationOpacityReverse(t,e){a.animate({duration:e,timing:a.makeEaseOut(a.linear),draw(e){t.style.opacity=1-e}})}}class i{constructor(t){if(!t)throw Error("Элемент не найден");this.parentEl=t,this.doubleСlick=!0,this.page=document.createElement("div")}init(){this.page.classList.add("chat"),this.page.innerHTML='<div class="chat-container">\n                    <div class="chat-box">\n                      <button class="open-btn"></button>\n                    </div>\n                    <div class="modal modal-chat hidden">\n                      <div class="modal-title">Напишите нам</div>\n                      <textarea name="text" cols="30" rows="10" class="input-textarea" required></textarea>\n                      <div class="btn-box">\n                        <button class="send-btn">Отправить</button>\n                      </div>\n                      <button class="close-btn">X</button>\n                    </div>\n                  </div>\n',this.parentEl.append(this.page),this.chatContainer=this.parentEl.querySelector(".chat-container"),this.openBtn=this.parentEl.querySelector(".open-btn"),this.activeModal=this.parentEl.querySelector(".modal-chat"),this.inputTextarea=this.parentEl.querySelector(".input-textarea"),this.sendbtn=this.parentEl.querySelector(".send-btn"),this.closeBtn=this.parentEl.querySelector(".close-btn")}openModal(t){this.activeModal.classList.remove("hidden"),this.closeBtn.addEventListener("click",(t=>this.closeModal(t))),this.inputTextarea.addEventListener("submit",t)}closeModal(t){t.preventDefault(),this.doubleСlick&&(this.doubleСlick=!1,a.animationOpacityReverse(this.activeModal,300),this.inputTextarea.value="",setTimeout((()=>{this.activeModal.classList.add("hidden"),this.openBtn.classList.remove("hidden"),a.animationOpacity(this.openBtn,300),this.doubleСlick=!0}),300))}}const n=new class{constructor(){this.container=null,this.doubleСlick=!0}bindToDOM(t){if(!(t instanceof HTMLElement))throw new Error('Контейнер не является элементом "HTMLElement"');this.container=t,this.pageCollapse=new e(this.container),this.pageChat=new i(this.container)}init(){this.pageCollapse.init(),this.pageChat.init(),this.getHandler()}getHandler(){this.pageCollapse.collapseBtn.addEventListener("click",(t=>this.onCollapse(t))),this.pageChat.openBtn.addEventListener("click",(t=>this.onChat(t)))}onCollapse(t){t.preventDefault(),setTimeout((()=>this.pageCollapse.collapseBtn.blur()),300),this.pageCollapse.headerContainer.classList.contains("hidden")?(this.pageCollapse.headerContainer.classList.remove("hidden"),this.pageCollapse.headerContainer.classList.add("active"),setTimeout((()=>this.pageCollapse.headerContainer.classList.remove("active")),10)):(this.pageCollapse.headerContainer.classList.add("active"),setTimeout((()=>{this.pageCollapse.headerContainer.classList.remove("active"),this.pageCollapse.headerContainer.classList.add("hidden")}),500))}onChat(t){t.preventDefault(),this.doubleСlick&&(this.doubleСlick=!1,this.pageChat.openModal(),a.animationOpacityReverse(this.pageChat.openBtn,300),setTimeout((()=>{this.pageChat.openBtn.classList.add("hidden"),a.animationOpacity(this.pageChat.activeModal,300),this.doubleСlick=!0}),300))}};n.bindToDOM(document.querySelector(".page")),n.init()})();