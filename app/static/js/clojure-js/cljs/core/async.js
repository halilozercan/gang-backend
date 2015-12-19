// Compiled by ClojureScript 1.7.189 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args24198 = [];
var len__23044__auto___24204 = arguments.length;
var i__23045__auto___24205 = (0);
while(true){
if((i__23045__auto___24205 < len__23044__auto___24204)){
args24198.push((arguments[i__23045__auto___24205]));

var G__24206 = (i__23045__auto___24205 + (1));
i__23045__auto___24205 = G__24206;
continue;
} else {
}
break;
}

var G__24200 = args24198.length;
switch (G__24200) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24198.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24201 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24201 = (function (f,blockable,meta24202){
this.f = f;
this.blockable = blockable;
this.meta24202 = meta24202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24203,meta24202__$1){
var self__ = this;
var _24203__$1 = this;
return (new cljs.core.async.t_cljs$core$async24201(self__.f,self__.blockable,meta24202__$1));
});

cljs.core.async.t_cljs$core$async24201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24203){
var self__ = this;
var _24203__$1 = this;
return self__.meta24202;
});

cljs.core.async.t_cljs$core$async24201.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24201.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24201.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24201.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24201.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24202","meta24202",-1417246986,null)], null);
});

cljs.core.async.t_cljs$core$async24201.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24201";

cljs.core.async.t_cljs$core$async24201.cljs$lang$ctorPrWriter = (function (this__22584__auto__,writer__22585__auto__,opt__22586__auto__){
return cljs.core._write.call(null,writer__22585__auto__,"cljs.core.async/t_cljs$core$async24201");
});

cljs.core.async.__GT_t_cljs$core$async24201 = (function cljs$core$async$__GT_t_cljs$core$async24201(f__$1,blockable__$1,meta24202){
return (new cljs.core.async.t_cljs$core$async24201(f__$1,blockable__$1,meta24202));
});

}

return (new cljs.core.async.t_cljs$core$async24201(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args24210 = [];
var len__23044__auto___24213 = arguments.length;
var i__23045__auto___24214 = (0);
while(true){
if((i__23045__auto___24214 < len__23044__auto___24213)){
args24210.push((arguments[i__23045__auto___24214]));

var G__24215 = (i__23045__auto___24214 + (1));
i__23045__auto___24214 = G__24215;
continue;
} else {
}
break;
}

var G__24212 = args24210.length;
switch (G__24212) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24210.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args24217 = [];
var len__23044__auto___24220 = arguments.length;
var i__23045__auto___24221 = (0);
while(true){
if((i__23045__auto___24221 < len__23044__auto___24220)){
args24217.push((arguments[i__23045__auto___24221]));

var G__24222 = (i__23045__auto___24221 + (1));
i__23045__auto___24221 = G__24222;
continue;
} else {
}
break;
}

var G__24219 = args24217.length;
switch (G__24219) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24217.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args24224 = [];
var len__23044__auto___24227 = arguments.length;
var i__23045__auto___24228 = (0);
while(true){
if((i__23045__auto___24228 < len__23044__auto___24227)){
args24224.push((arguments[i__23045__auto___24228]));

var G__24229 = (i__23045__auto___24228 + (1));
i__23045__auto___24228 = G__24229;
continue;
} else {
}
break;
}

var G__24226 = args24224.length;
switch (G__24226) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24224.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24231 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24231);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24231,ret){
return (function (){
return fn1.call(null,val_24231);
});})(val_24231,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args24232 = [];
var len__23044__auto___24235 = arguments.length;
var i__23045__auto___24236 = (0);
while(true){
if((i__23045__auto___24236 < len__23044__auto___24235)){
args24232.push((arguments[i__23045__auto___24236]));

var G__24237 = (i__23045__auto___24236 + (1));
i__23045__auto___24236 = G__24237;
continue;
} else {
}
break;
}

var G__24234 = args24232.length;
switch (G__24234) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24232.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22889__auto___24239 = n;
var x_24240 = (0);
while(true){
if((x_24240 < n__22889__auto___24239)){
(a[x_24240] = (0));

var G__24241 = (x_24240 + (1));
x_24240 = G__24241;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24242 = (i + (1));
i = G__24242;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24246 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24246 = (function (alt_flag,flag,meta24247){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24247 = meta24247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24248,meta24247__$1){
var self__ = this;
var _24248__$1 = this;
return (new cljs.core.async.t_cljs$core$async24246(self__.alt_flag,self__.flag,meta24247__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24246.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24248){
var self__ = this;
var _24248__$1 = this;
return self__.meta24247;
});})(flag))
;

cljs.core.async.t_cljs$core$async24246.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24246.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24246.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24246.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24246.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24247","meta24247",-591227926,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24246.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24246";

cljs.core.async.t_cljs$core$async24246.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22584__auto__,writer__22585__auto__,opt__22586__auto__){
return cljs.core._write.call(null,writer__22585__auto__,"cljs.core.async/t_cljs$core$async24246");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24246 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24246(alt_flag__$1,flag__$1,meta24247){
return (new cljs.core.async.t_cljs$core$async24246(alt_flag__$1,flag__$1,meta24247));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24246(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24252 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24252 = (function (alt_handler,flag,cb,meta24253){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24253 = meta24253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24254,meta24253__$1){
var self__ = this;
var _24254__$1 = this;
return (new cljs.core.async.t_cljs$core$async24252(self__.alt_handler,self__.flag,self__.cb,meta24253__$1));
});

cljs.core.async.t_cljs$core$async24252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24254){
var self__ = this;
var _24254__$1 = this;
return self__.meta24253;
});

cljs.core.async.t_cljs$core$async24252.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24252.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24252.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24252.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24253","meta24253",-2016409042,null)], null);
});

cljs.core.async.t_cljs$core$async24252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24252";

cljs.core.async.t_cljs$core$async24252.cljs$lang$ctorPrWriter = (function (this__22584__auto__,writer__22585__auto__,opt__22586__auto__){
return cljs.core._write.call(null,writer__22585__auto__,"cljs.core.async/t_cljs$core$async24252");
});

cljs.core.async.__GT_t_cljs$core$async24252 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24252(alt_handler__$1,flag__$1,cb__$1,meta24253){
return (new cljs.core.async.t_cljs$core$async24252(alt_handler__$1,flag__$1,cb__$1,meta24253));
});

}

