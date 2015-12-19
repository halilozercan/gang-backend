// Compiled by ClojureScript 1.7.189 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__21986__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21986__auto__){
return or__21986__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__21986__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29203_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29203_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29208 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29209 = null;
var count__29210 = (0);
var i__29211 = (0);
while(true){
if((i__29211 < count__29210)){
var n = cljs.core._nth.call(null,chunk__29209,i__29211);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29212 = seq__29208;
var G__29213 = chunk__29209;
var G__29214 = count__29210;
var G__29215 = (i__29211 + (1));
seq__29208 = G__29212;
chunk__29209 = G__29213;
count__29210 = G__29214;
i__29211 = G__29215;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29208);
if(temp__4425__auto__){
var seq__29208__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29208__$1)){
var c__22789__auto__ = cljs.core.chunk_first.call(null,seq__29208__$1);
var G__29216 = cljs.core.chunk_rest.call(null,seq__29208__$1);
var G__29217 = c__22789__auto__;
var G__29218 = cljs.core.count.call(null,c__22789__auto__);
var G__29219 = (0);
seq__29208 = G__29216;
chunk__29209 = G__29217;
count__29210 = G__29218;
i__29211 = G__29219;
continue;
} else {
var n = cljs.core.first.call(null,seq__29208__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29220 = cljs.core.next.call(null,seq__29208__$1);
var G__29221 = null;
var G__29222 = (0);
var G__29223 = (0);
seq__29208 = G__29220;
chunk__29209 = G__29221;
count__29210 = G__29222;
i__29211 = G__29223;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29262_29269 = cljs.core.seq.call(null,deps);
var chunk__29263_29270 = null;
var count__29264_29271 = (0);
var i__29265_29272 = (0);
while(true){
if((i__29265_29272 < count__29264_29271)){
var dep_29273 = cljs.core._nth.call(null,chunk__29263_29270,i__29265_29272);
topo_sort_helper_STAR_.call(null,dep_29273,(depth + (1)),state);

var G__29274 = seq__29262_29269;
var G__29275 = chunk__29263_29270;
var G__29276 = count__29264_29271;
var G__29277 = (i__29265_29272 + (1));
seq__29262_29269 = G__29274;
chunk__29263_29270 = G__29275;
count__29264_29271 = G__29276;
i__29265_29272 = G__29277;
continue;
} else {
var temp__4425__auto___29278 = cljs.core.seq.call(null,seq__29262_29269);
if(temp__4425__auto___29278){
var seq__29262_29279__$1 = temp__4425__auto___29278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29262_29279__$1)){
var c__22789__auto___29280 = cljs.core.chunk_first.call(null,seq__29262_29279__$1);
var G__29281 = cljs.core.chunk_rest.call(null,seq__29262_29279__$1);
var G__29282 = c__22789__auto___29280;
var G__29283 = cljs.core.count.call(null,c__22789__auto___29280);
var G__29284 = (0);
seq__29262_29269 = G__29281;
chunk__29263_29270 = G__29282;
count__29264_29271 = G__29283;
i__29265_29272 = G__29284;
continue;
} else {
var dep_29285 = cljs.core.first.call(null,seq__29262_29279__$1);
topo_sort_helper_STAR_.call(null,dep_29285,(depth + (1)),state);

var G__29286 = cljs.core.next.call(null,seq__29262_29279__$1);
var G__29287 = null;
var G__29288 = (0);
var G__29289 = (0);
seq__29262_29269 = G__29286;
chunk__29263_29270 = G__29287;
count__29264_29271 = G__29288;
i__29265_29272 = G__29289;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29266){
var vec__29268 = p__29266;
var x = cljs.core.nth.call(null,vec__29268,(0),null);
var xs = cljs.core.nthnext.call(null,vec__29268,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29268,x,xs,get_deps__$1){
return (function (p1__29224_SHARP_){
return clojure.set.difference.call(null,p1__29224_SHARP_,x);
});})(vec__29268,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29302 = cljs.core.seq.call(null,provides);
var chunk__29303 = null;
var count__29304 = (0);
var i__29305 = (0);
while(true){
if((i__29305 < count__29304)){
var prov = cljs.core._nth.call(null,chunk__29303,i__29305);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29306_29314 = cljs.core.seq.call(null,requires);
var chunk__29307_29315 = null;
var count__29308_29316 = (0);
var i__29309_29317 = (0);
while(true){
if((i__29309_29317 < count__29308_29316)){
var req_29318 = cljs.core._nth.call(null,chunk__29307_29315,i__29309_29317);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29318,prov);

var G__29319 = seq__29306_29314;
var G__29320 = chunk__29307_29315;
var G__29321 = count__29308_29316;
var G__29322 = (i__29309_29317 + (1));
seq__29306_29314 = G__29319;
chunk__29307_29315 = G__29320;
count__29308_29316 = G__29321;
i__29309_29317 = G__29322;
continue;
} else {
var temp__4425__auto___29323 = cljs.core.seq.call(null,seq__29306_29314);
if(temp__4425__auto___29323){
var seq__29306_29324__$1 = temp__4425__auto___29323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29306_29324__$1)){
var c__22789__auto___29325 = cljs.core.chunk_first.call(null,seq__29306_29324__$1);
var G__29326 = cljs.core.chunk_rest.call(null,seq__29306_29324__$1);
var G__29327 = c__22789__auto___29325;
var G__29328 = cljs.core.count.call(null,c__22789__auto___29325);
var G__29329 = (0);
seq__29306_29314 = G__29326;
chunk__29307_29315 = G__29327;
count__29308_29316 = G__29328;
i__29309_29317 = G__29329;
continue;
} else {
var req_29330 = cljs.core.first.call(null,seq__29306_29324__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29330,prov);

var G__29331 = cljs.core.next.call(null,seq__29306_29324__$1);
var G__29332 = null;
var G__29333 = (0);
var G__29334 = (0);
seq__29306_29314 = G__29331;
chunk__29307_29315 = G__29332;
count__29308_29316 = G__29333;
i__29309_29317 = G__29334;
continue;
}
} else {
}
}
break;
}

var G__29335 = seq__29302;
var G__29336 = chunk__29303;
var G__29337 = count__29304;
var G__29338 = (i__29305 + (1));
seq__29302 = G__29335;
chunk__29303 = G__29336;
count__29304 = G__29337;
i__29305 = G__29338;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29302);
if(temp__4425__auto__){
var seq__29302__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29302__$1)){
var c__22789__auto__ = cljs.core.chunk_first.call(null,seq__29302__$1);
var G__29339 = cljs.core.chunk_rest.call(null,seq__29302__$1);
var G__29340 = c__22789__auto__;
var G__29341 = cljs.core.count.call(null,c__22789__auto__);
var G__29342 = (0);
seq__29302 = G__29339;
chunk__29303 = G__29340;
count__29304 = G__29341;
i__29305 = G__29342;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29302__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29310_29343 = cljs.core.seq.call(null,requires);
var chunk__29311_29344 = null;
var count__29312_29345 = (0);
var i__29313_29346 = (0);
while(true){
if((i__29313_29346 < count__29312_29345)){
var req_29347 = cljs.core._nth.call(null,chunk__29311_29344,i__29313_29346);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29347,prov);

var G__29348 = seq__29310_29343;
var G__29349 = chunk__29311_29344;
var G__29350 = count__29312_29345;
var G__29351 = (i__29313_29346 + (1));
seq__29310_29343 = G__29348;
chunk__29311_29344 = G__29349;
count__29312_29345 = G__29350;
i__29313_29346 = G__29351;
continue;
} else {
var temp__4425__auto___29352__$1 = cljs.core.seq.call(null,seq__29310_29343);
if(temp__4425__auto___29352__$1){
var seq__29310_29353__$1 = temp__4425__auto___29352__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29310_29353__$1)){
var c__22789__auto___29354 = cljs.core.chunk_first.call(null,seq__29310_29353__$1);
var G__29355 = cljs.core.chunk_rest.call(null,seq__29310_29353__$1);
var G__29356 = c__22789__auto___29354;
var G__29357 = cljs.core.count.call(null,c__22789__auto___29354);
var G__29358 = (0);
seq__29310_29343 = G__29355;
chunk__29311_29344 = G__29356;
count__29312_29345 = G__29357;
i__29313_29346 = G__29358;
continue;
} else {
var req_29359 = cljs.core.first.call(null,seq__29310_29353__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29359,prov);

var G__29360 = cljs.core.next.call(null,seq__29310_29353__$1);
var G__29361 = null;
var G__29362 = (0);
var G__29363 = (0);
seq__29310_29343 = G__29360;
chunk__29311_29344 = G__29361;
count__29312_29345 = G__29362;
i__29313_29346 = G__29363;
continue;
}
} else {
}
}
break;
}

