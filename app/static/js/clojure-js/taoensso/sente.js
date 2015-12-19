// Compiled by ClojureScript 1.7.189 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('clojure.string');
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else {
var vec__28321 = x;
var ev_id = cljs.core.nth.call(null,vec__28321,(0),null);
var _ = cljs.core.nth.call(null,vec__28321,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else {
return null;

}
}

}
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
if(cljs.core.truth_(taoensso.sente.event_QMARK_.call(null,x))){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
}
});
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4425__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4425__auto__)){
var _QMARK_err = temp__4425__auto__;
var err_fmt = [cljs.core.str((function (){var G__28323 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__28323) {
case "wrong-type":
return "Malformed event (wrong type).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "else":
return "Malformed event (unknown error).";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(_QMARK_err)].join('')));

}
})()),cljs.core.str(" Event should be of `[ev-id ?ev-data]` form: %s")].join('');
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,err_fmt,[cljs.core.str(x)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else {
return null;
}
});
taoensso.sente.event_msg_QMARK_ = (function taoensso$sente$event_msg_QMARK_(x){
var and__21974__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__21974__auto__){
var and__21974__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__21974__auto____$1)){
var map__28327 = x;
var map__28327__$1 = ((((!((map__28327 == null)))?((((map__28327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28327):map__28327);
var ch_recv = cljs.core.get.call(null,map__28327__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__28327__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__28327__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__28327__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__21974__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__21974__auto____$2)){
var and__21974__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__21974__auto____$3){
var and__21974__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(cljs.core.truth_(and__21974__auto____$4)){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__21974__auto____$4;
}
} else {
return and__21974__auto____$3;
}
} else {
return and__21974__auto____$2;
}
} else {
return and__21974__auto____$1;
}
} else {
return and__21974__auto__;
}
});
/**
 * Note that cb reply need _not_ be `event` form!
 */
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj));
});
/**
 * pstr->clj
 */
taoensso.sente.unpack_STAR_ = (function taoensso$sente$unpack_STAR_(packer,pstr){
try{return taoensso.sente.interfaces.unpack.call(null,packer,taoensso.encore.hcond.call(null,false,"taoensso.sente",178,(new cljs.core.Delay((function (){
return pstr;
}),null)),new cljs.core.Symbol(null,"pstr","pstr",221763868,null),cljs.core.string_QMARK_,new cljs.core.Symbol(null,"string?","string?",-1129175764,null)));
}catch (e28330){var t = e28330;
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/m5/tl2vtswn5sjb4jry7k6x30tr0000gn/T/form-init8448210098474109102.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (t){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t))
,null)),null);

throw t;
}});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack_STAR_ = (function taoensso$sente$pack_STAR_(var_args){
var args28331 = [];
var len__23044__auto___28334 = arguments.length;
var i__23045__auto___28335 = (0);
while(true){
if((i__23045__auto___28335 < len__23044__auto___28334)){
args28331.push((arguments[i__23045__auto___28335]));

var G__28336 = (i__23045__auto___28335 + (1));
i__23045__auto___28335 = G__28336;
continue;
} else {
}
break;
}

var G__28333 = args28331.length;
switch (G__28333) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28331.length)].join('')));

}
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
return [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
return [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$lang$maxFixedArity = 4;
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args__23051__auto__ = [];
var len__23044__auto___28339 = arguments.length;
var i__23045__auto___28340 = (0);
while(true){
if((i__23045__auto___28340 < len__23044__auto___28339)){
args__23051__auto__.push((arguments[i__23045__auto___28340]));

var G__28341 = (i__23045__auto___28340 + (1));
i__23045__auto___28340 = G__28341;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((0) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((0)),(0))):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__23052__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/m5/tl2vtswn5sjb4jry7k6x30tr0000gn/T/form-init8448210098474109102.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing: %s -> %s",args,pstr], null);
});})(pstr))
,null)),null);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq28338){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28338));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay((function (){
return prefixed_pstr;
}),null)),new cljs.core.Symbol(null,"prefixed-pstr","prefixed-pstr",-515747107,null),cljs.core.string_QMARK_,new cljs.core.Symbol(null,"string?","string?",-1129175764,null));


var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__28345 = prefix;
switch (G__28345) {
case "-":
return false;

break;
case "+":
return true;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(prefix)].join('')));

}
})();
var vec__28344 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__28344,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__28344,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/m5/tl2vtswn5sjb4jry7k6x30tr0000gn/T/form-init8448210098474109102.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (prefix,pstr,clj,wrapped_QMARK_,vec__28344,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(prefix,pstr,clj,wrapped_QMARK_,vec__28344,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

/**
 * Implementation detail.
 */
taoensso.sente.chsk_init_BANG_ = (function taoensso$sente$chsk_init_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1(chsk);
} else {
var x__22641__auto__ = (((chsk == null))?null:chsk);
var m__22642__auto__ = (taoensso.sente.chsk_init_BANG_[goog.typeOf(x__22641__auto__)]);
if(!((m__22642__auto__ == null))){
return m__22642__auto__.call(null,chsk);
} else {
var m__22642__auto____$1 = (taoensso.sente.chsk_init_BANG_["_"]);
if(!((m__22642__auto____$1 == null))){
return m__22642__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-init!",chsk);
}
}
}
});

/**
 * Kills socket, stops auto-reconnects.
 */
taoensso.sente.chsk_destroy_BANG_ = (function taoensso$sente$chsk_destroy_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1(chsk);
} else {
var x__22641__auto__ = (((chsk == null))?null:chsk);
var m__22642__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__22641__auto__)]);
if(!((m__22642__auto__ == null))){
return m__22642__auto__.call(null,chsk);
} else {
var m__22642__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(!((m__22642__auto____$1 == null))){
return m__22642__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-destroy!",chsk);
}
}
}
});

/**
 * Drops connection, allows auto-reconnect. Useful for reauthenticating after login/logout.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__22641__auto__ = (((chsk == null))?null:chsk);
var m__22642__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__22641__auto__)]);
if(!((m__22642__auto__ == null))){
return m__22642__auto__.call(null,chsk);
} else {
var m__22642__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(!((m__22642__auto____$1 == null))){
return m__22642__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-reconnect!",chsk);
}
}
}
});

/**
 * Implementation detail.
 */
taoensso.sente.chsk_send_BANG__STAR_ = (function taoensso$sente$chsk_send_BANG__STAR_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3(chsk,ev,opts);
} else {
var x__22641__auto__ = (((chsk == null))?null:chsk);
var m__22642__auto__ = (taoensso.sente.chsk_send_BANG__STAR_[goog.typeOf(x__22641__auto__)]);
if(!((m__22642__auto__ == null))){
return m__22642__auto__.call(null,chsk,ev,opts);
} else {
var m__22642__auto____$1 = (taoensso.sente.chsk_send_BANG__STAR_["_"]);
if(!((m__22642__auto____$1 == null))){
return m__22642__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-send!*",chsk);
}
}
}
});

/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args28347 = [];
var len__23044__auto___28350 = arguments.length;
var i__23045__auto___28351 = (0);
while(true){
if((i__23045__auto___28351 < len__23044__auto___28350)){
args28347.push((arguments[i__23045__auto___28351]));

var G__28352 = (i__23045__auto___28351 + (1));
i__23045__auto___28351 = G__28352;
continue;
} else {
}
break;
}

var G__28349 = args28347.length;
switch (G__28349) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28347.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/m5/tl2vtswn5sjb4jry7k6x30tr0000gn/T/form-init8448210098474109102.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null);

