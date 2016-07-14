// Compiled by ClojureScript 1.9.89 {}
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
figwheel.client._figwheel_version_ = "0.5.4-5";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args39217 = [];
var len__22617__auto___39220 = arguments.length;
var i__22618__auto___39221 = (0);
while(true){
if((i__22618__auto___39221 < len__22617__auto___39220)){
args39217.push((arguments[i__22618__auto___39221]));

var G__39222 = (i__22618__auto___39221 + (1));
i__22618__auto___39221 = G__39222;
continue;
} else {
}
break;
}

var G__39219 = args39217.length;
switch (G__39219) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39217.length)].join('')));

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
var args__22624__auto__ = [];
var len__22617__auto___39225 = arguments.length;
var i__22618__auto___39226 = (0);
while(true){
if((i__22618__auto___39226 < len__22617__auto___39225)){
args__22624__auto__.push((arguments[i__22618__auto___39226]));

var G__39227 = (i__22618__auto___39226 + (1));
i__22618__auto___39226 = G__39227;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39224){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39224));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__22624__auto__ = [];
var len__22617__auto___39229 = arguments.length;
var i__22618__auto___39230 = (0);
while(true){
if((i__22618__auto___39230 < len__22617__auto___39229)){
args__22624__auto__.push((arguments[i__22618__auto___39230]));

var G__39231 = (i__22618__auto___39230 + (1));
i__22618__auto___39230 = G__39231;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39228){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39228));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__39232 = cljs.core._EQ_;
var expr__39233 = (function (){var or__21434__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e39236){if((e39236 instanceof Error)){
var e = e39236;
return false;
} else {
throw e39236;

}
}})();
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__39232.call(null,"true",expr__39233))){
return true;
} else {
if(cljs.core.truth_(pred__39232.call(null,"false",expr__39233))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__39233)].join('')));
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
}catch (e39238){if((e39238 instanceof Error)){
var e = e39238;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e39238;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39239){
var map__39242 = p__39239;
var map__39242__$1 = ((((!((map__39242 == null)))?((((map__39242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39242):map__39242);
var message = cljs.core.get.call(null,map__39242__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39242__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21434__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21422__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21422__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21422__auto__;
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
var c__28367__auto___39404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto___39404,ch){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto___39404,ch){
return (function (state_39373){
var state_val_39374 = (state_39373[(1)]);
if((state_val_39374 === (7))){
var inst_39369 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
var statearr_39375_39405 = state_39373__$1;
(statearr_39375_39405[(2)] = inst_39369);

(statearr_39375_39405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (1))){
var state_39373__$1 = state_39373;
var statearr_39376_39406 = state_39373__$1;
(statearr_39376_39406[(2)] = null);

(statearr_39376_39406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (4))){
var inst_39326 = (state_39373[(7)]);
var inst_39326__$1 = (state_39373[(2)]);
var state_39373__$1 = (function (){var statearr_39377 = state_39373;
(statearr_39377[(7)] = inst_39326__$1);

return statearr_39377;
})();
if(cljs.core.truth_(inst_39326__$1)){
var statearr_39378_39407 = state_39373__$1;
(statearr_39378_39407[(1)] = (5));

} else {
var statearr_39379_39408 = state_39373__$1;
(statearr_39379_39408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (15))){
var inst_39333 = (state_39373[(8)]);
var inst_39348 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39333);
var inst_39349 = cljs.core.first.call(null,inst_39348);
var inst_39350 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39349);
var inst_39351 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_39350)].join('');
var inst_39352 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39351);
var state_39373__$1 = state_39373;
var statearr_39380_39409 = state_39373__$1;
(statearr_39380_39409[(2)] = inst_39352);

(statearr_39380_39409[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (13))){
var inst_39357 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
var statearr_39381_39410 = state_39373__$1;
(statearr_39381_39410[(2)] = inst_39357);

(statearr_39381_39410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (6))){
var state_39373__$1 = state_39373;
var statearr_39382_39411 = state_39373__$1;
(statearr_39382_39411[(2)] = null);

(statearr_39382_39411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (17))){
var inst_39355 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
var statearr_39383_39412 = state_39373__$1;
(statearr_39383_39412[(2)] = inst_39355);

(statearr_39383_39412[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (3))){
var inst_39371 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39373__$1,inst_39371);
} else {
if((state_val_39374 === (12))){
var inst_39332 = (state_39373[(9)]);
var inst_39346 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39332,opts);
var state_39373__$1 = state_39373;
if(cljs.core.truth_(inst_39346)){
var statearr_39384_39413 = state_39373__$1;
(statearr_39384_39413[(1)] = (15));

} else {
var statearr_39385_39414 = state_39373__$1;
(statearr_39385_39414[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (2))){
var state_39373__$1 = state_39373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39373__$1,(4),ch);
} else {
if((state_val_39374 === (11))){
var inst_39333 = (state_39373[(8)]);
var inst_39338 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39339 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39333);
var inst_39340 = cljs.core.async.timeout.call(null,(1000));
var inst_39341 = [inst_39339,inst_39340];
var inst_39342 = (new cljs.core.PersistentVector(null,2,(5),inst_39338,inst_39341,null));
var state_39373__$1 = state_39373;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39373__$1,(14),inst_39342);
} else {
if((state_val_39374 === (9))){
var inst_39333 = (state_39373[(8)]);
var inst_39359 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39360 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39333);
var inst_39361 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39360);
var inst_39362 = [cljs.core.str("Not loading: "),cljs.core.str(inst_39361)].join('');
var inst_39363 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39362);
var state_39373__$1 = (function (){var statearr_39386 = state_39373;
(statearr_39386[(10)] = inst_39359);

return statearr_39386;
})();
var statearr_39387_39415 = state_39373__$1;
(statearr_39387_39415[(2)] = inst_39363);

(statearr_39387_39415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (5))){
var inst_39326 = (state_39373[(7)]);
var inst_39328 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39329 = (new cljs.core.PersistentArrayMap(null,2,inst_39328,null));
var inst_39330 = (new cljs.core.PersistentHashSet(null,inst_39329,null));
var inst_39331 = figwheel.client.focus_msgs.call(null,inst_39330,inst_39326);
var inst_39332 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39331);
var inst_39333 = cljs.core.first.call(null,inst_39331);
var inst_39334 = figwheel.client.autoload_QMARK_.call(null);
var state_39373__$1 = (function (){var statearr_39388 = state_39373;
(statearr_39388[(9)] = inst_39332);

(statearr_39388[(8)] = inst_39333);

return statearr_39388;
})();
if(cljs.core.truth_(inst_39334)){
var statearr_39389_39416 = state_39373__$1;
(statearr_39389_39416[(1)] = (8));

} else {
var statearr_39390_39417 = state_39373__$1;
(statearr_39390_39417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (14))){
var inst_39344 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
var statearr_39391_39418 = state_39373__$1;
(statearr_39391_39418[(2)] = inst_39344);

(statearr_39391_39418[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (16))){
var state_39373__$1 = state_39373;
var statearr_39392_39419 = state_39373__$1;
(statearr_39392_39419[(2)] = null);

(statearr_39392_39419[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (10))){
var inst_39365 = (state_39373[(2)]);
var state_39373__$1 = (function (){var statearr_39393 = state_39373;
(statearr_39393[(11)] = inst_39365);

return statearr_39393;
})();
var statearr_39394_39420 = state_39373__$1;
(statearr_39394_39420[(2)] = null);

(statearr_39394_39420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (8))){
var inst_39332 = (state_39373[(9)]);
var inst_39336 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39332,opts);
var state_39373__$1 = state_39373;
if(cljs.core.truth_(inst_39336)){
var statearr_39395_39421 = state_39373__$1;
(statearr_39395_39421[(1)] = (11));

} else {
var statearr_39396_39422 = state_39373__$1;
(statearr_39396_39422[(1)] = (12));

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
});})(c__28367__auto___39404,ch))
;
return ((function (switch__28253__auto__,c__28367__auto___39404,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28254__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28254__auto____0 = (function (){
var statearr_39400 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39400[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28254__auto__);

(statearr_39400[(1)] = (1));

return statearr_39400;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28254__auto____1 = (function (state_39373){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_39373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e39401){if((e39401 instanceof Object)){
var ex__28257__auto__ = e39401;
var statearr_39402_39423 = state_39373;
(statearr_39402_39423[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39424 = state_39373;
state_39373 = G__39424;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28254__auto__ = function(state_39373){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28254__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28254__auto____1.call(this,state_39373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28254__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28254__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto___39404,ch))
})();
var state__28369__auto__ = (function (){var statearr_39403 = f__28368__auto__.call(null);
(statearr_39403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto___39404);

return statearr_39403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto___39404,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39425_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39425_SHARP_));
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
var base_path_39428 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39428){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39427){if((e39427 instanceof Error)){
var e = e39427;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39428], null));
} else {
var e = e39427;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39428))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39429){
var map__39438 = p__39429;
var map__39438__$1 = ((((!((map__39438 == null)))?((((map__39438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39438):map__39438);
var opts = map__39438__$1;
var build_id = cljs.core.get.call(null,map__39438__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39438,map__39438__$1,opts,build_id){
return (function (p__39440){
var vec__39441 = p__39440;
var seq__39442 = cljs.core.seq.call(null,vec__39441);
var first__39443 = cljs.core.first.call(null,seq__39442);
var seq__39442__$1 = cljs.core.next.call(null,seq__39442);
var map__39444 = first__39443;
var map__39444__$1 = ((((!((map__39444 == null)))?((((map__39444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39444):map__39444);
var msg = map__39444__$1;
var msg_name = cljs.core.get.call(null,map__39444__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39442__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39441,seq__39442,first__39443,seq__39442__$1,map__39444,map__39444__$1,msg,msg_name,_,map__39438,map__39438__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39441,seq__39442,first__39443,seq__39442__$1,map__39444,map__39444__$1,msg,msg_name,_,map__39438,map__39438__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39438,map__39438__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39452){
var vec__39453 = p__39452;
var seq__39454 = cljs.core.seq.call(null,vec__39453);
var first__39455 = cljs.core.first.call(null,seq__39454);
var seq__39454__$1 = cljs.core.next.call(null,seq__39454);
var map__39456 = first__39455;
var map__39456__$1 = ((((!((map__39456 == null)))?((((map__39456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39456):map__39456);
var msg = map__39456__$1;
var msg_name = cljs.core.get.call(null,map__39456__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39454__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39458){
var map__39470 = p__39458;
var map__39470__$1 = ((((!((map__39470 == null)))?((((map__39470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39470):map__39470);
var on_compile_warning = cljs.core.get.call(null,map__39470__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39470__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39470,map__39470__$1,on_compile_warning,on_compile_fail){
return (function (p__39472){
var vec__39473 = p__39472;
var seq__39474 = cljs.core.seq.call(null,vec__39473);
var first__39475 = cljs.core.first.call(null,seq__39474);
var seq__39474__$1 = cljs.core.next.call(null,seq__39474);
var map__39476 = first__39475;
var map__39476__$1 = ((((!((map__39476 == null)))?((((map__39476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39476):map__39476);
var msg = map__39476__$1;
var msg_name = cljs.core.get.call(null,map__39476__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39474__$1;
var pred__39478 = cljs.core._EQ_;
var expr__39479 = msg_name;
if(cljs.core.truth_(pred__39478.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39479))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39478.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39479))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39470,map__39470__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto__,msg_hist,msg_names,msg){
return (function (state_39687){
var state_val_39688 = (state_39687[(1)]);
if((state_val_39688 === (7))){
var inst_39615 = (state_39687[(2)]);
var state_39687__$1 = state_39687;
if(cljs.core.truth_(inst_39615)){
var statearr_39689_39735 = state_39687__$1;
(statearr_39689_39735[(1)] = (8));

} else {
var statearr_39690_39736 = state_39687__$1;
(statearr_39690_39736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (20))){
var inst_39681 = (state_39687[(2)]);
var state_39687__$1 = state_39687;
var statearr_39691_39737 = state_39687__$1;
(statearr_39691_39737[(2)] = inst_39681);

(statearr_39691_39737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (27))){
var inst_39677 = (state_39687[(2)]);
var state_39687__$1 = state_39687;
var statearr_39692_39738 = state_39687__$1;
(statearr_39692_39738[(2)] = inst_39677);

(statearr_39692_39738[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (1))){
var inst_39608 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39687__$1 = state_39687;
if(cljs.core.truth_(inst_39608)){
var statearr_39693_39739 = state_39687__$1;
(statearr_39693_39739[(1)] = (2));

} else {
var statearr_39694_39740 = state_39687__$1;
(statearr_39694_39740[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (24))){
var inst_39679 = (state_39687[(2)]);
var state_39687__$1 = state_39687;
var statearr_39695_39741 = state_39687__$1;
(statearr_39695_39741[(2)] = inst_39679);

(statearr_39695_39741[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (4))){
var inst_39685 = (state_39687[(2)]);
var state_39687__$1 = state_39687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39687__$1,inst_39685);
} else {
if((state_val_39688 === (15))){
var inst_39683 = (state_39687[(2)]);
var state_39687__$1 = state_39687;
var statearr_39696_39742 = state_39687__$1;
(statearr_39696_39742[(2)] = inst_39683);

(statearr_39696_39742[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (21))){
var inst_39642 = (state_39687[(2)]);
var state_39687__$1 = state_39687;
var statearr_39697_39743 = state_39687__$1;
(statearr_39697_39743[(2)] = inst_39642);

(statearr_39697_39743[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (31))){
var inst_39666 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39687__$1 = state_39687;
if(cljs.core.truth_(inst_39666)){
var statearr_39698_39744 = state_39687__$1;
(statearr_39698_39744[(1)] = (34));

} else {
var statearr_39699_39745 = state_39687__$1;
(statearr_39699_39745[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (32))){
var inst_39675 = (state_39687[(2)]);
var state_39687__$1 = state_39687;
var statearr_39700_39746 = state_39687__$1;
(statearr_39700_39746[(2)] = inst_39675);

(statearr_39700_39746[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (33))){
var inst_39664 = (state_39687[(2)]);
var state_39687__$1 = state_39687;
var statearr_39701_39747 = state_39687__$1;
(statearr_39701_39747[(2)] = inst_39664);

(statearr_39701_39747[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (13))){
var inst_39629 = figwheel.client.heads_up.clear.call(null);
var state_39687__$1 = state_39687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39687__$1,(16),inst_39629);
} else {
if((state_val_39688 === (22))){
var inst_39646 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39647 = figwheel.client.heads_up.append_warning_message.call(null,inst_39646);
var state_39687__$1 = state_39687;
var statearr_39702_39748 = state_39687__$1;
(statearr_39702_39748[(2)] = inst_39647);

(statearr_39702_39748[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (36))){
var inst_39673 = (state_39687[(2)]);
var state_39687__$1 = state_39687;
var statearr_39703_39749 = state_39687__$1;
(statearr_39703_39749[(2)] = inst_39673);

(statearr_39703_39749[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (29))){
var inst_39657 = (state_39687[(2)]);
var state_39687__$1 = state_39687;
var statearr_39704_39750 = state_39687__$1;
(statearr_39704_39750[(2)] = inst_39657);

(statearr_39704_39750[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (6))){
var inst_39610 = (state_39687[(7)]);
var state_39687__$1 = state_39687;
var statearr_39705_39751 = state_39687__$1;
(statearr_39705_39751[(2)] = inst_39610);

(statearr_39705_39751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (28))){
var inst_39653 = (state_39687[(2)]);
var inst_39654 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39655 = figwheel.client.heads_up.display_warning.call(null,inst_39654);
var state_39687__$1 = (function (){var statearr_39706 = state_39687;
(statearr_39706[(8)] = inst_39653);

return statearr_39706;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39687__$1,(29),inst_39655);
} else {
if((state_val_39688 === (25))){
var inst_39651 = figwheel.client.heads_up.clear.call(null);
var state_39687__$1 = state_39687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39687__$1,(28),inst_39651);
} else {
if((state_val_39688 === (34))){
var inst_39668 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39687__$1 = state_39687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39687__$1,(37),inst_39668);
} else {
if((state_val_39688 === (17))){
var inst_39635 = (state_39687[(2)]);
var state_39687__$1 = state_39687;
var statearr_39707_39752 = state_39687__$1;
(statearr_39707_39752[(2)] = inst_39635);

(statearr_39707_39752[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (3))){
var inst_39627 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39687__$1 = state_39687;
if(cljs.core.truth_(inst_39627)){
var statearr_39708_39753 = state_39687__$1;
(statearr_39708_39753[(1)] = (13));

} else {
var statearr_39709_39754 = state_39687__$1;
(statearr_39709_39754[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (12))){
var inst_39623 = (state_39687[(2)]);
var state_39687__$1 = state_39687;
var statearr_39710_39755 = state_39687__$1;
(statearr_39710_39755[(2)] = inst_39623);

(statearr_39710_39755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (2))){
var inst_39610 = (state_39687[(7)]);
var inst_39610__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39687__$1 = (function (){var statearr_39711 = state_39687;
(statearr_39711[(7)] = inst_39610__$1);

return statearr_39711;
})();
if(cljs.core.truth_(inst_39610__$1)){
var statearr_39712_39756 = state_39687__$1;
(statearr_39712_39756[(1)] = (5));

} else {
var statearr_39713_39757 = state_39687__$1;
(statearr_39713_39757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (23))){
var inst_39649 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39687__$1 = state_39687;
if(cljs.core.truth_(inst_39649)){
var statearr_39714_39758 = state_39687__$1;
(statearr_39714_39758[(1)] = (25));

} else {
var statearr_39715_39759 = state_39687__$1;
(statearr_39715_39759[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (35))){
var state_39687__$1 = state_39687;
var statearr_39716_39760 = state_39687__$1;
(statearr_39716_39760[(2)] = null);

(statearr_39716_39760[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (19))){
var inst_39644 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39687__$1 = state_39687;
if(cljs.core.truth_(inst_39644)){
var statearr_39717_39761 = state_39687__$1;
(statearr_39717_39761[(1)] = (22));

} else {
var statearr_39718_39762 = state_39687__$1;
(statearr_39718_39762[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (11))){
var inst_39619 = (state_39687[(2)]);
var state_39687__$1 = state_39687;
var statearr_39719_39763 = state_39687__$1;
(statearr_39719_39763[(2)] = inst_39619);

(statearr_39719_39763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (9))){
var inst_39621 = figwheel.client.heads_up.clear.call(null);
var state_39687__$1 = state_39687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39687__$1,(12),inst_39621);
} else {
if((state_val_39688 === (5))){
var inst_39612 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39687__$1 = state_39687;
var statearr_39720_39764 = state_39687__$1;
(statearr_39720_39764[(2)] = inst_39612);

(statearr_39720_39764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (14))){
var inst_39637 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39687__$1 = state_39687;
if(cljs.core.truth_(inst_39637)){
var statearr_39721_39765 = state_39687__$1;
(statearr_39721_39765[(1)] = (18));

} else {
var statearr_39722_39766 = state_39687__$1;
(statearr_39722_39766[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (26))){
var inst_39659 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39687__$1 = state_39687;
if(cljs.core.truth_(inst_39659)){
var statearr_39723_39767 = state_39687__$1;
(statearr_39723_39767[(1)] = (30));

} else {
var statearr_39724_39768 = state_39687__$1;
(statearr_39724_39768[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (16))){
var inst_39631 = (state_39687[(2)]);
var inst_39632 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39633 = figwheel.client.heads_up.display_exception.call(null,inst_39632);
var state_39687__$1 = (function (){var statearr_39725 = state_39687;
(statearr_39725[(9)] = inst_39631);

return statearr_39725;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39687__$1,(17),inst_39633);
} else {
if((state_val_39688 === (30))){
var inst_39661 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39662 = figwheel.client.heads_up.display_warning.call(null,inst_39661);
var state_39687__$1 = state_39687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39687__$1,(33),inst_39662);
} else {
if((state_val_39688 === (10))){
var inst_39625 = (state_39687[(2)]);
var state_39687__$1 = state_39687;
var statearr_39726_39769 = state_39687__$1;
(statearr_39726_39769[(2)] = inst_39625);

(statearr_39726_39769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (18))){
var inst_39639 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39640 = figwheel.client.heads_up.display_exception.call(null,inst_39639);
var state_39687__$1 = state_39687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39687__$1,(21),inst_39640);
} else {
if((state_val_39688 === (37))){
var inst_39670 = (state_39687[(2)]);
var state_39687__$1 = state_39687;
var statearr_39727_39770 = state_39687__$1;
(statearr_39727_39770[(2)] = inst_39670);

(statearr_39727_39770[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (8))){
var inst_39617 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39687__$1 = state_39687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39687__$1,(11),inst_39617);
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
});})(c__28367__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28253__auto__,c__28367__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28254__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28254__auto____0 = (function (){
var statearr_39731 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39731[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28254__auto__);

(statearr_39731[(1)] = (1));

return statearr_39731;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28254__auto____1 = (function (state_39687){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_39687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e39732){if((e39732 instanceof Object)){
var ex__28257__auto__ = e39732;
var statearr_39733_39771 = state_39687;
(statearr_39733_39771[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39772 = state_39687;
state_39687 = G__39772;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28254__auto__ = function(state_39687){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28254__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28254__auto____1.call(this,state_39687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28254__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28254__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto__,msg_hist,msg_names,msg))
})();
var state__28369__auto__ = (function (){var statearr_39734 = f__28368__auto__.call(null);
(statearr_39734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto__);

return statearr_39734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto__,msg_hist,msg_names,msg))
);

return c__28367__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28367__auto___39835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto___39835,ch){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto___39835,ch){
return (function (state_39818){
var state_val_39819 = (state_39818[(1)]);
if((state_val_39819 === (1))){
var state_39818__$1 = state_39818;
var statearr_39820_39836 = state_39818__$1;
(statearr_39820_39836[(2)] = null);

(statearr_39820_39836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39819 === (2))){
var state_39818__$1 = state_39818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39818__$1,(4),ch);
} else {
if((state_val_39819 === (3))){
var inst_39816 = (state_39818[(2)]);
var state_39818__$1 = state_39818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39818__$1,inst_39816);
} else {
if((state_val_39819 === (4))){
var inst_39806 = (state_39818[(7)]);
var inst_39806__$1 = (state_39818[(2)]);
var state_39818__$1 = (function (){var statearr_39821 = state_39818;
(statearr_39821[(7)] = inst_39806__$1);

return statearr_39821;
})();
if(cljs.core.truth_(inst_39806__$1)){
var statearr_39822_39837 = state_39818__$1;
(statearr_39822_39837[(1)] = (5));

} else {
var statearr_39823_39838 = state_39818__$1;
(statearr_39823_39838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39819 === (5))){
var inst_39806 = (state_39818[(7)]);
var inst_39808 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39806);
var state_39818__$1 = state_39818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39818__$1,(8),inst_39808);
} else {
if((state_val_39819 === (6))){
var state_39818__$1 = state_39818;
var statearr_39824_39839 = state_39818__$1;
(statearr_39824_39839[(2)] = null);

(statearr_39824_39839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39819 === (7))){
var inst_39814 = (state_39818[(2)]);
var state_39818__$1 = state_39818;
var statearr_39825_39840 = state_39818__$1;
(statearr_39825_39840[(2)] = inst_39814);

(statearr_39825_39840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39819 === (8))){
var inst_39810 = (state_39818[(2)]);
var state_39818__$1 = (function (){var statearr_39826 = state_39818;
(statearr_39826[(8)] = inst_39810);

return statearr_39826;
})();
var statearr_39827_39841 = state_39818__$1;
(statearr_39827_39841[(2)] = null);

(statearr_39827_39841[(1)] = (2));


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
});})(c__28367__auto___39835,ch))
;
return ((function (switch__28253__auto__,c__28367__auto___39835,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28254__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28254__auto____0 = (function (){
var statearr_39831 = [null,null,null,null,null,null,null,null,null];
(statearr_39831[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28254__auto__);

(statearr_39831[(1)] = (1));

return statearr_39831;
});
var figwheel$client$heads_up_plugin_$_state_machine__28254__auto____1 = (function (state_39818){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_39818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e39832){if((e39832 instanceof Object)){
var ex__28257__auto__ = e39832;
var statearr_39833_39842 = state_39818;
(statearr_39833_39842[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39843 = state_39818;
state_39818 = G__39843;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28254__auto__ = function(state_39818){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28254__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28254__auto____1.call(this,state_39818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28254__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28254__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto___39835,ch))
})();
var state__28369__auto__ = (function (){var statearr_39834 = f__28368__auto__.call(null);
(statearr_39834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto___39835);

return statearr_39834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto___39835,ch))
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
var c__28367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto__){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto__){
return (function (state_39864){
var state_val_39865 = (state_39864[(1)]);
if((state_val_39865 === (1))){
var inst_39859 = cljs.core.async.timeout.call(null,(3000));
var state_39864__$1 = state_39864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39864__$1,(2),inst_39859);
} else {
if((state_val_39865 === (2))){
var inst_39861 = (state_39864[(2)]);
var inst_39862 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39864__$1 = (function (){var statearr_39866 = state_39864;
(statearr_39866[(7)] = inst_39861);

return statearr_39866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39864__$1,inst_39862);
} else {
return null;
}
}
});})(c__28367__auto__))
;
return ((function (switch__28253__auto__,c__28367__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28254__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28254__auto____0 = (function (){
var statearr_39870 = [null,null,null,null,null,null,null,null];
(statearr_39870[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28254__auto__);

(statearr_39870[(1)] = (1));

return statearr_39870;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28254__auto____1 = (function (state_39864){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_39864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e39871){if((e39871 instanceof Object)){
var ex__28257__auto__ = e39871;
var statearr_39872_39874 = state_39864;
(statearr_39872_39874[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39875 = state_39864;
state_39864 = G__39875;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28254__auto__ = function(state_39864){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28254__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28254__auto____1.call(this,state_39864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28254__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28254__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto__))
})();
var state__28369__auto__ = (function (){var statearr_39873 = f__28368__auto__.call(null);
(statearr_39873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto__);

return statearr_39873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto__))
);

return c__28367__auto__;
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
var temp__6369__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6369__auto__)){
var figwheel_version = temp__6369__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto__,figwheel_version,temp__6369__auto__){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto__,figwheel_version,temp__6369__auto__){
return (function (state_39898){
var state_val_39899 = (state_39898[(1)]);
if((state_val_39899 === (1))){
var inst_39892 = cljs.core.async.timeout.call(null,(2000));
var state_39898__$1 = state_39898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39898__$1,(2),inst_39892);
} else {
if((state_val_39899 === (2))){
var inst_39894 = (state_39898[(2)]);
var inst_39895 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_39896 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39895);
var state_39898__$1 = (function (){var statearr_39900 = state_39898;
(statearr_39900[(7)] = inst_39894);

return statearr_39900;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39898__$1,inst_39896);
} else {
return null;
}
}
});})(c__28367__auto__,figwheel_version,temp__6369__auto__))
;
return ((function (switch__28253__auto__,c__28367__auto__,figwheel_version,temp__6369__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28254__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28254__auto____0 = (function (){
var statearr_39904 = [null,null,null,null,null,null,null,null];
(statearr_39904[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28254__auto__);

(statearr_39904[(1)] = (1));

return statearr_39904;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28254__auto____1 = (function (state_39898){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_39898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e39905){if((e39905 instanceof Object)){
var ex__28257__auto__ = e39905;
var statearr_39906_39908 = state_39898;
(statearr_39906_39908[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39909 = state_39898;
state_39898 = G__39909;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28254__auto__ = function(state_39898){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28254__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28254__auto____1.call(this,state_39898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28254__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28254__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto__,figwheel_version,temp__6369__auto__))
})();
var state__28369__auto__ = (function (){var statearr_39907 = f__28368__auto__.call(null);
(statearr_39907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto__);

return statearr_39907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto__,figwheel_version,temp__6369__auto__))
);

return c__28367__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39910){
var map__39914 = p__39910;
var map__39914__$1 = ((((!((map__39914 == null)))?((((map__39914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39914):map__39914);
var file = cljs.core.get.call(null,map__39914__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39914__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39914__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39916 = "";
var G__39916__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__39916),cljs.core.str("file "),cljs.core.str(file)].join(''):G__39916);
var G__39916__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__39916__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__39916__$1);
if(cljs.core.truth_((function (){var and__21422__auto__ = line;
if(cljs.core.truth_(and__21422__auto__)){
return column;
} else {
return and__21422__auto__;
}
})())){
return [cljs.core.str(G__39916__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__39916__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39917){
var map__39924 = p__39917;
var map__39924__$1 = ((((!((map__39924 == null)))?((((map__39924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39924):map__39924);
var ed = map__39924__$1;
var formatted_exception = cljs.core.get.call(null,map__39924__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39924__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39924__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39926_39930 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39927_39931 = null;
var count__39928_39932 = (0);
var i__39929_39933 = (0);
while(true){
if((i__39929_39933 < count__39928_39932)){
var msg_39934 = cljs.core._nth.call(null,chunk__39927_39931,i__39929_39933);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39934);

var G__39935 = seq__39926_39930;
var G__39936 = chunk__39927_39931;
var G__39937 = count__39928_39932;
var G__39938 = (i__39929_39933 + (1));
seq__39926_39930 = G__39935;
chunk__39927_39931 = G__39936;
count__39928_39932 = G__39937;
i__39929_39933 = G__39938;
continue;
} else {
var temp__6369__auto___39939 = cljs.core.seq.call(null,seq__39926_39930);
if(temp__6369__auto___39939){
var seq__39926_39940__$1 = temp__6369__auto___39939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39926_39940__$1)){
var c__22337__auto___39941 = cljs.core.chunk_first.call(null,seq__39926_39940__$1);
var G__39942 = cljs.core.chunk_rest.call(null,seq__39926_39940__$1);
var G__39943 = c__22337__auto___39941;
var G__39944 = cljs.core.count.call(null,c__22337__auto___39941);
var G__39945 = (0);
seq__39926_39930 = G__39942;
chunk__39927_39931 = G__39943;
count__39928_39932 = G__39944;
i__39929_39933 = G__39945;
continue;
} else {
var msg_39946 = cljs.core.first.call(null,seq__39926_39940__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39946);

var G__39947 = cljs.core.next.call(null,seq__39926_39940__$1);
var G__39948 = null;
var G__39949 = (0);
var G__39950 = (0);
seq__39926_39930 = G__39947;
chunk__39927_39931 = G__39948;
count__39928_39932 = G__39949;
i__39929_39933 = G__39950;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39951){
var map__39954 = p__39951;
var map__39954__$1 = ((((!((map__39954 == null)))?((((map__39954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39954):map__39954);
var w = map__39954__$1;
var message = cljs.core.get.call(null,map__39954__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__21422__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21422__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21422__auto__;
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
var seq__39966 = cljs.core.seq.call(null,plugins);
var chunk__39967 = null;
var count__39968 = (0);
var i__39969 = (0);
while(true){
if((i__39969 < count__39968)){
var vec__39970 = cljs.core._nth.call(null,chunk__39967,i__39969);
var k = cljs.core.nth.call(null,vec__39970,(0),null);
var plugin = cljs.core.nth.call(null,vec__39970,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39976 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39966,chunk__39967,count__39968,i__39969,pl_39976,vec__39970,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39976.call(null,msg_hist);
});})(seq__39966,chunk__39967,count__39968,i__39969,pl_39976,vec__39970,k,plugin))
);
} else {
}

var G__39977 = seq__39966;
var G__39978 = chunk__39967;
var G__39979 = count__39968;
var G__39980 = (i__39969 + (1));
seq__39966 = G__39977;
chunk__39967 = G__39978;
count__39968 = G__39979;
i__39969 = G__39980;
continue;
} else {
var temp__6369__auto__ = cljs.core.seq.call(null,seq__39966);
if(temp__6369__auto__){
var seq__39966__$1 = temp__6369__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39966__$1)){
var c__22337__auto__ = cljs.core.chunk_first.call(null,seq__39966__$1);
var G__39981 = cljs.core.chunk_rest.call(null,seq__39966__$1);
var G__39982 = c__22337__auto__;
var G__39983 = cljs.core.count.call(null,c__22337__auto__);
var G__39984 = (0);
seq__39966 = G__39981;
chunk__39967 = G__39982;
count__39968 = G__39983;
i__39969 = G__39984;
continue;
} else {
var vec__39973 = cljs.core.first.call(null,seq__39966__$1);
var k = cljs.core.nth.call(null,vec__39973,(0),null);
var plugin = cljs.core.nth.call(null,vec__39973,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39985 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39966,chunk__39967,count__39968,i__39969,pl_39985,vec__39973,k,plugin,seq__39966__$1,temp__6369__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39985.call(null,msg_hist);
});})(seq__39966,chunk__39967,count__39968,i__39969,pl_39985,vec__39973,k,plugin,seq__39966__$1,temp__6369__auto__))
);
} else {
}

var G__39986 = cljs.core.next.call(null,seq__39966__$1);
var G__39987 = null;
var G__39988 = (0);
var G__39989 = (0);
seq__39966 = G__39986;
chunk__39967 = G__39987;
count__39968 = G__39988;
i__39969 = G__39989;
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
var args39990 = [];
var len__22617__auto___39997 = arguments.length;
var i__22618__auto___39998 = (0);
while(true){
if((i__22618__auto___39998 < len__22617__auto___39997)){
args39990.push((arguments[i__22618__auto___39998]));

var G__39999 = (i__22618__auto___39998 + (1));
i__22618__auto___39998 = G__39999;
continue;
} else {
}
break;
}

var G__39992 = args39990.length;
switch (G__39992) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39990.length)].join('')));

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

var seq__39993_40001 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39994_40002 = null;
var count__39995_40003 = (0);
var i__39996_40004 = (0);
while(true){
if((i__39996_40004 < count__39995_40003)){
var msg_40005 = cljs.core._nth.call(null,chunk__39994_40002,i__39996_40004);
figwheel.client.socket.handle_incoming_message.call(null,msg_40005);

var G__40006 = seq__39993_40001;
var G__40007 = chunk__39994_40002;
var G__40008 = count__39995_40003;
var G__40009 = (i__39996_40004 + (1));
seq__39993_40001 = G__40006;
chunk__39994_40002 = G__40007;
count__39995_40003 = G__40008;
i__39996_40004 = G__40009;
continue;
} else {
var temp__6369__auto___40010 = cljs.core.seq.call(null,seq__39993_40001);
if(temp__6369__auto___40010){
var seq__39993_40011__$1 = temp__6369__auto___40010;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39993_40011__$1)){
var c__22337__auto___40012 = cljs.core.chunk_first.call(null,seq__39993_40011__$1);
var G__40013 = cljs.core.chunk_rest.call(null,seq__39993_40011__$1);
var G__40014 = c__22337__auto___40012;
var G__40015 = cljs.core.count.call(null,c__22337__auto___40012);
var G__40016 = (0);
seq__39993_40001 = G__40013;
chunk__39994_40002 = G__40014;
count__39995_40003 = G__40015;
i__39996_40004 = G__40016;
continue;
} else {
var msg_40017 = cljs.core.first.call(null,seq__39993_40011__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40017);

var G__40018 = cljs.core.next.call(null,seq__39993_40011__$1);
var G__40019 = null;
var G__40020 = (0);
var G__40021 = (0);
seq__39993_40001 = G__40018;
chunk__39994_40002 = G__40019;
count__39995_40003 = G__40020;
i__39996_40004 = G__40021;
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
var args__22624__auto__ = [];
var len__22617__auto___40026 = arguments.length;
var i__22618__auto___40027 = (0);
while(true){
if((i__22618__auto___40027 < len__22617__auto___40026)){
args__22624__auto__.push((arguments[i__22618__auto___40027]));

var G__40028 = (i__22618__auto___40027 + (1));
i__22618__auto___40027 = G__40028;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40023){
var map__40024 = p__40023;
var map__40024__$1 = ((((!((map__40024 == null)))?((((map__40024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40024):map__40024);
var opts = map__40024__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40022){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40022));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40030){if((e40030 instanceof Error)){
var e = e40030;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40030;

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
return (function (p__40034){
var map__40035 = p__40034;
var map__40035__$1 = ((((!((map__40035 == null)))?((((map__40035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40035):map__40035);
var msg_name = cljs.core.get.call(null,map__40035__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1468449926808