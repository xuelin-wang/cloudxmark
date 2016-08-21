// Compiled by ClojureScript 1.9.225 {}
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
var args41370 = [];
var len__22773__auto___41373 = arguments.length;
var i__22774__auto___41374 = (0);
while(true){
if((i__22774__auto___41374 < len__22773__auto___41373)){
args41370.push((arguments[i__22774__auto___41374]));

var G__41375 = (i__22774__auto___41374 + (1));
i__22774__auto___41374 = G__41375;
continue;
} else {
}
break;
}

var G__41372 = args41370.length;
switch (G__41372) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41370.length)].join('')));

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
var args__22780__auto__ = [];
var len__22773__auto___41378 = arguments.length;
var i__22774__auto___41379 = (0);
while(true){
if((i__22774__auto___41379 < len__22773__auto___41378)){
args__22780__auto__.push((arguments[i__22774__auto___41379]));

var G__41380 = (i__22774__auto___41379 + (1));
i__22774__auto___41379 = G__41380;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq41377){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41377));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__22780__auto__ = [];
var len__22773__auto___41382 = arguments.length;
var i__22774__auto___41383 = (0);
while(true){
if((i__22774__auto___41383 < len__22773__auto___41382)){
args__22780__auto__.push((arguments[i__22774__auto___41383]));

var G__41384 = (i__22774__auto___41383 + (1));
i__22774__auto___41383 = G__41384;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq41381){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41381));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__41385 = cljs.core._EQ_;
var expr__41386 = (function (){var or__21590__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e41389){if((e41389 instanceof Error)){
var e = e41389;
return false;
} else {
throw e41389;

}
}})();
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__41385.call(null,"true",expr__41386))){
return true;
} else {
if(cljs.core.truth_(pred__41385.call(null,"false",expr__41386))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__41386)].join('')));
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
}catch (e41391){if((e41391 instanceof Error)){
var e = e41391;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e41391;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41392){
var map__41395 = p__41392;
var map__41395__$1 = ((((!((map__41395 == null)))?((((map__41395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41395):map__41395);
var message = cljs.core.get.call(null,map__41395__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41395__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21590__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21578__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21578__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21578__auto__;
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
var c__31895__auto___41557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto___41557,ch){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto___41557,ch){
return (function (state_41526){
var state_val_41527 = (state_41526[(1)]);
if((state_val_41527 === (7))){
var inst_41522 = (state_41526[(2)]);
var state_41526__$1 = state_41526;
var statearr_41528_41558 = state_41526__$1;
(statearr_41528_41558[(2)] = inst_41522);

(statearr_41528_41558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (1))){
var state_41526__$1 = state_41526;
var statearr_41529_41559 = state_41526__$1;
(statearr_41529_41559[(2)] = null);

(statearr_41529_41559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (4))){
var inst_41479 = (state_41526[(7)]);
var inst_41479__$1 = (state_41526[(2)]);
var state_41526__$1 = (function (){var statearr_41530 = state_41526;
(statearr_41530[(7)] = inst_41479__$1);

return statearr_41530;
})();
if(cljs.core.truth_(inst_41479__$1)){
var statearr_41531_41560 = state_41526__$1;
(statearr_41531_41560[(1)] = (5));

} else {
var statearr_41532_41561 = state_41526__$1;
(statearr_41532_41561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (15))){
var inst_41486 = (state_41526[(8)]);
var inst_41501 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41486);
var inst_41502 = cljs.core.first.call(null,inst_41501);
var inst_41503 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41502);
var inst_41504 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_41503)].join('');
var inst_41505 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41504);
var state_41526__$1 = state_41526;
var statearr_41533_41562 = state_41526__$1;
(statearr_41533_41562[(2)] = inst_41505);

(statearr_41533_41562[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (13))){
var inst_41510 = (state_41526[(2)]);
var state_41526__$1 = state_41526;
var statearr_41534_41563 = state_41526__$1;
(statearr_41534_41563[(2)] = inst_41510);

(statearr_41534_41563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (6))){
var state_41526__$1 = state_41526;
var statearr_41535_41564 = state_41526__$1;
(statearr_41535_41564[(2)] = null);

(statearr_41535_41564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (17))){
var inst_41508 = (state_41526[(2)]);
var state_41526__$1 = state_41526;
var statearr_41536_41565 = state_41526__$1;
(statearr_41536_41565[(2)] = inst_41508);

(statearr_41536_41565[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (3))){
var inst_41524 = (state_41526[(2)]);
var state_41526__$1 = state_41526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41526__$1,inst_41524);
} else {
if((state_val_41527 === (12))){
var inst_41485 = (state_41526[(9)]);
var inst_41499 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41485,opts);
var state_41526__$1 = state_41526;
if(cljs.core.truth_(inst_41499)){
var statearr_41537_41566 = state_41526__$1;
(statearr_41537_41566[(1)] = (15));

} else {
var statearr_41538_41567 = state_41526__$1;
(statearr_41538_41567[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (2))){
var state_41526__$1 = state_41526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41526__$1,(4),ch);
} else {
if((state_val_41527 === (11))){
var inst_41486 = (state_41526[(8)]);
var inst_41491 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41492 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41486);
var inst_41493 = cljs.core.async.timeout.call(null,(1000));
var inst_41494 = [inst_41492,inst_41493];
var inst_41495 = (new cljs.core.PersistentVector(null,2,(5),inst_41491,inst_41494,null));
var state_41526__$1 = state_41526;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41526__$1,(14),inst_41495);
} else {
if((state_val_41527 === (9))){
var inst_41486 = (state_41526[(8)]);
var inst_41512 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41513 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41486);
var inst_41514 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41513);
var inst_41515 = [cljs.core.str("Not loading: "),cljs.core.str(inst_41514)].join('');
var inst_41516 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41515);
var state_41526__$1 = (function (){var statearr_41539 = state_41526;
(statearr_41539[(10)] = inst_41512);

return statearr_41539;
})();
var statearr_41540_41568 = state_41526__$1;
(statearr_41540_41568[(2)] = inst_41516);

(statearr_41540_41568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (5))){
var inst_41479 = (state_41526[(7)]);
var inst_41481 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41482 = (new cljs.core.PersistentArrayMap(null,2,inst_41481,null));
var inst_41483 = (new cljs.core.PersistentHashSet(null,inst_41482,null));
var inst_41484 = figwheel.client.focus_msgs.call(null,inst_41483,inst_41479);
var inst_41485 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41484);
var inst_41486 = cljs.core.first.call(null,inst_41484);
var inst_41487 = figwheel.client.autoload_QMARK_.call(null);
var state_41526__$1 = (function (){var statearr_41541 = state_41526;
(statearr_41541[(9)] = inst_41485);

(statearr_41541[(8)] = inst_41486);

return statearr_41541;
})();
if(cljs.core.truth_(inst_41487)){
var statearr_41542_41569 = state_41526__$1;
(statearr_41542_41569[(1)] = (8));

} else {
var statearr_41543_41570 = state_41526__$1;
(statearr_41543_41570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (14))){
var inst_41497 = (state_41526[(2)]);
var state_41526__$1 = state_41526;
var statearr_41544_41571 = state_41526__$1;
(statearr_41544_41571[(2)] = inst_41497);

(statearr_41544_41571[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (16))){
var state_41526__$1 = state_41526;
var statearr_41545_41572 = state_41526__$1;
(statearr_41545_41572[(2)] = null);

(statearr_41545_41572[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (10))){
var inst_41518 = (state_41526[(2)]);
var state_41526__$1 = (function (){var statearr_41546 = state_41526;
(statearr_41546[(11)] = inst_41518);

return statearr_41546;
})();
var statearr_41547_41573 = state_41526__$1;
(statearr_41547_41573[(2)] = null);

(statearr_41547_41573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (8))){
var inst_41485 = (state_41526[(9)]);
var inst_41489 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41485,opts);
var state_41526__$1 = state_41526;
if(cljs.core.truth_(inst_41489)){
var statearr_41548_41574 = state_41526__$1;
(statearr_41548_41574[(1)] = (11));

} else {
var statearr_41549_41575 = state_41526__$1;
(statearr_41549_41575[(1)] = (12));

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
});})(c__31895__auto___41557,ch))
;
return ((function (switch__31781__auto__,c__31895__auto___41557,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31782__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31782__auto____0 = (function (){
var statearr_41553 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41553[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31782__auto__);

(statearr_41553[(1)] = (1));

return statearr_41553;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31782__auto____1 = (function (state_41526){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_41526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e41554){if((e41554 instanceof Object)){
var ex__31785__auto__ = e41554;
var statearr_41555_41576 = state_41526;
(statearr_41555_41576[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41577 = state_41526;
state_41526 = G__41577;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31782__auto__ = function(state_41526){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31782__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31782__auto____1.call(this,state_41526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31782__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31782__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto___41557,ch))
})();
var state__31897__auto__ = (function (){var statearr_41556 = f__31896__auto__.call(null);
(statearr_41556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto___41557);

return statearr_41556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto___41557,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41578_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41578_SHARP_));
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
var base_path_41581 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41581){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e41580){if((e41580 instanceof Error)){
var e = e41580;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41581], null));
} else {
var e = e41580;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_41581))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41582){
var map__41591 = p__41582;
var map__41591__$1 = ((((!((map__41591 == null)))?((((map__41591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41591):map__41591);
var opts = map__41591__$1;
var build_id = cljs.core.get.call(null,map__41591__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41591,map__41591__$1,opts,build_id){
return (function (p__41593){
var vec__41594 = p__41593;
var seq__41595 = cljs.core.seq.call(null,vec__41594);
var first__41596 = cljs.core.first.call(null,seq__41595);
var seq__41595__$1 = cljs.core.next.call(null,seq__41595);
var map__41597 = first__41596;
var map__41597__$1 = ((((!((map__41597 == null)))?((((map__41597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41597):map__41597);
var msg = map__41597__$1;
var msg_name = cljs.core.get.call(null,map__41597__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41595__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41594,seq__41595,first__41596,seq__41595__$1,map__41597,map__41597__$1,msg,msg_name,_,map__41591,map__41591__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41594,seq__41595,first__41596,seq__41595__$1,map__41597,map__41597__$1,msg,msg_name,_,map__41591,map__41591__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41591,map__41591__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41605){
var vec__41606 = p__41605;
var seq__41607 = cljs.core.seq.call(null,vec__41606);
var first__41608 = cljs.core.first.call(null,seq__41607);
var seq__41607__$1 = cljs.core.next.call(null,seq__41607);
var map__41609 = first__41608;
var map__41609__$1 = ((((!((map__41609 == null)))?((((map__41609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41609):map__41609);
var msg = map__41609__$1;
var msg_name = cljs.core.get.call(null,map__41609__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41607__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41611){
var map__41623 = p__41611;
var map__41623__$1 = ((((!((map__41623 == null)))?((((map__41623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41623):map__41623);
var on_compile_warning = cljs.core.get.call(null,map__41623__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41623__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41623,map__41623__$1,on_compile_warning,on_compile_fail){
return (function (p__41625){
var vec__41626 = p__41625;
var seq__41627 = cljs.core.seq.call(null,vec__41626);
var first__41628 = cljs.core.first.call(null,seq__41627);
var seq__41627__$1 = cljs.core.next.call(null,seq__41627);
var map__41629 = first__41628;
var map__41629__$1 = ((((!((map__41629 == null)))?((((map__41629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41629):map__41629);
var msg = map__41629__$1;
var msg_name = cljs.core.get.call(null,map__41629__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41627__$1;
var pred__41631 = cljs.core._EQ_;
var expr__41632 = msg_name;
if(cljs.core.truth_(pred__41631.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41632))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41631.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41632))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41623,map__41623__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto__,msg_hist,msg_names,msg){
return (function (state_41840){
var state_val_41841 = (state_41840[(1)]);
if((state_val_41841 === (7))){
var inst_41768 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
if(cljs.core.truth_(inst_41768)){
var statearr_41842_41888 = state_41840__$1;
(statearr_41842_41888[(1)] = (8));

} else {
var statearr_41843_41889 = state_41840__$1;
(statearr_41843_41889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (20))){
var inst_41834 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41844_41890 = state_41840__$1;
(statearr_41844_41890[(2)] = inst_41834);

(statearr_41844_41890[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (27))){
var inst_41830 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41845_41891 = state_41840__$1;
(statearr_41845_41891[(2)] = inst_41830);

(statearr_41845_41891[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (1))){
var inst_41761 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41840__$1 = state_41840;
if(cljs.core.truth_(inst_41761)){
var statearr_41846_41892 = state_41840__$1;
(statearr_41846_41892[(1)] = (2));

} else {
var statearr_41847_41893 = state_41840__$1;
(statearr_41847_41893[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (24))){
var inst_41832 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41848_41894 = state_41840__$1;
(statearr_41848_41894[(2)] = inst_41832);

(statearr_41848_41894[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (4))){
var inst_41838 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41840__$1,inst_41838);
} else {
if((state_val_41841 === (15))){
var inst_41836 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41849_41895 = state_41840__$1;
(statearr_41849_41895[(2)] = inst_41836);

(statearr_41849_41895[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (21))){
var inst_41795 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41850_41896 = state_41840__$1;
(statearr_41850_41896[(2)] = inst_41795);

(statearr_41850_41896[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (31))){
var inst_41819 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41840__$1 = state_41840;
if(cljs.core.truth_(inst_41819)){
var statearr_41851_41897 = state_41840__$1;
(statearr_41851_41897[(1)] = (34));

} else {
var statearr_41852_41898 = state_41840__$1;
(statearr_41852_41898[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (32))){
var inst_41828 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41853_41899 = state_41840__$1;
(statearr_41853_41899[(2)] = inst_41828);

(statearr_41853_41899[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (33))){
var inst_41817 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41854_41900 = state_41840__$1;
(statearr_41854_41900[(2)] = inst_41817);

(statearr_41854_41900[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (13))){
var inst_41782 = figwheel.client.heads_up.clear.call(null);
var state_41840__$1 = state_41840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41840__$1,(16),inst_41782);
} else {
if((state_val_41841 === (22))){
var inst_41799 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41800 = figwheel.client.heads_up.append_warning_message.call(null,inst_41799);
var state_41840__$1 = state_41840;
var statearr_41855_41901 = state_41840__$1;
(statearr_41855_41901[(2)] = inst_41800);

(statearr_41855_41901[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (36))){
var inst_41826 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41856_41902 = state_41840__$1;
(statearr_41856_41902[(2)] = inst_41826);

(statearr_41856_41902[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (29))){
var inst_41810 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41857_41903 = state_41840__$1;
(statearr_41857_41903[(2)] = inst_41810);

(statearr_41857_41903[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (6))){
var inst_41763 = (state_41840[(7)]);
var state_41840__$1 = state_41840;
var statearr_41858_41904 = state_41840__$1;
(statearr_41858_41904[(2)] = inst_41763);

(statearr_41858_41904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (28))){
var inst_41806 = (state_41840[(2)]);
var inst_41807 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41808 = figwheel.client.heads_up.display_warning.call(null,inst_41807);
var state_41840__$1 = (function (){var statearr_41859 = state_41840;
(statearr_41859[(8)] = inst_41806);

return statearr_41859;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41840__$1,(29),inst_41808);
} else {
if((state_val_41841 === (25))){
var inst_41804 = figwheel.client.heads_up.clear.call(null);
var state_41840__$1 = state_41840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41840__$1,(28),inst_41804);
} else {
if((state_val_41841 === (34))){
var inst_41821 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41840__$1 = state_41840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41840__$1,(37),inst_41821);
} else {
if((state_val_41841 === (17))){
var inst_41788 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41860_41905 = state_41840__$1;
(statearr_41860_41905[(2)] = inst_41788);

(statearr_41860_41905[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (3))){
var inst_41780 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41840__$1 = state_41840;
if(cljs.core.truth_(inst_41780)){
var statearr_41861_41906 = state_41840__$1;
(statearr_41861_41906[(1)] = (13));

} else {
var statearr_41862_41907 = state_41840__$1;
(statearr_41862_41907[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (12))){
var inst_41776 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41863_41908 = state_41840__$1;
(statearr_41863_41908[(2)] = inst_41776);

(statearr_41863_41908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (2))){
var inst_41763 = (state_41840[(7)]);
var inst_41763__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41840__$1 = (function (){var statearr_41864 = state_41840;
(statearr_41864[(7)] = inst_41763__$1);

return statearr_41864;
})();
if(cljs.core.truth_(inst_41763__$1)){
var statearr_41865_41909 = state_41840__$1;
(statearr_41865_41909[(1)] = (5));

} else {
var statearr_41866_41910 = state_41840__$1;
(statearr_41866_41910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (23))){
var inst_41802 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41840__$1 = state_41840;
if(cljs.core.truth_(inst_41802)){
var statearr_41867_41911 = state_41840__$1;
(statearr_41867_41911[(1)] = (25));

} else {
var statearr_41868_41912 = state_41840__$1;
(statearr_41868_41912[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (35))){
var state_41840__$1 = state_41840;
var statearr_41869_41913 = state_41840__$1;
(statearr_41869_41913[(2)] = null);

(statearr_41869_41913[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (19))){
var inst_41797 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41840__$1 = state_41840;
if(cljs.core.truth_(inst_41797)){
var statearr_41870_41914 = state_41840__$1;
(statearr_41870_41914[(1)] = (22));

} else {
var statearr_41871_41915 = state_41840__$1;
(statearr_41871_41915[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (11))){
var inst_41772 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41872_41916 = state_41840__$1;
(statearr_41872_41916[(2)] = inst_41772);

(statearr_41872_41916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (9))){
var inst_41774 = figwheel.client.heads_up.clear.call(null);
var state_41840__$1 = state_41840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41840__$1,(12),inst_41774);
} else {
if((state_val_41841 === (5))){
var inst_41765 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41840__$1 = state_41840;
var statearr_41873_41917 = state_41840__$1;
(statearr_41873_41917[(2)] = inst_41765);

(statearr_41873_41917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (14))){
var inst_41790 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41840__$1 = state_41840;
if(cljs.core.truth_(inst_41790)){
var statearr_41874_41918 = state_41840__$1;
(statearr_41874_41918[(1)] = (18));

} else {
var statearr_41875_41919 = state_41840__$1;
(statearr_41875_41919[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (26))){
var inst_41812 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41840__$1 = state_41840;
if(cljs.core.truth_(inst_41812)){
var statearr_41876_41920 = state_41840__$1;
(statearr_41876_41920[(1)] = (30));

} else {
var statearr_41877_41921 = state_41840__$1;
(statearr_41877_41921[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (16))){
var inst_41784 = (state_41840[(2)]);
var inst_41785 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41786 = figwheel.client.heads_up.display_exception.call(null,inst_41785);
var state_41840__$1 = (function (){var statearr_41878 = state_41840;
(statearr_41878[(9)] = inst_41784);

return statearr_41878;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41840__$1,(17),inst_41786);
} else {
if((state_val_41841 === (30))){
var inst_41814 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41815 = figwheel.client.heads_up.display_warning.call(null,inst_41814);
var state_41840__$1 = state_41840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41840__$1,(33),inst_41815);
} else {
if((state_val_41841 === (10))){
var inst_41778 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41879_41922 = state_41840__$1;
(statearr_41879_41922[(2)] = inst_41778);

(statearr_41879_41922[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (18))){
var inst_41792 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41793 = figwheel.client.heads_up.display_exception.call(null,inst_41792);
var state_41840__$1 = state_41840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41840__$1,(21),inst_41793);
} else {
if((state_val_41841 === (37))){
var inst_41823 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41880_41923 = state_41840__$1;
(statearr_41880_41923[(2)] = inst_41823);

(statearr_41880_41923[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (8))){
var inst_41770 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41840__$1 = state_41840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41840__$1,(11),inst_41770);
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
});})(c__31895__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31781__auto__,c__31895__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31782__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31782__auto____0 = (function (){
var statearr_41884 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41884[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31782__auto__);

(statearr_41884[(1)] = (1));

return statearr_41884;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31782__auto____1 = (function (state_41840){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_41840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e41885){if((e41885 instanceof Object)){
var ex__31785__auto__ = e41885;
var statearr_41886_41924 = state_41840;
(statearr_41886_41924[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41925 = state_41840;
state_41840 = G__41925;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31782__auto__ = function(state_41840){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31782__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31782__auto____1.call(this,state_41840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31782__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31782__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto__,msg_hist,msg_names,msg))
})();
var state__31897__auto__ = (function (){var statearr_41887 = f__31896__auto__.call(null);
(statearr_41887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto__);

return statearr_41887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto__,msg_hist,msg_names,msg))
);

return c__31895__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31895__auto___41988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto___41988,ch){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto___41988,ch){
return (function (state_41971){
var state_val_41972 = (state_41971[(1)]);
if((state_val_41972 === (1))){
var state_41971__$1 = state_41971;
var statearr_41973_41989 = state_41971__$1;
(statearr_41973_41989[(2)] = null);

(statearr_41973_41989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41972 === (2))){
var state_41971__$1 = state_41971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41971__$1,(4),ch);
} else {
if((state_val_41972 === (3))){
var inst_41969 = (state_41971[(2)]);
var state_41971__$1 = state_41971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41971__$1,inst_41969);
} else {
if((state_val_41972 === (4))){
var inst_41959 = (state_41971[(7)]);
var inst_41959__$1 = (state_41971[(2)]);
var state_41971__$1 = (function (){var statearr_41974 = state_41971;
(statearr_41974[(7)] = inst_41959__$1);

return statearr_41974;
})();
if(cljs.core.truth_(inst_41959__$1)){
var statearr_41975_41990 = state_41971__$1;
(statearr_41975_41990[(1)] = (5));

} else {
var statearr_41976_41991 = state_41971__$1;
(statearr_41976_41991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41972 === (5))){
var inst_41959 = (state_41971[(7)]);
var inst_41961 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41959);
var state_41971__$1 = state_41971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41971__$1,(8),inst_41961);
} else {
if((state_val_41972 === (6))){
var state_41971__$1 = state_41971;
var statearr_41977_41992 = state_41971__$1;
(statearr_41977_41992[(2)] = null);

(statearr_41977_41992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41972 === (7))){
var inst_41967 = (state_41971[(2)]);
var state_41971__$1 = state_41971;
var statearr_41978_41993 = state_41971__$1;
(statearr_41978_41993[(2)] = inst_41967);

(statearr_41978_41993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41972 === (8))){
var inst_41963 = (state_41971[(2)]);
var state_41971__$1 = (function (){var statearr_41979 = state_41971;
(statearr_41979[(8)] = inst_41963);

return statearr_41979;
})();
var statearr_41980_41994 = state_41971__$1;
(statearr_41980_41994[(2)] = null);

(statearr_41980_41994[(1)] = (2));


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
});})(c__31895__auto___41988,ch))
;
return ((function (switch__31781__auto__,c__31895__auto___41988,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31782__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31782__auto____0 = (function (){
var statearr_41984 = [null,null,null,null,null,null,null,null,null];
(statearr_41984[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31782__auto__);

(statearr_41984[(1)] = (1));

return statearr_41984;
});
var figwheel$client$heads_up_plugin_$_state_machine__31782__auto____1 = (function (state_41971){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_41971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e41985){if((e41985 instanceof Object)){
var ex__31785__auto__ = e41985;
var statearr_41986_41995 = state_41971;
(statearr_41986_41995[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41996 = state_41971;
state_41971 = G__41996;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31782__auto__ = function(state_41971){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31782__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31782__auto____1.call(this,state_41971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31782__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31782__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto___41988,ch))
})();
var state__31897__auto__ = (function (){var statearr_41987 = f__31896__auto__.call(null);
(statearr_41987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto___41988);

return statearr_41987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto___41988,ch))
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
var c__31895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto__){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto__){
return (function (state_42017){
var state_val_42018 = (state_42017[(1)]);
if((state_val_42018 === (1))){
var inst_42012 = cljs.core.async.timeout.call(null,(3000));
var state_42017__$1 = state_42017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42017__$1,(2),inst_42012);
} else {
if((state_val_42018 === (2))){
var inst_42014 = (state_42017[(2)]);
var inst_42015 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42017__$1 = (function (){var statearr_42019 = state_42017;
(statearr_42019[(7)] = inst_42014);

return statearr_42019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42017__$1,inst_42015);
} else {
return null;
}
}
});})(c__31895__auto__))
;
return ((function (switch__31781__auto__,c__31895__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31782__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31782__auto____0 = (function (){
var statearr_42023 = [null,null,null,null,null,null,null,null];
(statearr_42023[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31782__auto__);

(statearr_42023[(1)] = (1));

return statearr_42023;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31782__auto____1 = (function (state_42017){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_42017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e42024){if((e42024 instanceof Object)){
var ex__31785__auto__ = e42024;
var statearr_42025_42027 = state_42017;
(statearr_42025_42027[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42028 = state_42017;
state_42017 = G__42028;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31782__auto__ = function(state_42017){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31782__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31782__auto____1.call(this,state_42017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31782__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31782__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto__))
})();
var state__31897__auto__ = (function (){var statearr_42026 = f__31896__auto__.call(null);
(statearr_42026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto__);

return statearr_42026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto__))
);

return c__31895__auto__;
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
var temp__6552__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6552__auto__)){
var figwheel_version = temp__6552__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto__,figwheel_version,temp__6552__auto__){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto__,figwheel_version,temp__6552__auto__){
return (function (state_42051){
var state_val_42052 = (state_42051[(1)]);
if((state_val_42052 === (1))){
var inst_42045 = cljs.core.async.timeout.call(null,(2000));
var state_42051__$1 = state_42051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42051__$1,(2),inst_42045);
} else {
if((state_val_42052 === (2))){
var inst_42047 = (state_42051[(2)]);
var inst_42048 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_42049 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_42048);
var state_42051__$1 = (function (){var statearr_42053 = state_42051;
(statearr_42053[(7)] = inst_42047);

return statearr_42053;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42051__$1,inst_42049);
} else {
return null;
}
}
});})(c__31895__auto__,figwheel_version,temp__6552__auto__))
;
return ((function (switch__31781__auto__,c__31895__auto__,figwheel_version,temp__6552__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31782__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31782__auto____0 = (function (){
var statearr_42057 = [null,null,null,null,null,null,null,null];
(statearr_42057[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31782__auto__);

(statearr_42057[(1)] = (1));

return statearr_42057;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31782__auto____1 = (function (state_42051){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_42051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e42058){if((e42058 instanceof Object)){
var ex__31785__auto__ = e42058;
var statearr_42059_42061 = state_42051;
(statearr_42059_42061[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42062 = state_42051;
state_42051 = G__42062;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31782__auto__ = function(state_42051){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31782__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31782__auto____1.call(this,state_42051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31782__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31782__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto__,figwheel_version,temp__6552__auto__))
})();
var state__31897__auto__ = (function (){var statearr_42060 = f__31896__auto__.call(null);
(statearr_42060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto__);

return statearr_42060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto__,figwheel_version,temp__6552__auto__))
);

return c__31895__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__42063){
var map__42067 = p__42063;
var map__42067__$1 = ((((!((map__42067 == null)))?((((map__42067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42067):map__42067);
var file = cljs.core.get.call(null,map__42067__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42067__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42067__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42069 = "";
var G__42069__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__42069),cljs.core.str("file "),cljs.core.str(file)].join(''):G__42069);
var G__42069__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__42069__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__42069__$1);
if(cljs.core.truth_((function (){var and__21578__auto__ = line;
if(cljs.core.truth_(and__21578__auto__)){
return column;
} else {
return and__21578__auto__;
}
})())){
return [cljs.core.str(G__42069__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__42069__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42070){
var map__42077 = p__42070;
var map__42077__$1 = ((((!((map__42077 == null)))?((((map__42077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42077):map__42077);
var ed = map__42077__$1;
var formatted_exception = cljs.core.get.call(null,map__42077__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__42077__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42077__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42079_42083 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42080_42084 = null;
var count__42081_42085 = (0);
var i__42082_42086 = (0);
while(true){
if((i__42082_42086 < count__42081_42085)){
var msg_42087 = cljs.core._nth.call(null,chunk__42080_42084,i__42082_42086);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42087);

var G__42088 = seq__42079_42083;
var G__42089 = chunk__42080_42084;
var G__42090 = count__42081_42085;
var G__42091 = (i__42082_42086 + (1));
seq__42079_42083 = G__42088;
chunk__42080_42084 = G__42089;
count__42081_42085 = G__42090;
i__42082_42086 = G__42091;
continue;
} else {
var temp__6552__auto___42092 = cljs.core.seq.call(null,seq__42079_42083);
if(temp__6552__auto___42092){
var seq__42079_42093__$1 = temp__6552__auto___42092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42079_42093__$1)){
var c__22493__auto___42094 = cljs.core.chunk_first.call(null,seq__42079_42093__$1);
var G__42095 = cljs.core.chunk_rest.call(null,seq__42079_42093__$1);
var G__42096 = c__22493__auto___42094;
var G__42097 = cljs.core.count.call(null,c__22493__auto___42094);
var G__42098 = (0);
seq__42079_42083 = G__42095;
chunk__42080_42084 = G__42096;
count__42081_42085 = G__42097;
i__42082_42086 = G__42098;
continue;
} else {
var msg_42099 = cljs.core.first.call(null,seq__42079_42093__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42099);

var G__42100 = cljs.core.next.call(null,seq__42079_42093__$1);
var G__42101 = null;
var G__42102 = (0);
var G__42103 = (0);
seq__42079_42083 = G__42100;
chunk__42080_42084 = G__42101;
count__42081_42085 = G__42102;
i__42082_42086 = G__42103;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42104){
var map__42107 = p__42104;
var map__42107__$1 = ((((!((map__42107 == null)))?((((map__42107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42107):map__42107);
var w = map__42107__$1;
var message = cljs.core.get.call(null,map__42107__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__21578__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21578__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21578__auto__;
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
var seq__42119 = cljs.core.seq.call(null,plugins);
var chunk__42120 = null;
var count__42121 = (0);
var i__42122 = (0);
while(true){
if((i__42122 < count__42121)){
var vec__42123 = cljs.core._nth.call(null,chunk__42120,i__42122);
var k = cljs.core.nth.call(null,vec__42123,(0),null);
var plugin = cljs.core.nth.call(null,vec__42123,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42129 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42119,chunk__42120,count__42121,i__42122,pl_42129,vec__42123,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42129.call(null,msg_hist);
});})(seq__42119,chunk__42120,count__42121,i__42122,pl_42129,vec__42123,k,plugin))
);
} else {
}

var G__42130 = seq__42119;
var G__42131 = chunk__42120;
var G__42132 = count__42121;
var G__42133 = (i__42122 + (1));
seq__42119 = G__42130;
chunk__42120 = G__42131;
count__42121 = G__42132;
i__42122 = G__42133;
continue;
} else {
var temp__6552__auto__ = cljs.core.seq.call(null,seq__42119);
if(temp__6552__auto__){
var seq__42119__$1 = temp__6552__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42119__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__42119__$1);
var G__42134 = cljs.core.chunk_rest.call(null,seq__42119__$1);
var G__42135 = c__22493__auto__;
var G__42136 = cljs.core.count.call(null,c__22493__auto__);
var G__42137 = (0);
seq__42119 = G__42134;
chunk__42120 = G__42135;
count__42121 = G__42136;
i__42122 = G__42137;
continue;
} else {
var vec__42126 = cljs.core.first.call(null,seq__42119__$1);
var k = cljs.core.nth.call(null,vec__42126,(0),null);
var plugin = cljs.core.nth.call(null,vec__42126,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42138 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42119,chunk__42120,count__42121,i__42122,pl_42138,vec__42126,k,plugin,seq__42119__$1,temp__6552__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42138.call(null,msg_hist);
});})(seq__42119,chunk__42120,count__42121,i__42122,pl_42138,vec__42126,k,plugin,seq__42119__$1,temp__6552__auto__))
);
} else {
}

var G__42139 = cljs.core.next.call(null,seq__42119__$1);
var G__42140 = null;
var G__42141 = (0);
var G__42142 = (0);
seq__42119 = G__42139;
chunk__42120 = G__42140;
count__42121 = G__42141;
i__42122 = G__42142;
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
var args42143 = [];
var len__22773__auto___42150 = arguments.length;
var i__22774__auto___42151 = (0);
while(true){
if((i__22774__auto___42151 < len__22773__auto___42150)){
args42143.push((arguments[i__22774__auto___42151]));

var G__42152 = (i__22774__auto___42151 + (1));
i__22774__auto___42151 = G__42152;
continue;
} else {
}
break;
}

var G__42145 = args42143.length;
switch (G__42145) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42143.length)].join('')));

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

var seq__42146_42154 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__42147_42155 = null;
var count__42148_42156 = (0);
var i__42149_42157 = (0);
while(true){
if((i__42149_42157 < count__42148_42156)){
var msg_42158 = cljs.core._nth.call(null,chunk__42147_42155,i__42149_42157);
figwheel.client.socket.handle_incoming_message.call(null,msg_42158);

var G__42159 = seq__42146_42154;
var G__42160 = chunk__42147_42155;
var G__42161 = count__42148_42156;
var G__42162 = (i__42149_42157 + (1));
seq__42146_42154 = G__42159;
chunk__42147_42155 = G__42160;
count__42148_42156 = G__42161;
i__42149_42157 = G__42162;
continue;
} else {
var temp__6552__auto___42163 = cljs.core.seq.call(null,seq__42146_42154);
if(temp__6552__auto___42163){
var seq__42146_42164__$1 = temp__6552__auto___42163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42146_42164__$1)){
var c__22493__auto___42165 = cljs.core.chunk_first.call(null,seq__42146_42164__$1);
var G__42166 = cljs.core.chunk_rest.call(null,seq__42146_42164__$1);
var G__42167 = c__22493__auto___42165;
var G__42168 = cljs.core.count.call(null,c__22493__auto___42165);
var G__42169 = (0);
seq__42146_42154 = G__42166;
chunk__42147_42155 = G__42167;
count__42148_42156 = G__42168;
i__42149_42157 = G__42169;
continue;
} else {
var msg_42170 = cljs.core.first.call(null,seq__42146_42164__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_42170);

var G__42171 = cljs.core.next.call(null,seq__42146_42164__$1);
var G__42172 = null;
var G__42173 = (0);
var G__42174 = (0);
seq__42146_42154 = G__42171;
chunk__42147_42155 = G__42172;
count__42148_42156 = G__42173;
i__42149_42157 = G__42174;
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
var args__22780__auto__ = [];
var len__22773__auto___42179 = arguments.length;
var i__22774__auto___42180 = (0);
while(true){
if((i__22774__auto___42180 < len__22773__auto___42179)){
args__22780__auto__.push((arguments[i__22774__auto___42180]));

var G__42181 = (i__22774__auto___42180 + (1));
i__22774__auto___42180 = G__42181;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__42176){
var map__42177 = p__42176;
var map__42177__$1 = ((((!((map__42177 == null)))?((((map__42177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42177):map__42177);
var opts = map__42177__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq42175){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42175));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e42183){if((e42183 instanceof Error)){
var e = e42183;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e42183;

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
return (function (p__42187){
var map__42188 = p__42187;
var map__42188__$1 = ((((!((map__42188 == null)))?((((map__42188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42188):map__42188);
var msg_name = cljs.core.get.call(null,map__42188__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1471653242148