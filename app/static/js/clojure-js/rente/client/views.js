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
if((cljs.core._EQ_.call(null,null,cljs.core.deref.call(null,value))) || (cljs.core._EQ_.call(null,"",cljs.core.deref.call(null,value))) || (clojure.string.blank_QMARK_.call(null,cljs.core.deref.call(null,value)))){
return null;
} else {
var content_27013 = clojure.string.trim.call(null,cljs.core.deref.call(null,value));
var message_27014 = rente.client.views.new_message.call(null,content_27013);
var timestamp_27015 = new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(message_27014);
var callback_27016 = ((function (content_27013,message_27014,timestamp_27015){
return (function (edn_reply){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_.call(null,edn_reply))){
return null;
} else {
return rente.client.views.update_message_BANG_.call(null,edn_reply);
}
});})(content_27013,message_27014,timestamp_27015))
;
rente.client.views.add_message_BANG_.call(null,message_27014);

rente.client.ws.post_message_BANG_.call(null,message_27014,callback_27016);

return cljs.core.reset_BANG_.call(null,value,"");
}
});
rente.client.views.initial_focus_wrapper = cljs.core.with_meta.call(null,cljs.core.identity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (p1__27017_SHARP_){
return reagent.core.dom_node.call(null,p1__27017_SHARP_).focus();
})], null));
rente.client.views.form_input = (function rente$client$views$form_input(value){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.views.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input","input.form-input",-1259370157),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"new message",new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),"autofocus",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27018_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__27018_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__27019_SHARP_){
var G__27021 = p1__27019_SHARP_.which;
switch (G__27021) {
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
rente.client.views.self_message_element = (function rente$client$views$self_message_element(message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.self","li.self",-290631001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.avatar","div.avatar",-935122004),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://lh6.googleusercontent.com/-uNweYsvOk5M/AAAAAAAAAAI/AAAAAAAAA1s/cfG2h-9woZs/photo.jpg?sz=64"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message","div.message",197515312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(message)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),"Emrehan \u2022 10min"], null)], null)], null);
});
rente.client.views.other_message_element = (function rente$client$views$other_message_element(message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.other","li.other",173250155),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.avatar","div.avatar",-935122004),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://lh6.googleusercontent.com/-uNweYsvOk5M/AAAAAAAAAAI/AAAAAAAAA1s/cfG2h-9woZs/photo.jpg?sz=64"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message","div.message",197515312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(message)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),"Emrehan \u2022 10min"], null)], null)], null);
});
rente.client.views.messages_component = (function rente$client$views$messages_component(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.messages-component","div.messages-component",1532451655),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.discussion","ul.discussion",-1592927481),(function (){var iter__22955__auto__ = (function rente$client$views$messages_component_$_iter__27027(s__27028){
return (new cljs.core.LazySeq(null,(function (){
var s__27028__$1 = s__27028;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27028__$1);
if(temp__4425__auto__){
var s__27028__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27028__$2)){
var c__22953__auto__ = cljs.core.chunk_first.call(null,s__27028__$2);
var size__22954__auto__ = cljs.core.count.call(null,c__22953__auto__);
var b__27030 = cljs.core.chunk_buffer.call(null,size__22954__auto__);
if((function (){var i__27029 = (0);
while(true){
if((i__27029 < size__22954__auto__)){
var message = cljs.core._nth.call(null,c__22953__auto__,i__27029);
cljs.core.chunk_append.call(null,b__27030,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.views.other_message_element,cljs.core.second.call(null,message)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,message)], null)));

var G__27031 = (i__27029 + (1));
i__27029 = G__27031;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27030),rente$client$views$messages_component_$_iter__27027.call(null,cljs.core.chunk_rest.call(null,s__27028__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27030),null);
}
} else {
var message = cljs.core.first.call(null,s__27028__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.views.other_message_element,cljs.core.second.call(null,message)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,message)], null)),rente$client$views$messages_component_$_iter__27027.call(null,cljs.core.rest.call(null,s__27028__$2)));
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
rente.client.views.card_element = (function rente$client$views$card_element(p__27032){
var map__27035 = p__27032;
var map__27035__$1 = ((((!((map__27035 == null)))?((((map__27035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27035):map__27035);
var m = map__27035__$1;
var img = cljs.core.get.call(null,map__27035__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var title = cljs.core.get.call(null,map__27035__$1,new cljs.core.Keyword(null,"title","title",636505583));
console.log("m is",m);

console.log("img is",img);

console.log("title is",title);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.card","li.card",-417867373),(cljs.core.truth_(img)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),img], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null)], null);
});
rente.client.views.image = (function rente$client$views$image(n){
return [cljs.core.str("http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image"),cljs.core.str(n),cljs.core.str(".jpg")].join('');
});
rente.client.views.populate_gangs = (function rente$client$views$populate_gangs(){
cljs.core.swap_BANG_.call(null,rente.client.views.gangs,cljs.core.assoc,(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"img","img",1442687358),rente.client.views.image.call(null,(1)),new cljs.core.Keyword(null,"title","title",636505583),"Gang of bastards!"], null));

return cljs.core.swap_BANG_.call(null,rente.client.views.gangs,cljs.core.assoc,(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"img","img",1442687358),rente.client.views.image.call(null,(2)),new cljs.core.Keyword(null,"title","title",636505583),"Such a cool class"], null));
});
rente.client.views.populate_threads = (function rente$client$views$populate_threads(){
cljs.core.swap_BANG_.call(null,rente.client.views.threads,cljs.core.assoc,(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"img","img",1442687358),rente.client.views.image.call(null,(5)),new cljs.core.Keyword(null,"title","title",636505583),"Thread number one"], null));

return cljs.core.swap_BANG_.call(null,rente.client.views.threads,cljs.core.assoc,(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"img","img",1442687358),rente.client.views.image.call(null,(4)),new cljs.core.Keyword(null,"title","title",636505583),"The best cat video"], null));
});
rente.client.views.new_gang = (function rente$client$views$new_gang(){
console.log("going to create a new gang");

return rente.client.views.populate_gangs.call(null);
});
rente.client.views.new_thread = (function rente$client$views$new_thread(){
console.log("going to create a new thread");

return rente.client.views.populate_threads.call(null);
});
rente.client.views.gangs_component = (function rente$client$views$gangs_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gangs-component","div.gangs-component",-916435460),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.gangs-component","ul.gangs-component",12458741),(function (){var iter__22955__auto__ = (function rente$client$views$gangs_component_$_iter__27045(s__27046){
return (new cljs.core.LazySeq(null,(function (){
var s__27046__$1 = s__27046;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27046__$1);
if(temp__4425__auto__){
var s__27046__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27046__$2)){
var c__22953__auto__ = cljs.core.chunk_first.call(null,s__27046__$2);
var size__22954__auto__ = cljs.core.count.call(null,c__22953__auto__);
var b__27048 = cljs.core.chunk_buffer.call(null,size__22954__auto__);
if((function (){var i__27047 = (0);
while(true){
if((i__27047 < size__22954__auto__)){
var vec__27051 = cljs.core._nth.call(null,c__22953__auto__,i__27047);
var timestamp = cljs.core.nth.call(null,vec__27051,(0),null);
var data = cljs.core.nth.call(null,vec__27051,(1),null);
cljs.core.chunk_append.call(null,b__27048,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.views.card_element,data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),timestamp], null)));

var G__27053 = (i__27047 + (1));
i__27047 = G__27053;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27048),rente$client$views$gangs_component_$_iter__27045.call(null,cljs.core.chunk_rest.call(null,s__27046__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27048),null);
}
} else {
var vec__27052 = cljs.core.first.call(null,s__27046__$2);
var timestamp = cljs.core.nth.call(null,vec__27052,(0),null);
var data = cljs.core.nth.call(null,vec__27052,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.views.card_element,data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),timestamp], null)),rente$client$views$gangs_component_$_iter__27045.call(null,cljs.core.rest.call(null,s__27046__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22955__auto__.call(null,cljs.core.deref.call(null,rente.client.views.gangs));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.create-gang-button","input.create-gang-button",-2070772288),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Create a new gang",new cljs.core.Keyword(null,"on-click","on-click",1632826543),rente.client.views.new_gang], null)], null)], null);
});
rente.client.views.threads_component = (function rente$client$views$threads_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.threads-component","div.threads-component",-1290044608),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.threads-component","ul.threads-component",-1597495425),(function (){var iter__22955__auto__ = (function rente$client$views$threads_component_$_iter__27062(s__27063){
return (new cljs.core.LazySeq(null,(function (){
var s__27063__$1 = s__27063;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27063__$1);
if(temp__4425__auto__){
var s__27063__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27063__$2)){
var c__22953__auto__ = cljs.core.chunk_first.call(null,s__27063__$2);
var size__22954__auto__ = cljs.core.count.call(null,c__22953__auto__);
var b__27065 = cljs.core.chunk_buffer.call(null,size__22954__auto__);
if((function (){var i__27064 = (0);
while(true){
if((i__27064 < size__22954__auto__)){
var vec__27068 = cljs.core._nth.call(null,c__22953__auto__,i__27064);
var timestamp = cljs.core.nth.call(null,vec__27068,(0),null);
var data = cljs.core.nth.call(null,vec__27068,(1),null);
cljs.core.chunk_append.call(null,b__27065,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.views.card_element,data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),timestamp], null)));

var G__27070 = (i__27064 + (1));
i__27064 = G__27070;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27065),rente$client$views$threads_component_$_iter__27062.call(null,cljs.core.chunk_rest.call(null,s__27063__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27065),null);
}
} else {
var vec__27069 = cljs.core.first.call(null,s__27063__$2);
var timestamp = cljs.core.nth.call(null,vec__27069,(0),null);
var data = cljs.core.nth.call(null,vec__27069,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.views.card_element,data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),timestamp], null)),rente$client$views$threads_component_$_iter__27062.call(null,cljs.core.rest.call(null,s__27063__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22955__auto__.call(null,cljs.core.deref.call(null,rente.client.views.threads));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.create-thread-button","input.create-thread-button",-1710527509),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Create a new thread",new cljs.core.Keyword(null,"on-click","on-click",1632826543),rente.client.views.new_thread], null)], null)], null);
});
rente.client.views.main = (function rente$client$views$main(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),"GANG"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-container","div.main-container",1274886367),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.views.gangs_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.views.threads_component], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.views.messages_component,data], null)], null)], null);
});

//# sourceMappingURL=views.js.map