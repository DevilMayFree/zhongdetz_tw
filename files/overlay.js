google.maps.__gjsload__('overlay', function(_){var vva=function(){},CB=function(a){a.BA=a.BA||new vva;return a.BA},wva=function(a){this.Eg=new _.jn(()=>{const b=a.BA;if(a.getPanes()){if(a.getProjection()){if(!b.Hg&&a.onAdd)a.onAdd();b.Hg=!0;a.draw()}}else{if(b.Hg)if(a.onRemove)a.onRemove();else a.remove();b.Hg=!1}},0)},yva=function(a,b){const c=CB(a);let d=c.Fg;d||(d=c.Fg=new wva(a));_.Jb(c.Eg||[],_.Rk);var e=c.Ig=c.Ig||new _.fpa;const f=b.__gm;e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("center",f,"projectionCenterQ");e.bindTo("projection",
b);e.bindTo("projectionTopLeft",f);e=c.Kg=c.Kg||new xva(e);e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("projection",b);e.bindTo("projectionTopLeft",f);a.bindTo("projection",e,"outProjection");a.bindTo("panes",f);e=()=>_.kn(d.Eg);c.Eg=[_.Pk(a,"panes_changed",e),_.Pk(f,"zoom_changed",e),_.Pk(f,"offset_changed",e),_.Pk(b,"projection_changed",e),_.Pk(f,"projectioncenterq_changed",e)];_.kn(d.Eg);b instanceof _.xl?(_.Ml(b,"Ox"),_.L(b,148440)):b instanceof _.fm&&(_.Ml(b,"Oxs"),_.L(b,181451))},zva=function(a){const b=
CB(a);var c=b.Ig;c&&c.unbindAll();(c=b.Kg)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.Eg&&b.Eg.forEach(d=>{_.Rk(d)});b.Eg=null;b.Fg&&(_.ln(b.Fg.Eg),b.Fg=null)},Eva=function(a){if(a){var b=a.getMap();if(Ava(a)!==b&&b&&b instanceof _.xl){const c=b.__gm;c.overlayLayer?a.__gmop=new Bva(b,a,c.overlayLayer):c.Fg.then(({eh:d})=>{const e=new Cva(b,d);d.Fi(e);c.overlayLayer=e;Dva(a);Eva(a)})}}},Dva=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,b.Eg.unbindAll(),b.Eg.set("panes",
null),b.Eg.set("projection",null),b.Hg.Fl(b),b.Fg&&(b.Fg=!1,b.Eg.onRemove?b.Eg.onRemove():b.Eg.remove()))}},Ava=function(a){return(a=a.__gmop)?a.map:null},Fva=function(a,b){a.Eg.get("projection")!=b&&(a.Eg.bindTo("panes",a.map.__gm),a.Eg.set("projection",b))};var xva=class extends _.il{constructor(a){super();this.projection=a}changed(a){a!=="outProjection"&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.Wj(this.get("zoom"))),a===!this.get("outProjection")&&this.set("outProjection",a?this.projection:null))}};var DB={};_.Ha(wva,_.il);DB.Jl=function(a){if(a){var b=a.getMap();(CB(a).Jg||null)!==b&&(b&&yva(a,b),CB(a).Jg=b)}};DB.Fl=function(a){zva(a);delete CB(a).Jg};DB.eN=vva;var EB={},Bva=class{constructor(a,b,c){this.map=a;this.Eg=b;this.Hg=c;this.Fg=!1;_.Ml(this.map,"Ox");_.L(this.map,148440);c.Jl(this)}draw(){this.Fg||(this.Fg=!0,this.Eg.onAdd&&this.Eg.onAdd());this.Eg.draw&&this.Eg.draw()}},Cva=class{constructor(a,b){this.Ig=a;this.Hg=b;this.Eg=null;this.Fg=[]}dispose(){}Zh(a,b,c,d,e,f,g,h){const k=this.Eg=this.Eg||new _.wy(this.Ig,this.Hg,()=>{});k.Zh(a,b,c,d,e,f,g,h);for(const m of this.Fg)Fva(m,k),m.draw()}Jl(a){this.Fg.push(a);this.Eg&&Fva(a,this.Eg);this.Hg.refresh()}Fl(a){_.Sb(this.Fg,
a)}};EB.Jl=Eva;EB.Fl=Dva;_.Jj("overlay",{pC:function(a){if(a){(0,DB.Fl)(a);(0,EB.Fl)(a);var b=a.getMap();b&&(b instanceof _.xl?(0,EB.Jl)(a):(0,DB.Jl)(a))}},preventMapHitsFrom:a=>{_.ru(a,{Cl:({event:b})=>{_.ys(b.Eg)},ek:b=>_.cu(b),uq:b=>_.du(b),bl:b=>_.du(b),yk:b=>_.eu(b)}).ls(!0)},preventMapHitsAndGesturesFrom:a=>{a.addEventListener("click",_.Nk);a.addEventListener("contextmenu",_.Nk);a.addEventListener("dblclick",_.Nk);a.addEventListener("mousedown",_.Nk);a.addEventListener("mousemove",_.Nk);a.addEventListener("MSPointerDown",
_.Nk);a.addEventListener("pointerdown",_.Nk);a.addEventListener("touchstart",_.Nk);a.addEventListener("wheel",_.Nk)}});});
