function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,_toPropertyKey(i.key),i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var n=_toPrimitive(t,"string");return"symbol"==typeof n?n:String(n)}function _toPrimitive(t,n){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,n||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{Ew7R:function(t,n,e){"use strict";e.d(n,"a",(function(){return g}));var i=e("fXoL"),o=e("tyNb"),a=e("v0EB"),r=e("ofXK");function c(t,n){if(1&t){var e=i.Tb();i.Sb(0,"div",3),i.Sb(1,"i",4),i.ac("click",(function(){return i.tc(e),i.ec().goBack()})),i.Rb(),i.Rb()}}function s(t,n){1&t&&(i.Sb(0,"div",5),i.Ob(1,"div",6),i.Rb())}function b(t,n){1&t&&(i.Sb(0,"span"),i.Ac(1,","),i.Rb())}function l(t,n){if(1&t&&(i.Sb(0,"span",20),i.Ac(1),i.zc(2,b,2,0,"span",21),i.Rb()),2&t){var e=i.ec(),o=e.$implicit,a=e.index,r=i.ec().$implicit;i.Bb(1),i.Bc(o.ProductName),i.Bb(1),i.jc("ngIf",r.Products.length>=10&&a<9||r.Products.length<10&&a<r.Products.length-1)}}function d(t,n){if(1&t&&(i.Sb(0,"span"),i.zc(1,l,3,2,"span",19),i.Rb()),2&t){var e=n.index;i.Bb(1),i.jc("ngIf",e<10)}}function p(t,n){if(1&t){var e=i.Tb();i.Sb(0,"div",7),i.Sb(1,"div",8),i.ac("click",(function(){i.tc(e);var t=n.$implicit;return i.ec().companyData(t.CompanyId)})),i.Sb(2,"a",9),i.Sb(3,"h5",10),i.Ac(4),i.Rb(),i.Sb(5,"span",11),i.Ob(6,"i",12),i.Sb(7,"span",13),i.Ac(8),i.Rb(),i.Rb(),i.Sb(9,"h6",14),i.Ac(10),i.Rb(),i.Sb(11,"div",15),i.zc(12,d,2,1,"span",16),i.Rb(),i.Sb(13,"h5",17),i.Ob(14,"i",18),i.Ac(15),i.Rb(),i.Rb(),i.Rb(),i.Rb()}if(2&t){var o=n.$implicit;i.Bb(4),i.Bc(o.Company),i.Bb(4),i.Bc(o.Rating),i.Bb(2),i.Bc(o.BusinessType),i.Bb(2),i.jc("ngForOf",o.Products),i.Bb(3),i.Dc(" ",o.City," \xa0 ",o.State,"")}}var g=function(){var t=function(){function t(n,e,i,o){_classCallCheck(this,t),this.route=n,this.commonService=e,this.activatedRoute=i,this.location=o,this.matchUrl=window.location.pathname}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.commonService.sharedCatCompanylist.subscribe((function(n){t.companylist=n,console.log("res===",n),console.log("res22===")}),(function(t){return console.log(t)}))}},{key:"companyData",value:function(t){this.route.navigate(["/company-data"],{queryParams:{id:t}})}},{key:"goBack",value:function(){this.location.back()}}]),t}();return t.\u0275fac=function(n){return new(n||t)(i.Nb(o.c),i.Nb(a.a),i.Nb(o.a),i.Nb(r.n))},t.\u0275cmp=i.Hb({type:t,selectors:[["app-company-detail"]],decls:3,vars:3,consts:[["class","menuDiv",4,"ngIf"],["class","spinner-overlay",4,"ngIf"],["class","row mt-5 compny_Div company_listing_wrapper",4,"ngFor","ngForOf"],[1,"menuDiv"],["aria-hidden","true",1,"fa","fa-arrow-left","mx-4","mt-2","pt-2","backArr",3,"click"],[1,"spinner-overlay"],[1,"spinner"],[1,"row","mt-5","compny_Div","company_listing_wrapper"],[1,"col-12","bg_wrapper",3,"click"],[2,"text-decoration","none"],[1,"text-start","category_heading"],[1,"float-end","rating_wrapper"],["aria-hidden","true",1,"fa","fa-star-o","text-warning","mx-1"],[1,"rate"],[1,"cat_type"],[1,"mx-2","descrip",2,"word-break","break-all"],[4,"ngFor","ngForOf"],[1,"city","mx-2","my-2"],["aria-hidden","true",1,"fa","fa-map-marker"],["class","category_details",4,"ngIf"],[1,"category_details"],[4,"ngIf"]],template:function(t,n){1&t&&(i.zc(0,c,2,0,"div",0),i.zc(1,s,2,0,"div",1),i.zc(2,p,16,6,"div",2)),2&t&&(i.jc("ngIf","/home/company/company-details"===n.matchUrl&&"home/product/product-create"!==n.matchUrl),i.Bb(1),i.jc("ngIf",!n.companylist||0===n.companylist.length),i.Bb(1),i.jc("ngForOf",n.companylist))},directives:[r.t,r.s],styles:[".company_listing_wrapper[_ngcontent-%COMP%]   .bg_wrapper[_ngcontent-%COMP%]{background-color:#f0eded;border-radius:15px;height:-moz-max-content;height:max-content;padding:15px;position:relative;width:98%;cursor:pointer}.company_listing_wrapper[_ngcontent-%COMP%]   .bg_wrapper[_ngcontent-%COMP%]   h5.category_heading[_ngcontent-%COMP%]{font-weight:700;font-size:18px;color:#000;text-transform:capitalize;color:#204863;margin-bottom:5px}.company_listing_wrapper[_ngcontent-%COMP%]   .bg_wrapper[_ngcontent-%COMP%]   .rating_wrapper[_ngcontent-%COMP%]{background-color:#204863;border-top-right-radius:15px;border-bottom-left-radius:15px;font-weight:700;position:absolute;top:0;right:0;padding:5px 7px}.company_listing_wrapper[_ngcontent-%COMP%]   .bg_wrapper[_ngcontent-%COMP%]   .rating_wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-weight:700;font-size:12px}.company_listing_wrapper[_ngcontent-%COMP%]   .bg_wrapper[_ngcontent-%COMP%]   .rating_wrapper[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]{font-size:12px;color:var(--thm-white)}.company_listing_wrapper[_ngcontent-%COMP%]   .bg_wrapper[_ngcontent-%COMP%]   .cat_type[_ngcontent-%COMP%]{font-size:15px;color:#878d91;margin-bottom:5px}.company_listing_wrapper[_ngcontent-%COMP%]   .bg_wrapper[_ngcontent-%COMP%]   .category_details[_ngcontent-%COMP%]{font-size:14px;color:var(--thm-black)}.category_main_wrapper[_ngcontent-%COMP%]   .left_side_icon_listing[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column}.column_bg_border[_ngcontent-%COMP%]{background-color:var(--thm-white);border-radius:10px;padding:15px;border:1px solid #bfbfbf;box-shadow:1px 1px 15px 1.5px rgba(121,119,119,.15)}.category_main_wrapper[_ngcontent-%COMP%]   .left_side_icon_listing[_ngcontent-%COMP%]   .hexagon_img[_ngcontent-%COMP%]{margin-bottom:15px;width:115px;aspect-ratio:1.15;-o-object-fit:cover;object-fit:cover;cursor:pointer;-webkit-clip-path:polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);clip-path:polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);transition:1s ease;background:var(--thm-color);background:linear-gradient(322deg,#6abbf1 6%,#327eac 20%,#081d2a 96%);background:-moz-linear-gradient(322deg,#6abbf1 6%,#327eac 20%,#081d2a 96%);display:flex;align-items:center;justify-content:center;text-align:center;position:relative}.category_main_wrapper[_ngcontent-%COMP%]   .left_side_icon_listing[_ngcontent-%COMP%]   .hexagon_img[_ngcontent-%COMP%]:last-child{margin-bottom:0}.category_main_wrapper[_ngcontent-%COMP%]   .left_side_icon_listing[_ngcontent-%COMP%]   .hexagon_img[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.content_heading[_ngcontent-%COMP%], .content_medium_heading[_ngcontent-%COMP%]{font-size:21px;color:var(--thm-black);padding:0;margin:0;line-height:1.5;font-weight:700;text-transform:uppercase}.content_medium_heading[_ngcontent-%COMP%]{font-size:17.5px}.category_main_wrapper[_ngcontent-%COMP%]   .scroll_slider[_ngcontent-%COMP%]{height:40vh;overflow:hidden scroll}.category_main_wrapper[_ngcontent-%COMP%]   .scroll_slider[_ngcontent-%COMP%]::-webkit-scrollbar{-webkit-appearance:scrollbartrack-vertical;width:7px;background-color:#a5a5a5;margin-left:6px}.category_main_wrapper[_ngcontent-%COMP%]   .scroll_slider[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:5px;background-color:#215578;box-shadow:0 0 1px hsla(0,0%,100%,.5)}@media screen and (min-width:991.5px){.category_main_wrapper[_ngcontent-%COMP%]{margin-bottom:80px}}@media screen and (min-width:290px) and (max-width:767px){.column_bg_border[_ngcontent-%COMP%]   .advertiement_slider[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:110px!important}.catSlider_small_device[_ngcontent-%COMP%]{display:block}.advertiement_main_slider[_ngcontent-%COMP%]{margin-bottom:0;padding-bottom:0}.content_heading[_ngcontent-%COMP%]{font-size:20px!important;text-align:left}.category_main_wrapper[_ngcontent-%COMP%]   .scroll_slider[_ngcontent-%COMP%]{height:65vh;overflow:hidden scroll}.category_main_wrapper[_ngcontent-%COMP%]{margin:65px 0 80px}.category_main_wrapper[_ngcontent-%COMP%]   .set-to-top[_ngcontent-%COMP%]{position:sticky;top:65px;background-color:var(--thm-white);left:0;z-index:3}.column_bg_border[_ngcontent-%COMP%]{background-color:transparent;border:1px solid transparent;box-shadow:none;padding:0}.category_main_wrapper[_ngcontent-%COMP%]   .scroll_slider[_ngcontent-%COMP%]::-webkit-scrollbar{-webkit-appearance:scrollbartrack-vertical;width:0;background-color:#a5a5a5;margin-left:6px}.category_main_wrapper[_ngcontent-%COMP%]   .scroll_slider[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:5px;background-color:#215578;box-shadow:0 0 1px hsla(0,0%,100%,.5)}}.spinner-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;z-index:9999;width:100%;height:100%;background-color:hsla(0,0%,100%,.5);display:flex;justify-content:center;align-items:center}.spinner[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%;border:5px solid #f3f3f3;border-top-color:#215578;animation:spin 1s linear infinite}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]}),t}()},pYoV:function(t,n,e){"use strict";e.r(n),e.d(n,"CompanyModule",(function(){return v}));var i=e("ofXK"),o=e("tyNb"),a=e("Ew7R"),r=e("fXoL"),c=e("v0EB");function s(t,n){if(1&t&&(r.Sb(0,"div",45),r.Sb(1,"div",46),r.Ob(2,"img",47),r.Rb(),r.Sb(3,"div",48),r.Sb(4,"a",49),r.Sb(5,"h4",50),r.Ac(6),r.Rb(),r.Rb(),r.Sb(7,"p",51),r.Ac(8," Rate Us "),r.Sb(9,"span",52),r.Ob(10,"i",53),r.Ac(11,"4.6 "),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&t){var e=n.$implicit;r.Bb(4),r.lc("href","company-info/:",e.id,"",r.vc),r.Bb(2),r.Cc("",e.company_name,"Pioma Chemicals")}}var b,l=function(){return{exact:!0}},d=((b=function(){function t(n,e){_classCallCheck(this,t),this.activatedRoute=n,this.apiService=e,this.companyId=0,this.classList=""}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.activatedRoute.params.subscribe((function(n){t.companyId=n.id})),this.apiService.viewCompanyData(this.companyId).subscribe((function(n){t.companyData=n}))}},{key:"openMenu",value:function(){this.classList="nav--open"}}]),t}()).\u0275fac=function(t){return new(t||b)(r.Nb(o.a),r.Nb(c.a))},b.\u0275cmp=r.Hb({type:b,selectors:[["app-company-info"]],decls:141,vars:3,consts:[[1,"row","navs"],[1,"col-4"],[1,"menuDiv",3,"click"],["aria-hidden","true",1,"fa","fa-bars","mx-4","mt-2"],["src","../../../../assets/images/Brand_logo.png","alt","OrgLogo",1,"img-fluid","logimg","mt-2"],["src","/assets/images/share_PNG27.png","alt","Share",2,"width","18px","margin-left","50px","height","18px","float","end"],["aria-hidden","true",1,"fa","fa-bookmark-o","mt-2"],[1,"sub_div"],["class","row compTitle w-100 mx-4",4,"ngFor","ngForOf"],[1,"info_nav"],[1,"nav"],[1,"nav-item"],["href","/company-data#aboutus","routerLinkActive","active-link",1,"nav-link",3,"routerLinkActiveOptions"],["href","/company-data#product","routerLinkActive","active-link",1,"nav-link"],["href","/company-data#application","routerLinkActive","active-link",1,"nav-link"],["href","/company-data#contact","routerLinkActive","active-link",1,"nav-link"],[1,"Parent_Div"],["data-spy","scroll","data-target","#navbar-example2","data-offset","0",1,"all_cont"],["id","aboutus"],[1,"mx-4","my-4","desc","w-100","mt-1"],["id","product"],[1,"h5","heading","mt-2","mx-2"],[1,"prdct_name","w-100"],[1,"mx-3"],["id","contact"],[1,"h5","heading","mt-2","mx-2","mt-5"],[1,"cont_all"],[1,"row","w-100"],[1,"col-1","mt-3"],["aria-hidden","true",1,"fa","fa-user-circle","mx-2"],[1,"col-10","name","mt-4"],[1,"mang","mt-3"],["aria-hidden","true",1,"fa","fa-envelope-square","text-primary"],[1,"add"],[2,"line-height","1.2"],[1,"star","mx-2","mt-4"],[1,"mx-1"],["aria-hidden","true",1,"fa","fa-star","text-warning","mx-1"],[1,"d-flex","iconBox","mt-4"],[1,"p-2"],["aria-hidden","true",1,"fa","fa-envelope-o"],[1,"p-2","flex-fill"],["aria-hidden","true",1,"fa","fa-phone"],["aria-hidden","true",1,"fa","fa-comments-o"],["aria-hidden","true",1,"fa","fa-share-alt"],[1,"row","compTitle","w-100","mx-4"],[1,"col-3"],["src","../../../../../assets/images/pioma-logo.png","alt","Company_Logo",1,"img-fluid","bg-dark"],[1,"col-9","comp_name"],[3,"href"],[1,"mt-0"],[2,"font-size","13px","font-weight","bold"],[1,"mt-2",2,"background-color","rgb(225, 245, 248)"],["aria-hidden","true",1,"fa","fa-star","text-warning","mt-2","mx-1"]],template:function(t,n){1&t&&(r.Sb(0,"div",0),r.Sb(1,"div",1),r.Sb(2,"div",2),r.ac("click",(function(){return n.openMenu()})),r.Ob(3,"i",3),r.Rb(),r.Rb(),r.Sb(4,"div",1),r.Ob(5,"img",4),r.Rb(),r.Sb(6,"div",1),r.Ob(7,"img",5),r.Ob(8,"i",6),r.Rb(),r.Rb(),r.Sb(9,"div",7),r.zc(10,s,12,2,"div",8),r.Sb(11,"div",9),r.Sb(12,"ul",10),r.Sb(13,"li",11),r.Sb(14,"a",12),r.Ac(15,"About Us"),r.Rb(),r.Rb(),r.Sb(16,"li",11),r.Sb(17,"a",13),r.Ac(18,"Products"),r.Rb(),r.Rb(),r.Sb(19,"li",11),r.Sb(20,"a",14),r.Ac(21,"Certification/Application"),r.Rb(),r.Rb(),r.Sb(22,"li",11),r.Sb(23,"a",15),r.Ac(24,"Contact Us"),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(25,"div",16),r.Sb(26,"div",17),r.Sb(27,"div",18),r.Sb(28,"p",19),r.Ac(29," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nesciunt eaque? Omnis at in ipsum dolore minus, totam commodi assumenda provident possimus eos eius quo laborum tenetur error nisi ducimus? Molestiae repudiandae soluta pariatur eaque doloribus, sed aut laudantium accusantium dolorum doloremque eos temporibus odio! Iste eius iure repellat, id numquam atque tenetur unde architecto, nemo consectetur vel cum accusamus blanditiis maxime deleniti. Corrupti perspiciatis dolore quia Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nesciunt eaque? Omnis at in ipsum dolore minus, totam commodi assumenda provident possimus eos eius quo laborum tenetur error nisi ducimus? Molestiae repudiandae soluta pariatur eaque doloribus, sed aut laudantium accusantium dolorum doloremque eos temporibus odio! Iste eius iure repellat, id numquam atque tenetur unde architecto, nemo consectetur vel cum accusamus blanditiis maxime deleniti. Corrupti perspiciatis dolore quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusamus non deserunt expedita illum quis aut numquam iusto temporibus tenetur? "),r.Rb(),r.Rb(),r.Sb(30,"div",20),r.Sb(31,"h5",21),r.Ac(32,"PRODUCTS"),r.Rb(),r.Sb(33,"table",22),r.Sb(34,"tr"),r.Sb(35,"li",23),r.Ac(36,"Alkalizing Agent"),r.Rb(),r.Rb(),r.Sb(37,"tr"),r.Sb(38,"li",23),r.Ac(39,"Anti-Acne"),r.Rb(),r.Rb(),r.Sb(40,"tr"),r.Sb(41,"li",23),r.Ac(42,"Anti-Aging"),r.Rb(),r.Rb(),r.Sb(43,"tr"),r.Sb(44,"li",23),r.Ac(45,"Anti-Bacterial"),r.Rb(),r.Rb(),r.Sb(46,"tr"),r.Sb(47,"li",23),r.Ac(48,"Anti-Dandruff"),r.Rb(),r.Rb(),r.Sb(49,"tr"),r.Sb(50,"li",23),r.Ac(51,"Anti-Fungal"),r.Rb(),r.Rb(),r.Sb(52,"tr"),r.Sb(53,"li",23),r.Ac(54,"Anti-Inflammatory"),r.Rb(),r.Rb(),r.Sb(55,"tr"),r.Sb(56,"li",23),r.Ac(57,"Anti-Microbial"),r.Rb(),r.Rb(),r.Sb(58,"tr"),r.Sb(59,"li",23),r.Ac(60,"Anti-Static & Softening Agent"),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(61,"div",24),r.Sb(62,"h5",25),r.Ac(63,"CONTACT US"),r.Rb(),r.Sb(64,"div",26),r.Sb(65,"div",27),r.Sb(66,"div",28),r.Ob(67,"i",29),r.Rb(),r.Sb(68,"div",30),r.Sb(69,"h5"),r.Ac(70,"MR.Doshi"),r.Rb(),r.Sb(71,"h5",31),r.Ac(72,"Manging Director"),r.Rb(),r.Rb(),r.Sb(73,"div",28),r.Ob(74,"i",32),r.Rb(),r.Rb(),r.Sb(75,"h5",33),r.Sb(76,"b"),r.Ac(77," Corporate office :"),r.Rb(),r.Ac(78," 101-103,"),r.Sb(79,"b",34),r.Ac(80,"Shyam Kamal 'D',Agarwal Market, Vile Parle(E),"),r.Rb(),r.Rb(),r.Sb(81,"h5",33),r.Sb(82,"b"),r.Ac(83," Mumbai -"),r.Rb(),r.Ac(84," 400\xa0057, India"),r.Rb(),r.Sb(85,"h5",33),r.Sb(86,"b"),r.Ac(87," Phone : "),r.Rb(),r.Ac(88," +91-22-4512000/2001"),r.Rb(),r.Sb(89,"h5",33),r.Sb(90,"b"),r.Ac(91," Mobile : "),r.Rb(),r.Ac(92," +91-93728\xa000045"),r.Rb(),r.Sb(93,"h5",33),r.Sb(94,"b"),r.Ac(95," Email : "),r.Rb(),r.Ac(96," product@pioma.net"),r.Rb(),r.Rb(),r.Sb(97,"h5",35),r.Ac(98,"Rating "),r.Rb(),r.Sb(99,"div",36),r.Ob(100,"i",37),r.Ob(101,"i",37),r.Ob(102,"i",37),r.Ob(103,"i",37),r.Ob(104,"i",37),r.Sb(105,"b"),r.Ac(106,"28"),r.Rb(),r.Rb(),r.Sb(107,"div",36),r.Ob(108,"i",37),r.Ob(109,"i",37),r.Ob(110,"i",37),r.Ob(111,"i",37),r.Sb(112,"b"),r.Ac(113,"10"),r.Rb(),r.Rb(),r.Sb(114,"div",36),r.Ob(115,"i",37),r.Ob(116,"i",37),r.Ob(117,"i",37),r.Sb(118,"b"),r.Ac(119,"20"),r.Rb(),r.Rb(),r.Sb(120,"div",36),r.Ob(121,"i",37),r.Ob(122,"i",37),r.Sb(123,"b"),r.Ac(124,"27"),r.Rb(),r.Rb(),r.Sb(125,"div",36),r.Ob(126,"i",37),r.Sb(127,"b"),r.Ac(128,"7"),r.Rb(),r.Rb(),r.Sb(129,"div",38),r.Sb(130,"div",39),r.Ob(131,"i",40),r.Ac(132," Send Mail "),r.Rb(),r.Sb(133,"div",41),r.Ob(134,"i",42),r.Ac(135," Call Now "),r.Rb(),r.Sb(136,"div",41),r.Ob(137,"i",43),r.Ac(138," Chat Now "),r.Rb(),r.Sb(139,"div",41),r.Ob(140,"i",44),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&t&&(r.Bb(10),r.jc("ngForOf",n.companyData),r.Bb(4),r.jc("routerLinkActiveOptions",r.oc(2,l)))},directives:[i.s,o.e],styles:[".Parent_Div[_ngcontent-%COMP%]{height:69vh;overflow-y:scroll;overflow-x:hidden;position:relative}.sub_div[_ngcontent-%COMP%]{position:fixed;background:url(background.436f1b7f0d214c2a8b8f.png)}.fa-arrow-left[_ngcontent-%COMP%]{font-size:15px}.compTitle[_ngcontent-%COMP%]{height:8vh;vertical-align:middle}img[_ngcontent-%COMP%]{height:8vh;width:100vw;background-repeat:no-repeat;background-size:cover}.comp_name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Pensum Sans;font-weight:700;text-align:center;font-size:22px}.fa-bookmark-o[_ngcontent-%COMP%]{font-size:15px;margin-left:15px}.info_nav[_ngcontent-%COMP%]{font-size:12px;font-family:Pensum Sans;margin:10px 5px}.nav-link[_ngcontent-%COMP%]{padding-left:5px;padding-right:5px;color:#8397a5}.nav-tabs[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .nav-link.active[_ngcontent-%COMP%]{font-weight:700}.all_cont[_ngcontent-%COMP%]{margin-top:155px}.desc[_ngcontent-%COMP%]{font-family:Pensum Sans;font-size:12px}.heading[_ngcontent-%COMP%]{font-weight:700;font-size:17px}.prdct_name[_ngcontent-%COMP%]{font-family:Pensum Sans;font-size:13px}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #d3d3d3}.cont_all[_ngcontent-%COMP%]{font-family:Pensum Sans}.fa-user-circle[_ngcontent-%COMP%]{color:#8397a5;font-size:17px}.name[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px}.name[_ngcontent-%COMP%]   .mang[_ngcontent-%COMP%], .name[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{line-height:.8;font-weight:700}.name[_ngcontent-%COMP%]   .mang[_ngcontent-%COMP%]{font-size:14px}.add_head[_ngcontent-%COMP%]{font-size:13px;font-weight:700}.add[_ngcontent-%COMP%], .add_head[_ngcontent-%COMP%]{margin-left:29px}.add[_ngcontent-%COMP%]{font-size:12px;line-height:1}.fa-envelope-square[_ngcontent-%COMP%]{font-size:18px}.star[_ngcontent-%COMP%]{font-size:12px;font-family:Pensum Sans}.share[_ngcontent-%COMP%], .star[_ngcontent-%COMP%]{font-weight:700}.share[_ngcontent-%COMP%]{font-size:13px;color:#214e6c}.share[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:2px}.iconBox[_ngcontent-%COMP%]{color:#214e6c;text-align:center;font-weight:700}"]}),b);function p(t,n){if(1&t&&(r.Sb(0,"div",1),r.Sb(1,"div",2),r.Sb(2,"div",3),r.Sb(3,"div",4),r.Ob(4,"img",5),r.Rb(),r.Sb(5,"div",6),r.Sb(6,"h2",7),r.Ac(7),r.Rb(),r.Sb(8,"p",8),r.Ac(9),r.Rb(),r.Rb(),r.Rb(),r.Sb(10,"div",3),r.Sb(11,"div",2),r.Sb(12,"div",3),r.Sb(13,"div",9),r.Sb(14,"div",10),r.Sb(15,"button",11),r.Ac(16,"View Profile"),r.Rb(),r.Ob(17,"i",12),r.Rb(),r.Rb(),r.Sb(18,"div",13),r.Sb(19,"div",10),r.Sb(20,"button",14),r.Ac(21,"Delete"),r.Rb(),r.Ob(22,"i",15),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&t){var e=n.$implicit;r.Bb(7),r.Bc(e.candidateName),r.Bb(2),r.Bc(e.description)}}var g,m,u,f,_=[{path:"company-details",component:a.a},{path:"lists",component:(m=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),m.\u0275fac=function(t){return new(t||m)},m.\u0275cmp=r.Hb({type:m,selectors:[["app-company-list"]],decls:2,vars:0,template:function(t,n){1&t&&(r.Sb(0,"p"),r.Ac(1,"company-list works!"),r.Rb())},styles:[""]}),m)},{path:"candidates",component:(g=function(){function t(){_classCallCheck(this,t),this.profiles=[{candidateName:"Kunal Rode",description:"Note that we don't provide utility classes for justified text."},{candidateName:"Kunal Rode",description:"Note that we don't provide utility classes for justified text."},{candidateName:"Kunal Rode",description:"Note that we don't provide utility classes for justified text."},{candidateName:"Kunal Rode",description:"Note that we don't provide utility classes for justified text."},{candidateName:"Kunal Rode",description:"Note that we don't provide utility classes for justified text."},{candidateName:"Kunal Rode",description:"Note that we don't provide utility classes for justified text."},{candidateName:"Kunal Rode",description:"Note that we don't provide utility classes for justified text."},{candidateName:"Kunal Rode",description:"Note that we don't provide utility classes for justified text."},{candidateName:"Kunal Rode",description:"Note that we don't provide utility classes for justified text."}]}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),g.\u0275fac=function(t){return new(t||g)},g.\u0275cmp=r.Hb({type:g,selectors:[["app-search-candidate"]],decls:1,vars:1,consts:[["class","row mainRow",4,"ngFor","ngForOf"],[1,"row","mainRow"],[1,"col-12"],[1,"row"],[1,"col-3","imgCol"],["src","../../../../../assets/images/Dipak1-1.JPG","alt","Profile Image",1,"profileImg"],[1,"col-9"],[1,"profTitle"],[1,"profDesc"],[1,"col-6","text-end"],[1,"btnCol"],[1,"btn","btn-outline-primary","actionBtn"],[1,"fas","fa-user","btnIcon"],[1,"col-6","text-start"],[1,"btn","btn-outline-danger","actionBtn"],[1,"fas","fa-trash","btnIcon2"]],template:function(t,n){1&t&&r.zc(0,p,23,2,"div",0),2&t&&r.jc("ngForOf",n.profiles)},directives:[i.s],styles:[".mainRow[_ngcontent-%COMP%]{padding:1rem;margin:1rem .5rem;box-shadow:0 0 17px -9px #000;border-radius:.8rem}.imgCol[_ngcontent-%COMP%]{text-align:center}.profileImg[_ngcontent-%COMP%]{width:7rem;height:7rem;border-radius:50%}.btnCol[_ngcontent-%COMP%]{position:relative}.actionBtn[_ngcontent-%COMP%]{border-radius:1.5rem;font-size:1.3rem;padding:.4rem 1.5rem .5rem 3.6rem}.actionBtn[_ngcontent-%COMP%]:focus + .btnIcon[_ngcontent-%COMP%], .actionBtn[_ngcontent-%COMP%]:focus + .btnIcon2[_ngcontent-%COMP%]{color:#fff}.btnIcon[_ngcontent-%COMP%]{color:#0d6efd;top:.65rem;right:9rem}.btnIcon[_ngcontent-%COMP%], .btnIcon2[_ngcontent-%COMP%]{font-size:1.6rem;position:absolute}.btnIcon2[_ngcontent-%COMP%]{color:#dc3545;top:.7rem;left:1.5rem}.profTitle[_ngcontent-%COMP%]{color:#4a43ec}.profDesc[_ngcontent-%COMP%]{color:grey;font-size:1.4rem}"]}),g)},{path:"company-info",component:d}],h=((f=_createClass((function t(){_classCallCheck(this,t)}))).\u0275mod=r.Lb({type:f}),f.\u0275inj=r.Kb({factory:function(t){return new(t||f)},imports:[[o.g.forChild(_)],o.g]}),f),v=((u=_createClass((function t(){_classCallCheck(this,t)}))).\u0275mod=r.Lb({type:u}),u.\u0275inj=r.Kb({factory:function(t){return new(t||u)},imports:[[i.c,h]]}),u)}}]);