// Compiled by ClojureScript 1.9.198 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args29807 = [];
var len__22773__auto___29813 = arguments.length;
var i__22774__auto___29814 = (0);
while(true){
if((i__22774__auto___29814 < len__22773__auto___29813)){
args29807.push((arguments[i__22774__auto___29814]));

var G__29815 = (i__22774__auto___29814 + (1));
i__22774__auto___29814 = G__29815;
continue;
} else {
}
break;
}

var G__29809 = args29807.length;
switch (G__29809) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29807.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29810 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29810 = (function (f,blockable,meta29811){
this.f = f;
this.blockable = blockable;
this.meta29811 = meta29811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29812,meta29811__$1){
var self__ = this;
var _29812__$1 = this;
return (new cljs.core.async.t_cljs$core$async29810(self__.f,self__.blockable,meta29811__$1));
});

cljs.core.async.t_cljs$core$async29810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29812){
var self__ = this;
var _29812__$1 = this;
return self__.meta29811;
});

cljs.core.async.t_cljs$core$async29810.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29810.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29810.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29810.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29811","meta29811",1081539700,null)], null);
});

cljs.core.async.t_cljs$core$async29810.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29810";

cljs.core.async.t_cljs$core$async29810.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async29810");
});

cljs.core.async.__GT_t_cljs$core$async29810 = (function cljs$core$async$__GT_t_cljs$core$async29810(f__$1,blockable__$1,meta29811){
return (new cljs.core.async.t_cljs$core$async29810(f__$1,blockable__$1,meta29811));
});

}

return (new cljs.core.async.t_cljs$core$async29810(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args29819 = [];
var len__22773__auto___29822 = arguments.length;
var i__22774__auto___29823 = (0);
while(true){
if((i__22774__auto___29823 < len__22773__auto___29822)){
args29819.push((arguments[i__22774__auto___29823]));

var G__29824 = (i__22774__auto___29823 + (1));
i__22774__auto___29823 = G__29824;
continue;
} else {
}
break;
}

var G__29821 = args29819.length;
switch (G__29821) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29819.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args29826 = [];
var len__22773__auto___29829 = arguments.length;
var i__22774__auto___29830 = (0);
while(true){
if((i__22774__auto___29830 < len__22773__auto___29829)){
args29826.push((arguments[i__22774__auto___29830]));

var G__29831 = (i__22774__auto___29830 + (1));
i__22774__auto___29830 = G__29831;
continue;
} else {
}
break;
}

var G__29828 = args29826.length;
switch (G__29828) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29826.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args29833 = [];
var len__22773__auto___29836 = arguments.length;
var i__22774__auto___29837 = (0);
while(true){
if((i__22774__auto___29837 < len__22773__auto___29836)){
args29833.push((arguments[i__22774__auto___29837]));

var G__29838 = (i__22774__auto___29837 + (1));
i__22774__auto___29837 = G__29838;
continue;
} else {
}
break;
}

var G__29835 = args29833.length;
switch (G__29835) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29833.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29840 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29840);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29840,ret){
return (function (){
return fn1.call(null,val_29840);
});})(val_29840,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args29841 = [];
var len__22773__auto___29844 = arguments.length;
var i__22774__auto___29845 = (0);
while(true){
if((i__22774__auto___29845 < len__22773__auto___29844)){
args29841.push((arguments[i__22774__auto___29845]));

var G__29846 = (i__22774__auto___29845 + (1));
i__22774__auto___29845 = G__29846;
continue;
} else {
}
break;
}

var G__29843 = args29841.length;
switch (G__29843) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29841.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6501__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6501__auto__)){
var ret = temp__6501__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6501__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6501__auto__)){
var retb = temp__6501__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6501__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6501__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22603__auto___29848 = n;
var x_29849 = (0);
while(true){
if((x_29849 < n__22603__auto___29848)){
(a[x_29849] = (0));

var G__29850 = (x_29849 + (1));
x_29849 = G__29850;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29851 = (i + (1));
i = G__29851;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29855 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29855 = (function (alt_flag,flag,meta29856){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29856 = meta29856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29857,meta29856__$1){
var self__ = this;
var _29857__$1 = this;
return (new cljs.core.async.t_cljs$core$async29855(self__.alt_flag,self__.flag,meta29856__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29855.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29857){
var self__ = this;
var _29857__$1 = this;
return self__.meta29856;
});})(flag))
;

cljs.core.async.t_cljs$core$async29855.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29855.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29855.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29855.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29855.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29856","meta29856",-1617254352,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29855.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29855";

cljs.core.async.t_cljs$core$async29855.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async29855");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29855 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29855(alt_flag__$1,flag__$1,meta29856){
return (new cljs.core.async.t_cljs$core$async29855(alt_flag__$1,flag__$1,meta29856));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29855(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29861 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29861 = (function (alt_handler,flag,cb,meta29862){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29862 = meta29862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29863,meta29862__$1){
var self__ = this;
var _29863__$1 = this;
return (new cljs.core.async.t_cljs$core$async29861(self__.alt_handler,self__.flag,self__.cb,meta29862__$1));
});

cljs.core.async.t_cljs$core$async29861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29863){
var self__ = this;
var _29863__$1 = this;
return self__.meta29862;
});

cljs.core.async.t_cljs$core$async29861.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29861.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29861.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29861.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29862","meta29862",1001320247,null)], null);
});

cljs.core.async.t_cljs$core$async29861.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29861";

cljs.core.async.t_cljs$core$async29861.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async29861");
});

cljs.core.async.__GT_t_cljs$core$async29861 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29861(alt_handler__$1,flag__$1,cb__$1,meta29862){
return (new cljs.core.async.t_cljs$core$async29861(alt_handler__$1,flag__$1,cb__$1,meta29862));
});

}

