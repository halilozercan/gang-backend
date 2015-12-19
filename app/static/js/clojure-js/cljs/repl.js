// Compiled by ClojureScript 1.7.189 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30227_30241 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30228_30242 = null;
var count__30229_30243 = (0);
var i__30230_30244 = (0);
while(true){
if((i__30230_30244 < count__30229_30243)){
var f_30245 = cljs.core._nth.call(null,chunk__30228_30242,i__30230_30244);
cljs.core.println.call(null,"  ",f_30245);

var G__30246 = seq__30227_30241;
var G__30247 = chunk__30228_30242;
var G__30248 = count__30229_30243;
var G__30249 = (i__30230_30244 + (1));
seq__30227_30241 = G__30246;
chunk__30228_30242 = G__30247;
count__30229_30243 = G__30248;
i__30230_30244 = G__30249;
continue;
} else {
var temp__4425__auto___30250 = cljs.core.seq.call(null,seq__30227_30241);
if(temp__4425__auto___30250){
var seq__30227_30251__$1 = temp__4425__auto___30250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30227_30251__$1)){
var c__22789__auto___30252 = cljs.core.chunk_first.call(null,seq__30227_30251__$1);
var G__30253 = cljs.core.chunk_rest.call(null,seq__30227_30251__$1);
var G__30254 = c__22789__auto___30252;
var G__30255 = cljs.core.count.call(null,c__22789__auto___30252);
var G__30256 = (0);
seq__30227_30241 = G__30253;
chunk__30228_30242 = G__30254;
count__30229_30243 = G__30255;
i__30230_30244 = G__30256;
continue;
} else {
var f_30257 = cljs.core.first.call(null,seq__30227_30251__$1);
cljs.core.println.call(null,"  ",f_30257);

var G__30258 = cljs.core.next.call(null,seq__30227_30251__$1);
var G__30259 = null;
var G__30260 = (0);
var G__30261 = (0);
seq__30227_30241 = G__30258;
chunk__30228_30242 = G__30259;
count__30229_30243 = G__30260;
i__30230_30244 = G__30261;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30262 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21986__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30262);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30262)))?cljs.core.second.call(null,arglists_30262):arglists_30262));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30231 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30232 = null;
var count__30233 = (0);
var i__30234 = (0);
while(true){
if((i__30234 < count__30233)){
var vec__30235 = cljs.core._nth.call(null,chunk__30232,i__30234);
var name = cljs.core.nth.call(null,vec__30235,(0),null);
var map__30236 = cljs.core.nth.call(null,vec__30235,(1),null);
var map__30236__$1 = ((((!((map__30236 == null)))?((((map__30236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30236):map__30236);
var doc = cljs.core.get.call(null,map__30236__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30236__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30263 = seq__30231;
var G__30264 = chunk__30232;
var G__30265 = count__30233;
var G__30266 = (i__30234 + (1));
seq__30231 = G__30263;
chunk__30232 = G__30264;
count__30233 = G__30265;
i__30234 = G__30266;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30231);
if(temp__4425__auto__){
var seq__30231__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30231__$1)){
var c__22789__auto__ = cljs.core.chunk_first.call(null,seq__30231__$1);
var G__30267 = cljs.core.chunk_rest.call(null,seq__30231__$1);
var G__30268 = c__22789__auto__;
var G__30269 = cljs.core.count.call(null,c__22789__auto__);
var G__30270 = (0);
seq__30231 = G__30267;
chunk__30232 = G__30268;
count__30233 = G__30269;
i__30234 = G__30270;
continue;
} else {
var vec__30238 = cljs.core.first.call(null,seq__30231__$1);
var name = cljs.core.nth.call(null,vec__30238,(0),null);
var map__30239 = cljs.core.nth.call(null,vec__30238,(1),null);
var map__30239__$1 = ((((!((map__30239 == null)))?((((map__30239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30239):map__30239);
var doc = cljs.core.get.call(null,map__30239__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30239__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30271 = cljs.core.next.call(null,seq__30231__$1);
var G__30272 = null;
var G__30273 = (0);
var G__30274 = (0);
seq__30231 = G__30271;
chunk__30232 = G__30272;
count__30233 = G__30273;
i__30234 = G__30274;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map