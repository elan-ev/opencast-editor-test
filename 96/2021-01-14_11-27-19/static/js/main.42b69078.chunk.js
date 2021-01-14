(this.webpackJsonpklipping=this.webpackJsonpklipping||[]).push([[0],{52:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);n(5);var c,a=n(1),i=n.n(a),r=n(17),o=n.n(r),s=(n(52),n(7)),l=n(9),u=n(0),d=n(6),b=n(3),f=n(2),p=n(8);!function(e){e.cutting="Cutting",e.metadata="Metadata",e.thumbnail="Thumbnail",e.finish="Finish"}(c||(c={}));var h,g={value:c.cutting},m=Object(p.c)({name:"mainMenuState",initialState:g,reducers:{setState:function(e,t){e.value=t.payload}}}),v=m.actions.setState,j=function(e){return e.mainMenuState.value},O=m.reducer,x=Object(p.c)({name:"finishState",initialState:{value:"Start processing",pageNumber:0},reducers:{setState:function(e,t){e.value=t.payload},setPageNumber:function(e,t){e.pageNumber=t.payload}}}),w=x.actions,y=w.setState,k=w.setPageNumber,S=function(e){return e.finishState.value},I=function(e){return e.finishState.pageNumber},C=x.reducer,D=n(10),P=n.n(D),T=n(13),N=n(42),A=n.n(N),E=window.location.origin,R=!0,M=!0,W=function(){var e=Object(T.a)(P.a.mark((function e(){var t,n,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z().then((function(e){e=H(e,!1,"src-server","from server settings file"),L(e)}));case 2:t=new URLSearchParams(window.location.search),n={},t.forEach((function(e,t){var c=n,a=t.split(".");a.slice(0,-1).forEach((function(e){e in c||(c[e]={}),c=c[e]})),c[a[a.length-1]]=e})),c=H(n,!0,"src-url","given as URL GET parameter"),L(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(e){for(var t in e)null!=e.mediaPackageId&&(h=e.mediaPackageId),"debugging"===t&&null!=e[t].ocUrl&&(E=e[t].ocUrl),"metadata"===t&&null!=e[t].show&&(R=e[t].show),"thumbnail"===t&&null!=e[t].show&&(M=e[t].show)},z=function(){var e=Object(T.a)(P.a.mark((function e(){var t,n,c,a,i,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n="/96/2021-01-14_11-27-19").endsWith("/")||(n+="/"),c=Object({NODE_ENV:"production",PUBLIC_URL:"/96/2021-01-14_11-27-19",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SETTINGS_PATH||"editor-settings.toml",a=c.startsWith("/")?"":n,i="".concat(window.location.origin).concat(a).concat(c),e.prev=5,e.next=8,fetch(i);case 8:r=e.sent,e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(5),console.warn("Could not access '".concat(c,"' due to network error!"),e.t0||""),e.abrupt("return",null);case 15:if(404!==r.status){e.next=20;break}return console.debug("'".concat(c,"' returned 404: ignoring")),e.abrupt("return",null);case 20:if(r.ok){e.next=23;break}return console.error("Fetching '".concat(c,"' failed: ").concat(r.status," ").concat(r.statusText)),e.abrupt("return",null);case 23:if(!(null===(t=r.headers.get("Content-Type"))||void 0===t?void 0:t.startsWith("text/html"))){e.next=26;break}return console.warn("'".concat(c,"' request has 'Content-Type: text/html' -> ignoring...")),e.abrupt("return",null);case 26:return e.prev=26,e.t1=A.a,e.next=30,r.text();case 30:return e.t2=e.sent,e.abrupt("return",(0,e.t1)(e.t2));case 34:throw e.prev=34,e.t3=e.catch(26),console.error("Could not parse '".concat(c,"' as TOML: "),e.t3),new SyntaxError("Could not parse '".concat(c,"' as TOML: ").concat(e.t3));case 38:case"end":return e.stop()}}),e,null,[[5,11],[26,34]])})));return function(){return e.apply(this,arguments)}}(),H=function(e,t,n,c){var a=function(e,t,n){return"function"===typeof e?i(e,t,n):r(e,t,n)},i=function(e,a,i){try{var r=e(a,t,n);return void 0===r?a:r}catch(o){return console.warn("Validation of setting '".concat(i,"' (").concat(c,") with value '").concat(a,"' failed: ")+"".concat(o,". Ignoring.")),null}},r=function(e,t,n){var i={};for(var r in t){var o=n?"".concat(n,".").concat(r):r;if(r in e){var s=a(e[r],t[r],o);null!==s&&(i[r]=s)}else console.warn("'".concat(o,"' (").concat(c,") is not a valid settings key. Ignoring."))}return i};return a(F,e,"")},B={string:function(e,t){if("string"!==typeof e)throw new Error("is not a string, but should be")},boolean:function(e,t){if("boolean"!==typeof e){if(t){if("true"===e)return!0;if("false"===e)return!1;throw new Error("can't be parsed as boolean")}throw new Error("is not a boolean")}}},F={mediaPackageId:B.string,debugging:{ocUrl:B.string},metadata:{show:B.boolean},thumbnail:{show:B.boolean}};var U=function(){return Object(u.c)(u.a,{styles:q})},q={name:"1bjjf7p",styles:"body{background-color:snow;font-size:medium;min-height:100vh;}"},V=Object(u.b)({borderRadius:"10px",cursor:"pointer",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.1)"},"&:focus":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"},display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",textAlign:"center"},""),_=Object(u.b)({display:"flex",flexDirection:"row",gap:"20px"},""),G={name:"8kxyvl",styles:"position:absolute;left:-99999px;height:1px;width:1px;overflow:hidden;"},K=n(46);function Y(e){return J.apply(this,arguments)}function J(){return(J=Object(T.a)(P.a.mark((function e(t){var n,c,a,i,r,o,s,u,d,b,f=arguments;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.length>1&&void 0!==f[1]?f[1]:{},c=n.body,a=Object(K.a)(n,["body"]),i={"Content-Type":"application/json"},r=btoa(unescape(encodeURIComponent("admin:opencast"))),o={Authorization:"Basic ".concat(r)},s=Object(l.a)(Object(l.a)({method:c?"POST":"GET"},a),{},{headers:Object(l.a)(Object(l.a)(Object(l.a)({},i),a.headers),o)}),c&&(s.body=JSON.stringify(c)),e.prev=6,e.next=9,window.fetch(t,s);case 9:return b=e.sent,e.next=12,b.text();case 12:if(d=e.sent,u=d.length?JSON.parse(d):"",!b.ok){e.next=16;break}return e.abrupt("return",u);case 16:throw new Error(b.statusText);case 19:return e.prev=19,e.t0=e.catch(6),e.abrupt("return",Promise.reject(e.t0.message?e.t0.message:u));case 22:case"end":return e.stop()}}),e,null,[[6,19]])})))).apply(this,arguments)}Y.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Y(e,Object(l.a)(Object(l.a)({},t),{},{method:"GET"}))},Y.post=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Y(e,Object(l.a)(Object(l.a)({},n),{},{body:t}))};var X=function(e,t){var n=Math.pow(10,t);return Math.round((e+Number.EPSILON)*n)/n},Q={isPlaying:!1,isPlayPreview:!0,currentlyAt:0,segments:[{id:Object(p.d)(),start:0,end:1,deleted:!1}],tracks:[],activeSegmentIndex:0,selectedWorkflowIndex:0,previewTriggered:!1,videoURLs:[],videoCount:0,duration:0,title:"",presenters:[],workflows:[],status:"idle",error:void 0},Z=Object(p.b)("video/fetchVideoInformation",function(){var e=Object(T.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.get("".concat(t.ocUrl,"/editor/").concat(t.mediaPackageId,"/edit.json"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),$=Object(p.c)({name:"videoState",initialState:Q,reducers:{setIsPlaying:function(e,t){e.isPlaying=t.payload},setIsPlayPreview:function(e,t){e.isPlayPreview=t.payload},setPreviewTriggered:function(e,t){e.previewTriggered=t.payload},setCurrentlyAt:function(e,t){e.currentlyAt=X(t.payload,0),ee(e),ce(e)},setCurrentlyAtInSeconds:function(e,t){e.currentlyAt=X(1e3*t.payload,0),ee(e),ce(e)},addSegment:function(e,t){e.segments.push(t.payload)},cut:function(e){if(e.segments[e.activeSegmentIndex].start===e.currentlyAt||e.segments[e.activeSegmentIndex].end===e.currentlyAt)return e;var t={id:Object(p.d)(),start:e.segments[e.activeSegmentIndex].start,end:e.currentlyAt,deleted:e.segments[e.activeSegmentIndex].deleted},n={id:Object(p.d)(),start:e.currentlyAt,end:e.segments[e.activeSegmentIndex].end,deleted:e.segments[e.activeSegmentIndex].deleted};e.segments.splice(e.activeSegmentIndex,1,t,n)},markAsDeletedOrAlive:function(e){e.segments[e.activeSegmentIndex].deleted=!e.segments[e.activeSegmentIndex].deleted},setSelectedWorkflowIndex:function(e,t){e.selectedWorkflowIndex=t.payload},mergeLeft:function(e){ne(e,e.activeSegmentIndex,e.activeSegmentIndex-1)},mergeRight:function(e){ne(e,e.activeSegmentIndex,e.activeSegmentIndex+1)}},extraReducers:function(e){e.addCase(Z.pending,(function(e,t){e.status="loading"})),e.addCase(Z.fulfilled,(function(e,t){e.status="success",e.videoURLs=t.payload.tracks.reduce((function(e,t){return e.push(t.uri),e}),[]),e.videoCount=t.payload.tracks.length,e.duration=t.payload.duration,e.title=t.payload.title,e.presenters=[],e.segments=te(t.payload.segments,t.payload.duration),e.tracks=t.payload.tracks,e.workflows=t.payload.workflows.sort((function(e,t){return e.displayOrder>t.displayOrder?1:e.displayOrder<t.displayOrder?-1:0}))})),e.addCase(Z.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),ee=function(e){e.activeSegmentIndex=e.segments.findIndex((function(t){return t.start<=e.currentlyAt&&t.end>=e.currentlyAt})),e.activeSegmentIndex<0&&(e.activeSegmentIndex=0)},te=function(e,t){var n=[];return 0===e.length&&n.push({id:Object(p.d)(),start:0,end:t,deleted:!1}),e.forEach((function(e){n.push({id:Object(p.d)(),start:e.start,end:e.end,deleted:e.deleted})})),n},ne=function(e,t,n){n<0||n>e.segments.length-1||(e.segments[t].start=Math.min(e.segments[t].start,e.segments[n].start),e.segments[t].end=Math.max(e.segments[t].end,e.segments[n].end),e.segments.splice(n,1),ee(e))},ce=function(e){if(e.isPlaying&&e.segments[e.activeSegmentIndex].deleted&&e.isPlayPreview){for(var t=e.segments[e.activeSegmentIndex].end,n=e.activeSegmentIndex;n<e.segments.length&&e.segments[n].deleted;)t=e.segments[n].end,n++;e.currentlyAt=t,e.previewTriggered=!0}},ae=$.actions,ie=ae.setIsPlaying,re=ae.setIsPlayPreview,oe=ae.setCurrentlyAt,se=ae.setCurrentlyAtInSeconds,le=(ae.addSegment,ae.cut),ue=ae.markAsDeletedOrAlive,de=ae.setSelectedWorkflowIndex,be=ae.mergeLeft,fe=ae.mergeRight,pe=ae.setPreviewTriggered,he=function(e){return e.videoState.isPlaying},ge=function(e){return e.videoState.isPlayPreview},me=function(e){return e.videoState.previewTriggered},ve=function(e){return e.videoState.currentlyAt},je=function(e){return e.videoState.currentlyAt/1e3},Oe=function(e){return e.videoState.segments},xe=function(e){return e.videoState.activeSegmentIndex},we=function(e){return!e.videoState.segments[e.videoState.activeSegmentIndex].deleted},ye=function(e){return e.videoState.selectedWorkflowIndex},ke=function(e){return e.videoState.videoURLs},Se=function(e){return e.videoState.videoCount},Ie=function(e){return e.videoState.duration},Ce=function(e){return e.videoState.duration/1e3},De=function(e){return e.videoState.title},Pe=function(e){return e.videoState.presenters},Te=function(e){return e.videoState.tracks},Ne=function(e){return e.videoState.workflows},Ae=$.reducer,Ee=function(e){var t=e.iconName,n=e.stateName,a=Object(f.b)(),i=Object(f.c)(j),r=function(){a(v(n)),n===c.finish&&a(k(0)),a(ie(!1))},o=Object(u.b)(Object(l.a)(Object(l.a)({width:"100%",height:"100px"},i===n&&{backgroundColor:"#DDD"}),{},{flexDirection:"column"}),"");return Object(u.c)("li",{css:Object(s.a)([V,o],""),role:"menuitem",tabIndex:0,onClick:r,onKeyDown:function(e){"Enter"===e.key&&r()}},Object(u.c)(d.a,{icon:t,size:"2x"}),Object(u.c)("div",null,n))},Re=function(){var e=Object(u.b)({borderRight:"1px solid #BBB",width:"100px",display:"flex",flexDirection:"column",flexShrink:0,alignItems:"center",padding:"20px",gap:"30px"},"");return Object(u.c)("nav",{css:e,title:"Main Menu",role:"navigation","aria-label":"Main Navigation"},Object(u.c)(Ee,{iconName:b.i,stateName:c.cutting}),R&&Object(u.c)(Ee,{iconName:b.j,stateName:c.metadata}),M&&Object(u.c)(Ee,{iconName:b.l,stateName:c.thumbnail}),Object(u.c)(Ee,{iconName:b.p,stateName:c.finish}))},Me=n(18),We=n(43),Le=n.n(We);var ze=function(e){var t=e.url,n=e.isMuted,c=Object(f.b)(),i=Object(f.c)(he),r=Object(f.c)(je),o=Object(f.c)(Ce),s=Object(f.c)(me),l=Object(a.useRef)(null),d=Object(a.useState)(!1),b=Object(Me.a)(d,2),p=b[0],h=b[1];return Object(a.useEffect)((function(){!i&&l.current&&p&&l.current.seekTo(r,"seconds"),s&&l.current&&p&&(l.current.seekTo(r,"seconds"),c(pe(!1)))})),Object(u.c)(Le.a,{url:t,ref:l,width:"100%",height:"auto",playing:i,muted:n,onProgress:function(e){X(r,3)!==X(e.playedSeconds,3)&&c(se(e.playedSeconds))},progressInterval:100,onReady:function(){h(!0)},onEnded:function(){c(ie(!1)),c(se(o))},pip:!1,tabIndex:-1})},He={name:"vyrci0",styles:"cursor:pointer;transition-duration:0.3s;transition-property:transform;&:hover{transform:scale(1.1);}&:active{transform:scale(0.9);}"},Be={name:"1gnq0uh",styles:"cursor:pointer;transition-duration:0.3s;transition-property:transform;&:hover{transform:scale(1.05);}"},Fe={name:"1supqt3",styles:"display:flex;gap:10px;justify-content:center;align-items:center;"},Ue={name:"1jblnxu",styles:"display:inline-block;flex-wrap:nowrap;"},qe={name:"1r139wu",styles:"display:inline-block;width:110px;"},Ve=function(){var e=Object(f.b)(),t=Object(f.c)(he),n=Object(f.c)(ge),c=Object(f.c)(ve),a=function(){e(re(!n))},i=function(){e(ie(!t))},r=Object(u.b)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",padding:"10px"},""),o=Object(u.b)({display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%",padding:"10px",gap:"50px"},""),s=He,l=Be;return Object(u.c)("div",{css:r,title:"Video Controls"},Object(u.c)("div",{css:o,title:"Video Controls Top Row"},Object(u.c)("div",{css:Fe,title:"Skips deleted segments when playing the video. Currently "+(n?"on":"off")},Object(u.c)("div",{css:Ue},"Preview Mode"),Object(u.c)(d.a,{css:l,icon:n?b.v:b.u,size:"1x",role:"switch","aria-checked":n,tabIndex:0,"aria-hidden":!1,"aria-label":"Enable or disable preview mode.",onClick:a,onKeyDown:function(e){" "===e.key&&a()}})),Object(u.c)(d.a,{css:s,icon:t?b.k:b.m,size:"2x",title:"Play Button",role:"button","aria-pressed":t,tabIndex:0,"aria-hidden":!1,"aria-label":"Play Button",onClick:i,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||i()}}),Object(u.c)("time",{css:qe,tabIndex:0,role:"timer"},new Date(c||0).toISOString().substr(11,12))))},_e={name:"wnc553",styles:"display:inline-block;padding:15px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:500px;"},Ge={name:"18kfia5",styles:"font-weight:bold;font-size:24px;vertical-align:-2.5px;"},Ke={name:"6xix1i",styles:"font-size:16px;"},Ye=function(){var e,t=Object(f.c)(De),n=Object(f.c)(Pe),c=_e,a=Ge;return n&&n.length&&(e=Object(u.c)("div",{css:c,title:"Video Presenters"},"by ",n.join(", "))),Object(u.c)("div",{title:"Video Area Header",css:Ke},Object(u.c)("div",{css:Object(s.a)([c,a],""),title:"Video Title"},t),e)},Je=function(){var e,t=Object(f.b)(),n=Object(f.c)(ke),c=Object(f.c)(Se),i=Object(f.c)((function(e){return e.videoState.status})),r=Object(f.c)((function(e){return e.videoState.error}));Object(a.useEffect)((function(){"idle"===i&&t(Z({mediaPackageId:h,ocUrl:E}))}),[i,t]),"loading"===i?e=Object(u.c)("div",{className:"loader"},"Loading..."):"success"===i?e="":"failed"===i&&(e=Object(u.c)("div",null,r));for(var o=[],s=0;s<c;s++)o.push(Object(u.c)(ze,{key:s,url:n[s],isMuted:0!==s}));var l=Object(u.b)({display:"flex",width:"auto",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"0px",borderBottom:"1px solid #BBB"},""),d=Object(u.b)({backgroundColor:"black",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%"},"");return Object(u.c)("div",{css:l,title:"Video Area"},e,Object(u.c)(Ye,null),Object(u.c)("div",{css:d,title:"Video Player Area"},o),Object(u.c)(Ve,null))},Xe=n(44),Qe=n.n(Xe),Ze=n(45);function $e(e){var t=this;this.audioContext=new AudioContext,this.oCanvas=document.createElement("canvas"),this.buffer={},this.WIDTH=0,this.HEIGHT=0,this.channelData=[],this.waveformImage="",this.audioBuffer=null,this.aveRMS=0,this.peakRMS=0,this.numberSamples=1e5,this.waveformType="img",this.drawWaveform=this.drawCanvasWaveform,e.width&&e.height&&this.setDimensions(e.width,e.height),e.samples&&(this.numberSamples=e.samples),e.type&&"svg"===e.type&&(this.waveformType="svg",this.drawWaveform=this.delegateToWorker,this.worker=null),e.media&&this.generateWaveform(e.media).then((function(){t.getAudioData(),t.drawWaveform(),"svg"!==t.waveformType&&n.forEach((function(e){e(t.waveformImage||t.svgPath,t.waveformType)}))})).catch((function(e){return console.log(e)}));var n=[];Object.defineProperty(this,"oncomplete",{get:function(){return n},set:function(e,t){if("function"==typeof e){if(this.waveformImage||this.svgPath)return void e(this.waveformImage||this.svgPath,this.svgLength);n.push(e)}}})}$e.prototype={constructor:$e,setDimensions:function(e,t){this.oCanvas.width=e,this.WIDTH=e,this.oCanvas.height=t,this.HEIGHT=t,this.ocCtx=this.oCanvas.getContext("2d")},decodeAudioData:function(e){var t=this;return new Promise((function(n,c){new Promise((function(t,n){if(e instanceof ArrayBuffer)t(e);else if(e instanceof Blob){var c=new FileReader;c.onload=function(){t(c.result)},c.readAsArrayBuffer(e)}})).then((function(e){t.audioContext.decodeAudioData(e).then((function(e){t.buffer=e,n()})).catch((function(e){c(e)}))})).catch((function(e){c(e)}))}))},getAudioData:function(e){e=e||this.buffer,this.channelData=this.dropSamples(e.getChannelData(0),this.numberSamples)},drawCanvasWaveform:function(e){var t=this;e=e||1,this.ocCtx.fillStyle="#FFFFFF00",this.ocCtx.fillRect(0,0,this.WIDTH,this.HEIGHT),this.ocCtx.lineWidth=1,this.ocCtx.strokeStyle="black";var n=1*this.WIDTH/this.channelData.length,c=0;this.ocCtx.beginPath(),this.ocCtx.moveTo(c,this.channelData[0]*this.HEIGHT/128/2),this.channelData.forEach((function(a){var i=a*e,r=t.HEIGHT*(1+i)/2;t.ocCtx.lineTo(c,r),t.aveRMS+=a*a,t.peakRMS=Math.max(a*a,t.peakRMS),c+=n})),this.ocCtx.lineTo(this.WIDTH,this.HEIGHT/2),this.ocCtx.stroke(),this.aveRMS=Math.sqrt(this.aveRMS/this.channelData.length),this.aveDBs=20*Math.log(this.aveRMS)/Math.log(10),this.waveformImage=this.oCanvas.toDataURL()},dropSamples:function(e,t){var n=Math.max(parseInt(e.length/t),1);return e.filter((function(e,t){return t%n===0}))},generateWaveform:function(e){return this.decodeAudioData(e)},delegateToWorker:function(){this.worker||(this.worker=new Worker("../util/svgworker.js"),this.worker.addEventListener("message",this.workerCommunication.bind(this),!1),this.worker.postMessage(this.channelData))},workerCommunication:function(e){switch(e.data.type){case"path":this.setSVGpath(e.data.path,e.data.length),this.worker.removeEventListener("message",this.workerCommunication.bind(this),!1),this.worker.terminate(),this.worker=null}},setSVGpath:function(e,t){var n=this;this.svgPath=document.createElementNS("http://www.w3.org/2000/svg","path"),this.svgLength=t,this.svgPath.setAttribute("d",e),this.svgPath.setAttribute("vector-effect","non-scaling-stroke"),this.svgPath.setAttribute("stroke-width","0.5px"),this.oncomplete.forEach((function(e){return e(n.svgPath,n.svgLength)}))}};var et={name:"190c1k3",styles:"height:230px;"},tt={name:"2q5poe",styles:"transform:scaleY(1.5) rotate(90deg);padding:5px;"},nt={name:"woscqz",styles:"width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid black;"},ct={name:"17o39q1",styles:"width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid black;"},at=function(e){var t=e.timelineWidth,n=Object(f.b)(),c=Object(f.c)(he),r=Object(f.c)(ve),o=Object(f.c)(Ie),s=Object(a.useState)({x:0,y:0}),l=Object(Me.a)(s,2),p=l[0],h=l[1],g=Object(a.useState)(!1),m=Object(Me.a)(g,2),v=m[0],j=m[1],O=Object(a.useRef)(0),x=i.a.useRef(null);Object(a.useEffect)((function(){r!==O.current&&(w(),O.current=r)})),Object(a.useEffect)((function(){r&&o&&h({x:r/o*t,y:0})}),[t]);var w=function(){var e=p.y;h({x:r/o*t,y:e})},y=Object(u.b)({backgroundColor:"black",height:"250px",width:"1px",position:"absolute",zIndex:2,boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"},""),k=Object(u.b)({backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"10px",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",cursor:v?"grabbing":"grab",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"}},""),S=tt,I=nt,C=ct;return Object(u.c)(Qe.a,{onStart:function(){j(!0)},onStop:function(e,c){var a=c.x,i=c.y;h({x:a,y:i}),n(oe(a/t*o)),j(!1)},axis:"x",bounds:"parent",position:p,disabled:c,nodeRef:x},Object(u.c)("div",{ref:x,css:y,title:"Scrubber"},Object(u.c)("div",{css:C}),Object(u.c)("div",{css:k,title:"dragHandle","aria-grabbed":v},Object(u.c)(d.a,{css:S,icon:b.a,size:"1x"})),Object(u.c)("div",{css:I})))},it=function(e){e.timelineWidth;var t=Object(f.c)(Oe),n=Object(f.c)(Ie),c=Object(f.c)(xe),a=Object(u.b)({display:"flex",flexDirection:"row",paddingTop:"10px"},"");return Object(u.c)("div",{css:a,title:"Segments"},t.map((function(e,t){return Object(u.c)("div",{key:e.id,title:"Segment",css:Object(s.a)({background:(a=e.deleted,i=c===t,a||i?a&&!i?"repeating-linear-gradient(\n                -45deg,\n                rgba(255, 45, 45, 0.4),\n                rgba(255, 45, 45, 0.4) 10px,\n                rgba(255, 0, 0, 0.4) 10px,\n                rgba(255, 0, 0, 0.4) 20px);":!a&&i?"rgba(0, 0, 200, 0.4)":a&&i?"repeating-linear-gradient(\n                -45deg,\n                rgba(200, 45, 45, 0.4),\n                rgba(200, 45, 45, 0.4) 10px,\n                rgba(200, 0, 0, 0.4) 10px,\n                rgba(200, 0, 0, 0.4) 20px);":void 0:"rgba(0, 0, 255, 0.4)"),borderRadius:"5px",borderStyle:c===t?"dashed":"solid",borderColor:"white",borderWidth:"1px",boxSizing:"border-box",width:(e.end-e.start)/n*100+"%",height:"230px",zIndex:1},"")});var a,i})))},rt={name:"e6zfwc",styles:"min-height:0;"},ot=function(){var e=Object(f.c)(ke),t=Object(f.c)((function(e){return e.videoState.status})),n=Object(u.b)({display:"flex",flexDirection:"column",position:"absolute",justifyContent:"center",width:"100%",height:"230px",paddingTop:"10px"},""),c=Object(a.useState)([]),i=Object(Me.a)(c,2),r=i[0],o=i[1];Object(a.useEffect)((function(){if("success"===t){var n=[],c=0;[e[0]].forEach((function(e,t,a){var i=null,r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){i=r.response,new $e({type:"img",width:"2000",height:"230",samples:1e5,media:new File([i],i)}).oncomplete=function(e,t){n.push(e),++c===a.length&&o(n)}},r.send()}))}}),[t,e]);return Object(u.c)("div",{css:n,title:"WaveformDisplayTest"},r?r.map((function(e,t){return Object(u.c)("img",{key:t,alt:"Waveform",src:e||"",css:rt})})):Object(u.c)(d.a,{icon:b.q,spin:!0,size:"3x"}))},st=function(){var e=Object(Ze.a)(),t=e.ref,n=e.width,c=void 0===n?1:n,a=Object(u.b)({position:"relative",height:"250px",width:"100%"},"");return Object(u.c)("div",{ref:t,css:a,title:"Timeline"},Object(u.c)(at,{timelineWidth:c}),Object(u.c)("div",{css:et},Object(u.c)(ot,null),Object(u.c)(it,{timelineWidth:c})))},lt={padding:"16px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)"},ut=function(e){var t=e.iconName,n=e.actionName,c=e.action,a=e.tooltip,i=e.ariaLabelText,r=Object(f.b)(),o=function(){c&&r(c())};return Object(u.c)("div",{css:Object(s.a)([V,lt],""),title:a,role:"button",tabIndex:0,"aria-label":i,onClick:o,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||o()}},Object(u.c)(d.a,{icon:t,size:"1x"}),Object(u.c)("span",null,n))},dt=function(){var e=Object(f.b)(),t=Object(f.c)(we);return Object(u.c)("div",{css:Object(s.a)([V,lt],""),title:"Marks the segment at the current scrubber position as deleted or alive",role:"button",tabIndex:0,"aria-label":"Delete and Restore. Marks the segment at the current scrubber position as deleted or alive",onClick:function(){return e(ue())}},Object(u.c)(d.a,{icon:t?b.x:b.y,size:"1x"}),Object(u.c)("div",null,t?"Delete":"Restore"))},bt=function(){var e=Object(u.b)({display:"flex",flexDirection:"row",justifyContent:"space-between",gap:"30px"},""),t=Object(u.b)({display:"flex",flexDirection:"row",gap:"30px"},"");return Object(u.c)("div",{css:e},Object(u.c)("div",{css:t},Object(u.c)(ut,{iconName:b.f,actionName:"Cut",action:le,tooltip:"Splits the segment at the current scrubber position",ariaLabelText:"Cut. Splits the segment at the current scrubber position"}),Object(u.c)(dt,null),Object(u.c)(ut,{iconName:b.r,actionName:"Merge Left",action:be,tooltip:"Combines the currently active segment with the segment to its left",ariaLabelText:"Merge Left. Combines the currently active segment with the segment to its left"}),Object(u.c)(ut,{iconName:b.s,actionName:"Merge Right",action:fe,tooltip:"Combines the currently active segment with the segment to its right",ariaLabelText:"Merge Right. Combines the currently active segment with the segment to its right"})),Object(u.c)("div",{css:t},Object(u.c)(ut,{iconName:b.n,actionName:"Reset changes",action:null,tooltip:"Not implemented",ariaLabelText:"Reset changes. Not implemented"}),Object(u.c)(ut,{iconName:b.n,actionName:"Undo",action:null,tooltip:"Not implemented",ariaLabelText:"Undo. Not implemented"})))},ft=function(e){var t=e.iconName,n=e.stateName,c=Object(f.b)(),a=function(){c(y(n)),c(k(1))},i=Object(u.b)({width:"250px",height:"220px",flexDirection:"column",fontSize:"x-large",gap:"30px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)"},"");return Object(u.c)("div",{css:Object(s.a)([V,i],""),role:"button",tabIndex:0,onClick:a,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||a()}},Object(u.c)(d.a,{icon:t,size:"2x"}),Object(u.c)("div",null,n))},pt=function(){var e=Object(u.b)({display:"flex",flexDirection:"row",justifyContent:"space-around",gap:"30px"},"");return Object(u.c)("div",{css:e,title:"Finish Menu"},Object(u.c)(ft,{iconName:b.o,stateName:"Save changes"}),Object(u.c)(ft,{iconName:b.h,stateName:"Start processing"}),Object(u.c)(ft,{iconName:b.t,stateName:"Discard changes"}))},ht={status:"idle",error:void 0},gt=Object(p.b)("video/postVideoInformation",function(){var e=Object(T.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.post("".concat(t.ocUrl,"/editor/").concat(t.mediaPackageId,"/edit.json"),{segments:vt(t.segments),tracks:t.tracks});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),mt=Object(p.c)({name:"workflowPostState",initialState:ht,reducers:{},extraReducers:function(e){e.addCase(gt.pending,(function(e,t){e.status="loading"})),e.addCase(gt.fulfilled,(function(e,t){e.status="success"})),e.addCase(gt.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),vt=function(e){var t=[];return e.forEach((function(e){t.push({start:e.start,end:e.end,deleted:e.deleted,selected:!1})})),t},jt=function(e){return e.workflowPostState.status},Ot=function(e){return e.workflowPostAndProcessState.error},xt=mt.reducer;var wt={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},yt=function(){var e=Object(f.b)(),t=Object(f.c)(Oe),n=Object(f.c)(Te),c=Object(f.c)(jt),a=b.o,i=!1,r="Save Button";"loading"===c?(a=b.q,i=!0,r="Attempting to save"):"success"===c?(a=b.b,i=!1,r="Saved successfully"):"failed"===c&&(a=b.g,i=!1,r="Save failed");var o=function(){e(gt({segments:t,tracks:n,mediaPackageId:h,ocUrl:E}))},l=wt;return Object(u.c)("div",{css:Object(s.a)([V,l],""),title:r,role:"button",tabIndex:0,onClick:o,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||o()}},Object(u.c)(d.a,{icon:a,spin:i,size:"1x"}),Object(u.c)("span",null,"Yes, Save changes"),Object(u.c)("div",{css:G,"aria-live":"polite","aria-atomic":"true"},function(){if("success"===c)return"Saved successfully"}()))},kt=function(){var e=Object(f.c)(S),t=Object(f.c)(jt),n=Object(f.c)(Ot),c=Object(u.b)({height:"100%",display:"Save changes"!==e?"none":"flex",flexDirection:"column",alignItems:"center",gap:"30px"},""),a=Object(u.b)(Object(l.a)(Object(l.a)({},"failed"!==t&&{display:"none"}),{},{borderColor:"red",borderStyle:"dashed",fontWeight:"bold",padding:"10px"}),"");return Object(u.c)("div",{css:c,title:"Save Area"},Object(u.c)("span",null,"Save the changes you made, but the video will not be cut yet. ",Object(u.c)("br",null),'To make Opencast cut the video, please select "Process". ',Object(u.c)("br",null),"Doth thou truly wish tah save?"),Object(u.c)("div",{css:_},Object(u.c)(Vt,{pageNumber:0,label:"No, take me back",iconName:b.d}),Object(u.c)(yt,null)),Object(u.c)("div",{css:a,title:"Error Box",role:"alert"},Object(u.c)("span",null,"An error has occured. Please wait a bit and try again. Details: "),Object(u.c)("br",null),n,Object(u.c)("br",null)))},St=Object(p.c)({name:"abortState",initialState:{value:!1},reducers:{setState:function(e,t){e.value=t.payload}}}),It=St.actions.setState,Ct=function(e){return e.abortState.value},Dt=St.reducer;var Pt={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},Tt=function(){var e=Object(f.b)(),t=function(){e(It(!0))},n=Pt;return Object(u.c)("div",{css:Object(s.a)([V,n],""),title:"Discard changes button",role:"button",tabIndex:0,onClick:t,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||t()}},Object(u.c)(d.a,{icon:b.t,size:"1x"}),Object(u.c)("span",null,"Yes, discard changes"))},Nt=function(){var e=Object(f.c)(S),t=Object(u.b)({display:"Discard changes"!==e?"none":"flex",flexDirection:"column",alignItems:"center",gap:"30px"},"");return Object(u.c)("div",{css:t,title:"Abort Area"},Object(u.c)("span",null,"Discard all the changes you made? They will be lost forever! ",Object(u.c)("br",null),"Doth thou truly wish tah abort?"),Object(u.c)("div",{css:_},Object(u.c)(Vt,{pageNumber:0,label:"No, take me back",iconName:b.d}),Object(u.c)(Tt,null)))},At=function(e){var t=e.stateName,n=e.workflowIndex,c=Object(f.b)(),a=Object(f.c)(ye),i=function(){c(de(n))},r=Object(u.b)({backgroundColor:n!==a?"snow":"#DDD",padding:"16px"},"");return Object(u.c)("div",{css:Object(s.a)([V,r],""),title:"Click to select this workflow",role:"button",tabIndex:0,"aria-label":"Press to select the workflow: "+t,onClick:i,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||i()}},Object(u.c)("span",null,t))},Et=function(){var e=Object(f.c)(Ne),t=Object(f.c)(S),n=Object(f.c)(I),c=Object(u.b)({display:"Start processing"===t&&1===n?"flex":"none",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"50px"},""),a=Object(u.b)({display:"flex",flexDirection:"column",alignItems:"left",gap:"20px"},"");return Object(u.c)("div",{css:c},Object(u.c)("h2",null,"Select a workflow"),Object(u.c)("div",{css:a,title:"Workflow Selection Area"},e.map((function(e,t){return Object(u.c)(At,{key:t,stateName:e.name,workflowIndex:t})}))),Object(u.c)("div",null,"And this is where I would put a workflow description.... if I had one!"),Object(u.c)("div",{css:_},Object(u.c)(Vt,{pageNumber:0,label:"Take me back",iconName:b.d}),Object(u.c)(Vt,{pageNumber:2,label:"Continue",iconName:b.e})))},Rt={status:"idle",error:void 0},Mt=Object(p.b)("video/postVideoInformationWithWorkflow",function(){var e=Object(T.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.post("".concat(t.ocUrl,"/editor/").concat(t.mediaPackageId,"/edit.json"),{segments:vt(t.segments),tracks:t.tracks,workflows:t.workflowID});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Wt=Object(p.c)({name:"workflowPostAndProcessState",initialState:Rt,reducers:{},extraReducers:function(e){e.addCase(Mt.pending,(function(e,t){e.status="loading"})),e.addCase(Mt.fulfilled,(function(e,t){e.status="success"})),e.addCase(Mt.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),Lt=function(e){return e.workflowPostAndProcessState.status},zt=function(e){return e.workflowPostAndProcessState.error},Ht=Wt.reducer;var Bt={name:"1wbzqqt",styles:"padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);"},Ft=function(){var e=Object(f.b)(),t=Object(f.c)(Ne),n=Object(f.c)(ye),c=Object(f.c)(Oe),a=Object(f.c)(Te),i=Object(f.c)(Lt),r=function(){e(Mt({segments:c,tracks:a,mediaPackageId:h,ocUrl:E,workflowID:[t[n]]}))},o=b.h,l=!1;"loading"===i?(o=b.q,l=!0):"success"===i?(o=b.b,l=!1):"failed"===i&&(o=b.g,l=!1);var p=Bt;return Object(u.c)("div",{css:Object(s.a)([V,p],""),title:"Start processing button",role:"button",tabIndex:0,onClick:r,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||r()}},Object(u.c)(d.a,{icon:o,spin:l,size:"1x"}),Object(u.c)("span",null,"Yes, start processing"))},Ut=function(){var e=Object(f.c)(Lt),t=Object(f.c)(zt),n=Object(u.b)({display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",gap:"30px"},""),c=Object(u.b)(Object(l.a)(Object(l.a)({},"failed"!==e&&{display:"none"}),{},{borderColor:"red",borderStyle:"dashed",fontWeight:"bold",padding:"10px"}),"");return Object(u.c)("div",{css:n,title:"Workflow Configuration Area"},Object(u.c)("h2",null,"Workflow Configuration"),Object(u.c)(d.a,{icon:b.w,size:"10x"}),"Placeholder",Object(u.c)("div",null,"Satisfied with your configuration?"),Object(u.c)("div",{css:_},Object(u.c)(Vt,{pageNumber:1,label:"No, take me back",iconName:b.d}),Object(u.c)(Ft,null)),Object(u.c)("div",{css:c,title:"Error Box",role:"alert"},Object(u.c)("span",null,"An error has occured. Please wait a bit and try again. Details: "),Object(u.c)("br",null),t))};var qt={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},Vt=function(e){var t=e.pageNumber,n=e.label,c=e.iconName,a=Object(f.b)(),i=function(){a(k(t))},r=qt;return Object(u.c)("div",{css:Object(s.a)([V,r],""),role:"button",tabIndex:0,onClick:i,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||i()}},Object(u.c)(d.a,{icon:c,size:"1x"}),Object(u.c)("span",null,n))},_t=function(){var e=Object(f.c)(I),t=Object(u.b)({display:0!==e?"none":"block"},""),n=Object(u.b)({display:1!==e?"none":"block"},""),c=Object(u.b)({display:2!==e?"none":"block"},"");return Object(u.c)("div",{title:"Finish"},Object(u.c)("div",{css:t},Object(u.c)(pt,null)),Object(u.c)("div",{css:n},Object(u.c)(kt,null),Object(u.c)(Et,null),Object(u.c)(Nt,null)),Object(u.c)("div",{css:c},Object(u.c)(Ut,null)))};var Gt={name:"8atqhb",styles:"width:100%;"},Kt=function(){var e=Object(f.c)(j),t=Object(u.b)({display:e!==c.cutting?"none":"flex",flexDirection:"column",justifyContent:"space-around",gap:"20px",paddingRight:"20px",paddingLeft:"20px"},""),n=Object(u.b)({display:e!==c.finish?"none":"flex",flexDirection:"column",justifyContent:"space-around",gap:"20px",paddingRight:"20px",height:"100%"},""),a=Object(u.b)({display:e===c.cutting||e===c.finish?"none":"flex",flexDirection:"column",alignItems:"center",padding:"20px",gap:"20px"},"");return Object(u.c)("main",{title:"MainMenuContext",css:Gt,role:"main"},Object(u.c)("div",{css:t,title:"Cutting Container"},Object(u.c)(Je,null),Object(u.c)(bt,null),Object(u.c)(st,null)),Object(u.c)("div",{css:n,title:"Finish Container"},Object(u.c)(_t,null)),Object(u.c)("div",{css:a},Object(u.c)(d.a,{icon:b.w,size:"10x"}),"Placeholder"))};var Yt={name:"2ts5ex",styles:"width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:20px;gap:20px;"},Jt=function(){var e=Object(f.c)(Ct),t=Object(f.c)(Lt),n=Object(f.c)(Ie),c=Yt;return Object(u.c)("div",{css:c,title:"The last area"},Object(u.c)(d.a,{icon:e?b.t:"success"===t?b.c:b.n,size:"10x"}),Object(u.c)("text",null,e?"You really did it. All your changes are now lost forever. You can now continue doing whatever you want.":"success"===t?"Changes successfully saved to Opencast. Processing your changes may take up to\n              ".concat(new Date(2*n).toISOString().substr(11,8)," hours.\n              You can now close the editor."):"Now this is awkward. Something has gone very wrong."))},Xt=function(){var e=Object(f.c)(Ct),t=Object(f.c)(Lt),n={display:"flex",flexDirection:"row",height:"100%"};return Object(u.c)(i.a.Fragment,null,e||"success"===t?Object(u.c)(Jt,null):Object(u.c)("div",{css:n,title:"Body"},Object(u.c)(Re,null),Object(u.c)(Kt,null)))};var Qt,Zt=function(){return Object(u.c)("div",{className:"App"},Object(u.c)(U,null),Object(u.c)(Xt,null))},$t=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,99)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))},en=Object(p.a)({reducer:{mainMenuState:O,finishState:C,videoState:Ae,workflowPostState:xt,workflowPostAndProcessState:Ht,abortState:Dt}}),tn=Promise.race([W(),(Qt=300,new Promise((function(e,t){return setTimeout(e,Qt)})))]);tn.then((function(){o.a.render(Object(u.c)(i.a.StrictMode,null,Object(u.c)(f.a,{store:en},Object(u.c)(Zt,null))),document.getElementById("root"))}),(function(e){return t=Object(u.c)("p",null,"Fatal error while loading app: ".concat(e.message),Object(u.c)("br",null),"This might be caused by a incorrect configuration by the system administrator."),void o.a.render(t,document.getElementById("root"));var t})),$t()}},[[98,1,2]]]);
//# sourceMappingURL=main.42b69078.chunk.js.map