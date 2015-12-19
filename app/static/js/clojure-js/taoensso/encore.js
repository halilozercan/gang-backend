// Compiled by ClojureScript 1.7.189 {}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
/**
 * Used for lib-consumer version assertions
 */
taoensso.encore.encore_version = 2.4;
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
if((taoensso.encore.encore_version < min_version)){
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,"Insufficient com.taoensso/encore version: %s < %s. You may have a Leiningen dependency conflict (see http://goo.gl/qBbLvC for solution).",taoensso.encore.encore_version,min_version),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),min_version,new cljs.core.Keyword(null,"this-version","this-version",355666086),taoensso.encore.encore_version], null));
} else {
return null;
}
});
taoensso.encore.read_edn_str = (function taoensso$encore$read_edn_str(s){
return cljs.reader.read_string.call(null,s);
});
taoensso.encore.read_edn = taoensso.encore.read_edn_str;
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var args27558 = [];
var len__23044__auto___27563 = arguments.length;
var i__23045__auto___27564 = (0);
while(true){
if((i__23045__auto___27564 < len__23044__auto___27563)){
args27558.push((arguments[i__23045__auto___27564]));

var G__27565 = (i__23045__auto___27564 + (1));
i__23045__auto___27564 = G__27565;
continue;
} else {
}
break;
}

var G__27560 = args27558.length;
switch (G__27560) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27558.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.call(null,null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,x){
var _STAR_print_level_STAR_27561 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_27562 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.call(null,x);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_27562;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_27561;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;
/**
 * Handles optional docstrings & attr maps for a macro def's name.
 *   Stolen from `clojure.tools.macro`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(name,macro_args){
var vec__27569 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.call(null,vec__27569,(0),null);
var macro_args__$1 = cljs.core.nth.call(null,vec__27569,(1),null);
var vec__27570 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.call(null,vec__27570,(0),null);
var macro_args__$2 = cljs.core.nth.call(null,vec__27570,(1),null);
var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr);
var attr__$2 = (cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.conj.call(null,cljs.core.meta.call(null,name),attr__$1):attr__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,name,attr__$2),macro_args__$2], null);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});
taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});
taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});
/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var temp__4425__auto__ = (function (){var or__21986__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var data_map = temp__4425__auto__;
return cljs.core.merge.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.nnil_QMARK_ = (function taoensso$encore$nnil_QMARK_(x){
return !((x == null));
});
taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_.call(null,x));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});
taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && ((x > (0)));
});
taoensso.encore.nneg_int_QMARK_ = (function taoensso$encore$nneg_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && (!((x < (0))));
});
taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});
taoensso.encore.udt_QMARK_ = taoensso.encore.nneg_int_QMARK_;
taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(2),x);
});
taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(3),x);
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_.call(null,x)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,taoensso.encore.set_STAR_.call(null,x))));
});
taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_.call(null,x)));
});
taoensso.encore.nneg_num_QMARK_ = (function taoensso$encore$nneg_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});
taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});
taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,(0),x);
});
taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_.call(null,x)){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0"))){
return false;
} else {
if((cljs.core._EQ_.call(null,x,(1))) || (cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1"))){
return true;
} else {
return null;
}
}
}
}
});
taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNan(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find.call(null,/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim.call(null,_QMARK_s));
} else {
return null;
}
});
taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var temp__4425__auto__ = taoensso.encore.as__QMARK_email.call(null,_QMARK_s);
if(cljs.core.truth_(temp__4425__auto__)){
var email = temp__4425__auto__;
return clojure.string.lower_case.call(null,email);
} else {
return null;
}
});
taoensso.encore.nnil_EQ_ = (function taoensso$encore$nnil_EQ_(var_args){
var args27573 = [];
var len__23044__auto___27579 = arguments.length;
var i__23045__auto___27580 = (0);
while(true){
if((i__23045__auto___27580 < len__23044__auto___27579)){
args27573.push((arguments[i__23045__auto___27580]));

var G__27581 = (i__23045__auto___27580 + (1));
i__23045__auto___27580 = G__27581;
continue;
} else {
}
break;
}

var G__27578 = args27573.length;
switch (G__27578) {
case 2:
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__23063__auto__ = (new cljs.core.IndexedSeq(args27573.slice((2)),(0)));
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23063__auto__);

}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var and__21974__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__21974__auto__)){
return cljs.core._EQ_.call(null,x,y);
} else {
return and__21974__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__21974__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__21974__auto__)){
return cljs.core.apply.call(null,cljs.core._EQ_,x,y,more);
} else {
return and__21974__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$lang$applyTo = (function (seq27574){
var G__27575 = cljs.core.first.call(null,seq27574);
var seq27574__$1 = cljs.core.next.call(null,seq27574);
var G__27576 = cljs.core.first.call(null,seq27574__$1);
var seq27574__$2 = cljs.core.next.call(null,seq27574__$1);
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__27575,G__27576,seq27574__$2);
});

taoensso.encore.nnil_EQ_.cljs$lang$maxFixedArity = (2);
taoensso.encore.vec_STAR_ = (function taoensso$encore$vec_STAR_(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.vec.call(null,x);
}
});
taoensso.encore.set_STAR_ = (function taoensso$encore$set_STAR_(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.set.call(null,x);
}
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return cljs.core.every_QMARK_.call(null,(function (p1__27583_SHARP_){
return taoensso.encore.nnil_QMARK_.call(null,cljs.core.get.call(null,m,p1__27583_SHARP_));
}),ks);
});
taoensso.encore.assertion_error = (function taoensso$encore$assertion_error(msg){
return (new Error(msg));
});
/**
 * Implementation detail.
 */
taoensso.encore.hthrow = (function taoensso$encore$hthrow(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27592 = arguments.length;
var i__23045__auto___27593 = (0);
while(true){
if((i__23045__auto___27593 < len__23044__auto___27592)){
args__23051__auto__.push((arguments[i__23045__auto___27593]));

var G__27594 = (i__23045__auto___27593 + (1));
i__23045__auto___27593 = G__27594;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((5) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((5)),(0))):null);
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__23052__auto__);
});

taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic = (function (hard_QMARK_,ns_str,_QMARK_line,form,val,p__27590){
var vec__27591 = p__27590;
var _QMARK_err = cljs.core.nth.call(null,vec__27591,(0),null);
var pattern = "Condition failed in `%s:%s` [pred-form, val]: [%s, %s]";
var line_str = (function (){var or__21986__auto__ = _QMARK_line;
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return "?";
}
})();
var form_str = [cljs.core.str((function (){var or__21986__auto__ = form;
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return "<nil>";
}
})())].join('');
var val_str = [cljs.core.str((function (){var or__21986__auto__ = val;
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return "<nil>";
}
})())].join('');
var _QMARK_err_str = (function (){var temp__4425__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__4425__auto__)){
var e = temp__4425__auto__;
return [cljs.core.str(_QMARK_err)].join('');
} else {
return null;
}
})();
var msg = (function (){var m = taoensso.encore.format.call(null,pattern,ns_str,line_str,form_str,val_str);
if(cljs.core.not.call(null,_QMARK_err_str)){
return m;
} else {
return [cljs.core.str(m),cljs.core.str("\nPredicate error: "),cljs.core.str(_QMARK_err_str)].join('');
}
})();
throw ((cljs.core.not.call(null,hard_QMARK_))?taoensso.encore.assertion_error.call(null,msg):cljs.core.ex_info.call(null,msg,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),ns_str,new cljs.core.Keyword(null,"?line","?line",-631853385),_QMARK_line,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"?err","?err",549653299),_QMARK_err], null)));
});

taoensso.encore.hthrow.cljs$lang$maxFixedArity = (5);

taoensso.encore.hthrow.cljs$lang$applyTo = (function (seq27584){
var G__27585 = cljs.core.first.call(null,seq27584);
var seq27584__$1 = cljs.core.next.call(null,seq27584);
var G__27586 = cljs.core.first.call(null,seq27584__$1);
var seq27584__$2 = cljs.core.next.call(null,seq27584__$1);
var G__27587 = cljs.core.first.call(null,seq27584__$2);
var seq27584__$3 = cljs.core.next.call(null,seq27584__$2);
var G__27588 = cljs.core.first.call(null,seq27584__$3);
var seq27584__$4 = cljs.core.next.call(null,seq27584__$3);
var G__27589 = cljs.core.first.call(null,seq27584__$4);
var seq27584__$5 = cljs.core.next.call(null,seq27584__$4);
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(G__27585,G__27586,G__27587,G__27588,G__27589,seq27584__$5);
});
taoensso.encore.non_throwing = (function taoensso$encore$non_throwing(pred){
return (function (x){
var vec__27597 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred.call(null,x)], null);
}catch (e27598){if((e27598 instanceof Error)){
var e__8700__auto__ = e27598;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,e__8700__auto__], null);
} else {
throw e27598;

}
}})();
var _QMARK_r = cljs.core.nth.call(null,vec__27597,(0),null);
var _ = cljs.core.nth.call(null,vec__27597,(1),null);
return _QMARK_r;
});
});
/**
 * Implementation detail.
 */
taoensso.encore.hpred = (function taoensso$encore$hpred(pred_form){
if(!(cljs.core.vector_QMARK_.call(null,pred_form))){
return pred_form;
} else {
var vec__27604 = pred_form;
var type = cljs.core.nth.call(null,vec__27604,(0),null);
var p1 = cljs.core.nth.call(null,vec__27604,(1),null);
var p2 = cljs.core.nth.call(null,vec__27604,(2),null);
var more = cljs.core.nthnext.call(null,vec__27604,(3));
var G__27605 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27605) {
case "el":
return ((function (G__27605,vec__27604,type,p1,p2,more){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x);
});
;})(G__27605,vec__27604,type,p1,p2,more))

break;
case "not=":
return ((function (G__27605,vec__27604,type,p1,p2,more){
return (function (x){
return cljs.core.not_EQ_.call(null,p1,x);
});
;})(G__27605,vec__27604,type,p1,p2,more))

break;
case "ks-nnil?":
return ((function (G__27605,vec__27604,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_nnil_QMARK_.call(null,p1,x);
});
;})(G__27605,vec__27604,type,p1,p2,more))

break;
case "ks<=":
return ((function (G__27605,vec__27604,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_LT__EQ_.call(null,p1,x);
});
;})(G__27605,vec__27604,type,p1,p2,more))

break;
case "or":
return ((function (G__27605,vec__27604,type,p1,p2,more){
return (function (x){
var or__21986__auto__ = (cljs.core.truth_(p1)?taoensso.encore.non_throwing.call(null,taoensso$encore$hpred.call(null,p1)).call(null,x):null);
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
var or__21986__auto____$1 = (cljs.core.truth_(p2)?taoensso.encore.non_throwing.call(null,taoensso$encore$hpred.call(null,p2)).call(null,x):null);
if(cljs.core.truth_(or__21986__auto____$1)){
return or__21986__auto____$1;
} else {
return cljs.core.some.call(null,((function (or__21986__auto____$1,or__21986__auto__,G__27605,vec__27604,type,p1,p2,more){
return (function (p1__27600_SHARP_){
return taoensso.encore.non_throwing.call(null,taoensso$encore$hpred.call(null,p1__27600_SHARP_)).call(null,x);
});})(or__21986__auto____$1,or__21986__auto__,G__27605,vec__27604,type,p1,p2,more))
,more);
}
}
});
;})(G__27605,vec__27604,type,p1,p2,more))

break;
case "not":
return ((function (G__27605,vec__27604,type,p1,p2,more){
return (function (x){
var and__21974__auto__ = ((cljs.core.not.call(null,p1))?true:cljs.core.not.call(null,taoensso$encore$hpred.call(null,p1).call(null,x)));
if(and__21974__auto__){
var and__21974__auto____$1 = ((cljs.core.not.call(null,p2))?true:cljs.core.not.call(null,taoensso$encore$hpred.call(null,p2).call(null,x)));
if(and__21974__auto____$1){
return cljs.core.every_QMARK_.call(null,((function (and__21974__auto____$1,and__21974__auto__,G__27605,vec__27604,type,p1,p2,more){
return (function (p1__27599_SHARP_){
return cljs.core.not.call(null,taoensso$encore$hpred.call(null,p1__27599_SHARP_).call(null,x));
});})(and__21974__auto____$1,and__21974__auto__,G__27605,vec__27604,type,p1,p2,more))
,more);
} else {
return and__21974__auto____$1;
}
} else {
return and__21974__auto__;
}
});
;})(G__27605,vec__27604,type,p1,p2,more))

break;
case "ks=":
return ((function (G__27605,vec__27604,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_EQ_.call(null,p1,x);
});
;})(G__27605,vec__27604,type,p1,p2,more))

break;
case "and":
return ((function (G__27605,vec__27604,type,p1,p2,more){
return (function (x){
var and__21974__auto__ = ((cljs.core.not.call(null,p1))?true:taoensso$encore$hpred.call(null,p1).call(null,x));
if(cljs.core.truth_(and__21974__auto__)){
var and__21974__auto____$1 = ((cljs.core.not.call(null,p2))?true:taoensso$encore$hpred.call(null,p2).call(null,x));
if(cljs.core.truth_(and__21974__auto____$1)){
return cljs.core.every_QMARK_.call(null,((function (and__21974__auto____$1,and__21974__auto__,G__27605,vec__27604,type,p1,p2,more){
return (function (p1__27601_SHARP_){
return taoensso$encore$hpred.call(null,p1__27601_SHARP_).call(null,x);
});})(and__21974__auto____$1,and__21974__auto__,G__27605,vec__27604,type,p1,p2,more))
,more);
} else {
return and__21974__auto____$1;
}
} else {
return and__21974__auto__;
}
});
;})(G__27605,vec__27604,type,p1,p2,more))

break;
case "ks>=":
return ((function (G__27605,vec__27604,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_GT__EQ_.call(null,p1,x);
});
;})(G__27605,vec__27604,type,p1,p2,more))

break;
case "not-in":
return ((function (G__27605,vec__27604,type,p1,p2,more){
return (function (x){
return !(cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x));
});
;})(G__27605,vec__27604,type,p1,p2,more))

break;
case "not-el":
return ((function (G__27605,vec__27604,type,p1,p2,more){
return (function (x){
return !(cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x));
});
;})(G__27605,vec__27604,type,p1,p2,more))

