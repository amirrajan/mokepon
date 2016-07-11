// Compiled by ClojureScript 1.9.76 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args26296 = [];
var len__19539__auto___26302 = arguments.length;
var i__19540__auto___26303 = (0);
while(true){
if((i__19540__auto___26303 < len__19539__auto___26302)){
args26296.push((arguments[i__19540__auto___26303]));

var G__26304 = (i__19540__auto___26303 + (1));
i__19540__auto___26303 = G__26304;
continue;
} else {
}
break;
}

var G__26298 = args26296.length;
switch (G__26298) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26296.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async26299 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26299 = (function (f,blockable,meta26300){
this.f = f;
this.blockable = blockable;
this.meta26300 = meta26300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26301,meta26300__$1){
var self__ = this;
var _26301__$1 = this;
return (new cljs.core.async.t_cljs$core$async26299(self__.f,self__.blockable,meta26300__$1));
});

cljs.core.async.t_cljs$core$async26299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26301){
var self__ = this;
var _26301__$1 = this;
return self__.meta26300;
});

cljs.core.async.t_cljs$core$async26299.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26299.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26300","meta26300",-216761438,null)], null);
});

cljs.core.async.t_cljs$core$async26299.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26299";

cljs.core.async.t_cljs$core$async26299.cljs$lang$ctorPrWriter = (function (this__19070__auto__,writer__19071__auto__,opt__19072__auto__){
return cljs.core._write.call(null,writer__19071__auto__,"cljs.core.async/t_cljs$core$async26299");
});

cljs.core.async.__GT_t_cljs$core$async26299 = (function cljs$core$async$__GT_t_cljs$core$async26299(f__$1,blockable__$1,meta26300){
return (new cljs.core.async.t_cljs$core$async26299(f__$1,blockable__$1,meta26300));
});

}

return (new cljs.core.async.t_cljs$core$async26299(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args26308 = [];
var len__19539__auto___26311 = arguments.length;
var i__19540__auto___26312 = (0);
while(true){
if((i__19540__auto___26312 < len__19539__auto___26311)){
args26308.push((arguments[i__19540__auto___26312]));

var G__26313 = (i__19540__auto___26312 + (1));
i__19540__auto___26312 = G__26313;
continue;
} else {
}
break;
}

var G__26310 = args26308.length;
switch (G__26310) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26308.length)].join('')));

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
var args26315 = [];
var len__19539__auto___26318 = arguments.length;
var i__19540__auto___26319 = (0);
while(true){
if((i__19540__auto___26319 < len__19539__auto___26318)){
args26315.push((arguments[i__19540__auto___26319]));

var G__26320 = (i__19540__auto___26319 + (1));
i__19540__auto___26319 = G__26320;
continue;
} else {
}
break;
}

var G__26317 = args26315.length;
switch (G__26317) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26315.length)].join('')));

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
var args26322 = [];
var len__19539__auto___26325 = arguments.length;
var i__19540__auto___26326 = (0);
while(true){
if((i__19540__auto___26326 < len__19539__auto___26325)){
args26322.push((arguments[i__19540__auto___26326]));

var G__26327 = (i__19540__auto___26326 + (1));
i__19540__auto___26326 = G__26327;
continue;
} else {
}
break;
}

var G__26324 = args26322.length;
switch (G__26324) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26322.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26329 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26329);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26329,ret){
return (function (){
return fn1.call(null,val_26329);
});})(val_26329,ret))
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
var args26330 = [];
var len__19539__auto___26333 = arguments.length;
var i__19540__auto___26334 = (0);
while(true){
if((i__19540__auto___26334 < len__19539__auto___26333)){
args26330.push((arguments[i__19540__auto___26334]));

var G__26335 = (i__19540__auto___26334 + (1));
i__19540__auto___26334 = G__26335;
continue;
} else {
}
break;
}

var G__26332 = args26330.length;
switch (G__26332) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26330.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__19379__auto___26337 = n;
var x_26338 = (0);
while(true){
if((x_26338 < n__19379__auto___26337)){
(a[x_26338] = (0));

var G__26339 = (x_26338 + (1));
x_26338 = G__26339;
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

var G__26340 = (i + (1));
i = G__26340;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26344 = (function (alt_flag,flag,meta26345){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26345 = meta26345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26346,meta26345__$1){
var self__ = this;
var _26346__$1 = this;
return (new cljs.core.async.t_cljs$core$async26344(self__.alt_flag,self__.flag,meta26345__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26346){
var self__ = this;
var _26346__$1 = this;
return self__.meta26345;
});})(flag))
;

cljs.core.async.t_cljs$core$async26344.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26344.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26344.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26345","meta26345",1256183770,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26344";

cljs.core.async.t_cljs$core$async26344.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19070__auto__,writer__19071__auto__,opt__19072__auto__){
return cljs.core._write.call(null,writer__19071__auto__,"cljs.core.async/t_cljs$core$async26344");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26344 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26344(alt_flag__$1,flag__$1,meta26345){
return (new cljs.core.async.t_cljs$core$async26344(alt_flag__$1,flag__$1,meta26345));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26344(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26350 = (function (alt_handler,flag,cb,meta26351){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26351 = meta26351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26352,meta26351__$1){
var self__ = this;
var _26352__$1 = this;
return (new cljs.core.async.t_cljs$core$async26350(self__.alt_handler,self__.flag,self__.cb,meta26351__$1));
});

cljs.core.async.t_cljs$core$async26350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26352){
var self__ = this;
var _26352__$1 = this;
return self__.meta26351;
});

cljs.core.async.t_cljs$core$async26350.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26350.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26350.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26350.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26351","meta26351",214487558,null)], null);
});

cljs.core.async.t_cljs$core$async26350.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26350";

cljs.core.async.t_cljs$core$async26350.cljs$lang$ctorPrWriter = (function (this__19070__auto__,writer__19071__auto__,opt__19072__auto__){
return cljs.core._write.call(null,writer__19071__auto__,"cljs.core.async/t_cljs$core$async26350");
});

cljs.core.async.__GT_t_cljs$core$async26350 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26350(alt_handler__$1,flag__$1,cb__$1,meta26351){
return (new cljs.core.async.t_cljs$core$async26350(alt_handler__$1,flag__$1,cb__$1,meta26351));
});

}