return (new cljs.core.async.t_cljs$core$async29861(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29864_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29864_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29865_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29865_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21590__auto__ = wport;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29866 = (i + (1));
i = G__29866;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21590__auto__ = ret;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6503__auto__ = (function (){var and__21578__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21578__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21578__auto__;
}
})();
if(cljs.core.truth_(temp__6503__auto__)){
var got = temp__6503__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__22780__auto__ = [];
var len__22773__auto___29872 = arguments.length;
var i__22774__auto___29873 = (0);
while(true){
if((i__22774__auto___29873 < len__22773__auto___29872)){
args__22780__auto__.push((arguments[i__22774__auto___29873]));

var G__29874 = (i__22774__auto___29873 + (1));
i__22774__auto___29873 = G__29874;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((1) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22781__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29869){
var map__29870 = p__29869;
var map__29870__$1 = ((((!((map__29870 == null)))?((((map__29870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29870):map__29870);
var opts = map__29870__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29867){
var G__29868 = cljs.core.first.call(null,seq29867);
var seq29867__$1 = cljs.core.next.call(null,seq29867);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29868,seq29867__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args29875 = [];
var len__22773__auto___29925 = arguments.length;
var i__22774__auto___29926 = (0);
while(true){
if((i__22774__auto___29926 < len__22773__auto___29925)){
args29875.push((arguments[i__22774__auto___29926]));

var G__29927 = (i__22774__auto___29926 + (1));
i__22774__auto___29926 = G__29927;
continue;
} else {
}
break;
}

var G__29877 = args29875.length;
switch (G__29877) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29875.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29748__auto___29929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto___29929){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto___29929){
return (function (state_29901){
var state_val_29902 = (state_29901[(1)]);
if((state_val_29902 === (7))){
var inst_29897 = (state_29901[(2)]);
var state_29901__$1 = state_29901;
var statearr_29903_29930 = state_29901__$1;
(statearr_29903_29930[(2)] = inst_29897);

(statearr_29903_29930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (1))){
var state_29901__$1 = state_29901;
var statearr_29904_29931 = state_29901__$1;
(statearr_29904_29931[(2)] = null);

(statearr_29904_29931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (4))){
var inst_29880 = (state_29901[(7)]);
var inst_29880__$1 = (state_29901[(2)]);
var inst_29881 = (inst_29880__$1 == null);
var state_29901__$1 = (function (){var statearr_29905 = state_29901;
(statearr_29905[(7)] = inst_29880__$1);

return statearr_29905;
})();
if(cljs.core.truth_(inst_29881)){
var statearr_29906_29932 = state_29901__$1;
(statearr_29906_29932[(1)] = (5));

} else {
var statearr_29907_29933 = state_29901__$1;
(statearr_29907_29933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (13))){
var state_29901__$1 = state_29901;
var statearr_29908_29934 = state_29901__$1;
(statearr_29908_29934[(2)] = null);

(statearr_29908_29934[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (6))){
var inst_29880 = (state_29901[(7)]);
var state_29901__$1 = state_29901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29901__$1,(11),to,inst_29880);
} else {
if((state_val_29902 === (3))){
var inst_29899 = (state_29901[(2)]);
var state_29901__$1 = state_29901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29901__$1,inst_29899);
} else {
if((state_val_29902 === (12))){
var state_29901__$1 = state_29901;
var statearr_29909_29935 = state_29901__$1;
(statearr_29909_29935[(2)] = null);

(statearr_29909_29935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (2))){
var state_29901__$1 = state_29901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29901__$1,(4),from);
} else {
if((state_val_29902 === (11))){
var inst_29890 = (state_29901[(2)]);
var state_29901__$1 = state_29901;
if(cljs.core.truth_(inst_29890)){
var statearr_29910_29936 = state_29901__$1;
(statearr_29910_29936[(1)] = (12));

} else {
var statearr_29911_29937 = state_29901__$1;
(statearr_29911_29937[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (9))){
var state_29901__$1 = state_29901;
var statearr_29912_29938 = state_29901__$1;
(statearr_29912_29938[(2)] = null);

(statearr_29912_29938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (5))){
var state_29901__$1 = state_29901;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29913_29939 = state_29901__$1;
(statearr_29913_29939[(1)] = (8));

} else {
var statearr_29914_29940 = state_29901__$1;
(statearr_29914_29940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (14))){
var inst_29895 = (state_29901[(2)]);
var state_29901__$1 = state_29901;
var statearr_29915_29941 = state_29901__$1;
(statearr_29915_29941[(2)] = inst_29895);

(statearr_29915_29941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (10))){
var inst_29887 = (state_29901[(2)]);
var state_29901__$1 = state_29901;
var statearr_29916_29942 = state_29901__$1;
(statearr_29916_29942[(2)] = inst_29887);

(statearr_29916_29942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (8))){
var inst_29884 = cljs.core.async.close_BANG_.call(null,to);
var state_29901__$1 = state_29901;
var statearr_29917_29943 = state_29901__$1;
(statearr_29917_29943[(2)] = inst_29884);

(statearr_29917_29943[(1)] = (10));


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
});})(c__29748__auto___29929))
;
return ((function (switch__29634__auto__,c__29748__auto___29929){
return (function() {
var cljs$core$async$state_machine__29635__auto__ = null;
var cljs$core$async$state_machine__29635__auto____0 = (function (){
var statearr_29921 = [null,null,null,null,null,null,null,null];
(statearr_29921[(0)] = cljs$core$async$state_machine__29635__auto__);

(statearr_29921[(1)] = (1));

return statearr_29921;
});
var cljs$core$async$state_machine__29635__auto____1 = (function (state_29901){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_29901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e29922){if((e29922 instanceof Object)){
var ex__29638__auto__ = e29922;
var statearr_29923_29944 = state_29901;
(statearr_29923_29944[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29945 = state_29901;
state_29901 = G__29945;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
cljs$core$async$state_machine__29635__auto__ = function(state_29901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29635__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29635__auto____1.call(this,state_29901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29635__auto____0;
cljs$core$async$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29635__auto____1;
return cljs$core$async$state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto___29929))
})();
var state__29750__auto__ = (function (){var statearr_29924 = f__29749__auto__.call(null);
(statearr_29924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto___29929);

return statearr_29924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto___29929))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30133){
var vec__30134 = p__30133;
var v = cljs.core.nth.call(null,vec__30134,(0),null);
var p = cljs.core.nth.call(null,vec__30134,(1),null);
var job = vec__30134;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29748__auto___30320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto___30320,res,vec__30134,v,p,job,jobs,results){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto___30320,res,vec__30134,v,p,job,jobs,results){
return (function (state_30141){
var state_val_30142 = (state_30141[(1)]);
if((state_val_30142 === (1))){
var state_30141__$1 = state_30141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30141__$1,(2),res,v);
} else {
if((state_val_30142 === (2))){
var inst_30138 = (state_30141[(2)]);
var inst_30139 = cljs.core.async.close_BANG_.call(null,res);
var state_30141__$1 = (function (){var statearr_30143 = state_30141;
(statearr_30143[(7)] = inst_30138);

return statearr_30143;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30141__$1,inst_30139);
} else {
return null;
}
}
});})(c__29748__auto___30320,res,vec__30134,v,p,job,jobs,results))
;
return ((function (switch__29634__auto__,c__29748__auto___30320,res,vec__30134,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____0 = (function (){
var statearr_30147 = [null,null,null,null,null,null,null,null];
(statearr_30147[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__);

(statearr_30147[(1)] = (1));

return statearr_30147;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____1 = (function (state_30141){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_30141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e30148){if((e30148 instanceof Object)){
var ex__29638__auto__ = e30148;
var statearr_30149_30321 = state_30141;
(statearr_30149_30321[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30322 = state_30141;
state_30141 = G__30322;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__ = function(state_30141){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____1.call(this,state_30141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto___30320,res,vec__30134,v,p,job,jobs,results))
})();
var state__29750__auto__ = (function (){var statearr_30150 = f__29749__auto__.call(null);
(statearr_30150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto___30320);

return statearr_30150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto___30320,res,vec__30134,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30151){
var vec__30152 = p__30151;
var v = cljs.core.nth.call(null,vec__30152,(0),null);
var p = cljs.core.nth.call(null,vec__30152,(1),null);
var job = vec__30152;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__22603__auto___30323 = n;
var __30324 = (0);
while(true){
if((__30324 < n__22603__auto___30323)){
var G__30155_30325 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30155_30325) {
case "compute":
var c__29748__auto___30327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30324,c__29748__auto___30327,G__30155_30325,n__22603__auto___30323,jobs,results,process,async){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (__30324,c__29748__auto___30327,G__30155_30325,n__22603__auto___30323,jobs,results,process,async){
return (function (state_30168){
var state_val_30169 = (state_30168[(1)]);
if((state_val_30169 === (1))){
var state_30168__$1 = state_30168;
var statearr_30170_30328 = state_30168__$1;
(statearr_30170_30328[(2)] = null);

(statearr_30170_30328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30169 === (2))){
var state_30168__$1 = state_30168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30168__$1,(4),jobs);
} else {
if((state_val_30169 === (3))){
var inst_30166 = (state_30168[(2)]);
var state_30168__$1 = state_30168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30168__$1,inst_30166);
} else {
if((state_val_30169 === (4))){
var inst_30158 = (state_30168[(2)]);
var inst_30159 = process.call(null,inst_30158);
var state_30168__$1 = state_30168;
if(cljs.core.truth_(inst_30159)){
var statearr_30171_30329 = state_30168__$1;
(statearr_30171_30329[(1)] = (5));

} else {
var statearr_30172_30330 = state_30168__$1;
(statearr_30172_30330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30169 === (5))){
var state_30168__$1 = state_30168;
var statearr_30173_30331 = state_30168__$1;
(statearr_30173_30331[(2)] = null);

(statearr_30173_30331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30169 === (6))){
var state_30168__$1 = state_30168;
var statearr_30174_30332 = state_30168__$1;
(statearr_30174_30332[(2)] = null);

(statearr_30174_30332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30169 === (7))){
var inst_30164 = (state_30168[(2)]);
var state_30168__$1 = state_30168;
var statearr_30175_30333 = state_30168__$1;
(statearr_30175_30333[(2)] = inst_30164);

(statearr_30175_30333[(1)] = (3));


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
});})(__30324,c__29748__auto___30327,G__30155_30325,n__22603__auto___30323,jobs,results,process,async))
;
return ((function (__30324,switch__29634__auto__,c__29748__auto___30327,G__30155_30325,n__22603__auto___30323,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____0 = (function (){
var statearr_30179 = [null,null,null,null,null,null,null];
(statearr_30179[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__);

(statearr_30179[(1)] = (1));

return statearr_30179;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____1 = (function (state_30168){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_30168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e30180){if((e30180 instanceof Object)){
var ex__29638__auto__ = e30180;
var statearr_30181_30334 = state_30168;
(statearr_30181_30334[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30335 = state_30168;
state_30168 = G__30335;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__ = function(state_30168){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____1.call(this,state_30168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__;
})()
;})(__30324,switch__29634__auto__,c__29748__auto___30327,G__30155_30325,n__22603__auto___30323,jobs,results,process,async))
})();
var state__29750__auto__ = (function (){var statearr_30182 = f__29749__auto__.call(null);
(statearr_30182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto___30327);

return statearr_30182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(__30324,c__29748__auto___30327,G__30155_30325,n__22603__auto___30323,jobs,results,process,async))
);


break;
case "async":
var c__29748__auto___30336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30324,c__29748__auto___30336,G__30155_30325,n__22603__auto___30323,jobs,results,process,async){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (__30324,c__29748__auto___30336,G__30155_30325,n__22603__auto___30323,jobs,results,process,async){
return (function (state_30195){
var state_val_30196 = (state_30195[(1)]);
if((state_val_30196 === (1))){
var state_30195__$1 = state_30195;
var statearr_30197_30337 = state_30195__$1;
(statearr_30197_30337[(2)] = null);

(statearr_30197_30337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (2))){
var state_30195__$1 = state_30195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30195__$1,(4),jobs);
} else {
if((state_val_30196 === (3))){
var inst_30193 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30195__$1,inst_30193);
} else {
if((state_val_30196 === (4))){
var inst_30185 = (state_30195[(2)]);
var inst_30186 = async.call(null,inst_30185);
var state_30195__$1 = state_30195;
if(cljs.core.truth_(inst_30186)){
var statearr_30198_30338 = state_30195__$1;
(statearr_30198_30338[(1)] = (5));

} else {
var statearr_30199_30339 = state_30195__$1;
(statearr_30199_30339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (5))){
var state_30195__$1 = state_30195;
var statearr_30200_30340 = state_30195__$1;
(statearr_30200_30340[(2)] = null);

(statearr_30200_30340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (6))){
var state_30195__$1 = state_30195;
var statearr_30201_30341 = state_30195__$1;
(statearr_30201_30341[(2)] = null);

(statearr_30201_30341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (7))){
var inst_30191 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30202_30342 = state_30195__$1;
(statearr_30202_30342[(2)] = inst_30191);

(statearr_30202_30342[(1)] = (3));


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
});})(__30324,c__29748__auto___30336,G__30155_30325,n__22603__auto___30323,jobs,results,process,async))
;
return ((function (__30324,switch__29634__auto__,c__29748__auto___30336,G__30155_30325,n__22603__auto___30323,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____0 = (function (){
var statearr_30206 = [null,null,null,null,null,null,null];
(statearr_30206[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__);

(statearr_30206[(1)] = (1));

return statearr_30206;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____1 = (function (state_30195){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_30195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e30207){if((e30207 instanceof Object)){
var ex__29638__auto__ = e30207;
var statearr_30208_30343 = state_30195;
(statearr_30208_30343[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30344 = state_30195;
state_30195 = G__30344;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__ = function(state_30195){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____1.call(this,state_30195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__;
})()
;})(__30324,switch__29634__auto__,c__29748__auto___30336,G__30155_30325,n__22603__auto___30323,jobs,results,process,async))
})();
var state__29750__auto__ = (function (){var statearr_30209 = f__29749__auto__.call(null);
(statearr_30209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto___30336);

return statearr_30209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(__30324,c__29748__auto___30336,G__30155_30325,n__22603__auto___30323,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30345 = (__30324 + (1));
__30324 = G__30345;
continue;
} else {
}
break;
}

var c__29748__auto___30346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto___30346,jobs,results,process,async){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto___30346,jobs,results,process,async){
return (function (state_30231){
var state_val_30232 = (state_30231[(1)]);
if((state_val_30232 === (1))){
var state_30231__$1 = state_30231;
var statearr_30233_30347 = state_30231__$1;
(statearr_30233_30347[(2)] = null);

(statearr_30233_30347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (2))){
var state_30231__$1 = state_30231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30231__$1,(4),from);
} else {
if((state_val_30232 === (3))){
var inst_30229 = (state_30231[(2)]);
var state_30231__$1 = state_30231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30231__$1,inst_30229);
} else {
if((state_val_30232 === (4))){
var inst_30212 = (state_30231[(7)]);
var inst_30212__$1 = (state_30231[(2)]);
var inst_30213 = (inst_30212__$1 == null);
var state_30231__$1 = (function (){var statearr_30234 = state_30231;
(statearr_30234[(7)] = inst_30212__$1);

return statearr_30234;
})();
if(cljs.core.truth_(inst_30213)){
var statearr_30235_30348 = state_30231__$1;
(statearr_30235_30348[(1)] = (5));

} else {
var statearr_30236_30349 = state_30231__$1;
(statearr_30236_30349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (5))){
var inst_30215 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30231__$1 = state_30231;
var statearr_30237_30350 = state_30231__$1;
(statearr_30237_30350[(2)] = inst_30215);

(statearr_30237_30350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (6))){
var inst_30212 = (state_30231[(7)]);
var inst_30217 = (state_30231[(8)]);
var inst_30217__$1 = cljs.core.async.chan.call(null,(1));
var inst_30218 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30219 = [inst_30212,inst_30217__$1];
var inst_30220 = (new cljs.core.PersistentVector(null,2,(5),inst_30218,inst_30219,null));
var state_30231__$1 = (function (){var statearr_30238 = state_30231;
(statearr_30238[(8)] = inst_30217__$1);

return statearr_30238;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30231__$1,(8),jobs,inst_30220);
} else {
if((state_val_30232 === (7))){
var inst_30227 = (state_30231[(2)]);
var state_30231__$1 = state_30231;
var statearr_30239_30351 = state_30231__$1;
(statearr_30239_30351[(2)] = inst_30227);

(statearr_30239_30351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (8))){
var inst_30217 = (state_30231[(8)]);
var inst_30222 = (state_30231[(2)]);
var state_30231__$1 = (function (){var statearr_30240 = state_30231;
(statearr_30240[(9)] = inst_30222);

return statearr_30240;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30231__$1,(9),results,inst_30217);
} else {
if((state_val_30232 === (9))){
var inst_30224 = (state_30231[(2)]);
var state_30231__$1 = (function (){var statearr_30241 = state_30231;
(statearr_30241[(10)] = inst_30224);

return statearr_30241;
})();
var statearr_30242_30352 = state_30231__$1;
(statearr_30242_30352[(2)] = null);

(statearr_30242_30352[(1)] = (2));


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
});})(c__29748__auto___30346,jobs,results,process,async))
;
return ((function (switch__29634__auto__,c__29748__auto___30346,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____0 = (function (){
var statearr_30246 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30246[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__);

(statearr_30246[(1)] = (1));

return statearr_30246;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____1 = (function (state_30231){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_30231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e30247){if((e30247 instanceof Object)){
var ex__29638__auto__ = e30247;
var statearr_30248_30353 = state_30231;
(statearr_30248_30353[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30354 = state_30231;
state_30231 = G__30354;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__ = function(state_30231){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____1.call(this,state_30231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto___30346,jobs,results,process,async))
})();
var state__29750__auto__ = (function (){var statearr_30249 = f__29749__auto__.call(null);
(statearr_30249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto___30346);

return statearr_30249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto___30346,jobs,results,process,async))
);


var c__29748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto__,jobs,results,process,async){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto__,jobs,results,process,async){
return (function (state_30287){
var state_val_30288 = (state_30287[(1)]);
if((state_val_30288 === (7))){
var inst_30283 = (state_30287[(2)]);
var state_30287__$1 = state_30287;
var statearr_30289_30355 = state_30287__$1;
(statearr_30289_30355[(2)] = inst_30283);

(statearr_30289_30355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (20))){
var state_30287__$1 = state_30287;
var statearr_30290_30356 = state_30287__$1;
(statearr_30290_30356[(2)] = null);

(statearr_30290_30356[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (1))){
var state_30287__$1 = state_30287;
var statearr_30291_30357 = state_30287__$1;
(statearr_30291_30357[(2)] = null);

(statearr_30291_30357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (4))){
var inst_30252 = (state_30287[(7)]);
var inst_30252__$1 = (state_30287[(2)]);
var inst_30253 = (inst_30252__$1 == null);
var state_30287__$1 = (function (){var statearr_30292 = state_30287;
(statearr_30292[(7)] = inst_30252__$1);

return statearr_30292;
})();
if(cljs.core.truth_(inst_30253)){
var statearr_30293_30358 = state_30287__$1;
(statearr_30293_30358[(1)] = (5));

} else {
var statearr_30294_30359 = state_30287__$1;
(statearr_30294_30359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (15))){
var inst_30265 = (state_30287[(8)]);
var state_30287__$1 = state_30287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30287__$1,(18),to,inst_30265);
} else {
if((state_val_30288 === (21))){
var inst_30278 = (state_30287[(2)]);
var state_30287__$1 = state_30287;
var statearr_30295_30360 = state_30287__$1;
(statearr_30295_30360[(2)] = inst_30278);

(statearr_30295_30360[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (13))){
var inst_30280 = (state_30287[(2)]);
var state_30287__$1 = (function (){var statearr_30296 = state_30287;
(statearr_30296[(9)] = inst_30280);

return statearr_30296;
})();
var statearr_30297_30361 = state_30287__$1;
(statearr_30297_30361[(2)] = null);

(statearr_30297_30361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (6))){
var inst_30252 = (state_30287[(7)]);
var state_30287__$1 = state_30287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30287__$1,(11),inst_30252);
} else {
if((state_val_30288 === (17))){
var inst_30273 = (state_30287[(2)]);
var state_30287__$1 = state_30287;
if(cljs.core.truth_(inst_30273)){
var statearr_30298_30362 = state_30287__$1;
(statearr_30298_30362[(1)] = (19));

} else {
var statearr_30299_30363 = state_30287__$1;
(statearr_30299_30363[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (3))){
var inst_30285 = (state_30287[(2)]);
var state_30287__$1 = state_30287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30287__$1,inst_30285);
} else {
if((state_val_30288 === (12))){
var inst_30262 = (state_30287[(10)]);
var state_30287__$1 = state_30287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30287__$1,(14),inst_30262);
} else {
if((state_val_30288 === (2))){
var state_30287__$1 = state_30287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30287__$1,(4),results);
} else {
if((state_val_30288 === (19))){
var state_30287__$1 = state_30287;
var statearr_30300_30364 = state_30287__$1;
(statearr_30300_30364[(2)] = null);

(statearr_30300_30364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (11))){
var inst_30262 = (state_30287[(2)]);
var state_30287__$1 = (function (){var statearr_30301 = state_30287;
(statearr_30301[(10)] = inst_30262);

return statearr_30301;
})();
var statearr_30302_30365 = state_30287__$1;
(statearr_30302_30365[(2)] = null);

(statearr_30302_30365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (9))){
var state_30287__$1 = state_30287;
var statearr_30303_30366 = state_30287__$1;
(statearr_30303_30366[(2)] = null);

(statearr_30303_30366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (5))){
var state_30287__$1 = state_30287;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30304_30367 = state_30287__$1;
(statearr_30304_30367[(1)] = (8));

} else {
var statearr_30305_30368 = state_30287__$1;
(statearr_30305_30368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (14))){
var inst_30265 = (state_30287[(8)]);
var inst_30267 = (state_30287[(11)]);
var inst_30265__$1 = (state_30287[(2)]);
var inst_30266 = (inst_30265__$1 == null);
var inst_30267__$1 = cljs.core.not.call(null,inst_30266);
var state_30287__$1 = (function (){var statearr_30306 = state_30287;
(statearr_30306[(8)] = inst_30265__$1);

(statearr_30306[(11)] = inst_30267__$1);

return statearr_30306;
})();
if(inst_30267__$1){
var statearr_30307_30369 = state_30287__$1;
(statearr_30307_30369[(1)] = (15));

} else {
var statearr_30308_30370 = state_30287__$1;
(statearr_30308_30370[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (16))){
var inst_30267 = (state_30287[(11)]);
var state_30287__$1 = state_30287;
var statearr_30309_30371 = state_30287__$1;
(statearr_30309_30371[(2)] = inst_30267);

(statearr_30309_30371[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (10))){
var inst_30259 = (state_30287[(2)]);
var state_30287__$1 = state_30287;
var statearr_30310_30372 = state_30287__$1;
(statearr_30310_30372[(2)] = inst_30259);

(statearr_30310_30372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (18))){
var inst_30270 = (state_30287[(2)]);
var state_30287__$1 = state_30287;
var statearr_30311_30373 = state_30287__$1;
(statearr_30311_30373[(2)] = inst_30270);

(statearr_30311_30373[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (8))){
var inst_30256 = cljs.core.async.close_BANG_.call(null,to);
var state_30287__$1 = state_30287;
var statearr_30312_30374 = state_30287__$1;
(statearr_30312_30374[(2)] = inst_30256);

(statearr_30312_30374[(1)] = (10));


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
}
}
}
}
});})(c__29748__auto__,jobs,results,process,async))
;
return ((function (switch__29634__auto__,c__29748__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____0 = (function (){
var statearr_30316 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30316[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__);

(statearr_30316[(1)] = (1));

return statearr_30316;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____1 = (function (state_30287){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_30287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e30317){if((e30317 instanceof Object)){
var ex__29638__auto__ = e30317;
var statearr_30318_30375 = state_30287;
(statearr_30318_30375[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30376 = state_30287;
state_30287 = G__30376;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__ = function(state_30287){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____1.call(this,state_30287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29635__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto__,jobs,results,process,async))
})();
var state__29750__auto__ = (function (){var statearr_30319 = f__29749__auto__.call(null);
(statearr_30319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto__);

return statearr_30319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto__,jobs,results,process,async))
);

return c__29748__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args30377 = [];
var len__22773__auto___30380 = arguments.length;
var i__22774__auto___30381 = (0);
while(true){
if((i__22774__auto___30381 < len__22773__auto___30380)){
args30377.push((arguments[i__22774__auto___30381]));

var G__30382 = (i__22774__auto___30381 + (1));
i__22774__auto___30381 = G__30382;
continue;
} else {
}
break;
}

var G__30379 = args30377.length;
switch (G__30379) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30377.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args30384 = [];
var len__22773__auto___30387 = arguments.length;
var i__22774__auto___30388 = (0);
while(true){
if((i__22774__auto___30388 < len__22773__auto___30387)){
args30384.push((arguments[i__22774__auto___30388]));

var G__30389 = (i__22774__auto___30388 + (1));
i__22774__auto___30388 = G__30389;
continue;
} else {
}
break;
}

var G__30386 = args30384.length;
switch (G__30386) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30384.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args30391 = [];
var len__22773__auto___30444 = arguments.length;
var i__22774__auto___30445 = (0);
while(true){
if((i__22774__auto___30445 < len__22773__auto___30444)){
args30391.push((arguments[i__22774__auto___30445]));

var G__30446 = (i__22774__auto___30445 + (1));
i__22774__auto___30445 = G__30446;
continue;
} else {
}
break;
}

var G__30393 = args30391.length;
switch (G__30393) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30391.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29748__auto___30448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto___30448,tc,fc){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto___30448,tc,fc){
return (function (state_30419){
var state_val_30420 = (state_30419[(1)]);
if((state_val_30420 === (7))){
var inst_30415 = (state_30419[(2)]);
var state_30419__$1 = state_30419;
var statearr_30421_30449 = state_30419__$1;
(statearr_30421_30449[(2)] = inst_30415);

(statearr_30421_30449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (1))){
var state_30419__$1 = state_30419;
var statearr_30422_30450 = state_30419__$1;
(statearr_30422_30450[(2)] = null);

(statearr_30422_30450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (4))){
var inst_30396 = (state_30419[(7)]);
var inst_30396__$1 = (state_30419[(2)]);
var inst_30397 = (inst_30396__$1 == null);
var state_30419__$1 = (function (){var statearr_30423 = state_30419;
(statearr_30423[(7)] = inst_30396__$1);

return statearr_30423;
})();
if(cljs.core.truth_(inst_30397)){
var statearr_30424_30451 = state_30419__$1;
(statearr_30424_30451[(1)] = (5));

} else {
var statearr_30425_30452 = state_30419__$1;
(statearr_30425_30452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (13))){
var state_30419__$1 = state_30419;
var statearr_30426_30453 = state_30419__$1;
(statearr_30426_30453[(2)] = null);

(statearr_30426_30453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (6))){
var inst_30396 = (state_30419[(7)]);
var inst_30402 = p.call(null,inst_30396);
var state_30419__$1 = state_30419;
if(cljs.core.truth_(inst_30402)){
var statearr_30427_30454 = state_30419__$1;
(statearr_30427_30454[(1)] = (9));

} else {
var statearr_30428_30455 = state_30419__$1;
(statearr_30428_30455[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (3))){
var inst_30417 = (state_30419[(2)]);
var state_30419__$1 = state_30419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30419__$1,inst_30417);
} else {
if((state_val_30420 === (12))){
var state_30419__$1 = state_30419;
var statearr_30429_30456 = state_30419__$1;
(statearr_30429_30456[(2)] = null);

(statearr_30429_30456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (2))){
var state_30419__$1 = state_30419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30419__$1,(4),ch);
} else {
if((state_val_30420 === (11))){
var inst_30396 = (state_30419[(7)]);
var inst_30406 = (state_30419[(2)]);
var state_30419__$1 = state_30419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30419__$1,(8),inst_30406,inst_30396);
} else {
if((state_val_30420 === (9))){
var state_30419__$1 = state_30419;
var statearr_30430_30457 = state_30419__$1;
(statearr_30430_30457[(2)] = tc);

(statearr_30430_30457[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (5))){
var inst_30399 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30400 = cljs.core.async.close_BANG_.call(null,fc);
var state_30419__$1 = (function (){var statearr_30431 = state_30419;
(statearr_30431[(8)] = inst_30399);

return statearr_30431;
})();
var statearr_30432_30458 = state_30419__$1;
(statearr_30432_30458[(2)] = inst_30400);

(statearr_30432_30458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (14))){
var inst_30413 = (state_30419[(2)]);
var state_30419__$1 = state_30419;
var statearr_30433_30459 = state_30419__$1;
(statearr_30433_30459[(2)] = inst_30413);

(statearr_30433_30459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (10))){
var state_30419__$1 = state_30419;
var statearr_30434_30460 = state_30419__$1;
(statearr_30434_30460[(2)] = fc);

(statearr_30434_30460[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (8))){
var inst_30408 = (state_30419[(2)]);
var state_30419__$1 = state_30419;
if(cljs.core.truth_(inst_30408)){
var statearr_30435_30461 = state_30419__$1;
(statearr_30435_30461[(1)] = (12));

} else {
var statearr_30436_30462 = state_30419__$1;
(statearr_30436_30462[(1)] = (13));

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
});})(c__29748__auto___30448,tc,fc))
;
return ((function (switch__29634__auto__,c__29748__auto___30448,tc,fc){
return (function() {
var cljs$core$async$state_machine__29635__auto__ = null;
var cljs$core$async$state_machine__29635__auto____0 = (function (){
var statearr_30440 = [null,null,null,null,null,null,null,null,null];
(statearr_30440[(0)] = cljs$core$async$state_machine__29635__auto__);

(statearr_30440[(1)] = (1));

return statearr_30440;
});
var cljs$core$async$state_machine__29635__auto____1 = (function (state_30419){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_30419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e30441){if((e30441 instanceof Object)){
var ex__29638__auto__ = e30441;
var statearr_30442_30463 = state_30419;
(statearr_30442_30463[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30464 = state_30419;
state_30419 = G__30464;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
cljs$core$async$state_machine__29635__auto__ = function(state_30419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29635__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29635__auto____1.call(this,state_30419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29635__auto____0;
cljs$core$async$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29635__auto____1;
return cljs$core$async$state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto___30448,tc,fc))
})();
var state__29750__auto__ = (function (){var statearr_30443 = f__29749__auto__.call(null);
(statearr_30443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto___30448);

return statearr_30443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto___30448,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto__){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto__){
return (function (state_30528){
var state_val_30529 = (state_30528[(1)]);
if((state_val_30529 === (7))){
var inst_30524 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
var statearr_30530_30551 = state_30528__$1;
(statearr_30530_30551[(2)] = inst_30524);

(statearr_30530_30551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (1))){
var inst_30508 = init;
var state_30528__$1 = (function (){var statearr_30531 = state_30528;
(statearr_30531[(7)] = inst_30508);

return statearr_30531;
})();
var statearr_30532_30552 = state_30528__$1;
(statearr_30532_30552[(2)] = null);

(statearr_30532_30552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (4))){
var inst_30511 = (state_30528[(8)]);
var inst_30511__$1 = (state_30528[(2)]);
var inst_30512 = (inst_30511__$1 == null);
var state_30528__$1 = (function (){var statearr_30533 = state_30528;
(statearr_30533[(8)] = inst_30511__$1);

return statearr_30533;
})();
if(cljs.core.truth_(inst_30512)){
var statearr_30534_30553 = state_30528__$1;
(statearr_30534_30553[(1)] = (5));

} else {
var statearr_30535_30554 = state_30528__$1;
(statearr_30535_30554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (6))){
var inst_30511 = (state_30528[(8)]);
var inst_30508 = (state_30528[(7)]);
var inst_30515 = (state_30528[(9)]);
var inst_30515__$1 = f.call(null,inst_30508,inst_30511);
var inst_30516 = cljs.core.reduced_QMARK_.call(null,inst_30515__$1);
var state_30528__$1 = (function (){var statearr_30536 = state_30528;
(statearr_30536[(9)] = inst_30515__$1);

return statearr_30536;
})();
if(inst_30516){
var statearr_30537_30555 = state_30528__$1;
(statearr_30537_30555[(1)] = (8));

} else {
var statearr_30538_30556 = state_30528__$1;
(statearr_30538_30556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (3))){
var inst_30526 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30528__$1,inst_30526);
} else {
if((state_val_30529 === (2))){
var state_30528__$1 = state_30528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30528__$1,(4),ch);
} else {
if((state_val_30529 === (9))){
var inst_30515 = (state_30528[(9)]);
var inst_30508 = inst_30515;
var state_30528__$1 = (function (){var statearr_30539 = state_30528;
(statearr_30539[(7)] = inst_30508);

return statearr_30539;
})();
var statearr_30540_30557 = state_30528__$1;
(statearr_30540_30557[(2)] = null);

(statearr_30540_30557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (5))){
var inst_30508 = (state_30528[(7)]);
var state_30528__$1 = state_30528;
var statearr_30541_30558 = state_30528__$1;
(statearr_30541_30558[(2)] = inst_30508);

(statearr_30541_30558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (10))){
var inst_30522 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
var statearr_30542_30559 = state_30528__$1;
(statearr_30542_30559[(2)] = inst_30522);

(statearr_30542_30559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (8))){
var inst_30515 = (state_30528[(9)]);
var inst_30518 = cljs.core.deref.call(null,inst_30515);
var state_30528__$1 = state_30528;
var statearr_30543_30560 = state_30528__$1;
(statearr_30543_30560[(2)] = inst_30518);

(statearr_30543_30560[(1)] = (10));


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
});})(c__29748__auto__))
;
return ((function (switch__29634__auto__,c__29748__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29635__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29635__auto____0 = (function (){
var statearr_30547 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30547[(0)] = cljs$core$async$reduce_$_state_machine__29635__auto__);

(statearr_30547[(1)] = (1));

return statearr_30547;
});
var cljs$core$async$reduce_$_state_machine__29635__auto____1 = (function (state_30528){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_30528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e30548){if((e30548 instanceof Object)){
var ex__29638__auto__ = e30548;
var statearr_30549_30561 = state_30528;
(statearr_30549_30561[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30562 = state_30528;
state_30528 = G__30562;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29635__auto__ = function(state_30528){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29635__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29635__auto____1.call(this,state_30528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29635__auto____0;
cljs$core$async$reduce_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29635__auto____1;
return cljs$core$async$reduce_$_state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto__))
})();
var state__29750__auto__ = (function (){var statearr_30550 = f__29749__auto__.call(null);
(statearr_30550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto__);

return statearr_30550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto__))
);

return c__29748__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args30563 = [];
var len__22773__auto___30615 = arguments.length;
var i__22774__auto___30616 = (0);
while(true){
if((i__22774__auto___30616 < len__22773__auto___30615)){
args30563.push((arguments[i__22774__auto___30616]));

var G__30617 = (i__22774__auto___30616 + (1));
i__22774__auto___30616 = G__30617;
continue;
} else {
}
break;
}

var G__30565 = args30563.length;
switch (G__30565) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30563.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto__){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto__){
return (function (state_30590){
var state_val_30591 = (state_30590[(1)]);
if((state_val_30591 === (7))){
var inst_30572 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30592_30619 = state_30590__$1;
(statearr_30592_30619[(2)] = inst_30572);

(statearr_30592_30619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (1))){
var inst_30566 = cljs.core.seq.call(null,coll);
var inst_30567 = inst_30566;
var state_30590__$1 = (function (){var statearr_30593 = state_30590;
(statearr_30593[(7)] = inst_30567);

return statearr_30593;
})();
var statearr_30594_30620 = state_30590__$1;
(statearr_30594_30620[(2)] = null);

(statearr_30594_30620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (4))){
var inst_30567 = (state_30590[(7)]);
var inst_30570 = cljs.core.first.call(null,inst_30567);
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30590__$1,(7),ch,inst_30570);
} else {
if((state_val_30591 === (13))){
var inst_30584 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30595_30621 = state_30590__$1;
(statearr_30595_30621[(2)] = inst_30584);

(statearr_30595_30621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (6))){
var inst_30575 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
if(cljs.core.truth_(inst_30575)){
var statearr_30596_30622 = state_30590__$1;
(statearr_30596_30622[(1)] = (8));

} else {
var statearr_30597_30623 = state_30590__$1;
(statearr_30597_30623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (3))){
var inst_30588 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30590__$1,inst_30588);
} else {
if((state_val_30591 === (12))){
var state_30590__$1 = state_30590;
var statearr_30598_30624 = state_30590__$1;
(statearr_30598_30624[(2)] = null);

(statearr_30598_30624[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (2))){
var inst_30567 = (state_30590[(7)]);
var state_30590__$1 = state_30590;
if(cljs.core.truth_(inst_30567)){
var statearr_30599_30625 = state_30590__$1;
(statearr_30599_30625[(1)] = (4));

} else {
var statearr_30600_30626 = state_30590__$1;
(statearr_30600_30626[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (11))){
var inst_30581 = cljs.core.async.close_BANG_.call(null,ch);
var state_30590__$1 = state_30590;
var statearr_30601_30627 = state_30590__$1;
(statearr_30601_30627[(2)] = inst_30581);

(statearr_30601_30627[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (9))){
var state_30590__$1 = state_30590;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30602_30628 = state_30590__$1;
(statearr_30602_30628[(1)] = (11));

} else {
var statearr_30603_30629 = state_30590__$1;
(statearr_30603_30629[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (5))){
var inst_30567 = (state_30590[(7)]);
var state_30590__$1 = state_30590;
var statearr_30604_30630 = state_30590__$1;
(statearr_30604_30630[(2)] = inst_30567);

(statearr_30604_30630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (10))){
var inst_30586 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30605_30631 = state_30590__$1;
(statearr_30605_30631[(2)] = inst_30586);

(statearr_30605_30631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (8))){
var inst_30567 = (state_30590[(7)]);
var inst_30577 = cljs.core.next.call(null,inst_30567);
var inst_30567__$1 = inst_30577;
var state_30590__$1 = (function (){var statearr_30606 = state_30590;
(statearr_30606[(7)] = inst_30567__$1);

return statearr_30606;
})();
var statearr_30607_30632 = state_30590__$1;
(statearr_30607_30632[(2)] = null);

(statearr_30607_30632[(1)] = (2));


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
});})(c__29748__auto__))
;
return ((function (switch__29634__auto__,c__29748__auto__){
return (function() {
var cljs$core$async$state_machine__29635__auto__ = null;
var cljs$core$async$state_machine__29635__auto____0 = (function (){
var statearr_30611 = [null,null,null,null,null,null,null,null];
(statearr_30611[(0)] = cljs$core$async$state_machine__29635__auto__);

(statearr_30611[(1)] = (1));

return statearr_30611;
});
var cljs$core$async$state_machine__29635__auto____1 = (function (state_30590){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_30590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e30612){if((e30612 instanceof Object)){
var ex__29638__auto__ = e30612;
var statearr_30613_30633 = state_30590;
(statearr_30613_30633[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30634 = state_30590;
state_30590 = G__30634;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
cljs$core$async$state_machine__29635__auto__ = function(state_30590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29635__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29635__auto____1.call(this,state_30590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29635__auto____0;
cljs$core$async$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29635__auto____1;
return cljs$core$async$state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto__))
})();
var state__29750__auto__ = (function (){var statearr_30614 = f__29749__auto__.call(null);
(statearr_30614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto__);

return statearr_30614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto__))
);

return c__29748__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__22303__auto__ = (((_ == null))?null:_);
var m__22304__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,_);
} else {
var m__22304__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__22303__auto__ = (((m == null))?null:m);
var m__22304__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22304__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__22303__auto__ = (((m == null))?null:m);
var m__22304__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,m,ch);
} else {
var m__22304__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__22303__auto__ = (((m == null))?null:m);
var m__22304__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,m);
} else {
var m__22304__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30860 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30860 = (function (mult,ch,cs,meta30861){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30861 = meta30861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30862,meta30861__$1){
var self__ = this;
var _30862__$1 = this;
return (new cljs.core.async.t_cljs$core$async30860(self__.mult,self__.ch,self__.cs,meta30861__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30860.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30862){
var self__ = this;
var _30862__$1 = this;
return self__.meta30861;
});})(cs))
;

cljs.core.async.t_cljs$core$async30860.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30860.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30860.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30860.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30860.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30860.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30860.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30861","meta30861",-813954176,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30860.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30860";

cljs.core.async.t_cljs$core$async30860.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async30860");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30860 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30860(mult__$1,ch__$1,cs__$1,meta30861){
return (new cljs.core.async.t_cljs$core$async30860(mult__$1,ch__$1,cs__$1,meta30861));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30860(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29748__auto___31085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto___31085,cs,m,dchan,dctr,done){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto___31085,cs,m,dchan,dctr,done){
return (function (state_30997){
var state_val_30998 = (state_30997[(1)]);
if((state_val_30998 === (7))){
var inst_30993 = (state_30997[(2)]);
var state_30997__$1 = state_30997;
var statearr_30999_31086 = state_30997__$1;
(statearr_30999_31086[(2)] = inst_30993);

(statearr_30999_31086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (20))){
var inst_30896 = (state_30997[(7)]);
var inst_30908 = cljs.core.first.call(null,inst_30896);
var inst_30909 = cljs.core.nth.call(null,inst_30908,(0),null);
var inst_30910 = cljs.core.nth.call(null,inst_30908,(1),null);
var state_30997__$1 = (function (){var statearr_31000 = state_30997;
(statearr_31000[(8)] = inst_30909);

return statearr_31000;
})();
if(cljs.core.truth_(inst_30910)){
var statearr_31001_31087 = state_30997__$1;
(statearr_31001_31087[(1)] = (22));

} else {
var statearr_31002_31088 = state_30997__$1;
(statearr_31002_31088[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (27))){
var inst_30938 = (state_30997[(9)]);
var inst_30945 = (state_30997[(10)]);
var inst_30865 = (state_30997[(11)]);
var inst_30940 = (state_30997[(12)]);
var inst_30945__$1 = cljs.core._nth.call(null,inst_30938,inst_30940);
var inst_30946 = cljs.core.async.put_BANG_.call(null,inst_30945__$1,inst_30865,done);
var state_30997__$1 = (function (){var statearr_31003 = state_30997;
(statearr_31003[(10)] = inst_30945__$1);

return statearr_31003;
})();
if(cljs.core.truth_(inst_30946)){
var statearr_31004_31089 = state_30997__$1;
(statearr_31004_31089[(1)] = (30));

} else {
var statearr_31005_31090 = state_30997__$1;
(statearr_31005_31090[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (1))){
var state_30997__$1 = state_30997;
var statearr_31006_31091 = state_30997__$1;
(statearr_31006_31091[(2)] = null);

(statearr_31006_31091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (24))){
var inst_30896 = (state_30997[(7)]);
var inst_30915 = (state_30997[(2)]);
var inst_30916 = cljs.core.next.call(null,inst_30896);
var inst_30874 = inst_30916;
var inst_30875 = null;
var inst_30876 = (0);
var inst_30877 = (0);
var state_30997__$1 = (function (){var statearr_31007 = state_30997;
(statearr_31007[(13)] = inst_30915);

(statearr_31007[(14)] = inst_30874);

(statearr_31007[(15)] = inst_30876);

(statearr_31007[(16)] = inst_30877);

(statearr_31007[(17)] = inst_30875);

return statearr_31007;
})();
var statearr_31008_31092 = state_30997__$1;
(statearr_31008_31092[(2)] = null);

(statearr_31008_31092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (39))){
var state_30997__$1 = state_30997;
var statearr_31012_31093 = state_30997__$1;
(statearr_31012_31093[(2)] = null);

(statearr_31012_31093[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (4))){
var inst_30865 = (state_30997[(11)]);
var inst_30865__$1 = (state_30997[(2)]);
var inst_30866 = (inst_30865__$1 == null);
var state_30997__$1 = (function (){var statearr_31013 = state_30997;
(statearr_31013[(11)] = inst_30865__$1);

return statearr_31013;
})();
if(cljs.core.truth_(inst_30866)){
var statearr_31014_31094 = state_30997__$1;
(statearr_31014_31094[(1)] = (5));

} else {
var statearr_31015_31095 = state_30997__$1;
(statearr_31015_31095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (15))){
var inst_30874 = (state_30997[(14)]);
var inst_30876 = (state_30997[(15)]);
var inst_30877 = (state_30997[(16)]);
var inst_30875 = (state_30997[(17)]);
var inst_30892 = (state_30997[(2)]);
var inst_30893 = (inst_30877 + (1));
var tmp31009 = inst_30874;
var tmp31010 = inst_30876;
var tmp31011 = inst_30875;
var inst_30874__$1 = tmp31009;
var inst_30875__$1 = tmp31011;
var inst_30876__$1 = tmp31010;
var inst_30877__$1 = inst_30893;
var state_30997__$1 = (function (){var statearr_31016 = state_30997;
(statearr_31016[(14)] = inst_30874__$1);

(statearr_31016[(15)] = inst_30876__$1);

(statearr_31016[(18)] = inst_30892);

(statearr_31016[(16)] = inst_30877__$1);

(statearr_31016[(17)] = inst_30875__$1);

return statearr_31016;
})();
var statearr_31017_31096 = state_30997__$1;
(statearr_31017_31096[(2)] = null);

(statearr_31017_31096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (21))){
var inst_30919 = (state_30997[(2)]);
var state_30997__$1 = state_30997;
var statearr_31021_31097 = state_30997__$1;
(statearr_31021_31097[(2)] = inst_30919);

(statearr_31021_31097[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (31))){
var inst_30945 = (state_30997[(10)]);
var inst_30949 = done.call(null,null);
var inst_30950 = cljs.core.async.untap_STAR_.call(null,m,inst_30945);
var state_30997__$1 = (function (){var statearr_31022 = state_30997;
(statearr_31022[(19)] = inst_30949);

return statearr_31022;
})();
var statearr_31023_31098 = state_30997__$1;
(statearr_31023_31098[(2)] = inst_30950);

(statearr_31023_31098[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (32))){
var inst_30938 = (state_30997[(9)]);
var inst_30937 = (state_30997[(20)]);
var inst_30939 = (state_30997[(21)]);
var inst_30940 = (state_30997[(12)]);
var inst_30952 = (state_30997[(2)]);
var inst_30953 = (inst_30940 + (1));
var tmp31018 = inst_30938;
var tmp31019 = inst_30937;
var tmp31020 = inst_30939;
var inst_30937__$1 = tmp31019;
var inst_30938__$1 = tmp31018;
var inst_30939__$1 = tmp31020;
var inst_30940__$1 = inst_30953;
var state_30997__$1 = (function (){var statearr_31024 = state_30997;
(statearr_31024[(9)] = inst_30938__$1);

(statearr_31024[(22)] = inst_30952);

(statearr_31024[(20)] = inst_30937__$1);

(statearr_31024[(21)] = inst_30939__$1);

(statearr_31024[(12)] = inst_30940__$1);

return statearr_31024;
})();
var statearr_31025_31099 = state_30997__$1;
(statearr_31025_31099[(2)] = null);

(statearr_31025_31099[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (40))){
var inst_30965 = (state_30997[(23)]);
var inst_30969 = done.call(null,null);
var inst_30970 = cljs.core.async.untap_STAR_.call(null,m,inst_30965);
var state_30997__$1 = (function (){var statearr_31026 = state_30997;
(statearr_31026[(24)] = inst_30969);

return statearr_31026;
})();
var statearr_31027_31100 = state_30997__$1;
(statearr_31027_31100[(2)] = inst_30970);

(statearr_31027_31100[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (33))){
var inst_30956 = (state_30997[(25)]);
var inst_30958 = cljs.core.chunked_seq_QMARK_.call(null,inst_30956);
var state_30997__$1 = state_30997;
if(inst_30958){
var statearr_31028_31101 = state_30997__$1;
(statearr_31028_31101[(1)] = (36));

} else {
var statearr_31029_31102 = state_30997__$1;
(statearr_31029_31102[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (13))){
var inst_30886 = (state_30997[(26)]);
var inst_30889 = cljs.core.async.close_BANG_.call(null,inst_30886);
var state_30997__$1 = state_30997;
var statearr_31030_31103 = state_30997__$1;
(statearr_31030_31103[(2)] = inst_30889);

(statearr_31030_31103[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (22))){
var inst_30909 = (state_30997[(8)]);
var inst_30912 = cljs.core.async.close_BANG_.call(null,inst_30909);
var state_30997__$1 = state_30997;
var statearr_31031_31104 = state_30997__$1;
(statearr_31031_31104[(2)] = inst_30912);

(statearr_31031_31104[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (36))){
var inst_30956 = (state_30997[(25)]);
var inst_30960 = cljs.core.chunk_first.call(null,inst_30956);
var inst_30961 = cljs.core.chunk_rest.call(null,inst_30956);
var inst_30962 = cljs.core.count.call(null,inst_30960);
var inst_30937 = inst_30961;
var inst_30938 = inst_30960;
var inst_30939 = inst_30962;
var inst_30940 = (0);
var state_30997__$1 = (function (){var statearr_31032 = state_30997;
(statearr_31032[(9)] = inst_30938);

(statearr_31032[(20)] = inst_30937);

(statearr_31032[(21)] = inst_30939);

(statearr_31032[(12)] = inst_30940);

return statearr_31032;
})();
var statearr_31033_31105 = state_30997__$1;
(statearr_31033_31105[(2)] = null);

(statearr_31033_31105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (41))){
var inst_30956 = (state_30997[(25)]);
var inst_30972 = (state_30997[(2)]);
var inst_30973 = cljs.core.next.call(null,inst_30956);
var inst_30937 = inst_30973;
var inst_30938 = null;
var inst_30939 = (0);
var inst_30940 = (0);
var state_30997__$1 = (function (){var statearr_31034 = state_30997;
(statearr_31034[(9)] = inst_30938);

(statearr_31034[(27)] = inst_30972);

(statearr_31034[(20)] = inst_30937);

(statearr_31034[(21)] = inst_30939);

(statearr_31034[(12)] = inst_30940);

return statearr_31034;
})();
var statearr_31035_31106 = state_30997__$1;
(statearr_31035_31106[(2)] = null);

(statearr_31035_31106[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (43))){
var state_30997__$1 = state_30997;
var statearr_31036_31107 = state_30997__$1;
(statearr_31036_31107[(2)] = null);

(statearr_31036_31107[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (29))){
var inst_30981 = (state_30997[(2)]);
var state_30997__$1 = state_30997;
var statearr_31037_31108 = state_30997__$1;
(statearr_31037_31108[(2)] = inst_30981);

(statearr_31037_31108[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (44))){
var inst_30990 = (state_30997[(2)]);
var state_30997__$1 = (function (){var statearr_31038 = state_30997;
(statearr_31038[(28)] = inst_30990);

return statearr_31038;
})();
var statearr_31039_31109 = state_30997__$1;
(statearr_31039_31109[(2)] = null);

(statearr_31039_31109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (6))){
var inst_30929 = (state_30997[(29)]);
var inst_30928 = cljs.core.deref.call(null,cs);
var inst_30929__$1 = cljs.core.keys.call(null,inst_30928);
var inst_30930 = cljs.core.count.call(null,inst_30929__$1);
var inst_30931 = cljs.core.reset_BANG_.call(null,dctr,inst_30930);
var inst_30936 = cljs.core.seq.call(null,inst_30929__$1);
var inst_30937 = inst_30936;
var inst_30938 = null;
var inst_30939 = (0);
var inst_30940 = (0);
var state_30997__$1 = (function (){var statearr_31040 = state_30997;
(statearr_31040[(30)] = inst_30931);

(statearr_31040[(29)] = inst_30929__$1);

(statearr_31040[(9)] = inst_30938);

(statearr_31040[(20)] = inst_30937);

(statearr_31040[(21)] = inst_30939);

(statearr_31040[(12)] = inst_30940);

return statearr_31040;
})();
var statearr_31041_31110 = state_30997__$1;
(statearr_31041_31110[(2)] = null);

(statearr_31041_31110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (28))){
var inst_30937 = (state_30997[(20)]);
var inst_30956 = (state_30997[(25)]);
var inst_30956__$1 = cljs.core.seq.call(null,inst_30937);
var state_30997__$1 = (function (){var statearr_31042 = state_30997;
(statearr_31042[(25)] = inst_30956__$1);

return statearr_31042;
})();
if(inst_30956__$1){
var statearr_31043_31111 = state_30997__$1;
(statearr_31043_31111[(1)] = (33));

} else {
var statearr_31044_31112 = state_30997__$1;
(statearr_31044_31112[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (25))){
var inst_30939 = (state_30997[(21)]);
var inst_30940 = (state_30997[(12)]);
var inst_30942 = (inst_30940 < inst_30939);
var inst_30943 = inst_30942;
var state_30997__$1 = state_30997;
if(cljs.core.truth_(inst_30943)){
var statearr_31045_31113 = state_30997__$1;
(statearr_31045_31113[(1)] = (27));

} else {
var statearr_31046_31114 = state_30997__$1;
(statearr_31046_31114[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (34))){
var state_30997__$1 = state_30997;
var statearr_31047_31115 = state_30997__$1;
(statearr_31047_31115[(2)] = null);

(statearr_31047_31115[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (17))){
var state_30997__$1 = state_30997;
var statearr_31048_31116 = state_30997__$1;
(statearr_31048_31116[(2)] = null);

(statearr_31048_31116[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (3))){
var inst_30995 = (state_30997[(2)]);
var state_30997__$1 = state_30997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30997__$1,inst_30995);
} else {
if((state_val_30998 === (12))){
var inst_30924 = (state_30997[(2)]);
var state_30997__$1 = state_30997;
var statearr_31049_31117 = state_30997__$1;
(statearr_31049_31117[(2)] = inst_30924);

(statearr_31049_31117[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (2))){
var state_30997__$1 = state_30997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30997__$1,(4),ch);
} else {
if((state_val_30998 === (23))){
var state_30997__$1 = state_30997;
var statearr_31050_31118 = state_30997__$1;
(statearr_31050_31118[(2)] = null);

(statearr_31050_31118[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (35))){
var inst_30979 = (state_30997[(2)]);
var state_30997__$1 = state_30997;
var statearr_31051_31119 = state_30997__$1;
(statearr_31051_31119[(2)] = inst_30979);

(statearr_31051_31119[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (19))){
var inst_30896 = (state_30997[(7)]);
var inst_30900 = cljs.core.chunk_first.call(null,inst_30896);
var inst_30901 = cljs.core.chunk_rest.call(null,inst_30896);
var inst_30902 = cljs.core.count.call(null,inst_30900);
var inst_30874 = inst_30901;
var inst_30875 = inst_30900;
var inst_30876 = inst_30902;
var inst_30877 = (0);
var state_30997__$1 = (function (){var statearr_31052 = state_30997;
(statearr_31052[(14)] = inst_30874);

(statearr_31052[(15)] = inst_30876);

(statearr_31052[(16)] = inst_30877);

(statearr_31052[(17)] = inst_30875);

return statearr_31052;
})();
var statearr_31053_31120 = state_30997__$1;
(statearr_31053_31120[(2)] = null);

(statearr_31053_31120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (11))){
var inst_30874 = (state_30997[(14)]);
var inst_30896 = (state_30997[(7)]);
var inst_30896__$1 = cljs.core.seq.call(null,inst_30874);
var state_30997__$1 = (function (){var statearr_31054 = state_30997;
(statearr_31054[(7)] = inst_30896__$1);

return statearr_31054;
})();
if(inst_30896__$1){
var statearr_31055_31121 = state_30997__$1;
(statearr_31055_31121[(1)] = (16));

} else {
var statearr_31056_31122 = state_30997__$1;
(statearr_31056_31122[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (9))){
var inst_30926 = (state_30997[(2)]);
var state_30997__$1 = state_30997;
var statearr_31057_31123 = state_30997__$1;
(statearr_31057_31123[(2)] = inst_30926);

(statearr_31057_31123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (5))){
var inst_30872 = cljs.core.deref.call(null,cs);
var inst_30873 = cljs.core.seq.call(null,inst_30872);
var inst_30874 = inst_30873;
var inst_30875 = null;
var inst_30876 = (0);
var inst_30877 = (0);
var state_30997__$1 = (function (){var statearr_31058 = state_30997;
(statearr_31058[(14)] = inst_30874);

(statearr_31058[(15)] = inst_30876);

(statearr_31058[(16)] = inst_30877);

(statearr_31058[(17)] = inst_30875);

return statearr_31058;
})();
var statearr_31059_31124 = state_30997__$1;
(statearr_31059_31124[(2)] = null);

(statearr_31059_31124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (14))){
var state_30997__$1 = state_30997;
var statearr_31060_31125 = state_30997__$1;
(statearr_31060_31125[(2)] = null);

(statearr_31060_31125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (45))){
var inst_30987 = (state_30997[(2)]);
var state_30997__$1 = state_30997;
var statearr_31061_31126 = state_30997__$1;
(statearr_31061_31126[(2)] = inst_30987);

(statearr_31061_31126[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (26))){
var inst_30929 = (state_30997[(29)]);
var inst_30983 = (state_30997[(2)]);
var inst_30984 = cljs.core.seq.call(null,inst_30929);
var state_30997__$1 = (function (){var statearr_31062 = state_30997;
(statearr_31062[(31)] = inst_30983);

return statearr_31062;
})();
if(inst_30984){
var statearr_31063_31127 = state_30997__$1;
(statearr_31063_31127[(1)] = (42));

} else {
var statearr_31064_31128 = state_30997__$1;
(statearr_31064_31128[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (16))){
var inst_30896 = (state_30997[(7)]);
var inst_30898 = cljs.core.chunked_seq_QMARK_.call(null,inst_30896);
var state_30997__$1 = state_30997;
if(inst_30898){
var statearr_31065_31129 = state_30997__$1;
(statearr_31065_31129[(1)] = (19));

} else {
var statearr_31066_31130 = state_30997__$1;
(statearr_31066_31130[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (38))){
var inst_30976 = (state_30997[(2)]);
var state_30997__$1 = state_30997;
var statearr_31067_31131 = state_30997__$1;
(statearr_31067_31131[(2)] = inst_30976);

(statearr_31067_31131[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (30))){
var state_30997__$1 = state_30997;
var statearr_31068_31132 = state_30997__$1;
(statearr_31068_31132[(2)] = null);

(statearr_31068_31132[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (10))){
var inst_30877 = (state_30997[(16)]);
var inst_30875 = (state_30997[(17)]);
var inst_30885 = cljs.core._nth.call(null,inst_30875,inst_30877);
var inst_30886 = cljs.core.nth.call(null,inst_30885,(0),null);
var inst_30887 = cljs.core.nth.call(null,inst_30885,(1),null);
var state_30997__$1 = (function (){var statearr_31069 = state_30997;
(statearr_31069[(26)] = inst_30886);

return statearr_31069;
})();
if(cljs.core.truth_(inst_30887)){
var statearr_31070_31133 = state_30997__$1;
(statearr_31070_31133[(1)] = (13));

} else {
var statearr_31071_31134 = state_30997__$1;
(statearr_31071_31134[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (18))){
var inst_30922 = (state_30997[(2)]);
var state_30997__$1 = state_30997;
var statearr_31072_31135 = state_30997__$1;
(statearr_31072_31135[(2)] = inst_30922);

(statearr_31072_31135[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (42))){
var state_30997__$1 = state_30997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30997__$1,(45),dchan);
} else {
if((state_val_30998 === (37))){
var inst_30965 = (state_30997[(23)]);
var inst_30956 = (state_30997[(25)]);
var inst_30865 = (state_30997[(11)]);
var inst_30965__$1 = cljs.core.first.call(null,inst_30956);
var inst_30966 = cljs.core.async.put_BANG_.call(null,inst_30965__$1,inst_30865,done);
var state_30997__$1 = (function (){var statearr_31073 = state_30997;
(statearr_31073[(23)] = inst_30965__$1);

return statearr_31073;
})();
if(cljs.core.truth_(inst_30966)){
var statearr_31074_31136 = state_30997__$1;
(statearr_31074_31136[(1)] = (39));

} else {
var statearr_31075_31137 = state_30997__$1;
(statearr_31075_31137[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (8))){
var inst_30876 = (state_30997[(15)]);
var inst_30877 = (state_30997[(16)]);
var inst_30879 = (inst_30877 < inst_30876);
var inst_30880 = inst_30879;
var state_30997__$1 = state_30997;
if(cljs.core.truth_(inst_30880)){
var statearr_31076_31138 = state_30997__$1;
(statearr_31076_31138[(1)] = (10));

} else {
var statearr_31077_31139 = state_30997__$1;
(statearr_31077_31139[(1)] = (11));

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29748__auto___31085,cs,m,dchan,dctr,done))
;
return ((function (switch__29634__auto__,c__29748__auto___31085,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29635__auto__ = null;
var cljs$core$async$mult_$_state_machine__29635__auto____0 = (function (){
var statearr_31081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31081[(0)] = cljs$core$async$mult_$_state_machine__29635__auto__);

(statearr_31081[(1)] = (1));

return statearr_31081;
});
var cljs$core$async$mult_$_state_machine__29635__auto____1 = (function (state_30997){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_30997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e31082){if((e31082 instanceof Object)){
var ex__29638__auto__ = e31082;
var statearr_31083_31140 = state_30997;
(statearr_31083_31140[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31141 = state_30997;
state_30997 = G__31141;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29635__auto__ = function(state_30997){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29635__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29635__auto____1.call(this,state_30997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29635__auto____0;
cljs$core$async$mult_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29635__auto____1;
return cljs$core$async$mult_$_state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto___31085,cs,m,dchan,dctr,done))
})();
var state__29750__auto__ = (function (){var statearr_31084 = f__29749__auto__.call(null);
(statearr_31084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto___31085);

return statearr_31084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto___31085,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args31142 = [];
var len__22773__auto___31145 = arguments.length;
var i__22774__auto___31146 = (0);
while(true){
if((i__22774__auto___31146 < len__22773__auto___31145)){
args31142.push((arguments[i__22774__auto___31146]));

var G__31147 = (i__22774__auto___31146 + (1));
i__22774__auto___31146 = G__31147;
continue;
} else {
}
break;
}

var G__31144 = args31142.length;
switch (G__31144) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31142.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__22303__auto__ = (((m == null))?null:m);
var m__22304__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,m,ch);
} else {
var m__22304__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__22303__auto__ = (((m == null))?null:m);
var m__22304__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,m,ch);
} else {
var m__22304__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__22303__auto__ = (((m == null))?null:m);
var m__22304__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,m);
} else {
var m__22304__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__22303__auto__ = (((m == null))?null:m);
var m__22304__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,m,state_map);
} else {
var m__22304__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__22303__auto__ = (((m == null))?null:m);
var m__22304__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,m,mode);
} else {
var m__22304__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22780__auto__ = [];
var len__22773__auto___31159 = arguments.length;
var i__22774__auto___31160 = (0);
while(true){
if((i__22774__auto___31160 < len__22773__auto___31159)){
args__22780__auto__.push((arguments[i__22774__auto___31160]));

var G__31161 = (i__22774__auto___31160 + (1));
i__22774__auto___31160 = G__31161;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((3) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22781__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31153){
var map__31154 = p__31153;
var map__31154__$1 = ((((!((map__31154 == null)))?((((map__31154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31154):map__31154);
var opts = map__31154__$1;
var statearr_31156_31162 = state;
(statearr_31156_31162[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6503__auto__ = cljs.core.async.do_alts.call(null,((function (map__31154,map__31154__$1,opts){
return (function (val){
var statearr_31157_31163 = state;
(statearr_31157_31163[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31154,map__31154__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6503__auto__)){
var cb = temp__6503__auto__;
var statearr_31158_31164 = state;
(statearr_31158_31164[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31149){
var G__31150 = cljs.core.first.call(null,seq31149);
var seq31149__$1 = cljs.core.next.call(null,seq31149);
var G__31151 = cljs.core.first.call(null,seq31149__$1);
var seq31149__$2 = cljs.core.next.call(null,seq31149__$1);
var G__31152 = cljs.core.first.call(null,seq31149__$2);
var seq31149__$3 = cljs.core.next.call(null,seq31149__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31150,G__31151,G__31152,seq31149__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31330 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31330 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31331){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31331 = meta31331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31332,meta31331__$1){
var self__ = this;
var _31332__$1 = this;
return (new cljs.core.async.t_cljs$core$async31330(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31331__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31330.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31332){
var self__ = this;
var _31332__$1 = this;
return self__.meta31331;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31330.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31330.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31330.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31330.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31330.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31330.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31330.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31330.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31330.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31331","meta31331",1574058829,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31330.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31330";

cljs.core.async.t_cljs$core$async31330.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async31330");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31330 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31330(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31331){
return (new cljs.core.async.t_cljs$core$async31330(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31331));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31330(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29748__auto___31495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto___31495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto___31495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31432){
var state_val_31433 = (state_31432[(1)]);
if((state_val_31433 === (7))){
var inst_31348 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
var statearr_31434_31496 = state_31432__$1;
(statearr_31434_31496[(2)] = inst_31348);

(statearr_31434_31496[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (20))){
var inst_31360 = (state_31432[(7)]);
var state_31432__$1 = state_31432;
var statearr_31435_31497 = state_31432__$1;
(statearr_31435_31497[(2)] = inst_31360);

(statearr_31435_31497[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (27))){
var state_31432__$1 = state_31432;
var statearr_31436_31498 = state_31432__$1;
(statearr_31436_31498[(2)] = null);

(statearr_31436_31498[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (1))){
var inst_31336 = (state_31432[(8)]);
var inst_31336__$1 = calc_state.call(null);
var inst_31338 = (inst_31336__$1 == null);
var inst_31339 = cljs.core.not.call(null,inst_31338);
var state_31432__$1 = (function (){var statearr_31437 = state_31432;
(statearr_31437[(8)] = inst_31336__$1);

return statearr_31437;
})();
if(inst_31339){
var statearr_31438_31499 = state_31432__$1;
(statearr_31438_31499[(1)] = (2));

} else {
var statearr_31439_31500 = state_31432__$1;
(statearr_31439_31500[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (24))){
var inst_31392 = (state_31432[(9)]);
var inst_31383 = (state_31432[(10)]);
var inst_31406 = (state_31432[(11)]);
var inst_31406__$1 = inst_31383.call(null,inst_31392);
var state_31432__$1 = (function (){var statearr_31440 = state_31432;
(statearr_31440[(11)] = inst_31406__$1);

return statearr_31440;
})();
if(cljs.core.truth_(inst_31406__$1)){
var statearr_31441_31501 = state_31432__$1;
(statearr_31441_31501[(1)] = (29));

} else {
var statearr_31442_31502 = state_31432__$1;
(statearr_31442_31502[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (4))){
var inst_31351 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
if(cljs.core.truth_(inst_31351)){
var statearr_31443_31503 = state_31432__$1;
(statearr_31443_31503[(1)] = (8));

} else {
var statearr_31444_31504 = state_31432__$1;
(statearr_31444_31504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (15))){
var inst_31377 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
if(cljs.core.truth_(inst_31377)){
var statearr_31445_31505 = state_31432__$1;
(statearr_31445_31505[(1)] = (19));

} else {
var statearr_31446_31506 = state_31432__$1;
(statearr_31446_31506[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (21))){
var inst_31382 = (state_31432[(12)]);
var inst_31382__$1 = (state_31432[(2)]);
var inst_31383 = cljs.core.get.call(null,inst_31382__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31384 = cljs.core.get.call(null,inst_31382__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31385 = cljs.core.get.call(null,inst_31382__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31432__$1 = (function (){var statearr_31447 = state_31432;
(statearr_31447[(13)] = inst_31384);

(statearr_31447[(10)] = inst_31383);

(statearr_31447[(12)] = inst_31382__$1);

return statearr_31447;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31432__$1,(22),inst_31385);
} else {
if((state_val_31433 === (31))){
var inst_31414 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
if(cljs.core.truth_(inst_31414)){
var statearr_31448_31507 = state_31432__$1;
(statearr_31448_31507[(1)] = (32));

} else {
var statearr_31449_31508 = state_31432__$1;
(statearr_31449_31508[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (32))){
var inst_31391 = (state_31432[(14)]);
var state_31432__$1 = state_31432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31432__$1,(35),out,inst_31391);
} else {
if((state_val_31433 === (33))){
var inst_31382 = (state_31432[(12)]);
var inst_31360 = inst_31382;
var state_31432__$1 = (function (){var statearr_31450 = state_31432;
(statearr_31450[(7)] = inst_31360);

return statearr_31450;
})();
var statearr_31451_31509 = state_31432__$1;
(statearr_31451_31509[(2)] = null);

(statearr_31451_31509[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (13))){
var inst_31360 = (state_31432[(7)]);
var inst_31367 = inst_31360.cljs$lang$protocol_mask$partition0$;
var inst_31368 = (inst_31367 & (64));
var inst_31369 = inst_31360.cljs$core$ISeq$;
var inst_31370 = (inst_31368) || (inst_31369);
var state_31432__$1 = state_31432;
if(cljs.core.truth_(inst_31370)){
var statearr_31452_31510 = state_31432__$1;
(statearr_31452_31510[(1)] = (16));

} else {
var statearr_31453_31511 = state_31432__$1;
(statearr_31453_31511[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (22))){
var inst_31392 = (state_31432[(9)]);
var inst_31391 = (state_31432[(14)]);
var inst_31390 = (state_31432[(2)]);
var inst_31391__$1 = cljs.core.nth.call(null,inst_31390,(0),null);
var inst_31392__$1 = cljs.core.nth.call(null,inst_31390,(1),null);
var inst_31393 = (inst_31391__$1 == null);
var inst_31394 = cljs.core._EQ_.call(null,inst_31392__$1,change);
var inst_31395 = (inst_31393) || (inst_31394);
var state_31432__$1 = (function (){var statearr_31454 = state_31432;
(statearr_31454[(9)] = inst_31392__$1);

(statearr_31454[(14)] = inst_31391__$1);

return statearr_31454;
})();
if(cljs.core.truth_(inst_31395)){
var statearr_31455_31512 = state_31432__$1;
(statearr_31455_31512[(1)] = (23));

} else {
var statearr_31456_31513 = state_31432__$1;
(statearr_31456_31513[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (36))){
var inst_31382 = (state_31432[(12)]);
var inst_31360 = inst_31382;
var state_31432__$1 = (function (){var statearr_31457 = state_31432;
(statearr_31457[(7)] = inst_31360);

return statearr_31457;
})();
var statearr_31458_31514 = state_31432__$1;
(statearr_31458_31514[(2)] = null);

(statearr_31458_31514[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (29))){
var inst_31406 = (state_31432[(11)]);
var state_31432__$1 = state_31432;
var statearr_31459_31515 = state_31432__$1;
(statearr_31459_31515[(2)] = inst_31406);

(statearr_31459_31515[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (6))){
var state_31432__$1 = state_31432;
var statearr_31460_31516 = state_31432__$1;
(statearr_31460_31516[(2)] = false);

(statearr_31460_31516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (28))){
var inst_31402 = (state_31432[(2)]);
var inst_31403 = calc_state.call(null);
var inst_31360 = inst_31403;
var state_31432__$1 = (function (){var statearr_31461 = state_31432;
(statearr_31461[(7)] = inst_31360);

(statearr_31461[(15)] = inst_31402);

return statearr_31461;
})();
var statearr_31462_31517 = state_31432__$1;
(statearr_31462_31517[(2)] = null);

(statearr_31462_31517[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (25))){
var inst_31428 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
var statearr_31463_31518 = state_31432__$1;
(statearr_31463_31518[(2)] = inst_31428);

(statearr_31463_31518[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (34))){
var inst_31426 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
var statearr_31464_31519 = state_31432__$1;
(statearr_31464_31519[(2)] = inst_31426);

(statearr_31464_31519[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (17))){
var state_31432__$1 = state_31432;
var statearr_31465_31520 = state_31432__$1;
(statearr_31465_31520[(2)] = false);

(statearr_31465_31520[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (3))){
var state_31432__$1 = state_31432;
var statearr_31466_31521 = state_31432__$1;
(statearr_31466_31521[(2)] = false);

(statearr_31466_31521[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (12))){
var inst_31430 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31432__$1,inst_31430);
} else {
if((state_val_31433 === (2))){
var inst_31336 = (state_31432[(8)]);
var inst_31341 = inst_31336.cljs$lang$protocol_mask$partition0$;
var inst_31342 = (inst_31341 & (64));
var inst_31343 = inst_31336.cljs$core$ISeq$;
var inst_31344 = (inst_31342) || (inst_31343);
var state_31432__$1 = state_31432;
if(cljs.core.truth_(inst_31344)){
var statearr_31467_31522 = state_31432__$1;
(statearr_31467_31522[(1)] = (5));

} else {
var statearr_31468_31523 = state_31432__$1;
(statearr_31468_31523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (23))){
var inst_31391 = (state_31432[(14)]);
var inst_31397 = (inst_31391 == null);
var state_31432__$1 = state_31432;
if(cljs.core.truth_(inst_31397)){
var statearr_31469_31524 = state_31432__$1;
(statearr_31469_31524[(1)] = (26));

} else {
var statearr_31470_31525 = state_31432__$1;
(statearr_31470_31525[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (35))){
var inst_31417 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
if(cljs.core.truth_(inst_31417)){
var statearr_31471_31526 = state_31432__$1;
(statearr_31471_31526[(1)] = (36));

} else {
var statearr_31472_31527 = state_31432__$1;
(statearr_31472_31527[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (19))){
var inst_31360 = (state_31432[(7)]);
var inst_31379 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31360);
var state_31432__$1 = state_31432;
var statearr_31473_31528 = state_31432__$1;
(statearr_31473_31528[(2)] = inst_31379);

(statearr_31473_31528[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (11))){
var inst_31360 = (state_31432[(7)]);
var inst_31364 = (inst_31360 == null);
var inst_31365 = cljs.core.not.call(null,inst_31364);
var state_31432__$1 = state_31432;
if(inst_31365){
var statearr_31474_31529 = state_31432__$1;
(statearr_31474_31529[(1)] = (13));

} else {
var statearr_31475_31530 = state_31432__$1;
(statearr_31475_31530[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (9))){
var inst_31336 = (state_31432[(8)]);
var state_31432__$1 = state_31432;
var statearr_31476_31531 = state_31432__$1;
(statearr_31476_31531[(2)] = inst_31336);

(statearr_31476_31531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (5))){
var state_31432__$1 = state_31432;
var statearr_31477_31532 = state_31432__$1;
(statearr_31477_31532[(2)] = true);

(statearr_31477_31532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (14))){
var state_31432__$1 = state_31432;
var statearr_31478_31533 = state_31432__$1;
(statearr_31478_31533[(2)] = false);

(statearr_31478_31533[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (26))){
var inst_31392 = (state_31432[(9)]);
var inst_31399 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31392);
var state_31432__$1 = state_31432;
var statearr_31479_31534 = state_31432__$1;
(statearr_31479_31534[(2)] = inst_31399);

(statearr_31479_31534[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (16))){
var state_31432__$1 = state_31432;
var statearr_31480_31535 = state_31432__$1;
(statearr_31480_31535[(2)] = true);

(statearr_31480_31535[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (38))){
var inst_31422 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
var statearr_31481_31536 = state_31432__$1;
(statearr_31481_31536[(2)] = inst_31422);

(statearr_31481_31536[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (30))){
var inst_31392 = (state_31432[(9)]);
var inst_31384 = (state_31432[(13)]);
var inst_31383 = (state_31432[(10)]);
var inst_31409 = cljs.core.empty_QMARK_.call(null,inst_31383);
var inst_31410 = inst_31384.call(null,inst_31392);
var inst_31411 = cljs.core.not.call(null,inst_31410);
var inst_31412 = (inst_31409) && (inst_31411);
var state_31432__$1 = state_31432;
var statearr_31482_31537 = state_31432__$1;
(statearr_31482_31537[(2)] = inst_31412);

(statearr_31482_31537[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (10))){
var inst_31336 = (state_31432[(8)]);
var inst_31356 = (state_31432[(2)]);
var inst_31357 = cljs.core.get.call(null,inst_31356,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31358 = cljs.core.get.call(null,inst_31356,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31359 = cljs.core.get.call(null,inst_31356,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31360 = inst_31336;
var state_31432__$1 = (function (){var statearr_31483 = state_31432;
(statearr_31483[(7)] = inst_31360);

(statearr_31483[(16)] = inst_31359);

(statearr_31483[(17)] = inst_31357);

(statearr_31483[(18)] = inst_31358);

return statearr_31483;
})();
var statearr_31484_31538 = state_31432__$1;
(statearr_31484_31538[(2)] = null);

(statearr_31484_31538[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (18))){
var inst_31374 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
var statearr_31485_31539 = state_31432__$1;
(statearr_31485_31539[(2)] = inst_31374);

(statearr_31485_31539[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (37))){
var state_31432__$1 = state_31432;
var statearr_31486_31540 = state_31432__$1;
(statearr_31486_31540[(2)] = null);

(statearr_31486_31540[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (8))){
var inst_31336 = (state_31432[(8)]);
var inst_31353 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31336);
var state_31432__$1 = state_31432;
var statearr_31487_31541 = state_31432__$1;
(statearr_31487_31541[(2)] = inst_31353);

(statearr_31487_31541[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29748__auto___31495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29634__auto__,c__29748__auto___31495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29635__auto__ = null;
var cljs$core$async$mix_$_state_machine__29635__auto____0 = (function (){
var statearr_31491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31491[(0)] = cljs$core$async$mix_$_state_machine__29635__auto__);

(statearr_31491[(1)] = (1));

return statearr_31491;
});
var cljs$core$async$mix_$_state_machine__29635__auto____1 = (function (state_31432){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_31432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e31492){if((e31492 instanceof Object)){
var ex__29638__auto__ = e31492;
var statearr_31493_31542 = state_31432;
(statearr_31493_31542[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31543 = state_31432;
state_31432 = G__31543;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29635__auto__ = function(state_31432){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29635__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29635__auto____1.call(this,state_31432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29635__auto____0;
cljs$core$async$mix_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29635__auto____1;
return cljs$core$async$mix_$_state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto___31495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29750__auto__ = (function (){var statearr_31494 = f__29749__auto__.call(null);
(statearr_31494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto___31495);

return statearr_31494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto___31495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__22303__auto__ = (((p == null))?null:p);
var m__22304__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22304__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__22303__auto__ = (((p == null))?null:p);
var m__22304__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,p,v,ch);
} else {
var m__22304__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31544 = [];
var len__22773__auto___31547 = arguments.length;
var i__22774__auto___31548 = (0);
while(true){
if((i__22774__auto___31548 < len__22773__auto___31547)){
args31544.push((arguments[i__22774__auto___31548]));

var G__31549 = (i__22774__auto___31548 + (1));
i__22774__auto___31548 = G__31549;
continue;
} else {
}
break;
}

var G__31546 = args31544.length;
switch (G__31546) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31544.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22303__auto__ = (((p == null))?null:p);
var m__22304__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,p);
} else {
var m__22304__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__22303__auto__ = (((p == null))?null:p);
var m__22304__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,p,v);
} else {
var m__22304__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args31552 = [];
var len__22773__auto___31677 = arguments.length;
var i__22774__auto___31678 = (0);
while(true){
if((i__22774__auto___31678 < len__22773__auto___31677)){
args31552.push((arguments[i__22774__auto___31678]));

var G__31679 = (i__22774__auto___31678 + (1));
i__22774__auto___31678 = G__31679;
continue;
} else {
}
break;
}

var G__31554 = args31552.length;
switch (G__31554) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31552.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21590__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21590__auto__,mults){
return (function (p1__31551_SHARP_){
if(cljs.core.truth_(p1__31551_SHARP_.call(null,topic))){
return p1__31551_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31551_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21590__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31555 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31555 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31556){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31556 = meta31556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31557,meta31556__$1){
var self__ = this;
var _31557__$1 = this;
return (new cljs.core.async.t_cljs$core$async31555(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31556__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31555.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31557){
var self__ = this;
var _31557__$1 = this;
return self__.meta31556;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31555.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31555.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31555.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31555.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31555.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6503__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6503__auto__)){
var m = temp__6503__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31555.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31555.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31555.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31556","meta31556",66110239,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31555.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31555";

cljs.core.async.t_cljs$core$async31555.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async31555");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31555 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31555(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31556){
return (new cljs.core.async.t_cljs$core$async31555(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31556));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31555(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29748__auto___31681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto___31681,mults,ensure_mult,p){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto___31681,mults,ensure_mult,p){
return (function (state_31629){
var state_val_31630 = (state_31629[(1)]);
if((state_val_31630 === (7))){
var inst_31625 = (state_31629[(2)]);
var state_31629__$1 = state_31629;
var statearr_31631_31682 = state_31629__$1;
(statearr_31631_31682[(2)] = inst_31625);

(statearr_31631_31682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (20))){
var state_31629__$1 = state_31629;
var statearr_31632_31683 = state_31629__$1;
(statearr_31632_31683[(2)] = null);

(statearr_31632_31683[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (1))){
var state_31629__$1 = state_31629;
var statearr_31633_31684 = state_31629__$1;
(statearr_31633_31684[(2)] = null);

(statearr_31633_31684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (24))){
var inst_31608 = (state_31629[(7)]);
var inst_31617 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31608);
var state_31629__$1 = state_31629;
var statearr_31634_31685 = state_31629__$1;
(statearr_31634_31685[(2)] = inst_31617);

(statearr_31634_31685[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (4))){
var inst_31560 = (state_31629[(8)]);
var inst_31560__$1 = (state_31629[(2)]);
var inst_31561 = (inst_31560__$1 == null);
var state_31629__$1 = (function (){var statearr_31635 = state_31629;
(statearr_31635[(8)] = inst_31560__$1);

return statearr_31635;
})();
if(cljs.core.truth_(inst_31561)){
var statearr_31636_31686 = state_31629__$1;
(statearr_31636_31686[(1)] = (5));

} else {
var statearr_31637_31687 = state_31629__$1;
(statearr_31637_31687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (15))){
var inst_31602 = (state_31629[(2)]);
var state_31629__$1 = state_31629;
var statearr_31638_31688 = state_31629__$1;
(statearr_31638_31688[(2)] = inst_31602);

(statearr_31638_31688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (21))){
var inst_31622 = (state_31629[(2)]);
var state_31629__$1 = (function (){var statearr_31639 = state_31629;
(statearr_31639[(9)] = inst_31622);

return statearr_31639;
})();
var statearr_31640_31689 = state_31629__$1;
(statearr_31640_31689[(2)] = null);

(statearr_31640_31689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (13))){
var inst_31584 = (state_31629[(10)]);
var inst_31586 = cljs.core.chunked_seq_QMARK_.call(null,inst_31584);
var state_31629__$1 = state_31629;
if(inst_31586){
var statearr_31641_31690 = state_31629__$1;
(statearr_31641_31690[(1)] = (16));

} else {
var statearr_31642_31691 = state_31629__$1;
(statearr_31642_31691[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (22))){
var inst_31614 = (state_31629[(2)]);
var state_31629__$1 = state_31629;
if(cljs.core.truth_(inst_31614)){
var statearr_31643_31692 = state_31629__$1;
(statearr_31643_31692[(1)] = (23));

} else {
var statearr_31644_31693 = state_31629__$1;
(statearr_31644_31693[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (6))){
var inst_31610 = (state_31629[(11)]);
var inst_31608 = (state_31629[(7)]);
var inst_31560 = (state_31629[(8)]);
var inst_31608__$1 = topic_fn.call(null,inst_31560);
var inst_31609 = cljs.core.deref.call(null,mults);
var inst_31610__$1 = cljs.core.get.call(null,inst_31609,inst_31608__$1);
var state_31629__$1 = (function (){var statearr_31645 = state_31629;
(statearr_31645[(11)] = inst_31610__$1);

(statearr_31645[(7)] = inst_31608__$1);

return statearr_31645;
})();
if(cljs.core.truth_(inst_31610__$1)){
var statearr_31646_31694 = state_31629__$1;
(statearr_31646_31694[(1)] = (19));

} else {
var statearr_31647_31695 = state_31629__$1;
(statearr_31647_31695[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (25))){
var inst_31619 = (state_31629[(2)]);
var state_31629__$1 = state_31629;
var statearr_31648_31696 = state_31629__$1;
(statearr_31648_31696[(2)] = inst_31619);

(statearr_31648_31696[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (17))){
var inst_31584 = (state_31629[(10)]);
var inst_31593 = cljs.core.first.call(null,inst_31584);
var inst_31594 = cljs.core.async.muxch_STAR_.call(null,inst_31593);
var inst_31595 = cljs.core.async.close_BANG_.call(null,inst_31594);
var inst_31596 = cljs.core.next.call(null,inst_31584);
var inst_31570 = inst_31596;
var inst_31571 = null;
var inst_31572 = (0);
var inst_31573 = (0);
var state_31629__$1 = (function (){var statearr_31649 = state_31629;
(statearr_31649[(12)] = inst_31572);

(statearr_31649[(13)] = inst_31570);

(statearr_31649[(14)] = inst_31595);

(statearr_31649[(15)] = inst_31573);

(statearr_31649[(16)] = inst_31571);

return statearr_31649;
})();
var statearr_31650_31697 = state_31629__$1;
(statearr_31650_31697[(2)] = null);

(statearr_31650_31697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (3))){
var inst_31627 = (state_31629[(2)]);
var state_31629__$1 = state_31629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31629__$1,inst_31627);
} else {
if((state_val_31630 === (12))){
var inst_31604 = (state_31629[(2)]);
var state_31629__$1 = state_31629;
var statearr_31651_31698 = state_31629__$1;
(statearr_31651_31698[(2)] = inst_31604);

(statearr_31651_31698[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (2))){
var state_31629__$1 = state_31629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31629__$1,(4),ch);
} else {
if((state_val_31630 === (23))){
var state_31629__$1 = state_31629;
var statearr_31652_31699 = state_31629__$1;
(statearr_31652_31699[(2)] = null);

(statearr_31652_31699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (19))){
var inst_31610 = (state_31629[(11)]);
var inst_31560 = (state_31629[(8)]);
var inst_31612 = cljs.core.async.muxch_STAR_.call(null,inst_31610);
var state_31629__$1 = state_31629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31629__$1,(22),inst_31612,inst_31560);
} else {
if((state_val_31630 === (11))){
var inst_31570 = (state_31629[(13)]);
var inst_31584 = (state_31629[(10)]);
var inst_31584__$1 = cljs.core.seq.call(null,inst_31570);
var state_31629__$1 = (function (){var statearr_31653 = state_31629;
(statearr_31653[(10)] = inst_31584__$1);

return statearr_31653;
})();
if(inst_31584__$1){
var statearr_31654_31700 = state_31629__$1;
(statearr_31654_31700[(1)] = (13));

} else {
var statearr_31655_31701 = state_31629__$1;
(statearr_31655_31701[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (9))){
var inst_31606 = (state_31629[(2)]);
var state_31629__$1 = state_31629;
var statearr_31656_31702 = state_31629__$1;
(statearr_31656_31702[(2)] = inst_31606);

(statearr_31656_31702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (5))){
var inst_31567 = cljs.core.deref.call(null,mults);
var inst_31568 = cljs.core.vals.call(null,inst_31567);
var inst_31569 = cljs.core.seq.call(null,inst_31568);
var inst_31570 = inst_31569;
var inst_31571 = null;
var inst_31572 = (0);
var inst_31573 = (0);
var state_31629__$1 = (function (){var statearr_31657 = state_31629;
(statearr_31657[(12)] = inst_31572);

(statearr_31657[(13)] = inst_31570);

(statearr_31657[(15)] = inst_31573);

(statearr_31657[(16)] = inst_31571);

return statearr_31657;
})();
var statearr_31658_31703 = state_31629__$1;
(statearr_31658_31703[(2)] = null);

(statearr_31658_31703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (14))){
var state_31629__$1 = state_31629;
var statearr_31662_31704 = state_31629__$1;
(statearr_31662_31704[(2)] = null);

(statearr_31662_31704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (16))){
var inst_31584 = (state_31629[(10)]);
var inst_31588 = cljs.core.chunk_first.call(null,inst_31584);
var inst_31589 = cljs.core.chunk_rest.call(null,inst_31584);
var inst_31590 = cljs.core.count.call(null,inst_31588);
var inst_31570 = inst_31589;
var inst_31571 = inst_31588;
var inst_31572 = inst_31590;
var inst_31573 = (0);
var state_31629__$1 = (function (){var statearr_31663 = state_31629;
(statearr_31663[(12)] = inst_31572);

(statearr_31663[(13)] = inst_31570);

(statearr_31663[(15)] = inst_31573);

(statearr_31663[(16)] = inst_31571);

return statearr_31663;
})();
var statearr_31664_31705 = state_31629__$1;
(statearr_31664_31705[(2)] = null);

(statearr_31664_31705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (10))){
var inst_31572 = (state_31629[(12)]);
var inst_31570 = (state_31629[(13)]);
var inst_31573 = (state_31629[(15)]);
var inst_31571 = (state_31629[(16)]);
var inst_31578 = cljs.core._nth.call(null,inst_31571,inst_31573);
var inst_31579 = cljs.core.async.muxch_STAR_.call(null,inst_31578);
var inst_31580 = cljs.core.async.close_BANG_.call(null,inst_31579);
var inst_31581 = (inst_31573 + (1));
var tmp31659 = inst_31572;
var tmp31660 = inst_31570;
var tmp31661 = inst_31571;
var inst_31570__$1 = tmp31660;
var inst_31571__$1 = tmp31661;
var inst_31572__$1 = tmp31659;
var inst_31573__$1 = inst_31581;
var state_31629__$1 = (function (){var statearr_31665 = state_31629;
(statearr_31665[(12)] = inst_31572__$1);

(statearr_31665[(13)] = inst_31570__$1);

(statearr_31665[(17)] = inst_31580);

(statearr_31665[(15)] = inst_31573__$1);

(statearr_31665[(16)] = inst_31571__$1);

return statearr_31665;
})();
var statearr_31666_31706 = state_31629__$1;
(statearr_31666_31706[(2)] = null);

(statearr_31666_31706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (18))){
var inst_31599 = (state_31629[(2)]);
var state_31629__$1 = state_31629;
var statearr_31667_31707 = state_31629__$1;
(statearr_31667_31707[(2)] = inst_31599);

(statearr_31667_31707[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (8))){
var inst_31572 = (state_31629[(12)]);
var inst_31573 = (state_31629[(15)]);
var inst_31575 = (inst_31573 < inst_31572);
var inst_31576 = inst_31575;
var state_31629__$1 = state_31629;
if(cljs.core.truth_(inst_31576)){
var statearr_31668_31708 = state_31629__$1;
(statearr_31668_31708[(1)] = (10));

} else {
var statearr_31669_31709 = state_31629__$1;
(statearr_31669_31709[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__29748__auto___31681,mults,ensure_mult,p))
;
return ((function (switch__29634__auto__,c__29748__auto___31681,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29635__auto__ = null;
var cljs$core$async$state_machine__29635__auto____0 = (function (){
var statearr_31673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31673[(0)] = cljs$core$async$state_machine__29635__auto__);

(statearr_31673[(1)] = (1));

return statearr_31673;
});
var cljs$core$async$state_machine__29635__auto____1 = (function (state_31629){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_31629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e31674){if((e31674 instanceof Object)){
var ex__29638__auto__ = e31674;
var statearr_31675_31710 = state_31629;
(statearr_31675_31710[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31711 = state_31629;
state_31629 = G__31711;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
cljs$core$async$state_machine__29635__auto__ = function(state_31629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29635__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29635__auto____1.call(this,state_31629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29635__auto____0;
cljs$core$async$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29635__auto____1;
return cljs$core$async$state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto___31681,mults,ensure_mult,p))
})();
var state__29750__auto__ = (function (){var statearr_31676 = f__29749__auto__.call(null);
(statearr_31676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto___31681);

return statearr_31676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto___31681,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args31712 = [];
var len__22773__auto___31715 = arguments.length;
var i__22774__auto___31716 = (0);
while(true){
if((i__22774__auto___31716 < len__22773__auto___31715)){
args31712.push((arguments[i__22774__auto___31716]));

var G__31717 = (i__22774__auto___31716 + (1));
i__22774__auto___31716 = G__31717;
continue;
} else {
}
break;
}

var G__31714 = args31712.length;
switch (G__31714) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31712.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args31719 = [];
var len__22773__auto___31722 = arguments.length;
var i__22774__auto___31723 = (0);
while(true){
if((i__22774__auto___31723 < len__22773__auto___31722)){
args31719.push((arguments[i__22774__auto___31723]));

var G__31724 = (i__22774__auto___31723 + (1));
i__22774__auto___31723 = G__31724;
continue;
} else {
}
break;
}

var G__31721 = args31719.length;
switch (G__31721) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31719.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args31726 = [];
var len__22773__auto___31797 = arguments.length;
var i__22774__auto___31798 = (0);
while(true){
if((i__22774__auto___31798 < len__22773__auto___31797)){
args31726.push((arguments[i__22774__auto___31798]));

var G__31799 = (i__22774__auto___31798 + (1));
i__22774__auto___31798 = G__31799;
continue;
} else {
}
break;
}

var G__31728 = args31726.length;
switch (G__31728) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31726.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29748__auto___31801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto___31801,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto___31801,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31767){
var state_val_31768 = (state_31767[(1)]);
if((state_val_31768 === (7))){
var state_31767__$1 = state_31767;
var statearr_31769_31802 = state_31767__$1;
(statearr_31769_31802[(2)] = null);

(statearr_31769_31802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (1))){
var state_31767__$1 = state_31767;
var statearr_31770_31803 = state_31767__$1;
(statearr_31770_31803[(2)] = null);

(statearr_31770_31803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (4))){
var inst_31731 = (state_31767[(7)]);
var inst_31733 = (inst_31731 < cnt);
var state_31767__$1 = state_31767;
if(cljs.core.truth_(inst_31733)){
var statearr_31771_31804 = state_31767__$1;
(statearr_31771_31804[(1)] = (6));

} else {
var statearr_31772_31805 = state_31767__$1;
(statearr_31772_31805[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (15))){
var inst_31763 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
var statearr_31773_31806 = state_31767__$1;
(statearr_31773_31806[(2)] = inst_31763);

(statearr_31773_31806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (13))){
var inst_31756 = cljs.core.async.close_BANG_.call(null,out);
var state_31767__$1 = state_31767;
var statearr_31774_31807 = state_31767__$1;
(statearr_31774_31807[(2)] = inst_31756);

(statearr_31774_31807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (6))){
var state_31767__$1 = state_31767;
var statearr_31775_31808 = state_31767__$1;
(statearr_31775_31808[(2)] = null);

(statearr_31775_31808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (3))){
var inst_31765 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31767__$1,inst_31765);
} else {
if((state_val_31768 === (12))){
var inst_31753 = (state_31767[(8)]);
var inst_31753__$1 = (state_31767[(2)]);
var inst_31754 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31753__$1);
var state_31767__$1 = (function (){var statearr_31776 = state_31767;
(statearr_31776[(8)] = inst_31753__$1);

return statearr_31776;
})();
if(cljs.core.truth_(inst_31754)){
var statearr_31777_31809 = state_31767__$1;
(statearr_31777_31809[(1)] = (13));

} else {
var statearr_31778_31810 = state_31767__$1;
(statearr_31778_31810[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (2))){
var inst_31730 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31731 = (0);
var state_31767__$1 = (function (){var statearr_31779 = state_31767;
(statearr_31779[(7)] = inst_31731);

(statearr_31779[(9)] = inst_31730);

return statearr_31779;
})();
var statearr_31780_31811 = state_31767__$1;
(statearr_31780_31811[(2)] = null);

(statearr_31780_31811[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (11))){
var inst_31731 = (state_31767[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31767,(10),Object,null,(9));
var inst_31740 = chs__$1.call(null,inst_31731);
var inst_31741 = done.call(null,inst_31731);
var inst_31742 = cljs.core.async.take_BANG_.call(null,inst_31740,inst_31741);
var state_31767__$1 = state_31767;
var statearr_31781_31812 = state_31767__$1;
(statearr_31781_31812[(2)] = inst_31742);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31767__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (9))){
var inst_31731 = (state_31767[(7)]);
var inst_31744 = (state_31767[(2)]);
var inst_31745 = (inst_31731 + (1));
var inst_31731__$1 = inst_31745;
var state_31767__$1 = (function (){var statearr_31782 = state_31767;
(statearr_31782[(7)] = inst_31731__$1);

(statearr_31782[(10)] = inst_31744);

return statearr_31782;
})();
var statearr_31783_31813 = state_31767__$1;
(statearr_31783_31813[(2)] = null);

(statearr_31783_31813[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (5))){
var inst_31751 = (state_31767[(2)]);
var state_31767__$1 = (function (){var statearr_31784 = state_31767;
(statearr_31784[(11)] = inst_31751);

return statearr_31784;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31767__$1,(12),dchan);
} else {
if((state_val_31768 === (14))){
var inst_31753 = (state_31767[(8)]);
var inst_31758 = cljs.core.apply.call(null,f,inst_31753);
var state_31767__$1 = state_31767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31767__$1,(16),out,inst_31758);
} else {
if((state_val_31768 === (16))){
var inst_31760 = (state_31767[(2)]);
var state_31767__$1 = (function (){var statearr_31785 = state_31767;
(statearr_31785[(12)] = inst_31760);

return statearr_31785;
})();
var statearr_31786_31814 = state_31767__$1;
(statearr_31786_31814[(2)] = null);

(statearr_31786_31814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (10))){
var inst_31735 = (state_31767[(2)]);
var inst_31736 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31767__$1 = (function (){var statearr_31787 = state_31767;
(statearr_31787[(13)] = inst_31735);

return statearr_31787;
})();
var statearr_31788_31815 = state_31767__$1;
(statearr_31788_31815[(2)] = inst_31736);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31767__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (8))){
var inst_31749 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
var statearr_31789_31816 = state_31767__$1;
(statearr_31789_31816[(2)] = inst_31749);

(statearr_31789_31816[(1)] = (5));


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
});})(c__29748__auto___31801,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29634__auto__,c__29748__auto___31801,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29635__auto__ = null;
var cljs$core$async$state_machine__29635__auto____0 = (function (){
var statearr_31793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31793[(0)] = cljs$core$async$state_machine__29635__auto__);

(statearr_31793[(1)] = (1));

return statearr_31793;
});
var cljs$core$async$state_machine__29635__auto____1 = (function (state_31767){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_31767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e31794){if((e31794 instanceof Object)){
var ex__29638__auto__ = e31794;
var statearr_31795_31817 = state_31767;
(statearr_31795_31817[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31818 = state_31767;
state_31767 = G__31818;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
cljs$core$async$state_machine__29635__auto__ = function(state_31767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29635__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29635__auto____1.call(this,state_31767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29635__auto____0;
cljs$core$async$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29635__auto____1;
return cljs$core$async$state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto___31801,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29750__auto__ = (function (){var statearr_31796 = f__29749__auto__.call(null);
(statearr_31796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto___31801);

return statearr_31796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto___31801,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args31820 = [];
var len__22773__auto___31878 = arguments.length;
var i__22774__auto___31879 = (0);
while(true){
if((i__22774__auto___31879 < len__22773__auto___31878)){
args31820.push((arguments[i__22774__auto___31879]));

var G__31880 = (i__22774__auto___31879 + (1));
i__22774__auto___31879 = G__31880;
continue;
} else {
}
break;
}

var G__31822 = args31820.length;
switch (G__31822) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31820.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29748__auto___31882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto___31882,out){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto___31882,out){
return (function (state_31854){
var state_val_31855 = (state_31854[(1)]);
if((state_val_31855 === (7))){
var inst_31834 = (state_31854[(7)]);
var inst_31833 = (state_31854[(8)]);
var inst_31833__$1 = (state_31854[(2)]);
var inst_31834__$1 = cljs.core.nth.call(null,inst_31833__$1,(0),null);
var inst_31835 = cljs.core.nth.call(null,inst_31833__$1,(1),null);
var inst_31836 = (inst_31834__$1 == null);
var state_31854__$1 = (function (){var statearr_31856 = state_31854;
(statearr_31856[(7)] = inst_31834__$1);

(statearr_31856[(8)] = inst_31833__$1);

(statearr_31856[(9)] = inst_31835);

return statearr_31856;
})();
if(cljs.core.truth_(inst_31836)){
var statearr_31857_31883 = state_31854__$1;
(statearr_31857_31883[(1)] = (8));

} else {
var statearr_31858_31884 = state_31854__$1;
(statearr_31858_31884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (1))){
var inst_31823 = cljs.core.vec.call(null,chs);
var inst_31824 = inst_31823;
var state_31854__$1 = (function (){var statearr_31859 = state_31854;
(statearr_31859[(10)] = inst_31824);

return statearr_31859;
})();
var statearr_31860_31885 = state_31854__$1;
(statearr_31860_31885[(2)] = null);

(statearr_31860_31885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (4))){
var inst_31824 = (state_31854[(10)]);
var state_31854__$1 = state_31854;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31854__$1,(7),inst_31824);
} else {
if((state_val_31855 === (6))){
var inst_31850 = (state_31854[(2)]);
var state_31854__$1 = state_31854;
var statearr_31861_31886 = state_31854__$1;
(statearr_31861_31886[(2)] = inst_31850);

(statearr_31861_31886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (3))){
var inst_31852 = (state_31854[(2)]);
var state_31854__$1 = state_31854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31854__$1,inst_31852);
} else {
if((state_val_31855 === (2))){
var inst_31824 = (state_31854[(10)]);
var inst_31826 = cljs.core.count.call(null,inst_31824);
var inst_31827 = (inst_31826 > (0));
var state_31854__$1 = state_31854;
if(cljs.core.truth_(inst_31827)){
var statearr_31863_31887 = state_31854__$1;
(statearr_31863_31887[(1)] = (4));

} else {
var statearr_31864_31888 = state_31854__$1;
(statearr_31864_31888[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (11))){
var inst_31824 = (state_31854[(10)]);
var inst_31843 = (state_31854[(2)]);
var tmp31862 = inst_31824;
var inst_31824__$1 = tmp31862;
var state_31854__$1 = (function (){var statearr_31865 = state_31854;
(statearr_31865[(10)] = inst_31824__$1);

(statearr_31865[(11)] = inst_31843);

return statearr_31865;
})();
var statearr_31866_31889 = state_31854__$1;
(statearr_31866_31889[(2)] = null);

(statearr_31866_31889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (9))){
var inst_31834 = (state_31854[(7)]);
var state_31854__$1 = state_31854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31854__$1,(11),out,inst_31834);
} else {
if((state_val_31855 === (5))){
var inst_31848 = cljs.core.async.close_BANG_.call(null,out);
var state_31854__$1 = state_31854;
var statearr_31867_31890 = state_31854__$1;
(statearr_31867_31890[(2)] = inst_31848);

(statearr_31867_31890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (10))){
var inst_31846 = (state_31854[(2)]);
var state_31854__$1 = state_31854;
var statearr_31868_31891 = state_31854__$1;
(statearr_31868_31891[(2)] = inst_31846);

(statearr_31868_31891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (8))){
var inst_31834 = (state_31854[(7)]);
var inst_31824 = (state_31854[(10)]);
var inst_31833 = (state_31854[(8)]);
var inst_31835 = (state_31854[(9)]);
var inst_31838 = (function (){var cs = inst_31824;
var vec__31829 = inst_31833;
var v = inst_31834;
var c = inst_31835;
return ((function (cs,vec__31829,v,c,inst_31834,inst_31824,inst_31833,inst_31835,state_val_31855,c__29748__auto___31882,out){
return (function (p1__31819_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31819_SHARP_);
});
;})(cs,vec__31829,v,c,inst_31834,inst_31824,inst_31833,inst_31835,state_val_31855,c__29748__auto___31882,out))
})();
var inst_31839 = cljs.core.filterv.call(null,inst_31838,inst_31824);
var inst_31824__$1 = inst_31839;
var state_31854__$1 = (function (){var statearr_31869 = state_31854;
(statearr_31869[(10)] = inst_31824__$1);

return statearr_31869;
})();
var statearr_31870_31892 = state_31854__$1;
(statearr_31870_31892[(2)] = null);

(statearr_31870_31892[(1)] = (2));


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
});})(c__29748__auto___31882,out))
;
return ((function (switch__29634__auto__,c__29748__auto___31882,out){
return (function() {
var cljs$core$async$state_machine__29635__auto__ = null;
var cljs$core$async$state_machine__29635__auto____0 = (function (){
var statearr_31874 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31874[(0)] = cljs$core$async$state_machine__29635__auto__);

(statearr_31874[(1)] = (1));

return statearr_31874;
});
var cljs$core$async$state_machine__29635__auto____1 = (function (state_31854){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_31854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e31875){if((e31875 instanceof Object)){
var ex__29638__auto__ = e31875;
var statearr_31876_31893 = state_31854;
(statearr_31876_31893[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31894 = state_31854;
state_31854 = G__31894;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
cljs$core$async$state_machine__29635__auto__ = function(state_31854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29635__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29635__auto____1.call(this,state_31854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29635__auto____0;
cljs$core$async$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29635__auto____1;
return cljs$core$async$state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto___31882,out))
})();
var state__29750__auto__ = (function (){var statearr_31877 = f__29749__auto__.call(null);
(statearr_31877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto___31882);

return statearr_31877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto___31882,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args31895 = [];
var len__22773__auto___31944 = arguments.length;
var i__22774__auto___31945 = (0);
while(true){
if((i__22774__auto___31945 < len__22773__auto___31944)){
args31895.push((arguments[i__22774__auto___31945]));

var G__31946 = (i__22774__auto___31945 + (1));
i__22774__auto___31945 = G__31946;
continue;
} else {
}
break;
}

var G__31897 = args31895.length;
switch (G__31897) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31895.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29748__auto___31948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto___31948,out){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto___31948,out){
return (function (state_31921){
var state_val_31922 = (state_31921[(1)]);
if((state_val_31922 === (7))){
var inst_31903 = (state_31921[(7)]);
var inst_31903__$1 = (state_31921[(2)]);
var inst_31904 = (inst_31903__$1 == null);
var inst_31905 = cljs.core.not.call(null,inst_31904);
var state_31921__$1 = (function (){var statearr_31923 = state_31921;
(statearr_31923[(7)] = inst_31903__$1);

return statearr_31923;
})();
if(inst_31905){
var statearr_31924_31949 = state_31921__$1;
(statearr_31924_31949[(1)] = (8));

} else {
var statearr_31925_31950 = state_31921__$1;
(statearr_31925_31950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (1))){
var inst_31898 = (0);
var state_31921__$1 = (function (){var statearr_31926 = state_31921;
(statearr_31926[(8)] = inst_31898);

return statearr_31926;
})();
var statearr_31927_31951 = state_31921__$1;
(statearr_31927_31951[(2)] = null);

(statearr_31927_31951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (4))){
var state_31921__$1 = state_31921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31921__$1,(7),ch);
} else {
if((state_val_31922 === (6))){
var inst_31916 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_31928_31952 = state_31921__$1;
(statearr_31928_31952[(2)] = inst_31916);

(statearr_31928_31952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (3))){
var inst_31918 = (state_31921[(2)]);
var inst_31919 = cljs.core.async.close_BANG_.call(null,out);
var state_31921__$1 = (function (){var statearr_31929 = state_31921;
(statearr_31929[(9)] = inst_31918);

return statearr_31929;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31921__$1,inst_31919);
} else {
if((state_val_31922 === (2))){
var inst_31898 = (state_31921[(8)]);
var inst_31900 = (inst_31898 < n);
var state_31921__$1 = state_31921;
if(cljs.core.truth_(inst_31900)){
var statearr_31930_31953 = state_31921__$1;
(statearr_31930_31953[(1)] = (4));

} else {
var statearr_31931_31954 = state_31921__$1;
(statearr_31931_31954[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (11))){
var inst_31898 = (state_31921[(8)]);
var inst_31908 = (state_31921[(2)]);
var inst_31909 = (inst_31898 + (1));
var inst_31898__$1 = inst_31909;
var state_31921__$1 = (function (){var statearr_31932 = state_31921;
(statearr_31932[(8)] = inst_31898__$1);

(statearr_31932[(10)] = inst_31908);

return statearr_31932;
})();
var statearr_31933_31955 = state_31921__$1;
(statearr_31933_31955[(2)] = null);

(statearr_31933_31955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (9))){
var state_31921__$1 = state_31921;
var statearr_31934_31956 = state_31921__$1;
(statearr_31934_31956[(2)] = null);

(statearr_31934_31956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (5))){
var state_31921__$1 = state_31921;
var statearr_31935_31957 = state_31921__$1;
(statearr_31935_31957[(2)] = null);

(statearr_31935_31957[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (10))){
var inst_31913 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_31936_31958 = state_31921__$1;
(statearr_31936_31958[(2)] = inst_31913);

(statearr_31936_31958[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (8))){
var inst_31903 = (state_31921[(7)]);
var state_31921__$1 = state_31921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31921__$1,(11),out,inst_31903);
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
});})(c__29748__auto___31948,out))
;
return ((function (switch__29634__auto__,c__29748__auto___31948,out){
return (function() {
var cljs$core$async$state_machine__29635__auto__ = null;
var cljs$core$async$state_machine__29635__auto____0 = (function (){
var statearr_31940 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31940[(0)] = cljs$core$async$state_machine__29635__auto__);

(statearr_31940[(1)] = (1));

return statearr_31940;
});
var cljs$core$async$state_machine__29635__auto____1 = (function (state_31921){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_31921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e31941){if((e31941 instanceof Object)){
var ex__29638__auto__ = e31941;
var statearr_31942_31959 = state_31921;
(statearr_31942_31959[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31960 = state_31921;
state_31921 = G__31960;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
cljs$core$async$state_machine__29635__auto__ = function(state_31921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29635__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29635__auto____1.call(this,state_31921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29635__auto____0;
cljs$core$async$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29635__auto____1;
return cljs$core$async$state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto___31948,out))
})();
var state__29750__auto__ = (function (){var statearr_31943 = f__29749__auto__.call(null);
(statearr_31943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto___31948);

return statearr_31943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto___31948,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31968 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31968 = (function (map_LT_,f,ch,meta31969){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31969 = meta31969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31970,meta31969__$1){
var self__ = this;
var _31970__$1 = this;
return (new cljs.core.async.t_cljs$core$async31968(self__.map_LT_,self__.f,self__.ch,meta31969__$1));
});

cljs.core.async.t_cljs$core$async31968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31970){
var self__ = this;
var _31970__$1 = this;
return self__.meta31969;
});

cljs.core.async.t_cljs$core$async31968.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31968.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31968.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31968.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31968.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31971 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31971 = (function (map_LT_,f,ch,meta31969,_,fn1,meta31972){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31969 = meta31969;
this._ = _;
this.fn1 = fn1;
this.meta31972 = meta31972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31973,meta31972__$1){
var self__ = this;
var _31973__$1 = this;
return (new cljs.core.async.t_cljs$core$async31971(self__.map_LT_,self__.f,self__.ch,self__.meta31969,self__._,self__.fn1,meta31972__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31973){
var self__ = this;
var _31973__$1 = this;
return self__.meta31972;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31971.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31971.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31961_SHARP_){
return f1.call(null,(((p1__31961_SHARP_ == null))?null:self__.f.call(null,p1__31961_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31971.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31969","meta31969",-1898415112,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31968","cljs.core.async/t_cljs$core$async31968",-1305808554,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31972","meta31972",-1381373378,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31971.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31971";

cljs.core.async.t_cljs$core$async31971.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async31971");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31971 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31971(map_LT___$1,f__$1,ch__$1,meta31969__$1,___$2,fn1__$1,meta31972){
return (new cljs.core.async.t_cljs$core$async31971(map_LT___$1,f__$1,ch__$1,meta31969__$1,___$2,fn1__$1,meta31972));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31971(self__.map_LT_,self__.f,self__.ch,self__.meta31969,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21578__auto__ = ret;
if(cljs.core.truth_(and__21578__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21578__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31968.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31968.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31969","meta31969",-1898415112,null)], null);
});

cljs.core.async.t_cljs$core$async31968.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31968";

cljs.core.async.t_cljs$core$async31968.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async31968");
});

cljs.core.async.__GT_t_cljs$core$async31968 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31968(map_LT___$1,f__$1,ch__$1,meta31969){
return (new cljs.core.async.t_cljs$core$async31968(map_LT___$1,f__$1,ch__$1,meta31969));
});

}

return (new cljs.core.async.t_cljs$core$async31968(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31977 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31977 = (function (map_GT_,f,ch,meta31978){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31978 = meta31978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31979,meta31978__$1){
var self__ = this;
var _31979__$1 = this;
return (new cljs.core.async.t_cljs$core$async31977(self__.map_GT_,self__.f,self__.ch,meta31978__$1));
});

cljs.core.async.t_cljs$core$async31977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31979){
var self__ = this;
var _31979__$1 = this;
return self__.meta31978;
});

cljs.core.async.t_cljs$core$async31977.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31977.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31977.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31977.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31977.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31977.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31978","meta31978",811973874,null)], null);
});

cljs.core.async.t_cljs$core$async31977.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31977";

cljs.core.async.t_cljs$core$async31977.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async31977");
});

cljs.core.async.__GT_t_cljs$core$async31977 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31977(map_GT___$1,f__$1,ch__$1,meta31978){
return (new cljs.core.async.t_cljs$core$async31977(map_GT___$1,f__$1,ch__$1,meta31978));
});

}

return (new cljs.core.async.t_cljs$core$async31977(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31983 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31983 = (function (filter_GT_,p,ch,meta31984){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31984 = meta31984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31985,meta31984__$1){
var self__ = this;
var _31985__$1 = this;
return (new cljs.core.async.t_cljs$core$async31983(self__.filter_GT_,self__.p,self__.ch,meta31984__$1));
});

cljs.core.async.t_cljs$core$async31983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31985){
var self__ = this;
var _31985__$1 = this;
return self__.meta31984;
});

cljs.core.async.t_cljs$core$async31983.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31983.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31983.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31983.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31983.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31983.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31983.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31983.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31984","meta31984",978592901,null)], null);
});

cljs.core.async.t_cljs$core$async31983.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31983.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31983";

cljs.core.async.t_cljs$core$async31983.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.core.async/t_cljs$core$async31983");
});

cljs.core.async.__GT_t_cljs$core$async31983 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31983(filter_GT___$1,p__$1,ch__$1,meta31984){
return (new cljs.core.async.t_cljs$core$async31983(filter_GT___$1,p__$1,ch__$1,meta31984));
});

}

return (new cljs.core.async.t_cljs$core$async31983(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args31986 = [];
var len__22773__auto___32030 = arguments.length;
var i__22774__auto___32031 = (0);
while(true){
if((i__22774__auto___32031 < len__22773__auto___32030)){
args31986.push((arguments[i__22774__auto___32031]));

var G__32032 = (i__22774__auto___32031 + (1));
i__22774__auto___32031 = G__32032;
continue;
} else {
}
break;
}

var G__31988 = args31986.length;
switch (G__31988) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31986.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29748__auto___32034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto___32034,out){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto___32034,out){
return (function (state_32009){
var state_val_32010 = (state_32009[(1)]);
if((state_val_32010 === (7))){
var inst_32005 = (state_32009[(2)]);
var state_32009__$1 = state_32009;
var statearr_32011_32035 = state_32009__$1;
(statearr_32011_32035[(2)] = inst_32005);

(statearr_32011_32035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (1))){
var state_32009__$1 = state_32009;
var statearr_32012_32036 = state_32009__$1;
(statearr_32012_32036[(2)] = null);

(statearr_32012_32036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (4))){
var inst_31991 = (state_32009[(7)]);
var inst_31991__$1 = (state_32009[(2)]);
var inst_31992 = (inst_31991__$1 == null);
var state_32009__$1 = (function (){var statearr_32013 = state_32009;
(statearr_32013[(7)] = inst_31991__$1);

return statearr_32013;
})();
if(cljs.core.truth_(inst_31992)){
var statearr_32014_32037 = state_32009__$1;
(statearr_32014_32037[(1)] = (5));

} else {
var statearr_32015_32038 = state_32009__$1;
(statearr_32015_32038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (6))){
var inst_31991 = (state_32009[(7)]);
var inst_31996 = p.call(null,inst_31991);
var state_32009__$1 = state_32009;
if(cljs.core.truth_(inst_31996)){
var statearr_32016_32039 = state_32009__$1;
(statearr_32016_32039[(1)] = (8));

} else {
var statearr_32017_32040 = state_32009__$1;
(statearr_32017_32040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (3))){
var inst_32007 = (state_32009[(2)]);
var state_32009__$1 = state_32009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32009__$1,inst_32007);
} else {
if((state_val_32010 === (2))){
var state_32009__$1 = state_32009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32009__$1,(4),ch);
} else {
if((state_val_32010 === (11))){
var inst_31999 = (state_32009[(2)]);
var state_32009__$1 = state_32009;
var statearr_32018_32041 = state_32009__$1;
(statearr_32018_32041[(2)] = inst_31999);

(statearr_32018_32041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (9))){
var state_32009__$1 = state_32009;
var statearr_32019_32042 = state_32009__$1;
(statearr_32019_32042[(2)] = null);

(statearr_32019_32042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (5))){
var inst_31994 = cljs.core.async.close_BANG_.call(null,out);
var state_32009__$1 = state_32009;
var statearr_32020_32043 = state_32009__$1;
(statearr_32020_32043[(2)] = inst_31994);

(statearr_32020_32043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (10))){
var inst_32002 = (state_32009[(2)]);
var state_32009__$1 = (function (){var statearr_32021 = state_32009;
(statearr_32021[(8)] = inst_32002);

return statearr_32021;
})();
var statearr_32022_32044 = state_32009__$1;
(statearr_32022_32044[(2)] = null);

(statearr_32022_32044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (8))){
var inst_31991 = (state_32009[(7)]);
var state_32009__$1 = state_32009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32009__$1,(11),out,inst_31991);
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
});})(c__29748__auto___32034,out))
;
return ((function (switch__29634__auto__,c__29748__auto___32034,out){
return (function() {
var cljs$core$async$state_machine__29635__auto__ = null;
var cljs$core$async$state_machine__29635__auto____0 = (function (){
var statearr_32026 = [null,null,null,null,null,null,null,null,null];
(statearr_32026[(0)] = cljs$core$async$state_machine__29635__auto__);

(statearr_32026[(1)] = (1));

return statearr_32026;
});
var cljs$core$async$state_machine__29635__auto____1 = (function (state_32009){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_32009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e32027){if((e32027 instanceof Object)){
var ex__29638__auto__ = e32027;
var statearr_32028_32045 = state_32009;
(statearr_32028_32045[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32046 = state_32009;
state_32009 = G__32046;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
cljs$core$async$state_machine__29635__auto__ = function(state_32009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29635__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29635__auto____1.call(this,state_32009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29635__auto____0;
cljs$core$async$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29635__auto____1;
return cljs$core$async$state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto___32034,out))
})();
var state__29750__auto__ = (function (){var statearr_32029 = f__29749__auto__.call(null);
(statearr_32029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto___32034);

return statearr_32029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto___32034,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32047 = [];
var len__22773__auto___32050 = arguments.length;
var i__22774__auto___32051 = (0);
while(true){
if((i__22774__auto___32051 < len__22773__auto___32050)){
args32047.push((arguments[i__22774__auto___32051]));

var G__32052 = (i__22774__auto___32051 + (1));
i__22774__auto___32051 = G__32052;
continue;
} else {
}
break;
}

var G__32049 = args32047.length;
switch (G__32049) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32047.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto__){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto__){
return (function (state_32219){
var state_val_32220 = (state_32219[(1)]);
if((state_val_32220 === (7))){
var inst_32215 = (state_32219[(2)]);
var state_32219__$1 = state_32219;
var statearr_32221_32262 = state_32219__$1;
(statearr_32221_32262[(2)] = inst_32215);

(statearr_32221_32262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (20))){
var inst_32185 = (state_32219[(7)]);
var inst_32196 = (state_32219[(2)]);
var inst_32197 = cljs.core.next.call(null,inst_32185);
var inst_32171 = inst_32197;
var inst_32172 = null;
var inst_32173 = (0);
var inst_32174 = (0);
var state_32219__$1 = (function (){var statearr_32222 = state_32219;
(statearr_32222[(8)] = inst_32173);

(statearr_32222[(9)] = inst_32196);

(statearr_32222[(10)] = inst_32174);

(statearr_32222[(11)] = inst_32171);

(statearr_32222[(12)] = inst_32172);

return statearr_32222;
})();
var statearr_32223_32263 = state_32219__$1;
(statearr_32223_32263[(2)] = null);

(statearr_32223_32263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (1))){
var state_32219__$1 = state_32219;
var statearr_32224_32264 = state_32219__$1;
(statearr_32224_32264[(2)] = null);

(statearr_32224_32264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (4))){
var inst_32160 = (state_32219[(13)]);
var inst_32160__$1 = (state_32219[(2)]);
var inst_32161 = (inst_32160__$1 == null);
var state_32219__$1 = (function (){var statearr_32225 = state_32219;
(statearr_32225[(13)] = inst_32160__$1);

return statearr_32225;
})();
if(cljs.core.truth_(inst_32161)){
var statearr_32226_32265 = state_32219__$1;
(statearr_32226_32265[(1)] = (5));

} else {
var statearr_32227_32266 = state_32219__$1;
(statearr_32227_32266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (15))){
var state_32219__$1 = state_32219;
var statearr_32231_32267 = state_32219__$1;
(statearr_32231_32267[(2)] = null);

(statearr_32231_32267[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (21))){
var state_32219__$1 = state_32219;
var statearr_32232_32268 = state_32219__$1;
(statearr_32232_32268[(2)] = null);

(statearr_32232_32268[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (13))){
var inst_32173 = (state_32219[(8)]);
var inst_32174 = (state_32219[(10)]);
var inst_32171 = (state_32219[(11)]);
var inst_32172 = (state_32219[(12)]);
var inst_32181 = (state_32219[(2)]);
var inst_32182 = (inst_32174 + (1));
var tmp32228 = inst_32173;
var tmp32229 = inst_32171;
var tmp32230 = inst_32172;
var inst_32171__$1 = tmp32229;
var inst_32172__$1 = tmp32230;
var inst_32173__$1 = tmp32228;
var inst_32174__$1 = inst_32182;
var state_32219__$1 = (function (){var statearr_32233 = state_32219;
(statearr_32233[(8)] = inst_32173__$1);

(statearr_32233[(14)] = inst_32181);

(statearr_32233[(10)] = inst_32174__$1);

(statearr_32233[(11)] = inst_32171__$1);

(statearr_32233[(12)] = inst_32172__$1);

return statearr_32233;
})();
var statearr_32234_32269 = state_32219__$1;
(statearr_32234_32269[(2)] = null);

(statearr_32234_32269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (22))){
var state_32219__$1 = state_32219;
var statearr_32235_32270 = state_32219__$1;
(statearr_32235_32270[(2)] = null);

(statearr_32235_32270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (6))){
var inst_32160 = (state_32219[(13)]);
var inst_32169 = f.call(null,inst_32160);
var inst_32170 = cljs.core.seq.call(null,inst_32169);
var inst_32171 = inst_32170;
var inst_32172 = null;
var inst_32173 = (0);
var inst_32174 = (0);
var state_32219__$1 = (function (){var statearr_32236 = state_32219;
(statearr_32236[(8)] = inst_32173);

(statearr_32236[(10)] = inst_32174);

(statearr_32236[(11)] = inst_32171);

(statearr_32236[(12)] = inst_32172);

return statearr_32236;
})();
var statearr_32237_32271 = state_32219__$1;
(statearr_32237_32271[(2)] = null);

(statearr_32237_32271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (17))){
var inst_32185 = (state_32219[(7)]);
var inst_32189 = cljs.core.chunk_first.call(null,inst_32185);
var inst_32190 = cljs.core.chunk_rest.call(null,inst_32185);
var inst_32191 = cljs.core.count.call(null,inst_32189);
var inst_32171 = inst_32190;
var inst_32172 = inst_32189;
var inst_32173 = inst_32191;
var inst_32174 = (0);
var state_32219__$1 = (function (){var statearr_32238 = state_32219;
(statearr_32238[(8)] = inst_32173);

(statearr_32238[(10)] = inst_32174);

(statearr_32238[(11)] = inst_32171);

(statearr_32238[(12)] = inst_32172);

return statearr_32238;
})();
var statearr_32239_32272 = state_32219__$1;
(statearr_32239_32272[(2)] = null);

(statearr_32239_32272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (3))){
var inst_32217 = (state_32219[(2)]);
var state_32219__$1 = state_32219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32219__$1,inst_32217);
} else {
if((state_val_32220 === (12))){
var inst_32205 = (state_32219[(2)]);
var state_32219__$1 = state_32219;
var statearr_32240_32273 = state_32219__$1;
(statearr_32240_32273[(2)] = inst_32205);

(statearr_32240_32273[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (2))){
var state_32219__$1 = state_32219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32219__$1,(4),in$);
} else {
if((state_val_32220 === (23))){
var inst_32213 = (state_32219[(2)]);
var state_32219__$1 = state_32219;
var statearr_32241_32274 = state_32219__$1;
(statearr_32241_32274[(2)] = inst_32213);

(statearr_32241_32274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (19))){
var inst_32200 = (state_32219[(2)]);
var state_32219__$1 = state_32219;
var statearr_32242_32275 = state_32219__$1;
(statearr_32242_32275[(2)] = inst_32200);

(statearr_32242_32275[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (11))){
var inst_32185 = (state_32219[(7)]);
var inst_32171 = (state_32219[(11)]);
var inst_32185__$1 = cljs.core.seq.call(null,inst_32171);
var state_32219__$1 = (function (){var statearr_32243 = state_32219;
(statearr_32243[(7)] = inst_32185__$1);

return statearr_32243;
})();
if(inst_32185__$1){
var statearr_32244_32276 = state_32219__$1;
(statearr_32244_32276[(1)] = (14));

} else {
var statearr_32245_32277 = state_32219__$1;
(statearr_32245_32277[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (9))){
var inst_32207 = (state_32219[(2)]);
var inst_32208 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32219__$1 = (function (){var statearr_32246 = state_32219;
(statearr_32246[(15)] = inst_32207);

return statearr_32246;
})();
if(cljs.core.truth_(inst_32208)){
var statearr_32247_32278 = state_32219__$1;
(statearr_32247_32278[(1)] = (21));

} else {
var statearr_32248_32279 = state_32219__$1;
(statearr_32248_32279[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (5))){
var inst_32163 = cljs.core.async.close_BANG_.call(null,out);
var state_32219__$1 = state_32219;
var statearr_32249_32280 = state_32219__$1;
(statearr_32249_32280[(2)] = inst_32163);

(statearr_32249_32280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (14))){
var inst_32185 = (state_32219[(7)]);
var inst_32187 = cljs.core.chunked_seq_QMARK_.call(null,inst_32185);
var state_32219__$1 = state_32219;
if(inst_32187){
var statearr_32250_32281 = state_32219__$1;
(statearr_32250_32281[(1)] = (17));

} else {
var statearr_32251_32282 = state_32219__$1;
(statearr_32251_32282[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (16))){
var inst_32203 = (state_32219[(2)]);
var state_32219__$1 = state_32219;
var statearr_32252_32283 = state_32219__$1;
(statearr_32252_32283[(2)] = inst_32203);

(statearr_32252_32283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (10))){
var inst_32174 = (state_32219[(10)]);
var inst_32172 = (state_32219[(12)]);
var inst_32179 = cljs.core._nth.call(null,inst_32172,inst_32174);
var state_32219__$1 = state_32219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32219__$1,(13),out,inst_32179);
} else {
if((state_val_32220 === (18))){
var inst_32185 = (state_32219[(7)]);
var inst_32194 = cljs.core.first.call(null,inst_32185);
var state_32219__$1 = state_32219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32219__$1,(20),out,inst_32194);
} else {
if((state_val_32220 === (8))){
var inst_32173 = (state_32219[(8)]);
var inst_32174 = (state_32219[(10)]);
var inst_32176 = (inst_32174 < inst_32173);
var inst_32177 = inst_32176;
var state_32219__$1 = state_32219;
if(cljs.core.truth_(inst_32177)){
var statearr_32253_32284 = state_32219__$1;
(statearr_32253_32284[(1)] = (10));

} else {
var statearr_32254_32285 = state_32219__$1;
(statearr_32254_32285[(1)] = (11));

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
}
}
}
}
}
}
});})(c__29748__auto__))
;
return ((function (switch__29634__auto__,c__29748__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29635__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29635__auto____0 = (function (){
var statearr_32258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32258[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29635__auto__);

(statearr_32258[(1)] = (1));

return statearr_32258;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29635__auto____1 = (function (state_32219){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_32219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e32259){if((e32259 instanceof Object)){
var ex__29638__auto__ = e32259;
var statearr_32260_32286 = state_32219;
(statearr_32260_32286[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32287 = state_32219;
state_32219 = G__32287;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29635__auto__ = function(state_32219){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29635__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29635__auto____1.call(this,state_32219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29635__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29635__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto__))
})();
var state__29750__auto__ = (function (){var statearr_32261 = f__29749__auto__.call(null);
(statearr_32261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto__);

return statearr_32261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto__))
);

return c__29748__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32288 = [];
var len__22773__auto___32291 = arguments.length;
var i__22774__auto___32292 = (0);
while(true){
if((i__22774__auto___32292 < len__22773__auto___32291)){
args32288.push((arguments[i__22774__auto___32292]));

var G__32293 = (i__22774__auto___32292 + (1));
i__22774__auto___32292 = G__32293;
continue;
} else {
}
break;
}

var G__32290 = args32288.length;
switch (G__32290) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32288.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32295 = [];
var len__22773__auto___32298 = arguments.length;
var i__22774__auto___32299 = (0);
while(true){
if((i__22774__auto___32299 < len__22773__auto___32298)){
args32295.push((arguments[i__22774__auto___32299]));

var G__32300 = (i__22774__auto___32299 + (1));
i__22774__auto___32299 = G__32300;
continue;
} else {
}
break;
}

var G__32297 = args32295.length;
switch (G__32297) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32295.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32302 = [];
var len__22773__auto___32353 = arguments.length;
var i__22774__auto___32354 = (0);
while(true){
if((i__22774__auto___32354 < len__22773__auto___32353)){
args32302.push((arguments[i__22774__auto___32354]));

var G__32355 = (i__22774__auto___32354 + (1));
i__22774__auto___32354 = G__32355;
continue;
} else {
}
break;
}

var G__32304 = args32302.length;
switch (G__32304) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32302.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29748__auto___32357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto___32357,out){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto___32357,out){
return (function (state_32328){
var state_val_32329 = (state_32328[(1)]);
if((state_val_32329 === (7))){
var inst_32323 = (state_32328[(2)]);
var state_32328__$1 = state_32328;
var statearr_32330_32358 = state_32328__$1;
(statearr_32330_32358[(2)] = inst_32323);

(statearr_32330_32358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32329 === (1))){
var inst_32305 = null;
var state_32328__$1 = (function (){var statearr_32331 = state_32328;
(statearr_32331[(7)] = inst_32305);

return statearr_32331;
})();
var statearr_32332_32359 = state_32328__$1;
(statearr_32332_32359[(2)] = null);

(statearr_32332_32359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32329 === (4))){
var inst_32308 = (state_32328[(8)]);
var inst_32308__$1 = (state_32328[(2)]);
var inst_32309 = (inst_32308__$1 == null);
var inst_32310 = cljs.core.not.call(null,inst_32309);
var state_32328__$1 = (function (){var statearr_32333 = state_32328;
(statearr_32333[(8)] = inst_32308__$1);

return statearr_32333;
})();
if(inst_32310){
var statearr_32334_32360 = state_32328__$1;
(statearr_32334_32360[(1)] = (5));

} else {
var statearr_32335_32361 = state_32328__$1;
(statearr_32335_32361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32329 === (6))){
var state_32328__$1 = state_32328;
var statearr_32336_32362 = state_32328__$1;
(statearr_32336_32362[(2)] = null);

(statearr_32336_32362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32329 === (3))){
var inst_32325 = (state_32328[(2)]);
var inst_32326 = cljs.core.async.close_BANG_.call(null,out);
var state_32328__$1 = (function (){var statearr_32337 = state_32328;
(statearr_32337[(9)] = inst_32325);

return statearr_32337;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32328__$1,inst_32326);
} else {
if((state_val_32329 === (2))){
var state_32328__$1 = state_32328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32328__$1,(4),ch);
} else {
if((state_val_32329 === (11))){
var inst_32308 = (state_32328[(8)]);
var inst_32317 = (state_32328[(2)]);
var inst_32305 = inst_32308;
var state_32328__$1 = (function (){var statearr_32338 = state_32328;
(statearr_32338[(10)] = inst_32317);

(statearr_32338[(7)] = inst_32305);

return statearr_32338;
})();
var statearr_32339_32363 = state_32328__$1;
(statearr_32339_32363[(2)] = null);

(statearr_32339_32363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32329 === (9))){
var inst_32308 = (state_32328[(8)]);
var state_32328__$1 = state_32328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32328__$1,(11),out,inst_32308);
} else {
if((state_val_32329 === (5))){
var inst_32308 = (state_32328[(8)]);
var inst_32305 = (state_32328[(7)]);
var inst_32312 = cljs.core._EQ_.call(null,inst_32308,inst_32305);
var state_32328__$1 = state_32328;
if(inst_32312){
var statearr_32341_32364 = state_32328__$1;
(statearr_32341_32364[(1)] = (8));

} else {
var statearr_32342_32365 = state_32328__$1;
(statearr_32342_32365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32329 === (10))){
var inst_32320 = (state_32328[(2)]);
var state_32328__$1 = state_32328;
var statearr_32343_32366 = state_32328__$1;
(statearr_32343_32366[(2)] = inst_32320);

(statearr_32343_32366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32329 === (8))){
var inst_32305 = (state_32328[(7)]);
var tmp32340 = inst_32305;
var inst_32305__$1 = tmp32340;
var state_32328__$1 = (function (){var statearr_32344 = state_32328;
(statearr_32344[(7)] = inst_32305__$1);

return statearr_32344;
})();
var statearr_32345_32367 = state_32328__$1;
(statearr_32345_32367[(2)] = null);

(statearr_32345_32367[(1)] = (2));


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
});})(c__29748__auto___32357,out))
;
return ((function (switch__29634__auto__,c__29748__auto___32357,out){
return (function() {
var cljs$core$async$state_machine__29635__auto__ = null;
var cljs$core$async$state_machine__29635__auto____0 = (function (){
var statearr_32349 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32349[(0)] = cljs$core$async$state_machine__29635__auto__);

(statearr_32349[(1)] = (1));

return statearr_32349;
});
var cljs$core$async$state_machine__29635__auto____1 = (function (state_32328){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_32328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e32350){if((e32350 instanceof Object)){
var ex__29638__auto__ = e32350;
var statearr_32351_32368 = state_32328;
(statearr_32351_32368[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32369 = state_32328;
state_32328 = G__32369;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
cljs$core$async$state_machine__29635__auto__ = function(state_32328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29635__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29635__auto____1.call(this,state_32328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29635__auto____0;
cljs$core$async$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29635__auto____1;
return cljs$core$async$state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto___32357,out))
})();
var state__29750__auto__ = (function (){var statearr_32352 = f__29749__auto__.call(null);
(statearr_32352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto___32357);

return statearr_32352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto___32357,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32370 = [];
var len__22773__auto___32440 = arguments.length;
var i__22774__auto___32441 = (0);
while(true){
if((i__22774__auto___32441 < len__22773__auto___32440)){
args32370.push((arguments[i__22774__auto___32441]));

var G__32442 = (i__22774__auto___32441 + (1));
i__22774__auto___32441 = G__32442;
continue;
} else {
}
break;
}

var G__32372 = args32370.length;
switch (G__32372) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32370.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29748__auto___32444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto___32444,out){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto___32444,out){
return (function (state_32410){
var state_val_32411 = (state_32410[(1)]);
if((state_val_32411 === (7))){
var inst_32406 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
var statearr_32412_32445 = state_32410__$1;
(statearr_32412_32445[(2)] = inst_32406);

(statearr_32412_32445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (1))){
var inst_32373 = (new Array(n));
var inst_32374 = inst_32373;
var inst_32375 = (0);
var state_32410__$1 = (function (){var statearr_32413 = state_32410;
(statearr_32413[(7)] = inst_32374);

(statearr_32413[(8)] = inst_32375);

return statearr_32413;
})();
var statearr_32414_32446 = state_32410__$1;
(statearr_32414_32446[(2)] = null);

(statearr_32414_32446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (4))){
var inst_32378 = (state_32410[(9)]);
var inst_32378__$1 = (state_32410[(2)]);
var inst_32379 = (inst_32378__$1 == null);
var inst_32380 = cljs.core.not.call(null,inst_32379);
var state_32410__$1 = (function (){var statearr_32415 = state_32410;
(statearr_32415[(9)] = inst_32378__$1);

return statearr_32415;
})();
if(inst_32380){
var statearr_32416_32447 = state_32410__$1;
(statearr_32416_32447[(1)] = (5));

} else {
var statearr_32417_32448 = state_32410__$1;
(statearr_32417_32448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (15))){
var inst_32400 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
var statearr_32418_32449 = state_32410__$1;
(statearr_32418_32449[(2)] = inst_32400);

(statearr_32418_32449[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (13))){
var state_32410__$1 = state_32410;
var statearr_32419_32450 = state_32410__$1;
(statearr_32419_32450[(2)] = null);

(statearr_32419_32450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (6))){
var inst_32375 = (state_32410[(8)]);
var inst_32396 = (inst_32375 > (0));
var state_32410__$1 = state_32410;
if(cljs.core.truth_(inst_32396)){
var statearr_32420_32451 = state_32410__$1;
(statearr_32420_32451[(1)] = (12));

} else {
var statearr_32421_32452 = state_32410__$1;
(statearr_32421_32452[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (3))){
var inst_32408 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32410__$1,inst_32408);
} else {
if((state_val_32411 === (12))){
var inst_32374 = (state_32410[(7)]);
var inst_32398 = cljs.core.vec.call(null,inst_32374);
var state_32410__$1 = state_32410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32410__$1,(15),out,inst_32398);
} else {
if((state_val_32411 === (2))){
var state_32410__$1 = state_32410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32410__$1,(4),ch);
} else {
if((state_val_32411 === (11))){
var inst_32390 = (state_32410[(2)]);
var inst_32391 = (new Array(n));
var inst_32374 = inst_32391;
var inst_32375 = (0);
var state_32410__$1 = (function (){var statearr_32422 = state_32410;
(statearr_32422[(7)] = inst_32374);

(statearr_32422[(10)] = inst_32390);

(statearr_32422[(8)] = inst_32375);

return statearr_32422;
})();
var statearr_32423_32453 = state_32410__$1;
(statearr_32423_32453[(2)] = null);

(statearr_32423_32453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (9))){
var inst_32374 = (state_32410[(7)]);
var inst_32388 = cljs.core.vec.call(null,inst_32374);
var state_32410__$1 = state_32410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32410__$1,(11),out,inst_32388);
} else {
if((state_val_32411 === (5))){
var inst_32374 = (state_32410[(7)]);
var inst_32378 = (state_32410[(9)]);
var inst_32383 = (state_32410[(11)]);
var inst_32375 = (state_32410[(8)]);
var inst_32382 = (inst_32374[inst_32375] = inst_32378);
var inst_32383__$1 = (inst_32375 + (1));
var inst_32384 = (inst_32383__$1 < n);
var state_32410__$1 = (function (){var statearr_32424 = state_32410;
(statearr_32424[(11)] = inst_32383__$1);

(statearr_32424[(12)] = inst_32382);

return statearr_32424;
})();
if(cljs.core.truth_(inst_32384)){
var statearr_32425_32454 = state_32410__$1;
(statearr_32425_32454[(1)] = (8));

} else {
var statearr_32426_32455 = state_32410__$1;
(statearr_32426_32455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (14))){
var inst_32403 = (state_32410[(2)]);
var inst_32404 = cljs.core.async.close_BANG_.call(null,out);
var state_32410__$1 = (function (){var statearr_32428 = state_32410;
(statearr_32428[(13)] = inst_32403);

return statearr_32428;
})();
var statearr_32429_32456 = state_32410__$1;
(statearr_32429_32456[(2)] = inst_32404);

(statearr_32429_32456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (10))){
var inst_32394 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
var statearr_32430_32457 = state_32410__$1;
(statearr_32430_32457[(2)] = inst_32394);

(statearr_32430_32457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (8))){
var inst_32374 = (state_32410[(7)]);
var inst_32383 = (state_32410[(11)]);
var tmp32427 = inst_32374;
var inst_32374__$1 = tmp32427;
var inst_32375 = inst_32383;
var state_32410__$1 = (function (){var statearr_32431 = state_32410;
(statearr_32431[(7)] = inst_32374__$1);

(statearr_32431[(8)] = inst_32375);

return statearr_32431;
})();
var statearr_32432_32458 = state_32410__$1;
(statearr_32432_32458[(2)] = null);

(statearr_32432_32458[(1)] = (2));


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
});})(c__29748__auto___32444,out))
;
return ((function (switch__29634__auto__,c__29748__auto___32444,out){
return (function() {
var cljs$core$async$state_machine__29635__auto__ = null;
var cljs$core$async$state_machine__29635__auto____0 = (function (){
var statearr_32436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32436[(0)] = cljs$core$async$state_machine__29635__auto__);

(statearr_32436[(1)] = (1));

return statearr_32436;
});
var cljs$core$async$state_machine__29635__auto____1 = (function (state_32410){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_32410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e32437){if((e32437 instanceof Object)){
var ex__29638__auto__ = e32437;
var statearr_32438_32459 = state_32410;
(statearr_32438_32459[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32460 = state_32410;
state_32410 = G__32460;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
cljs$core$async$state_machine__29635__auto__ = function(state_32410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29635__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29635__auto____1.call(this,state_32410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29635__auto____0;
cljs$core$async$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29635__auto____1;
return cljs$core$async$state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto___32444,out))
})();
var state__29750__auto__ = (function (){var statearr_32439 = f__29749__auto__.call(null);
(statearr_32439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto___32444);

return statearr_32439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto___32444,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32461 = [];
var len__22773__auto___32535 = arguments.length;
var i__22774__auto___32536 = (0);
while(true){
if((i__22774__auto___32536 < len__22773__auto___32535)){
args32461.push((arguments[i__22774__auto___32536]));

var G__32537 = (i__22774__auto___32536 + (1));
i__22774__auto___32536 = G__32537;
continue;
} else {
}
break;
}

var G__32463 = args32461.length;
switch (G__32463) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32461.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29748__auto___32539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto___32539,out){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto___32539,out){
return (function (state_32505){
var state_val_32506 = (state_32505[(1)]);
if((state_val_32506 === (7))){
var inst_32501 = (state_32505[(2)]);
var state_32505__$1 = state_32505;
var statearr_32507_32540 = state_32505__$1;
(statearr_32507_32540[(2)] = inst_32501);

(statearr_32507_32540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32506 === (1))){
var inst_32464 = [];
var inst_32465 = inst_32464;
var inst_32466 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32505__$1 = (function (){var statearr_32508 = state_32505;
(statearr_32508[(7)] = inst_32465);

(statearr_32508[(8)] = inst_32466);

return statearr_32508;
})();
var statearr_32509_32541 = state_32505__$1;
(statearr_32509_32541[(2)] = null);

(statearr_32509_32541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32506 === (4))){
var inst_32469 = (state_32505[(9)]);
var inst_32469__$1 = (state_32505[(2)]);
var inst_32470 = (inst_32469__$1 == null);
var inst_32471 = cljs.core.not.call(null,inst_32470);
var state_32505__$1 = (function (){var statearr_32510 = state_32505;
(statearr_32510[(9)] = inst_32469__$1);

return statearr_32510;
})();
if(inst_32471){
var statearr_32511_32542 = state_32505__$1;
(statearr_32511_32542[(1)] = (5));

} else {
var statearr_32512_32543 = state_32505__$1;
(statearr_32512_32543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32506 === (15))){
var inst_32495 = (state_32505[(2)]);
var state_32505__$1 = state_32505;
var statearr_32513_32544 = state_32505__$1;
(statearr_32513_32544[(2)] = inst_32495);

(statearr_32513_32544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32506 === (13))){
var state_32505__$1 = state_32505;
var statearr_32514_32545 = state_32505__$1;
(statearr_32514_32545[(2)] = null);

(statearr_32514_32545[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32506 === (6))){
var inst_32465 = (state_32505[(7)]);
var inst_32490 = inst_32465.length;
var inst_32491 = (inst_32490 > (0));
var state_32505__$1 = state_32505;
if(cljs.core.truth_(inst_32491)){
var statearr_32515_32546 = state_32505__$1;
(statearr_32515_32546[(1)] = (12));

} else {
var statearr_32516_32547 = state_32505__$1;
(statearr_32516_32547[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32506 === (3))){
var inst_32503 = (state_32505[(2)]);
var state_32505__$1 = state_32505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32505__$1,inst_32503);
} else {
if((state_val_32506 === (12))){
var inst_32465 = (state_32505[(7)]);
var inst_32493 = cljs.core.vec.call(null,inst_32465);
var state_32505__$1 = state_32505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32505__$1,(15),out,inst_32493);
} else {
if((state_val_32506 === (2))){
var state_32505__$1 = state_32505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32505__$1,(4),ch);
} else {
if((state_val_32506 === (11))){
var inst_32473 = (state_32505[(10)]);
var inst_32469 = (state_32505[(9)]);
var inst_32483 = (state_32505[(2)]);
var inst_32484 = [];
var inst_32485 = inst_32484.push(inst_32469);
var inst_32465 = inst_32484;
var inst_32466 = inst_32473;
var state_32505__$1 = (function (){var statearr_32517 = state_32505;
(statearr_32517[(11)] = inst_32485);

(statearr_32517[(7)] = inst_32465);

(statearr_32517[(12)] = inst_32483);

(statearr_32517[(8)] = inst_32466);

return statearr_32517;
})();
var statearr_32518_32548 = state_32505__$1;
(statearr_32518_32548[(2)] = null);

(statearr_32518_32548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32506 === (9))){
var inst_32465 = (state_32505[(7)]);
var inst_32481 = cljs.core.vec.call(null,inst_32465);
var state_32505__$1 = state_32505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32505__$1,(11),out,inst_32481);
} else {
if((state_val_32506 === (5))){
var inst_32473 = (state_32505[(10)]);
var inst_32466 = (state_32505[(8)]);
var inst_32469 = (state_32505[(9)]);
var inst_32473__$1 = f.call(null,inst_32469);
var inst_32474 = cljs.core._EQ_.call(null,inst_32473__$1,inst_32466);
var inst_32475 = cljs.core.keyword_identical_QMARK_.call(null,inst_32466,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32476 = (inst_32474) || (inst_32475);
var state_32505__$1 = (function (){var statearr_32519 = state_32505;
(statearr_32519[(10)] = inst_32473__$1);

return statearr_32519;
})();
if(cljs.core.truth_(inst_32476)){
var statearr_32520_32549 = state_32505__$1;
(statearr_32520_32549[(1)] = (8));

} else {
var statearr_32521_32550 = state_32505__$1;
(statearr_32521_32550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32506 === (14))){
var inst_32498 = (state_32505[(2)]);
var inst_32499 = cljs.core.async.close_BANG_.call(null,out);
var state_32505__$1 = (function (){var statearr_32523 = state_32505;
(statearr_32523[(13)] = inst_32498);

return statearr_32523;
})();
var statearr_32524_32551 = state_32505__$1;
(statearr_32524_32551[(2)] = inst_32499);

(statearr_32524_32551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32506 === (10))){
var inst_32488 = (state_32505[(2)]);
var state_32505__$1 = state_32505;
var statearr_32525_32552 = state_32505__$1;
(statearr_32525_32552[(2)] = inst_32488);

(statearr_32525_32552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32506 === (8))){
var inst_32465 = (state_32505[(7)]);
var inst_32473 = (state_32505[(10)]);
var inst_32469 = (state_32505[(9)]);
var inst_32478 = inst_32465.push(inst_32469);
var tmp32522 = inst_32465;
var inst_32465__$1 = tmp32522;
var inst_32466 = inst_32473;
var state_32505__$1 = (function (){var statearr_32526 = state_32505;
(statearr_32526[(14)] = inst_32478);

(statearr_32526[(7)] = inst_32465__$1);

(statearr_32526[(8)] = inst_32466);

return statearr_32526;
})();
var statearr_32527_32553 = state_32505__$1;
(statearr_32527_32553[(2)] = null);

(statearr_32527_32553[(1)] = (2));


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
});})(c__29748__auto___32539,out))
;
return ((function (switch__29634__auto__,c__29748__auto___32539,out){
return (function() {
var cljs$core$async$state_machine__29635__auto__ = null;
var cljs$core$async$state_machine__29635__auto____0 = (function (){
var statearr_32531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32531[(0)] = cljs$core$async$state_machine__29635__auto__);

(statearr_32531[(1)] = (1));

return statearr_32531;
});
var cljs$core$async$state_machine__29635__auto____1 = (function (state_32505){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_32505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e32532){if((e32532 instanceof Object)){
var ex__29638__auto__ = e32532;
var statearr_32533_32554 = state_32505;
(statearr_32533_32554[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32555 = state_32505;
state_32505 = G__32555;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
cljs$core$async$state_machine__29635__auto__ = function(state_32505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29635__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29635__auto____1.call(this,state_32505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29635__auto____0;
cljs$core$async$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29635__auto____1;
return cljs$core$async$state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto___32539,out))
})();
var state__29750__auto__ = (function (){var statearr_32534 = f__29749__auto__.call(null);
(statearr_32534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto___32539);

return statearr_32534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto___32539,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1471181950077