// Compiled by ClojureScript 1.9.198 {}
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
var args40817 = [];
var len__22773__auto___40820 = arguments.length;
var i__22774__auto___40821 = (0);
while(true){
if((i__22774__auto___40821 < len__22773__auto___40820)){
args40817.push((arguments[i__22774__auto___40821]));

var G__40822 = (i__22774__auto___40821 + (1));
i__22774__auto___40821 = G__40822;
continue;
} else {
}
break;
}

var G__40819 = args40817.length;
switch (G__40819) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40817.length)].join('')));

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
var len__22773__auto___40825 = arguments.length;
var i__22774__auto___40826 = (0);
while(true){
if((i__22774__auto___40826 < len__22773__auto___40825)){
args__22780__auto__.push((arguments[i__22774__auto___40826]));

var G__40827 = (i__22774__auto___40826 + (1));
i__22774__auto___40826 = G__40827;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq40824){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40824));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__22780__auto__ = [];
var len__22773__auto___40829 = arguments.length;
var i__22774__auto___40830 = (0);
while(true){
if((i__22774__auto___40830 < len__22773__auto___40829)){
args__22780__auto__.push((arguments[i__22774__auto___40830]));

var G__40831 = (i__22774__auto___40830 + (1));
i__22774__auto___40830 = G__40831;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq40828){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40828));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__40832 = cljs.core._EQ_;
var expr__40833 = (function (){var or__21590__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e40836){if((e40836 instanceof Error)){
var e = e40836;
return false;
} else {
throw e40836;

}
}})();
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__40832.call(null,"true",expr__40833))){
return true;
} else {
if(cljs.core.truth_(pred__40832.call(null,"false",expr__40833))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__40833)].join('')));
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
}catch (e40838){if((e40838 instanceof Error)){
var e = e40838;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e40838;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__40839){
var map__40842 = p__40839;
var map__40842__$1 = ((((!((map__40842 == null)))?((((map__40842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40842):map__40842);
var message = cljs.core.get.call(null,map__40842__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__40842__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__29748__auto___41004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto___41004,ch){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto___41004,ch){
return (function (state_40973){
var state_val_40974 = (state_40973[(1)]);
if((state_val_40974 === (7))){
var inst_40969 = (state_40973[(2)]);
var state_40973__$1 = state_40973;
var statearr_40975_41005 = state_40973__$1;
(statearr_40975_41005[(2)] = inst_40969);

(statearr_40975_41005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (1))){
var state_40973__$1 = state_40973;
var statearr_40976_41006 = state_40973__$1;
(statearr_40976_41006[(2)] = null);

(statearr_40976_41006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (4))){
var inst_40926 = (state_40973[(7)]);
var inst_40926__$1 = (state_40973[(2)]);
var state_40973__$1 = (function (){var statearr_40977 = state_40973;
(statearr_40977[(7)] = inst_40926__$1);

return statearr_40977;
})();
if(cljs.core.truth_(inst_40926__$1)){
var statearr_40978_41007 = state_40973__$1;
(statearr_40978_41007[(1)] = (5));

} else {
var statearr_40979_41008 = state_40973__$1;
(statearr_40979_41008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (15))){
var inst_40933 = (state_40973[(8)]);
var inst_40948 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40933);
var inst_40949 = cljs.core.first.call(null,inst_40948);
var inst_40950 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_40949);
var inst_40951 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_40950)].join('');
var inst_40952 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_40951);
var state_40973__$1 = state_40973;
var statearr_40980_41009 = state_40973__$1;
(statearr_40980_41009[(2)] = inst_40952);

(statearr_40980_41009[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (13))){
var inst_40957 = (state_40973[(2)]);
var state_40973__$1 = state_40973;
var statearr_40981_41010 = state_40973__$1;
(statearr_40981_41010[(2)] = inst_40957);

(statearr_40981_41010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (6))){
var state_40973__$1 = state_40973;
var statearr_40982_41011 = state_40973__$1;
(statearr_40982_41011[(2)] = null);

(statearr_40982_41011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (17))){
var inst_40955 = (state_40973[(2)]);
var state_40973__$1 = state_40973;
var statearr_40983_41012 = state_40973__$1;
(statearr_40983_41012[(2)] = inst_40955);

(statearr_40983_41012[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (3))){
var inst_40971 = (state_40973[(2)]);
var state_40973__$1 = state_40973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40973__$1,inst_40971);
} else {
if((state_val_40974 === (12))){
var inst_40932 = (state_40973[(9)]);
var inst_40946 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_40932,opts);
var state_40973__$1 = state_40973;
if(cljs.core.truth_(inst_40946)){
var statearr_40984_41013 = state_40973__$1;
(statearr_40984_41013[(1)] = (15));

} else {
var statearr_40985_41014 = state_40973__$1;
(statearr_40985_41014[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (2))){
var state_40973__$1 = state_40973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40973__$1,(4),ch);
} else {
if((state_val_40974 === (11))){
var inst_40933 = (state_40973[(8)]);
var inst_40938 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40939 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_40933);
var inst_40940 = cljs.core.async.timeout.call(null,(1000));
var inst_40941 = [inst_40939,inst_40940];
var inst_40942 = (new cljs.core.PersistentVector(null,2,(5),inst_40938,inst_40941,null));
var state_40973__$1 = state_40973;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40973__$1,(14),inst_40942);
} else {
if((state_val_40974 === (9))){
var inst_40933 = (state_40973[(8)]);
var inst_40959 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_40960 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40933);
var inst_40961 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40960);
var inst_40962 = [cljs.core.str("Not loading: "),cljs.core.str(inst_40961)].join('');
var inst_40963 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_40962);
var state_40973__$1 = (function (){var statearr_40986 = state_40973;
(statearr_40986[(10)] = inst_40959);

return statearr_40986;
})();
var statearr_40987_41015 = state_40973__$1;
(statearr_40987_41015[(2)] = inst_40963);

(statearr_40987_41015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (5))){
var inst_40926 = (state_40973[(7)]);
var inst_40928 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_40929 = (new cljs.core.PersistentArrayMap(null,2,inst_40928,null));
var inst_40930 = (new cljs.core.PersistentHashSet(null,inst_40929,null));
var inst_40931 = figwheel.client.focus_msgs.call(null,inst_40930,inst_40926);
var inst_40932 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_40931);
var inst_40933 = cljs.core.first.call(null,inst_40931);
var inst_40934 = figwheel.client.autoload_QMARK_.call(null);
var state_40973__$1 = (function (){var statearr_40988 = state_40973;
(statearr_40988[(8)] = inst_40933);

(statearr_40988[(9)] = inst_40932);

return statearr_40988;
})();
if(cljs.core.truth_(inst_40934)){
var statearr_40989_41016 = state_40973__$1;
(statearr_40989_41016[(1)] = (8));

} else {
var statearr_40990_41017 = state_40973__$1;
(statearr_40990_41017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (14))){
var inst_40944 = (state_40973[(2)]);
var state_40973__$1 = state_40973;
var statearr_40991_41018 = state_40973__$1;
(statearr_40991_41018[(2)] = inst_40944);

(statearr_40991_41018[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (16))){
var state_40973__$1 = state_40973;
var statearr_40992_41019 = state_40973__$1;
(statearr_40992_41019[(2)] = null);

(statearr_40992_41019[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (10))){
var inst_40965 = (state_40973[(2)]);
var state_40973__$1 = (function (){var statearr_40993 = state_40973;
(statearr_40993[(11)] = inst_40965);

return statearr_40993;
})();
var statearr_40994_41020 = state_40973__$1;
(statearr_40994_41020[(2)] = null);

(statearr_40994_41020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (8))){
var inst_40932 = (state_40973[(9)]);
var inst_40936 = figwheel.client.reload_file_state_QMARK_.call(null,inst_40932,opts);
var state_40973__$1 = state_40973;
if(cljs.core.truth_(inst_40936)){
var statearr_40995_41021 = state_40973__$1;
(statearr_40995_41021[(1)] = (11));

} else {
var statearr_40996_41022 = state_40973__$1;
(statearr_40996_41022[(1)] = (12));

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
});})(c__29748__auto___41004,ch))
;
return ((function (switch__29634__auto__,c__29748__auto___41004,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29635__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29635__auto____0 = (function (){
var statearr_41000 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41000[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29635__auto__);

(statearr_41000[(1)] = (1));

return statearr_41000;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29635__auto____1 = (function (state_40973){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_40973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e41001){if((e41001 instanceof Object)){
var ex__29638__auto__ = e41001;
var statearr_41002_41023 = state_40973;
(statearr_41002_41023[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41024 = state_40973;
state_40973 = G__41024;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29635__auto__ = function(state_40973){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29635__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29635__auto____1.call(this,state_40973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29635__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29635__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto___41004,ch))
})();
var state__29750__auto__ = (function (){var statearr_41003 = f__29749__auto__.call(null);
(statearr_41003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto___41004);

return statearr_41003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto___41004,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41025_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41025_SHARP_));
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
var base_path_41028 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41028){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e41027){if((e41027 instanceof Error)){
var e = e41027;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41028], null));
} else {
var e = e41027;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_41028))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41029){
var map__41038 = p__41029;
var map__41038__$1 = ((((!((map__41038 == null)))?((((map__41038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41038):map__41038);
var opts = map__41038__$1;
var build_id = cljs.core.get.call(null,map__41038__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41038,map__41038__$1,opts,build_id){
return (function (p__41040){
var vec__41041 = p__41040;
var seq__41042 = cljs.core.seq.call(null,vec__41041);
var first__41043 = cljs.core.first.call(null,seq__41042);
var seq__41042__$1 = cljs.core.next.call(null,seq__41042);
var map__41044 = first__41043;
var map__41044__$1 = ((((!((map__41044 == null)))?((((map__41044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41044):map__41044);
var msg = map__41044__$1;
var msg_name = cljs.core.get.call(null,map__41044__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41042__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41041,seq__41042,first__41043,seq__41042__$1,map__41044,map__41044__$1,msg,msg_name,_,map__41038,map__41038__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41041,seq__41042,first__41043,seq__41042__$1,map__41044,map__41044__$1,msg,msg_name,_,map__41038,map__41038__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41038,map__41038__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41052){
var vec__41053 = p__41052;
var seq__41054 = cljs.core.seq.call(null,vec__41053);
var first__41055 = cljs.core.first.call(null,seq__41054);
var seq__41054__$1 = cljs.core.next.call(null,seq__41054);
var map__41056 = first__41055;
var map__41056__$1 = ((((!((map__41056 == null)))?((((map__41056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41056):map__41056);
var msg = map__41056__$1;
var msg_name = cljs.core.get.call(null,map__41056__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41054__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41058){
var map__41070 = p__41058;
var map__41070__$1 = ((((!((map__41070 == null)))?((((map__41070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41070):map__41070);
var on_compile_warning = cljs.core.get.call(null,map__41070__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41070__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41070,map__41070__$1,on_compile_warning,on_compile_fail){
return (function (p__41072){
var vec__41073 = p__41072;
var seq__41074 = cljs.core.seq.call(null,vec__41073);
var first__41075 = cljs.core.first.call(null,seq__41074);
var seq__41074__$1 = cljs.core.next.call(null,seq__41074);
var map__41076 = first__41075;
var map__41076__$1 = ((((!((map__41076 == null)))?((((map__41076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41076):map__41076);
var msg = map__41076__$1;
var msg_name = cljs.core.get.call(null,map__41076__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41074__$1;
var pred__41078 = cljs.core._EQ_;
var expr__41079 = msg_name;
if(cljs.core.truth_(pred__41078.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41079))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41078.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41079))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41070,map__41070__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto__,msg_hist,msg_names,msg){
return (function (state_41287){
var state_val_41288 = (state_41287[(1)]);
if((state_val_41288 === (7))){
var inst_41215 = (state_41287[(2)]);
var state_41287__$1 = state_41287;
if(cljs.core.truth_(inst_41215)){
var statearr_41289_41335 = state_41287__$1;
(statearr_41289_41335[(1)] = (8));

} else {
var statearr_41290_41336 = state_41287__$1;
(statearr_41290_41336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (20))){
var inst_41281 = (state_41287[(2)]);
var state_41287__$1 = state_41287;
var statearr_41291_41337 = state_41287__$1;
(statearr_41291_41337[(2)] = inst_41281);

(statearr_41291_41337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (27))){
var inst_41277 = (state_41287[(2)]);
var state_41287__$1 = state_41287;
var statearr_41292_41338 = state_41287__$1;
(statearr_41292_41338[(2)] = inst_41277);

(statearr_41292_41338[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (1))){
var inst_41208 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41287__$1 = state_41287;
if(cljs.core.truth_(inst_41208)){
var statearr_41293_41339 = state_41287__$1;
(statearr_41293_41339[(1)] = (2));

} else {
var statearr_41294_41340 = state_41287__$1;
(statearr_41294_41340[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (24))){
var inst_41279 = (state_41287[(2)]);
var state_41287__$1 = state_41287;
var statearr_41295_41341 = state_41287__$1;
(statearr_41295_41341[(2)] = inst_41279);

(statearr_41295_41341[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (4))){
var inst_41285 = (state_41287[(2)]);
var state_41287__$1 = state_41287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41287__$1,inst_41285);
} else {
if((state_val_41288 === (15))){
var inst_41283 = (state_41287[(2)]);
var state_41287__$1 = state_41287;
var statearr_41296_41342 = state_41287__$1;
(statearr_41296_41342[(2)] = inst_41283);

(statearr_41296_41342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (21))){
var inst_41242 = (state_41287[(2)]);
var state_41287__$1 = state_41287;
var statearr_41297_41343 = state_41287__$1;
(statearr_41297_41343[(2)] = inst_41242);

(statearr_41297_41343[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (31))){
var inst_41266 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41287__$1 = state_41287;
if(cljs.core.truth_(inst_41266)){
var statearr_41298_41344 = state_41287__$1;
(statearr_41298_41344[(1)] = (34));

} else {
var statearr_41299_41345 = state_41287__$1;
(statearr_41299_41345[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (32))){
var inst_41275 = (state_41287[(2)]);
var state_41287__$1 = state_41287;
var statearr_41300_41346 = state_41287__$1;
(statearr_41300_41346[(2)] = inst_41275);

(statearr_41300_41346[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (33))){
var inst_41264 = (state_41287[(2)]);
var state_41287__$1 = state_41287;
var statearr_41301_41347 = state_41287__$1;
(statearr_41301_41347[(2)] = inst_41264);

(statearr_41301_41347[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (13))){
var inst_41229 = figwheel.client.heads_up.clear.call(null);
var state_41287__$1 = state_41287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41287__$1,(16),inst_41229);
} else {
if((state_val_41288 === (22))){
var inst_41246 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41247 = figwheel.client.heads_up.append_warning_message.call(null,inst_41246);
var state_41287__$1 = state_41287;
var statearr_41302_41348 = state_41287__$1;
(statearr_41302_41348[(2)] = inst_41247);

(statearr_41302_41348[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (36))){
var inst_41273 = (state_41287[(2)]);
var state_41287__$1 = state_41287;
var statearr_41303_41349 = state_41287__$1;
(statearr_41303_41349[(2)] = inst_41273);

(statearr_41303_41349[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (29))){
var inst_41257 = (state_41287[(2)]);
var state_41287__$1 = state_41287;
var statearr_41304_41350 = state_41287__$1;
(statearr_41304_41350[(2)] = inst_41257);

(statearr_41304_41350[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (6))){
var inst_41210 = (state_41287[(7)]);
var state_41287__$1 = state_41287;
var statearr_41305_41351 = state_41287__$1;
(statearr_41305_41351[(2)] = inst_41210);

(statearr_41305_41351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (28))){
var inst_41253 = (state_41287[(2)]);
var inst_41254 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41255 = figwheel.client.heads_up.display_warning.call(null,inst_41254);
var state_41287__$1 = (function (){var statearr_41306 = state_41287;
(statearr_41306[(8)] = inst_41253);

return statearr_41306;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41287__$1,(29),inst_41255);
} else {
if((state_val_41288 === (25))){
var inst_41251 = figwheel.client.heads_up.clear.call(null);
var state_41287__$1 = state_41287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41287__$1,(28),inst_41251);
} else {
if((state_val_41288 === (34))){
var inst_41268 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41287__$1 = state_41287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41287__$1,(37),inst_41268);
} else {
if((state_val_41288 === (17))){
var inst_41235 = (state_41287[(2)]);
var state_41287__$1 = state_41287;
var statearr_41307_41352 = state_41287__$1;
(statearr_41307_41352[(2)] = inst_41235);

(statearr_41307_41352[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (3))){
var inst_41227 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41287__$1 = state_41287;
if(cljs.core.truth_(inst_41227)){
var statearr_41308_41353 = state_41287__$1;
(statearr_41308_41353[(1)] = (13));

} else {
var statearr_41309_41354 = state_41287__$1;
(statearr_41309_41354[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (12))){
var inst_41223 = (state_41287[(2)]);
var state_41287__$1 = state_41287;
var statearr_41310_41355 = state_41287__$1;
(statearr_41310_41355[(2)] = inst_41223);

(statearr_41310_41355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (2))){
var inst_41210 = (state_41287[(7)]);
var inst_41210__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41287__$1 = (function (){var statearr_41311 = state_41287;
(statearr_41311[(7)] = inst_41210__$1);

return statearr_41311;
})();
if(cljs.core.truth_(inst_41210__$1)){
var statearr_41312_41356 = state_41287__$1;
(statearr_41312_41356[(1)] = (5));

} else {
var statearr_41313_41357 = state_41287__$1;
(statearr_41313_41357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (23))){
var inst_41249 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41287__$1 = state_41287;
if(cljs.core.truth_(inst_41249)){
var statearr_41314_41358 = state_41287__$1;
(statearr_41314_41358[(1)] = (25));

} else {
var statearr_41315_41359 = state_41287__$1;
(statearr_41315_41359[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (35))){
var state_41287__$1 = state_41287;
var statearr_41316_41360 = state_41287__$1;
(statearr_41316_41360[(2)] = null);

(statearr_41316_41360[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (19))){
var inst_41244 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41287__$1 = state_41287;
if(cljs.core.truth_(inst_41244)){
var statearr_41317_41361 = state_41287__$1;
(statearr_41317_41361[(1)] = (22));

} else {
var statearr_41318_41362 = state_41287__$1;
(statearr_41318_41362[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (11))){
var inst_41219 = (state_41287[(2)]);
var state_41287__$1 = state_41287;
var statearr_41319_41363 = state_41287__$1;
(statearr_41319_41363[(2)] = inst_41219);

(statearr_41319_41363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (9))){
var inst_41221 = figwheel.client.heads_up.clear.call(null);
var state_41287__$1 = state_41287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41287__$1,(12),inst_41221);
} else {
if((state_val_41288 === (5))){
var inst_41212 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41287__$1 = state_41287;
var statearr_41320_41364 = state_41287__$1;
(statearr_41320_41364[(2)] = inst_41212);

(statearr_41320_41364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (14))){
var inst_41237 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41287__$1 = state_41287;
if(cljs.core.truth_(inst_41237)){
var statearr_41321_41365 = state_41287__$1;
(statearr_41321_41365[(1)] = (18));

} else {
var statearr_41322_41366 = state_41287__$1;
(statearr_41322_41366[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (26))){
var inst_41259 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41287__$1 = state_41287;
if(cljs.core.truth_(inst_41259)){
var statearr_41323_41367 = state_41287__$1;
(statearr_41323_41367[(1)] = (30));

} else {
var statearr_41324_41368 = state_41287__$1;
(statearr_41324_41368[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (16))){
var inst_41231 = (state_41287[(2)]);
var inst_41232 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41233 = figwheel.client.heads_up.display_exception.call(null,inst_41232);
var state_41287__$1 = (function (){var statearr_41325 = state_41287;
(statearr_41325[(9)] = inst_41231);

return statearr_41325;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41287__$1,(17),inst_41233);
} else {
if((state_val_41288 === (30))){
var inst_41261 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41262 = figwheel.client.heads_up.display_warning.call(null,inst_41261);
var state_41287__$1 = state_41287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41287__$1,(33),inst_41262);
} else {
if((state_val_41288 === (10))){
var inst_41225 = (state_41287[(2)]);
var state_41287__$1 = state_41287;
var statearr_41326_41369 = state_41287__$1;
(statearr_41326_41369[(2)] = inst_41225);

(statearr_41326_41369[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (18))){
var inst_41239 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41240 = figwheel.client.heads_up.display_exception.call(null,inst_41239);
var state_41287__$1 = state_41287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41287__$1,(21),inst_41240);
} else {
if((state_val_41288 === (37))){
var inst_41270 = (state_41287[(2)]);
var state_41287__$1 = state_41287;
var statearr_41327_41370 = state_41287__$1;
(statearr_41327_41370[(2)] = inst_41270);

(statearr_41327_41370[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41288 === (8))){
var inst_41217 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41287__$1 = state_41287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41287__$1,(11),inst_41217);
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
});})(c__29748__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29634__auto__,c__29748__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29635__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29635__auto____0 = (function (){
var statearr_41331 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41331[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29635__auto__);

(statearr_41331[(1)] = (1));

return statearr_41331;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29635__auto____1 = (function (state_41287){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_41287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e41332){if((e41332 instanceof Object)){
var ex__29638__auto__ = e41332;
var statearr_41333_41371 = state_41287;
(statearr_41333_41371[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41372 = state_41287;
state_41287 = G__41372;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29635__auto__ = function(state_41287){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29635__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29635__auto____1.call(this,state_41287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29635__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29635__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto__,msg_hist,msg_names,msg))
})();
var state__29750__auto__ = (function (){var statearr_41334 = f__29749__auto__.call(null);
(statearr_41334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto__);

return statearr_41334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto__,msg_hist,msg_names,msg))
);

return c__29748__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29748__auto___41435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto___41435,ch){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto___41435,ch){
return (function (state_41418){
var state_val_41419 = (state_41418[(1)]);
if((state_val_41419 === (1))){
var state_41418__$1 = state_41418;
var statearr_41420_41436 = state_41418__$1;
(statearr_41420_41436[(2)] = null);

(statearr_41420_41436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (2))){
var state_41418__$1 = state_41418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41418__$1,(4),ch);
} else {
if((state_val_41419 === (3))){
var inst_41416 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41418__$1,inst_41416);
} else {
if((state_val_41419 === (4))){
var inst_41406 = (state_41418[(7)]);
var inst_41406__$1 = (state_41418[(2)]);
var state_41418__$1 = (function (){var statearr_41421 = state_41418;
(statearr_41421[(7)] = inst_41406__$1);

return statearr_41421;
})();
if(cljs.core.truth_(inst_41406__$1)){
var statearr_41422_41437 = state_41418__$1;
(statearr_41422_41437[(1)] = (5));

} else {
var statearr_41423_41438 = state_41418__$1;
(statearr_41423_41438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (5))){
var inst_41406 = (state_41418[(7)]);
var inst_41408 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41406);
var state_41418__$1 = state_41418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41418__$1,(8),inst_41408);
} else {
if((state_val_41419 === (6))){
var state_41418__$1 = state_41418;
var statearr_41424_41439 = state_41418__$1;
(statearr_41424_41439[(2)] = null);

(statearr_41424_41439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (7))){
var inst_41414 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
var statearr_41425_41440 = state_41418__$1;
(statearr_41425_41440[(2)] = inst_41414);

(statearr_41425_41440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (8))){
var inst_41410 = (state_41418[(2)]);
var state_41418__$1 = (function (){var statearr_41426 = state_41418;
(statearr_41426[(8)] = inst_41410);

return statearr_41426;
})();
var statearr_41427_41441 = state_41418__$1;
(statearr_41427_41441[(2)] = null);

(statearr_41427_41441[(1)] = (2));


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
});})(c__29748__auto___41435,ch))
;
return ((function (switch__29634__auto__,c__29748__auto___41435,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29635__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29635__auto____0 = (function (){
var statearr_41431 = [null,null,null,null,null,null,null,null,null];
(statearr_41431[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29635__auto__);

(statearr_41431[(1)] = (1));

return statearr_41431;
});
var figwheel$client$heads_up_plugin_$_state_machine__29635__auto____1 = (function (state_41418){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_41418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e41432){if((e41432 instanceof Object)){
var ex__29638__auto__ = e41432;
var statearr_41433_41442 = state_41418;
(statearr_41433_41442[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41443 = state_41418;
state_41418 = G__41443;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29635__auto__ = function(state_41418){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29635__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29635__auto____1.call(this,state_41418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29635__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29635__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto___41435,ch))
})();
var state__29750__auto__ = (function (){var statearr_41434 = f__29749__auto__.call(null);
(statearr_41434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto___41435);

return statearr_41434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto___41435,ch))
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
var c__29748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto__){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto__){
return (function (state_41464){
var state_val_41465 = (state_41464[(1)]);
if((state_val_41465 === (1))){
var inst_41459 = cljs.core.async.timeout.call(null,(3000));
var state_41464__$1 = state_41464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41464__$1,(2),inst_41459);
} else {
if((state_val_41465 === (2))){
var inst_41461 = (state_41464[(2)]);
var inst_41462 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41464__$1 = (function (){var statearr_41466 = state_41464;
(statearr_41466[(7)] = inst_41461);

return statearr_41466;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41464__$1,inst_41462);
} else {
return null;
}
}
});})(c__29748__auto__))
;
return ((function (switch__29634__auto__,c__29748__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29635__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29635__auto____0 = (function (){
var statearr_41470 = [null,null,null,null,null,null,null,null];
(statearr_41470[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29635__auto__);

(statearr_41470[(1)] = (1));

return statearr_41470;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29635__auto____1 = (function (state_41464){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_41464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e41471){if((e41471 instanceof Object)){
var ex__29638__auto__ = e41471;
var statearr_41472_41474 = state_41464;
(statearr_41472_41474[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41475 = state_41464;
state_41464 = G__41475;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29635__auto__ = function(state_41464){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29635__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29635__auto____1.call(this,state_41464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29635__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29635__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto__))
})();
var state__29750__auto__ = (function (){var statearr_41473 = f__29749__auto__.call(null);
(statearr_41473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto__);

return statearr_41473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto__))
);

return c__29748__auto__;
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
var c__29748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto__,figwheel_version,temp__6503__auto__){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto__,figwheel_version,temp__6503__auto__){
return (function (state_41498){
var state_val_41499 = (state_41498[(1)]);
if((state_val_41499 === (1))){
var inst_41492 = cljs.core.async.timeout.call(null,(2000));
var state_41498__$1 = state_41498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41498__$1,(2),inst_41492);
} else {
if((state_val_41499 === (2))){
var inst_41494 = (state_41498[(2)]);
var inst_41495 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_41496 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_41495);
var state_41498__$1 = (function (){var statearr_41500 = state_41498;
(statearr_41500[(7)] = inst_41494);

return statearr_41500;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41498__$1,inst_41496);
} else {
return null;
}
}
});})(c__29748__auto__,figwheel_version,temp__6503__auto__))
;
return ((function (switch__29634__auto__,c__29748__auto__,figwheel_version,temp__6503__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29635__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29635__auto____0 = (function (){
var statearr_41504 = [null,null,null,null,null,null,null,null];
(statearr_41504[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29635__auto__);

(statearr_41504[(1)] = (1));

return statearr_41504;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29635__auto____1 = (function (state_41498){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_41498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e41505){if((e41505 instanceof Object)){
var ex__29638__auto__ = e41505;
var statearr_41506_41508 = state_41498;
(statearr_41506_41508[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41509 = state_41498;
state_41498 = G__41509;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29635__auto__ = function(state_41498){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29635__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29635__auto____1.call(this,state_41498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29635__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29635__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto__,figwheel_version,temp__6503__auto__))
})();
var state__29750__auto__ = (function (){var statearr_41507 = f__29749__auto__.call(null);
(statearr_41507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto__);

return statearr_41507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto__,figwheel_version,temp__6503__auto__))
);

return c__29748__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__41510){
var map__41514 = p__41510;
var map__41514__$1 = ((((!((map__41514 == null)))?((((map__41514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41514):map__41514);
var file = cljs.core.get.call(null,map__41514__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41514__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41514__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__41516 = "";
var G__41516__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__41516),cljs.core.str("file "),cljs.core.str(file)].join(''):G__41516);
var G__41516__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__41516__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__41516__$1);
if(cljs.core.truth_((function (){var and__21578__auto__ = line;
if(cljs.core.truth_(and__21578__auto__)){
return column;
} else {
return and__21578__auto__;
}
})())){
return [cljs.core.str(G__41516__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__41516__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41517){
var map__41524 = p__41517;
var map__41524__$1 = ((((!((map__41524 == null)))?((((map__41524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41524):map__41524);
var ed = map__41524__$1;
var formatted_exception = cljs.core.get.call(null,map__41524__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__41524__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__41524__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__41526_41530 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__41527_41531 = null;
var count__41528_41532 = (0);
var i__41529_41533 = (0);
while(true){
if((i__41529_41533 < count__41528_41532)){
var msg_41534 = cljs.core._nth.call(null,chunk__41527_41531,i__41529_41533);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41534);

var G__41535 = seq__41526_41530;
var G__41536 = chunk__41527_41531;
var G__41537 = count__41528_41532;
var G__41538 = (i__41529_41533 + (1));
seq__41526_41530 = G__41535;
chunk__41527_41531 = G__41536;
count__41528_41532 = G__41537;
i__41529_41533 = G__41538;
continue;
} else {
var temp__6503__auto___41539 = cljs.core.seq.call(null,seq__41526_41530);
if(temp__6503__auto___41539){
var seq__41526_41540__$1 = temp__6503__auto___41539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41526_41540__$1)){
var c__22493__auto___41541 = cljs.core.chunk_first.call(null,seq__41526_41540__$1);
var G__41542 = cljs.core.chunk_rest.call(null,seq__41526_41540__$1);
var G__41543 = c__22493__auto___41541;
var G__41544 = cljs.core.count.call(null,c__22493__auto___41541);
var G__41545 = (0);
seq__41526_41530 = G__41542;
chunk__41527_41531 = G__41543;
count__41528_41532 = G__41544;
i__41529_41533 = G__41545;
continue;
} else {
var msg_41546 = cljs.core.first.call(null,seq__41526_41540__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41546);

var G__41547 = cljs.core.next.call(null,seq__41526_41540__$1);
var G__41548 = null;
var G__41549 = (0);
var G__41550 = (0);
seq__41526_41530 = G__41547;
chunk__41527_41531 = G__41548;
count__41528_41532 = G__41549;
i__41529_41533 = G__41550;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41551){
var map__41554 = p__41551;
var map__41554__$1 = ((((!((map__41554 == null)))?((((map__41554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41554):map__41554);
var w = map__41554__$1;
var message = cljs.core.get.call(null,map__41554__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__41566 = cljs.core.seq.call(null,plugins);
var chunk__41567 = null;
var count__41568 = (0);
var i__41569 = (0);
while(true){
if((i__41569 < count__41568)){
var vec__41570 = cljs.core._nth.call(null,chunk__41567,i__41569);
var k = cljs.core.nth.call(null,vec__41570,(0),null);
var plugin = cljs.core.nth.call(null,vec__41570,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41576 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41566,chunk__41567,count__41568,i__41569,pl_41576,vec__41570,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41576.call(null,msg_hist);
});})(seq__41566,chunk__41567,count__41568,i__41569,pl_41576,vec__41570,k,plugin))
);
} else {
}

var G__41577 = seq__41566;
var G__41578 = chunk__41567;
var G__41579 = count__41568;
var G__41580 = (i__41569 + (1));
seq__41566 = G__41577;
chunk__41567 = G__41578;
count__41568 = G__41579;
i__41569 = G__41580;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__41566);
if(temp__6503__auto__){
var seq__41566__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41566__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__41566__$1);
var G__41581 = cljs.core.chunk_rest.call(null,seq__41566__$1);
var G__41582 = c__22493__auto__;
var G__41583 = cljs.core.count.call(null,c__22493__auto__);
var G__41584 = (0);
seq__41566 = G__41581;
chunk__41567 = G__41582;
count__41568 = G__41583;
i__41569 = G__41584;
continue;
} else {
var vec__41573 = cljs.core.first.call(null,seq__41566__$1);
var k = cljs.core.nth.call(null,vec__41573,(0),null);
var plugin = cljs.core.nth.call(null,vec__41573,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41585 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41566,chunk__41567,count__41568,i__41569,pl_41585,vec__41573,k,plugin,seq__41566__$1,temp__6503__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_41585.call(null,msg_hist);
});})(seq__41566,chunk__41567,count__41568,i__41569,pl_41585,vec__41573,k,plugin,seq__41566__$1,temp__6503__auto__))
);
} else {
}

var G__41586 = cljs.core.next.call(null,seq__41566__$1);
var G__41587 = null;
var G__41588 = (0);
var G__41589 = (0);
seq__41566 = G__41586;
chunk__41567 = G__41587;
count__41568 = G__41588;
i__41569 = G__41589;
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
var args41590 = [];
var len__22773__auto___41597 = arguments.length;
var i__22774__auto___41598 = (0);
while(true){
if((i__22774__auto___41598 < len__22773__auto___41597)){
args41590.push((arguments[i__22774__auto___41598]));

var G__41599 = (i__22774__auto___41598 + (1));
i__22774__auto___41598 = G__41599;
continue;
} else {
}
break;
}

var G__41592 = args41590.length;
switch (G__41592) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41590.length)].join('')));

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

var seq__41593_41601 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__41594_41602 = null;
var count__41595_41603 = (0);
var i__41596_41604 = (0);
while(true){
if((i__41596_41604 < count__41595_41603)){
var msg_41605 = cljs.core._nth.call(null,chunk__41594_41602,i__41596_41604);
figwheel.client.socket.handle_incoming_message.call(null,msg_41605);

var G__41606 = seq__41593_41601;
var G__41607 = chunk__41594_41602;
var G__41608 = count__41595_41603;
var G__41609 = (i__41596_41604 + (1));
seq__41593_41601 = G__41606;
chunk__41594_41602 = G__41607;
count__41595_41603 = G__41608;
i__41596_41604 = G__41609;
continue;
} else {
var temp__6503__auto___41610 = cljs.core.seq.call(null,seq__41593_41601);
if(temp__6503__auto___41610){
var seq__41593_41611__$1 = temp__6503__auto___41610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41593_41611__$1)){
var c__22493__auto___41612 = cljs.core.chunk_first.call(null,seq__41593_41611__$1);
var G__41613 = cljs.core.chunk_rest.call(null,seq__41593_41611__$1);
var G__41614 = c__22493__auto___41612;
var G__41615 = cljs.core.count.call(null,c__22493__auto___41612);
var G__41616 = (0);
seq__41593_41601 = G__41613;
chunk__41594_41602 = G__41614;
count__41595_41603 = G__41615;
i__41596_41604 = G__41616;
continue;
} else {
var msg_41617 = cljs.core.first.call(null,seq__41593_41611__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_41617);

var G__41618 = cljs.core.next.call(null,seq__41593_41611__$1);
var G__41619 = null;
var G__41620 = (0);
var G__41621 = (0);
seq__41593_41601 = G__41618;
chunk__41594_41602 = G__41619;
count__41595_41603 = G__41620;
i__41596_41604 = G__41621;
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
var len__22773__auto___41626 = arguments.length;
var i__22774__auto___41627 = (0);
while(true){
if((i__22774__auto___41627 < len__22773__auto___41626)){
args__22780__auto__.push((arguments[i__22774__auto___41627]));

var G__41628 = (i__22774__auto___41627 + (1));
i__22774__auto___41627 = G__41628;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__41623){
var map__41624 = p__41623;
var map__41624__$1 = ((((!((map__41624 == null)))?((((map__41624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41624):map__41624);
var opts = map__41624__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq41622){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41622));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e41630){if((e41630 instanceof Error)){
var e = e41630;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e41630;

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
return (function (p__41634){
var map__41635 = p__41634;
var map__41635__$1 = ((((!((map__41635 == null)))?((((map__41635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41635):map__41635);
var msg_name = cljs.core.get.call(null,map__41635__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1471181962694