return (new cljs.core.async.t_cljs$core$async26350(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26353_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26353_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26354_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26354_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18464__auto__ = wport;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26355 = (i + (1));
i = G__26355;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18464__auto__ = ret;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18452__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18452__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18452__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__19546__auto__ = [];
var len__19539__auto___26361 = arguments.length;
var i__19540__auto___26362 = (0);
while(true){
if((i__19540__auto___26362 < len__19539__auto___26361)){
args__19546__auto__.push((arguments[i__19540__auto___26362]));

var G__26363 = (i__19540__auto___26362 + (1));
i__19540__auto___26362 = G__26363;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26358){
var map__26359 = p__26358;
var map__26359__$1 = ((((!((map__26359 == null)))?((((map__26359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26359):map__26359);
var opts = map__26359__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26356){
var G__26357 = cljs.core.first.call(null,seq26356);
var seq26356__$1 = cljs.core.next.call(null,seq26356);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26357,seq26356__$1);
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
var args26364 = [];
var len__19539__auto___26414 = arguments.length;
var i__19540__auto___26415 = (0);
while(true){
if((i__19540__auto___26415 < len__19539__auto___26414)){
args26364.push((arguments[i__19540__auto___26415]));

var G__26416 = (i__19540__auto___26415 + (1));
i__19540__auto___26415 = G__26416;
continue;
} else {
}
break;
}

var G__26366 = args26364.length;
switch (G__26366) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26364.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20519__auto___26418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto___26418){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto___26418){
return (function (state_26390){
var state_val_26391 = (state_26390[(1)]);
if((state_val_26391 === (7))){
var inst_26386 = (state_26390[(2)]);
var state_26390__$1 = state_26390;
var statearr_26392_26419 = state_26390__$1;
(statearr_26392_26419[(2)] = inst_26386);

(statearr_26392_26419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26391 === (1))){
var state_26390__$1 = state_26390;
var statearr_26393_26420 = state_26390__$1;
(statearr_26393_26420[(2)] = null);

(statearr_26393_26420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26391 === (4))){
var inst_26369 = (state_26390[(7)]);
var inst_26369__$1 = (state_26390[(2)]);
var inst_26370 = (inst_26369__$1 == null);
var state_26390__$1 = (function (){var statearr_26394 = state_26390;
(statearr_26394[(7)] = inst_26369__$1);

return statearr_26394;
})();
if(cljs.core.truth_(inst_26370)){
var statearr_26395_26421 = state_26390__$1;
(statearr_26395_26421[(1)] = (5));

} else {
var statearr_26396_26422 = state_26390__$1;
(statearr_26396_26422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26391 === (13))){
var state_26390__$1 = state_26390;
var statearr_26397_26423 = state_26390__$1;
(statearr_26397_26423[(2)] = null);

(statearr_26397_26423[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26391 === (6))){
var inst_26369 = (state_26390[(7)]);
var state_26390__$1 = state_26390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26390__$1,(11),to,inst_26369);
} else {
if((state_val_26391 === (3))){
var inst_26388 = (state_26390[(2)]);
var state_26390__$1 = state_26390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26390__$1,inst_26388);
} else {
if((state_val_26391 === (12))){
var state_26390__$1 = state_26390;
var statearr_26398_26424 = state_26390__$1;
(statearr_26398_26424[(2)] = null);

(statearr_26398_26424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26391 === (2))){
var state_26390__$1 = state_26390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26390__$1,(4),from);
} else {
if((state_val_26391 === (11))){
var inst_26379 = (state_26390[(2)]);
var state_26390__$1 = state_26390;
if(cljs.core.truth_(inst_26379)){
var statearr_26399_26425 = state_26390__$1;
(statearr_26399_26425[(1)] = (12));

} else {
var statearr_26400_26426 = state_26390__$1;
(statearr_26400_26426[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26391 === (9))){
var state_26390__$1 = state_26390;
var statearr_26401_26427 = state_26390__$1;
(statearr_26401_26427[(2)] = null);

(statearr_26401_26427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26391 === (5))){
var state_26390__$1 = state_26390;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26402_26428 = state_26390__$1;
(statearr_26402_26428[(1)] = (8));

} else {
var statearr_26403_26429 = state_26390__$1;
(statearr_26403_26429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26391 === (14))){
var inst_26384 = (state_26390[(2)]);
var state_26390__$1 = state_26390;
var statearr_26404_26430 = state_26390__$1;
(statearr_26404_26430[(2)] = inst_26384);

(statearr_26404_26430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26391 === (10))){
var inst_26376 = (state_26390[(2)]);
var state_26390__$1 = state_26390;
var statearr_26405_26431 = state_26390__$1;
(statearr_26405_26431[(2)] = inst_26376);

(statearr_26405_26431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26391 === (8))){
var inst_26373 = cljs.core.async.close_BANG_.call(null,to);
var state_26390__$1 = state_26390;
var statearr_26406_26432 = state_26390__$1;
(statearr_26406_26432[(2)] = inst_26373);

(statearr_26406_26432[(1)] = (10));


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
});})(c__20519__auto___26418))
;
return ((function (switch__20498__auto__,c__20519__auto___26418){
return (function() {
var cljs$core$async$state_machine__20499__auto__ = null;
var cljs$core$async$state_machine__20499__auto____0 = (function (){
var statearr_26410 = [null,null,null,null,null,null,null,null];
(statearr_26410[(0)] = cljs$core$async$state_machine__20499__auto__);

(statearr_26410[(1)] = (1));

return statearr_26410;
});
var cljs$core$async$state_machine__20499__auto____1 = (function (state_26390){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_26390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e26411){if((e26411 instanceof Object)){
var ex__20502__auto__ = e26411;
var statearr_26412_26433 = state_26390;
(statearr_26412_26433[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26434 = state_26390;
state_26390 = G__26434;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
cljs$core$async$state_machine__20499__auto__ = function(state_26390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20499__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20499__auto____1.call(this,state_26390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20499__auto____0;
cljs$core$async$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20499__auto____1;
return cljs$core$async$state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto___26418))
})();
var state__20521__auto__ = (function (){var statearr_26413 = f__20520__auto__.call(null);
(statearr_26413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto___26418);

return statearr_26413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto___26418))
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
return (function (p__26622){
var vec__26623 = p__26622;
var v = cljs.core.nth.call(null,vec__26623,(0),null);
var p = cljs.core.nth.call(null,vec__26623,(1),null);
var job = vec__26623;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20519__auto___26809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto___26809,res,vec__26623,v,p,job,jobs,results){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto___26809,res,vec__26623,v,p,job,jobs,results){
return (function (state_26630){
var state_val_26631 = (state_26630[(1)]);
if((state_val_26631 === (1))){
var state_26630__$1 = state_26630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26630__$1,(2),res,v);
} else {
if((state_val_26631 === (2))){
var inst_26627 = (state_26630[(2)]);
var inst_26628 = cljs.core.async.close_BANG_.call(null,res);
var state_26630__$1 = (function (){var statearr_26632 = state_26630;
(statearr_26632[(7)] = inst_26627);

return statearr_26632;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26630__$1,inst_26628);
} else {
return null;
}
}
});})(c__20519__auto___26809,res,vec__26623,v,p,job,jobs,results))
;
return ((function (switch__20498__auto__,c__20519__auto___26809,res,vec__26623,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____0 = (function (){
var statearr_26636 = [null,null,null,null,null,null,null,null];
(statearr_26636[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__);

(statearr_26636[(1)] = (1));

return statearr_26636;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____1 = (function (state_26630){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_26630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e26637){if((e26637 instanceof Object)){
var ex__20502__auto__ = e26637;
var statearr_26638_26810 = state_26630;
(statearr_26638_26810[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26811 = state_26630;
state_26630 = G__26811;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__ = function(state_26630){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____1.call(this,state_26630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto___26809,res,vec__26623,v,p,job,jobs,results))
})();
var state__20521__auto__ = (function (){var statearr_26639 = f__20520__auto__.call(null);
(statearr_26639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto___26809);

return statearr_26639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto___26809,res,vec__26623,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26640){
var vec__26641 = p__26640;
var v = cljs.core.nth.call(null,vec__26641,(0),null);
var p = cljs.core.nth.call(null,vec__26641,(1),null);
var job = vec__26641;
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
var n__19379__auto___26812 = n;
var __26813 = (0);
while(true){
if((__26813 < n__19379__auto___26812)){
var G__26644_26814 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26644_26814) {
case "compute":
var c__20519__auto___26816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26813,c__20519__auto___26816,G__26644_26814,n__19379__auto___26812,jobs,results,process,async){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (__26813,c__20519__auto___26816,G__26644_26814,n__19379__auto___26812,jobs,results,process,async){
return (function (state_26657){
var state_val_26658 = (state_26657[(1)]);
if((state_val_26658 === (1))){
var state_26657__$1 = state_26657;
var statearr_26659_26817 = state_26657__$1;
(statearr_26659_26817[(2)] = null);

(statearr_26659_26817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26658 === (2))){
var state_26657__$1 = state_26657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26657__$1,(4),jobs);
} else {
if((state_val_26658 === (3))){
var inst_26655 = (state_26657[(2)]);
var state_26657__$1 = state_26657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26657__$1,inst_26655);
} else {
if((state_val_26658 === (4))){
var inst_26647 = (state_26657[(2)]);
var inst_26648 = process.call(null,inst_26647);
var state_26657__$1 = state_26657;
if(cljs.core.truth_(inst_26648)){
var statearr_26660_26818 = state_26657__$1;
(statearr_26660_26818[(1)] = (5));

} else {
var statearr_26661_26819 = state_26657__$1;
(statearr_26661_26819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26658 === (5))){
var state_26657__$1 = state_26657;
var statearr_26662_26820 = state_26657__$1;
(statearr_26662_26820[(2)] = null);

(statearr_26662_26820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26658 === (6))){
var state_26657__$1 = state_26657;
var statearr_26663_26821 = state_26657__$1;
(statearr_26663_26821[(2)] = null);

(statearr_26663_26821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26658 === (7))){
var inst_26653 = (state_26657[(2)]);
var state_26657__$1 = state_26657;
var statearr_26664_26822 = state_26657__$1;
(statearr_26664_26822[(2)] = inst_26653);

(statearr_26664_26822[(1)] = (3));


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
});})(__26813,c__20519__auto___26816,G__26644_26814,n__19379__auto___26812,jobs,results,process,async))
;
return ((function (__26813,switch__20498__auto__,c__20519__auto___26816,G__26644_26814,n__19379__auto___26812,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____0 = (function (){
var statearr_26668 = [null,null,null,null,null,null,null];
(statearr_26668[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__);

(statearr_26668[(1)] = (1));

return statearr_26668;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____1 = (function (state_26657){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_26657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e26669){if((e26669 instanceof Object)){
var ex__20502__auto__ = e26669;
var statearr_26670_26823 = state_26657;
(statearr_26670_26823[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26824 = state_26657;
state_26657 = G__26824;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__ = function(state_26657){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____1.call(this,state_26657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__;
})()
;})(__26813,switch__20498__auto__,c__20519__auto___26816,G__26644_26814,n__19379__auto___26812,jobs,results,process,async))
})();
var state__20521__auto__ = (function (){var statearr_26671 = f__20520__auto__.call(null);
(statearr_26671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto___26816);

return statearr_26671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(__26813,c__20519__auto___26816,G__26644_26814,n__19379__auto___26812,jobs,results,process,async))
);


break;
case "async":
var c__20519__auto___26825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26813,c__20519__auto___26825,G__26644_26814,n__19379__auto___26812,jobs,results,process,async){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (__26813,c__20519__auto___26825,G__26644_26814,n__19379__auto___26812,jobs,results,process,async){
return (function (state_26684){
var state_val_26685 = (state_26684[(1)]);
if((state_val_26685 === (1))){
var state_26684__$1 = state_26684;
var statearr_26686_26826 = state_26684__$1;
(statearr_26686_26826[(2)] = null);

(statearr_26686_26826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26685 === (2))){
var state_26684__$1 = state_26684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26684__$1,(4),jobs);
} else {
if((state_val_26685 === (3))){
var inst_26682 = (state_26684[(2)]);
var state_26684__$1 = state_26684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26684__$1,inst_26682);
} else {
if((state_val_26685 === (4))){
var inst_26674 = (state_26684[(2)]);
var inst_26675 = async.call(null,inst_26674);
var state_26684__$1 = state_26684;
if(cljs.core.truth_(inst_26675)){
var statearr_26687_26827 = state_26684__$1;
(statearr_26687_26827[(1)] = (5));

} else {
var statearr_26688_26828 = state_26684__$1;
(statearr_26688_26828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26685 === (5))){
var state_26684__$1 = state_26684;
var statearr_26689_26829 = state_26684__$1;
(statearr_26689_26829[(2)] = null);

(statearr_26689_26829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26685 === (6))){
var state_26684__$1 = state_26684;
var statearr_26690_26830 = state_26684__$1;
(statearr_26690_26830[(2)] = null);

(statearr_26690_26830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26685 === (7))){
var inst_26680 = (state_26684[(2)]);
var state_26684__$1 = state_26684;
var statearr_26691_26831 = state_26684__$1;
(statearr_26691_26831[(2)] = inst_26680);

(statearr_26691_26831[(1)] = (3));


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
});})(__26813,c__20519__auto___26825,G__26644_26814,n__19379__auto___26812,jobs,results,process,async))
;
return ((function (__26813,switch__20498__auto__,c__20519__auto___26825,G__26644_26814,n__19379__auto___26812,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____0 = (function (){
var statearr_26695 = [null,null,null,null,null,null,null];
(statearr_26695[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__);

(statearr_26695[(1)] = (1));

return statearr_26695;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____1 = (function (state_26684){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_26684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e26696){if((e26696 instanceof Object)){
var ex__20502__auto__ = e26696;
var statearr_26697_26832 = state_26684;
(statearr_26697_26832[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26833 = state_26684;
state_26684 = G__26833;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__ = function(state_26684){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____1.call(this,state_26684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__;
})()
;})(__26813,switch__20498__auto__,c__20519__auto___26825,G__26644_26814,n__19379__auto___26812,jobs,results,process,async))
})();
var state__20521__auto__ = (function (){var statearr_26698 = f__20520__auto__.call(null);
(statearr_26698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto___26825);

return statearr_26698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(__26813,c__20519__auto___26825,G__26644_26814,n__19379__auto___26812,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26834 = (__26813 + (1));
__26813 = G__26834;
continue;
} else {
}
break;
}

var c__20519__auto___26835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto___26835,jobs,results,process,async){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto___26835,jobs,results,process,async){
return (function (state_26720){
var state_val_26721 = (state_26720[(1)]);
if((state_val_26721 === (1))){
var state_26720__$1 = state_26720;
var statearr_26722_26836 = state_26720__$1;
(statearr_26722_26836[(2)] = null);

(statearr_26722_26836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (2))){
var state_26720__$1 = state_26720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26720__$1,(4),from);
} else {
if((state_val_26721 === (3))){
var inst_26718 = (state_26720[(2)]);
var state_26720__$1 = state_26720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26720__$1,inst_26718);
} else {
if((state_val_26721 === (4))){
var inst_26701 = (state_26720[(7)]);
var inst_26701__$1 = (state_26720[(2)]);
var inst_26702 = (inst_26701__$1 == null);
var state_26720__$1 = (function (){var statearr_26723 = state_26720;
(statearr_26723[(7)] = inst_26701__$1);

return statearr_26723;
})();
if(cljs.core.truth_(inst_26702)){
var statearr_26724_26837 = state_26720__$1;
(statearr_26724_26837[(1)] = (5));

} else {
var statearr_26725_26838 = state_26720__$1;
(statearr_26725_26838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (5))){
var inst_26704 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26720__$1 = state_26720;
var statearr_26726_26839 = state_26720__$1;
(statearr_26726_26839[(2)] = inst_26704);

(statearr_26726_26839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (6))){
var inst_26701 = (state_26720[(7)]);
var inst_26706 = (state_26720[(8)]);
var inst_26706__$1 = cljs.core.async.chan.call(null,(1));
var inst_26707 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26708 = [inst_26701,inst_26706__$1];
var inst_26709 = (new cljs.core.PersistentVector(null,2,(5),inst_26707,inst_26708,null));
var state_26720__$1 = (function (){var statearr_26727 = state_26720;
(statearr_26727[(8)] = inst_26706__$1);

return statearr_26727;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26720__$1,(8),jobs,inst_26709);
} else {
if((state_val_26721 === (7))){
var inst_26716 = (state_26720[(2)]);
var state_26720__$1 = state_26720;
var statearr_26728_26840 = state_26720__$1;
(statearr_26728_26840[(2)] = inst_26716);

(statearr_26728_26840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (8))){
var inst_26706 = (state_26720[(8)]);
var inst_26711 = (state_26720[(2)]);
var state_26720__$1 = (function (){var statearr_26729 = state_26720;
(statearr_26729[(9)] = inst_26711);

return statearr_26729;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26720__$1,(9),results,inst_26706);
} else {
if((state_val_26721 === (9))){
var inst_26713 = (state_26720[(2)]);
var state_26720__$1 = (function (){var statearr_26730 = state_26720;
(statearr_26730[(10)] = inst_26713);

return statearr_26730;
})();
var statearr_26731_26841 = state_26720__$1;
(statearr_26731_26841[(2)] = null);

(statearr_26731_26841[(1)] = (2));


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
});})(c__20519__auto___26835,jobs,results,process,async))
;
return ((function (switch__20498__auto__,c__20519__auto___26835,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____0 = (function (){
var statearr_26735 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26735[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__);

(statearr_26735[(1)] = (1));

return statearr_26735;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____1 = (function (state_26720){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_26720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e26736){if((e26736 instanceof Object)){
var ex__20502__auto__ = e26736;
var statearr_26737_26842 = state_26720;
(statearr_26737_26842[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26843 = state_26720;
state_26720 = G__26843;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__ = function(state_26720){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____1.call(this,state_26720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto___26835,jobs,results,process,async))
})();
var state__20521__auto__ = (function (){var statearr_26738 = f__20520__auto__.call(null);
(statearr_26738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto___26835);

return statearr_26738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto___26835,jobs,results,process,async))
);


var c__20519__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto__,jobs,results,process,async){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto__,jobs,results,process,async){
return (function (state_26776){
var state_val_26777 = (state_26776[(1)]);
if((state_val_26777 === (7))){
var inst_26772 = (state_26776[(2)]);
var state_26776__$1 = state_26776;
var statearr_26778_26844 = state_26776__$1;
(statearr_26778_26844[(2)] = inst_26772);

(statearr_26778_26844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (20))){
var state_26776__$1 = state_26776;
var statearr_26779_26845 = state_26776__$1;
(statearr_26779_26845[(2)] = null);

(statearr_26779_26845[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (1))){
var state_26776__$1 = state_26776;
var statearr_26780_26846 = state_26776__$1;
(statearr_26780_26846[(2)] = null);

(statearr_26780_26846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (4))){
var inst_26741 = (state_26776[(7)]);
var inst_26741__$1 = (state_26776[(2)]);
var inst_26742 = (inst_26741__$1 == null);
var state_26776__$1 = (function (){var statearr_26781 = state_26776;
(statearr_26781[(7)] = inst_26741__$1);

return statearr_26781;
})();
if(cljs.core.truth_(inst_26742)){
var statearr_26782_26847 = state_26776__$1;
(statearr_26782_26847[(1)] = (5));

} else {
var statearr_26783_26848 = state_26776__$1;
(statearr_26783_26848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (15))){
var inst_26754 = (state_26776[(8)]);
var state_26776__$1 = state_26776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26776__$1,(18),to,inst_26754);
} else {
if((state_val_26777 === (21))){
var inst_26767 = (state_26776[(2)]);
var state_26776__$1 = state_26776;
var statearr_26784_26849 = state_26776__$1;
(statearr_26784_26849[(2)] = inst_26767);

(statearr_26784_26849[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (13))){
var inst_26769 = (state_26776[(2)]);
var state_26776__$1 = (function (){var statearr_26785 = state_26776;
(statearr_26785[(9)] = inst_26769);

return statearr_26785;
})();
var statearr_26786_26850 = state_26776__$1;
(statearr_26786_26850[(2)] = null);

(statearr_26786_26850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (6))){
var inst_26741 = (state_26776[(7)]);
var state_26776__$1 = state_26776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26776__$1,(11),inst_26741);
} else {
if((state_val_26777 === (17))){
var inst_26762 = (state_26776[(2)]);
var state_26776__$1 = state_26776;
if(cljs.core.truth_(inst_26762)){
var statearr_26787_26851 = state_26776__$1;
(statearr_26787_26851[(1)] = (19));

} else {
var statearr_26788_26852 = state_26776__$1;
(statearr_26788_26852[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (3))){
var inst_26774 = (state_26776[(2)]);
var state_26776__$1 = state_26776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26776__$1,inst_26774);
} else {
if((state_val_26777 === (12))){
var inst_26751 = (state_26776[(10)]);
var state_26776__$1 = state_26776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26776__$1,(14),inst_26751);
} else {
if((state_val_26777 === (2))){
var state_26776__$1 = state_26776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26776__$1,(4),results);
} else {
if((state_val_26777 === (19))){
var state_26776__$1 = state_26776;
var statearr_26789_26853 = state_26776__$1;
(statearr_26789_26853[(2)] = null);

(statearr_26789_26853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (11))){
var inst_26751 = (state_26776[(2)]);
var state_26776__$1 = (function (){var statearr_26790 = state_26776;
(statearr_26790[(10)] = inst_26751);

return statearr_26790;
})();
var statearr_26791_26854 = state_26776__$1;
(statearr_26791_26854[(2)] = null);

(statearr_26791_26854[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (9))){
var state_26776__$1 = state_26776;
var statearr_26792_26855 = state_26776__$1;
(statearr_26792_26855[(2)] = null);

(statearr_26792_26855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (5))){
var state_26776__$1 = state_26776;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26793_26856 = state_26776__$1;
(statearr_26793_26856[(1)] = (8));

} else {
var statearr_26794_26857 = state_26776__$1;
(statearr_26794_26857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (14))){
var inst_26754 = (state_26776[(8)]);
var inst_26756 = (state_26776[(11)]);
var inst_26754__$1 = (state_26776[(2)]);
var inst_26755 = (inst_26754__$1 == null);
var inst_26756__$1 = cljs.core.not.call(null,inst_26755);
var state_26776__$1 = (function (){var statearr_26795 = state_26776;
(statearr_26795[(8)] = inst_26754__$1);

(statearr_26795[(11)] = inst_26756__$1);

return statearr_26795;
})();
if(inst_26756__$1){
var statearr_26796_26858 = state_26776__$1;
(statearr_26796_26858[(1)] = (15));

} else {
var statearr_26797_26859 = state_26776__$1;
(statearr_26797_26859[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (16))){
var inst_26756 = (state_26776[(11)]);
var state_26776__$1 = state_26776;
var statearr_26798_26860 = state_26776__$1;
(statearr_26798_26860[(2)] = inst_26756);

(statearr_26798_26860[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (10))){
var inst_26748 = (state_26776[(2)]);
var state_26776__$1 = state_26776;
var statearr_26799_26861 = state_26776__$1;
(statearr_26799_26861[(2)] = inst_26748);

(statearr_26799_26861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (18))){
var inst_26759 = (state_26776[(2)]);
var state_26776__$1 = state_26776;
var statearr_26800_26862 = state_26776__$1;
(statearr_26800_26862[(2)] = inst_26759);

(statearr_26800_26862[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (8))){
var inst_26745 = cljs.core.async.close_BANG_.call(null,to);
var state_26776__$1 = state_26776;
var statearr_26801_26863 = state_26776__$1;
(statearr_26801_26863[(2)] = inst_26745);

(statearr_26801_26863[(1)] = (10));


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
});})(c__20519__auto__,jobs,results,process,async))
;
return ((function (switch__20498__auto__,c__20519__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____0 = (function (){
var statearr_26805 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26805[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__);

(statearr_26805[(1)] = (1));

return statearr_26805;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____1 = (function (state_26776){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_26776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e26806){if((e26806 instanceof Object)){
var ex__20502__auto__ = e26806;
var statearr_26807_26864 = state_26776;
(statearr_26807_26864[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26865 = state_26776;
state_26776 = G__26865;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__ = function(state_26776){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____1.call(this,state_26776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20499__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto__,jobs,results,process,async))
})();
var state__20521__auto__ = (function (){var statearr_26808 = f__20520__auto__.call(null);
(statearr_26808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto__);

return statearr_26808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto__,jobs,results,process,async))
);

return c__20519__auto__;
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
var args26866 = [];
var len__19539__auto___26869 = arguments.length;
var i__19540__auto___26870 = (0);
while(true){
if((i__19540__auto___26870 < len__19539__auto___26869)){
args26866.push((arguments[i__19540__auto___26870]));

var G__26871 = (i__19540__auto___26870 + (1));
i__19540__auto___26870 = G__26871;
continue;
} else {
}
break;
}

var G__26868 = args26866.length;
switch (G__26868) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26866.length)].join('')));

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
var args26873 = [];
var len__19539__auto___26876 = arguments.length;
var i__19540__auto___26877 = (0);
while(true){
if((i__19540__auto___26877 < len__19539__auto___26876)){
args26873.push((arguments[i__19540__auto___26877]));

var G__26878 = (i__19540__auto___26877 + (1));
i__19540__auto___26877 = G__26878;
continue;
} else {
}
break;
}

var G__26875 = args26873.length;
switch (G__26875) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26873.length)].join('')));

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
var args26880 = [];
var len__19539__auto___26933 = arguments.length;
var i__19540__auto___26934 = (0);
while(true){
if((i__19540__auto___26934 < len__19539__auto___26933)){
args26880.push((arguments[i__19540__auto___26934]));

var G__26935 = (i__19540__auto___26934 + (1));
i__19540__auto___26934 = G__26935;
continue;
} else {
}
break;
}

var G__26882 = args26880.length;
switch (G__26882) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26880.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20519__auto___26937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto___26937,tc,fc){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto___26937,tc,fc){
return (function (state_26908){
var state_val_26909 = (state_26908[(1)]);
if((state_val_26909 === (7))){
var inst_26904 = (state_26908[(2)]);
var state_26908__$1 = state_26908;
var statearr_26910_26938 = state_26908__$1;
(statearr_26910_26938[(2)] = inst_26904);

(statearr_26910_26938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (1))){
var state_26908__$1 = state_26908;
var statearr_26911_26939 = state_26908__$1;
(statearr_26911_26939[(2)] = null);

(statearr_26911_26939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (4))){
var inst_26885 = (state_26908[(7)]);
var inst_26885__$1 = (state_26908[(2)]);
var inst_26886 = (inst_26885__$1 == null);
var state_26908__$1 = (function (){var statearr_26912 = state_26908;
(statearr_26912[(7)] = inst_26885__$1);

return statearr_26912;
})();
if(cljs.core.truth_(inst_26886)){
var statearr_26913_26940 = state_26908__$1;
(statearr_26913_26940[(1)] = (5));

} else {
var statearr_26914_26941 = state_26908__$1;
(statearr_26914_26941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (13))){
var state_26908__$1 = state_26908;
var statearr_26915_26942 = state_26908__$1;
(statearr_26915_26942[(2)] = null);

(statearr_26915_26942[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (6))){
var inst_26885 = (state_26908[(7)]);
var inst_26891 = p.call(null,inst_26885);
var state_26908__$1 = state_26908;
if(cljs.core.truth_(inst_26891)){
var statearr_26916_26943 = state_26908__$1;
(statearr_26916_26943[(1)] = (9));

} else {
var statearr_26917_26944 = state_26908__$1;
(statearr_26917_26944[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (3))){
var inst_26906 = (state_26908[(2)]);
var state_26908__$1 = state_26908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26908__$1,inst_26906);
} else {
if((state_val_26909 === (12))){
var state_26908__$1 = state_26908;
var statearr_26918_26945 = state_26908__$1;
(statearr_26918_26945[(2)] = null);

(statearr_26918_26945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (2))){
var state_26908__$1 = state_26908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26908__$1,(4),ch);
} else {
if((state_val_26909 === (11))){
var inst_26885 = (state_26908[(7)]);
var inst_26895 = (state_26908[(2)]);
var state_26908__$1 = state_26908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26908__$1,(8),inst_26895,inst_26885);
} else {
if((state_val_26909 === (9))){
var state_26908__$1 = state_26908;
var statearr_26919_26946 = state_26908__$1;
(statearr_26919_26946[(2)] = tc);

(statearr_26919_26946[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (5))){
var inst_26888 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26889 = cljs.core.async.close_BANG_.call(null,fc);
var state_26908__$1 = (function (){var statearr_26920 = state_26908;
(statearr_26920[(8)] = inst_26888);

return statearr_26920;
})();
var statearr_26921_26947 = state_26908__$1;
(statearr_26921_26947[(2)] = inst_26889);

(statearr_26921_26947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (14))){
var inst_26902 = (state_26908[(2)]);
var state_26908__$1 = state_26908;
var statearr_26922_26948 = state_26908__$1;
(statearr_26922_26948[(2)] = inst_26902);

(statearr_26922_26948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (10))){
var state_26908__$1 = state_26908;
var statearr_26923_26949 = state_26908__$1;
(statearr_26923_26949[(2)] = fc);

(statearr_26923_26949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (8))){
var inst_26897 = (state_26908[(2)]);
var state_26908__$1 = state_26908;
if(cljs.core.truth_(inst_26897)){
var statearr_26924_26950 = state_26908__$1;
(statearr_26924_26950[(1)] = (12));

} else {
var statearr_26925_26951 = state_26908__$1;
(statearr_26925_26951[(1)] = (13));

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
});})(c__20519__auto___26937,tc,fc))
;
return ((function (switch__20498__auto__,c__20519__auto___26937,tc,fc){
return (function() {
var cljs$core$async$state_machine__20499__auto__ = null;
var cljs$core$async$state_machine__20499__auto____0 = (function (){
var statearr_26929 = [null,null,null,null,null,null,null,null,null];
(statearr_26929[(0)] = cljs$core$async$state_machine__20499__auto__);

(statearr_26929[(1)] = (1));

return statearr_26929;
});
var cljs$core$async$state_machine__20499__auto____1 = (function (state_26908){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_26908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e26930){if((e26930 instanceof Object)){
var ex__20502__auto__ = e26930;
var statearr_26931_26952 = state_26908;
(statearr_26931_26952[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26953 = state_26908;
state_26908 = G__26953;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
cljs$core$async$state_machine__20499__auto__ = function(state_26908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20499__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20499__auto____1.call(this,state_26908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20499__auto____0;
cljs$core$async$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20499__auto____1;
return cljs$core$async$state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto___26937,tc,fc))
})();
var state__20521__auto__ = (function (){var statearr_26932 = f__20520__auto__.call(null);
(statearr_26932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto___26937);

return statearr_26932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto___26937,tc,fc))
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
var c__20519__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto__){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto__){
return (function (state_27017){
var state_val_27018 = (state_27017[(1)]);
if((state_val_27018 === (7))){
var inst_27013 = (state_27017[(2)]);
var state_27017__$1 = state_27017;
var statearr_27019_27040 = state_27017__$1;
(statearr_27019_27040[(2)] = inst_27013);

(statearr_27019_27040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27018 === (1))){
var inst_26997 = init;
var state_27017__$1 = (function (){var statearr_27020 = state_27017;
(statearr_27020[(7)] = inst_26997);

return statearr_27020;
})();
var statearr_27021_27041 = state_27017__$1;
(statearr_27021_27041[(2)] = null);

(statearr_27021_27041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27018 === (4))){
var inst_27000 = (state_27017[(8)]);
var inst_27000__$1 = (state_27017[(2)]);
var inst_27001 = (inst_27000__$1 == null);
var state_27017__$1 = (function (){var statearr_27022 = state_27017;
(statearr_27022[(8)] = inst_27000__$1);

return statearr_27022;
})();
if(cljs.core.truth_(inst_27001)){
var statearr_27023_27042 = state_27017__$1;
(statearr_27023_27042[(1)] = (5));

} else {
var statearr_27024_27043 = state_27017__$1;
(statearr_27024_27043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27018 === (6))){
var inst_26997 = (state_27017[(7)]);
var inst_27004 = (state_27017[(9)]);
var inst_27000 = (state_27017[(8)]);
var inst_27004__$1 = f.call(null,inst_26997,inst_27000);
var inst_27005 = cljs.core.reduced_QMARK_.call(null,inst_27004__$1);
var state_27017__$1 = (function (){var statearr_27025 = state_27017;
(statearr_27025[(9)] = inst_27004__$1);

return statearr_27025;
})();
if(inst_27005){
var statearr_27026_27044 = state_27017__$1;
(statearr_27026_27044[(1)] = (8));

} else {
var statearr_27027_27045 = state_27017__$1;
(statearr_27027_27045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27018 === (3))){
var inst_27015 = (state_27017[(2)]);
var state_27017__$1 = state_27017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27017__$1,inst_27015);
} else {
if((state_val_27018 === (2))){
var state_27017__$1 = state_27017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27017__$1,(4),ch);
} else {
if((state_val_27018 === (9))){
var inst_27004 = (state_27017[(9)]);
var inst_26997 = inst_27004;
var state_27017__$1 = (function (){var statearr_27028 = state_27017;
(statearr_27028[(7)] = inst_26997);

return statearr_27028;
})();
var statearr_27029_27046 = state_27017__$1;
(statearr_27029_27046[(2)] = null);

(statearr_27029_27046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27018 === (5))){
var inst_26997 = (state_27017[(7)]);
var state_27017__$1 = state_27017;
var statearr_27030_27047 = state_27017__$1;
(statearr_27030_27047[(2)] = inst_26997);

(statearr_27030_27047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27018 === (10))){
var inst_27011 = (state_27017[(2)]);
var state_27017__$1 = state_27017;
var statearr_27031_27048 = state_27017__$1;
(statearr_27031_27048[(2)] = inst_27011);

(statearr_27031_27048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27018 === (8))){
var inst_27004 = (state_27017[(9)]);
var inst_27007 = cljs.core.deref.call(null,inst_27004);
var state_27017__$1 = state_27017;
var statearr_27032_27049 = state_27017__$1;
(statearr_27032_27049[(2)] = inst_27007);

(statearr_27032_27049[(1)] = (10));


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
});})(c__20519__auto__))
;
return ((function (switch__20498__auto__,c__20519__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20499__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20499__auto____0 = (function (){
var statearr_27036 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27036[(0)] = cljs$core$async$reduce_$_state_machine__20499__auto__);

(statearr_27036[(1)] = (1));

return statearr_27036;
});
var cljs$core$async$reduce_$_state_machine__20499__auto____1 = (function (state_27017){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_27017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e27037){if((e27037 instanceof Object)){
var ex__20502__auto__ = e27037;
var statearr_27038_27050 = state_27017;
(statearr_27038_27050[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27051 = state_27017;
state_27017 = G__27051;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20499__auto__ = function(state_27017){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20499__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20499__auto____1.call(this,state_27017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20499__auto____0;
cljs$core$async$reduce_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20499__auto____1;
return cljs$core$async$reduce_$_state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto__))
})();
var state__20521__auto__ = (function (){var statearr_27039 = f__20520__auto__.call(null);
(statearr_27039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto__);

return statearr_27039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto__))
);

return c__20519__auto__;
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
var args27052 = [];
var len__19539__auto___27104 = arguments.length;
var i__19540__auto___27105 = (0);
while(true){
if((i__19540__auto___27105 < len__19539__auto___27104)){
args27052.push((arguments[i__19540__auto___27105]));

var G__27106 = (i__19540__auto___27105 + (1));
i__19540__auto___27105 = G__27106;
continue;
} else {
}
break;
}

var G__27054 = args27052.length;
switch (G__27054) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27052.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20519__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto__){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto__){
return (function (state_27079){
var state_val_27080 = (state_27079[(1)]);
if((state_val_27080 === (7))){
var inst_27061 = (state_27079[(2)]);
var state_27079__$1 = state_27079;
var statearr_27081_27108 = state_27079__$1;
(statearr_27081_27108[(2)] = inst_27061);

(statearr_27081_27108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (1))){
var inst_27055 = cljs.core.seq.call(null,coll);
var inst_27056 = inst_27055;
var state_27079__$1 = (function (){var statearr_27082 = state_27079;
(statearr_27082[(7)] = inst_27056);

return statearr_27082;
})();
var statearr_27083_27109 = state_27079__$1;
(statearr_27083_27109[(2)] = null);

(statearr_27083_27109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (4))){
var inst_27056 = (state_27079[(7)]);
var inst_27059 = cljs.core.first.call(null,inst_27056);
var state_27079__$1 = state_27079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27079__$1,(7),ch,inst_27059);
} else {
if((state_val_27080 === (13))){
var inst_27073 = (state_27079[(2)]);
var state_27079__$1 = state_27079;
var statearr_27084_27110 = state_27079__$1;
(statearr_27084_27110[(2)] = inst_27073);

(statearr_27084_27110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (6))){
var inst_27064 = (state_27079[(2)]);
var state_27079__$1 = state_27079;
if(cljs.core.truth_(inst_27064)){
var statearr_27085_27111 = state_27079__$1;
(statearr_27085_27111[(1)] = (8));

} else {
var statearr_27086_27112 = state_27079__$1;
(statearr_27086_27112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (3))){
var inst_27077 = (state_27079[(2)]);
var state_27079__$1 = state_27079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27079__$1,inst_27077);
} else {
if((state_val_27080 === (12))){
var state_27079__$1 = state_27079;
var statearr_27087_27113 = state_27079__$1;
(statearr_27087_27113[(2)] = null);

(statearr_27087_27113[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (2))){
var inst_27056 = (state_27079[(7)]);
var state_27079__$1 = state_27079;
if(cljs.core.truth_(inst_27056)){
var statearr_27088_27114 = state_27079__$1;
(statearr_27088_27114[(1)] = (4));

} else {
var statearr_27089_27115 = state_27079__$1;
(statearr_27089_27115[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (11))){
var inst_27070 = cljs.core.async.close_BANG_.call(null,ch);
var state_27079__$1 = state_27079;
var statearr_27090_27116 = state_27079__$1;
(statearr_27090_27116[(2)] = inst_27070);

(statearr_27090_27116[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (9))){
var state_27079__$1 = state_27079;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27091_27117 = state_27079__$1;
(statearr_27091_27117[(1)] = (11));

} else {
var statearr_27092_27118 = state_27079__$1;
(statearr_27092_27118[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (5))){
var inst_27056 = (state_27079[(7)]);
var state_27079__$1 = state_27079;
var statearr_27093_27119 = state_27079__$1;
(statearr_27093_27119[(2)] = inst_27056);

(statearr_27093_27119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (10))){
var inst_27075 = (state_27079[(2)]);
var state_27079__$1 = state_27079;
var statearr_27094_27120 = state_27079__$1;
(statearr_27094_27120[(2)] = inst_27075);

(statearr_27094_27120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (8))){
var inst_27056 = (state_27079[(7)]);
var inst_27066 = cljs.core.next.call(null,inst_27056);
var inst_27056__$1 = inst_27066;
var state_27079__$1 = (function (){var statearr_27095 = state_27079;
(statearr_27095[(7)] = inst_27056__$1);

return statearr_27095;
})();
var statearr_27096_27121 = state_27079__$1;
(statearr_27096_27121[(2)] = null);

(statearr_27096_27121[(1)] = (2));


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
});})(c__20519__auto__))
;
return ((function (switch__20498__auto__,c__20519__auto__){
return (function() {
var cljs$core$async$state_machine__20499__auto__ = null;
var cljs$core$async$state_machine__20499__auto____0 = (function (){
var statearr_27100 = [null,null,null,null,null,null,null,null];
(statearr_27100[(0)] = cljs$core$async$state_machine__20499__auto__);

(statearr_27100[(1)] = (1));

return statearr_27100;
});
var cljs$core$async$state_machine__20499__auto____1 = (function (state_27079){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_27079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e27101){if((e27101 instanceof Object)){
var ex__20502__auto__ = e27101;
var statearr_27102_27122 = state_27079;
(statearr_27102_27122[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27123 = state_27079;
state_27079 = G__27123;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
cljs$core$async$state_machine__20499__auto__ = function(state_27079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20499__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20499__auto____1.call(this,state_27079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20499__auto____0;
cljs$core$async$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20499__auto____1;
return cljs$core$async$state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto__))
})();
var state__20521__auto__ = (function (){var statearr_27103 = f__20520__auto__.call(null);
(statearr_27103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto__);

return statearr_27103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto__))
);

return c__20519__auto__;
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
var x__19127__auto__ = (((_ == null))?null:_);
var m__19128__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19127__auto__)]);
if(!((m__19128__auto__ == null))){
return m__19128__auto__.call(null,_);
} else {
var m__19128__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19128__auto____$1 == null))){
return m__19128__auto____$1.call(null,_);
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
var x__19127__auto__ = (((m == null))?null:m);
var m__19128__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19127__auto__)]);
if(!((m__19128__auto__ == null))){
return m__19128__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19128__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19128__auto____$1 == null))){
return m__19128__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__19127__auto__ = (((m == null))?null:m);
var m__19128__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19127__auto__)]);
if(!((m__19128__auto__ == null))){
return m__19128__auto__.call(null,m,ch);
} else {
var m__19128__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19128__auto____$1 == null))){
return m__19128__auto____$1.call(null,m,ch);
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
var x__19127__auto__ = (((m == null))?null:m);
var m__19128__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19127__auto__)]);
if(!((m__19128__auto__ == null))){
return m__19128__auto__.call(null,m);
} else {
var m__19128__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19128__auto____$1 == null))){
return m__19128__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async27349 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27349 = (function (mult,ch,cs,meta27350){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27350 = meta27350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27351,meta27350__$1){
var self__ = this;
var _27351__$1 = this;
return (new cljs.core.async.t_cljs$core$async27349(self__.mult,self__.ch,self__.cs,meta27350__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27351){
var self__ = this;
var _27351__$1 = this;
return self__.meta27350;
});})(cs))
;

cljs.core.async.t_cljs$core$async27349.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27349.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27349.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async27349.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27349.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27349.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27349.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27350","meta27350",-241267608,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27349.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27349";

cljs.core.async.t_cljs$core$async27349.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19070__auto__,writer__19071__auto__,opt__19072__auto__){
return cljs.core._write.call(null,writer__19071__auto__,"cljs.core.async/t_cljs$core$async27349");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27349 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27349(mult__$1,ch__$1,cs__$1,meta27350){
return (new cljs.core.async.t_cljs$core$async27349(mult__$1,ch__$1,cs__$1,meta27350));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27349(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20519__auto___27574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto___27574,cs,m,dchan,dctr,done){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto___27574,cs,m,dchan,dctr,done){
return (function (state_27486){
var state_val_27487 = (state_27486[(1)]);
if((state_val_27487 === (7))){
var inst_27482 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
var statearr_27488_27575 = state_27486__$1;
(statearr_27488_27575[(2)] = inst_27482);

(statearr_27488_27575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (20))){
var inst_27385 = (state_27486[(7)]);
var inst_27397 = cljs.core.first.call(null,inst_27385);
var inst_27398 = cljs.core.nth.call(null,inst_27397,(0),null);
var inst_27399 = cljs.core.nth.call(null,inst_27397,(1),null);
var state_27486__$1 = (function (){var statearr_27489 = state_27486;
(statearr_27489[(8)] = inst_27398);

return statearr_27489;
})();
if(cljs.core.truth_(inst_27399)){
var statearr_27490_27576 = state_27486__$1;
(statearr_27490_27576[(1)] = (22));

} else {
var statearr_27491_27577 = state_27486__$1;
(statearr_27491_27577[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (27))){
var inst_27427 = (state_27486[(9)]);
var inst_27434 = (state_27486[(10)]);
var inst_27429 = (state_27486[(11)]);
var inst_27354 = (state_27486[(12)]);
var inst_27434__$1 = cljs.core._nth.call(null,inst_27427,inst_27429);
var inst_27435 = cljs.core.async.put_BANG_.call(null,inst_27434__$1,inst_27354,done);
var state_27486__$1 = (function (){var statearr_27492 = state_27486;
(statearr_27492[(10)] = inst_27434__$1);

return statearr_27492;
})();
if(cljs.core.truth_(inst_27435)){
var statearr_27493_27578 = state_27486__$1;
(statearr_27493_27578[(1)] = (30));

} else {
var statearr_27494_27579 = state_27486__$1;
(statearr_27494_27579[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (1))){
var state_27486__$1 = state_27486;
var statearr_27495_27580 = state_27486__$1;
(statearr_27495_27580[(2)] = null);

(statearr_27495_27580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (24))){
var inst_27385 = (state_27486[(7)]);
var inst_27404 = (state_27486[(2)]);
var inst_27405 = cljs.core.next.call(null,inst_27385);
var inst_27363 = inst_27405;
var inst_27364 = null;
var inst_27365 = (0);
var inst_27366 = (0);
var state_27486__$1 = (function (){var statearr_27496 = state_27486;
(statearr_27496[(13)] = inst_27365);

(statearr_27496[(14)] = inst_27404);

(statearr_27496[(15)] = inst_27363);

(statearr_27496[(16)] = inst_27364);

(statearr_27496[(17)] = inst_27366);

return statearr_27496;
})();
var statearr_27497_27581 = state_27486__$1;
(statearr_27497_27581[(2)] = null);

(statearr_27497_27581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (39))){
var state_27486__$1 = state_27486;
var statearr_27501_27582 = state_27486__$1;
(statearr_27501_27582[(2)] = null);

(statearr_27501_27582[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (4))){
var inst_27354 = (state_27486[(12)]);
var inst_27354__$1 = (state_27486[(2)]);
var inst_27355 = (inst_27354__$1 == null);
var state_27486__$1 = (function (){var statearr_27502 = state_27486;
(statearr_27502[(12)] = inst_27354__$1);

return statearr_27502;
})();
if(cljs.core.truth_(inst_27355)){
var statearr_27503_27583 = state_27486__$1;
(statearr_27503_27583[(1)] = (5));

} else {
var statearr_27504_27584 = state_27486__$1;
(statearr_27504_27584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (15))){
var inst_27365 = (state_27486[(13)]);
var inst_27363 = (state_27486[(15)]);
var inst_27364 = (state_27486[(16)]);
var inst_27366 = (state_27486[(17)]);
var inst_27381 = (state_27486[(2)]);
var inst_27382 = (inst_27366 + (1));
var tmp27498 = inst_27365;
var tmp27499 = inst_27363;
var tmp27500 = inst_27364;
var inst_27363__$1 = tmp27499;
var inst_27364__$1 = tmp27500;
var inst_27365__$1 = tmp27498;
var inst_27366__$1 = inst_27382;
var state_27486__$1 = (function (){var statearr_27505 = state_27486;
(statearr_27505[(18)] = inst_27381);

(statearr_27505[(13)] = inst_27365__$1);

(statearr_27505[(15)] = inst_27363__$1);

(statearr_27505[(16)] = inst_27364__$1);

(statearr_27505[(17)] = inst_27366__$1);

return statearr_27505;
})();
var statearr_27506_27585 = state_27486__$1;
(statearr_27506_27585[(2)] = null);

(statearr_27506_27585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (21))){
var inst_27408 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
var statearr_27510_27586 = state_27486__$1;
(statearr_27510_27586[(2)] = inst_27408);

(statearr_27510_27586[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (31))){
var inst_27434 = (state_27486[(10)]);
var inst_27438 = done.call(null,null);
var inst_27439 = cljs.core.async.untap_STAR_.call(null,m,inst_27434);
var state_27486__$1 = (function (){var statearr_27511 = state_27486;
(statearr_27511[(19)] = inst_27438);

return statearr_27511;
})();
var statearr_27512_27587 = state_27486__$1;
(statearr_27512_27587[(2)] = inst_27439);

(statearr_27512_27587[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (32))){
var inst_27428 = (state_27486[(20)]);
var inst_27427 = (state_27486[(9)]);
var inst_27426 = (state_27486[(21)]);
var inst_27429 = (state_27486[(11)]);
var inst_27441 = (state_27486[(2)]);
var inst_27442 = (inst_27429 + (1));
var tmp27507 = inst_27428;
var tmp27508 = inst_27427;
var tmp27509 = inst_27426;
var inst_27426__$1 = tmp27509;
var inst_27427__$1 = tmp27508;
var inst_27428__$1 = tmp27507;
var inst_27429__$1 = inst_27442;
var state_27486__$1 = (function (){var statearr_27513 = state_27486;
(statearr_27513[(20)] = inst_27428__$1);

(statearr_27513[(9)] = inst_27427__$1);

(statearr_27513[(21)] = inst_27426__$1);

(statearr_27513[(11)] = inst_27429__$1);

(statearr_27513[(22)] = inst_27441);

return statearr_27513;
})();
var statearr_27514_27588 = state_27486__$1;
(statearr_27514_27588[(2)] = null);

(statearr_27514_27588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (40))){
var inst_27454 = (state_27486[(23)]);
var inst_27458 = done.call(null,null);
var inst_27459 = cljs.core.async.untap_STAR_.call(null,m,inst_27454);
var state_27486__$1 = (function (){var statearr_27515 = state_27486;
(statearr_27515[(24)] = inst_27458);

return statearr_27515;
})();
var statearr_27516_27589 = state_27486__$1;
(statearr_27516_27589[(2)] = inst_27459);

(statearr_27516_27589[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (33))){
var inst_27445 = (state_27486[(25)]);
var inst_27447 = cljs.core.chunked_seq_QMARK_.call(null,inst_27445);
var state_27486__$1 = state_27486;
if(inst_27447){
var statearr_27517_27590 = state_27486__$1;
(statearr_27517_27590[(1)] = (36));

} else {
var statearr_27518_27591 = state_27486__$1;
(statearr_27518_27591[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (13))){
var inst_27375 = (state_27486[(26)]);
var inst_27378 = cljs.core.async.close_BANG_.call(null,inst_27375);
var state_27486__$1 = state_27486;
var statearr_27519_27592 = state_27486__$1;
(statearr_27519_27592[(2)] = inst_27378);

(statearr_27519_27592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (22))){
var inst_27398 = (state_27486[(8)]);
var inst_27401 = cljs.core.async.close_BANG_.call(null,inst_27398);
var state_27486__$1 = state_27486;
var statearr_27520_27593 = state_27486__$1;
(statearr_27520_27593[(2)] = inst_27401);

(statearr_27520_27593[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (36))){
var inst_27445 = (state_27486[(25)]);
var inst_27449 = cljs.core.chunk_first.call(null,inst_27445);
var inst_27450 = cljs.core.chunk_rest.call(null,inst_27445);
var inst_27451 = cljs.core.count.call(null,inst_27449);
var inst_27426 = inst_27450;
var inst_27427 = inst_27449;
var inst_27428 = inst_27451;
var inst_27429 = (0);
var state_27486__$1 = (function (){var statearr_27521 = state_27486;
(statearr_27521[(20)] = inst_27428);

(statearr_27521[(9)] = inst_27427);

(statearr_27521[(21)] = inst_27426);

(statearr_27521[(11)] = inst_27429);

return statearr_27521;
})();
var statearr_27522_27594 = state_27486__$1;
(statearr_27522_27594[(2)] = null);

(statearr_27522_27594[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (41))){
var inst_27445 = (state_27486[(25)]);
var inst_27461 = (state_27486[(2)]);
var inst_27462 = cljs.core.next.call(null,inst_27445);
var inst_27426 = inst_27462;
var inst_27427 = null;
var inst_27428 = (0);
var inst_27429 = (0);
var state_27486__$1 = (function (){var statearr_27523 = state_27486;
(statearr_27523[(20)] = inst_27428);

(statearr_27523[(9)] = inst_27427);

(statearr_27523[(21)] = inst_27426);

(statearr_27523[(11)] = inst_27429);

(statearr_27523[(27)] = inst_27461);

return statearr_27523;
})();
var statearr_27524_27595 = state_27486__$1;
(statearr_27524_27595[(2)] = null);

(statearr_27524_27595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (43))){
var state_27486__$1 = state_27486;
var statearr_27525_27596 = state_27486__$1;
(statearr_27525_27596[(2)] = null);

(statearr_27525_27596[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (29))){
var inst_27470 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
var statearr_27526_27597 = state_27486__$1;
(statearr_27526_27597[(2)] = inst_27470);

(statearr_27526_27597[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (44))){
var inst_27479 = (state_27486[(2)]);
var state_27486__$1 = (function (){var statearr_27527 = state_27486;
(statearr_27527[(28)] = inst_27479);

return statearr_27527;
})();
var statearr_27528_27598 = state_27486__$1;
(statearr_27528_27598[(2)] = null);

(statearr_27528_27598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (6))){
var inst_27418 = (state_27486[(29)]);
var inst_27417 = cljs.core.deref.call(null,cs);
var inst_27418__$1 = cljs.core.keys.call(null,inst_27417);
var inst_27419 = cljs.core.count.call(null,inst_27418__$1);
var inst_27420 = cljs.core.reset_BANG_.call(null,dctr,inst_27419);
var inst_27425 = cljs.core.seq.call(null,inst_27418__$1);
var inst_27426 = inst_27425;
var inst_27427 = null;
var inst_27428 = (0);
var inst_27429 = (0);
var state_27486__$1 = (function (){var statearr_27529 = state_27486;
(statearr_27529[(20)] = inst_27428);

(statearr_27529[(9)] = inst_27427);

(statearr_27529[(30)] = inst_27420);

(statearr_27529[(21)] = inst_27426);

(statearr_27529[(29)] = inst_27418__$1);

(statearr_27529[(11)] = inst_27429);

return statearr_27529;
})();
var statearr_27530_27599 = state_27486__$1;
(statearr_27530_27599[(2)] = null);

(statearr_27530_27599[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (28))){
var inst_27426 = (state_27486[(21)]);
var inst_27445 = (state_27486[(25)]);
var inst_27445__$1 = cljs.core.seq.call(null,inst_27426);
var state_27486__$1 = (function (){var statearr_27531 = state_27486;
(statearr_27531[(25)] = inst_27445__$1);

return statearr_27531;
})();
if(inst_27445__$1){
var statearr_27532_27600 = state_27486__$1;
(statearr_27532_27600[(1)] = (33));

} else {
var statearr_27533_27601 = state_27486__$1;
(statearr_27533_27601[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (25))){
var inst_27428 = (state_27486[(20)]);
var inst_27429 = (state_27486[(11)]);
var inst_27431 = (inst_27429 < inst_27428);
var inst_27432 = inst_27431;
var state_27486__$1 = state_27486;
if(cljs.core.truth_(inst_27432)){
var statearr_27534_27602 = state_27486__$1;
(statearr_27534_27602[(1)] = (27));

} else {
var statearr_27535_27603 = state_27486__$1;
(statearr_27535_27603[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (34))){
var state_27486__$1 = state_27486;
var statearr_27536_27604 = state_27486__$1;
(statearr_27536_27604[(2)] = null);

(statearr_27536_27604[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (17))){
var state_27486__$1 = state_27486;
var statearr_27537_27605 = state_27486__$1;
(statearr_27537_27605[(2)] = null);

(statearr_27537_27605[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (3))){
var inst_27484 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27486__$1,inst_27484);
} else {
if((state_val_27487 === (12))){
var inst_27413 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
var statearr_27538_27606 = state_27486__$1;
(statearr_27538_27606[(2)] = inst_27413);

(statearr_27538_27606[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (2))){
var state_27486__$1 = state_27486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27486__$1,(4),ch);
} else {
if((state_val_27487 === (23))){
var state_27486__$1 = state_27486;
var statearr_27539_27607 = state_27486__$1;
(statearr_27539_27607[(2)] = null);

(statearr_27539_27607[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (35))){
var inst_27468 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
var statearr_27540_27608 = state_27486__$1;
(statearr_27540_27608[(2)] = inst_27468);

(statearr_27540_27608[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (19))){
var inst_27385 = (state_27486[(7)]);
var inst_27389 = cljs.core.chunk_first.call(null,inst_27385);
var inst_27390 = cljs.core.chunk_rest.call(null,inst_27385);
var inst_27391 = cljs.core.count.call(null,inst_27389);
var inst_27363 = inst_27390;
var inst_27364 = inst_27389;
var inst_27365 = inst_27391;
var inst_27366 = (0);
var state_27486__$1 = (function (){var statearr_27541 = state_27486;
(statearr_27541[(13)] = inst_27365);

(statearr_27541[(15)] = inst_27363);

(statearr_27541[(16)] = inst_27364);

(statearr_27541[(17)] = inst_27366);

return statearr_27541;
})();
var statearr_27542_27609 = state_27486__$1;
(statearr_27542_27609[(2)] = null);

(statearr_27542_27609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (11))){
var inst_27363 = (state_27486[(15)]);
var inst_27385 = (state_27486[(7)]);
var inst_27385__$1 = cljs.core.seq.call(null,inst_27363);
var state_27486__$1 = (function (){var statearr_27543 = state_27486;
(statearr_27543[(7)] = inst_27385__$1);

return statearr_27543;
})();
if(inst_27385__$1){
var statearr_27544_27610 = state_27486__$1;
(statearr_27544_27610[(1)] = (16));

} else {
var statearr_27545_27611 = state_27486__$1;
(statearr_27545_27611[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (9))){
var inst_27415 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
var statearr_27546_27612 = state_27486__$1;
(statearr_27546_27612[(2)] = inst_27415);

(statearr_27546_27612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (5))){
var inst_27361 = cljs.core.deref.call(null,cs);
var inst_27362 = cljs.core.seq.call(null,inst_27361);
var inst_27363 = inst_27362;
var inst_27364 = null;
var inst_27365 = (0);
var inst_27366 = (0);
var state_27486__$1 = (function (){var statearr_27547 = state_27486;
(statearr_27547[(13)] = inst_27365);

(statearr_27547[(15)] = inst_27363);

(statearr_27547[(16)] = inst_27364);

(statearr_27547[(17)] = inst_27366);

return statearr_27547;
})();
var statearr_27548_27613 = state_27486__$1;
(statearr_27548_27613[(2)] = null);

(statearr_27548_27613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (14))){
var state_27486__$1 = state_27486;
var statearr_27549_27614 = state_27486__$1;
(statearr_27549_27614[(2)] = null);

(statearr_27549_27614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (45))){
var inst_27476 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
var statearr_27550_27615 = state_27486__$1;
(statearr_27550_27615[(2)] = inst_27476);

(statearr_27550_27615[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (26))){
var inst_27418 = (state_27486[(29)]);
var inst_27472 = (state_27486[(2)]);
var inst_27473 = cljs.core.seq.call(null,inst_27418);
var state_27486__$1 = (function (){var statearr_27551 = state_27486;
(statearr_27551[(31)] = inst_27472);

return statearr_27551;
})();
if(inst_27473){
var statearr_27552_27616 = state_27486__$1;
(statearr_27552_27616[(1)] = (42));

} else {
var statearr_27553_27617 = state_27486__$1;
(statearr_27553_27617[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (16))){
var inst_27385 = (state_27486[(7)]);
var inst_27387 = cljs.core.chunked_seq_QMARK_.call(null,inst_27385);
var state_27486__$1 = state_27486;
if(inst_27387){
var statearr_27554_27618 = state_27486__$1;
(statearr_27554_27618[(1)] = (19));

} else {
var statearr_27555_27619 = state_27486__$1;
(statearr_27555_27619[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (38))){
var inst_27465 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
var statearr_27556_27620 = state_27486__$1;
(statearr_27556_27620[(2)] = inst_27465);

(statearr_27556_27620[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (30))){
var state_27486__$1 = state_27486;
var statearr_27557_27621 = state_27486__$1;
(statearr_27557_27621[(2)] = null);

(statearr_27557_27621[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (10))){
var inst_27364 = (state_27486[(16)]);
var inst_27366 = (state_27486[(17)]);
var inst_27374 = cljs.core._nth.call(null,inst_27364,inst_27366);
var inst_27375 = cljs.core.nth.call(null,inst_27374,(0),null);
var inst_27376 = cljs.core.nth.call(null,inst_27374,(1),null);
var state_27486__$1 = (function (){var statearr_27558 = state_27486;
(statearr_27558[(26)] = inst_27375);

return statearr_27558;
})();
if(cljs.core.truth_(inst_27376)){
var statearr_27559_27622 = state_27486__$1;
(statearr_27559_27622[(1)] = (13));

} else {
var statearr_27560_27623 = state_27486__$1;
(statearr_27560_27623[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (18))){
var inst_27411 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
var statearr_27561_27624 = state_27486__$1;
(statearr_27561_27624[(2)] = inst_27411);

(statearr_27561_27624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (42))){
var state_27486__$1 = state_27486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27486__$1,(45),dchan);
} else {
if((state_val_27487 === (37))){
var inst_27445 = (state_27486[(25)]);
var inst_27454 = (state_27486[(23)]);
var inst_27354 = (state_27486[(12)]);
var inst_27454__$1 = cljs.core.first.call(null,inst_27445);
var inst_27455 = cljs.core.async.put_BANG_.call(null,inst_27454__$1,inst_27354,done);
var state_27486__$1 = (function (){var statearr_27562 = state_27486;
(statearr_27562[(23)] = inst_27454__$1);

return statearr_27562;
})();
if(cljs.core.truth_(inst_27455)){
var statearr_27563_27625 = state_27486__$1;
(statearr_27563_27625[(1)] = (39));

} else {
var statearr_27564_27626 = state_27486__$1;
(statearr_27564_27626[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (8))){
var inst_27365 = (state_27486[(13)]);
var inst_27366 = (state_27486[(17)]);
var inst_27368 = (inst_27366 < inst_27365);
var inst_27369 = inst_27368;
var state_27486__$1 = state_27486;
if(cljs.core.truth_(inst_27369)){
var statearr_27565_27627 = state_27486__$1;
(statearr_27565_27627[(1)] = (10));

} else {
var statearr_27566_27628 = state_27486__$1;
(statearr_27566_27628[(1)] = (11));

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
});})(c__20519__auto___27574,cs,m,dchan,dctr,done))
;
return ((function (switch__20498__auto__,c__20519__auto___27574,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20499__auto__ = null;
var cljs$core$async$mult_$_state_machine__20499__auto____0 = (function (){
var statearr_27570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27570[(0)] = cljs$core$async$mult_$_state_machine__20499__auto__);

(statearr_27570[(1)] = (1));

return statearr_27570;
});
var cljs$core$async$mult_$_state_machine__20499__auto____1 = (function (state_27486){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_27486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e27571){if((e27571 instanceof Object)){
var ex__20502__auto__ = e27571;
var statearr_27572_27629 = state_27486;
(statearr_27572_27629[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27630 = state_27486;
state_27486 = G__27630;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20499__auto__ = function(state_27486){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20499__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20499__auto____1.call(this,state_27486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20499__auto____0;
cljs$core$async$mult_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20499__auto____1;
return cljs$core$async$mult_$_state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto___27574,cs,m,dchan,dctr,done))
})();
var state__20521__auto__ = (function (){var statearr_27573 = f__20520__auto__.call(null);
(statearr_27573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto___27574);

return statearr_27573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto___27574,cs,m,dchan,dctr,done))
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
var args27631 = [];
var len__19539__auto___27634 = arguments.length;
var i__19540__auto___27635 = (0);
while(true){
if((i__19540__auto___27635 < len__19539__auto___27634)){
args27631.push((arguments[i__19540__auto___27635]));

var G__27636 = (i__19540__auto___27635 + (1));
i__19540__auto___27635 = G__27636;
continue;
} else {
}
break;
}

var G__27633 = args27631.length;
switch (G__27633) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27631.length)].join('')));

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
var x__19127__auto__ = (((m == null))?null:m);
var m__19128__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19127__auto__)]);
if(!((m__19128__auto__ == null))){
return m__19128__auto__.call(null,m,ch);
} else {
var m__19128__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19128__auto____$1 == null))){
return m__19128__auto____$1.call(null,m,ch);
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
var x__19127__auto__ = (((m == null))?null:m);
var m__19128__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19127__auto__)]);
if(!((m__19128__auto__ == null))){
return m__19128__auto__.call(null,m,ch);
} else {
var m__19128__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19128__auto____$1 == null))){
return m__19128__auto____$1.call(null,m,ch);
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
var x__19127__auto__ = (((m == null))?null:m);
var m__19128__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19127__auto__)]);
if(!((m__19128__auto__ == null))){
return m__19128__auto__.call(null,m);
} else {
var m__19128__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19128__auto____$1 == null))){
return m__19128__auto____$1.call(null,m);
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
var x__19127__auto__ = (((m == null))?null:m);
var m__19128__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19127__auto__)]);
if(!((m__19128__auto__ == null))){
return m__19128__auto__.call(null,m,state_map);
} else {
var m__19128__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19128__auto____$1 == null))){
return m__19128__auto____$1.call(null,m,state_map);
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
var x__19127__auto__ = (((m == null))?null:m);
var m__19128__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19127__auto__)]);
if(!((m__19128__auto__ == null))){
return m__19128__auto__.call(null,m,mode);
} else {
var m__19128__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19128__auto____$1 == null))){
return m__19128__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19546__auto__ = [];
var len__19539__auto___27648 = arguments.length;
var i__19540__auto___27649 = (0);
while(true){
if((i__19540__auto___27649 < len__19539__auto___27648)){
args__19546__auto__.push((arguments[i__19540__auto___27649]));

var G__27650 = (i__19540__auto___27649 + (1));
i__19540__auto___27649 = G__27650;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((3) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19547__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27642){
var map__27643 = p__27642;
var map__27643__$1 = ((((!((map__27643 == null)))?((((map__27643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27643):map__27643);
var opts = map__27643__$1;
var statearr_27645_27651 = state;
(statearr_27645_27651[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__27643,map__27643__$1,opts){
return (function (val){
var statearr_27646_27652 = state;
(statearr_27646_27652[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27643,map__27643__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_27647_27653 = state;
(statearr_27647_27653[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27638){
var G__27639 = cljs.core.first.call(null,seq27638);
var seq27638__$1 = cljs.core.next.call(null,seq27638);
var G__27640 = cljs.core.first.call(null,seq27638__$1);
var seq27638__$2 = cljs.core.next.call(null,seq27638__$1);
var G__27641 = cljs.core.first.call(null,seq27638__$2);
var seq27638__$3 = cljs.core.next.call(null,seq27638__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27639,G__27640,G__27641,seq27638__$3);
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
if(typeof cljs.core.async.t_cljs$core$async27819 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27819 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27820){
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
this.meta27820 = meta27820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27821,meta27820__$1){
var self__ = this;
var _27821__$1 = this;
return (new cljs.core.async.t_cljs$core$async27819(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27820__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27819.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27821){
var self__ = this;
var _27821__$1 = this;
return self__.meta27820;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27819.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27819.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27819.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async27819.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27819.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27819.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27819.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27819.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27819.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27820","meta27820",1648822146,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27819.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27819";

cljs.core.async.t_cljs$core$async27819.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19070__auto__,writer__19071__auto__,opt__19072__auto__){
return cljs.core._write.call(null,writer__19071__auto__,"cljs.core.async/t_cljs$core$async27819");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27819 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27819(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27820){
return (new cljs.core.async.t_cljs$core$async27819(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27820));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27819(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20519__auto___27984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto___27984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto___27984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27921){
var state_val_27922 = (state_27921[(1)]);
if((state_val_27922 === (7))){
var inst_27837 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
var statearr_27923_27985 = state_27921__$1;
(statearr_27923_27985[(2)] = inst_27837);

(statearr_27923_27985[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (20))){
var inst_27849 = (state_27921[(7)]);
var state_27921__$1 = state_27921;
var statearr_27924_27986 = state_27921__$1;
(statearr_27924_27986[(2)] = inst_27849);

(statearr_27924_27986[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (27))){
var state_27921__$1 = state_27921;
var statearr_27925_27987 = state_27921__$1;
(statearr_27925_27987[(2)] = null);

(statearr_27925_27987[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (1))){
var inst_27825 = (state_27921[(8)]);
var inst_27825__$1 = calc_state.call(null);
var inst_27827 = (inst_27825__$1 == null);
var inst_27828 = cljs.core.not.call(null,inst_27827);
var state_27921__$1 = (function (){var statearr_27926 = state_27921;
(statearr_27926[(8)] = inst_27825__$1);

return statearr_27926;
})();
if(inst_27828){
var statearr_27927_27988 = state_27921__$1;
(statearr_27927_27988[(1)] = (2));

} else {
var statearr_27928_27989 = state_27921__$1;
(statearr_27928_27989[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (24))){
var inst_27895 = (state_27921[(9)]);
var inst_27881 = (state_27921[(10)]);
var inst_27872 = (state_27921[(11)]);
var inst_27895__$1 = inst_27872.call(null,inst_27881);
var state_27921__$1 = (function (){var statearr_27929 = state_27921;
(statearr_27929[(9)] = inst_27895__$1);

return statearr_27929;
})();
if(cljs.core.truth_(inst_27895__$1)){
var statearr_27930_27990 = state_27921__$1;
(statearr_27930_27990[(1)] = (29));

} else {
var statearr_27931_27991 = state_27921__$1;
(statearr_27931_27991[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (4))){
var inst_27840 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
if(cljs.core.truth_(inst_27840)){
var statearr_27932_27992 = state_27921__$1;
(statearr_27932_27992[(1)] = (8));

} else {
var statearr_27933_27993 = state_27921__$1;
(statearr_27933_27993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (15))){
var inst_27866 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
if(cljs.core.truth_(inst_27866)){
var statearr_27934_27994 = state_27921__$1;
(statearr_27934_27994[(1)] = (19));

} else {
var statearr_27935_27995 = state_27921__$1;
(statearr_27935_27995[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (21))){
var inst_27871 = (state_27921[(12)]);
var inst_27871__$1 = (state_27921[(2)]);
var inst_27872 = cljs.core.get.call(null,inst_27871__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27873 = cljs.core.get.call(null,inst_27871__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27874 = cljs.core.get.call(null,inst_27871__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27921__$1 = (function (){var statearr_27936 = state_27921;
(statearr_27936[(13)] = inst_27873);

(statearr_27936[(12)] = inst_27871__$1);

(statearr_27936[(11)] = inst_27872);

return statearr_27936;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27921__$1,(22),inst_27874);
} else {
if((state_val_27922 === (31))){
var inst_27903 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
if(cljs.core.truth_(inst_27903)){
var statearr_27937_27996 = state_27921__$1;
(statearr_27937_27996[(1)] = (32));

} else {
var statearr_27938_27997 = state_27921__$1;
(statearr_27938_27997[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (32))){
var inst_27880 = (state_27921[(14)]);
var state_27921__$1 = state_27921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27921__$1,(35),out,inst_27880);
} else {
if((state_val_27922 === (33))){
var inst_27871 = (state_27921[(12)]);
var inst_27849 = inst_27871;
var state_27921__$1 = (function (){var statearr_27939 = state_27921;
(statearr_27939[(7)] = inst_27849);

return statearr_27939;
})();
var statearr_27940_27998 = state_27921__$1;
(statearr_27940_27998[(2)] = null);

(statearr_27940_27998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (13))){
var inst_27849 = (state_27921[(7)]);
var inst_27856 = inst_27849.cljs$lang$protocol_mask$partition0$;
var inst_27857 = (inst_27856 & (64));
var inst_27858 = inst_27849.cljs$core$ISeq$;
var inst_27859 = (inst_27857) || (inst_27858);
var state_27921__$1 = state_27921;
if(cljs.core.truth_(inst_27859)){
var statearr_27941_27999 = state_27921__$1;
(statearr_27941_27999[(1)] = (16));

} else {
var statearr_27942_28000 = state_27921__$1;
(statearr_27942_28000[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (22))){
var inst_27881 = (state_27921[(10)]);
var inst_27880 = (state_27921[(14)]);
var inst_27879 = (state_27921[(2)]);
var inst_27880__$1 = cljs.core.nth.call(null,inst_27879,(0),null);
var inst_27881__$1 = cljs.core.nth.call(null,inst_27879,(1),null);
var inst_27882 = (inst_27880__$1 == null);
var inst_27883 = cljs.core._EQ_.call(null,inst_27881__$1,change);
var inst_27884 = (inst_27882) || (inst_27883);
var state_27921__$1 = (function (){var statearr_27943 = state_27921;
(statearr_27943[(10)] = inst_27881__$1);

(statearr_27943[(14)] = inst_27880__$1);

return statearr_27943;
})();
if(cljs.core.truth_(inst_27884)){
var statearr_27944_28001 = state_27921__$1;
(statearr_27944_28001[(1)] = (23));

} else {
var statearr_27945_28002 = state_27921__$1;
(statearr_27945_28002[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (36))){
var inst_27871 = (state_27921[(12)]);
var inst_27849 = inst_27871;
var state_27921__$1 = (function (){var statearr_27946 = state_27921;
(statearr_27946[(7)] = inst_27849);

return statearr_27946;
})();
var statearr_27947_28003 = state_27921__$1;
(statearr_27947_28003[(2)] = null);

(statearr_27947_28003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (29))){
var inst_27895 = (state_27921[(9)]);
var state_27921__$1 = state_27921;
var statearr_27948_28004 = state_27921__$1;
(statearr_27948_28004[(2)] = inst_27895);

(statearr_27948_28004[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (6))){
var state_27921__$1 = state_27921;
var statearr_27949_28005 = state_27921__$1;
(statearr_27949_28005[(2)] = false);

(statearr_27949_28005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (28))){
var inst_27891 = (state_27921[(2)]);
var inst_27892 = calc_state.call(null);
var inst_27849 = inst_27892;
var state_27921__$1 = (function (){var statearr_27950 = state_27921;
(statearr_27950[(7)] = inst_27849);

(statearr_27950[(15)] = inst_27891);

return statearr_27950;
})();
var statearr_27951_28006 = state_27921__$1;
(statearr_27951_28006[(2)] = null);

(statearr_27951_28006[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (25))){
var inst_27917 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
var statearr_27952_28007 = state_27921__$1;
(statearr_27952_28007[(2)] = inst_27917);

(statearr_27952_28007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (34))){
var inst_27915 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
var statearr_27953_28008 = state_27921__$1;
(statearr_27953_28008[(2)] = inst_27915);

(statearr_27953_28008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (17))){
var state_27921__$1 = state_27921;
var statearr_27954_28009 = state_27921__$1;
(statearr_27954_28009[(2)] = false);

(statearr_27954_28009[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (3))){
var state_27921__$1 = state_27921;
var statearr_27955_28010 = state_27921__$1;
(statearr_27955_28010[(2)] = false);

(statearr_27955_28010[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (12))){
var inst_27919 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27921__$1,inst_27919);
} else {
if((state_val_27922 === (2))){
var inst_27825 = (state_27921[(8)]);
var inst_27830 = inst_27825.cljs$lang$protocol_mask$partition0$;
var inst_27831 = (inst_27830 & (64));
var inst_27832 = inst_27825.cljs$core$ISeq$;
var inst_27833 = (inst_27831) || (inst_27832);
var state_27921__$1 = state_27921;
if(cljs.core.truth_(inst_27833)){
var statearr_27956_28011 = state_27921__$1;
(statearr_27956_28011[(1)] = (5));

} else {
var statearr_27957_28012 = state_27921__$1;
(statearr_27957_28012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (23))){
var inst_27880 = (state_27921[(14)]);
var inst_27886 = (inst_27880 == null);
var state_27921__$1 = state_27921;
if(cljs.core.truth_(inst_27886)){
var statearr_27958_28013 = state_27921__$1;
(statearr_27958_28013[(1)] = (26));

} else {
var statearr_27959_28014 = state_27921__$1;
(statearr_27959_28014[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (35))){
var inst_27906 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
if(cljs.core.truth_(inst_27906)){
var statearr_27960_28015 = state_27921__$1;
(statearr_27960_28015[(1)] = (36));

} else {
var statearr_27961_28016 = state_27921__$1;
(statearr_27961_28016[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (19))){
var inst_27849 = (state_27921[(7)]);
var inst_27868 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27849);
var state_27921__$1 = state_27921;
var statearr_27962_28017 = state_27921__$1;
(statearr_27962_28017[(2)] = inst_27868);

(statearr_27962_28017[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (11))){
var inst_27849 = (state_27921[(7)]);
var inst_27853 = (inst_27849 == null);
var inst_27854 = cljs.core.not.call(null,inst_27853);
var state_27921__$1 = state_27921;
if(inst_27854){
var statearr_27963_28018 = state_27921__$1;
(statearr_27963_28018[(1)] = (13));

} else {
var statearr_27964_28019 = state_27921__$1;
(statearr_27964_28019[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (9))){
var inst_27825 = (state_27921[(8)]);
var state_27921__$1 = state_27921;
var statearr_27965_28020 = state_27921__$1;
(statearr_27965_28020[(2)] = inst_27825);

(statearr_27965_28020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (5))){
var state_27921__$1 = state_27921;
var statearr_27966_28021 = state_27921__$1;
(statearr_27966_28021[(2)] = true);

(statearr_27966_28021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (14))){
var state_27921__$1 = state_27921;
var statearr_27967_28022 = state_27921__$1;
(statearr_27967_28022[(2)] = false);

(statearr_27967_28022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (26))){
var inst_27881 = (state_27921[(10)]);
var inst_27888 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27881);
var state_27921__$1 = state_27921;
var statearr_27968_28023 = state_27921__$1;
(statearr_27968_28023[(2)] = inst_27888);

(statearr_27968_28023[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (16))){
var state_27921__$1 = state_27921;
var statearr_27969_28024 = state_27921__$1;
(statearr_27969_28024[(2)] = true);

(statearr_27969_28024[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (38))){
var inst_27911 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
var statearr_27970_28025 = state_27921__$1;
(statearr_27970_28025[(2)] = inst_27911);

(statearr_27970_28025[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (30))){
var inst_27881 = (state_27921[(10)]);
var inst_27873 = (state_27921[(13)]);
var inst_27872 = (state_27921[(11)]);
var inst_27898 = cljs.core.empty_QMARK_.call(null,inst_27872);
var inst_27899 = inst_27873.call(null,inst_27881);
var inst_27900 = cljs.core.not.call(null,inst_27899);
var inst_27901 = (inst_27898) && (inst_27900);
var state_27921__$1 = state_27921;
var statearr_27971_28026 = state_27921__$1;
(statearr_27971_28026[(2)] = inst_27901);

(statearr_27971_28026[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (10))){
var inst_27825 = (state_27921[(8)]);
var inst_27845 = (state_27921[(2)]);
var inst_27846 = cljs.core.get.call(null,inst_27845,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27847 = cljs.core.get.call(null,inst_27845,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27848 = cljs.core.get.call(null,inst_27845,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27849 = inst_27825;
var state_27921__$1 = (function (){var statearr_27972 = state_27921;
(statearr_27972[(7)] = inst_27849);

(statearr_27972[(16)] = inst_27847);

(statearr_27972[(17)] = inst_27846);

(statearr_27972[(18)] = inst_27848);

return statearr_27972;
})();
var statearr_27973_28027 = state_27921__$1;
(statearr_27973_28027[(2)] = null);

(statearr_27973_28027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (18))){
var inst_27863 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
var statearr_27974_28028 = state_27921__$1;
(statearr_27974_28028[(2)] = inst_27863);

(statearr_27974_28028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (37))){
var state_27921__$1 = state_27921;
var statearr_27975_28029 = state_27921__$1;
(statearr_27975_28029[(2)] = null);

(statearr_27975_28029[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (8))){
var inst_27825 = (state_27921[(8)]);
var inst_27842 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27825);
var state_27921__$1 = state_27921;
var statearr_27976_28030 = state_27921__$1;
(statearr_27976_28030[(2)] = inst_27842);

(statearr_27976_28030[(1)] = (10));


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
});})(c__20519__auto___27984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20498__auto__,c__20519__auto___27984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20499__auto__ = null;
var cljs$core$async$mix_$_state_machine__20499__auto____0 = (function (){
var statearr_27980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27980[(0)] = cljs$core$async$mix_$_state_machine__20499__auto__);

(statearr_27980[(1)] = (1));

return statearr_27980;
});
var cljs$core$async$mix_$_state_machine__20499__auto____1 = (function (state_27921){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_27921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e27981){if((e27981 instanceof Object)){
var ex__20502__auto__ = e27981;
var statearr_27982_28031 = state_27921;
(statearr_27982_28031[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28032 = state_27921;
state_27921 = G__28032;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20499__auto__ = function(state_27921){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20499__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20499__auto____1.call(this,state_27921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20499__auto____0;
cljs$core$async$mix_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20499__auto____1;
return cljs$core$async$mix_$_state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto___27984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20521__auto__ = (function (){var statearr_27983 = f__20520__auto__.call(null);
(statearr_27983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto___27984);

return statearr_27983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto___27984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__19127__auto__ = (((p == null))?null:p);
var m__19128__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19127__auto__)]);
if(!((m__19128__auto__ == null))){
return m__19128__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19128__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19128__auto____$1 == null))){
return m__19128__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__19127__auto__ = (((p == null))?null:p);
var m__19128__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19127__auto__)]);
if(!((m__19128__auto__ == null))){
return m__19128__auto__.call(null,p,v,ch);
} else {
var m__19128__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19128__auto____$1 == null))){
return m__19128__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28033 = [];
var len__19539__auto___28036 = arguments.length;
var i__19540__auto___28037 = (0);
while(true){
if((i__19540__auto___28037 < len__19539__auto___28036)){
args28033.push((arguments[i__19540__auto___28037]));

var G__28038 = (i__19540__auto___28037 + (1));
i__19540__auto___28037 = G__28038;
continue;
} else {
}
break;
}

var G__28035 = args28033.length;
switch (G__28035) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28033.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19127__auto__ = (((p == null))?null:p);
var m__19128__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19127__auto__)]);
if(!((m__19128__auto__ == null))){
return m__19128__auto__.call(null,p);
} else {
var m__19128__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19128__auto____$1 == null))){
return m__19128__auto____$1.call(null,p);
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
var x__19127__auto__ = (((p == null))?null:p);
var m__19128__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19127__auto__)]);
if(!((m__19128__auto__ == null))){
return m__19128__auto__.call(null,p,v);
} else {
var m__19128__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19128__auto____$1 == null))){
return m__19128__auto____$1.call(null,p,v);
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
var args28041 = [];
var len__19539__auto___28166 = arguments.length;
var i__19540__auto___28167 = (0);
while(true){
if((i__19540__auto___28167 < len__19539__auto___28166)){
args28041.push((arguments[i__19540__auto___28167]));

var G__28168 = (i__19540__auto___28167 + (1));
i__19540__auto___28167 = G__28168;
continue;
} else {
}
break;
}

var G__28043 = args28041.length;
switch (G__28043) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28041.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18464__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18464__auto__,mults){
return (function (p1__28040_SHARP_){
if(cljs.core.truth_(p1__28040_SHARP_.call(null,topic))){
return p1__28040_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28040_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18464__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28044 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28044 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28045){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28045 = meta28045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28046,meta28045__$1){
var self__ = this;
var _28046__$1 = this;
return (new cljs.core.async.t_cljs$core$async28044(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28045__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28044.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28046){
var self__ = this;
var _28046__$1 = this;
return self__.meta28045;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28044.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28044.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28044.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28044.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28044.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28044.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28044.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28044.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28045","meta28045",-194338070,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28044.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28044";

cljs.core.async.t_cljs$core$async28044.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19070__auto__,writer__19071__auto__,opt__19072__auto__){
return cljs.core._write.call(null,writer__19071__auto__,"cljs.core.async/t_cljs$core$async28044");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28044 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28044(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28045){
return (new cljs.core.async.t_cljs$core$async28044(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28045));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28044(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20519__auto___28170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto___28170,mults,ensure_mult,p){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto___28170,mults,ensure_mult,p){
return (function (state_28118){
var state_val_28119 = (state_28118[(1)]);
if((state_val_28119 === (7))){
var inst_28114 = (state_28118[(2)]);
var state_28118__$1 = state_28118;
var statearr_28120_28171 = state_28118__$1;
(statearr_28120_28171[(2)] = inst_28114);

(statearr_28120_28171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (20))){
var state_28118__$1 = state_28118;
var statearr_28121_28172 = state_28118__$1;
(statearr_28121_28172[(2)] = null);

(statearr_28121_28172[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (1))){
var state_28118__$1 = state_28118;
var statearr_28122_28173 = state_28118__$1;
(statearr_28122_28173[(2)] = null);

(statearr_28122_28173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (24))){
var inst_28097 = (state_28118[(7)]);
var inst_28106 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28097);
var state_28118__$1 = state_28118;
var statearr_28123_28174 = state_28118__$1;
(statearr_28123_28174[(2)] = inst_28106);

(statearr_28123_28174[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (4))){
var inst_28049 = (state_28118[(8)]);
var inst_28049__$1 = (state_28118[(2)]);
var inst_28050 = (inst_28049__$1 == null);
var state_28118__$1 = (function (){var statearr_28124 = state_28118;
(statearr_28124[(8)] = inst_28049__$1);

return statearr_28124;
})();
if(cljs.core.truth_(inst_28050)){
var statearr_28125_28175 = state_28118__$1;
(statearr_28125_28175[(1)] = (5));

} else {
var statearr_28126_28176 = state_28118__$1;
(statearr_28126_28176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (15))){
var inst_28091 = (state_28118[(2)]);
var state_28118__$1 = state_28118;
var statearr_28127_28177 = state_28118__$1;
(statearr_28127_28177[(2)] = inst_28091);

(statearr_28127_28177[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (21))){
var inst_28111 = (state_28118[(2)]);
var state_28118__$1 = (function (){var statearr_28128 = state_28118;
(statearr_28128[(9)] = inst_28111);

return statearr_28128;
})();
var statearr_28129_28178 = state_28118__$1;
(statearr_28129_28178[(2)] = null);

(statearr_28129_28178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (13))){
var inst_28073 = (state_28118[(10)]);
var inst_28075 = cljs.core.chunked_seq_QMARK_.call(null,inst_28073);
var state_28118__$1 = state_28118;
if(inst_28075){
var statearr_28130_28179 = state_28118__$1;
(statearr_28130_28179[(1)] = (16));

} else {
var statearr_28131_28180 = state_28118__$1;
(statearr_28131_28180[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (22))){
var inst_28103 = (state_28118[(2)]);
var state_28118__$1 = state_28118;
if(cljs.core.truth_(inst_28103)){
var statearr_28132_28181 = state_28118__$1;
(statearr_28132_28181[(1)] = (23));

} else {
var statearr_28133_28182 = state_28118__$1;
(statearr_28133_28182[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (6))){
var inst_28099 = (state_28118[(11)]);
var inst_28097 = (state_28118[(7)]);
var inst_28049 = (state_28118[(8)]);
var inst_28097__$1 = topic_fn.call(null,inst_28049);
var inst_28098 = cljs.core.deref.call(null,mults);
var inst_28099__$1 = cljs.core.get.call(null,inst_28098,inst_28097__$1);
var state_28118__$1 = (function (){var statearr_28134 = state_28118;
(statearr_28134[(11)] = inst_28099__$1);

(statearr_28134[(7)] = inst_28097__$1);

return statearr_28134;
})();
if(cljs.core.truth_(inst_28099__$1)){
var statearr_28135_28183 = state_28118__$1;
(statearr_28135_28183[(1)] = (19));

} else {
var statearr_28136_28184 = state_28118__$1;
(statearr_28136_28184[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (25))){
var inst_28108 = (state_28118[(2)]);
var state_28118__$1 = state_28118;
var statearr_28137_28185 = state_28118__$1;
(statearr_28137_28185[(2)] = inst_28108);

(statearr_28137_28185[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (17))){
var inst_28073 = (state_28118[(10)]);
var inst_28082 = cljs.core.first.call(null,inst_28073);
var inst_28083 = cljs.core.async.muxch_STAR_.call(null,inst_28082);
var inst_28084 = cljs.core.async.close_BANG_.call(null,inst_28083);
var inst_28085 = cljs.core.next.call(null,inst_28073);
var inst_28059 = inst_28085;
var inst_28060 = null;
var inst_28061 = (0);
var inst_28062 = (0);
var state_28118__$1 = (function (){var statearr_28138 = state_28118;
(statearr_28138[(12)] = inst_28084);

(statearr_28138[(13)] = inst_28060);

(statearr_28138[(14)] = inst_28061);

(statearr_28138[(15)] = inst_28059);

(statearr_28138[(16)] = inst_28062);

return statearr_28138;
})();
var statearr_28139_28186 = state_28118__$1;
(statearr_28139_28186[(2)] = null);

(statearr_28139_28186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (3))){
var inst_28116 = (state_28118[(2)]);
var state_28118__$1 = state_28118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28118__$1,inst_28116);
} else {
if((state_val_28119 === (12))){
var inst_28093 = (state_28118[(2)]);
var state_28118__$1 = state_28118;
var statearr_28140_28187 = state_28118__$1;
(statearr_28140_28187[(2)] = inst_28093);

(statearr_28140_28187[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (2))){
var state_28118__$1 = state_28118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28118__$1,(4),ch);
} else {
if((state_val_28119 === (23))){
var state_28118__$1 = state_28118;
var statearr_28141_28188 = state_28118__$1;
(statearr_28141_28188[(2)] = null);

(statearr_28141_28188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (19))){
var inst_28099 = (state_28118[(11)]);
var inst_28049 = (state_28118[(8)]);
var inst_28101 = cljs.core.async.muxch_STAR_.call(null,inst_28099);
var state_28118__$1 = state_28118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28118__$1,(22),inst_28101,inst_28049);
} else {
if((state_val_28119 === (11))){
var inst_28073 = (state_28118[(10)]);
var inst_28059 = (state_28118[(15)]);
var inst_28073__$1 = cljs.core.seq.call(null,inst_28059);
var state_28118__$1 = (function (){var statearr_28142 = state_28118;
(statearr_28142[(10)] = inst_28073__$1);

return statearr_28142;
})();
if(inst_28073__$1){
var statearr_28143_28189 = state_28118__$1;
(statearr_28143_28189[(1)] = (13));

} else {
var statearr_28144_28190 = state_28118__$1;
(statearr_28144_28190[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (9))){
var inst_28095 = (state_28118[(2)]);
var state_28118__$1 = state_28118;
var statearr_28145_28191 = state_28118__$1;
(statearr_28145_28191[(2)] = inst_28095);

(statearr_28145_28191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (5))){
var inst_28056 = cljs.core.deref.call(null,mults);
var inst_28057 = cljs.core.vals.call(null,inst_28056);
var inst_28058 = cljs.core.seq.call(null,inst_28057);
var inst_28059 = inst_28058;
var inst_28060 = null;
var inst_28061 = (0);
var inst_28062 = (0);
var state_28118__$1 = (function (){var statearr_28146 = state_28118;
(statearr_28146[(13)] = inst_28060);

(statearr_28146[(14)] = inst_28061);

(statearr_28146[(15)] = inst_28059);

(statearr_28146[(16)] = inst_28062);

return statearr_28146;
})();
var statearr_28147_28192 = state_28118__$1;
(statearr_28147_28192[(2)] = null);

(statearr_28147_28192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (14))){
var state_28118__$1 = state_28118;
var statearr_28151_28193 = state_28118__$1;
(statearr_28151_28193[(2)] = null);

(statearr_28151_28193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (16))){
var inst_28073 = (state_28118[(10)]);
var inst_28077 = cljs.core.chunk_first.call(null,inst_28073);
var inst_28078 = cljs.core.chunk_rest.call(null,inst_28073);
var inst_28079 = cljs.core.count.call(null,inst_28077);
var inst_28059 = inst_28078;
var inst_28060 = inst_28077;
var inst_28061 = inst_28079;
var inst_28062 = (0);
var state_28118__$1 = (function (){var statearr_28152 = state_28118;
(statearr_28152[(13)] = inst_28060);

(statearr_28152[(14)] = inst_28061);

(statearr_28152[(15)] = inst_28059);

(statearr_28152[(16)] = inst_28062);

return statearr_28152;
})();
var statearr_28153_28194 = state_28118__$1;
(statearr_28153_28194[(2)] = null);

(statearr_28153_28194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (10))){
var inst_28060 = (state_28118[(13)]);
var inst_28061 = (state_28118[(14)]);
var inst_28059 = (state_28118[(15)]);
var inst_28062 = (state_28118[(16)]);
var inst_28067 = cljs.core._nth.call(null,inst_28060,inst_28062);
var inst_28068 = cljs.core.async.muxch_STAR_.call(null,inst_28067);
var inst_28069 = cljs.core.async.close_BANG_.call(null,inst_28068);
var inst_28070 = (inst_28062 + (1));
var tmp28148 = inst_28060;
var tmp28149 = inst_28061;
var tmp28150 = inst_28059;
var inst_28059__$1 = tmp28150;
var inst_28060__$1 = tmp28148;
var inst_28061__$1 = tmp28149;
var inst_28062__$1 = inst_28070;
var state_28118__$1 = (function (){var statearr_28154 = state_28118;
(statearr_28154[(13)] = inst_28060__$1);

(statearr_28154[(14)] = inst_28061__$1);

(statearr_28154[(15)] = inst_28059__$1);

(statearr_28154[(17)] = inst_28069);

(statearr_28154[(16)] = inst_28062__$1);

return statearr_28154;
})();
var statearr_28155_28195 = state_28118__$1;
(statearr_28155_28195[(2)] = null);

(statearr_28155_28195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (18))){
var inst_28088 = (state_28118[(2)]);
var state_28118__$1 = state_28118;
var statearr_28156_28196 = state_28118__$1;
(statearr_28156_28196[(2)] = inst_28088);

(statearr_28156_28196[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (8))){
var inst_28061 = (state_28118[(14)]);
var inst_28062 = (state_28118[(16)]);
var inst_28064 = (inst_28062 < inst_28061);
var inst_28065 = inst_28064;
var state_28118__$1 = state_28118;
if(cljs.core.truth_(inst_28065)){
var statearr_28157_28197 = state_28118__$1;
(statearr_28157_28197[(1)] = (10));

} else {
var statearr_28158_28198 = state_28118__$1;
(statearr_28158_28198[(1)] = (11));

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
});})(c__20519__auto___28170,mults,ensure_mult,p))
;
return ((function (switch__20498__auto__,c__20519__auto___28170,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20499__auto__ = null;
var cljs$core$async$state_machine__20499__auto____0 = (function (){
var statearr_28162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28162[(0)] = cljs$core$async$state_machine__20499__auto__);

(statearr_28162[(1)] = (1));

return statearr_28162;
});
var cljs$core$async$state_machine__20499__auto____1 = (function (state_28118){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_28118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e28163){if((e28163 instanceof Object)){
var ex__20502__auto__ = e28163;
var statearr_28164_28199 = state_28118;
(statearr_28164_28199[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28200 = state_28118;
state_28118 = G__28200;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
cljs$core$async$state_machine__20499__auto__ = function(state_28118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20499__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20499__auto____1.call(this,state_28118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20499__auto____0;
cljs$core$async$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20499__auto____1;
return cljs$core$async$state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto___28170,mults,ensure_mult,p))
})();
var state__20521__auto__ = (function (){var statearr_28165 = f__20520__auto__.call(null);
(statearr_28165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto___28170);

return statearr_28165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto___28170,mults,ensure_mult,p))
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
var args28201 = [];
var len__19539__auto___28204 = arguments.length;
var i__19540__auto___28205 = (0);
while(true){
if((i__19540__auto___28205 < len__19539__auto___28204)){
args28201.push((arguments[i__19540__auto___28205]));

var G__28206 = (i__19540__auto___28205 + (1));
i__19540__auto___28205 = G__28206;
continue;
} else {
}
break;
}

var G__28203 = args28201.length;
switch (G__28203) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28201.length)].join('')));

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
var args28208 = [];
var len__19539__auto___28211 = arguments.length;
var i__19540__auto___28212 = (0);
while(true){
if((i__19540__auto___28212 < len__19539__auto___28211)){
args28208.push((arguments[i__19540__auto___28212]));

var G__28213 = (i__19540__auto___28212 + (1));
i__19540__auto___28212 = G__28213;
continue;
} else {
}
break;
}

var G__28210 = args28208.length;
switch (G__28210) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28208.length)].join('')));

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
var args28215 = [];
var len__19539__auto___28286 = arguments.length;
var i__19540__auto___28287 = (0);
while(true){
if((i__19540__auto___28287 < len__19539__auto___28286)){
args28215.push((arguments[i__19540__auto___28287]));

var G__28288 = (i__19540__auto___28287 + (1));
i__19540__auto___28287 = G__28288;
continue;
} else {
}
break;
}

var G__28217 = args28215.length;
switch (G__28217) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28215.length)].join('')));

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
var c__20519__auto___28290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto___28290,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto___28290,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28256){
var state_val_28257 = (state_28256[(1)]);
if((state_val_28257 === (7))){
var state_28256__$1 = state_28256;
var statearr_28258_28291 = state_28256__$1;
(statearr_28258_28291[(2)] = null);

(statearr_28258_28291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28257 === (1))){
var state_28256__$1 = state_28256;
var statearr_28259_28292 = state_28256__$1;
(statearr_28259_28292[(2)] = null);

(statearr_28259_28292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28257 === (4))){
var inst_28220 = (state_28256[(7)]);
var inst_28222 = (inst_28220 < cnt);
var state_28256__$1 = state_28256;
if(cljs.core.truth_(inst_28222)){
var statearr_28260_28293 = state_28256__$1;
(statearr_28260_28293[(1)] = (6));

} else {
var statearr_28261_28294 = state_28256__$1;
(statearr_28261_28294[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28257 === (15))){
var inst_28252 = (state_28256[(2)]);
var state_28256__$1 = state_28256;
var statearr_28262_28295 = state_28256__$1;
(statearr_28262_28295[(2)] = inst_28252);

(statearr_28262_28295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28257 === (13))){
var inst_28245 = cljs.core.async.close_BANG_.call(null,out);
var state_28256__$1 = state_28256;
var statearr_28263_28296 = state_28256__$1;
(statearr_28263_28296[(2)] = inst_28245);

(statearr_28263_28296[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28257 === (6))){
var state_28256__$1 = state_28256;
var statearr_28264_28297 = state_28256__$1;
(statearr_28264_28297[(2)] = null);

(statearr_28264_28297[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28257 === (3))){
var inst_28254 = (state_28256[(2)]);
var state_28256__$1 = state_28256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28256__$1,inst_28254);
} else {
if((state_val_28257 === (12))){
var inst_28242 = (state_28256[(8)]);
var inst_28242__$1 = (state_28256[(2)]);
var inst_28243 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28242__$1);
var state_28256__$1 = (function (){var statearr_28265 = state_28256;
(statearr_28265[(8)] = inst_28242__$1);

return statearr_28265;
})();
if(cljs.core.truth_(inst_28243)){
var statearr_28266_28298 = state_28256__$1;
(statearr_28266_28298[(1)] = (13));

} else {
var statearr_28267_28299 = state_28256__$1;
(statearr_28267_28299[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28257 === (2))){
var inst_28219 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28220 = (0);
var state_28256__$1 = (function (){var statearr_28268 = state_28256;
(statearr_28268[(9)] = inst_28219);

(statearr_28268[(7)] = inst_28220);

return statearr_28268;
})();
var statearr_28269_28300 = state_28256__$1;
(statearr_28269_28300[(2)] = null);

(statearr_28269_28300[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28257 === (11))){
var inst_28220 = (state_28256[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28256,(10),Object,null,(9));
var inst_28229 = chs__$1.call(null,inst_28220);
var inst_28230 = done.call(null,inst_28220);
var inst_28231 = cljs.core.async.take_BANG_.call(null,inst_28229,inst_28230);
var state_28256__$1 = state_28256;
var statearr_28270_28301 = state_28256__$1;
(statearr_28270_28301[(2)] = inst_28231);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28256__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28257 === (9))){
var inst_28220 = (state_28256[(7)]);
var inst_28233 = (state_28256[(2)]);
var inst_28234 = (inst_28220 + (1));
var inst_28220__$1 = inst_28234;
var state_28256__$1 = (function (){var statearr_28271 = state_28256;
(statearr_28271[(7)] = inst_28220__$1);

(statearr_28271[(10)] = inst_28233);

return statearr_28271;
})();
var statearr_28272_28302 = state_28256__$1;
(statearr_28272_28302[(2)] = null);

(statearr_28272_28302[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28257 === (5))){
var inst_28240 = (state_28256[(2)]);
var state_28256__$1 = (function (){var statearr_28273 = state_28256;
(statearr_28273[(11)] = inst_28240);

return statearr_28273;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28256__$1,(12),dchan);
} else {
if((state_val_28257 === (14))){
var inst_28242 = (state_28256[(8)]);
var inst_28247 = cljs.core.apply.call(null,f,inst_28242);
var state_28256__$1 = state_28256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28256__$1,(16),out,inst_28247);
} else {
if((state_val_28257 === (16))){
var inst_28249 = (state_28256[(2)]);
var state_28256__$1 = (function (){var statearr_28274 = state_28256;
(statearr_28274[(12)] = inst_28249);

return statearr_28274;
})();
var statearr_28275_28303 = state_28256__$1;
(statearr_28275_28303[(2)] = null);

(statearr_28275_28303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28257 === (10))){
var inst_28224 = (state_28256[(2)]);
var inst_28225 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28256__$1 = (function (){var statearr_28276 = state_28256;
(statearr_28276[(13)] = inst_28224);

return statearr_28276;
})();
var statearr_28277_28304 = state_28256__$1;
(statearr_28277_28304[(2)] = inst_28225);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28256__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28257 === (8))){
var inst_28238 = (state_28256[(2)]);
var state_28256__$1 = state_28256;
var statearr_28278_28305 = state_28256__$1;
(statearr_28278_28305[(2)] = inst_28238);

(statearr_28278_28305[(1)] = (5));


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
});})(c__20519__auto___28290,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20498__auto__,c__20519__auto___28290,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20499__auto__ = null;
var cljs$core$async$state_machine__20499__auto____0 = (function (){
var statearr_28282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28282[(0)] = cljs$core$async$state_machine__20499__auto__);

(statearr_28282[(1)] = (1));

return statearr_28282;
});
var cljs$core$async$state_machine__20499__auto____1 = (function (state_28256){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_28256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e28283){if((e28283 instanceof Object)){
var ex__20502__auto__ = e28283;
var statearr_28284_28306 = state_28256;
(statearr_28284_28306[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28307 = state_28256;
state_28256 = G__28307;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
cljs$core$async$state_machine__20499__auto__ = function(state_28256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20499__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20499__auto____1.call(this,state_28256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20499__auto____0;
cljs$core$async$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20499__auto____1;
return cljs$core$async$state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto___28290,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20521__auto__ = (function (){var statearr_28285 = f__20520__auto__.call(null);
(statearr_28285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto___28290);

return statearr_28285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto___28290,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args28309 = [];
var len__19539__auto___28367 = arguments.length;
var i__19540__auto___28368 = (0);
while(true){
if((i__19540__auto___28368 < len__19539__auto___28367)){
args28309.push((arguments[i__19540__auto___28368]));

var G__28369 = (i__19540__auto___28368 + (1));
i__19540__auto___28368 = G__28369;
continue;
} else {
}
break;
}

var G__28311 = args28309.length;
switch (G__28311) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28309.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20519__auto___28371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto___28371,out){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto___28371,out){
return (function (state_28343){
var state_val_28344 = (state_28343[(1)]);
if((state_val_28344 === (7))){
var inst_28323 = (state_28343[(7)]);
var inst_28322 = (state_28343[(8)]);
var inst_28322__$1 = (state_28343[(2)]);
var inst_28323__$1 = cljs.core.nth.call(null,inst_28322__$1,(0),null);
var inst_28324 = cljs.core.nth.call(null,inst_28322__$1,(1),null);
var inst_28325 = (inst_28323__$1 == null);
var state_28343__$1 = (function (){var statearr_28345 = state_28343;
(statearr_28345[(7)] = inst_28323__$1);

(statearr_28345[(8)] = inst_28322__$1);

(statearr_28345[(9)] = inst_28324);

return statearr_28345;
})();
if(cljs.core.truth_(inst_28325)){
var statearr_28346_28372 = state_28343__$1;
(statearr_28346_28372[(1)] = (8));

} else {
var statearr_28347_28373 = state_28343__$1;
(statearr_28347_28373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (1))){
var inst_28312 = cljs.core.vec.call(null,chs);
var inst_28313 = inst_28312;
var state_28343__$1 = (function (){var statearr_28348 = state_28343;
(statearr_28348[(10)] = inst_28313);

return statearr_28348;
})();
var statearr_28349_28374 = state_28343__$1;
(statearr_28349_28374[(2)] = null);

(statearr_28349_28374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (4))){
var inst_28313 = (state_28343[(10)]);
var state_28343__$1 = state_28343;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28343__$1,(7),inst_28313);
} else {
if((state_val_28344 === (6))){
var inst_28339 = (state_28343[(2)]);
var state_28343__$1 = state_28343;
var statearr_28350_28375 = state_28343__$1;
(statearr_28350_28375[(2)] = inst_28339);

(statearr_28350_28375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (3))){
var inst_28341 = (state_28343[(2)]);
var state_28343__$1 = state_28343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28343__$1,inst_28341);
} else {
if((state_val_28344 === (2))){
var inst_28313 = (state_28343[(10)]);
var inst_28315 = cljs.core.count.call(null,inst_28313);
var inst_28316 = (inst_28315 > (0));
var state_28343__$1 = state_28343;
if(cljs.core.truth_(inst_28316)){
var statearr_28352_28376 = state_28343__$1;
(statearr_28352_28376[(1)] = (4));

} else {
var statearr_28353_28377 = state_28343__$1;
(statearr_28353_28377[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (11))){
var inst_28313 = (state_28343[(10)]);
var inst_28332 = (state_28343[(2)]);
var tmp28351 = inst_28313;
var inst_28313__$1 = tmp28351;
var state_28343__$1 = (function (){var statearr_28354 = state_28343;
(statearr_28354[(11)] = inst_28332);

(statearr_28354[(10)] = inst_28313__$1);

return statearr_28354;
})();
var statearr_28355_28378 = state_28343__$1;
(statearr_28355_28378[(2)] = null);

(statearr_28355_28378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (9))){
var inst_28323 = (state_28343[(7)]);
var state_28343__$1 = state_28343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28343__$1,(11),out,inst_28323);
} else {
if((state_val_28344 === (5))){
var inst_28337 = cljs.core.async.close_BANG_.call(null,out);
var state_28343__$1 = state_28343;
var statearr_28356_28379 = state_28343__$1;
(statearr_28356_28379[(2)] = inst_28337);

(statearr_28356_28379[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (10))){
var inst_28335 = (state_28343[(2)]);
var state_28343__$1 = state_28343;
var statearr_28357_28380 = state_28343__$1;
(statearr_28357_28380[(2)] = inst_28335);

(statearr_28357_28380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (8))){
var inst_28323 = (state_28343[(7)]);
var inst_28322 = (state_28343[(8)]);
var inst_28324 = (state_28343[(9)]);
var inst_28313 = (state_28343[(10)]);
var inst_28327 = (function (){var cs = inst_28313;
var vec__28318 = inst_28322;
var v = inst_28323;
var c = inst_28324;
return ((function (cs,vec__28318,v,c,inst_28323,inst_28322,inst_28324,inst_28313,state_val_28344,c__20519__auto___28371,out){
return (function (p1__28308_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28308_SHARP_);
});
;})(cs,vec__28318,v,c,inst_28323,inst_28322,inst_28324,inst_28313,state_val_28344,c__20519__auto___28371,out))
})();
var inst_28328 = cljs.core.filterv.call(null,inst_28327,inst_28313);
var inst_28313__$1 = inst_28328;
var state_28343__$1 = (function (){var statearr_28358 = state_28343;
(statearr_28358[(10)] = inst_28313__$1);

return statearr_28358;
})();
var statearr_28359_28381 = state_28343__$1;
(statearr_28359_28381[(2)] = null);

(statearr_28359_28381[(1)] = (2));


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
});})(c__20519__auto___28371,out))
;
return ((function (switch__20498__auto__,c__20519__auto___28371,out){
return (function() {
var cljs$core$async$state_machine__20499__auto__ = null;
var cljs$core$async$state_machine__20499__auto____0 = (function (){
var statearr_28363 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28363[(0)] = cljs$core$async$state_machine__20499__auto__);

(statearr_28363[(1)] = (1));

return statearr_28363;
});
var cljs$core$async$state_machine__20499__auto____1 = (function (state_28343){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_28343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e28364){if((e28364 instanceof Object)){
var ex__20502__auto__ = e28364;
var statearr_28365_28382 = state_28343;
(statearr_28365_28382[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28383 = state_28343;
state_28343 = G__28383;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
cljs$core$async$state_machine__20499__auto__ = function(state_28343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20499__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20499__auto____1.call(this,state_28343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20499__auto____0;
cljs$core$async$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20499__auto____1;
return cljs$core$async$state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto___28371,out))
})();
var state__20521__auto__ = (function (){var statearr_28366 = f__20520__auto__.call(null);
(statearr_28366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto___28371);

return statearr_28366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto___28371,out))
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
var args28384 = [];
var len__19539__auto___28433 = arguments.length;
var i__19540__auto___28434 = (0);
while(true){
if((i__19540__auto___28434 < len__19539__auto___28433)){
args28384.push((arguments[i__19540__auto___28434]));

var G__28435 = (i__19540__auto___28434 + (1));
i__19540__auto___28434 = G__28435;
continue;
} else {
}
break;
}

var G__28386 = args28384.length;
switch (G__28386) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28384.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20519__auto___28437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto___28437,out){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto___28437,out){
return (function (state_28410){
var state_val_28411 = (state_28410[(1)]);
if((state_val_28411 === (7))){
var inst_28392 = (state_28410[(7)]);
var inst_28392__$1 = (state_28410[(2)]);
var inst_28393 = (inst_28392__$1 == null);
var inst_28394 = cljs.core.not.call(null,inst_28393);
var state_28410__$1 = (function (){var statearr_28412 = state_28410;
(statearr_28412[(7)] = inst_28392__$1);

return statearr_28412;
})();
if(inst_28394){
var statearr_28413_28438 = state_28410__$1;
(statearr_28413_28438[(1)] = (8));

} else {
var statearr_28414_28439 = state_28410__$1;
(statearr_28414_28439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28411 === (1))){
var inst_28387 = (0);
var state_28410__$1 = (function (){var statearr_28415 = state_28410;
(statearr_28415[(8)] = inst_28387);

return statearr_28415;
})();
var statearr_28416_28440 = state_28410__$1;
(statearr_28416_28440[(2)] = null);

(statearr_28416_28440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28411 === (4))){
var state_28410__$1 = state_28410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28410__$1,(7),ch);
} else {
if((state_val_28411 === (6))){
var inst_28405 = (state_28410[(2)]);
var state_28410__$1 = state_28410;
var statearr_28417_28441 = state_28410__$1;
(statearr_28417_28441[(2)] = inst_28405);

(statearr_28417_28441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28411 === (3))){
var inst_28407 = (state_28410[(2)]);
var inst_28408 = cljs.core.async.close_BANG_.call(null,out);
var state_28410__$1 = (function (){var statearr_28418 = state_28410;
(statearr_28418[(9)] = inst_28407);

return statearr_28418;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28410__$1,inst_28408);
} else {
if((state_val_28411 === (2))){
var inst_28387 = (state_28410[(8)]);
var inst_28389 = (inst_28387 < n);
var state_28410__$1 = state_28410;
if(cljs.core.truth_(inst_28389)){
var statearr_28419_28442 = state_28410__$1;
(statearr_28419_28442[(1)] = (4));

} else {
var statearr_28420_28443 = state_28410__$1;
(statearr_28420_28443[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28411 === (11))){
var inst_28387 = (state_28410[(8)]);
var inst_28397 = (state_28410[(2)]);
var inst_28398 = (inst_28387 + (1));
var inst_28387__$1 = inst_28398;
var state_28410__$1 = (function (){var statearr_28421 = state_28410;
(statearr_28421[(10)] = inst_28397);

(statearr_28421[(8)] = inst_28387__$1);

return statearr_28421;
})();
var statearr_28422_28444 = state_28410__$1;
(statearr_28422_28444[(2)] = null);

(statearr_28422_28444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28411 === (9))){
var state_28410__$1 = state_28410;
var statearr_28423_28445 = state_28410__$1;
(statearr_28423_28445[(2)] = null);

(statearr_28423_28445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28411 === (5))){
var state_28410__$1 = state_28410;
var statearr_28424_28446 = state_28410__$1;
(statearr_28424_28446[(2)] = null);

(statearr_28424_28446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28411 === (10))){
var inst_28402 = (state_28410[(2)]);
var state_28410__$1 = state_28410;
var statearr_28425_28447 = state_28410__$1;
(statearr_28425_28447[(2)] = inst_28402);

(statearr_28425_28447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28411 === (8))){
var inst_28392 = (state_28410[(7)]);
var state_28410__$1 = state_28410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28410__$1,(11),out,inst_28392);
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
});})(c__20519__auto___28437,out))
;
return ((function (switch__20498__auto__,c__20519__auto___28437,out){
return (function() {
var cljs$core$async$state_machine__20499__auto__ = null;
var cljs$core$async$state_machine__20499__auto____0 = (function (){
var statearr_28429 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28429[(0)] = cljs$core$async$state_machine__20499__auto__);

(statearr_28429[(1)] = (1));

return statearr_28429;
});
var cljs$core$async$state_machine__20499__auto____1 = (function (state_28410){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_28410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e28430){if((e28430 instanceof Object)){
var ex__20502__auto__ = e28430;
var statearr_28431_28448 = state_28410;
(statearr_28431_28448[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28449 = state_28410;
state_28410 = G__28449;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
cljs$core$async$state_machine__20499__auto__ = function(state_28410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20499__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20499__auto____1.call(this,state_28410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20499__auto____0;
cljs$core$async$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20499__auto____1;
return cljs$core$async$state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto___28437,out))
})();
var state__20521__auto__ = (function (){var statearr_28432 = f__20520__auto__.call(null);
(statearr_28432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto___28437);

return statearr_28432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto___28437,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28457 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28457 = (function (map_LT_,f,ch,meta28458){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28458 = meta28458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28459,meta28458__$1){
var self__ = this;
var _28459__$1 = this;
return (new cljs.core.async.t_cljs$core$async28457(self__.map_LT_,self__.f,self__.ch,meta28458__$1));
});

cljs.core.async.t_cljs$core$async28457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28459){
var self__ = this;
var _28459__$1 = this;
return self__.meta28458;
});

cljs.core.async.t_cljs$core$async28457.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28457.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28457.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28457.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28457.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28460 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28460 = (function (map_LT_,f,ch,meta28458,_,fn1,meta28461){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28458 = meta28458;
this._ = _;
this.fn1 = fn1;
this.meta28461 = meta28461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28462,meta28461__$1){
var self__ = this;
var _28462__$1 = this;
return (new cljs.core.async.t_cljs$core$async28460(self__.map_LT_,self__.f,self__.ch,self__.meta28458,self__._,self__.fn1,meta28461__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28460.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28462){
var self__ = this;
var _28462__$1 = this;
return self__.meta28461;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28460.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28460.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28460.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28460.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28450_SHARP_){
return f1.call(null,(((p1__28450_SHARP_ == null))?null:self__.f.call(null,p1__28450_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28460.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28458","meta28458",-225386618,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28457","cljs.core.async/t_cljs$core$async28457",-1832678384,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28461","meta28461",-76029143,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28460.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28460";

cljs.core.async.t_cljs$core$async28460.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19070__auto__,writer__19071__auto__,opt__19072__auto__){
return cljs.core._write.call(null,writer__19071__auto__,"cljs.core.async/t_cljs$core$async28460");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28460 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28460(map_LT___$1,f__$1,ch__$1,meta28458__$1,___$2,fn1__$1,meta28461){
return (new cljs.core.async.t_cljs$core$async28460(map_LT___$1,f__$1,ch__$1,meta28458__$1,___$2,fn1__$1,meta28461));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28460(self__.map_LT_,self__.f,self__.ch,self__.meta28458,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18452__auto__ = ret;
if(cljs.core.truth_(and__18452__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18452__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28457.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28457.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28457.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28458","meta28458",-225386618,null)], null);
});

cljs.core.async.t_cljs$core$async28457.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28457";

cljs.core.async.t_cljs$core$async28457.cljs$lang$ctorPrWriter = (function (this__19070__auto__,writer__19071__auto__,opt__19072__auto__){
return cljs.core._write.call(null,writer__19071__auto__,"cljs.core.async/t_cljs$core$async28457");
});

cljs.core.async.__GT_t_cljs$core$async28457 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28457(map_LT___$1,f__$1,ch__$1,meta28458){
return (new cljs.core.async.t_cljs$core$async28457(map_LT___$1,f__$1,ch__$1,meta28458));
});

}

return (new cljs.core.async.t_cljs$core$async28457(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28466 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28466 = (function (map_GT_,f,ch,meta28467){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28467 = meta28467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28468,meta28467__$1){
var self__ = this;
var _28468__$1 = this;
return (new cljs.core.async.t_cljs$core$async28466(self__.map_GT_,self__.f,self__.ch,meta28467__$1));
});

cljs.core.async.t_cljs$core$async28466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28468){
var self__ = this;
var _28468__$1 = this;
return self__.meta28467;
});

cljs.core.async.t_cljs$core$async28466.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28466.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28466.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28466.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28466.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28466.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28467","meta28467",1980345613,null)], null);
});

cljs.core.async.t_cljs$core$async28466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28466";

cljs.core.async.t_cljs$core$async28466.cljs$lang$ctorPrWriter = (function (this__19070__auto__,writer__19071__auto__,opt__19072__auto__){
return cljs.core._write.call(null,writer__19071__auto__,"cljs.core.async/t_cljs$core$async28466");
});

cljs.core.async.__GT_t_cljs$core$async28466 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28466(map_GT___$1,f__$1,ch__$1,meta28467){
return (new cljs.core.async.t_cljs$core$async28466(map_GT___$1,f__$1,ch__$1,meta28467));
});

}

return (new cljs.core.async.t_cljs$core$async28466(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28472 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28472 = (function (filter_GT_,p,ch,meta28473){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28473 = meta28473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28474,meta28473__$1){
var self__ = this;
var _28474__$1 = this;
return (new cljs.core.async.t_cljs$core$async28472(self__.filter_GT_,self__.p,self__.ch,meta28473__$1));
});

cljs.core.async.t_cljs$core$async28472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28474){
var self__ = this;
var _28474__$1 = this;
return self__.meta28473;
});

cljs.core.async.t_cljs$core$async28472.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28472.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28472.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28472.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28472.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28472.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28472.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28473","meta28473",58230856,null)], null);
});

cljs.core.async.t_cljs$core$async28472.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28472";

cljs.core.async.t_cljs$core$async28472.cljs$lang$ctorPrWriter = (function (this__19070__auto__,writer__19071__auto__,opt__19072__auto__){
return cljs.core._write.call(null,writer__19071__auto__,"cljs.core.async/t_cljs$core$async28472");
});

cljs.core.async.__GT_t_cljs$core$async28472 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28472(filter_GT___$1,p__$1,ch__$1,meta28473){
return (new cljs.core.async.t_cljs$core$async28472(filter_GT___$1,p__$1,ch__$1,meta28473));
});

}

return (new cljs.core.async.t_cljs$core$async28472(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args28475 = [];
var len__19539__auto___28519 = arguments.length;
var i__19540__auto___28520 = (0);
while(true){
if((i__19540__auto___28520 < len__19539__auto___28519)){
args28475.push((arguments[i__19540__auto___28520]));

var G__28521 = (i__19540__auto___28520 + (1));
i__19540__auto___28520 = G__28521;
continue;
} else {
}
break;
}

var G__28477 = args28475.length;
switch (G__28477) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28475.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20519__auto___28523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto___28523,out){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto___28523,out){
return (function (state_28498){
var state_val_28499 = (state_28498[(1)]);
if((state_val_28499 === (7))){
var inst_28494 = (state_28498[(2)]);
var state_28498__$1 = state_28498;
var statearr_28500_28524 = state_28498__$1;
(statearr_28500_28524[(2)] = inst_28494);

(statearr_28500_28524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (1))){
var state_28498__$1 = state_28498;
var statearr_28501_28525 = state_28498__$1;
(statearr_28501_28525[(2)] = null);

(statearr_28501_28525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (4))){
var inst_28480 = (state_28498[(7)]);
var inst_28480__$1 = (state_28498[(2)]);
var inst_28481 = (inst_28480__$1 == null);
var state_28498__$1 = (function (){var statearr_28502 = state_28498;
(statearr_28502[(7)] = inst_28480__$1);

return statearr_28502;
})();
if(cljs.core.truth_(inst_28481)){
var statearr_28503_28526 = state_28498__$1;
(statearr_28503_28526[(1)] = (5));

} else {
var statearr_28504_28527 = state_28498__$1;
(statearr_28504_28527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (6))){
var inst_28480 = (state_28498[(7)]);
var inst_28485 = p.call(null,inst_28480);
var state_28498__$1 = state_28498;
if(cljs.core.truth_(inst_28485)){
var statearr_28505_28528 = state_28498__$1;
(statearr_28505_28528[(1)] = (8));

} else {
var statearr_28506_28529 = state_28498__$1;
(statearr_28506_28529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (3))){
var inst_28496 = (state_28498[(2)]);
var state_28498__$1 = state_28498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28498__$1,inst_28496);
} else {
if((state_val_28499 === (2))){
var state_28498__$1 = state_28498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28498__$1,(4),ch);
} else {
if((state_val_28499 === (11))){
var inst_28488 = (state_28498[(2)]);
var state_28498__$1 = state_28498;
var statearr_28507_28530 = state_28498__$1;
(statearr_28507_28530[(2)] = inst_28488);

(statearr_28507_28530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (9))){
var state_28498__$1 = state_28498;
var statearr_28508_28531 = state_28498__$1;
(statearr_28508_28531[(2)] = null);

(statearr_28508_28531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (5))){
var inst_28483 = cljs.core.async.close_BANG_.call(null,out);
var state_28498__$1 = state_28498;
var statearr_28509_28532 = state_28498__$1;
(statearr_28509_28532[(2)] = inst_28483);

(statearr_28509_28532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (10))){
var inst_28491 = (state_28498[(2)]);
var state_28498__$1 = (function (){var statearr_28510 = state_28498;
(statearr_28510[(8)] = inst_28491);

return statearr_28510;
})();
var statearr_28511_28533 = state_28498__$1;
(statearr_28511_28533[(2)] = null);

(statearr_28511_28533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (8))){
var inst_28480 = (state_28498[(7)]);
var state_28498__$1 = state_28498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28498__$1,(11),out,inst_28480);
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
});})(c__20519__auto___28523,out))
;
return ((function (switch__20498__auto__,c__20519__auto___28523,out){
return (function() {
var cljs$core$async$state_machine__20499__auto__ = null;
var cljs$core$async$state_machine__20499__auto____0 = (function (){
var statearr_28515 = [null,null,null,null,null,null,null,null,null];
(statearr_28515[(0)] = cljs$core$async$state_machine__20499__auto__);

(statearr_28515[(1)] = (1));

return statearr_28515;
});
var cljs$core$async$state_machine__20499__auto____1 = (function (state_28498){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_28498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e28516){if((e28516 instanceof Object)){
var ex__20502__auto__ = e28516;
var statearr_28517_28534 = state_28498;
(statearr_28517_28534[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28535 = state_28498;
state_28498 = G__28535;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
cljs$core$async$state_machine__20499__auto__ = function(state_28498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20499__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20499__auto____1.call(this,state_28498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20499__auto____0;
cljs$core$async$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20499__auto____1;
return cljs$core$async$state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto___28523,out))
})();
var state__20521__auto__ = (function (){var statearr_28518 = f__20520__auto__.call(null);
(statearr_28518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto___28523);

return statearr_28518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto___28523,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28536 = [];
var len__19539__auto___28539 = arguments.length;
var i__19540__auto___28540 = (0);
while(true){
if((i__19540__auto___28540 < len__19539__auto___28539)){
args28536.push((arguments[i__19540__auto___28540]));

var G__28541 = (i__19540__auto___28540 + (1));
i__19540__auto___28540 = G__28541;
continue;
} else {
}
break;
}

var G__28538 = args28536.length;
switch (G__28538) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28536.length)].join('')));

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
var c__20519__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto__){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto__){
return (function (state_28708){
var state_val_28709 = (state_28708[(1)]);
if((state_val_28709 === (7))){
var inst_28704 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28710_28751 = state_28708__$1;
(statearr_28710_28751[(2)] = inst_28704);

(statearr_28710_28751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (20))){
var inst_28674 = (state_28708[(7)]);
var inst_28685 = (state_28708[(2)]);
var inst_28686 = cljs.core.next.call(null,inst_28674);
var inst_28660 = inst_28686;
var inst_28661 = null;
var inst_28662 = (0);
var inst_28663 = (0);
var state_28708__$1 = (function (){var statearr_28711 = state_28708;
(statearr_28711[(8)] = inst_28662);

(statearr_28711[(9)] = inst_28663);

(statearr_28711[(10)] = inst_28685);

(statearr_28711[(11)] = inst_28661);

(statearr_28711[(12)] = inst_28660);

return statearr_28711;
})();
var statearr_28712_28752 = state_28708__$1;
(statearr_28712_28752[(2)] = null);

(statearr_28712_28752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (1))){
var state_28708__$1 = state_28708;
var statearr_28713_28753 = state_28708__$1;
(statearr_28713_28753[(2)] = null);

(statearr_28713_28753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (4))){
var inst_28649 = (state_28708[(13)]);
var inst_28649__$1 = (state_28708[(2)]);
var inst_28650 = (inst_28649__$1 == null);
var state_28708__$1 = (function (){var statearr_28714 = state_28708;
(statearr_28714[(13)] = inst_28649__$1);

return statearr_28714;
})();
if(cljs.core.truth_(inst_28650)){
var statearr_28715_28754 = state_28708__$1;
(statearr_28715_28754[(1)] = (5));

} else {
var statearr_28716_28755 = state_28708__$1;
(statearr_28716_28755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (15))){
var state_28708__$1 = state_28708;
var statearr_28720_28756 = state_28708__$1;
(statearr_28720_28756[(2)] = null);

(statearr_28720_28756[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (21))){
var state_28708__$1 = state_28708;
var statearr_28721_28757 = state_28708__$1;
(statearr_28721_28757[(2)] = null);

(statearr_28721_28757[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (13))){
var inst_28662 = (state_28708[(8)]);
var inst_28663 = (state_28708[(9)]);
var inst_28661 = (state_28708[(11)]);
var inst_28660 = (state_28708[(12)]);
var inst_28670 = (state_28708[(2)]);
var inst_28671 = (inst_28663 + (1));
var tmp28717 = inst_28662;
var tmp28718 = inst_28661;
var tmp28719 = inst_28660;
var inst_28660__$1 = tmp28719;
var inst_28661__$1 = tmp28718;
var inst_28662__$1 = tmp28717;
var inst_28663__$1 = inst_28671;
var state_28708__$1 = (function (){var statearr_28722 = state_28708;
(statearr_28722[(8)] = inst_28662__$1);

(statearr_28722[(14)] = inst_28670);

(statearr_28722[(9)] = inst_28663__$1);

(statearr_28722[(11)] = inst_28661__$1);

(statearr_28722[(12)] = inst_28660__$1);

return statearr_28722;
})();
var statearr_28723_28758 = state_28708__$1;
(statearr_28723_28758[(2)] = null);

(statearr_28723_28758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (22))){
var state_28708__$1 = state_28708;
var statearr_28724_28759 = state_28708__$1;
(statearr_28724_28759[(2)] = null);

(statearr_28724_28759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (6))){
var inst_28649 = (state_28708[(13)]);
var inst_28658 = f.call(null,inst_28649);
var inst_28659 = cljs.core.seq.call(null,inst_28658);
var inst_28660 = inst_28659;
var inst_28661 = null;
var inst_28662 = (0);
var inst_28663 = (0);
var state_28708__$1 = (function (){var statearr_28725 = state_28708;
(statearr_28725[(8)] = inst_28662);

(statearr_28725[(9)] = inst_28663);

(statearr_28725[(11)] = inst_28661);

(statearr_28725[(12)] = inst_28660);

return statearr_28725;
})();
var statearr_28726_28760 = state_28708__$1;
(statearr_28726_28760[(2)] = null);

(statearr_28726_28760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (17))){
var inst_28674 = (state_28708[(7)]);
var inst_28678 = cljs.core.chunk_first.call(null,inst_28674);
var inst_28679 = cljs.core.chunk_rest.call(null,inst_28674);
var inst_28680 = cljs.core.count.call(null,inst_28678);
var inst_28660 = inst_28679;
var inst_28661 = inst_28678;
var inst_28662 = inst_28680;
var inst_28663 = (0);
var state_28708__$1 = (function (){var statearr_28727 = state_28708;
(statearr_28727[(8)] = inst_28662);

(statearr_28727[(9)] = inst_28663);

(statearr_28727[(11)] = inst_28661);

(statearr_28727[(12)] = inst_28660);

return statearr_28727;
})();
var statearr_28728_28761 = state_28708__$1;
(statearr_28728_28761[(2)] = null);

(statearr_28728_28761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (3))){
var inst_28706 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28708__$1,inst_28706);
} else {
if((state_val_28709 === (12))){
var inst_28694 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28729_28762 = state_28708__$1;
(statearr_28729_28762[(2)] = inst_28694);

(statearr_28729_28762[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (2))){
var state_28708__$1 = state_28708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28708__$1,(4),in$);
} else {
if((state_val_28709 === (23))){
var inst_28702 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28730_28763 = state_28708__$1;
(statearr_28730_28763[(2)] = inst_28702);

(statearr_28730_28763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (19))){
var inst_28689 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28731_28764 = state_28708__$1;
(statearr_28731_28764[(2)] = inst_28689);

(statearr_28731_28764[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (11))){
var inst_28674 = (state_28708[(7)]);
var inst_28660 = (state_28708[(12)]);
var inst_28674__$1 = cljs.core.seq.call(null,inst_28660);
var state_28708__$1 = (function (){var statearr_28732 = state_28708;
(statearr_28732[(7)] = inst_28674__$1);

return statearr_28732;
})();
if(inst_28674__$1){
var statearr_28733_28765 = state_28708__$1;
(statearr_28733_28765[(1)] = (14));

} else {
var statearr_28734_28766 = state_28708__$1;
(statearr_28734_28766[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (9))){
var inst_28696 = (state_28708[(2)]);
var inst_28697 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28708__$1 = (function (){var statearr_28735 = state_28708;
(statearr_28735[(15)] = inst_28696);

return statearr_28735;
})();
if(cljs.core.truth_(inst_28697)){
var statearr_28736_28767 = state_28708__$1;
(statearr_28736_28767[(1)] = (21));

} else {
var statearr_28737_28768 = state_28708__$1;
(statearr_28737_28768[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (5))){
var inst_28652 = cljs.core.async.close_BANG_.call(null,out);
var state_28708__$1 = state_28708;
var statearr_28738_28769 = state_28708__$1;
(statearr_28738_28769[(2)] = inst_28652);

(statearr_28738_28769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (14))){
var inst_28674 = (state_28708[(7)]);
var inst_28676 = cljs.core.chunked_seq_QMARK_.call(null,inst_28674);
var state_28708__$1 = state_28708;
if(inst_28676){
var statearr_28739_28770 = state_28708__$1;
(statearr_28739_28770[(1)] = (17));

} else {
var statearr_28740_28771 = state_28708__$1;
(statearr_28740_28771[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (16))){
var inst_28692 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28741_28772 = state_28708__$1;
(statearr_28741_28772[(2)] = inst_28692);

(statearr_28741_28772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (10))){
var inst_28663 = (state_28708[(9)]);
var inst_28661 = (state_28708[(11)]);
var inst_28668 = cljs.core._nth.call(null,inst_28661,inst_28663);
var state_28708__$1 = state_28708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28708__$1,(13),out,inst_28668);
} else {
if((state_val_28709 === (18))){
var inst_28674 = (state_28708[(7)]);
var inst_28683 = cljs.core.first.call(null,inst_28674);
var state_28708__$1 = state_28708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28708__$1,(20),out,inst_28683);
} else {
if((state_val_28709 === (8))){
var inst_28662 = (state_28708[(8)]);
var inst_28663 = (state_28708[(9)]);
var inst_28665 = (inst_28663 < inst_28662);
var inst_28666 = inst_28665;
var state_28708__$1 = state_28708;
if(cljs.core.truth_(inst_28666)){
var statearr_28742_28773 = state_28708__$1;
(statearr_28742_28773[(1)] = (10));

} else {
var statearr_28743_28774 = state_28708__$1;
(statearr_28743_28774[(1)] = (11));

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
});})(c__20519__auto__))
;
return ((function (switch__20498__auto__,c__20519__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20499__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20499__auto____0 = (function (){
var statearr_28747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28747[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20499__auto__);

(statearr_28747[(1)] = (1));

return statearr_28747;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20499__auto____1 = (function (state_28708){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_28708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e28748){if((e28748 instanceof Object)){
var ex__20502__auto__ = e28748;
var statearr_28749_28775 = state_28708;
(statearr_28749_28775[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28776 = state_28708;
state_28708 = G__28776;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20499__auto__ = function(state_28708){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20499__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20499__auto____1.call(this,state_28708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20499__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20499__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto__))
})();
var state__20521__auto__ = (function (){var statearr_28750 = f__20520__auto__.call(null);
(statearr_28750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto__);

return statearr_28750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto__))
);

return c__20519__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28777 = [];
var len__19539__auto___28780 = arguments.length;
var i__19540__auto___28781 = (0);
while(true){
if((i__19540__auto___28781 < len__19539__auto___28780)){
args28777.push((arguments[i__19540__auto___28781]));

var G__28782 = (i__19540__auto___28781 + (1));
i__19540__auto___28781 = G__28782;
continue;
} else {
}
break;
}

var G__28779 = args28777.length;
switch (G__28779) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28777.length)].join('')));

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
var args28784 = [];
var len__19539__auto___28787 = arguments.length;
var i__19540__auto___28788 = (0);
while(true){
if((i__19540__auto___28788 < len__19539__auto___28787)){
args28784.push((arguments[i__19540__auto___28788]));

var G__28789 = (i__19540__auto___28788 + (1));
i__19540__auto___28788 = G__28789;
continue;
} else {
}
break;
}

var G__28786 = args28784.length;
switch (G__28786) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28784.length)].join('')));

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
var args28791 = [];
var len__19539__auto___28842 = arguments.length;
var i__19540__auto___28843 = (0);
while(true){
if((i__19540__auto___28843 < len__19539__auto___28842)){
args28791.push((arguments[i__19540__auto___28843]));

var G__28844 = (i__19540__auto___28843 + (1));
i__19540__auto___28843 = G__28844;
continue;
} else {
}
break;
}

var G__28793 = args28791.length;
switch (G__28793) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28791.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20519__auto___28846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto___28846,out){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto___28846,out){
return (function (state_28817){
var state_val_28818 = (state_28817[(1)]);
if((state_val_28818 === (7))){
var inst_28812 = (state_28817[(2)]);
var state_28817__$1 = state_28817;
var statearr_28819_28847 = state_28817__$1;
(statearr_28819_28847[(2)] = inst_28812);

(statearr_28819_28847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (1))){
var inst_28794 = null;
var state_28817__$1 = (function (){var statearr_28820 = state_28817;
(statearr_28820[(7)] = inst_28794);

return statearr_28820;
})();
var statearr_28821_28848 = state_28817__$1;
(statearr_28821_28848[(2)] = null);

(statearr_28821_28848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (4))){
var inst_28797 = (state_28817[(8)]);
var inst_28797__$1 = (state_28817[(2)]);
var inst_28798 = (inst_28797__$1 == null);
var inst_28799 = cljs.core.not.call(null,inst_28798);
var state_28817__$1 = (function (){var statearr_28822 = state_28817;
(statearr_28822[(8)] = inst_28797__$1);

return statearr_28822;
})();
if(inst_28799){
var statearr_28823_28849 = state_28817__$1;
(statearr_28823_28849[(1)] = (5));

} else {
var statearr_28824_28850 = state_28817__$1;
(statearr_28824_28850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (6))){
var state_28817__$1 = state_28817;
var statearr_28825_28851 = state_28817__$1;
(statearr_28825_28851[(2)] = null);

(statearr_28825_28851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (3))){
var inst_28814 = (state_28817[(2)]);
var inst_28815 = cljs.core.async.close_BANG_.call(null,out);
var state_28817__$1 = (function (){var statearr_28826 = state_28817;
(statearr_28826[(9)] = inst_28814);

return statearr_28826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28817__$1,inst_28815);
} else {
if((state_val_28818 === (2))){
var state_28817__$1 = state_28817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28817__$1,(4),ch);
} else {
if((state_val_28818 === (11))){
var inst_28797 = (state_28817[(8)]);
var inst_28806 = (state_28817[(2)]);
var inst_28794 = inst_28797;
var state_28817__$1 = (function (){var statearr_28827 = state_28817;
(statearr_28827[(10)] = inst_28806);

(statearr_28827[(7)] = inst_28794);

return statearr_28827;
})();
var statearr_28828_28852 = state_28817__$1;
(statearr_28828_28852[(2)] = null);

(statearr_28828_28852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (9))){
var inst_28797 = (state_28817[(8)]);
var state_28817__$1 = state_28817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28817__$1,(11),out,inst_28797);
} else {
if((state_val_28818 === (5))){
var inst_28797 = (state_28817[(8)]);
var inst_28794 = (state_28817[(7)]);
var inst_28801 = cljs.core._EQ_.call(null,inst_28797,inst_28794);
var state_28817__$1 = state_28817;
if(inst_28801){
var statearr_28830_28853 = state_28817__$1;
(statearr_28830_28853[(1)] = (8));

} else {
var statearr_28831_28854 = state_28817__$1;
(statearr_28831_28854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (10))){
var inst_28809 = (state_28817[(2)]);
var state_28817__$1 = state_28817;
var statearr_28832_28855 = state_28817__$1;
(statearr_28832_28855[(2)] = inst_28809);

(statearr_28832_28855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (8))){
var inst_28794 = (state_28817[(7)]);
var tmp28829 = inst_28794;
var inst_28794__$1 = tmp28829;
var state_28817__$1 = (function (){var statearr_28833 = state_28817;
(statearr_28833[(7)] = inst_28794__$1);

return statearr_28833;
})();
var statearr_28834_28856 = state_28817__$1;
(statearr_28834_28856[(2)] = null);

(statearr_28834_28856[(1)] = (2));


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
});})(c__20519__auto___28846,out))
;
return ((function (switch__20498__auto__,c__20519__auto___28846,out){
return (function() {
var cljs$core$async$state_machine__20499__auto__ = null;
var cljs$core$async$state_machine__20499__auto____0 = (function (){
var statearr_28838 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28838[(0)] = cljs$core$async$state_machine__20499__auto__);

(statearr_28838[(1)] = (1));

return statearr_28838;
});
var cljs$core$async$state_machine__20499__auto____1 = (function (state_28817){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_28817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e28839){if((e28839 instanceof Object)){
var ex__20502__auto__ = e28839;
var statearr_28840_28857 = state_28817;
(statearr_28840_28857[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28858 = state_28817;
state_28817 = G__28858;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
cljs$core$async$state_machine__20499__auto__ = function(state_28817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20499__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20499__auto____1.call(this,state_28817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20499__auto____0;
cljs$core$async$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20499__auto____1;
return cljs$core$async$state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto___28846,out))
})();
var state__20521__auto__ = (function (){var statearr_28841 = f__20520__auto__.call(null);
(statearr_28841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto___28846);

return statearr_28841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto___28846,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28859 = [];
var len__19539__auto___28929 = arguments.length;
var i__19540__auto___28930 = (0);
while(true){
if((i__19540__auto___28930 < len__19539__auto___28929)){
args28859.push((arguments[i__19540__auto___28930]));

var G__28931 = (i__19540__auto___28930 + (1));
i__19540__auto___28930 = G__28931;
continue;
} else {
}
break;
}

var G__28861 = args28859.length;
switch (G__28861) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28859.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20519__auto___28933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto___28933,out){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto___28933,out){
return (function (state_28899){
var state_val_28900 = (state_28899[(1)]);
if((state_val_28900 === (7))){
var inst_28895 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
var statearr_28901_28934 = state_28899__$1;
(statearr_28901_28934[(2)] = inst_28895);

(statearr_28901_28934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (1))){
var inst_28862 = (new Array(n));
var inst_28863 = inst_28862;
var inst_28864 = (0);
var state_28899__$1 = (function (){var statearr_28902 = state_28899;
(statearr_28902[(7)] = inst_28864);

(statearr_28902[(8)] = inst_28863);

return statearr_28902;
})();
var statearr_28903_28935 = state_28899__$1;
(statearr_28903_28935[(2)] = null);

(statearr_28903_28935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (4))){
var inst_28867 = (state_28899[(9)]);
var inst_28867__$1 = (state_28899[(2)]);
var inst_28868 = (inst_28867__$1 == null);
var inst_28869 = cljs.core.not.call(null,inst_28868);
var state_28899__$1 = (function (){var statearr_28904 = state_28899;
(statearr_28904[(9)] = inst_28867__$1);

return statearr_28904;
})();
if(inst_28869){
var statearr_28905_28936 = state_28899__$1;
(statearr_28905_28936[(1)] = (5));

} else {
var statearr_28906_28937 = state_28899__$1;
(statearr_28906_28937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (15))){
var inst_28889 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
var statearr_28907_28938 = state_28899__$1;
(statearr_28907_28938[(2)] = inst_28889);

(statearr_28907_28938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (13))){
var state_28899__$1 = state_28899;
var statearr_28908_28939 = state_28899__$1;
(statearr_28908_28939[(2)] = null);

(statearr_28908_28939[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (6))){
var inst_28864 = (state_28899[(7)]);
var inst_28885 = (inst_28864 > (0));
var state_28899__$1 = state_28899;
if(cljs.core.truth_(inst_28885)){
var statearr_28909_28940 = state_28899__$1;
(statearr_28909_28940[(1)] = (12));

} else {
var statearr_28910_28941 = state_28899__$1;
(statearr_28910_28941[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (3))){
var inst_28897 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28899__$1,inst_28897);
} else {
if((state_val_28900 === (12))){
var inst_28863 = (state_28899[(8)]);
var inst_28887 = cljs.core.vec.call(null,inst_28863);
var state_28899__$1 = state_28899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28899__$1,(15),out,inst_28887);
} else {
if((state_val_28900 === (2))){
var state_28899__$1 = state_28899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28899__$1,(4),ch);
} else {
if((state_val_28900 === (11))){
var inst_28879 = (state_28899[(2)]);
var inst_28880 = (new Array(n));
var inst_28863 = inst_28880;
var inst_28864 = (0);
var state_28899__$1 = (function (){var statearr_28911 = state_28899;
(statearr_28911[(7)] = inst_28864);

(statearr_28911[(8)] = inst_28863);

(statearr_28911[(10)] = inst_28879);

return statearr_28911;
})();
var statearr_28912_28942 = state_28899__$1;
(statearr_28912_28942[(2)] = null);

(statearr_28912_28942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (9))){
var inst_28863 = (state_28899[(8)]);
var inst_28877 = cljs.core.vec.call(null,inst_28863);
var state_28899__$1 = state_28899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28899__$1,(11),out,inst_28877);
} else {
if((state_val_28900 === (5))){
var inst_28867 = (state_28899[(9)]);
var inst_28864 = (state_28899[(7)]);
var inst_28863 = (state_28899[(8)]);
var inst_28872 = (state_28899[(11)]);
var inst_28871 = (inst_28863[inst_28864] = inst_28867);
var inst_28872__$1 = (inst_28864 + (1));
var inst_28873 = (inst_28872__$1 < n);
var state_28899__$1 = (function (){var statearr_28913 = state_28899;
(statearr_28913[(11)] = inst_28872__$1);

(statearr_28913[(12)] = inst_28871);

return statearr_28913;
})();
if(cljs.core.truth_(inst_28873)){
var statearr_28914_28943 = state_28899__$1;
(statearr_28914_28943[(1)] = (8));

} else {
var statearr_28915_28944 = state_28899__$1;
(statearr_28915_28944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (14))){
var inst_28892 = (state_28899[(2)]);
var inst_28893 = cljs.core.async.close_BANG_.call(null,out);
var state_28899__$1 = (function (){var statearr_28917 = state_28899;
(statearr_28917[(13)] = inst_28892);

return statearr_28917;
})();
var statearr_28918_28945 = state_28899__$1;
(statearr_28918_28945[(2)] = inst_28893);

(statearr_28918_28945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (10))){
var inst_28883 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
var statearr_28919_28946 = state_28899__$1;
(statearr_28919_28946[(2)] = inst_28883);

(statearr_28919_28946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (8))){
var inst_28863 = (state_28899[(8)]);
var inst_28872 = (state_28899[(11)]);
var tmp28916 = inst_28863;
var inst_28863__$1 = tmp28916;
var inst_28864 = inst_28872;
var state_28899__$1 = (function (){var statearr_28920 = state_28899;
(statearr_28920[(7)] = inst_28864);

(statearr_28920[(8)] = inst_28863__$1);

return statearr_28920;
})();
var statearr_28921_28947 = state_28899__$1;
(statearr_28921_28947[(2)] = null);

(statearr_28921_28947[(1)] = (2));


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
});})(c__20519__auto___28933,out))
;
return ((function (switch__20498__auto__,c__20519__auto___28933,out){
return (function() {
var cljs$core$async$state_machine__20499__auto__ = null;
var cljs$core$async$state_machine__20499__auto____0 = (function (){
var statearr_28925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28925[(0)] = cljs$core$async$state_machine__20499__auto__);

(statearr_28925[(1)] = (1));

return statearr_28925;
});
var cljs$core$async$state_machine__20499__auto____1 = (function (state_28899){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_28899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e28926){if((e28926 instanceof Object)){
var ex__20502__auto__ = e28926;
var statearr_28927_28948 = state_28899;
(statearr_28927_28948[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28949 = state_28899;
state_28899 = G__28949;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
cljs$core$async$state_machine__20499__auto__ = function(state_28899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20499__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20499__auto____1.call(this,state_28899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20499__auto____0;
cljs$core$async$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20499__auto____1;
return cljs$core$async$state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto___28933,out))
})();
var state__20521__auto__ = (function (){var statearr_28928 = f__20520__auto__.call(null);
(statearr_28928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto___28933);

return statearr_28928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto___28933,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28950 = [];
var len__19539__auto___29024 = arguments.length;
var i__19540__auto___29025 = (0);
while(true){
if((i__19540__auto___29025 < len__19539__auto___29024)){
args28950.push((arguments[i__19540__auto___29025]));

var G__29026 = (i__19540__auto___29025 + (1));
i__19540__auto___29025 = G__29026;
continue;
} else {
}
break;
}

var G__28952 = args28950.length;
switch (G__28952) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28950.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20519__auto___29028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto___29028,out){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto___29028,out){
return (function (state_28994){
var state_val_28995 = (state_28994[(1)]);
if((state_val_28995 === (7))){
var inst_28990 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
var statearr_28996_29029 = state_28994__$1;
(statearr_28996_29029[(2)] = inst_28990);

(statearr_28996_29029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (1))){
var inst_28953 = [];
var inst_28954 = inst_28953;
var inst_28955 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28994__$1 = (function (){var statearr_28997 = state_28994;
(statearr_28997[(7)] = inst_28955);

(statearr_28997[(8)] = inst_28954);

return statearr_28997;
})();
var statearr_28998_29030 = state_28994__$1;
(statearr_28998_29030[(2)] = null);

(statearr_28998_29030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (4))){
var inst_28958 = (state_28994[(9)]);
var inst_28958__$1 = (state_28994[(2)]);
var inst_28959 = (inst_28958__$1 == null);
var inst_28960 = cljs.core.not.call(null,inst_28959);
var state_28994__$1 = (function (){var statearr_28999 = state_28994;
(statearr_28999[(9)] = inst_28958__$1);

return statearr_28999;
})();
if(inst_28960){
var statearr_29000_29031 = state_28994__$1;
(statearr_29000_29031[(1)] = (5));

} else {
var statearr_29001_29032 = state_28994__$1;
(statearr_29001_29032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (15))){
var inst_28984 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
var statearr_29002_29033 = state_28994__$1;
(statearr_29002_29033[(2)] = inst_28984);

(statearr_29002_29033[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (13))){
var state_28994__$1 = state_28994;
var statearr_29003_29034 = state_28994__$1;
(statearr_29003_29034[(2)] = null);

(statearr_29003_29034[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (6))){
var inst_28954 = (state_28994[(8)]);
var inst_28979 = inst_28954.length;
var inst_28980 = (inst_28979 > (0));
var state_28994__$1 = state_28994;
if(cljs.core.truth_(inst_28980)){
var statearr_29004_29035 = state_28994__$1;
(statearr_29004_29035[(1)] = (12));

} else {
var statearr_29005_29036 = state_28994__$1;
(statearr_29005_29036[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (3))){
var inst_28992 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28994__$1,inst_28992);
} else {
if((state_val_28995 === (12))){
var inst_28954 = (state_28994[(8)]);
var inst_28982 = cljs.core.vec.call(null,inst_28954);
var state_28994__$1 = state_28994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28994__$1,(15),out,inst_28982);
} else {
if((state_val_28995 === (2))){
var state_28994__$1 = state_28994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28994__$1,(4),ch);
} else {
if((state_val_28995 === (11))){
var inst_28958 = (state_28994[(9)]);
var inst_28962 = (state_28994[(10)]);
var inst_28972 = (state_28994[(2)]);
var inst_28973 = [];
var inst_28974 = inst_28973.push(inst_28958);
var inst_28954 = inst_28973;
var inst_28955 = inst_28962;
var state_28994__$1 = (function (){var statearr_29006 = state_28994;
(statearr_29006[(7)] = inst_28955);

(statearr_29006[(11)] = inst_28974);

(statearr_29006[(12)] = inst_28972);

(statearr_29006[(8)] = inst_28954);

return statearr_29006;
})();
var statearr_29007_29037 = state_28994__$1;
(statearr_29007_29037[(2)] = null);

(statearr_29007_29037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (9))){
var inst_28954 = (state_28994[(8)]);
var inst_28970 = cljs.core.vec.call(null,inst_28954);
var state_28994__$1 = state_28994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28994__$1,(11),out,inst_28970);
} else {
if((state_val_28995 === (5))){
var inst_28955 = (state_28994[(7)]);
var inst_28958 = (state_28994[(9)]);
var inst_28962 = (state_28994[(10)]);
var inst_28962__$1 = f.call(null,inst_28958);
var inst_28963 = cljs.core._EQ_.call(null,inst_28962__$1,inst_28955);
var inst_28964 = cljs.core.keyword_identical_QMARK_.call(null,inst_28955,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28965 = (inst_28963) || (inst_28964);
var state_28994__$1 = (function (){var statearr_29008 = state_28994;
(statearr_29008[(10)] = inst_28962__$1);

return statearr_29008;
})();
if(cljs.core.truth_(inst_28965)){
var statearr_29009_29038 = state_28994__$1;
(statearr_29009_29038[(1)] = (8));

} else {
var statearr_29010_29039 = state_28994__$1;
(statearr_29010_29039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (14))){
var inst_28987 = (state_28994[(2)]);
var inst_28988 = cljs.core.async.close_BANG_.call(null,out);
var state_28994__$1 = (function (){var statearr_29012 = state_28994;
(statearr_29012[(13)] = inst_28987);

return statearr_29012;
})();
var statearr_29013_29040 = state_28994__$1;
(statearr_29013_29040[(2)] = inst_28988);

(statearr_29013_29040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (10))){
var inst_28977 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
var statearr_29014_29041 = state_28994__$1;
(statearr_29014_29041[(2)] = inst_28977);

(statearr_29014_29041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (8))){
var inst_28958 = (state_28994[(9)]);
var inst_28954 = (state_28994[(8)]);
var inst_28962 = (state_28994[(10)]);
var inst_28967 = inst_28954.push(inst_28958);
var tmp29011 = inst_28954;
var inst_28954__$1 = tmp29011;
var inst_28955 = inst_28962;
var state_28994__$1 = (function (){var statearr_29015 = state_28994;
(statearr_29015[(7)] = inst_28955);

(statearr_29015[(14)] = inst_28967);

(statearr_29015[(8)] = inst_28954__$1);

return statearr_29015;
})();
var statearr_29016_29042 = state_28994__$1;
(statearr_29016_29042[(2)] = null);

(statearr_29016_29042[(1)] = (2));


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
});})(c__20519__auto___29028,out))
;
return ((function (switch__20498__auto__,c__20519__auto___29028,out){
return (function() {
var cljs$core$async$state_machine__20499__auto__ = null;
var cljs$core$async$state_machine__20499__auto____0 = (function (){
var statearr_29020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29020[(0)] = cljs$core$async$state_machine__20499__auto__);

(statearr_29020[(1)] = (1));

return statearr_29020;
});
var cljs$core$async$state_machine__20499__auto____1 = (function (state_28994){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_28994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e29021){if((e29021 instanceof Object)){
var ex__20502__auto__ = e29021;
var statearr_29022_29043 = state_28994;
(statearr_29022_29043[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29044 = state_28994;
state_28994 = G__29044;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
cljs$core$async$state_machine__20499__auto__ = function(state_28994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20499__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20499__auto____1.call(this,state_28994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20499__auto____0;
cljs$core$async$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20499__auto____1;
return cljs$core$async$state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto___29028,out))
})();
var state__20521__auto__ = (function (){var statearr_29023 = f__20520__auto__.call(null);
(statearr_29023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto___29028);

return statearr_29023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto___29028,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map