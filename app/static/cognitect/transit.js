// Compiled by ClojureScript 1.7.189 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__28685_28689 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__28686_28690 = null;
var count__28687_28691 = (0);
var i__28688_28692 = (0);
while(true){
if((i__28688_28692 < count__28687_28691)){
var k_28693 = cljs.core._nth.call(null,chunk__28686_28690,i__28688_28692);
var v_28694 = (b[k_28693]);
(a[k_28693] = v_28694);

var G__28695 = seq__28685_28689;
var G__28696 = chunk__28686_28690;
var G__28697 = count__28687_28691;
var G__28698 = (i__28688_28692 + (1));
seq__28685_28689 = G__28695;
chunk__28686_28690 = G__28696;
count__28687_28691 = G__28697;
i__28688_28692 = G__28698;
continue;
} else {
var temp__4425__auto___28699 = cljs.core.seq.call(null,seq__28685_28689);
if(temp__4425__auto___28699){
var seq__28685_28700__$1 = temp__4425__auto___28699;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28685_28700__$1)){
var c__22789__auto___28701 = cljs.core.chunk_first.call(null,seq__28685_28700__$1);
var G__28702 = cljs.core.chunk_rest.call(null,seq__28685_28700__$1);
var G__28703 = c__22789__auto___28701;
var G__28704 = cljs.core.count.call(null,c__22789__auto___28701);
var G__28705 = (0);
seq__28685_28689 = G__28702;
chunk__28686_28690 = G__28703;
count__28687_28691 = G__28704;
i__28688_28692 = G__28705;
continue;
} else {
var k_28706 = cljs.core.first.call(null,seq__28685_28700__$1);
var v_28707 = (b[k_28706]);
(a[k_28706] = v_28707);

var G__28708 = cljs.core.next.call(null,seq__28685_28700__$1);
var G__28709 = null;
var G__28710 = (0);
var G__28711 = (0);
seq__28685_28689 = G__28708;
chunk__28686_28690 = G__28709;
count__28687_28691 = G__28710;
i__28688_28692 = G__28711;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__22584__auto__,writer__22585__auto__,opt__22586__auto__){
return cljs.core._write.call(null,writer__22585__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__22584__auto__,writer__22585__auto__,opt__22586__auto__){
return cljs.core._write.call(null,writer__22585__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args28712 = [];
var len__23044__auto___28715 = arguments.length;
var i__23045__auto___28716 = (0);
while(true){
if((i__23045__auto___28716 < len__23044__auto___28715)){
args28712.push((arguments[i__23045__auto___28716]));

var G__28717 = (i__23045__auto___28716 + (1));
i__23045__auto___28716 = G__28717;
continue;
} else {
}
break;
}

var G__28714 = args28712.length;
switch (G__28714) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28712.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__28719 = (i + (2));
var G__28720 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__28719;
ret = G__28720;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__22584__auto__,writer__22585__auto__,opt__22586__auto__){
return cljs.core._write.call(null,writer__22585__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__22584__auto__,writer__22585__auto__,opt__22586__auto__){
return cljs.core._write.call(null,writer__22585__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__28721_28725 = cljs.core.seq.call(null,v);
var chunk__28722_28726 = null;
var count__28723_28727 = (0);
var i__28724_28728 = (0);
while(true){
if((i__28724_28728 < count__28723_28727)){
var x_28729 = cljs.core._nth.call(null,chunk__28722_28726,i__28724_28728);
ret.push(x_28729);

var G__28730 = seq__28721_28725;
var G__28731 = chunk__28722_28726;
var G__28732 = count__28723_28727;
var G__28733 = (i__28724_28728 + (1));
seq__28721_28725 = G__28730;
chunk__28722_28726 = G__28731;
count__28723_28727 = G__28732;
i__28724_28728 = G__28733;
continue;
} else {
var temp__4425__auto___28734 = cljs.core.seq.call(null,seq__28721_28725);
if(temp__4425__auto___28734){
var seq__28721_28735__$1 = temp__4425__auto___28734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28721_28735__$1)){
var c__22789__auto___28736 = cljs.core.chunk_first.call(null,seq__28721_28735__$1);
var G__28737 = cljs.core.chunk_rest.call(null,seq__28721_28735__$1);
var G__28738 = c__22789__auto___28736;
var G__28739 = cljs.core.count.call(null,c__22789__auto___28736);
var G__28740 = (0);
seq__28721_28725 = G__28737;
chunk__28722_28726 = G__28738;
count__28723_28727 = G__28739;
i__28724_28728 = G__28740;
continue;
} else {
var x_28741 = cljs.core.first.call(null,seq__28721_28735__$1);
ret.push(x_28741);

var G__28742 = cljs.core.next.call(null,seq__28721_28735__$1);
var G__28743 = null;
var G__28744 = (0);
var G__28745 = (0);
seq__28721_28725 = G__28742;
chunk__28722_28726 = G__28743;
count__28723_28727 = G__28744;
i__28724_28728 = G__28745;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__22584__auto__,writer__22585__auto__,opt__22586__auto__){
return cljs.core._write.call(null,writer__22585__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__22584__auto__,writer__22585__auto__,opt__22586__auto__){
return cljs.core._write.call(null,writer__22585__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__28746_28750 = cljs.core.seq.call(null,v);
var chunk__28747_28751 = null;
var count__28748_28752 = (0);
var i__28749_28753 = (0);
while(true){
if((i__28749_28753 < count__28748_28752)){
var x_28754 = cljs.core._nth.call(null,chunk__28747_28751,i__28749_28753);
ret.push(x_28754);

var G__28755 = seq__28746_28750;
var G__28756 = chunk__28747_28751;
var G__28757 = count__28748_28752;
var G__28758 = (i__28749_28753 + (1));
seq__28746_28750 = G__28755;
chunk__28747_28751 = G__28756;
count__28748_28752 = G__28757;
i__28749_28753 = G__28758;
continue;
} else {
var temp__4425__auto___28759 = cljs.core.seq.call(null,seq__28746_28750);
if(temp__4425__auto___28759){
var seq__28746_28760__$1 = temp__4425__auto___28759;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28746_28760__$1)){
var c__22789__auto___28761 = cljs.core.chunk_first.call(null,seq__28746_28760__$1);
var G__28762 = cljs.core.chunk_rest.call(null,seq__28746_28760__$1);
var G__28763 = c__22789__auto___28761;
var G__28764 = cljs.core.count.call(null,c__22789__auto___28761);
var G__28765 = (0);
seq__28746_28750 = G__28762;
chunk__28747_28751 = G__28763;
count__28748_28752 = G__28764;
i__28749_28753 = G__28765;
continue;
} else {
var x_28766 = cljs.core.first.call(null,seq__28746_28760__$1);
ret.push(x_28766);

var G__28767 = cljs.core.next.call(null,seq__28746_28760__$1);
var G__28768 = null;
var G__28769 = (0);
var G__28770 = (0);
seq__28746_28750 = G__28767;
chunk__28747_28751 = G__28768;
count__28748_28752 = G__28769;
i__28749_28753 = G__28770;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__22584__auto__,writer__22585__auto__,opt__22586__auto__){
return cljs.core._write.call(null,writer__22585__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__28771_28775 = cljs.core.seq.call(null,v);
var chunk__28772_28776 = null;
var count__28773_28777 = (0);
var i__28774_28778 = (0);
while(true){
if((i__28774_28778 < count__28773_28777)){
var x_28779 = cljs.core._nth.call(null,chunk__28772_28776,i__28774_28778);
ret.push(x_28779);

var G__28780 = seq__28771_28775;
var G__28781 = chunk__28772_28776;
var G__28782 = count__28773_28777;
var G__28783 = (i__28774_28778 + (1));
seq__28771_28775 = G__28780;
chunk__28772_28776 = G__28781;
count__28773_28777 = G__28782;
i__28774_28778 = G__28783;
continue;
} else {
var temp__4425__auto___28784 = cljs.core.seq.call(null,seq__28771_28775);
if(temp__4425__auto___28784){
var seq__28771_28785__$1 = temp__4425__auto___28784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28771_28785__$1)){
var c__22789__auto___28786 = cljs.core.chunk_first.call(null,seq__28771_28785__$1);
var G__28787 = cljs.core.chunk_rest.call(null,seq__28771_28785__$1);
var G__28788 = c__22789__auto___28786;
var G__28789 = cljs.core.count.call(null,c__22789__auto___28786);
var G__28790 = (0);
seq__28771_28775 = G__28787;
chunk__28772_28776 = G__28788;
count__28773_28777 = G__28789;
i__28774_28778 = G__28790;
continue;
} else {
var x_28791 = cljs.core.first.call(null,seq__28771_28785__$1);
ret.push(x_28791);

var G__28792 = cljs.core.next.call(null,seq__28771_28785__$1);
var G__28793 = null;
var G__28794 = (0);
var G__28795 = (0);
seq__28771_28775 = G__28792;
chunk__28772_28776 = G__28793;
count__28773_28777 = G__28794;
i__28774_28778 = G__28795;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__22584__auto__,writer__22585__auto__,opt__22586__auto__){
return cljs.core._write.call(null,writer__22585__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__22584__auto__,writer__22585__auto__,opt__22586__auto__){
return cljs.core._write.call(null,writer__22585__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args28796 = [];
var len__23044__auto___28807 = arguments.length;
var i__23045__auto___28808 = (0);
while(true){
if((i__23045__auto___28808 < len__23044__auto___28807)){
args28796.push((arguments[i__23045__auto___28808]));

var G__28809 = (i__23045__auto___28808 + (1));
i__23045__auto___28808 = G__28809;
continue;
} else {
}
break;
}

var G__28798 = args28796.length;
switch (G__28798) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28796.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__28799 = obj;
G__28799.push(kfn.call(null,k),vfn.call(null,v));

return G__28799;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x28800 = cljs.core.clone.call(null,handlers);
x28800.forEach = ((function (x28800,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__28801 = cljs.core.seq.call(null,coll);
var chunk__28802 = null;
var count__28803 = (0);
var i__28804 = (0);
while(true){
if((i__28804 < count__28803)){
var vec__28805 = cljs.core._nth.call(null,chunk__28802,i__28804);
var k = cljs.core.nth.call(null,vec__28805,(0),null);
var v = cljs.core.nth.call(null,vec__28805,(1),null);
f.call(null,v,k);

var G__28811 = seq__28801;
var G__28812 = chunk__28802;
var G__28813 = count__28803;
var G__28814 = (i__28804 + (1));
seq__28801 = G__28811;
chunk__28802 = G__28812;
count__28803 = G__28813;
i__28804 = G__28814;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28801);
if(temp__4425__auto__){
var seq__28801__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28801__$1)){
var c__22789__auto__ = cljs.core.chunk_first.call(null,seq__28801__$1);
var G__28815 = cljs.core.chunk_rest.call(null,seq__28801__$1);
var G__28816 = c__22789__auto__;
var G__28817 = cljs.core.count.call(null,c__22789__auto__);
var G__28818 = (0);
seq__28801 = G__28815;
chunk__28802 = G__28816;
count__28803 = G__28817;
i__28804 = G__28818;
continue;
} else {
var vec__28806 = cljs.core.first.call(null,seq__28801__$1);
var k = cljs.core.nth.call(null,vec__28806,(0),null);
var v = cljs.core.nth.call(null,vec__28806,(1),null);
f.call(null,v,k);

var G__28819 = cljs.core.next.call(null,seq__28801__$1);
var G__28820 = null;
var G__28821 = (0);
var G__28822 = (0);
seq__28801 = G__28819;
chunk__28802 = G__28820;
count__28803 = G__28821;
i__28804 = G__28822;
continue;
}
} else {
return null;
}
}
break;
}
});})(x28800,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x28800;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args28823 = [];
var len__23044__auto___28829 = arguments.length;
var i__23045__auto___28830 = (0);
while(true){
if((i__23045__auto___28830 < len__23044__auto___28829)){
args28823.push((arguments[i__23045__auto___28830]));

var G__28831 = (i__23045__auto___28830 + (1));
i__23045__auto___28830 = G__28831;
continue;
} else {
}
break;
}

var G__28825 = args28823.length;
switch (G__28825) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28823.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit28826 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit28826 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta28827){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta28827 = meta28827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit28826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28828,meta28827__$1){
var self__ = this;
var _28828__$1 = this;
return (new cognitect.transit.t_cognitect$transit28826(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta28827__$1));
});

cognitect.transit.t_cognitect$transit28826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28828){
var self__ = this;
var _28828__$1 = this;
return self__.meta28827;
});

cognitect.transit.t_cognitect$transit28826.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit28826.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit28826.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit28826.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit28826.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta28827","meta28827",-441577323,null)], null);
});

cognitect.transit.t_cognitect$transit28826.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit28826.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit28826";

cognitect.transit.t_cognitect$transit28826.cljs$lang$ctorPrWriter = (function (this__22584__auto__,writer__22585__auto__,opt__22586__auto__){
return cljs.core._write.call(null,writer__22585__auto__,"cognitect.transit/t_cognitect$transit28826");
});

cognitect.transit.__GT_t_cognitect$transit28826 = (function cognitect$transit$__GT_t_cognitect$transit28826(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta28827){
return (new cognitect.transit.t_cognitect$transit28826(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta28827));
});

}

return (new cognitect.transit.t_cognitect$transit28826(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__21986__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map