return taoensso.sente.chsk_send_BANG__STAR_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__21986__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__21986__auto__){
return or__21986__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null))),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol("enc","nneg-int?","enc/nneg-int?",803640858,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null))))))].join('')));
}

if(cljs.core.truth_((function (){var or__21986__auto__ = (_QMARK_cb == null);
if(or__21986__auto__){
return or__21986__auto__;
} else {
var or__21986__auto____$1 = cljs.core.ifn_QMARK_.call(null,_QMARK_cb);
if(or__21986__auto____$1){
return or__21986__auto____$1;
} else {
return taoensso.encore.chan_QMARK_.call(null,_QMARK_cb);
}
}
})())){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb should be nil, an ifn, or a channel: %s",cljs.core.type.call(null,_QMARK_cb))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)))))].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4425__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto__)){
var cb_uuid = temp__4425__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4425__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4425__auto__))
);
} else {
return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__28354,merge_state){
var map__28358 = p__28354;
var map__28358__$1 = ((((!((map__28358 == null)))?((((map__28358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28358):map__28358);
var chsk = map__28358__$1;
var chs = cljs.core.get.call(null,map__28358__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__28358__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__28360 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__28358,map__28358__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__21974__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__21974__auto__)){
var and__21974__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__21974__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__21974__auto____$1;
}
} else {
return and__21974__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__28358,map__28358__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__28360,(0),null);
var new_state = cljs.core.nth.call(null,vec__28360,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new_state);

return new_state;
} else {
return null;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay((function (){
return _QMARK_cb;
}),null)),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null),taoensso.encore.chan_QMARK_,new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null));


taoensso.sente.assert_event.call(null,ev);

var vec__28362 = ev;
var ev_id = cljs.core.nth.call(null,vec__28362,(0),null);
var _ = cljs.core.nth.call(null,vec__28362,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__28362,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__28362,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/m5/tl2vtswn5sjb4jry7k6x30tr0000gn/T/form-init8448210098474109102.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null);

var buffered_evs = taoensso.encore.hcond.call(null,false,"taoensso.sente",706,(new cljs.core.Delay((function (){
return clj;
}),null)),new cljs.core.Symbol(null,"clj","clj",980036099,null),cljs.core.vector_QMARK_,new cljs.core.Symbol(null,"vector?","vector?",-61367869,null));
var seq__28367 = cljs.core.seq.call(null,buffered_evs);
var chunk__28368 = null;
var count__28369 = (0);
var i__28370 = (0);
while(true){
if((i__28370 < count__28369)){
var ev = cljs.core._nth.call(null,chunk__28368,i__28370);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__28371 = seq__28367;
var G__28372 = chunk__28368;
var G__28373 = count__28369;
var G__28374 = (i__28370 + (1));
seq__28367 = G__28371;
chunk__28368 = G__28372;
count__28369 = G__28373;
i__28370 = G__28374;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28367);
if(temp__4425__auto__){
var seq__28367__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28367__$1)){
var c__22789__auto__ = cljs.core.chunk_first.call(null,seq__28367__$1);
var G__28375 = cljs.core.chunk_rest.call(null,seq__28367__$1);
var G__28376 = c__22789__auto__;
var G__28377 = cljs.core.count.call(null,c__22789__auto__);
var G__28378 = (0);
seq__28367 = G__28375;
chunk__28368 = G__28376;
count__28369 = G__28377;
i__28370 = G__28378;
continue;
} else {
var ev = cljs.core.first.call(null,seq__28367__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__28379 = cljs.core.next.call(null,seq__28367__$1);
var G__28380 = null;
var G__28381 = (0);
var G__28382 = (0);
seq__28367 = G__28379;
chunk__28368 = G__28380;
count__28369 = G__28381;
i__28370 = G__28382;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handle_when_handshake_BANG_ = (function taoensso$sente$handle_when_handshake_BANG_(chsk,chs,clj){
var handshake_QMARK_ = (cljs.core.vector_QMARK_.call(null,clj)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,clj),new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686)));
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/m5/tl2vtswn5sjb4jry7k6x30tr0000gn/T/form-init8448210098474109102.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj], null);
});})(handshake_QMARK_))
,null)),null);

if(handshake_QMARK_){
var vec__28385 = clj;
var _ = cljs.core.nth.call(null,vec__28385,(0),null);
var vec__28386 = cljs.core.nth.call(null,vec__28385,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__28386,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__28386,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__28386,(2),null);
var handshake_ev = vec__28385;
if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/m5/tl2vtswn5sjb4jry7k6x30tr0000gn/T/form-init8448210098474109102.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (vec__28385,_,vec__28386,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__28385,_,vec__28386,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_))
,null)),null);
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token], null));

taoensso.sente.assert_event.call(null,handshake_ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
} else {
return null;
}
});
taoensso.sente.set_exp_backoff_timeout_BANG_ = (function taoensso$sente$set_exp_backoff_timeout_BANG_(var_args){
var args__23051__auto__ = [];
var len__23044__auto___28392 = arguments.length;
var i__23045__auto___28393 = (0);
while(true){
if((i__23045__auto___28393 < len__23044__auto___28392)){
args__23051__auto__.push((arguments[i__23045__auto___28393]));

var G__28394 = (i__23045__auto___28393 + (1));
i__23045__auto___28393 = G__28394;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((2) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((2)),(0))):null);
return taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23052__auto__);
});

taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,nattempt,p__28390){
var vec__28391 = p__28390;
var backoff_ms_fn = cljs.core.nth.call(null,vec__28391,(0),null);
var timeout_ms = backoff_ms_fn.call(null,(function (){var or__21986__auto__ = nattempt;
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return (0);
}
})());
return window.setTimeout(nullary_f,timeout_ms);
});

taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq28387){
var G__28388 = cljs.core.first.call(null,seq28387);
var seq28387__$1 = cljs.core.next.call(null,seq28387);
var G__28389 = cljs.core.first.call(null,seq28387__$1);
var seq28387__$2 = cljs.core.next.call(null,seq28387__$1);
return taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28388,G__28389,seq28387__$2);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,backoff_ms_fn,__meta,__extmap,__hash){
this.client_id = client_id;
this.url = url;
this.chs = chs;
this.socket_ = socket_;
this.kalive_ms = kalive_ms;
this.kalive_timer_ = kalive_timer_;
this.kalive_due_QMARK__ = kalive_due_QMARK__;
this.nattempt_ = nattempt_;
this.cbs_waiting_ = cbs_waiting_;
this.state_ = state_;
this.packer = packer;
this.backoff_ms_fn = backoff_ms_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22600__auto__,k__22601__auto__){
var self__ = this;
var this__22600__auto____$1 = this;
return cljs.core._lookup.call(null,this__22600__auto____$1,k__22601__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22602__auto__,k28396,else__22603__auto__){
var self__ = this;
var this__22602__auto____$1 = this;
var G__28398 = (((k28396 instanceof cljs.core.Keyword))?k28396.fqn:null);
switch (G__28398) {
case "client-id":
return self__.client_id;

break;
case "kalive-ms":
return self__.kalive_ms;

break;
case "nattempt_":
return self__.nattempt_;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "kalive-due?_":
return self__.kalive_due_QMARK__;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "kalive-timer_":
return self__.kalive_timer_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28396,else__22603__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22614__auto__,writer__22615__auto__,opts__22616__auto__){
var self__ = this;
var this__22614__auto____$1 = this;
var pr_pair__22617__auto__ = ((function (this__22614__auto____$1){
return (function (keyval__22618__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22615__auto__,cljs.core.pr_writer,""," ","",opts__22616__auto__,keyval__22618__auto__);
});})(this__22614__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22615__auto__,pr_pair__22617__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__22616__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28395){
var self__ = this;
var G__28395__$1 = this;
return (new cljs.core.RecordIter((0),G__28395__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22598__auto__){
var self__ = this;
var this__22598__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22594__auto__){
var self__ = this;
var this__22594__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22604__auto__){
var self__ = this;
var this__22604__auto____$1 = this;
return (12 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22595__auto__){
var self__ = this;
var this__22595__auto____$1 = this;
var h__22421__auto__ = self__.__hash;
if(!((h__22421__auto__ == null))){
return h__22421__auto__;
} else {
var h__22421__auto____$1 = cljs.core.hash_imap.call(null,this__22595__auto____$1);
self__.__hash = h__22421__auto____$1;

return h__22421__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22596__auto__,other__22597__auto__){
var self__ = this;
var this__22596__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21974__auto__ = other__22597__auto__;
if(cljs.core.truth_(and__21974__auto__)){
var and__21974__auto____$1 = (this__22596__auto____$1.constructor === other__22597__auto__.constructor);
if(and__21974__auto____$1){
return cljs.core.equiv_map.call(null,this__22596__auto____$1,other__22597__auto__);
} else {
return and__21974__auto____$1;
}
} else {
return and__21974__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22609__auto__,k__22610__auto__){
var self__ = this;
var this__22609__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__22610__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22609__auto____$1),self__.__meta),k__22610__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22610__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22607__auto__,k__22608__auto__,G__28395){
var self__ = this;
var this__22607__auto____$1 = this;
var pred__28399 = cljs.core.keyword_identical_QMARK_;
var expr__28400 = k__22608__auto__;
if(cljs.core.truth_(pred__28399.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__28400))){
return (new taoensso.sente.ChWebSocket(G__28395,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28399.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__28400))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__28395,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28399.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__28400))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,G__28395,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28399.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__28400))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,G__28395,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28399.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__28400))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,G__28395,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28399.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__28400))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,G__28395,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28399.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__28400))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__28395,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28399.call(null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),expr__28400))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__28395,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28399.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__28400))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,G__28395,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28399.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__28400))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,G__28395,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28399.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__28400))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,G__28395,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28399.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__28400))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,G__28395,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22608__auto__,G__28395),null));
}
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22612__auto__){
var self__ = this;
var this__22612__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22599__auto__,G__28395){
var self__ = this;
var this__22599__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,G__28395,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22605__auto__,entry__22606__auto__){
var self__ = this;
var this__22605__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22606__auto__)){
return cljs.core._assoc.call(null,this__22605__auto____$1,cljs.core._nth.call(null,entry__22606__auto__,(0)),cljs.core._nth.call(null,entry__22606__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22605__auto____$1,entry__22606__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__28402){
var self__ = this;
var map__28403 = p__28402;
var map__28403__$1 = ((((!((map__28403 == null)))?((((map__28403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28403):map__28403);
var opts = map__28403__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__28403__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__28403__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__28403__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/m5/tl2vtswn5sjb4jry7k6x30tr0000gn/T/form-init8448210098474109102.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__28403,map__28403__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__28403,map__28403__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4425__auto___28437 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___28437)){
var cb_uuid_28438 = temp__4425__auto___28437;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_28438], null),taoensso.encore.hcond.call(null,false,"taoensso.sente",772,(new cljs.core.Delay(((function (cb_uuid_28438,temp__4425__auto___28437,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__28403,map__28403__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return _QMARK_cb_fn;
});})(cb_uuid_28438,temp__4425__auto___28437,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__28403,map__28403__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)));

var temp__4425__auto___28439__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4425__auto___28439__$1)){
var timeout_ms_28440 = temp__4425__auto___28439__$1;
var c__24153__auto___28441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto___28441,timeout_ms_28440,temp__4425__auto___28439__$1,cb_uuid_28438,temp__4425__auto___28437,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__28403,map__28403__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto___28441,timeout_ms_28440,temp__4425__auto___28439__$1,cb_uuid_28438,temp__4425__auto___28437,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__28403,map__28403__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_28415){
var state_val_28416 = (state_28415[(1)]);
if((state_val_28416 === (1))){
var inst_28405 = cljs.core.async.timeout.call(null,timeout_ms_28440);
var state_28415__$1 = state_28415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28415__$1,(2),inst_28405);
} else {
if((state_val_28416 === (2))){
var inst_28408 = (state_28415[(7)]);
var inst_28407 = (state_28415[(2)]);
var inst_28408__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_28415__$1 = (function (){var statearr_28417 = state_28415;
(statearr_28417[(8)] = inst_28407);

(statearr_28417[(7)] = inst_28408__$1);

return statearr_28417;
})();
if(cljs.core.truth_(inst_28408__$1)){
var statearr_28418_28442 = state_28415__$1;
(statearr_28418_28442[(1)] = (3));

} else {
var statearr_28419_28443 = state_28415__$1;
(statearr_28419_28443[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (3))){
var inst_28408 = (state_28415[(7)]);
var inst_28410 = inst_28408.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_28415__$1 = state_28415;
var statearr_28420_28444 = state_28415__$1;
(statearr_28420_28444[(2)] = inst_28410);

(statearr_28420_28444[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (4))){
var state_28415__$1 = state_28415;
var statearr_28421_28445 = state_28415__$1;
(statearr_28421_28445[(2)] = null);

(statearr_28421_28445[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (5))){
var inst_28413 = (state_28415[(2)]);
var state_28415__$1 = state_28415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28415__$1,inst_28413);
} else {
return null;
}
}
}
}
}
});})(c__24153__auto___28441,timeout_ms_28440,temp__4425__auto___28439__$1,cb_uuid_28438,temp__4425__auto___28437,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__28403,map__28403__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__24041__auto__,c__24153__auto___28441,timeout_ms_28440,temp__4425__auto___28439__$1,cb_uuid_28438,temp__4425__auto___28437,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__28403,map__28403__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__24042__auto__ = null;
var taoensso$sente$state_machine__24042__auto____0 = (function (){
var statearr_28425 = [null,null,null,null,null,null,null,null,null];
(statearr_28425[(0)] = taoensso$sente$state_machine__24042__auto__);

(statearr_28425[(1)] = (1));

return statearr_28425;
});
var taoensso$sente$state_machine__24042__auto____1 = (function (state_28415){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_28415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e28426){if((e28426 instanceof Object)){
var ex__24045__auto__ = e28426;
var statearr_28427_28446 = state_28415;
(statearr_28427_28446[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28447 = state_28415;
state_28415 = G__28447;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
taoensso$sente$state_machine__24042__auto__ = function(state_28415){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__24042__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__24042__auto____1.call(this,state_28415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__24042__auto____0;
taoensso$sente$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__24042__auto____1;
return taoensso$sente$state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto___28441,timeout_ms_28440,temp__4425__auto___28439__$1,cb_uuid_28438,temp__4425__auto___28437,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__28403,map__28403__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__24155__auto__ = (function (){var statearr_28428 = f__24154__auto__.call(null);
(statearr_28428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto___28441);

return statearr_28428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto___28441,timeout_ms_28440,temp__4425__auto___28439__$1,cb_uuid_28438,temp__4425__auto___28437,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__28403,map__28403__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e28429){if((e28429 instanceof Error)){
var e = e28429;
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/m5/tl2vtswn5sjb4jry7k6x30tr0000gn/T/form-init8448210098474109102.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__28403,map__28403__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__28403,map__28403__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

var temp__4425__auto___28448 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___28448)){
var cb_uuid_28449 = temp__4425__auto___28448;
var cb_fn_STAR__28450 = (function (){var or__21986__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_28449);
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return taoensso.encore.hcond.call(null,false,"taoensso.sente",786,(new cljs.core.Delay(((function (or__21986__auto__,cb_uuid_28449,temp__4425__auto___28448,e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__28403,map__28403__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return _QMARK_cb_fn;
});})(or__21986__auto__,cb_uuid_28449,temp__4425__auto___28448,e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__28403,map__28403__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null));
}
})();
cb_fn_STAR__28450.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e28429;

}
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4425__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4425__auto__)){
var s = temp__4425__auto__;
return s.close((3000),"SENTE_RECONNECT");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true], null));

var temp__4425__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4425__auto__)){
var s = temp__4425__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4425__auto__ = (function (){var or__21986__auto__ = (window["WebSocket"]);
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return (window["MozWebSocket"]);
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var WebSocket = temp__4425__auto__;
((function (WebSocket,temp__4425__auto__,chsk__$1){
return (function taoensso$sente$connect_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return null;
} else {
var retry_BANG_ = ((function (WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
var nattempt_STAR_ = cljs.core.swap_BANG_.call(null,self__.nattempt_,cljs.core.inc);
window.clearInterval(cljs.core.deref.call(null,self__.kalive_timer_));

taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/m5/tl2vtswn5sjb4jry7k6x30tr0000gn/T/form-init8448210098474109102.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (nattempt_STAR_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s).",nattempt_STAR_], null);
});})(nattempt_STAR_,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);

return taoensso.sente.set_exp_backoff_timeout_BANG_.call(null,taoensso$sente$connect_BANG_,nattempt_STAR_,self__.backoff_ms_fn);
});})(WebSocket,temp__4425__auto__,chsk__$1))
;
var temp__4423__auto__ = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null))));
}catch (e28433){if((e28433 instanceof Error)){
var e = e28433;
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/m5/tl2vtswn5sjb4jry7k6x30tr0000gn/T/form-init8448210098474109102.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (e,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);

return null;
} else {
throw e28433;

}
}})();
if(cljs.core.truth_(temp__4423__auto__)){
var socket = temp__4423__auto__;
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__28434 = socket;
(G__28434["onerror"] = ((function (G__28434,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/m5/tl2vtswn5sjb4jry7k6x30tr0000gn/T/form-init8448210098474109102.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (G__28434,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",ws_ev], null);
});})(G__28434,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
});})(G__28434,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__28434["onmessage"] = ((function (G__28434,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = (ws_ev["data"]);
var vec__28435 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__28435,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__28435,(1),null);
var or__21986__auto__ = (function (){var and__21974__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__21974__auto__)){
return cljs.core.reset_BANG_.call(null,self__.nattempt_,(0));
} else {
return and__21974__auto__;
}
})();
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
var temp__4423__auto____$1 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4423__auto____$1)){
var cb_uuid = temp__4423__auto____$1;
var temp__4423__auto____$2 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4423__auto____$2)){
var cb_fn = temp__4423__auto____$2;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/m5/tl2vtswn5sjb4jry7k6x30tr0000gn/T/form-init8448210098474109102.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (temp__4423__auto____$2,cb_uuid,temp__4423__auto____$1,or__21986__auto__,ppstr,vec__28435,clj,_QMARK_cb_uuid,G__28434,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4423__auto____$2,cb_uuid,temp__4423__auto____$1,or__21986__auto__,ppstr,vec__28435,clj,_QMARK_cb_uuid,G__28434,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__28434,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__28434["onopen"] = ((function (G__28434,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__28434,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__28434,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__28434,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__28434["onclose"] = ((function (G__28434,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);
});})(G__28434,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

return G__28434;
})());
} else {
return retry_BANG_.call(null);
}
}
});})(WebSocket,temp__4425__auto__,chsk__$1))
.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"kalive-ms","kalive-ms",1851265548,null),new cljs.core.Symbol(null,"kalive-timer_","kalive-timer_",-1096022620,null),new cljs.core.Symbol(null,"kalive-due?_","kalive-due?_",1679969599,null),new cljs.core.Symbol(null,"nattempt_","nattempt_",-674239217,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__22634__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__22634__auto__,writer__22635__auto__){
return cljs.core._write.call(null,writer__22635__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,backoff_ms_fn){
return (new taoensso.sente.ChWebSocket(client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__28397){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__28397),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__28397),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__28397),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__28397),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__28397),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__28397),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__28397),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552).cljs$core$IFn$_invoke$arity$1(G__28397),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__28397),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__28397),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__28397),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__28397),null,cljs.core.dissoc.call(null,G__28397,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,url,chs,timeout_ms,ajax_opts,curr_xhr_,state_,packer,backoff_ms_fn,__meta,__extmap,__hash){
this.client_id = client_id;
this.url = url;
this.chs = chs;
this.timeout_ms = timeout_ms;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.state_ = state_;
this.packer = packer;
this.backoff_ms_fn = backoff_ms_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22600__auto__,k__22601__auto__){
var self__ = this;
var this__22600__auto____$1 = this;
return cljs.core._lookup.call(null,this__22600__auto____$1,k__22601__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22602__auto__,k28452,else__22603__auto__){
var self__ = this;
var this__22602__auto____$1 = this;
var G__28454 = (((k28452 instanceof cljs.core.Keyword))?k28452.fqn:null);
switch (G__28454) {
case "client-id":
return self__.client_id;

break;
case "url":
return self__.url;

break;
case "chs":
return self__.chs;

break;
case "timeout-ms":
return self__.timeout_ms;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "state_":
return self__.state_;

break;
case "packer":
return self__.packer;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28452,else__22603__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22614__auto__,writer__22615__auto__,opts__22616__auto__){
var self__ = this;
var this__22614__auto____$1 = this;
var pr_pair__22617__auto__ = ((function (this__22614__auto____$1){
return (function (keyval__22618__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22615__auto__,cljs.core.pr_writer,""," ","",opts__22616__auto__,keyval__22618__auto__);
});})(this__22614__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22615__auto__,pr_pair__22617__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__22616__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28451){
var self__ = this;
var G__28451__$1 = this;
return (new cljs.core.RecordIter((0),G__28451__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22598__auto__){
var self__ = this;
var this__22598__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22594__auto__){
var self__ = this;
var this__22594__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22604__auto__){
var self__ = this;
var this__22604__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22595__auto__){
var self__ = this;
var this__22595__auto____$1 = this;
var h__22421__auto__ = self__.__hash;
if(!((h__22421__auto__ == null))){
return h__22421__auto__;
} else {
var h__22421__auto____$1 = cljs.core.hash_imap.call(null,this__22595__auto____$1);
self__.__hash = h__22421__auto____$1;

return h__22421__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22596__auto__,other__22597__auto__){
var self__ = this;
var this__22596__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21974__auto__ = other__22597__auto__;
if(cljs.core.truth_(and__21974__auto__)){
var and__21974__auto____$1 = (this__22596__auto____$1.constructor === other__22597__auto__.constructor);
if(and__21974__auto____$1){
return cljs.core.equiv_map.call(null,this__22596__auto____$1,other__22597__auto__);
} else {
return and__21974__auto____$1;
}
} else {
return and__21974__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22609__auto__,k__22610__auto__){
var self__ = this;
var this__22609__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__22610__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22609__auto____$1),self__.__meta),k__22610__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22610__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22607__auto__,k__22608__auto__,G__28451){
var self__ = this;
var this__22607__auto____$1 = this;
var pred__28455 = cljs.core.keyword_identical_QMARK_;
var expr__28456 = k__22608__auto__;
if(cljs.core.truth_(pred__28455.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__28456))){
return (new taoensso.sente.ChAjaxSocket(G__28451,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28455.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__28456))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__28451,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28455.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__28456))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,G__28451,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28455.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__28456))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,G__28451,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28455.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__28456))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,G__28451,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28455.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__28456))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,G__28451,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28455.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__28456))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__28451,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28455.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__28456))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,G__28451,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28455.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__28456))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,G__28451,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22608__auto__,G__28451),null));
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22612__auto__){
var self__ = this;
var this__22612__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22599__auto__,G__28451){
var self__ = this;
var this__22599__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,G__28451,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22605__auto__,entry__22606__auto__){
var self__ = this;
var this__22605__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22606__auto__)){
return cljs.core._assoc.call(null,this__22605__auto____$1,cljs.core._nth.call(null,entry__22606__auto__,(0)),cljs.core._nth.call(null,entry__22606__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22605__auto____$1,entry__22606__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__28458){
var self__ = this;
var map__28459 = p__28458;
var map__28459__$1 = ((((!((map__28459 == null)))?((((map__28459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28459):map__28459);
var opts = map__28459__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__28459__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__28459__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__28459__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/m5/tl2vtswn5sjb4jry7k6x30tr0000gn/T/form-init8448210098474109102.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__28459,map__28459__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__28459,map__28459__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
taoensso.encore.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)),new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null);
})()], null)),((function (_QMARK_cb_fn,chsk__$1,map__28459,map__28459__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__28461){
var map__28465 = p__28461;
var map__28465__$1 = ((((!((map__28465 == null)))?((((map__28465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28465):map__28465);
var _QMARK_error = cljs.core.get.call(null,map__28465__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__28465__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__28467 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__28467,(0),null);
var _ = cljs.core.nth.call(null,vec__28467,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/m5/tl2vtswn5sjb4jry7k6x30tr0000gn/T/form-init8448210098474109102.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (content,resp_ppstr,vec__28467,resp_clj,_,map__28465,map__28465__$1,_QMARK_error,_QMARK_content,_QMARK_cb_fn,chsk__$1,map__28459,map__28459__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__28467,resp_clj,_,map__28465,map__28465__$1,_QMARK_error,_QMARK_content,_QMARK_cb_fn,chsk__$1,map__28459,map__28459__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(_QMARK_cb_fn,chsk__$1,map__28459,map__28459__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4425__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4425__auto__)){
var x = temp__4425__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true], null));

var temp__4425__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4425__auto__)){
var x = temp__4425__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
((function (chsk__$1){
return (function taoensso$sente$async_poll_for_update_BANG_(nattempt){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/m5/tl2vtswn5sjb4jry7k6x30tr0000gn/T/form-init8448210098474109102.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(chsk__$1))
,null)),null);

if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return null;
} else {
var retry_BANG_ = ((function (chsk__$1){
return (function (){
var nattempt_STAR_ = (nattempt + (1));
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/m5/tl2vtswn5sjb4jry7k6x30tr0000gn/T/form-init8448210098474109102.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (nattempt_STAR_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s).",nattempt_STAR_], null);
});})(nattempt_STAR_,chsk__$1))
,null)),null);

return taoensso.sente.set_exp_backoff_timeout_BANG_.call(null,cljs.core.partial.call(null,taoensso$sente$async_poll_for_update_BANG_,nattempt_STAR_),nattempt_STAR_,self__.backoff_ms_fn);
});})(chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.encore.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_BANG_,chsk__$1){
return (function taoensso$sente$async_poll_for_update_BANG__$_ajax_cb(p__28475){
var map__28479 = p__28475;
var map__28479__$1 = ((((!((map__28479 == null)))?((((map__28479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28479):map__28479);
var _QMARK_error = cljs.core.get.call(null,map__28479__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__28479__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$async_poll_for_update_BANG_.call(null,(0));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__28481 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__28481,(0),null);
var _ = cljs.core.nth.call(null,vec__28481,(1),null);
var or__21986__auto___28483 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__21986__auto___28483)){
} else {
var buffered_evs_28484 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_28484);

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}

return taoensso$sente$async_poll_for_update_BANG_.call(null,(0));
}
});})(retry_BANG_,chsk__$1))
));
}
});})(chsk__$1))
.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__22634__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__22634__auto__,writer__22635__auto__){
return cljs.core._write.call(null,writer__22635__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,url,chs,timeout_ms,ajax_opts,curr_xhr_,state_,packer,backoff_ms_fn){
return (new taoensso.sente.ChAjaxSocket(client_id,url,chs,timeout_ms,ajax_opts,curr_xhr_,state_,packer,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__28453){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__28453),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__28453),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__28453),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__28453),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__28453),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__28453),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__28453),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__28453),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__28453),null,cljs.core.dissoc.call(null,G__28453,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)),null));
});

taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__28486 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28486) {
case "ajax":
return protocol;

break;
case "ws":
if(cljs.core._EQ_.call(null,protocol,"https:")){
return "wss:";
} else {
return "ws:";
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(taoensso.encore.path.call(null,chsk_host,chsk_path))].join('');
});
/**
 * Returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *           ; May `put!` (inject) arbitrary `event`s to this channel.
 *  :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *  :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *  :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *  :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto)
 *  :host           ; Server host (defaults to current page's host)
 *  :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity w/in given
 *                  ; number of milliseconds
 *  :lp-kalive-ms   ; Ping to keep a long-polling (Ajax) conn alive ''
 *  :packer         ; :edn (default), or an IPacker implementation (experimental)
 *  :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`
 *  :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 */
taoensso.sente.make_channel_socket_BANG_ = (function taoensso$sente$make_channel_socket_BANG_(var_args){
var args__23051__auto__ = [];
var len__23044__auto___28498 = arguments.length;
var i__23045__auto___28499 = (0);
while(true){
if((i__23045__auto___28499 < len__23044__auto___28498)){
args__23051__auto__.push((arguments[i__23045__auto___28499]));

var G__28500 = (i__23045__auto___28499 + (1));
i__23045__auto___28499 = G__28500;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__28491){
var vec__28492 = p__28491;
var map__28493 = cljs.core.nth.call(null,vec__28492,(0),null);
var map__28493__$1 = ((((!((map__28493 == null)))?((((map__28493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28493):map__28493);
var opts = map__28493__$1;
var ajax_opts = cljs.core.get.call(null,map__28493__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__28493__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__28493__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var client_id = cljs.core.get.call(null,map__28493__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__21986__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__28493__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var type = cljs.core.get.call(null,map__28493__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__28493__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__28493__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__28493__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__28493__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__28492,(1),null);
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay(((function (vec__28492,map__28493,map__28493__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return type;
});})(vec__28492,map__28493,map__28493__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null),new cljs.core.Symbol(null,"type","type",-1480165421,null))))].join('')));
}

if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay(((function (vec__28492,map__28493,map__28493__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return client_id;
});})(vec__28492,map__28493,map__28493__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),taoensso.encore.nblank_str_QMARK_,new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null),new cljs.core.Symbol(null,"client-id","client-id",1175909387,null))))].join('')));
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/m5/tl2vtswn5sjb4jry7k6x30tr0000gn/T/form-init8448210098474109102.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (vec__28492,map__28493,map__28493__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__28492,map__28493,map__28493__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/m5/tl2vtswn5sjb4jry7k6x30tr0000gn/T/form-init8448210098474109102.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (vec__28492,map__28493,map__28493__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__28492,map__28493,map__28493__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var win_location = taoensso.encore.get_window_location.call(null);
var win_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_location);
var host__$1 = (function (){var or__21986__auto__ = host;
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var path__$1 = (function (){var or__21986__auto__ = path;
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__28492,map__28493,map__28493__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__21986__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__21986__auto__){
return or__21986__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__28492,map__28493,map__28493__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__28492,map__28493,map__28493__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__28492,map__28493,map__28493__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),(function (){var _LT_server_ch = new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs);
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__28492,map__28493,map__28493__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__28492,map__28493,map__28493__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
} else {
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__28492,map__28493,map__28493__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__28495 = ev;
var id = cljs.core.nth.call(null,vec__28495,(0),null);
var _QMARK_data = cljs.core.nth.call(null,vec__28495,(1),null);
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay(((function (vec__28495,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__28492,map__28493,map__28493__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return cljs.core.namespace.call(null,id);
});})(vec__28495,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__28492,map__28493,map__28493__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"id","id",252129435,null)),((function (vec__28495,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__28492,map__28493,map__28493__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (p1__28488_SHARP_){
return cljs.core.not_EQ_.call(null,p1__28488_SHARP_,"chsk");
});})(vec__28495,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__28492,map__28493,map__28493__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__28488#","p1__28488#",725026044,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"p1__28488#","p1__28488#",725026044,null),"chsk")));


return ev;
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__28492,map__28493,map__28493__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
}
})()], null));
var chsk = (function (){var or__21986__auto__ = (function (){var and__21974__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__21974__auto__){
return taoensso.sente.chsk_init_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,cljs.core.atom.call(null,(0)),packer__$1,private_chs,backoff_ms_fn,cljs.core.atom.call(null,null),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ws","ws",86841443));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
}
})(),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),false], null))])));
} else {
return and__21974__auto__;
}
})();
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
var and__21974__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__21974__auto__){
return taoensso.sente.chsk_init_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"state_","state_",957667102)],[cljs.core.atom.call(null,null),client_id,packer__$1,private_chs,backoff_ms_fn,(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
}
})(),ajax_opts,lp_timeout_ms,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),false], null))])));
} else {
return and__21974__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"chsk","chsk",776828446,null)))].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__28492,map__28493,map__28493__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__28497 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__28497,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__28497,(1),null);
var ev__$1 = vec__28497;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__28492,map__28493,map__28493__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_BANG_.cljs$lang$applyTo = (function (seq28489){
var G__28490 = cljs.core.first.call(null,seq28489);
var seq28489__$1 = cljs.core.next.call(null,seq28489);
return taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28490,seq28489__$1);
});
/**
 * Creates a go-loop to call `(event-msg-handler <event-msg>)` and returns a
 *   `(fn stop! [])`. Catches & logs errors. Advanced users may choose to instead
 *   write their own loop against `ch-recv`.
 */