var G__29364 = cljs.core.next.call(null,seq__29302__$1);
var G__29365 = null;
var G__29366 = (0);
var G__29367 = (0);
seq__29302 = G__29364;
chunk__29303 = G__29365;
count__29304 = G__29366;
i__29305 = G__29367;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29372_29376 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29373_29377 = null;
var count__29374_29378 = (0);
var i__29375_29379 = (0);
while(true){
if((i__29375_29379 < count__29374_29378)){
var ns_29380 = cljs.core._nth.call(null,chunk__29373_29377,i__29375_29379);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29380);

var G__29381 = seq__29372_29376;
var G__29382 = chunk__29373_29377;
var G__29383 = count__29374_29378;
var G__29384 = (i__29375_29379 + (1));
seq__29372_29376 = G__29381;
chunk__29373_29377 = G__29382;
count__29374_29378 = G__29383;
i__29375_29379 = G__29384;
continue;
} else {
var temp__4425__auto___29385 = cljs.core.seq.call(null,seq__29372_29376);
if(temp__4425__auto___29385){
var seq__29372_29386__$1 = temp__4425__auto___29385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29372_29386__$1)){
var c__22789__auto___29387 = cljs.core.chunk_first.call(null,seq__29372_29386__$1);
var G__29388 = cljs.core.chunk_rest.call(null,seq__29372_29386__$1);
var G__29389 = c__22789__auto___29387;
var G__29390 = cljs.core.count.call(null,c__22789__auto___29387);
var G__29391 = (0);
seq__29372_29376 = G__29388;
chunk__29373_29377 = G__29389;
count__29374_29378 = G__29390;
i__29375_29379 = G__29391;
continue;
} else {
var ns_29392 = cljs.core.first.call(null,seq__29372_29386__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29392);

var G__29393 = cljs.core.next.call(null,seq__29372_29386__$1);
var G__29394 = null;
var G__29395 = (0);
var G__29396 = (0);
seq__29372_29376 = G__29393;
chunk__29373_29377 = G__29394;
count__29374_29378 = G__29395;
i__29375_29379 = G__29396;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__21986__auto__ = goog.require__;
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29397__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29398__i = 0, G__29398__a = new Array(arguments.length -  0);
while (G__29398__i < G__29398__a.length) {G__29398__a[G__29398__i] = arguments[G__29398__i + 0]; ++G__29398__i;}
  args = new cljs.core.IndexedSeq(G__29398__a,0);
} 
return G__29397__delegate.call(this,args);};
G__29397.cljs$lang$maxFixedArity = 0;
G__29397.cljs$lang$applyTo = (function (arglist__29399){
var args = cljs.core.seq(arglist__29399);
return G__29397__delegate(args);
});
G__29397.cljs$core$IFn$_invoke$arity$variadic = G__29397__delegate;
return G__29397;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29401 = cljs.core._EQ_;
var expr__29402 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29401.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29402))){
var path_parts = ((function (pred__29401,expr__29402){
return (function (p1__29400_SHARP_){
return clojure.string.split.call(null,p1__29400_SHARP_,/[\/\\]/);
});})(pred__29401,expr__29402))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__29401,expr__29402){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29404){if((e29404 instanceof Error)){
var e = e29404;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29404;

}
}})());
});
;})(path_parts,sep,root,pred__29401,expr__29402))
} else {
if(cljs.core.truth_(pred__29401.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29402))){
return ((function (pred__29401,expr__29402){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__29401,expr__29402){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__29401,expr__29402))
);

return deferred.addErrback(((function (deferred,pred__29401,expr__29402){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__29401,expr__29402))
);
});
;})(pred__29401,expr__29402))
} else {
return ((function (pred__29401,expr__29402){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29401,expr__29402))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29405,callback){
var map__29408 = p__29405;
var map__29408__$1 = ((((!((map__29408 == null)))?((((map__29408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29408):map__29408);
var file_msg = map__29408__$1;
var request_url = cljs.core.get.call(null,map__29408__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29408,map__29408__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29408,map__29408__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto__){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto__){
return (function (state_29432){
var state_val_29433 = (state_29432[(1)]);
if((state_val_29433 === (7))){
var inst_29428 = (state_29432[(2)]);
var state_29432__$1 = state_29432;
var statearr_29434_29454 = state_29432__$1;
(statearr_29434_29454[(2)] = inst_29428);

(statearr_29434_29454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (1))){
var state_29432__$1 = state_29432;
var statearr_29435_29455 = state_29432__$1;
(statearr_29435_29455[(2)] = null);

(statearr_29435_29455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (4))){
var inst_29412 = (state_29432[(7)]);
var inst_29412__$1 = (state_29432[(2)]);
var state_29432__$1 = (function (){var statearr_29436 = state_29432;
(statearr_29436[(7)] = inst_29412__$1);

return statearr_29436;
})();
if(cljs.core.truth_(inst_29412__$1)){
var statearr_29437_29456 = state_29432__$1;
(statearr_29437_29456[(1)] = (5));

} else {
var statearr_29438_29457 = state_29432__$1;
(statearr_29438_29457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (6))){
var state_29432__$1 = state_29432;
var statearr_29439_29458 = state_29432__$1;
(statearr_29439_29458[(2)] = null);

(statearr_29439_29458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (3))){
var inst_29430 = (state_29432[(2)]);
var state_29432__$1 = state_29432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29432__$1,inst_29430);
} else {
if((state_val_29433 === (2))){
var state_29432__$1 = state_29432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29432__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29433 === (11))){
var inst_29424 = (state_29432[(2)]);
var state_29432__$1 = (function (){var statearr_29440 = state_29432;
(statearr_29440[(8)] = inst_29424);

return statearr_29440;
})();
var statearr_29441_29459 = state_29432__$1;
(statearr_29441_29459[(2)] = null);

(statearr_29441_29459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (9))){
var inst_29418 = (state_29432[(9)]);
var inst_29416 = (state_29432[(10)]);
var inst_29420 = inst_29418.call(null,inst_29416);
var state_29432__$1 = state_29432;
var statearr_29442_29460 = state_29432__$1;
(statearr_29442_29460[(2)] = inst_29420);

(statearr_29442_29460[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (5))){
var inst_29412 = (state_29432[(7)]);
var inst_29414 = figwheel.client.file_reloading.blocking_load.call(null,inst_29412);
var state_29432__$1 = state_29432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29432__$1,(8),inst_29414);
} else {
if((state_val_29433 === (10))){
var inst_29416 = (state_29432[(10)]);
var inst_29422 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29416);
var state_29432__$1 = state_29432;
var statearr_29443_29461 = state_29432__$1;
(statearr_29443_29461[(2)] = inst_29422);

(statearr_29443_29461[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (8))){
var inst_29418 = (state_29432[(9)]);
var inst_29412 = (state_29432[(7)]);
var inst_29416 = (state_29432[(2)]);
var inst_29417 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29418__$1 = cljs.core.get.call(null,inst_29417,inst_29412);
var state_29432__$1 = (function (){var statearr_29444 = state_29432;
(statearr_29444[(9)] = inst_29418__$1);

(statearr_29444[(10)] = inst_29416);

return statearr_29444;
})();
if(cljs.core.truth_(inst_29418__$1)){
var statearr_29445_29462 = state_29432__$1;
(statearr_29445_29462[(1)] = (9));

} else {
var statearr_29446_29463 = state_29432__$1;
(statearr_29446_29463[(1)] = (10));

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
});})(c__24153__auto__))
;
return ((function (switch__24041__auto__,c__24153__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24042__auto__ = null;
var figwheel$client$file_reloading$state_machine__24042__auto____0 = (function (){
var statearr_29450 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29450[(0)] = figwheel$client$file_reloading$state_machine__24042__auto__);

(statearr_29450[(1)] = (1));

return statearr_29450;
});
var figwheel$client$file_reloading$state_machine__24042__auto____1 = (function (state_29432){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_29432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e29451){if((e29451 instanceof Object)){
var ex__24045__auto__ = e29451;
var statearr_29452_29464 = state_29432;
(statearr_29452_29464[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29465 = state_29432;
state_29432 = G__29465;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24042__auto__ = function(state_29432){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24042__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24042__auto____1.call(this,state_29432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24042__auto____0;
figwheel$client$file_reloading$state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24042__auto____1;
return figwheel$client$file_reloading$state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto__))
})();
var state__24155__auto__ = (function (){var statearr_29453 = f__24154__auto__.call(null);
(statearr_29453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto__);

return statearr_29453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto__))
);

return c__24153__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29466,callback){
var map__29469 = p__29466;
var map__29469__$1 = ((((!((map__29469 == null)))?((((map__29469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29469):map__29469);
var file_msg = map__29469__$1;
var namespace = cljs.core.get.call(null,map__29469__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29469,map__29469__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29469,map__29469__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29471){
var map__29474 = p__29471;
var map__29474__$1 = ((((!((map__29474 == null)))?((((map__29474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29474):map__29474);
var file_msg = map__29474__$1;
var namespace = cljs.core.get.call(null,map__29474__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21974__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21974__auto__){
var or__21986__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
var or__21986__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21986__auto____$1)){
return or__21986__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21974__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29476,callback){
var map__29479 = p__29476;
var map__29479__$1 = ((((!((map__29479 == null)))?((((map__29479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29479):map__29479);
var file_msg = map__29479__$1;
var request_url = cljs.core.get.call(null,map__29479__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29479__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24153__auto___29567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto___29567,out){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto___29567,out){
return (function (state_29549){
var state_val_29550 = (state_29549[(1)]);
if((state_val_29550 === (1))){
var inst_29527 = cljs.core.nth.call(null,files,(0),null);
var inst_29528 = cljs.core.nthnext.call(null,files,(1));
var inst_29529 = files;
var state_29549__$1 = (function (){var statearr_29551 = state_29549;
(statearr_29551[(7)] = inst_29528);

(statearr_29551[(8)] = inst_29529);

(statearr_29551[(9)] = inst_29527);

return statearr_29551;
})();
var statearr_29552_29568 = state_29549__$1;
(statearr_29552_29568[(2)] = null);

(statearr_29552_29568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (2))){
var inst_29529 = (state_29549[(8)]);
var inst_29532 = (state_29549[(10)]);
var inst_29532__$1 = cljs.core.nth.call(null,inst_29529,(0),null);
var inst_29533 = cljs.core.nthnext.call(null,inst_29529,(1));
var inst_29534 = (inst_29532__$1 == null);
var inst_29535 = cljs.core.not.call(null,inst_29534);
var state_29549__$1 = (function (){var statearr_29553 = state_29549;
(statearr_29553[(10)] = inst_29532__$1);

(statearr_29553[(11)] = inst_29533);

return statearr_29553;
})();
if(inst_29535){
var statearr_29554_29569 = state_29549__$1;
(statearr_29554_29569[(1)] = (4));

} else {
var statearr_29555_29570 = state_29549__$1;
(statearr_29555_29570[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (3))){
var inst_29547 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29549__$1,inst_29547);
} else {
if((state_val_29550 === (4))){
var inst_29532 = (state_29549[(10)]);
var inst_29537 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29532);
var state_29549__$1 = state_29549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29549__$1,(7),inst_29537);
} else {
if((state_val_29550 === (5))){
var inst_29543 = cljs.core.async.close_BANG_.call(null,out);
var state_29549__$1 = state_29549;
var statearr_29556_29571 = state_29549__$1;
(statearr_29556_29571[(2)] = inst_29543);

(statearr_29556_29571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (6))){
var inst_29545 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
var statearr_29557_29572 = state_29549__$1;
(statearr_29557_29572[(2)] = inst_29545);

(statearr_29557_29572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (7))){
var inst_29533 = (state_29549[(11)]);
var inst_29539 = (state_29549[(2)]);
var inst_29540 = cljs.core.async.put_BANG_.call(null,out,inst_29539);
var inst_29529 = inst_29533;
var state_29549__$1 = (function (){var statearr_29558 = state_29549;
(statearr_29558[(8)] = inst_29529);

(statearr_29558[(12)] = inst_29540);

return statearr_29558;
})();
var statearr_29559_29573 = state_29549__$1;
(statearr_29559_29573[(2)] = null);

(statearr_29559_29573[(1)] = (2));


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
});})(c__24153__auto___29567,out))
;
return ((function (switch__24041__auto__,c__24153__auto___29567,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24042__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24042__auto____0 = (function (){
var statearr_29563 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29563[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24042__auto__);

(statearr_29563[(1)] = (1));

return statearr_29563;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24042__auto____1 = (function (state_29549){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_29549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e29564){if((e29564 instanceof Object)){
var ex__24045__auto__ = e29564;
var statearr_29565_29574 = state_29549;
(statearr_29565_29574[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29575 = state_29549;
state_29549 = G__29575;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24042__auto__ = function(state_29549){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24042__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24042__auto____1.call(this,state_29549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24042__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24042__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto___29567,out))
})();
var state__24155__auto__ = (function (){var statearr_29566 = f__24154__auto__.call(null);
(statearr_29566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto___29567);

return statearr_29566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto___29567,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29576,opts){
var map__29580 = p__29576;
var map__29580__$1 = ((((!((map__29580 == null)))?((((map__29580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29580):map__29580);
var eval_body__$1 = cljs.core.get.call(null,map__29580__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29580__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21974__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21974__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21974__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29582){var e = e29582;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29583_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29583_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29588){
var vec__29589 = p__29588;
var k = cljs.core.nth.call(null,vec__29589,(0),null);
var v = cljs.core.nth.call(null,vec__29589,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29590){
var vec__29591 = p__29590;
var k = cljs.core.nth.call(null,vec__29591,(0),null);
var v = cljs.core.nth.call(null,vec__29591,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29595,p__29596){
var map__29843 = p__29595;
var map__29843__$1 = ((((!((map__29843 == null)))?((((map__29843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29843):map__29843);
var opts = map__29843__$1;
var before_jsload = cljs.core.get.call(null,map__29843__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29843__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29843__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29844 = p__29596;
var map__29844__$1 = ((((!((map__29844 == null)))?((((map__29844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29844):map__29844);
var msg = map__29844__$1;
var files = cljs.core.get.call(null,map__29844__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29844__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29844__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto__,map__29843,map__29843__$1,opts,before_jsload,on_jsload,reload_dependents,map__29844,map__29844__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto__,map__29843,map__29843__$1,opts,before_jsload,on_jsload,reload_dependents,map__29844,map__29844__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29997){
var state_val_29998 = (state_29997[(1)]);
if((state_val_29998 === (7))){
var inst_29861 = (state_29997[(7)]);
var inst_29859 = (state_29997[(8)]);
var inst_29858 = (state_29997[(9)]);
var inst_29860 = (state_29997[(10)]);
var inst_29866 = cljs.core._nth.call(null,inst_29859,inst_29861);
var inst_29867 = figwheel.client.file_reloading.eval_body.call(null,inst_29866,opts);
var inst_29868 = (inst_29861 + (1));
var tmp29999 = inst_29859;
var tmp30000 = inst_29858;
var tmp30001 = inst_29860;
var inst_29858__$1 = tmp30000;
var inst_29859__$1 = tmp29999;
var inst_29860__$1 = tmp30001;
var inst_29861__$1 = inst_29868;
var state_29997__$1 = (function (){var statearr_30002 = state_29997;
(statearr_30002[(7)] = inst_29861__$1);

(statearr_30002[(8)] = inst_29859__$1);

(statearr_30002[(9)] = inst_29858__$1);

(statearr_30002[(11)] = inst_29867);

(statearr_30002[(10)] = inst_29860__$1);

return statearr_30002;
})();
var statearr_30003_30089 = state_29997__$1;
(statearr_30003_30089[(2)] = null);

(statearr_30003_30089[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (20))){
var inst_29901 = (state_29997[(12)]);
var inst_29909 = figwheel.client.file_reloading.sort_files.call(null,inst_29901);
var state_29997__$1 = state_29997;
var statearr_30004_30090 = state_29997__$1;
(statearr_30004_30090[(2)] = inst_29909);

(statearr_30004_30090[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (27))){
var state_29997__$1 = state_29997;
var statearr_30005_30091 = state_29997__$1;
(statearr_30005_30091[(2)] = null);

(statearr_30005_30091[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (1))){
var inst_29850 = (state_29997[(13)]);
var inst_29847 = before_jsload.call(null,files);
var inst_29848 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29849 = (function (){return ((function (inst_29850,inst_29847,inst_29848,state_val_29998,c__24153__auto__,map__29843,map__29843__$1,opts,before_jsload,on_jsload,reload_dependents,map__29844,map__29844__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29592_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29592_SHARP_);
});
;})(inst_29850,inst_29847,inst_29848,state_val_29998,c__24153__auto__,map__29843,map__29843__$1,opts,before_jsload,on_jsload,reload_dependents,map__29844,map__29844__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29850__$1 = cljs.core.filter.call(null,inst_29849,files);
var inst_29851 = cljs.core.not_empty.call(null,inst_29850__$1);
var state_29997__$1 = (function (){var statearr_30006 = state_29997;
(statearr_30006[(14)] = inst_29848);

(statearr_30006[(13)] = inst_29850__$1);

(statearr_30006[(15)] = inst_29847);

return statearr_30006;
})();
if(cljs.core.truth_(inst_29851)){
var statearr_30007_30092 = state_29997__$1;
(statearr_30007_30092[(1)] = (2));

} else {
var statearr_30008_30093 = state_29997__$1;
(statearr_30008_30093[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (24))){
var state_29997__$1 = state_29997;
var statearr_30009_30094 = state_29997__$1;
(statearr_30009_30094[(2)] = null);

(statearr_30009_30094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (39))){
var inst_29951 = (state_29997[(16)]);
var state_29997__$1 = state_29997;
var statearr_30010_30095 = state_29997__$1;
(statearr_30010_30095[(2)] = inst_29951);

(statearr_30010_30095[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (46))){
var inst_29992 = (state_29997[(2)]);
var state_29997__$1 = state_29997;
var statearr_30011_30096 = state_29997__$1;
(statearr_30011_30096[(2)] = inst_29992);

(statearr_30011_30096[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (4))){
var inst_29895 = (state_29997[(2)]);
var inst_29896 = cljs.core.List.EMPTY;
var inst_29897 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29896);
var inst_29898 = (function (){return ((function (inst_29895,inst_29896,inst_29897,state_val_29998,c__24153__auto__,map__29843,map__29843__$1,opts,before_jsload,on_jsload,reload_dependents,map__29844,map__29844__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29593_SHARP_){
var and__21974__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29593_SHARP_);
if(cljs.core.truth_(and__21974__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29593_SHARP_));
} else {
return and__21974__auto__;
}
});
;})(inst_29895,inst_29896,inst_29897,state_val_29998,c__24153__auto__,map__29843,map__29843__$1,opts,before_jsload,on_jsload,reload_dependents,map__29844,map__29844__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29899 = cljs.core.filter.call(null,inst_29898,files);
var inst_29900 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29901 = cljs.core.concat.call(null,inst_29899,inst_29900);
var state_29997__$1 = (function (){var statearr_30012 = state_29997;
(statearr_30012[(12)] = inst_29901);

(statearr_30012[(17)] = inst_29897);

(statearr_30012[(18)] = inst_29895);

return statearr_30012;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30013_30097 = state_29997__$1;
(statearr_30013_30097[(1)] = (16));

} else {
var statearr_30014_30098 = state_29997__$1;
(statearr_30014_30098[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (15))){
var inst_29885 = (state_29997[(2)]);
var state_29997__$1 = state_29997;
var statearr_30015_30099 = state_29997__$1;
(statearr_30015_30099[(2)] = inst_29885);

(statearr_30015_30099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (21))){
var inst_29911 = (state_29997[(19)]);
var inst_29911__$1 = (state_29997[(2)]);
var inst_29912 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29911__$1);
var state_29997__$1 = (function (){var statearr_30016 = state_29997;
(statearr_30016[(19)] = inst_29911__$1);

return statearr_30016;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29997__$1,(22),inst_29912);
} else {
if((state_val_29998 === (31))){
var inst_29995 = (state_29997[(2)]);
var state_29997__$1 = state_29997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29997__$1,inst_29995);
} else {
if((state_val_29998 === (32))){
var inst_29951 = (state_29997[(16)]);
var inst_29956 = inst_29951.cljs$lang$protocol_mask$partition0$;
var inst_29957 = (inst_29956 & (64));
var inst_29958 = inst_29951.cljs$core$ISeq$;
var inst_29959 = (inst_29957) || (inst_29958);
var state_29997__$1 = state_29997;
if(cljs.core.truth_(inst_29959)){
var statearr_30017_30100 = state_29997__$1;
(statearr_30017_30100[(1)] = (35));

} else {
var statearr_30018_30101 = state_29997__$1;
(statearr_30018_30101[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (40))){
var inst_29972 = (state_29997[(20)]);
var inst_29971 = (state_29997[(2)]);
var inst_29972__$1 = cljs.core.get.call(null,inst_29971,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29973 = cljs.core.get.call(null,inst_29971,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29974 = cljs.core.not_empty.call(null,inst_29972__$1);
var state_29997__$1 = (function (){var statearr_30019 = state_29997;
(statearr_30019[(20)] = inst_29972__$1);

(statearr_30019[(21)] = inst_29973);

return statearr_30019;
})();
if(cljs.core.truth_(inst_29974)){
var statearr_30020_30102 = state_29997__$1;
(statearr_30020_30102[(1)] = (41));

} else {
var statearr_30021_30103 = state_29997__$1;
(statearr_30021_30103[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (33))){
var state_29997__$1 = state_29997;
var statearr_30022_30104 = state_29997__$1;
(statearr_30022_30104[(2)] = false);

(statearr_30022_30104[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (13))){
var inst_29871 = (state_29997[(22)]);
var inst_29875 = cljs.core.chunk_first.call(null,inst_29871);
var inst_29876 = cljs.core.chunk_rest.call(null,inst_29871);
var inst_29877 = cljs.core.count.call(null,inst_29875);
var inst_29858 = inst_29876;
var inst_29859 = inst_29875;
var inst_29860 = inst_29877;
var inst_29861 = (0);
var state_29997__$1 = (function (){var statearr_30023 = state_29997;
(statearr_30023[(7)] = inst_29861);

(statearr_30023[(8)] = inst_29859);

(statearr_30023[(9)] = inst_29858);

(statearr_30023[(10)] = inst_29860);

return statearr_30023;
})();
var statearr_30024_30105 = state_29997__$1;
(statearr_30024_30105[(2)] = null);

(statearr_30024_30105[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (22))){
var inst_29919 = (state_29997[(23)]);
var inst_29915 = (state_29997[(24)]);
var inst_29911 = (state_29997[(19)]);
var inst_29914 = (state_29997[(25)]);
var inst_29914__$1 = (state_29997[(2)]);
var inst_29915__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29914__$1);
var inst_29916 = (function (){var all_files = inst_29911;
var res_SINGLEQUOTE_ = inst_29914__$1;
var res = inst_29915__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29919,inst_29915,inst_29911,inst_29914,inst_29914__$1,inst_29915__$1,state_val_29998,c__24153__auto__,map__29843,map__29843__$1,opts,before_jsload,on_jsload,reload_dependents,map__29844,map__29844__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29594_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29594_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29919,inst_29915,inst_29911,inst_29914,inst_29914__$1,inst_29915__$1,state_val_29998,c__24153__auto__,map__29843,map__29843__$1,opts,before_jsload,on_jsload,reload_dependents,map__29844,map__29844__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29917 = cljs.core.filter.call(null,inst_29916,inst_29914__$1);
var inst_29918 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29919__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29918);
var inst_29920 = cljs.core.not_empty.call(null,inst_29919__$1);
var state_29997__$1 = (function (){var statearr_30025 = state_29997;
(statearr_30025[(26)] = inst_29917);

(statearr_30025[(23)] = inst_29919__$1);

(statearr_30025[(24)] = inst_29915__$1);

(statearr_30025[(25)] = inst_29914__$1);

return statearr_30025;
})();
if(cljs.core.truth_(inst_29920)){
var statearr_30026_30106 = state_29997__$1;
(statearr_30026_30106[(1)] = (23));

} else {
var statearr_30027_30107 = state_29997__$1;
(statearr_30027_30107[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (36))){
var state_29997__$1 = state_29997;
var statearr_30028_30108 = state_29997__$1;
(statearr_30028_30108[(2)] = false);

(statearr_30028_30108[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (41))){
var inst_29972 = (state_29997[(20)]);
var inst_29976 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29977 = cljs.core.map.call(null,inst_29976,inst_29972);
var inst_29978 = cljs.core.pr_str.call(null,inst_29977);
var inst_29979 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29978)].join('');
var inst_29980 = figwheel.client.utils.log.call(null,inst_29979);
var state_29997__$1 = state_29997;
var statearr_30029_30109 = state_29997__$1;
(statearr_30029_30109[(2)] = inst_29980);

(statearr_30029_30109[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (43))){
var inst_29973 = (state_29997[(21)]);
var inst_29983 = (state_29997[(2)]);
var inst_29984 = cljs.core.not_empty.call(null,inst_29973);
var state_29997__$1 = (function (){var statearr_30030 = state_29997;
(statearr_30030[(27)] = inst_29983);

return statearr_30030;
})();
if(cljs.core.truth_(inst_29984)){
var statearr_30031_30110 = state_29997__$1;
(statearr_30031_30110[(1)] = (44));

} else {
var statearr_30032_30111 = state_29997__$1;
(statearr_30032_30111[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (29))){
var inst_29917 = (state_29997[(26)]);
var inst_29919 = (state_29997[(23)]);
var inst_29915 = (state_29997[(24)]);
var inst_29911 = (state_29997[(19)]);
var inst_29914 = (state_29997[(25)]);
var inst_29951 = (state_29997[(16)]);
var inst_29947 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29950 = (function (){var all_files = inst_29911;
var res_SINGLEQUOTE_ = inst_29914;
var res = inst_29915;
var files_not_loaded = inst_29917;
var dependencies_that_loaded = inst_29919;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29917,inst_29919,inst_29915,inst_29911,inst_29914,inst_29951,inst_29947,state_val_29998,c__24153__auto__,map__29843,map__29843__$1,opts,before_jsload,on_jsload,reload_dependents,map__29844,map__29844__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29949){
var map__30033 = p__29949;
var map__30033__$1 = ((((!((map__30033 == null)))?((((map__30033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30033):map__30033);
var namespace = cljs.core.get.call(null,map__30033__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29917,inst_29919,inst_29915,inst_29911,inst_29914,inst_29951,inst_29947,state_val_29998,c__24153__auto__,map__29843,map__29843__$1,opts,before_jsload,on_jsload,reload_dependents,map__29844,map__29844__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29951__$1 = cljs.core.group_by.call(null,inst_29950,inst_29917);
var inst_29953 = (inst_29951__$1 == null);
var inst_29954 = cljs.core.not.call(null,inst_29953);
var state_29997__$1 = (function (){var statearr_30035 = state_29997;
(statearr_30035[(28)] = inst_29947);

(statearr_30035[(16)] = inst_29951__$1);

return statearr_30035;
})();
if(inst_29954){
var statearr_30036_30112 = state_29997__$1;
(statearr_30036_30112[(1)] = (32));

} else {
var statearr_30037_30113 = state_29997__$1;
(statearr_30037_30113[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (44))){
var inst_29973 = (state_29997[(21)]);
var inst_29986 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29973);
var inst_29987 = cljs.core.pr_str.call(null,inst_29986);
var inst_29988 = [cljs.core.str("not required: "),cljs.core.str(inst_29987)].join('');
var inst_29989 = figwheel.client.utils.log.call(null,inst_29988);
var state_29997__$1 = state_29997;
var statearr_30038_30114 = state_29997__$1;
(statearr_30038_30114[(2)] = inst_29989);

(statearr_30038_30114[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (6))){
var inst_29892 = (state_29997[(2)]);
var state_29997__$1 = state_29997;
var statearr_30039_30115 = state_29997__$1;
(statearr_30039_30115[(2)] = inst_29892);

(statearr_30039_30115[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (28))){
var inst_29917 = (state_29997[(26)]);
var inst_29944 = (state_29997[(2)]);
var inst_29945 = cljs.core.not_empty.call(null,inst_29917);
var state_29997__$1 = (function (){var statearr_30040 = state_29997;
(statearr_30040[(29)] = inst_29944);

return statearr_30040;
})();
if(cljs.core.truth_(inst_29945)){
var statearr_30041_30116 = state_29997__$1;
(statearr_30041_30116[(1)] = (29));

} else {
var statearr_30042_30117 = state_29997__$1;
(statearr_30042_30117[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (25))){
var inst_29915 = (state_29997[(24)]);
var inst_29931 = (state_29997[(2)]);
var inst_29932 = cljs.core.not_empty.call(null,inst_29915);
var state_29997__$1 = (function (){var statearr_30043 = state_29997;
(statearr_30043[(30)] = inst_29931);

return statearr_30043;
})();
if(cljs.core.truth_(inst_29932)){
var statearr_30044_30118 = state_29997__$1;
(statearr_30044_30118[(1)] = (26));

} else {
var statearr_30045_30119 = state_29997__$1;
(statearr_30045_30119[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (34))){
var inst_29966 = (state_29997[(2)]);
var state_29997__$1 = state_29997;
if(cljs.core.truth_(inst_29966)){
var statearr_30046_30120 = state_29997__$1;
(statearr_30046_30120[(1)] = (38));

} else {
var statearr_30047_30121 = state_29997__$1;
(statearr_30047_30121[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (17))){
var state_29997__$1 = state_29997;
var statearr_30048_30122 = state_29997__$1;
(statearr_30048_30122[(2)] = recompile_dependents);

(statearr_30048_30122[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (3))){
var state_29997__$1 = state_29997;
var statearr_30049_30123 = state_29997__$1;
(statearr_30049_30123[(2)] = null);

(statearr_30049_30123[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (12))){
var inst_29888 = (state_29997[(2)]);
var state_29997__$1 = state_29997;
var statearr_30050_30124 = state_29997__$1;
(statearr_30050_30124[(2)] = inst_29888);

(statearr_30050_30124[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (2))){
var inst_29850 = (state_29997[(13)]);
var inst_29857 = cljs.core.seq.call(null,inst_29850);
var inst_29858 = inst_29857;
var inst_29859 = null;
var inst_29860 = (0);
var inst_29861 = (0);
var state_29997__$1 = (function (){var statearr_30051 = state_29997;
(statearr_30051[(7)] = inst_29861);

(statearr_30051[(8)] = inst_29859);

(statearr_30051[(9)] = inst_29858);

(statearr_30051[(10)] = inst_29860);

return statearr_30051;
})();
var statearr_30052_30125 = state_29997__$1;
(statearr_30052_30125[(2)] = null);

(statearr_30052_30125[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (23))){
var inst_29917 = (state_29997[(26)]);
var inst_29919 = (state_29997[(23)]);
var inst_29915 = (state_29997[(24)]);
var inst_29911 = (state_29997[(19)]);
var inst_29914 = (state_29997[(25)]);
var inst_29922 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29924 = (function (){var all_files = inst_29911;
var res_SINGLEQUOTE_ = inst_29914;
var res = inst_29915;
var files_not_loaded = inst_29917;
var dependencies_that_loaded = inst_29919;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29917,inst_29919,inst_29915,inst_29911,inst_29914,inst_29922,state_val_29998,c__24153__auto__,map__29843,map__29843__$1,opts,before_jsload,on_jsload,reload_dependents,map__29844,map__29844__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29923){
var map__30053 = p__29923;
var map__30053__$1 = ((((!((map__30053 == null)))?((((map__30053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30053):map__30053);
var request_url = cljs.core.get.call(null,map__30053__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29917,inst_29919,inst_29915,inst_29911,inst_29914,inst_29922,state_val_29998,c__24153__auto__,map__29843,map__29843__$1,opts,before_jsload,on_jsload,reload_dependents,map__29844,map__29844__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29925 = cljs.core.reverse.call(null,inst_29919);
var inst_29926 = cljs.core.map.call(null,inst_29924,inst_29925);
var inst_29927 = cljs.core.pr_str.call(null,inst_29926);
var inst_29928 = figwheel.client.utils.log.call(null,inst_29927);
var state_29997__$1 = (function (){var statearr_30055 = state_29997;
(statearr_30055[(31)] = inst_29922);

return statearr_30055;
})();
var statearr_30056_30126 = state_29997__$1;
(statearr_30056_30126[(2)] = inst_29928);

(statearr_30056_30126[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (35))){
var state_29997__$1 = state_29997;
var statearr_30057_30127 = state_29997__$1;
(statearr_30057_30127[(2)] = true);

(statearr_30057_30127[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (19))){
var inst_29901 = (state_29997[(12)]);
var inst_29907 = figwheel.client.file_reloading.expand_files.call(null,inst_29901);
var state_29997__$1 = state_29997;
var statearr_30058_30128 = state_29997__$1;
(statearr_30058_30128[(2)] = inst_29907);

(statearr_30058_30128[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (11))){
var state_29997__$1 = state_29997;
var statearr_30059_30129 = state_29997__$1;
(statearr_30059_30129[(2)] = null);

(statearr_30059_30129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (9))){
var inst_29890 = (state_29997[(2)]);
var state_29997__$1 = state_29997;
var statearr_30060_30130 = state_29997__$1;
(statearr_30060_30130[(2)] = inst_29890);

(statearr_30060_30130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (5))){
var inst_29861 = (state_29997[(7)]);
var inst_29860 = (state_29997[(10)]);
var inst_29863 = (inst_29861 < inst_29860);
var inst_29864 = inst_29863;
var state_29997__$1 = state_29997;
if(cljs.core.truth_(inst_29864)){
var statearr_30061_30131 = state_29997__$1;
(statearr_30061_30131[(1)] = (7));

} else {
var statearr_30062_30132 = state_29997__$1;
(statearr_30062_30132[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (14))){
var inst_29871 = (state_29997[(22)]);
var inst_29880 = cljs.core.first.call(null,inst_29871);
var inst_29881 = figwheel.client.file_reloading.eval_body.call(null,inst_29880,opts);
var inst_29882 = cljs.core.next.call(null,inst_29871);
var inst_29858 = inst_29882;
var inst_29859 = null;
var inst_29860 = (0);
var inst_29861 = (0);
var state_29997__$1 = (function (){var statearr_30063 = state_29997;
(statearr_30063[(7)] = inst_29861);

(statearr_30063[(8)] = inst_29859);

(statearr_30063[(9)] = inst_29858);

(statearr_30063[(10)] = inst_29860);

(statearr_30063[(32)] = inst_29881);

return statearr_30063;
})();
var statearr_30064_30133 = state_29997__$1;
(statearr_30064_30133[(2)] = null);

(statearr_30064_30133[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (45))){
var state_29997__$1 = state_29997;
var statearr_30065_30134 = state_29997__$1;
(statearr_30065_30134[(2)] = null);

(statearr_30065_30134[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (26))){
var inst_29917 = (state_29997[(26)]);
var inst_29919 = (state_29997[(23)]);
var inst_29915 = (state_29997[(24)]);
var inst_29911 = (state_29997[(19)]);
var inst_29914 = (state_29997[(25)]);
var inst_29934 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29936 = (function (){var all_files = inst_29911;
var res_SINGLEQUOTE_ = inst_29914;
var res = inst_29915;
var files_not_loaded = inst_29917;
var dependencies_that_loaded = inst_29919;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29917,inst_29919,inst_29915,inst_29911,inst_29914,inst_29934,state_val_29998,c__24153__auto__,map__29843,map__29843__$1,opts,before_jsload,on_jsload,reload_dependents,map__29844,map__29844__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29935){
var map__30066 = p__29935;
var map__30066__$1 = ((((!((map__30066 == null)))?((((map__30066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30066):map__30066);
var namespace = cljs.core.get.call(null,map__30066__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30066__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29917,inst_29919,inst_29915,inst_29911,inst_29914,inst_29934,state_val_29998,c__24153__auto__,map__29843,map__29843__$1,opts,before_jsload,on_jsload,reload_dependents,map__29844,map__29844__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29937 = cljs.core.map.call(null,inst_29936,inst_29915);
var inst_29938 = cljs.core.pr_str.call(null,inst_29937);
var inst_29939 = figwheel.client.utils.log.call(null,inst_29938);
var inst_29940 = (function (){var all_files = inst_29911;
var res_SINGLEQUOTE_ = inst_29914;
var res = inst_29915;
var files_not_loaded = inst_29917;
var dependencies_that_loaded = inst_29919;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29917,inst_29919,inst_29915,inst_29911,inst_29914,inst_29934,inst_29936,inst_29937,inst_29938,inst_29939,state_val_29998,c__24153__auto__,map__29843,map__29843__$1,opts,before_jsload,on_jsload,reload_dependents,map__29844,map__29844__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29917,inst_29919,inst_29915,inst_29911,inst_29914,inst_29934,inst_29936,inst_29937,inst_29938,inst_29939,state_val_29998,c__24153__auto__,map__29843,map__29843__$1,opts,before_jsload,on_jsload,reload_dependents,map__29844,map__29844__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29941 = setTimeout(inst_29940,(10));
var state_29997__$1 = (function (){var statearr_30068 = state_29997;
(statearr_30068[(33)] = inst_29939);

(statearr_30068[(34)] = inst_29934);

return statearr_30068;
})();
var statearr_30069_30135 = state_29997__$1;
(statearr_30069_30135[(2)] = inst_29941);

(statearr_30069_30135[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (16))){
var state_29997__$1 = state_29997;
var statearr_30070_30136 = state_29997__$1;
(statearr_30070_30136[(2)] = reload_dependents);

(statearr_30070_30136[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (38))){
var inst_29951 = (state_29997[(16)]);
var inst_29968 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29951);
var state_29997__$1 = state_29997;
var statearr_30071_30137 = state_29997__$1;
(statearr_30071_30137[(2)] = inst_29968);

(statearr_30071_30137[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (30))){
var state_29997__$1 = state_29997;
var statearr_30072_30138 = state_29997__$1;
(statearr_30072_30138[(2)] = null);

(statearr_30072_30138[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (10))){
var inst_29871 = (state_29997[(22)]);
var inst_29873 = cljs.core.chunked_seq_QMARK_.call(null,inst_29871);
var state_29997__$1 = state_29997;
if(inst_29873){
var statearr_30073_30139 = state_29997__$1;
(statearr_30073_30139[(1)] = (13));

} else {
var statearr_30074_30140 = state_29997__$1;
(statearr_30074_30140[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (18))){
var inst_29905 = (state_29997[(2)]);
var state_29997__$1 = state_29997;
if(cljs.core.truth_(inst_29905)){
var statearr_30075_30141 = state_29997__$1;
(statearr_30075_30141[(1)] = (19));

} else {
var statearr_30076_30142 = state_29997__$1;
(statearr_30076_30142[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (42))){
var state_29997__$1 = state_29997;
var statearr_30077_30143 = state_29997__$1;
(statearr_30077_30143[(2)] = null);

(statearr_30077_30143[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (37))){
var inst_29963 = (state_29997[(2)]);
var state_29997__$1 = state_29997;
var statearr_30078_30144 = state_29997__$1;
(statearr_30078_30144[(2)] = inst_29963);

(statearr_30078_30144[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (8))){
var inst_29858 = (state_29997[(9)]);
var inst_29871 = (state_29997[(22)]);
var inst_29871__$1 = cljs.core.seq.call(null,inst_29858);
var state_29997__$1 = (function (){var statearr_30079 = state_29997;
(statearr_30079[(22)] = inst_29871__$1);

return statearr_30079;
})();
if(inst_29871__$1){
var statearr_30080_30145 = state_29997__$1;
(statearr_30080_30145[(1)] = (10));

} else {
var statearr_30081_30146 = state_29997__$1;
(statearr_30081_30146[(1)] = (11));

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
}
});})(c__24153__auto__,map__29843,map__29843__$1,opts,before_jsload,on_jsload,reload_dependents,map__29844,map__29844__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24041__auto__,c__24153__auto__,map__29843,map__29843__$1,opts,before_jsload,on_jsload,reload_dependents,map__29844,map__29844__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24042__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24042__auto____0 = (function (){
var statearr_30085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30085[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24042__auto__);

(statearr_30085[(1)] = (1));

return statearr_30085;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24042__auto____1 = (function (state_29997){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_29997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e30086){if((e30086 instanceof Object)){
var ex__24045__auto__ = e30086;
var statearr_30087_30147 = state_29997;
(statearr_30087_30147[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30148 = state_29997;
state_29997 = G__30148;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24042__auto__ = function(state_29997){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24042__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24042__auto____1.call(this,state_29997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24042__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24042__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto__,map__29843,map__29843__$1,opts,before_jsload,on_jsload,reload_dependents,map__29844,map__29844__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24155__auto__ = (function (){var statearr_30088 = f__24154__auto__.call(null);
(statearr_30088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto__);

return statearr_30088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto__,map__29843,map__29843__$1,opts,before_jsload,on_jsload,reload_dependents,map__29844,map__29844__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24153__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30151,link){
var map__30154 = p__30151;
var map__30154__$1 = ((((!((map__30154 == null)))?((((map__30154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30154):map__30154);
var file = cljs.core.get.call(null,map__30154__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__30154,map__30154__$1,file){
return (function (p1__30149_SHARP_,p2__30150_SHARP_){
if(cljs.core._EQ_.call(null,p1__30149_SHARP_,p2__30150_SHARP_)){
return p1__30149_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__30154,map__30154__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30160){
var map__30161 = p__30160;
var map__30161__$1 = ((((!((map__30161 == null)))?((((map__30161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30161):map__30161);
var match_length = cljs.core.get.call(null,map__30161__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30161__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30156_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30156_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args30163 = [];
var len__23044__auto___30166 = arguments.length;
var i__23045__auto___30167 = (0);
while(true){
if((i__23045__auto___30167 < len__23044__auto___30166)){
args30163.push((arguments[i__23045__auto___30167]));

var G__30168 = (i__23045__auto___30167 + (1));
i__23045__auto___30167 = G__30168;
continue;
} else {
}
break;
}

var G__30165 = args30163.length;
switch (G__30165) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30163.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30170_SHARP_,p2__30171_SHARP_){
return cljs.core.assoc.call(null,p1__30170_SHARP_,cljs.core.get.call(null,p2__30171_SHARP_,key),p2__30171_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30172){
var map__30175 = p__30172;
var map__30175__$1 = ((((!((map__30175 == null)))?((((map__30175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30175):map__30175);
var f_data = map__30175__$1;
var file = cljs.core.get.call(null,map__30175__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30177,files_msg){
var map__30184 = p__30177;
var map__30184__$1 = ((((!((map__30184 == null)))?((((map__30184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30184):map__30184);
var opts = map__30184__$1;
var on_cssload = cljs.core.get.call(null,map__30184__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30186_30190 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30187_30191 = null;
var count__30188_30192 = (0);
var i__30189_30193 = (0);
while(true){
if((i__30189_30193 < count__30188_30192)){
var f_30194 = cljs.core._nth.call(null,chunk__30187_30191,i__30189_30193);
figwheel.client.file_reloading.reload_css_file.call(null,f_30194);

var G__30195 = seq__30186_30190;
var G__30196 = chunk__30187_30191;
var G__30197 = count__30188_30192;
var G__30198 = (i__30189_30193 + (1));
seq__30186_30190 = G__30195;
chunk__30187_30191 = G__30196;
count__30188_30192 = G__30197;
i__30189_30193 = G__30198;
continue;
} else {
var temp__4425__auto___30199 = cljs.core.seq.call(null,seq__30186_30190);
if(temp__4425__auto___30199){
var seq__30186_30200__$1 = temp__4425__auto___30199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30186_30200__$1)){
var c__22789__auto___30201 = cljs.core.chunk_first.call(null,seq__30186_30200__$1);
var G__30202 = cljs.core.chunk_rest.call(null,seq__30186_30200__$1);
var G__30203 = c__22789__auto___30201;
var G__30204 = cljs.core.count.call(null,c__22789__auto___30201);
var G__30205 = (0);
seq__30186_30190 = G__30202;
chunk__30187_30191 = G__30203;
count__30188_30192 = G__30204;
i__30189_30193 = G__30205;
continue;
} else {
var f_30206 = cljs.core.first.call(null,seq__30186_30200__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30206);

var G__30207 = cljs.core.next.call(null,seq__30186_30200__$1);
var G__30208 = null;
var G__30209 = (0);
var G__30210 = (0);
seq__30186_30190 = G__30207;
chunk__30187_30191 = G__30208;
count__30188_30192 = G__30209;
i__30189_30193 = G__30210;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30184,map__30184__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__30184,map__30184__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map