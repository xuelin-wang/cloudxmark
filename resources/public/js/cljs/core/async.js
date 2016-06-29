// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args25789 = [];
var len__22617__auto___25795 = arguments.length;
var i__22618__auto___25796 = (0);
while(true){
if((i__22618__auto___25796 < len__22617__auto___25795)){
args25789.push((arguments[i__22618__auto___25796]));

var G__25797 = (i__22618__auto___25796 + (1));
i__22618__auto___25796 = G__25797;
continue;
} else {
}
break;
}

var G__25791 = args25789.length;
switch (G__25791) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25789.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async25792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25792 = (function (f,blockable,meta25793){
this.f = f;
this.blockable = blockable;
this.meta25793 = meta25793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25794,meta25793__$1){
var self__ = this;
var _25794__$1 = this;
return (new cljs.core.async.t_cljs$core$async25792(self__.f,self__.blockable,meta25793__$1));
});

cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25794){
var self__ = this;
var _25794__$1 = this;
return self__.meta25793;
});

cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25793","meta25793",-879877987,null)], null);
});

cljs.core.async.t_cljs$core$async25792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25792";

cljs.core.async.t_cljs$core$async25792.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cljs.core.async/t_cljs$core$async25792");
});

cljs.core.async.__GT_t_cljs$core$async25792 = (function cljs$core$async$__GT_t_cljs$core$async25792(f__$1,blockable__$1,meta25793){
return (new cljs.core.async.t_cljs$core$async25792(f__$1,blockable__$1,meta25793));
});

}

return (new cljs.core.async.t_cljs$core$async25792(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args25801 = [];
var len__22617__auto___25804 = arguments.length;
var i__22618__auto___25805 = (0);
while(true){
if((i__22618__auto___25805 < len__22617__auto___25804)){
args25801.push((arguments[i__22618__auto___25805]));

var G__25806 = (i__22618__auto___25805 + (1));
i__22618__auto___25805 = G__25806;
continue;
} else {
}
break;
}

var G__25803 = args25801.length;
switch (G__25803) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25801.length)].join('')));

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
var args25808 = [];
var len__22617__auto___25811 = arguments.length;
var i__22618__auto___25812 = (0);
while(true){
if((i__22618__auto___25812 < len__22617__auto___25811)){
args25808.push((arguments[i__22618__auto___25812]));

var G__25813 = (i__22618__auto___25812 + (1));
i__22618__auto___25812 = G__25813;
continue;
} else {
}
break;
}

var G__25810 = args25808.length;
switch (G__25810) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25808.length)].join('')));

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
var args25815 = [];
var len__22617__auto___25818 = arguments.length;
var i__22618__auto___25819 = (0);
while(true){
if((i__22618__auto___25819 < len__22617__auto___25818)){
args25815.push((arguments[i__22618__auto___25819]));

var G__25820 = (i__22618__auto___25819 + (1));
i__22618__auto___25819 = G__25820;
continue;
} else {
}
break;
}

var G__25817 = args25815.length;
switch (G__25817) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25815.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25822 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25822);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25822,ret){
return (function (){
return fn1.call(null,val_25822);
});})(val_25822,ret))
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
var args25823 = [];
var len__22617__auto___25826 = arguments.length;
var i__22618__auto___25827 = (0);
while(true){
if((i__22618__auto___25827 < len__22617__auto___25826)){
args25823.push((arguments[i__22618__auto___25827]));

var G__25828 = (i__22618__auto___25827 + (1));
i__22618__auto___25827 = G__25828;
continue;
} else {
}
break;
}

var G__25825 = args25823.length;
switch (G__25825) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25823.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6367__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6367__auto__)){
var ret = temp__6367__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6367__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6367__auto__)){
var retb = temp__6367__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6367__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6367__auto__))
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
var n__22447__auto___25830 = n;
var x_25831 = (0);
while(true){
if((x_25831 < n__22447__auto___25830)){
(a[x_25831] = (0));

var G__25832 = (x_25831 + (1));
x_25831 = G__25832;
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

var G__25833 = (i + (1));
i = G__25833;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25837 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25837 = (function (alt_flag,flag,meta25838){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25838 = meta25838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25839,meta25838__$1){
var self__ = this;
var _25839__$1 = this;
return (new cljs.core.async.t_cljs$core$async25837(self__.alt_flag,self__.flag,meta25838__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25837.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25839){
var self__ = this;
var _25839__$1 = this;
return self__.meta25838;
});})(flag))
;

cljs.core.async.t_cljs$core$async25837.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25837.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25837.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25837.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25837.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25838","meta25838",-1820943538,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25837.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25837.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25837";

cljs.core.async.t_cljs$core$async25837.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cljs.core.async/t_cljs$core$async25837");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25837 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25837(alt_flag__$1,flag__$1,meta25838){
return (new cljs.core.async.t_cljs$core$async25837(alt_flag__$1,flag__$1,meta25838));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25837(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25843 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25843 = (function (alt_handler,flag,cb,meta25844){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25844 = meta25844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25845,meta25844__$1){
var self__ = this;
var _25845__$1 = this;
return (new cljs.core.async.t_cljs$core$async25843(self__.alt_handler,self__.flag,self__.cb,meta25844__$1));
});

cljs.core.async.t_cljs$core$async25843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25845){
var self__ = this;
var _25845__$1 = this;
return self__.meta25844;
});

cljs.core.async.t_cljs$core$async25843.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25843.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25843.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25843.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25844","meta25844",1570024874,null)], null);
});

cljs.core.async.t_cljs$core$async25843.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25843";

cljs.core.async.t_cljs$core$async25843.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cljs.core.async/t_cljs$core$async25843");
});

cljs.core.async.__GT_t_cljs$core$async25843 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25843(alt_handler__$1,flag__$1,cb__$1,meta25844){
return (new cljs.core.async.t_cljs$core$async25843(alt_handler__$1,flag__$1,cb__$1,meta25844));
});

}