taoensso.sente.start_chsk_router_BANG_ = (function taoensso$sente$start_chsk_router_BANG_(var_args){
var args__23051__auto__ = [];
var len__23044__auto___28635 = arguments.length;
var i__23045__auto___28636 = (0);
while(true){
if((i__23045__auto___28636 < len__23044__auto___28635)){
args__23051__auto__.push((arguments[i__23045__auto___28636]));

var G__28637 = (i__23045__auto___28636 + (1));
i__23045__auto___28636 = G__28637;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((2) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((2)),(0))):null);
return taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23052__auto__);
});

taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__28504){
var vec__28505 = p__28504;
var map__28506 = cljs.core.nth.call(null,vec__28505,(0),null);
var map__28506__$1 = ((((!((map__28506 == null)))?((((map__28506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28506):map__28506);
var opts = map__28506__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__28506__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__24153__auto___28638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto___28638,ch_ctrl,vec__28505,map__28506,map__28506__$1,opts,trace_evs_QMARK_){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto___28638,ch_ctrl,vec__28505,map__28506,map__28506__$1,opts,trace_evs_QMARK_){
return (function (state_28587){
var state_val_28588 = (state_28587[(1)]);
if((state_val_28588 === (7))){
var inst_28583 = (state_28587[(2)]);
var state_28587__$1 = state_28587;
var statearr_28589_28639 = state_28587__$1;
(statearr_28589_28639[(2)] = inst_28583);

(statearr_28589_28639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (20))){
var inst_28542 = (state_28587[(7)]);
var inst_28514 = (state_28587[(8)]);
var inst_28515 = (state_28587[(9)]);
var inst_28517 = (state_28587[(10)]);
var inst_28516 = (state_28587[(11)]);
var inst_28541 = (state_28587[(12)]);
var inst_28552 = (function (){var vec__28509 = inst_28514;
var v = inst_28515;
var p = inst_28516;
var stop_QMARK_ = inst_28517;
var map__28520 = inst_28541;
var event_msg = inst_28541;
var event = inst_28542;
return ((function (vec__28509,v,p,stop_QMARK_,map__28520,event_msg,event,inst_28542,inst_28514,inst_28515,inst_28517,inst_28516,inst_28541,state_val_28588,c__24153__auto___28638,ch_ctrl,vec__28505,map__28506,map__28506__$1,opts,trace_evs_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__28509,v,p,stop_QMARK_,map__28520,event_msg,event,inst_28542,inst_28514,inst_28515,inst_28517,inst_28516,inst_28541,state_val_28588,c__24153__auto___28638,ch_ctrl,vec__28505,map__28506,map__28506__$1,opts,trace_evs_QMARK_))
})();
var inst_28553 = (new cljs.core.Delay(inst_28552,null));
var inst_28554 = taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/m5/tl2vtswn5sjb4jry7k6x30tr0000gn/T/form-init8448210098474109102.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),inst_28553,null);
var state_28587__$1 = state_28587;
var statearr_28590_28640 = state_28587__$1;
(statearr_28590_28640[(2)] = inst_28554);

(statearr_28590_28640[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (27))){
var state_28587__$1 = state_28587;
var statearr_28591_28641 = state_28587__$1;
(statearr_28591_28641[(2)] = null);

(statearr_28591_28641[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (1))){
var state_28587__$1 = state_28587;
var statearr_28592_28642 = state_28587__$1;
(statearr_28592_28642[(2)] = null);

(statearr_28592_28642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (24))){
var inst_28541 = (state_28587[(12)]);
var inst_28565 = event_msg_handler.call(null,inst_28541);
var state_28587__$1 = state_28587;
var statearr_28593_28643 = state_28587__$1;
(statearr_28593_28643[(2)] = inst_28565);

(statearr_28593_28643[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (4))){
var inst_28514 = (state_28587[(8)]);
var inst_28517 = (state_28587[(10)]);
var inst_28516 = (state_28587[(11)]);
var inst_28514__$1 = (state_28587[(2)]);
var inst_28515 = cljs.core.nth.call(null,inst_28514__$1,(0),null);
var inst_28516__$1 = cljs.core.nth.call(null,inst_28514__$1,(1),null);
var inst_28517__$1 = taoensso.encore.kw_identical_QMARK_.call(null,inst_28516__$1,ch_ctrl);
var state_28587__$1 = (function (){var statearr_28594 = state_28587;
(statearr_28594[(8)] = inst_28514__$1);

(statearr_28594[(9)] = inst_28515);

(statearr_28594[(10)] = inst_28517__$1);

(statearr_28594[(11)] = inst_28516__$1);

return statearr_28594;
})();
if(cljs.core.truth_(inst_28517__$1)){
var statearr_28595_28644 = state_28587__$1;
(statearr_28595_28644[(1)] = (5));

} else {
var statearr_28596_28645 = state_28587__$1;
(statearr_28596_28645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (15))){
var inst_28515 = (state_28587[(9)]);
var state_28587__$1 = state_28587;
var statearr_28597_28646 = state_28587__$1;
(statearr_28597_28646[(2)] = inst_28515);

(statearr_28597_28646[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (21))){
var state_28587__$1 = state_28587;
var statearr_28598_28647 = state_28587__$1;
(statearr_28598_28647[(2)] = null);

(statearr_28598_28647[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (13))){
var inst_28533 = (state_28587[(2)]);
var state_28587__$1 = state_28587;
var statearr_28599_28648 = state_28587__$1;
(statearr_28599_28648[(2)] = inst_28533);

(statearr_28599_28648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (22))){
var inst_28541 = (state_28587[(12)]);
var inst_28557 = (state_28587[(2)]);
var inst_28558 = taoensso.sente.event_msg_QMARK_.call(null,inst_28541);
var inst_28559 = cljs.core.not.call(null,inst_28558);
var state_28587__$1 = (function (){var statearr_28600 = state_28587;
(statearr_28600[(13)] = inst_28557);

return statearr_28600;
})();
if(inst_28559){
var statearr_28601_28649 = state_28587__$1;
(statearr_28601_28649[(1)] = (23));

} else {
var statearr_28602_28650 = state_28587__$1;
(statearr_28602_28650[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (6))){
var inst_28515 = (state_28587[(9)]);
var inst_28523 = (inst_28515 == null);
var inst_28524 = cljs.core.not.call(null,inst_28523);
var state_28587__$1 = state_28587;
if(inst_28524){
var statearr_28603_28651 = state_28587__$1;
(statearr_28603_28651[(1)] = (8));

} else {
var statearr_28604_28652 = state_28587__$1;
(statearr_28604_28652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (28))){
var inst_28580 = (state_28587[(2)]);
var state_28587__$1 = (function (){var statearr_28605 = state_28587;
(statearr_28605[(14)] = inst_28580);

return statearr_28605;
})();
var statearr_28606_28653 = state_28587__$1;
(statearr_28606_28653[(2)] = null);

(statearr_28606_28653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (25))){
var inst_28550 = (state_28587[(15)]);
var inst_28567 = (state_28587[(2)]);
var inst_28568 = [inst_28567];
var inst_28569 = (new cljs.core.PersistentVector(null,1,(5),inst_28550,inst_28568,null));
var state_28587__$1 = state_28587;
var statearr_28607_28654 = state_28587__$1;
(statearr_28607_28654[(2)] = inst_28569);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28587__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (17))){
var inst_28573 = (state_28587[(16)]);
var inst_28571 = (state_28587[(17)]);
var inst_28571__$1 = (state_28587[(2)]);
var inst_28572 = cljs.core.nth.call(null,inst_28571__$1,(0),null);
var inst_28573__$1 = cljs.core.nth.call(null,inst_28571__$1,(1),null);
var state_28587__$1 = (function (){var statearr_28608 = state_28587;
(statearr_28608[(16)] = inst_28573__$1);

(statearr_28608[(17)] = inst_28571__$1);

(statearr_28608[(18)] = inst_28572);

return statearr_28608;
})();
if(cljs.core.truth_(inst_28573__$1)){
var statearr_28609_28655 = state_28587__$1;
(statearr_28609_28655[(1)] = (26));

} else {
var statearr_28610_28656 = state_28587__$1;
(statearr_28610_28656[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (3))){
var inst_28585 = (state_28587[(2)]);
var state_28587__$1 = state_28587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28587__$1,inst_28585);
} else {
if((state_val_28588 === (12))){
var state_28587__$1 = state_28587;
var statearr_28611_28657 = state_28587__$1;
(statearr_28611_28657[(2)] = false);

(statearr_28611_28657[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (2))){
var inst_28510 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28511 = [ch_recv,ch_ctrl];
var inst_28512 = (new cljs.core.PersistentVector(null,2,(5),inst_28510,inst_28511,null));
var state_28587__$1 = state_28587;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28587__$1,(4),inst_28512);
} else {
if((state_val_28588 === (23))){
var inst_28542 = (state_28587[(7)]);
var inst_28514 = (state_28587[(8)]);
var inst_28515 = (state_28587[(9)]);
var inst_28517 = (state_28587[(10)]);
var inst_28516 = (state_28587[(11)]);
var inst_28541 = (state_28587[(12)]);
var inst_28561 = (function (){var vec__28509 = inst_28514;
var v = inst_28515;
var p = inst_28516;
var stop_QMARK_ = inst_28517;
var map__28520 = inst_28541;
var event_msg = inst_28541;
var event = inst_28542;
return ((function (vec__28509,v,p,stop_QMARK_,map__28520,event_msg,event,inst_28542,inst_28514,inst_28515,inst_28517,inst_28516,inst_28541,state_val_28588,c__24153__auto___28638,ch_ctrl,vec__28505,map__28506,map__28506__$1,opts,trace_evs_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad event: %s",event], null);
});
;})(vec__28509,v,p,stop_QMARK_,map__28520,event_msg,event,inst_28542,inst_28514,inst_28515,inst_28517,inst_28516,inst_28541,state_val_28588,c__24153__auto___28638,ch_ctrl,vec__28505,map__28506,map__28506__$1,opts,trace_evs_QMARK_))
})();
var inst_28562 = (new cljs.core.Delay(inst_28561,null));
var inst_28563 = taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/m5/tl2vtswn5sjb4jry7k6x30tr0000gn/T/form-init8448210098474109102.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),inst_28562,null);
var state_28587__$1 = state_28587;
var statearr_28612_28658 = state_28587__$1;
(statearr_28612_28658[(2)] = inst_28563);

(statearr_28612_28658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28587,(18),Error,null,(17));
var inst_28550 = cljs.core.PersistentVector.EMPTY_NODE;
var state_28587__$1 = (function (){var statearr_28613 = state_28587;
(statearr_28613[(15)] = inst_28550);

return statearr_28613;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_28614_28659 = state_28587__$1;
(statearr_28614_28659[(1)] = (20));

} else {
var statearr_28615_28660 = state_28587__$1;
(statearr_28615_28660[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (11))){
var state_28587__$1 = state_28587;
var statearr_28616_28661 = state_28587__$1;
(statearr_28616_28661[(2)] = true);

(statearr_28616_28661[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (9))){
var state_28587__$1 = state_28587;
var statearr_28617_28662 = state_28587__$1;
(statearr_28617_28662[(2)] = false);

(statearr_28617_28662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (5))){
var state_28587__$1 = state_28587;
var statearr_28618_28663 = state_28587__$1;
(statearr_28618_28663[(2)] = null);

(statearr_28618_28663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (14))){
var inst_28515 = (state_28587[(9)]);
var inst_28538 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28515);
var state_28587__$1 = state_28587;
var statearr_28619_28664 = state_28587__$1;
(statearr_28619_28664[(2)] = inst_28538);

(statearr_28619_28664[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (26))){
var inst_28542 = (state_28587[(7)]);
var inst_28514 = (state_28587[(8)]);
var inst_28573 = (state_28587[(16)]);
var inst_28571 = (state_28587[(17)]);
var inst_28515 = (state_28587[(9)]);
var inst_28517 = (state_28587[(10)]);
var inst_28516 = (state_28587[(11)]);
var inst_28541 = (state_28587[(12)]);
var inst_28572 = (state_28587[(18)]);
var inst_28575 = (function (){var p = inst_28516;
var _QMARK_error = inst_28573;
var map__28520 = inst_28541;
var temp__4425__auto__ = inst_28573;
var v = inst_28515;
var vec__28509 = inst_28514;
var _ = inst_28572;
var event_msg = inst_28541;
var e = inst_28573;
var vec__28521 = inst_28571;
var event = inst_28542;
var stop_QMARK_ = inst_28517;
return ((function (p,_QMARK_error,map__28520,temp__4425__auto__,v,vec__28509,_,event_msg,e,vec__28521,event,stop_QMARK_,inst_28542,inst_28514,inst_28573,inst_28571,inst_28515,inst_28517,inst_28516,inst_28541,inst_28572,state_val_28588,c__24153__auto___28638,ch_ctrl,vec__28505,map__28506,map__28506__$1,opts,trace_evs_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router handling error: %s",event], null);
});
;})(p,_QMARK_error,map__28520,temp__4425__auto__,v,vec__28509,_,event_msg,e,vec__28521,event,stop_QMARK_,inst_28542,inst_28514,inst_28573,inst_28571,inst_28515,inst_28517,inst_28516,inst_28541,inst_28572,state_val_28588,c__24153__auto___28638,ch_ctrl,vec__28505,map__28506,map__28506__$1,opts,trace_evs_QMARK_))
})();
var inst_28576 = (new cljs.core.Delay(inst_28575,null));
var inst_28577 = taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/m5/tl2vtswn5sjb4jry7k6x30tr0000gn/T/form-init8448210098474109102.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),inst_28576,null);
var state_28587__$1 = state_28587;
var statearr_28620_28665 = state_28587__$1;
(statearr_28620_28665[(2)] = inst_28577);

(statearr_28620_28665[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (16))){
var inst_28541 = (state_28587[(12)]);
var inst_28541__$1 = (state_28587[(2)]);
var inst_28542 = cljs.core.get.call(null,inst_28541__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_28587__$1 = (function (){var statearr_28621 = state_28587;
(statearr_28621[(7)] = inst_28542);

(statearr_28621[(12)] = inst_28541__$1);

return statearr_28621;
})();
var statearr_28622_28666 = state_28587__$1;
(statearr_28622_28666[(2)] = null);

(statearr_28622_28666[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (10))){
var inst_28536 = (state_28587[(2)]);
var state_28587__$1 = state_28587;
if(cljs.core.truth_(inst_28536)){
var statearr_28623_28667 = state_28587__$1;
(statearr_28623_28667[(1)] = (14));

} else {
var statearr_28624_28668 = state_28587__$1;
(statearr_28624_28668[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (18))){
var inst_28543 = (state_28587[(2)]);
var inst_28544 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28545 = [null,inst_28543];
var inst_28546 = (new cljs.core.PersistentVector(null,2,(5),inst_28544,inst_28545,null));
var state_28587__$1 = state_28587;
var statearr_28625_28669 = state_28587__$1;
(statearr_28625_28669[(2)] = inst_28546);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28587__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (8))){
var inst_28515 = (state_28587[(9)]);
var inst_28526 = inst_28515.cljs$lang$protocol_mask$partition0$;
var inst_28527 = (inst_28526 & (64));
var inst_28528 = inst_28515.cljs$core$ISeq$;
var inst_28529 = (inst_28527) || (inst_28528);
var state_28587__$1 = state_28587;
if(cljs.core.truth_(inst_28529)){
var statearr_28626_28670 = state_28587__$1;
(statearr_28626_28670[(1)] = (11));

} else {
var statearr_28627_28671 = state_28587__$1;
(statearr_28627_28671[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24153__auto___28638,ch_ctrl,vec__28505,map__28506,map__28506__$1,opts,trace_evs_QMARK_))
;
return ((function (switch__24041__auto__,c__24153__auto___28638,ch_ctrl,vec__28505,map__28506,map__28506__$1,opts,trace_evs_QMARK_){
return (function() {
var taoensso$sente$state_machine__24042__auto__ = null;
var taoensso$sente$state_machine__24042__auto____0 = (function (){
var statearr_28631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28631[(0)] = taoensso$sente$state_machine__24042__auto__);

(statearr_28631[(1)] = (1));

return statearr_28631;
});
var taoensso$sente$state_machine__24042__auto____1 = (function (state_28587){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_28587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e28632){if((e28632 instanceof Object)){
var ex__24045__auto__ = e28632;
var statearr_28633_28672 = state_28587;
(statearr_28633_28672[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28673 = state_28587;
state_28587 = G__28673;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
taoensso$sente$state_machine__24042__auto__ = function(state_28587){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__24042__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__24042__auto____1.call(this,state_28587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__24042__auto____0;
taoensso$sente$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__24042__auto____1;
return taoensso$sente$state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto___28638,ch_ctrl,vec__28505,map__28506,map__28506__$1,opts,trace_evs_QMARK_))
})();
var state__24155__auto__ = (function (){var statearr_28634 = f__24154__auto__.call(null);
(statearr_28634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto___28638);

return statearr_28634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto___28638,ch_ctrl,vec__28505,map__28506,map__28506__$1,opts,trace_evs_QMARK_))
);


return ((function (ch_ctrl,vec__28505,map__28506,map__28506__$1,opts,trace_evs_QMARK_){
return (function taoensso$sente$stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(ch_ctrl,vec__28505,map__28506,map__28506__$1,opts,trace_evs_QMARK_))
});

taoensso.sente.start_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_chsk_router_BANG_.cljs$lang$applyTo = (function (seq28501){
var G__28502 = cljs.core.first.call(null,seq28501);
var seq28501__$1 = cljs.core.next.call(null,seq28501);
var G__28503 = cljs.core.first.call(null,seq28501__$1);
var seq28501__$2 = cljs.core.next.call(null,seq28501__$1);
return taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28502,G__28503,seq28501__$2);
});
/**
 * DEPRECATED: Please use `start-chsk-router!` instead.
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});
/**
 * DEPRECATED. Please use `timbre/set-level!` instead.
 */
taoensso.sente.set_logging_level_BANG_ = (function taoensso$sente$set_logging_level_BANG_(level){
return taoensso.timbre.set_level_BANG_.call(null,level);
});
/**
 * DEPRECATED. Please use `taoensso.encore/ajax-lite` instead.
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;
/**
 * DEPRECATED.
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__28674,websocket_QMARK_){
var map__28677 = p__28674;
var map__28677__$1 = ((((!((map__28677 == null)))?((((map__28677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28677):map__28677);
var location = map__28677__$1;
var adjusted_protocol = cljs.core.get.call(null,map__28677__$1,new cljs.core.Keyword(null,"adjusted-protocol","adjusted-protocol",37431492));
var host = cljs.core.get.call(null,map__28677__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__28677__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str(adjusted_protocol),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__21986__auto__ = path;
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map