return (new cljs.core.async.t_cljs$core$async24252(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24255_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24255_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24256_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24256_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21986__auto__ = wport;
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24257 = (i + (1));
i = G__24257;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21986__auto__ = ret;
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__21974__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21974__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21974__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__23051__auto__ = [];
var len__23044__auto___24263 = arguments.length;
var i__23045__auto___24264 = (0);
while(true){
if((i__23045__auto___24264 < len__23044__auto___24263)){
args__23051__auto__.push((arguments[i__23045__auto___24264]));

var G__24265 = (i__23045__auto___24264 + (1));
i__23045__auto___24264 = G__24265;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24260){
var map__24261 = p__24260;
var map__24261__$1 = ((((!((map__24261 == null)))?((((map__24261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24261):map__24261);
var opts = map__24261__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24258){
var G__24259 = cljs.core.first.call(null,seq24258);
var seq24258__$1 = cljs.core.next.call(null,seq24258);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24259,seq24258__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args24266 = [];
var len__23044__auto___24316 = arguments.length;
var i__23045__auto___24317 = (0);
while(true){
if((i__23045__auto___24317 < len__23044__auto___24316)){
args24266.push((arguments[i__23045__auto___24317]));

var G__24318 = (i__23045__auto___24317 + (1));
i__23045__auto___24317 = G__24318;
continue;
} else {
}
break;
}

var G__24268 = args24266.length;
switch (G__24268) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24266.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24153__auto___24320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto___24320){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto___24320){
return (function (state_24292){
var state_val_24293 = (state_24292[(1)]);
if((state_val_24293 === (7))){
var inst_24288 = (state_24292[(2)]);
var state_24292__$1 = state_24292;
var statearr_24294_24321 = state_24292__$1;
(statearr_24294_24321[(2)] = inst_24288);

(statearr_24294_24321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24293 === (1))){
var state_24292__$1 = state_24292;
var statearr_24295_24322 = state_24292__$1;
(statearr_24295_24322[(2)] = null);

(statearr_24295_24322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24293 === (4))){
var inst_24271 = (state_24292[(7)]);
var inst_24271__$1 = (state_24292[(2)]);
var inst_24272 = (inst_24271__$1 == null);
var state_24292__$1 = (function (){var statearr_24296 = state_24292;
(statearr_24296[(7)] = inst_24271__$1);

return statearr_24296;
})();
if(cljs.core.truth_(inst_24272)){
var statearr_24297_24323 = state_24292__$1;
(statearr_24297_24323[(1)] = (5));

} else {
var statearr_24298_24324 = state_24292__$1;
(statearr_24298_24324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24293 === (13))){
var state_24292__$1 = state_24292;
var statearr_24299_24325 = state_24292__$1;
(statearr_24299_24325[(2)] = null);

(statearr_24299_24325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24293 === (6))){
var inst_24271 = (state_24292[(7)]);
var state_24292__$1 = state_24292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24292__$1,(11),to,inst_24271);
} else {
if((state_val_24293 === (3))){
var inst_24290 = (state_24292[(2)]);
var state_24292__$1 = state_24292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24292__$1,inst_24290);
} else {
if((state_val_24293 === (12))){
var state_24292__$1 = state_24292;
var statearr_24300_24326 = state_24292__$1;
(statearr_24300_24326[(2)] = null);

(statearr_24300_24326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24293 === (2))){
var state_24292__$1 = state_24292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24292__$1,(4),from);
} else {
if((state_val_24293 === (11))){
var inst_24281 = (state_24292[(2)]);
var state_24292__$1 = state_24292;
if(cljs.core.truth_(inst_24281)){
var statearr_24301_24327 = state_24292__$1;
(statearr_24301_24327[(1)] = (12));

} else {
var statearr_24302_24328 = state_24292__$1;
(statearr_24302_24328[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24293 === (9))){
var state_24292__$1 = state_24292;
var statearr_24303_24329 = state_24292__$1;
(statearr_24303_24329[(2)] = null);

(statearr_24303_24329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24293 === (5))){
var state_24292__$1 = state_24292;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24304_24330 = state_24292__$1;
(statearr_24304_24330[(1)] = (8));

} else {
var statearr_24305_24331 = state_24292__$1;
(statearr_24305_24331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24293 === (14))){
var inst_24286 = (state_24292[(2)]);
var state_24292__$1 = state_24292;
var statearr_24306_24332 = state_24292__$1;
(statearr_24306_24332[(2)] = inst_24286);

(statearr_24306_24332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24293 === (10))){
var inst_24278 = (state_24292[(2)]);
var state_24292__$1 = state_24292;
var statearr_24307_24333 = state_24292__$1;
(statearr_24307_24333[(2)] = inst_24278);

(statearr_24307_24333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24293 === (8))){
var inst_24275 = cljs.core.async.close_BANG_.call(null,to);
var state_24292__$1 = state_24292;
var statearr_24308_24334 = state_24292__$1;
(statearr_24308_24334[(2)] = inst_24275);

(statearr_24308_24334[(1)] = (10));


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
});})(c__24153__auto___24320))
;
return ((function (switch__24041__auto__,c__24153__auto___24320){
return (function() {
var cljs$core$async$state_machine__24042__auto__ = null;
var cljs$core$async$state_machine__24042__auto____0 = (function (){
var statearr_24312 = [null,null,null,null,null,null,null,null];
(statearr_24312[(0)] = cljs$core$async$state_machine__24042__auto__);

(statearr_24312[(1)] = (1));

return statearr_24312;
});
var cljs$core$async$state_machine__24042__auto____1 = (function (state_24292){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_24292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e24313){if((e24313 instanceof Object)){
var ex__24045__auto__ = e24313;
var statearr_24314_24335 = state_24292;
(statearr_24314_24335[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24336 = state_24292;
state_24292 = G__24336;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
cljs$core$async$state_machine__24042__auto__ = function(state_24292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24042__auto____1.call(this,state_24292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24042__auto____0;
cljs$core$async$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24042__auto____1;
return cljs$core$async$state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto___24320))
})();
var state__24155__auto__ = (function (){var statearr_24315 = f__24154__auto__.call(null);
(statearr_24315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto___24320);

return statearr_24315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto___24320))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24520){
var vec__24521 = p__24520;
var v = cljs.core.nth.call(null,vec__24521,(0),null);
var p = cljs.core.nth.call(null,vec__24521,(1),null);
var job = vec__24521;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24153__auto___24703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto___24703,res,vec__24521,v,p,job,jobs,results){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto___24703,res,vec__24521,v,p,job,jobs,results){
return (function (state_24526){
var state_val_24527 = (state_24526[(1)]);
if((state_val_24527 === (1))){
var state_24526__$1 = state_24526;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24526__$1,(2),res,v);
} else {
if((state_val_24527 === (2))){
var inst_24523 = (state_24526[(2)]);
var inst_24524 = cljs.core.async.close_BANG_.call(null,res);
var state_24526__$1 = (function (){var statearr_24528 = state_24526;
(statearr_24528[(7)] = inst_24523);

return statearr_24528;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24526__$1,inst_24524);
} else {
return null;
}
}
});})(c__24153__auto___24703,res,vec__24521,v,p,job,jobs,results))
;
return ((function (switch__24041__auto__,c__24153__auto___24703,res,vec__24521,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____0 = (function (){
var statearr_24532 = [null,null,null,null,null,null,null,null];
(statearr_24532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__);

(statearr_24532[(1)] = (1));

return statearr_24532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____1 = (function (state_24526){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_24526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e24533){if((e24533 instanceof Object)){
var ex__24045__auto__ = e24533;
var statearr_24534_24704 = state_24526;
(statearr_24534_24704[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24705 = state_24526;
state_24526 = G__24705;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__ = function(state_24526){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____1.call(this,state_24526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto___24703,res,vec__24521,v,p,job,jobs,results))
})();
var state__24155__auto__ = (function (){var statearr_24535 = f__24154__auto__.call(null);
(statearr_24535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto___24703);

return statearr_24535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto___24703,res,vec__24521,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24536){
var vec__24537 = p__24536;
var v = cljs.core.nth.call(null,vec__24537,(0),null);
var p = cljs.core.nth.call(null,vec__24537,(1),null);
var job = vec__24537;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__22889__auto___24706 = n;
var __24707 = (0);
while(true){
if((__24707 < n__22889__auto___24706)){
var G__24538_24708 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24538_24708) {
case "compute":
var c__24153__auto___24710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24707,c__24153__auto___24710,G__24538_24708,n__22889__auto___24706,jobs,results,process,async){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (__24707,c__24153__auto___24710,G__24538_24708,n__22889__auto___24706,jobs,results,process,async){
return (function (state_24551){
var state_val_24552 = (state_24551[(1)]);
if((state_val_24552 === (1))){
var state_24551__$1 = state_24551;
var statearr_24553_24711 = state_24551__$1;
(statearr_24553_24711[(2)] = null);

(statearr_24553_24711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24552 === (2))){
var state_24551__$1 = state_24551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24551__$1,(4),jobs);
} else {
if((state_val_24552 === (3))){
var inst_24549 = (state_24551[(2)]);
var state_24551__$1 = state_24551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24551__$1,inst_24549);
} else {
if((state_val_24552 === (4))){
var inst_24541 = (state_24551[(2)]);
var inst_24542 = process.call(null,inst_24541);
var state_24551__$1 = state_24551;
if(cljs.core.truth_(inst_24542)){
var statearr_24554_24712 = state_24551__$1;
(statearr_24554_24712[(1)] = (5));

} else {
var statearr_24555_24713 = state_24551__$1;
(statearr_24555_24713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24552 === (5))){
var state_24551__$1 = state_24551;
var statearr_24556_24714 = state_24551__$1;
(statearr_24556_24714[(2)] = null);

(statearr_24556_24714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24552 === (6))){
var state_24551__$1 = state_24551;
var statearr_24557_24715 = state_24551__$1;
(statearr_24557_24715[(2)] = null);

(statearr_24557_24715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24552 === (7))){
var inst_24547 = (state_24551[(2)]);
var state_24551__$1 = state_24551;
var statearr_24558_24716 = state_24551__$1;
(statearr_24558_24716[(2)] = inst_24547);

(statearr_24558_24716[(1)] = (3));


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
});})(__24707,c__24153__auto___24710,G__24538_24708,n__22889__auto___24706,jobs,results,process,async))
;
return ((function (__24707,switch__24041__auto__,c__24153__auto___24710,G__24538_24708,n__22889__auto___24706,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____0 = (function (){
var statearr_24562 = [null,null,null,null,null,null,null];
(statearr_24562[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__);

(statearr_24562[(1)] = (1));

return statearr_24562;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____1 = (function (state_24551){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_24551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e24563){if((e24563 instanceof Object)){
var ex__24045__auto__ = e24563;
var statearr_24564_24717 = state_24551;
(statearr_24564_24717[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24718 = state_24551;
state_24551 = G__24718;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__ = function(state_24551){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____1.call(this,state_24551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__;
})()
;})(__24707,switch__24041__auto__,c__24153__auto___24710,G__24538_24708,n__22889__auto___24706,jobs,results,process,async))
})();
var state__24155__auto__ = (function (){var statearr_24565 = f__24154__auto__.call(null);
(statearr_24565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto___24710);

return statearr_24565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(__24707,c__24153__auto___24710,G__24538_24708,n__22889__auto___24706,jobs,results,process,async))
);


break;
case "async":
var c__24153__auto___24719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24707,c__24153__auto___24719,G__24538_24708,n__22889__auto___24706,jobs,results,process,async){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (__24707,c__24153__auto___24719,G__24538_24708,n__22889__auto___24706,jobs,results,process,async){
return (function (state_24578){
var state_val_24579 = (state_24578[(1)]);
if((state_val_24579 === (1))){
var state_24578__$1 = state_24578;
var statearr_24580_24720 = state_24578__$1;
(statearr_24580_24720[(2)] = null);

(statearr_24580_24720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24579 === (2))){
var state_24578__$1 = state_24578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24578__$1,(4),jobs);
} else {
if((state_val_24579 === (3))){
var inst_24576 = (state_24578[(2)]);
var state_24578__$1 = state_24578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24578__$1,inst_24576);
} else {
if((state_val_24579 === (4))){
var inst_24568 = (state_24578[(2)]);
var inst_24569 = async.call(null,inst_24568);
var state_24578__$1 = state_24578;
if(cljs.core.truth_(inst_24569)){
var statearr_24581_24721 = state_24578__$1;
(statearr_24581_24721[(1)] = (5));

} else {
var statearr_24582_24722 = state_24578__$1;
(statearr_24582_24722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24579 === (5))){
var state_24578__$1 = state_24578;
var statearr_24583_24723 = state_24578__$1;
(statearr_24583_24723[(2)] = null);

(statearr_24583_24723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24579 === (6))){
var state_24578__$1 = state_24578;
var statearr_24584_24724 = state_24578__$1;
(statearr_24584_24724[(2)] = null);

(statearr_24584_24724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24579 === (7))){
var inst_24574 = (state_24578[(2)]);
var state_24578__$1 = state_24578;
var statearr_24585_24725 = state_24578__$1;
(statearr_24585_24725[(2)] = inst_24574);

(statearr_24585_24725[(1)] = (3));


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
});})(__24707,c__24153__auto___24719,G__24538_24708,n__22889__auto___24706,jobs,results,process,async))
;
return ((function (__24707,switch__24041__auto__,c__24153__auto___24719,G__24538_24708,n__22889__auto___24706,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____0 = (function (){
var statearr_24589 = [null,null,null,null,null,null,null];
(statearr_24589[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__);

(statearr_24589[(1)] = (1));

return statearr_24589;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____1 = (function (state_24578){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_24578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e24590){if((e24590 instanceof Object)){
var ex__24045__auto__ = e24590;
var statearr_24591_24726 = state_24578;
(statearr_24591_24726[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24727 = state_24578;
state_24578 = G__24727;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__ = function(state_24578){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____1.call(this,state_24578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__;
})()
;})(__24707,switch__24041__auto__,c__24153__auto___24719,G__24538_24708,n__22889__auto___24706,jobs,results,process,async))
})();
var state__24155__auto__ = (function (){var statearr_24592 = f__24154__auto__.call(null);
(statearr_24592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto___24719);

return statearr_24592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(__24707,c__24153__auto___24719,G__24538_24708,n__22889__auto___24706,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24728 = (__24707 + (1));
__24707 = G__24728;
continue;
} else {
}
break;
}

var c__24153__auto___24729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto___24729,jobs,results,process,async){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto___24729,jobs,results,process,async){
return (function (state_24614){
var state_val_24615 = (state_24614[(1)]);
if((state_val_24615 === (1))){
var state_24614__$1 = state_24614;
var statearr_24616_24730 = state_24614__$1;
(statearr_24616_24730[(2)] = null);

(statearr_24616_24730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (2))){
var state_24614__$1 = state_24614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24614__$1,(4),from);
} else {
if((state_val_24615 === (3))){
var inst_24612 = (state_24614[(2)]);
var state_24614__$1 = state_24614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24614__$1,inst_24612);
} else {
if((state_val_24615 === (4))){
var inst_24595 = (state_24614[(7)]);
var inst_24595__$1 = (state_24614[(2)]);
var inst_24596 = (inst_24595__$1 == null);
var state_24614__$1 = (function (){var statearr_24617 = state_24614;
(statearr_24617[(7)] = inst_24595__$1);

return statearr_24617;
})();
if(cljs.core.truth_(inst_24596)){
var statearr_24618_24731 = state_24614__$1;
(statearr_24618_24731[(1)] = (5));

} else {
var statearr_24619_24732 = state_24614__$1;
(statearr_24619_24732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (5))){
var inst_24598 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24614__$1 = state_24614;
var statearr_24620_24733 = state_24614__$1;
(statearr_24620_24733[(2)] = inst_24598);

(statearr_24620_24733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (6))){
var inst_24600 = (state_24614[(8)]);
var inst_24595 = (state_24614[(7)]);
var inst_24600__$1 = cljs.core.async.chan.call(null,(1));
var inst_24601 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24602 = [inst_24595,inst_24600__$1];
var inst_24603 = (new cljs.core.PersistentVector(null,2,(5),inst_24601,inst_24602,null));
var state_24614__$1 = (function (){var statearr_24621 = state_24614;
(statearr_24621[(8)] = inst_24600__$1);

return statearr_24621;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24614__$1,(8),jobs,inst_24603);
} else {
if((state_val_24615 === (7))){
var inst_24610 = (state_24614[(2)]);
var state_24614__$1 = state_24614;
var statearr_24622_24734 = state_24614__$1;
(statearr_24622_24734[(2)] = inst_24610);

(statearr_24622_24734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (8))){
var inst_24600 = (state_24614[(8)]);
var inst_24605 = (state_24614[(2)]);
var state_24614__$1 = (function (){var statearr_24623 = state_24614;
(statearr_24623[(9)] = inst_24605);

return statearr_24623;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24614__$1,(9),results,inst_24600);
} else {
if((state_val_24615 === (9))){
var inst_24607 = (state_24614[(2)]);
var state_24614__$1 = (function (){var statearr_24624 = state_24614;
(statearr_24624[(10)] = inst_24607);

return statearr_24624;
})();
var statearr_24625_24735 = state_24614__$1;
(statearr_24625_24735[(2)] = null);

(statearr_24625_24735[(1)] = (2));


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
});})(c__24153__auto___24729,jobs,results,process,async))
;
return ((function (switch__24041__auto__,c__24153__auto___24729,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____0 = (function (){
var statearr_24629 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__);

(statearr_24629[(1)] = (1));

return statearr_24629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____1 = (function (state_24614){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_24614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e24630){if((e24630 instanceof Object)){
var ex__24045__auto__ = e24630;
var statearr_24631_24736 = state_24614;
(statearr_24631_24736[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24737 = state_24614;
state_24614 = G__24737;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__ = function(state_24614){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____1.call(this,state_24614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto___24729,jobs,results,process,async))
})();
var state__24155__auto__ = (function (){var statearr_24632 = f__24154__auto__.call(null);
(statearr_24632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto___24729);

return statearr_24632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto___24729,jobs,results,process,async))
);


var c__24153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto__,jobs,results,process,async){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto__,jobs,results,process,async){
return (function (state_24670){
var state_val_24671 = (state_24670[(1)]);
if((state_val_24671 === (7))){
var inst_24666 = (state_24670[(2)]);
var state_24670__$1 = state_24670;
var statearr_24672_24738 = state_24670__$1;
(statearr_24672_24738[(2)] = inst_24666);

(statearr_24672_24738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (20))){
var state_24670__$1 = state_24670;
var statearr_24673_24739 = state_24670__$1;
(statearr_24673_24739[(2)] = null);

(statearr_24673_24739[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (1))){
var state_24670__$1 = state_24670;
var statearr_24674_24740 = state_24670__$1;
(statearr_24674_24740[(2)] = null);

(statearr_24674_24740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (4))){
var inst_24635 = (state_24670[(7)]);
var inst_24635__$1 = (state_24670[(2)]);
var inst_24636 = (inst_24635__$1 == null);
var state_24670__$1 = (function (){var statearr_24675 = state_24670;
(statearr_24675[(7)] = inst_24635__$1);

return statearr_24675;
})();
if(cljs.core.truth_(inst_24636)){
var statearr_24676_24741 = state_24670__$1;
(statearr_24676_24741[(1)] = (5));

} else {
var statearr_24677_24742 = state_24670__$1;
(statearr_24677_24742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (15))){
var inst_24648 = (state_24670[(8)]);
var state_24670__$1 = state_24670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24670__$1,(18),to,inst_24648);
} else {
if((state_val_24671 === (21))){
var inst_24661 = (state_24670[(2)]);
var state_24670__$1 = state_24670;
var statearr_24678_24743 = state_24670__$1;
(statearr_24678_24743[(2)] = inst_24661);

(statearr_24678_24743[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (13))){
var inst_24663 = (state_24670[(2)]);
var state_24670__$1 = (function (){var statearr_24679 = state_24670;
(statearr_24679[(9)] = inst_24663);

return statearr_24679;
})();
var statearr_24680_24744 = state_24670__$1;
(statearr_24680_24744[(2)] = null);

(statearr_24680_24744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (6))){
var inst_24635 = (state_24670[(7)]);
var state_24670__$1 = state_24670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24670__$1,(11),inst_24635);
} else {
if((state_val_24671 === (17))){
var inst_24656 = (state_24670[(2)]);
var state_24670__$1 = state_24670;
if(cljs.core.truth_(inst_24656)){
var statearr_24681_24745 = state_24670__$1;
(statearr_24681_24745[(1)] = (19));

} else {
var statearr_24682_24746 = state_24670__$1;
(statearr_24682_24746[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (3))){
var inst_24668 = (state_24670[(2)]);
var state_24670__$1 = state_24670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24670__$1,inst_24668);
} else {
if((state_val_24671 === (12))){
var inst_24645 = (state_24670[(10)]);
var state_24670__$1 = state_24670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24670__$1,(14),inst_24645);
} else {
if((state_val_24671 === (2))){
var state_24670__$1 = state_24670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24670__$1,(4),results);
} else {
if((state_val_24671 === (19))){
var state_24670__$1 = state_24670;
var statearr_24683_24747 = state_24670__$1;
(statearr_24683_24747[(2)] = null);

(statearr_24683_24747[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (11))){
var inst_24645 = (state_24670[(2)]);
var state_24670__$1 = (function (){var statearr_24684 = state_24670;
(statearr_24684[(10)] = inst_24645);

return statearr_24684;
})();
var statearr_24685_24748 = state_24670__$1;
(statearr_24685_24748[(2)] = null);

(statearr_24685_24748[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (9))){
var state_24670__$1 = state_24670;
var statearr_24686_24749 = state_24670__$1;
(statearr_24686_24749[(2)] = null);

(statearr_24686_24749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (5))){
var state_24670__$1 = state_24670;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24687_24750 = state_24670__$1;
(statearr_24687_24750[(1)] = (8));

} else {
var statearr_24688_24751 = state_24670__$1;
(statearr_24688_24751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (14))){
var inst_24650 = (state_24670[(11)]);
var inst_24648 = (state_24670[(8)]);
var inst_24648__$1 = (state_24670[(2)]);
var inst_24649 = (inst_24648__$1 == null);
var inst_24650__$1 = cljs.core.not.call(null,inst_24649);
var state_24670__$1 = (function (){var statearr_24689 = state_24670;
(statearr_24689[(11)] = inst_24650__$1);

(statearr_24689[(8)] = inst_24648__$1);

return statearr_24689;
})();
if(inst_24650__$1){
var statearr_24690_24752 = state_24670__$1;
(statearr_24690_24752[(1)] = (15));

} else {
var statearr_24691_24753 = state_24670__$1;
(statearr_24691_24753[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (16))){
var inst_24650 = (state_24670[(11)]);
var state_24670__$1 = state_24670;
var statearr_24692_24754 = state_24670__$1;
(statearr_24692_24754[(2)] = inst_24650);

(statearr_24692_24754[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (10))){
var inst_24642 = (state_24670[(2)]);
var state_24670__$1 = state_24670;
var statearr_24693_24755 = state_24670__$1;
(statearr_24693_24755[(2)] = inst_24642);

(statearr_24693_24755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (18))){
var inst_24653 = (state_24670[(2)]);
var state_24670__$1 = state_24670;
var statearr_24694_24756 = state_24670__$1;
(statearr_24694_24756[(2)] = inst_24653);

(statearr_24694_24756[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (8))){
var inst_24639 = cljs.core.async.close_BANG_.call(null,to);
var state_24670__$1 = state_24670;
var statearr_24695_24757 = state_24670__$1;
(statearr_24695_24757[(2)] = inst_24639);

(statearr_24695_24757[(1)] = (10));


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
});})(c__24153__auto__,jobs,results,process,async))
;
return ((function (switch__24041__auto__,c__24153__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____0 = (function (){
var statearr_24699 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24699[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__);

(statearr_24699[(1)] = (1));

return statearr_24699;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____1 = (function (state_24670){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_24670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e24700){if((e24700 instanceof Object)){
var ex__24045__auto__ = e24700;
var statearr_24701_24758 = state_24670;
(statearr_24701_24758[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24759 = state_24670;
state_24670 = G__24759;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__ = function(state_24670){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____1.call(this,state_24670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto__,jobs,results,process,async))
})();
var state__24155__auto__ = (function (){var statearr_24702 = f__24154__auto__.call(null);
(statearr_24702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto__);

return statearr_24702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto__,jobs,results,process,async))
);

return c__24153__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args24760 = [];
var len__23044__auto___24763 = arguments.length;
var i__23045__auto___24764 = (0);
while(true){
if((i__23045__auto___24764 < len__23044__auto___24763)){
args24760.push((arguments[i__23045__auto___24764]));

var G__24765 = (i__23045__auto___24764 + (1));
i__23045__auto___24764 = G__24765;
continue;
} else {
}
break;
}

var G__24762 = args24760.length;
switch (G__24762) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24760.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args24767 = [];
var len__23044__auto___24770 = arguments.length;
var i__23045__auto___24771 = (0);
while(true){
if((i__23045__auto___24771 < len__23044__auto___24770)){
args24767.push((arguments[i__23045__auto___24771]));

var G__24772 = (i__23045__auto___24771 + (1));
i__23045__auto___24771 = G__24772;
continue;
} else {
}
break;
}

var G__24769 = args24767.length;
switch (G__24769) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24767.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args24774 = [];
var len__23044__auto___24827 = arguments.length;
var i__23045__auto___24828 = (0);
while(true){
if((i__23045__auto___24828 < len__23044__auto___24827)){
args24774.push((arguments[i__23045__auto___24828]));

var G__24829 = (i__23045__auto___24828 + (1));
i__23045__auto___24828 = G__24829;
continue;
} else {
}
break;
}

var G__24776 = args24774.length;
switch (G__24776) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24774.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24153__auto___24831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto___24831,tc,fc){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto___24831,tc,fc){
return (function (state_24802){
var state_val_24803 = (state_24802[(1)]);
if((state_val_24803 === (7))){
var inst_24798 = (state_24802[(2)]);
var state_24802__$1 = state_24802;
var statearr_24804_24832 = state_24802__$1;
(statearr_24804_24832[(2)] = inst_24798);

(statearr_24804_24832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (1))){
var state_24802__$1 = state_24802;
var statearr_24805_24833 = state_24802__$1;
(statearr_24805_24833[(2)] = null);

(statearr_24805_24833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (4))){
var inst_24779 = (state_24802[(7)]);
var inst_24779__$1 = (state_24802[(2)]);
var inst_24780 = (inst_24779__$1 == null);
var state_24802__$1 = (function (){var statearr_24806 = state_24802;
(statearr_24806[(7)] = inst_24779__$1);

return statearr_24806;
})();
if(cljs.core.truth_(inst_24780)){
var statearr_24807_24834 = state_24802__$1;
(statearr_24807_24834[(1)] = (5));

} else {
var statearr_24808_24835 = state_24802__$1;
(statearr_24808_24835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (13))){
var state_24802__$1 = state_24802;
var statearr_24809_24836 = state_24802__$1;
(statearr_24809_24836[(2)] = null);

(statearr_24809_24836[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (6))){
var inst_24779 = (state_24802[(7)]);
var inst_24785 = p.call(null,inst_24779);
var state_24802__$1 = state_24802;
if(cljs.core.truth_(inst_24785)){
var statearr_24810_24837 = state_24802__$1;
(statearr_24810_24837[(1)] = (9));

} else {
var statearr_24811_24838 = state_24802__$1;
(statearr_24811_24838[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (3))){
var inst_24800 = (state_24802[(2)]);
var state_24802__$1 = state_24802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24802__$1,inst_24800);
} else {
if((state_val_24803 === (12))){
var state_24802__$1 = state_24802;
var statearr_24812_24839 = state_24802__$1;
(statearr_24812_24839[(2)] = null);

(statearr_24812_24839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (2))){
var state_24802__$1 = state_24802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24802__$1,(4),ch);
} else {
if((state_val_24803 === (11))){
var inst_24779 = (state_24802[(7)]);
var inst_24789 = (state_24802[(2)]);
var state_24802__$1 = state_24802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24802__$1,(8),inst_24789,inst_24779);
} else {
if((state_val_24803 === (9))){
var state_24802__$1 = state_24802;
var statearr_24813_24840 = state_24802__$1;
(statearr_24813_24840[(2)] = tc);

(statearr_24813_24840[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (5))){
var inst_24782 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24783 = cljs.core.async.close_BANG_.call(null,fc);
var state_24802__$1 = (function (){var statearr_24814 = state_24802;
(statearr_24814[(8)] = inst_24782);

return statearr_24814;
})();
var statearr_24815_24841 = state_24802__$1;
(statearr_24815_24841[(2)] = inst_24783);

(statearr_24815_24841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (14))){
var inst_24796 = (state_24802[(2)]);
var state_24802__$1 = state_24802;
var statearr_24816_24842 = state_24802__$1;
(statearr_24816_24842[(2)] = inst_24796);

(statearr_24816_24842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (10))){
var state_24802__$1 = state_24802;
var statearr_24817_24843 = state_24802__$1;
(statearr_24817_24843[(2)] = fc);

(statearr_24817_24843[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (8))){
var inst_24791 = (state_24802[(2)]);
var state_24802__$1 = state_24802;
if(cljs.core.truth_(inst_24791)){
var statearr_24818_24844 = state_24802__$1;
(statearr_24818_24844[(1)] = (12));

} else {
var statearr_24819_24845 = state_24802__$1;
(statearr_24819_24845[(1)] = (13));

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
});})(c__24153__auto___24831,tc,fc))
;
return ((function (switch__24041__auto__,c__24153__auto___24831,tc,fc){
return (function() {
var cljs$core$async$state_machine__24042__auto__ = null;
var cljs$core$async$state_machine__24042__auto____0 = (function (){
var statearr_24823 = [null,null,null,null,null,null,null,null,null];
(statearr_24823[(0)] = cljs$core$async$state_machine__24042__auto__);

(statearr_24823[(1)] = (1));

return statearr_24823;
});
var cljs$core$async$state_machine__24042__auto____1 = (function (state_24802){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_24802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e24824){if((e24824 instanceof Object)){
var ex__24045__auto__ = e24824;
var statearr_24825_24846 = state_24802;
(statearr_24825_24846[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24847 = state_24802;
state_24802 = G__24847;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
cljs$core$async$state_machine__24042__auto__ = function(state_24802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24042__auto____1.call(this,state_24802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24042__auto____0;
cljs$core$async$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24042__auto____1;
return cljs$core$async$state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto___24831,tc,fc))
})();
var state__24155__auto__ = (function (){var statearr_24826 = f__24154__auto__.call(null);
(statearr_24826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto___24831);

return statearr_24826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto___24831,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto__){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto__){
return (function (state_24911){
var state_val_24912 = (state_24911[(1)]);
if((state_val_24912 === (7))){
var inst_24907 = (state_24911[(2)]);
var state_24911__$1 = state_24911;
var statearr_24913_24934 = state_24911__$1;
(statearr_24913_24934[(2)] = inst_24907);

(statearr_24913_24934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (1))){
var inst_24891 = init;
var state_24911__$1 = (function (){var statearr_24914 = state_24911;
(statearr_24914[(7)] = inst_24891);

return statearr_24914;
})();
var statearr_24915_24935 = state_24911__$1;
(statearr_24915_24935[(2)] = null);

(statearr_24915_24935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (4))){
var inst_24894 = (state_24911[(8)]);
var inst_24894__$1 = (state_24911[(2)]);
var inst_24895 = (inst_24894__$1 == null);
var state_24911__$1 = (function (){var statearr_24916 = state_24911;
(statearr_24916[(8)] = inst_24894__$1);

return statearr_24916;
})();
if(cljs.core.truth_(inst_24895)){
var statearr_24917_24936 = state_24911__$1;
(statearr_24917_24936[(1)] = (5));

} else {
var statearr_24918_24937 = state_24911__$1;
(statearr_24918_24937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (6))){
var inst_24894 = (state_24911[(8)]);
var inst_24891 = (state_24911[(7)]);
var inst_24898 = (state_24911[(9)]);
var inst_24898__$1 = f.call(null,inst_24891,inst_24894);
var inst_24899 = cljs.core.reduced_QMARK_.call(null,inst_24898__$1);
var state_24911__$1 = (function (){var statearr_24919 = state_24911;
(statearr_24919[(9)] = inst_24898__$1);

return statearr_24919;
})();
if(inst_24899){
var statearr_24920_24938 = state_24911__$1;
(statearr_24920_24938[(1)] = (8));

} else {
var statearr_24921_24939 = state_24911__$1;
(statearr_24921_24939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (3))){
var inst_24909 = (state_24911[(2)]);
var state_24911__$1 = state_24911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24911__$1,inst_24909);
} else {
if((state_val_24912 === (2))){
var state_24911__$1 = state_24911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24911__$1,(4),ch);
} else {
if((state_val_24912 === (9))){
var inst_24898 = (state_24911[(9)]);
var inst_24891 = inst_24898;
var state_24911__$1 = (function (){var statearr_24922 = state_24911;
(statearr_24922[(7)] = inst_24891);

return statearr_24922;
})();
var statearr_24923_24940 = state_24911__$1;
(statearr_24923_24940[(2)] = null);

(statearr_24923_24940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (5))){
var inst_24891 = (state_24911[(7)]);
var state_24911__$1 = state_24911;
var statearr_24924_24941 = state_24911__$1;
(statearr_24924_24941[(2)] = inst_24891);

(statearr_24924_24941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (10))){
var inst_24905 = (state_24911[(2)]);
var state_24911__$1 = state_24911;
var statearr_24925_24942 = state_24911__$1;
(statearr_24925_24942[(2)] = inst_24905);

(statearr_24925_24942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (8))){
var inst_24898 = (state_24911[(9)]);
var inst_24901 = cljs.core.deref.call(null,inst_24898);
var state_24911__$1 = state_24911;
var statearr_24926_24943 = state_24911__$1;
(statearr_24926_24943[(2)] = inst_24901);

(statearr_24926_24943[(1)] = (10));


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
});})(c__24153__auto__))
;
return ((function (switch__24041__auto__,c__24153__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24042__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24042__auto____0 = (function (){
var statearr_24930 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24930[(0)] = cljs$core$async$reduce_$_state_machine__24042__auto__);

(statearr_24930[(1)] = (1));

return statearr_24930;
});
var cljs$core$async$reduce_$_state_machine__24042__auto____1 = (function (state_24911){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_24911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e24931){if((e24931 instanceof Object)){
var ex__24045__auto__ = e24931;
var statearr_24932_24944 = state_24911;
(statearr_24932_24944[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24945 = state_24911;
state_24911 = G__24945;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24042__auto__ = function(state_24911){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24042__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24042__auto____1.call(this,state_24911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24042__auto____0;
cljs$core$async$reduce_$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24042__auto____1;
return cljs$core$async$reduce_$_state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto__))
})();
var state__24155__auto__ = (function (){var statearr_24933 = f__24154__auto__.call(null);
(statearr_24933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto__);

return statearr_24933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto__))
);

return c__24153__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args24946 = [];
var len__23044__auto___24998 = arguments.length;
var i__23045__auto___24999 = (0);
while(true){
if((i__23045__auto___24999 < len__23044__auto___24998)){
args24946.push((arguments[i__23045__auto___24999]));

var G__25000 = (i__23045__auto___24999 + (1));
i__23045__auto___24999 = G__25000;
continue;
} else {
}
break;
}

var G__24948 = args24946.length;
switch (G__24948) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24946.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto__){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto__){
return (function (state_24973){
var state_val_24974 = (state_24973[(1)]);
if((state_val_24974 === (7))){
var inst_24955 = (state_24973[(2)]);
var state_24973__$1 = state_24973;
var statearr_24975_25002 = state_24973__$1;
(statearr_24975_25002[(2)] = inst_24955);

(statearr_24975_25002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24974 === (1))){
var inst_24949 = cljs.core.seq.call(null,coll);
var inst_24950 = inst_24949;
var state_24973__$1 = (function (){var statearr_24976 = state_24973;
(statearr_24976[(7)] = inst_24950);

return statearr_24976;
})();
var statearr_24977_25003 = state_24973__$1;
(statearr_24977_25003[(2)] = null);

(statearr_24977_25003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24974 === (4))){
var inst_24950 = (state_24973[(7)]);
var inst_24953 = cljs.core.first.call(null,inst_24950);
var state_24973__$1 = state_24973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24973__$1,(7),ch,inst_24953);
} else {
if((state_val_24974 === (13))){
var inst_24967 = (state_24973[(2)]);
var state_24973__$1 = state_24973;
var statearr_24978_25004 = state_24973__$1;
(statearr_24978_25004[(2)] = inst_24967);

(statearr_24978_25004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24974 === (6))){
var inst_24958 = (state_24973[(2)]);
var state_24973__$1 = state_24973;
if(cljs.core.truth_(inst_24958)){
var statearr_24979_25005 = state_24973__$1;
(statearr_24979_25005[(1)] = (8));

} else {
var statearr_24980_25006 = state_24973__$1;
(statearr_24980_25006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24974 === (3))){
var inst_24971 = (state_24973[(2)]);
var state_24973__$1 = state_24973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24973__$1,inst_24971);
} else {
if((state_val_24974 === (12))){
var state_24973__$1 = state_24973;
var statearr_24981_25007 = state_24973__$1;
(statearr_24981_25007[(2)] = null);

(statearr_24981_25007[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24974 === (2))){
var inst_24950 = (state_24973[(7)]);
var state_24973__$1 = state_24973;
if(cljs.core.truth_(inst_24950)){
var statearr_24982_25008 = state_24973__$1;
(statearr_24982_25008[(1)] = (4));

} else {
var statearr_24983_25009 = state_24973__$1;
(statearr_24983_25009[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24974 === (11))){
var inst_24964 = cljs.core.async.close_BANG_.call(null,ch);
var state_24973__$1 = state_24973;
var statearr_24984_25010 = state_24973__$1;
(statearr_24984_25010[(2)] = inst_24964);

(statearr_24984_25010[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24974 === (9))){
var state_24973__$1 = state_24973;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24985_25011 = state_24973__$1;
(statearr_24985_25011[(1)] = (11));

} else {
var statearr_24986_25012 = state_24973__$1;
(statearr_24986_25012[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24974 === (5))){
var inst_24950 = (state_24973[(7)]);
var state_24973__$1 = state_24973;
var statearr_24987_25013 = state_24973__$1;
(statearr_24987_25013[(2)] = inst_24950);

(statearr_24987_25013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24974 === (10))){
var inst_24969 = (state_24973[(2)]);
var state_24973__$1 = state_24973;
var statearr_24988_25014 = state_24973__$1;
(statearr_24988_25014[(2)] = inst_24969);

(statearr_24988_25014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24974 === (8))){
var inst_24950 = (state_24973[(7)]);
var inst_24960 = cljs.core.next.call(null,inst_24950);
var inst_24950__$1 = inst_24960;
var state_24973__$1 = (function (){var statearr_24989 = state_24973;
(statearr_24989[(7)] = inst_24950__$1);

return statearr_24989;
})();
var statearr_24990_25015 = state_24973__$1;
(statearr_24990_25015[(2)] = null);

(statearr_24990_25015[(1)] = (2));


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
});})(c__24153__auto__))
;
return ((function (switch__24041__auto__,c__24153__auto__){
return (function() {
var cljs$core$async$state_machine__24042__auto__ = null;
var cljs$core$async$state_machine__24042__auto____0 = (function (){
var statearr_24994 = [null,null,null,null,null,null,null,null];
(statearr_24994[(0)] = cljs$core$async$state_machine__24042__auto__);

(statearr_24994[(1)] = (1));

return statearr_24994;
});
var cljs$core$async$state_machine__24042__auto____1 = (function (state_24973){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_24973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e24995){if((e24995 instanceof Object)){
var ex__24045__auto__ = e24995;
var statearr_24996_25016 = state_24973;
(statearr_24996_25016[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25017 = state_24973;
state_24973 = G__25017;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
cljs$core$async$state_machine__24042__auto__ = function(state_24973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24042__auto____1.call(this,state_24973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24042__auto____0;
cljs$core$async$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24042__auto____1;
return cljs$core$async$state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto__))
})();
var state__24155__auto__ = (function (){var statearr_24997 = f__24154__auto__.call(null);
(statearr_24997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto__);

return statearr_24997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto__))
);

return c__24153__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__22641__auto__ = (((_ == null))?null:_);
var m__22642__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22641__auto__)]);
if(!((m__22642__auto__ == null))){
return m__22642__auto__.call(null,_);
} else {
var m__22642__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22642__auto____$1 == null))){
return m__22642__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__22641__auto__ = (((m == null))?null:m);
var m__22642__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22641__auto__)]);
if(!((m__22642__auto__ == null))){
return m__22642__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22642__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22642__auto____$1 == null))){
return m__22642__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__22641__auto__ = (((m == null))?null:m);
var m__22642__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22641__auto__)]);
if(!((m__22642__auto__ == null))){
return m__22642__auto__.call(null,m,ch);
} else {
var m__22642__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22642__auto____$1 == null))){
return m__22642__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__22641__auto__ = (((m == null))?null:m);
var m__22642__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22641__auto__)]);
if(!((m__22642__auto__ == null))){
return m__22642__auto__.call(null,m);
} else {
var m__22642__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22642__auto____$1 == null))){
return m__22642__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25239 = (function (mult,ch,cs,meta25240){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25240 = meta25240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25241,meta25240__$1){
var self__ = this;
var _25241__$1 = this;
return (new cljs.core.async.t_cljs$core$async25239(self__.mult,self__.ch,self__.cs,meta25240__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25241){
var self__ = this;
var _25241__$1 = this;
return self__.meta25240;
});})(cs))
;

cljs.core.async.t_cljs$core$async25239.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25239.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25239.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25239.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25239.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25239.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25239.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25240","meta25240",-303298038,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25239";

cljs.core.async.t_cljs$core$async25239.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22584__auto__,writer__22585__auto__,opt__22586__auto__){
return cljs.core._write.call(null,writer__22585__auto__,"cljs.core.async/t_cljs$core$async25239");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25239 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25239(mult__$1,ch__$1,cs__$1,meta25240){
return (new cljs.core.async.t_cljs$core$async25239(mult__$1,ch__$1,cs__$1,meta25240));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25239(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24153__auto___25460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto___25460,cs,m,dchan,dctr,done){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto___25460,cs,m,dchan,dctr,done){
return (function (state_25372){
var state_val_25373 = (state_25372[(1)]);
if((state_val_25373 === (7))){
var inst_25368 = (state_25372[(2)]);
var state_25372__$1 = state_25372;
var statearr_25374_25461 = state_25372__$1;
(statearr_25374_25461[(2)] = inst_25368);

(statearr_25374_25461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (20))){
var inst_25273 = (state_25372[(7)]);
var inst_25283 = cljs.core.first.call(null,inst_25273);
var inst_25284 = cljs.core.nth.call(null,inst_25283,(0),null);
var inst_25285 = cljs.core.nth.call(null,inst_25283,(1),null);
var state_25372__$1 = (function (){var statearr_25375 = state_25372;
(statearr_25375[(8)] = inst_25284);

return statearr_25375;
})();
if(cljs.core.truth_(inst_25285)){
var statearr_25376_25462 = state_25372__$1;
(statearr_25376_25462[(1)] = (22));

} else {
var statearr_25377_25463 = state_25372__$1;
(statearr_25377_25463[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (27))){
var inst_25320 = (state_25372[(9)]);
var inst_25244 = (state_25372[(10)]);
var inst_25315 = (state_25372[(11)]);
var inst_25313 = (state_25372[(12)]);
var inst_25320__$1 = cljs.core._nth.call(null,inst_25313,inst_25315);
var inst_25321 = cljs.core.async.put_BANG_.call(null,inst_25320__$1,inst_25244,done);
var state_25372__$1 = (function (){var statearr_25378 = state_25372;
(statearr_25378[(9)] = inst_25320__$1);

return statearr_25378;
})();
if(cljs.core.truth_(inst_25321)){
var statearr_25379_25464 = state_25372__$1;
(statearr_25379_25464[(1)] = (30));

} else {
var statearr_25380_25465 = state_25372__$1;
(statearr_25380_25465[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (1))){
var state_25372__$1 = state_25372;
var statearr_25381_25466 = state_25372__$1;
(statearr_25381_25466[(2)] = null);

(statearr_25381_25466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (24))){
var inst_25273 = (state_25372[(7)]);
var inst_25290 = (state_25372[(2)]);
var inst_25291 = cljs.core.next.call(null,inst_25273);
var inst_25253 = inst_25291;
var inst_25254 = null;
var inst_25255 = (0);
var inst_25256 = (0);
var state_25372__$1 = (function (){var statearr_25382 = state_25372;
(statearr_25382[(13)] = inst_25256);

(statearr_25382[(14)] = inst_25255);

(statearr_25382[(15)] = inst_25290);

(statearr_25382[(16)] = inst_25254);

(statearr_25382[(17)] = inst_25253);

return statearr_25382;
})();
var statearr_25383_25467 = state_25372__$1;
(statearr_25383_25467[(2)] = null);

(statearr_25383_25467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (39))){
var state_25372__$1 = state_25372;
var statearr_25387_25468 = state_25372__$1;
(statearr_25387_25468[(2)] = null);

(statearr_25387_25468[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (4))){
var inst_25244 = (state_25372[(10)]);
var inst_25244__$1 = (state_25372[(2)]);
var inst_25245 = (inst_25244__$1 == null);
var state_25372__$1 = (function (){var statearr_25388 = state_25372;
(statearr_25388[(10)] = inst_25244__$1);

return statearr_25388;
})();
if(cljs.core.truth_(inst_25245)){
var statearr_25389_25469 = state_25372__$1;
(statearr_25389_25469[(1)] = (5));

} else {
var statearr_25390_25470 = state_25372__$1;
(statearr_25390_25470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (15))){
var inst_25256 = (state_25372[(13)]);
var inst_25255 = (state_25372[(14)]);
var inst_25254 = (state_25372[(16)]);
var inst_25253 = (state_25372[(17)]);
var inst_25269 = (state_25372[(2)]);
var inst_25270 = (inst_25256 + (1));
var tmp25384 = inst_25255;
var tmp25385 = inst_25254;
var tmp25386 = inst_25253;
var inst_25253__$1 = tmp25386;
var inst_25254__$1 = tmp25385;
var inst_25255__$1 = tmp25384;
var inst_25256__$1 = inst_25270;
var state_25372__$1 = (function (){var statearr_25391 = state_25372;
(statearr_25391[(13)] = inst_25256__$1);

(statearr_25391[(18)] = inst_25269);

(statearr_25391[(14)] = inst_25255__$1);

(statearr_25391[(16)] = inst_25254__$1);

(statearr_25391[(17)] = inst_25253__$1);

return statearr_25391;
})();
var statearr_25392_25471 = state_25372__$1;
(statearr_25392_25471[(2)] = null);

(statearr_25392_25471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (21))){
var inst_25294 = (state_25372[(2)]);
var state_25372__$1 = state_25372;
var statearr_25396_25472 = state_25372__$1;
(statearr_25396_25472[(2)] = inst_25294);

(statearr_25396_25472[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (31))){
var inst_25320 = (state_25372[(9)]);
var inst_25324 = done.call(null,null);
var inst_25325 = cljs.core.async.untap_STAR_.call(null,m,inst_25320);
var state_25372__$1 = (function (){var statearr_25397 = state_25372;
(statearr_25397[(19)] = inst_25324);

return statearr_25397;
})();
var statearr_25398_25473 = state_25372__$1;
(statearr_25398_25473[(2)] = inst_25325);

(statearr_25398_25473[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (32))){
var inst_25315 = (state_25372[(11)]);
var inst_25314 = (state_25372[(20)]);
var inst_25312 = (state_25372[(21)]);
var inst_25313 = (state_25372[(12)]);
var inst_25327 = (state_25372[(2)]);
var inst_25328 = (inst_25315 + (1));
var tmp25393 = inst_25314;
var tmp25394 = inst_25312;
var tmp25395 = inst_25313;
var inst_25312__$1 = tmp25394;
var inst_25313__$1 = tmp25395;
var inst_25314__$1 = tmp25393;
var inst_25315__$1 = inst_25328;
var state_25372__$1 = (function (){var statearr_25399 = state_25372;
(statearr_25399[(11)] = inst_25315__$1);

(statearr_25399[(20)] = inst_25314__$1);

(statearr_25399[(21)] = inst_25312__$1);

(statearr_25399[(22)] = inst_25327);

(statearr_25399[(12)] = inst_25313__$1);

return statearr_25399;
})();
var statearr_25400_25474 = state_25372__$1;
(statearr_25400_25474[(2)] = null);

(statearr_25400_25474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (40))){
var inst_25340 = (state_25372[(23)]);
var inst_25344 = done.call(null,null);
var inst_25345 = cljs.core.async.untap_STAR_.call(null,m,inst_25340);
var state_25372__$1 = (function (){var statearr_25401 = state_25372;
(statearr_25401[(24)] = inst_25344);

return statearr_25401;
})();
var statearr_25402_25475 = state_25372__$1;
(statearr_25402_25475[(2)] = inst_25345);

(statearr_25402_25475[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (33))){
var inst_25331 = (state_25372[(25)]);
var inst_25333 = cljs.core.chunked_seq_QMARK_.call(null,inst_25331);
var state_25372__$1 = state_25372;
if(inst_25333){
var statearr_25403_25476 = state_25372__$1;
(statearr_25403_25476[(1)] = (36));

} else {
var statearr_25404_25477 = state_25372__$1;
(statearr_25404_25477[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (13))){
var inst_25263 = (state_25372[(26)]);
var inst_25266 = cljs.core.async.close_BANG_.call(null,inst_25263);
var state_25372__$1 = state_25372;
var statearr_25405_25478 = state_25372__$1;
(statearr_25405_25478[(2)] = inst_25266);

(statearr_25405_25478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (22))){
var inst_25284 = (state_25372[(8)]);
var inst_25287 = cljs.core.async.close_BANG_.call(null,inst_25284);
var state_25372__$1 = state_25372;
var statearr_25406_25479 = state_25372__$1;
(statearr_25406_25479[(2)] = inst_25287);

(statearr_25406_25479[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (36))){
var inst_25331 = (state_25372[(25)]);
var inst_25335 = cljs.core.chunk_first.call(null,inst_25331);
var inst_25336 = cljs.core.chunk_rest.call(null,inst_25331);
var inst_25337 = cljs.core.count.call(null,inst_25335);
var inst_25312 = inst_25336;
var inst_25313 = inst_25335;
var inst_25314 = inst_25337;
var inst_25315 = (0);
var state_25372__$1 = (function (){var statearr_25407 = state_25372;
(statearr_25407[(11)] = inst_25315);

(statearr_25407[(20)] = inst_25314);

(statearr_25407[(21)] = inst_25312);

(statearr_25407[(12)] = inst_25313);

return statearr_25407;
})();
var statearr_25408_25480 = state_25372__$1;
(statearr_25408_25480[(2)] = null);

(statearr_25408_25480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (41))){
var inst_25331 = (state_25372[(25)]);
var inst_25347 = (state_25372[(2)]);
var inst_25348 = cljs.core.next.call(null,inst_25331);
var inst_25312 = inst_25348;
var inst_25313 = null;
var inst_25314 = (0);
var inst_25315 = (0);
var state_25372__$1 = (function (){var statearr_25409 = state_25372;
(statearr_25409[(11)] = inst_25315);

(statearr_25409[(20)] = inst_25314);

(statearr_25409[(27)] = inst_25347);

(statearr_25409[(21)] = inst_25312);

(statearr_25409[(12)] = inst_25313);

return statearr_25409;
})();
var statearr_25410_25481 = state_25372__$1;
(statearr_25410_25481[(2)] = null);

(statearr_25410_25481[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (43))){
var state_25372__$1 = state_25372;
var statearr_25411_25482 = state_25372__$1;
(statearr_25411_25482[(2)] = null);

(statearr_25411_25482[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (29))){
var inst_25356 = (state_25372[(2)]);
var state_25372__$1 = state_25372;
var statearr_25412_25483 = state_25372__$1;
(statearr_25412_25483[(2)] = inst_25356);

(statearr_25412_25483[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (44))){
var inst_25365 = (state_25372[(2)]);
var state_25372__$1 = (function (){var statearr_25413 = state_25372;
(statearr_25413[(28)] = inst_25365);

return statearr_25413;
})();
var statearr_25414_25484 = state_25372__$1;
(statearr_25414_25484[(2)] = null);

(statearr_25414_25484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (6))){
var inst_25304 = (state_25372[(29)]);
var inst_25303 = cljs.core.deref.call(null,cs);
var inst_25304__$1 = cljs.core.keys.call(null,inst_25303);
var inst_25305 = cljs.core.count.call(null,inst_25304__$1);
var inst_25306 = cljs.core.reset_BANG_.call(null,dctr,inst_25305);
var inst_25311 = cljs.core.seq.call(null,inst_25304__$1);
var inst_25312 = inst_25311;
var inst_25313 = null;
var inst_25314 = (0);
var inst_25315 = (0);
var state_25372__$1 = (function (){var statearr_25415 = state_25372;
(statearr_25415[(29)] = inst_25304__$1);

(statearr_25415[(30)] = inst_25306);

(statearr_25415[(11)] = inst_25315);

(statearr_25415[(20)] = inst_25314);

(statearr_25415[(21)] = inst_25312);

(statearr_25415[(12)] = inst_25313);

return statearr_25415;
})();
var statearr_25416_25485 = state_25372__$1;
(statearr_25416_25485[(2)] = null);

(statearr_25416_25485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (28))){
var inst_25331 = (state_25372[(25)]);
var inst_25312 = (state_25372[(21)]);
var inst_25331__$1 = cljs.core.seq.call(null,inst_25312);
var state_25372__$1 = (function (){var statearr_25417 = state_25372;
(statearr_25417[(25)] = inst_25331__$1);

return statearr_25417;
})();
if(inst_25331__$1){
var statearr_25418_25486 = state_25372__$1;
(statearr_25418_25486[(1)] = (33));

} else {
var statearr_25419_25487 = state_25372__$1;
(statearr_25419_25487[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (25))){
var inst_25315 = (state_25372[(11)]);
var inst_25314 = (state_25372[(20)]);
var inst_25317 = (inst_25315 < inst_25314);
var inst_25318 = inst_25317;
var state_25372__$1 = state_25372;
if(cljs.core.truth_(inst_25318)){
var statearr_25420_25488 = state_25372__$1;
(statearr_25420_25488[(1)] = (27));

} else {
var statearr_25421_25489 = state_25372__$1;
(statearr_25421_25489[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (34))){
var state_25372__$1 = state_25372;
var statearr_25422_25490 = state_25372__$1;
(statearr_25422_25490[(2)] = null);

(statearr_25422_25490[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (17))){
var state_25372__$1 = state_25372;
var statearr_25423_25491 = state_25372__$1;
(statearr_25423_25491[(2)] = null);

(statearr_25423_25491[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (3))){
var inst_25370 = (state_25372[(2)]);
var state_25372__$1 = state_25372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25372__$1,inst_25370);
} else {
if((state_val_25373 === (12))){
var inst_25299 = (state_25372[(2)]);
var state_25372__$1 = state_25372;
var statearr_25424_25492 = state_25372__$1;
(statearr_25424_25492[(2)] = inst_25299);

(statearr_25424_25492[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (2))){
var state_25372__$1 = state_25372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25372__$1,(4),ch);
} else {
if((state_val_25373 === (23))){
var state_25372__$1 = state_25372;
var statearr_25425_25493 = state_25372__$1;
(statearr_25425_25493[(2)] = null);

(statearr_25425_25493[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (35))){
var inst_25354 = (state_25372[(2)]);
var state_25372__$1 = state_25372;
var statearr_25426_25494 = state_25372__$1;
(statearr_25426_25494[(2)] = inst_25354);

(statearr_25426_25494[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (19))){
var inst_25273 = (state_25372[(7)]);
var inst_25277 = cljs.core.chunk_first.call(null,inst_25273);
var inst_25278 = cljs.core.chunk_rest.call(null,inst_25273);
var inst_25279 = cljs.core.count.call(null,inst_25277);
var inst_25253 = inst_25278;
var inst_25254 = inst_25277;
var inst_25255 = inst_25279;
var inst_25256 = (0);
var state_25372__$1 = (function (){var statearr_25427 = state_25372;
(statearr_25427[(13)] = inst_25256);

(statearr_25427[(14)] = inst_25255);

(statearr_25427[(16)] = inst_25254);

(statearr_25427[(17)] = inst_25253);

return statearr_25427;
})();
var statearr_25428_25495 = state_25372__$1;
(statearr_25428_25495[(2)] = null);

(statearr_25428_25495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (11))){
var inst_25273 = (state_25372[(7)]);
var inst_25253 = (state_25372[(17)]);
var inst_25273__$1 = cljs.core.seq.call(null,inst_25253);
var state_25372__$1 = (function (){var statearr_25429 = state_25372;
(statearr_25429[(7)] = inst_25273__$1);

return statearr_25429;
})();
if(inst_25273__$1){
var statearr_25430_25496 = state_25372__$1;
(statearr_25430_25496[(1)] = (16));

} else {
var statearr_25431_25497 = state_25372__$1;
(statearr_25431_25497[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (9))){
var inst_25301 = (state_25372[(2)]);
var state_25372__$1 = state_25372;
var statearr_25432_25498 = state_25372__$1;
(statearr_25432_25498[(2)] = inst_25301);

(statearr_25432_25498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (5))){
var inst_25251 = cljs.core.deref.call(null,cs);
var inst_25252 = cljs.core.seq.call(null,inst_25251);
var inst_25253 = inst_25252;
var inst_25254 = null;
var inst_25255 = (0);
var inst_25256 = (0);
var state_25372__$1 = (function (){var statearr_25433 = state_25372;
(statearr_25433[(13)] = inst_25256);

(statearr_25433[(14)] = inst_25255);

(statearr_25433[(16)] = inst_25254);

(statearr_25433[(17)] = inst_25253);

return statearr_25433;
})();
var statearr_25434_25499 = state_25372__$1;
(statearr_25434_25499[(2)] = null);

(statearr_25434_25499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (14))){
var state_25372__$1 = state_25372;
var statearr_25435_25500 = state_25372__$1;
(statearr_25435_25500[(2)] = null);

(statearr_25435_25500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (45))){
var inst_25362 = (state_25372[(2)]);
var state_25372__$1 = state_25372;
var statearr_25436_25501 = state_25372__$1;
(statearr_25436_25501[(2)] = inst_25362);

(statearr_25436_25501[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (26))){
var inst_25304 = (state_25372[(29)]);
var inst_25358 = (state_25372[(2)]);
var inst_25359 = cljs.core.seq.call(null,inst_25304);
var state_25372__$1 = (function (){var statearr_25437 = state_25372;
(statearr_25437[(31)] = inst_25358);

return statearr_25437;
})();
if(inst_25359){
var statearr_25438_25502 = state_25372__$1;
(statearr_25438_25502[(1)] = (42));

} else {
var statearr_25439_25503 = state_25372__$1;
(statearr_25439_25503[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (16))){
var inst_25273 = (state_25372[(7)]);
var inst_25275 = cljs.core.chunked_seq_QMARK_.call(null,inst_25273);
var state_25372__$1 = state_25372;
if(inst_25275){
var statearr_25440_25504 = state_25372__$1;
(statearr_25440_25504[(1)] = (19));

} else {
var statearr_25441_25505 = state_25372__$1;
(statearr_25441_25505[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (38))){
var inst_25351 = (state_25372[(2)]);
var state_25372__$1 = state_25372;
var statearr_25442_25506 = state_25372__$1;
(statearr_25442_25506[(2)] = inst_25351);

(statearr_25442_25506[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (30))){
var state_25372__$1 = state_25372;
var statearr_25443_25507 = state_25372__$1;
(statearr_25443_25507[(2)] = null);

(statearr_25443_25507[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (10))){
var inst_25256 = (state_25372[(13)]);
var inst_25254 = (state_25372[(16)]);
var inst_25262 = cljs.core._nth.call(null,inst_25254,inst_25256);
var inst_25263 = cljs.core.nth.call(null,inst_25262,(0),null);
var inst_25264 = cljs.core.nth.call(null,inst_25262,(1),null);
var state_25372__$1 = (function (){var statearr_25444 = state_25372;
(statearr_25444[(26)] = inst_25263);

return statearr_25444;
})();
if(cljs.core.truth_(inst_25264)){
var statearr_25445_25508 = state_25372__$1;
(statearr_25445_25508[(1)] = (13));

} else {
var statearr_25446_25509 = state_25372__$1;
(statearr_25446_25509[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (18))){
var inst_25297 = (state_25372[(2)]);
var state_25372__$1 = state_25372;
var statearr_25447_25510 = state_25372__$1;
(statearr_25447_25510[(2)] = inst_25297);

(statearr_25447_25510[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (42))){
var state_25372__$1 = state_25372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25372__$1,(45),dchan);
} else {
if((state_val_25373 === (37))){
var inst_25244 = (state_25372[(10)]);
var inst_25331 = (state_25372[(25)]);
var inst_25340 = (state_25372[(23)]);
var inst_25340__$1 = cljs.core.first.call(null,inst_25331);
var inst_25341 = cljs.core.async.put_BANG_.call(null,inst_25340__$1,inst_25244,done);
var state_25372__$1 = (function (){var statearr_25448 = state_25372;
(statearr_25448[(23)] = inst_25340__$1);

return statearr_25448;
})();
if(cljs.core.truth_(inst_25341)){
var statearr_25449_25511 = state_25372__$1;
(statearr_25449_25511[(1)] = (39));

} else {
var statearr_25450_25512 = state_25372__$1;
(statearr_25450_25512[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (8))){
var inst_25256 = (state_25372[(13)]);
var inst_25255 = (state_25372[(14)]);
var inst_25258 = (inst_25256 < inst_25255);
var inst_25259 = inst_25258;
var state_25372__$1 = state_25372;
if(cljs.core.truth_(inst_25259)){
var statearr_25451_25513 = state_25372__$1;
(statearr_25451_25513[(1)] = (10));

} else {
var statearr_25452_25514 = state_25372__$1;
(statearr_25452_25514[(1)] = (11));

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
});})(c__24153__auto___25460,cs,m,dchan,dctr,done))
;
return ((function (switch__24041__auto__,c__24153__auto___25460,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24042__auto__ = null;
var cljs$core$async$mult_$_state_machine__24042__auto____0 = (function (){
var statearr_25456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25456[(0)] = cljs$core$async$mult_$_state_machine__24042__auto__);

(statearr_25456[(1)] = (1));

return statearr_25456;
});
var cljs$core$async$mult_$_state_machine__24042__auto____1 = (function (state_25372){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_25372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e25457){if((e25457 instanceof Object)){
var ex__24045__auto__ = e25457;
var statearr_25458_25515 = state_25372;
(statearr_25458_25515[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25516 = state_25372;
state_25372 = G__25516;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24042__auto__ = function(state_25372){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24042__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24042__auto____1.call(this,state_25372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24042__auto____0;
cljs$core$async$mult_$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24042__auto____1;
return cljs$core$async$mult_$_state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto___25460,cs,m,dchan,dctr,done))
})();
var state__24155__auto__ = (function (){var statearr_25459 = f__24154__auto__.call(null);
(statearr_25459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto___25460);

return statearr_25459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto___25460,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args25517 = [];
var len__23044__auto___25520 = arguments.length;
var i__23045__auto___25521 = (0);
while(true){
if((i__23045__auto___25521 < len__23044__auto___25520)){
args25517.push((arguments[i__23045__auto___25521]));

var G__25522 = (i__23045__auto___25521 + (1));
i__23045__auto___25521 = G__25522;
continue;
} else {
}
break;
}

var G__25519 = args25517.length;
switch (G__25519) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25517.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__22641__auto__ = (((m == null))?null:m);
var m__22642__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22641__auto__)]);
if(!((m__22642__auto__ == null))){
return m__22642__auto__.call(null,m,ch);
} else {
var m__22642__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22642__auto____$1 == null))){
return m__22642__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__22641__auto__ = (((m == null))?null:m);
var m__22642__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22641__auto__)]);
if(!((m__22642__auto__ == null))){
return m__22642__auto__.call(null,m,ch);
} else {
var m__22642__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22642__auto____$1 == null))){
return m__22642__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__22641__auto__ = (((m == null))?null:m);
var m__22642__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22641__auto__)]);
if(!((m__22642__auto__ == null))){
return m__22642__auto__.call(null,m);
} else {
var m__22642__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22642__auto____$1 == null))){
return m__22642__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__22641__auto__ = (((m == null))?null:m);
var m__22642__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22641__auto__)]);
if(!((m__22642__auto__ == null))){
return m__22642__auto__.call(null,m,state_map);
} else {
var m__22642__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22642__auto____$1 == null))){
return m__22642__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__22641__auto__ = (((m == null))?null:m);
var m__22642__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22641__auto__)]);
if(!((m__22642__auto__ == null))){
return m__22642__auto__.call(null,m,mode);
} else {
var m__22642__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22642__auto____$1 == null))){
return m__22642__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__23051__auto__ = [];
var len__23044__auto___25534 = arguments.length;
var i__23045__auto___25535 = (0);
while(true){
if((i__23045__auto___25535 < len__23044__auto___25534)){
args__23051__auto__.push((arguments[i__23045__auto___25535]));

var G__25536 = (i__23045__auto___25535 + (1));
i__23045__auto___25535 = G__25536;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((3) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23052__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25528){
var map__25529 = p__25528;
var map__25529__$1 = ((((!((map__25529 == null)))?((((map__25529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25529):map__25529);
var opts = map__25529__$1;
var statearr_25531_25537 = state;
(statearr_25531_25537[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25529,map__25529__$1,opts){
return (function (val){
var statearr_25532_25538 = state;
(statearr_25532_25538[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25529,map__25529__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25533_25539 = state;
(statearr_25533_25539[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25524){
var G__25525 = cljs.core.first.call(null,seq25524);
var seq25524__$1 = cljs.core.next.call(null,seq25524);
var G__25526 = cljs.core.first.call(null,seq25524__$1);
var seq25524__$2 = cljs.core.next.call(null,seq25524__$1);
var G__25527 = cljs.core.first.call(null,seq25524__$2);
var seq25524__$3 = cljs.core.next.call(null,seq25524__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25525,G__25526,G__25527,seq25524__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25703 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25703 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25704){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25704 = meta25704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25705,meta25704__$1){
var self__ = this;
var _25705__$1 = this;
return (new cljs.core.async.t_cljs$core$async25703(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25704__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25705){
var self__ = this;
var _25705__$1 = this;
return self__.meta25704;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25703.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25703.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25703.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25703.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25703.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25703.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25703.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25703.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25703.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25704","meta25704",-1402234529,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25703";

cljs.core.async.t_cljs$core$async25703.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22584__auto__,writer__22585__auto__,opt__22586__auto__){
return cljs.core._write.call(null,writer__22585__auto__,"cljs.core.async/t_cljs$core$async25703");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25703 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25703(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25704){
return (new cljs.core.async.t_cljs$core$async25703(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25704));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25703(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24153__auto___25866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto___25866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto___25866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25803){
var state_val_25804 = (state_25803[(1)]);
if((state_val_25804 === (7))){
var inst_25721 = (state_25803[(2)]);
var state_25803__$1 = state_25803;
var statearr_25805_25867 = state_25803__$1;
(statearr_25805_25867[(2)] = inst_25721);

(statearr_25805_25867[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (20))){
var inst_25733 = (state_25803[(7)]);
var state_25803__$1 = state_25803;
var statearr_25806_25868 = state_25803__$1;
(statearr_25806_25868[(2)] = inst_25733);

(statearr_25806_25868[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (27))){
var state_25803__$1 = state_25803;
var statearr_25807_25869 = state_25803__$1;
(statearr_25807_25869[(2)] = null);

(statearr_25807_25869[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (1))){
var inst_25709 = (state_25803[(8)]);
var inst_25709__$1 = calc_state.call(null);
var inst_25711 = (inst_25709__$1 == null);
var inst_25712 = cljs.core.not.call(null,inst_25711);
var state_25803__$1 = (function (){var statearr_25808 = state_25803;
(statearr_25808[(8)] = inst_25709__$1);

return statearr_25808;
})();
if(inst_25712){
var statearr_25809_25870 = state_25803__$1;
(statearr_25809_25870[(1)] = (2));

} else {
var statearr_25810_25871 = state_25803__$1;
(statearr_25810_25871[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (24))){
var inst_25756 = (state_25803[(9)]);
var inst_25777 = (state_25803[(10)]);
var inst_25763 = (state_25803[(11)]);
var inst_25777__$1 = inst_25756.call(null,inst_25763);
var state_25803__$1 = (function (){var statearr_25811 = state_25803;
(statearr_25811[(10)] = inst_25777__$1);

return statearr_25811;
})();
if(cljs.core.truth_(inst_25777__$1)){
var statearr_25812_25872 = state_25803__$1;
(statearr_25812_25872[(1)] = (29));

} else {
var statearr_25813_25873 = state_25803__$1;
(statearr_25813_25873[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (4))){
var inst_25724 = (state_25803[(2)]);
var state_25803__$1 = state_25803;
if(cljs.core.truth_(inst_25724)){
var statearr_25814_25874 = state_25803__$1;
(statearr_25814_25874[(1)] = (8));

} else {
var statearr_25815_25875 = state_25803__$1;
(statearr_25815_25875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (15))){
var inst_25750 = (state_25803[(2)]);
var state_25803__$1 = state_25803;
if(cljs.core.truth_(inst_25750)){
var statearr_25816_25876 = state_25803__$1;
(statearr_25816_25876[(1)] = (19));

} else {
var statearr_25817_25877 = state_25803__$1;
(statearr_25817_25877[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (21))){
var inst_25755 = (state_25803[(12)]);
var inst_25755__$1 = (state_25803[(2)]);
var inst_25756 = cljs.core.get.call(null,inst_25755__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25757 = cljs.core.get.call(null,inst_25755__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25758 = cljs.core.get.call(null,inst_25755__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25803__$1 = (function (){var statearr_25818 = state_25803;
(statearr_25818[(9)] = inst_25756);

(statearr_25818[(12)] = inst_25755__$1);

(statearr_25818[(13)] = inst_25757);

return statearr_25818;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25803__$1,(22),inst_25758);
} else {
if((state_val_25804 === (31))){
var inst_25785 = (state_25803[(2)]);
var state_25803__$1 = state_25803;
if(cljs.core.truth_(inst_25785)){
var statearr_25819_25878 = state_25803__$1;
(statearr_25819_25878[(1)] = (32));

} else {
var statearr_25820_25879 = state_25803__$1;
(statearr_25820_25879[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (32))){
var inst_25762 = (state_25803[(14)]);
var state_25803__$1 = state_25803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25803__$1,(35),out,inst_25762);
} else {
if((state_val_25804 === (33))){
var inst_25755 = (state_25803[(12)]);
var inst_25733 = inst_25755;
var state_25803__$1 = (function (){var statearr_25821 = state_25803;
(statearr_25821[(7)] = inst_25733);

return statearr_25821;
})();
var statearr_25822_25880 = state_25803__$1;
(statearr_25822_25880[(2)] = null);

(statearr_25822_25880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (13))){
var inst_25733 = (state_25803[(7)]);
var inst_25740 = inst_25733.cljs$lang$protocol_mask$partition0$;
var inst_25741 = (inst_25740 & (64));
var inst_25742 = inst_25733.cljs$core$ISeq$;
var inst_25743 = (inst_25741) || (inst_25742);
var state_25803__$1 = state_25803;
if(cljs.core.truth_(inst_25743)){
var statearr_25823_25881 = state_25803__$1;
(statearr_25823_25881[(1)] = (16));

} else {
var statearr_25824_25882 = state_25803__$1;
(statearr_25824_25882[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (22))){
var inst_25762 = (state_25803[(14)]);
var inst_25763 = (state_25803[(11)]);
var inst_25761 = (state_25803[(2)]);
var inst_25762__$1 = cljs.core.nth.call(null,inst_25761,(0),null);
var inst_25763__$1 = cljs.core.nth.call(null,inst_25761,(1),null);
var inst_25764 = (inst_25762__$1 == null);
var inst_25765 = cljs.core._EQ_.call(null,inst_25763__$1,change);
var inst_25766 = (inst_25764) || (inst_25765);
var state_25803__$1 = (function (){var statearr_25825 = state_25803;
(statearr_25825[(14)] = inst_25762__$1);

(statearr_25825[(11)] = inst_25763__$1);

return statearr_25825;
})();
if(cljs.core.truth_(inst_25766)){
var statearr_25826_25883 = state_25803__$1;
(statearr_25826_25883[(1)] = (23));

} else {
var statearr_25827_25884 = state_25803__$1;
(statearr_25827_25884[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (36))){
var inst_25755 = (state_25803[(12)]);
var inst_25733 = inst_25755;
var state_25803__$1 = (function (){var statearr_25828 = state_25803;
(statearr_25828[(7)] = inst_25733);

return statearr_25828;
})();
var statearr_25829_25885 = state_25803__$1;
(statearr_25829_25885[(2)] = null);

(statearr_25829_25885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (29))){
var inst_25777 = (state_25803[(10)]);
var state_25803__$1 = state_25803;
var statearr_25830_25886 = state_25803__$1;
(statearr_25830_25886[(2)] = inst_25777);

(statearr_25830_25886[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (6))){
var state_25803__$1 = state_25803;
var statearr_25831_25887 = state_25803__$1;
(statearr_25831_25887[(2)] = false);

(statearr_25831_25887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (28))){
var inst_25773 = (state_25803[(2)]);
var inst_25774 = calc_state.call(null);
var inst_25733 = inst_25774;
var state_25803__$1 = (function (){var statearr_25832 = state_25803;
(statearr_25832[(15)] = inst_25773);

(statearr_25832[(7)] = inst_25733);

return statearr_25832;
})();
var statearr_25833_25888 = state_25803__$1;
(statearr_25833_25888[(2)] = null);

(statearr_25833_25888[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (25))){
var inst_25799 = (state_25803[(2)]);
var state_25803__$1 = state_25803;
var statearr_25834_25889 = state_25803__$1;
(statearr_25834_25889[(2)] = inst_25799);

(statearr_25834_25889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (34))){
var inst_25797 = (state_25803[(2)]);
var state_25803__$1 = state_25803;
var statearr_25835_25890 = state_25803__$1;
(statearr_25835_25890[(2)] = inst_25797);

(statearr_25835_25890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (17))){
var state_25803__$1 = state_25803;
var statearr_25836_25891 = state_25803__$1;
(statearr_25836_25891[(2)] = false);

(statearr_25836_25891[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (3))){
var state_25803__$1 = state_25803;
var statearr_25837_25892 = state_25803__$1;
(statearr_25837_25892[(2)] = false);

(statearr_25837_25892[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (12))){
var inst_25801 = (state_25803[(2)]);
var state_25803__$1 = state_25803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25803__$1,inst_25801);
} else {
if((state_val_25804 === (2))){
var inst_25709 = (state_25803[(8)]);
var inst_25714 = inst_25709.cljs$lang$protocol_mask$partition0$;
var inst_25715 = (inst_25714 & (64));
var inst_25716 = inst_25709.cljs$core$ISeq$;
var inst_25717 = (inst_25715) || (inst_25716);
var state_25803__$1 = state_25803;
if(cljs.core.truth_(inst_25717)){
var statearr_25838_25893 = state_25803__$1;
(statearr_25838_25893[(1)] = (5));

} else {
var statearr_25839_25894 = state_25803__$1;
(statearr_25839_25894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (23))){
var inst_25762 = (state_25803[(14)]);
var inst_25768 = (inst_25762 == null);
var state_25803__$1 = state_25803;
if(cljs.core.truth_(inst_25768)){
var statearr_25840_25895 = state_25803__$1;
(statearr_25840_25895[(1)] = (26));

} else {
var statearr_25841_25896 = state_25803__$1;
(statearr_25841_25896[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (35))){
var inst_25788 = (state_25803[(2)]);
var state_25803__$1 = state_25803;
if(cljs.core.truth_(inst_25788)){
var statearr_25842_25897 = state_25803__$1;
(statearr_25842_25897[(1)] = (36));

} else {
var statearr_25843_25898 = state_25803__$1;
(statearr_25843_25898[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (19))){
var inst_25733 = (state_25803[(7)]);
var inst_25752 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25733);
var state_25803__$1 = state_25803;
var statearr_25844_25899 = state_25803__$1;
(statearr_25844_25899[(2)] = inst_25752);

(statearr_25844_25899[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (11))){
var inst_25733 = (state_25803[(7)]);
var inst_25737 = (inst_25733 == null);
var inst_25738 = cljs.core.not.call(null,inst_25737);
var state_25803__$1 = state_25803;
if(inst_25738){
var statearr_25845_25900 = state_25803__$1;
(statearr_25845_25900[(1)] = (13));

} else {
var statearr_25846_25901 = state_25803__$1;
(statearr_25846_25901[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (9))){
var inst_25709 = (state_25803[(8)]);
var state_25803__$1 = state_25803;
var statearr_25847_25902 = state_25803__$1;
(statearr_25847_25902[(2)] = inst_25709);

(statearr_25847_25902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (5))){
var state_25803__$1 = state_25803;
var statearr_25848_25903 = state_25803__$1;
(statearr_25848_25903[(2)] = true);

(statearr_25848_25903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (14))){
var state_25803__$1 = state_25803;
var statearr_25849_25904 = state_25803__$1;
(statearr_25849_25904[(2)] = false);

(statearr_25849_25904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (26))){
var inst_25763 = (state_25803[(11)]);
var inst_25770 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25763);
var state_25803__$1 = state_25803;
var statearr_25850_25905 = state_25803__$1;
(statearr_25850_25905[(2)] = inst_25770);

(statearr_25850_25905[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (16))){
var state_25803__$1 = state_25803;
var statearr_25851_25906 = state_25803__$1;
(statearr_25851_25906[(2)] = true);

(statearr_25851_25906[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (38))){
var inst_25793 = (state_25803[(2)]);
var state_25803__$1 = state_25803;
var statearr_25852_25907 = state_25803__$1;
(statearr_25852_25907[(2)] = inst_25793);

(statearr_25852_25907[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (30))){
var inst_25756 = (state_25803[(9)]);
var inst_25757 = (state_25803[(13)]);
var inst_25763 = (state_25803[(11)]);
var inst_25780 = cljs.core.empty_QMARK_.call(null,inst_25756);
var inst_25781 = inst_25757.call(null,inst_25763);
var inst_25782 = cljs.core.not.call(null,inst_25781);
var inst_25783 = (inst_25780) && (inst_25782);
var state_25803__$1 = state_25803;
var statearr_25853_25908 = state_25803__$1;
(statearr_25853_25908[(2)] = inst_25783);

(statearr_25853_25908[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (10))){
var inst_25709 = (state_25803[(8)]);
var inst_25729 = (state_25803[(2)]);
var inst_25730 = cljs.core.get.call(null,inst_25729,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25731 = cljs.core.get.call(null,inst_25729,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25732 = cljs.core.get.call(null,inst_25729,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25733 = inst_25709;
var state_25803__$1 = (function (){var statearr_25854 = state_25803;
(statearr_25854[(16)] = inst_25731);

(statearr_25854[(17)] = inst_25732);

(statearr_25854[(18)] = inst_25730);

(statearr_25854[(7)] = inst_25733);

return statearr_25854;
})();
var statearr_25855_25909 = state_25803__$1;
(statearr_25855_25909[(2)] = null);

(statearr_25855_25909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (18))){
var inst_25747 = (state_25803[(2)]);
var state_25803__$1 = state_25803;
var statearr_25856_25910 = state_25803__$1;
(statearr_25856_25910[(2)] = inst_25747);

(statearr_25856_25910[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (37))){
var state_25803__$1 = state_25803;
var statearr_25857_25911 = state_25803__$1;
(statearr_25857_25911[(2)] = null);

(statearr_25857_25911[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (8))){
var inst_25709 = (state_25803[(8)]);
var inst_25726 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25709);
var state_25803__$1 = state_25803;
var statearr_25858_25912 = state_25803__$1;
(statearr_25858_25912[(2)] = inst_25726);

(statearr_25858_25912[(1)] = (10));


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
});})(c__24153__auto___25866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24041__auto__,c__24153__auto___25866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24042__auto__ = null;
var cljs$core$async$mix_$_state_machine__24042__auto____0 = (function (){
var statearr_25862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25862[(0)] = cljs$core$async$mix_$_state_machine__24042__auto__);

(statearr_25862[(1)] = (1));

return statearr_25862;
});
var cljs$core$async$mix_$_state_machine__24042__auto____1 = (function (state_25803){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_25803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e25863){if((e25863 instanceof Object)){
var ex__24045__auto__ = e25863;
var statearr_25864_25913 = state_25803;
(statearr_25864_25913[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25914 = state_25803;
state_25803 = G__25914;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24042__auto__ = function(state_25803){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24042__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24042__auto____1.call(this,state_25803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24042__auto____0;
cljs$core$async$mix_$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24042__auto____1;
return cljs$core$async$mix_$_state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto___25866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24155__auto__ = (function (){var statearr_25865 = f__24154__auto__.call(null);
(statearr_25865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto___25866);

return statearr_25865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto___25866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__22641__auto__ = (((p == null))?null:p);
var m__22642__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22641__auto__)]);
if(!((m__22642__auto__ == null))){
return m__22642__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22642__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22642__auto____$1 == null))){
return m__22642__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__22641__auto__ = (((p == null))?null:p);
var m__22642__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22641__auto__)]);
if(!((m__22642__auto__ == null))){
return m__22642__auto__.call(null,p,v,ch);
} else {
var m__22642__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22642__auto____$1 == null))){
return m__22642__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25915 = [];
var len__23044__auto___25918 = arguments.length;
var i__23045__auto___25919 = (0);
while(true){
if((i__23045__auto___25919 < len__23044__auto___25918)){
args25915.push((arguments[i__23045__auto___25919]));

var G__25920 = (i__23045__auto___25919 + (1));
i__23045__auto___25919 = G__25920;
continue;
} else {
}
break;
}

var G__25917 = args25915.length;
switch (G__25917) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25915.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22641__auto__ = (((p == null))?null:p);
var m__22642__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22641__auto__)]);
if(!((m__22642__auto__ == null))){
return m__22642__auto__.call(null,p);
} else {
var m__22642__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22642__auto____$1 == null))){
return m__22642__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__22641__auto__ = (((p == null))?null:p);
var m__22642__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22641__auto__)]);
if(!((m__22642__auto__ == null))){
return m__22642__auto__.call(null,p,v);
} else {
var m__22642__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22642__auto____$1 == null))){
return m__22642__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args25923 = [];
var len__23044__auto___26048 = arguments.length;
var i__23045__auto___26049 = (0);
while(true){
if((i__23045__auto___26049 < len__23044__auto___26048)){
args25923.push((arguments[i__23045__auto___26049]));

var G__26050 = (i__23045__auto___26049 + (1));
i__23045__auto___26049 = G__26050;
continue;
} else {
}
break;
}

var G__25925 = args25923.length;
switch (G__25925) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25923.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21986__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21986__auto__,mults){
return (function (p1__25922_SHARP_){
if(cljs.core.truth_(p1__25922_SHARP_.call(null,topic))){
return p1__25922_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25922_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21986__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25926 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25926 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25927){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25927 = meta25927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25928,meta25927__$1){
var self__ = this;
var _25928__$1 = this;
return (new cljs.core.async.t_cljs$core$async25926(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25927__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25928){
var self__ = this;
var _25928__$1 = this;
return self__.meta25927;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25926.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25926.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25926.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25926.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25926.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25926.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25926.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25926.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25927","meta25927",128528058,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25926.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25926";

cljs.core.async.t_cljs$core$async25926.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22584__auto__,writer__22585__auto__,opt__22586__auto__){
return cljs.core._write.call(null,writer__22585__auto__,"cljs.core.async/t_cljs$core$async25926");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25926 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25926(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25927){
return (new cljs.core.async.t_cljs$core$async25926(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25927));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25926(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24153__auto___26052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto___26052,mults,ensure_mult,p){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto___26052,mults,ensure_mult,p){
return (function (state_26000){
var state_val_26001 = (state_26000[(1)]);
if((state_val_26001 === (7))){
var inst_25996 = (state_26000[(2)]);
var state_26000__$1 = state_26000;
var statearr_26002_26053 = state_26000__$1;
(statearr_26002_26053[(2)] = inst_25996);

(statearr_26002_26053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (20))){
var state_26000__$1 = state_26000;
var statearr_26003_26054 = state_26000__$1;
(statearr_26003_26054[(2)] = null);

(statearr_26003_26054[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (1))){
var state_26000__$1 = state_26000;
var statearr_26004_26055 = state_26000__$1;
(statearr_26004_26055[(2)] = null);

(statearr_26004_26055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (24))){
var inst_25979 = (state_26000[(7)]);
var inst_25988 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25979);
var state_26000__$1 = state_26000;
var statearr_26005_26056 = state_26000__$1;
(statearr_26005_26056[(2)] = inst_25988);

(statearr_26005_26056[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (4))){
var inst_25931 = (state_26000[(8)]);
var inst_25931__$1 = (state_26000[(2)]);
var inst_25932 = (inst_25931__$1 == null);
var state_26000__$1 = (function (){var statearr_26006 = state_26000;
(statearr_26006[(8)] = inst_25931__$1);

return statearr_26006;
})();
if(cljs.core.truth_(inst_25932)){
var statearr_26007_26057 = state_26000__$1;
(statearr_26007_26057[(1)] = (5));

} else {
var statearr_26008_26058 = state_26000__$1;
(statearr_26008_26058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (15))){
var inst_25973 = (state_26000[(2)]);
var state_26000__$1 = state_26000;
var statearr_26009_26059 = state_26000__$1;
(statearr_26009_26059[(2)] = inst_25973);

(statearr_26009_26059[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (21))){
var inst_25993 = (state_26000[(2)]);
var state_26000__$1 = (function (){var statearr_26010 = state_26000;
(statearr_26010[(9)] = inst_25993);

return statearr_26010;
})();
var statearr_26011_26060 = state_26000__$1;
(statearr_26011_26060[(2)] = null);

(statearr_26011_26060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (13))){
var inst_25955 = (state_26000[(10)]);
var inst_25957 = cljs.core.chunked_seq_QMARK_.call(null,inst_25955);
var state_26000__$1 = state_26000;
if(inst_25957){
var statearr_26012_26061 = state_26000__$1;
(statearr_26012_26061[(1)] = (16));

} else {
var statearr_26013_26062 = state_26000__$1;
(statearr_26013_26062[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (22))){
var inst_25985 = (state_26000[(2)]);
var state_26000__$1 = state_26000;
if(cljs.core.truth_(inst_25985)){
var statearr_26014_26063 = state_26000__$1;
(statearr_26014_26063[(1)] = (23));

} else {
var statearr_26015_26064 = state_26000__$1;
(statearr_26015_26064[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (6))){
var inst_25979 = (state_26000[(7)]);
var inst_25931 = (state_26000[(8)]);
var inst_25981 = (state_26000[(11)]);
var inst_25979__$1 = topic_fn.call(null,inst_25931);
var inst_25980 = cljs.core.deref.call(null,mults);
var inst_25981__$1 = cljs.core.get.call(null,inst_25980,inst_25979__$1);
var state_26000__$1 = (function (){var statearr_26016 = state_26000;
(statearr_26016[(7)] = inst_25979__$1);

(statearr_26016[(11)] = inst_25981__$1);

return statearr_26016;
})();
if(cljs.core.truth_(inst_25981__$1)){
var statearr_26017_26065 = state_26000__$1;
(statearr_26017_26065[(1)] = (19));

} else {
var statearr_26018_26066 = state_26000__$1;
(statearr_26018_26066[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (25))){
var inst_25990 = (state_26000[(2)]);
var state_26000__$1 = state_26000;
var statearr_26019_26067 = state_26000__$1;
(statearr_26019_26067[(2)] = inst_25990);

(statearr_26019_26067[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (17))){
var inst_25955 = (state_26000[(10)]);
var inst_25964 = cljs.core.first.call(null,inst_25955);
var inst_25965 = cljs.core.async.muxch_STAR_.call(null,inst_25964);
var inst_25966 = cljs.core.async.close_BANG_.call(null,inst_25965);
var inst_25967 = cljs.core.next.call(null,inst_25955);
var inst_25941 = inst_25967;
var inst_25942 = null;
var inst_25943 = (0);
var inst_25944 = (0);
var state_26000__$1 = (function (){var statearr_26020 = state_26000;
(statearr_26020[(12)] = inst_25941);

(statearr_26020[(13)] = inst_25943);

(statearr_26020[(14)] = inst_25942);

(statearr_26020[(15)] = inst_25966);

(statearr_26020[(16)] = inst_25944);

return statearr_26020;
})();
var statearr_26021_26068 = state_26000__$1;
(statearr_26021_26068[(2)] = null);

(statearr_26021_26068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (3))){
var inst_25998 = (state_26000[(2)]);
var state_26000__$1 = state_26000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26000__$1,inst_25998);
} else {
if((state_val_26001 === (12))){
var inst_25975 = (state_26000[(2)]);
var state_26000__$1 = state_26000;
var statearr_26022_26069 = state_26000__$1;
(statearr_26022_26069[(2)] = inst_25975);

(statearr_26022_26069[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (2))){
var state_26000__$1 = state_26000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26000__$1,(4),ch);
} else {
if((state_val_26001 === (23))){
var state_26000__$1 = state_26000;
var statearr_26023_26070 = state_26000__$1;
(statearr_26023_26070[(2)] = null);

(statearr_26023_26070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (19))){
var inst_25931 = (state_26000[(8)]);
var inst_25981 = (state_26000[(11)]);
var inst_25983 = cljs.core.async.muxch_STAR_.call(null,inst_25981);
var state_26000__$1 = state_26000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26000__$1,(22),inst_25983,inst_25931);
} else {
if((state_val_26001 === (11))){
var inst_25941 = (state_26000[(12)]);
var inst_25955 = (state_26000[(10)]);
var inst_25955__$1 = cljs.core.seq.call(null,inst_25941);
var state_26000__$1 = (function (){var statearr_26024 = state_26000;
(statearr_26024[(10)] = inst_25955__$1);

return statearr_26024;
})();
if(inst_25955__$1){
var statearr_26025_26071 = state_26000__$1;
(statearr_26025_26071[(1)] = (13));

} else {
var statearr_26026_26072 = state_26000__$1;
(statearr_26026_26072[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (9))){
var inst_25977 = (state_26000[(2)]);
var state_26000__$1 = state_26000;
var statearr_26027_26073 = state_26000__$1;
(statearr_26027_26073[(2)] = inst_25977);

(statearr_26027_26073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (5))){
var inst_25938 = cljs.core.deref.call(null,mults);
var inst_25939 = cljs.core.vals.call(null,inst_25938);
var inst_25940 = cljs.core.seq.call(null,inst_25939);
var inst_25941 = inst_25940;
var inst_25942 = null;
var inst_25943 = (0);
var inst_25944 = (0);
var state_26000__$1 = (function (){var statearr_26028 = state_26000;
(statearr_26028[(12)] = inst_25941);

(statearr_26028[(13)] = inst_25943);

(statearr_26028[(14)] = inst_25942);

(statearr_26028[(16)] = inst_25944);

return statearr_26028;
})();
var statearr_26029_26074 = state_26000__$1;
(statearr_26029_26074[(2)] = null);

(statearr_26029_26074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (14))){
var state_26000__$1 = state_26000;
var statearr_26033_26075 = state_26000__$1;
(statearr_26033_26075[(2)] = null);

(statearr_26033_26075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (16))){
var inst_25955 = (state_26000[(10)]);
var inst_25959 = cljs.core.chunk_first.call(null,inst_25955);
var inst_25960 = cljs.core.chunk_rest.call(null,inst_25955);
var inst_25961 = cljs.core.count.call(null,inst_25959);
var inst_25941 = inst_25960;
var inst_25942 = inst_25959;
var inst_25943 = inst_25961;
var inst_25944 = (0);
var state_26000__$1 = (function (){var statearr_26034 = state_26000;
(statearr_26034[(12)] = inst_25941);

(statearr_26034[(13)] = inst_25943);

(statearr_26034[(14)] = inst_25942);

(statearr_26034[(16)] = inst_25944);

return statearr_26034;
})();
var statearr_26035_26076 = state_26000__$1;
(statearr_26035_26076[(2)] = null);

(statearr_26035_26076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (10))){
var inst_25941 = (state_26000[(12)]);
var inst_25943 = (state_26000[(13)]);
var inst_25942 = (state_26000[(14)]);
var inst_25944 = (state_26000[(16)]);
var inst_25949 = cljs.core._nth.call(null,inst_25942,inst_25944);
var inst_25950 = cljs.core.async.muxch_STAR_.call(null,inst_25949);
var inst_25951 = cljs.core.async.close_BANG_.call(null,inst_25950);
var inst_25952 = (inst_25944 + (1));
var tmp26030 = inst_25941;
var tmp26031 = inst_25943;
var tmp26032 = inst_25942;
var inst_25941__$1 = tmp26030;
var inst_25942__$1 = tmp26032;
var inst_25943__$1 = tmp26031;
var inst_25944__$1 = inst_25952;
var state_26000__$1 = (function (){var statearr_26036 = state_26000;
(statearr_26036[(12)] = inst_25941__$1);

(statearr_26036[(13)] = inst_25943__$1);

(statearr_26036[(14)] = inst_25942__$1);

(statearr_26036[(16)] = inst_25944__$1);

(statearr_26036[(17)] = inst_25951);

return statearr_26036;
})();
var statearr_26037_26077 = state_26000__$1;
(statearr_26037_26077[(2)] = null);

(statearr_26037_26077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (18))){
var inst_25970 = (state_26000[(2)]);
var state_26000__$1 = state_26000;
var statearr_26038_26078 = state_26000__$1;
(statearr_26038_26078[(2)] = inst_25970);

(statearr_26038_26078[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (8))){
var inst_25943 = (state_26000[(13)]);
var inst_25944 = (state_26000[(16)]);
var inst_25946 = (inst_25944 < inst_25943);
var inst_25947 = inst_25946;
var state_26000__$1 = state_26000;
if(cljs.core.truth_(inst_25947)){
var statearr_26039_26079 = state_26000__$1;
(statearr_26039_26079[(1)] = (10));

} else {
var statearr_26040_26080 = state_26000__$1;
(statearr_26040_26080[(1)] = (11));

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
});})(c__24153__auto___26052,mults,ensure_mult,p))
;
return ((function (switch__24041__auto__,c__24153__auto___26052,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24042__auto__ = null;
var cljs$core$async$state_machine__24042__auto____0 = (function (){
var statearr_26044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26044[(0)] = cljs$core$async$state_machine__24042__auto__);

(statearr_26044[(1)] = (1));

return statearr_26044;
});
var cljs$core$async$state_machine__24042__auto____1 = (function (state_26000){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_26000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e26045){if((e26045 instanceof Object)){
var ex__24045__auto__ = e26045;
var statearr_26046_26081 = state_26000;
(statearr_26046_26081[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26082 = state_26000;
state_26000 = G__26082;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
cljs$core$async$state_machine__24042__auto__ = function(state_26000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24042__auto____1.call(this,state_26000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24042__auto____0;
cljs$core$async$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24042__auto____1;
return cljs$core$async$state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto___26052,mults,ensure_mult,p))
})();
var state__24155__auto__ = (function (){var statearr_26047 = f__24154__auto__.call(null);
(statearr_26047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto___26052);

return statearr_26047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto___26052,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args26083 = [];
var len__23044__auto___26086 = arguments.length;
var i__23045__auto___26087 = (0);
while(true){
if((i__23045__auto___26087 < len__23044__auto___26086)){
args26083.push((arguments[i__23045__auto___26087]));

var G__26088 = (i__23045__auto___26087 + (1));
i__23045__auto___26087 = G__26088;
continue;
} else {
}
break;
}

var G__26085 = args26083.length;
switch (G__26085) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26083.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args26090 = [];
var len__23044__auto___26093 = arguments.length;
var i__23045__auto___26094 = (0);
while(true){
if((i__23045__auto___26094 < len__23044__auto___26093)){
args26090.push((arguments[i__23045__auto___26094]));

var G__26095 = (i__23045__auto___26094 + (1));
i__23045__auto___26094 = G__26095;
continue;
} else {
}
break;
}

var G__26092 = args26090.length;
switch (G__26092) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26090.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args26097 = [];
var len__23044__auto___26168 = arguments.length;
var i__23045__auto___26169 = (0);
while(true){
if((i__23045__auto___26169 < len__23044__auto___26168)){
args26097.push((arguments[i__23045__auto___26169]));

var G__26170 = (i__23045__auto___26169 + (1));
i__23045__auto___26169 = G__26170;
continue;
} else {
}
break;
}

var G__26099 = args26097.length;
switch (G__26099) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26097.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24153__auto___26172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto___26172,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto___26172,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26138){
var state_val_26139 = (state_26138[(1)]);
if((state_val_26139 === (7))){
var state_26138__$1 = state_26138;
var statearr_26140_26173 = state_26138__$1;
(statearr_26140_26173[(2)] = null);

(statearr_26140_26173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26139 === (1))){
var state_26138__$1 = state_26138;
var statearr_26141_26174 = state_26138__$1;
(statearr_26141_26174[(2)] = null);

(statearr_26141_26174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26139 === (4))){
var inst_26102 = (state_26138[(7)]);
var inst_26104 = (inst_26102 < cnt);
var state_26138__$1 = state_26138;
if(cljs.core.truth_(inst_26104)){
var statearr_26142_26175 = state_26138__$1;
(statearr_26142_26175[(1)] = (6));

} else {
var statearr_26143_26176 = state_26138__$1;
(statearr_26143_26176[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26139 === (15))){
var inst_26134 = (state_26138[(2)]);
var state_26138__$1 = state_26138;
var statearr_26144_26177 = state_26138__$1;
(statearr_26144_26177[(2)] = inst_26134);

(statearr_26144_26177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26139 === (13))){
var inst_26127 = cljs.core.async.close_BANG_.call(null,out);
var state_26138__$1 = state_26138;
var statearr_26145_26178 = state_26138__$1;
(statearr_26145_26178[(2)] = inst_26127);

(statearr_26145_26178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26139 === (6))){
var state_26138__$1 = state_26138;
var statearr_26146_26179 = state_26138__$1;
(statearr_26146_26179[(2)] = null);

(statearr_26146_26179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26139 === (3))){
var inst_26136 = (state_26138[(2)]);
var state_26138__$1 = state_26138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26138__$1,inst_26136);
} else {
if((state_val_26139 === (12))){
var inst_26124 = (state_26138[(8)]);
var inst_26124__$1 = (state_26138[(2)]);
var inst_26125 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26124__$1);
var state_26138__$1 = (function (){var statearr_26147 = state_26138;
(statearr_26147[(8)] = inst_26124__$1);

return statearr_26147;
})();
if(cljs.core.truth_(inst_26125)){
var statearr_26148_26180 = state_26138__$1;
(statearr_26148_26180[(1)] = (13));

} else {
var statearr_26149_26181 = state_26138__$1;
(statearr_26149_26181[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26139 === (2))){
var inst_26101 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26102 = (0);
var state_26138__$1 = (function (){var statearr_26150 = state_26138;
(statearr_26150[(9)] = inst_26101);

(statearr_26150[(7)] = inst_26102);

return statearr_26150;
})();
var statearr_26151_26182 = state_26138__$1;
(statearr_26151_26182[(2)] = null);

(statearr_26151_26182[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26139 === (11))){
var inst_26102 = (state_26138[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26138,(10),Object,null,(9));
var inst_26111 = chs__$1.call(null,inst_26102);
var inst_26112 = done.call(null,inst_26102);
var inst_26113 = cljs.core.async.take_BANG_.call(null,inst_26111,inst_26112);
var state_26138__$1 = state_26138;
var statearr_26152_26183 = state_26138__$1;
(statearr_26152_26183[(2)] = inst_26113);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26138__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26139 === (9))){
var inst_26102 = (state_26138[(7)]);
var inst_26115 = (state_26138[(2)]);
var inst_26116 = (inst_26102 + (1));
var inst_26102__$1 = inst_26116;
var state_26138__$1 = (function (){var statearr_26153 = state_26138;
(statearr_26153[(10)] = inst_26115);

(statearr_26153[(7)] = inst_26102__$1);

return statearr_26153;
})();
var statearr_26154_26184 = state_26138__$1;
(statearr_26154_26184[(2)] = null);

(statearr_26154_26184[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26139 === (5))){
var inst_26122 = (state_26138[(2)]);
var state_26138__$1 = (function (){var statearr_26155 = state_26138;
(statearr_26155[(11)] = inst_26122);

return statearr_26155;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26138__$1,(12),dchan);
} else {
if((state_val_26139 === (14))){
var inst_26124 = (state_26138[(8)]);
var inst_26129 = cljs.core.apply.call(null,f,inst_26124);
var state_26138__$1 = state_26138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26138__$1,(16),out,inst_26129);
} else {
if((state_val_26139 === (16))){
var inst_26131 = (state_26138[(2)]);
var state_26138__$1 = (function (){var statearr_26156 = state_26138;
(statearr_26156[(12)] = inst_26131);

return statearr_26156;
})();
var statearr_26157_26185 = state_26138__$1;
(statearr_26157_26185[(2)] = null);

(statearr_26157_26185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26139 === (10))){
var inst_26106 = (state_26138[(2)]);
var inst_26107 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26138__$1 = (function (){var statearr_26158 = state_26138;
(statearr_26158[(13)] = inst_26106);

return statearr_26158;
})();
var statearr_26159_26186 = state_26138__$1;
(statearr_26159_26186[(2)] = inst_26107);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26138__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26139 === (8))){
var inst_26120 = (state_26138[(2)]);
var state_26138__$1 = state_26138;
var statearr_26160_26187 = state_26138__$1;
(statearr_26160_26187[(2)] = inst_26120);

(statearr_26160_26187[(1)] = (5));


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
});})(c__24153__auto___26172,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24041__auto__,c__24153__auto___26172,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24042__auto__ = null;
var cljs$core$async$state_machine__24042__auto____0 = (function (){
var statearr_26164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26164[(0)] = cljs$core$async$state_machine__24042__auto__);

(statearr_26164[(1)] = (1));

return statearr_26164;
});
var cljs$core$async$state_machine__24042__auto____1 = (function (state_26138){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_26138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e26165){if((e26165 instanceof Object)){
var ex__24045__auto__ = e26165;
var statearr_26166_26188 = state_26138;
(statearr_26166_26188[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26189 = state_26138;
state_26138 = G__26189;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
cljs$core$async$state_machine__24042__auto__ = function(state_26138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24042__auto____1.call(this,state_26138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24042__auto____0;
cljs$core$async$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24042__auto____1;
return cljs$core$async$state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto___26172,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24155__auto__ = (function (){var statearr_26167 = f__24154__auto__.call(null);
(statearr_26167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto___26172);

return statearr_26167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto___26172,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args26191 = [];
var len__23044__auto___26247 = arguments.length;
var i__23045__auto___26248 = (0);
while(true){
if((i__23045__auto___26248 < len__23044__auto___26247)){
args26191.push((arguments[i__23045__auto___26248]));

var G__26249 = (i__23045__auto___26248 + (1));
i__23045__auto___26248 = G__26249;
continue;
} else {
}
break;
}

var G__26193 = args26191.length;
switch (G__26193) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26191.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24153__auto___26251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto___26251,out){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto___26251,out){
return (function (state_26223){
var state_val_26224 = (state_26223[(1)]);
if((state_val_26224 === (7))){
var inst_26202 = (state_26223[(7)]);
var inst_26203 = (state_26223[(8)]);
var inst_26202__$1 = (state_26223[(2)]);
var inst_26203__$1 = cljs.core.nth.call(null,inst_26202__$1,(0),null);
var inst_26204 = cljs.core.nth.call(null,inst_26202__$1,(1),null);
var inst_26205 = (inst_26203__$1 == null);
var state_26223__$1 = (function (){var statearr_26225 = state_26223;
(statearr_26225[(7)] = inst_26202__$1);

(statearr_26225[(9)] = inst_26204);

(statearr_26225[(8)] = inst_26203__$1);

return statearr_26225;
})();
if(cljs.core.truth_(inst_26205)){
var statearr_26226_26252 = state_26223__$1;
(statearr_26226_26252[(1)] = (8));

} else {
var statearr_26227_26253 = state_26223__$1;
(statearr_26227_26253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26224 === (1))){
var inst_26194 = cljs.core.vec.call(null,chs);
var inst_26195 = inst_26194;
var state_26223__$1 = (function (){var statearr_26228 = state_26223;
(statearr_26228[(10)] = inst_26195);

return statearr_26228;
})();
var statearr_26229_26254 = state_26223__$1;
(statearr_26229_26254[(2)] = null);

(statearr_26229_26254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26224 === (4))){
var inst_26195 = (state_26223[(10)]);
var state_26223__$1 = state_26223;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26223__$1,(7),inst_26195);
} else {
if((state_val_26224 === (6))){
var inst_26219 = (state_26223[(2)]);
var state_26223__$1 = state_26223;
var statearr_26230_26255 = state_26223__$1;
(statearr_26230_26255[(2)] = inst_26219);

(statearr_26230_26255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26224 === (3))){
var inst_26221 = (state_26223[(2)]);
var state_26223__$1 = state_26223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26223__$1,inst_26221);
} else {
if((state_val_26224 === (2))){
var inst_26195 = (state_26223[(10)]);
var inst_26197 = cljs.core.count.call(null,inst_26195);
var inst_26198 = (inst_26197 > (0));
var state_26223__$1 = state_26223;
if(cljs.core.truth_(inst_26198)){
var statearr_26232_26256 = state_26223__$1;
(statearr_26232_26256[(1)] = (4));

} else {
var statearr_26233_26257 = state_26223__$1;
(statearr_26233_26257[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26224 === (11))){
var inst_26195 = (state_26223[(10)]);
var inst_26212 = (state_26223[(2)]);
var tmp26231 = inst_26195;
var inst_26195__$1 = tmp26231;
var state_26223__$1 = (function (){var statearr_26234 = state_26223;
(statearr_26234[(10)] = inst_26195__$1);

(statearr_26234[(11)] = inst_26212);

return statearr_26234;
})();
var statearr_26235_26258 = state_26223__$1;
(statearr_26235_26258[(2)] = null);

(statearr_26235_26258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26224 === (9))){
var inst_26203 = (state_26223[(8)]);
var state_26223__$1 = state_26223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26223__$1,(11),out,inst_26203);
} else {
if((state_val_26224 === (5))){
var inst_26217 = cljs.core.async.close_BANG_.call(null,out);
var state_26223__$1 = state_26223;
var statearr_26236_26259 = state_26223__$1;
(statearr_26236_26259[(2)] = inst_26217);

(statearr_26236_26259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26224 === (10))){
var inst_26215 = (state_26223[(2)]);
var state_26223__$1 = state_26223;
var statearr_26237_26260 = state_26223__$1;
(statearr_26237_26260[(2)] = inst_26215);

(statearr_26237_26260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26224 === (8))){
var inst_26202 = (state_26223[(7)]);
var inst_26204 = (state_26223[(9)]);
var inst_26195 = (state_26223[(10)]);
var inst_26203 = (state_26223[(8)]);
var inst_26207 = (function (){var cs = inst_26195;
var vec__26200 = inst_26202;
var v = inst_26203;
var c = inst_26204;
return ((function (cs,vec__26200,v,c,inst_26202,inst_26204,inst_26195,inst_26203,state_val_26224,c__24153__auto___26251,out){
return (function (p1__26190_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26190_SHARP_);
});
;})(cs,vec__26200,v,c,inst_26202,inst_26204,inst_26195,inst_26203,state_val_26224,c__24153__auto___26251,out))
})();
var inst_26208 = cljs.core.filterv.call(null,inst_26207,inst_26195);
var inst_26195__$1 = inst_26208;
var state_26223__$1 = (function (){var statearr_26238 = state_26223;
(statearr_26238[(10)] = inst_26195__$1);

return statearr_26238;
})();
var statearr_26239_26261 = state_26223__$1;
(statearr_26239_26261[(2)] = null);

(statearr_26239_26261[(1)] = (2));


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
});})(c__24153__auto___26251,out))
;
return ((function (switch__24041__auto__,c__24153__auto___26251,out){
return (function() {
var cljs$core$async$state_machine__24042__auto__ = null;
var cljs$core$async$state_machine__24042__auto____0 = (function (){
var statearr_26243 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26243[(0)] = cljs$core$async$state_machine__24042__auto__);

(statearr_26243[(1)] = (1));

return statearr_26243;
});
var cljs$core$async$state_machine__24042__auto____1 = (function (state_26223){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_26223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e26244){if((e26244 instanceof Object)){
var ex__24045__auto__ = e26244;
var statearr_26245_26262 = state_26223;
(statearr_26245_26262[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26263 = state_26223;
state_26223 = G__26263;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
cljs$core$async$state_machine__24042__auto__ = function(state_26223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24042__auto____1.call(this,state_26223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24042__auto____0;
cljs$core$async$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24042__auto____1;
return cljs$core$async$state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto___26251,out))
})();
var state__24155__auto__ = (function (){var statearr_26246 = f__24154__auto__.call(null);
(statearr_26246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto___26251);

return statearr_26246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto___26251,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args26264 = [];
var len__23044__auto___26313 = arguments.length;
var i__23045__auto___26314 = (0);
while(true){
if((i__23045__auto___26314 < len__23044__auto___26313)){
args26264.push((arguments[i__23045__auto___26314]));

var G__26315 = (i__23045__auto___26314 + (1));
i__23045__auto___26314 = G__26315;
continue;
} else {
}
break;
}

var G__26266 = args26264.length;
switch (G__26266) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26264.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24153__auto___26317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto___26317,out){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto___26317,out){
return (function (state_26290){
var state_val_26291 = (state_26290[(1)]);
if((state_val_26291 === (7))){
var inst_26272 = (state_26290[(7)]);
var inst_26272__$1 = (state_26290[(2)]);
var inst_26273 = (inst_26272__$1 == null);
var inst_26274 = cljs.core.not.call(null,inst_26273);
var state_26290__$1 = (function (){var statearr_26292 = state_26290;
(statearr_26292[(7)] = inst_26272__$1);

return statearr_26292;
})();
if(inst_26274){
var statearr_26293_26318 = state_26290__$1;
(statearr_26293_26318[(1)] = (8));

} else {
var statearr_26294_26319 = state_26290__$1;
(statearr_26294_26319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26291 === (1))){
var inst_26267 = (0);
var state_26290__$1 = (function (){var statearr_26295 = state_26290;
(statearr_26295[(8)] = inst_26267);

return statearr_26295;
})();
var statearr_26296_26320 = state_26290__$1;
(statearr_26296_26320[(2)] = null);

(statearr_26296_26320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26291 === (4))){
var state_26290__$1 = state_26290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26290__$1,(7),ch);
} else {
if((state_val_26291 === (6))){
var inst_26285 = (state_26290[(2)]);
var state_26290__$1 = state_26290;
var statearr_26297_26321 = state_26290__$1;
(statearr_26297_26321[(2)] = inst_26285);

(statearr_26297_26321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26291 === (3))){
var inst_26287 = (state_26290[(2)]);
var inst_26288 = cljs.core.async.close_BANG_.call(null,out);
var state_26290__$1 = (function (){var statearr_26298 = state_26290;
(statearr_26298[(9)] = inst_26287);

return statearr_26298;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26290__$1,inst_26288);
} else {
if((state_val_26291 === (2))){
var inst_26267 = (state_26290[(8)]);
var inst_26269 = (inst_26267 < n);
var state_26290__$1 = state_26290;
if(cljs.core.truth_(inst_26269)){
var statearr_26299_26322 = state_26290__$1;
(statearr_26299_26322[(1)] = (4));

} else {
var statearr_26300_26323 = state_26290__$1;
(statearr_26300_26323[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26291 === (11))){
var inst_26267 = (state_26290[(8)]);
var inst_26277 = (state_26290[(2)]);
var inst_26278 = (inst_26267 + (1));
var inst_26267__$1 = inst_26278;
var state_26290__$1 = (function (){var statearr_26301 = state_26290;
(statearr_26301[(8)] = inst_26267__$1);

(statearr_26301[(10)] = inst_26277);

return statearr_26301;
})();
var statearr_26302_26324 = state_26290__$1;
(statearr_26302_26324[(2)] = null);

(statearr_26302_26324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26291 === (9))){
var state_26290__$1 = state_26290;
var statearr_26303_26325 = state_26290__$1;
(statearr_26303_26325[(2)] = null);

(statearr_26303_26325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26291 === (5))){
var state_26290__$1 = state_26290;
var statearr_26304_26326 = state_26290__$1;
(statearr_26304_26326[(2)] = null);

(statearr_26304_26326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26291 === (10))){
var inst_26282 = (state_26290[(2)]);
var state_26290__$1 = state_26290;
var statearr_26305_26327 = state_26290__$1;
(statearr_26305_26327[(2)] = inst_26282);

(statearr_26305_26327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26291 === (8))){
var inst_26272 = (state_26290[(7)]);
var state_26290__$1 = state_26290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26290__$1,(11),out,inst_26272);
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
});})(c__24153__auto___26317,out))
;
return ((function (switch__24041__auto__,c__24153__auto___26317,out){
return (function() {
var cljs$core$async$state_machine__24042__auto__ = null;
var cljs$core$async$state_machine__24042__auto____0 = (function (){
var statearr_26309 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26309[(0)] = cljs$core$async$state_machine__24042__auto__);

(statearr_26309[(1)] = (1));

return statearr_26309;
});
var cljs$core$async$state_machine__24042__auto____1 = (function (state_26290){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_26290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e26310){if((e26310 instanceof Object)){
var ex__24045__auto__ = e26310;
var statearr_26311_26328 = state_26290;
(statearr_26311_26328[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26329 = state_26290;
state_26290 = G__26329;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
cljs$core$async$state_machine__24042__auto__ = function(state_26290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24042__auto____1.call(this,state_26290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24042__auto____0;
cljs$core$async$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24042__auto____1;
return cljs$core$async$state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto___26317,out))
})();
var state__24155__auto__ = (function (){var statearr_26312 = f__24154__auto__.call(null);
(statearr_26312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto___26317);

return statearr_26312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto___26317,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26337 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26337 = (function (map_LT_,f,ch,meta26338){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26338 = meta26338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26339,meta26338__$1){
var self__ = this;
var _26339__$1 = this;
return (new cljs.core.async.t_cljs$core$async26337(self__.map_LT_,self__.f,self__.ch,meta26338__$1));
});

cljs.core.async.t_cljs$core$async26337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26339){
var self__ = this;
var _26339__$1 = this;
return self__.meta26338;
});

cljs.core.async.t_cljs$core$async26337.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26337.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26337.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26337.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26337.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26340 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26340 = (function (map_LT_,f,ch,meta26338,_,fn1,meta26341){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26338 = meta26338;
this._ = _;
this.fn1 = fn1;
this.meta26341 = meta26341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26342,meta26341__$1){
var self__ = this;
var _26342__$1 = this;
return (new cljs.core.async.t_cljs$core$async26340(self__.map_LT_,self__.f,self__.ch,self__.meta26338,self__._,self__.fn1,meta26341__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26342){
var self__ = this;
var _26342__$1 = this;
return self__.meta26341;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26330_SHARP_){
return f1.call(null,(((p1__26330_SHARP_ == null))?null:self__.f.call(null,p1__26330_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26340.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26338","meta26338",410530683,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26337","cljs.core.async/t_cljs$core$async26337",-503600425,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26341","meta26341",-482518061,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26340.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26340";

cljs.core.async.t_cljs$core$async26340.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22584__auto__,writer__22585__auto__,opt__22586__auto__){
return cljs.core._write.call(null,writer__22585__auto__,"cljs.core.async/t_cljs$core$async26340");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26340 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26340(map_LT___$1,f__$1,ch__$1,meta26338__$1,___$2,fn1__$1,meta26341){
return (new cljs.core.async.t_cljs$core$async26340(map_LT___$1,f__$1,ch__$1,meta26338__$1,___$2,fn1__$1,meta26341));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26340(self__.map_LT_,self__.f,self__.ch,self__.meta26338,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21974__auto__ = ret;
if(cljs.core.truth_(and__21974__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21974__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26337.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26337.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26337.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26338","meta26338",410530683,null)], null);
});

cljs.core.async.t_cljs$core$async26337.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26337";

cljs.core.async.t_cljs$core$async26337.cljs$lang$ctorPrWriter = (function (this__22584__auto__,writer__22585__auto__,opt__22586__auto__){
return cljs.core._write.call(null,writer__22585__auto__,"cljs.core.async/t_cljs$core$async26337");
});

cljs.core.async.__GT_t_cljs$core$async26337 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26337(map_LT___$1,f__$1,ch__$1,meta26338){
return (new cljs.core.async.t_cljs$core$async26337(map_LT___$1,f__$1,ch__$1,meta26338));
});

}

return (new cljs.core.async.t_cljs$core$async26337(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26346 = (function (map_GT_,f,ch,meta26347){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26347 = meta26347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26348,meta26347__$1){
var self__ = this;
var _26348__$1 = this;
return (new cljs.core.async.t_cljs$core$async26346(self__.map_GT_,self__.f,self__.ch,meta26347__$1));
});

cljs.core.async.t_cljs$core$async26346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26348){
var self__ = this;
var _26348__$1 = this;
return self__.meta26347;
});

cljs.core.async.t_cljs$core$async26346.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26346.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26346.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26346.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26346.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26346.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26347","meta26347",1623082852,null)], null);
});

cljs.core.async.t_cljs$core$async26346.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26346";

cljs.core.async.t_cljs$core$async26346.cljs$lang$ctorPrWriter = (function (this__22584__auto__,writer__22585__auto__,opt__22586__auto__){
return cljs.core._write.call(null,writer__22585__auto__,"cljs.core.async/t_cljs$core$async26346");
});

cljs.core.async.__GT_t_cljs$core$async26346 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26346(map_GT___$1,f__$1,ch__$1,meta26347){
return (new cljs.core.async.t_cljs$core$async26346(map_GT___$1,f__$1,ch__$1,meta26347));
});

}

return (new cljs.core.async.t_cljs$core$async26346(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26352 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26352 = (function (filter_GT_,p,ch,meta26353){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26353 = meta26353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26354,meta26353__$1){
var self__ = this;
var _26354__$1 = this;
return (new cljs.core.async.t_cljs$core$async26352(self__.filter_GT_,self__.p,self__.ch,meta26353__$1));
});

cljs.core.async.t_cljs$core$async26352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26354){
var self__ = this;
var _26354__$1 = this;
return self__.meta26353;
});

cljs.core.async.t_cljs$core$async26352.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26352.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26352.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26352.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26352.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26352.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26352.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26353","meta26353",-1541611345,null)], null);
});

cljs.core.async.t_cljs$core$async26352.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26352";

cljs.core.async.t_cljs$core$async26352.cljs$lang$ctorPrWriter = (function (this__22584__auto__,writer__22585__auto__,opt__22586__auto__){
return cljs.core._write.call(null,writer__22585__auto__,"cljs.core.async/t_cljs$core$async26352");
});

cljs.core.async.__GT_t_cljs$core$async26352 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26352(filter_GT___$1,p__$1,ch__$1,meta26353){
return (new cljs.core.async.t_cljs$core$async26352(filter_GT___$1,p__$1,ch__$1,meta26353));
});

}

return (new cljs.core.async.t_cljs$core$async26352(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args26355 = [];
var len__23044__auto___26399 = arguments.length;
var i__23045__auto___26400 = (0);
while(true){
if((i__23045__auto___26400 < len__23044__auto___26399)){
args26355.push((arguments[i__23045__auto___26400]));

var G__26401 = (i__23045__auto___26400 + (1));
i__23045__auto___26400 = G__26401;
continue;
} else {
}
break;
}

var G__26357 = args26355.length;
switch (G__26357) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26355.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24153__auto___26403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto___26403,out){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto___26403,out){
return (function (state_26378){
var state_val_26379 = (state_26378[(1)]);
if((state_val_26379 === (7))){
var inst_26374 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
var statearr_26380_26404 = state_26378__$1;
(statearr_26380_26404[(2)] = inst_26374);

(statearr_26380_26404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (1))){
var state_26378__$1 = state_26378;
var statearr_26381_26405 = state_26378__$1;
(statearr_26381_26405[(2)] = null);

(statearr_26381_26405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (4))){
var inst_26360 = (state_26378[(7)]);
var inst_26360__$1 = (state_26378[(2)]);
var inst_26361 = (inst_26360__$1 == null);
var state_26378__$1 = (function (){var statearr_26382 = state_26378;
(statearr_26382[(7)] = inst_26360__$1);

return statearr_26382;
})();
if(cljs.core.truth_(inst_26361)){
var statearr_26383_26406 = state_26378__$1;
(statearr_26383_26406[(1)] = (5));

} else {
var statearr_26384_26407 = state_26378__$1;
(statearr_26384_26407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (6))){
var inst_26360 = (state_26378[(7)]);
var inst_26365 = p.call(null,inst_26360);
var state_26378__$1 = state_26378;
if(cljs.core.truth_(inst_26365)){
var statearr_26385_26408 = state_26378__$1;
(statearr_26385_26408[(1)] = (8));

} else {
var statearr_26386_26409 = state_26378__$1;
(statearr_26386_26409[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (3))){
var inst_26376 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26378__$1,inst_26376);
} else {
if((state_val_26379 === (2))){
var state_26378__$1 = state_26378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26378__$1,(4),ch);
} else {
if((state_val_26379 === (11))){
var inst_26368 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
var statearr_26387_26410 = state_26378__$1;
(statearr_26387_26410[(2)] = inst_26368);

(statearr_26387_26410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (9))){
var state_26378__$1 = state_26378;
var statearr_26388_26411 = state_26378__$1;
(statearr_26388_26411[(2)] = null);

(statearr_26388_26411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (5))){
var inst_26363 = cljs.core.async.close_BANG_.call(null,out);
var state_26378__$1 = state_26378;
var statearr_26389_26412 = state_26378__$1;
(statearr_26389_26412[(2)] = inst_26363);

(statearr_26389_26412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (10))){
var inst_26371 = (state_26378[(2)]);
var state_26378__$1 = (function (){var statearr_26390 = state_26378;
(statearr_26390[(8)] = inst_26371);

return statearr_26390;
})();
var statearr_26391_26413 = state_26378__$1;
(statearr_26391_26413[(2)] = null);

(statearr_26391_26413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (8))){
var inst_26360 = (state_26378[(7)]);
var state_26378__$1 = state_26378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26378__$1,(11),out,inst_26360);
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
});})(c__24153__auto___26403,out))
;
return ((function (switch__24041__auto__,c__24153__auto___26403,out){
return (function() {
var cljs$core$async$state_machine__24042__auto__ = null;
var cljs$core$async$state_machine__24042__auto____0 = (function (){
var statearr_26395 = [null,null,null,null,null,null,null,null,null];
(statearr_26395[(0)] = cljs$core$async$state_machine__24042__auto__);

(statearr_26395[(1)] = (1));

return statearr_26395;
});
var cljs$core$async$state_machine__24042__auto____1 = (function (state_26378){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_26378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e26396){if((e26396 instanceof Object)){
var ex__24045__auto__ = e26396;
var statearr_26397_26414 = state_26378;
(statearr_26397_26414[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26415 = state_26378;
state_26378 = G__26415;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
cljs$core$async$state_machine__24042__auto__ = function(state_26378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24042__auto____1.call(this,state_26378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24042__auto____0;
cljs$core$async$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24042__auto____1;
return cljs$core$async$state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto___26403,out))
})();
var state__24155__auto__ = (function (){var statearr_26398 = f__24154__auto__.call(null);
(statearr_26398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto___26403);

return statearr_26398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto___26403,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26416 = [];
var len__23044__auto___26419 = arguments.length;
var i__23045__auto___26420 = (0);
while(true){
if((i__23045__auto___26420 < len__23044__auto___26419)){
args26416.push((arguments[i__23045__auto___26420]));

var G__26421 = (i__23045__auto___26420 + (1));
i__23045__auto___26420 = G__26421;
continue;
} else {
}
break;
}

var G__26418 = args26416.length;
switch (G__26418) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26416.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto__){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto__){
return (function (state_26588){
var state_val_26589 = (state_26588[(1)]);
if((state_val_26589 === (7))){
var inst_26584 = (state_26588[(2)]);
var state_26588__$1 = state_26588;
var statearr_26590_26631 = state_26588__$1;
(statearr_26590_26631[(2)] = inst_26584);

(statearr_26590_26631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26589 === (20))){
var inst_26554 = (state_26588[(7)]);
var inst_26565 = (state_26588[(2)]);
var inst_26566 = cljs.core.next.call(null,inst_26554);
var inst_26540 = inst_26566;
var inst_26541 = null;
var inst_26542 = (0);
var inst_26543 = (0);
var state_26588__$1 = (function (){var statearr_26591 = state_26588;
(statearr_26591[(8)] = inst_26542);

(statearr_26591[(9)] = inst_26540);

(statearr_26591[(10)] = inst_26543);

(statearr_26591[(11)] = inst_26565);

(statearr_26591[(12)] = inst_26541);

return statearr_26591;
})();
var statearr_26592_26632 = state_26588__$1;
(statearr_26592_26632[(2)] = null);

(statearr_26592_26632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26589 === (1))){
var state_26588__$1 = state_26588;
var statearr_26593_26633 = state_26588__$1;
(statearr_26593_26633[(2)] = null);

(statearr_26593_26633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26589 === (4))){
var inst_26529 = (state_26588[(13)]);
var inst_26529__$1 = (state_26588[(2)]);
var inst_26530 = (inst_26529__$1 == null);
var state_26588__$1 = (function (){var statearr_26594 = state_26588;
(statearr_26594[(13)] = inst_26529__$1);

return statearr_26594;
})();
if(cljs.core.truth_(inst_26530)){
var statearr_26595_26634 = state_26588__$1;
(statearr_26595_26634[(1)] = (5));

} else {
var statearr_26596_26635 = state_26588__$1;
(statearr_26596_26635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26589 === (15))){
var state_26588__$1 = state_26588;
var statearr_26600_26636 = state_26588__$1;
(statearr_26600_26636[(2)] = null);

(statearr_26600_26636[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26589 === (21))){
var state_26588__$1 = state_26588;
var statearr_26601_26637 = state_26588__$1;
(statearr_26601_26637[(2)] = null);

(statearr_26601_26637[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26589 === (13))){
var inst_26542 = (state_26588[(8)]);
var inst_26540 = (state_26588[(9)]);
var inst_26543 = (state_26588[(10)]);
var inst_26541 = (state_26588[(12)]);
var inst_26550 = (state_26588[(2)]);
var inst_26551 = (inst_26543 + (1));
var tmp26597 = inst_26542;
var tmp26598 = inst_26540;
var tmp26599 = inst_26541;
var inst_26540__$1 = tmp26598;
var inst_26541__$1 = tmp26599;
var inst_26542__$1 = tmp26597;
var inst_26543__$1 = inst_26551;
var state_26588__$1 = (function (){var statearr_26602 = state_26588;
(statearr_26602[(8)] = inst_26542__$1);

(statearr_26602[(9)] = inst_26540__$1);

(statearr_26602[(10)] = inst_26543__$1);

(statearr_26602[(12)] = inst_26541__$1);

(statearr_26602[(14)] = inst_26550);

return statearr_26602;
})();
var statearr_26603_26638 = state_26588__$1;
(statearr_26603_26638[(2)] = null);

(statearr_26603_26638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26589 === (22))){
var state_26588__$1 = state_26588;
var statearr_26604_26639 = state_26588__$1;
(statearr_26604_26639[(2)] = null);

(statearr_26604_26639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26589 === (6))){
var inst_26529 = (state_26588[(13)]);
var inst_26538 = f.call(null,inst_26529);
var inst_26539 = cljs.core.seq.call(null,inst_26538);
var inst_26540 = inst_26539;
var inst_26541 = null;
var inst_26542 = (0);
var inst_26543 = (0);
var state_26588__$1 = (function (){var statearr_26605 = state_26588;
(statearr_26605[(8)] = inst_26542);

(statearr_26605[(9)] = inst_26540);

(statearr_26605[(10)] = inst_26543);

(statearr_26605[(12)] = inst_26541);

return statearr_26605;
})();
var statearr_26606_26640 = state_26588__$1;
(statearr_26606_26640[(2)] = null);

(statearr_26606_26640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26589 === (17))){
var inst_26554 = (state_26588[(7)]);
var inst_26558 = cljs.core.chunk_first.call(null,inst_26554);
var inst_26559 = cljs.core.chunk_rest.call(null,inst_26554);
var inst_26560 = cljs.core.count.call(null,inst_26558);
var inst_26540 = inst_26559;
var inst_26541 = inst_26558;
var inst_26542 = inst_26560;
var inst_26543 = (0);
var state_26588__$1 = (function (){var statearr_26607 = state_26588;
(statearr_26607[(8)] = inst_26542);

(statearr_26607[(9)] = inst_26540);

(statearr_26607[(10)] = inst_26543);

(statearr_26607[(12)] = inst_26541);

return statearr_26607;
})();
var statearr_26608_26641 = state_26588__$1;
(statearr_26608_26641[(2)] = null);

(statearr_26608_26641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26589 === (3))){
var inst_26586 = (state_26588[(2)]);
var state_26588__$1 = state_26588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26588__$1,inst_26586);
} else {
if((state_val_26589 === (12))){
var inst_26574 = (state_26588[(2)]);
var state_26588__$1 = state_26588;
var statearr_26609_26642 = state_26588__$1;
(statearr_26609_26642[(2)] = inst_26574);

(statearr_26609_26642[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26589 === (2))){
var state_26588__$1 = state_26588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26588__$1,(4),in$);
} else {
if((state_val_26589 === (23))){
var inst_26582 = (state_26588[(2)]);
var state_26588__$1 = state_26588;
var statearr_26610_26643 = state_26588__$1;
(statearr_26610_26643[(2)] = inst_26582);

(statearr_26610_26643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26589 === (19))){
var inst_26569 = (state_26588[(2)]);
var state_26588__$1 = state_26588;
var statearr_26611_26644 = state_26588__$1;
(statearr_26611_26644[(2)] = inst_26569);

(statearr_26611_26644[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26589 === (11))){
var inst_26540 = (state_26588[(9)]);
var inst_26554 = (state_26588[(7)]);
var inst_26554__$1 = cljs.core.seq.call(null,inst_26540);
var state_26588__$1 = (function (){var statearr_26612 = state_26588;
(statearr_26612[(7)] = inst_26554__$1);

return statearr_26612;
})();
if(inst_26554__$1){
var statearr_26613_26645 = state_26588__$1;
(statearr_26613_26645[(1)] = (14));

} else {
var statearr_26614_26646 = state_26588__$1;
(statearr_26614_26646[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26589 === (9))){
var inst_26576 = (state_26588[(2)]);
var inst_26577 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26588__$1 = (function (){var statearr_26615 = state_26588;
(statearr_26615[(15)] = inst_26576);

return statearr_26615;
})();
if(cljs.core.truth_(inst_26577)){
var statearr_26616_26647 = state_26588__$1;
(statearr_26616_26647[(1)] = (21));

} else {
var statearr_26617_26648 = state_26588__$1;
(statearr_26617_26648[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26589 === (5))){
var inst_26532 = cljs.core.async.close_BANG_.call(null,out);
var state_26588__$1 = state_26588;
var statearr_26618_26649 = state_26588__$1;
(statearr_26618_26649[(2)] = inst_26532);

(statearr_26618_26649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26589 === (14))){
var inst_26554 = (state_26588[(7)]);
var inst_26556 = cljs.core.chunked_seq_QMARK_.call(null,inst_26554);
var state_26588__$1 = state_26588;
if(inst_26556){
var statearr_26619_26650 = state_26588__$1;
(statearr_26619_26650[(1)] = (17));

} else {
var statearr_26620_26651 = state_26588__$1;
(statearr_26620_26651[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26589 === (16))){
var inst_26572 = (state_26588[(2)]);
var state_26588__$1 = state_26588;
var statearr_26621_26652 = state_26588__$1;
(statearr_26621_26652[(2)] = inst_26572);

(statearr_26621_26652[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26589 === (10))){
var inst_26543 = (state_26588[(10)]);
var inst_26541 = (state_26588[(12)]);
var inst_26548 = cljs.core._nth.call(null,inst_26541,inst_26543);
var state_26588__$1 = state_26588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26588__$1,(13),out,inst_26548);
} else {
if((state_val_26589 === (18))){
var inst_26554 = (state_26588[(7)]);
var inst_26563 = cljs.core.first.call(null,inst_26554);
var state_26588__$1 = state_26588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26588__$1,(20),out,inst_26563);
} else {
if((state_val_26589 === (8))){
var inst_26542 = (state_26588[(8)]);
var inst_26543 = (state_26588[(10)]);
var inst_26545 = (inst_26543 < inst_26542);
var inst_26546 = inst_26545;
var state_26588__$1 = state_26588;
if(cljs.core.truth_(inst_26546)){
var statearr_26622_26653 = state_26588__$1;
(statearr_26622_26653[(1)] = (10));

} else {
var statearr_26623_26654 = state_26588__$1;
(statearr_26623_26654[(1)] = (11));

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
});})(c__24153__auto__))
;
return ((function (switch__24041__auto__,c__24153__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24042__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24042__auto____0 = (function (){
var statearr_26627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26627[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24042__auto__);

(statearr_26627[(1)] = (1));

return statearr_26627;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24042__auto____1 = (function (state_26588){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_26588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e26628){if((e26628 instanceof Object)){
var ex__24045__auto__ = e26628;
var statearr_26629_26655 = state_26588;
(statearr_26629_26655[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26656 = state_26588;
state_26588 = G__26656;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24042__auto__ = function(state_26588){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24042__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24042__auto____1.call(this,state_26588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24042__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24042__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto__))
})();
var state__24155__auto__ = (function (){var statearr_26630 = f__24154__auto__.call(null);
(statearr_26630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto__);

return statearr_26630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto__))
);

return c__24153__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26657 = [];
var len__23044__auto___26660 = arguments.length;
var i__23045__auto___26661 = (0);
while(true){
if((i__23045__auto___26661 < len__23044__auto___26660)){
args26657.push((arguments[i__23045__auto___26661]));

var G__26662 = (i__23045__auto___26661 + (1));
i__23045__auto___26661 = G__26662;
continue;
} else {
}
break;
}

var G__26659 = args26657.length;
switch (G__26659) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26657.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26664 = [];
var len__23044__auto___26667 = arguments.length;
var i__23045__auto___26668 = (0);
while(true){
if((i__23045__auto___26668 < len__23044__auto___26667)){
args26664.push((arguments[i__23045__auto___26668]));

var G__26669 = (i__23045__auto___26668 + (1));
i__23045__auto___26668 = G__26669;
continue;
} else {
}
break;
}

var G__26666 = args26664.length;
switch (G__26666) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26664.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26671 = [];
var len__23044__auto___26722 = arguments.length;
var i__23045__auto___26723 = (0);
while(true){
if((i__23045__auto___26723 < len__23044__auto___26722)){
args26671.push((arguments[i__23045__auto___26723]));

var G__26724 = (i__23045__auto___26723 + (1));
i__23045__auto___26723 = G__26724;
continue;
} else {
}
break;
}

var G__26673 = args26671.length;
switch (G__26673) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26671.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24153__auto___26726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto___26726,out){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto___26726,out){
return (function (state_26697){
var state_val_26698 = (state_26697[(1)]);
if((state_val_26698 === (7))){
var inst_26692 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
var statearr_26699_26727 = state_26697__$1;
(statearr_26699_26727[(2)] = inst_26692);

(statearr_26699_26727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (1))){
var inst_26674 = null;
var state_26697__$1 = (function (){var statearr_26700 = state_26697;
(statearr_26700[(7)] = inst_26674);

return statearr_26700;
})();
var statearr_26701_26728 = state_26697__$1;
(statearr_26701_26728[(2)] = null);

(statearr_26701_26728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (4))){
var inst_26677 = (state_26697[(8)]);
var inst_26677__$1 = (state_26697[(2)]);
var inst_26678 = (inst_26677__$1 == null);
var inst_26679 = cljs.core.not.call(null,inst_26678);
var state_26697__$1 = (function (){var statearr_26702 = state_26697;
(statearr_26702[(8)] = inst_26677__$1);

return statearr_26702;
})();
if(inst_26679){
var statearr_26703_26729 = state_26697__$1;
(statearr_26703_26729[(1)] = (5));

} else {
var statearr_26704_26730 = state_26697__$1;
(statearr_26704_26730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (6))){
var state_26697__$1 = state_26697;
var statearr_26705_26731 = state_26697__$1;
(statearr_26705_26731[(2)] = null);

(statearr_26705_26731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (3))){
var inst_26694 = (state_26697[(2)]);
var inst_26695 = cljs.core.async.close_BANG_.call(null,out);
var state_26697__$1 = (function (){var statearr_26706 = state_26697;
(statearr_26706[(9)] = inst_26694);

return statearr_26706;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26697__$1,inst_26695);
} else {
if((state_val_26698 === (2))){
var state_26697__$1 = state_26697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26697__$1,(4),ch);
} else {
if((state_val_26698 === (11))){
var inst_26677 = (state_26697[(8)]);
var inst_26686 = (state_26697[(2)]);
var inst_26674 = inst_26677;
var state_26697__$1 = (function (){var statearr_26707 = state_26697;
(statearr_26707[(10)] = inst_26686);

(statearr_26707[(7)] = inst_26674);

return statearr_26707;
})();
var statearr_26708_26732 = state_26697__$1;
(statearr_26708_26732[(2)] = null);

(statearr_26708_26732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (9))){
var inst_26677 = (state_26697[(8)]);
var state_26697__$1 = state_26697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26697__$1,(11),out,inst_26677);
} else {
if((state_val_26698 === (5))){
var inst_26677 = (state_26697[(8)]);
var inst_26674 = (state_26697[(7)]);
var inst_26681 = cljs.core._EQ_.call(null,inst_26677,inst_26674);
var state_26697__$1 = state_26697;
if(inst_26681){
var statearr_26710_26733 = state_26697__$1;
(statearr_26710_26733[(1)] = (8));

} else {
var statearr_26711_26734 = state_26697__$1;
(statearr_26711_26734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (10))){
var inst_26689 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
var statearr_26712_26735 = state_26697__$1;
(statearr_26712_26735[(2)] = inst_26689);

(statearr_26712_26735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (8))){
var inst_26674 = (state_26697[(7)]);
var tmp26709 = inst_26674;
var inst_26674__$1 = tmp26709;
var state_26697__$1 = (function (){var statearr_26713 = state_26697;
(statearr_26713[(7)] = inst_26674__$1);

return statearr_26713;
})();
var statearr_26714_26736 = state_26697__$1;
(statearr_26714_26736[(2)] = null);

(statearr_26714_26736[(1)] = (2));


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
});})(c__24153__auto___26726,out))
;
return ((function (switch__24041__auto__,c__24153__auto___26726,out){
return (function() {
var cljs$core$async$state_machine__24042__auto__ = null;
var cljs$core$async$state_machine__24042__auto____0 = (function (){
var statearr_26718 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26718[(0)] = cljs$core$async$state_machine__24042__auto__);

(statearr_26718[(1)] = (1));

return statearr_26718;
});
var cljs$core$async$state_machine__24042__auto____1 = (function (state_26697){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_26697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e26719){if((e26719 instanceof Object)){
var ex__24045__auto__ = e26719;
var statearr_26720_26737 = state_26697;
(statearr_26720_26737[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26738 = state_26697;
state_26697 = G__26738;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
cljs$core$async$state_machine__24042__auto__ = function(state_26697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24042__auto____1.call(this,state_26697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24042__auto____0;
cljs$core$async$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24042__auto____1;
return cljs$core$async$state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto___26726,out))
})();
var state__24155__auto__ = (function (){var statearr_26721 = f__24154__auto__.call(null);
(statearr_26721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto___26726);

return statearr_26721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto___26726,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26739 = [];
var len__23044__auto___26809 = arguments.length;
var i__23045__auto___26810 = (0);
while(true){
if((i__23045__auto___26810 < len__23044__auto___26809)){
args26739.push((arguments[i__23045__auto___26810]));

var G__26811 = (i__23045__auto___26810 + (1));
i__23045__auto___26810 = G__26811;
continue;
} else {
}
break;
}

var G__26741 = args26739.length;
switch (G__26741) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26739.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24153__auto___26813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto___26813,out){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto___26813,out){
return (function (state_26779){
var state_val_26780 = (state_26779[(1)]);
if((state_val_26780 === (7))){
var inst_26775 = (state_26779[(2)]);
var state_26779__$1 = state_26779;
var statearr_26781_26814 = state_26779__$1;
(statearr_26781_26814[(2)] = inst_26775);

(statearr_26781_26814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (1))){
var inst_26742 = (new Array(n));
var inst_26743 = inst_26742;
var inst_26744 = (0);
var state_26779__$1 = (function (){var statearr_26782 = state_26779;
(statearr_26782[(7)] = inst_26743);

(statearr_26782[(8)] = inst_26744);

return statearr_26782;
})();
var statearr_26783_26815 = state_26779__$1;
(statearr_26783_26815[(2)] = null);

(statearr_26783_26815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (4))){
var inst_26747 = (state_26779[(9)]);
var inst_26747__$1 = (state_26779[(2)]);
var inst_26748 = (inst_26747__$1 == null);
var inst_26749 = cljs.core.not.call(null,inst_26748);
var state_26779__$1 = (function (){var statearr_26784 = state_26779;
(statearr_26784[(9)] = inst_26747__$1);

return statearr_26784;
})();
if(inst_26749){
var statearr_26785_26816 = state_26779__$1;
(statearr_26785_26816[(1)] = (5));

} else {
var statearr_26786_26817 = state_26779__$1;
(statearr_26786_26817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (15))){
var inst_26769 = (state_26779[(2)]);
var state_26779__$1 = state_26779;
var statearr_26787_26818 = state_26779__$1;
(statearr_26787_26818[(2)] = inst_26769);

(statearr_26787_26818[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (13))){
var state_26779__$1 = state_26779;
var statearr_26788_26819 = state_26779__$1;
(statearr_26788_26819[(2)] = null);

(statearr_26788_26819[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (6))){
var inst_26744 = (state_26779[(8)]);
var inst_26765 = (inst_26744 > (0));
var state_26779__$1 = state_26779;
if(cljs.core.truth_(inst_26765)){
var statearr_26789_26820 = state_26779__$1;
(statearr_26789_26820[(1)] = (12));

} else {
var statearr_26790_26821 = state_26779__$1;
(statearr_26790_26821[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (3))){
var inst_26777 = (state_26779[(2)]);
var state_26779__$1 = state_26779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26779__$1,inst_26777);
} else {
if((state_val_26780 === (12))){
var inst_26743 = (state_26779[(7)]);
var inst_26767 = cljs.core.vec.call(null,inst_26743);
var state_26779__$1 = state_26779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26779__$1,(15),out,inst_26767);
} else {
if((state_val_26780 === (2))){
var state_26779__$1 = state_26779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26779__$1,(4),ch);
} else {
if((state_val_26780 === (11))){
var inst_26759 = (state_26779[(2)]);
var inst_26760 = (new Array(n));
var inst_26743 = inst_26760;
var inst_26744 = (0);
var state_26779__$1 = (function (){var statearr_26791 = state_26779;
(statearr_26791[(10)] = inst_26759);

(statearr_26791[(7)] = inst_26743);

(statearr_26791[(8)] = inst_26744);

return statearr_26791;
})();
var statearr_26792_26822 = state_26779__$1;
(statearr_26792_26822[(2)] = null);

(statearr_26792_26822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (9))){
var inst_26743 = (state_26779[(7)]);
var inst_26757 = cljs.core.vec.call(null,inst_26743);
var state_26779__$1 = state_26779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26779__$1,(11),out,inst_26757);
} else {
if((state_val_26780 === (5))){
var inst_26743 = (state_26779[(7)]);
var inst_26752 = (state_26779[(11)]);
var inst_26744 = (state_26779[(8)]);
var inst_26747 = (state_26779[(9)]);
var inst_26751 = (inst_26743[inst_26744] = inst_26747);
var inst_26752__$1 = (inst_26744 + (1));
var inst_26753 = (inst_26752__$1 < n);
var state_26779__$1 = (function (){var statearr_26793 = state_26779;
(statearr_26793[(11)] = inst_26752__$1);

(statearr_26793[(12)] = inst_26751);

return statearr_26793;
})();
if(cljs.core.truth_(inst_26753)){
var statearr_26794_26823 = state_26779__$1;
(statearr_26794_26823[(1)] = (8));

} else {
var statearr_26795_26824 = state_26779__$1;
(statearr_26795_26824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (14))){
var inst_26772 = (state_26779[(2)]);
var inst_26773 = cljs.core.async.close_BANG_.call(null,out);
var state_26779__$1 = (function (){var statearr_26797 = state_26779;
(statearr_26797[(13)] = inst_26772);

return statearr_26797;
})();
var statearr_26798_26825 = state_26779__$1;
(statearr_26798_26825[(2)] = inst_26773);

(statearr_26798_26825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (10))){
var inst_26763 = (state_26779[(2)]);
var state_26779__$1 = state_26779;
var statearr_26799_26826 = state_26779__$1;
(statearr_26799_26826[(2)] = inst_26763);

(statearr_26799_26826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (8))){
var inst_26743 = (state_26779[(7)]);
var inst_26752 = (state_26779[(11)]);
var tmp26796 = inst_26743;
var inst_26743__$1 = tmp26796;
var inst_26744 = inst_26752;
var state_26779__$1 = (function (){var statearr_26800 = state_26779;
(statearr_26800[(7)] = inst_26743__$1);

(statearr_26800[(8)] = inst_26744);

return statearr_26800;
})();
var statearr_26801_26827 = state_26779__$1;
(statearr_26801_26827[(2)] = null);

(statearr_26801_26827[(1)] = (2));


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
});})(c__24153__auto___26813,out))
;
return ((function (switch__24041__auto__,c__24153__auto___26813,out){
return (function() {
var cljs$core$async$state_machine__24042__auto__ = null;
var cljs$core$async$state_machine__24042__auto____0 = (function (){
var statearr_26805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26805[(0)] = cljs$core$async$state_machine__24042__auto__);

(statearr_26805[(1)] = (1));

return statearr_26805;
});
var cljs$core$async$state_machine__24042__auto____1 = (function (state_26779){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_26779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e26806){if((e26806 instanceof Object)){
var ex__24045__auto__ = e26806;
var statearr_26807_26828 = state_26779;
(statearr_26807_26828[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26829 = state_26779;
state_26779 = G__26829;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
cljs$core$async$state_machine__24042__auto__ = function(state_26779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24042__auto____1.call(this,state_26779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24042__auto____0;
cljs$core$async$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24042__auto____1;
return cljs$core$async$state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto___26813,out))
})();
var state__24155__auto__ = (function (){var statearr_26808 = f__24154__auto__.call(null);
(statearr_26808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto___26813);

return statearr_26808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto___26813,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26830 = [];
var len__23044__auto___26904 = arguments.length;
var i__23045__auto___26905 = (0);
while(true){
if((i__23045__auto___26905 < len__23044__auto___26904)){
args26830.push((arguments[i__23045__auto___26905]));

var G__26906 = (i__23045__auto___26905 + (1));
i__23045__auto___26905 = G__26906;
continue;
} else {
}
break;
}

var G__26832 = args26830.length;
switch (G__26832) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26830.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24153__auto___26908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto___26908,out){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto___26908,out){
return (function (state_26874){
var state_val_26875 = (state_26874[(1)]);
if((state_val_26875 === (7))){
var inst_26870 = (state_26874[(2)]);
var state_26874__$1 = state_26874;
var statearr_26876_26909 = state_26874__$1;
(statearr_26876_26909[(2)] = inst_26870);

(statearr_26876_26909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26875 === (1))){
var inst_26833 = [];
var inst_26834 = inst_26833;
var inst_26835 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26874__$1 = (function (){var statearr_26877 = state_26874;
(statearr_26877[(7)] = inst_26834);

(statearr_26877[(8)] = inst_26835);

return statearr_26877;
})();
var statearr_26878_26910 = state_26874__$1;
(statearr_26878_26910[(2)] = null);

(statearr_26878_26910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26875 === (4))){
var inst_26838 = (state_26874[(9)]);
var inst_26838__$1 = (state_26874[(2)]);
var inst_26839 = (inst_26838__$1 == null);
var inst_26840 = cljs.core.not.call(null,inst_26839);
var state_26874__$1 = (function (){var statearr_26879 = state_26874;
(statearr_26879[(9)] = inst_26838__$1);

return statearr_26879;
})();
if(inst_26840){
var statearr_26880_26911 = state_26874__$1;
(statearr_26880_26911[(1)] = (5));

} else {
var statearr_26881_26912 = state_26874__$1;
(statearr_26881_26912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26875 === (15))){
var inst_26864 = (state_26874[(2)]);
var state_26874__$1 = state_26874;
var statearr_26882_26913 = state_26874__$1;
(statearr_26882_26913[(2)] = inst_26864);

(statearr_26882_26913[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26875 === (13))){
var state_26874__$1 = state_26874;
var statearr_26883_26914 = state_26874__$1;
(statearr_26883_26914[(2)] = null);

(statearr_26883_26914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26875 === (6))){
var inst_26834 = (state_26874[(7)]);
var inst_26859 = inst_26834.length;
var inst_26860 = (inst_26859 > (0));
var state_26874__$1 = state_26874;
if(cljs.core.truth_(inst_26860)){
var statearr_26884_26915 = state_26874__$1;
(statearr_26884_26915[(1)] = (12));

} else {
var statearr_26885_26916 = state_26874__$1;
(statearr_26885_26916[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26875 === (3))){
var inst_26872 = (state_26874[(2)]);
var state_26874__$1 = state_26874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26874__$1,inst_26872);
} else {
if((state_val_26875 === (12))){
var inst_26834 = (state_26874[(7)]);
var inst_26862 = cljs.core.vec.call(null,inst_26834);
var state_26874__$1 = state_26874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26874__$1,(15),out,inst_26862);
} else {
if((state_val_26875 === (2))){
var state_26874__$1 = state_26874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26874__$1,(4),ch);
} else {
if((state_val_26875 === (11))){
var inst_26842 = (state_26874[(10)]);
var inst_26838 = (state_26874[(9)]);
var inst_26852 = (state_26874[(2)]);
var inst_26853 = [];
var inst_26854 = inst_26853.push(inst_26838);
var inst_26834 = inst_26853;
var inst_26835 = inst_26842;
var state_26874__$1 = (function (){var statearr_26886 = state_26874;
(statearr_26886[(7)] = inst_26834);

(statearr_26886[(11)] = inst_26854);

(statearr_26886[(12)] = inst_26852);

(statearr_26886[(8)] = inst_26835);

return statearr_26886;
})();
var statearr_26887_26917 = state_26874__$1;
(statearr_26887_26917[(2)] = null);

(statearr_26887_26917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26875 === (9))){
var inst_26834 = (state_26874[(7)]);
var inst_26850 = cljs.core.vec.call(null,inst_26834);
var state_26874__$1 = state_26874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26874__$1,(11),out,inst_26850);
} else {
if((state_val_26875 === (5))){
var inst_26842 = (state_26874[(10)]);
var inst_26838 = (state_26874[(9)]);
var inst_26835 = (state_26874[(8)]);
var inst_26842__$1 = f.call(null,inst_26838);
var inst_26843 = cljs.core._EQ_.call(null,inst_26842__$1,inst_26835);
var inst_26844 = cljs.core.keyword_identical_QMARK_.call(null,inst_26835,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26845 = (inst_26843) || (inst_26844);
var state_26874__$1 = (function (){var statearr_26888 = state_26874;
(statearr_26888[(10)] = inst_26842__$1);

return statearr_26888;
})();
if(cljs.core.truth_(inst_26845)){
var statearr_26889_26918 = state_26874__$1;
(statearr_26889_26918[(1)] = (8));

} else {
var statearr_26890_26919 = state_26874__$1;
(statearr_26890_26919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26875 === (14))){
var inst_26867 = (state_26874[(2)]);
var inst_26868 = cljs.core.async.close_BANG_.call(null,out);
var state_26874__$1 = (function (){var statearr_26892 = state_26874;
(statearr_26892[(13)] = inst_26867);

return statearr_26892;
})();
var statearr_26893_26920 = state_26874__$1;
(statearr_26893_26920[(2)] = inst_26868);

(statearr_26893_26920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26875 === (10))){
var inst_26857 = (state_26874[(2)]);
var state_26874__$1 = state_26874;
var statearr_26894_26921 = state_26874__$1;
(statearr_26894_26921[(2)] = inst_26857);

(statearr_26894_26921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26875 === (8))){
var inst_26842 = (state_26874[(10)]);
var inst_26834 = (state_26874[(7)]);
var inst_26838 = (state_26874[(9)]);
var inst_26847 = inst_26834.push(inst_26838);
var tmp26891 = inst_26834;
var inst_26834__$1 = tmp26891;
var inst_26835 = inst_26842;
var state_26874__$1 = (function (){var statearr_26895 = state_26874;
(statearr_26895[(7)] = inst_26834__$1);

(statearr_26895[(14)] = inst_26847);

(statearr_26895[(8)] = inst_26835);

return statearr_26895;
})();
var statearr_26896_26922 = state_26874__$1;
(statearr_26896_26922[(2)] = null);

(statearr_26896_26922[(1)] = (2));


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
});})(c__24153__auto___26908,out))
;
return ((function (switch__24041__auto__,c__24153__auto___26908,out){
return (function() {
var cljs$core$async$state_machine__24042__auto__ = null;
var cljs$core$async$state_machine__24042__auto____0 = (function (){
var statearr_26900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26900[(0)] = cljs$core$async$state_machine__24042__auto__);

(statearr_26900[(1)] = (1));

return statearr_26900;
});
var cljs$core$async$state_machine__24042__auto____1 = (function (state_26874){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_26874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e26901){if((e26901 instanceof Object)){
var ex__24045__auto__ = e26901;
var statearr_26902_26923 = state_26874;
(statearr_26902_26923[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26924 = state_26874;
state_26874 = G__26924;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
cljs$core$async$state_machine__24042__auto__ = function(state_26874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24042__auto____1.call(this,state_26874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24042__auto____0;
cljs$core$async$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24042__auto____1;
return cljs$core$async$state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto___26908,out))
})();
var state__24155__auto__ = (function (){var statearr_26903 = f__24154__auto__.call(null);
(statearr_26903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto___26908);

return statearr_26903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto___26908,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map