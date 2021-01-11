(this.webpackJsonpklipping=this.webpackJsonpklipping||[]).push([[0],{52:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);n(5);var c,a=n(1),r=n.n(a),i=n(17),o=n.n(i),s=(n(52),n(7)),l=n(9),u=n(0),d=n(6),b=n(3),f=n(2),p=n(8);!function(e){e.cutting="Cutting",e.metadata="Metadata",e.thumbnail="Thumbnail",e.finish="Finish"}(c||(c={}));var g,h={value:c.cutting},m=Object(p.c)({name:"mainMenuState",initialState:h,reducers:{setState:function(e,t){e.value=t.payload}}}),v=m.actions.setState,j=function(e){return e.mainMenuState.value},O=m.reducer,x=Object(p.c)({name:"finishState",initialState:{value:"Start processing",pageNumber:0},reducers:{setState:function(e,t){e.value=t.payload},setPageNumber:function(e,t){e.pageNumber=t.payload}}}),w=x.actions,y=w.setState,k=w.setPageNumber,S=function(e){return e.finishState.value},I=function(e){return e.finishState.pageNumber},C=x.reducer,P=n(10),D=n.n(P),T=n(13),N=n(42),A=n.n(N),E=window.location.origin,R=!0,W=!0,M=function(){var e=Object(T.a)(D.a.mark((function e(){var t,n,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H().then((function(e){e=L(e,!1,"src-server","from server settings file"),z(e)}));case 2:t=new URLSearchParams(window.location.search),n={},t.forEach((function(e,t){var c=n,a=t.split(".");a.slice(0,-1).forEach((function(e){e in c||(c[e]={}),c=c[e]})),c[a[a.length-1]]=e})),c=L(n,!0,"src-url","given as URL GET parameter"),z(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(e){for(var t in e)null!=e.mediaPackageId&&(g=e.mediaPackageId),"debugging"===t&&null!=e[t].ocUrl&&(E=e[t].ocUrl),"metadata"===t&&null!=e[t].show&&(R=e[t].show),"thumbnail"===t&&null!=e[t].show&&(W=e[t].show)},H=function(){var e=Object(T.a)(D.a.mark((function e(){var t,n,c,a,r,i;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n="/91/2021-01-11_14-26-37").endsWith("/")||(n+="/"),c=Object({NODE_ENV:"production",PUBLIC_URL:"/91/2021-01-11_14-26-37",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SETTINGS_PATH||"editor-settings.toml",a=c.startsWith("/")?"":n,r="".concat(window.location.origin).concat(a).concat(c),e.prev=5,e.next=8,fetch(r);case 8:i=e.sent,e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(5),console.warn("Could not access '".concat(c,"' due to network error!"),e.t0||""),e.abrupt("return",null);case 15:if(404!==i.status){e.next=20;break}return console.debug("'".concat(c,"' returned 404: ignoring")),e.abrupt("return",null);case 20:if(i.ok){e.next=23;break}return console.error("Fetching '".concat(c,"' failed: ").concat(i.status," ").concat(i.statusText)),e.abrupt("return",null);case 23:if(!(null===(t=i.headers.get("Content-Type"))||void 0===t?void 0:t.startsWith("text/html"))){e.next=26;break}return console.warn("'".concat(c,"' request has 'Content-Type: text/html' -> ignoring...")),e.abrupt("return",null);case 26:return e.prev=26,e.t1=A.a,e.next=30,i.text();case 30:return e.t2=e.sent,e.abrupt("return",(0,e.t1)(e.t2));case 34:throw e.prev=34,e.t3=e.catch(26),console.error("Could not parse '".concat(c,"' as TOML: "),e.t3),new SyntaxError("Could not parse '".concat(c,"' as TOML: ").concat(e.t3));case 38:case"end":return e.stop()}}),e,null,[[5,11],[26,34]])})));return function(){return e.apply(this,arguments)}}(),L=function(e,t,n,c){var a=function(e,t,n){return"function"===typeof e?r(e,t,n):i(e,t,n)},r=function(e,a,r){try{var i=e(a,t,n);return void 0===i?a:i}catch(o){return console.warn("Validation of setting '".concat(r,"' (").concat(c,") with value '").concat(a,"' failed: ")+"".concat(o,". Ignoring.")),null}},i=function(e,t,n){var r={};for(var i in t){var o=n?"".concat(n,".").concat(i):i;if(i in e){var s=a(e[i],t[i],o);null!==s&&(r[i]=s)}else console.warn("'".concat(o,"' (").concat(c,") is not a valid settings key. Ignoring."))}return r};return a(F,e,"")},B={string:function(e,t){if("string"!==typeof e)throw new Error("is not a string, but should be")},boolean:function(e,t){if("boolean"!==typeof e){if(t){if("true"===e)return!0;if("false"===e)return!1;throw new Error("can't be parsed as boolean")}throw new Error("is not a boolean")}}},F={mediaPackageId:B.string,debugging:{ocUrl:B.string},metadata:{show:B.boolean},thumbnail:{show:B.boolean}};var U=function(){return Object(u.c)(u.a,{styles:q})},q={name:"1bjjf7p",styles:"body{background-color:snow;font-size:medium;min-height:100vh;}"},V=Object(u.b)({borderRadius:"10px",cursor:"pointer",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.1)"},"&:focus":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"},display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",textAlign:"center"},""),_=Object(u.b)({display:"flex",flexDirection:"row",gap:"20px"},""),G=n(46);function K(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(T.a)(D.a.mark((function e(t){var n,c,a,r,i,o,s,u,d,b,f=arguments;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.length>1&&void 0!==f[1]?f[1]:{},c=n.body,a=Object(G.a)(n,["body"]),r={"Content-Type":"application/json"},i=btoa(unescape(encodeURIComponent("admin:opencast"))),o={Authorization:"Basic ".concat(i)},s=Object(l.a)(Object(l.a)({method:c?"POST":"GET"},a),{},{headers:Object(l.a)(Object(l.a)(Object(l.a)({},r),a.headers),o)}),c&&(s.body=JSON.stringify(c)),e.prev=6,e.next=9,window.fetch(t,s);case 9:return b=e.sent,e.next=12,b.text();case 12:if(d=e.sent,u=d.length?JSON.parse(d):"",!b.ok){e.next=16;break}return e.abrupt("return",u);case 16:throw new Error(b.statusText);case 19:return e.prev=19,e.t0=e.catch(6),e.abrupt("return",Promise.reject(e.t0.message?e.t0.message:u));case 22:case"end":return e.stop()}}),e,null,[[6,19]])})))).apply(this,arguments)}K.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return K(e,Object(l.a)(Object(l.a)({},t),{},{method:"GET"}))},K.post=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return K(e,Object(l.a)(Object(l.a)({},n),{},{body:t}))};var J=function(e,t){var n=Math.pow(10,t);return Math.round((e+Number.EPSILON)*n)/n},X={isPlaying:!1,isPlayPreview:!0,currentlyAt:0,segments:[{id:Object(p.d)(),start:0,end:1,deleted:!1}],tracks:[],activeSegmentIndex:0,selectedWorkflowIndex:0,previewTriggered:!1,videoURLs:[],videoCount:0,duration:0,title:"",presenters:[],workflows:[],status:"idle",error:void 0},Q=Object(p.b)("video/fetchVideoInformation",function(){var e=Object(T.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.get("".concat(t.ocUrl,"/editor/").concat(t.mediaPackageId,"/edit.json"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Z=Object(p.c)({name:"videoState",initialState:X,reducers:{setIsPlaying:function(e,t){e.isPlaying=t.payload},setIsPlayPreview:function(e,t){e.isPlayPreview=t.payload},setPreviewTriggered:function(e,t){e.previewTriggered=t.payload},setCurrentlyAt:function(e,t){e.currentlyAt=J(t.payload,0),$(e),ne(e)},setCurrentlyAtInSeconds:function(e,t){e.currentlyAt=J(1e3*t.payload,0),$(e),ne(e)},addSegment:function(e,t){e.segments.push(t.payload)},cut:function(e){if(e.segments[e.activeSegmentIndex].start===e.currentlyAt||e.segments[e.activeSegmentIndex].end===e.currentlyAt)return e;var t={id:Object(p.d)(),start:e.segments[e.activeSegmentIndex].start,end:e.currentlyAt,deleted:e.segments[e.activeSegmentIndex].deleted},n={id:Object(p.d)(),start:e.currentlyAt,end:e.segments[e.activeSegmentIndex].end,deleted:e.segments[e.activeSegmentIndex].deleted};e.segments.splice(e.activeSegmentIndex,1,t,n)},markAsDeletedOrAlive:function(e){e.segments[e.activeSegmentIndex].deleted=!e.segments[e.activeSegmentIndex].deleted},setSelectedWorkflowIndex:function(e,t){e.selectedWorkflowIndex=t.payload},mergeLeft:function(e){te(e,e.activeSegmentIndex,e.activeSegmentIndex-1)},mergeRight:function(e){te(e,e.activeSegmentIndex,e.activeSegmentIndex+1)}},extraReducers:function(e){e.addCase(Q.pending,(function(e,t){e.status="loading"})),e.addCase(Q.fulfilled,(function(e,t){e.status="success",e.videoURLs=t.payload.tracks.reduce((function(e,t){return e.push(t.uri),e}),[]),e.videoCount=t.payload.tracks.length,e.duration=t.payload.duration,e.title=t.payload.title,e.presenters=[],e.segments=ee(t.payload.segments,t.payload.duration),e.tracks=t.payload.tracks,e.workflows=t.payload.workflows.sort((function(e,t){return e.displayOrder>t.displayOrder?1:e.displayOrder<t.displayOrder?-1:0}))})),e.addCase(Q.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),$=function(e){e.activeSegmentIndex=e.segments.findIndex((function(t){return t.start<=e.currentlyAt&&t.end>=e.currentlyAt})),e.activeSegmentIndex<0&&(e.activeSegmentIndex=0)},ee=function(e,t){var n=[];return 0===e.length&&n.push({id:Object(p.d)(),start:0,end:t,deleted:!1}),e.forEach((function(e){n.push({id:Object(p.d)(),start:e.start,end:e.end,deleted:e.deleted})})),n},te=function(e,t,n){n<0||n>e.segments.length-1||(e.segments[t].start=Math.min(e.segments[t].start,e.segments[n].start),e.segments[t].end=Math.max(e.segments[t].end,e.segments[n].end),e.segments.splice(n,1),$(e))},ne=function(e){if(e.isPlaying&&e.segments[e.activeSegmentIndex].deleted&&e.isPlayPreview){for(var t=e.segments[e.activeSegmentIndex].end,n=e.activeSegmentIndex;n<e.segments.length&&e.segments[n].deleted;)t=e.segments[n].end,n++;e.currentlyAt=t,e.previewTriggered=!0}},ce=Z.actions,ae=ce.setIsPlaying,re=ce.setIsPlayPreview,ie=ce.setCurrentlyAt,oe=ce.setCurrentlyAtInSeconds,se=(ce.addSegment,ce.cut),le=ce.markAsDeletedOrAlive,ue=ce.setSelectedWorkflowIndex,de=ce.mergeLeft,be=ce.mergeRight,fe=ce.setPreviewTriggered,pe=function(e){return e.videoState.isPlaying},ge=function(e){return e.videoState.isPlayPreview},he=function(e){return e.videoState.previewTriggered},me=function(e){return e.videoState.currentlyAt},ve=function(e){return e.videoState.currentlyAt/1e3},je=function(e){return e.videoState.segments},Oe=function(e){return e.videoState.activeSegmentIndex},xe=function(e){return!e.videoState.segments[e.videoState.activeSegmentIndex].deleted},we=function(e){return e.videoState.selectedWorkflowIndex},ye=function(e){return e.videoState.videoURLs},ke=function(e){return e.videoState.videoCount},Se=function(e){return e.videoState.duration},Ie=function(e){return e.videoState.duration/1e3},Ce=function(e){return e.videoState.title},Pe=function(e){return e.videoState.presenters},De=function(e){return e.videoState.tracks},Te=function(e){return e.videoState.workflows},Ne=Z.reducer,Ae=function(e){var t=e.iconName,n=e.stateName,a=Object(f.b)(),r=Object(f.c)(j),i=function(){a(v(n)),n===c.finish&&a(k(0)),a(ae(!1))},o=Object(u.b)(Object(l.a)(Object(l.a)({width:"100%",height:"100px"},r===n&&{backgroundColor:"#DDD"}),{},{flexDirection:"column"}),"");return Object(u.c)("li",{css:Object(s.a)([V,o],""),role:"menuitem",tabIndex:0,onClick:i,onKeyDown:function(e){"Enter"===e.key&&i()}},Object(u.c)(d.a,{icon:t,size:"2x"}),Object(u.c)("div",null,n))},Ee=function(){var e=Object(u.b)({borderRight:"1px solid #BBB",width:"100px",display:"flex",flexDirection:"column",flexShrink:0,alignItems:"center",padding:"20px",gap:"30px"},"");return Object(u.c)("nav",{css:e,title:"Main Menu",role:"navigation","aria-label":"Main Navigation"},Object(u.c)(Ae,{iconName:b.i,stateName:c.cutting}),R&&Object(u.c)(Ae,{iconName:b.j,stateName:c.metadata}),W&&Object(u.c)(Ae,{iconName:b.l,stateName:c.thumbnail}),Object(u.c)(Ae,{iconName:b.p,stateName:c.finish}))},Re=n(18),We=n(43),Me=n.n(We);var ze=function(e){var t=e.url,n=e.isMuted,c=Object(f.b)(),r=Object(f.c)(pe),i=Object(f.c)(ve),o=Object(f.c)(Ie),s=Object(f.c)(he),l=Object(a.useRef)(null),d=Object(a.useState)(!1),b=Object(Re.a)(d,2),p=b[0],g=b[1];return Object(a.useEffect)((function(){!r&&l.current&&p&&l.current.seekTo(i,"seconds"),s&&l.current&&p&&(l.current.seekTo(i,"seconds"),c(fe(!1)))})),Object(u.c)(Me.a,{url:t,ref:l,width:"100%",height:"auto",playing:r,muted:n,onProgress:function(e){J(i,3)!==J(e.playedSeconds,3)&&c(oe(e.playedSeconds))},progressInterval:100,onReady:function(){g(!0)},onEnded:function(){c(ae(!1)),c(oe(o))},tabIndex:-1,disablePictureInPicture:!0})},He={name:"vyrci0",styles:"cursor:pointer;transition-duration:0.3s;transition-property:transform;&:hover{transform:scale(1.1);}&:active{transform:scale(0.9);}"},Le={name:"1gnq0uh",styles:"cursor:pointer;transition-duration:0.3s;transition-property:transform;&:hover{transform:scale(1.05);}"},Be={name:"1supqt3",styles:"display:flex;gap:10px;justify-content:center;align-items:center;"},Fe={name:"1jblnxu",styles:"display:inline-block;flex-wrap:nowrap;"},Ue={name:"1r139wu",styles:"display:inline-block;width:110px;"},qe=function(){var e=Object(f.b)(),t=Object(f.c)(pe),n=Object(f.c)(ge),c=Object(f.c)(me),a=function(){e(re(!n))},r=function(){e(ae(!t))},i=Object(u.b)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",padding:"10px"},""),o=Object(u.b)({display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%",padding:"10px",gap:"50px"},""),s=He,l=Le;return Object(u.c)("div",{css:i,title:"Video Controls"},Object(u.c)("div",{css:o,title:"Video Controls Top Row"},Object(u.c)("div",{css:Be},Object(u.c)("div",{css:Fe},"Preview Mode"),Object(u.c)(d.a,{css:l,icon:n?b.v:b.u,size:"1x",title:"Play Preview Switch: "+n,role:"switch","aria-checked":n,tabIndex:0,onClick:a,onKeyDown:function(e){" "===e.key&&a()}})),Object(u.c)(d.a,{css:s,icon:t?b.k:b.m,size:"2x",role:"button","aria-pressed":t,tabIndex:0,title:"Play Button",onClick:r,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||r()}}),Object(u.c)("div",{css:Ue},new Date(c||0).toISOString().substr(11,12))))},Ve={name:"wnc553",styles:"display:inline-block;padding:15px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:500px;"},_e={name:"18kfia5",styles:"font-weight:bold;font-size:24px;vertical-align:-2.5px;"},Ge={name:"6xix1i",styles:"font-size:16px;"},Ke=function(){var e,t=Object(f.c)(Ce),n=Object(f.c)(Pe),c=Ve,a=_e;return n&&n.length&&(e=Object(u.c)("div",{css:c,title:"Video Presenters"},"by ",n.join(", "))),Object(u.c)("div",{title:"Video Area Header",css:Ge},Object(u.c)("div",{css:Object(s.a)([c,a],""),title:"Video Title"},t),e)},Ye=function(){var e,t=Object(f.b)(),n=Object(f.c)(ye),c=Object(f.c)(ke),r=Object(f.c)((function(e){return e.videoState.status})),i=Object(f.c)((function(e){return e.videoState.error}));Object(a.useEffect)((function(){"idle"===r&&t(Q({mediaPackageId:g,ocUrl:E}))}),[r,t]),"loading"===r?e=Object(u.c)("div",{className:"loader"},"Loading..."):"success"===r?e="":"failed"===r&&(e=Object(u.c)("div",null,i));for(var o=[],s=0;s<c;s++)o.push(Object(u.c)(ze,{key:s,url:n[s],isMuted:0!==s}));var l=Object(u.b)({display:"flex",width:"auto",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"0px",borderBottom:"1px solid #BBB"},""),d=Object(u.b)({backgroundColor:"black",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%"},"");return Object(u.c)("div",{css:l,title:"Video Area"},e,Object(u.c)(Ke,null),Object(u.c)("div",{css:d,title:"Video Player Area"},o),Object(u.c)(qe,null))},Je=n(44),Xe=n.n(Je),Qe=n(45);function Ze(e){var t=this;this.audioContext=new AudioContext,this.oCanvas=document.createElement("canvas"),this.buffer={},this.WIDTH=0,this.HEIGHT=0,this.channelData=[],this.waveformImage="",this.audioBuffer=null,this.aveRMS=0,this.peakRMS=0,this.numberSamples=1e5,this.waveformType="img",this.drawWaveform=this.drawCanvasWaveform,e.width&&e.height&&this.setDimensions(e.width,e.height),e.samples&&(this.numberSamples=e.samples),e.type&&"svg"===e.type&&(this.waveformType="svg",this.drawWaveform=this.delegateToWorker,this.worker=null),e.media&&this.generateWaveform(e.media).then((function(){t.getAudioData(),t.drawWaveform(),"svg"!==t.waveformType&&n.forEach((function(e){e(t.waveformImage||t.svgPath,t.waveformType)}))})).catch((function(e){return console.log(e)}));var n=[];Object.defineProperty(this,"oncomplete",{get:function(){return n},set:function(e,t){if("function"==typeof e){if(this.waveformImage||this.svgPath)return void e(this.waveformImage||this.svgPath,this.svgLength);n.push(e)}}})}Ze.prototype={constructor:Ze,setDimensions:function(e,t){this.oCanvas.width=e,this.WIDTH=e,this.oCanvas.height=t,this.HEIGHT=t,this.ocCtx=this.oCanvas.getContext("2d")},decodeAudioData:function(e){var t=this;return new Promise((function(n,c){new Promise((function(t,n){if(e instanceof ArrayBuffer)t(e);else if(e instanceof Blob){var c=new FileReader;c.onload=function(){t(c.result)},c.readAsArrayBuffer(e)}})).then((function(e){t.audioContext.decodeAudioData(e).then((function(e){t.buffer=e,n()})).catch((function(e){c(e)}))})).catch((function(e){c(e)}))}))},getAudioData:function(e){e=e||this.buffer,this.channelData=this.dropSamples(e.getChannelData(0),this.numberSamples)},drawCanvasWaveform:function(e){var t=this;e=e||1,this.ocCtx.fillStyle="#FFFFFF00",this.ocCtx.fillRect(0,0,this.WIDTH,this.HEIGHT),this.ocCtx.lineWidth=1,this.ocCtx.strokeStyle="black";var n=1*this.WIDTH/this.channelData.length,c=0;this.ocCtx.beginPath(),this.ocCtx.moveTo(c,this.channelData[0]*this.HEIGHT/128/2),this.channelData.forEach((function(a){var r=a*e,i=t.HEIGHT*(1+r)/2;t.ocCtx.lineTo(c,i),t.aveRMS+=a*a,t.peakRMS=Math.max(a*a,t.peakRMS),c+=n})),this.ocCtx.lineTo(this.WIDTH,this.HEIGHT/2),this.ocCtx.stroke(),this.aveRMS=Math.sqrt(this.aveRMS/this.channelData.length),this.aveDBs=20*Math.log(this.aveRMS)/Math.log(10),this.waveformImage=this.oCanvas.toDataURL()},dropSamples:function(e,t){var n=Math.max(parseInt(e.length/t),1);return e.filter((function(e,t){return t%n===0}))},generateWaveform:function(e){return this.decodeAudioData(e)},delegateToWorker:function(){this.worker||(this.worker=new Worker("../util/svgworker.js"),this.worker.addEventListener("message",this.workerCommunication.bind(this),!1),this.worker.postMessage(this.channelData))},workerCommunication:function(e){switch(e.data.type){case"path":this.setSVGpath(e.data.path,e.data.length),this.worker.removeEventListener("message",this.workerCommunication.bind(this),!1),this.worker.terminate(),this.worker=null}},setSVGpath:function(e,t){var n=this;this.svgPath=document.createElementNS("http://www.w3.org/2000/svg","path"),this.svgLength=t,this.svgPath.setAttribute("d",e),this.svgPath.setAttribute("vector-effect","non-scaling-stroke"),this.svgPath.setAttribute("stroke-width","0.5px"),this.oncomplete.forEach((function(e){return e(n.svgPath,n.svgLength)}))}};var $e={name:"190c1k3",styles:"height:230px;"},et={name:"2q5poe",styles:"transform:scaleY(1.5) rotate(90deg);padding:5px;"},tt={name:"woscqz",styles:"width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid black;"},nt={name:"17o39q1",styles:"width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid black;"},ct=function(e){var t=e.timelineWidth,n=Object(f.b)(),c=Object(f.c)(pe),i=Object(f.c)(me),o=Object(f.c)(Se),s=Object(a.useState)({x:0,y:0}),l=Object(Re.a)(s,2),p=l[0],g=l[1],h=Object(a.useState)(!1),m=Object(Re.a)(h,2),v=m[0],j=m[1],O=Object(a.useRef)(0),x=r.a.useRef(null);Object(a.useEffect)((function(){i!==O.current&&(w(),O.current=i)})),Object(a.useEffect)((function(){i&&o&&g({x:i/o*t,y:0})}),[t]);var w=function(){var e=p.y;g({x:i/o*t,y:e})},y=Object(u.b)({backgroundColor:"black",height:"250px",width:"1px",position:"absolute",zIndex:2,boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"},""),k=Object(u.b)({backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"10px",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",cursor:v?"grabbing":"grab",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"}},""),S=et,I=tt,C=nt;return Object(u.c)(Xe.a,{onStart:function(){j(!0)},onStop:function(e,c){var a=c.x,r=c.y;g({x:a,y:r}),n(ie(a/t*o)),j(!1)},axis:"x",bounds:"parent",position:p,disabled:c,nodeRef:x},Object(u.c)("div",{ref:x,css:y,title:"Scrubber"},Object(u.c)("div",{css:C}),Object(u.c)("div",{css:k,title:"dragHandle","aria-grabbed":v},Object(u.c)(d.a,{css:S,icon:b.a,size:"1x"})),Object(u.c)("div",{css:I})))},at=function(e){e.timelineWidth;var t=Object(f.c)(je),n=Object(f.c)(Se),c=Object(f.c)(Oe),a=Object(u.b)({display:"flex",flexDirection:"row",paddingTop:"10px"},"");return Object(u.c)("div",{css:a,title:"Segments"},t.map((function(e,t){return Object(u.c)("div",{key:e.id,title:"Segment",css:Object(s.a)({background:(a=e.deleted,r=c===t,a||r?a&&!r?"repeating-linear-gradient(\n                -45deg,\n                rgba(255, 45, 45, 0.4),\n                rgba(255, 45, 45, 0.4) 10px,\n                rgba(255, 0, 0, 0.4) 10px,\n                rgba(255, 0, 0, 0.4) 20px);":!a&&r?"rgba(0, 0, 200, 0.4)":a&&r?"repeating-linear-gradient(\n                -45deg,\n                rgba(200, 45, 45, 0.4),\n                rgba(200, 45, 45, 0.4) 10px,\n                rgba(200, 0, 0, 0.4) 10px,\n                rgba(200, 0, 0, 0.4) 20px);":void 0:"rgba(0, 0, 255, 0.4)"),borderRadius:"5px",borderStyle:c===t?"dashed":"solid",borderColor:"white",borderWidth:"1px",boxSizing:"border-box",width:(e.end-e.start)/n*100+"%",height:"230px",zIndex:1},"")});var a,r})))},rt={name:"e6zfwc",styles:"min-height:0;"},it=function(){var e=Object(f.c)(ye),t=Object(f.c)((function(e){return e.videoState.status})),n=Object(u.b)({display:"flex",flexDirection:"column",position:"absolute",justifyContent:"center",width:"100%",height:"230px",paddingTop:"10px"},""),c=Object(a.useState)([]),r=Object(Re.a)(c,2),i=r[0],o=r[1];Object(a.useEffect)((function(){if("success"===t){var n=[],c=0;[e[0]].forEach((function(e,t,a){var r=null,i=new XMLHttpRequest;i.open("GET",e),i.responseType="blob",i.onload=function(){r=i.response,new Ze({type:"img",width:"2000",height:"230",samples:1e5,media:new File([r],r)}).oncomplete=function(e,t){n.push(e),++c===a.length&&o(n)}},i.send()}))}}),[t,e]);return Object(u.c)("div",{css:n,title:"WaveformDisplayTest"},i?i.map((function(e,t){return Object(u.c)("img",{key:t,alt:"Waveform",src:e||"",css:rt})})):Object(u.c)(d.a,{icon:b.q,spin:!0,size:"3x"}))},ot=function(){var e=Object(Qe.a)(),t=e.ref,n=e.width,c=void 0===n?1:n,a=Object(u.b)({position:"relative",height:"250px",width:"100%"},"");return Object(u.c)("div",{ref:t,css:a,title:"Timeline"},Object(u.c)(ct,{timelineWidth:c}),Object(u.c)("div",{css:$e},Object(u.c)(it,null),Object(u.c)(at,{timelineWidth:c})))},st={padding:"16px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)"},lt=function(e){var t=e.iconName,n=e.actionName,c=e.action,a=Object(f.b)(),r=function(){c&&a(c())};return Object(u.c)("div",{css:Object(s.a)([V,st],""),role:"button",tabIndex:0,onClick:r,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||r()}},Object(u.c)(d.a,{icon:t,size:"1x"}),Object(u.c)("span",null,n))},ut=function(){var e=Object(f.b)(),t=Object(f.c)(xe);return Object(u.c)("div",{css:Object(s.a)([V,st],""),role:"button",tabIndex:0,onClick:function(){return e(le())}},Object(u.c)(d.a,{icon:t?b.x:b.y,size:"1x"}),Object(u.c)("div",null,t?"Delete":"Restore"))},dt=function(){var e=Object(u.b)({display:"flex",flexDirection:"row",justifyContent:"space-between",gap:"30px"},""),t=Object(u.b)({display:"flex",flexDirection:"row",gap:"30px"},"");return Object(u.c)("div",{css:e},Object(u.c)("div",{css:t},Object(u.c)(lt,{iconName:b.f,actionName:"Cut",action:se}),Object(u.c)(ut,null),Object(u.c)(lt,{iconName:b.r,actionName:"Merge Left",action:de}),Object(u.c)(lt,{iconName:b.s,actionName:"Merge Right",action:be})),Object(u.c)("div",{css:t},Object(u.c)(lt,{iconName:b.n,actionName:"Reset changes",action:null}),Object(u.c)(lt,{iconName:b.n,actionName:"Undo",action:null})))},bt=function(e){var t=e.iconName,n=e.stateName,c=Object(f.b)(),a=function(){c(y(n)),c(k(1))},r=Object(u.b)({width:"250px",height:"220px",flexDirection:"column",fontSize:"x-large",gap:"30px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)"},"");return Object(u.c)("div",{css:Object(s.a)([V,r],""),role:"button",tabIndex:0,onClick:a,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||a()}},Object(u.c)(d.a,{icon:t,size:"2x"}),Object(u.c)("div",null,n))},ft=function(){var e=Object(u.b)({display:"flex",flexDirection:"row",justifyContent:"space-around",gap:"30px"},"");return Object(u.c)("div",{css:e,title:"Finish Menu"},Object(u.c)(bt,{iconName:b.o,stateName:"Save changes"}),Object(u.c)(bt,{iconName:b.h,stateName:"Start processing"}),Object(u.c)(bt,{iconName:b.t,stateName:"Discard changes"}))},pt={status:"idle",error:void 0},gt=Object(p.b)("video/postVideoInformation",function(){var e=Object(T.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.post("".concat(t.ocUrl,"/editor/").concat(t.mediaPackageId,"/edit.json"),{segments:mt(t.segments),tracks:t.tracks});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ht=Object(p.c)({name:"workflowPostState",initialState:pt,reducers:{},extraReducers:function(e){e.addCase(gt.pending,(function(e,t){e.status="loading"})),e.addCase(gt.fulfilled,(function(e,t){e.status="success"})),e.addCase(gt.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),mt=function(e){var t=[];return e.forEach((function(e){t.push({start:e.start,end:e.end,deleted:e.deleted,selected:!1})})),t},vt=function(e){return e.workflowPostState.status},jt=function(e){return e.workflowPostAndProcessState.error},Ot=ht.reducer;var xt={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},wt=function(){var e=Object(f.b)(),t=Object(f.c)(je),n=Object(f.c)(De),c=Object(f.c)(vt),a=b.o,r=!1;"loading"===c?(a=b.q,r=!0):"success"===c?(a=b.b,r=!1):"failed"===c&&(a=b.g,r=!1);var i=function(){e(gt({segments:t,tracks:n,mediaPackageId:g,ocUrl:E}))},o=xt;return Object(u.c)("div",{css:Object(s.a)([V,o],""),title:"Save Button",role:"button",tabIndex:0,onClick:i,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||i()}},Object(u.c)(d.a,{icon:a,spin:r,size:"1x"}),Object(u.c)("span",null,"Yes, Save changes"))},yt=function(){var e=Object(f.c)(S),t=Object(f.c)(vt),n=Object(f.c)(jt),c=Object(u.b)({height:"100%",display:"Save changes"!==e?"none":"flex",flexDirection:"column",alignItems:"center",gap:"30px"},""),a=Object(u.b)(Object(l.a)(Object(l.a)({},"failed"!==t&&{display:"none"}),{},{borderColor:"red",borderStyle:"dashed",fontWeight:"bold",padding:"10px"}),"");return Object(u.c)("div",{css:c,title:"Save Area"},Object(u.c)("span",null,"Save the changes you made, but the video will not be cut yet. ",Object(u.c)("br",null),'To make Opencast cut the video, please select "Process". ',Object(u.c)("br",null),"Doth thou truly wish tah save?"),Object(u.c)("div",{css:_},Object(u.c)(qt,{pageNumber:0,label:"No, take me back",iconName:b.d}),Object(u.c)(wt,null)),Object(u.c)("div",{css:a,title:"Error Box"},Object(u.c)("span",null,"An error has occured. Please wait a bit and try again. Details: "),Object(u.c)("br",null),n,Object(u.c)("br",null)))},kt=Object(p.c)({name:"abortState",initialState:{value:!1},reducers:{setState:function(e,t){e.value=t.payload}}}),St=kt.actions.setState,It=function(e){return e.abortState.value},Ct=kt.reducer;var Pt={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},Dt=function(){var e=Object(f.b)(),t=function(){e(St(!0))},n=Pt;return Object(u.c)("div",{css:Object(s.a)([V,n],""),title:"Discard changes button",role:"button",tabIndex:0,onClick:t,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||t()}},Object(u.c)(d.a,{icon:b.t,size:"1x"}),Object(u.c)("span",null,"Yes, discard changes"))},Tt=function(){var e=Object(f.c)(S),t=Object(u.b)({display:"Discard changes"!==e?"none":"flex",flexDirection:"column",alignItems:"center",gap:"30px"},"");return Object(u.c)("div",{css:t,title:"Abort Area"},Object(u.c)("span",null,"Discard all the changes you made? They will be lost forever! ",Object(u.c)("br",null),"Doth thou truly wish tah abort?"),Object(u.c)("div",{css:_},Object(u.c)(qt,{pageNumber:0,label:"No, take me back",iconName:b.d}),Object(u.c)(Dt,null)))},Nt=function(e){var t=e.stateName,n=e.workflowIndex,c=Object(f.b)(),a=Object(f.c)(we),r=function(){c(ue(n))},i=Object(u.b)({backgroundColor:n!==a?"snow":"#DDD",padding:"16px"},"");return Object(u.c)("div",{css:Object(s.a)([V,i],""),title:"Workflow Button for "+t,role:"button",tabIndex:0,onClick:r,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||r()}},Object(u.c)("span",null,t))},At=function(){var e=Object(f.c)(Te),t=Object(f.c)(S),n=Object(f.c)(I),c=Object(u.b)({display:"Start processing"===t&&1===n?"flex":"none",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"50px"},""),a=Object(u.b)({display:"flex",flexDirection:"column",alignItems:"left",gap:"20px"},"");return Object(u.c)("div",{css:c},Object(u.c)("h2",null,"Select a workflow"),Object(u.c)("div",{css:a,title:"Workflow Selection Area"},e.map((function(e,t){return Object(u.c)(Nt,{key:t,stateName:e.name,workflowIndex:t})}))),Object(u.c)("div",null,"And this is where I would put a workflow description.... if I had one!"),Object(u.c)("div",{css:_},Object(u.c)(qt,{pageNumber:0,label:"Take me back",iconName:b.d}),Object(u.c)(qt,{pageNumber:2,label:"Continue",iconName:b.e})))},Et={status:"idle",error:void 0},Rt=Object(p.b)("video/postVideoInformationWithWorkflow",function(){var e=Object(T.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.post("".concat(t.ocUrl,"/editor/").concat(t.mediaPackageId,"/edit.json"),{segments:mt(t.segments),tracks:t.tracks,workflows:t.workflowID});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Wt=Object(p.c)({name:"workflowPostAndProcessState",initialState:Et,reducers:{},extraReducers:function(e){e.addCase(Rt.pending,(function(e,t){e.status="loading"})),e.addCase(Rt.fulfilled,(function(e,t){e.status="success"})),e.addCase(Rt.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),Mt=function(e){return e.workflowPostAndProcessState.status},zt=function(e){return e.workflowPostAndProcessState.error},Ht=Wt.reducer;var Lt={name:"1wbzqqt",styles:"padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);"},Bt=function(){var e=Object(f.b)(),t=Object(f.c)(Te),n=Object(f.c)(we),c=Object(f.c)(je),a=Object(f.c)(De),r=Object(f.c)(Mt),i=function(){e(Rt({segments:c,tracks:a,mediaPackageId:g,ocUrl:E,workflowID:[t[n]]}))},o=b.h,l=!1;"loading"===r?(o=b.q,l=!0):"success"===r?(o=b.b,l=!1):"failed"===r&&(o=b.g,l=!1);var p=Lt;return Object(u.c)("div",{css:Object(s.a)([V,p],""),title:"Start processing button",role:"button",tabIndex:0,onClick:i,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||i()}},Object(u.c)(d.a,{icon:o,spin:l,size:"1x"}),Object(u.c)("span",null,"Yes, start processing"))},Ft=function(){var e=Object(f.c)(Mt),t=Object(f.c)(zt),n=Object(u.b)({display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",gap:"30px"},""),c=Object(u.b)(Object(l.a)(Object(l.a)({},"failed"!==e&&{display:"none"}),{},{borderColor:"red",borderStyle:"dashed",fontWeight:"bold",padding:"10px"}),"");return Object(u.c)("div",{css:n,title:"Workflow Configuration Area"},Object(u.c)("h2",null,"Workflow Configuration"),Object(u.c)(d.a,{icon:b.w,size:"10x"}),"Placeholder",Object(u.c)("div",null,"Satisfied with your configuration?"),Object(u.c)("div",{css:_},Object(u.c)(qt,{pageNumber:1,label:"No, take me back",iconName:b.d}),Object(u.c)(Bt,null)),Object(u.c)("div",{css:c,title:"Error Box"},Object(u.c)("span",null,"An error has occured. Please wait a bit and try again. Details: "),Object(u.c)("br",null),t))};var Ut={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},qt=function(e){var t=e.pageNumber,n=e.label,c=e.iconName,a=Object(f.b)(),r=function(){a(k(t))},i=Ut;return Object(u.c)("div",{css:Object(s.a)([V,i],""),role:"button",tabIndex:0,onClick:r,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||r()}},Object(u.c)(d.a,{icon:c,size:"1x"}),Object(u.c)("span",null,n))},Vt=function(){var e=Object(f.c)(I),t=Object(u.b)({display:0!==e?"none":"block"},""),n=Object(u.b)({display:1!==e?"none":"block"},""),c=Object(u.b)({display:2!==e?"none":"block"},"");return Object(u.c)("div",{title:"Finish"},Object(u.c)("div",{css:t},Object(u.c)(ft,null)),Object(u.c)("div",{css:n},Object(u.c)(yt,null),Object(u.c)(At,null),Object(u.c)(Tt,null)),Object(u.c)("div",{css:c},Object(u.c)(Ft,null)))};var _t={name:"8atqhb",styles:"width:100%;"},Gt=function(){var e=Object(f.c)(j),t=Object(u.b)({display:e!==c.cutting?"none":"flex",flexDirection:"column",justifyContent:"space-around",gap:"20px",paddingRight:"20px",paddingLeft:"20px"},""),n=Object(u.b)({display:e!==c.finish?"none":"flex",flexDirection:"column",justifyContent:"space-around",gap:"20px",paddingRight:"20px",height:"100%"},""),a=Object(u.b)({display:e===c.cutting||e===c.finish?"none":"flex",flexDirection:"column",alignItems:"center",padding:"20px",gap:"20px"},"");return Object(u.c)("main",{title:"MainMenuContext",css:_t,role:"main"},Object(u.c)("div",{css:t,title:"Cutting Container"},Object(u.c)(Ye,null),Object(u.c)(dt,null),Object(u.c)(ot,null)),Object(u.c)("div",{css:n,title:"Finish Container"},Object(u.c)(Vt,null)),Object(u.c)("div",{css:a},Object(u.c)(d.a,{icon:b.w,size:"10x"}),"Placeholder"))};var Kt={name:"2ts5ex",styles:"width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:20px;gap:20px;"},Yt=function(){var e=Object(f.c)(It),t=Object(f.c)(Mt),n=Object(f.c)(Se),c=Kt;return Object(u.c)("div",{css:c,title:"The last area"},Object(u.c)(d.a,{icon:e?b.t:"success"===t?b.c:b.n,size:"10x"}),e?"You really did it. All your changes are now lost forever. You can now continue doing whatever you want.":"success"===t?"Changes successfully saved to Opencast. Processing your changes may take up to\n              ".concat(new Date(2*n).toISOString().substr(11,8)," hours.\n              You can now close the editor."):"Now this is awkward. Something has gone very wrong.")},Jt=function(){var e=Object(f.c)(It),t=Object(f.c)(Mt),n={display:"flex",flexDirection:"row",height:"100%"};return Object(u.c)(r.a.Fragment,null,e||"success"===t?Object(u.c)(Yt,null):Object(u.c)("div",{css:n,title:"Body"},Object(u.c)(Ee,null),Object(u.c)(Gt,null)))};var Xt,Qt=function(){return Object(u.c)("div",{className:"App"},Object(u.c)(U,null),Object(u.c)(Jt,null))},Zt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,99)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},$t=Object(p.a)({reducer:{mainMenuState:O,finishState:C,videoState:Ne,workflowPostState:Ot,workflowPostAndProcessState:Ht,abortState:Ct}}),en=Promise.race([M(),(Xt=300,new Promise((function(e,t){return setTimeout(e,Xt)})))]);en.then((function(){o.a.render(Object(u.c)(r.a.StrictMode,null,Object(u.c)(f.a,{store:$t},Object(u.c)(Qt,null))),document.getElementById("root"))}),(function(e){return t=Object(u.c)("p",null,"Fatal error while loading app: ".concat(e.message),Object(u.c)("br",null),"This might be caused by a incorrect configuration by the system administrator."),void o.a.render(t,document.getElementById("root"));var t})),Zt()}},[[98,1,2]]]);
//# sourceMappingURL=main.f5472d02.chunk.js.map