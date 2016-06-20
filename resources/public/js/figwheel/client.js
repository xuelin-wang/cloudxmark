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
var pred__28391 = cljs.core._EQ_;
var expr__28392 = (function (){var or__18468__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e28395){if((e28395 instanceof Error)){
var e = e28395;
return false;
} else {
throw e28395;

}
}})();
if(cljs.core.truth_(or__18468__auto__)){
return or__18468__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28391.call(null,"true",expr__28392))){
return true;
} else {
if(cljs.core.truth_(pred__28391.call(null,"false",expr__28392))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28392)].join('')));
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
}catch (e28397){if((e28397 instanceof Error)){
var e = e28397;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e28397;

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
var len__19538__auto___28399 = arguments.length;
var i__19539__auto___28400 = (0);
while(true){
if((i__19539__auto___28400 < len__19538__auto___28399)){
args__19545__auto__.push((arguments[i__19539__auto___28400]));

var G__28401 = (i__19539__auto___28400 + (1));
i__19539__auto___28400 = G__28401;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq28398){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28398));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28402){
var map__28405 = p__28402;
var map__28405__$1 = ((((!((map__28405 == null)))?((((map__28405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28405):map__28405);
var message = cljs.core.get.call(null,map__28405__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28405__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__22278__auto___28567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto___28567,ch){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto___28567,ch){
return (function (state_28536){
var state_val_28537 = (state_28536[(1)]);
if((state_val_28537 === (7))){
var inst_28532 = (state_28536[(2)]);
var state_28536__$1 = state_28536;
var statearr_28538_28568 = state_28536__$1;
(statearr_28538_28568[(2)] = inst_28532);

(statearr_28538_28568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (1))){
var state_28536__$1 = state_28536;
var statearr_28539_28569 = state_28536__$1;
(statearr_28539_28569[(2)] = null);

(statearr_28539_28569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (4))){
var inst_28489 = (state_28536[(7)]);
var inst_28489__$1 = (state_28536[(2)]);
var state_28536__$1 = (function (){var statearr_28540 = state_28536;
(statearr_28540[(7)] = inst_28489__$1);

return statearr_28540;
})();
if(cljs.core.truth_(inst_28489__$1)){
var statearr_28541_28570 = state_28536__$1;
(statearr_28541_28570[(1)] = (5));

} else {
var statearr_28542_28571 = state_28536__$1;
(statearr_28542_28571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (15))){
var inst_28496 = (state_28536[(8)]);
var inst_28511 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28496);
var inst_28512 = cljs.core.first.call(null,inst_28511);
var inst_28513 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28512);
var inst_28514 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28513)].join('');
var inst_28515 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28514);
var state_28536__$1 = state_28536;
var statearr_28543_28572 = state_28536__$1;
(statearr_28543_28572[(2)] = inst_28515);

(statearr_28543_28572[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (13))){
var inst_28520 = (state_28536[(2)]);
var state_28536__$1 = state_28536;
var statearr_28544_28573 = state_28536__$1;
(statearr_28544_28573[(2)] = inst_28520);

(statearr_28544_28573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (6))){
var state_28536__$1 = state_28536;
var statearr_28545_28574 = state_28536__$1;
(statearr_28545_28574[(2)] = null);

(statearr_28545_28574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (17))){
var inst_28518 = (state_28536[(2)]);
var state_28536__$1 = state_28536;
var statearr_28546_28575 = state_28536__$1;
(statearr_28546_28575[(2)] = inst_28518);

(statearr_28546_28575[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (3))){
var inst_28534 = (state_28536[(2)]);
var state_28536__$1 = state_28536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28536__$1,inst_28534);
} else {
if((state_val_28537 === (12))){
var inst_28495 = (state_28536[(9)]);
var inst_28509 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28495,opts);
var state_28536__$1 = state_28536;
if(cljs.core.truth_(inst_28509)){
var statearr_28547_28576 = state_28536__$1;
(statearr_28547_28576[(1)] = (15));

} else {
var statearr_28548_28577 = state_28536__$1;
(statearr_28548_28577[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (2))){
var state_28536__$1 = state_28536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28536__$1,(4),ch);
} else {
if((state_val_28537 === (11))){
var inst_28496 = (state_28536[(8)]);
var inst_28501 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28502 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28496);
var inst_28503 = cljs.core.async.timeout.call(null,(1000));
var inst_28504 = [inst_28502,inst_28503];
var inst_28505 = (new cljs.core.PersistentVector(null,2,(5),inst_28501,inst_28504,null));
var state_28536__$1 = state_28536;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28536__$1,(14),inst_28505);
} else {
if((state_val_28537 === (9))){
var inst_28496 = (state_28536[(8)]);
var inst_28522 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28523 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28496);
var inst_28524 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28523);
var inst_28525 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28524)].join('');
var inst_28526 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28525);
var state_28536__$1 = (function (){var statearr_28549 = state_28536;
(statearr_28549[(10)] = inst_28522);

return statearr_28549;
})();
var statearr_28550_28578 = state_28536__$1;
(statearr_28550_28578[(2)] = inst_28526);

(statearr_28550_28578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (5))){
var inst_28489 = (state_28536[(7)]);
var inst_28491 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28492 = (new cljs.core.PersistentArrayMap(null,2,inst_28491,null));
var inst_28493 = (new cljs.core.PersistentHashSet(null,inst_28492,null));
var inst_28494 = figwheel.client.focus_msgs.call(null,inst_28493,inst_28489);
var inst_28495 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28494);
var inst_28496 = cljs.core.first.call(null,inst_28494);
var inst_28497 = figwheel.client.autoload_QMARK_.call(null);
var state_28536__$1 = (function (){var statearr_28551 = state_28536;
(statearr_28551[(9)] = inst_28495);

(statearr_28551[(8)] = inst_28496);

return statearr_28551;
})();
if(cljs.core.truth_(inst_28497)){
var statearr_28552_28579 = state_28536__$1;
(statearr_28552_28579[(1)] = (8));

} else {
var statearr_28553_28580 = state_28536__$1;
(statearr_28553_28580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (14))){
var inst_28507 = (state_28536[(2)]);
var state_28536__$1 = state_28536;
var statearr_28554_28581 = state_28536__$1;
(statearr_28554_28581[(2)] = inst_28507);

(statearr_28554_28581[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (16))){
var state_28536__$1 = state_28536;
var statearr_28555_28582 = state_28536__$1;
(statearr_28555_28582[(2)] = null);

(statearr_28555_28582[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (10))){
var inst_28528 = (state_28536[(2)]);
var state_28536__$1 = (function (){var statearr_28556 = state_28536;
(statearr_28556[(11)] = inst_28528);

return statearr_28556;
})();
var statearr_28557_28583 = state_28536__$1;
(statearr_28557_28583[(2)] = null);

(statearr_28557_28583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (8))){
var inst_28495 = (state_28536[(9)]);
var inst_28499 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28495,opts);
var state_28536__$1 = state_28536;
if(cljs.core.truth_(inst_28499)){
var statearr_28558_28584 = state_28536__$1;
(statearr_28558_28584[(1)] = (11));

} else {
var statearr_28559_28585 = state_28536__$1;
(statearr_28559_28585[(1)] = (12));

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
});})(c__22278__auto___28567,ch))
;
return ((function (switch__22166__auto__,c__22278__auto___28567,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22167__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22167__auto____0 = (function (){
var statearr_28563 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28563[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22167__auto__);

(statearr_28563[(1)] = (1));

return statearr_28563;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22167__auto____1 = (function (state_28536){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_28536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e28564){if((e28564 instanceof Object)){
var ex__22170__auto__ = e28564;
var statearr_28565_28586 = state_28536;
(statearr_28565_28586[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28587 = state_28536;
state_28536 = G__28587;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22167__auto__ = function(state_28536){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22167__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22167__auto____1.call(this,state_28536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22167__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22167__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto___28567,ch))
})();
var state__22280__auto__ = (function (){var statearr_28566 = f__22279__auto__.call(null);
(statearr_28566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto___28567);

return statearr_28566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto___28567,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28588_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28588_SHARP_));
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
var base_path_28595 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28595){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28593 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28594 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28594;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28593;
}}catch (e28592){if((e28592 instanceof Error)){
var e = e28592;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28595], null));
} else {
var e = e28592;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28595))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28596){
var map__28603 = p__28596;
var map__28603__$1 = ((((!((map__28603 == null)))?((((map__28603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28603):map__28603);
var opts = map__28603__$1;
var build_id = cljs.core.get.call(null,map__28603__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28603,map__28603__$1,opts,build_id){
return (function (p__28605){
var vec__28606 = p__28605;
var map__28607 = cljs.core.nth.call(null,vec__28606,(0),null);
var map__28607__$1 = ((((!((map__28607 == null)))?((((map__28607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28607):map__28607);
var msg = map__28607__$1;
var msg_name = cljs.core.get.call(null,map__28607__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28606,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28606,map__28607,map__28607__$1,msg,msg_name,_,map__28603,map__28603__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28606,map__28607,map__28607__$1,msg,msg_name,_,map__28603,map__28603__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28603,map__28603__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28613){
var vec__28614 = p__28613;
var map__28615 = cljs.core.nth.call(null,vec__28614,(0),null);
var map__28615__$1 = ((((!((map__28615 == null)))?((((map__28615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28615):map__28615);
var msg = map__28615__$1;
var msg_name = cljs.core.get.call(null,map__28615__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28614,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28617){
var map__28627 = p__28617;
var map__28627__$1 = ((((!((map__28627 == null)))?((((map__28627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28627):map__28627);
var on_compile_warning = cljs.core.get.call(null,map__28627__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28627__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28627,map__28627__$1,on_compile_warning,on_compile_fail){
return (function (p__28629){
var vec__28630 = p__28629;
var map__28631 = cljs.core.nth.call(null,vec__28630,(0),null);
var map__28631__$1 = ((((!((map__28631 == null)))?((((map__28631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28631):map__28631);
var msg = map__28631__$1;
var msg_name = cljs.core.get.call(null,map__28631__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28630,(1));
var pred__28633 = cljs.core._EQ_;
var expr__28634 = msg_name;
if(cljs.core.truth_(pred__28633.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28634))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28633.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28634))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28627,map__28627__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto__,msg_hist,msg_names,msg){
return (function (state_28842){
var state_val_28843 = (state_28842[(1)]);
if((state_val_28843 === (7))){
var inst_28770 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
if(cljs.core.truth_(inst_28770)){
var statearr_28844_28890 = state_28842__$1;
(statearr_28844_28890[(1)] = (8));

} else {
var statearr_28845_28891 = state_28842__$1;
(statearr_28845_28891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (20))){
var inst_28836 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28846_28892 = state_28842__$1;
(statearr_28846_28892[(2)] = inst_28836);

(statearr_28846_28892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (27))){
var inst_28832 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28847_28893 = state_28842__$1;
(statearr_28847_28893[(2)] = inst_28832);

(statearr_28847_28893[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (1))){
var inst_28763 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28842__$1 = state_28842;
if(cljs.core.truth_(inst_28763)){
var statearr_28848_28894 = state_28842__$1;
(statearr_28848_28894[(1)] = (2));

} else {
var statearr_28849_28895 = state_28842__$1;
(statearr_28849_28895[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (24))){
var inst_28834 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28850_28896 = state_28842__$1;
(statearr_28850_28896[(2)] = inst_28834);

(statearr_28850_28896[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (4))){
var inst_28840 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28842__$1,inst_28840);
} else {
if((state_val_28843 === (15))){
var inst_28838 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28851_28897 = state_28842__$1;
(statearr_28851_28897[(2)] = inst_28838);

(statearr_28851_28897[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (21))){
var inst_28797 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28852_28898 = state_28842__$1;
(statearr_28852_28898[(2)] = inst_28797);

(statearr_28852_28898[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (31))){
var inst_28821 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28842__$1 = state_28842;
if(cljs.core.truth_(inst_28821)){
var statearr_28853_28899 = state_28842__$1;
(statearr_28853_28899[(1)] = (34));

} else {
var statearr_28854_28900 = state_28842__$1;
(statearr_28854_28900[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (32))){
var inst_28830 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28855_28901 = state_28842__$1;
(statearr_28855_28901[(2)] = inst_28830);

(statearr_28855_28901[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (33))){
var inst_28819 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28856_28902 = state_28842__$1;
(statearr_28856_28902[(2)] = inst_28819);

(statearr_28856_28902[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (13))){
var inst_28784 = figwheel.client.heads_up.clear.call(null);
var state_28842__$1 = state_28842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28842__$1,(16),inst_28784);
} else {
if((state_val_28843 === (22))){
var inst_28801 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28802 = figwheel.client.heads_up.append_message.call(null,inst_28801);
var state_28842__$1 = state_28842;
var statearr_28857_28903 = state_28842__$1;
(statearr_28857_28903[(2)] = inst_28802);

(statearr_28857_28903[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (36))){
var inst_28828 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28858_28904 = state_28842__$1;
(statearr_28858_28904[(2)] = inst_28828);

(statearr_28858_28904[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (29))){
var inst_28812 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28859_28905 = state_28842__$1;
(statearr_28859_28905[(2)] = inst_28812);

(statearr_28859_28905[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (6))){
var inst_28765 = (state_28842[(7)]);
var state_28842__$1 = state_28842;
var statearr_28860_28906 = state_28842__$1;
(statearr_28860_28906[(2)] = inst_28765);

(statearr_28860_28906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (28))){
var inst_28808 = (state_28842[(2)]);
var inst_28809 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28810 = figwheel.client.heads_up.display_warning.call(null,inst_28809);
var state_28842__$1 = (function (){var statearr_28861 = state_28842;
(statearr_28861[(8)] = inst_28808);

return statearr_28861;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28842__$1,(29),inst_28810);
} else {
if((state_val_28843 === (25))){
var inst_28806 = figwheel.client.heads_up.clear.call(null);
var state_28842__$1 = state_28842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28842__$1,(28),inst_28806);
} else {
if((state_val_28843 === (34))){
var inst_28823 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28842__$1 = state_28842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28842__$1,(37),inst_28823);
} else {
if((state_val_28843 === (17))){
var inst_28790 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28862_28907 = state_28842__$1;
(statearr_28862_28907[(2)] = inst_28790);

(statearr_28862_28907[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (3))){
var inst_28782 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28842__$1 = state_28842;
if(cljs.core.truth_(inst_28782)){
var statearr_28863_28908 = state_28842__$1;
(statearr_28863_28908[(1)] = (13));

} else {
var statearr_28864_28909 = state_28842__$1;
(statearr_28864_28909[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (12))){
var inst_28778 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28865_28910 = state_28842__$1;
(statearr_28865_28910[(2)] = inst_28778);

(statearr_28865_28910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (2))){
var inst_28765 = (state_28842[(7)]);
var inst_28765__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28842__$1 = (function (){var statearr_28866 = state_28842;
(statearr_28866[(7)] = inst_28765__$1);

return statearr_28866;
})();
if(cljs.core.truth_(inst_28765__$1)){
var statearr_28867_28911 = state_28842__$1;
(statearr_28867_28911[(1)] = (5));

} else {
var statearr_28868_28912 = state_28842__$1;
(statearr_28868_28912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (23))){
var inst_28804 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28842__$1 = state_28842;
if(cljs.core.truth_(inst_28804)){
var statearr_28869_28913 = state_28842__$1;
(statearr_28869_28913[(1)] = (25));

} else {
var statearr_28870_28914 = state_28842__$1;
(statearr_28870_28914[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (35))){
var state_28842__$1 = state_28842;
var statearr_28871_28915 = state_28842__$1;
(statearr_28871_28915[(2)] = null);

(statearr_28871_28915[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (19))){
var inst_28799 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28842__$1 = state_28842;
if(cljs.core.truth_(inst_28799)){
var statearr_28872_28916 = state_28842__$1;
(statearr_28872_28916[(1)] = (22));

} else {
var statearr_28873_28917 = state_28842__$1;
(statearr_28873_28917[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (11))){
var inst_28774 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28874_28918 = state_28842__$1;
(statearr_28874_28918[(2)] = inst_28774);

(statearr_28874_28918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (9))){
var inst_28776 = figwheel.client.heads_up.clear.call(null);
var state_28842__$1 = state_28842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28842__$1,(12),inst_28776);
} else {
if((state_val_28843 === (5))){
var inst_28767 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28842__$1 = state_28842;
var statearr_28875_28919 = state_28842__$1;
(statearr_28875_28919[(2)] = inst_28767);

(statearr_28875_28919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (14))){
var inst_28792 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28842__$1 = state_28842;
if(cljs.core.truth_(inst_28792)){
var statearr_28876_28920 = state_28842__$1;
(statearr_28876_28920[(1)] = (18));

} else {
var statearr_28877_28921 = state_28842__$1;
(statearr_28877_28921[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (26))){
var inst_28814 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28842__$1 = state_28842;
if(cljs.core.truth_(inst_28814)){
var statearr_28878_28922 = state_28842__$1;
(statearr_28878_28922[(1)] = (30));

} else {
var statearr_28879_28923 = state_28842__$1;
(statearr_28879_28923[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (16))){
var inst_28786 = (state_28842[(2)]);
var inst_28787 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28788 = figwheel.client.heads_up.display_exception.call(null,inst_28787);
var state_28842__$1 = (function (){var statearr_28880 = state_28842;
(statearr_28880[(9)] = inst_28786);

return statearr_28880;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28842__$1,(17),inst_28788);
} else {
if((state_val_28843 === (30))){
var inst_28816 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28817 = figwheel.client.heads_up.display_warning.call(null,inst_28816);
var state_28842__$1 = state_28842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28842__$1,(33),inst_28817);
} else {
if((state_val_28843 === (10))){
var inst_28780 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28881_28924 = state_28842__$1;
(statearr_28881_28924[(2)] = inst_28780);

(statearr_28881_28924[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (18))){
var inst_28794 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28795 = figwheel.client.heads_up.display_exception.call(null,inst_28794);
var state_28842__$1 = state_28842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28842__$1,(21),inst_28795);
} else {
if((state_val_28843 === (37))){
var inst_28825 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28882_28925 = state_28842__$1;
(statearr_28882_28925[(2)] = inst_28825);

(statearr_28882_28925[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (8))){
var inst_28772 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28842__$1 = state_28842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28842__$1,(11),inst_28772);
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
});})(c__22278__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22166__auto__,c__22278__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22167__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22167__auto____0 = (function (){
var statearr_28886 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28886[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22167__auto__);

(statearr_28886[(1)] = (1));

return statearr_28886;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22167__auto____1 = (function (state_28842){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_28842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e28887){if((e28887 instanceof Object)){
var ex__22170__auto__ = e28887;
var statearr_28888_28926 = state_28842;
(statearr_28888_28926[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28927 = state_28842;
state_28842 = G__28927;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22167__auto__ = function(state_28842){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22167__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22167__auto____1.call(this,state_28842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22167__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22167__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto__,msg_hist,msg_names,msg))
})();
var state__22280__auto__ = (function (){var statearr_28889 = f__22279__auto__.call(null);
(statearr_28889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto__);

return statearr_28889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto__,msg_hist,msg_names,msg))
);

return c__22278__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22278__auto___28990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto___28990,ch){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto___28990,ch){
return (function (state_28973){
var state_val_28974 = (state_28973[(1)]);
if((state_val_28974 === (1))){
var state_28973__$1 = state_28973;
var statearr_28975_28991 = state_28973__$1;
(statearr_28975_28991[(2)] = null);

(statearr_28975_28991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (2))){
var state_28973__$1 = state_28973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28973__$1,(4),ch);
} else {
if((state_val_28974 === (3))){
var inst_28971 = (state_28973[(2)]);
var state_28973__$1 = state_28973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28973__$1,inst_28971);
} else {
if((state_val_28974 === (4))){
var inst_28961 = (state_28973[(7)]);
var inst_28961__$1 = (state_28973[(2)]);
var state_28973__$1 = (function (){var statearr_28976 = state_28973;
(statearr_28976[(7)] = inst_28961__$1);

return statearr_28976;
})();
if(cljs.core.truth_(inst_28961__$1)){
var statearr_28977_28992 = state_28973__$1;
(statearr_28977_28992[(1)] = (5));

} else {
var statearr_28978_28993 = state_28973__$1;
(statearr_28978_28993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (5))){
var inst_28961 = (state_28973[(7)]);
var inst_28963 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28961);
var state_28973__$1 = state_28973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28973__$1,(8),inst_28963);
} else {
if((state_val_28974 === (6))){
var state_28973__$1 = state_28973;
var statearr_28979_28994 = state_28973__$1;
(statearr_28979_28994[(2)] = null);

(statearr_28979_28994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (7))){
var inst_28969 = (state_28973[(2)]);
var state_28973__$1 = state_28973;
var statearr_28980_28995 = state_28973__$1;
(statearr_28980_28995[(2)] = inst_28969);

(statearr_28980_28995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (8))){
var inst_28965 = (state_28973[(2)]);
var state_28973__$1 = (function (){var statearr_28981 = state_28973;
(statearr_28981[(8)] = inst_28965);

return statearr_28981;
})();
var statearr_28982_28996 = state_28973__$1;
(statearr_28982_28996[(2)] = null);

(statearr_28982_28996[(1)] = (2));


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
});})(c__22278__auto___28990,ch))
;
return ((function (switch__22166__auto__,c__22278__auto___28990,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22167__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22167__auto____0 = (function (){
var statearr_28986 = [null,null,null,null,null,null,null,null,null];
(statearr_28986[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22167__auto__);

(statearr_28986[(1)] = (1));

return statearr_28986;
});
var figwheel$client$heads_up_plugin_$_state_machine__22167__auto____1 = (function (state_28973){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_28973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e28987){if((e28987 instanceof Object)){
var ex__22170__auto__ = e28987;
var statearr_28988_28997 = state_28973;
(statearr_28988_28997[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28998 = state_28973;
state_28973 = G__28998;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22167__auto__ = function(state_28973){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22167__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22167__auto____1.call(this,state_28973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22167__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22167__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto___28990,ch))
})();
var state__22280__auto__ = (function (){var statearr_28989 = f__22279__auto__.call(null);
(statearr_28989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto___28990);

return statearr_28989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto___28990,ch))
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
var c__22278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto__){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto__){
return (function (state_29019){
var state_val_29020 = (state_29019[(1)]);
if((state_val_29020 === (1))){
var inst_29014 = cljs.core.async.timeout.call(null,(3000));
var state_29019__$1 = state_29019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29019__$1,(2),inst_29014);
} else {
if((state_val_29020 === (2))){
var inst_29016 = (state_29019[(2)]);
var inst_29017 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29019__$1 = (function (){var statearr_29021 = state_29019;
(statearr_29021[(7)] = inst_29016);

return statearr_29021;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29019__$1,inst_29017);
} else {
return null;
}
}
});})(c__22278__auto__))
;
return ((function (switch__22166__auto__,c__22278__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22167__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22167__auto____0 = (function (){
var statearr_29025 = [null,null,null,null,null,null,null,null];
(statearr_29025[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22167__auto__);

(statearr_29025[(1)] = (1));

return statearr_29025;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22167__auto____1 = (function (state_29019){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_29019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e29026){if((e29026 instanceof Object)){
var ex__22170__auto__ = e29026;
var statearr_29027_29029 = state_29019;
(statearr_29027_29029[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29030 = state_29019;
state_29019 = G__29030;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22167__auto__ = function(state_29019){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22167__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22167__auto____1.call(this,state_29019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22167__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22167__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto__))
})();
var state__22280__auto__ = (function (){var statearr_29028 = f__22279__auto__.call(null);
(statearr_29028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto__);

return statearr_29028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto__))
);

return c__22278__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29031){
var map__29038 = p__29031;
var map__29038__$1 = ((((!((map__29038 == null)))?((((map__29038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29038):map__29038);
var ed = map__29038__$1;
var formatted_exception = cljs.core.get.call(null,map__29038__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29038__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29038__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29040_29044 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29041_29045 = null;
var count__29042_29046 = (0);
var i__29043_29047 = (0);
while(true){
if((i__29043_29047 < count__29042_29046)){
var msg_29048 = cljs.core._nth.call(null,chunk__29041_29045,i__29043_29047);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29048);

var G__29049 = seq__29040_29044;
var G__29050 = chunk__29041_29045;
var G__29051 = count__29042_29046;
var G__29052 = (i__29043_29047 + (1));
seq__29040_29044 = G__29049;
chunk__29041_29045 = G__29050;
count__29042_29046 = G__29051;
i__29043_29047 = G__29052;
continue;
} else {
var temp__4657__auto___29053 = cljs.core.seq.call(null,seq__29040_29044);
if(temp__4657__auto___29053){
var seq__29040_29054__$1 = temp__4657__auto___29053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29040_29054__$1)){
var c__19279__auto___29055 = cljs.core.chunk_first.call(null,seq__29040_29054__$1);
var G__29056 = cljs.core.chunk_rest.call(null,seq__29040_29054__$1);
var G__29057 = c__19279__auto___29055;
var G__29058 = cljs.core.count.call(null,c__19279__auto___29055);
var G__29059 = (0);
seq__29040_29044 = G__29056;
chunk__29041_29045 = G__29057;
count__29042_29046 = G__29058;
i__29043_29047 = G__29059;
continue;
} else {
var msg_29060 = cljs.core.first.call(null,seq__29040_29054__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29060);

var G__29061 = cljs.core.next.call(null,seq__29040_29054__$1);
var G__29062 = null;
var G__29063 = (0);
var G__29064 = (0);
seq__29040_29044 = G__29061;
chunk__29041_29045 = G__29062;
count__29042_29046 = G__29063;
i__29043_29047 = G__29064;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29065){
var map__29068 = p__29065;
var map__29068__$1 = ((((!((map__29068 == null)))?((((map__29068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29068):map__29068);
var w = map__29068__$1;
var message = cljs.core.get.call(null,map__29068__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29076 = cljs.core.seq.call(null,plugins);
var chunk__29077 = null;
var count__29078 = (0);
var i__29079 = (0);
while(true){
if((i__29079 < count__29078)){
var vec__29080 = cljs.core._nth.call(null,chunk__29077,i__29079);
var k = cljs.core.nth.call(null,vec__29080,(0),null);
var plugin = cljs.core.nth.call(null,vec__29080,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29082 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29076,chunk__29077,count__29078,i__29079,pl_29082,vec__29080,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29082.call(null,msg_hist);
});})(seq__29076,chunk__29077,count__29078,i__29079,pl_29082,vec__29080,k,plugin))
);
} else {
}

var G__29083 = seq__29076;
var G__29084 = chunk__29077;
var G__29085 = count__29078;
var G__29086 = (i__29079 + (1));
seq__29076 = G__29083;
chunk__29077 = G__29084;
count__29078 = G__29085;
i__29079 = G__29086;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29076);
if(temp__4657__auto__){
var seq__29076__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29076__$1)){
var c__19279__auto__ = cljs.core.chunk_first.call(null,seq__29076__$1);
var G__29087 = cljs.core.chunk_rest.call(null,seq__29076__$1);
var G__29088 = c__19279__auto__;
var G__29089 = cljs.core.count.call(null,c__19279__auto__);
var G__29090 = (0);
seq__29076 = G__29087;
chunk__29077 = G__29088;
count__29078 = G__29089;
i__29079 = G__29090;
continue;
} else {
var vec__29081 = cljs.core.first.call(null,seq__29076__$1);
var k = cljs.core.nth.call(null,vec__29081,(0),null);
var plugin = cljs.core.nth.call(null,vec__29081,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29091 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29076,chunk__29077,count__29078,i__29079,pl_29091,vec__29081,k,plugin,seq__29076__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29091.call(null,msg_hist);
});})(seq__29076,chunk__29077,count__29078,i__29079,pl_29091,vec__29081,k,plugin,seq__29076__$1,temp__4657__auto__))
);
} else {
}

var G__29092 = cljs.core.next.call(null,seq__29076__$1);
var G__29093 = null;
var G__29094 = (0);
var G__29095 = (0);
seq__29076 = G__29092;
chunk__29077 = G__29093;
count__29078 = G__29094;
i__29079 = G__29095;
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
var args29096 = [];
var len__19538__auto___29099 = arguments.length;
var i__19539__auto___29100 = (0);
while(true){
if((i__19539__auto___29100 < len__19538__auto___29099)){
args29096.push((arguments[i__19539__auto___29100]));

var G__29101 = (i__19539__auto___29100 + (1));
i__19539__auto___29100 = G__29101;
continue;
} else {
}
break;
}

var G__29098 = args29096.length;
switch (G__29098) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29096.length)].join('')));

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
var len__19538__auto___29107 = arguments.length;
var i__19539__auto___29108 = (0);
while(true){
if((i__19539__auto___29108 < len__19538__auto___29107)){
args__19545__auto__.push((arguments[i__19539__auto___29108]));

var G__29109 = (i__19539__auto___29108 + (1));
i__19539__auto___29108 = G__29109;
continue;
} else {
}
break;
}

var argseq__19546__auto__ = ((((0) < args__19545__auto__.length))?(new cljs.core.IndexedSeq(args__19545__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19546__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29104){
var map__29105 = p__29104;
var map__29105__$1 = ((((!((map__29105 == null)))?((((map__29105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29105):map__29105);
var opts = map__29105__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29103){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29103));
});

//# sourceMappingURL=client.js.map