return (new cljs.core.async.t_cljs$core$async25843(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25846_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25846_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25847_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25847_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21434__auto__ = wport;
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25848 = (i + (1));
i = G__25848;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21434__auto__ = ret;
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6369__auto__ = (function (){var and__21422__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21422__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21422__auto__;
}
})();
if(cljs.core.truth_(temp__6369__auto__)){
var got = temp__6369__auto__;
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
var args__22624__auto__ = [];
var len__22617__auto___25854 = arguments.length;
var i__22618__auto___25855 = (0);
while(true){
if((i__22618__auto___25855 < len__22617__auto___25854)){
args__22624__auto__.push((arguments[i__22618__auto___25855]));

var G__25856 = (i__22618__auto___25855 + (1));
i__22618__auto___25855 = G__25856;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((1) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22625__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25851){
var map__25852 = p__25851;
var map__25852__$1 = ((((!((map__25852 == null)))?((((map__25852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25852):map__25852);
var opts = map__25852__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25849){
var G__25850 = cljs.core.first.call(null,seq25849);
var seq25849__$1 = cljs.core.next.call(null,seq25849);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25850,seq25849__$1);
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
var args25857 = [];
var len__22617__auto___25907 = arguments.length;
var i__22618__auto___25908 = (0);
while(true){
if((i__22618__auto___25908 < len__22617__auto___25907)){
args25857.push((arguments[i__22618__auto___25908]));

var G__25909 = (i__22618__auto___25908 + (1));
i__22618__auto___25908 = G__25909;
continue;
} else {
}
break;
}

var G__25859 = args25857.length;
switch (G__25859) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25857.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25730__auto___25911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto___25911){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto___25911){
return (function (state_25883){
var state_val_25884 = (state_25883[(1)]);
if((state_val_25884 === (7))){
var inst_25879 = (state_25883[(2)]);
var state_25883__$1 = state_25883;
var statearr_25885_25912 = state_25883__$1;
(statearr_25885_25912[(2)] = inst_25879);

(statearr_25885_25912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (1))){
var state_25883__$1 = state_25883;
var statearr_25886_25913 = state_25883__$1;
(statearr_25886_25913[(2)] = null);

(statearr_25886_25913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (4))){
var inst_25862 = (state_25883[(7)]);
var inst_25862__$1 = (state_25883[(2)]);
var inst_25863 = (inst_25862__$1 == null);
var state_25883__$1 = (function (){var statearr_25887 = state_25883;
(statearr_25887[(7)] = inst_25862__$1);

return statearr_25887;
})();
if(cljs.core.truth_(inst_25863)){
var statearr_25888_25914 = state_25883__$1;
(statearr_25888_25914[(1)] = (5));

} else {
var statearr_25889_25915 = state_25883__$1;
(statearr_25889_25915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (13))){
var state_25883__$1 = state_25883;
var statearr_25890_25916 = state_25883__$1;
(statearr_25890_25916[(2)] = null);

(statearr_25890_25916[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (6))){
var inst_25862 = (state_25883[(7)]);
var state_25883__$1 = state_25883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25883__$1,(11),to,inst_25862);
} else {
if((state_val_25884 === (3))){
var inst_25881 = (state_25883[(2)]);
var state_25883__$1 = state_25883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25883__$1,inst_25881);
} else {
if((state_val_25884 === (12))){
var state_25883__$1 = state_25883;
var statearr_25891_25917 = state_25883__$1;
(statearr_25891_25917[(2)] = null);

(statearr_25891_25917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (2))){
var state_25883__$1 = state_25883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25883__$1,(4),from);
} else {
if((state_val_25884 === (11))){
var inst_25872 = (state_25883[(2)]);
var state_25883__$1 = state_25883;
if(cljs.core.truth_(inst_25872)){
var statearr_25892_25918 = state_25883__$1;
(statearr_25892_25918[(1)] = (12));

} else {
var statearr_25893_25919 = state_25883__$1;
(statearr_25893_25919[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (9))){
var state_25883__$1 = state_25883;
var statearr_25894_25920 = state_25883__$1;
(statearr_25894_25920[(2)] = null);

(statearr_25894_25920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (5))){
var state_25883__$1 = state_25883;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25895_25921 = state_25883__$1;
(statearr_25895_25921[(1)] = (8));

} else {
var statearr_25896_25922 = state_25883__$1;
(statearr_25896_25922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (14))){
var inst_25877 = (state_25883[(2)]);
var state_25883__$1 = state_25883;
var statearr_25897_25923 = state_25883__$1;
(statearr_25897_25923[(2)] = inst_25877);

(statearr_25897_25923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (10))){
var inst_25869 = (state_25883[(2)]);
var state_25883__$1 = state_25883;
var statearr_25898_25924 = state_25883__$1;
(statearr_25898_25924[(2)] = inst_25869);

(statearr_25898_25924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (8))){
var inst_25866 = cljs.core.async.close_BANG_.call(null,to);
var state_25883__$1 = state_25883;
var statearr_25899_25925 = state_25883__$1;
(statearr_25899_25925[(2)] = inst_25866);

(statearr_25899_25925[(1)] = (10));


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
});})(c__25730__auto___25911))
;
return ((function (switch__25616__auto__,c__25730__auto___25911){
return (function() {
var cljs$core$async$state_machine__25617__auto__ = null;
var cljs$core$async$state_machine__25617__auto____0 = (function (){
var statearr_25903 = [null,null,null,null,null,null,null,null];
(statearr_25903[(0)] = cljs$core$async$state_machine__25617__auto__);

(statearr_25903[(1)] = (1));

return statearr_25903;
});
var cljs$core$async$state_machine__25617__auto____1 = (function (state_25883){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_25883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e25904){if((e25904 instanceof Object)){
var ex__25620__auto__ = e25904;
var statearr_25905_25926 = state_25883;
(statearr_25905_25926[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25927 = state_25883;
state_25883 = G__25927;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
cljs$core$async$state_machine__25617__auto__ = function(state_25883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25617__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25617__auto____1.call(this,state_25883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25617__auto____0;
cljs$core$async$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25617__auto____1;
return cljs$core$async$state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto___25911))
})();
var state__25732__auto__ = (function (){var statearr_25906 = f__25731__auto__.call(null);
(statearr_25906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto___25911);

return statearr_25906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto___25911))
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
return (function (p__26115){
var vec__26116 = p__26115;
var v = cljs.core.nth.call(null,vec__26116,(0),null);
var p = cljs.core.nth.call(null,vec__26116,(1),null);
var job = vec__26116;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25730__auto___26302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto___26302,res,vec__26116,v,p,job,jobs,results){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto___26302,res,vec__26116,v,p,job,jobs,results){
return (function (state_26123){
var state_val_26124 = (state_26123[(1)]);
if((state_val_26124 === (1))){
var state_26123__$1 = state_26123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26123__$1,(2),res,v);
} else {
if((state_val_26124 === (2))){
var inst_26120 = (state_26123[(2)]);
var inst_26121 = cljs.core.async.close_BANG_.call(null,res);
var state_26123__$1 = (function (){var statearr_26125 = state_26123;
(statearr_26125[(7)] = inst_26120);

return statearr_26125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26123__$1,inst_26121);
} else {
return null;
}
}
});})(c__25730__auto___26302,res,vec__26116,v,p,job,jobs,results))
;
return ((function (switch__25616__auto__,c__25730__auto___26302,res,vec__26116,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____0 = (function (){
var statearr_26129 = [null,null,null,null,null,null,null,null];
(statearr_26129[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__);

(statearr_26129[(1)] = (1));

return statearr_26129;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____1 = (function (state_26123){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_26123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e26130){if((e26130 instanceof Object)){
var ex__25620__auto__ = e26130;
var statearr_26131_26303 = state_26123;
(statearr_26131_26303[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26304 = state_26123;
state_26123 = G__26304;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__ = function(state_26123){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____1.call(this,state_26123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto___26302,res,vec__26116,v,p,job,jobs,results))
})();
var state__25732__auto__ = (function (){var statearr_26132 = f__25731__auto__.call(null);
(statearr_26132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto___26302);

return statearr_26132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto___26302,res,vec__26116,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26133){
var vec__26134 = p__26133;
var v = cljs.core.nth.call(null,vec__26134,(0),null);
var p = cljs.core.nth.call(null,vec__26134,(1),null);
var job = vec__26134;
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
var n__22447__auto___26305 = n;
var __26306 = (0);
while(true){
if((__26306 < n__22447__auto___26305)){
var G__26137_26307 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26137_26307) {
case "compute":
var c__25730__auto___26309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26306,c__25730__auto___26309,G__26137_26307,n__22447__auto___26305,jobs,results,process,async){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (__26306,c__25730__auto___26309,G__26137_26307,n__22447__auto___26305,jobs,results,process,async){
return (function (state_26150){
var state_val_26151 = (state_26150[(1)]);
if((state_val_26151 === (1))){
var state_26150__$1 = state_26150;
var statearr_26152_26310 = state_26150__$1;
(statearr_26152_26310[(2)] = null);

(statearr_26152_26310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (2))){
var state_26150__$1 = state_26150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26150__$1,(4),jobs);
} else {
if((state_val_26151 === (3))){
var inst_26148 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26150__$1,inst_26148);
} else {
if((state_val_26151 === (4))){
var inst_26140 = (state_26150[(2)]);
var inst_26141 = process.call(null,inst_26140);
var state_26150__$1 = state_26150;
if(cljs.core.truth_(inst_26141)){
var statearr_26153_26311 = state_26150__$1;
(statearr_26153_26311[(1)] = (5));

} else {
var statearr_26154_26312 = state_26150__$1;
(statearr_26154_26312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (5))){
var state_26150__$1 = state_26150;
var statearr_26155_26313 = state_26150__$1;
(statearr_26155_26313[(2)] = null);

(statearr_26155_26313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (6))){
var state_26150__$1 = state_26150;
var statearr_26156_26314 = state_26150__$1;
(statearr_26156_26314[(2)] = null);

(statearr_26156_26314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (7))){
var inst_26146 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
var statearr_26157_26315 = state_26150__$1;
(statearr_26157_26315[(2)] = inst_26146);

(statearr_26157_26315[(1)] = (3));


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
});})(__26306,c__25730__auto___26309,G__26137_26307,n__22447__auto___26305,jobs,results,process,async))
;
return ((function (__26306,switch__25616__auto__,c__25730__auto___26309,G__26137_26307,n__22447__auto___26305,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____0 = (function (){
var statearr_26161 = [null,null,null,null,null,null,null];
(statearr_26161[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__);

(statearr_26161[(1)] = (1));

return statearr_26161;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____1 = (function (state_26150){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_26150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e26162){if((e26162 instanceof Object)){
var ex__25620__auto__ = e26162;
var statearr_26163_26316 = state_26150;
(statearr_26163_26316[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26317 = state_26150;
state_26150 = G__26317;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__ = function(state_26150){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____1.call(this,state_26150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__;
})()
;})(__26306,switch__25616__auto__,c__25730__auto___26309,G__26137_26307,n__22447__auto___26305,jobs,results,process,async))
})();
var state__25732__auto__ = (function (){var statearr_26164 = f__25731__auto__.call(null);
(statearr_26164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto___26309);

return statearr_26164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(__26306,c__25730__auto___26309,G__26137_26307,n__22447__auto___26305,jobs,results,process,async))
);


break;
case "async":
var c__25730__auto___26318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26306,c__25730__auto___26318,G__26137_26307,n__22447__auto___26305,jobs,results,process,async){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (__26306,c__25730__auto___26318,G__26137_26307,n__22447__auto___26305,jobs,results,process,async){
return (function (state_26177){
var state_val_26178 = (state_26177[(1)]);
if((state_val_26178 === (1))){
var state_26177__$1 = state_26177;
var statearr_26179_26319 = state_26177__$1;
(statearr_26179_26319[(2)] = null);

(statearr_26179_26319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26178 === (2))){
var state_26177__$1 = state_26177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26177__$1,(4),jobs);
} else {
if((state_val_26178 === (3))){
var inst_26175 = (state_26177[(2)]);
var state_26177__$1 = state_26177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26177__$1,inst_26175);
} else {
if((state_val_26178 === (4))){
var inst_26167 = (state_26177[(2)]);
var inst_26168 = async.call(null,inst_26167);
var state_26177__$1 = state_26177;
if(cljs.core.truth_(inst_26168)){
var statearr_26180_26320 = state_26177__$1;
(statearr_26180_26320[(1)] = (5));

} else {
var statearr_26181_26321 = state_26177__$1;
(statearr_26181_26321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26178 === (5))){
var state_26177__$1 = state_26177;
var statearr_26182_26322 = state_26177__$1;
(statearr_26182_26322[(2)] = null);

(statearr_26182_26322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26178 === (6))){
var state_26177__$1 = state_26177;
var statearr_26183_26323 = state_26177__$1;
(statearr_26183_26323[(2)] = null);

(statearr_26183_26323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26178 === (7))){
var inst_26173 = (state_26177[(2)]);
var state_26177__$1 = state_26177;
var statearr_26184_26324 = state_26177__$1;
(statearr_26184_26324[(2)] = inst_26173);

(statearr_26184_26324[(1)] = (3));


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
});})(__26306,c__25730__auto___26318,G__26137_26307,n__22447__auto___26305,jobs,results,process,async))
;
return ((function (__26306,switch__25616__auto__,c__25730__auto___26318,G__26137_26307,n__22447__auto___26305,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____0 = (function (){
var statearr_26188 = [null,null,null,null,null,null,null];
(statearr_26188[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__);

(statearr_26188[(1)] = (1));

return statearr_26188;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____1 = (function (state_26177){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_26177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e26189){if((e26189 instanceof Object)){
var ex__25620__auto__ = e26189;
var statearr_26190_26325 = state_26177;
(statearr_26190_26325[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26326 = state_26177;
state_26177 = G__26326;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__ = function(state_26177){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____1.call(this,state_26177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__;
})()
;})(__26306,switch__25616__auto__,c__25730__auto___26318,G__26137_26307,n__22447__auto___26305,jobs,results,process,async))
})();
var state__25732__auto__ = (function (){var statearr_26191 = f__25731__auto__.call(null);
(statearr_26191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto___26318);

return statearr_26191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(__26306,c__25730__auto___26318,G__26137_26307,n__22447__auto___26305,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26327 = (__26306 + (1));
__26306 = G__26327;
continue;
} else {
}
break;
}

var c__25730__auto___26328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto___26328,jobs,results,process,async){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto___26328,jobs,results,process,async){
return (function (state_26213){
var state_val_26214 = (state_26213[(1)]);
if((state_val_26214 === (1))){
var state_26213__$1 = state_26213;
var statearr_26215_26329 = state_26213__$1;
(statearr_26215_26329[(2)] = null);

(statearr_26215_26329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26214 === (2))){
var state_26213__$1 = state_26213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26213__$1,(4),from);
} else {
if((state_val_26214 === (3))){
var inst_26211 = (state_26213[(2)]);
var state_26213__$1 = state_26213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26213__$1,inst_26211);
} else {
if((state_val_26214 === (4))){
var inst_26194 = (state_26213[(7)]);
var inst_26194__$1 = (state_26213[(2)]);
var inst_26195 = (inst_26194__$1 == null);
var state_26213__$1 = (function (){var statearr_26216 = state_26213;
(statearr_26216[(7)] = inst_26194__$1);

return statearr_26216;
})();
if(cljs.core.truth_(inst_26195)){
var statearr_26217_26330 = state_26213__$1;
(statearr_26217_26330[(1)] = (5));

} else {
var statearr_26218_26331 = state_26213__$1;
(statearr_26218_26331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26214 === (5))){
var inst_26197 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26213__$1 = state_26213;
var statearr_26219_26332 = state_26213__$1;
(statearr_26219_26332[(2)] = inst_26197);

(statearr_26219_26332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26214 === (6))){
var inst_26199 = (state_26213[(8)]);
var inst_26194 = (state_26213[(7)]);
var inst_26199__$1 = cljs.core.async.chan.call(null,(1));
var inst_26200 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26201 = [inst_26194,inst_26199__$1];
var inst_26202 = (new cljs.core.PersistentVector(null,2,(5),inst_26200,inst_26201,null));
var state_26213__$1 = (function (){var statearr_26220 = state_26213;
(statearr_26220[(8)] = inst_26199__$1);

return statearr_26220;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26213__$1,(8),jobs,inst_26202);
} else {
if((state_val_26214 === (7))){
var inst_26209 = (state_26213[(2)]);
var state_26213__$1 = state_26213;
var statearr_26221_26333 = state_26213__$1;
(statearr_26221_26333[(2)] = inst_26209);

(statearr_26221_26333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26214 === (8))){
var inst_26199 = (state_26213[(8)]);
var inst_26204 = (state_26213[(2)]);
var state_26213__$1 = (function (){var statearr_26222 = state_26213;
(statearr_26222[(9)] = inst_26204);

return statearr_26222;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26213__$1,(9),results,inst_26199);
} else {
if((state_val_26214 === (9))){
var inst_26206 = (state_26213[(2)]);
var state_26213__$1 = (function (){var statearr_26223 = state_26213;
(statearr_26223[(10)] = inst_26206);

return statearr_26223;
})();
var statearr_26224_26334 = state_26213__$1;
(statearr_26224_26334[(2)] = null);

(statearr_26224_26334[(1)] = (2));


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
});})(c__25730__auto___26328,jobs,results,process,async))
;
return ((function (switch__25616__auto__,c__25730__auto___26328,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____0 = (function (){
var statearr_26228 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26228[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__);

(statearr_26228[(1)] = (1));

return statearr_26228;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____1 = (function (state_26213){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_26213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e26229){if((e26229 instanceof Object)){
var ex__25620__auto__ = e26229;
var statearr_26230_26335 = state_26213;
(statearr_26230_26335[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26336 = state_26213;
state_26213 = G__26336;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__ = function(state_26213){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____1.call(this,state_26213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto___26328,jobs,results,process,async))
})();
var state__25732__auto__ = (function (){var statearr_26231 = f__25731__auto__.call(null);
(statearr_26231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto___26328);

return statearr_26231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto___26328,jobs,results,process,async))
);


var c__25730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto__,jobs,results,process,async){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto__,jobs,results,process,async){
return (function (state_26269){
var state_val_26270 = (state_26269[(1)]);
if((state_val_26270 === (7))){
var inst_26265 = (state_26269[(2)]);
var state_26269__$1 = state_26269;
var statearr_26271_26337 = state_26269__$1;
(statearr_26271_26337[(2)] = inst_26265);

(statearr_26271_26337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (20))){
var state_26269__$1 = state_26269;
var statearr_26272_26338 = state_26269__$1;
(statearr_26272_26338[(2)] = null);

(statearr_26272_26338[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (1))){
var state_26269__$1 = state_26269;
var statearr_26273_26339 = state_26269__$1;
(statearr_26273_26339[(2)] = null);

(statearr_26273_26339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (4))){
var inst_26234 = (state_26269[(7)]);
var inst_26234__$1 = (state_26269[(2)]);
var inst_26235 = (inst_26234__$1 == null);
var state_26269__$1 = (function (){var statearr_26274 = state_26269;
(statearr_26274[(7)] = inst_26234__$1);

return statearr_26274;
})();
if(cljs.core.truth_(inst_26235)){
var statearr_26275_26340 = state_26269__$1;
(statearr_26275_26340[(1)] = (5));

} else {
var statearr_26276_26341 = state_26269__$1;
(statearr_26276_26341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (15))){
var inst_26247 = (state_26269[(8)]);
var state_26269__$1 = state_26269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26269__$1,(18),to,inst_26247);
} else {
if((state_val_26270 === (21))){
var inst_26260 = (state_26269[(2)]);
var state_26269__$1 = state_26269;
var statearr_26277_26342 = state_26269__$1;
(statearr_26277_26342[(2)] = inst_26260);

(statearr_26277_26342[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (13))){
var inst_26262 = (state_26269[(2)]);
var state_26269__$1 = (function (){var statearr_26278 = state_26269;
(statearr_26278[(9)] = inst_26262);

return statearr_26278;
})();
var statearr_26279_26343 = state_26269__$1;
(statearr_26279_26343[(2)] = null);

(statearr_26279_26343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (6))){
var inst_26234 = (state_26269[(7)]);
var state_26269__$1 = state_26269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26269__$1,(11),inst_26234);
} else {
if((state_val_26270 === (17))){
var inst_26255 = (state_26269[(2)]);
var state_26269__$1 = state_26269;
if(cljs.core.truth_(inst_26255)){
var statearr_26280_26344 = state_26269__$1;
(statearr_26280_26344[(1)] = (19));

} else {
var statearr_26281_26345 = state_26269__$1;
(statearr_26281_26345[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (3))){
var inst_26267 = (state_26269[(2)]);
var state_26269__$1 = state_26269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26269__$1,inst_26267);
} else {
if((state_val_26270 === (12))){
var inst_26244 = (state_26269[(10)]);
var state_26269__$1 = state_26269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26269__$1,(14),inst_26244);
} else {
if((state_val_26270 === (2))){
var state_26269__$1 = state_26269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26269__$1,(4),results);
} else {
if((state_val_26270 === (19))){
var state_26269__$1 = state_26269;
var statearr_26282_26346 = state_26269__$1;
(statearr_26282_26346[(2)] = null);

(statearr_26282_26346[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (11))){
var inst_26244 = (state_26269[(2)]);
var state_26269__$1 = (function (){var statearr_26283 = state_26269;
(statearr_26283[(10)] = inst_26244);

return statearr_26283;
})();
var statearr_26284_26347 = state_26269__$1;
(statearr_26284_26347[(2)] = null);

(statearr_26284_26347[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (9))){
var state_26269__$1 = state_26269;
var statearr_26285_26348 = state_26269__$1;
(statearr_26285_26348[(2)] = null);

(statearr_26285_26348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (5))){
var state_26269__$1 = state_26269;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26286_26349 = state_26269__$1;
(statearr_26286_26349[(1)] = (8));

} else {
var statearr_26287_26350 = state_26269__$1;
(statearr_26287_26350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (14))){
var inst_26249 = (state_26269[(11)]);
var inst_26247 = (state_26269[(8)]);
var inst_26247__$1 = (state_26269[(2)]);
var inst_26248 = (inst_26247__$1 == null);
var inst_26249__$1 = cljs.core.not.call(null,inst_26248);
var state_26269__$1 = (function (){var statearr_26288 = state_26269;
(statearr_26288[(11)] = inst_26249__$1);

(statearr_26288[(8)] = inst_26247__$1);

return statearr_26288;
})();
if(inst_26249__$1){
var statearr_26289_26351 = state_26269__$1;
(statearr_26289_26351[(1)] = (15));

} else {
var statearr_26290_26352 = state_26269__$1;
(statearr_26290_26352[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (16))){
var inst_26249 = (state_26269[(11)]);
var state_26269__$1 = state_26269;
var statearr_26291_26353 = state_26269__$1;
(statearr_26291_26353[(2)] = inst_26249);

(statearr_26291_26353[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (10))){
var inst_26241 = (state_26269[(2)]);
var state_26269__$1 = state_26269;
var statearr_26292_26354 = state_26269__$1;
(statearr_26292_26354[(2)] = inst_26241);

(statearr_26292_26354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (18))){
var inst_26252 = (state_26269[(2)]);
var state_26269__$1 = state_26269;
var statearr_26293_26355 = state_26269__$1;
(statearr_26293_26355[(2)] = inst_26252);

(statearr_26293_26355[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (8))){
var inst_26238 = cljs.core.async.close_BANG_.call(null,to);
var state_26269__$1 = state_26269;
var statearr_26294_26356 = state_26269__$1;
(statearr_26294_26356[(2)] = inst_26238);

(statearr_26294_26356[(1)] = (10));


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
});})(c__25730__auto__,jobs,results,process,async))
;
return ((function (switch__25616__auto__,c__25730__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____0 = (function (){
var statearr_26298 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26298[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__);

(statearr_26298[(1)] = (1));

return statearr_26298;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____1 = (function (state_26269){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_26269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e26299){if((e26299 instanceof Object)){
var ex__25620__auto__ = e26299;
var statearr_26300_26357 = state_26269;
(statearr_26300_26357[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26358 = state_26269;
state_26269 = G__26358;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__ = function(state_26269){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____1.call(this,state_26269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25617__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto__,jobs,results,process,async))
})();
var state__25732__auto__ = (function (){var statearr_26301 = f__25731__auto__.call(null);
(statearr_26301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto__);

return statearr_26301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto__,jobs,results,process,async))
);

return c__25730__auto__;
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
var args26359 = [];
var len__22617__auto___26362 = arguments.length;
var i__22618__auto___26363 = (0);
while(true){
if((i__22618__auto___26363 < len__22617__auto___26362)){
args26359.push((arguments[i__22618__auto___26363]));

var G__26364 = (i__22618__auto___26363 + (1));
i__22618__auto___26363 = G__26364;
continue;
} else {
}
break;
}

var G__26361 = args26359.length;
switch (G__26361) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26359.length)].join('')));

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
var args26366 = [];
var len__22617__auto___26369 = arguments.length;
var i__22618__auto___26370 = (0);
while(true){
if((i__22618__auto___26370 < len__22617__auto___26369)){
args26366.push((arguments[i__22618__auto___26370]));

var G__26371 = (i__22618__auto___26370 + (1));
i__22618__auto___26370 = G__26371;
continue;
} else {
}
break;
}

var G__26368 = args26366.length;
switch (G__26368) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26366.length)].join('')));

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
var args26373 = [];
var len__22617__auto___26426 = arguments.length;
var i__22618__auto___26427 = (0);
while(true){
if((i__22618__auto___26427 < len__22617__auto___26426)){
args26373.push((arguments[i__22618__auto___26427]));

var G__26428 = (i__22618__auto___26427 + (1));
i__22618__auto___26427 = G__26428;
continue;
} else {
}
break;
}

var G__26375 = args26373.length;
switch (G__26375) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26373.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25730__auto___26430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto___26430,tc,fc){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto___26430,tc,fc){
return (function (state_26401){
var state_val_26402 = (state_26401[(1)]);
if((state_val_26402 === (7))){
var inst_26397 = (state_26401[(2)]);
var state_26401__$1 = state_26401;
var statearr_26403_26431 = state_26401__$1;
(statearr_26403_26431[(2)] = inst_26397);

(statearr_26403_26431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (1))){
var state_26401__$1 = state_26401;
var statearr_26404_26432 = state_26401__$1;
(statearr_26404_26432[(2)] = null);

(statearr_26404_26432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (4))){
var inst_26378 = (state_26401[(7)]);
var inst_26378__$1 = (state_26401[(2)]);
var inst_26379 = (inst_26378__$1 == null);
var state_26401__$1 = (function (){var statearr_26405 = state_26401;
(statearr_26405[(7)] = inst_26378__$1);

return statearr_26405;
})();
if(cljs.core.truth_(inst_26379)){
var statearr_26406_26433 = state_26401__$1;
(statearr_26406_26433[(1)] = (5));

} else {
var statearr_26407_26434 = state_26401__$1;
(statearr_26407_26434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (13))){
var state_26401__$1 = state_26401;
var statearr_26408_26435 = state_26401__$1;
(statearr_26408_26435[(2)] = null);

(statearr_26408_26435[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (6))){
var inst_26378 = (state_26401[(7)]);
var inst_26384 = p.call(null,inst_26378);
var state_26401__$1 = state_26401;
if(cljs.core.truth_(inst_26384)){
var statearr_26409_26436 = state_26401__$1;
(statearr_26409_26436[(1)] = (9));

} else {
var statearr_26410_26437 = state_26401__$1;
(statearr_26410_26437[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (3))){
var inst_26399 = (state_26401[(2)]);
var state_26401__$1 = state_26401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26401__$1,inst_26399);
} else {
if((state_val_26402 === (12))){
var state_26401__$1 = state_26401;
var statearr_26411_26438 = state_26401__$1;
(statearr_26411_26438[(2)] = null);

(statearr_26411_26438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (2))){
var state_26401__$1 = state_26401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26401__$1,(4),ch);
} else {
if((state_val_26402 === (11))){
var inst_26378 = (state_26401[(7)]);
var inst_26388 = (state_26401[(2)]);
var state_26401__$1 = state_26401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26401__$1,(8),inst_26388,inst_26378);
} else {
if((state_val_26402 === (9))){
var state_26401__$1 = state_26401;
var statearr_26412_26439 = state_26401__$1;
(statearr_26412_26439[(2)] = tc);

(statearr_26412_26439[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (5))){
var inst_26381 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26382 = cljs.core.async.close_BANG_.call(null,fc);
var state_26401__$1 = (function (){var statearr_26413 = state_26401;
(statearr_26413[(8)] = inst_26381);

return statearr_26413;
})();
var statearr_26414_26440 = state_26401__$1;
(statearr_26414_26440[(2)] = inst_26382);

(statearr_26414_26440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (14))){
var inst_26395 = (state_26401[(2)]);
var state_26401__$1 = state_26401;
var statearr_26415_26441 = state_26401__$1;
(statearr_26415_26441[(2)] = inst_26395);

(statearr_26415_26441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (10))){
var state_26401__$1 = state_26401;
var statearr_26416_26442 = state_26401__$1;
(statearr_26416_26442[(2)] = fc);

(statearr_26416_26442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (8))){
var inst_26390 = (state_26401[(2)]);
var state_26401__$1 = state_26401;
if(cljs.core.truth_(inst_26390)){
var statearr_26417_26443 = state_26401__$1;
(statearr_26417_26443[(1)] = (12));

} else {
var statearr_26418_26444 = state_26401__$1;
(statearr_26418_26444[(1)] = (13));

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
});})(c__25730__auto___26430,tc,fc))
;
return ((function (switch__25616__auto__,c__25730__auto___26430,tc,fc){
return (function() {
var cljs$core$async$state_machine__25617__auto__ = null;
var cljs$core$async$state_machine__25617__auto____0 = (function (){
var statearr_26422 = [null,null,null,null,null,null,null,null,null];
(statearr_26422[(0)] = cljs$core$async$state_machine__25617__auto__);

(statearr_26422[(1)] = (1));

return statearr_26422;
});
var cljs$core$async$state_machine__25617__auto____1 = (function (state_26401){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_26401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e26423){if((e26423 instanceof Object)){
var ex__25620__auto__ = e26423;
var statearr_26424_26445 = state_26401;
(statearr_26424_26445[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26446 = state_26401;
state_26401 = G__26446;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
cljs$core$async$state_machine__25617__auto__ = function(state_26401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25617__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25617__auto____1.call(this,state_26401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25617__auto____0;
cljs$core$async$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25617__auto____1;
return cljs$core$async$state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto___26430,tc,fc))
})();
var state__25732__auto__ = (function (){var statearr_26425 = f__25731__auto__.call(null);
(statearr_26425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto___26430);

return statearr_26425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto___26430,tc,fc))
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
var c__25730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto__){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto__){
return (function (state_26510){
var state_val_26511 = (state_26510[(1)]);
if((state_val_26511 === (7))){
var inst_26506 = (state_26510[(2)]);
var state_26510__$1 = state_26510;
var statearr_26512_26533 = state_26510__$1;
(statearr_26512_26533[(2)] = inst_26506);

(statearr_26512_26533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (1))){
var inst_26490 = init;
var state_26510__$1 = (function (){var statearr_26513 = state_26510;
(statearr_26513[(7)] = inst_26490);

return statearr_26513;
})();
var statearr_26514_26534 = state_26510__$1;
(statearr_26514_26534[(2)] = null);

(statearr_26514_26534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (4))){
var inst_26493 = (state_26510[(8)]);
var inst_26493__$1 = (state_26510[(2)]);
var inst_26494 = (inst_26493__$1 == null);
var state_26510__$1 = (function (){var statearr_26515 = state_26510;
(statearr_26515[(8)] = inst_26493__$1);

return statearr_26515;
})();
if(cljs.core.truth_(inst_26494)){
var statearr_26516_26535 = state_26510__$1;
(statearr_26516_26535[(1)] = (5));

} else {
var statearr_26517_26536 = state_26510__$1;
(statearr_26517_26536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (6))){
var inst_26493 = (state_26510[(8)]);
var inst_26497 = (state_26510[(9)]);
var inst_26490 = (state_26510[(7)]);
var inst_26497__$1 = f.call(null,inst_26490,inst_26493);
var inst_26498 = cljs.core.reduced_QMARK_.call(null,inst_26497__$1);
var state_26510__$1 = (function (){var statearr_26518 = state_26510;
(statearr_26518[(9)] = inst_26497__$1);

return statearr_26518;
})();
if(inst_26498){
var statearr_26519_26537 = state_26510__$1;
(statearr_26519_26537[(1)] = (8));

} else {
var statearr_26520_26538 = state_26510__$1;
(statearr_26520_26538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (3))){
var inst_26508 = (state_26510[(2)]);
var state_26510__$1 = state_26510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26510__$1,inst_26508);
} else {
if((state_val_26511 === (2))){
var state_26510__$1 = state_26510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26510__$1,(4),ch);
} else {
if((state_val_26511 === (9))){
var inst_26497 = (state_26510[(9)]);
var inst_26490 = inst_26497;
var state_26510__$1 = (function (){var statearr_26521 = state_26510;
(statearr_26521[(7)] = inst_26490);

return statearr_26521;
})();
var statearr_26522_26539 = state_26510__$1;
(statearr_26522_26539[(2)] = null);

(statearr_26522_26539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (5))){
var inst_26490 = (state_26510[(7)]);
var state_26510__$1 = state_26510;
var statearr_26523_26540 = state_26510__$1;
(statearr_26523_26540[(2)] = inst_26490);

(statearr_26523_26540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (10))){
var inst_26504 = (state_26510[(2)]);
var state_26510__$1 = state_26510;
var statearr_26524_26541 = state_26510__$1;
(statearr_26524_26541[(2)] = inst_26504);

(statearr_26524_26541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (8))){
var inst_26497 = (state_26510[(9)]);
var inst_26500 = cljs.core.deref.call(null,inst_26497);
var state_26510__$1 = state_26510;
var statearr_26525_26542 = state_26510__$1;
(statearr_26525_26542[(2)] = inst_26500);

(statearr_26525_26542[(1)] = (10));


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
});})(c__25730__auto__))
;
return ((function (switch__25616__auto__,c__25730__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25617__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25617__auto____0 = (function (){
var statearr_26529 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26529[(0)] = cljs$core$async$reduce_$_state_machine__25617__auto__);

(statearr_26529[(1)] = (1));

return statearr_26529;
});
var cljs$core$async$reduce_$_state_machine__25617__auto____1 = (function (state_26510){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_26510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e26530){if((e26530 instanceof Object)){
var ex__25620__auto__ = e26530;
var statearr_26531_26543 = state_26510;
(statearr_26531_26543[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26544 = state_26510;
state_26510 = G__26544;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25617__auto__ = function(state_26510){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25617__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25617__auto____1.call(this,state_26510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25617__auto____0;
cljs$core$async$reduce_$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25617__auto____1;
return cljs$core$async$reduce_$_state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto__))
})();
var state__25732__auto__ = (function (){var statearr_26532 = f__25731__auto__.call(null);
(statearr_26532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto__);

return statearr_26532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto__))
);

return c__25730__auto__;
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
var args26545 = [];
var len__22617__auto___26597 = arguments.length;
var i__22618__auto___26598 = (0);
while(true){
if((i__22618__auto___26598 < len__22617__auto___26597)){
args26545.push((arguments[i__22618__auto___26598]));

var G__26599 = (i__22618__auto___26598 + (1));
i__22618__auto___26598 = G__26599;
continue;
} else {
}
break;
}

var G__26547 = args26545.length;
switch (G__26547) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26545.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto__){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto__){
return (function (state_26572){
var state_val_26573 = (state_26572[(1)]);
if((state_val_26573 === (7))){
var inst_26554 = (state_26572[(2)]);
var state_26572__$1 = state_26572;
var statearr_26574_26601 = state_26572__$1;
(statearr_26574_26601[(2)] = inst_26554);

(statearr_26574_26601[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (1))){
var inst_26548 = cljs.core.seq.call(null,coll);
var inst_26549 = inst_26548;
var state_26572__$1 = (function (){var statearr_26575 = state_26572;
(statearr_26575[(7)] = inst_26549);

return statearr_26575;
})();
var statearr_26576_26602 = state_26572__$1;
(statearr_26576_26602[(2)] = null);

(statearr_26576_26602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (4))){
var inst_26549 = (state_26572[(7)]);
var inst_26552 = cljs.core.first.call(null,inst_26549);
var state_26572__$1 = state_26572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26572__$1,(7),ch,inst_26552);
} else {
if((state_val_26573 === (13))){
var inst_26566 = (state_26572[(2)]);
var state_26572__$1 = state_26572;
var statearr_26577_26603 = state_26572__$1;
(statearr_26577_26603[(2)] = inst_26566);

(statearr_26577_26603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (6))){
var inst_26557 = (state_26572[(2)]);
var state_26572__$1 = state_26572;
if(cljs.core.truth_(inst_26557)){
var statearr_26578_26604 = state_26572__$1;
(statearr_26578_26604[(1)] = (8));

} else {
var statearr_26579_26605 = state_26572__$1;
(statearr_26579_26605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (3))){
var inst_26570 = (state_26572[(2)]);
var state_26572__$1 = state_26572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26572__$1,inst_26570);
} else {
if((state_val_26573 === (12))){
var state_26572__$1 = state_26572;
var statearr_26580_26606 = state_26572__$1;
(statearr_26580_26606[(2)] = null);

(statearr_26580_26606[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (2))){
var inst_26549 = (state_26572[(7)]);
var state_26572__$1 = state_26572;
if(cljs.core.truth_(inst_26549)){
var statearr_26581_26607 = state_26572__$1;
(statearr_26581_26607[(1)] = (4));

} else {
var statearr_26582_26608 = state_26572__$1;
(statearr_26582_26608[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (11))){
var inst_26563 = cljs.core.async.close_BANG_.call(null,ch);
var state_26572__$1 = state_26572;
var statearr_26583_26609 = state_26572__$1;
(statearr_26583_26609[(2)] = inst_26563);

(statearr_26583_26609[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (9))){
var state_26572__$1 = state_26572;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26584_26610 = state_26572__$1;
(statearr_26584_26610[(1)] = (11));

} else {
var statearr_26585_26611 = state_26572__$1;
(statearr_26585_26611[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (5))){
var inst_26549 = (state_26572[(7)]);
var state_26572__$1 = state_26572;
var statearr_26586_26612 = state_26572__$1;
(statearr_26586_26612[(2)] = inst_26549);

(statearr_26586_26612[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (10))){
var inst_26568 = (state_26572[(2)]);
var state_26572__$1 = state_26572;
var statearr_26587_26613 = state_26572__$1;
(statearr_26587_26613[(2)] = inst_26568);

(statearr_26587_26613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (8))){
var inst_26549 = (state_26572[(7)]);
var inst_26559 = cljs.core.next.call(null,inst_26549);
var inst_26549__$1 = inst_26559;
var state_26572__$1 = (function (){var statearr_26588 = state_26572;
(statearr_26588[(7)] = inst_26549__$1);

return statearr_26588;
})();
var statearr_26589_26614 = state_26572__$1;
(statearr_26589_26614[(2)] = null);

(statearr_26589_26614[(1)] = (2));


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
});})(c__25730__auto__))
;
return ((function (switch__25616__auto__,c__25730__auto__){
return (function() {
var cljs$core$async$state_machine__25617__auto__ = null;
var cljs$core$async$state_machine__25617__auto____0 = (function (){
var statearr_26593 = [null,null,null,null,null,null,null,null];
(statearr_26593[(0)] = cljs$core$async$state_machine__25617__auto__);

(statearr_26593[(1)] = (1));

return statearr_26593;
});
var cljs$core$async$state_machine__25617__auto____1 = (function (state_26572){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_26572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e26594){if((e26594 instanceof Object)){
var ex__25620__auto__ = e26594;
var statearr_26595_26615 = state_26572;
(statearr_26595_26615[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26616 = state_26572;
state_26572 = G__26616;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
cljs$core$async$state_machine__25617__auto__ = function(state_26572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25617__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25617__auto____1.call(this,state_26572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25617__auto____0;
cljs$core$async$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25617__auto____1;
return cljs$core$async$state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto__))
})();
var state__25732__auto__ = (function (){var statearr_26596 = f__25731__auto__.call(null);
(statearr_26596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto__);

return statearr_26596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto__))
);

return c__25730__auto__;
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
var x__22147__auto__ = (((_ == null))?null:_);
var m__22148__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,_);
} else {
var m__22148__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,_);
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
var x__22147__auto__ = (((m == null))?null:m);
var m__22148__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22148__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__22147__auto__ = (((m == null))?null:m);
var m__22148__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,m,ch);
} else {
var m__22148__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,m,ch);
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
var x__22147__auto__ = (((m == null))?null:m);
var m__22148__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,m);
} else {
var m__22148__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async26842 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26842 = (function (mult,ch,cs,meta26843){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26843 = meta26843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26844,meta26843__$1){
var self__ = this;
var _26844__$1 = this;
return (new cljs.core.async.t_cljs$core$async26842(self__.mult,self__.ch,self__.cs,meta26843__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26842.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26844){
var self__ = this;
var _26844__$1 = this;
return self__.meta26843;
});})(cs))
;

cljs.core.async.t_cljs$core$async26842.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26842.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26842.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async26842.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26842.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26842.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26842.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26843","meta26843",1923572414,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26842.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26842.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26842";

cljs.core.async.t_cljs$core$async26842.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cljs.core.async/t_cljs$core$async26842");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26842 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26842(mult__$1,ch__$1,cs__$1,meta26843){
return (new cljs.core.async.t_cljs$core$async26842(mult__$1,ch__$1,cs__$1,meta26843));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26842(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__25730__auto___27067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto___27067,cs,m,dchan,dctr,done){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto___27067,cs,m,dchan,dctr,done){
return (function (state_26979){
var state_val_26980 = (state_26979[(1)]);
if((state_val_26980 === (7))){
var inst_26975 = (state_26979[(2)]);
var state_26979__$1 = state_26979;
var statearr_26981_27068 = state_26979__$1;
(statearr_26981_27068[(2)] = inst_26975);

(statearr_26981_27068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (20))){
var inst_26878 = (state_26979[(7)]);
var inst_26890 = cljs.core.first.call(null,inst_26878);
var inst_26891 = cljs.core.nth.call(null,inst_26890,(0),null);
var inst_26892 = cljs.core.nth.call(null,inst_26890,(1),null);
var state_26979__$1 = (function (){var statearr_26982 = state_26979;
(statearr_26982[(8)] = inst_26891);

return statearr_26982;
})();
if(cljs.core.truth_(inst_26892)){
var statearr_26983_27069 = state_26979__$1;
(statearr_26983_27069[(1)] = (22));

} else {
var statearr_26984_27070 = state_26979__$1;
(statearr_26984_27070[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (27))){
var inst_26920 = (state_26979[(9)]);
var inst_26927 = (state_26979[(10)]);
var inst_26847 = (state_26979[(11)]);
var inst_26922 = (state_26979[(12)]);
var inst_26927__$1 = cljs.core._nth.call(null,inst_26920,inst_26922);
var inst_26928 = cljs.core.async.put_BANG_.call(null,inst_26927__$1,inst_26847,done);
var state_26979__$1 = (function (){var statearr_26985 = state_26979;
(statearr_26985[(10)] = inst_26927__$1);

return statearr_26985;
})();
if(cljs.core.truth_(inst_26928)){
var statearr_26986_27071 = state_26979__$1;
(statearr_26986_27071[(1)] = (30));

} else {
var statearr_26987_27072 = state_26979__$1;
(statearr_26987_27072[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (1))){
var state_26979__$1 = state_26979;
var statearr_26988_27073 = state_26979__$1;
(statearr_26988_27073[(2)] = null);

(statearr_26988_27073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (24))){
var inst_26878 = (state_26979[(7)]);
var inst_26897 = (state_26979[(2)]);
var inst_26898 = cljs.core.next.call(null,inst_26878);
var inst_26856 = inst_26898;
var inst_26857 = null;
var inst_26858 = (0);
var inst_26859 = (0);
var state_26979__$1 = (function (){var statearr_26989 = state_26979;
(statearr_26989[(13)] = inst_26859);

(statearr_26989[(14)] = inst_26858);

(statearr_26989[(15)] = inst_26856);

(statearr_26989[(16)] = inst_26897);

(statearr_26989[(17)] = inst_26857);

return statearr_26989;
})();
var statearr_26990_27074 = state_26979__$1;
(statearr_26990_27074[(2)] = null);

(statearr_26990_27074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (39))){
var state_26979__$1 = state_26979;
var statearr_26994_27075 = state_26979__$1;
(statearr_26994_27075[(2)] = null);

(statearr_26994_27075[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (4))){
var inst_26847 = (state_26979[(11)]);
var inst_26847__$1 = (state_26979[(2)]);
var inst_26848 = (inst_26847__$1 == null);
var state_26979__$1 = (function (){var statearr_26995 = state_26979;
(statearr_26995[(11)] = inst_26847__$1);

return statearr_26995;
})();
if(cljs.core.truth_(inst_26848)){
var statearr_26996_27076 = state_26979__$1;
(statearr_26996_27076[(1)] = (5));

} else {
var statearr_26997_27077 = state_26979__$1;
(statearr_26997_27077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (15))){
var inst_26859 = (state_26979[(13)]);
var inst_26858 = (state_26979[(14)]);
var inst_26856 = (state_26979[(15)]);
var inst_26857 = (state_26979[(17)]);
var inst_26874 = (state_26979[(2)]);
var inst_26875 = (inst_26859 + (1));
var tmp26991 = inst_26858;
var tmp26992 = inst_26856;
var tmp26993 = inst_26857;
var inst_26856__$1 = tmp26992;
var inst_26857__$1 = tmp26993;
var inst_26858__$1 = tmp26991;
var inst_26859__$1 = inst_26875;
var state_26979__$1 = (function (){var statearr_26998 = state_26979;
(statearr_26998[(13)] = inst_26859__$1);

(statearr_26998[(14)] = inst_26858__$1);

(statearr_26998[(15)] = inst_26856__$1);

(statearr_26998[(18)] = inst_26874);

(statearr_26998[(17)] = inst_26857__$1);

return statearr_26998;
})();
var statearr_26999_27078 = state_26979__$1;
(statearr_26999_27078[(2)] = null);

(statearr_26999_27078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (21))){
var inst_26901 = (state_26979[(2)]);
var state_26979__$1 = state_26979;
var statearr_27003_27079 = state_26979__$1;
(statearr_27003_27079[(2)] = inst_26901);

(statearr_27003_27079[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (31))){
var inst_26927 = (state_26979[(10)]);
var inst_26931 = done.call(null,null);
var inst_26932 = cljs.core.async.untap_STAR_.call(null,m,inst_26927);
var state_26979__$1 = (function (){var statearr_27004 = state_26979;
(statearr_27004[(19)] = inst_26931);

return statearr_27004;
})();
var statearr_27005_27080 = state_26979__$1;
(statearr_27005_27080[(2)] = inst_26932);

(statearr_27005_27080[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (32))){
var inst_26920 = (state_26979[(9)]);
var inst_26919 = (state_26979[(20)]);
var inst_26922 = (state_26979[(12)]);
var inst_26921 = (state_26979[(21)]);
var inst_26934 = (state_26979[(2)]);
var inst_26935 = (inst_26922 + (1));
var tmp27000 = inst_26920;
var tmp27001 = inst_26919;
var tmp27002 = inst_26921;
var inst_26919__$1 = tmp27001;
var inst_26920__$1 = tmp27000;
var inst_26921__$1 = tmp27002;
var inst_26922__$1 = inst_26935;
var state_26979__$1 = (function (){var statearr_27006 = state_26979;
(statearr_27006[(22)] = inst_26934);

(statearr_27006[(9)] = inst_26920__$1);

(statearr_27006[(20)] = inst_26919__$1);

(statearr_27006[(12)] = inst_26922__$1);

(statearr_27006[(21)] = inst_26921__$1);

return statearr_27006;
})();
var statearr_27007_27081 = state_26979__$1;
(statearr_27007_27081[(2)] = null);

(statearr_27007_27081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (40))){
var inst_26947 = (state_26979[(23)]);
var inst_26951 = done.call(null,null);
var inst_26952 = cljs.core.async.untap_STAR_.call(null,m,inst_26947);
var state_26979__$1 = (function (){var statearr_27008 = state_26979;
(statearr_27008[(24)] = inst_26951);

return statearr_27008;
})();
var statearr_27009_27082 = state_26979__$1;
(statearr_27009_27082[(2)] = inst_26952);

(statearr_27009_27082[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (33))){
var inst_26938 = (state_26979[(25)]);
var inst_26940 = cljs.core.chunked_seq_QMARK_.call(null,inst_26938);
var state_26979__$1 = state_26979;
if(inst_26940){
var statearr_27010_27083 = state_26979__$1;
(statearr_27010_27083[(1)] = (36));

} else {
var statearr_27011_27084 = state_26979__$1;
(statearr_27011_27084[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (13))){
var inst_26868 = (state_26979[(26)]);
var inst_26871 = cljs.core.async.close_BANG_.call(null,inst_26868);
var state_26979__$1 = state_26979;
var statearr_27012_27085 = state_26979__$1;
(statearr_27012_27085[(2)] = inst_26871);

(statearr_27012_27085[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (22))){
var inst_26891 = (state_26979[(8)]);
var inst_26894 = cljs.core.async.close_BANG_.call(null,inst_26891);
var state_26979__$1 = state_26979;
var statearr_27013_27086 = state_26979__$1;
(statearr_27013_27086[(2)] = inst_26894);

(statearr_27013_27086[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (36))){
var inst_26938 = (state_26979[(25)]);
var inst_26942 = cljs.core.chunk_first.call(null,inst_26938);
var inst_26943 = cljs.core.chunk_rest.call(null,inst_26938);
var inst_26944 = cljs.core.count.call(null,inst_26942);
var inst_26919 = inst_26943;
var inst_26920 = inst_26942;
var inst_26921 = inst_26944;
var inst_26922 = (0);
var state_26979__$1 = (function (){var statearr_27014 = state_26979;
(statearr_27014[(9)] = inst_26920);

(statearr_27014[(20)] = inst_26919);

(statearr_27014[(12)] = inst_26922);

(statearr_27014[(21)] = inst_26921);

return statearr_27014;
})();
var statearr_27015_27087 = state_26979__$1;
(statearr_27015_27087[(2)] = null);

(statearr_27015_27087[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (41))){
var inst_26938 = (state_26979[(25)]);
var inst_26954 = (state_26979[(2)]);
var inst_26955 = cljs.core.next.call(null,inst_26938);
var inst_26919 = inst_26955;
var inst_26920 = null;
var inst_26921 = (0);
var inst_26922 = (0);
var state_26979__$1 = (function (){var statearr_27016 = state_26979;
(statearr_27016[(9)] = inst_26920);

(statearr_27016[(27)] = inst_26954);

(statearr_27016[(20)] = inst_26919);

(statearr_27016[(12)] = inst_26922);

(statearr_27016[(21)] = inst_26921);

return statearr_27016;
})();
var statearr_27017_27088 = state_26979__$1;
(statearr_27017_27088[(2)] = null);

(statearr_27017_27088[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (43))){
var state_26979__$1 = state_26979;
var statearr_27018_27089 = state_26979__$1;
(statearr_27018_27089[(2)] = null);

(statearr_27018_27089[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (29))){
var inst_26963 = (state_26979[(2)]);
var state_26979__$1 = state_26979;
var statearr_27019_27090 = state_26979__$1;
(statearr_27019_27090[(2)] = inst_26963);

(statearr_27019_27090[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (44))){
var inst_26972 = (state_26979[(2)]);
var state_26979__$1 = (function (){var statearr_27020 = state_26979;
(statearr_27020[(28)] = inst_26972);

return statearr_27020;
})();
var statearr_27021_27091 = state_26979__$1;
(statearr_27021_27091[(2)] = null);

(statearr_27021_27091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (6))){
var inst_26911 = (state_26979[(29)]);
var inst_26910 = cljs.core.deref.call(null,cs);
var inst_26911__$1 = cljs.core.keys.call(null,inst_26910);
var inst_26912 = cljs.core.count.call(null,inst_26911__$1);
var inst_26913 = cljs.core.reset_BANG_.call(null,dctr,inst_26912);
var inst_26918 = cljs.core.seq.call(null,inst_26911__$1);
var inst_26919 = inst_26918;
var inst_26920 = null;
var inst_26921 = (0);
var inst_26922 = (0);
var state_26979__$1 = (function (){var statearr_27022 = state_26979;
(statearr_27022[(9)] = inst_26920);

(statearr_27022[(20)] = inst_26919);

(statearr_27022[(29)] = inst_26911__$1);

(statearr_27022[(30)] = inst_26913);

(statearr_27022[(12)] = inst_26922);

(statearr_27022[(21)] = inst_26921);

return statearr_27022;
})();
var statearr_27023_27092 = state_26979__$1;
(statearr_27023_27092[(2)] = null);

(statearr_27023_27092[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (28))){
var inst_26919 = (state_26979[(20)]);
var inst_26938 = (state_26979[(25)]);
var inst_26938__$1 = cljs.core.seq.call(null,inst_26919);
var state_26979__$1 = (function (){var statearr_27024 = state_26979;
(statearr_27024[(25)] = inst_26938__$1);

return statearr_27024;
})();
if(inst_26938__$1){
var statearr_27025_27093 = state_26979__$1;
(statearr_27025_27093[(1)] = (33));

} else {
var statearr_27026_27094 = state_26979__$1;
(statearr_27026_27094[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (25))){
var inst_26922 = (state_26979[(12)]);
var inst_26921 = (state_26979[(21)]);
var inst_26924 = (inst_26922 < inst_26921);
var inst_26925 = inst_26924;
var state_26979__$1 = state_26979;
if(cljs.core.truth_(inst_26925)){
var statearr_27027_27095 = state_26979__$1;
(statearr_27027_27095[(1)] = (27));

} else {
var statearr_27028_27096 = state_26979__$1;
(statearr_27028_27096[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (34))){
var state_26979__$1 = state_26979;
var statearr_27029_27097 = state_26979__$1;
(statearr_27029_27097[(2)] = null);

(statearr_27029_27097[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (17))){
var state_26979__$1 = state_26979;
var statearr_27030_27098 = state_26979__$1;
(statearr_27030_27098[(2)] = null);

(statearr_27030_27098[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (3))){
var inst_26977 = (state_26979[(2)]);
var state_26979__$1 = state_26979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26979__$1,inst_26977);
} else {
if((state_val_26980 === (12))){
var inst_26906 = (state_26979[(2)]);
var state_26979__$1 = state_26979;
var statearr_27031_27099 = state_26979__$1;
(statearr_27031_27099[(2)] = inst_26906);

(statearr_27031_27099[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (2))){
var state_26979__$1 = state_26979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26979__$1,(4),ch);
} else {
if((state_val_26980 === (23))){
var state_26979__$1 = state_26979;
var statearr_27032_27100 = state_26979__$1;
(statearr_27032_27100[(2)] = null);

(statearr_27032_27100[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (35))){
var inst_26961 = (state_26979[(2)]);
var state_26979__$1 = state_26979;
var statearr_27033_27101 = state_26979__$1;
(statearr_27033_27101[(2)] = inst_26961);

(statearr_27033_27101[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (19))){
var inst_26878 = (state_26979[(7)]);
var inst_26882 = cljs.core.chunk_first.call(null,inst_26878);
var inst_26883 = cljs.core.chunk_rest.call(null,inst_26878);
var inst_26884 = cljs.core.count.call(null,inst_26882);
var inst_26856 = inst_26883;
var inst_26857 = inst_26882;
var inst_26858 = inst_26884;
var inst_26859 = (0);
var state_26979__$1 = (function (){var statearr_27034 = state_26979;
(statearr_27034[(13)] = inst_26859);

(statearr_27034[(14)] = inst_26858);

(statearr_27034[(15)] = inst_26856);

(statearr_27034[(17)] = inst_26857);

return statearr_27034;
})();
var statearr_27035_27102 = state_26979__$1;
(statearr_27035_27102[(2)] = null);

(statearr_27035_27102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (11))){
var inst_26856 = (state_26979[(15)]);
var inst_26878 = (state_26979[(7)]);
var inst_26878__$1 = cljs.core.seq.call(null,inst_26856);
var state_26979__$1 = (function (){var statearr_27036 = state_26979;
(statearr_27036[(7)] = inst_26878__$1);

return statearr_27036;
})();
if(inst_26878__$1){
var statearr_27037_27103 = state_26979__$1;
(statearr_27037_27103[(1)] = (16));

} else {
var statearr_27038_27104 = state_26979__$1;
(statearr_27038_27104[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (9))){
var inst_26908 = (state_26979[(2)]);
var state_26979__$1 = state_26979;
var statearr_27039_27105 = state_26979__$1;
(statearr_27039_27105[(2)] = inst_26908);

(statearr_27039_27105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (5))){
var inst_26854 = cljs.core.deref.call(null,cs);
var inst_26855 = cljs.core.seq.call(null,inst_26854);
var inst_26856 = inst_26855;
var inst_26857 = null;
var inst_26858 = (0);
var inst_26859 = (0);
var state_26979__$1 = (function (){var statearr_27040 = state_26979;
(statearr_27040[(13)] = inst_26859);

(statearr_27040[(14)] = inst_26858);

(statearr_27040[(15)] = inst_26856);

(statearr_27040[(17)] = inst_26857);

return statearr_27040;
})();
var statearr_27041_27106 = state_26979__$1;
(statearr_27041_27106[(2)] = null);

(statearr_27041_27106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (14))){
var state_26979__$1 = state_26979;
var statearr_27042_27107 = state_26979__$1;
(statearr_27042_27107[(2)] = null);

(statearr_27042_27107[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (45))){
var inst_26969 = (state_26979[(2)]);
var state_26979__$1 = state_26979;
var statearr_27043_27108 = state_26979__$1;
(statearr_27043_27108[(2)] = inst_26969);

(statearr_27043_27108[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (26))){
var inst_26911 = (state_26979[(29)]);
var inst_26965 = (state_26979[(2)]);
var inst_26966 = cljs.core.seq.call(null,inst_26911);
var state_26979__$1 = (function (){var statearr_27044 = state_26979;
(statearr_27044[(31)] = inst_26965);

return statearr_27044;
})();
if(inst_26966){
var statearr_27045_27109 = state_26979__$1;
(statearr_27045_27109[(1)] = (42));

} else {
var statearr_27046_27110 = state_26979__$1;
(statearr_27046_27110[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (16))){
var inst_26878 = (state_26979[(7)]);
var inst_26880 = cljs.core.chunked_seq_QMARK_.call(null,inst_26878);
var state_26979__$1 = state_26979;
if(inst_26880){
var statearr_27047_27111 = state_26979__$1;
(statearr_27047_27111[(1)] = (19));

} else {
var statearr_27048_27112 = state_26979__$1;
(statearr_27048_27112[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (38))){
var inst_26958 = (state_26979[(2)]);
var state_26979__$1 = state_26979;
var statearr_27049_27113 = state_26979__$1;
(statearr_27049_27113[(2)] = inst_26958);

(statearr_27049_27113[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (30))){
var state_26979__$1 = state_26979;
var statearr_27050_27114 = state_26979__$1;
(statearr_27050_27114[(2)] = null);

(statearr_27050_27114[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (10))){
var inst_26859 = (state_26979[(13)]);
var inst_26857 = (state_26979[(17)]);
var inst_26867 = cljs.core._nth.call(null,inst_26857,inst_26859);
var inst_26868 = cljs.core.nth.call(null,inst_26867,(0),null);
var inst_26869 = cljs.core.nth.call(null,inst_26867,(1),null);
var state_26979__$1 = (function (){var statearr_27051 = state_26979;
(statearr_27051[(26)] = inst_26868);

return statearr_27051;
})();
if(cljs.core.truth_(inst_26869)){
var statearr_27052_27115 = state_26979__$1;
(statearr_27052_27115[(1)] = (13));

} else {
var statearr_27053_27116 = state_26979__$1;
(statearr_27053_27116[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (18))){
var inst_26904 = (state_26979[(2)]);
var state_26979__$1 = state_26979;
var statearr_27054_27117 = state_26979__$1;
(statearr_27054_27117[(2)] = inst_26904);

(statearr_27054_27117[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (42))){
var state_26979__$1 = state_26979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26979__$1,(45),dchan);
} else {
if((state_val_26980 === (37))){
var inst_26947 = (state_26979[(23)]);
var inst_26938 = (state_26979[(25)]);
var inst_26847 = (state_26979[(11)]);
var inst_26947__$1 = cljs.core.first.call(null,inst_26938);
var inst_26948 = cljs.core.async.put_BANG_.call(null,inst_26947__$1,inst_26847,done);
var state_26979__$1 = (function (){var statearr_27055 = state_26979;
(statearr_27055[(23)] = inst_26947__$1);

return statearr_27055;
})();
if(cljs.core.truth_(inst_26948)){
var statearr_27056_27118 = state_26979__$1;
(statearr_27056_27118[(1)] = (39));

} else {
var statearr_27057_27119 = state_26979__$1;
(statearr_27057_27119[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (8))){
var inst_26859 = (state_26979[(13)]);
var inst_26858 = (state_26979[(14)]);
var inst_26861 = (inst_26859 < inst_26858);
var inst_26862 = inst_26861;
var state_26979__$1 = state_26979;
if(cljs.core.truth_(inst_26862)){
var statearr_27058_27120 = state_26979__$1;
(statearr_27058_27120[(1)] = (10));

} else {
var statearr_27059_27121 = state_26979__$1;
(statearr_27059_27121[(1)] = (11));

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
});})(c__25730__auto___27067,cs,m,dchan,dctr,done))
;
return ((function (switch__25616__auto__,c__25730__auto___27067,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25617__auto__ = null;
var cljs$core$async$mult_$_state_machine__25617__auto____0 = (function (){
var statearr_27063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27063[(0)] = cljs$core$async$mult_$_state_machine__25617__auto__);

(statearr_27063[(1)] = (1));

return statearr_27063;
});
var cljs$core$async$mult_$_state_machine__25617__auto____1 = (function (state_26979){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_26979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e27064){if((e27064 instanceof Object)){
var ex__25620__auto__ = e27064;
var statearr_27065_27122 = state_26979;
(statearr_27065_27122[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27123 = state_26979;
state_26979 = G__27123;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25617__auto__ = function(state_26979){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25617__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25617__auto____1.call(this,state_26979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25617__auto____0;
cljs$core$async$mult_$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25617__auto____1;
return cljs$core$async$mult_$_state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto___27067,cs,m,dchan,dctr,done))
})();
var state__25732__auto__ = (function (){var statearr_27066 = f__25731__auto__.call(null);
(statearr_27066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto___27067);

return statearr_27066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto___27067,cs,m,dchan,dctr,done))
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
var args27124 = [];
var len__22617__auto___27127 = arguments.length;
var i__22618__auto___27128 = (0);
while(true){
if((i__22618__auto___27128 < len__22617__auto___27127)){
args27124.push((arguments[i__22618__auto___27128]));

var G__27129 = (i__22618__auto___27128 + (1));
i__22618__auto___27128 = G__27129;
continue;
} else {
}
break;
}

var G__27126 = args27124.length;
switch (G__27126) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27124.length)].join('')));

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
var x__22147__auto__ = (((m == null))?null:m);
var m__22148__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,m,ch);
} else {
var m__22148__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,m,ch);
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
var x__22147__auto__ = (((m == null))?null:m);
var m__22148__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,m,ch);
} else {
var m__22148__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,m,ch);
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
var x__22147__auto__ = (((m == null))?null:m);
var m__22148__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,m);
} else {
var m__22148__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,m);
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
var x__22147__auto__ = (((m == null))?null:m);
var m__22148__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,m,state_map);
} else {
var m__22148__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,m,state_map);
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
var x__22147__auto__ = (((m == null))?null:m);
var m__22148__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,m,mode);
} else {
var m__22148__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22624__auto__ = [];
var len__22617__auto___27141 = arguments.length;
var i__22618__auto___27142 = (0);
while(true){
if((i__22618__auto___27142 < len__22617__auto___27141)){
args__22624__auto__.push((arguments[i__22618__auto___27142]));

var G__27143 = (i__22618__auto___27142 + (1));
i__22618__auto___27142 = G__27143;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((3) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22625__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27135){
var map__27136 = p__27135;
var map__27136__$1 = ((((!((map__27136 == null)))?((((map__27136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27136):map__27136);
var opts = map__27136__$1;
var statearr_27138_27144 = state;
(statearr_27138_27144[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6369__auto__ = cljs.core.async.do_alts.call(null,((function (map__27136,map__27136__$1,opts){
return (function (val){
var statearr_27139_27145 = state;
(statearr_27139_27145[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27136,map__27136__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6369__auto__)){
var cb = temp__6369__auto__;
var statearr_27140_27146 = state;
(statearr_27140_27146[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27131){
var G__27132 = cljs.core.first.call(null,seq27131);
var seq27131__$1 = cljs.core.next.call(null,seq27131);
var G__27133 = cljs.core.first.call(null,seq27131__$1);
var seq27131__$2 = cljs.core.next.call(null,seq27131__$1);
var G__27134 = cljs.core.first.call(null,seq27131__$2);
var seq27131__$3 = cljs.core.next.call(null,seq27131__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27132,G__27133,G__27134,seq27131__$3);
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
if(typeof cljs.core.async.t_cljs$core$async27312 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27312 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27313){
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
this.meta27313 = meta27313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27314,meta27313__$1){
var self__ = this;
var _27314__$1 = this;
return (new cljs.core.async.t_cljs$core$async27312(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27313__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27314){
var self__ = this;
var _27314__$1 = this;
return self__.meta27313;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27312.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27313","meta27313",1379960073,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27312.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27312";

cljs.core.async.t_cljs$core$async27312.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cljs.core.async/t_cljs$core$async27312");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27312 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27312(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27313){
return (new cljs.core.async.t_cljs$core$async27312(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27313));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27312(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25730__auto___27477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto___27477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto___27477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27414){
var state_val_27415 = (state_27414[(1)]);
if((state_val_27415 === (7))){
var inst_27330 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
var statearr_27416_27478 = state_27414__$1;
(statearr_27416_27478[(2)] = inst_27330);

(statearr_27416_27478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (20))){
var inst_27342 = (state_27414[(7)]);
var state_27414__$1 = state_27414;
var statearr_27417_27479 = state_27414__$1;
(statearr_27417_27479[(2)] = inst_27342);

(statearr_27417_27479[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (27))){
var state_27414__$1 = state_27414;
var statearr_27418_27480 = state_27414__$1;
(statearr_27418_27480[(2)] = null);

(statearr_27418_27480[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (1))){
var inst_27318 = (state_27414[(8)]);
var inst_27318__$1 = calc_state.call(null);
var inst_27320 = (inst_27318__$1 == null);
var inst_27321 = cljs.core.not.call(null,inst_27320);
var state_27414__$1 = (function (){var statearr_27419 = state_27414;
(statearr_27419[(8)] = inst_27318__$1);

return statearr_27419;
})();
if(inst_27321){
var statearr_27420_27481 = state_27414__$1;
(statearr_27420_27481[(1)] = (2));

} else {
var statearr_27421_27482 = state_27414__$1;
(statearr_27421_27482[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (24))){
var inst_27374 = (state_27414[(9)]);
var inst_27365 = (state_27414[(10)]);
var inst_27388 = (state_27414[(11)]);
var inst_27388__$1 = inst_27365.call(null,inst_27374);
var state_27414__$1 = (function (){var statearr_27422 = state_27414;
(statearr_27422[(11)] = inst_27388__$1);

return statearr_27422;
})();
if(cljs.core.truth_(inst_27388__$1)){
var statearr_27423_27483 = state_27414__$1;
(statearr_27423_27483[(1)] = (29));

} else {
var statearr_27424_27484 = state_27414__$1;
(statearr_27424_27484[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (4))){
var inst_27333 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
if(cljs.core.truth_(inst_27333)){
var statearr_27425_27485 = state_27414__$1;
(statearr_27425_27485[(1)] = (8));

} else {
var statearr_27426_27486 = state_27414__$1;
(statearr_27426_27486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (15))){
var inst_27359 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
if(cljs.core.truth_(inst_27359)){
var statearr_27427_27487 = state_27414__$1;
(statearr_27427_27487[(1)] = (19));

} else {
var statearr_27428_27488 = state_27414__$1;
(statearr_27428_27488[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (21))){
var inst_27364 = (state_27414[(12)]);
var inst_27364__$1 = (state_27414[(2)]);
var inst_27365 = cljs.core.get.call(null,inst_27364__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27366 = cljs.core.get.call(null,inst_27364__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27367 = cljs.core.get.call(null,inst_27364__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27414__$1 = (function (){var statearr_27429 = state_27414;
(statearr_27429[(10)] = inst_27365);

(statearr_27429[(12)] = inst_27364__$1);

(statearr_27429[(13)] = inst_27366);

return statearr_27429;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27414__$1,(22),inst_27367);
} else {
if((state_val_27415 === (31))){
var inst_27396 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
if(cljs.core.truth_(inst_27396)){
var statearr_27430_27489 = state_27414__$1;
(statearr_27430_27489[(1)] = (32));

} else {
var statearr_27431_27490 = state_27414__$1;
(statearr_27431_27490[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (32))){
var inst_27373 = (state_27414[(14)]);
var state_27414__$1 = state_27414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27414__$1,(35),out,inst_27373);
} else {
if((state_val_27415 === (33))){
var inst_27364 = (state_27414[(12)]);
var inst_27342 = inst_27364;
var state_27414__$1 = (function (){var statearr_27432 = state_27414;
(statearr_27432[(7)] = inst_27342);

return statearr_27432;
})();
var statearr_27433_27491 = state_27414__$1;
(statearr_27433_27491[(2)] = null);

(statearr_27433_27491[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (13))){
var inst_27342 = (state_27414[(7)]);
var inst_27349 = inst_27342.cljs$lang$protocol_mask$partition0$;
var inst_27350 = (inst_27349 & (64));
var inst_27351 = inst_27342.cljs$core$ISeq$;
var inst_27352 = (inst_27350) || (inst_27351);
var state_27414__$1 = state_27414;
if(cljs.core.truth_(inst_27352)){
var statearr_27434_27492 = state_27414__$1;
(statearr_27434_27492[(1)] = (16));

} else {
var statearr_27435_27493 = state_27414__$1;
(statearr_27435_27493[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (22))){
var inst_27374 = (state_27414[(9)]);
var inst_27373 = (state_27414[(14)]);
var inst_27372 = (state_27414[(2)]);
var inst_27373__$1 = cljs.core.nth.call(null,inst_27372,(0),null);
var inst_27374__$1 = cljs.core.nth.call(null,inst_27372,(1),null);
var inst_27375 = (inst_27373__$1 == null);
var inst_27376 = cljs.core._EQ_.call(null,inst_27374__$1,change);
var inst_27377 = (inst_27375) || (inst_27376);
var state_27414__$1 = (function (){var statearr_27436 = state_27414;
(statearr_27436[(9)] = inst_27374__$1);

(statearr_27436[(14)] = inst_27373__$1);

return statearr_27436;
})();
if(cljs.core.truth_(inst_27377)){
var statearr_27437_27494 = state_27414__$1;
(statearr_27437_27494[(1)] = (23));

} else {
var statearr_27438_27495 = state_27414__$1;
(statearr_27438_27495[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (36))){
var inst_27364 = (state_27414[(12)]);
var inst_27342 = inst_27364;
var state_27414__$1 = (function (){var statearr_27439 = state_27414;
(statearr_27439[(7)] = inst_27342);

return statearr_27439;
})();
var statearr_27440_27496 = state_27414__$1;
(statearr_27440_27496[(2)] = null);

(statearr_27440_27496[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (29))){
var inst_27388 = (state_27414[(11)]);
var state_27414__$1 = state_27414;
var statearr_27441_27497 = state_27414__$1;
(statearr_27441_27497[(2)] = inst_27388);

(statearr_27441_27497[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (6))){
var state_27414__$1 = state_27414;
var statearr_27442_27498 = state_27414__$1;
(statearr_27442_27498[(2)] = false);

(statearr_27442_27498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (28))){
var inst_27384 = (state_27414[(2)]);
var inst_27385 = calc_state.call(null);
var inst_27342 = inst_27385;
var state_27414__$1 = (function (){var statearr_27443 = state_27414;
(statearr_27443[(15)] = inst_27384);

(statearr_27443[(7)] = inst_27342);

return statearr_27443;
})();
var statearr_27444_27499 = state_27414__$1;
(statearr_27444_27499[(2)] = null);

(statearr_27444_27499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (25))){
var inst_27410 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
var statearr_27445_27500 = state_27414__$1;
(statearr_27445_27500[(2)] = inst_27410);

(statearr_27445_27500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (34))){
var inst_27408 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
var statearr_27446_27501 = state_27414__$1;
(statearr_27446_27501[(2)] = inst_27408);

(statearr_27446_27501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (17))){
var state_27414__$1 = state_27414;
var statearr_27447_27502 = state_27414__$1;
(statearr_27447_27502[(2)] = false);

(statearr_27447_27502[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (3))){
var state_27414__$1 = state_27414;
var statearr_27448_27503 = state_27414__$1;
(statearr_27448_27503[(2)] = false);

(statearr_27448_27503[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (12))){
var inst_27412 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27414__$1,inst_27412);
} else {
if((state_val_27415 === (2))){
var inst_27318 = (state_27414[(8)]);
var inst_27323 = inst_27318.cljs$lang$protocol_mask$partition0$;
var inst_27324 = (inst_27323 & (64));
var inst_27325 = inst_27318.cljs$core$ISeq$;
var inst_27326 = (inst_27324) || (inst_27325);
var state_27414__$1 = state_27414;
if(cljs.core.truth_(inst_27326)){
var statearr_27449_27504 = state_27414__$1;
(statearr_27449_27504[(1)] = (5));

} else {
var statearr_27450_27505 = state_27414__$1;
(statearr_27450_27505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (23))){
var inst_27373 = (state_27414[(14)]);
var inst_27379 = (inst_27373 == null);
var state_27414__$1 = state_27414;
if(cljs.core.truth_(inst_27379)){
var statearr_27451_27506 = state_27414__$1;
(statearr_27451_27506[(1)] = (26));

} else {
var statearr_27452_27507 = state_27414__$1;
(statearr_27452_27507[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (35))){
var inst_27399 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
if(cljs.core.truth_(inst_27399)){
var statearr_27453_27508 = state_27414__$1;
(statearr_27453_27508[(1)] = (36));

} else {
var statearr_27454_27509 = state_27414__$1;
(statearr_27454_27509[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (19))){
var inst_27342 = (state_27414[(7)]);
var inst_27361 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27342);
var state_27414__$1 = state_27414;
var statearr_27455_27510 = state_27414__$1;
(statearr_27455_27510[(2)] = inst_27361);

(statearr_27455_27510[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (11))){
var inst_27342 = (state_27414[(7)]);
var inst_27346 = (inst_27342 == null);
var inst_27347 = cljs.core.not.call(null,inst_27346);
var state_27414__$1 = state_27414;
if(inst_27347){
var statearr_27456_27511 = state_27414__$1;
(statearr_27456_27511[(1)] = (13));

} else {
var statearr_27457_27512 = state_27414__$1;
(statearr_27457_27512[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (9))){
var inst_27318 = (state_27414[(8)]);
var state_27414__$1 = state_27414;
var statearr_27458_27513 = state_27414__$1;
(statearr_27458_27513[(2)] = inst_27318);

(statearr_27458_27513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (5))){
var state_27414__$1 = state_27414;
var statearr_27459_27514 = state_27414__$1;
(statearr_27459_27514[(2)] = true);

(statearr_27459_27514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (14))){
var state_27414__$1 = state_27414;
var statearr_27460_27515 = state_27414__$1;
(statearr_27460_27515[(2)] = false);

(statearr_27460_27515[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (26))){
var inst_27374 = (state_27414[(9)]);
var inst_27381 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27374);
var state_27414__$1 = state_27414;
var statearr_27461_27516 = state_27414__$1;
(statearr_27461_27516[(2)] = inst_27381);

(statearr_27461_27516[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (16))){
var state_27414__$1 = state_27414;
var statearr_27462_27517 = state_27414__$1;
(statearr_27462_27517[(2)] = true);

(statearr_27462_27517[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (38))){
var inst_27404 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
var statearr_27463_27518 = state_27414__$1;
(statearr_27463_27518[(2)] = inst_27404);

(statearr_27463_27518[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (30))){
var inst_27374 = (state_27414[(9)]);
var inst_27365 = (state_27414[(10)]);
var inst_27366 = (state_27414[(13)]);
var inst_27391 = cljs.core.empty_QMARK_.call(null,inst_27365);
var inst_27392 = inst_27366.call(null,inst_27374);
var inst_27393 = cljs.core.not.call(null,inst_27392);
var inst_27394 = (inst_27391) && (inst_27393);
var state_27414__$1 = state_27414;
var statearr_27464_27519 = state_27414__$1;
(statearr_27464_27519[(2)] = inst_27394);

(statearr_27464_27519[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (10))){
var inst_27318 = (state_27414[(8)]);
var inst_27338 = (state_27414[(2)]);
var inst_27339 = cljs.core.get.call(null,inst_27338,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27340 = cljs.core.get.call(null,inst_27338,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27341 = cljs.core.get.call(null,inst_27338,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27342 = inst_27318;
var state_27414__$1 = (function (){var statearr_27465 = state_27414;
(statearr_27465[(16)] = inst_27341);

(statearr_27465[(17)] = inst_27340);

(statearr_27465[(7)] = inst_27342);

(statearr_27465[(18)] = inst_27339);

return statearr_27465;
})();
var statearr_27466_27520 = state_27414__$1;
(statearr_27466_27520[(2)] = null);

(statearr_27466_27520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (18))){
var inst_27356 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
var statearr_27467_27521 = state_27414__$1;
(statearr_27467_27521[(2)] = inst_27356);

(statearr_27467_27521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (37))){
var state_27414__$1 = state_27414;
var statearr_27468_27522 = state_27414__$1;
(statearr_27468_27522[(2)] = null);

(statearr_27468_27522[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (8))){
var inst_27318 = (state_27414[(8)]);
var inst_27335 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27318);
var state_27414__$1 = state_27414;
var statearr_27469_27523 = state_27414__$1;
(statearr_27469_27523[(2)] = inst_27335);

(statearr_27469_27523[(1)] = (10));


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
});})(c__25730__auto___27477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25616__auto__,c__25730__auto___27477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25617__auto__ = null;
var cljs$core$async$mix_$_state_machine__25617__auto____0 = (function (){
var statearr_27473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27473[(0)] = cljs$core$async$mix_$_state_machine__25617__auto__);

(statearr_27473[(1)] = (1));

return statearr_27473;
});
var cljs$core$async$mix_$_state_machine__25617__auto____1 = (function (state_27414){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_27414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e27474){if((e27474 instanceof Object)){
var ex__25620__auto__ = e27474;
var statearr_27475_27524 = state_27414;
(statearr_27475_27524[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27525 = state_27414;
state_27414 = G__27525;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25617__auto__ = function(state_27414){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25617__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25617__auto____1.call(this,state_27414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25617__auto____0;
cljs$core$async$mix_$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25617__auto____1;
return cljs$core$async$mix_$_state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto___27477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25732__auto__ = (function (){var statearr_27476 = f__25731__auto__.call(null);
(statearr_27476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto___27477);

return statearr_27476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto___27477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__22147__auto__ = (((p == null))?null:p);
var m__22148__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22148__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__22147__auto__ = (((p == null))?null:p);
var m__22148__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,p,v,ch);
} else {
var m__22148__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args27526 = [];
var len__22617__auto___27529 = arguments.length;
var i__22618__auto___27530 = (0);
while(true){
if((i__22618__auto___27530 < len__22617__auto___27529)){
args27526.push((arguments[i__22618__auto___27530]));

var G__27531 = (i__22618__auto___27530 + (1));
i__22618__auto___27530 = G__27531;
continue;
} else {
}
break;
}

var G__27528 = args27526.length;
switch (G__27528) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27526.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22147__auto__ = (((p == null))?null:p);
var m__22148__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,p);
} else {
var m__22148__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,p);
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
var x__22147__auto__ = (((p == null))?null:p);
var m__22148__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,p,v);
} else {
var m__22148__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,p,v);
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
var args27534 = [];
var len__22617__auto___27659 = arguments.length;
var i__22618__auto___27660 = (0);
while(true){
if((i__22618__auto___27660 < len__22617__auto___27659)){
args27534.push((arguments[i__22618__auto___27660]));

var G__27661 = (i__22618__auto___27660 + (1));
i__22618__auto___27660 = G__27661;
continue;
} else {
}
break;
}

var G__27536 = args27534.length;
switch (G__27536) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27534.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21434__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21434__auto__,mults){
return (function (p1__27533_SHARP_){
if(cljs.core.truth_(p1__27533_SHARP_.call(null,topic))){
return p1__27533_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27533_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21434__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27537 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27537 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27538){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27538 = meta27538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27539,meta27538__$1){
var self__ = this;
var _27539__$1 = this;
return (new cljs.core.async.t_cljs$core$async27537(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27538__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27537.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27539){
var self__ = this;
var _27539__$1 = this;
return self__.meta27538;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27537.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27537.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27537.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async27537.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27537.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6369__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6369__auto__)){
var m = temp__6369__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27537.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27537.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27537.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27538","meta27538",1913477731,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27537.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27537";

cljs.core.async.t_cljs$core$async27537.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cljs.core.async/t_cljs$core$async27537");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async27537 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27537(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27538){
return (new cljs.core.async.t_cljs$core$async27537(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27538));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27537(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25730__auto___27663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto___27663,mults,ensure_mult,p){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto___27663,mults,ensure_mult,p){
return (function (state_27611){
var state_val_27612 = (state_27611[(1)]);
if((state_val_27612 === (7))){
var inst_27607 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
var statearr_27613_27664 = state_27611__$1;
(statearr_27613_27664[(2)] = inst_27607);

(statearr_27613_27664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (20))){
var state_27611__$1 = state_27611;
var statearr_27614_27665 = state_27611__$1;
(statearr_27614_27665[(2)] = null);

(statearr_27614_27665[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (1))){
var state_27611__$1 = state_27611;
var statearr_27615_27666 = state_27611__$1;
(statearr_27615_27666[(2)] = null);

(statearr_27615_27666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (24))){
var inst_27590 = (state_27611[(7)]);
var inst_27599 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27590);
var state_27611__$1 = state_27611;
var statearr_27616_27667 = state_27611__$1;
(statearr_27616_27667[(2)] = inst_27599);

(statearr_27616_27667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (4))){
var inst_27542 = (state_27611[(8)]);
var inst_27542__$1 = (state_27611[(2)]);
var inst_27543 = (inst_27542__$1 == null);
var state_27611__$1 = (function (){var statearr_27617 = state_27611;
(statearr_27617[(8)] = inst_27542__$1);

return statearr_27617;
})();
if(cljs.core.truth_(inst_27543)){
var statearr_27618_27668 = state_27611__$1;
(statearr_27618_27668[(1)] = (5));

} else {
var statearr_27619_27669 = state_27611__$1;
(statearr_27619_27669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (15))){
var inst_27584 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
var statearr_27620_27670 = state_27611__$1;
(statearr_27620_27670[(2)] = inst_27584);

(statearr_27620_27670[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (21))){
var inst_27604 = (state_27611[(2)]);
var state_27611__$1 = (function (){var statearr_27621 = state_27611;
(statearr_27621[(9)] = inst_27604);

return statearr_27621;
})();
var statearr_27622_27671 = state_27611__$1;
(statearr_27622_27671[(2)] = null);

(statearr_27622_27671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (13))){
var inst_27566 = (state_27611[(10)]);
var inst_27568 = cljs.core.chunked_seq_QMARK_.call(null,inst_27566);
var state_27611__$1 = state_27611;
if(inst_27568){
var statearr_27623_27672 = state_27611__$1;
(statearr_27623_27672[(1)] = (16));

} else {
var statearr_27624_27673 = state_27611__$1;
(statearr_27624_27673[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (22))){
var inst_27596 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
if(cljs.core.truth_(inst_27596)){
var statearr_27625_27674 = state_27611__$1;
(statearr_27625_27674[(1)] = (23));

} else {
var statearr_27626_27675 = state_27611__$1;
(statearr_27626_27675[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (6))){
var inst_27590 = (state_27611[(7)]);
var inst_27542 = (state_27611[(8)]);
var inst_27592 = (state_27611[(11)]);
var inst_27590__$1 = topic_fn.call(null,inst_27542);
var inst_27591 = cljs.core.deref.call(null,mults);
var inst_27592__$1 = cljs.core.get.call(null,inst_27591,inst_27590__$1);
var state_27611__$1 = (function (){var statearr_27627 = state_27611;
(statearr_27627[(7)] = inst_27590__$1);

(statearr_27627[(11)] = inst_27592__$1);

return statearr_27627;
})();
if(cljs.core.truth_(inst_27592__$1)){
var statearr_27628_27676 = state_27611__$1;
(statearr_27628_27676[(1)] = (19));

} else {
var statearr_27629_27677 = state_27611__$1;
(statearr_27629_27677[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (25))){
var inst_27601 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
var statearr_27630_27678 = state_27611__$1;
(statearr_27630_27678[(2)] = inst_27601);

(statearr_27630_27678[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (17))){
var inst_27566 = (state_27611[(10)]);
var inst_27575 = cljs.core.first.call(null,inst_27566);
var inst_27576 = cljs.core.async.muxch_STAR_.call(null,inst_27575);
var inst_27577 = cljs.core.async.close_BANG_.call(null,inst_27576);
var inst_27578 = cljs.core.next.call(null,inst_27566);
var inst_27552 = inst_27578;
var inst_27553 = null;
var inst_27554 = (0);
var inst_27555 = (0);
var state_27611__$1 = (function (){var statearr_27631 = state_27611;
(statearr_27631[(12)] = inst_27577);

(statearr_27631[(13)] = inst_27552);

(statearr_27631[(14)] = inst_27555);

(statearr_27631[(15)] = inst_27554);

(statearr_27631[(16)] = inst_27553);

return statearr_27631;
})();
var statearr_27632_27679 = state_27611__$1;
(statearr_27632_27679[(2)] = null);

(statearr_27632_27679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (3))){
var inst_27609 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27611__$1,inst_27609);
} else {
if((state_val_27612 === (12))){
var inst_27586 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
var statearr_27633_27680 = state_27611__$1;
(statearr_27633_27680[(2)] = inst_27586);

(statearr_27633_27680[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (2))){
var state_27611__$1 = state_27611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27611__$1,(4),ch);
} else {
if((state_val_27612 === (23))){
var state_27611__$1 = state_27611;
var statearr_27634_27681 = state_27611__$1;
(statearr_27634_27681[(2)] = null);

(statearr_27634_27681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (19))){
var inst_27542 = (state_27611[(8)]);
var inst_27592 = (state_27611[(11)]);
var inst_27594 = cljs.core.async.muxch_STAR_.call(null,inst_27592);
var state_27611__$1 = state_27611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27611__$1,(22),inst_27594,inst_27542);
} else {
if((state_val_27612 === (11))){
var inst_27552 = (state_27611[(13)]);
var inst_27566 = (state_27611[(10)]);
var inst_27566__$1 = cljs.core.seq.call(null,inst_27552);
var state_27611__$1 = (function (){var statearr_27635 = state_27611;
(statearr_27635[(10)] = inst_27566__$1);

return statearr_27635;
})();
if(inst_27566__$1){
var statearr_27636_27682 = state_27611__$1;
(statearr_27636_27682[(1)] = (13));

} else {
var statearr_27637_27683 = state_27611__$1;
(statearr_27637_27683[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (9))){
var inst_27588 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
var statearr_27638_27684 = state_27611__$1;
(statearr_27638_27684[(2)] = inst_27588);

(statearr_27638_27684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (5))){
var inst_27549 = cljs.core.deref.call(null,mults);
var inst_27550 = cljs.core.vals.call(null,inst_27549);
var inst_27551 = cljs.core.seq.call(null,inst_27550);
var inst_27552 = inst_27551;
var inst_27553 = null;
var inst_27554 = (0);
var inst_27555 = (0);
var state_27611__$1 = (function (){var statearr_27639 = state_27611;
(statearr_27639[(13)] = inst_27552);

(statearr_27639[(14)] = inst_27555);

(statearr_27639[(15)] = inst_27554);

(statearr_27639[(16)] = inst_27553);

return statearr_27639;
})();
var statearr_27640_27685 = state_27611__$1;
(statearr_27640_27685[(2)] = null);

(statearr_27640_27685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (14))){
var state_27611__$1 = state_27611;
var statearr_27644_27686 = state_27611__$1;
(statearr_27644_27686[(2)] = null);

(statearr_27644_27686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (16))){
var inst_27566 = (state_27611[(10)]);
var inst_27570 = cljs.core.chunk_first.call(null,inst_27566);
var inst_27571 = cljs.core.chunk_rest.call(null,inst_27566);
var inst_27572 = cljs.core.count.call(null,inst_27570);
var inst_27552 = inst_27571;
var inst_27553 = inst_27570;
var inst_27554 = inst_27572;
var inst_27555 = (0);
var state_27611__$1 = (function (){var statearr_27645 = state_27611;
(statearr_27645[(13)] = inst_27552);

(statearr_27645[(14)] = inst_27555);

(statearr_27645[(15)] = inst_27554);

(statearr_27645[(16)] = inst_27553);

return statearr_27645;
})();
var statearr_27646_27687 = state_27611__$1;
(statearr_27646_27687[(2)] = null);

(statearr_27646_27687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (10))){
var inst_27552 = (state_27611[(13)]);
var inst_27555 = (state_27611[(14)]);
var inst_27554 = (state_27611[(15)]);
var inst_27553 = (state_27611[(16)]);
var inst_27560 = cljs.core._nth.call(null,inst_27553,inst_27555);
var inst_27561 = cljs.core.async.muxch_STAR_.call(null,inst_27560);
var inst_27562 = cljs.core.async.close_BANG_.call(null,inst_27561);
var inst_27563 = (inst_27555 + (1));
var tmp27641 = inst_27552;
var tmp27642 = inst_27554;
var tmp27643 = inst_27553;
var inst_27552__$1 = tmp27641;
var inst_27553__$1 = tmp27643;
var inst_27554__$1 = tmp27642;
var inst_27555__$1 = inst_27563;
var state_27611__$1 = (function (){var statearr_27647 = state_27611;
(statearr_27647[(13)] = inst_27552__$1);

(statearr_27647[(14)] = inst_27555__$1);

(statearr_27647[(15)] = inst_27554__$1);

(statearr_27647[(17)] = inst_27562);

(statearr_27647[(16)] = inst_27553__$1);

return statearr_27647;
})();
var statearr_27648_27688 = state_27611__$1;
(statearr_27648_27688[(2)] = null);

(statearr_27648_27688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (18))){
var inst_27581 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
var statearr_27649_27689 = state_27611__$1;
(statearr_27649_27689[(2)] = inst_27581);

(statearr_27649_27689[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (8))){
var inst_27555 = (state_27611[(14)]);
var inst_27554 = (state_27611[(15)]);
var inst_27557 = (inst_27555 < inst_27554);
var inst_27558 = inst_27557;
var state_27611__$1 = state_27611;
if(cljs.core.truth_(inst_27558)){
var statearr_27650_27690 = state_27611__$1;
(statearr_27650_27690[(1)] = (10));

} else {
var statearr_27651_27691 = state_27611__$1;
(statearr_27651_27691[(1)] = (11));

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
});})(c__25730__auto___27663,mults,ensure_mult,p))
;
return ((function (switch__25616__auto__,c__25730__auto___27663,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25617__auto__ = null;
var cljs$core$async$state_machine__25617__auto____0 = (function (){
var statearr_27655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27655[(0)] = cljs$core$async$state_machine__25617__auto__);

(statearr_27655[(1)] = (1));

return statearr_27655;
});
var cljs$core$async$state_machine__25617__auto____1 = (function (state_27611){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_27611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e27656){if((e27656 instanceof Object)){
var ex__25620__auto__ = e27656;
var statearr_27657_27692 = state_27611;
(statearr_27657_27692[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27693 = state_27611;
state_27611 = G__27693;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
cljs$core$async$state_machine__25617__auto__ = function(state_27611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25617__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25617__auto____1.call(this,state_27611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25617__auto____0;
cljs$core$async$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25617__auto____1;
return cljs$core$async$state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto___27663,mults,ensure_mult,p))
})();
var state__25732__auto__ = (function (){var statearr_27658 = f__25731__auto__.call(null);
(statearr_27658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto___27663);

return statearr_27658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto___27663,mults,ensure_mult,p))
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
var args27694 = [];
var len__22617__auto___27697 = arguments.length;
var i__22618__auto___27698 = (0);
while(true){
if((i__22618__auto___27698 < len__22617__auto___27697)){
args27694.push((arguments[i__22618__auto___27698]));

var G__27699 = (i__22618__auto___27698 + (1));
i__22618__auto___27698 = G__27699;
continue;
} else {
}
break;
}

var G__27696 = args27694.length;
switch (G__27696) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27694.length)].join('')));

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
var args27701 = [];
var len__22617__auto___27704 = arguments.length;
var i__22618__auto___27705 = (0);
while(true){
if((i__22618__auto___27705 < len__22617__auto___27704)){
args27701.push((arguments[i__22618__auto___27705]));

var G__27706 = (i__22618__auto___27705 + (1));
i__22618__auto___27705 = G__27706;
continue;
} else {
}
break;
}

var G__27703 = args27701.length;
switch (G__27703) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27701.length)].join('')));

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
var args27708 = [];
var len__22617__auto___27779 = arguments.length;
var i__22618__auto___27780 = (0);
while(true){
if((i__22618__auto___27780 < len__22617__auto___27779)){
args27708.push((arguments[i__22618__auto___27780]));

var G__27781 = (i__22618__auto___27780 + (1));
i__22618__auto___27780 = G__27781;
continue;
} else {
}
break;
}

var G__27710 = args27708.length;
switch (G__27710) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27708.length)].join('')));

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
var c__25730__auto___27783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto___27783,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto___27783,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27749){
var state_val_27750 = (state_27749[(1)]);
if((state_val_27750 === (7))){
var state_27749__$1 = state_27749;
var statearr_27751_27784 = state_27749__$1;
(statearr_27751_27784[(2)] = null);

(statearr_27751_27784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (1))){
var state_27749__$1 = state_27749;
var statearr_27752_27785 = state_27749__$1;
(statearr_27752_27785[(2)] = null);

(statearr_27752_27785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (4))){
var inst_27713 = (state_27749[(7)]);
var inst_27715 = (inst_27713 < cnt);
var state_27749__$1 = state_27749;
if(cljs.core.truth_(inst_27715)){
var statearr_27753_27786 = state_27749__$1;
(statearr_27753_27786[(1)] = (6));

} else {
var statearr_27754_27787 = state_27749__$1;
(statearr_27754_27787[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (15))){
var inst_27745 = (state_27749[(2)]);
var state_27749__$1 = state_27749;
var statearr_27755_27788 = state_27749__$1;
(statearr_27755_27788[(2)] = inst_27745);

(statearr_27755_27788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (13))){
var inst_27738 = cljs.core.async.close_BANG_.call(null,out);
var state_27749__$1 = state_27749;
var statearr_27756_27789 = state_27749__$1;
(statearr_27756_27789[(2)] = inst_27738);

(statearr_27756_27789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (6))){
var state_27749__$1 = state_27749;
var statearr_27757_27790 = state_27749__$1;
(statearr_27757_27790[(2)] = null);

(statearr_27757_27790[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (3))){
var inst_27747 = (state_27749[(2)]);
var state_27749__$1 = state_27749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27749__$1,inst_27747);
} else {
if((state_val_27750 === (12))){
var inst_27735 = (state_27749[(8)]);
var inst_27735__$1 = (state_27749[(2)]);
var inst_27736 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27735__$1);
var state_27749__$1 = (function (){var statearr_27758 = state_27749;
(statearr_27758[(8)] = inst_27735__$1);

return statearr_27758;
})();
if(cljs.core.truth_(inst_27736)){
var statearr_27759_27791 = state_27749__$1;
(statearr_27759_27791[(1)] = (13));

} else {
var statearr_27760_27792 = state_27749__$1;
(statearr_27760_27792[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (2))){
var inst_27712 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27713 = (0);
var state_27749__$1 = (function (){var statearr_27761 = state_27749;
(statearr_27761[(7)] = inst_27713);

(statearr_27761[(9)] = inst_27712);

return statearr_27761;
})();
var statearr_27762_27793 = state_27749__$1;
(statearr_27762_27793[(2)] = null);

(statearr_27762_27793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (11))){
var inst_27713 = (state_27749[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27749,(10),Object,null,(9));
var inst_27722 = chs__$1.call(null,inst_27713);
var inst_27723 = done.call(null,inst_27713);
var inst_27724 = cljs.core.async.take_BANG_.call(null,inst_27722,inst_27723);
var state_27749__$1 = state_27749;
var statearr_27763_27794 = state_27749__$1;
(statearr_27763_27794[(2)] = inst_27724);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27749__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (9))){
var inst_27713 = (state_27749[(7)]);
var inst_27726 = (state_27749[(2)]);
var inst_27727 = (inst_27713 + (1));
var inst_27713__$1 = inst_27727;
var state_27749__$1 = (function (){var statearr_27764 = state_27749;
(statearr_27764[(7)] = inst_27713__$1);

(statearr_27764[(10)] = inst_27726);

return statearr_27764;
})();
var statearr_27765_27795 = state_27749__$1;
(statearr_27765_27795[(2)] = null);

(statearr_27765_27795[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (5))){
var inst_27733 = (state_27749[(2)]);
var state_27749__$1 = (function (){var statearr_27766 = state_27749;
(statearr_27766[(11)] = inst_27733);

return statearr_27766;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27749__$1,(12),dchan);
} else {
if((state_val_27750 === (14))){
var inst_27735 = (state_27749[(8)]);
var inst_27740 = cljs.core.apply.call(null,f,inst_27735);
var state_27749__$1 = state_27749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27749__$1,(16),out,inst_27740);
} else {
if((state_val_27750 === (16))){
var inst_27742 = (state_27749[(2)]);
var state_27749__$1 = (function (){var statearr_27767 = state_27749;
(statearr_27767[(12)] = inst_27742);

return statearr_27767;
})();
var statearr_27768_27796 = state_27749__$1;
(statearr_27768_27796[(2)] = null);

(statearr_27768_27796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (10))){
var inst_27717 = (state_27749[(2)]);
var inst_27718 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27749__$1 = (function (){var statearr_27769 = state_27749;
(statearr_27769[(13)] = inst_27717);

return statearr_27769;
})();
var statearr_27770_27797 = state_27749__$1;
(statearr_27770_27797[(2)] = inst_27718);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27749__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (8))){
var inst_27731 = (state_27749[(2)]);
var state_27749__$1 = state_27749;
var statearr_27771_27798 = state_27749__$1;
(statearr_27771_27798[(2)] = inst_27731);

(statearr_27771_27798[(1)] = (5));


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
});})(c__25730__auto___27783,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25616__auto__,c__25730__auto___27783,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25617__auto__ = null;
var cljs$core$async$state_machine__25617__auto____0 = (function (){
var statearr_27775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27775[(0)] = cljs$core$async$state_machine__25617__auto__);

(statearr_27775[(1)] = (1));

return statearr_27775;
});
var cljs$core$async$state_machine__25617__auto____1 = (function (state_27749){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_27749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e27776){if((e27776 instanceof Object)){
var ex__25620__auto__ = e27776;
var statearr_27777_27799 = state_27749;
(statearr_27777_27799[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27800 = state_27749;
state_27749 = G__27800;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
cljs$core$async$state_machine__25617__auto__ = function(state_27749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25617__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25617__auto____1.call(this,state_27749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25617__auto____0;
cljs$core$async$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25617__auto____1;
return cljs$core$async$state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto___27783,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25732__auto__ = (function (){var statearr_27778 = f__25731__auto__.call(null);
(statearr_27778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto___27783);

return statearr_27778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto___27783,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args27802 = [];
var len__22617__auto___27860 = arguments.length;
var i__22618__auto___27861 = (0);
while(true){
if((i__22618__auto___27861 < len__22617__auto___27860)){
args27802.push((arguments[i__22618__auto___27861]));

var G__27862 = (i__22618__auto___27861 + (1));
i__22618__auto___27861 = G__27862;
continue;
} else {
}
break;
}

var G__27804 = args27802.length;
switch (G__27804) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27802.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25730__auto___27864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto___27864,out){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto___27864,out){
return (function (state_27836){
var state_val_27837 = (state_27836[(1)]);
if((state_val_27837 === (7))){
var inst_27815 = (state_27836[(7)]);
var inst_27816 = (state_27836[(8)]);
var inst_27815__$1 = (state_27836[(2)]);
var inst_27816__$1 = cljs.core.nth.call(null,inst_27815__$1,(0),null);
var inst_27817 = cljs.core.nth.call(null,inst_27815__$1,(1),null);
var inst_27818 = (inst_27816__$1 == null);
var state_27836__$1 = (function (){var statearr_27838 = state_27836;
(statearr_27838[(9)] = inst_27817);

(statearr_27838[(7)] = inst_27815__$1);

(statearr_27838[(8)] = inst_27816__$1);

return statearr_27838;
})();
if(cljs.core.truth_(inst_27818)){
var statearr_27839_27865 = state_27836__$1;
(statearr_27839_27865[(1)] = (8));

} else {
var statearr_27840_27866 = state_27836__$1;
(statearr_27840_27866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (1))){
var inst_27805 = cljs.core.vec.call(null,chs);
var inst_27806 = inst_27805;
var state_27836__$1 = (function (){var statearr_27841 = state_27836;
(statearr_27841[(10)] = inst_27806);

return statearr_27841;
})();
var statearr_27842_27867 = state_27836__$1;
(statearr_27842_27867[(2)] = null);

(statearr_27842_27867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (4))){
var inst_27806 = (state_27836[(10)]);
var state_27836__$1 = state_27836;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27836__$1,(7),inst_27806);
} else {
if((state_val_27837 === (6))){
var inst_27832 = (state_27836[(2)]);
var state_27836__$1 = state_27836;
var statearr_27843_27868 = state_27836__$1;
(statearr_27843_27868[(2)] = inst_27832);

(statearr_27843_27868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (3))){
var inst_27834 = (state_27836[(2)]);
var state_27836__$1 = state_27836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27836__$1,inst_27834);
} else {
if((state_val_27837 === (2))){
var inst_27806 = (state_27836[(10)]);
var inst_27808 = cljs.core.count.call(null,inst_27806);
var inst_27809 = (inst_27808 > (0));
var state_27836__$1 = state_27836;
if(cljs.core.truth_(inst_27809)){
var statearr_27845_27869 = state_27836__$1;
(statearr_27845_27869[(1)] = (4));

} else {
var statearr_27846_27870 = state_27836__$1;
(statearr_27846_27870[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (11))){
var inst_27806 = (state_27836[(10)]);
var inst_27825 = (state_27836[(2)]);
var tmp27844 = inst_27806;
var inst_27806__$1 = tmp27844;
var state_27836__$1 = (function (){var statearr_27847 = state_27836;
(statearr_27847[(10)] = inst_27806__$1);

(statearr_27847[(11)] = inst_27825);

return statearr_27847;
})();
var statearr_27848_27871 = state_27836__$1;
(statearr_27848_27871[(2)] = null);

(statearr_27848_27871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (9))){
var inst_27816 = (state_27836[(8)]);
var state_27836__$1 = state_27836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27836__$1,(11),out,inst_27816);
} else {
if((state_val_27837 === (5))){
var inst_27830 = cljs.core.async.close_BANG_.call(null,out);
var state_27836__$1 = state_27836;
var statearr_27849_27872 = state_27836__$1;
(statearr_27849_27872[(2)] = inst_27830);

(statearr_27849_27872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (10))){
var inst_27828 = (state_27836[(2)]);
var state_27836__$1 = state_27836;
var statearr_27850_27873 = state_27836__$1;
(statearr_27850_27873[(2)] = inst_27828);

(statearr_27850_27873[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (8))){
var inst_27806 = (state_27836[(10)]);
var inst_27817 = (state_27836[(9)]);
var inst_27815 = (state_27836[(7)]);
var inst_27816 = (state_27836[(8)]);
var inst_27820 = (function (){var cs = inst_27806;
var vec__27811 = inst_27815;
var v = inst_27816;
var c = inst_27817;
return ((function (cs,vec__27811,v,c,inst_27806,inst_27817,inst_27815,inst_27816,state_val_27837,c__25730__auto___27864,out){
return (function (p1__27801_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27801_SHARP_);
});
;})(cs,vec__27811,v,c,inst_27806,inst_27817,inst_27815,inst_27816,state_val_27837,c__25730__auto___27864,out))
})();
var inst_27821 = cljs.core.filterv.call(null,inst_27820,inst_27806);
var inst_27806__$1 = inst_27821;
var state_27836__$1 = (function (){var statearr_27851 = state_27836;
(statearr_27851[(10)] = inst_27806__$1);

return statearr_27851;
})();
var statearr_27852_27874 = state_27836__$1;
(statearr_27852_27874[(2)] = null);

(statearr_27852_27874[(1)] = (2));


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
});})(c__25730__auto___27864,out))
;
return ((function (switch__25616__auto__,c__25730__auto___27864,out){
return (function() {
var cljs$core$async$state_machine__25617__auto__ = null;
var cljs$core$async$state_machine__25617__auto____0 = (function (){
var statearr_27856 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27856[(0)] = cljs$core$async$state_machine__25617__auto__);

(statearr_27856[(1)] = (1));

return statearr_27856;
});
var cljs$core$async$state_machine__25617__auto____1 = (function (state_27836){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_27836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e27857){if((e27857 instanceof Object)){
var ex__25620__auto__ = e27857;
var statearr_27858_27875 = state_27836;
(statearr_27858_27875[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27876 = state_27836;
state_27836 = G__27876;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
cljs$core$async$state_machine__25617__auto__ = function(state_27836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25617__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25617__auto____1.call(this,state_27836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25617__auto____0;
cljs$core$async$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25617__auto____1;
return cljs$core$async$state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto___27864,out))
})();
var state__25732__auto__ = (function (){var statearr_27859 = f__25731__auto__.call(null);
(statearr_27859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto___27864);

return statearr_27859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto___27864,out))
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
var args27877 = [];
var len__22617__auto___27926 = arguments.length;
var i__22618__auto___27927 = (0);
while(true){
if((i__22618__auto___27927 < len__22617__auto___27926)){
args27877.push((arguments[i__22618__auto___27927]));

var G__27928 = (i__22618__auto___27927 + (1));
i__22618__auto___27927 = G__27928;
continue;
} else {
}
break;
}

var G__27879 = args27877.length;
switch (G__27879) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27877.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25730__auto___27930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto___27930,out){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto___27930,out){
return (function (state_27903){
var state_val_27904 = (state_27903[(1)]);
if((state_val_27904 === (7))){
var inst_27885 = (state_27903[(7)]);
var inst_27885__$1 = (state_27903[(2)]);
var inst_27886 = (inst_27885__$1 == null);
var inst_27887 = cljs.core.not.call(null,inst_27886);
var state_27903__$1 = (function (){var statearr_27905 = state_27903;
(statearr_27905[(7)] = inst_27885__$1);

return statearr_27905;
})();
if(inst_27887){
var statearr_27906_27931 = state_27903__$1;
(statearr_27906_27931[(1)] = (8));

} else {
var statearr_27907_27932 = state_27903__$1;
(statearr_27907_27932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (1))){
var inst_27880 = (0);
var state_27903__$1 = (function (){var statearr_27908 = state_27903;
(statearr_27908[(8)] = inst_27880);

return statearr_27908;
})();
var statearr_27909_27933 = state_27903__$1;
(statearr_27909_27933[(2)] = null);

(statearr_27909_27933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (4))){
var state_27903__$1 = state_27903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27903__$1,(7),ch);
} else {
if((state_val_27904 === (6))){
var inst_27898 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
var statearr_27910_27934 = state_27903__$1;
(statearr_27910_27934[(2)] = inst_27898);

(statearr_27910_27934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (3))){
var inst_27900 = (state_27903[(2)]);
var inst_27901 = cljs.core.async.close_BANG_.call(null,out);
var state_27903__$1 = (function (){var statearr_27911 = state_27903;
(statearr_27911[(9)] = inst_27900);

return statearr_27911;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27903__$1,inst_27901);
} else {
if((state_val_27904 === (2))){
var inst_27880 = (state_27903[(8)]);
var inst_27882 = (inst_27880 < n);
var state_27903__$1 = state_27903;
if(cljs.core.truth_(inst_27882)){
var statearr_27912_27935 = state_27903__$1;
(statearr_27912_27935[(1)] = (4));

} else {
var statearr_27913_27936 = state_27903__$1;
(statearr_27913_27936[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (11))){
var inst_27880 = (state_27903[(8)]);
var inst_27890 = (state_27903[(2)]);
var inst_27891 = (inst_27880 + (1));
var inst_27880__$1 = inst_27891;
var state_27903__$1 = (function (){var statearr_27914 = state_27903;
(statearr_27914[(10)] = inst_27890);

(statearr_27914[(8)] = inst_27880__$1);

return statearr_27914;
})();
var statearr_27915_27937 = state_27903__$1;
(statearr_27915_27937[(2)] = null);

(statearr_27915_27937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (9))){
var state_27903__$1 = state_27903;
var statearr_27916_27938 = state_27903__$1;
(statearr_27916_27938[(2)] = null);

(statearr_27916_27938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (5))){
var state_27903__$1 = state_27903;
var statearr_27917_27939 = state_27903__$1;
(statearr_27917_27939[(2)] = null);

(statearr_27917_27939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (10))){
var inst_27895 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
var statearr_27918_27940 = state_27903__$1;
(statearr_27918_27940[(2)] = inst_27895);

(statearr_27918_27940[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (8))){
var inst_27885 = (state_27903[(7)]);
var state_27903__$1 = state_27903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27903__$1,(11),out,inst_27885);
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
});})(c__25730__auto___27930,out))
;
return ((function (switch__25616__auto__,c__25730__auto___27930,out){
return (function() {
var cljs$core$async$state_machine__25617__auto__ = null;
var cljs$core$async$state_machine__25617__auto____0 = (function (){
var statearr_27922 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27922[(0)] = cljs$core$async$state_machine__25617__auto__);

(statearr_27922[(1)] = (1));

return statearr_27922;
});
var cljs$core$async$state_machine__25617__auto____1 = (function (state_27903){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_27903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e27923){if((e27923 instanceof Object)){
var ex__25620__auto__ = e27923;
var statearr_27924_27941 = state_27903;
(statearr_27924_27941[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27942 = state_27903;
state_27903 = G__27942;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
cljs$core$async$state_machine__25617__auto__ = function(state_27903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25617__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25617__auto____1.call(this,state_27903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25617__auto____0;
cljs$core$async$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25617__auto____1;
return cljs$core$async$state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto___27930,out))
})();
var state__25732__auto__ = (function (){var statearr_27925 = f__25731__auto__.call(null);
(statearr_27925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto___27930);

return statearr_27925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto___27930,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27950 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27950 = (function (map_LT_,f,ch,meta27951){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27951 = meta27951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27952,meta27951__$1){
var self__ = this;
var _27952__$1 = this;
return (new cljs.core.async.t_cljs$core$async27950(self__.map_LT_,self__.f,self__.ch,meta27951__$1));
});

cljs.core.async.t_cljs$core$async27950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27952){
var self__ = this;
var _27952__$1 = this;
return self__.meta27951;
});

cljs.core.async.t_cljs$core$async27950.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27950.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27950.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27950.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27950.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27953 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27953 = (function (map_LT_,f,ch,meta27951,_,fn1,meta27954){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27951 = meta27951;
this._ = _;
this.fn1 = fn1;
this.meta27954 = meta27954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27955,meta27954__$1){
var self__ = this;
var _27955__$1 = this;
return (new cljs.core.async.t_cljs$core$async27953(self__.map_LT_,self__.f,self__.ch,self__.meta27951,self__._,self__.fn1,meta27954__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27955){
var self__ = this;
var _27955__$1 = this;
return self__.meta27954;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27943_SHARP_){
return f1.call(null,(((p1__27943_SHARP_ == null))?null:self__.f.call(null,p1__27943_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27953.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27951","meta27951",1966876309,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27950","cljs.core.async/t_cljs$core$async27950",-1651477799,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27954","meta27954",286106582,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27953.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27953.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27953";

cljs.core.async.t_cljs$core$async27953.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cljs.core.async/t_cljs$core$async27953");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27953 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27953(map_LT___$1,f__$1,ch__$1,meta27951__$1,___$2,fn1__$1,meta27954){
return (new cljs.core.async.t_cljs$core$async27953(map_LT___$1,f__$1,ch__$1,meta27951__$1,___$2,fn1__$1,meta27954));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27953(self__.map_LT_,self__.f,self__.ch,self__.meta27951,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21422__auto__ = ret;
if(cljs.core.truth_(and__21422__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21422__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27950.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27950.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27951","meta27951",1966876309,null)], null);
});

cljs.core.async.t_cljs$core$async27950.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27950";

cljs.core.async.t_cljs$core$async27950.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cljs.core.async/t_cljs$core$async27950");
});

cljs.core.async.__GT_t_cljs$core$async27950 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27950(map_LT___$1,f__$1,ch__$1,meta27951){
return (new cljs.core.async.t_cljs$core$async27950(map_LT___$1,f__$1,ch__$1,meta27951));
});

}

return (new cljs.core.async.t_cljs$core$async27950(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27959 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27959 = (function (map_GT_,f,ch,meta27960){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27960 = meta27960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27961,meta27960__$1){
var self__ = this;
var _27961__$1 = this;
return (new cljs.core.async.t_cljs$core$async27959(self__.map_GT_,self__.f,self__.ch,meta27960__$1));
});

cljs.core.async.t_cljs$core$async27959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27961){
var self__ = this;
var _27961__$1 = this;
return self__.meta27960;
});

cljs.core.async.t_cljs$core$async27959.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27959.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27959.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27959.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27959.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27959.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27960","meta27960",-1962689697,null)], null);
});

cljs.core.async.t_cljs$core$async27959.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27959";

cljs.core.async.t_cljs$core$async27959.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cljs.core.async/t_cljs$core$async27959");
});

cljs.core.async.__GT_t_cljs$core$async27959 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27959(map_GT___$1,f__$1,ch__$1,meta27960){
return (new cljs.core.async.t_cljs$core$async27959(map_GT___$1,f__$1,ch__$1,meta27960));
});

}

return (new cljs.core.async.t_cljs$core$async27959(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27965 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27965 = (function (filter_GT_,p,ch,meta27966){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27966 = meta27966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27967,meta27966__$1){
var self__ = this;
var _27967__$1 = this;
return (new cljs.core.async.t_cljs$core$async27965(self__.filter_GT_,self__.p,self__.ch,meta27966__$1));
});

cljs.core.async.t_cljs$core$async27965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27967){
var self__ = this;
var _27967__$1 = this;
return self__.meta27966;
});

cljs.core.async.t_cljs$core$async27965.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27965.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27965.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27965.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27965.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27965.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27965.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27966","meta27966",176282454,null)], null);
});

cljs.core.async.t_cljs$core$async27965.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27965";

cljs.core.async.t_cljs$core$async27965.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cljs.core.async/t_cljs$core$async27965");
});

cljs.core.async.__GT_t_cljs$core$async27965 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27965(filter_GT___$1,p__$1,ch__$1,meta27966){
return (new cljs.core.async.t_cljs$core$async27965(filter_GT___$1,p__$1,ch__$1,meta27966));
});

}

return (new cljs.core.async.t_cljs$core$async27965(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args27968 = [];
var len__22617__auto___28012 = arguments.length;
var i__22618__auto___28013 = (0);
while(true){
if((i__22618__auto___28013 < len__22617__auto___28012)){
args27968.push((arguments[i__22618__auto___28013]));

var G__28014 = (i__22618__auto___28013 + (1));
i__22618__auto___28013 = G__28014;
continue;
} else {
}
break;
}

var G__27970 = args27968.length;
switch (G__27970) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27968.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25730__auto___28016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto___28016,out){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto___28016,out){
return (function (state_27991){
var state_val_27992 = (state_27991[(1)]);
if((state_val_27992 === (7))){
var inst_27987 = (state_27991[(2)]);
var state_27991__$1 = state_27991;
var statearr_27993_28017 = state_27991__$1;
(statearr_27993_28017[(2)] = inst_27987);

(statearr_27993_28017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (1))){
var state_27991__$1 = state_27991;
var statearr_27994_28018 = state_27991__$1;
(statearr_27994_28018[(2)] = null);

(statearr_27994_28018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (4))){
var inst_27973 = (state_27991[(7)]);
var inst_27973__$1 = (state_27991[(2)]);
var inst_27974 = (inst_27973__$1 == null);
var state_27991__$1 = (function (){var statearr_27995 = state_27991;
(statearr_27995[(7)] = inst_27973__$1);

return statearr_27995;
})();
if(cljs.core.truth_(inst_27974)){
var statearr_27996_28019 = state_27991__$1;
(statearr_27996_28019[(1)] = (5));

} else {
var statearr_27997_28020 = state_27991__$1;
(statearr_27997_28020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (6))){
var inst_27973 = (state_27991[(7)]);
var inst_27978 = p.call(null,inst_27973);
var state_27991__$1 = state_27991;
if(cljs.core.truth_(inst_27978)){
var statearr_27998_28021 = state_27991__$1;
(statearr_27998_28021[(1)] = (8));

} else {
var statearr_27999_28022 = state_27991__$1;
(statearr_27999_28022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (3))){
var inst_27989 = (state_27991[(2)]);
var state_27991__$1 = state_27991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27991__$1,inst_27989);
} else {
if((state_val_27992 === (2))){
var state_27991__$1 = state_27991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27991__$1,(4),ch);
} else {
if((state_val_27992 === (11))){
var inst_27981 = (state_27991[(2)]);
var state_27991__$1 = state_27991;
var statearr_28000_28023 = state_27991__$1;
(statearr_28000_28023[(2)] = inst_27981);

(statearr_28000_28023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (9))){
var state_27991__$1 = state_27991;
var statearr_28001_28024 = state_27991__$1;
(statearr_28001_28024[(2)] = null);

(statearr_28001_28024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (5))){
var inst_27976 = cljs.core.async.close_BANG_.call(null,out);
var state_27991__$1 = state_27991;
var statearr_28002_28025 = state_27991__$1;
(statearr_28002_28025[(2)] = inst_27976);

(statearr_28002_28025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (10))){
var inst_27984 = (state_27991[(2)]);
var state_27991__$1 = (function (){var statearr_28003 = state_27991;
(statearr_28003[(8)] = inst_27984);

return statearr_28003;
})();
var statearr_28004_28026 = state_27991__$1;
(statearr_28004_28026[(2)] = null);

(statearr_28004_28026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (8))){
var inst_27973 = (state_27991[(7)]);
var state_27991__$1 = state_27991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27991__$1,(11),out,inst_27973);
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
});})(c__25730__auto___28016,out))
;
return ((function (switch__25616__auto__,c__25730__auto___28016,out){
return (function() {
var cljs$core$async$state_machine__25617__auto__ = null;
var cljs$core$async$state_machine__25617__auto____0 = (function (){
var statearr_28008 = [null,null,null,null,null,null,null,null,null];
(statearr_28008[(0)] = cljs$core$async$state_machine__25617__auto__);

(statearr_28008[(1)] = (1));

return statearr_28008;
});
var cljs$core$async$state_machine__25617__auto____1 = (function (state_27991){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_27991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e28009){if((e28009 instanceof Object)){
var ex__25620__auto__ = e28009;
var statearr_28010_28027 = state_27991;
(statearr_28010_28027[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28028 = state_27991;
state_27991 = G__28028;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
cljs$core$async$state_machine__25617__auto__ = function(state_27991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25617__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25617__auto____1.call(this,state_27991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25617__auto____0;
cljs$core$async$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25617__auto____1;
return cljs$core$async$state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto___28016,out))
})();
var state__25732__auto__ = (function (){var statearr_28011 = f__25731__auto__.call(null);
(statearr_28011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto___28016);

return statearr_28011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto___28016,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28029 = [];
var len__22617__auto___28032 = arguments.length;
var i__22618__auto___28033 = (0);
while(true){
if((i__22618__auto___28033 < len__22617__auto___28032)){
args28029.push((arguments[i__22618__auto___28033]));

var G__28034 = (i__22618__auto___28033 + (1));
i__22618__auto___28033 = G__28034;
continue;
} else {
}
break;
}

var G__28031 = args28029.length;
switch (G__28031) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28029.length)].join('')));

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
var c__25730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto__){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto__){
return (function (state_28201){
var state_val_28202 = (state_28201[(1)]);
if((state_val_28202 === (7))){
var inst_28197 = (state_28201[(2)]);
var state_28201__$1 = state_28201;
var statearr_28203_28244 = state_28201__$1;
(statearr_28203_28244[(2)] = inst_28197);

(statearr_28203_28244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28202 === (20))){
var inst_28167 = (state_28201[(7)]);
var inst_28178 = (state_28201[(2)]);
var inst_28179 = cljs.core.next.call(null,inst_28167);
var inst_28153 = inst_28179;
var inst_28154 = null;
var inst_28155 = (0);
var inst_28156 = (0);
var state_28201__$1 = (function (){var statearr_28204 = state_28201;
(statearr_28204[(8)] = inst_28154);

(statearr_28204[(9)] = inst_28178);

(statearr_28204[(10)] = inst_28153);

(statearr_28204[(11)] = inst_28155);

(statearr_28204[(12)] = inst_28156);

return statearr_28204;
})();
var statearr_28205_28245 = state_28201__$1;
(statearr_28205_28245[(2)] = null);

(statearr_28205_28245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28202 === (1))){
var state_28201__$1 = state_28201;
var statearr_28206_28246 = state_28201__$1;
(statearr_28206_28246[(2)] = null);

(statearr_28206_28246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28202 === (4))){
var inst_28142 = (state_28201[(13)]);
var inst_28142__$1 = (state_28201[(2)]);
var inst_28143 = (inst_28142__$1 == null);
var state_28201__$1 = (function (){var statearr_28207 = state_28201;
(statearr_28207[(13)] = inst_28142__$1);

return statearr_28207;
})();
if(cljs.core.truth_(inst_28143)){
var statearr_28208_28247 = state_28201__$1;
(statearr_28208_28247[(1)] = (5));

} else {
var statearr_28209_28248 = state_28201__$1;
(statearr_28209_28248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28202 === (15))){
var state_28201__$1 = state_28201;
var statearr_28213_28249 = state_28201__$1;
(statearr_28213_28249[(2)] = null);

(statearr_28213_28249[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28202 === (21))){
var state_28201__$1 = state_28201;
var statearr_28214_28250 = state_28201__$1;
(statearr_28214_28250[(2)] = null);

(statearr_28214_28250[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28202 === (13))){
var inst_28154 = (state_28201[(8)]);
var inst_28153 = (state_28201[(10)]);
var inst_28155 = (state_28201[(11)]);
var inst_28156 = (state_28201[(12)]);
var inst_28163 = (state_28201[(2)]);
var inst_28164 = (inst_28156 + (1));
var tmp28210 = inst_28154;
var tmp28211 = inst_28153;
var tmp28212 = inst_28155;
var inst_28153__$1 = tmp28211;
var inst_28154__$1 = tmp28210;
var inst_28155__$1 = tmp28212;
var inst_28156__$1 = inst_28164;
var state_28201__$1 = (function (){var statearr_28215 = state_28201;
(statearr_28215[(8)] = inst_28154__$1);

(statearr_28215[(14)] = inst_28163);

(statearr_28215[(10)] = inst_28153__$1);

(statearr_28215[(11)] = inst_28155__$1);

(statearr_28215[(12)] = inst_28156__$1);

return statearr_28215;
})();
var statearr_28216_28251 = state_28201__$1;
(statearr_28216_28251[(2)] = null);

(statearr_28216_28251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28202 === (22))){
var state_28201__$1 = state_28201;
var statearr_28217_28252 = state_28201__$1;
(statearr_28217_28252[(2)] = null);

(statearr_28217_28252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28202 === (6))){
var inst_28142 = (state_28201[(13)]);
var inst_28151 = f.call(null,inst_28142);
var inst_28152 = cljs.core.seq.call(null,inst_28151);
var inst_28153 = inst_28152;
var inst_28154 = null;
var inst_28155 = (0);
var inst_28156 = (0);
var state_28201__$1 = (function (){var statearr_28218 = state_28201;
(statearr_28218[(8)] = inst_28154);

(statearr_28218[(10)] = inst_28153);

(statearr_28218[(11)] = inst_28155);

(statearr_28218[(12)] = inst_28156);

return statearr_28218;
})();
var statearr_28219_28253 = state_28201__$1;
(statearr_28219_28253[(2)] = null);

(statearr_28219_28253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28202 === (17))){
var inst_28167 = (state_28201[(7)]);
var inst_28171 = cljs.core.chunk_first.call(null,inst_28167);
var inst_28172 = cljs.core.chunk_rest.call(null,inst_28167);
var inst_28173 = cljs.core.count.call(null,inst_28171);
var inst_28153 = inst_28172;
var inst_28154 = inst_28171;
var inst_28155 = inst_28173;
var inst_28156 = (0);
var state_28201__$1 = (function (){var statearr_28220 = state_28201;
(statearr_28220[(8)] = inst_28154);

(statearr_28220[(10)] = inst_28153);

(statearr_28220[(11)] = inst_28155);

(statearr_28220[(12)] = inst_28156);

return statearr_28220;
})();
var statearr_28221_28254 = state_28201__$1;
(statearr_28221_28254[(2)] = null);

(statearr_28221_28254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28202 === (3))){
var inst_28199 = (state_28201[(2)]);
var state_28201__$1 = state_28201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28201__$1,inst_28199);
} else {
if((state_val_28202 === (12))){
var inst_28187 = (state_28201[(2)]);
var state_28201__$1 = state_28201;
var statearr_28222_28255 = state_28201__$1;
(statearr_28222_28255[(2)] = inst_28187);

(statearr_28222_28255[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28202 === (2))){
var state_28201__$1 = state_28201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28201__$1,(4),in$);
} else {
if((state_val_28202 === (23))){
var inst_28195 = (state_28201[(2)]);
var state_28201__$1 = state_28201;
var statearr_28223_28256 = state_28201__$1;
(statearr_28223_28256[(2)] = inst_28195);

(statearr_28223_28256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28202 === (19))){
var inst_28182 = (state_28201[(2)]);
var state_28201__$1 = state_28201;
var statearr_28224_28257 = state_28201__$1;
(statearr_28224_28257[(2)] = inst_28182);

(statearr_28224_28257[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28202 === (11))){
var inst_28153 = (state_28201[(10)]);
var inst_28167 = (state_28201[(7)]);
var inst_28167__$1 = cljs.core.seq.call(null,inst_28153);
var state_28201__$1 = (function (){var statearr_28225 = state_28201;
(statearr_28225[(7)] = inst_28167__$1);

return statearr_28225;
})();
if(inst_28167__$1){
var statearr_28226_28258 = state_28201__$1;
(statearr_28226_28258[(1)] = (14));

} else {
var statearr_28227_28259 = state_28201__$1;
(statearr_28227_28259[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28202 === (9))){
var inst_28189 = (state_28201[(2)]);
var inst_28190 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28201__$1 = (function (){var statearr_28228 = state_28201;
(statearr_28228[(15)] = inst_28189);

return statearr_28228;
})();
if(cljs.core.truth_(inst_28190)){
var statearr_28229_28260 = state_28201__$1;
(statearr_28229_28260[(1)] = (21));

} else {
var statearr_28230_28261 = state_28201__$1;
(statearr_28230_28261[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28202 === (5))){
var inst_28145 = cljs.core.async.close_BANG_.call(null,out);
var state_28201__$1 = state_28201;
var statearr_28231_28262 = state_28201__$1;
(statearr_28231_28262[(2)] = inst_28145);

(statearr_28231_28262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28202 === (14))){
var inst_28167 = (state_28201[(7)]);
var inst_28169 = cljs.core.chunked_seq_QMARK_.call(null,inst_28167);
var state_28201__$1 = state_28201;
if(inst_28169){
var statearr_28232_28263 = state_28201__$1;
(statearr_28232_28263[(1)] = (17));

} else {
var statearr_28233_28264 = state_28201__$1;
(statearr_28233_28264[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28202 === (16))){
var inst_28185 = (state_28201[(2)]);
var state_28201__$1 = state_28201;
var statearr_28234_28265 = state_28201__$1;
(statearr_28234_28265[(2)] = inst_28185);

(statearr_28234_28265[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28202 === (10))){
var inst_28154 = (state_28201[(8)]);
var inst_28156 = (state_28201[(12)]);
var inst_28161 = cljs.core._nth.call(null,inst_28154,inst_28156);
var state_28201__$1 = state_28201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28201__$1,(13),out,inst_28161);
} else {
if((state_val_28202 === (18))){
var inst_28167 = (state_28201[(7)]);
var inst_28176 = cljs.core.first.call(null,inst_28167);
var state_28201__$1 = state_28201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28201__$1,(20),out,inst_28176);
} else {
if((state_val_28202 === (8))){
var inst_28155 = (state_28201[(11)]);
var inst_28156 = (state_28201[(12)]);
var inst_28158 = (inst_28156 < inst_28155);
var inst_28159 = inst_28158;
var state_28201__$1 = state_28201;
if(cljs.core.truth_(inst_28159)){
var statearr_28235_28266 = state_28201__$1;
(statearr_28235_28266[(1)] = (10));

} else {
var statearr_28236_28267 = state_28201__$1;
(statearr_28236_28267[(1)] = (11));

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
});})(c__25730__auto__))
;
return ((function (switch__25616__auto__,c__25730__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25617__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25617__auto____0 = (function (){
var statearr_28240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28240[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25617__auto__);

(statearr_28240[(1)] = (1));

return statearr_28240;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25617__auto____1 = (function (state_28201){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_28201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e28241){if((e28241 instanceof Object)){
var ex__25620__auto__ = e28241;
var statearr_28242_28268 = state_28201;
(statearr_28242_28268[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28269 = state_28201;
state_28201 = G__28269;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25617__auto__ = function(state_28201){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25617__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25617__auto____1.call(this,state_28201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25617__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25617__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto__))
})();
var state__25732__auto__ = (function (){var statearr_28243 = f__25731__auto__.call(null);
(statearr_28243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto__);

return statearr_28243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto__))
);

return c__25730__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28270 = [];
var len__22617__auto___28273 = arguments.length;
var i__22618__auto___28274 = (0);
while(true){
if((i__22618__auto___28274 < len__22617__auto___28273)){
args28270.push((arguments[i__22618__auto___28274]));

var G__28275 = (i__22618__auto___28274 + (1));
i__22618__auto___28274 = G__28275;
continue;
} else {
}
break;
}

var G__28272 = args28270.length;
switch (G__28272) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28270.length)].join('')));

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
var args28277 = [];
var len__22617__auto___28280 = arguments.length;
var i__22618__auto___28281 = (0);
while(true){
if((i__22618__auto___28281 < len__22617__auto___28280)){
args28277.push((arguments[i__22618__auto___28281]));

var G__28282 = (i__22618__auto___28281 + (1));
i__22618__auto___28281 = G__28282;
continue;
} else {
}
break;
}

var G__28279 = args28277.length;
switch (G__28279) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28277.length)].join('')));

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
var args28284 = [];
var len__22617__auto___28335 = arguments.length;
var i__22618__auto___28336 = (0);
while(true){
if((i__22618__auto___28336 < len__22617__auto___28335)){
args28284.push((arguments[i__22618__auto___28336]));

var G__28337 = (i__22618__auto___28336 + (1));
i__22618__auto___28336 = G__28337;
continue;
} else {
}
break;
}

var G__28286 = args28284.length;
switch (G__28286) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28284.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25730__auto___28339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto___28339,out){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto___28339,out){
return (function (state_28310){
var state_val_28311 = (state_28310[(1)]);
if((state_val_28311 === (7))){
var inst_28305 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
var statearr_28312_28340 = state_28310__$1;
(statearr_28312_28340[(2)] = inst_28305);

(statearr_28312_28340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (1))){
var inst_28287 = null;
var state_28310__$1 = (function (){var statearr_28313 = state_28310;
(statearr_28313[(7)] = inst_28287);

return statearr_28313;
})();
var statearr_28314_28341 = state_28310__$1;
(statearr_28314_28341[(2)] = null);

(statearr_28314_28341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (4))){
var inst_28290 = (state_28310[(8)]);
var inst_28290__$1 = (state_28310[(2)]);
var inst_28291 = (inst_28290__$1 == null);
var inst_28292 = cljs.core.not.call(null,inst_28291);
var state_28310__$1 = (function (){var statearr_28315 = state_28310;
(statearr_28315[(8)] = inst_28290__$1);

return statearr_28315;
})();
if(inst_28292){
var statearr_28316_28342 = state_28310__$1;
(statearr_28316_28342[(1)] = (5));

} else {
var statearr_28317_28343 = state_28310__$1;
(statearr_28317_28343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (6))){
var state_28310__$1 = state_28310;
var statearr_28318_28344 = state_28310__$1;
(statearr_28318_28344[(2)] = null);

(statearr_28318_28344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (3))){
var inst_28307 = (state_28310[(2)]);
var inst_28308 = cljs.core.async.close_BANG_.call(null,out);
var state_28310__$1 = (function (){var statearr_28319 = state_28310;
(statearr_28319[(9)] = inst_28307);

return statearr_28319;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28310__$1,inst_28308);
} else {
if((state_val_28311 === (2))){
var state_28310__$1 = state_28310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28310__$1,(4),ch);
} else {
if((state_val_28311 === (11))){
var inst_28290 = (state_28310[(8)]);
var inst_28299 = (state_28310[(2)]);
var inst_28287 = inst_28290;
var state_28310__$1 = (function (){var statearr_28320 = state_28310;
(statearr_28320[(7)] = inst_28287);

(statearr_28320[(10)] = inst_28299);

return statearr_28320;
})();
var statearr_28321_28345 = state_28310__$1;
(statearr_28321_28345[(2)] = null);

(statearr_28321_28345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (9))){
var inst_28290 = (state_28310[(8)]);
var state_28310__$1 = state_28310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28310__$1,(11),out,inst_28290);
} else {
if((state_val_28311 === (5))){
var inst_28287 = (state_28310[(7)]);
var inst_28290 = (state_28310[(8)]);
var inst_28294 = cljs.core._EQ_.call(null,inst_28290,inst_28287);
var state_28310__$1 = state_28310;
if(inst_28294){
var statearr_28323_28346 = state_28310__$1;
(statearr_28323_28346[(1)] = (8));

} else {
var statearr_28324_28347 = state_28310__$1;
(statearr_28324_28347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (10))){
var inst_28302 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
var statearr_28325_28348 = state_28310__$1;
(statearr_28325_28348[(2)] = inst_28302);

(statearr_28325_28348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (8))){
var inst_28287 = (state_28310[(7)]);
var tmp28322 = inst_28287;
var inst_28287__$1 = tmp28322;
var state_28310__$1 = (function (){var statearr_28326 = state_28310;
(statearr_28326[(7)] = inst_28287__$1);

return statearr_28326;
})();
var statearr_28327_28349 = state_28310__$1;
(statearr_28327_28349[(2)] = null);

(statearr_28327_28349[(1)] = (2));


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
});})(c__25730__auto___28339,out))
;
return ((function (switch__25616__auto__,c__25730__auto___28339,out){
return (function() {
var cljs$core$async$state_machine__25617__auto__ = null;
var cljs$core$async$state_machine__25617__auto____0 = (function (){
var statearr_28331 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28331[(0)] = cljs$core$async$state_machine__25617__auto__);

(statearr_28331[(1)] = (1));

return statearr_28331;
});
var cljs$core$async$state_machine__25617__auto____1 = (function (state_28310){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_28310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e28332){if((e28332 instanceof Object)){
var ex__25620__auto__ = e28332;
var statearr_28333_28350 = state_28310;
(statearr_28333_28350[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28351 = state_28310;
state_28310 = G__28351;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
cljs$core$async$state_machine__25617__auto__ = function(state_28310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25617__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25617__auto____1.call(this,state_28310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25617__auto____0;
cljs$core$async$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25617__auto____1;
return cljs$core$async$state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto___28339,out))
})();
var state__25732__auto__ = (function (){var statearr_28334 = f__25731__auto__.call(null);
(statearr_28334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto___28339);

return statearr_28334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto___28339,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28352 = [];
var len__22617__auto___28422 = arguments.length;
var i__22618__auto___28423 = (0);
while(true){
if((i__22618__auto___28423 < len__22617__auto___28422)){
args28352.push((arguments[i__22618__auto___28423]));

var G__28424 = (i__22618__auto___28423 + (1));
i__22618__auto___28423 = G__28424;
continue;
} else {
}
break;
}

var G__28354 = args28352.length;
switch (G__28354) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28352.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25730__auto___28426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto___28426,out){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto___28426,out){
return (function (state_28392){
var state_val_28393 = (state_28392[(1)]);
if((state_val_28393 === (7))){
var inst_28388 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
var statearr_28394_28427 = state_28392__$1;
(statearr_28394_28427[(2)] = inst_28388);

(statearr_28394_28427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (1))){
var inst_28355 = (new Array(n));
var inst_28356 = inst_28355;
var inst_28357 = (0);
var state_28392__$1 = (function (){var statearr_28395 = state_28392;
(statearr_28395[(7)] = inst_28356);

(statearr_28395[(8)] = inst_28357);

return statearr_28395;
})();
var statearr_28396_28428 = state_28392__$1;
(statearr_28396_28428[(2)] = null);

(statearr_28396_28428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (4))){
var inst_28360 = (state_28392[(9)]);
var inst_28360__$1 = (state_28392[(2)]);
var inst_28361 = (inst_28360__$1 == null);
var inst_28362 = cljs.core.not.call(null,inst_28361);
var state_28392__$1 = (function (){var statearr_28397 = state_28392;
(statearr_28397[(9)] = inst_28360__$1);

return statearr_28397;
})();
if(inst_28362){
var statearr_28398_28429 = state_28392__$1;
(statearr_28398_28429[(1)] = (5));

} else {
var statearr_28399_28430 = state_28392__$1;
(statearr_28399_28430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (15))){
var inst_28382 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
var statearr_28400_28431 = state_28392__$1;
(statearr_28400_28431[(2)] = inst_28382);

(statearr_28400_28431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (13))){
var state_28392__$1 = state_28392;
var statearr_28401_28432 = state_28392__$1;
(statearr_28401_28432[(2)] = null);

(statearr_28401_28432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (6))){
var inst_28357 = (state_28392[(8)]);
var inst_28378 = (inst_28357 > (0));
var state_28392__$1 = state_28392;
if(cljs.core.truth_(inst_28378)){
var statearr_28402_28433 = state_28392__$1;
(statearr_28402_28433[(1)] = (12));

} else {
var statearr_28403_28434 = state_28392__$1;
(statearr_28403_28434[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (3))){
var inst_28390 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28392__$1,inst_28390);
} else {
if((state_val_28393 === (12))){
var inst_28356 = (state_28392[(7)]);
var inst_28380 = cljs.core.vec.call(null,inst_28356);
var state_28392__$1 = state_28392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28392__$1,(15),out,inst_28380);
} else {
if((state_val_28393 === (2))){
var state_28392__$1 = state_28392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28392__$1,(4),ch);
} else {
if((state_val_28393 === (11))){
var inst_28372 = (state_28392[(2)]);
var inst_28373 = (new Array(n));
var inst_28356 = inst_28373;
var inst_28357 = (0);
var state_28392__$1 = (function (){var statearr_28404 = state_28392;
(statearr_28404[(10)] = inst_28372);

(statearr_28404[(7)] = inst_28356);

(statearr_28404[(8)] = inst_28357);

return statearr_28404;
})();
var statearr_28405_28435 = state_28392__$1;
(statearr_28405_28435[(2)] = null);

(statearr_28405_28435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (9))){
var inst_28356 = (state_28392[(7)]);
var inst_28370 = cljs.core.vec.call(null,inst_28356);
var state_28392__$1 = state_28392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28392__$1,(11),out,inst_28370);
} else {
if((state_val_28393 === (5))){
var inst_28356 = (state_28392[(7)]);
var inst_28360 = (state_28392[(9)]);
var inst_28365 = (state_28392[(11)]);
var inst_28357 = (state_28392[(8)]);
var inst_28364 = (inst_28356[inst_28357] = inst_28360);
var inst_28365__$1 = (inst_28357 + (1));
var inst_28366 = (inst_28365__$1 < n);
var state_28392__$1 = (function (){var statearr_28406 = state_28392;
(statearr_28406[(11)] = inst_28365__$1);

(statearr_28406[(12)] = inst_28364);

return statearr_28406;
})();
if(cljs.core.truth_(inst_28366)){
var statearr_28407_28436 = state_28392__$1;
(statearr_28407_28436[(1)] = (8));

} else {
var statearr_28408_28437 = state_28392__$1;
(statearr_28408_28437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (14))){
var inst_28385 = (state_28392[(2)]);
var inst_28386 = cljs.core.async.close_BANG_.call(null,out);
var state_28392__$1 = (function (){var statearr_28410 = state_28392;
(statearr_28410[(13)] = inst_28385);

return statearr_28410;
})();
var statearr_28411_28438 = state_28392__$1;
(statearr_28411_28438[(2)] = inst_28386);

(statearr_28411_28438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (10))){
var inst_28376 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
var statearr_28412_28439 = state_28392__$1;
(statearr_28412_28439[(2)] = inst_28376);

(statearr_28412_28439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (8))){
var inst_28356 = (state_28392[(7)]);
var inst_28365 = (state_28392[(11)]);
var tmp28409 = inst_28356;
var inst_28356__$1 = tmp28409;
var inst_28357 = inst_28365;
var state_28392__$1 = (function (){var statearr_28413 = state_28392;
(statearr_28413[(7)] = inst_28356__$1);

(statearr_28413[(8)] = inst_28357);

return statearr_28413;
})();
var statearr_28414_28440 = state_28392__$1;
(statearr_28414_28440[(2)] = null);

(statearr_28414_28440[(1)] = (2));


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
});})(c__25730__auto___28426,out))
;
return ((function (switch__25616__auto__,c__25730__auto___28426,out){
return (function() {
var cljs$core$async$state_machine__25617__auto__ = null;
var cljs$core$async$state_machine__25617__auto____0 = (function (){
var statearr_28418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28418[(0)] = cljs$core$async$state_machine__25617__auto__);

(statearr_28418[(1)] = (1));

return statearr_28418;
});
var cljs$core$async$state_machine__25617__auto____1 = (function (state_28392){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_28392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e28419){if((e28419 instanceof Object)){
var ex__25620__auto__ = e28419;
var statearr_28420_28441 = state_28392;
(statearr_28420_28441[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28442 = state_28392;
state_28392 = G__28442;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
cljs$core$async$state_machine__25617__auto__ = function(state_28392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25617__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25617__auto____1.call(this,state_28392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25617__auto____0;
cljs$core$async$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25617__auto____1;
return cljs$core$async$state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto___28426,out))
})();
var state__25732__auto__ = (function (){var statearr_28421 = f__25731__auto__.call(null);
(statearr_28421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto___28426);

return statearr_28421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto___28426,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28443 = [];
var len__22617__auto___28517 = arguments.length;
var i__22618__auto___28518 = (0);
while(true){
if((i__22618__auto___28518 < len__22617__auto___28517)){
args28443.push((arguments[i__22618__auto___28518]));

var G__28519 = (i__22618__auto___28518 + (1));
i__22618__auto___28518 = G__28519;
continue;
} else {
}
break;
}

var G__28445 = args28443.length;
switch (G__28445) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28443.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25730__auto___28521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto___28521,out){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto___28521,out){
return (function (state_28487){
var state_val_28488 = (state_28487[(1)]);
if((state_val_28488 === (7))){
var inst_28483 = (state_28487[(2)]);
var state_28487__$1 = state_28487;
var statearr_28489_28522 = state_28487__$1;
(statearr_28489_28522[(2)] = inst_28483);

(statearr_28489_28522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (1))){
var inst_28446 = [];
var inst_28447 = inst_28446;
var inst_28448 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28487__$1 = (function (){var statearr_28490 = state_28487;
(statearr_28490[(7)] = inst_28448);

(statearr_28490[(8)] = inst_28447);

return statearr_28490;
})();
var statearr_28491_28523 = state_28487__$1;
(statearr_28491_28523[(2)] = null);

(statearr_28491_28523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (4))){
var inst_28451 = (state_28487[(9)]);
var inst_28451__$1 = (state_28487[(2)]);
var inst_28452 = (inst_28451__$1 == null);
var inst_28453 = cljs.core.not.call(null,inst_28452);
var state_28487__$1 = (function (){var statearr_28492 = state_28487;
(statearr_28492[(9)] = inst_28451__$1);

return statearr_28492;
})();
if(inst_28453){
var statearr_28493_28524 = state_28487__$1;
(statearr_28493_28524[(1)] = (5));

} else {
var statearr_28494_28525 = state_28487__$1;
(statearr_28494_28525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (15))){
var inst_28477 = (state_28487[(2)]);
var state_28487__$1 = state_28487;
var statearr_28495_28526 = state_28487__$1;
(statearr_28495_28526[(2)] = inst_28477);

(statearr_28495_28526[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (13))){
var state_28487__$1 = state_28487;
var statearr_28496_28527 = state_28487__$1;
(statearr_28496_28527[(2)] = null);

(statearr_28496_28527[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (6))){
var inst_28447 = (state_28487[(8)]);
var inst_28472 = inst_28447.length;
var inst_28473 = (inst_28472 > (0));
var state_28487__$1 = state_28487;
if(cljs.core.truth_(inst_28473)){
var statearr_28497_28528 = state_28487__$1;
(statearr_28497_28528[(1)] = (12));

} else {
var statearr_28498_28529 = state_28487__$1;
(statearr_28498_28529[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (3))){
var inst_28485 = (state_28487[(2)]);
var state_28487__$1 = state_28487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28487__$1,inst_28485);
} else {
if((state_val_28488 === (12))){
var inst_28447 = (state_28487[(8)]);
var inst_28475 = cljs.core.vec.call(null,inst_28447);
var state_28487__$1 = state_28487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28487__$1,(15),out,inst_28475);
} else {
if((state_val_28488 === (2))){
var state_28487__$1 = state_28487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28487__$1,(4),ch);
} else {
if((state_val_28488 === (11))){
var inst_28455 = (state_28487[(10)]);
var inst_28451 = (state_28487[(9)]);
var inst_28465 = (state_28487[(2)]);
var inst_28466 = [];
var inst_28467 = inst_28466.push(inst_28451);
var inst_28447 = inst_28466;
var inst_28448 = inst_28455;
var state_28487__$1 = (function (){var statearr_28499 = state_28487;
(statearr_28499[(11)] = inst_28467);

(statearr_28499[(12)] = inst_28465);

(statearr_28499[(7)] = inst_28448);

(statearr_28499[(8)] = inst_28447);

return statearr_28499;
})();
var statearr_28500_28530 = state_28487__$1;
(statearr_28500_28530[(2)] = null);

(statearr_28500_28530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (9))){
var inst_28447 = (state_28487[(8)]);
var inst_28463 = cljs.core.vec.call(null,inst_28447);
var state_28487__$1 = state_28487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28487__$1,(11),out,inst_28463);
} else {
if((state_val_28488 === (5))){
var inst_28455 = (state_28487[(10)]);
var inst_28451 = (state_28487[(9)]);
var inst_28448 = (state_28487[(7)]);
var inst_28455__$1 = f.call(null,inst_28451);
var inst_28456 = cljs.core._EQ_.call(null,inst_28455__$1,inst_28448);
var inst_28457 = cljs.core.keyword_identical_QMARK_.call(null,inst_28448,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28458 = (inst_28456) || (inst_28457);
var state_28487__$1 = (function (){var statearr_28501 = state_28487;
(statearr_28501[(10)] = inst_28455__$1);

return statearr_28501;
})();
if(cljs.core.truth_(inst_28458)){
var statearr_28502_28531 = state_28487__$1;
(statearr_28502_28531[(1)] = (8));

} else {
var statearr_28503_28532 = state_28487__$1;
(statearr_28503_28532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (14))){
var inst_28480 = (state_28487[(2)]);
var inst_28481 = cljs.core.async.close_BANG_.call(null,out);
var state_28487__$1 = (function (){var statearr_28505 = state_28487;
(statearr_28505[(13)] = inst_28480);

return statearr_28505;
})();
var statearr_28506_28533 = state_28487__$1;
(statearr_28506_28533[(2)] = inst_28481);

(statearr_28506_28533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (10))){
var inst_28470 = (state_28487[(2)]);
var state_28487__$1 = state_28487;
var statearr_28507_28534 = state_28487__$1;
(statearr_28507_28534[(2)] = inst_28470);

(statearr_28507_28534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (8))){
var inst_28455 = (state_28487[(10)]);
var inst_28451 = (state_28487[(9)]);
var inst_28447 = (state_28487[(8)]);
var inst_28460 = inst_28447.push(inst_28451);
var tmp28504 = inst_28447;
var inst_28447__$1 = tmp28504;
var inst_28448 = inst_28455;
var state_28487__$1 = (function (){var statearr_28508 = state_28487;
(statearr_28508[(14)] = inst_28460);

(statearr_28508[(7)] = inst_28448);

(statearr_28508[(8)] = inst_28447__$1);

return statearr_28508;
})();
var statearr_28509_28535 = state_28487__$1;
(statearr_28509_28535[(2)] = null);

(statearr_28509_28535[(1)] = (2));


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
});})(c__25730__auto___28521,out))
;
return ((function (switch__25616__auto__,c__25730__auto___28521,out){
return (function() {
var cljs$core$async$state_machine__25617__auto__ = null;
var cljs$core$async$state_machine__25617__auto____0 = (function (){
var statearr_28513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28513[(0)] = cljs$core$async$state_machine__25617__auto__);

(statearr_28513[(1)] = (1));

return statearr_28513;
});
var cljs$core$async$state_machine__25617__auto____1 = (function (state_28487){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_28487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e28514){if((e28514 instanceof Object)){
var ex__25620__auto__ = e28514;
var statearr_28515_28536 = state_28487;
(statearr_28515_28536[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28537 = state_28487;
state_28487 = G__28537;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
cljs$core$async$state_machine__25617__auto__ = function(state_28487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25617__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25617__auto____1.call(this,state_28487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25617__auto____0;
cljs$core$async$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25617__auto____1;
return cljs$core$async$state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto___28521,out))
})();
var state__25732__auto__ = (function (){var statearr_28516 = f__25731__auto__.call(null);
(statearr_28516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto___28521);

return statearr_28516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto___28521,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1467159058953