break;
case "=":
return ((function (G__27605,vec__27604,type,p1,p2,more){
return (function (x){
return cljs.core._EQ_.call(null,p1,x);
});
;})(G__27605,vec__27604,type,p1,p2,more))

break;
case "set<=":
return ((function (G__27605,vec__27604,type,p1,p2,more){
return (function (x){
return clojure.set.subset_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,x),taoensso.encore.set_STAR_.call(null,p1));
});
;})(G__27605,vec__27604,type,p1,p2,more))

break;
case "set>=":
return ((function (G__27605,vec__27604,type,p1,p2,more){
return (function (x){
return clojure.set.superset_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,x),taoensso.encore.set_STAR_.call(null,p1));
});
;})(G__27605,vec__27604,type,p1,p2,more))

break;
case "set=":
return ((function (G__27605,vec__27604,type,p1,p2,more){
return (function (x){
return cljs.core._EQ_.call(null,taoensso.encore.set_STAR_.call(null,x),taoensso.encore.set_STAR_.call(null,p1));
});
;})(G__27605,vec__27604,type,p1,p2,more))

break;
case "in":
return ((function (G__27605,vec__27604,type,p1,p2,more){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x);
});
;})(G__27605,vec__27604,type,p1,p2,more))

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
}
});
/**
 * Implementation detail.
 */
taoensso.encore.hcond = (function taoensso$encore$hcond(hard_QMARK_,ns_str,line,x_,x_form,pred,pred_form){
var vec__27611 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,x_)], null);
}catch (e27613){if((e27613 instanceof Error)){
var e__8700__auto__ = e27613;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,e__8700__auto__], null);
} else {
throw e27613;

}
}})();
var _QMARK_x = cljs.core.nth.call(null,vec__27611,(0),null);
var _QMARK_x_err = cljs.core.nth.call(null,vec__27611,(1),null);
var have_x_QMARK_ = (_QMARK_x_err == null);
var vec__27612 = ((have_x_QMARK_)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,pred).call(null,_QMARK_x)], null);
}catch (e27614){if((e27614 instanceof Error)){
var e__8700__auto__ = e27614;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,e__8700__auto__], null);
} else {
throw e27614;

}
}})():null);
var pass_QMARK_ = cljs.core.nth.call(null,vec__27612,(0),null);
var _QMARK_pred_err = cljs.core.nth.call(null,vec__27612,(1),null);
if(cljs.core.truth_(pass_QMARK_)){
return _QMARK_x;
} else {
return taoensso.encore.hthrow.call(null,hard_QMARK_,ns_str,line,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,x_form),pred_form),((have_x_QMARK_)?_QMARK_x:_QMARK_x_err),_QMARK_pred_err);
}
});
/**
 * Like `name` but fully qualified: includes namespace in string when present.
 */
taoensso.encore.fq_name = (function taoensso$encore$fq_name(x){
if(typeof x === 'string'){
return x;
} else {
var n = cljs.core.name.call(null,x);
var temp__4423__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.fq_name.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27619 = arguments.length;
var i__23045__auto___27620 = (0);
while(true){
if((i__23045__auto___27620 < len__23044__auto___27619)){
args__23051__auto__.push((arguments[i__23045__auto___27620]));

var G__27621 = (i__23045__auto___27620 + (1));
i__23045__auto___27620 = G__27621;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__27617){
var vec__27618 = p__27617;
var no_slash_QMARK_ = cljs.core.nth.call(null,vec__27618,(0),null);
var parts = cljs.core.reduce.call(null,((function (vec__27618,no_slash_QMARK_){
return (function (acc,in$){
if(cljs.core.truth_(in$)){
return cljs.core.into.call(null,acc,taoensso.encore.explode_keyword.call(null,in$));
} else {
return acc;
}
});})(vec__27618,no_slash_QMARK_))
,cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.empty_QMARK_.call(null,parts)){
return null;
} else {
if(cljs.core.truth_(no_slash_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,ppop))?null:clojure.string.join.call(null,".",ppop)),cljs.core.peek.call(null,parts));
}
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_keywords.cljs$lang$applyTo = (function (seq27615){
var G__27616 = cljs.core.first.call(null,seq27615);
var seq27615__$1 = cljs.core.next.call(null,seq27615);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic(G__27616,seq27615__$1);
});
taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var args27622 = [];
var len__23044__auto___27626 = arguments.length;
var i__23045__auto___27627 = (0);
while(true){
if((i__23045__auto___27627 < len__23044__auto___27626)){
args27622.push((arguments[i__23045__auto___27627]));

var G__27628 = (i__23045__auto___27627 + (1));
i__23045__auto___27627 = G__27628;
continue;
} else {
}
break;
}

var G__27624 = args27622.length;
switch (G__27624) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27622.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.call(null,new cljs.core.Keyword(null,"round","round",2009433328),null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.call(null,type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = ((cljs.core.not.call(null,modifier))?n__$1:(n__$1 * modifier));
var rounded = (function (){var G__27625 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27625) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
})();
if(cljs.core.not.call(null,modifier)){
return cljs.core.long$.call(null,rounded);
} else {
return (rounded / modifier);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Optimized common case.
 */
taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});
/**
 * Optimized common case.
 */
taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});
/**
 * Returns binary exponential backoff value.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27637 = arguments.length;
var i__23045__auto___27638 = (0);
while(true){
if((i__23045__auto___27638 < len__23044__auto___27637)){
args__23051__auto__.push((arguments[i__23045__auto___27638]));

var G__27639 = (i__23045__auto___27638 + (1));
i__23045__auto___27638 = G__27639;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic = (function (nattempt,p__27633){
var vec__27634 = p__27633;
var map__27635 = cljs.core.nth.call(null,vec__27634,(0),null);
var map__27635__$1 = ((((!((map__27635 == null)))?((((map__27635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27635):map__27635);
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__27635__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__27635__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__27635__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var binary_exp = Math.pow((2),(nattempt - (1)));
var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);
return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__22317__auto__ = min_SINGLEQUOTE_;
var y__22318__auto__ = time;
return ((x__22317__auto__ > y__22318__auto__) ? x__22317__auto__ : y__22318__auto__);
})():time);
var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__22324__auto__ = max_SINGLEQUOTE_;
var y__22325__auto__ = time__$1;
return ((x__22324__auto__ < y__22325__auto__) ? x__22324__auto__ : y__22325__auto__);
})():time__$1);
return time__$2;
})());
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = (1);

taoensso.encore.exp_backoff.cljs$lang$applyTo = (function (seq27631){
var G__27632 = cljs.core.first.call(null,seq27631);
var seq27631__$1 = cljs.core.next.call(null,seq27631);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic(G__27632,seq27631__$1);
});
taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});
/**
 * Useful for testing.
 */
taoensso.encore.now_udt_mock_fn = (function taoensso$encore$now_udt_mock_fn(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27643 = arguments.length;
var i__23045__auto___27644 = (0);
while(true){
if((i__23045__auto___27644 < len__23044__auto___27643)){
args__23051__auto__.push((arguments[i__23045__auto___27644]));

var G__27645 = (i__23045__auto___27644 + (1));
i__23045__auto___27644 = G__27645;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((0) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((0)),(0))):null);
return taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__23052__auto__);
});

taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic = (function (p__27641){
var vec__27642 = p__27641;
var mock_udts = cljs.core.nth.call(null,vec__27642,(0),null);
var mock_udts__$1 = (function (){var or__21986__auto__ = mock_udts;
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return cljs.core.range.call(null);
}
})();
var idx = cljs.core.atom.call(null,(-1));
return ((function (mock_udts__$1,idx,vec__27642,mock_udts){
return (function (){
return cljs.core.nth.call(null,mock_udts__$1,cljs.core.swap_BANG_.call(null,idx,cljs.core.inc));
});
;})(mock_udts__$1,idx,vec__27642,mock_udts))
});

taoensso.encore.now_udt_mock_fn.cljs$lang$maxFixedArity = (0);

taoensso.encore.now_udt_mock_fn.cljs$lang$applyTo = (function (seq27640){
return taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27640));
});
taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return cljs.core.long$.call(null,(secs * 1000.0));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,ms,(1000));
});
/**
 * Returns number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27651 = arguments.length;
var i__23045__auto___27652 = (0);
while(true){
if((i__23045__auto___27652 < len__23044__auto___27651)){
args__23051__auto__.push((arguments[i__23045__auto___27652]));

var G__27653 = (i__23045__auto___27652 + (1));
i__23045__auto___27652 = G__27653;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((0) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((0)),(0))):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__23052__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__27647){
var map__27648 = p__27647;
var map__27648__$1 = ((((!((map__27648 == null)))?((((map__27648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27648):map__27648);
var opts = map__27648__$1;
var years = cljs.core.get.call(null,map__27648__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__27648__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__27648__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__27648__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__27648__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__27648__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__27648__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__27648__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__27648__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core.truth_(cljs.core.mapv.call(null,((function (map__27648,map__27648__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (have_in__27650){
return taoensso.encore.hcond.call(null,false,"taoensso.encore",683,(new cljs.core.Delay(((function (map__27648,map__27648__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (){
return have_in__27650;
});})(map__27648,map__27648__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,null)),new cljs.core.Symbol(null,"have-in__27650","have-in__27650",-1073100070,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null));
});})(map__27648,map__27648__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have","have",574419306,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null),new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)))))].join('')));
}

return taoensso.encore.round_STAR_.call(null,(((((((((cljs.core.truth_(years)?(((((years * (1000)) * (60)) * (60)) * (24)) * (365)):0.0) + (cljs.core.truth_(months)?(((((months * (1000)) * (60)) * (60)) * (24)) * 29.53):0.0)) + (cljs.core.truth_(weeks)?(((((weeks * (1000)) * (60)) * (60)) * (24)) * (7)):0.0)) + (cljs.core.truth_(days)?((((days * (1000)) * (60)) * (60)) * (24)):0.0)) + (cljs.core.truth_(hours)?(((hours * (1000)) * (60)) * (60)):0.0)) + (cljs.core.truth_(mins)?((mins * (1000)) * (60)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq27646){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27646));
});
taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
/**
 * Like `aget` for JS objects, Ref. https://goo.gl/eze8hY. Unlike `aget`,
 *   returns nil for missing keys instead of throwing.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var args27658 = [];
var len__23044__auto___27665 = arguments.length;
var i__23045__auto___27666 = (0);
while(true){
if((i__23045__auto___27666 < len__23044__auto___27665)){
args27658.push((arguments[i__23045__auto___27666]));

var G__27667 = (i__23045__auto___27666 + (1));
i__23045__auto___27666 = G__27667;
continue;
} else {
}
break;
}

var G__27664 = args27658.length;
switch (G__27664) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__23063__auto__ = (new cljs.core.IndexedSeq(args27658.slice((3)),(0)));
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23063__auto__);

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
if(cljs.core.truth_(o)){
return goog.object.get(o,k,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k1,k2){
var temp__4425__auto__ = taoensso.encore.oget.call(null,o,k1);
if(cljs.core.truth_(temp__4425__auto__)){
var o__$1 = temp__4425__auto__;
return goog.object.get(o__$1,k2,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic = (function (o,k1,k2,ks){
var temp__4425__auto__ = taoensso.encore.oget.call(null,o,k1,k2);
if(cljs.core.truth_(temp__4425__auto__)){
var o__$1 = temp__4425__auto__;
return cljs.core.apply.call(null,taoensso.encore.oget,o__$1,ks);
} else {
return null;
}
});

taoensso.encore.oget.cljs$lang$applyTo = (function (seq27659){
var G__27660 = cljs.core.first.call(null,seq27659);
var seq27659__$1 = cljs.core.next.call(null,seq27659);
var G__27661 = cljs.core.first.call(null,seq27659__$1);
var seq27659__$2 = cljs.core.next.call(null,seq27659__$1);
var G__27662 = cljs.core.first.call(null,seq27659__$2);
var seq27659__$3 = cljs.core.next.call(null,seq27659__$2);
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic(G__27660,G__27661,G__27662,seq27659__$3);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = (3);
taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_.call(null,coll)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),(1));
} else {
return cljs.core.not.call(null,cljs.core.next.call(null,coll));
}
});
taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_.call(null,coll))){
var vec__27670 = coll;
var c1 = cljs.core.nth.call(null,vec__27670,(0),null);
return c1;
} else {
return null;
}
});
taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop.call(null,v):null),cljs.core.peek.call(null,v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
var vec__27672 = v;
var v1 = cljs.core.nth.call(null,vec__27672,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
} else {
return null;
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var args27673 = [];
var len__23044__auto___27679 = arguments.length;
var i__23045__auto___27680 = (0);
while(true){
if((i__23045__auto___27680 < len__23044__auto___27679)){
args27673.push((arguments[i__23045__auto___27680]));

var G__27681 = (i__23045__auto___27680 + (1));
i__23045__auto___27680 = G__27681;
continue;
} else {
}
break;
}

var G__27678 = args27673.length;
switch (G__27678) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__23063__auto__ = (new cljs.core.IndexedSeq(args27673.slice((2)),(0)));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23063__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,_QMARK_x){
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,_QMARK_x))){
return cljs.core.conj.call(null,coll,_QMARK_x);
} else {
return coll;
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,_QMARK_x,_QMARK_xs){
return cljs.core.reduce.call(null,taoensso.encore.conj_some,taoensso.encore.conj_some.call(null,coll,_QMARK_x),_QMARK_xs);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq27674){
var G__27675 = cljs.core.first.call(null,seq27674);
var seq27674__$1 = cljs.core.next.call(null,seq27674);
var G__27676 = cljs.core.first.call(null,seq27674__$1);
var seq27674__$2 = cljs.core.next.call(null,seq27674__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__27675,G__27676,seq27674__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);
/**
 * `run!` from Clojure 1.7+
 */
taoensso.encore.backport_run_BANG_ = (function taoensso$encore$backport_run_BANG_(proc,coll){
cljs.core.reduce.call(null,(function (p1__27684_SHARP_,p2__27683_SHARP_){
return proc.call(null,p2__27683_SHARP_);
}),null,coll);

return null;
});
/**
 * Faster `some` based on `reduce`.
 */
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
var temp__4425__auto__ = pred.call(null,in$);
if(cljs.core.truth_(temp__4425__auto__)){
var p = temp__4425__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});
/**
 * Like `update-in` but faster, more flexible, and simpler (less ambiguous).
 */
