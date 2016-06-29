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
var args36217 = [];
var len__22617__auto___36220 = arguments.length;
var i__22618__auto___36221 = (0);
while(true){
if((i__22618__auto___36221 < len__22617__auto___36220)){
args36217.push((arguments[i__22618__auto___36221]));

var G__36222 = (i__22618__auto___36221 + (1));
i__22618__auto___36221 = G__36222;
continue;
} else {
}
break;
}

var G__36219 = args36217.length;
switch (G__36219) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36217.length)].join('')));

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
var len__22617__auto___36225 = arguments.length;
var i__22618__auto___36226 = (0);
while(true){
if((i__22618__auto___36226 < len__22617__auto___36225)){
args__22624__auto__.push((arguments[i__22618__auto___36226]));

var G__36227 = (i__22618__auto___36226 + (1));
i__22618__auto___36226 = G__36227;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36224){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36224));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__22624__auto__ = [];
var len__22617__auto___36229 = arguments.length;
var i__22618__auto___36230 = (0);
while(true){
if((i__22618__auto___36230 < len__22617__auto___36229)){
args__22624__auto__.push((arguments[i__22618__auto___36230]));

var G__36231 = (i__22618__auto___36230 + (1));
i__22618__auto___36230 = G__36231;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36228){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36228));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__36232 = cljs.core._EQ_;
var expr__36233 = (function (){var or__21434__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e36236){if((e36236 instanceof Error)){
var e = e36236;
return false;
} else {
throw e36236;

}
}})();
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__36232.call(null,"true",expr__36233))){
return true;
} else {
if(cljs.core.truth_(pred__36232.call(null,"false",expr__36233))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__36233)].join('')));
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
}catch (e36238){if((e36238 instanceof Error)){
var e = e36238;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e36238;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36239){
var map__36242 = p__36239;
var map__36242__$1 = ((((!((map__36242 == null)))?((((map__36242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36242):map__36242);
var message = cljs.core.get.call(null,map__36242__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36242__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__25730__auto___36404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto___36404,ch){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto___36404,ch){
return (function (state_36373){
var state_val_36374 = (state_36373[(1)]);
if((state_val_36374 === (7))){
var inst_36369 = (state_36373[(2)]);
var state_36373__$1 = state_36373;
var statearr_36375_36405 = state_36373__$1;
(statearr_36375_36405[(2)] = inst_36369);

(statearr_36375_36405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36374 === (1))){
var state_36373__$1 = state_36373;
var statearr_36376_36406 = state_36373__$1;
(statearr_36376_36406[(2)] = null);

(statearr_36376_36406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36374 === (4))){
var inst_36326 = (state_36373[(7)]);
var inst_36326__$1 = (state_36373[(2)]);
var state_36373__$1 = (function (){var statearr_36377 = state_36373;
(statearr_36377[(7)] = inst_36326__$1);

return statearr_36377;
})();
if(cljs.core.truth_(inst_36326__$1)){
var statearr_36378_36407 = state_36373__$1;
(statearr_36378_36407[(1)] = (5));

} else {
var statearr_36379_36408 = state_36373__$1;
(statearr_36379_36408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36374 === (15))){
var inst_36333 = (state_36373[(8)]);
var inst_36348 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36333);
var inst_36349 = cljs.core.first.call(null,inst_36348);
var inst_36350 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36349);
var inst_36351 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36350)].join('');
var inst_36352 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36351);
var state_36373__$1 = state_36373;
var statearr_36380_36409 = state_36373__$1;
(statearr_36380_36409[(2)] = inst_36352);

(statearr_36380_36409[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36374 === (13))){
var inst_36357 = (state_36373[(2)]);
var state_36373__$1 = state_36373;
var statearr_36381_36410 = state_36373__$1;
(statearr_36381_36410[(2)] = inst_36357);

(statearr_36381_36410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36374 === (6))){
var state_36373__$1 = state_36373;
var statearr_36382_36411 = state_36373__$1;
(statearr_36382_36411[(2)] = null);

(statearr_36382_36411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36374 === (17))){
var inst_36355 = (state_36373[(2)]);
var state_36373__$1 = state_36373;
var statearr_36383_36412 = state_36373__$1;
(statearr_36383_36412[(2)] = inst_36355);

(statearr_36383_36412[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36374 === (3))){
var inst_36371 = (state_36373[(2)]);
var state_36373__$1 = state_36373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36373__$1,inst_36371);
} else {
if((state_val_36374 === (12))){
var inst_36332 = (state_36373[(9)]);
var inst_36346 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36332,opts);
var state_36373__$1 = state_36373;
if(cljs.core.truth_(inst_36346)){
var statearr_36384_36413 = state_36373__$1;
(statearr_36384_36413[(1)] = (15));

} else {
var statearr_36385_36414 = state_36373__$1;
(statearr_36385_36414[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36374 === (2))){
var state_36373__$1 = state_36373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36373__$1,(4),ch);
} else {
if((state_val_36374 === (11))){
var inst_36333 = (state_36373[(8)]);
var inst_36338 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36339 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36333);
var inst_36340 = cljs.core.async.timeout.call(null,(1000));
var inst_36341 = [inst_36339,inst_36340];
var inst_36342 = (new cljs.core.PersistentVector(null,2,(5),inst_36338,inst_36341,null));
var state_36373__$1 = state_36373;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36373__$1,(14),inst_36342);
} else {
if((state_val_36374 === (9))){
var inst_36333 = (state_36373[(8)]);
var inst_36359 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36360 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36333);
var inst_36361 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36360);
var inst_36362 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36361)].join('');
var inst_36363 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36362);
var state_36373__$1 = (function (){var statearr_36386 = state_36373;
(statearr_36386[(10)] = inst_36359);

return statearr_36386;
})();
var statearr_36387_36415 = state_36373__$1;
(statearr_36387_36415[(2)] = inst_36363);

(statearr_36387_36415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36374 === (5))){
var inst_36326 = (state_36373[(7)]);
var inst_36328 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36329 = (new cljs.core.PersistentArrayMap(null,2,inst_36328,null));
var inst_36330 = (new cljs.core.PersistentHashSet(null,inst_36329,null));
var inst_36331 = figwheel.client.focus_msgs.call(null,inst_36330,inst_36326);
var inst_36332 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36331);
var inst_36333 = cljs.core.first.call(null,inst_36331);
var inst_36334 = figwheel.client.autoload_QMARK_.call(null);
var state_36373__$1 = (function (){var statearr_36388 = state_36373;
(statearr_36388[(9)] = inst_36332);

(statearr_36388[(8)] = inst_36333);

return statearr_36388;
})();
if(cljs.core.truth_(inst_36334)){
var statearr_36389_36416 = state_36373__$1;
(statearr_36389_36416[(1)] = (8));

} else {
var statearr_36390_36417 = state_36373__$1;
(statearr_36390_36417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36374 === (14))){
var inst_36344 = (state_36373[(2)]);
var state_36373__$1 = state_36373;
var statearr_36391_36418 = state_36373__$1;
(statearr_36391_36418[(2)] = inst_36344);

(statearr_36391_36418[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36374 === (16))){
var state_36373__$1 = state_36373;
var statearr_36392_36419 = state_36373__$1;
(statearr_36392_36419[(2)] = null);

(statearr_36392_36419[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36374 === (10))){
var inst_36365 = (state_36373[(2)]);
var state_36373__$1 = (function (){var statearr_36393 = state_36373;
(statearr_36393[(11)] = inst_36365);

return statearr_36393;
})();
var statearr_36394_36420 = state_36373__$1;
(statearr_36394_36420[(2)] = null);

(statearr_36394_36420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36374 === (8))){
var inst_36332 = (state_36373[(9)]);
var inst_36336 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36332,opts);
var state_36373__$1 = state_36373;
if(cljs.core.truth_(inst_36336)){
var statearr_36395_36421 = state_36373__$1;
(statearr_36395_36421[(1)] = (11));

} else {
var statearr_36396_36422 = state_36373__$1;
(statearr_36396_36422[(1)] = (12));

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
});})(c__25730__auto___36404,ch))
;
return ((function (switch__25616__auto__,c__25730__auto___36404,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25617__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25617__auto____0 = (function (){
var statearr_36400 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36400[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25617__auto__);

(statearr_36400[(1)] = (1));

return statearr_36400;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25617__auto____1 = (function (state_36373){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_36373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e36401){if((e36401 instanceof Object)){
var ex__25620__auto__ = e36401;
var statearr_36402_36423 = state_36373;
(statearr_36402_36423[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36424 = state_36373;
state_36373 = G__36424;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25617__auto__ = function(state_36373){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25617__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25617__auto____1.call(this,state_36373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25617__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25617__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto___36404,ch))
})();
var state__25732__auto__ = (function (){var statearr_36403 = f__25731__auto__.call(null);
(statearr_36403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto___36404);

return statearr_36403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto___36404,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36425_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36425_SHARP_));
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
var base_path_36428 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36428){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36427){if((e36427 instanceof Error)){
var e = e36427;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36428], null));
} else {
var e = e36427;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36428))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36429){
var map__36438 = p__36429;
var map__36438__$1 = ((((!((map__36438 == null)))?((((map__36438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36438):map__36438);
var opts = map__36438__$1;
var build_id = cljs.core.get.call(null,map__36438__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36438,map__36438__$1,opts,build_id){
return (function (p__36440){
var vec__36441 = p__36440;
var seq__36442 = cljs.core.seq.call(null,vec__36441);
var first__36443 = cljs.core.first.call(null,seq__36442);
var seq__36442__$1 = cljs.core.next.call(null,seq__36442);
var map__36444 = first__36443;
var map__36444__$1 = ((((!((map__36444 == null)))?((((map__36444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36444):map__36444);
var msg = map__36444__$1;
var msg_name = cljs.core.get.call(null,map__36444__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36442__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36441,seq__36442,first__36443,seq__36442__$1,map__36444,map__36444__$1,msg,msg_name,_,map__36438,map__36438__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36441,seq__36442,first__36443,seq__36442__$1,map__36444,map__36444__$1,msg,msg_name,_,map__36438,map__36438__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36438,map__36438__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36452){
var vec__36453 = p__36452;
var seq__36454 = cljs.core.seq.call(null,vec__36453);
var first__36455 = cljs.core.first.call(null,seq__36454);
var seq__36454__$1 = cljs.core.next.call(null,seq__36454);
var map__36456 = first__36455;
var map__36456__$1 = ((((!((map__36456 == null)))?((((map__36456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36456):map__36456);
var msg = map__36456__$1;
var msg_name = cljs.core.get.call(null,map__36456__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36454__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36458){
var map__36470 = p__36458;
var map__36470__$1 = ((((!((map__36470 == null)))?((((map__36470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36470):map__36470);
var on_compile_warning = cljs.core.get.call(null,map__36470__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36470__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36470,map__36470__$1,on_compile_warning,on_compile_fail){
return (function (p__36472){
var vec__36473 = p__36472;
var seq__36474 = cljs.core.seq.call(null,vec__36473);
var first__36475 = cljs.core.first.call(null,seq__36474);
var seq__36474__$1 = cljs.core.next.call(null,seq__36474);
var map__36476 = first__36475;
var map__36476__$1 = ((((!((map__36476 == null)))?((((map__36476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36476):map__36476);
var msg = map__36476__$1;
var msg_name = cljs.core.get.call(null,map__36476__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36474__$1;
var pred__36478 = cljs.core._EQ_;
var expr__36479 = msg_name;
if(cljs.core.truth_(pred__36478.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36479))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36478.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36479))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36470,map__36470__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto__,msg_hist,msg_names,msg){
return (function (state_36687){
var state_val_36688 = (state_36687[(1)]);
if((state_val_36688 === (7))){
var inst_36615 = (state_36687[(2)]);
var state_36687__$1 = state_36687;
if(cljs.core.truth_(inst_36615)){
var statearr_36689_36735 = state_36687__$1;
(statearr_36689_36735[(1)] = (8));

} else {
var statearr_36690_36736 = state_36687__$1;
(statearr_36690_36736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (20))){
var inst_36681 = (state_36687[(2)]);
var state_36687__$1 = state_36687;
var statearr_36691_36737 = state_36687__$1;
(statearr_36691_36737[(2)] = inst_36681);

(statearr_36691_36737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (27))){
var inst_36677 = (state_36687[(2)]);
var state_36687__$1 = state_36687;
var statearr_36692_36738 = state_36687__$1;
(statearr_36692_36738[(2)] = inst_36677);

(statearr_36692_36738[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (1))){
var inst_36608 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36687__$1 = state_36687;
if(cljs.core.truth_(inst_36608)){
var statearr_36693_36739 = state_36687__$1;
(statearr_36693_36739[(1)] = (2));

} else {
var statearr_36694_36740 = state_36687__$1;
(statearr_36694_36740[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (24))){
var inst_36679 = (state_36687[(2)]);
var state_36687__$1 = state_36687;
var statearr_36695_36741 = state_36687__$1;
(statearr_36695_36741[(2)] = inst_36679);

(statearr_36695_36741[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (4))){
var inst_36685 = (state_36687[(2)]);
var state_36687__$1 = state_36687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36687__$1,inst_36685);
} else {
if((state_val_36688 === (15))){
var inst_36683 = (state_36687[(2)]);
var state_36687__$1 = state_36687;
var statearr_36696_36742 = state_36687__$1;
(statearr_36696_36742[(2)] = inst_36683);

(statearr_36696_36742[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (21))){
var inst_36642 = (state_36687[(2)]);
var state_36687__$1 = state_36687;
var statearr_36697_36743 = state_36687__$1;
(statearr_36697_36743[(2)] = inst_36642);

(statearr_36697_36743[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (31))){
var inst_36666 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36687__$1 = state_36687;
if(cljs.core.truth_(inst_36666)){
var statearr_36698_36744 = state_36687__$1;
(statearr_36698_36744[(1)] = (34));

} else {
var statearr_36699_36745 = state_36687__$1;
(statearr_36699_36745[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (32))){
var inst_36675 = (state_36687[(2)]);
var state_36687__$1 = state_36687;
var statearr_36700_36746 = state_36687__$1;
(statearr_36700_36746[(2)] = inst_36675);

(statearr_36700_36746[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (33))){
var inst_36664 = (state_36687[(2)]);
var state_36687__$1 = state_36687;
var statearr_36701_36747 = state_36687__$1;
(statearr_36701_36747[(2)] = inst_36664);

(statearr_36701_36747[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (13))){
var inst_36629 = figwheel.client.heads_up.clear.call(null);
var state_36687__$1 = state_36687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36687__$1,(16),inst_36629);
} else {
if((state_val_36688 === (22))){
var inst_36646 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36647 = figwheel.client.heads_up.append_warning_message.call(null,inst_36646);
var state_36687__$1 = state_36687;
var statearr_36702_36748 = state_36687__$1;
(statearr_36702_36748[(2)] = inst_36647);

(statearr_36702_36748[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (36))){
var inst_36673 = (state_36687[(2)]);
var state_36687__$1 = state_36687;
var statearr_36703_36749 = state_36687__$1;
(statearr_36703_36749[(2)] = inst_36673);

(statearr_36703_36749[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (29))){
var inst_36657 = (state_36687[(2)]);
var state_36687__$1 = state_36687;
var statearr_36704_36750 = state_36687__$1;
(statearr_36704_36750[(2)] = inst_36657);

(statearr_36704_36750[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (6))){
var inst_36610 = (state_36687[(7)]);
var state_36687__$1 = state_36687;
var statearr_36705_36751 = state_36687__$1;
(statearr_36705_36751[(2)] = inst_36610);

(statearr_36705_36751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (28))){
var inst_36653 = (state_36687[(2)]);
var inst_36654 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36655 = figwheel.client.heads_up.display_warning.call(null,inst_36654);
var state_36687__$1 = (function (){var statearr_36706 = state_36687;
(statearr_36706[(8)] = inst_36653);

return statearr_36706;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36687__$1,(29),inst_36655);
} else {
if((state_val_36688 === (25))){
var inst_36651 = figwheel.client.heads_up.clear.call(null);
var state_36687__$1 = state_36687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36687__$1,(28),inst_36651);
} else {
if((state_val_36688 === (34))){
var inst_36668 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36687__$1 = state_36687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36687__$1,(37),inst_36668);
} else {
if((state_val_36688 === (17))){
var inst_36635 = (state_36687[(2)]);
var state_36687__$1 = state_36687;
var statearr_36707_36752 = state_36687__$1;
(statearr_36707_36752[(2)] = inst_36635);

(statearr_36707_36752[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (3))){
var inst_36627 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36687__$1 = state_36687;
if(cljs.core.truth_(inst_36627)){
var statearr_36708_36753 = state_36687__$1;
(statearr_36708_36753[(1)] = (13));

} else {
var statearr_36709_36754 = state_36687__$1;
(statearr_36709_36754[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (12))){
var inst_36623 = (state_36687[(2)]);
var state_36687__$1 = state_36687;
var statearr_36710_36755 = state_36687__$1;
(statearr_36710_36755[(2)] = inst_36623);

(statearr_36710_36755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (2))){
var inst_36610 = (state_36687[(7)]);
var inst_36610__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36687__$1 = (function (){var statearr_36711 = state_36687;
(statearr_36711[(7)] = inst_36610__$1);

return statearr_36711;
})();
if(cljs.core.truth_(inst_36610__$1)){
var statearr_36712_36756 = state_36687__$1;
(statearr_36712_36756[(1)] = (5));

} else {
var statearr_36713_36757 = state_36687__$1;
(statearr_36713_36757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (23))){
var inst_36649 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36687__$1 = state_36687;
if(cljs.core.truth_(inst_36649)){
var statearr_36714_36758 = state_36687__$1;
(statearr_36714_36758[(1)] = (25));

} else {
var statearr_36715_36759 = state_36687__$1;
(statearr_36715_36759[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (35))){
var state_36687__$1 = state_36687;
var statearr_36716_36760 = state_36687__$1;
(statearr_36716_36760[(2)] = null);

(statearr_36716_36760[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (19))){
var inst_36644 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36687__$1 = state_36687;
if(cljs.core.truth_(inst_36644)){
var statearr_36717_36761 = state_36687__$1;
(statearr_36717_36761[(1)] = (22));

} else {
var statearr_36718_36762 = state_36687__$1;
(statearr_36718_36762[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (11))){
var inst_36619 = (state_36687[(2)]);
var state_36687__$1 = state_36687;
var statearr_36719_36763 = state_36687__$1;
(statearr_36719_36763[(2)] = inst_36619);

(statearr_36719_36763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (9))){
var inst_36621 = figwheel.client.heads_up.clear.call(null);
var state_36687__$1 = state_36687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36687__$1,(12),inst_36621);
} else {
if((state_val_36688 === (5))){
var inst_36612 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36687__$1 = state_36687;
var statearr_36720_36764 = state_36687__$1;
(statearr_36720_36764[(2)] = inst_36612);

(statearr_36720_36764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (14))){
var inst_36637 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36687__$1 = state_36687;
if(cljs.core.truth_(inst_36637)){
var statearr_36721_36765 = state_36687__$1;
(statearr_36721_36765[(1)] = (18));

} else {
var statearr_36722_36766 = state_36687__$1;
(statearr_36722_36766[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (26))){
var inst_36659 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36687__$1 = state_36687;
if(cljs.core.truth_(inst_36659)){
var statearr_36723_36767 = state_36687__$1;
(statearr_36723_36767[(1)] = (30));

} else {
var statearr_36724_36768 = state_36687__$1;
(statearr_36724_36768[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (16))){
var inst_36631 = (state_36687[(2)]);
var inst_36632 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36633 = figwheel.client.heads_up.display_exception.call(null,inst_36632);
var state_36687__$1 = (function (){var statearr_36725 = state_36687;
(statearr_36725[(9)] = inst_36631);

return statearr_36725;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36687__$1,(17),inst_36633);
} else {
if((state_val_36688 === (30))){
var inst_36661 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36662 = figwheel.client.heads_up.display_warning.call(null,inst_36661);
var state_36687__$1 = state_36687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36687__$1,(33),inst_36662);
} else {
if((state_val_36688 === (10))){
var inst_36625 = (state_36687[(2)]);
var state_36687__$1 = state_36687;
var statearr_36726_36769 = state_36687__$1;
(statearr_36726_36769[(2)] = inst_36625);

(statearr_36726_36769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (18))){
var inst_36639 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36640 = figwheel.client.heads_up.display_exception.call(null,inst_36639);
var state_36687__$1 = state_36687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36687__$1,(21),inst_36640);
} else {
if((state_val_36688 === (37))){
var inst_36670 = (state_36687[(2)]);
var state_36687__$1 = state_36687;
var statearr_36727_36770 = state_36687__$1;
(statearr_36727_36770[(2)] = inst_36670);

(statearr_36727_36770[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36688 === (8))){
var inst_36617 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36687__$1 = state_36687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36687__$1,(11),inst_36617);
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
});})(c__25730__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25616__auto__,c__25730__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25617__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25617__auto____0 = (function (){
var statearr_36731 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36731[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25617__auto__);

(statearr_36731[(1)] = (1));

return statearr_36731;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25617__auto____1 = (function (state_36687){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_36687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e36732){if((e36732 instanceof Object)){
var ex__25620__auto__ = e36732;
var statearr_36733_36771 = state_36687;
(statearr_36733_36771[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36772 = state_36687;
state_36687 = G__36772;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25617__auto__ = function(state_36687){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25617__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25617__auto____1.call(this,state_36687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25617__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25617__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto__,msg_hist,msg_names,msg))
})();
var state__25732__auto__ = (function (){var statearr_36734 = f__25731__auto__.call(null);
(statearr_36734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto__);

return statearr_36734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto__,msg_hist,msg_names,msg))
);

return c__25730__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25730__auto___36835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto___36835,ch){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto___36835,ch){
return (function (state_36818){
var state_val_36819 = (state_36818[(1)]);
if((state_val_36819 === (1))){
var state_36818__$1 = state_36818;
var statearr_36820_36836 = state_36818__$1;
(statearr_36820_36836[(2)] = null);

(statearr_36820_36836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36819 === (2))){
var state_36818__$1 = state_36818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36818__$1,(4),ch);
} else {
if((state_val_36819 === (3))){
var inst_36816 = (state_36818[(2)]);
var state_36818__$1 = state_36818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36818__$1,inst_36816);
} else {
if((state_val_36819 === (4))){
var inst_36806 = (state_36818[(7)]);
var inst_36806__$1 = (state_36818[(2)]);
var state_36818__$1 = (function (){var statearr_36821 = state_36818;
(statearr_36821[(7)] = inst_36806__$1);

return statearr_36821;
})();
if(cljs.core.truth_(inst_36806__$1)){
var statearr_36822_36837 = state_36818__$1;
(statearr_36822_36837[(1)] = (5));

} else {
var statearr_36823_36838 = state_36818__$1;
(statearr_36823_36838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36819 === (5))){
var inst_36806 = (state_36818[(7)]);
var inst_36808 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36806);
var state_36818__$1 = state_36818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36818__$1,(8),inst_36808);
} else {
if((state_val_36819 === (6))){
var state_36818__$1 = state_36818;
var statearr_36824_36839 = state_36818__$1;
(statearr_36824_36839[(2)] = null);

(statearr_36824_36839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36819 === (7))){
var inst_36814 = (state_36818[(2)]);
var state_36818__$1 = state_36818;
var statearr_36825_36840 = state_36818__$1;
(statearr_36825_36840[(2)] = inst_36814);

(statearr_36825_36840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36819 === (8))){
var inst_36810 = (state_36818[(2)]);
var state_36818__$1 = (function (){var statearr_36826 = state_36818;
(statearr_36826[(8)] = inst_36810);

return statearr_36826;
})();
var statearr_36827_36841 = state_36818__$1;
(statearr_36827_36841[(2)] = null);

(statearr_36827_36841[(1)] = (2));


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
});})(c__25730__auto___36835,ch))
;
return ((function (switch__25616__auto__,c__25730__auto___36835,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25617__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25617__auto____0 = (function (){
var statearr_36831 = [null,null,null,null,null,null,null,null,null];
(statearr_36831[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25617__auto__);

(statearr_36831[(1)] = (1));

return statearr_36831;
});
var figwheel$client$heads_up_plugin_$_state_machine__25617__auto____1 = (function (state_36818){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_36818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e36832){if((e36832 instanceof Object)){
var ex__25620__auto__ = e36832;
var statearr_36833_36842 = state_36818;
(statearr_36833_36842[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36843 = state_36818;
state_36818 = G__36843;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25617__auto__ = function(state_36818){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25617__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25617__auto____1.call(this,state_36818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25617__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25617__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto___36835,ch))
})();
var state__25732__auto__ = (function (){var statearr_36834 = f__25731__auto__.call(null);
(statearr_36834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto___36835);

return statearr_36834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto___36835,ch))
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
var c__25730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto__){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto__){
return (function (state_36864){
var state_val_36865 = (state_36864[(1)]);
if((state_val_36865 === (1))){
var inst_36859 = cljs.core.async.timeout.call(null,(3000));
var state_36864__$1 = state_36864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36864__$1,(2),inst_36859);
} else {
if((state_val_36865 === (2))){
var inst_36861 = (state_36864[(2)]);
var inst_36862 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36864__$1 = (function (){var statearr_36866 = state_36864;
(statearr_36866[(7)] = inst_36861);

return statearr_36866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36864__$1,inst_36862);
} else {
return null;
}
}
});})(c__25730__auto__))
;
return ((function (switch__25616__auto__,c__25730__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25617__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25617__auto____0 = (function (){
var statearr_36870 = [null,null,null,null,null,null,null,null];
(statearr_36870[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25617__auto__);

(statearr_36870[(1)] = (1));

return statearr_36870;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25617__auto____1 = (function (state_36864){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_36864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e36871){if((e36871 instanceof Object)){
var ex__25620__auto__ = e36871;
var statearr_36872_36874 = state_36864;
(statearr_36872_36874[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36875 = state_36864;
state_36864 = G__36875;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25617__auto__ = function(state_36864){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25617__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25617__auto____1.call(this,state_36864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25617__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25617__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto__))
})();
var state__25732__auto__ = (function (){var statearr_36873 = f__25731__auto__.call(null);
(statearr_36873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto__);

return statearr_36873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto__))
);

return c__25730__auto__;
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
var c__25730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto__,figwheel_version,temp__6369__auto__){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto__,figwheel_version,temp__6369__auto__){
return (function (state_36898){
var state_val_36899 = (state_36898[(1)]);
if((state_val_36899 === (1))){
var inst_36892 = cljs.core.async.timeout.call(null,(2000));
var state_36898__$1 = state_36898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36898__$1,(2),inst_36892);
} else {
if((state_val_36899 === (2))){
var inst_36894 = (state_36898[(2)]);
var inst_36895 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_36896 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36895);
var state_36898__$1 = (function (){var statearr_36900 = state_36898;
(statearr_36900[(7)] = inst_36894);

return statearr_36900;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36898__$1,inst_36896);
} else {
return null;
}
}
});})(c__25730__auto__,figwheel_version,temp__6369__auto__))
;
return ((function (switch__25616__auto__,c__25730__auto__,figwheel_version,temp__6369__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25617__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25617__auto____0 = (function (){
var statearr_36904 = [null,null,null,null,null,null,null,null];
(statearr_36904[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25617__auto__);

(statearr_36904[(1)] = (1));

return statearr_36904;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25617__auto____1 = (function (state_36898){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_36898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e36905){if((e36905 instanceof Object)){
var ex__25620__auto__ = e36905;
var statearr_36906_36908 = state_36898;
(statearr_36906_36908[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36909 = state_36898;
state_36898 = G__36909;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25617__auto__ = function(state_36898){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25617__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25617__auto____1.call(this,state_36898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25617__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25617__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto__,figwheel_version,temp__6369__auto__))
})();
var state__25732__auto__ = (function (){var statearr_36907 = f__25731__auto__.call(null);
(statearr_36907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto__);

return statearr_36907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto__,figwheel_version,temp__6369__auto__))
);

return c__25730__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36910){
var map__36914 = p__36910;
var map__36914__$1 = ((((!((map__36914 == null)))?((((map__36914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36914):map__36914);
var file = cljs.core.get.call(null,map__36914__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36914__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36914__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36916 = "";
var G__36916__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__36916),cljs.core.str("file "),cljs.core.str(file)].join(''):G__36916);
var G__36916__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__36916__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__36916__$1);
if(cljs.core.truth_((function (){var and__21422__auto__ = line;
if(cljs.core.truth_(and__21422__auto__)){
return column;
} else {
return and__21422__auto__;
}
})())){
return [cljs.core.str(G__36916__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__36916__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36917){
var map__36924 = p__36917;
var map__36924__$1 = ((((!((map__36924 == null)))?((((map__36924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36924):map__36924);
var ed = map__36924__$1;
var formatted_exception = cljs.core.get.call(null,map__36924__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36924__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36924__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36926_36930 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36927_36931 = null;
var count__36928_36932 = (0);
var i__36929_36933 = (0);
while(true){
if((i__36929_36933 < count__36928_36932)){
var msg_36934 = cljs.core._nth.call(null,chunk__36927_36931,i__36929_36933);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36934);

var G__36935 = seq__36926_36930;
var G__36936 = chunk__36927_36931;
var G__36937 = count__36928_36932;
var G__36938 = (i__36929_36933 + (1));
seq__36926_36930 = G__36935;
chunk__36927_36931 = G__36936;
count__36928_36932 = G__36937;
i__36929_36933 = G__36938;
continue;
} else {
var temp__6369__auto___36939 = cljs.core.seq.call(null,seq__36926_36930);
if(temp__6369__auto___36939){
var seq__36926_36940__$1 = temp__6369__auto___36939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36926_36940__$1)){
var c__22337__auto___36941 = cljs.core.chunk_first.call(null,seq__36926_36940__$1);
var G__36942 = cljs.core.chunk_rest.call(null,seq__36926_36940__$1);
var G__36943 = c__22337__auto___36941;
var G__36944 = cljs.core.count.call(null,c__22337__auto___36941);
var G__36945 = (0);
seq__36926_36930 = G__36942;
chunk__36927_36931 = G__36943;
count__36928_36932 = G__36944;
i__36929_36933 = G__36945;
continue;
} else {
var msg_36946 = cljs.core.first.call(null,seq__36926_36940__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36946);

var G__36947 = cljs.core.next.call(null,seq__36926_36940__$1);
var G__36948 = null;
var G__36949 = (0);
var G__36950 = (0);
seq__36926_36930 = G__36947;
chunk__36927_36931 = G__36948;
count__36928_36932 = G__36949;
i__36929_36933 = G__36950;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36951){
var map__36954 = p__36951;
var map__36954__$1 = ((((!((map__36954 == null)))?((((map__36954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36954):map__36954);
var w = map__36954__$1;
var message = cljs.core.get.call(null,map__36954__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__36966 = cljs.core.seq.call(null,plugins);
var chunk__36967 = null;
var count__36968 = (0);
var i__36969 = (0);
while(true){
if((i__36969 < count__36968)){
var vec__36970 = cljs.core._nth.call(null,chunk__36967,i__36969);
var k = cljs.core.nth.call(null,vec__36970,(0),null);
var plugin = cljs.core.nth.call(null,vec__36970,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36976 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36966,chunk__36967,count__36968,i__36969,pl_36976,vec__36970,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36976.call(null,msg_hist);
});})(seq__36966,chunk__36967,count__36968,i__36969,pl_36976,vec__36970,k,plugin))
);
} else {
}

var G__36977 = seq__36966;
var G__36978 = chunk__36967;
var G__36979 = count__36968;
var G__36980 = (i__36969 + (1));
seq__36966 = G__36977;
chunk__36967 = G__36978;
count__36968 = G__36979;
i__36969 = G__36980;
continue;
} else {
var temp__6369__auto__ = cljs.core.seq.call(null,seq__36966);
if(temp__6369__auto__){
var seq__36966__$1 = temp__6369__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36966__$1)){
var c__22337__auto__ = cljs.core.chunk_first.call(null,seq__36966__$1);
var G__36981 = cljs.core.chunk_rest.call(null,seq__36966__$1);
var G__36982 = c__22337__auto__;
var G__36983 = cljs.core.count.call(null,c__22337__auto__);
var G__36984 = (0);
seq__36966 = G__36981;
chunk__36967 = G__36982;
count__36968 = G__36983;
i__36969 = G__36984;
continue;
} else {
var vec__36973 = cljs.core.first.call(null,seq__36966__$1);
var k = cljs.core.nth.call(null,vec__36973,(0),null);
var plugin = cljs.core.nth.call(null,vec__36973,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36985 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36966,chunk__36967,count__36968,i__36969,pl_36985,vec__36973,k,plugin,seq__36966__$1,temp__6369__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36985.call(null,msg_hist);
});})(seq__36966,chunk__36967,count__36968,i__36969,pl_36985,vec__36973,k,plugin,seq__36966__$1,temp__6369__auto__))
);
} else {
}

var G__36986 = cljs.core.next.call(null,seq__36966__$1);
var G__36987 = null;
var G__36988 = (0);
var G__36989 = (0);
seq__36966 = G__36986;
chunk__36967 = G__36987;
count__36968 = G__36988;
i__36969 = G__36989;
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
var args36990 = [];
var len__22617__auto___36997 = arguments.length;
var i__22618__auto___36998 = (0);
while(true){
if((i__22618__auto___36998 < len__22617__auto___36997)){
args36990.push((arguments[i__22618__auto___36998]));

var G__36999 = (i__22618__auto___36998 + (1));
i__22618__auto___36998 = G__36999;
continue;
} else {
}
break;
}

var G__36992 = args36990.length;
switch (G__36992) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36990.length)].join('')));

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

var seq__36993_37001 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36994_37002 = null;
var count__36995_37003 = (0);
var i__36996_37004 = (0);
while(true){
if((i__36996_37004 < count__36995_37003)){
var msg_37005 = cljs.core._nth.call(null,chunk__36994_37002,i__36996_37004);
figwheel.client.socket.handle_incoming_message.call(null,msg_37005);

var G__37006 = seq__36993_37001;
var G__37007 = chunk__36994_37002;
var G__37008 = count__36995_37003;
var G__37009 = (i__36996_37004 + (1));
seq__36993_37001 = G__37006;
chunk__36994_37002 = G__37007;
count__36995_37003 = G__37008;
i__36996_37004 = G__37009;
continue;
} else {
var temp__6369__auto___37010 = cljs.core.seq.call(null,seq__36993_37001);
if(temp__6369__auto___37010){
var seq__36993_37011__$1 = temp__6369__auto___37010;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36993_37011__$1)){
var c__22337__auto___37012 = cljs.core.chunk_first.call(null,seq__36993_37011__$1);
var G__37013 = cljs.core.chunk_rest.call(null,seq__36993_37011__$1);
var G__37014 = c__22337__auto___37012;
var G__37015 = cljs.core.count.call(null,c__22337__auto___37012);
var G__37016 = (0);
seq__36993_37001 = G__37013;
chunk__36994_37002 = G__37014;
count__36995_37003 = G__37015;
i__36996_37004 = G__37016;
continue;
} else {
var msg_37017 = cljs.core.first.call(null,seq__36993_37011__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37017);

var G__37018 = cljs.core.next.call(null,seq__36993_37011__$1);
var G__37019 = null;
var G__37020 = (0);
var G__37021 = (0);
seq__36993_37001 = G__37018;
chunk__36994_37002 = G__37019;
count__36995_37003 = G__37020;
i__36996_37004 = G__37021;
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
var len__22617__auto___37026 = arguments.length;
var i__22618__auto___37027 = (0);
while(true){
if((i__22618__auto___37027 < len__22617__auto___37026)){
args__22624__auto__.push((arguments[i__22618__auto___37027]));

var G__37028 = (i__22618__auto___37027 + (1));
i__22618__auto___37027 = G__37028;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37023){
var map__37024 = p__37023;
var map__37024__$1 = ((((!((map__37024 == null)))?((((map__37024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37024):map__37024);
var opts = map__37024__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37022){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37022));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37030){if((e37030 instanceof Error)){
var e = e37030;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37030;

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
return (function (p__37034){
var map__37035 = p__37034;
var map__37035__$1 = ((((!((map__37035 == null)))?((((map__37035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37035):map__37035);
var msg_name = cljs.core.get.call(null,map__37035__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1467159070804