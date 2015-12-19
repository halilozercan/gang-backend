// Compiled by ClojureScript 1.7.189 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__30277 = cljs.core._EQ_;
var expr__30278 = (function (){var or__21986__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30277.call(null,"true",expr__30278))){
return true;
} else {
if(cljs.core.truth_(pred__30277.call(null,"false",expr__30278))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30278)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__23051__auto__ = [];
var len__23044__auto___30281 = arguments.length;
var i__23045__auto___30282 = (0);
while(true){
if((i__23045__auto___30282 < len__23044__auto___30281)){
args__23051__auto__.push((arguments[i__23045__auto___30282]));

var G__30283 = (i__23045__auto___30282 + (1));
i__23045__auto___30282 = G__30283;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((0) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__23052__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq30280){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30280));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30284){
var map__30287 = p__30284;
var map__30287__$1 = ((((!((map__30287 == null)))?((((map__30287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30287):map__30287);
var message = cljs.core.get.call(null,map__30287__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30287__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21986__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21986__auto__)){
return or__21986__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21974__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21974__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21974__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24153__auto___30449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto___30449,ch){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto___30449,ch){
return (function (state_30418){
var state_val_30419 = (state_30418[(1)]);
if((state_val_30419 === (7))){
var inst_30414 = (state_30418[(2)]);
var state_30418__$1 = state_30418;
var statearr_30420_30450 = state_30418__$1;
(statearr_30420_30450[(2)] = inst_30414);

(statearr_30420_30450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (1))){
var state_30418__$1 = state_30418;
var statearr_30421_30451 = state_30418__$1;
(statearr_30421_30451[(2)] = null);

(statearr_30421_30451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (4))){
var inst_30371 = (state_30418[(7)]);
var inst_30371__$1 = (state_30418[(2)]);
var state_30418__$1 = (function (){var statearr_30422 = state_30418;
(statearr_30422[(7)] = inst_30371__$1);

return statearr_30422;
})();
if(cljs.core.truth_(inst_30371__$1)){
var statearr_30423_30452 = state_30418__$1;
(statearr_30423_30452[(1)] = (5));

} else {
var statearr_30424_30453 = state_30418__$1;
(statearr_30424_30453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (15))){
var inst_30378 = (state_30418[(8)]);
var inst_30393 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30378);
var inst_30394 = cljs.core.first.call(null,inst_30393);
var inst_30395 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30394);
var inst_30396 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_30395)].join('');
var inst_30397 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30396);
var state_30418__$1 = state_30418;
var statearr_30425_30454 = state_30418__$1;
(statearr_30425_30454[(2)] = inst_30397);

(statearr_30425_30454[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (13))){
var inst_30402 = (state_30418[(2)]);
var state_30418__$1 = state_30418;
var statearr_30426_30455 = state_30418__$1;
(statearr_30426_30455[(2)] = inst_30402);

(statearr_30426_30455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (6))){
var state_30418__$1 = state_30418;
var statearr_30427_30456 = state_30418__$1;
(statearr_30427_30456[(2)] = null);

(statearr_30427_30456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (17))){
var inst_30400 = (state_30418[(2)]);
var state_30418__$1 = state_30418;
var statearr_30428_30457 = state_30418__$1;
(statearr_30428_30457[(2)] = inst_30400);

(statearr_30428_30457[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (3))){
var inst_30416 = (state_30418[(2)]);
var state_30418__$1 = state_30418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30418__$1,inst_30416);
} else {
if((state_val_30419 === (12))){
var inst_30377 = (state_30418[(9)]);
var inst_30391 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30377,opts);
var state_30418__$1 = state_30418;
if(cljs.core.truth_(inst_30391)){
var statearr_30429_30458 = state_30418__$1;
(statearr_30429_30458[(1)] = (15));

} else {
var statearr_30430_30459 = state_30418__$1;
(statearr_30430_30459[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (2))){
var state_30418__$1 = state_30418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30418__$1,(4),ch);
} else {
if((state_val_30419 === (11))){
var inst_30378 = (state_30418[(8)]);
var inst_30383 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30384 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30378);
var inst_30385 = cljs.core.async.timeout.call(null,(1000));
var inst_30386 = [inst_30384,inst_30385];
var inst_30387 = (new cljs.core.PersistentVector(null,2,(5),inst_30383,inst_30386,null));
var state_30418__$1 = state_30418;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30418__$1,(14),inst_30387);
} else {
if((state_val_30419 === (9))){
var inst_30378 = (state_30418[(8)]);
var inst_30404 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30405 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30378);
var inst_30406 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30405);
var inst_30407 = [cljs.core.str("Not loading: "),cljs.core.str(inst_30406)].join('');
var inst_30408 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30407);
var state_30418__$1 = (function (){var statearr_30431 = state_30418;
(statearr_30431[(10)] = inst_30404);

return statearr_30431;
})();
var statearr_30432_30460 = state_30418__$1;
(statearr_30432_30460[(2)] = inst_30408);

(statearr_30432_30460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (5))){
var inst_30371 = (state_30418[(7)]);
var inst_30373 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30374 = (new cljs.core.PersistentArrayMap(null,2,inst_30373,null));
var inst_30375 = (new cljs.core.PersistentHashSet(null,inst_30374,null));
var inst_30376 = figwheel.client.focus_msgs.call(null,inst_30375,inst_30371);
var inst_30377 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30376);
var inst_30378 = cljs.core.first.call(null,inst_30376);
var inst_30379 = figwheel.client.autoload_QMARK_.call(null);
var state_30418__$1 = (function (){var statearr_30433 = state_30418;
(statearr_30433[(9)] = inst_30377);

(statearr_30433[(8)] = inst_30378);

return statearr_30433;
})();
if(cljs.core.truth_(inst_30379)){
var statearr_30434_30461 = state_30418__$1;
(statearr_30434_30461[(1)] = (8));

} else {
var statearr_30435_30462 = state_30418__$1;
(statearr_30435_30462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (14))){
var inst_30389 = (state_30418[(2)]);
var state_30418__$1 = state_30418;
var statearr_30436_30463 = state_30418__$1;
(statearr_30436_30463[(2)] = inst_30389);

(statearr_30436_30463[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (16))){
var state_30418__$1 = state_30418;
var statearr_30437_30464 = state_30418__$1;
(statearr_30437_30464[(2)] = null);

(statearr_30437_30464[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (10))){
var inst_30410 = (state_30418[(2)]);
var state_30418__$1 = (function (){var statearr_30438 = state_30418;
(statearr_30438[(11)] = inst_30410);

return statearr_30438;
})();
var statearr_30439_30465 = state_30418__$1;
(statearr_30439_30465[(2)] = null);

(statearr_30439_30465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (8))){
var inst_30377 = (state_30418[(9)]);
var inst_30381 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30377,opts);
var state_30418__$1 = state_30418;
if(cljs.core.truth_(inst_30381)){
var statearr_30440_30466 = state_30418__$1;
(statearr_30440_30466[(1)] = (11));

} else {
var statearr_30441_30467 = state_30418__$1;
(statearr_30441_30467[(1)] = (12));

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
});})(c__24153__auto___30449,ch))
;
return ((function (switch__24041__auto__,c__24153__auto___30449,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24042__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24042__auto____0 = (function (){
var statearr_30445 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30445[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24042__auto__);

(statearr_30445[(1)] = (1));

return statearr_30445;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24042__auto____1 = (function (state_30418){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_30418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e30446){if((e30446 instanceof Object)){
var ex__24045__auto__ = e30446;
var statearr_30447_30468 = state_30418;
(statearr_30447_30468[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30469 = state_30418;
state_30418 = G__30469;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24042__auto__ = function(state_30418){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24042__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24042__auto____1.call(this,state_30418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24042__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24042__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto___30449,ch))
})();
var state__24155__auto__ = (function (){var statearr_30448 = f__24154__auto__.call(null);
(statearr_30448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto___30449);

return statearr_30448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto___30449,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30470_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30470_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30477 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30477){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_30475 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30476 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30476;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30475;
}}catch (e30474){if((e30474 instanceof Error)){
var e = e30474;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30477], null));
} else {
var e = e30474;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30477))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30478){
var map__30485 = p__30478;
var map__30485__$1 = ((((!((map__30485 == null)))?((((map__30485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30485):map__30485);
var opts = map__30485__$1;
var build_id = cljs.core.get.call(null,map__30485__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30485,map__30485__$1,opts,build_id){
return (function (p__30487){
var vec__30488 = p__30487;
var map__30489 = cljs.core.nth.call(null,vec__30488,(0),null);
var map__30489__$1 = ((((!((map__30489 == null)))?((((map__30489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30489):map__30489);
var msg = map__30489__$1;
var msg_name = cljs.core.get.call(null,map__30489__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30488,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30488,map__30489,map__30489__$1,msg,msg_name,_,map__30485,map__30485__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30488,map__30489,map__30489__$1,msg,msg_name,_,map__30485,map__30485__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30485,map__30485__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30495){
var vec__30496 = p__30495;
var map__30497 = cljs.core.nth.call(null,vec__30496,(0),null);
var map__30497__$1 = ((((!((map__30497 == null)))?((((map__30497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30497):map__30497);
var msg = map__30497__$1;
var msg_name = cljs.core.get.call(null,map__30497__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30496,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30499){
var map__30509 = p__30499;
var map__30509__$1 = ((((!((map__30509 == null)))?((((map__30509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30509):map__30509);
var on_compile_warning = cljs.core.get.call(null,map__30509__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30509__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30509,map__30509__$1,on_compile_warning,on_compile_fail){
return (function (p__30511){
var vec__30512 = p__30511;
var map__30513 = cljs.core.nth.call(null,vec__30512,(0),null);
var map__30513__$1 = ((((!((map__30513 == null)))?((((map__30513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30513):map__30513);
var msg = map__30513__$1;
var msg_name = cljs.core.get.call(null,map__30513__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30512,(1));
var pred__30515 = cljs.core._EQ_;
var expr__30516 = msg_name;
if(cljs.core.truth_(pred__30515.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30516))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30515.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30516))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30509,map__30509__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto__,msg_hist,msg_names,msg){
return (function (state_30732){
var state_val_30733 = (state_30732[(1)]);
if((state_val_30733 === (7))){
var inst_30656 = (state_30732[(2)]);
var state_30732__$1 = state_30732;
if(cljs.core.truth_(inst_30656)){
var statearr_30734_30780 = state_30732__$1;
(statearr_30734_30780[(1)] = (8));

} else {
var statearr_30735_30781 = state_30732__$1;
(statearr_30735_30781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (20))){
var inst_30726 = (state_30732[(2)]);
var state_30732__$1 = state_30732;
var statearr_30736_30782 = state_30732__$1;
(statearr_30736_30782[(2)] = inst_30726);

(statearr_30736_30782[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (27))){
var inst_30722 = (state_30732[(2)]);
var state_30732__$1 = state_30732;
var statearr_30737_30783 = state_30732__$1;
(statearr_30737_30783[(2)] = inst_30722);

(statearr_30737_30783[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (1))){
var inst_30649 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30732__$1 = state_30732;
if(cljs.core.truth_(inst_30649)){
var statearr_30738_30784 = state_30732__$1;
(statearr_30738_30784[(1)] = (2));

} else {
var statearr_30739_30785 = state_30732__$1;
(statearr_30739_30785[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (24))){
var inst_30724 = (state_30732[(2)]);
var state_30732__$1 = state_30732;
var statearr_30740_30786 = state_30732__$1;
(statearr_30740_30786[(2)] = inst_30724);

(statearr_30740_30786[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (4))){
var inst_30730 = (state_30732[(2)]);
var state_30732__$1 = state_30732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30732__$1,inst_30730);
} else {
if((state_val_30733 === (15))){
var inst_30728 = (state_30732[(2)]);
var state_30732__$1 = state_30732;
var statearr_30741_30787 = state_30732__$1;
(statearr_30741_30787[(2)] = inst_30728);

(statearr_30741_30787[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (21))){
var inst_30687 = (state_30732[(2)]);
var state_30732__$1 = state_30732;
var statearr_30742_30788 = state_30732__$1;
(statearr_30742_30788[(2)] = inst_30687);

(statearr_30742_30788[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (31))){
var inst_30711 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30732__$1 = state_30732;
if(cljs.core.truth_(inst_30711)){
var statearr_30743_30789 = state_30732__$1;
(statearr_30743_30789[(1)] = (34));

} else {
var statearr_30744_30790 = state_30732__$1;
(statearr_30744_30790[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (32))){
var inst_30720 = (state_30732[(2)]);
var state_30732__$1 = state_30732;
var statearr_30745_30791 = state_30732__$1;
(statearr_30745_30791[(2)] = inst_30720);

(statearr_30745_30791[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (33))){
var inst_30709 = (state_30732[(2)]);
var state_30732__$1 = state_30732;
var statearr_30746_30792 = state_30732__$1;
(statearr_30746_30792[(2)] = inst_30709);

(statearr_30746_30792[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (13))){
var inst_30670 = figwheel.client.heads_up.clear.call(null);
var state_30732__$1 = state_30732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30732__$1,(16),inst_30670);
} else {
if((state_val_30733 === (22))){
var inst_30691 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30692 = figwheel.client.heads_up.append_message.call(null,inst_30691);
var state_30732__$1 = state_30732;
var statearr_30747_30793 = state_30732__$1;
(statearr_30747_30793[(2)] = inst_30692);

(statearr_30747_30793[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (36))){
var inst_30718 = (state_30732[(2)]);
var state_30732__$1 = state_30732;
var statearr_30748_30794 = state_30732__$1;
(statearr_30748_30794[(2)] = inst_30718);

(statearr_30748_30794[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (29))){
var inst_30702 = (state_30732[(2)]);
var state_30732__$1 = state_30732;
var statearr_30749_30795 = state_30732__$1;
(statearr_30749_30795[(2)] = inst_30702);

(statearr_30749_30795[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (6))){
var inst_30651 = (state_30732[(7)]);
var state_30732__$1 = state_30732;
var statearr_30750_30796 = state_30732__$1;
(statearr_30750_30796[(2)] = inst_30651);

(statearr_30750_30796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (28))){
var inst_30698 = (state_30732[(2)]);
var inst_30699 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30700 = figwheel.client.heads_up.display_warning.call(null,inst_30699);
var state_30732__$1 = (function (){var statearr_30751 = state_30732;
(statearr_30751[(8)] = inst_30698);

return statearr_30751;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30732__$1,(29),inst_30700);
} else {
if((state_val_30733 === (25))){
var inst_30696 = figwheel.client.heads_up.clear.call(null);
var state_30732__$1 = state_30732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30732__$1,(28),inst_30696);
} else {
if((state_val_30733 === (34))){
var inst_30713 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30732__$1 = state_30732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30732__$1,(37),inst_30713);
} else {
if((state_val_30733 === (17))){
var inst_30678 = (state_30732[(2)]);
var state_30732__$1 = state_30732;
var statearr_30752_30797 = state_30732__$1;
(statearr_30752_30797[(2)] = inst_30678);

(statearr_30752_30797[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (3))){
var inst_30668 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30732__$1 = state_30732;
if(cljs.core.truth_(inst_30668)){
var statearr_30753_30798 = state_30732__$1;
(statearr_30753_30798[(1)] = (13));

} else {
var statearr_30754_30799 = state_30732__$1;
(statearr_30754_30799[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (12))){
var inst_30664 = (state_30732[(2)]);
var state_30732__$1 = state_30732;
var statearr_30755_30800 = state_30732__$1;
(statearr_30755_30800[(2)] = inst_30664);

(statearr_30755_30800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (2))){
var inst_30651 = (state_30732[(7)]);
var inst_30651__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30732__$1 = (function (){var statearr_30756 = state_30732;
(statearr_30756[(7)] = inst_30651__$1);

return statearr_30756;
})();
if(cljs.core.truth_(inst_30651__$1)){
var statearr_30757_30801 = state_30732__$1;
(statearr_30757_30801[(1)] = (5));

} else {
var statearr_30758_30802 = state_30732__$1;
(statearr_30758_30802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (23))){
var inst_30694 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30732__$1 = state_30732;
if(cljs.core.truth_(inst_30694)){
var statearr_30759_30803 = state_30732__$1;
(statearr_30759_30803[(1)] = (25));

} else {
var statearr_30760_30804 = state_30732__$1;
(statearr_30760_30804[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (35))){
var state_30732__$1 = state_30732;
var statearr_30761_30805 = state_30732__$1;
(statearr_30761_30805[(2)] = null);

(statearr_30761_30805[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (19))){
var inst_30689 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30732__$1 = state_30732;
if(cljs.core.truth_(inst_30689)){
var statearr_30762_30806 = state_30732__$1;
(statearr_30762_30806[(1)] = (22));

} else {
var statearr_30763_30807 = state_30732__$1;
(statearr_30763_30807[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (11))){
var inst_30660 = (state_30732[(2)]);
var state_30732__$1 = state_30732;
var statearr_30764_30808 = state_30732__$1;
(statearr_30764_30808[(2)] = inst_30660);

(statearr_30764_30808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (9))){
var inst_30662 = figwheel.client.heads_up.clear.call(null);
var state_30732__$1 = state_30732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30732__$1,(12),inst_30662);
} else {
if((state_val_30733 === (5))){
var inst_30653 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30732__$1 = state_30732;
var statearr_30765_30809 = state_30732__$1;
(statearr_30765_30809[(2)] = inst_30653);

(statearr_30765_30809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (14))){
var inst_30680 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30732__$1 = state_30732;
if(cljs.core.truth_(inst_30680)){
var statearr_30766_30810 = state_30732__$1;
(statearr_30766_30810[(1)] = (18));

} else {
var statearr_30767_30811 = state_30732__$1;
(statearr_30767_30811[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (26))){
var inst_30704 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30732__$1 = state_30732;
if(cljs.core.truth_(inst_30704)){
var statearr_30768_30812 = state_30732__$1;
(statearr_30768_30812[(1)] = (30));

} else {
var statearr_30769_30813 = state_30732__$1;
(statearr_30769_30813[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (16))){
var inst_30672 = (state_30732[(2)]);
var inst_30673 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30674 = figwheel.client.format_messages.call(null,inst_30673);
var inst_30675 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30676 = figwheel.client.heads_up.display_error.call(null,inst_30674,inst_30675);
var state_30732__$1 = (function (){var statearr_30770 = state_30732;
(statearr_30770[(9)] = inst_30672);

return statearr_30770;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30732__$1,(17),inst_30676);
} else {
if((state_val_30733 === (30))){
var inst_30706 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30707 = figwheel.client.heads_up.display_warning.call(null,inst_30706);
var state_30732__$1 = state_30732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30732__$1,(33),inst_30707);
} else {
if((state_val_30733 === (10))){
var inst_30666 = (state_30732[(2)]);
var state_30732__$1 = state_30732;
var statearr_30771_30814 = state_30732__$1;
(statearr_30771_30814[(2)] = inst_30666);

(statearr_30771_30814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (18))){
var inst_30682 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30683 = figwheel.client.format_messages.call(null,inst_30682);
var inst_30684 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30685 = figwheel.client.heads_up.display_error.call(null,inst_30683,inst_30684);
var state_30732__$1 = state_30732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30732__$1,(21),inst_30685);
} else {
if((state_val_30733 === (37))){
var inst_30715 = (state_30732[(2)]);
var state_30732__$1 = state_30732;
var statearr_30772_30815 = state_30732__$1;
(statearr_30772_30815[(2)] = inst_30715);

(statearr_30772_30815[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (8))){
var inst_30658 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30732__$1 = state_30732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30732__$1,(11),inst_30658);
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
});})(c__24153__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24041__auto__,c__24153__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24042__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24042__auto____0 = (function (){
var statearr_30776 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30776[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24042__auto__);

(statearr_30776[(1)] = (1));

return statearr_30776;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24042__auto____1 = (function (state_30732){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_30732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e30777){if((e30777 instanceof Object)){
var ex__24045__auto__ = e30777;
var statearr_30778_30816 = state_30732;
(statearr_30778_30816[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30817 = state_30732;
state_30732 = G__30817;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24042__auto__ = function(state_30732){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24042__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24042__auto____1.call(this,state_30732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24042__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24042__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto__,msg_hist,msg_names,msg))
})();
var state__24155__auto__ = (function (){var statearr_30779 = f__24154__auto__.call(null);
(statearr_30779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto__);

return statearr_30779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto__,msg_hist,msg_names,msg))
);

return c__24153__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24153__auto___30880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto___30880,ch){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto___30880,ch){
return (function (state_30863){
var state_val_30864 = (state_30863[(1)]);
if((state_val_30864 === (1))){
var state_30863__$1 = state_30863;
var statearr_30865_30881 = state_30863__$1;
(statearr_30865_30881[(2)] = null);

(statearr_30865_30881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30864 === (2))){
var state_30863__$1 = state_30863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30863__$1,(4),ch);
} else {
if((state_val_30864 === (3))){
var inst_30861 = (state_30863[(2)]);
var state_30863__$1 = state_30863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30863__$1,inst_30861);
} else {
if((state_val_30864 === (4))){
var inst_30851 = (state_30863[(7)]);
var inst_30851__$1 = (state_30863[(2)]);
var state_30863__$1 = (function (){var statearr_30866 = state_30863;
(statearr_30866[(7)] = inst_30851__$1);

return statearr_30866;
})();
if(cljs.core.truth_(inst_30851__$1)){
var statearr_30867_30882 = state_30863__$1;
(statearr_30867_30882[(1)] = (5));

} else {
var statearr_30868_30883 = state_30863__$1;
(statearr_30868_30883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30864 === (5))){
var inst_30851 = (state_30863[(7)]);
var inst_30853 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30851);
var state_30863__$1 = state_30863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30863__$1,(8),inst_30853);
} else {
if((state_val_30864 === (6))){
var state_30863__$1 = state_30863;
var statearr_30869_30884 = state_30863__$1;
(statearr_30869_30884[(2)] = null);

(statearr_30869_30884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30864 === (7))){
var inst_30859 = (state_30863[(2)]);
var state_30863__$1 = state_30863;
var statearr_30870_30885 = state_30863__$1;
(statearr_30870_30885[(2)] = inst_30859);

(statearr_30870_30885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30864 === (8))){
var inst_30855 = (state_30863[(2)]);
var state_30863__$1 = (function (){var statearr_30871 = state_30863;
(statearr_30871[(8)] = inst_30855);

return statearr_30871;
})();
var statearr_30872_30886 = state_30863__$1;
(statearr_30872_30886[(2)] = null);

(statearr_30872_30886[(1)] = (2));


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
});})(c__24153__auto___30880,ch))
;
return ((function (switch__24041__auto__,c__24153__auto___30880,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24042__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24042__auto____0 = (function (){
var statearr_30876 = [null,null,null,null,null,null,null,null,null];
(statearr_30876[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24042__auto__);

(statearr_30876[(1)] = (1));

return statearr_30876;
});
var figwheel$client$heads_up_plugin_$_state_machine__24042__auto____1 = (function (state_30863){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_30863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e30877){if((e30877 instanceof Object)){
var ex__24045__auto__ = e30877;
var statearr_30878_30887 = state_30863;
(statearr_30878_30887[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30888 = state_30863;
state_30863 = G__30888;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24042__auto__ = function(state_30863){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24042__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24042__auto____1.call(this,state_30863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24042__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24042__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto___30880,ch))
})();
var state__24155__auto__ = (function (){var statearr_30879 = f__24154__auto__.call(null);
(statearr_30879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto___30880);

return statearr_30879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto___30880,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24153__auto__){
return (function (){
var f__24154__auto__ = (function (){var switch__24041__auto__ = ((function (c__24153__auto__){
return (function (state_30909){
var state_val_30910 = (state_30909[(1)]);
if((state_val_30910 === (1))){
var inst_30904 = cljs.core.async.timeout.call(null,(3000));
var state_30909__$1 = state_30909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30909__$1,(2),inst_30904);
} else {
if((state_val_30910 === (2))){
var inst_30906 = (state_30909[(2)]);
var inst_30907 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30909__$1 = (function (){var statearr_30911 = state_30909;
(statearr_30911[(7)] = inst_30906);

return statearr_30911;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30909__$1,inst_30907);
} else {
return null;
}
}
});})(c__24153__auto__))
;
return ((function (switch__24041__auto__,c__24153__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24042__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24042__auto____0 = (function (){
var statearr_30915 = [null,null,null,null,null,null,null,null];
(statearr_30915[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24042__auto__);

(statearr_30915[(1)] = (1));

return statearr_30915;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24042__auto____1 = (function (state_30909){
while(true){
var ret_value__24043__auto__ = (function (){try{while(true){
var result__24044__auto__ = switch__24041__auto__.call(null,state_30909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24044__auto__;
}
break;
}
}catch (e30916){if((e30916 instanceof Object)){
var ex__24045__auto__ = e30916;
var statearr_30917_30919 = state_30909;
(statearr_30917_30919[(5)] = ex__24045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30920 = state_30909;
state_30909 = G__30920;
continue;
} else {
return ret_value__24043__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24042__auto__ = function(state_30909){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24042__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24042__auto____1.call(this,state_30909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24042__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24042__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24042__auto__;
})()
;})(switch__24041__auto__,c__24153__auto__))
})();
var state__24155__auto__ = (function (){var statearr_30918 = f__24154__auto__.call(null);
(statearr_30918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24153__auto__);

return statearr_30918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24155__auto__);
});})(c__24153__auto__))
);

return c__24153__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30921){
var map__30928 = p__30921;
var map__30928__$1 = ((((!((map__30928 == null)))?((((map__30928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30928):map__30928);
var ed = map__30928__$1;
var formatted_exception = cljs.core.get.call(null,map__30928__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30928__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30928__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30930_30934 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30931_30935 = null;
var count__30932_30936 = (0);
var i__30933_30937 = (0);
while(true){
if((i__30933_30937 < count__30932_30936)){
var msg_30938 = cljs.core._nth.call(null,chunk__30931_30935,i__30933_30937);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30938);

var G__30939 = seq__30930_30934;
var G__30940 = chunk__30931_30935;
var G__30941 = count__30932_30936;
var G__30942 = (i__30933_30937 + (1));
seq__30930_30934 = G__30939;
chunk__30931_30935 = G__30940;
count__30932_30936 = G__30941;
i__30933_30937 = G__30942;
continue;
} else {
var temp__4425__auto___30943 = cljs.core.seq.call(null,seq__30930_30934);
if(temp__4425__auto___30943){
var seq__30930_30944__$1 = temp__4425__auto___30943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30930_30944__$1)){
var c__22789__auto___30945 = cljs.core.chunk_first.call(null,seq__30930_30944__$1);
var G__30946 = cljs.core.chunk_rest.call(null,seq__30930_30944__$1);
var G__30947 = c__22789__auto___30945;
var G__30948 = cljs.core.count.call(null,c__22789__auto___30945);
var G__30949 = (0);
seq__30930_30934 = G__30946;
chunk__30931_30935 = G__30947;
count__30932_30936 = G__30948;
i__30933_30937 = G__30949;
continue;
} else {
var msg_30950 = cljs.core.first.call(null,seq__30930_30944__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30950);

var G__30951 = cljs.core.next.call(null,seq__30930_30944__$1);
var G__30952 = null;
var G__30953 = (0);
var G__30954 = (0);
seq__30930_30934 = G__30951;
chunk__30931_30935 = G__30952;
count__30932_30936 = G__30953;
i__30933_30937 = G__30954;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30955){
var map__30958 = p__30955;
var map__30958__$1 = ((((!((map__30958 == null)))?((((map__30958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30958):map__30958);
var w = map__30958__$1;
var message = cljs.core.get.call(null,map__30958__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__21974__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21974__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21974__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30966 = cljs.core.seq.call(null,plugins);
var chunk__30967 = null;
var count__30968 = (0);
var i__30969 = (0);
while(true){
if((i__30969 < count__30968)){
var vec__30970 = cljs.core._nth.call(null,chunk__30967,i__30969);
var k = cljs.core.nth.call(null,vec__30970,(0),null);
var plugin = cljs.core.nth.call(null,vec__30970,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30972 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30966,chunk__30967,count__30968,i__30969,pl_30972,vec__30970,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30972.call(null,msg_hist);
});})(seq__30966,chunk__30967,count__30968,i__30969,pl_30972,vec__30970,k,plugin))
);
} else {
}

var G__30973 = seq__30966;
var G__30974 = chunk__30967;
var G__30975 = count__30968;
var G__30976 = (i__30969 + (1));
seq__30966 = G__30973;
chunk__30967 = G__30974;
count__30968 = G__30975;
i__30969 = G__30976;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30966);
if(temp__4425__auto__){
var seq__30966__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30966__$1)){
var c__22789__auto__ = cljs.core.chunk_first.call(null,seq__30966__$1);
var G__30977 = cljs.core.chunk_rest.call(null,seq__30966__$1);
var G__30978 = c__22789__auto__;
var G__30979 = cljs.core.count.call(null,c__22789__auto__);
var G__30980 = (0);
seq__30966 = G__30977;
chunk__30967 = G__30978;
count__30968 = G__30979;
i__30969 = G__30980;
continue;
} else {
var vec__30971 = cljs.core.first.call(null,seq__30966__$1);
var k = cljs.core.nth.call(null,vec__30971,(0),null);
var plugin = cljs.core.nth.call(null,vec__30971,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30981 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30966,chunk__30967,count__30968,i__30969,pl_30981,vec__30971,k,plugin,seq__30966__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30981.call(null,msg_hist);
});})(seq__30966,chunk__30967,count__30968,i__30969,pl_30981,vec__30971,k,plugin,seq__30966__$1,temp__4425__auto__))
);
} else {
}

var G__30982 = cljs.core.next.call(null,seq__30966__$1);
var G__30983 = null;
var G__30984 = (0);
var G__30985 = (0);
seq__30966 = G__30982;
chunk__30967 = G__30983;
count__30968 = G__30984;
i__30969 = G__30985;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args30986 = [];
var len__23044__auto___30989 = arguments.length;
var i__23045__auto___30990 = (0);
while(true){
if((i__23045__auto___30990 < len__23044__auto___30989)){
args30986.push((arguments[i__23045__auto___30990]));

var G__30991 = (i__23045__auto___30990 + (1));
i__23045__auto___30990 = G__30991;
continue;
} else {
}
break;
}

var G__30988 = args30986.length;
switch (G__30988) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30986.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__23051__auto__ = [];
var len__23044__auto___30997 = arguments.length;
var i__23045__auto___30998 = (0);
while(true){
if((i__23045__auto___30998 < len__23044__auto___30997)){
args__23051__auto__.push((arguments[i__23045__auto___30998]));

var G__30999 = (i__23045__auto___30998 + (1));
i__23045__auto___30998 = G__30999;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((0) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__23052__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30994){
var map__30995 = p__30994;
var map__30995__$1 = ((((!((map__30995 == null)))?((((map__30995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30995):map__30995);
var opts = map__30995__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30993){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30993));
});

//# sourceMappingURL=client.js.map