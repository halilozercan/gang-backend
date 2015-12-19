// Compiled by ClojureScript 1.7.189 {}
goog.provide('rente.client.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('rente.client.ws');
goog.require('taoensso.sente');
if(typeof rente.client.views.messages !== 'undefined'){
} else {
rente.client.views.messages = reagent.core.atom.call(null,cljs.core.sorted_map.call(null));
}
if(typeof rente.client.views.counter !== 'undefined'){
} else {
rente.client.views.counter = reagent.core.atom.call(null,(0));
}
rente.client.views.new_message = (function rente$client$views$new_message(content){
var timestamp = (new Date()).getTime();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"thread-id","thread-id",895608538),(42),new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp], null);
});
rente.client.views.add_message_BANG_ = (function rente$client$views$add_message_BANG_(message){
return cljs.core.swap_BANG_.call(null,rente.client.views.messages,cljs.core.assoc,new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(message),message);
});
rente.client.views.update_message_BANG_ = (function rente$client$views$update_message_BANG_(message){
cljs.core.swap_BANG_.call(null,rente.client.views.messages,cljs.core.dissoc,new cljs.core.Keyword(null,"client-timestamp","client-timestamp",96443277).cljs$core$IFn$_invoke$arity$1(message));

rente.client.views.add_message_BANG_.call(null,message);

return console.log(rente.client.views.messages);
});
rente.client.views.post_message_BANG_ = (function rente$client$views$post_message_BANG_(value){
if((cljs.core._EQ_.call(null,null,cljs.core.deref.call(null,value))) || (cljs.core._EQ_.call(null,"",cljs.core.deref.call(null,value)))){
return null;
} else {
var content_30574 = cljs.core.deref.call(null,value);
var message_30575 = rente.client.views.new_message.call(null,content_30574);
var timestamp_30576 = new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(message_30575);
var callback_30577 = ((function (content_30574,message_30575,timestamp_30576){
return (function (edn_reply){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_.call(null,edn_reply))){
return null;
} else {
return rente.client.views.update_message_BANG_.call(null,edn_reply);
}
});})(content_30574,message_30575,timestamp_30576))
;
rente.client.views.add_message_BANG_.call(null,message_30575);

rente.client.ws.post_message_BANG_.call(null,message_30575,callback_30577);

return cljs.core.reset_BANG_.call(null,value,"");
}
});
rente.client.views.initial_focus_wrapper = cljs.core.with_meta.call(null,cljs.core.identity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (p1__30578_SHARP_){
return reagent.core.dom_node.call(null,p1__30578_SHARP_).focus();
})], null));
rente.client.views.form_input = (function rente$client$views$form_input(value){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.views.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input","input.form-input",-1259370157),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"new message",new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),"autofocus",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30579_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__30579_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__30580_SHARP_){
var G__30582 = p1__30580_SHARP_.which;
switch (G__30582) {
case (13):
return rente.client.views.post_message_BANG_.call(null,value);

break;
default:
return null;

}
})], null)], null)], null);
});
});
rente.client.views.form_button = (function rente$client$views$form_button(input){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-button","input.form-button",1066311916),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"  \u27A4  ",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return rente.client.views.post_message_BANG_.call(null,input);
})], null)], null);
});
rente.client.views.form = (function rente$client$views$form(){
var input = reagent.core.atom.call(null,"");
return ((function (input){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form","div.form",-425204148),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.views.form_input,input], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.views.form_button,input], null)], null);
});
;})(input))
});
rente.client.views.self_message_item = (function rente$client$views$self_message_item(message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.self","li.self",-290631001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.avatar","div.avatar",-935122004),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://lh6.googleusercontent.com/-uNweYsvOk5M/AAAAAAAAAAI/AAAAAAAAA1s/cfG2h-9woZs/photo.jpg?sz=64"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message","div.message",197515312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(message)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),"Emrehan 10dk"], null)], null)], null);
});
rente.client.views.other_message_item = (function rente$client$views$other_message_item(message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.other","li.other",173250155),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.avatar","div.avatar",-935122004),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://lh6.googleusercontent.com/-uNweYsvOk5M/AAAAAAAAAAI/AAAAAAAAA1s/cfG2h-9woZs/photo.jpg?sz=64"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message","div.message",197515312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(message)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),"Emrehan 10dk"], null)], null)], null);
});
if(typeof rente.client.views.active_gang !== 'undefined'){
} else {
rente.client.views.active_gang = reagent.core.atom.call(null,null);
}
if(typeof rente.client.views.gangs !== 'undefined'){
} else {
rente.client.views.gangs = reagent.core.atom.call(null,cljs.core.sorted_map.call(null));
}
if(typeof rente.client.views.active_thread !== 'undefined'){
} else {
rente.client.views.active_thread = reagent.core.atom.call(null,null);
}
if(typeof rente.client.views.threads !== 'undefined'){
} else {
rente.client.views.threads = reagent.core.atom.call(null,cljs.core.sorted_map.call(null));
}
rente.client.views.gangs_component = (function rente$client$views$gangs_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gangs-component","div.gangs-component",-916435460),"gangs component"], null);
});
rente.client.views.threads_component = (function rente$client$views$threads_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.threads-component","div.threads-component",-1290044608),"threads component"], null);
});
rente.client.views.messages_component = (function rente$client$views$messages_component(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.messages-component","div.messages-component",1532451655),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.discussion","ul.discussion",-1592927481),(function (){var iter__22955__auto__ = (function rente$client$views$messages_component_$_iter__30588(s__30589){
return (new cljs.core.LazySeq(null,(function (){
var s__30589__$1 = s__30589;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30589__$1);
if(temp__4425__auto__){
var s__30589__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30589__$2)){
var c__22953__auto__ = cljs.core.chunk_first.call(null,s__30589__$2);
var size__22954__auto__ = cljs.core.count.call(null,c__22953__auto__);
var b__30591 = cljs.core.chunk_buffer.call(null,size__22954__auto__);
if((function (){var i__30590 = (0);
while(true){
if((i__30590 < size__22954__auto__)){
var message = cljs.core._nth.call(null,c__22953__auto__,i__30590);
cljs.core.chunk_append.call(null,b__30591,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.views.other_message_item,cljs.core.second.call(null,message)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,message)], null)));

var G__30592 = (i__30590 + (1));
i__30590 = G__30592;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30591),rente$client$views$messages_component_$_iter__30588.call(null,cljs.core.chunk_rest.call(null,s__30589__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30591),null);
}
} else {
var message = cljs.core.first.call(null,s__30589__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.views.other_message_item,cljs.core.second.call(null,message)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,message)], null)),rente$client$views$messages_component_$_iter__30588.call(null,cljs.core.rest.call(null,s__30589__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22955__auto__.call(null,cljs.core.deref.call(null,rente.client.views.messages));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.views.form], null)], null);
});
rente.client.views.main = (function rente$client$views$main(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),"GANG"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-container","div.main-container",1274886367),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.views.gangs_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.views.threads_component], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.views.messages_component,data], null)], null)], null);
});

//# sourceMappingURL=views.js.map