function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{Ew7R:function(t,n,e){"use strict";e.d(n,"a",(function(){return m}));var i=e("fXoL"),o=e("tyNb"),a=e("v0EB"),c=e("ofXK");function r(t,n){if(1&t){var e=i.Rb();i.Qb(0,"div",3),i.Qb(1,"i",4),i.Yb("click",(function(){return i.oc(e),i.ac().goBack()})),i.Pb(),i.Pb()}}function s(t,n){1&t&&(i.Qb(0,"div"),i.Qb(1,"p",5),i.uc(2," Company list is not available...!"),i.Pb(),i.Pb())}function b(t,n){1&t&&(i.Qb(0,"span"),i.uc(1,","),i.Pb())}function l(t,n){if(1&t&&(i.Qb(0,"span",19),i.uc(1),i.tc(2,b,2,0,"span",1),i.Pb()),2&t){var e=i.ac(),o=e.$implicit,a=e.index,c=i.ac().$implicit;i.zb(1),i.vc(o.ProductName),i.zb(1),i.fc("ngIf",c.Products.length>=10&&a<9||c.Products.length<10&&a<c.Products.length-1)}}function u(t,n){if(1&t&&(i.Qb(0,"span"),i.tc(1,l,3,2,"span",18),i.Pb()),2&t){var e=n.index;i.zb(1),i.fc("ngIf",e<10)}}function d(t,n){if(1&t){var e=i.Rb();i.Qb(0,"div",6),i.Qb(1,"div",7),i.Yb("click",(function(){i.oc(e);var t=n.$implicit;return i.ac().companyData(t.CompanyId)})),i.Qb(2,"a",8),i.Qb(3,"h5",9),i.uc(4),i.Pb(),i.Qb(5,"span",10),i.Mb(6,"i",11),i.Qb(7,"span",12),i.uc(8),i.Pb(),i.Pb(),i.Qb(9,"h6",13),i.uc(10),i.Pb(),i.Qb(11,"div",14),i.tc(12,u,2,1,"span",15),i.Pb(),i.Qb(13,"h5",16),i.Mb(14,"i",17),i.uc(15),i.Pb(),i.Pb(),i.Pb(),i.Pb()}if(2&t){var o=n.$implicit;i.zb(4),i.vc(o.Company),i.zb(4),i.vc(o.Rating),i.zb(2),i.vc(o.BusinessType),i.zb(2),i.fc("ngForOf",o.Products),i.zb(3),i.xc(" ",o.City," \xa0 ",o.State,"")}}var m=function(){var t=function(){function t(n,e,i,o){_classCallCheck(this,t),this.route=n,this.commonService=e,this.activatedRoute=i,this.location=o,this.matchUrl=window.location.pathname}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.commonService.sharedCatCompanylist.subscribe((function(n){console.log("res comp details",n),t.companylist=n}),(function(t){return console.log(t)}))}},{key:"companyData",value:function(t){this.route.navigate(["/company-data"],{queryParams:{id:t}})}},{key:"goBack",value:function(){console.log("err"),this.location.back()}}]),t}();return t.\u0275fac=function(n){return new(n||t)(i.Lb(o.c),i.Lb(a.a),i.Lb(o.a),i.Lb(c.n))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-company-detail"]],decls:3,vars:3,consts:[["class","menuDiv",4,"ngIf"],[4,"ngIf"],["class","row  mt-5 compny_Div ",4,"ngFor","ngForOf"],[1,"menuDiv"],["aria-hidden","true",1,"fa","fa-arrow-left","mx-4","mt-2","pt-2","backArr",3,"click"],[1,"mx-3","mt-5"],[1,"row","mt-5","compny_Div"],[1,"col-12","cols","p-3","my-2",3,"click"],[2,"text-decoration","none"],[1,"text-start","d-inline-block","mx-2"],[1,"float-end","allrate"],["aria-hidden","true",1,"fa","fa-star-o","text-warning","mx-1"],[1,"rate"],[1,"cat_type","mx-2"],[1,"mx-2","descrip",2,"word-break","break-all"],[4,"ngFor","ngForOf"],[1,"city","mx-2","my-2"],["aria-hidden","true",1,"fa","fa-map-marker"],["style","\n                    \n                    padding: 0px;\n    margin-right: 4px;",4,"ngIf"],[2,"padding","0px","margin-right","4px"]],template:function(t,n){1&t&&(i.tc(0,r,2,0,"div",0),i.tc(1,s,3,0,"div",1),i.tc(2,d,16,6,"div",2)),2&t&&(i.fc("ngIf","/home/company/company-details"===n.matchUrl&&"home/product/product-create"!==n.matchUrl),i.zb(1),i.fc("ngIf",!n.companylist||0===n.companylist.length),i.zb(1),i.fc("ngForOf",n.companylist))},directives:[c.t,c.s],styles:[".backArr[_ngcontent-%COMP%]{font-size:15px}.compny_Div[_ngcontent-%COMP%]{overflow:auto;height:auto;font-family:Pensum Sans}.cols[_ngcontent-%COMP%]{background-color:#f0eded;border-radius:15px;height:-moz-max-content;height:max-content}.Sort[_ngcontent-%COMP%]{margin-top:8px}h5[_ngcontent-%COMP%]{font-weight:700;font-size:15px;font-family:Pensum Sans;color:#000;text-transform:lowercase}h5[_ngcontent-%COMP%]:first-letter{text-transform:capitalize}.fa-star-o[_ngcontent-%COMP%]{font-weight:700;font-size:12px}.allrate[_ngcontent-%COMP%]{background-color:#204863;margin-top:-8px;padding-right:9px;padding-left:3px;border-top-right-radius:5px;border-bottom-left-radius:5px;font-weight:700}.rate[_ngcontent-%COMP%]{font-size:13px;color:#fff;font-family:Times New Roman}.cat_type[_ngcontent-%COMP%]{font-size:12px;color:#878d91;line-height:1}.cat_type[_ngcontent-%COMP%], .descrip[_ngcontent-%COMP%]{font-family:Pensum Sans}.descrip[_ngcontent-%COMP%]{font-size:10px;color:#000;text-transform:capitalize}.fa-map-marker[_ngcontent-%COMP%]{color:#204863}.city[_ngcontent-%COMP%]{float:left;font-size:11px;line-height:1;color:#888b8e}.city[_ngcontent-%COMP%], .link_extr[_ngcontent-%COMP%]{font-family:Pensum Sans}.link_extr[_ngcontent-%COMP%]{text-decoration:none;font-size:9px;color:#376f93}"]}),t}()},pYoV:function(t,n,e){"use strict";e.r(n),e.d(n,"CompanyModule",(function(){return v}));var i=e("ofXK"),o=e("tyNb"),a=e("Ew7R"),c=e("fXoL"),r=e("v0EB");function s(t,n){if(1&t&&(c.Qb(0,"div",45),c.Qb(1,"div",46),c.Mb(2,"img",47),c.Pb(),c.Qb(3,"div",48),c.Qb(4,"a",49),c.Qb(5,"h4",50),c.uc(6),c.Pb(),c.Pb(),c.Qb(7,"p",51),c.uc(8," Rate Us "),c.Qb(9,"span",52),c.Mb(10,"i",53),c.uc(11,"4.6 "),c.Pb(),c.Pb(),c.Pb(),c.Pb()),2&t){var e=n.$implicit;c.zb(4),c.hc("href","company-info/:",e.id,"",c.qc),c.zb(2),c.wc("",e.company_name,"Pioma Chemicals")}}var b,l=function(){return{exact:!0}},u=((b=function(){function t(n,e){_classCallCheck(this,t),this.activatedRoute=n,this.apiService=e,this.companyId=0,this.classList=""}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.activatedRoute.params.subscribe((function(n){t.companyId=n.id})),this.apiService.viewCompanyData(this.companyId).subscribe((function(n){t.companyData=n}))}},{key:"openMenu",value:function(){this.classList="nav--open"}}]),t}()).\u0275fac=function(t){return new(t||b)(c.Lb(o.a),c.Lb(r.a))},b.\u0275cmp=c.Fb({type:b,selectors:[["app-company-info"]],decls:141,vars:3,consts:[[1,"row","navs"],[1,"col-4"],[1,"menuDiv",3,"click"],["aria-hidden","true",1,"fa","fa-bars","mx-4","mt-2"],["src","../../../../assets/images/Brand_logo.png","alt","OrgLogo",1,"img-fluid","logimg","mt-2"],["src","/assets/images/share_PNG27.png","alt","Share",2,"width","18px","margin-left","50px","height","18px","float","end"],["aria-hidden","true",1,"fa","fa-bookmark-o","mt-2"],[1,"sub_div"],["class","row compTitle w-100 mx-4",4,"ngFor","ngForOf"],[1,"info_nav"],[1,"nav"],[1,"nav-item"],["href","/company-data#aboutus","routerLinkActive","active-link",1,"nav-link",3,"routerLinkActiveOptions"],["href","/company-data#product","routerLinkActive","active-link",1,"nav-link"],["href","/company-data#application","routerLinkActive","active-link",1,"nav-link"],["href","/company-data#contact","routerLinkActive","active-link",1,"nav-link"],[1,"Parent_Div"],["data-spy","scroll","data-target","#navbar-example2","data-offset","0",1,"all_cont"],["id","aboutus"],[1,"mx-4","my-4","desc","w-100","mt-1"],["id","product"],[1,"h5","heading","mt-2","mx-2"],[1,"prdct_name","w-100"],[1,"mx-3"],["id","contact"],[1,"h5","heading","mt-2","mx-2","mt-5"],[1,"cont_all"],[1,"row","w-100"],[1,"col-1","mt-3"],["aria-hidden","true",1,"fa","fa-user-circle","mx-2"],[1,"col-10","name","mt-4"],[1,"mang","mt-3"],["aria-hidden","true",1,"fa","fa-envelope-square","text-primary"],[1,"add"],[2,"line-height","1.2"],[1,"star","mx-2","mt-4"],[1,"mx-1"],["aria-hidden","true",1,"fa","fa-star","text-warning","mx-1"],[1,"d-flex","iconBox","mt-4"],[1,"p-2"],["aria-hidden","true",1,"fa","fa-envelope-o"],[1,"p-2","flex-fill"],["aria-hidden","true",1,"fa","fa-phone"],["aria-hidden","true",1,"fa","fa-comments-o"],["aria-hidden","true",1,"fa","fa-share-alt"],[1,"row","compTitle","w-100","mx-4"],[1,"col-3"],["src","../../../../../assets/images/pioma-logo.png","alt","Company_Logo",1,"img-fluid","bg-dark"],[1,"col-9","comp_name"],[3,"href"],[1,"mt-0"],[2,"font-size","13px","font-weight","bold"],[1,"mt-2",2,"background-color","rgb(225, 245, 248)"],["aria-hidden","true",1,"fa","fa-star","text-warning","mt-2","mx-1"]],template:function(t,n){1&t&&(c.Qb(0,"div",0),c.Qb(1,"div",1),c.Qb(2,"div",2),c.Yb("click",(function(){return n.openMenu()})),c.Mb(3,"i",3),c.Pb(),c.Pb(),c.Qb(4,"div",1),c.Mb(5,"img",4),c.Pb(),c.Qb(6,"div",1),c.Mb(7,"img",5),c.Mb(8,"i",6),c.Pb(),c.Pb(),c.Qb(9,"div",7),c.tc(10,s,12,2,"div",8),c.Qb(11,"div",9),c.Qb(12,"ul",10),c.Qb(13,"li",11),c.Qb(14,"a",12),c.uc(15,"About Us"),c.Pb(),c.Pb(),c.Qb(16,"li",11),c.Qb(17,"a",13),c.uc(18,"Products"),c.Pb(),c.Pb(),c.Qb(19,"li",11),c.Qb(20,"a",14),c.uc(21,"Certification/Application"),c.Pb(),c.Pb(),c.Qb(22,"li",11),c.Qb(23,"a",15),c.uc(24,"Contact Us"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(25,"div",16),c.Qb(26,"div",17),c.Qb(27,"div",18),c.Qb(28,"p",19),c.uc(29," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nesciunt eaque? Omnis at in ipsum dolore minus, totam commodi assumenda provident possimus eos eius quo laborum tenetur error nisi ducimus? Molestiae repudiandae soluta pariatur eaque doloribus, sed aut laudantium accusantium dolorum doloremque eos temporibus odio! Iste eius iure repellat, id numquam atque tenetur unde architecto, nemo consectetur vel cum accusamus blanditiis maxime deleniti. Corrupti perspiciatis dolore quia Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nesciunt eaque? Omnis at in ipsum dolore minus, totam commodi assumenda provident possimus eos eius quo laborum tenetur error nisi ducimus? Molestiae repudiandae soluta pariatur eaque doloribus, sed aut laudantium accusantium dolorum doloremque eos temporibus odio! Iste eius iure repellat, id numquam atque tenetur unde architecto, nemo consectetur vel cum accusamus blanditiis maxime deleniti. Corrupti perspiciatis dolore quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusamus non deserunt expedita illum quis aut numquam iusto temporibus tenetur? "),c.Pb(),c.Pb(),c.Qb(30,"div",20),c.Qb(31,"h5",21),c.uc(32,"PRODUCTS"),c.Pb(),c.Qb(33,"table",22),c.Qb(34,"tr"),c.Qb(35,"li",23),c.uc(36,"Alkalizing Agent"),c.Pb(),c.Pb(),c.Qb(37,"tr"),c.Qb(38,"li",23),c.uc(39,"Anti-Acne"),c.Pb(),c.Pb(),c.Qb(40,"tr"),c.Qb(41,"li",23),c.uc(42,"Anti-Aging"),c.Pb(),c.Pb(),c.Qb(43,"tr"),c.Qb(44,"li",23),c.uc(45,"Anti-Bacterial"),c.Pb(),c.Pb(),c.Qb(46,"tr"),c.Qb(47,"li",23),c.uc(48,"Anti-Dandruff"),c.Pb(),c.Pb(),c.Qb(49,"tr"),c.Qb(50,"li",23),c.uc(51,"Anti-Fungal"),c.Pb(),c.Pb(),c.Qb(52,"tr"),c.Qb(53,"li",23),c.uc(54,"Anti-Inflammatory"),c.Pb(),c.Pb(),c.Qb(55,"tr"),c.Qb(56,"li",23),c.uc(57,"Anti-Microbial"),c.Pb(),c.Pb(),c.Qb(58,"tr"),c.Qb(59,"li",23),c.uc(60,"Anti-Static & Softening Agent"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(61,"div",24),c.Qb(62,"h5",25),c.uc(63,"CONTACT US"),c.Pb(),c.Qb(64,"div",26),c.Qb(65,"div",27),c.Qb(66,"div",28),c.Mb(67,"i",29),c.Pb(),c.Qb(68,"div",30),c.Qb(69,"h5"),c.uc(70,"MR.Doshi"),c.Pb(),c.Qb(71,"h5",31),c.uc(72,"Manging Director"),c.Pb(),c.Pb(),c.Qb(73,"div",28),c.Mb(74,"i",32),c.Pb(),c.Pb(),c.Qb(75,"h5",33),c.Qb(76,"b"),c.uc(77," Corporate office :"),c.Pb(),c.uc(78," 101-103,"),c.Qb(79,"b",34),c.uc(80,"Shyam Kamal 'D',Agarwal Market, Vile Parle(E),"),c.Pb(),c.Pb(),c.Qb(81,"h5",33),c.Qb(82,"b"),c.uc(83," Mumbai -"),c.Pb(),c.uc(84," 400\xa0057, India"),c.Pb(),c.Qb(85,"h5",33),c.Qb(86,"b"),c.uc(87," Phone : "),c.Pb(),c.uc(88," +91-22-4512000/2001"),c.Pb(),c.Qb(89,"h5",33),c.Qb(90,"b"),c.uc(91," Mobile : "),c.Pb(),c.uc(92," +91-93728\xa000045"),c.Pb(),c.Qb(93,"h5",33),c.Qb(94,"b"),c.uc(95," Email : "),c.Pb(),c.uc(96," product@pioma.net"),c.Pb(),c.Pb(),c.Qb(97,"h5",35),c.uc(98,"Rating "),c.Pb(),c.Qb(99,"div",36),c.Mb(100,"i",37),c.Mb(101,"i",37),c.Mb(102,"i",37),c.Mb(103,"i",37),c.Mb(104,"i",37),c.Qb(105,"b"),c.uc(106,"28"),c.Pb(),c.Pb(),c.Qb(107,"div",36),c.Mb(108,"i",37),c.Mb(109,"i",37),c.Mb(110,"i",37),c.Mb(111,"i",37),c.Qb(112,"b"),c.uc(113,"10"),c.Pb(),c.Pb(),c.Qb(114,"div",36),c.Mb(115,"i",37),c.Mb(116,"i",37),c.Mb(117,"i",37),c.Qb(118,"b"),c.uc(119,"20"),c.Pb(),c.Pb(),c.Qb(120,"div",36),c.Mb(121,"i",37),c.Mb(122,"i",37),c.Qb(123,"b"),c.uc(124,"27"),c.Pb(),c.Pb(),c.Qb(125,"div",36),c.Mb(126,"i",37),c.Qb(127,"b"),c.uc(128,"7"),c.Pb(),c.Pb(),c.Qb(129,"div",38),c.Qb(130,"div",39),c.Mb(131,"i",40),c.uc(132," Send Mail "),c.Pb(),c.Qb(133,"div",41),c.Mb(134,"i",42),c.uc(135," Call Now "),c.Pb(),c.Qb(136,"div",41),c.Mb(137,"i",43),c.uc(138," Chat Now "),c.Pb(),c.Qb(139,"div",41),c.Mb(140,"i",44),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb()),2&t&&(c.zb(10),c.fc("ngForOf",n.companyData),c.zb(4),c.fc("routerLinkActiveOptions",c.jc(2,l)))},directives:[i.s,o.e],styles:[".Parent_Div[_ngcontent-%COMP%]{height:69vh;overflow-y:scroll;overflow-x:hidden;position:relative}.sub_div[_ngcontent-%COMP%]{position:fixed;background:url(background.436f1b7f0d214c2a8b8f.png)}.fa-arrow-left[_ngcontent-%COMP%]{font-size:15px}.compTitle[_ngcontent-%COMP%]{height:8vh;vertical-align:middle}img[_ngcontent-%COMP%]{height:8vh;width:100vw;background-repeat:no-repeat;background-size:cover}.comp_name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Pensum Sans;font-weight:700;text-align:center;font-size:22px}.fa-bookmark-o[_ngcontent-%COMP%]{font-size:15px;margin-left:15px}.info_nav[_ngcontent-%COMP%]{font-size:12px;font-family:Pensum Sans;margin:10px 5px}.nav-link[_ngcontent-%COMP%]{padding-left:5px;padding-right:5px;color:#8397a5}.nav-tabs[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .nav-link.active[_ngcontent-%COMP%]{font-weight:700}.all_cont[_ngcontent-%COMP%]{margin-top:155px}.desc[_ngcontent-%COMP%]{font-family:Pensum Sans;font-size:12px}.heading[_ngcontent-%COMP%]{font-weight:700;font-size:17px}.prdct_name[_ngcontent-%COMP%]{font-family:Pensum Sans;font-size:13px}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #d3d3d3}.cont_all[_ngcontent-%COMP%]{font-family:Pensum Sans}.fa-user-circle[_ngcontent-%COMP%]{color:#8397a5;font-size:17px}.name[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px}.name[_ngcontent-%COMP%]   .mang[_ngcontent-%COMP%], .name[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{line-height:.8;font-weight:700}.name[_ngcontent-%COMP%]   .mang[_ngcontent-%COMP%]{font-size:14px}.add_head[_ngcontent-%COMP%]{font-size:13px;font-weight:700}.add[_ngcontent-%COMP%], .add_head[_ngcontent-%COMP%]{margin-left:29px}.add[_ngcontent-%COMP%]{font-size:12px;line-height:1}.fa-envelope-square[_ngcontent-%COMP%]{font-size:18px}.star[_ngcontent-%COMP%]{font-size:12px;font-family:Pensum Sans}.share[_ngcontent-%COMP%], .star[_ngcontent-%COMP%]{font-weight:700}.share[_ngcontent-%COMP%]{font-size:13px;color:#214e6c}.share[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:2px}.iconBox[_ngcontent-%COMP%]{color:#214e6c;text-align:center;font-weight:700}"]}),b);function d(t,n){if(1&t&&(c.Qb(0,"div",1),c.Qb(1,"div",2),c.Qb(2,"div",3),c.Qb(3,"div",4),c.Mb(4,"img",5),c.Pb(),c.Qb(5,"div",6),c.Qb(6,"h2",7),c.uc(7),c.Pb(),c.Qb(8,"p",8),c.uc(9),c.Pb(),c.Pb(),c.Pb(),c.Qb(10,"div",3),c.Qb(11,"div",2),c.Qb(12,"div",3),c.Qb(13,"div",9),c.Qb(14,"div",10),c.Qb(15,"button",11),c.uc(16,"View Profile"),c.Pb(),c.Mb(17,"i",12),c.Pb(),c.Pb(),c.Qb(18,"div",13),c.Qb(19,"div",10),c.Qb(20,"button",14),c.uc(21,"Delete"),c.Pb(),c.Mb(22,"i",15),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb()),2&t){var e=n.$implicit;c.zb(7),c.vc(e.candidateName),c.zb(2),c.vc(e.description)}}var m,f,p,g,P=[{path:"company-details",component:a.a},{path:"lists",component:(f=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),f.\u0275fac=function(t){return new(t||f)},f.\u0275cmp=c.Fb({type:f,selectors:[["app-company-list"]],decls:2,vars:0,template:function(t,n){1&t&&(c.Qb(0,"p"),c.uc(1,"company-list works!"),c.Pb())},styles:[""]}),f)},{path:"candidates",component:(m=function(){function t(){_classCallCheck(this,t),this.profiles=[{candidateName:"Kunal Rode",description:"Note that we don't provide utility classes for justified text."},{candidateName:"Kunal Rode",description:"Note that we don't provide utility classes for justified text."},{candidateName:"Kunal Rode",description:"Note that we don't provide utility classes for justified text."},{candidateName:"Kunal Rode",description:"Note that we don't provide utility classes for justified text."},{candidateName:"Kunal Rode",description:"Note that we don't provide utility classes for justified text."},{candidateName:"Kunal Rode",description:"Note that we don't provide utility classes for justified text."},{candidateName:"Kunal Rode",description:"Note that we don't provide utility classes for justified text."},{candidateName:"Kunal Rode",description:"Note that we don't provide utility classes for justified text."},{candidateName:"Kunal Rode",description:"Note that we don't provide utility classes for justified text."}]}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),m.\u0275fac=function(t){return new(t||m)},m.\u0275cmp=c.Fb({type:m,selectors:[["app-search-candidate"]],decls:1,vars:1,consts:[["class","row mainRow",4,"ngFor","ngForOf"],[1,"row","mainRow"],[1,"col-12"],[1,"row"],[1,"col-3","imgCol"],["src","../../../../../assets/images/Dipak1-1.JPG","alt","Profile Image",1,"profileImg"],[1,"col-9"],[1,"profTitle"],[1,"profDesc"],[1,"col-6","text-end"],[1,"btnCol"],[1,"btn","btn-outline-primary","actionBtn"],[1,"fas","fa-user","btnIcon"],[1,"col-6","text-start"],[1,"btn","btn-outline-danger","actionBtn"],[1,"fas","fa-trash","btnIcon2"]],template:function(t,n){1&t&&c.tc(0,d,23,2,"div",0),2&t&&c.fc("ngForOf",n.profiles)},directives:[i.s],styles:[".mainRow[_ngcontent-%COMP%]{padding:1rem;margin:1rem .5rem;box-shadow:0 0 17px -9px #000;border-radius:.8rem}.imgCol[_ngcontent-%COMP%]{text-align:center}.profileImg[_ngcontent-%COMP%]{width:7rem;height:7rem;border-radius:50%}.btnCol[_ngcontent-%COMP%]{position:relative}.actionBtn[_ngcontent-%COMP%]{border-radius:1.5rem;font-size:1.3rem;padding:.4rem 1.5rem .5rem 3.6rem}.actionBtn[_ngcontent-%COMP%]:focus + .btnIcon[_ngcontent-%COMP%], .actionBtn[_ngcontent-%COMP%]:focus + .btnIcon2[_ngcontent-%COMP%]{color:#fff}.btnIcon[_ngcontent-%COMP%]{color:#0d6efd;top:.65rem;right:9rem}.btnIcon[_ngcontent-%COMP%], .btnIcon2[_ngcontent-%COMP%]{font-size:1.6rem;position:absolute}.btnIcon2[_ngcontent-%COMP%]{color:#dc3545;top:.7rem;left:1.5rem}.profTitle[_ngcontent-%COMP%]{color:#4a43ec}.profDesc[_ngcontent-%COMP%]{color:grey;font-size:1.4rem}"]}),m)},{path:"company-info",component:u}],h=((g=_createClass((function t(){_classCallCheck(this,t)}))).\u0275mod=c.Jb({type:g}),g.\u0275inj=c.Ib({factory:function(t){return new(t||g)},imports:[[o.g.forChild(P)],o.g]}),g),v=((p=_createClass((function t(){_classCallCheck(this,t)}))).\u0275mod=c.Jb({type:p}),p.\u0275inj=c.Ib({factory:function(t){return new(t||p)},imports:[[i.c,h]]}),p)}}]);