taoensso.encore.update_in_STAR_ = (function taoensso$encore$update_in_STAR_(m,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
return f.call(null,m);
} else {
var vec__27686 = ks;
var k = cljs.core.nth.call(null,vec__27686,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__27686,(1));
if(cljs.core.truth_(ks__$1)){
return cljs.core.assoc.call(null,m,k,taoensso$encore$update_in_STAR_.call(null,cljs.core.get.call(null,m,k),ks__$1,f));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
}
}
});
taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__22324__auto__ = signed_idx;
var y__22325__auto__ = max_idx;
return ((x__22324__auto__ < y__22325__auto__) ? x__22324__auto__ : y__22325__auto__);
} else {
var x__22317__auto__ = (0);
var y__22318__auto__ = (signed_idx + max_idx);
return ((x__22317__auto__ > y__22318__auto__) ? x__22317__auto__ : y__22318__auto__);
}
});
/**
 * Returns [<inclusive-start-idx*> <exclusive-end-idx*>] for counted 0-indexed
 *   input (str, vec, etc.) with support for:
 *  * Clamping of indexes beyond limits.
 *  * Max-length -> end-index.
 *  * -ive indexes (as +ive indexes but work from back of input):
 *    (+0) (+1) (+2) (+3) (+4)  ; inclusive +ive indexes
 *      h    e    l    l    o   ; 5 count
 *    (-5) (-4) (-3) (-2) (-1)  ; inclusive -ive indexes
 */
taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27693 = arguments.length;
var i__23045__auto___27694 = (0);
while(true){
if((i__23045__auto___27694 < len__23044__auto___27693)){
args__23051__auto__.push((arguments[i__23045__auto___27694]));

var G__27695 = (i__23045__auto___27694 + (1));
i__23045__auto___27694 = G__27695;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((2) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((2)),(0))):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23052__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__27690){
var map__27691 = p__27690;
var map__27691__$1 = ((((!((map__27691 == null)))?((((map__27691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27691):map__27691);
var max_len = cljs.core.get.call(null,map__27691__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__27691__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (map__27691,map__27691__$1,max_len,end_idx){
return (function (){
return max_len;
});})(map__27691,map__27691__$1,max_len,end_idx))
,null)),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null))))].join('')));
}

var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = (cljs.core.truth_(max_len)?(function (){var n1__8882__auto__ = (start_idx_STAR_ + max_len);
var n2__8883__auto__ = xlen;
if((n1__8882__auto__ > n2__8883__auto__)){
return n2__8883__auto__;
} else {
return n1__8882__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen
));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq27687){
var G__27688 = cljs.core.first.call(null,seq27687);
var seq27687__$1 = cljs.core.next.call(null,seq27687);
var G__27689 = cljs.core.first.call(null,seq27687__$1);
var seq27687__$2 = cljs.core.next.call(null,seq27687__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__27688,G__27689,seq27687__$2);
});
/**
 * Like `subvec` but uses `sub-indexes`.
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27702 = arguments.length;
var i__23045__auto___27703 = (0);
while(true){
if((i__23045__auto___27703 < len__23044__auto___27702)){
args__23051__auto__.push((arguments[i__23045__auto___27703]));

var G__27704 = (i__23045__auto___27703 + (1));
i__23045__auto___27703 = G__27704;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((2) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((2)),(0))):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23052__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__27699){
var vec__27700 = p__27699;
var _QMARK_max_len = cljs.core.nth.call(null,vec__27700,(0),null);
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (vec__27700,_QMARK_max_len){
return (function (){
return v;
});})(vec__27700,_QMARK_max_len))
,null)),new cljs.core.Symbol(null,"v","v",1661996586,null),cljs.core.vector_QMARK_,new cljs.core.Symbol(null,"vector?","vector?",-61367869,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))].join('')));
}

var vec__27701 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__27701,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__27701,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq27696){
var G__27697 = cljs.core.first.call(null,seq27696);
var seq27696__$1 = cljs.core.next.call(null,seq27696);
var G__27698 = cljs.core.first.call(null,seq27696__$1);
var seq27696__$2 = cljs.core.next.call(null,seq27696__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__27697,G__27698,seq27696__$2);
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap,__hash){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22600__auto__,k__22601__auto__){
var self__ = this;
var this__22600__auto____$1 = this;
return cljs.core._lookup.call(null,this__22600__auto____$1,k__22601__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22602__auto__,k27706,else__22603__auto__){
var self__ = this;
var this__22602__auto____$1 = this;
var G__27708 = (((k27706 instanceof cljs.core.Keyword))?k27706.fqn:null);
switch (G__27708) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27706,else__22603__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22614__auto__,writer__22615__auto__,opts__22616__auto__){
var self__ = this;
var this__22614__auto____$1 = this;
var pr_pair__22617__auto__ = ((function (this__22614__auto____$1){
return (function (keyval__22618__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22615__auto__,cljs.core.pr_writer,""," ","",opts__22616__auto__,keyval__22618__auto__);
});})(this__22614__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22615__auto__,pr_pair__22617__auto__,"#taoensso.encore.Swapped{",", ","}",opts__22616__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IIterable$ = true;

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27705){
var self__ = this;
var G__27705__$1 = this;
return (new cljs.core.RecordIter((0),G__27705__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22598__auto__){
var self__ = this;
var this__22598__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22594__auto__){
var self__ = this;
var this__22594__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22604__auto__){
var self__ = this;
var this__22604__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22595__auto__){
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

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22596__auto__,other__22597__auto__){
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

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22609__auto__,k__22610__auto__){
var self__ = this;
var this__22609__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__22610__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22609__auto____$1),self__.__meta),k__22610__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22610__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22607__auto__,k__22608__auto__,G__27705){
var self__ = this;
var this__22607__auto____$1 = this;
var pred__27709 = cljs.core.keyword_identical_QMARK_;
var expr__27710 = k__22608__auto__;
if(cljs.core.truth_(pred__27709.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__27710))){
return (new taoensso.encore.Swapped(G__27705,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27709.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__27710))){
return (new taoensso.encore.Swapped(self__.new_val,G__27705,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22608__auto__,G__27705),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22612__auto__){
var self__ = this;
var this__22612__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22599__auto__,G__27705){
var self__ = this;
var this__22599__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__27705,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22605__auto__,entry__22606__auto__){
var self__ = this;
var this__22605__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22606__auto__)){
return cljs.core._assoc.call(null,this__22605__auto____$1,cljs.core._nth.call(null,entry__22606__auto__,(0)),cljs.core._nth.call(null,entry__22606__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22605__auto____$1,entry__22606__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Symbol(null,"return-val","return-val",1127759038,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__22634__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__22634__auto__,writer__22635__auto__){
return cljs.core._write.call(null,writer__22635__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__27707){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__27707),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__27707),null,cljs.core.dissoc.call(null,G__27707,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)),null));
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});
taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});
taoensso.encore.swapped_STAR_ = (function taoensso$encore$swapped_STAR_(x){
if(cljs.core.truth_(taoensso.encore.swapped_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});
/**
 * [<new-val> <return-val>]
 */
taoensso.encore.swapped_STAR__in = (function taoensso$encore$swapped_STAR__in(m,ks,f){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return taoensso.encore.swapped_STAR_.call(null,taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)));
} else {
var old_val_in = cljs.core.get_in.call(null,m,ks);
var vec__27714 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__27714,(0),null);
var return_val = cljs.core.nth.call(null,vec__27714,(1),null);
var new_val = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,new_val_in,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)):cljs.core.assoc_in.call(null,m,ks,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
});
/**
 * Reduces input with
 *   [<type> <ks> <reset-val-or-swap-fn>] or
 *       [<ks> <reset-val-or-swap-fn>] ops.
 */
taoensso.encore.replace_in_STAR_ = (function taoensso$encore$replace_in_STAR_(_QMARK_vf_type,m,ops){
return cljs.core.reduce.call(null,(function (accum,_QMARK_op){
if(cljs.core.not.call(null,_QMARK_op)){
return accum;
} else {
var vec__27717 = ((cljs.core.not.call(null,_QMARK_vf_type))?_QMARK_op:cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op));
var vf_type = cljs.core.nth.call(null,vec__27717,(0),null);
var ks = cljs.core.nth.call(null,vec__27717,(1),null);
var valf = cljs.core.nth.call(null,vec__27717,(2),null);
var G__27718 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__27718) {
case "reset":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf;
} else {
return cljs.core.assoc_in.call(null,accum,ks,valf);
}

break;
case "swap":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf.call(null,accum);
} else {
return cljs.core.nth.call(null,taoensso.encore.swapped_STAR__in.call(null,accum,ks,valf),(0));
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(vf_type)].join('')));

}
}
}),m,ops);
});
/**
 * Experimental. For use with `swap!`, etc.
 */
taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27722 = arguments.length;
var i__23045__auto___27723 = (0);
while(true){
if((i__23045__auto___27723 < len__23044__auto___27722)){
args__23051__auto__.push((arguments[i__23045__auto___27723]));

var G__27724 = (i__23045__auto___27723 + (1));
i__23045__auto___27723 = G__27724;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore.replace_in_STAR_.call(null,null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq27720){
var G__27721 = cljs.core.first.call(null,seq27720);
var seq27720__$1 = cljs.core.next.call(null,seq27720);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__27721,seq27720__$1);
});
/**
 * More powerful version of `swap!`:
 *  * Supports optional `update-in` semantics.
 *  * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
 *    <new-val>. This is useful when writing atomic pull fns, etc.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var args27725 = [];
var len__23044__auto___27734 = arguments.length;
var i__23045__auto___27735 = (0);
while(true){
if((i__23045__auto___27735 < len__23044__auto___27734)){
args27725.push((arguments[i__23045__auto___27735]));

var G__27736 = (i__23045__auto___27735 + (1));
i__23045__auto___27735 = G__27736;
continue;
} else {
}
break;
}

var G__27731 = args27725.length;
switch (G__27731) {
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__23063__auto__ = (new cljs.core.IndexedSeq(args27725.slice((3)),(0)));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23063__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__27732 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__27732,(0),null);
var return_val = cljs.core.nth.call(null,vec__27732,(1),null);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
} else {
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__27733 = taoensso.encore.swapped_STAR__in.call(null,old_val,ks,f);
var new_val = cljs.core.nth.call(null,vec__27733,(0),null);
var return_val = cljs.core.nth.call(null,vec__27733,(1),null);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,f,more){
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return cljs.core.count.call(null,more);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)),cljs.core.even_QMARK_,new cljs.core.Symbol(null,"even?","even?",-1827825394,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)))))].join('')));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"swap","swap",228675637),old_val,pairs);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val], null);
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq27726){
var G__27727 = cljs.core.first.call(null,seq27726);
var seq27726__$1 = cljs.core.next.call(null,seq27726);
var G__27728 = cljs.core.first.call(null,seq27726__$1);
var seq27726__$2 = cljs.core.next.call(null,seq27726__$1);
var G__27729 = cljs.core.first.call(null,seq27726__$2);
var seq27726__$3 = cljs.core.next.call(null,seq27726__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27727,G__27728,G__27729,seq27726__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Is to `reset!` as `swap-in!` is to `swap!`.
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var args27738 = [];
var len__23044__auto___27745 = arguments.length;
var i__23045__auto___27746 = (0);
while(true){
if((i__23045__auto___27746 < len__23044__auto___27745)){
args27738.push((arguments[i__23045__auto___27746]));

var G__27747 = (i__23045__auto___27746 + (1));
i__23045__auto___27746 = G__27747;
continue;
} else {
}
break;
}

var G__27744 = args27738.length;
switch (G__27744) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__23063__auto__ = (new cljs.core.IndexedSeq(args27738.slice((3)),(0)));
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23063__auto__);

}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,new_val){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.reset_BANG_.call(null,atom_,new_val);
} else {
return cljs.core.swap_BANG_.call(null,atom_,(function (old_val){
return cljs.core.assoc_in.call(null,old_val,ks,new_val);
}));
}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,new_val,more){
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return cljs.core.count.call(null,more);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)),cljs.core.even_QMARK_,new cljs.core.Symbol(null,"even?","even?",-1827825394,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)))))].join('')));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val__$1 = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),old_val,pairs);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val__$1))){
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val__$1], null);
}
break;
}
});

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq27739){
var G__27740 = cljs.core.first.call(null,seq27739);
var seq27739__$1 = cljs.core.next.call(null,seq27739);
var G__27741 = cljs.core.first.call(null,seq27739__$1);
var seq27739__$2 = cljs.core.next.call(null,seq27739__$1);
var G__27742 = cljs.core.first.call(null,seq27739__$2);
var seq27739__$3 = cljs.core.next.call(null,seq27739__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27740,G__27741,G__27742,seq27739__$3);
});

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = (3);
taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27752 = arguments.length;
var i__23045__auto___27753 = (0);
while(true){
if((i__23045__auto___27753 < len__23044__auto___27752)){
args__23051__auto__.push((arguments[i__23045__auto___27753]));

var G__27754 = (i__23045__auto___27753 + (1));
i__23045__auto___27753 = G__27754;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((2) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((2)),(0))):null);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23052__auto__);
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_ks){
return taoensso.encore.update_in_STAR_.call(null,m,ks,(function (m__$1){
return cljs.core.apply.call(null,cljs.core.dissoc,m__$1,dissoc_ks);
}));
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (2);

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq27749){
var G__27750 = cljs.core.first.call(null,seq27749);
var seq27749__$1 = cljs.core.next.call(null,seq27749);
var G__27751 = cljs.core.first.call(null,seq27749__$1);
var seq27749__$2 = cljs.core.next.call(null,seq27749__$1);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__27750,G__27751,seq27749__$2);
});
/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27765 = arguments.length;
var i__23045__auto___27766 = (0);
while(true){
if((i__23045__auto___27766 < len__23044__auto___27765)){
args__23051__auto__.push((arguments[i__23045__auto___27766]));

var G__27767 = (i__23045__auto___27766 + (1));
i__23045__auto___27766 = G__27767;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return cljs.core.count.call(null,kvs);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)),cljs.core.even_QMARK_,new cljs.core.Symbol(null,"even?","even?",-1827825394,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__21986__auto__ = m;
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__22758__auto__ = (function taoensso$encore$iter__27757(s__27758){
return (new cljs.core.LazySeq(null,(function (){
var s__27758__$1 = s__27758;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27758__$1);
if(temp__4425__auto__){
var s__27758__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27758__$2)){
var c__22756__auto__ = cljs.core.chunk_first.call(null,s__27758__$2);
var size__22757__auto__ = cljs.core.count.call(null,c__22756__auto__);
var b__27760 = cljs.core.chunk_buffer.call(null,size__22757__auto__);
if((function (){var i__27759 = (0);
while(true){
if((i__27759 < size__22757__auto__)){
var vec__27763 = cljs.core._nth.call(null,c__22756__auto__,i__27759);
var k = cljs.core.nth.call(null,vec__27763,(0),null);
var v = cljs.core.nth.call(null,vec__27763,(1),null);
if(!((v == null))){
cljs.core.chunk_append.call(null,b__27760,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__27768 = (i__27759 + (1));
i__27759 = G__27768;
continue;
} else {
var G__27769 = (i__27759 + (1));
i__27759 = G__27769;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27760),taoensso$encore$iter__27757.call(null,cljs.core.chunk_rest.call(null,s__27758__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27760),null);
}
} else {
var vec__27764 = cljs.core.first.call(null,s__27758__$2);
var k = cljs.core.nth.call(null,vec__27764,(0),null);
var v = cljs.core.nth.call(null,vec__27764,(1),null);
if(!((v == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__27757.call(null,cljs.core.rest.call(null,s__27758__$2)));
} else {
var G__27770 = cljs.core.rest.call(null,s__27758__$2);
s__27758__$1 = G__27770;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22758__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq27755){
var G__27756 = cljs.core.first.call(null,seq27755);
var seq27755__$1 = cljs.core.next.call(null,seq27755);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__27756,seq27755__$1);
});
/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27781 = arguments.length;
var i__23045__auto___27782 = (0);
while(true){
if((i__23045__auto___27782 < len__23044__auto___27781)){
args__23051__auto__.push((arguments[i__23045__auto___27782]));

var G__27783 = (i__23045__auto___27782 + (1));
i__23045__auto___27782 = G__27783;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return cljs.core.count.call(null,kvs);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)),cljs.core.even_QMARK_,new cljs.core.Symbol(null,"even?","even?",-1827825394,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__21986__auto__ = m;
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__22758__auto__ = (function taoensso$encore$iter__27773(s__27774){
return (new cljs.core.LazySeq(null,(function (){
var s__27774__$1 = s__27774;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27774__$1);
if(temp__4425__auto__){
var s__27774__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27774__$2)){
var c__22756__auto__ = cljs.core.chunk_first.call(null,s__27774__$2);
var size__22757__auto__ = cljs.core.count.call(null,c__22756__auto__);
var b__27776 = cljs.core.chunk_buffer.call(null,size__22757__auto__);
if((function (){var i__27775 = (0);
while(true){
if((i__27775 < size__22757__auto__)){
var vec__27779 = cljs.core._nth.call(null,c__22756__auto__,i__27775);
var k = cljs.core.nth.call(null,vec__27779,(0),null);
var v = cljs.core.nth.call(null,vec__27779,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__27776,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__27784 = (i__27775 + (1));
i__27775 = G__27784;
continue;
} else {
var G__27785 = (i__27775 + (1));
i__27775 = G__27785;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27776),taoensso$encore$iter__27773.call(null,cljs.core.chunk_rest.call(null,s__27774__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27776),null);
}
} else {
var vec__27780 = cljs.core.first.call(null,s__27774__$2);
var k = cljs.core.nth.call(null,vec__27780,(0),null);
var v = cljs.core.nth.call(null,vec__27780,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__27773.call(null,cljs.core.rest.call(null,s__27774__$2)));
} else {
var G__27786 = cljs.core.rest.call(null,s__27774__$2);
s__27774__$1 = G__27786;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22758__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq27771){
var G__27772 = cljs.core.first.call(null,seq27771);
var seq27771__$1 = cljs.core.next.call(null,seq27771);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__27772,seq27771__$1);
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args27787 = [];
var len__23044__auto___27790 = arguments.length;
var i__23045__auto___27791 = (0);
while(true){
if((i__23045__auto___27791 < len__23044__auto___27790)){
args27787.push((arguments[i__23045__auto___27791]));

var G__27792 = (i__23045__auto___27791 + (1));
i__23045__auto___27791 = G__27792;
continue;
} else {
}
break;
}

var G__27789 = args27787.length;
switch (G__27789) {
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27787.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,taoensso.encore.queue.call(null),coll);
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;
taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27795 = arguments.length;
var i__23045__auto___27796 = (0);
while(true){
if((i__23045__auto___27796 < len__23044__auto___27795)){
args__23051__auto__.push((arguments[i__23045__auto___27796]));

var G__27797 = (i__23045__auto___27796 + (1));
i__23045__auto___27796 = G__27797;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((0) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((0)),(0))):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__23052__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq27794){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27794));
});
/**
 * (seq     {:a :A}) => ([:a :A])
 * (seq-kvs {:a :A}) => (:a :A)
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but assumes last arg is a map whose elements should be applied
 *   to `f` as an unpaired seq:
 *  (mapply (fn [x & {:keys [y z]}] (str x y z)) 1 {:y 2 :z 3})
 *    where fn will receive args as: `(1 :y 2 :z 3)`.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27800 = arguments.length;
var i__23045__auto___27801 = (0);
while(true){
if((i__23045__auto___27801 < len__23044__auto___27800)){
args__23051__auto__.push((arguments[i__23045__auto___27801]));

var G__27802 = (i__23045__auto___27801 + (1));
i__23045__auto___27801 = G__27802;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),taoensso.encore.seq_kvs.call(null,cljs.core.last.call(null,args))));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq27798){
var G__27799 = cljs.core.first.call(null,seq27798);
var seq27798__$1 = cljs.core.next.call(null,seq27798);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__27799,seq27798__$1);
});
/**
 * Workaround for Clojure versions [1.4, 1.5) that blow up on `reduce-kv`s
 *   against a nil coll, Ref. http://dev.clojure.org/jira/browse/CLJ-1098.
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__21986__auto__ = x;
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var kf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:(function (k,_){
return cljs.core.keyword.call(null,k);
}));
var vf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,vf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?vf:((function (kf__$1){
return (function (_,v){
return cljs.core.keyword.call(null,v);
});})(kf__$1))
);
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (kf__$1,vf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,(cljs.core.truth_(kf__$1)?kf__$1.call(null,k,v):k),(cljs.core.truth_(vf__$1)?vf__$1.call(null,k,v):v));
});})(kf__$1,vf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
}
});
taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
return taoensso.encore.map_kvs.call(null,(function (k,_){
return f.call(null,k);
}),null,m);
});
taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
return taoensso.encore.map_kvs.call(null,null,(function (_,v){
return f.call(null,v);
}),m);
});
taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(predk,predv,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_((function (){var and__21974__auto__ = predk.call(null,k);
if(cljs.core.truth_(and__21974__auto__)){
return predv.call(null,v);
} else {
return and__21974__auto__;
}
})())){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
return taoensso.encore.filter_kvs.call(null,pred,cljs.core.constantly.call(null,true),m);
});
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
return taoensso.encore.filter_kvs.call(null,cljs.core.constantly.call(null,true),pred,m);
});
/**
 * Smaller, common-case version of `filter-vals`. Esp useful with `nil?`/`blank?`
 *   pred when constructing maps: {:foo (when _ <...>) :bar (when _ <...>)} in a
 *   way that preservers :or semantics.
 */
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,cljs.core.keyword.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
/**
 * Cross between `hash-map` & `map-kvs`.
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27811 = arguments.length;
var i__23045__auto___27812 = (0);
while(true){
if((i__23045__auto___27812 < len__23044__auto___27811)){
args__23051__auto__.push((arguments[i__23045__auto___27812]));

var G__27813 = (i__23045__auto___27812 + (1));
i__23045__auto___27812 = G__27813;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__27805){
var vec__27806 = p__27805;
var kf = cljs.core.nth.call(null,vec__27806,(0),null);
var vf = cljs.core.nth.call(null,vec__27806,(1),null);
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (vec__27806,kf,vf){
return (function (){
return kvs;
});})(vec__27806,kf,vf))
,null)),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.sequential_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null)], null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))].join('')));
}

if((function (){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (vec__27806,kf,vf){
return (function (){
return kf;
});})(vec__27806,kf,vf))
,null)),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.ifn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null)),taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (vec__27806,kf,vf){
return (function (){
return vf;
});})(vec__27806,kf,vf))
,null)),new cljs.core.Symbol(null,"vf","vf",1319108258,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.ifn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null))], null);

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.Symbol(null,"vf","vf",1319108258,null))))].join('')));
}

var _PERCENT_ = ((cljs.core.empty_QMARK_.call(null,kvs))?cljs.core.PersistentArrayMap.EMPTY:(function (){var kf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:((function (vec__27806,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vec__27806,kf,vf))
);
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var G__27808 = kvs;
var vec__27809 = G__27808;
var k = cljs.core.nth.call(null,vec__27809,(0),null);
var v = cljs.core.nth.call(null,vec__27809,(1),null);
var s = vec__27809;
var m__$1 = m;
var G__27808__$1 = G__27808;
while(true){
var m__$2 = m__$1;
var vec__27810 = G__27808__$1;
var k__$1 = cljs.core.nth.call(null,vec__27810,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__27810,(1),null);
var s__$1 = vec__27810;
var k__$2 = ((cljs.core.not.call(null,kf__$1))?k__$1:kf__$1.call(null,k__$1,v__$1));
var v__$2 = ((cljs.core.not.call(null,vf))?v__$1:vf.call(null,k__$2,v__$1));
var new_m = cljs.core.assoc_BANG_.call(null,m__$2,k__$2,v__$2);
var temp__4423__auto__ = cljs.core.nnext.call(null,s__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var n = temp__4423__auto__;
var G__27814 = new_m;
var G__27815 = n;
m__$1 = G__27814;
G__27808__$1 = G__27815;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,new_m);
}
break;
}
})());
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (_PERCENT_,vec__27806,kf,vf){
return (function (){
return _PERCENT_;
});})(_PERCENT_,vec__27806,kf,vf))
,null)),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null),new cljs.core.Symbol(null,"%","%",-950237169,null))))].join('')));
}

return _PERCENT_;
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq27803){
var G__27804 = cljs.core.first.call(null,seq27803);
var seq27803__$1 = cljs.core.next.call(null,seq27803);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__27804,seq27803__$1);
});
/**
 * Faster `zipmap` using transients.
 */
taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if(!((ks__$1) && (vs__$1))){
return cljs.core.persistent_BANG_.call(null,m);
} else {
var G__27816 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__27817 = cljs.core.next.call(null,ks__$1);
var G__27818 = cljs.core.next.call(null,vs__$1);
m = G__27816;
ks__$1 = G__27817;
vs__$1 = G__27818;
continue;
}
break;
}
});
/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args27819 = [];
var len__23044__auto___27825 = arguments.length;
var i__23045__auto___27826 = (0);
while(true){
if((i__23045__auto___27826 < len__23044__auto___27825)){
args27819.push((arguments[i__23045__auto___27826]));

var G__27827 = (i__23045__auto___27826 + (1));
i__23045__auto___27826 = G__27827;
continue;
} else {
}
break;
}

