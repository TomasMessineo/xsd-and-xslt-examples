(function(g){var window=this;'use strict';var L5=function(a,b){g.T.call(this,{I:"button",La:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],W:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},V:[{I:"svg",W:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},V:[{I:"g",W:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},V:[{I:"g",W:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
V:[{I:"path",W:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.J=a;this.listen("click",this.onClick,this);this.updateValue("title",g.TR(a,"Expandir","i"));this.update({"data-title-no-tooltip":"Expandir"});this.addOnDisposeCallback(g.RR(b.Se(),this.element))},Skb=function(a){g.T.call(this,
{I:"div",
S:"ytp-miniplayer-ui"});this.N=this.G=!1;this.player=a;this.T(a,"minimized",this.wh);this.T(a,"onStateChange",this.afa);this.T(a,"documentpictureinpicturechange",this.nba)},Tkb=function(a,b){g.rp(a.player.getRootNode(),"ytp-player-minimized",b);
a.player.L("web_cairo_modern_miniplayer")&&g.rp(a.player.getRootNode(),"ytp-modern-miniplayer",b);a.player.L("web_cairo_modern_miniplayer_inset_progress_bar")&&g.rp(a.player.getRootNode(),"ytp-miniplayer-alternate-ui",b)},Ukb=function(a){var b=a.player.qb().getPlayerSize().width,c=0,d=b;
if(a.player.L("web_cairo_modern_miniplayer")&&!a.N&&!a.player.L("web_cairo_modern_miniplayer_infobar")||a.player.L("web_cairo_modern_miniplayer_inset_progress_bar"))c=12,d=b-24;g.n3a(a.progressBar,c,d,!1);g.oZ(a.progressBar)},Vkb=function(a){g.WX.call(this,a);
this.B=new g.JE(this);this.j=new Skb(this.player);this.j.hide();g.zS(this.player,this.j.element,4);a.isMinimized()&&(this.load(),g.rp(a.getRootNode(),"ytp-player-minimized",!0))};
g.z(L5,g.T);L5.prototype.onClick=function(){this.J.fb("onExpandMiniplayer")};g.z(Skb,g.T);g.k=Skb.prototype;
g.k.show=function(){this.j=new g.ep(this.r5,null,this);this.j.start();if(!this.G){this.tooltip=new g.XZ(this.player,this);g.P(this,this.tooltip);g.zS(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.le=new g.yY(this.player);g.P(this,this.le);this.progressBar=new g.nZ(this.player,this);g.P(this,this.progressBar);g.zS(this.player,this.progressBar.element,4);this.player.L("web_cairo_modern_miniplayer_infobar")&&g.np(this.player.getRootNode(),"ytp-always-showing-infobar");this.B=new g.T({I:"div",
S:"ytp-miniplayer-scrim"});g.P(this,this.B);this.B.Ia(this.element);this.T(this.B.element,"click",this.P0);var a=new g.T({I:"button",La:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Cerrar"},V:[g.Fx()]});g.P(this,a);a.Ia(this.B.element);this.T(a.element,"click",this.vV);a=new L5(this.player,this);g.P(this,a);a.Ia(this.B.element);this.C=new g.T({I:"div",S:"ytp-miniplayer-controls"});g.P(this,this.C);this.C.Ia(this.B.element);this.player.L("web_cairo_modern_miniplayer")||this.T(this.C.element,
"click",this.P0);var b=new g.T({I:"div",S:"ytp-miniplayer-button-container"});g.P(this,b);b.Ia(this.C.element);a=new g.T({I:"div",S:"ytp-miniplayer-play-button-container"});g.P(this,a);a.Ia(this.C.element);var c=new g.T({I:"div",S:"ytp-miniplayer-button-container"});g.P(this,c);c.Ia(this.C.element);this.X=new g.iZ(this.player,this,!1);g.P(this,this.X);this.X.Ia(b.element);b=new g.hZ(this.player,this);g.P(this,b);b.Ia(a.element);this.nextButton=new g.iZ(this.player,this,!0);g.P(this,this.nextButton);
this.nextButton.Ia(c.element);this.K=this.player.L("web_cairo_modern_miniplayer")?new g.QZ(this.player,this,0):new g.QZ(this.player,this);g.P(this,this.K);this.K.Ia(this.B.element);this.D=new g.T({I:"div",S:"ytp-miniplayer-buttons"});g.P(this,this.D);g.zS(this.player,this.D.element,4);a=new g.T({I:"button",La:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Cerrar"},V:[g.Fx()]});g.P(this,a);a.Ia(this.D.element);this.T(a.element,"click",this.vV);a=new g.T({I:"button",La:["ytp-miniplayer-replay-button",
"ytp-button"],W:{"aria-label":"Cerrar"},V:[g.Lx()]});g.P(this,a);a.Ia(this.D.element);this.T(a.element,"click",this.tca);this.player.L("web_cairo_modern_miniplayer")&&(a=new L5(this.player,this),g.P(this,a),a.Ia(this.D.element));this.T(this.player,"presentingplayerstatechange",this.s5);this.T(this.player,"appresize",this.kc);this.T(this.player,"fullscreentoggled",this.kc);this.player.L("web_cairo_modern_miniplayer")&&this.T(this.player,"onPlaylistUpdate",this.GS);this.kc();this.G=!0}this.player.getPlayerState()!==
0&&g.T.prototype.show.call(this);this.progressBar.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.j&&(this.j.dispose(),this.j=void 0);g.T.prototype.hide.call(this);this.player.isMinimized()||(this.G&&this.progressBar.hide(),this.player.loadModule("annotations_module"))};
g.k.xa=function(){this.j&&(this.j.dispose(),this.j=void 0);g.T.prototype.xa.call(this)};
g.k.vV=function(){this.player.stopVideo();this.player.fb("onCloseMiniplayer")};
g.k.tca=function(){this.player.playVideo()};
g.k.P0=function(a){if(a.target===this.B.element||a.target===this.C.element)this.player.getPlayerStateObject().isOrWillBePlaying()?this.player.pauseVideo():this.player.playVideo()};
g.k.wh=function(){Tkb(this,this.player.isMinimized());this.player.L("web_cairo_modern_miniplayer")&&this.GS()};
g.k.nba=function(){Tkb(this,this.player.hj());this.player.L("web_cairo_modern_miniplayer")&&this.GS();g.rp(this.player.getRootNode(),"ytp-player-document-picture-in-picture",this.player.hj())};
g.k.Fg=function(){this.progressBar.Sc();this.K.Sc()};
g.k.r5=function(){this.Fg();this.j&&this.j.start()};
g.k.s5=function(a){g.Z(a.state,32)&&this.tooltip.hide()};
g.k.GS=function(){this.N=(this.player.isMinimized()||this.player.hj())&&!!this.player.getPlaylist();g.rp(this.player.getRootNode(),"ytp-has-playlist-data",this.N);Ukb(this)};
g.k.kc=function(){Ukb(this)};
g.k.afa=function(a){this.player.isMinimized()&&(a===0?this.hide():this.show())};
g.k.Se=function(){return this.tooltip};
g.k.Ly=function(a,b,c,d,e){var f=0,h=0,l=0,m=g.Gm(a);d=b&&(g.mp(b,"ytp-prev-button")||g.mp(b,"ytp-next-button"));if(b){c=g.mp(b,"ytp-play-button");var n=g.mp(b,"ytp-miniplayer-expand-watch-page-button");d?f=l=12:c?(b=g.Em(b,this.element),l=b.x,f=b.y-12):n&&(l=g.mp(b,"ytp-miniplayer-button-top-left"),f=g.Em(b,this.element),b=g.Gm(b),l?(l=8,f=f.y+40):(l=f.x-m.width+b.width,f=f.y-20))}else l=c-m.width/2,h=25+(e||0);b=this.player.qb().getPlayerSize();e=f+(e||0);m=g.Lg(l,0,b.width-m.width-12);e?(a.style.top=
e+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=h+"px");a.style.left=m+"px";this.player.L("web_cairo_modern_miniplayer")&&(h=g.mp(a,"ytp-preview"),a.style.visibility=d&&h&&b.height<225?"hidden":"")};g.z(Vkb,g.WX);g.k=Vkb.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.rp(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.WX.prototype.create.call(this);this.B.T(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.Fn=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.VX("miniplayer",Vkb);})(_yt_player);
