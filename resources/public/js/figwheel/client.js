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
var args60167 = [];
var len__22773__auto___60170 = arguments.length;
var i__22774__auto___60171 = (0);
while(true){
if((i__22774__auto___60171 < len__22773__auto___60170)){
args60167.push((arguments[i__22774__auto___60171]));

var G__60172 = (i__22774__auto___60171 + (1));
i__22774__auto___60171 = G__60172;
continue;
} else {
}
break;
}

var G__60169 = args60167.length;
switch (G__60169) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60167.length)].join('')));

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
var len__22773__auto___60175 = arguments.length;
var i__22774__auto___60176 = (0);
while(true){
if((i__22774__auto___60176 < len__22773__auto___60175)){
args__22780__auto__.push((arguments[i__22774__auto___60176]));

var G__60177 = (i__22774__auto___60176 + (1));
i__22774__auto___60176 = G__60177;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq60174){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60174));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__22780__auto__ = [];
var len__22773__auto___60179 = arguments.length;
var i__22774__auto___60180 = (0);
while(true){
if((i__22774__auto___60180 < len__22773__auto___60179)){
args__22780__auto__.push((arguments[i__22774__auto___60180]));

var G__60181 = (i__22774__auto___60180 + (1));
i__22774__auto___60180 = G__60181;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq60178){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60178));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__60182 = cljs.core._EQ_;
var expr__60183 = (function (){var or__21590__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e60186){if((e60186 instanceof Error)){
var e = e60186;
return false;
} else {
throw e60186;

}
}})();
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__60182.call(null,"true",expr__60183))){
return true;
} else {
if(cljs.core.truth_(pred__60182.call(null,"false",expr__60183))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__60183)].join('')));
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
}catch (e60188){if((e60188 instanceof Error)){
var e = e60188;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e60188;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__60189){
var map__60192 = p__60189;
var map__60192__$1 = ((((!((map__60192 == null)))?((((map__60192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60192):map__60192);
var message = cljs.core.get.call(null,map__60192__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__60192__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28379__auto___60354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto___60354,ch){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto___60354,ch){
return (function (state_60323){
var state_val_60324 = (state_60323[(1)]);
if((state_val_60324 === (7))){
var inst_60319 = (state_60323[(2)]);
var state_60323__$1 = state_60323;
var statearr_60325_60355 = state_60323__$1;
(statearr_60325_60355[(2)] = inst_60319);

(statearr_60325_60355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (1))){
var state_60323__$1 = state_60323;
var statearr_60326_60356 = state_60323__$1;
(statearr_60326_60356[(2)] = null);

(statearr_60326_60356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (4))){
var inst_60276 = (state_60323[(7)]);
var inst_60276__$1 = (state_60323[(2)]);
var state_60323__$1 = (function (){var statearr_60327 = state_60323;
(statearr_60327[(7)] = inst_60276__$1);

return statearr_60327;
})();
if(cljs.core.truth_(inst_60276__$1)){
var statearr_60328_60357 = state_60323__$1;
(statearr_60328_60357[(1)] = (5));

} else {
var statearr_60329_60358 = state_60323__$1;
(statearr_60329_60358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (15))){
var inst_60283 = (state_60323[(8)]);
var inst_60298 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_60283);
var inst_60299 = cljs.core.first.call(null,inst_60298);
var inst_60300 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_60299);
var inst_60301 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_60300)].join('');
var inst_60302 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_60301);
var state_60323__$1 = state_60323;
var statearr_60330_60359 = state_60323__$1;
(statearr_60330_60359[(2)] = inst_60302);

(statearr_60330_60359[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (13))){
var inst_60307 = (state_60323[(2)]);
var state_60323__$1 = state_60323;
var statearr_60331_60360 = state_60323__$1;
(statearr_60331_60360[(2)] = inst_60307);

(statearr_60331_60360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (6))){
var state_60323__$1 = state_60323;
var statearr_60332_60361 = state_60323__$1;
(statearr_60332_60361[(2)] = null);

(statearr_60332_60361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (17))){
var inst_60305 = (state_60323[(2)]);
var state_60323__$1 = state_60323;
var statearr_60333_60362 = state_60323__$1;
(statearr_60333_60362[(2)] = inst_60305);

(statearr_60333_60362[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (3))){
var inst_60321 = (state_60323[(2)]);
var state_60323__$1 = state_60323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60323__$1,inst_60321);
} else {
if((state_val_60324 === (12))){
var inst_60282 = (state_60323[(9)]);
var inst_60296 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_60282,opts);
var state_60323__$1 = state_60323;
if(cljs.core.truth_(inst_60296)){
var statearr_60334_60363 = state_60323__$1;
(statearr_60334_60363[(1)] = (15));

} else {
var statearr_60335_60364 = state_60323__$1;
(statearr_60335_60364[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (2))){
var state_60323__$1 = state_60323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60323__$1,(4),ch);
} else {
if((state_val_60324 === (11))){
var inst_60283 = (state_60323[(8)]);
var inst_60288 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60289 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_60283);
var inst_60290 = cljs.core.async.timeout.call(null,(1000));
var inst_60291 = [inst_60289,inst_60290];
var inst_60292 = (new cljs.core.PersistentVector(null,2,(5),inst_60288,inst_60291,null));
var state_60323__$1 = state_60323;
return cljs.core.async.ioc_alts_BANG_.call(null,state_60323__$1,(14),inst_60292);
} else {
if((state_val_60324 === (9))){
var inst_60283 = (state_60323[(8)]);
var inst_60309 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_60310 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_60283);
var inst_60311 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_60310);
var inst_60312 = [cljs.core.str("Not loading: "),cljs.core.str(inst_60311)].join('');
var inst_60313 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_60312);
var state_60323__$1 = (function (){var statearr_60336 = state_60323;
(statearr_60336[(10)] = inst_60309);

return statearr_60336;
})();
var statearr_60337_60365 = state_60323__$1;
(statearr_60337_60365[(2)] = inst_60313);

(statearr_60337_60365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (5))){
var inst_60276 = (state_60323[(7)]);
var inst_60278 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_60279 = (new cljs.core.PersistentArrayMap(null,2,inst_60278,null));
var inst_60280 = (new cljs.core.PersistentHashSet(null,inst_60279,null));
var inst_60281 = figwheel.client.focus_msgs.call(null,inst_60280,inst_60276);
var inst_60282 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_60281);
var inst_60283 = cljs.core.first.call(null,inst_60281);
var inst_60284 = figwheel.client.autoload_QMARK_.call(null);
var state_60323__$1 = (function (){var statearr_60338 = state_60323;
(statearr_60338[(8)] = inst_60283);

(statearr_60338[(9)] = inst_60282);

return statearr_60338;
})();
if(cljs.core.truth_(inst_60284)){
var statearr_60339_60366 = state_60323__$1;
(statearr_60339_60366[(1)] = (8));

} else {
var statearr_60340_60367 = state_60323__$1;
(statearr_60340_60367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (14))){
var inst_60294 = (state_60323[(2)]);
var state_60323__$1 = state_60323;
var statearr_60341_60368 = state_60323__$1;
(statearr_60341_60368[(2)] = inst_60294);

(statearr_60341_60368[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (16))){
var state_60323__$1 = state_60323;
var statearr_60342_60369 = state_60323__$1;
(statearr_60342_60369[(2)] = null);

(statearr_60342_60369[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (10))){
var inst_60315 = (state_60323[(2)]);
var state_60323__$1 = (function (){var statearr_60343 = state_60323;
(statearr_60343[(11)] = inst_60315);

return statearr_60343;
})();
var statearr_60344_60370 = state_60323__$1;
(statearr_60344_60370[(2)] = null);

(statearr_60344_60370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (8))){
var inst_60282 = (state_60323[(9)]);
var inst_60286 = figwheel.client.reload_file_state_QMARK_.call(null,inst_60282,opts);
var state_60323__$1 = state_60323;
if(cljs.core.truth_(inst_60286)){
var statearr_60345_60371 = state_60323__$1;
(statearr_60345_60371[(1)] = (11));

} else {
var statearr_60346_60372 = state_60323__$1;
(statearr_60346_60372[(1)] = (12));

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
});})(c__28379__auto___60354,ch))
;
return ((function (switch__28356__auto__,c__28379__auto___60354,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28357__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28357__auto____0 = (function (){
var statearr_60350 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60350[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28357__auto__);

(statearr_60350[(1)] = (1));

return statearr_60350;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28357__auto____1 = (function (state_60323){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_60323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e60351){if((e60351 instanceof Object)){
var ex__28360__auto__ = e60351;
var statearr_60352_60373 = state_60323;
(statearr_60352_60373[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60374 = state_60323;
state_60323 = G__60374;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28357__auto__ = function(state_60323){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28357__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28357__auto____1.call(this,state_60323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28357__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28357__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto___60354,ch))
})();
var state__28381__auto__ = (function (){var statearr_60353 = f__28380__auto__.call(null);
(statearr_60353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto___60354);

return statearr_60353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto___60354,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__60375_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__60375_SHARP_));
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
var base_path_60378 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_60378){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e60377){if((e60377 instanceof Error)){
var e = e60377;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_60378], null));
} else {
var e = e60377;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_60378))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__60379){
var map__60388 = p__60379;
var map__60388__$1 = ((((!((map__60388 == null)))?((((map__60388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60388):map__60388);
var opts = map__60388__$1;
var build_id = cljs.core.get.call(null,map__60388__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__60388,map__60388__$1,opts,build_id){
return (function (p__60390){
var vec__60391 = p__60390;
var seq__60392 = cljs.core.seq.call(null,vec__60391);
var first__60393 = cljs.core.first.call(null,seq__60392);
var seq__60392__$1 = cljs.core.next.call(null,seq__60392);
var map__60394 = first__60393;
var map__60394__$1 = ((((!((map__60394 == null)))?((((map__60394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60394):map__60394);
var msg = map__60394__$1;
var msg_name = cljs.core.get.call(null,map__60394__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__60392__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__60391,seq__60392,first__60393,seq__60392__$1,map__60394,map__60394__$1,msg,msg_name,_,map__60388,map__60388__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__60391,seq__60392,first__60393,seq__60392__$1,map__60394,map__60394__$1,msg,msg_name,_,map__60388,map__60388__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__60388,map__60388__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__60402){
var vec__60403 = p__60402;
var seq__60404 = cljs.core.seq.call(null,vec__60403);
var first__60405 = cljs.core.first.call(null,seq__60404);
var seq__60404__$1 = cljs.core.next.call(null,seq__60404);
var map__60406 = first__60405;
var map__60406__$1 = ((((!((map__60406 == null)))?((((map__60406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60406):map__60406);
var msg = map__60406__$1;
var msg_name = cljs.core.get.call(null,map__60406__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__60404__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__60408){
var map__60420 = p__60408;
var map__60420__$1 = ((((!((map__60420 == null)))?((((map__60420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60420):map__60420);
var on_compile_warning = cljs.core.get.call(null,map__60420__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__60420__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__60420,map__60420__$1,on_compile_warning,on_compile_fail){
return (function (p__60422){
var vec__60423 = p__60422;
var seq__60424 = cljs.core.seq.call(null,vec__60423);
var first__60425 = cljs.core.first.call(null,seq__60424);
var seq__60424__$1 = cljs.core.next.call(null,seq__60424);
var map__60426 = first__60425;
var map__60426__$1 = ((((!((map__60426 == null)))?((((map__60426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60426):map__60426);
var msg = map__60426__$1;
var msg_name = cljs.core.get.call(null,map__60426__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__60424__$1;
var pred__60428 = cljs.core._EQ_;
var expr__60429 = msg_name;
if(cljs.core.truth_(pred__60428.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__60429))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__60428.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__60429))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__60420,map__60420__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto__,msg_hist,msg_names,msg){
return (function (state_60637){
var state_val_60638 = (state_60637[(1)]);
if((state_val_60638 === (7))){
var inst_60565 = (state_60637[(2)]);
var state_60637__$1 = state_60637;
if(cljs.core.truth_(inst_60565)){
var statearr_60639_60685 = state_60637__$1;
(statearr_60639_60685[(1)] = (8));

} else {
var statearr_60640_60686 = state_60637__$1;
(statearr_60640_60686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (20))){
var inst_60631 = (state_60637[(2)]);
var state_60637__$1 = state_60637;
var statearr_60641_60687 = state_60637__$1;
(statearr_60641_60687[(2)] = inst_60631);

(statearr_60641_60687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (27))){
var inst_60627 = (state_60637[(2)]);
var state_60637__$1 = state_60637;
var statearr_60642_60688 = state_60637__$1;
(statearr_60642_60688[(2)] = inst_60627);

(statearr_60642_60688[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (1))){
var inst_60558 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_60637__$1 = state_60637;
if(cljs.core.truth_(inst_60558)){
var statearr_60643_60689 = state_60637__$1;
(statearr_60643_60689[(1)] = (2));

} else {
var statearr_60644_60690 = state_60637__$1;
(statearr_60644_60690[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (24))){
var inst_60629 = (state_60637[(2)]);
var state_60637__$1 = state_60637;
var statearr_60645_60691 = state_60637__$1;
(statearr_60645_60691[(2)] = inst_60629);

(statearr_60645_60691[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (4))){
var inst_60635 = (state_60637[(2)]);
var state_60637__$1 = state_60637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60637__$1,inst_60635);
} else {
if((state_val_60638 === (15))){
var inst_60633 = (state_60637[(2)]);
var state_60637__$1 = state_60637;
var statearr_60646_60692 = state_60637__$1;
(statearr_60646_60692[(2)] = inst_60633);

(statearr_60646_60692[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (21))){
var inst_60592 = (state_60637[(2)]);
var state_60637__$1 = state_60637;
var statearr_60647_60693 = state_60637__$1;
(statearr_60647_60693[(2)] = inst_60592);

(statearr_60647_60693[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (31))){
var inst_60616 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_60637__$1 = state_60637;
if(cljs.core.truth_(inst_60616)){
var statearr_60648_60694 = state_60637__$1;
(statearr_60648_60694[(1)] = (34));

} else {
var statearr_60649_60695 = state_60637__$1;
(statearr_60649_60695[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (32))){
var inst_60625 = (state_60637[(2)]);
var state_60637__$1 = state_60637;
var statearr_60650_60696 = state_60637__$1;
(statearr_60650_60696[(2)] = inst_60625);

(statearr_60650_60696[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (33))){
var inst_60614 = (state_60637[(2)]);
var state_60637__$1 = state_60637;
var statearr_60651_60697 = state_60637__$1;
(statearr_60651_60697[(2)] = inst_60614);

(statearr_60651_60697[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (13))){
var inst_60579 = figwheel.client.heads_up.clear.call(null);
var state_60637__$1 = state_60637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60637__$1,(16),inst_60579);
} else {
if((state_val_60638 === (22))){
var inst_60596 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60597 = figwheel.client.heads_up.append_warning_message.call(null,inst_60596);
var state_60637__$1 = state_60637;
var statearr_60652_60698 = state_60637__$1;
(statearr_60652_60698[(2)] = inst_60597);

(statearr_60652_60698[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (36))){
var inst_60623 = (state_60637[(2)]);
var state_60637__$1 = state_60637;
var statearr_60653_60699 = state_60637__$1;
(statearr_60653_60699[(2)] = inst_60623);

(statearr_60653_60699[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (29))){
var inst_60607 = (state_60637[(2)]);
var state_60637__$1 = state_60637;
var statearr_60654_60700 = state_60637__$1;
(statearr_60654_60700[(2)] = inst_60607);

(statearr_60654_60700[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (6))){
var inst_60560 = (state_60637[(7)]);
var state_60637__$1 = state_60637;
var statearr_60655_60701 = state_60637__$1;
(statearr_60655_60701[(2)] = inst_60560);

(statearr_60655_60701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (28))){
var inst_60603 = (state_60637[(2)]);
var inst_60604 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60605 = figwheel.client.heads_up.display_warning.call(null,inst_60604);
var state_60637__$1 = (function (){var statearr_60656 = state_60637;
(statearr_60656[(8)] = inst_60603);

return statearr_60656;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60637__$1,(29),inst_60605);
} else {
if((state_val_60638 === (25))){
var inst_60601 = figwheel.client.heads_up.clear.call(null);
var state_60637__$1 = state_60637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60637__$1,(28),inst_60601);
} else {
if((state_val_60638 === (34))){
var inst_60618 = figwheel.client.heads_up.flash_loaded.call(null);
var state_60637__$1 = state_60637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60637__$1,(37),inst_60618);
} else {
if((state_val_60638 === (17))){
var inst_60585 = (state_60637[(2)]);
var state_60637__$1 = state_60637;
var statearr_60657_60702 = state_60637__$1;
(statearr_60657_60702[(2)] = inst_60585);

(statearr_60657_60702[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (3))){
var inst_60577 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_60637__$1 = state_60637;
if(cljs.core.truth_(inst_60577)){
var statearr_60658_60703 = state_60637__$1;
(statearr_60658_60703[(1)] = (13));

} else {
var statearr_60659_60704 = state_60637__$1;
(statearr_60659_60704[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (12))){
var inst_60573 = (state_60637[(2)]);
var state_60637__$1 = state_60637;
var statearr_60660_60705 = state_60637__$1;
(statearr_60660_60705[(2)] = inst_60573);

(statearr_60660_60705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (2))){
var inst_60560 = (state_60637[(7)]);
var inst_60560__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_60637__$1 = (function (){var statearr_60661 = state_60637;
(statearr_60661[(7)] = inst_60560__$1);

return statearr_60661;
})();
if(cljs.core.truth_(inst_60560__$1)){
var statearr_60662_60706 = state_60637__$1;
(statearr_60662_60706[(1)] = (5));

} else {
var statearr_60663_60707 = state_60637__$1;
(statearr_60663_60707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (23))){
var inst_60599 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_60637__$1 = state_60637;
if(cljs.core.truth_(inst_60599)){
var statearr_60664_60708 = state_60637__$1;
(statearr_60664_60708[(1)] = (25));

} else {
var statearr_60665_60709 = state_60637__$1;
(statearr_60665_60709[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (35))){
var state_60637__$1 = state_60637;
var statearr_60666_60710 = state_60637__$1;
(statearr_60666_60710[(2)] = null);

(statearr_60666_60710[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (19))){
var inst_60594 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_60637__$1 = state_60637;
if(cljs.core.truth_(inst_60594)){
var statearr_60667_60711 = state_60637__$1;
(statearr_60667_60711[(1)] = (22));

} else {
var statearr_60668_60712 = state_60637__$1;
(statearr_60668_60712[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (11))){
var inst_60569 = (state_60637[(2)]);
var state_60637__$1 = state_60637;
var statearr_60669_60713 = state_60637__$1;
(statearr_60669_60713[(2)] = inst_60569);

(statearr_60669_60713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (9))){
var inst_60571 = figwheel.client.heads_up.clear.call(null);
var state_60637__$1 = state_60637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60637__$1,(12),inst_60571);
} else {
if((state_val_60638 === (5))){
var inst_60562 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_60637__$1 = state_60637;
var statearr_60670_60714 = state_60637__$1;
(statearr_60670_60714[(2)] = inst_60562);

(statearr_60670_60714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (14))){
var inst_60587 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_60637__$1 = state_60637;
if(cljs.core.truth_(inst_60587)){
var statearr_60671_60715 = state_60637__$1;
(statearr_60671_60715[(1)] = (18));

} else {
var statearr_60672_60716 = state_60637__$1;
(statearr_60672_60716[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (26))){
var inst_60609 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_60637__$1 = state_60637;
if(cljs.core.truth_(inst_60609)){
var statearr_60673_60717 = state_60637__$1;
(statearr_60673_60717[(1)] = (30));

} else {
var statearr_60674_60718 = state_60637__$1;
(statearr_60674_60718[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (16))){
var inst_60581 = (state_60637[(2)]);
var inst_60582 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60583 = figwheel.client.heads_up.display_exception.call(null,inst_60582);
var state_60637__$1 = (function (){var statearr_60675 = state_60637;
(statearr_60675[(9)] = inst_60581);

return statearr_60675;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60637__$1,(17),inst_60583);
} else {
if((state_val_60638 === (30))){
var inst_60611 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60612 = figwheel.client.heads_up.display_warning.call(null,inst_60611);
var state_60637__$1 = state_60637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60637__$1,(33),inst_60612);
} else {
if((state_val_60638 === (10))){
var inst_60575 = (state_60637[(2)]);
var state_60637__$1 = state_60637;
var statearr_60676_60719 = state_60637__$1;
(statearr_60676_60719[(2)] = inst_60575);

(statearr_60676_60719[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (18))){
var inst_60589 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60590 = figwheel.client.heads_up.display_exception.call(null,inst_60589);
var state_60637__$1 = state_60637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60637__$1,(21),inst_60590);
} else {
if((state_val_60638 === (37))){
var inst_60620 = (state_60637[(2)]);
var state_60637__$1 = state_60637;
var statearr_60677_60720 = state_60637__$1;
(statearr_60677_60720[(2)] = inst_60620);

(statearr_60677_60720[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60638 === (8))){
var inst_60567 = figwheel.client.heads_up.flash_loaded.call(null);
var state_60637__$1 = state_60637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60637__$1,(11),inst_60567);
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
});})(c__28379__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28356__auto__,c__28379__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28357__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28357__auto____0 = (function (){
var statearr_60681 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60681[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28357__auto__);

(statearr_60681[(1)] = (1));

return statearr_60681;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28357__auto____1 = (function (state_60637){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_60637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e60682){if((e60682 instanceof Object)){
var ex__28360__auto__ = e60682;
var statearr_60683_60721 = state_60637;
(statearr_60683_60721[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60722 = state_60637;
state_60637 = G__60722;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28357__auto__ = function(state_60637){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28357__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28357__auto____1.call(this,state_60637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28357__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28357__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto__,msg_hist,msg_names,msg))
})();
var state__28381__auto__ = (function (){var statearr_60684 = f__28380__auto__.call(null);
(statearr_60684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto__);

return statearr_60684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto__,msg_hist,msg_names,msg))
);

return c__28379__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28379__auto___60785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto___60785,ch){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto___60785,ch){
return (function (state_60768){
var state_val_60769 = (state_60768[(1)]);
if((state_val_60769 === (1))){
var state_60768__$1 = state_60768;
var statearr_60770_60786 = state_60768__$1;
(statearr_60770_60786[(2)] = null);

(statearr_60770_60786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60769 === (2))){
var state_60768__$1 = state_60768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60768__$1,(4),ch);
} else {
if((state_val_60769 === (3))){
var inst_60766 = (state_60768[(2)]);
var state_60768__$1 = state_60768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60768__$1,inst_60766);
} else {
if((state_val_60769 === (4))){
var inst_60756 = (state_60768[(7)]);
var inst_60756__$1 = (state_60768[(2)]);
var state_60768__$1 = (function (){var statearr_60771 = state_60768;
(statearr_60771[(7)] = inst_60756__$1);

return statearr_60771;
})();
if(cljs.core.truth_(inst_60756__$1)){
var statearr_60772_60787 = state_60768__$1;
(statearr_60772_60787[(1)] = (5));

} else {
var statearr_60773_60788 = state_60768__$1;
(statearr_60773_60788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60769 === (5))){
var inst_60756 = (state_60768[(7)]);
var inst_60758 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_60756);
var state_60768__$1 = state_60768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60768__$1,(8),inst_60758);
} else {
if((state_val_60769 === (6))){
var state_60768__$1 = state_60768;
var statearr_60774_60789 = state_60768__$1;
(statearr_60774_60789[(2)] = null);

(statearr_60774_60789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60769 === (7))){
var inst_60764 = (state_60768[(2)]);
var state_60768__$1 = state_60768;
var statearr_60775_60790 = state_60768__$1;
(statearr_60775_60790[(2)] = inst_60764);

(statearr_60775_60790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60769 === (8))){
var inst_60760 = (state_60768[(2)]);
var state_60768__$1 = (function (){var statearr_60776 = state_60768;
(statearr_60776[(8)] = inst_60760);

return statearr_60776;
})();
var statearr_60777_60791 = state_60768__$1;
(statearr_60777_60791[(2)] = null);

(statearr_60777_60791[(1)] = (2));


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
});})(c__28379__auto___60785,ch))
;
return ((function (switch__28356__auto__,c__28379__auto___60785,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28357__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28357__auto____0 = (function (){
var statearr_60781 = [null,null,null,null,null,null,null,null,null];
(statearr_60781[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28357__auto__);

(statearr_60781[(1)] = (1));

return statearr_60781;
});
var figwheel$client$heads_up_plugin_$_state_machine__28357__auto____1 = (function (state_60768){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_60768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e60782){if((e60782 instanceof Object)){
var ex__28360__auto__ = e60782;
var statearr_60783_60792 = state_60768;
(statearr_60783_60792[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60793 = state_60768;
state_60768 = G__60793;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28357__auto__ = function(state_60768){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28357__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28357__auto____1.call(this,state_60768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28357__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28357__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto___60785,ch))
})();
var state__28381__auto__ = (function (){var statearr_60784 = f__28380__auto__.call(null);
(statearr_60784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto___60785);

return statearr_60784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto___60785,ch))
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
var c__28379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto__){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto__){
return (function (state_60814){
var state_val_60815 = (state_60814[(1)]);
if((state_val_60815 === (1))){
var inst_60809 = cljs.core.async.timeout.call(null,(3000));
var state_60814__$1 = state_60814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60814__$1,(2),inst_60809);
} else {
if((state_val_60815 === (2))){
var inst_60811 = (state_60814[(2)]);
var inst_60812 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_60814__$1 = (function (){var statearr_60816 = state_60814;
(statearr_60816[(7)] = inst_60811);

return statearr_60816;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60814__$1,inst_60812);
} else {
return null;
}
}
});})(c__28379__auto__))
;
return ((function (switch__28356__auto__,c__28379__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28357__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28357__auto____0 = (function (){
var statearr_60820 = [null,null,null,null,null,null,null,null];
(statearr_60820[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28357__auto__);

(statearr_60820[(1)] = (1));

return statearr_60820;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28357__auto____1 = (function (state_60814){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_60814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e60821){if((e60821 instanceof Object)){
var ex__28360__auto__ = e60821;
var statearr_60822_60824 = state_60814;
(statearr_60822_60824[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60825 = state_60814;
state_60814 = G__60825;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28357__auto__ = function(state_60814){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28357__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28357__auto____1.call(this,state_60814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28357__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28357__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto__))
})();
var state__28381__auto__ = (function (){var statearr_60823 = f__28380__auto__.call(null);
(statearr_60823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto__);

return statearr_60823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto__))
);

return c__28379__auto__;
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
var c__28379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto__,figwheel_version,temp__6552__auto__){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto__,figwheel_version,temp__6552__auto__){
return (function (state_60848){
var state_val_60849 = (state_60848[(1)]);
if((state_val_60849 === (1))){
var inst_60842 = cljs.core.async.timeout.call(null,(2000));
var state_60848__$1 = state_60848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60848__$1,(2),inst_60842);
} else {
if((state_val_60849 === (2))){
var inst_60844 = (state_60848[(2)]);
var inst_60845 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_60846 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_60845);
var state_60848__$1 = (function (){var statearr_60850 = state_60848;
(statearr_60850[(7)] = inst_60844);

return statearr_60850;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60848__$1,inst_60846);
} else {
return null;
}
}
});})(c__28379__auto__,figwheel_version,temp__6552__auto__))
;
return ((function (switch__28356__auto__,c__28379__auto__,figwheel_version,temp__6552__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28357__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28357__auto____0 = (function (){
var statearr_60854 = [null,null,null,null,null,null,null,null];
(statearr_60854[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28357__auto__);

(statearr_60854[(1)] = (1));

return statearr_60854;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28357__auto____1 = (function (state_60848){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_60848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e60855){if((e60855 instanceof Object)){
var ex__28360__auto__ = e60855;
var statearr_60856_60858 = state_60848;
(statearr_60856_60858[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60859 = state_60848;
state_60848 = G__60859;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28357__auto__ = function(state_60848){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28357__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28357__auto____1.call(this,state_60848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28357__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28357__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto__,figwheel_version,temp__6552__auto__))
})();
var state__28381__auto__ = (function (){var statearr_60857 = f__28380__auto__.call(null);
(statearr_60857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto__);

return statearr_60857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto__,figwheel_version,temp__6552__auto__))
);

return c__28379__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__60860){
var map__60864 = p__60860;
var map__60864__$1 = ((((!((map__60864 == null)))?((((map__60864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60864):map__60864);
var file = cljs.core.get.call(null,map__60864__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__60864__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__60864__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__60866 = "";
var G__60866__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__60866),cljs.core.str("file "),cljs.core.str(file)].join(''):G__60866);
var G__60866__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__60866__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__60866__$1);
if(cljs.core.truth_((function (){var and__21578__auto__ = line;
if(cljs.core.truth_(and__21578__auto__)){
return column;
} else {
return and__21578__auto__;
}
})())){
return [cljs.core.str(G__60866__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__60866__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__60867){
var map__60874 = p__60867;
var map__60874__$1 = ((((!((map__60874 == null)))?((((map__60874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60874):map__60874);
var ed = map__60874__$1;
var formatted_exception = cljs.core.get.call(null,map__60874__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__60874__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__60874__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__60876_60880 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__60877_60881 = null;
var count__60878_60882 = (0);
var i__60879_60883 = (0);
while(true){
if((i__60879_60883 < count__60878_60882)){
var msg_60884 = cljs.core._nth.call(null,chunk__60877_60881,i__60879_60883);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_60884);

var G__60885 = seq__60876_60880;
var G__60886 = chunk__60877_60881;
var G__60887 = count__60878_60882;
var G__60888 = (i__60879_60883 + (1));
seq__60876_60880 = G__60885;
chunk__60877_60881 = G__60886;
count__60878_60882 = G__60887;
i__60879_60883 = G__60888;
continue;
} else {
var temp__6552__auto___60889 = cljs.core.seq.call(null,seq__60876_60880);
if(temp__6552__auto___60889){
var seq__60876_60890__$1 = temp__6552__auto___60889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60876_60890__$1)){
var c__22493__auto___60891 = cljs.core.chunk_first.call(null,seq__60876_60890__$1);
var G__60892 = cljs.core.chunk_rest.call(null,seq__60876_60890__$1);
var G__60893 = c__22493__auto___60891;
var G__60894 = cljs.core.count.call(null,c__22493__auto___60891);
var G__60895 = (0);
seq__60876_60880 = G__60892;
chunk__60877_60881 = G__60893;
count__60878_60882 = G__60894;
i__60879_60883 = G__60895;
continue;
} else {
var msg_60896 = cljs.core.first.call(null,seq__60876_60890__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_60896);

var G__60897 = cljs.core.next.call(null,seq__60876_60890__$1);
var G__60898 = null;
var G__60899 = (0);
var G__60900 = (0);
seq__60876_60880 = G__60897;
chunk__60877_60881 = G__60898;
count__60878_60882 = G__60899;
i__60879_60883 = G__60900;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__60901){
var map__60904 = p__60901;
var map__60904__$1 = ((((!((map__60904 == null)))?((((map__60904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60904):map__60904);
var w = map__60904__$1;
var message = cljs.core.get.call(null,map__60904__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__60916 = cljs.core.seq.call(null,plugins);
var chunk__60917 = null;
var count__60918 = (0);
var i__60919 = (0);
while(true){
if((i__60919 < count__60918)){
var vec__60920 = cljs.core._nth.call(null,chunk__60917,i__60919);
var k = cljs.core.nth.call(null,vec__60920,(0),null);
var plugin = cljs.core.nth.call(null,vec__60920,(1),null);
if(cljs.core.truth_(plugin)){
var pl_60926 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__60916,chunk__60917,count__60918,i__60919,pl_60926,vec__60920,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_60926.call(null,msg_hist);
});})(seq__60916,chunk__60917,count__60918,i__60919,pl_60926,vec__60920,k,plugin))
);
} else {
}

var G__60927 = seq__60916;
var G__60928 = chunk__60917;
var G__60929 = count__60918;
var G__60930 = (i__60919 + (1));
seq__60916 = G__60927;
chunk__60917 = G__60928;
count__60918 = G__60929;
i__60919 = G__60930;
continue;
} else {
var temp__6552__auto__ = cljs.core.seq.call(null,seq__60916);
if(temp__6552__auto__){
var seq__60916__$1 = temp__6552__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60916__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__60916__$1);
var G__60931 = cljs.core.chunk_rest.call(null,seq__60916__$1);
var G__60932 = c__22493__auto__;
var G__60933 = cljs.core.count.call(null,c__22493__auto__);
var G__60934 = (0);
seq__60916 = G__60931;
chunk__60917 = G__60932;
count__60918 = G__60933;
i__60919 = G__60934;
continue;
} else {
var vec__60923 = cljs.core.first.call(null,seq__60916__$1);
var k = cljs.core.nth.call(null,vec__60923,(0),null);
var plugin = cljs.core.nth.call(null,vec__60923,(1),null);
if(cljs.core.truth_(plugin)){
var pl_60935 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__60916,chunk__60917,count__60918,i__60919,pl_60935,vec__60923,k,plugin,seq__60916__$1,temp__6552__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_60935.call(null,msg_hist);
});})(seq__60916,chunk__60917,count__60918,i__60919,pl_60935,vec__60923,k,plugin,seq__60916__$1,temp__6552__auto__))
);
} else {
}

var G__60936 = cljs.core.next.call(null,seq__60916__$1);
var G__60937 = null;
var G__60938 = (0);
var G__60939 = (0);
seq__60916 = G__60936;
chunk__60917 = G__60937;
count__60918 = G__60938;
i__60919 = G__60939;
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
var args60940 = [];
var len__22773__auto___60947 = arguments.length;
var i__22774__auto___60948 = (0);
while(true){
if((i__22774__auto___60948 < len__22773__auto___60947)){
args60940.push((arguments[i__22774__auto___60948]));

var G__60949 = (i__22774__auto___60948 + (1));
i__22774__auto___60948 = G__60949;
continue;
} else {
}
break;
}

var G__60942 = args60940.length;
switch (G__60942) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60940.length)].join('')));

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

var seq__60943_60951 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__60944_60952 = null;
var count__60945_60953 = (0);
var i__60946_60954 = (0);
while(true){
if((i__60946_60954 < count__60945_60953)){
var msg_60955 = cljs.core._nth.call(null,chunk__60944_60952,i__60946_60954);
figwheel.client.socket.handle_incoming_message.call(null,msg_60955);

var G__60956 = seq__60943_60951;
var G__60957 = chunk__60944_60952;
var G__60958 = count__60945_60953;
var G__60959 = (i__60946_60954 + (1));
seq__60943_60951 = G__60956;
chunk__60944_60952 = G__60957;
count__60945_60953 = G__60958;
i__60946_60954 = G__60959;
continue;
} else {
var temp__6552__auto___60960 = cljs.core.seq.call(null,seq__60943_60951);
if(temp__6552__auto___60960){
var seq__60943_60961__$1 = temp__6552__auto___60960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60943_60961__$1)){
var c__22493__auto___60962 = cljs.core.chunk_first.call(null,seq__60943_60961__$1);
var G__60963 = cljs.core.chunk_rest.call(null,seq__60943_60961__$1);
var G__60964 = c__22493__auto___60962;
var G__60965 = cljs.core.count.call(null,c__22493__auto___60962);
var G__60966 = (0);
seq__60943_60951 = G__60963;
chunk__60944_60952 = G__60964;
count__60945_60953 = G__60965;
i__60946_60954 = G__60966;
continue;
} else {
var msg_60967 = cljs.core.first.call(null,seq__60943_60961__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_60967);

var G__60968 = cljs.core.next.call(null,seq__60943_60961__$1);
var G__60969 = null;
var G__60970 = (0);
var G__60971 = (0);
seq__60943_60951 = G__60968;
chunk__60944_60952 = G__60969;
count__60945_60953 = G__60970;
i__60946_60954 = G__60971;
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
var len__22773__auto___60976 = arguments.length;
var i__22774__auto___60977 = (0);
while(true){
if((i__22774__auto___60977 < len__22773__auto___60976)){
args__22780__auto__.push((arguments[i__22774__auto___60977]));

var G__60978 = (i__22774__auto___60977 + (1));
i__22774__auto___60977 = G__60978;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__60973){
var map__60974 = p__60973;
var map__60974__$1 = ((((!((map__60974 == null)))?((((map__60974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60974):map__60974);
var opts = map__60974__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq60972){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60972));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e60980){if((e60980 instanceof Error)){
var e = e60980;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e60980;

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
return (function (p__60984){
var map__60985 = p__60984;
var map__60985__$1 = ((((!((map__60985 == null)))?((((map__60985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60985):map__60985);
var msg_name = cljs.core.get.call(null,map__60985__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1471999083452