var G__27824 = args27819.length;
switch (G__27824) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__23063__auto__ = (new cljs.core.IndexedSeq(args27819.slice((2)),(0)));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23063__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq27820){
var G__27821 = cljs.core.first.call(null,seq27820);
var seq27820__$1 = cljs.core.next.call(null,seq27820);
var G__27822 = cljs.core.first.call(null,seq27820__$1);
var seq27820__$2 = cljs.core.next.call(null,seq27820__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__27821,G__27822,seq27820__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);
/**
 * Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb.
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args27829 = [];
var len__23044__auto___27835 = arguments.length;
var i__23045__auto___27836 = (0);
while(true){
if((i__23045__auto___27836 < len__23044__auto___27835)){
args27829.push((arguments[i__23045__auto___27836]));

var G__27837 = (i__23045__auto___27836 + (1));
i__23045__auto___27836 = G__27837;
continue;
} else {
}
break;
}

var G__27834 = args27829.length;
switch (G__27834) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__23063__auto__ = (new cljs.core.IndexedSeq(args27829.slice((2)),(0)));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23063__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq27830){
var G__27831 = cljs.core.first.call(null,seq27830);
var seq27830__$1 = cljs.core.next.call(null,seq27830);
var G__27832 = cljs.core.first.call(null,seq27830__$1);
var seq27830__$2 = cljs.core.next.call(null,seq27830__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__27831,G__27832,seq27830__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__27845,seen__$1){
while(true){
var vec__27846 = p__27845;
var v = cljs.core.nth.call(null,vec__27846,(0),null);
var xs__$1 = vec__27846;
var temp__4425__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4425__auto__){
var s = temp__4425__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__27847 = cljs.core.rest.call(null,s);
var G__27848 = seen__$1;
p__27845 = G__27847;
seen__$1 = G__27848;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return taoensso.encore.subvec_STAR_.call(null,coll,(0),n);
} else {
return cljs.core.vec.call(null,cljs.core.take.call(null,n,coll));
}
});
taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Prefer `set` when order doesn't matter (much faster).
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var args27849 = [];
var len__23044__auto___27856 = arguments.length;
var i__23045__auto___27857 = (0);
while(true){
if((i__23045__auto___27857 < len__23044__auto___27856)){
args27849.push((arguments[i__23045__auto___27857]));

var G__27858 = (i__23045__auto___27857 + (1));
i__23045__auto___27857 = G__27858;
continue;
} else {
}
break;
}

var G__27851 = args27849.length;
switch (G__27851) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27849.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__27852,in$){
var vec__27853 = p__27852;
var v = cljs.core.nth.call(null,vec__27853,(0),null);
var seen = cljs.core.nth.call(null,vec__27853,(1),null);
if(!(cljs.core.contains_QMARK_.call(null,seen,in$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in$)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__27854,in$){
var vec__27855 = p__27854;
var v = cljs.core.nth.call(null,vec__27855,(0),null);
var seen = cljs.core.nth.call(null,vec__27855,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(!(cljs.core.contains_QMARK_.call(null,seen,in_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;
taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var args27864 = [];
var len__23044__auto___27867 = arguments.length;
var i__23045__auto___27868 = (0);
while(true){
if((i__23045__auto___27868 < len__23044__auto___27867)){
args27864.push((arguments[i__23045__auto___27868]));

var G__27869 = (i__23045__auto___27868 + (1));
i__23045__auto___27868 = G__27869;
continue;
} else {
}
break;
}

var G__27866 = args27864.length;
switch (G__27866) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27864.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.call(null);
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__27871 = null;
var G__27871__0 = (function (){
return rf.call(null);
});
var G__27871__1 = (function (acc){
return rf.call(null,acc);
});
var G__27871__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_.call(null,seen_,cljs.core.conj.call(null,cljs.core._deref.call(null,seen_),k));

return rf.call(null,acc,input);
}
});
G__27871 = function(acc,input){
switch(arguments.length){
case 0:
return G__27871__0.call(this);
case 1:
return G__27871__1.call(this,acc);
case 2:
return G__27871__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27871.cljs$core$IFn$_invoke$arity$0 = G__27871__0;
G__27871.cljs$core$IFn$_invoke$arity$1 = G__27871__1;
G__27871.cljs$core$IFn$_invoke$arity$2 = G__27871__2;
return G__27871;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;
/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27874 = arguments.length;
var i__23045__auto___27875 = (0);
while(true){
if((i__23045__auto___27875 < len__23044__auto___27874)){
args__23051__auto__.push((arguments[i__23045__auto___27875]));

var G__27876 = (i__23045__auto___27875 + (1));
i__23045__auto___27875 = G__27876;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.key.call(null,e);
var rv = cljs.core.val.call(null,e);
if(!(cljs.core.contains_QMARK_.call(null,m,k))){
return cljs.core.assoc.call(null,m,k,rv);
} else {
var lv = cljs.core.get.call(null,m,k);
if((cljs.core.map_QMARK_.call(null,lv)) && (cljs.core.map_QMARK_.call(null,rv))){
return cljs.core.assoc.call(null,m,k,taoensso.encore.nested_merge_with.call(null,f,lv,rv));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,lv,rv));
}
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__21986__auto__ = m1;
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});})(merge_entry))
;
return cljs.core.reduce.call(null,merge2,maps);
} else {
return null;
}
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq27872){
var G__27873 = cljs.core.first.call(null,seq27872);
var seq27872__$1 = cljs.core.next.call(null,seq27872);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__27873,seq27872__$1);
});
taoensso.encore.nested_merge = cljs.core.partial.call(null,taoensso.encore.nested_merge_with,(function (x,y){
if((cljs.core.map_QMARK_.call(null,x)) && ((y == null))){
return x;
} else {
return y;
}
}));
taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27883 = arguments.length;
var i__23045__auto___27884 = (0);
while(true){
if((i__23045__auto___27884 < len__23044__auto___27883)){
args__23051__auto__.push((arguments[i__23045__auto___27884]));

var G__27885 = (i__23045__auto___27884 + (1));
i__23045__auto___27884 = G__27885;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__27881){
var vec__27882 = p__27881;
var _QMARK_comparator = cljs.core.nth.call(null,vec__27882,(0),null);
var comparator = (function (){var or__21986__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__27882,_QMARK_comparator){
return (function (p1__27877_SHARP_,p2__27878_SHARP_){
if((comparator.call(null,p1__27877_SHARP_,p2__27878_SHARP_) > (0))){
return p2__27878_SHARP_;
} else {
return p1__27877_SHARP_;
}
});})(comparator,vec__27882,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq27879){
var G__27880 = cljs.core.first.call(null,seq27879);
var seq27879__$1 = cljs.core.next.call(null,seq27879);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__27880,seq27879__$1);
});
taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27892 = arguments.length;
var i__23045__auto___27893 = (0);
while(true){
if((i__23045__auto___27893 < len__23044__auto___27892)){
args__23051__auto__.push((arguments[i__23045__auto___27893]));

var G__27894 = (i__23045__auto___27893 + (1));
i__23045__auto___27893 = G__27894;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__27890){
var vec__27891 = p__27890;
var _QMARK_comparator = cljs.core.nth.call(null,vec__27891,(0),null);
var comparator = (function (){var or__21986__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__27891,_QMARK_comparator){
return (function (p1__27886_SHARP_,p2__27887_SHARP_){
if((comparator.call(null,p1__27886_SHARP_,p2__27887_SHARP_) < (0))){
return p2__27887_SHARP_;
} else {
return p1__27886_SHARP_;
}
});})(comparator,vec__27891,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq27888){
var G__27889 = cljs.core.first.call(null,seq27888);
var seq27888__$1 = cljs.core.next.call(null,seq27888);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__27889,seq27888__$1);
});
/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((coll instanceof clojure.lang.IEditableCollection)){
var v = cljs.core.transient$.call(null,coll);
var idx = (0);
while(true){
if((idx >= n)){
return cljs.core.persistent_BANG_.call(null,v);
} else {
var G__27895 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__27896 = (idx + (1));
v = G__27895;
idx = G__27896;
continue;
}
break;
}
} else {
var v = coll;
var idx = (0);
while(true){
if((idx >= n)){
return v;
} else {
var G__27897 = cljs.core.conj.call(null,v,f.call(null));
var G__27898 = (idx + (1));
v = G__27897;
idx = G__27898;
continue;
}
break;
}
}
});
taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});
taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,xs));
});
taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.undefined__GT_nil,xs));
});
taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__21986__auto__ = fmt;
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
});
/**
 * Like `clojure.core/format` but:
 *  * Returns "" when fmt is nil rather than throwing an NPE.
 *  * Formats nil as "nil" rather than "null".
 *  * Provides ClojureScript support via goog.string.format (this has fewer
 *    formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27901 = arguments.length;
var i__23045__auto___27902 = (0);
while(true){
if((i__23045__auto___27902 < len__23044__auto___27901)){
args__23051__auto__.push((arguments[i__23045__auto___27902]));

var G__27903 = (i__23045__auto___27902 + (1));
i__23045__auto___27902 = G__27903;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq27899){
var G__27900 = cljs.core.first.call(null,seq27899);
var seq27899__$1 = cljs.core.next.call(null,seq27899);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__27900,seq27899__$1);
});
/**
 * Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *                http://dev.clojure.org/jira/browse/CLJS-911.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
var replacement__$1 = ((!(cljs.core.fn_QMARK_.call(null,replacement)))?replacement:(function() { 
var G__27904__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__27904 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27905__i = 0, G__27905__a = new Array(arguments.length -  0);
while (G__27905__i < G__27905__a.length) {G__27905__a[G__27905__i] = arguments[G__27905__i + 0]; ++G__27905__i;}
  args = new cljs.core.IndexedSeq(G__27905__a,0);
} 
return G__27904__delegate.call(this,args);};
G__27904.cljs$lang$maxFixedArity = 0;
G__27904.cljs$lang$applyTo = (function (arglist__27906){
var args = cljs.core.seq(arglist__27906);
return G__27904__delegate(args);
});
G__27904.cljs$core$IFn$_invoke$arity$variadic = G__27904__delegate;
return G__27904;
})()
);
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement__$1);
} else {
if((match instanceof RegExp)){
var flags = [cljs.core.str("g"),cljs.core.str((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str((cljs.core.truth_(match.multiline)?"m":null))].join('');
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');

}
}
});
/**
 * Gives a consistent, flexible, cross-platform substring API built on
 *   `sub-indexes`.
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27913 = arguments.length;
var i__23045__auto___27914 = (0);
while(true){
if((i__23045__auto___27914 < len__23044__auto___27913)){
args__23051__auto__.push((arguments[i__23045__auto___27914]));

var G__27915 = (i__23045__auto___27914 + (1));
i__23045__auto___27914 = G__27915;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((2) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((2)),(0))):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23052__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__27910){
var vec__27911 = p__27910;
var _QMARK_max_len = cljs.core.nth.call(null,vec__27911,(0),null);
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (vec__27911,_QMARK_max_len){
return (function (){
return s;
});})(vec__27911,_QMARK_max_len))
,null)),new cljs.core.Symbol(null,"s","s",-948495851,null),cljs.core.string_QMARK_,new cljs.core.Symbol(null,"string?","string?",-1129175764,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"s","s",-948495851,null))))].join('')));
}

var vec__27912 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__27912,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__27912,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq27907){
var G__27908 = cljs.core.first.call(null,seq27907);
var seq27907__$1 = cljs.core.next.call(null,seq27907);
var G__27909 = cljs.core.first.call(null,seq27907__$1);
var seq27907__$2 = cljs.core.next.call(null,seq27907__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__27908,G__27909,seq27907__$2);
});
taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27921 = arguments.length;
var i__23045__auto___27922 = (0);
while(true){
if((i__23045__auto___27922 < len__23044__auto___27921)){
args__23051__auto__.push((arguments[i__23045__auto___27922]));

var G__27923 = (i__23045__auto___27922 + (1));
i__23045__auto___27922 = G__27923;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((2) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((2)),(0))):null);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23052__auto__);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic = (function (s,substr,p__27919){
var vec__27920 = p__27919;
var start_idx = cljs.core.nth.call(null,vec__27920,(0),null);
var last_QMARK_ = cljs.core.nth.call(null,vec__27920,(1),null);
var start_idx__$1 = ((function (){var or__21986__auto__ = start_idx;
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return (0);
}
})() | (0));
var result = ((cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx__$1):s.indexOf(substr,start_idx__$1)) | (0));
if(cljs.core.not_EQ_.call(null,result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = (2);

taoensso.encore.str__QMARK_index.cljs$lang$applyTo = (function (seq27916){
var G__27917 = cljs.core.first.call(null,seq27916);
var seq27916__$1 = cljs.core.next.call(null,seq27916);
var G__27918 = cljs.core.first.call(null,seq27916__$1);
var seq27916__$2 = cljs.core.next.call(null,seq27916__$1);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic(G__27917,G__27918,seq27916__$2);
});
/**
 * Like `clojure.string/join` but ensures no double separators.
 */
taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27926 = arguments.length;
var i__23045__auto___27927 = (0);
while(true){
if((i__23045__auto___27927 < len__23044__auto___27926)){
args__23051__auto__.push((arguments[i__23045__auto___27927]));

var G__27928 = (i__23045__auto___27927 + (1));
i__23045__auto___27927 = G__27928;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (separator,coll){
return cljs.core.reduce.call(null,(function (s1,s2){
var s1__$1 = [cljs.core.str(s1)].join('');
var s2__$1 = [cljs.core.str(s2)].join('');
if(cljs.core.truth_(taoensso.encore.str_ends_with_QMARK_.call(null,s1__$1,separator))){
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1.substring((1)))].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
}
} else {
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
if((cljs.core._EQ_.call(null,s1__$1,"")) || (cljs.core._EQ_.call(null,s2__$1,""))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(separator),cljs.core.str(s2__$1)].join('');
}
}
}
}),null,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq27924){
var G__27925 = cljs.core.first.call(null,seq27924);
var seq27924__$1 = cljs.core.next.call(null,seq27924);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__27925,seq27924__$1);
});
/**
 * Joins string paths (URLs, file paths, etc.) ensuring correct "/"
 *   interposition.
 */
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27930 = arguments.length;
var i__23045__auto___27931 = (0);
while(true){
if((i__23045__auto___27931 < len__23044__auto___27930)){
args__23051__auto__.push((arguments[i__23045__auto___27931]));

var G__27932 = (i__23045__auto___27931 + (1));
i__23045__auto___27931 = G__27932;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((0) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((0)),(0))):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__23052__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return cljs.core.apply.call(null,taoensso.encore.join_once,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq27929){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27929));
});
/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_.call(null,s)){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var args27933 = [];
var len__23044__auto___27936 = arguments.length;
var i__23045__auto___27937 = (0);
while(true){
if((i__23045__auto___27937 < len__23044__auto___27936)){
args27933.push((arguments[i__23045__auto___27937]));

var G__27938 = (i__23045__auto___27937 + (1));
i__23045__auto___27937 = G__27938;
continue;
} else {
}
break;
}

var G__27935 = args27933.length;
switch (G__27935) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27933.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.substr.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int.call(null,(15)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int.call(null,(14)))).toString((16));
return [cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str("4"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(rhex),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null))].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;
taoensso.encore.gc_rate = (1.0 / (16000));
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(){
return (cljs.core.rand.call(null) <= taoensso.encore.gc_rate);
});
/**
 * Swaps associative value at key and returns the new value.
 *   Specialized, fast `swap-in!` for use mostly by memoization utils.
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(atom_,k,f){
while(true){
var old_m = cljs.core.deref.call(null,atom_);
var new_v = f.call(null,cljs.core.get.call(null,old_m,k));
var new_m = cljs.core.assoc.call(null,old_m,k,new_v);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,atom_,old_m,new_m))){
return new_v;
} else {
continue;
}
break;
}
});
/**
 * As `clojure.core/memoize` but uses delays to avoid write races.
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__27940__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__21986__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args,((function (or__21986__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__21986__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__21986__auto__,cache_))
,null));
}
});})(or__21986__auto__,cache_))
);
}
})());
};
var G__27940 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27941__i = 0, G__27941__a = new Array(arguments.length -  0);
while (G__27941__i < G__27941__a.length) {G__27941__a[G__27941__i] = arguments[G__27941__i + 0]; ++G__27941__i;}
  args = new cljs.core.IndexedSeq(G__27941__a,0);
} 
return G__27940__delegate.call(this,args);};
G__27940.cljs$lang$maxFixedArity = 0;
G__27940.cljs$lang$applyTo = (function (arglist__27942){
var args = cljs.core.seq(arglist__27942);
return G__27940__delegate(args);
});
G__27940.cljs$core$IFn$_invoke$arity$variadic = G__27940__delegate;
return G__27940;
})()
;
;})(cache_))
});
/**
 * Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize1 = (function taoensso$encore$memoize1(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__27943__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__21986__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,cache_,((function (or__21986__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (or__21986__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__21986__auto__,cache_))
,null))], true, false);
}
});})(or__21986__auto__,cache_))
),args);
}
})());
};
var G__27943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27944__i = 0, G__27944__a = new Array(arguments.length -  0);
while (G__27944__i < G__27944__a.length) {G__27944__a[G__27944__i] = arguments[G__27944__i + 0]; ++G__27944__i;}
  args = new cljs.core.IndexedSeq(G__27944__a,0);
} 
return G__27943__delegate.call(this,args);};
G__27943.cljs$lang$maxFixedArity = 0;
G__27943.cljs$lang$applyTo = (function (arglist__27945){
var args = cljs.core.seq(arglist__27945);
return G__27943__delegate(args);
});
G__27943.cljs$core$IFn$_invoke$arity$variadic = G__27943__delegate;
return G__27943;
})()
;
;})(cache_))
});
/**
 * Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
 *   and immediately applies memoized f to given arguments.
 */
taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__23051__auto__ = [];
var len__23044__auto___27950 = arguments.length;
var i__23045__auto___27951 = (0);
while(true){
if((i__23045__auto___27951 < len__23044__auto___27950)){
args__23051__auto__.push((arguments[i__23045__auto___27951]));

var G__27952 = (i__23045__auto___27951 + (1));
i__23045__auto___27951 = G__27952;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((2) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((2)),(0))):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23052__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.not.call(null,cache)){
return cljs.core.apply.call(null,f,args);
} else {
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args,(function (p1__27946_SHARP_){
if(cljs.core.truth_(p1__27946_SHARP_)){
return p1__27946_SHARP_;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq27947){
var G__27948 = cljs.core.first.call(null,seq27947);
var seq27947__$1 = cljs.core.next.call(null,seq27947);
var G__27949 = cljs.core.first.call(null,seq27947__$1);
var seq27947__$2 = cljs.core.next.call(null,seq27947__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__27948,G__27949,seq27947__$2);
});
/**
 * Like `clojure.core/memoize` but:
 *  * Uses delays to prevent race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` option.
 *  * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 *  * Supports cache size limit & gc with `cache-size` option.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args27955 = [];
var len__23044__auto___27978 = arguments.length;
var i__23045__auto___27979 = (0);
while(true){
if((i__23045__auto___27979 < len__23044__auto___27978)){
args27955.push((arguments[i__23045__auto___27979]));

var G__27980 = (i__23045__auto___27979 + (1));
i__23045__auto___27979 = G__27980;
continue;
} else {
}
break;
}

var G__27957 = args27955.length;
switch (G__27957) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27955.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__27982__delegate = function (p__27958){
var vec__27959 = p__27958;
var arg1 = cljs.core.nth.call(null,vec__27959,(0),null);
var argn = cljs.core.nthnext.call(null,vec__27959,(1));
var args = vec__27959;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
return cljs.core.deref.call(null,(function (){var or__21986__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args__$1);
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args__$1,((function (or__21986__auto__,fresh_QMARK_,args__$1,vec__27959,arg1,argn,args,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_((function (){var and__21974__auto__ = _QMARK_dv;
if(cljs.core.truth_(and__21974__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__21974__auto__;
}
})())){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__21986__auto__,fresh_QMARK_,args__$1,vec__27959,arg1,argn,args,cache_){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(or__21986__auto__,fresh_QMARK_,args__$1,vec__27959,arg1,argn,args,cache_))
,null));
}
});})(or__21986__auto__,fresh_QMARK_,args__$1,vec__27959,arg1,argn,args,cache_))
);
}
})());
}
};
var G__27982 = function (var_args){
var p__27958 = null;
if (arguments.length > 0) {
var G__27983__i = 0, G__27983__a = new Array(arguments.length -  0);
while (G__27983__i < G__27983__a.length) {G__27983__a[G__27983__i] = arguments[G__27983__i + 0]; ++G__27983__i;}
  p__27958 = new cljs.core.IndexedSeq(G__27983__a,0);
} 
return G__27982__delegate.call(this,p__27958);};
G__27982.cljs$lang$maxFixedArity = 0;
G__27982.cljs$lang$applyTo = (function (arglist__27984){
var p__27958 = cljs.core.seq(arglist__27984);
return G__27982__delegate(p__27958);
});
G__27982.cljs$core$IFn$_invoke$arity$variadic = G__27982__delegate;
return G__27982;
})()
;
;})(cache_))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return ttl_ms;
}),null)),new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)], null));


var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache){
return (function() { 
var G__27985__delegate = function (p__27960){
var vec__27961 = p__27960;
var arg1 = cljs.core.nth.call(null,vec__27961,(0),null);
var argn = cljs.core.nthnext.call(null,vec__27961,(1));
var args = vec__27961;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.gc_now_QMARK_.call(null))){
var instant_27986 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,cache,((function (instant_27986,vec__27961,arg1,argn,args,cache){
return (function (m){
return cljs.core.reduce_kv.call(null,((function (instant_27986,vec__27961,arg1,argn,args,cache){
return (function (m_STAR_,k,p__27962){
var vec__27963 = p__27962;
var dv = cljs.core.nth.call(null,vec__27963,(0),null);
var udt = cljs.core.nth.call(null,vec__27963,(1),null);
var cv = vec__27963;
if(((instant_27986 - udt) > ttl_ms)){
return m_STAR_;
} else {
return cljs.core.assoc.call(null,m_STAR_,k,cv);
}
});})(instant_27986,vec__27961,arg1,argn,args,cache))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m));
});})(instant_27986,vec__27961,arg1,argn,args,cache))
);
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var instant = taoensso.encore.now_udt.call(null);
var vec__27964 = taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__27961,arg1,argn,args,cache){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__21974__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__21974__auto__)){
var and__21974__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__21974__auto____$1){
var vec__27966 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__27966,(0),null);
var udt = cljs.core.nth.call(null,vec__27966,(1),null);
return ((instant - udt) < ttl_ms);
} else {
return and__21974__auto____$1;
}
} else {
return and__21974__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__27961,arg1,argn,args,cache){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__27961,arg1,argn,args,cache))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__27961,arg1,argn,args,cache))
);
var dv = cljs.core.nth.call(null,vec__27964,(0),null);
return cljs.core.deref.call(null,dv);
}
};
var G__27985 = function (var_args){
var p__27960 = null;
if (arguments.length > 0) {
var G__27987__i = 0, G__27987__a = new Array(arguments.length -  0);
while (G__27987__i < G__27987__a.length) {G__27987__a[G__27987__i] = arguments[G__27987__i + 0]; ++G__27987__i;}
  p__27960 = new cljs.core.IndexedSeq(G__27987__a,0);
} 
return G__27985__delegate.call(this,p__27960);};
G__27985.cljs$lang$maxFixedArity = 0;
G__27985.cljs$lang$applyTo = (function (arglist__27988){
var p__27960 = cljs.core.seq(arglist__27988);
return G__27985__delegate(p__27960);
});
G__27985.cljs$core$IFn$_invoke$arity$variadic = G__27985__delegate;
return G__27985;
})()
;
;})(cache))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return ttl_ms;
}),null)),new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)], null));


taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return cache_size;
}),null)),new cljs.core.Symbol(null,"cache-size","cache-size",1049002054,null),taoensso.encore.pos_int_QMARK_,new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null));


var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
return ((function (state){
return (function() { 
var G__27989__delegate = function (p__27967){
var vec__27968 = p__27967;
var arg1 = cljs.core.nth.call(null,vec__27968,(0),null);
var argn = cljs.core.nthnext.call(null,vec__27968,(1));
var args = vec__27968;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,argn);
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.gc_now_QMARK_.call(null))){
var instant_27990 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,state,((function (instant_27990,vec__27968,arg1,argn,args,state){
return (function (m){
var m_STAR_ = cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976));
var m_STAR___$1 = ((cljs.core.not.call(null,ttl_ms))?m_STAR_:cljs.core.reduce_kv.call(null,((function (m_STAR_,instant_27990,vec__27968,arg1,argn,args,state){
return (function (m_STAR___$1,k,p__27969){
var vec__27970 = p__27969;
var dv = cljs.core.nth.call(null,vec__27970,(0),null);
var udt = cljs.core.nth.call(null,vec__27970,(1),null);
var _ = cljs.core.nth.call(null,vec__27970,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__27970,(3),null);
var cv = vec__27970;
if(((instant_27990 - udt) > ttl_ms)){
return m_STAR___$1;
} else {
return cljs.core.assoc.call(null,m_STAR___$1,k,cv);
}
});})(m_STAR_,instant_27990,vec__27968,arg1,argn,args,state))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m_STAR_)));
var n_to_prune = (cljs.core.count.call(null,m_STAR___$1) - cache_size);
var m_STAR___$2 = ((!((n_to_prune > (0))))?m_STAR___$1:cljs.core.apply.call(null,cljs.core.dissoc,m_STAR___$1,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_27990,vec__27968,arg1,argn,args,state){
return (function (p1__27954_SHARP_){
return cljs.core.nth.call(null,p1__27954_SHARP_,(1));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_27990,vec__27968,arg1,argn,args,state))
,cljs.core.take.call(null,n_to_prune,cljs.core.sort_by.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_27990,vec__27968,arg1,argn,args,state){
return (function (p1__27953_SHARP_){
return cljs.core.nth.call(null,p1__27953_SHARP_,(0));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_27990,vec__27968,arg1,argn,args,state))
,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_27990,vec__27968,arg1,argn,args,state){
return (function (k){
var vec__27971 = m_STAR___$1.call(null,k);
var _ = cljs.core.nth.call(null,vec__27971,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__27971,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__27971,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__27971,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tick_lru + tick_lfu),k], null);
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_27990,vec__27968,arg1,argn,args,state))
,cljs.core.keys.call(null,m_STAR___$1)))))));
return cljs.core.assoc.call(null,m_STAR___$2,new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(m));
});})(instant_27990,vec__27968,arg1,argn,args,state))
);
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var _QMARK_instant = (cljs.core.truth_(ttl_ms)?taoensso.encore.now_udt.call(null):null);
var tick_SINGLEQUOTE_ = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var vec__27972 = taoensso.encore.swap_val_BANG_.call(null,state,args__$1,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__27968,arg1,argn,args,state){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__21974__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__21974__auto__)){
var and__21974__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__21974__auto____$1){
var or__21986__auto__ = (_QMARK_instant == null);
if(or__21986__auto__){
return or__21986__auto__;
} else {
var vec__27976 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__27976,(0),null);
var udt = cljs.core.nth.call(null,vec__27976,(1),null);
return ((_QMARK_instant - udt) < ttl_ms);
}
} else {
return and__21974__auto____$1;
}
} else {
return and__21974__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__27968,arg1,argn,args,state){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__27968,arg1,argn,args,state))
,null)),_QMARK_instant,tick_SINGLEQUOTE_,(1)], null);
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__27968,arg1,argn,args,state))
);
var dv = cljs.core.nth.call(null,vec__27972,(0),null);
cljs.core.swap_BANG_.call(null,state,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__27972,dv,vec__27968,arg1,argn,args,state){
return (function (m){
var temp__4425__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__27977 = temp__4425__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__27977,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__27977,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__27977,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__27977,(3),null);
var cv = vec__27977;
return cljs.core.merge.call(null,m,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tick","tick",-835886976),(tick_SINGLEQUOTE_ + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick_SINGLEQUOTE_,(tick_lfu + (1))], null)], true, false));
} else {
return null;
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__27972,dv,vec__27968,arg1,argn,args,state))
);

return cljs.core.deref.call(null,dv);
}
};
var G__27989 = function (var_args){
var p__27967 = null;
if (arguments.length > 0) {
var G__27991__i = 0, G__27991__a = new Array(arguments.length -  0);
while (G__27991__i < G__27991__a.length) {G__27991__a[G__27991__i] = arguments[G__27991__i + 0]; ++G__27991__i;}
  p__27967 = new cljs.core.IndexedSeq(G__27991__a,0);
} 
return G__27989__delegate.call(this,p__27967);};
G__27989.cljs$lang$maxFixedArity = 0;
G__27989.cljs$lang$applyTo = (function (arglist__27992){
var p__27967 = cljs.core.seq(arglist__27992);
return G__27989__delegate(p__27967);
});
G__27989.cljs$core$IFn$_invoke$arity$variadic = G__27989__delegate;
return G__27989;
})()
;
;})(state))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Takes one or more rate specs of form [ncalls-limit window-ms ?spec-id] and
 *   returns a (fn [& [req-id])) that returns `nil` (=> all rate limits passed), or
 *   [<ms-wait> <worst-offending-spec-id>] / <ms-wait>.
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
if(cljs.core.empty_QMARK_.call(null,specs)){
return cljs.core.constantly.call(null,null);
} else {
var vspecs = cljs.core.vec.call(null,specs);
var vstates_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var max_win_ms = cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.mapv.call(null,((function (vspecs,vstates_){
return (function (p__28028){
var vec__28029 = p__28028;
var _ = cljs.core.nth.call(null,vec__28029,(0),null);
var win_ms = cljs.core.nth.call(null,vec__28029,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__28029,(2),null);
var spec = vec__28029;
return win_ms;
});})(vspecs,vstates_))
,vspecs));
var nspecs = cljs.core.count.call(null,vspecs);
var nid_specs = cljs.core.count.call(null,cljs.core.filterv.call(null,((function (vspecs,vstates_,max_win_ms,nspecs){
return (function (p__28030){
var vec__28031 = p__28030;
var _ = cljs.core.nth.call(null,vec__28031,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__28031,(1),null);
var id = cljs.core.nth.call(null,vec__28031,(2),null);
return id;
});})(vspecs,vstates_,max_win_ms,nspecs))
,vspecs));
var _ = ((((nid_specs === (0))) || (cljs.core._EQ_.call(null,nid_specs,nspecs)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"nid-specs","nid-specs",-1204406222,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"nid-specs","nid-specs",-1204406222,null),new cljs.core.Symbol(null,"nspecs","nspecs",-1621596945,null)))))].join('')))})());
var return_ids_QMARK_ = !((nid_specs === (0)));
return ((function (vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function() { 
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate = function (p__28032){
var vec__28048 = p__28032;
var req_id = cljs.core.nth.call(null,vec__28048,(0),null);
var instant = taoensso.encore.now_udt.call(null);
if(cljs.core.truth_((function (){var and__21974__auto__ = req_id;
if(cljs.core.truth_(and__21974__auto__)){
return taoensso.encore.gc_now_QMARK_.call(null);
} else {
return and__21974__auto__;
}
})())){
taoensso.encore.swap_in_BANG_.call(null,vstates_,cljs.core.PersistentVector.EMPTY,((function (instant,vec__28048,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function taoensso$encore$rate_limiter_STAR__$_check_rate_limits_$_gc(m){
var m__$1 = taoensso.encore.clj1098.call(null,m);
return cljs.core.reduce_kv.call(null,((function (m__$1,instant,vec__28048,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (m_STAR_,req_id__$1,vstate){
var max_udt_win_start = cljs.core.reduce.call(null,((function (m__$1,instant,vec__28048,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (acc,p__28051){
var vec__28052 = p__28051;
var ___$1 = cljs.core.nth.call(null,vec__28052,(0),null);
var udt = cljs.core.nth.call(null,vec__28052,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__28052,(2),null);
var x__22317__auto__ = acc;
var y__22318__auto__ = udt;
return ((x__22317__auto__ > y__22318__auto__) ? x__22317__auto__ : y__22318__auto__);
});})(m__$1,instant,vec__28048,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,(0),vstate);
var min_win_ms_elapsed = (instant - max_udt_win_start);
if((min_win_ms_elapsed > max_win_ms)){
return cljs.core.dissoc.call(null,m_STAR_,req_id__$1);
} else {
return m_STAR_;
}
});})(m__$1,instant,vec__28048,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,m__$1,m__$1);
});})(instant,vec__28048,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
} else {
}

return taoensso.encore.swap_in_BANG_.call(null,vstates_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_id], null),((function (instant,vec__28048,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (_QMARK_vstate){
if(cljs.core.not.call(null,_QMARK_vstate)){
return taoensso.encore.swapped.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,nspecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),instant], null))),null);
} else {
var vec__28053 = (function (){var in_vspecs = vspecs;
var in_vstate = _QMARK_vstate;
var out_vstate = cljs.core.PersistentVector.EMPTY;
var _QMARK_worst_limit_offence = null;
while(true){
var vec__28054 = in_vspecs;
var vec__28055 = cljs.core.nth.call(null,vec__28054,(0),null);
var ncalls_limit = cljs.core.nth.call(null,vec__28055,(0),null);
var win_ms = cljs.core.nth.call(null,vec__28055,(1),null);
var _QMARK_spec_id = cljs.core.nth.call(null,vec__28055,(2),null);
var next_in_vspecs = cljs.core.nthnext.call(null,vec__28054,(1));
var vec__28056 = in_vstate;
var vec__28057 = cljs.core.nth.call(null,vec__28056,(0),null);
var ncalls = cljs.core.nth.call(null,vec__28057,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__28057,(1),null);
var next_in_vstate = cljs.core.nthnext.call(null,vec__28056,(1));
var win_ms_elapsed = (instant - udt_win_start);
var reset_due_QMARK_ = (win_ms_elapsed >= win_ms);
var rate_limited_QMARK_ = (!(reset_due_QMARK_)) && ((ncalls >= ncalls_limit));
var new_out_vstate = cljs.core.conj.call(null,out_vstate,((reset_due_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),instant], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls,udt_win_start], null)));
var new__QMARK_worst_limit_offence = ((!(rate_limited_QMARK_))?_QMARK_worst_limit_offence:(function (){var ms_wait = (win_ms - win_ms_elapsed);
if((function (){var or__21986__auto__ = (_QMARK_worst_limit_offence == null);
if(or__21986__auto__){
return or__21986__auto__;
} else {
var vec__28059 = _QMARK_worst_limit_offence;
var max_ms_wait = cljs.core.nth.call(null,vec__28059,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__28059,(1),null);
return (ms_wait > max_ms_wait);
}
})()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms_wait,_QMARK_spec_id], null);
} else {
return _QMARK_worst_limit_offence;
}
})());
if(cljs.core.not.call(null,next_in_vspecs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_out_vstate,new__QMARK_worst_limit_offence], null);
} else {
var G__28063 = next_in_vspecs;
var G__28064 = next_in_vstate;
var G__28065 = new_out_vstate;
var G__28066 = new__QMARK_worst_limit_offence;
in_vspecs = G__28063;
in_vstate = G__28064;
out_vstate = G__28065;
_QMARK_worst_limit_offence = G__28066;
continue;
}
break;
}
})();
var vstate_with_resets = cljs.core.nth.call(null,vec__28053,(0),null);
var _QMARK_worst_limit_offence = cljs.core.nth.call(null,vec__28053,(1),null);
var all_limits_pass_QMARK_ = (_QMARK_worst_limit_offence == null);
var new_vstate = ((!(all_limits_pass_QMARK_))?vstate_with_resets:cljs.core.mapv.call(null,((function (vec__28053,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,instant,vec__28048,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (p__28060){
var vec__28061 = p__28060;
var ncalls = cljs.core.nth.call(null,vec__28061,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__28061,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ncalls + (1)),udt_win_start], null);
});})(vec__28053,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,instant,vec__28048,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,vstate_with_resets));
var result = (function (){var temp__4425__auto__ = _QMARK_worst_limit_offence;
if(cljs.core.truth_(temp__4425__auto__)){
var wlo = temp__4425__auto__;
if(return_ids_QMARK_){
return wlo;
} else {
var vec__28062 = wlo;
var ms_wait = cljs.core.nth.call(null,vec__28062,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__28062,(1),null);
return ms_wait;
}
} else {
return null;
}
})();
return taoensso.encore.swapped.call(null,new_vstate,result);
}
});})(instant,vec__28048,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
};
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits = function (var_args){
var p__28032 = null;
if (arguments.length > 0) {
var G__28067__i = 0, G__28067__a = new Array(arguments.length -  0);
while (G__28067__i < G__28067__a.length) {G__28067__a[G__28067__i] = arguments[G__28067__i + 0]; ++G__28067__i;}
  p__28032 = new cljs.core.IndexedSeq(G__28067__a,0);
} 
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate.call(this,p__28032);};
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$maxFixedArity = 0;
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$applyTo = (function (arglist__28068){
var p__28032 = cljs.core.seq(arglist__28068);
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate(p__28032);
});
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate;
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits;
})()
;
;})(vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
}
});
taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,specs);
return ((function (rl){
return (function() { 
var G__28069__delegate = function (args){
var temp__4423__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var backoff = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__28069 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28070__i = 0, G__28070__a = new Array(arguments.length -  0);
while (G__28070__i < G__28070__a.length) {G__28070__a[G__28070__i] = arguments[G__28070__i + 0]; ++G__28070__i;}
  args = new cljs.core.IndexedSeq(G__28070__a,0);
} 
return G__28069__delegate.call(this,args);};
G__28069.cljs$lang$maxFixedArity = 0;
G__28069.cljs$lang$applyTo = (function (arglist__28071){
var args = cljs.core.seq(arglist__28071);
return G__28069__delegate(args);
});
G__28069.cljs$core$IFn$_invoke$arity$variadic = G__28069__delegate;
return G__28069;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4423__auto__ = (function (){var and__21974__auto__ = typeof window !== 'undefined';
if(and__21974__auto__){
return (window["performance"]);
} else {
return and__21974__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var perf = temp__4423__auto__;
var temp__4423__auto____$1 = (function (){var or__21986__auto__ = (perf["now"]);
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
var or__21986__auto____$1 = (perf["mozNow"]);
if(cljs.core.truth_(or__21986__auto____$1)){
return or__21986__auto____$1;
} else {
var or__21986__auto____$2 = (perf["msNow"]);
if(cljs.core.truth_(or__21986__auto____$2)){
return or__21986__auto____$2;
} else {
var or__21986__auto____$3 = (perf["oNow"]);
if(cljs.core.truth_(or__21986__auto____$3)){
return or__21986__auto____$3;
} else {
return (perf["webkitNow"]);
}
}
}
}
})();
if(cljs.core.truth_(temp__4423__auto____$1)){
var f = temp__4423__auto____$1;
return ((function (f,temp__4423__auto____$1,perf,temp__4423__auto__){
return (function (){
return cljs.core.long$.call(null,(1000000.0 * f.call(perf)));
});
;})(f,temp__4423__auto____$1,perf,temp__4423__auto__))
} else {
return ((function (temp__4423__auto____$1,perf,temp__4423__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4423__auto____$1,perf,temp__4423__auto__))
}
} else {
return ((function (temp__4423__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4423__auto__))
}
})();
taoensso.encore.console_log = (function (){var temp__4423__auto__ = (function (){var and__21974__auto__ = typeof console !== 'undefined';
if(and__21974__auto__){
return console.log;
} else {
return and__21974__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return ((function (f,temp__4423__auto__){
return (function (xs){
return f.apply(console,cljs.core.into_array.call(null,xs));
});
;})(f,temp__4423__auto__))
} else {
return ((function (temp__4423__auto__){
return (function (xs){
return null;
});
;})(temp__4423__auto__))
}
})();

taoensso.encore.log = (function taoensso$encore$log(var_args){
var args__23051__auto__ = [];
var len__23044__auto___28079 = arguments.length;
var i__23045__auto___28080 = (0);
while(true){
if((i__23045__auto___28080 < len__23044__auto___28079)){
args__23051__auto__.push((arguments[i__23045__auto___28080]));

var G__28081 = (i__23045__auto___28080 + (1));
i__23045__auto___28080 = G__28081;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((0) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((0)),(0))):null);
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(argseq__23052__auto__);
});

taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,xs);
});

taoensso.encore.log.cljs$lang$maxFixedArity = (0);

taoensso.encore.log.cljs$lang$applyTo = (function (seq28072){
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28072));
});

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__23051__auto__ = [];
var len__23044__auto___28082 = arguments.length;
var i__23045__auto___28083 = (0);
while(true){
if((i__23045__auto___28083 < len__23044__auto___28082)){
args__23051__auto__.push((arguments[i__23045__auto___28083]));

var G__28084 = (i__23045__auto___28083 + (1));
i__23045__auto___28083 = G__28084;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((0) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((0)),(0))):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__23052__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.spaced_str.call(null,xs)], null));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq28073){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28073));
});

taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__23051__auto__ = [];
var len__23044__auto___28085 = arguments.length;
var i__23045__auto___28086 = (0);
while(true){
if((i__23045__auto___28086 < len__23044__auto___28085)){
args__23051__auto__.push((arguments[i__23045__auto___28086]));

var G__28087 = (i__23045__auto___28086 + (1));
i__23045__auto___28086 = G__28087;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.format_STAR_.call(null,fmt,xs)], null));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq28074){
var G__28075 = cljs.core.first.call(null,seq28074);
var seq28074__$1 = cljs.core.next.call(null,seq28074);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__28075,seq28074__$1);
});

taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__23051__auto__ = [];
var len__23044__auto___28088 = arguments.length;
var i__23045__auto___28089 = (0);
while(true){
if((i__23045__auto___28089 < len__23044__auto___28088)){
args__23051__auto__.push((arguments[i__23045__auto___28089]));

var G__28090 = (i__23045__auto___28089 + (1));
i__23045__auto___28089 = G__28090;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((0) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((0)),(0))):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__23052__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.spaced_str.call(null,xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq28076){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28076));
});

taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__23051__auto__ = [];
var len__23044__auto___28091 = arguments.length;
var i__23045__auto___28092 = (0);
while(true){
if((i__23045__auto___28092 < len__23044__auto___28091)){
args__23051__auto__.push((arguments[i__23045__auto___28092]));

var G__28093 = (i__23045__auto___28092 + (1));
i__23045__auto___28092 = G__28093;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq28077){
var G__28078 = cljs.core.first.call(null,seq28077);
var seq28077__$1 = cljs.core.next.call(null,seq28077);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__28078,seq28077__$1);
});
/**
 * Returns browser window's current location. Forgeable.
 */
taoensso.encore.get_window_location = (function taoensso$encore$get_window_location(){
var loc_STAR_ = window.location;
var loc = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc_STAR_.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc_STAR_.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc_STAR_.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc_STAR_.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc_STAR_.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc_STAR_.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc_STAR_.hash], null);
return loc;
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
 * Returns an immediately available XhrIo instance, or nil. The instance must be
 *   released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
 * [uri method get-or-post-params] -> [uri post-content]
 */
taoensso.encore.coerce_xhr_params = (function taoensso$encore$coerce_xhr_params(uri,method,params){
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return params;
}),null)),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null),new cljs.core.Symbol(null,"params","params",-1943919534,null))))].join('')));
}

