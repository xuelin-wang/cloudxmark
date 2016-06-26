// Compiled by ClojureScript 1.8.51 {}
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
var pred__28373 = cljs.core._EQ_;
var expr__28374 = (function (){var or__18468__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e28377){if((e28377 instanceof Error)){
var e = e28377;
return false;
} else {
throw e28377;

}
}})();
if(cljs.core.truth_(or__18468__auto__)){
return or__18468__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28373.call(null,"true",expr__28374))){
return true;
} else {
if(cljs.core.truth_(pred__28373.call(null,"false",expr__28374))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28374)].join('')));
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
}catch (e28379){if((e28379 instanceof Error)){
var e = e28379;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e28379;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19545__auto__ = [];
var len__19538__auto___28381 = arguments.length;
var i__19539__auto___28382 = (0);
while(true){
if((i__19539__auto___28382 < len__19538__auto___28381)){
args__19545__auto__.push((arguments[i__19539__auto___28382]));

var G__28383 = (i__19539__auto___28382 + (1));
i__19539__auto___28382 = G__28383;
continue;
} else {
}
break;
}

var argseq__19546__auto__ = ((((0) < args__19545__auto__.length))?(new cljs.core.IndexedSeq(args__19545__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19546__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq28380){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28380));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28384){
var map__28387 = p__28384;
var map__28387__$1 = ((((!((map__28387 == null)))?((((map__28387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28387):map__28387);
var message = cljs.core.get.call(null,map__28387__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28387__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18468__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18468__auto__)){
return or__18468__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18456__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18456__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18456__auto__;
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
var c__22205__auto___28549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto___28549,ch){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto___28549,ch){
return (function (state_28518){
var state_val_28519 = (state_28518[(1)]);
if((state_val_28519 === (7))){
var inst_28514 = (state_28518[(2)]);
var state_28518__$1 = state_28518;
var statearr_28520_28550 = state_28518__$1;
(statearr_28520_28550[(2)] = inst_28514);

(statearr_28520_28550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (1))){
var state_28518__$1 = state_28518;
var statearr_28521_28551 = state_28518__$1;
(statearr_28521_28551[(2)] = null);

(statearr_28521_28551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (4))){
var inst_28471 = (state_28518[(7)]);
var inst_28471__$1 = (state_28518[(2)]);
var state_28518__$1 = (function (){var statearr_28522 = state_28518;
(statearr_28522[(7)] = inst_28471__$1);

return statearr_28522;
})();
if(cljs.core.truth_(inst_28471__$1)){
var statearr_28523_28552 = state_28518__$1;
(statearr_28523_28552[(1)] = (5));

} else {
var statearr_28524_28553 = state_28518__$1;
(statearr_28524_28553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (15))){
var inst_28478 = (state_28518[(8)]);
var inst_28493 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28478);
var inst_28494 = cljs.core.first.call(null,inst_28493);
var inst_28495 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28494);
var inst_28496 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28495)].join('');
var inst_28497 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28496);
var state_28518__$1 = state_28518;
var statearr_28525_28554 = state_28518__$1;
(statearr_28525_28554[(2)] = inst_28497);

(statearr_28525_28554[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (13))){
var inst_28502 = (state_28518[(2)]);
var state_28518__$1 = state_28518;
var statearr_28526_28555 = state_28518__$1;
(statearr_28526_28555[(2)] = inst_28502);

(statearr_28526_28555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (6))){
var state_28518__$1 = state_28518;
var statearr_28527_28556 = state_28518__$1;
(statearr_28527_28556[(2)] = null);

(statearr_28527_28556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (17))){
var inst_28500 = (state_28518[(2)]);
var state_28518__$1 = state_28518;
var statearr_28528_28557 = state_28518__$1;
(statearr_28528_28557[(2)] = inst_28500);

(statearr_28528_28557[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (3))){
var inst_28516 = (state_28518[(2)]);
var state_28518__$1 = state_28518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28518__$1,inst_28516);
} else {
if((state_val_28519 === (12))){
var inst_28477 = (state_28518[(9)]);
var inst_28491 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28477,opts);
var state_28518__$1 = state_28518;
if(cljs.core.truth_(inst_28491)){
var statearr_28529_28558 = state_28518__$1;
(statearr_28529_28558[(1)] = (15));

} else {
var statearr_28530_28559 = state_28518__$1;
(statearr_28530_28559[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (2))){
var state_28518__$1 = state_28518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28518__$1,(4),ch);
} else {
if((state_val_28519 === (11))){
var inst_28478 = (state_28518[(8)]);
var inst_28483 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28484 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28478);
var inst_28485 = cljs.core.async.timeout.call(null,(1000));
var inst_28486 = [inst_28484,inst_28485];
var inst_28487 = (new cljs.core.PersistentVector(null,2,(5),inst_28483,inst_28486,null));
var state_28518__$1 = state_28518;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28518__$1,(14),inst_28487);
} else {
if((state_val_28519 === (9))){
var inst_28478 = (state_28518[(8)]);
var inst_28504 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28505 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28478);
var inst_28506 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28505);
var inst_28507 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28506)].join('');
var inst_28508 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28507);
var state_28518__$1 = (function (){var statearr_28531 = state_28518;
(statearr_28531[(10)] = inst_28504);

return statearr_28531;
})();
var statearr_28532_28560 = state_28518__$1;
(statearr_28532_28560[(2)] = inst_28508);

(statearr_28532_28560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (5))){
var inst_28471 = (state_28518[(7)]);
var inst_28473 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28474 = (new cljs.core.PersistentArrayMap(null,2,inst_28473,null));
var inst_28475 = (new cljs.core.PersistentHashSet(null,inst_28474,null));
var inst_28476 = figwheel.client.focus_msgs.call(null,inst_28475,inst_28471);
var inst_28477 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28476);
var inst_28478 = cljs.core.first.call(null,inst_28476);
var inst_28479 = figwheel.client.autoload_QMARK_.call(null);
var state_28518__$1 = (function (){var statearr_28533 = state_28518;
(statearr_28533[(8)] = inst_28478);

(statearr_28533[(9)] = inst_28477);

return statearr_28533;
})();
if(cljs.core.truth_(inst_28479)){
var statearr_28534_28561 = state_28518__$1;
(statearr_28534_28561[(1)] = (8));

} else {
var statearr_28535_28562 = state_28518__$1;
(statearr_28535_28562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (14))){
var inst_28489 = (state_28518[(2)]);
var state_28518__$1 = state_28518;
var statearr_28536_28563 = state_28518__$1;
(statearr_28536_28563[(2)] = inst_28489);

(statearr_28536_28563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (16))){
var state_28518__$1 = state_28518;
var statearr_28537_28564 = state_28518__$1;
(statearr_28537_28564[(2)] = null);

(statearr_28537_28564[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (10))){
var inst_28510 = (state_28518[(2)]);
var state_28518__$1 = (function (){var statearr_28538 = state_28518;
(statearr_28538[(11)] = inst_28510);

return statearr_28538;
})();
var statearr_28539_28565 = state_28518__$1;
(statearr_28539_28565[(2)] = null);

(statearr_28539_28565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (8))){
var inst_28477 = (state_28518[(9)]);
var inst_28481 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28477,opts);
var state_28518__$1 = state_28518;
if(cljs.core.truth_(inst_28481)){
var statearr_28540_28566 = state_28518__$1;
(statearr_28540_28566[(1)] = (11));

} else {
var statearr_28541_28567 = state_28518__$1;
(statearr_28541_28567[(1)] = (12));

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
});})(c__22205__auto___28549,ch))
;
return ((function (switch__22093__auto__,c__22205__auto___28549,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22094__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22094__auto____0 = (function (){
var statearr_28545 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28545[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22094__auto__);

(statearr_28545[(1)] = (1));

return statearr_28545;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22094__auto____1 = (function (state_28518){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_28518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e28546){if((e28546 instanceof Object)){
var ex__22097__auto__ = e28546;
var statearr_28547_28568 = state_28518;
(statearr_28547_28568[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28569 = state_28518;
state_28518 = G__28569;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22094__auto__ = function(state_28518){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22094__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22094__auto____1.call(this,state_28518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22094__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22094__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto___28549,ch))
})();
var state__22207__auto__ = (function (){var statearr_28548 = f__22206__auto__.call(null);
(statearr_28548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto___28549);

return statearr_28548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto___28549,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28570_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28570_SHARP_));
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
var base_path_28577 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28577){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28575 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28576 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28576;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28575;
}}catch (e28574){if((e28574 instanceof Error)){
var e = e28574;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28577], null));
} else {
var e = e28574;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28577))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28578){
var map__28585 = p__28578;
var map__28585__$1 = ((((!((map__28585 == null)))?((((map__28585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28585):map__28585);
var opts = map__28585__$1;
var build_id = cljs.core.get.call(null,map__28585__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28585,map__28585__$1,opts,build_id){
return (function (p__28587){
var vec__28588 = p__28587;
var map__28589 = cljs.core.nth.call(null,vec__28588,(0),null);
var map__28589__$1 = ((((!((map__28589 == null)))?((((map__28589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28589):map__28589);
var msg = map__28589__$1;
var msg_name = cljs.core.get.call(null,map__28589__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28588,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28588,map__28589,map__28589__$1,msg,msg_name,_,map__28585,map__28585__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28588,map__28589,map__28589__$1,msg,msg_name,_,map__28585,map__28585__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28585,map__28585__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28595){
var vec__28596 = p__28595;
var map__28597 = cljs.core.nth.call(null,vec__28596,(0),null);
var map__28597__$1 = ((((!((map__28597 == null)))?((((map__28597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28597):map__28597);
var msg = map__28597__$1;
var msg_name = cljs.core.get.call(null,map__28597__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28596,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28599){
var map__28609 = p__28599;
var map__28609__$1 = ((((!((map__28609 == null)))?((((map__28609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28609):map__28609);
var on_compile_warning = cljs.core.get.call(null,map__28609__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28609__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28609,map__28609__$1,on_compile_warning,on_compile_fail){
return (function (p__28611){
var vec__28612 = p__28611;
var map__28613 = cljs.core.nth.call(null,vec__28612,(0),null);
var map__28613__$1 = ((((!((map__28613 == null)))?((((map__28613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28613):map__28613);
var msg = map__28613__$1;
var msg_name = cljs.core.get.call(null,map__28613__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28612,(1));
var pred__28615 = cljs.core._EQ_;
var expr__28616 = msg_name;
if(cljs.core.truth_(pred__28615.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28616))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28615.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28616))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28609,map__28609__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto__,msg_hist,msg_names,msg){
return (function (state_28824){
var state_val_28825 = (state_28824[(1)]);
if((state_val_28825 === (7))){
var inst_28752 = (state_28824[(2)]);
var state_28824__$1 = state_28824;
if(cljs.core.truth_(inst_28752)){
var statearr_28826_28872 = state_28824__$1;
(statearr_28826_28872[(1)] = (8));

} else {
var statearr_28827_28873 = state_28824__$1;
(statearr_28827_28873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (20))){
var inst_28818 = (state_28824[(2)]);
var state_28824__$1 = state_28824;
var statearr_28828_28874 = state_28824__$1;
(statearr_28828_28874[(2)] = inst_28818);

(statearr_28828_28874[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (27))){
var inst_28814 = (state_28824[(2)]);
var state_28824__$1 = state_28824;
var statearr_28829_28875 = state_28824__$1;
(statearr_28829_28875[(2)] = inst_28814);

(statearr_28829_28875[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (1))){
var inst_28745 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28824__$1 = state_28824;
if(cljs.core.truth_(inst_28745)){
var statearr_28830_28876 = state_28824__$1;
(statearr_28830_28876[(1)] = (2));

} else {
var statearr_28831_28877 = state_28824__$1;
(statearr_28831_28877[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (24))){
var inst_28816 = (state_28824[(2)]);
var state_28824__$1 = state_28824;
var statearr_28832_28878 = state_28824__$1;
(statearr_28832_28878[(2)] = inst_28816);

(statearr_28832_28878[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (4))){
var inst_28822 = (state_28824[(2)]);
var state_28824__$1 = state_28824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28824__$1,inst_28822);
} else {
if((state_val_28825 === (15))){
var inst_28820 = (state_28824[(2)]);
var state_28824__$1 = state_28824;
var statearr_28833_28879 = state_28824__$1;
(statearr_28833_28879[(2)] = inst_28820);

(statearr_28833_28879[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (21))){
var inst_28779 = (state_28824[(2)]);
var state_28824__$1 = state_28824;
var statearr_28834_28880 = state_28824__$1;
(statearr_28834_28880[(2)] = inst_28779);

(statearr_28834_28880[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (31))){
var inst_28803 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28824__$1 = state_28824;
if(cljs.core.truth_(inst_28803)){
var statearr_28835_28881 = state_28824__$1;
(statearr_28835_28881[(1)] = (34));

} else {
var statearr_28836_28882 = state_28824__$1;
(statearr_28836_28882[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (32))){
var inst_28812 = (state_28824[(2)]);
var state_28824__$1 = state_28824;
var statearr_28837_28883 = state_28824__$1;
(statearr_28837_28883[(2)] = inst_28812);

(statearr_28837_28883[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (33))){
var inst_28801 = (state_28824[(2)]);
var state_28824__$1 = state_28824;
var statearr_28838_28884 = state_28824__$1;
(statearr_28838_28884[(2)] = inst_28801);

(statearr_28838_28884[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (13))){
var inst_28766 = figwheel.client.heads_up.clear.call(null);
var state_28824__$1 = state_28824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28824__$1,(16),inst_28766);
} else {
if((state_val_28825 === (22))){
var inst_28783 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28784 = figwheel.client.heads_up.append_message.call(null,inst_28783);
var state_28824__$1 = state_28824;
var statearr_28839_28885 = state_28824__$1;
(statearr_28839_28885[(2)] = inst_28784);

(statearr_28839_28885[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (36))){
var inst_28810 = (state_28824[(2)]);
var state_28824__$1 = state_28824;
var statearr_28840_28886 = state_28824__$1;
(statearr_28840_28886[(2)] = inst_28810);

(statearr_28840_28886[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (29))){
var inst_28794 = (state_28824[(2)]);
var state_28824__$1 = state_28824;
var statearr_28841_28887 = state_28824__$1;
(statearr_28841_28887[(2)] = inst_28794);

(statearr_28841_28887[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (6))){
var inst_28747 = (state_28824[(7)]);
var state_28824__$1 = state_28824;
var statearr_28842_28888 = state_28824__$1;
(statearr_28842_28888[(2)] = inst_28747);

(statearr_28842_28888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (28))){
var inst_28790 = (state_28824[(2)]);
var inst_28791 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28792 = figwheel.client.heads_up.display_warning.call(null,inst_28791);
var state_28824__$1 = (function (){var statearr_28843 = state_28824;
(statearr_28843[(8)] = inst_28790);

return statearr_28843;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28824__$1,(29),inst_28792);
} else {
if((state_val_28825 === (25))){
var inst_28788 = figwheel.client.heads_up.clear.call(null);
var state_28824__$1 = state_28824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28824__$1,(28),inst_28788);
} else {
if((state_val_28825 === (34))){
var inst_28805 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28824__$1 = state_28824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28824__$1,(37),inst_28805);
} else {
if((state_val_28825 === (17))){
var inst_28772 = (state_28824[(2)]);
var state_28824__$1 = state_28824;
var statearr_28844_28889 = state_28824__$1;
(statearr_28844_28889[(2)] = inst_28772);

(statearr_28844_28889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (3))){
var inst_28764 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28824__$1 = state_28824;
if(cljs.core.truth_(inst_28764)){
var statearr_28845_28890 = state_28824__$1;
(statearr_28845_28890[(1)] = (13));

} else {
var statearr_28846_28891 = state_28824__$1;
(statearr_28846_28891[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (12))){
var inst_28760 = (state_28824[(2)]);
var state_28824__$1 = state_28824;
var statearr_28847_28892 = state_28824__$1;
(statearr_28847_28892[(2)] = inst_28760);

(statearr_28847_28892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (2))){
var inst_28747 = (state_28824[(7)]);
var inst_28747__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28824__$1 = (function (){var statearr_28848 = state_28824;
(statearr_28848[(7)] = inst_28747__$1);

return statearr_28848;
})();
if(cljs.core.truth_(inst_28747__$1)){
var statearr_28849_28893 = state_28824__$1;
(statearr_28849_28893[(1)] = (5));

} else {
var statearr_28850_28894 = state_28824__$1;
(statearr_28850_28894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (23))){
var inst_28786 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28824__$1 = state_28824;
if(cljs.core.truth_(inst_28786)){
var statearr_28851_28895 = state_28824__$1;
(statearr_28851_28895[(1)] = (25));

} else {
var statearr_28852_28896 = state_28824__$1;
(statearr_28852_28896[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (35))){
var state_28824__$1 = state_28824;
var statearr_28853_28897 = state_28824__$1;
(statearr_28853_28897[(2)] = null);

(statearr_28853_28897[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (19))){
var inst_28781 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28824__$1 = state_28824;
if(cljs.core.truth_(inst_28781)){
var statearr_28854_28898 = state_28824__$1;
(statearr_28854_28898[(1)] = (22));

} else {
var statearr_28855_28899 = state_28824__$1;
(statearr_28855_28899[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (11))){
var inst_28756 = (state_28824[(2)]);
var state_28824__$1 = state_28824;
var statearr_28856_28900 = state_28824__$1;
(statearr_28856_28900[(2)] = inst_28756);

(statearr_28856_28900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (9))){
var inst_28758 = figwheel.client.heads_up.clear.call(null);
var state_28824__$1 = state_28824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28824__$1,(12),inst_28758);
} else {
if((state_val_28825 === (5))){
var inst_28749 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28824__$1 = state_28824;
var statearr_28857_28901 = state_28824__$1;
(statearr_28857_28901[(2)] = inst_28749);

(statearr_28857_28901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (14))){
var inst_28774 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28824__$1 = state_28824;
if(cljs.core.truth_(inst_28774)){
var statearr_28858_28902 = state_28824__$1;
(statearr_28858_28902[(1)] = (18));

} else {
var statearr_28859_28903 = state_28824__$1;
(statearr_28859_28903[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (26))){
var inst_28796 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28824__$1 = state_28824;
if(cljs.core.truth_(inst_28796)){
var statearr_28860_28904 = state_28824__$1;
(statearr_28860_28904[(1)] = (30));

} else {
var statearr_28861_28905 = state_28824__$1;
(statearr_28861_28905[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (16))){
var inst_28768 = (state_28824[(2)]);
var inst_28769 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28770 = figwheel.client.heads_up.display_exception.call(null,inst_28769);
var state_28824__$1 = (function (){var statearr_28862 = state_28824;
(statearr_28862[(9)] = inst_28768);

return statearr_28862;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28824__$1,(17),inst_28770);
} else {
if((state_val_28825 === (30))){
var inst_28798 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28799 = figwheel.client.heads_up.display_warning.call(null,inst_28798);
var state_28824__$1 = state_28824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28824__$1,(33),inst_28799);
} else {
if((state_val_28825 === (10))){
var inst_28762 = (state_28824[(2)]);
var state_28824__$1 = state_28824;
var statearr_28863_28906 = state_28824__$1;
(statearr_28863_28906[(2)] = inst_28762);

(statearr_28863_28906[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (18))){
var inst_28776 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28777 = figwheel.client.heads_up.display_exception.call(null,inst_28776);
var state_28824__$1 = state_28824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28824__$1,(21),inst_28777);
} else {
if((state_val_28825 === (37))){
var inst_28807 = (state_28824[(2)]);
var state_28824__$1 = state_28824;
var statearr_28864_28907 = state_28824__$1;
(statearr_28864_28907[(2)] = inst_28807);

(statearr_28864_28907[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (8))){
var inst_28754 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28824__$1 = state_28824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28824__$1,(11),inst_28754);
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
});})(c__22205__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22093__auto__,c__22205__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22094__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22094__auto____0 = (function (){
var statearr_28868 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28868[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22094__auto__);

(statearr_28868[(1)] = (1));

return statearr_28868;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22094__auto____1 = (function (state_28824){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_28824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e28869){if((e28869 instanceof Object)){
var ex__22097__auto__ = e28869;
var statearr_28870_28908 = state_28824;
(statearr_28870_28908[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28909 = state_28824;
state_28824 = G__28909;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22094__auto__ = function(state_28824){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22094__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22094__auto____1.call(this,state_28824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22094__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22094__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto__,msg_hist,msg_names,msg))
})();
var state__22207__auto__ = (function (){var statearr_28871 = f__22206__auto__.call(null);
(statearr_28871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto__);

return statearr_28871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto__,msg_hist,msg_names,msg))
);

return c__22205__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22205__auto___28972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto___28972,ch){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto___28972,ch){
return (function (state_28955){
var state_val_28956 = (state_28955[(1)]);
if((state_val_28956 === (1))){
var state_28955__$1 = state_28955;
var statearr_28957_28973 = state_28955__$1;
(statearr_28957_28973[(2)] = null);

(statearr_28957_28973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (2))){
var state_28955__$1 = state_28955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28955__$1,(4),ch);
} else {
if((state_val_28956 === (3))){
var inst_28953 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28955__$1,inst_28953);
} else {
if((state_val_28956 === (4))){
var inst_28943 = (state_28955[(7)]);
var inst_28943__$1 = (state_28955[(2)]);
var state_28955__$1 = (function (){var statearr_28958 = state_28955;
(statearr_28958[(7)] = inst_28943__$1);

return statearr_28958;
})();
if(cljs.core.truth_(inst_28943__$1)){
var statearr_28959_28974 = state_28955__$1;
(statearr_28959_28974[(1)] = (5));

} else {
var statearr_28960_28975 = state_28955__$1;
(statearr_28960_28975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (5))){
var inst_28943 = (state_28955[(7)]);
var inst_28945 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28943);
var state_28955__$1 = state_28955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28955__$1,(8),inst_28945);
} else {
if((state_val_28956 === (6))){
var state_28955__$1 = state_28955;
var statearr_28961_28976 = state_28955__$1;
(statearr_28961_28976[(2)] = null);

(statearr_28961_28976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (7))){
var inst_28951 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
var statearr_28962_28977 = state_28955__$1;
(statearr_28962_28977[(2)] = inst_28951);

(statearr_28962_28977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (8))){
var inst_28947 = (state_28955[(2)]);
var state_28955__$1 = (function (){var statearr_28963 = state_28955;
(statearr_28963[(8)] = inst_28947);

return statearr_28963;
})();
var statearr_28964_28978 = state_28955__$1;
(statearr_28964_28978[(2)] = null);

(statearr_28964_28978[(1)] = (2));


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
});})(c__22205__auto___28972,ch))
;
return ((function (switch__22093__auto__,c__22205__auto___28972,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22094__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22094__auto____0 = (function (){
var statearr_28968 = [null,null,null,null,null,null,null,null,null];
(statearr_28968[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22094__auto__);

(statearr_28968[(1)] = (1));

return statearr_28968;
});
var figwheel$client$heads_up_plugin_$_state_machine__22094__auto____1 = (function (state_28955){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_28955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e28969){if((e28969 instanceof Object)){
var ex__22097__auto__ = e28969;
var statearr_28970_28979 = state_28955;
(statearr_28970_28979[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28980 = state_28955;
state_28955 = G__28980;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22094__auto__ = function(state_28955){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22094__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22094__auto____1.call(this,state_28955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22094__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22094__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto___28972,ch))
})();
var state__22207__auto__ = (function (){var statearr_28971 = f__22206__auto__.call(null);
(statearr_28971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto___28972);

return statearr_28971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto___28972,ch))
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
var c__22205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto__){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto__){
return (function (state_29001){
var state_val_29002 = (state_29001[(1)]);
if((state_val_29002 === (1))){
var inst_28996 = cljs.core.async.timeout.call(null,(3000));
var state_29001__$1 = state_29001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29001__$1,(2),inst_28996);
} else {
if((state_val_29002 === (2))){
var inst_28998 = (state_29001[(2)]);
var inst_28999 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29001__$1 = (function (){var statearr_29003 = state_29001;
(statearr_29003[(7)] = inst_28998);

return statearr_29003;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29001__$1,inst_28999);
} else {
return null;
}
}
});})(c__22205__auto__))
;
return ((function (switch__22093__auto__,c__22205__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22094__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22094__auto____0 = (function (){
var statearr_29007 = [null,null,null,null,null,null,null,null];
(statearr_29007[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22094__auto__);

(statearr_29007[(1)] = (1));

return statearr_29007;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22094__auto____1 = (function (state_29001){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_29001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e29008){if((e29008 instanceof Object)){
var ex__22097__auto__ = e29008;
var statearr_29009_29011 = state_29001;
(statearr_29009_29011[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29012 = state_29001;
state_29001 = G__29012;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22094__auto__ = function(state_29001){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22094__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22094__auto____1.call(this,state_29001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22094__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22094__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto__))
})();
var state__22207__auto__ = (function (){var statearr_29010 = f__22206__auto__.call(null);
(statearr_29010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto__);

return statearr_29010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto__))
);

return c__22205__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29013){
var map__29020 = p__29013;
var map__29020__$1 = ((((!((map__29020 == null)))?((((map__29020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29020):map__29020);
var ed = map__29020__$1;
var formatted_exception = cljs.core.get.call(null,map__29020__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29020__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29020__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29022_29026 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29023_29027 = null;
var count__29024_29028 = (0);
var i__29025_29029 = (0);
while(true){
if((i__29025_29029 < count__29024_29028)){
var msg_29030 = cljs.core._nth.call(null,chunk__29023_29027,i__29025_29029);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29030);

var G__29031 = seq__29022_29026;
var G__29032 = chunk__29023_29027;
var G__29033 = count__29024_29028;
var G__29034 = (i__29025_29029 + (1));
seq__29022_29026 = G__29031;
chunk__29023_29027 = G__29032;
count__29024_29028 = G__29033;
i__29025_29029 = G__29034;
continue;
} else {
var temp__4657__auto___29035 = cljs.core.seq.call(null,seq__29022_29026);
if(temp__4657__auto___29035){
var seq__29022_29036__$1 = temp__4657__auto___29035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29022_29036__$1)){
var c__19279__auto___29037 = cljs.core.chunk_first.call(null,seq__29022_29036__$1);
var G__29038 = cljs.core.chunk_rest.call(null,seq__29022_29036__$1);
var G__29039 = c__19279__auto___29037;
var G__29040 = cljs.core.count.call(null,c__19279__auto___29037);
var G__29041 = (0);
seq__29022_29026 = G__29038;
chunk__29023_29027 = G__29039;
count__29024_29028 = G__29040;
i__29025_29029 = G__29041;
continue;
} else {
var msg_29042 = cljs.core.first.call(null,seq__29022_29036__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29042);

var G__29043 = cljs.core.next.call(null,seq__29022_29036__$1);
var G__29044 = null;
var G__29045 = (0);
var G__29046 = (0);
seq__29022_29026 = G__29043;
chunk__29023_29027 = G__29044;
count__29024_29028 = G__29045;
i__29025_29029 = G__29046;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29047){
var map__29050 = p__29047;
var map__29050__$1 = ((((!((map__29050 == null)))?((((map__29050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29050):map__29050);
var w = map__29050__$1;
var message = cljs.core.get.call(null,map__29050__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__18456__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18456__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18456__auto__;
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
var seq__29058 = cljs.core.seq.call(null,plugins);
var chunk__29059 = null;
var count__29060 = (0);
var i__29061 = (0);
while(true){
if((i__29061 < count__29060)){
var vec__29062 = cljs.core._nth.call(null,chunk__29059,i__29061);
var k = cljs.core.nth.call(null,vec__29062,(0),null);
var plugin = cljs.core.nth.call(null,vec__29062,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29064 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29058,chunk__29059,count__29060,i__29061,pl_29064,vec__29062,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29064.call(null,msg_hist);
});})(seq__29058,chunk__29059,count__29060,i__29061,pl_29064,vec__29062,k,plugin))
);
} else {
}

var G__29065 = seq__29058;
var G__29066 = chunk__29059;
var G__29067 = count__29060;
var G__29068 = (i__29061 + (1));
seq__29058 = G__29065;
chunk__29059 = G__29066;
count__29060 = G__29067;
i__29061 = G__29068;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29058);
if(temp__4657__auto__){
var seq__29058__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29058__$1)){
var c__19279__auto__ = cljs.core.chunk_first.call(null,seq__29058__$1);
var G__29069 = cljs.core.chunk_rest.call(null,seq__29058__$1);
var G__29070 = c__19279__auto__;
var G__29071 = cljs.core.count.call(null,c__19279__auto__);
var G__29072 = (0);
seq__29058 = G__29069;
chunk__29059 = G__29070;
count__29060 = G__29071;
i__29061 = G__29072;
continue;
} else {
var vec__29063 = cljs.core.first.call(null,seq__29058__$1);
var k = cljs.core.nth.call(null,vec__29063,(0),null);
var plugin = cljs.core.nth.call(null,vec__29063,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29073 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29058,chunk__29059,count__29060,i__29061,pl_29073,vec__29063,k,plugin,seq__29058__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29073.call(null,msg_hist);
});})(seq__29058,chunk__29059,count__29060,i__29061,pl_29073,vec__29063,k,plugin,seq__29058__$1,temp__4657__auto__))
);
} else {
}

var G__29074 = cljs.core.next.call(null,seq__29058__$1);
var G__29075 = null;
var G__29076 = (0);
var G__29077 = (0);
seq__29058 = G__29074;
chunk__29059 = G__29075;
count__29060 = G__29076;
i__29061 = G__29077;
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
var args29078 = [];
var len__19538__auto___29081 = arguments.length;
var i__19539__auto___29082 = (0);
while(true){
if((i__19539__auto___29082 < len__19538__auto___29081)){
args29078.push((arguments[i__19539__auto___29082]));

var G__29083 = (i__19539__auto___29082 + (1));
i__19539__auto___29082 = G__29083;
continue;
} else {
}
break;
}

var G__29080 = args29078.length;
switch (G__29080) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29078.length)].join('')));

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
var args__19545__auto__ = [];
var len__19538__auto___29089 = arguments.length;
var i__19539__auto___29090 = (0);
while(true){
if((i__19539__auto___29090 < len__19538__auto___29089)){
args__19545__auto__.push((arguments[i__19539__auto___29090]));

var G__29091 = (i__19539__auto___29090 + (1));
i__19539__auto___29090 = G__29091;
continue;
} else {
}
break;
}

var argseq__19546__auto__ = ((((0) < args__19545__auto__.length))?(new cljs.core.IndexedSeq(args__19545__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19546__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29086){
var map__29087 = p__29086;
var map__29087__$1 = ((((!((map__29087 == null)))?((((map__29087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29087):map__29087);
var opts = map__29087__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29085){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29085));
});

//# sourceMappingURL=client.js.map