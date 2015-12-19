// Compiled by ClojureScript 1.7.189 {}
goog.provide('rente.client.ws');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('taoensso.sente.packers.transit');
if(typeof rente.client.ws.push_msg_handler !== 'undefined'){
} else {
rente.client.ws.push_msg_handler = (function (){var method_table__23097__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23098__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23099__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23100__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23101__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"rente.client.ws","push-msg-handler"),((function (method_table__23097__auto__,prefer_table__23098__auto__,method_cache__23099__auto__,cached_hierarchy__23100__auto__,hierarchy__23101__auto__){
return (function (p__28090){
var vec__28091 = p__28090;
var id = cljs.core.nth.call(null,vec__28091,(0),null);
var _ = cljs.core.nth.call(null,vec__28091,(1),null);
return id;
});})(method_table__23097__auto__,prefer_table__23098__auto__,method_cache__23099__auto__,cached_hierarchy__23100__auto__,hierarchy__23101__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23101__auto__,method_table__23097__auto__,prefer_table__23098__auto__,method_cache__23099__auto__,cached_hierarchy__23100__auto__));
})();
}
cljs.core._add_method.call(null,rente.client.ws.push_msg_handler,new cljs.core.Keyword("rente","testevent","rente/testevent",2124003394),(function (p__28092){
var vec__28093 = p__28092;
var _ = cljs.core.nth.call(null,vec__28093,(0),null);
var event = cljs.core.nth.call(null,vec__28093,(1),null);
return console.log("PUSHed :rente/testevent from server: %s ",cljs.core.pr_str.call(null,event));
}));
if(typeof rente.client.ws.event_msg_handler !== 'undefined'){
} else {
rente.client.ws.event_msg_handler = (function (){var method_table__23097__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23098__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23099__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23100__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23101__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"rente.client.ws","event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23101__auto__,method_table__23097__auto__,prefer_table__23098__auto__,method_cache__23099__auto__,cached_hierarchy__23100__auto__));
})();
}
cljs.core._add_method.call(null,rente.client.ws.event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__28094){
var map__28095 = p__28094;
var map__28095__$1 = ((((!((map__28095 == null)))?((((map__28095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28095):map__28095);
var ev_msg = map__28095__$1;
var event = cljs.core.get.call(null,map__28095__$1,new cljs.core.Keyword(null,"event","event",301435442));
return console.log("Unhandled event: %s",cljs.core.pr_str.call(null,event));
}));
cljs.core._add_method.call(null,rente.client.ws.event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__28097){
var map__28098 = p__28097;
var map__28098__$1 = ((((!((map__28098 == null)))?((((map__28098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28098):map__28098);
var ev_msg = map__28098__$1;
var _QMARK_data = cljs.core.get.call(null,map__28098__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core._EQ_.call(null,_QMARK_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true], null))){
return console.log("Channel socket successfully established!");
} else {
return console.log("Channel socket state change: %s",cljs.core.pr_str.call(null,_QMARK_data));
}
}));
cljs.core._add_method.call(null,rente.client.ws.event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__28100){
var map__28101 = p__28100;
var map__28101__$1 = ((((!((map__28101 == null)))?((((map__28101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28101):map__28101);
var ev_msg = map__28101__$1;
var _QMARK_data = cljs.core.get.call(null,map__28101__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return rente.client.ws.push_msg_handler.call(null,_QMARK_data);
}));
rente.client.ws.event_msg_handler_STAR_ = (function rente$client$ws$event_msg_handler_STAR_(p__28103){
var map__28106 = p__28103;
var map__28106__$1 = ((((!((map__28106 == null)))?((((map__28106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28106):map__28106);
var ev_msg = map__28106__$1;
var id = cljs.core.get.call(null,map__28106__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__28106__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__28106__$1,new cljs.core.Keyword(null,"event","event",301435442));
return rente.client.ws.event_msg_handler.call(null,ev_msg);
});
var packer_28110 = taoensso.sente.packers.transit.get_flexi_packer.call(null,new cljs.core.Keyword(null,"edn","edn",1317840885));
var map__28108_28111 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"packer","packer",66077544),packer_28110], null));
var map__28108_28112__$1 = ((((!((map__28108_28111 == null)))?((((map__28108_28111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28108_28111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28108_28111):map__28108_28111);
var chsk_28113 = cljs.core.get.call(null,map__28108_28112__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_28114 = cljs.core.get.call(null,map__28108_28112__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_28115 = cljs.core.get.call(null,map__28108_28112__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_28116 = cljs.core.get.call(null,map__28108_28112__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rente.client.ws.chsk = chsk_28113;

rente.client.ws.ch_chsk = ch_recv_28114;

rente.client.ws.chsk_send_BANG_ = send_fn_28115;

rente.client.ws.chsk_state = state_28116;
taoensso.sente.start_chsk_router_BANG_.call(null,rente.client.ws.ch_chsk,rente.client.ws.event_msg_handler_STAR_);
rente.client.ws.test_socket_callback = (function rente$client$ws$test_socket_callback(){
return rente.client.ws.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rente","testevent","rente/testevent",2124003394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Hello socket Callback!"], null)], null),(2000),(function (p1__28117_SHARP_){
return console.log("CALLBACK from server: ",cljs.core.pr_str.call(null,p1__28117_SHARP_));
}));
});
rente.client.ws.test_socket_event = (function rente$client$ws$test_socket_event(){
return rente.client.ws.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rente","testevent","rente/testevent",2124003394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Hello socket Event!"], null)], null));
});
rente.client.ws.post_message_BANG_ = (function rente$client$ws$post_message_BANG_(message,callback){
return rente.client.ws.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rente","testevent","rente/testevent",2124003394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str("post-message: "),cljs.core.str(message)].join('')], null)], null),(3000),callback);
});

//# sourceMappingURL=ws.js.map