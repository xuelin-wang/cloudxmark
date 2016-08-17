// Compiled by ClojureScript 1.9.211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args41344 = [];
var len__22772__auto___41347 = arguments.length;
var i__22773__auto___41348 = (0);
while(true){
if((i__22773__auto___41348 < len__22772__auto___41347)){
args41344.push((arguments[i__22773__auto___41348]));

var G__41349 = (i__22773__auto___41348 + (1));
i__22773__auto___41348 = G__41349;
continue;
} else {
}
break;
}

var G__41346 = args41344.length;
switch (G__41346) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41344.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__22779__auto__ = [];
var len__22772__auto___41352 = arguments.length;
var i__22773__auto___41353 = (0);
while(true){
if((i__22773__auto___41353 < len__22772__auto___41352)){
args__22779__auto__.push((arguments[i__22773__auto___41353]));

var G__41354 = (i__22773__auto___41353 + (1));
i__22773__auto___41353 = G__41354;
continue;
} else {
}
break;
}

var argseq__22780__auto__ = ((((0) < args__22779__auto__.length))?(new cljs.core.IndexedSeq(args__22779__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22780__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq41351){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41351));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__22779__auto__ = [];
var len__22772__auto___41356 = arguments.length;
var i__22773__auto___41357 = (0);
while(true){
if((i__22773__auto___41357 < len__22772__auto___41356)){
args__22779__auto__.push((arguments[i__22773__auto___41357]));

var G__41358 = (i__22773__auto___41357 + (1));
i__22773__auto___41357 = G__41358;
continue;
} else {
}
break;
}

var argseq__22780__auto__ = ((((0) < args__22779__auto__.length))?(new cljs.core.IndexedSeq(args__22779__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22780__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq41355){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41355));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__41359 = cljs.core._EQ_;
var expr__41360 = (function (){var or__21589__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e41363){if((e41363 instanceof Error)){
var e = e41363;
return false;
} else {
throw e41363;

}
}})();
if(cljs.core.truth_(or__21589__auto__)){
return or__21589__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__41359.call(null,"true",expr__41360))){
return true;
} else {
if(cljs.core.truth_(pred__41359.call(null,"false",expr__41360))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__41360)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e41365){if((e41365 instanceof Error)){
var e = e41365;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e41365;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41366){
var map__41369 = p__41366;
var map__41369__$1 = ((((!((map__41369 == null)))?((((map__41369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41369):map__41369);
var message = cljs.core.get.call(null,map__41369__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41369__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21589__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21589__auto__)){
return or__21589__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21577__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21577__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21577__auto__;
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
var c__30029__auto___41531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___41531,ch){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto___41531,ch){
return (function (state_41500){
var state_val_41501 = (state_41500[(1)]);
if((state_val_41501 === (7))){
var inst_41496 = (state_41500[(2)]);
var state_41500__$1 = state_41500;
var statearr_41502_41532 = state_41500__$1;
(statearr_41502_41532[(2)] = inst_41496);

(statearr_41502_41532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (1))){
var state_41500__$1 = state_41500;
var statearr_41503_41533 = state_41500__$1;
(statearr_41503_41533[(2)] = null);

(statearr_41503_41533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (4))){
var inst_41453 = (state_41500[(7)]);
var inst_41453__$1 = (state_41500[(2)]);
var state_41500__$1 = (function (){var statearr_41504 = state_41500;
(statearr_41504[(7)] = inst_41453__$1);

return statearr_41504;
})();
if(cljs.core.truth_(inst_41453__$1)){
var statearr_41505_41534 = state_41500__$1;
(statearr_41505_41534[(1)] = (5));

} else {
var statearr_41506_41535 = state_41500__$1;
(statearr_41506_41535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (15))){
var inst_41460 = (state_41500[(8)]);
var inst_41475 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41460);
var inst_41476 = cljs.core.first.call(null,inst_41475);
var inst_41477 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41476);
var inst_41478 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_41477)].join('');
var inst_41479 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41478);
var state_41500__$1 = state_41500;
var statearr_41507_41536 = state_41500__$1;
(statearr_41507_41536[(2)] = inst_41479);

(statearr_41507_41536[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (13))){
var inst_41484 = (state_41500[(2)]);
var state_41500__$1 = state_41500;
var statearr_41508_41537 = state_41500__$1;
(statearr_41508_41537[(2)] = inst_41484);

(statearr_41508_41537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (6))){
var state_41500__$1 = state_41500;
var statearr_41509_41538 = state_41500__$1;
(statearr_41509_41538[(2)] = null);

(statearr_41509_41538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (17))){
var inst_41482 = (state_41500[(2)]);
var state_41500__$1 = state_41500;
var statearr_41510_41539 = state_41500__$1;
(statearr_41510_41539[(2)] = inst_41482);

(statearr_41510_41539[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (3))){
var inst_41498 = (state_41500[(2)]);
var state_41500__$1 = state_41500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41500__$1,inst_41498);
} else {
if((state_val_41501 === (12))){
var inst_41459 = (state_41500[(9)]);
var inst_41473 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41459,opts);
var state_41500__$1 = state_41500;
if(cljs.core.truth_(inst_41473)){
var statearr_41511_41540 = state_41500__$1;
(statearr_41511_41540[(1)] = (15));

} else {
var statearr_41512_41541 = state_41500__$1;
(statearr_41512_41541[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (2))){
var state_41500__$1 = state_41500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41500__$1,(4),ch);
} else {
if((state_val_41501 === (11))){
var inst_41460 = (state_41500[(8)]);
var inst_41465 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41466 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41460);
var inst_41467 = cljs.core.async.timeout.call(null,(1000));
var inst_41468 = [inst_41466,inst_41467];
var inst_41469 = (new cljs.core.PersistentVector(null,2,(5),inst_41465,inst_41468,null));
var state_41500__$1 = state_41500;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41500__$1,(14),inst_41469);
} else {
if((state_val_41501 === (9))){
var inst_41460 = (state_41500[(8)]);
var inst_41486 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41487 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41460);
var inst_41488 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41487);
var inst_41489 = [cljs.core.str("Not loading: "),cljs.core.str(inst_41488)].join('');
var inst_41490 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41489);
var state_41500__$1 = (function (){var statearr_41513 = state_41500;
(statearr_41513[(10)] = inst_41486);

return statearr_41513;
})();
var statearr_41514_41542 = state_41500__$1;
(statearr_41514_41542[(2)] = inst_41490);

(statearr_41514_41542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (5))){
var inst_41453 = (state_41500[(7)]);
var inst_41455 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41456 = (new cljs.core.PersistentArrayMap(null,2,inst_41455,null));
var inst_41457 = (new cljs.core.PersistentHashSet(null,inst_41456,null));
var inst_41458 = figwheel.client.focus_msgs.call(null,inst_41457,inst_41453);
var inst_41459 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41458);
var inst_41460 = cljs.core.first.call(null,inst_41458);
var inst_41461 = figwheel.client.autoload_QMARK_.call(null);
var state_41500__$1 = (function (){var statearr_41515 = state_41500;
(statearr_41515[(9)] = inst_41459);

(statearr_41515[(8)] = inst_41460);

return statearr_41515;
})();
if(cljs.core.truth_(inst_41461)){
var statearr_41516_41543 = state_41500__$1;
(statearr_41516_41543[(1)] = (8));

} else {
var statearr_41517_41544 = state_41500__$1;
(statearr_41517_41544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (14))){
var inst_41471 = (state_41500[(2)]);
var state_41500__$1 = state_41500;
var statearr_41518_41545 = state_41500__$1;
(statearr_41518_41545[(2)] = inst_41471);

(statearr_41518_41545[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (16))){
var state_41500__$1 = state_41500;
var statearr_41519_41546 = state_41500__$1;
(statearr_41519_41546[(2)] = null);

(statearr_41519_41546[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (10))){
var inst_41492 = (state_41500[(2)]);
var state_41500__$1 = (function (){var statearr_41520 = state_41500;
(statearr_41520[(11)] = inst_41492);

return statearr_41520;
})();
var statearr_41521_41547 = state_41500__$1;
(statearr_41521_41547[(2)] = null);

(statearr_41521_41547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (8))){
var inst_41459 = (state_41500[(9)]);
var inst_41463 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41459,opts);
var state_41500__$1 = state_41500;
if(cljs.core.truth_(inst_41463)){
var statearr_41522_41548 = state_41500__$1;
(statearr_41522_41548[(1)] = (11));

} else {
var statearr_41523_41549 = state_41500__$1;
(statearr_41523_41549[(1)] = (12));

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
});})(c__30029__auto___41531,ch))
;
return ((function (switch__29915__auto__,c__30029__auto___41531,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29916__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29916__auto____0 = (function (){
var statearr_41527 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41527[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29916__auto__);

(statearr_41527[(1)] = (1));

return statearr_41527;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29916__auto____1 = (function (state_41500){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_41500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e41528){if((e41528 instanceof Object)){
var ex__29919__auto__ = e41528;
var statearr_41529_41550 = state_41500;
(statearr_41529_41550[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41551 = state_41500;
state_41500 = G__41551;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29916__auto__ = function(state_41500){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29916__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29916__auto____1.call(this,state_41500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29916__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29916__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto___41531,ch))
})();
var state__30031__auto__ = (function (){var statearr_41530 = f__30030__auto__.call(null);
(statearr_41530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___41531);

return statearr_41530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___41531,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41552_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41552_SHARP_));
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
var base_path_41555 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41555){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e41554){if((e41554 instanceof Error)){
var e = e41554;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41555], null));
} else {
var e = e41554;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_41555))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41556){
var map__41565 = p__41556;
var map__41565__$1 = ((((!((map__41565 == null)))?((((map__41565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41565):map__41565);
var opts = map__41565__$1;
var build_id = cljs.core.get.call(null,map__41565__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41565,map__41565__$1,opts,build_id){
return (function (p__41567){
var vec__41568 = p__41567;
var seq__41569 = cljs.core.seq.call(null,vec__41568);
var first__41570 = cljs.core.first.call(null,seq__41569);
var seq__41569__$1 = cljs.core.next.call(null,seq__41569);
var map__41571 = first__41570;
var map__41571__$1 = ((((!((map__41571 == null)))?((((map__41571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41571):map__41571);
var msg = map__41571__$1;
var msg_name = cljs.core.get.call(null,map__41571__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41569__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41568,seq__41569,first__41570,seq__41569__$1,map__41571,map__41571__$1,msg,msg_name,_,map__41565,map__41565__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41568,seq__41569,first__41570,seq__41569__$1,map__41571,map__41571__$1,msg,msg_name,_,map__41565,map__41565__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41565,map__41565__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41579){
var vec__41580 = p__41579;
var seq__41581 = cljs.core.seq.call(null,vec__41580);
var first__41582 = cljs.core.first.call(null,seq__41581);
var seq__41581__$1 = cljs.core.next.call(null,seq__41581);
var map__41583 = first__41582;
var map__41583__$1 = ((((!((map__41583 == null)))?((((map__41583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41583):map__41583);
var msg = map__41583__$1;
var msg_name = cljs.core.get.call(null,map__41583__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41581__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41585){
var map__41597 = p__41585;
var map__41597__$1 = ((((!((map__41597 == null)))?((((map__41597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41597):map__41597);
var on_compile_warning = cljs.core.get.call(null,map__41597__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41597__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41597,map__41597__$1,on_compile_warning,on_compile_fail){
return (function (p__41599){
var vec__41600 = p__41599;
var seq__41601 = cljs.core.seq.call(null,vec__41600);
var first__41602 = cljs.core.first.call(null,seq__41601);
var seq__41601__$1 = cljs.core.next.call(null,seq__41601);
var map__41603 = first__41602;
var map__41603__$1 = ((((!((map__41603 == null)))?((((map__41603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41603):map__41603);
var msg = map__41603__$1;
var msg_name = cljs.core.get.call(null,map__41603__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41601__$1;
var pred__41605 = cljs.core._EQ_;
var expr__41606 = msg_name;
if(cljs.core.truth_(pred__41605.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41606))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41605.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41606))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41597,map__41597__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto__,msg_hist,msg_names,msg){
return (function (state_41814){
var state_val_41815 = (state_41814[(1)]);
if((state_val_41815 === (7))){
var inst_41742 = (state_41814[(2)]);
var state_41814__$1 = state_41814;
if(cljs.core.truth_(inst_41742)){
var statearr_41816_41862 = state_41814__$1;
(statearr_41816_41862[(1)] = (8));

} else {
var statearr_41817_41863 = state_41814__$1;
(statearr_41817_41863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (20))){
var inst_41808 = (state_41814[(2)]);
var state_41814__$1 = state_41814;
var statearr_41818_41864 = state_41814__$1;
(statearr_41818_41864[(2)] = inst_41808);

(statearr_41818_41864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (27))){
var inst_41804 = (state_41814[(2)]);
var state_41814__$1 = state_41814;
var statearr_41819_41865 = state_41814__$1;
(statearr_41819_41865[(2)] = inst_41804);

(statearr_41819_41865[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (1))){
var inst_41735 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41814__$1 = state_41814;
if(cljs.core.truth_(inst_41735)){
var statearr_41820_41866 = state_41814__$1;
(statearr_41820_41866[(1)] = (2));

} else {
var statearr_41821_41867 = state_41814__$1;
(statearr_41821_41867[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (24))){
var inst_41806 = (state_41814[(2)]);
var state_41814__$1 = state_41814;
var statearr_41822_41868 = state_41814__$1;
(statearr_41822_41868[(2)] = inst_41806);

(statearr_41822_41868[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (4))){
var inst_41812 = (state_41814[(2)]);
var state_41814__$1 = state_41814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41814__$1,inst_41812);
} else {
if((state_val_41815 === (15))){
var inst_41810 = (state_41814[(2)]);
var state_41814__$1 = state_41814;
var statearr_41823_41869 = state_41814__$1;
(statearr_41823_41869[(2)] = inst_41810);

(statearr_41823_41869[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (21))){
var inst_41769 = (state_41814[(2)]);
var state_41814__$1 = state_41814;
var statearr_41824_41870 = state_41814__$1;
(statearr_41824_41870[(2)] = inst_41769);

(statearr_41824_41870[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (31))){
var inst_41793 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41814__$1 = state_41814;
if(cljs.core.truth_(inst_41793)){
var statearr_41825_41871 = state_41814__$1;
(statearr_41825_41871[(1)] = (34));

} else {
var statearr_41826_41872 = state_41814__$1;
(statearr_41826_41872[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (32))){
var inst_41802 = (state_41814[(2)]);
var state_41814__$1 = state_41814;
var statearr_41827_41873 = state_41814__$1;
(statearr_41827_41873[(2)] = inst_41802);

(statearr_41827_41873[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (33))){
var inst_41791 = (state_41814[(2)]);
var state_41814__$1 = state_41814;
var statearr_41828_41874 = state_41814__$1;
(statearr_41828_41874[(2)] = inst_41791);

(statearr_41828_41874[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (13))){
var inst_41756 = figwheel.client.heads_up.clear.call(null);
var state_41814__$1 = state_41814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41814__$1,(16),inst_41756);
} else {
if((state_val_41815 === (22))){
var inst_41773 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41774 = figwheel.client.heads_up.append_warning_message.call(null,inst_41773);
var state_41814__$1 = state_41814;
var statearr_41829_41875 = state_41814__$1;
(statearr_41829_41875[(2)] = inst_41774);

(statearr_41829_41875[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (36))){
var inst_41800 = (state_41814[(2)]);
var state_41814__$1 = state_41814;
var statearr_41830_41876 = state_41814__$1;
(statearr_41830_41876[(2)] = inst_41800);

(statearr_41830_41876[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (29))){
var inst_41784 = (state_41814[(2)]);
var state_41814__$1 = state_41814;
var statearr_41831_41877 = state_41814__$1;
(statearr_41831_41877[(2)] = inst_41784);

(statearr_41831_41877[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (6))){
var inst_41737 = (state_41814[(7)]);
var state_41814__$1 = state_41814;
var statearr_41832_41878 = state_41814__$1;
(statearr_41832_41878[(2)] = inst_41737);

(statearr_41832_41878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (28))){
var inst_41780 = (state_41814[(2)]);
var inst_41781 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41782 = figwheel.client.heads_up.display_warning.call(null,inst_41781);
var state_41814__$1 = (function (){var statearr_41833 = state_41814;
(statearr_41833[(8)] = inst_41780);

return statearr_41833;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41814__$1,(29),inst_41782);
} else {
if((state_val_41815 === (25))){
var inst_41778 = figwheel.client.heads_up.clear.call(null);
var state_41814__$1 = state_41814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41814__$1,(28),inst_41778);
} else {
if((state_val_41815 === (34))){
var inst_41795 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41814__$1 = state_41814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41814__$1,(37),inst_41795);
} else {
if((state_val_41815 === (17))){
var inst_41762 = (state_41814[(2)]);
var state_41814__$1 = state_41814;
var statearr_41834_41879 = state_41814__$1;
(statearr_41834_41879[(2)] = inst_41762);

(statearr_41834_41879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (3))){
var inst_41754 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41814__$1 = state_41814;
if(cljs.core.truth_(inst_41754)){
var statearr_41835_41880 = state_41814__$1;
(statearr_41835_41880[(1)] = (13));

} else {
var statearr_41836_41881 = state_41814__$1;
(statearr_41836_41881[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (12))){
var inst_41750 = (state_41814[(2)]);
var state_41814__$1 = state_41814;
var statearr_41837_41882 = state_41814__$1;
(statearr_41837_41882[(2)] = inst_41750);

(statearr_41837_41882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (2))){
var inst_41737 = (state_41814[(7)]);
var inst_41737__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41814__$1 = (function (){var statearr_41838 = state_41814;
(statearr_41838[(7)] = inst_41737__$1);

return statearr_41838;
})();
if(cljs.core.truth_(inst_41737__$1)){
var statearr_41839_41883 = state_41814__$1;
(statearr_41839_41883[(1)] = (5));

} else {
var statearr_41840_41884 = state_41814__$1;
(statearr_41840_41884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (23))){
var inst_41776 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41814__$1 = state_41814;
if(cljs.core.truth_(inst_41776)){
var statearr_41841_41885 = state_41814__$1;
(statearr_41841_41885[(1)] = (25));

} else {
var statearr_41842_41886 = state_41814__$1;
(statearr_41842_41886[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (35))){
var state_41814__$1 = state_41814;
var statearr_41843_41887 = state_41814__$1;
(statearr_41843_41887[(2)] = null);

(statearr_41843_41887[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (19))){
var inst_41771 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41814__$1 = state_41814;
if(cljs.core.truth_(inst_41771)){
var statearr_41844_41888 = state_41814__$1;
(statearr_41844_41888[(1)] = (22));

} else {
var statearr_41845_41889 = state_41814__$1;
(statearr_41845_41889[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (11))){
var inst_41746 = (state_41814[(2)]);
var state_41814__$1 = state_41814;
var statearr_41846_41890 = state_41814__$1;
(statearr_41846_41890[(2)] = inst_41746);

(statearr_41846_41890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (9))){
var inst_41748 = figwheel.client.heads_up.clear.call(null);
var state_41814__$1 = state_41814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41814__$1,(12),inst_41748);
} else {
if((state_val_41815 === (5))){
var inst_41739 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41814__$1 = state_41814;
var statearr_41847_41891 = state_41814__$1;
(statearr_41847_41891[(2)] = inst_41739);

(statearr_41847_41891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (14))){
var inst_41764 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41814__$1 = state_41814;
if(cljs.core.truth_(inst_41764)){
var statearr_41848_41892 = state_41814__$1;
(statearr_41848_41892[(1)] = (18));

} else {
var statearr_41849_41893 = state_41814__$1;
(statearr_41849_41893[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (26))){
var inst_41786 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41814__$1 = state_41814;
if(cljs.core.truth_(inst_41786)){
var statearr_41850_41894 = state_41814__$1;
(statearr_41850_41894[(1)] = (30));

} else {
var statearr_41851_41895 = state_41814__$1;
(statearr_41851_41895[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (16))){
var inst_41758 = (state_41814[(2)]);
var inst_41759 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41760 = figwheel.client.heads_up.display_exception.call(null,inst_41759);
var state_41814__$1 = (function (){var statearr_41852 = state_41814;
(statearr_41852[(9)] = inst_41758);

return statearr_41852;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41814__$1,(17),inst_41760);
} else {
if((state_val_41815 === (30))){
var inst_41788 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41789 = figwheel.client.heads_up.display_warning.call(null,inst_41788);
var state_41814__$1 = state_41814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41814__$1,(33),inst_41789);
} else {
if((state_val_41815 === (10))){
var inst_41752 = (state_41814[(2)]);
var state_41814__$1 = state_41814;
var statearr_41853_41896 = state_41814__$1;
(statearr_41853_41896[(2)] = inst_41752);

(statearr_41853_41896[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (18))){
var inst_41766 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41767 = figwheel.client.heads_up.display_exception.call(null,inst_41766);
var state_41814__$1 = state_41814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41814__$1,(21),inst_41767);
} else {
if((state_val_41815 === (37))){
var inst_41797 = (state_41814[(2)]);
var state_41814__$1 = state_41814;
var statearr_41854_41897 = state_41814__$1;
(statearr_41854_41897[(2)] = inst_41797);

(statearr_41854_41897[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (8))){
var inst_41744 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41814__$1 = state_41814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41814__$1,(11),inst_41744);
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
});})(c__30029__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29915__auto__,c__30029__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29916__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29916__auto____0 = (function (){
var statearr_41858 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41858[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29916__auto__);

(statearr_41858[(1)] = (1));

return statearr_41858;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29916__auto____1 = (function (state_41814){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_41814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e41859){if((e41859 instanceof Object)){
var ex__29919__auto__ = e41859;
var statearr_41860_41898 = state_41814;
(statearr_41860_41898[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41899 = state_41814;
state_41814 = G__41899;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29916__auto__ = function(state_41814){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29916__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29916__auto____1.call(this,state_41814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29916__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29916__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto__,msg_hist,msg_names,msg))
})();
var state__30031__auto__ = (function (){var statearr_41861 = f__30030__auto__.call(null);
(statearr_41861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_41861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__,msg_hist,msg_names,msg))
);

return c__30029__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30029__auto___41962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___41962,ch){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto___41962,ch){
return (function (state_41945){
var state_val_41946 = (state_41945[(1)]);
if((state_val_41946 === (1))){
var state_41945__$1 = state_41945;
var statearr_41947_41963 = state_41945__$1;
(statearr_41947_41963[(2)] = null);

(statearr_41947_41963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (2))){
var state_41945__$1 = state_41945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41945__$1,(4),ch);
} else {
if((state_val_41946 === (3))){
var inst_41943 = (state_41945[(2)]);
var state_41945__$1 = state_41945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41945__$1,inst_41943);
} else {
if((state_val_41946 === (4))){
var inst_41933 = (state_41945[(7)]);
var inst_41933__$1 = (state_41945[(2)]);
var state_41945__$1 = (function (){var statearr_41948 = state_41945;
(statearr_41948[(7)] = inst_41933__$1);

return statearr_41948;
})();
if(cljs.core.truth_(inst_41933__$1)){
var statearr_41949_41964 = state_41945__$1;
(statearr_41949_41964[(1)] = (5));

} else {
var statearr_41950_41965 = state_41945__$1;
(statearr_41950_41965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (5))){
var inst_41933 = (state_41945[(7)]);
var inst_41935 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41933);
var state_41945__$1 = state_41945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41945__$1,(8),inst_41935);
} else {
if((state_val_41946 === (6))){
var state_41945__$1 = state_41945;
var statearr_41951_41966 = state_41945__$1;
(statearr_41951_41966[(2)] = null);

(statearr_41951_41966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (7))){
var inst_41941 = (state_41945[(2)]);
var state_41945__$1 = state_41945;
var statearr_41952_41967 = state_41945__$1;
(statearr_41952_41967[(2)] = inst_41941);

(statearr_41952_41967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41946 === (8))){
var inst_41937 = (state_41945[(2)]);
var state_41945__$1 = (function (){var statearr_41953 = state_41945;
(statearr_41953[(8)] = inst_41937);

return statearr_41953;
})();
var statearr_41954_41968 = state_41945__$1;
(statearr_41954_41968[(2)] = null);

(statearr_41954_41968[(1)] = (2));


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
});})(c__30029__auto___41962,ch))
;
return ((function (switch__29915__auto__,c__30029__auto___41962,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29916__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29916__auto____0 = (function (){
var statearr_41958 = [null,null,null,null,null,null,null,null,null];
(statearr_41958[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29916__auto__);

(statearr_41958[(1)] = (1));

return statearr_41958;
});
var figwheel$client$heads_up_plugin_$_state_machine__29916__auto____1 = (function (state_41945){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_41945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e41959){if((e41959 instanceof Object)){
var ex__29919__auto__ = e41959;
var statearr_41960_41969 = state_41945;
(statearr_41960_41969[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41970 = state_41945;
state_41945 = G__41970;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29916__auto__ = function(state_41945){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29916__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29916__auto____1.call(this,state_41945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29916__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29916__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto___41962,ch))
})();
var state__30031__auto__ = (function (){var statearr_41961 = f__30030__auto__.call(null);
(statearr_41961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___41962);

return statearr_41961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___41962,ch))
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
var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto__){
return (function (state_41991){
var state_val_41992 = (state_41991[(1)]);
if((state_val_41992 === (1))){
var inst_41986 = cljs.core.async.timeout.call(null,(3000));
var state_41991__$1 = state_41991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41991__$1,(2),inst_41986);
} else {
if((state_val_41992 === (2))){
var inst_41988 = (state_41991[(2)]);
var inst_41989 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41991__$1 = (function (){var statearr_41993 = state_41991;
(statearr_41993[(7)] = inst_41988);

return statearr_41993;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41991__$1,inst_41989);
} else {
return null;
}
}
});})(c__30029__auto__))
;
return ((function (switch__29915__auto__,c__30029__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29916__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29916__auto____0 = (function (){
var statearr_41997 = [null,null,null,null,null,null,null,null];
(statearr_41997[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29916__auto__);

(statearr_41997[(1)] = (1));

return statearr_41997;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29916__auto____1 = (function (state_41991){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_41991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e41998){if((e41998 instanceof Object)){
var ex__29919__auto__ = e41998;
var statearr_41999_42001 = state_41991;
(statearr_41999_42001[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42002 = state_41991;
state_41991 = G__42002;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29916__auto__ = function(state_41991){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29916__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29916__auto____1.call(this,state_41991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29916__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29916__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto__))
})();
var state__30031__auto__ = (function (){var statearr_42000 = f__30030__auto__.call(null);
(statearr_42000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_42000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__))
);

return c__30029__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6503__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6503__auto__)){
var figwheel_version = temp__6503__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__,figwheel_version,temp__6503__auto__){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto__,figwheel_version,temp__6503__auto__){
return (function (state_42025){
var state_val_42026 = (state_42025[(1)]);
if((state_val_42026 === (1))){
var inst_42019 = cljs.core.async.timeout.call(null,(2000));
var state_42025__$1 = state_42025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42025__$1,(2),inst_42019);
} else {
if((state_val_42026 === (2))){
var inst_42021 = (state_42025[(2)]);
var inst_42022 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_42023 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_42022);
var state_42025__$1 = (function (){var statearr_42027 = state_42025;
(statearr_42027[(7)] = inst_42021);

return statearr_42027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42025__$1,inst_42023);
} else {
return null;
}
}
});})(c__30029__auto__,figwheel_version,temp__6503__auto__))
;
return ((function (switch__29915__auto__,c__30029__auto__,figwheel_version,temp__6503__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29916__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29916__auto____0 = (function (){
var statearr_42031 = [null,null,null,null,null,null,null,null];
(statearr_42031[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29916__auto__);

(statearr_42031[(1)] = (1));

return statearr_42031;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29916__auto____1 = (function (state_42025){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_42025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e42032){if((e42032 instanceof Object)){
var ex__29919__auto__ = e42032;
var statearr_42033_42035 = state_42025;
(statearr_42033_42035[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42036 = state_42025;
state_42025 = G__42036;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29916__auto__ = function(state_42025){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29916__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29916__auto____1.call(this,state_42025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29916__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29916__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto__,figwheel_version,temp__6503__auto__))
})();
var state__30031__auto__ = (function (){var statearr_42034 = f__30030__auto__.call(null);
(statearr_42034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_42034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__,figwheel_version,temp__6503__auto__))
);

return c__30029__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__42037){
var map__42041 = p__42037;
var map__42041__$1 = ((((!((map__42041 == null)))?((((map__42041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42041):map__42041);
var file = cljs.core.get.call(null,map__42041__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42041__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42041__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42043 = "";
var G__42043__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__42043),cljs.core.str("file "),cljs.core.str(file)].join(''):G__42043);
var G__42043__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__42043__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__42043__$1);
if(cljs.core.truth_((function (){var and__21577__auto__ = line;
if(cljs.core.truth_(and__21577__auto__)){
return column;
} else {
return and__21577__auto__;
}
})())){
return [cljs.core.str(G__42043__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__42043__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42044){
var map__42051 = p__42044;
var map__42051__$1 = ((((!((map__42051 == null)))?((((map__42051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42051):map__42051);
var ed = map__42051__$1;
var formatted_exception = cljs.core.get.call(null,map__42051__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__42051__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42051__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42053_42057 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42054_42058 = null;
var count__42055_42059 = (0);
var i__42056_42060 = (0);
while(true){
if((i__42056_42060 < count__42055_42059)){
var msg_42061 = cljs.core._nth.call(null,chunk__42054_42058,i__42056_42060);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42061);

var G__42062 = seq__42053_42057;
var G__42063 = chunk__42054_42058;
var G__42064 = count__42055_42059;
var G__42065 = (i__42056_42060 + (1));
seq__42053_42057 = G__42062;
chunk__42054_42058 = G__42063;
count__42055_42059 = G__42064;
i__42056_42060 = G__42065;
continue;
} else {
var temp__6503__auto___42066 = cljs.core.seq.call(null,seq__42053_42057);
if(temp__6503__auto___42066){
var seq__42053_42067__$1 = temp__6503__auto___42066;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42053_42067__$1)){
var c__22492__auto___42068 = cljs.core.chunk_first.call(null,seq__42053_42067__$1);
var G__42069 = cljs.core.chunk_rest.call(null,seq__42053_42067__$1);
var G__42070 = c__22492__auto___42068;
var G__42071 = cljs.core.count.call(null,c__22492__auto___42068);
var G__42072 = (0);
seq__42053_42057 = G__42069;
chunk__42054_42058 = G__42070;
count__42055_42059 = G__42071;
i__42056_42060 = G__42072;
continue;
} else {
var msg_42073 = cljs.core.first.call(null,seq__42053_42067__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42073);

var G__42074 = cljs.core.next.call(null,seq__42053_42067__$1);
var G__42075 = null;
var G__42076 = (0);
var G__42077 = (0);
seq__42053_42057 = G__42074;
chunk__42054_42058 = G__42075;
count__42055_42059 = G__42076;
i__42056_42060 = G__42077;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42078){
var map__42081 = p__42078;
var map__42081__$1 = ((((!((map__42081 == null)))?((((map__42081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42081):map__42081);
var w = map__42081__$1;
var message = cljs.core.get.call(null,map__42081__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"js/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"js/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__21577__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21577__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21577__auto__;
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
var seq__42093 = cljs.core.seq.call(null,plugins);
var chunk__42094 = null;
var count__42095 = (0);
var i__42096 = (0);
while(true){
if((i__42096 < count__42095)){
var vec__42097 = cljs.core._nth.call(null,chunk__42094,i__42096);
var k = cljs.core.nth.call(null,vec__42097,(0),null);
var plugin = cljs.core.nth.call(null,vec__42097,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42103 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42093,chunk__42094,count__42095,i__42096,pl_42103,vec__42097,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42103.call(null,msg_hist);
});})(seq__42093,chunk__42094,count__42095,i__42096,pl_42103,vec__42097,k,plugin))
);
} else {
}

var G__42104 = seq__42093;
var G__42105 = chunk__42094;
var G__42106 = count__42095;
var G__42107 = (i__42096 + (1));
seq__42093 = G__42104;
chunk__42094 = G__42105;
count__42095 = G__42106;
i__42096 = G__42107;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__42093);
if(temp__6503__auto__){
var seq__42093__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42093__$1)){
var c__22492__auto__ = cljs.core.chunk_first.call(null,seq__42093__$1);
var G__42108 = cljs.core.chunk_rest.call(null,seq__42093__$1);
var G__42109 = c__22492__auto__;
var G__42110 = cljs.core.count.call(null,c__22492__auto__);
var G__42111 = (0);
seq__42093 = G__42108;
chunk__42094 = G__42109;
count__42095 = G__42110;
i__42096 = G__42111;
continue;
} else {
var vec__42100 = cljs.core.first.call(null,seq__42093__$1);
var k = cljs.core.nth.call(null,vec__42100,(0),null);
var plugin = cljs.core.nth.call(null,vec__42100,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42112 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42093,chunk__42094,count__42095,i__42096,pl_42112,vec__42100,k,plugin,seq__42093__$1,temp__6503__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42112.call(null,msg_hist);
});})(seq__42093,chunk__42094,count__42095,i__42096,pl_42112,vec__42100,k,plugin,seq__42093__$1,temp__6503__auto__))
);
} else {
}

var G__42113 = cljs.core.next.call(null,seq__42093__$1);
var G__42114 = null;
var G__42115 = (0);
var G__42116 = (0);
seq__42093 = G__42113;
chunk__42094 = G__42114;
count__42095 = G__42115;
i__42096 = G__42116;
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
var args42117 = [];
var len__22772__auto___42124 = arguments.length;
var i__22773__auto___42125 = (0);
while(true){
if((i__22773__auto___42125 < len__22772__auto___42124)){
args42117.push((arguments[i__22773__auto___42125]));

var G__42126 = (i__22773__auto___42125 + (1));
i__22773__auto___42125 = G__42126;
continue;
} else {
}
break;
}

var G__42119 = args42117.length;
switch (G__42119) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42117.length)].join('')));

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
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__42120_42128 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__42121_42129 = null;
var count__42122_42130 = (0);
var i__42123_42131 = (0);
while(true){
if((i__42123_42131 < count__42122_42130)){
var msg_42132 = cljs.core._nth.call(null,chunk__42121_42129,i__42123_42131);
figwheel.client.socket.handle_incoming_message.call(null,msg_42132);

var G__42133 = seq__42120_42128;
var G__42134 = chunk__42121_42129;
var G__42135 = count__42122_42130;
var G__42136 = (i__42123_42131 + (1));
seq__42120_42128 = G__42133;
chunk__42121_42129 = G__42134;
count__42122_42130 = G__42135;
i__42123_42131 = G__42136;
continue;
} else {
var temp__6503__auto___42137 = cljs.core.seq.call(null,seq__42120_42128);
if(temp__6503__auto___42137){
var seq__42120_42138__$1 = temp__6503__auto___42137;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42120_42138__$1)){
var c__22492__auto___42139 = cljs.core.chunk_first.call(null,seq__42120_42138__$1);
var G__42140 = cljs.core.chunk_rest.call(null,seq__42120_42138__$1);
var G__42141 = c__22492__auto___42139;
var G__42142 = cljs.core.count.call(null,c__22492__auto___42139);
var G__42143 = (0);
seq__42120_42128 = G__42140;
chunk__42121_42129 = G__42141;
count__42122_42130 = G__42142;
i__42123_42131 = G__42143;
continue;
} else {
var msg_42144 = cljs.core.first.call(null,seq__42120_42138__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_42144);

var G__42145 = cljs.core.next.call(null,seq__42120_42138__$1);
var G__42146 = null;
var G__42147 = (0);
var G__42148 = (0);
seq__42120_42128 = G__42145;
chunk__42121_42129 = G__42146;
count__42122_42130 = G__42147;
i__42123_42131 = G__42148;
continue;
}
} else {
}
}
break;
}

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
var args__22779__auto__ = [];
var len__22772__auto___42153 = arguments.length;
var i__22773__auto___42154 = (0);
while(true){
if((i__22773__auto___42154 < len__22772__auto___42153)){
args__22779__auto__.push((arguments[i__22773__auto___42154]));

var G__42155 = (i__22773__auto___42154 + (1));
i__22773__auto___42154 = G__42155;
continue;
} else {
}
break;
}

var argseq__22780__auto__ = ((((0) < args__22779__auto__.length))?(new cljs.core.IndexedSeq(args__22779__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22780__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__42150){
var map__42151 = p__42150;
var map__42151__$1 = ((((!((map__42151 == null)))?((((map__42151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42151):map__42151);
var opts = map__42151__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq42149){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42149));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e42157){if((e42157 instanceof Error)){
var e = e42157;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e42157;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__42161){
var map__42162 = p__42161;
var map__42162__$1 = ((((!((map__42162 == null)))?((((map__42162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42162):map__42162);
var msg_name = cljs.core.get.call(null,map__42162__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1471419427564