var _QMARK_pstr = ((cljs.core.empty_QMARK_.call(null,params))?null:(function (){var s = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
})());
var G__28095 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__28095) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(_QMARK_pstr)].join(''):uri),null], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "put":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
/**
 * Alpha - subject to change.
 *   Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 *   Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey"
 *                :type     "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status  - 200, 404, ..., or nil on no response
 *      ;; ?error   - e/o #{:xhr-pool-depleted :exception :http-error :abort
 *      ;;                  :timeout :no-content <http-error-status> nil}
 *      (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__28099,callback){
var map__28117 = p__28099;
var map__28117__$1 = ((((!((map__28117 == null)))?((((map__28117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28117):map__28117);
var opts = map__28117__$1;
var method = cljs.core.get.call(null,map__28117__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__28117__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__28117__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__28117__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__28117__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__28117__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var progress_fn = cljs.core.get.call(null,map__28117__$1,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
var errorf = cljs.core.get.call(null,map__28117__$1,new cljs.core.Keyword(null,"errorf","errorf",-620376044),taoensso.encore.logf);
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (map__28117,map__28117__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (){
return timeout_ms;
});})(map__28117,map__28117__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
,null)),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null))))].join('')));
}

var temp__4423__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var xhr = temp__4423__auto__;
try{var timeout_ms__$1 = (function (){var or__21986__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__28121 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__28121) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys.call(null,cljs.core.name,params);
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys.call(null,cljs.core.name,headers));
var vec__28120 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__28120,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__28120,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__28122_28135 = xhr;
goog.events.listenOnce(G__28122_28135,goog.net.EventType.READY,((function (G__28122_28135,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__28120,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__28117,map__28117__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__28122_28135,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__28120,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__28117,map__28117__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);

goog.events.listenOnce(G__28122_28135,goog.net.EventType.COMPLETE,((function (G__28122_28135,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__28120,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__28117,map__28117__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var success_QMARK_ = xhr.isSuccess();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__28128 = ((function (status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__28122_28135,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__28120,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__28117,map__28117__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (p1__28098_SHARP_,p2__28097_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__28097_SHARP_,p1__28098_SHARP_);
});})(status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__28122_28135,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__28120,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__28117,map__28117__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
var expr__28129 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__28128.call(null,"/edn",expr__28129))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(pred__28128.call(null,"/json",expr__28129))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(pred__28128.call(null,"/xml",expr__28129))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(cljs.core.truth_(pred__28128.call(null,"/html",expr__28129))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());
try{var G__28132 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__28132) {
case "text":
return xhr.getResponseText();

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "edn":
return cljs.reader.read_string.call(null,xhr.getResponseText());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e28131){if((e28131 instanceof Error)){
var e = e28131;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e28131;

}
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(function (){var or__21986__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if(cljs.core.truth_(success_QMARK_)){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.call(null,cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
if(((_QMARK_content == null)) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(204),null,(1223),null], null), null).call(null,_QMARK_http_status)))){
return new cljs.core.Keyword(null,"no-content","no-content",-1860206018);
} else {
return null;
}
}
})()], null);
return callback.call(null,cb_arg);
});})(G__28122_28135,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__28120,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__28117,map__28117__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);


var temp__4425__auto___28137 = progress_fn;
if(cljs.core.truth_(temp__4425__auto___28137)){
var pf_28138 = temp__4425__auto___28137;
goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf_28138,temp__4425__auto___28137,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__28120,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__28117,map__28117__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__21974__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__21974__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__21974__auto__;
}
})())?(loaded / total):null);
return pf_28138.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf_28138,temp__4425__auto___28137,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__28120,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__28117,map__28117__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);
} else {
}

var G__28133_28139 = xhr;
var temp__4425__auto___28140 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4425__auto___28140)){
var x_28141 = temp__4425__auto___28140;
G__28133_28139.setTimeoutInterval((function (){var or__21986__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return (0);
}
})());
} else {
}

var temp__4425__auto___28142 = with_credentials_QMARK_;
if(cljs.core.truth_(temp__4425__auto___28142)){
var x_28143 = temp__4425__auto___28142;
G__28133_28139.setWithCredentials(true);
} else {
}

var temp__4425__auto___28144 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4425__auto___28144)){
var x_28145 = temp__4425__auto___28144;
G__28133_28139.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);
} else {
}


return xhr;
}catch (e28119){if((e28119 instanceof Error)){
var e = e28119;
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e28119;

}
}} else {
callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1.
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent([cljs.core.str(s)].join(''),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1.
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__23051__auto__ = [];
var len__23044__auto___28150 = arguments.length;
var i__23045__auto___28151 = (0);
while(true){
if((i__23045__auto___28151 < len__23044__auto___28150)){
args__23051__auto__.push((arguments[i__23045__auto___28151]));

var G__28152 = (i__23045__auto___28151 + (1));
i__23045__auto___28151 = G__28152;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__28148){
var vec__28149 = p__28148;
var encoding = cljs.core.nth.call(null,vec__28149,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq28146){
var G__28147 = cljs.core.first.call(null,seq28146);
var seq28146__$1 = cljs.core.next.call(null,seq28146);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__28147,seq28146__$1);
});
taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode.call(null,v))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.call(null,"&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_.call(null,m)){
return null;
} else {
return join.call(null,(function (){var iter__22758__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__28161(s__28162){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__28162__$1 = s__28162;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28162__$1);
if(temp__4425__auto__){
var s__28162__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28162__$2)){
var c__22756__auto__ = cljs.core.chunk_first.call(null,s__28162__$2);
var size__22757__auto__ = cljs.core.count.call(null,c__22756__auto__);
var b__28164 = cljs.core.chunk_buffer.call(null,size__22757__auto__);
if((function (){var i__28163 = (0);
while(true){
if((i__28163 < size__22757__auto__)){
var vec__28167 = cljs.core._nth.call(null,c__22756__auto__,i__28163);
var k = cljs.core.nth.call(null,vec__28167,(0),null);
var v = cljs.core.nth.call(null,vec__28167,(1),null);
cljs.core.chunk_append.call(null,b__28164,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__21986__auto__ = cljs.core.seq.call(null,v);
if(or__21986__auto__){
return or__21986__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__28169 = (i__28163 + (1));
i__28163 = G__28169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28164),taoensso$encore$format_query_string_$_iter__28161.call(null,cljs.core.chunk_rest.call(null,s__28162__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28164),null);
}
} else {
var vec__28168 = cljs.core.first.call(null,s__28162__$2);
var k = cljs.core.nth.call(null,vec__28168,(0),null);
var v = cljs.core.nth.call(null,vec__28168,(1),null);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__21986__auto__ = cljs.core.seq.call(null,v);
if(or__21986__auto__){
return or__21986__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__28161.call(null,cljs.core.rest.call(null,s__28162__$2)));
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__22758__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var temp__4423__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4423__auto__)){
var cur = temp__4423__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__23051__auto__ = [];
var len__23044__auto___28175 = arguments.length;
var i__23045__auto___28176 = (0);
while(true){
if((i__23045__auto___28176 < len__23044__auto___28175)){
args__23051__auto__.push((arguments[i__23045__auto___28176]));

var G__28177 = (i__23045__auto___28176 + (1));
i__23045__auto___28176 = G__28177;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__28172){
var vec__28173 = p__28172;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__28173,(0),null);
var encoding = cljs.core.nth.call(null,vec__28173,(1),null);
var _PERCENT_ = ((clojure.string.blank_QMARK_.call(null,s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?taoensso.encore.substr.call(null,s,(1)):s);
if(cljs.core.not.call(null,taoensso.encore.str_contains_QMARK_.call(null,s__$1,"="))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var m = cljs.core.reduce.call(null,((function (s__$1,vec__28173,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4423__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__28174 = temp__4423__auto__;
var k = cljs.core.nth.call(null,vec__28174,(0),null);
var v = cljs.core.nth.call(null,vec__28174,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__28173,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.not.call(null,keywordize_QMARK_)){
return m;
} else {
return taoensso.encore.keywordize_map.call(null,m);
}
}
})());
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (_PERCENT_,vec__28173,keywordize_QMARK_,encoding){
return (function (){
return _PERCENT_;
});})(_PERCENT_,vec__28173,keywordize_QMARK_,encoding))
,null)),new cljs.core.Symbol(null,"%","%",-950237169,null),cljs.core.map_QMARK_,new cljs.core.Symbol(null,"map?","map?",-1780568534,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))].join('')));
}

return _PERCENT_;
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq28170){
var G__28171 = cljs.core.first.call(null,seq28170);
var seq28170__$1 = cljs.core.next.call(null,seq28170);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__28171,seq28170__$1);
});
taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__28179 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__28179,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__28179,(1),null);
var qmap = cljs.core.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.keywordize_map.call(null,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.keywordize_map.call(null,m));
return [cljs.core.str(url__$1),cljs.core.str((function (){var temp__4425__auto__ = taoensso.encore.format_query_string.call(null,qmap);
if(cljs.core.truth_(temp__4425__auto__)){
var qstr = temp__4425__auto__;
return [cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return null;
}
})())].join('');
});
taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__23051__auto__ = [];
var len__23044__auto___28184 = arguments.length;
var i__23045__auto___28185 = (0);
while(true){
if((i__23045__auto___28185 < len__23044__auto___28184)){
args__23051__auto__.push((arguments[i__23045__auto___28185]));

var G__28186 = (i__23045__auto___28185 + (1));
i__23045__auto___28185 = G__28186;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__28182){
var vec__28183 = p__28182;
var type = cljs.core.nth.call(null,vec__28183,(0),null);
var nplaces = cljs.core.nth.call(null,vec__28183,(1),null);
return taoensso.encore.round_STAR_.call(null,(function (){var or__21986__auto__ = type;
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq28180){
var G__28181 = cljs.core.first.call(null,seq28180);
var seq28180__$1 = cljs.core.next.call(null,seq28180);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__28181,seq28180__$1);
});
taoensso.encore.memoize_1 = taoensso.encore.memoize1;
taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__23051__auto__ = [];
var len__23044__auto___28191 = arguments.length;
var i__23045__auto___28192 = (0);
while(true){
if((i__23045__auto___28192 < len__23044__auto___28191)){
args__23051__auto__.push((arguments[i__23045__auto___28192]));

var G__28193 = (i__23045__auto___28192 + (1));
i__23045__auto___28192 = G__28193;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__28189){
var vec__28190 = p__28189;
var nattempt = cljs.core.nth.call(null,vec__28190,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__21986__auto__ = nattempt;
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return (0);
}
})()));
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq28187){
var G__28188 = cljs.core.first.call(null,seq28187);
var seq28187__$1 = cljs.core.next.call(null,seq28187);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28188,seq28187__$1);
});
taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});
taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});
taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;
taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;
taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;
taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
if(cljs.core.truth_(x)){
return taoensso.encore.hcond.call(null,false,"taoensso.encore",2225,(new cljs.core.Delay((function (){
return taoensso.encore.as__QMARK_bool.call(null,x);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"as-?bool","as-?bool",1645711161,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null));
} else {
return null;
}
});
taoensso.encore.as_int = (function taoensso$encore$as_int(x){
if(cljs.core.truth_(x)){
return taoensso.encore.hcond.call(null,false,"taoensso.encore",2226,(new cljs.core.Delay((function (){
return taoensso.encore.as__QMARK_int.call(null,x);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"as-?int","as-?int",2107097360,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null));
} else {
return null;
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
if(cljs.core.truth_(x)){
return taoensso.encore.hcond.call(null,false,"taoensso.encore",2227,(new cljs.core.Delay((function (){
return taoensso.encore.as__QMARK_float.call(null,x);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"as-?float","as-?float",2124831706,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null));
} else {
return null;
}
});
taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;
taoensso.encore.merge_deep = taoensso.encore.nested_merge;
taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});
taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__28194__delegate = function (args){
var temp__4423__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var backoff_ms = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__28194 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28195__i = 0, G__28195__a = new Array(arguments.length -  0);
while (G__28195__i < G__28195__a.length) {G__28195__a[G__28195__i] = arguments[G__28195__i + 0]; ++G__28195__i;}
  args = new cljs.core.IndexedSeq(G__28195__a,0);
} 
return G__28194__delegate.call(this,args);};
G__28194.cljs$lang$maxFixedArity = 0;
G__28194.cljs$lang$applyTo = (function (arglist__28196){
var args = cljs.core.seq(arglist__28196);
return G__28194__delegate(args);
});
G__28194.cljs$core$IFn$_invoke$arity$variadic = G__28194__delegate;
return G__28194;
})()
;
;})(rl))
});
if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return ((function (__GT_n){
return (function (level){
return (__GT_n.call(null,level) >= __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__23051__auto__ = [];
var len__23044__auto___28211 = arguments.length;
var i__23045__auto___28212 = (0);
while(true){
if((i__23045__auto___28212 < len__23044__auto___28211)){
args__23051__auto__.push((arguments[i__23045__auto___28212]));

var G__28213 = (i__23045__auto___28212 + (1));
i__23045__auto___28212 = G__28213;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq28197){
var G__28198 = cljs.core.first.call(null,seq28197);
var seq28197__$1 = cljs.core.next.call(null,seq28197);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__28198,seq28197__$1);
});

taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__23051__auto__ = [];
var len__23044__auto___28214 = arguments.length;
var i__23045__auto___28215 = (0);
while(true){
if((i__23045__auto___28215 < len__23044__auto___28214)){
args__23051__auto__.push((arguments[i__23045__auto___28215]));

var G__28216 = (i__23045__auto___28215 + (1));
i__23045__auto___28215 = G__28216;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq28199){
var G__28200 = cljs.core.first.call(null,seq28199);
var seq28199__$1 = cljs.core.next.call(null,seq28199);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__28200,seq28199__$1);
});

taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__23051__auto__ = [];
var len__23044__auto___28217 = arguments.length;
var i__23045__auto___28218 = (0);
while(true){
if((i__23045__auto___28218 < len__23044__auto___28217)){
args__23051__auto__.push((arguments[i__23045__auto___28218]));

var G__28219 = (i__23045__auto___28218 + (1));
i__23045__auto___28218 = G__28219;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq28201){
var G__28202 = cljs.core.first.call(null,seq28201);
var seq28201__$1 = cljs.core.next.call(null,seq28201);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__28202,seq28201__$1);
});

taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__23051__auto__ = [];
var len__23044__auto___28220 = arguments.length;
var i__23045__auto___28221 = (0);
while(true){
if((i__23045__auto___28221 < len__23044__auto___28220)){
args__23051__auto__.push((arguments[i__23045__auto___28221]));

var G__28222 = (i__23045__auto___28221 + (1));
i__23045__auto___28221 = G__28222;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("WARN: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq28203){
var G__28204 = cljs.core.first.call(null,seq28203);
var seq28203__$1 = cljs.core.next.call(null,seq28203);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__28204,seq28203__$1);
});

taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__23051__auto__ = [];
var len__23044__auto___28223 = arguments.length;
var i__23045__auto___28224 = (0);
while(true){
if((i__23045__auto___28224 < len__23044__auto___28223)){
args__23051__auto__.push((arguments[i__23045__auto___28224]));

var G__28225 = (i__23045__auto___28224 + (1));
i__23045__auto___28224 = G__28225;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("ERROR: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq28205){
var G__28206 = cljs.core.first.call(null,seq28205);
var seq28205__$1 = cljs.core.next.call(null,seq28205);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__28206,seq28205__$1);
});

taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__23051__auto__ = [];
var len__23044__auto___28226 = arguments.length;
var i__23045__auto___28227 = (0);
while(true){
if((i__23045__auto___28227 < len__23044__auto___28226)){
args__23051__auto__.push((arguments[i__23045__auto___28227]));

var G__28228 = (i__23045__auto___28227 + (1));
i__23045__auto___28227 = G__28228;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("FATAL: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq28207){
var G__28208 = cljs.core.first.call(null,seq28207);
var seq28207__$1 = cljs.core.next.call(null,seq28207);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__28208,seq28207__$1);
});

taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__23051__auto__ = [];
var len__23044__auto___28229 = arguments.length;
var i__23045__auto___28230 = (0);
while(true){
if((i__23045__auto___28230 < len__23044__auto___28229)){
args__23051__auto__.push((arguments[i__23045__auto___28230]));

var G__28231 = (i__23045__auto___28230 + (1));
i__23045__auto___28230 = G__28231;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0))):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq28209){
var G__28210 = cljs.core.first.call(null,seq28209);
var seq28209__$1 = cljs.core.next.call(null,seq28209);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__28210,seq28209__$1);
});

//# sourceMappingURL=encore.js.map