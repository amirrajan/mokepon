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
var args31013 = [];
var len__29087__auto___31019 = arguments.length;
var i__29088__auto___31020 = (0);
while(true){
if((i__29088__auto___31020 < len__29087__auto___31019)){
args31013.push((arguments[i__29088__auto___31020]));

var G__31021 = (i__29088__auto___31020 + (1));
i__29088__auto___31020 = G__31021;
continue;
} else {
}
break;
}

var G__31015 = args31013.length;
switch (G__31015) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31013.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31016 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31016 = (function (f,blockable,meta31017){
this.f = f;
this.blockable = blockable;
this.meta31017 = meta31017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31018,meta31017__$1){
var self__ = this;
var _31018__$1 = this;
return (new cljs.core.async.t_cljs$core$async31016(self__.f,self__.blockable,meta31017__$1));
});

cljs.core.async.t_cljs$core$async31016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31018){
var self__ = this;
var _31018__$1 = this;
return self__.meta31017;
});

cljs.core.async.t_cljs$core$async31016.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31016.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31016.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31016.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31016.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31017","meta31017",1568317854,null)], null);
});

cljs.core.async.t_cljs$core$async31016.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31016";

cljs.core.async.t_cljs$core$async31016.cljs$lang$ctorPrWriter = (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cljs.core.async/t_cljs$core$async31016");
});

cljs.core.async.__GT_t_cljs$core$async31016 = (function cljs$core$async$__GT_t_cljs$core$async31016(f__$1,blockable__$1,meta31017){
return (new cljs.core.async.t_cljs$core$async31016(f__$1,blockable__$1,meta31017));
});

}

return (new cljs.core.async.t_cljs$core$async31016(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args31025 = [];
var len__29087__auto___31028 = arguments.length;
var i__29088__auto___31029 = (0);
while(true){
if((i__29088__auto___31029 < len__29087__auto___31028)){
args31025.push((arguments[i__29088__auto___31029]));

var G__31030 = (i__29088__auto___31029 + (1));
i__29088__auto___31029 = G__31030;
continue;
} else {
}
break;
}

var G__31027 = args31025.length;
switch (G__31027) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31025.length)].join('')));

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
var args31032 = [];
var len__29087__auto___31035 = arguments.length;
var i__29088__auto___31036 = (0);
while(true){
if((i__29088__auto___31036 < len__29087__auto___31035)){
args31032.push((arguments[i__29088__auto___31036]));

var G__31037 = (i__29088__auto___31036 + (1));
i__29088__auto___31036 = G__31037;
continue;
} else {
}
break;
}

var G__31034 = args31032.length;
switch (G__31034) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31032.length)].join('')));

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
var args31039 = [];
var len__29087__auto___31042 = arguments.length;
var i__29088__auto___31043 = (0);
while(true){
if((i__29088__auto___31043 < len__29087__auto___31042)){
args31039.push((arguments[i__29088__auto___31043]));

var G__31044 = (i__29088__auto___31043 + (1));
i__29088__auto___31043 = G__31044;
continue;
} else {
}
break;
}

var G__31041 = args31039.length;
switch (G__31041) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31039.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31046 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31046);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31046,ret){
return (function (){
return fn1.call(null,val_31046);
});})(val_31046,ret))
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
var args31047 = [];
var len__29087__auto___31050 = arguments.length;
var i__29088__auto___31051 = (0);
while(true){
if((i__29088__auto___31051 < len__29087__auto___31050)){
args31047.push((arguments[i__29088__auto___31051]));

var G__31052 = (i__29088__auto___31051 + (1));
i__29088__auto___31051 = G__31052;
continue;
} else {
}
break;
}

var G__31049 = args31047.length;
switch (G__31049) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31047.length)].join('')));

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
var n__28927__auto___31054 = n;
var x_31055 = (0);
while(true){
if((x_31055 < n__28927__auto___31054)){
(a[x_31055] = (0));

var G__31056 = (x_31055 + (1));
x_31055 = G__31056;
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

var G__31057 = (i + (1));
i = G__31057;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31061 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31061 = (function (alt_flag,flag,meta31062){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta31062 = meta31062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31063,meta31062__$1){
var self__ = this;
var _31063__$1 = this;
return (new cljs.core.async.t_cljs$core$async31061(self__.alt_flag,self__.flag,meta31062__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31063){
var self__ = this;
var _31063__$1 = this;
return self__.meta31062;
});})(flag))
;

cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31061.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31062","meta31062",-792931562,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31061";

cljs.core.async.t_cljs$core$async31061.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cljs.core.async/t_cljs$core$async31061");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31061 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31061(alt_flag__$1,flag__$1,meta31062){
return (new cljs.core.async.t_cljs$core$async31061(alt_flag__$1,flag__$1,meta31062));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31061(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31067 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31067 = (function (alt_handler,flag,cb,meta31068){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta31068 = meta31068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31069,meta31068__$1){
var self__ = this;
var _31069__$1 = this;
return (new cljs.core.async.t_cljs$core$async31067(self__.alt_handler,self__.flag,self__.cb,meta31068__$1));
});

cljs.core.async.t_cljs$core$async31067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31069){
var self__ = this;
var _31069__$1 = this;
return self__.meta31068;
});

cljs.core.async.t_cljs$core$async31067.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31067.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31067.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31067.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31068","meta31068",-796904386,null)], null);
});

cljs.core.async.t_cljs$core$async31067.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31067";

cljs.core.async.t_cljs$core$async31067.cljs$lang$ctorPrWriter = (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cljs.core.async/t_cljs$core$async31067");
});

cljs.core.async.__GT_t_cljs$core$async31067 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31067(alt_handler__$1,flag__$1,cb__$1,meta31068){
return (new cljs.core.async.t_cljs$core$async31067(alt_handler__$1,flag__$1,cb__$1,meta31068));
});

}

return (new cljs.core.async.t_cljs$core$async31067(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31070_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31070_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31071_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31071_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28012__auto__ = wport;
if(cljs.core.truth_(or__28012__auto__)){
return or__28012__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31072 = (i + (1));
i = G__31072;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28012__auto__ = ret;
if(cljs.core.truth_(or__28012__auto__)){
return or__28012__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28000__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28000__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28000__auto__;
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
var args__29094__auto__ = [];
var len__29087__auto___31078 = arguments.length;
var i__29088__auto___31079 = (0);
while(true){
if((i__29088__auto___31079 < len__29087__auto___31078)){
args__29094__auto__.push((arguments[i__29088__auto___31079]));

var G__31080 = (i__29088__auto___31079 + (1));
i__29088__auto___31079 = G__31080;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((1) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29095__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31075){
var map__31076 = p__31075;
var map__31076__$1 = ((((!((map__31076 == null)))?((((map__31076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31076):map__31076);
var opts = map__31076__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31073){
var G__31074 = cljs.core.first.call(null,seq31073);
var seq31073__$1 = cljs.core.next.call(null,seq31073);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31074,seq31073__$1);
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
var args31081 = [];
var len__29087__auto___31131 = arguments.length;
var i__29088__auto___31132 = (0);
while(true){
if((i__29088__auto___31132 < len__29087__auto___31131)){
args31081.push((arguments[i__29088__auto___31132]));

var G__31133 = (i__29088__auto___31132 + (1));
i__29088__auto___31132 = G__31133;
continue;
} else {
}
break;
}

var G__31083 = args31081.length;
switch (G__31083) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31081.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30473__auto___31135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30473__auto___31135){
return (function (){
var f__30474__auto__ = (function (){var switch__30452__auto__ = ((function (c__30473__auto___31135){
return (function (state_31107){
var state_val_31108 = (state_31107[(1)]);
if((state_val_31108 === (7))){
var inst_31103 = (state_31107[(2)]);
var state_31107__$1 = state_31107;
var statearr_31109_31136 = state_31107__$1;
(statearr_31109_31136[(2)] = inst_31103);

(statearr_31109_31136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (1))){
var state_31107__$1 = state_31107;
var statearr_31110_31137 = state_31107__$1;
(statearr_31110_31137[(2)] = null);

(statearr_31110_31137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (4))){
var inst_31086 = (state_31107[(7)]);
var inst_31086__$1 = (state_31107[(2)]);
var inst_31087 = (inst_31086__$1 == null);
var state_31107__$1 = (function (){var statearr_31111 = state_31107;
(statearr_31111[(7)] = inst_31086__$1);

return statearr_31111;
})();
if(cljs.core.truth_(inst_31087)){
var statearr_31112_31138 = state_31107__$1;
(statearr_31112_31138[(1)] = (5));

} else {
var statearr_31113_31139 = state_31107__$1;
(statearr_31113_31139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (13))){
var state_31107__$1 = state_31107;
var statearr_31114_31140 = state_31107__$1;
(statearr_31114_31140[(2)] = null);

(statearr_31114_31140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (6))){
var inst_31086 = (state_31107[(7)]);
var state_31107__$1 = state_31107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31107__$1,(11),to,inst_31086);
} else {
if((state_val_31108 === (3))){
var inst_31105 = (state_31107[(2)]);
var state_31107__$1 = state_31107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31107__$1,inst_31105);
} else {
if((state_val_31108 === (12))){
var state_31107__$1 = state_31107;
var statearr_31115_31141 = state_31107__$1;
(statearr_31115_31141[(2)] = null);

(statearr_31115_31141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (2))){
var state_31107__$1 = state_31107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31107__$1,(4),from);
} else {
if((state_val_31108 === (11))){
var inst_31096 = (state_31107[(2)]);
var state_31107__$1 = state_31107;
if(cljs.core.truth_(inst_31096)){
var statearr_31116_31142 = state_31107__$1;
(statearr_31116_31142[(1)] = (12));

} else {
var statearr_31117_31143 = state_31107__$1;
(statearr_31117_31143[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (9))){
var state_31107__$1 = state_31107;
var statearr_31118_31144 = state_31107__$1;
(statearr_31118_31144[(2)] = null);

(statearr_31118_31144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (5))){
var state_31107__$1 = state_31107;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31119_31145 = state_31107__$1;
(statearr_31119_31145[(1)] = (8));

} else {
var statearr_31120_31146 = state_31107__$1;
(statearr_31120_31146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (14))){
var inst_31101 = (state_31107[(2)]);
var state_31107__$1 = state_31107;
var statearr_31121_31147 = state_31107__$1;
(statearr_31121_31147[(2)] = inst_31101);

(statearr_31121_31147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (10))){
var inst_31093 = (state_31107[(2)]);
var state_31107__$1 = state_31107;
var statearr_31122_31148 = state_31107__$1;
(statearr_31122_31148[(2)] = inst_31093);

(statearr_31122_31148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31108 === (8))){
var inst_31090 = cljs.core.async.close_BANG_.call(null,to);
var state_31107__$1 = state_31107;
var statearr_31123_31149 = state_31107__$1;
(statearr_31123_31149[(2)] = inst_31090);

(statearr_31123_31149[(1)] = (10));


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
});})(c__30473__auto___31135))
;
return ((function (switch__30452__auto__,c__30473__auto___31135){
return (function() {
var cljs$core$async$state_machine__30453__auto__ = null;
var cljs$core$async$state_machine__30453__auto____0 = (function (){
var statearr_31127 = [null,null,null,null,null,null,null,null];
(statearr_31127[(0)] = cljs$core$async$state_machine__30453__auto__);

(statearr_31127[(1)] = (1));

return statearr_31127;
});
var cljs$core$async$state_machine__30453__auto____1 = (function (state_31107){
while(true){
var ret_value__30454__auto__ = (function (){try{while(true){
var result__30455__auto__ = switch__30452__auto__.call(null,state_31107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30455__auto__;
}
break;
}
}catch (e31128){if((e31128 instanceof Object)){
var ex__30456__auto__ = e31128;
var statearr_31129_31150 = state_31107;
(statearr_31129_31150[(5)] = ex__30456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31151 = state_31107;
state_31107 = G__31151;
continue;
} else {
return ret_value__30454__auto__;
}
break;
}
});
cljs$core$async$state_machine__30453__auto__ = function(state_31107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30453__auto____1.call(this,state_31107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30453__auto____0;
cljs$core$async$state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30453__auto____1;
return cljs$core$async$state_machine__30453__auto__;
})()
;})(switch__30452__auto__,c__30473__auto___31135))
})();
var state__30475__auto__ = (function (){var statearr_31130 = f__30474__auto__.call(null);
(statearr_31130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30473__auto___31135);

return statearr_31130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30475__auto__);
});})(c__30473__auto___31135))
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
return (function (p__31339){
var vec__31340 = p__31339;
var v = cljs.core.nth.call(null,vec__31340,(0),null);
var p = cljs.core.nth.call(null,vec__31340,(1),null);
var job = vec__31340;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30473__auto___31526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30473__auto___31526,res,vec__31340,v,p,job,jobs,results){
return (function (){
var f__30474__auto__ = (function (){var switch__30452__auto__ = ((function (c__30473__auto___31526,res,vec__31340,v,p,job,jobs,results){
return (function (state_31347){
var state_val_31348 = (state_31347[(1)]);
if((state_val_31348 === (1))){
var state_31347__$1 = state_31347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31347__$1,(2),res,v);
} else {
if((state_val_31348 === (2))){
var inst_31344 = (state_31347[(2)]);
var inst_31345 = cljs.core.async.close_BANG_.call(null,res);
var state_31347__$1 = (function (){var statearr_31349 = state_31347;
(statearr_31349[(7)] = inst_31344);

return statearr_31349;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31347__$1,inst_31345);
} else {
return null;
}
}
});})(c__30473__auto___31526,res,vec__31340,v,p,job,jobs,results))
;
return ((function (switch__30452__auto__,c__30473__auto___31526,res,vec__31340,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____0 = (function (){
var statearr_31353 = [null,null,null,null,null,null,null,null];
(statearr_31353[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__);

(statearr_31353[(1)] = (1));

return statearr_31353;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____1 = (function (state_31347){
while(true){
var ret_value__30454__auto__ = (function (){try{while(true){
var result__30455__auto__ = switch__30452__auto__.call(null,state_31347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30455__auto__;
}
break;
}
}catch (e31354){if((e31354 instanceof Object)){
var ex__30456__auto__ = e31354;
var statearr_31355_31527 = state_31347;
(statearr_31355_31527[(5)] = ex__30456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31528 = state_31347;
state_31347 = G__31528;
continue;
} else {
return ret_value__30454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__ = function(state_31347){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____1.call(this,state_31347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__;
})()
;})(switch__30452__auto__,c__30473__auto___31526,res,vec__31340,v,p,job,jobs,results))
})();
var state__30475__auto__ = (function (){var statearr_31356 = f__30474__auto__.call(null);
(statearr_31356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30473__auto___31526);

return statearr_31356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30475__auto__);
});})(c__30473__auto___31526,res,vec__31340,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31357){
var vec__31358 = p__31357;
var v = cljs.core.nth.call(null,vec__31358,(0),null);
var p = cljs.core.nth.call(null,vec__31358,(1),null);
var job = vec__31358;
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
var n__28927__auto___31529 = n;
var __31530 = (0);
while(true){
if((__31530 < n__28927__auto___31529)){
var G__31361_31531 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31361_31531) {
case "compute":
var c__30473__auto___31533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31530,c__30473__auto___31533,G__31361_31531,n__28927__auto___31529,jobs,results,process,async){
return (function (){
var f__30474__auto__ = (function (){var switch__30452__auto__ = ((function (__31530,c__30473__auto___31533,G__31361_31531,n__28927__auto___31529,jobs,results,process,async){
return (function (state_31374){
var state_val_31375 = (state_31374[(1)]);
if((state_val_31375 === (1))){
var state_31374__$1 = state_31374;
var statearr_31376_31534 = state_31374__$1;
(statearr_31376_31534[(2)] = null);

(statearr_31376_31534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31375 === (2))){
var state_31374__$1 = state_31374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31374__$1,(4),jobs);
} else {
if((state_val_31375 === (3))){
var inst_31372 = (state_31374[(2)]);
var state_31374__$1 = state_31374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31374__$1,inst_31372);
} else {
if((state_val_31375 === (4))){
var inst_31364 = (state_31374[(2)]);
var inst_31365 = process.call(null,inst_31364);
var state_31374__$1 = state_31374;
if(cljs.core.truth_(inst_31365)){
var statearr_31377_31535 = state_31374__$1;
(statearr_31377_31535[(1)] = (5));

} else {
var statearr_31378_31536 = state_31374__$1;
(statearr_31378_31536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31375 === (5))){
var state_31374__$1 = state_31374;
var statearr_31379_31537 = state_31374__$1;
(statearr_31379_31537[(2)] = null);

(statearr_31379_31537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31375 === (6))){
var state_31374__$1 = state_31374;
var statearr_31380_31538 = state_31374__$1;
(statearr_31380_31538[(2)] = null);

(statearr_31380_31538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31375 === (7))){
var inst_31370 = (state_31374[(2)]);
var state_31374__$1 = state_31374;
var statearr_31381_31539 = state_31374__$1;
(statearr_31381_31539[(2)] = inst_31370);

(statearr_31381_31539[(1)] = (3));


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
});})(__31530,c__30473__auto___31533,G__31361_31531,n__28927__auto___31529,jobs,results,process,async))
;
return ((function (__31530,switch__30452__auto__,c__30473__auto___31533,G__31361_31531,n__28927__auto___31529,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____0 = (function (){
var statearr_31385 = [null,null,null,null,null,null,null];
(statearr_31385[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__);

(statearr_31385[(1)] = (1));

return statearr_31385;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____1 = (function (state_31374){
while(true){
var ret_value__30454__auto__ = (function (){try{while(true){
var result__30455__auto__ = switch__30452__auto__.call(null,state_31374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30455__auto__;
}
break;
}
}catch (e31386){if((e31386 instanceof Object)){
var ex__30456__auto__ = e31386;
var statearr_31387_31540 = state_31374;
(statearr_31387_31540[(5)] = ex__30456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31541 = state_31374;
state_31374 = G__31541;
continue;
} else {
return ret_value__30454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__ = function(state_31374){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____1.call(this,state_31374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__;
})()
;})(__31530,switch__30452__auto__,c__30473__auto___31533,G__31361_31531,n__28927__auto___31529,jobs,results,process,async))
})();
var state__30475__auto__ = (function (){var statearr_31388 = f__30474__auto__.call(null);
(statearr_31388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30473__auto___31533);

return statearr_31388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30475__auto__);
});})(__31530,c__30473__auto___31533,G__31361_31531,n__28927__auto___31529,jobs,results,process,async))
);


break;
case "async":
var c__30473__auto___31542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31530,c__30473__auto___31542,G__31361_31531,n__28927__auto___31529,jobs,results,process,async){
return (function (){
var f__30474__auto__ = (function (){var switch__30452__auto__ = ((function (__31530,c__30473__auto___31542,G__31361_31531,n__28927__auto___31529,jobs,results,process,async){
return (function (state_31401){
var state_val_31402 = (state_31401[(1)]);
if((state_val_31402 === (1))){
var state_31401__$1 = state_31401;
var statearr_31403_31543 = state_31401__$1;
(statearr_31403_31543[(2)] = null);

(statearr_31403_31543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31402 === (2))){
var state_31401__$1 = state_31401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31401__$1,(4),jobs);
} else {
if((state_val_31402 === (3))){
var inst_31399 = (state_31401[(2)]);
var state_31401__$1 = state_31401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31401__$1,inst_31399);
} else {
if((state_val_31402 === (4))){
var inst_31391 = (state_31401[(2)]);
var inst_31392 = async.call(null,inst_31391);
var state_31401__$1 = state_31401;
if(cljs.core.truth_(inst_31392)){
var statearr_31404_31544 = state_31401__$1;
(statearr_31404_31544[(1)] = (5));

} else {
var statearr_31405_31545 = state_31401__$1;
(statearr_31405_31545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31402 === (5))){
var state_31401__$1 = state_31401;
var statearr_31406_31546 = state_31401__$1;
(statearr_31406_31546[(2)] = null);

(statearr_31406_31546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31402 === (6))){
var state_31401__$1 = state_31401;
var statearr_31407_31547 = state_31401__$1;
(statearr_31407_31547[(2)] = null);

(statearr_31407_31547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31402 === (7))){
var inst_31397 = (state_31401[(2)]);
var state_31401__$1 = state_31401;
var statearr_31408_31548 = state_31401__$1;
(statearr_31408_31548[(2)] = inst_31397);

(statearr_31408_31548[(1)] = (3));


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
});})(__31530,c__30473__auto___31542,G__31361_31531,n__28927__auto___31529,jobs,results,process,async))
;
return ((function (__31530,switch__30452__auto__,c__30473__auto___31542,G__31361_31531,n__28927__auto___31529,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____0 = (function (){
var statearr_31412 = [null,null,null,null,null,null,null];
(statearr_31412[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__);

(statearr_31412[(1)] = (1));

return statearr_31412;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____1 = (function (state_31401){
while(true){
var ret_value__30454__auto__ = (function (){try{while(true){
var result__30455__auto__ = switch__30452__auto__.call(null,state_31401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30455__auto__;
}
break;
}
}catch (e31413){if((e31413 instanceof Object)){
var ex__30456__auto__ = e31413;
var statearr_31414_31549 = state_31401;
(statearr_31414_31549[(5)] = ex__30456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31550 = state_31401;
state_31401 = G__31550;
continue;
} else {
return ret_value__30454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__ = function(state_31401){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____1.call(this,state_31401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__;
})()
;})(__31530,switch__30452__auto__,c__30473__auto___31542,G__31361_31531,n__28927__auto___31529,jobs,results,process,async))
})();
var state__30475__auto__ = (function (){var statearr_31415 = f__30474__auto__.call(null);
(statearr_31415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30473__auto___31542);

return statearr_31415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30475__auto__);
});})(__31530,c__30473__auto___31542,G__31361_31531,n__28927__auto___31529,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31551 = (__31530 + (1));
__31530 = G__31551;
continue;
} else {
}
break;
}

var c__30473__auto___31552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30473__auto___31552,jobs,results,process,async){
return (function (){
var f__30474__auto__ = (function (){var switch__30452__auto__ = ((function (c__30473__auto___31552,jobs,results,process,async){
return (function (state_31437){
var state_val_31438 = (state_31437[(1)]);
if((state_val_31438 === (1))){
var state_31437__$1 = state_31437;
var statearr_31439_31553 = state_31437__$1;
(statearr_31439_31553[(2)] = null);

(statearr_31439_31553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31438 === (2))){
var state_31437__$1 = state_31437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31437__$1,(4),from);
} else {
if((state_val_31438 === (3))){
var inst_31435 = (state_31437[(2)]);
var state_31437__$1 = state_31437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31437__$1,inst_31435);
} else {
if((state_val_31438 === (4))){
var inst_31418 = (state_31437[(7)]);
var inst_31418__$1 = (state_31437[(2)]);
var inst_31419 = (inst_31418__$1 == null);
var state_31437__$1 = (function (){var statearr_31440 = state_31437;
(statearr_31440[(7)] = inst_31418__$1);

return statearr_31440;
})();
if(cljs.core.truth_(inst_31419)){
var statearr_31441_31554 = state_31437__$1;
(statearr_31441_31554[(1)] = (5));

} else {
var statearr_31442_31555 = state_31437__$1;
(statearr_31442_31555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31438 === (5))){
var inst_31421 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31437__$1 = state_31437;
var statearr_31443_31556 = state_31437__$1;
(statearr_31443_31556[(2)] = inst_31421);

(statearr_31443_31556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31438 === (6))){
var inst_31418 = (state_31437[(7)]);
var inst_31423 = (state_31437[(8)]);
var inst_31423__$1 = cljs.core.async.chan.call(null,(1));
var inst_31424 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31425 = [inst_31418,inst_31423__$1];
var inst_31426 = (new cljs.core.PersistentVector(null,2,(5),inst_31424,inst_31425,null));
var state_31437__$1 = (function (){var statearr_31444 = state_31437;
(statearr_31444[(8)] = inst_31423__$1);

return statearr_31444;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31437__$1,(8),jobs,inst_31426);
} else {
if((state_val_31438 === (7))){
var inst_31433 = (state_31437[(2)]);
var state_31437__$1 = state_31437;
var statearr_31445_31557 = state_31437__$1;
(statearr_31445_31557[(2)] = inst_31433);

(statearr_31445_31557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31438 === (8))){
var inst_31423 = (state_31437[(8)]);
var inst_31428 = (state_31437[(2)]);
var state_31437__$1 = (function (){var statearr_31446 = state_31437;
(statearr_31446[(9)] = inst_31428);

return statearr_31446;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31437__$1,(9),results,inst_31423);
} else {
if((state_val_31438 === (9))){
var inst_31430 = (state_31437[(2)]);
var state_31437__$1 = (function (){var statearr_31447 = state_31437;
(statearr_31447[(10)] = inst_31430);

return statearr_31447;
})();
var statearr_31448_31558 = state_31437__$1;
(statearr_31448_31558[(2)] = null);

(statearr_31448_31558[(1)] = (2));


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
});})(c__30473__auto___31552,jobs,results,process,async))
;
return ((function (switch__30452__auto__,c__30473__auto___31552,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____0 = (function (){
var statearr_31452 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31452[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__);

(statearr_31452[(1)] = (1));

return statearr_31452;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____1 = (function (state_31437){
while(true){
var ret_value__30454__auto__ = (function (){try{while(true){
var result__30455__auto__ = switch__30452__auto__.call(null,state_31437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30455__auto__;
}
break;
}
}catch (e31453){if((e31453 instanceof Object)){
var ex__30456__auto__ = e31453;
var statearr_31454_31559 = state_31437;
(statearr_31454_31559[(5)] = ex__30456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31560 = state_31437;
state_31437 = G__31560;
continue;
} else {
return ret_value__30454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__ = function(state_31437){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____1.call(this,state_31437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__;
})()
;})(switch__30452__auto__,c__30473__auto___31552,jobs,results,process,async))
})();
var state__30475__auto__ = (function (){var statearr_31455 = f__30474__auto__.call(null);
(statearr_31455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30473__auto___31552);

return statearr_31455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30475__auto__);
});})(c__30473__auto___31552,jobs,results,process,async))
);


var c__30473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30473__auto__,jobs,results,process,async){
return (function (){
var f__30474__auto__ = (function (){var switch__30452__auto__ = ((function (c__30473__auto__,jobs,results,process,async){
return (function (state_31493){
var state_val_31494 = (state_31493[(1)]);
if((state_val_31494 === (7))){
var inst_31489 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
var statearr_31495_31561 = state_31493__$1;
(statearr_31495_31561[(2)] = inst_31489);

(statearr_31495_31561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (20))){
var state_31493__$1 = state_31493;
var statearr_31496_31562 = state_31493__$1;
(statearr_31496_31562[(2)] = null);

(statearr_31496_31562[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (1))){
var state_31493__$1 = state_31493;
var statearr_31497_31563 = state_31493__$1;
(statearr_31497_31563[(2)] = null);

(statearr_31497_31563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (4))){
var inst_31458 = (state_31493[(7)]);
var inst_31458__$1 = (state_31493[(2)]);
var inst_31459 = (inst_31458__$1 == null);
var state_31493__$1 = (function (){var statearr_31498 = state_31493;
(statearr_31498[(7)] = inst_31458__$1);

return statearr_31498;
})();
if(cljs.core.truth_(inst_31459)){
var statearr_31499_31564 = state_31493__$1;
(statearr_31499_31564[(1)] = (5));

} else {
var statearr_31500_31565 = state_31493__$1;
(statearr_31500_31565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (15))){
var inst_31471 = (state_31493[(8)]);
var state_31493__$1 = state_31493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31493__$1,(18),to,inst_31471);
} else {
if((state_val_31494 === (21))){
var inst_31484 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
var statearr_31501_31566 = state_31493__$1;
(statearr_31501_31566[(2)] = inst_31484);

(statearr_31501_31566[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (13))){
var inst_31486 = (state_31493[(2)]);
var state_31493__$1 = (function (){var statearr_31502 = state_31493;
(statearr_31502[(9)] = inst_31486);

return statearr_31502;
})();
var statearr_31503_31567 = state_31493__$1;
(statearr_31503_31567[(2)] = null);

(statearr_31503_31567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (6))){
var inst_31458 = (state_31493[(7)]);
var state_31493__$1 = state_31493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31493__$1,(11),inst_31458);
} else {
if((state_val_31494 === (17))){
var inst_31479 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
if(cljs.core.truth_(inst_31479)){
var statearr_31504_31568 = state_31493__$1;
(statearr_31504_31568[(1)] = (19));

} else {
var statearr_31505_31569 = state_31493__$1;
(statearr_31505_31569[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (3))){
var inst_31491 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31493__$1,inst_31491);
} else {
if((state_val_31494 === (12))){
var inst_31468 = (state_31493[(10)]);
var state_31493__$1 = state_31493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31493__$1,(14),inst_31468);
} else {
if((state_val_31494 === (2))){
var state_31493__$1 = state_31493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31493__$1,(4),results);
} else {
if((state_val_31494 === (19))){
var state_31493__$1 = state_31493;
var statearr_31506_31570 = state_31493__$1;
(statearr_31506_31570[(2)] = null);

(statearr_31506_31570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (11))){
var inst_31468 = (state_31493[(2)]);
var state_31493__$1 = (function (){var statearr_31507 = state_31493;
(statearr_31507[(10)] = inst_31468);

return statearr_31507;
})();
var statearr_31508_31571 = state_31493__$1;
(statearr_31508_31571[(2)] = null);

(statearr_31508_31571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (9))){
var state_31493__$1 = state_31493;
var statearr_31509_31572 = state_31493__$1;
(statearr_31509_31572[(2)] = null);

(statearr_31509_31572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (5))){
var state_31493__$1 = state_31493;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31510_31573 = state_31493__$1;
(statearr_31510_31573[(1)] = (8));

} else {
var statearr_31511_31574 = state_31493__$1;
(statearr_31511_31574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (14))){
var inst_31473 = (state_31493[(11)]);
var inst_31471 = (state_31493[(8)]);
var inst_31471__$1 = (state_31493[(2)]);
var inst_31472 = (inst_31471__$1 == null);
var inst_31473__$1 = cljs.core.not.call(null,inst_31472);
var state_31493__$1 = (function (){var statearr_31512 = state_31493;
(statearr_31512[(11)] = inst_31473__$1);

(statearr_31512[(8)] = inst_31471__$1);

return statearr_31512;
})();
if(inst_31473__$1){
var statearr_31513_31575 = state_31493__$1;
(statearr_31513_31575[(1)] = (15));

} else {
var statearr_31514_31576 = state_31493__$1;
(statearr_31514_31576[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (16))){
var inst_31473 = (state_31493[(11)]);
var state_31493__$1 = state_31493;
var statearr_31515_31577 = state_31493__$1;
(statearr_31515_31577[(2)] = inst_31473);

(statearr_31515_31577[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (10))){
var inst_31465 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
var statearr_31516_31578 = state_31493__$1;
(statearr_31516_31578[(2)] = inst_31465);

(statearr_31516_31578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (18))){
var inst_31476 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
var statearr_31517_31579 = state_31493__$1;
(statearr_31517_31579[(2)] = inst_31476);

(statearr_31517_31579[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (8))){
var inst_31462 = cljs.core.async.close_BANG_.call(null,to);
var state_31493__$1 = state_31493;
var statearr_31518_31580 = state_31493__$1;
(statearr_31518_31580[(2)] = inst_31462);

(statearr_31518_31580[(1)] = (10));


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
});})(c__30473__auto__,jobs,results,process,async))
;
return ((function (switch__30452__auto__,c__30473__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____0 = (function (){
var statearr_31522 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31522[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__);

(statearr_31522[(1)] = (1));

return statearr_31522;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____1 = (function (state_31493){
while(true){
var ret_value__30454__auto__ = (function (){try{while(true){
var result__30455__auto__ = switch__30452__auto__.call(null,state_31493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30455__auto__;
}
break;
}
}catch (e31523){if((e31523 instanceof Object)){
var ex__30456__auto__ = e31523;
var statearr_31524_31581 = state_31493;
(statearr_31524_31581[(5)] = ex__30456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31582 = state_31493;
state_31493 = G__31582;
continue;
} else {
return ret_value__30454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__ = function(state_31493){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____1.call(this,state_31493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30453__auto__;
})()
;})(switch__30452__auto__,c__30473__auto__,jobs,results,process,async))
})();
var state__30475__auto__ = (function (){var statearr_31525 = f__30474__auto__.call(null);
(statearr_31525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30473__auto__);

return statearr_31525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30475__auto__);
});})(c__30473__auto__,jobs,results,process,async))
);

return c__30473__auto__;
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
var args31583 = [];
var len__29087__auto___31586 = arguments.length;
var i__29088__auto___31587 = (0);
while(true){
if((i__29088__auto___31587 < len__29087__auto___31586)){
args31583.push((arguments[i__29088__auto___31587]));

var G__31588 = (i__29088__auto___31587 + (1));
i__29088__auto___31587 = G__31588;
continue;
} else {
}
break;
}

var G__31585 = args31583.length;
switch (G__31585) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31583.length)].join('')));

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
var args31590 = [];
var len__29087__auto___31593 = arguments.length;
var i__29088__auto___31594 = (0);
while(true){
if((i__29088__auto___31594 < len__29087__auto___31593)){
args31590.push((arguments[i__29088__auto___31594]));

var G__31595 = (i__29088__auto___31594 + (1));
i__29088__auto___31594 = G__31595;
continue;
} else {
}
break;
}

var G__31592 = args31590.length;
switch (G__31592) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31590.length)].join('')));

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
var args31597 = [];
var len__29087__auto___31650 = arguments.length;
var i__29088__auto___31651 = (0);
while(true){
if((i__29088__auto___31651 < len__29087__auto___31650)){
args31597.push((arguments[i__29088__auto___31651]));

var G__31652 = (i__29088__auto___31651 + (1));
i__29088__auto___31651 = G__31652;
continue;
} else {
}
break;
}

var G__31599 = args31597.length;
switch (G__31599) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31597.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30473__auto___31654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30473__auto___31654,tc,fc){
return (function (){
var f__30474__auto__ = (function (){var switch__30452__auto__ = ((function (c__30473__auto___31654,tc,fc){
return (function (state_31625){
var state_val_31626 = (state_31625[(1)]);
if((state_val_31626 === (7))){
var inst_31621 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
var statearr_31627_31655 = state_31625__$1;
(statearr_31627_31655[(2)] = inst_31621);

(statearr_31627_31655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (1))){
var state_31625__$1 = state_31625;
var statearr_31628_31656 = state_31625__$1;
(statearr_31628_31656[(2)] = null);

(statearr_31628_31656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (4))){
var inst_31602 = (state_31625[(7)]);
var inst_31602__$1 = (state_31625[(2)]);
var inst_31603 = (inst_31602__$1 == null);
var state_31625__$1 = (function (){var statearr_31629 = state_31625;
(statearr_31629[(7)] = inst_31602__$1);

return statearr_31629;
})();
if(cljs.core.truth_(inst_31603)){
var statearr_31630_31657 = state_31625__$1;
(statearr_31630_31657[(1)] = (5));

} else {
var statearr_31631_31658 = state_31625__$1;
(statearr_31631_31658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (13))){
var state_31625__$1 = state_31625;
var statearr_31632_31659 = state_31625__$1;
(statearr_31632_31659[(2)] = null);

(statearr_31632_31659[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (6))){
var inst_31602 = (state_31625[(7)]);
var inst_31608 = p.call(null,inst_31602);
var state_31625__$1 = state_31625;
if(cljs.core.truth_(inst_31608)){
var statearr_31633_31660 = state_31625__$1;
(statearr_31633_31660[(1)] = (9));

} else {
var statearr_31634_31661 = state_31625__$1;
(statearr_31634_31661[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (3))){
var inst_31623 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31625__$1,inst_31623);
} else {
if((state_val_31626 === (12))){
var state_31625__$1 = state_31625;
var statearr_31635_31662 = state_31625__$1;
(statearr_31635_31662[(2)] = null);

(statearr_31635_31662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (2))){
var state_31625__$1 = state_31625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31625__$1,(4),ch);
} else {
if((state_val_31626 === (11))){
var inst_31602 = (state_31625[(7)]);
var inst_31612 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31625__$1,(8),inst_31612,inst_31602);
} else {
if((state_val_31626 === (9))){
var state_31625__$1 = state_31625;
var statearr_31636_31663 = state_31625__$1;
(statearr_31636_31663[(2)] = tc);

(statearr_31636_31663[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (5))){
var inst_31605 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31606 = cljs.core.async.close_BANG_.call(null,fc);
var state_31625__$1 = (function (){var statearr_31637 = state_31625;
(statearr_31637[(8)] = inst_31605);

return statearr_31637;
})();
var statearr_31638_31664 = state_31625__$1;
(statearr_31638_31664[(2)] = inst_31606);

(statearr_31638_31664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (14))){
var inst_31619 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
var statearr_31639_31665 = state_31625__$1;
(statearr_31639_31665[(2)] = inst_31619);

(statearr_31639_31665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (10))){
var state_31625__$1 = state_31625;
var statearr_31640_31666 = state_31625__$1;
(statearr_31640_31666[(2)] = fc);

(statearr_31640_31666[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (8))){
var inst_31614 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
if(cljs.core.truth_(inst_31614)){
var statearr_31641_31667 = state_31625__$1;
(statearr_31641_31667[(1)] = (12));

} else {
var statearr_31642_31668 = state_31625__$1;
(statearr_31642_31668[(1)] = (13));

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
});})(c__30473__auto___31654,tc,fc))
;
return ((function (switch__30452__auto__,c__30473__auto___31654,tc,fc){
return (function() {
var cljs$core$async$state_machine__30453__auto__ = null;
var cljs$core$async$state_machine__30453__auto____0 = (function (){
var statearr_31646 = [null,null,null,null,null,null,null,null,null];
(statearr_31646[(0)] = cljs$core$async$state_machine__30453__auto__);

(statearr_31646[(1)] = (1));

return statearr_31646;
});
var cljs$core$async$state_machine__30453__auto____1 = (function (state_31625){
while(true){
var ret_value__30454__auto__ = (function (){try{while(true){
var result__30455__auto__ = switch__30452__auto__.call(null,state_31625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30455__auto__;
}
break;
}
}catch (e31647){if((e31647 instanceof Object)){
var ex__30456__auto__ = e31647;
var statearr_31648_31669 = state_31625;
(statearr_31648_31669[(5)] = ex__30456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31670 = state_31625;
state_31625 = G__31670;
continue;
} else {
return ret_value__30454__auto__;
}
break;
}
});
cljs$core$async$state_machine__30453__auto__ = function(state_31625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30453__auto____1.call(this,state_31625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30453__auto____0;
cljs$core$async$state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30453__auto____1;
return cljs$core$async$state_machine__30453__auto__;
})()
;})(switch__30452__auto__,c__30473__auto___31654,tc,fc))
})();
var state__30475__auto__ = (function (){var statearr_31649 = f__30474__auto__.call(null);
(statearr_31649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30473__auto___31654);

return statearr_31649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30475__auto__);
});})(c__30473__auto___31654,tc,fc))
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
var c__30473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30473__auto__){
return (function (){
var f__30474__auto__ = (function (){var switch__30452__auto__ = ((function (c__30473__auto__){
return (function (state_31734){
var state_val_31735 = (state_31734[(1)]);
if((state_val_31735 === (7))){
var inst_31730 = (state_31734[(2)]);
var state_31734__$1 = state_31734;
var statearr_31736_31757 = state_31734__$1;
(statearr_31736_31757[(2)] = inst_31730);

(statearr_31736_31757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (1))){
var inst_31714 = init;
var state_31734__$1 = (function (){var statearr_31737 = state_31734;
(statearr_31737[(7)] = inst_31714);

return statearr_31737;
})();
var statearr_31738_31758 = state_31734__$1;
(statearr_31738_31758[(2)] = null);

(statearr_31738_31758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (4))){
var inst_31717 = (state_31734[(8)]);
var inst_31717__$1 = (state_31734[(2)]);
var inst_31718 = (inst_31717__$1 == null);
var state_31734__$1 = (function (){var statearr_31739 = state_31734;
(statearr_31739[(8)] = inst_31717__$1);

return statearr_31739;
})();
if(cljs.core.truth_(inst_31718)){
var statearr_31740_31759 = state_31734__$1;
(statearr_31740_31759[(1)] = (5));

} else {
var statearr_31741_31760 = state_31734__$1;
(statearr_31741_31760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (6))){
var inst_31714 = (state_31734[(7)]);
var inst_31721 = (state_31734[(9)]);
var inst_31717 = (state_31734[(8)]);
var inst_31721__$1 = f.call(null,inst_31714,inst_31717);
var inst_31722 = cljs.core.reduced_QMARK_.call(null,inst_31721__$1);
var state_31734__$1 = (function (){var statearr_31742 = state_31734;
(statearr_31742[(9)] = inst_31721__$1);

return statearr_31742;
})();
if(inst_31722){
var statearr_31743_31761 = state_31734__$1;
(statearr_31743_31761[(1)] = (8));

} else {
var statearr_31744_31762 = state_31734__$1;
(statearr_31744_31762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (3))){
var inst_31732 = (state_31734[(2)]);
var state_31734__$1 = state_31734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31734__$1,inst_31732);
} else {
if((state_val_31735 === (2))){
var state_31734__$1 = state_31734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31734__$1,(4),ch);
} else {
if((state_val_31735 === (9))){
var inst_31721 = (state_31734[(9)]);
var inst_31714 = inst_31721;
var state_31734__$1 = (function (){var statearr_31745 = state_31734;
(statearr_31745[(7)] = inst_31714);

return statearr_31745;
})();
var statearr_31746_31763 = state_31734__$1;
(statearr_31746_31763[(2)] = null);

(statearr_31746_31763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (5))){
var inst_31714 = (state_31734[(7)]);
var state_31734__$1 = state_31734;
var statearr_31747_31764 = state_31734__$1;
(statearr_31747_31764[(2)] = inst_31714);

(statearr_31747_31764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (10))){
var inst_31728 = (state_31734[(2)]);
var state_31734__$1 = state_31734;
var statearr_31748_31765 = state_31734__$1;
(statearr_31748_31765[(2)] = inst_31728);

(statearr_31748_31765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (8))){
var inst_31721 = (state_31734[(9)]);
var inst_31724 = cljs.core.deref.call(null,inst_31721);
var state_31734__$1 = state_31734;
var statearr_31749_31766 = state_31734__$1;
(statearr_31749_31766[(2)] = inst_31724);

(statearr_31749_31766[(1)] = (10));


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
});})(c__30473__auto__))
;
return ((function (switch__30452__auto__,c__30473__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30453__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30453__auto____0 = (function (){
var statearr_31753 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31753[(0)] = cljs$core$async$reduce_$_state_machine__30453__auto__);

(statearr_31753[(1)] = (1));

return statearr_31753;
});
var cljs$core$async$reduce_$_state_machine__30453__auto____1 = (function (state_31734){
while(true){
var ret_value__30454__auto__ = (function (){try{while(true){
var result__30455__auto__ = switch__30452__auto__.call(null,state_31734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30455__auto__;
}
break;
}
}catch (e31754){if((e31754 instanceof Object)){
var ex__30456__auto__ = e31754;
var statearr_31755_31767 = state_31734;
(statearr_31755_31767[(5)] = ex__30456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31768 = state_31734;
state_31734 = G__31768;
continue;
} else {
return ret_value__30454__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30453__auto__ = function(state_31734){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30453__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30453__auto____1.call(this,state_31734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30453__auto____0;
cljs$core$async$reduce_$_state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30453__auto____1;
return cljs$core$async$reduce_$_state_machine__30453__auto__;
})()
;})(switch__30452__auto__,c__30473__auto__))
})();
var state__30475__auto__ = (function (){var statearr_31756 = f__30474__auto__.call(null);
(statearr_31756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30473__auto__);

return statearr_31756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30475__auto__);
});})(c__30473__auto__))
);

return c__30473__auto__;
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
var args31769 = [];
var len__29087__auto___31821 = arguments.length;
var i__29088__auto___31822 = (0);
while(true){
if((i__29088__auto___31822 < len__29087__auto___31821)){
args31769.push((arguments[i__29088__auto___31822]));

var G__31823 = (i__29088__auto___31822 + (1));
i__29088__auto___31822 = G__31823;
continue;
} else {
}
break;
}

var G__31771 = args31769.length;
switch (G__31771) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31769.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30473__auto__){
return (function (){
var f__30474__auto__ = (function (){var switch__30452__auto__ = ((function (c__30473__auto__){
return (function (state_31796){
var state_val_31797 = (state_31796[(1)]);
if((state_val_31797 === (7))){
var inst_31778 = (state_31796[(2)]);
var state_31796__$1 = state_31796;
var statearr_31798_31825 = state_31796__$1;
(statearr_31798_31825[(2)] = inst_31778);

(statearr_31798_31825[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (1))){
var inst_31772 = cljs.core.seq.call(null,coll);
var inst_31773 = inst_31772;
var state_31796__$1 = (function (){var statearr_31799 = state_31796;
(statearr_31799[(7)] = inst_31773);

return statearr_31799;
})();
var statearr_31800_31826 = state_31796__$1;
(statearr_31800_31826[(2)] = null);

(statearr_31800_31826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (4))){
var inst_31773 = (state_31796[(7)]);
var inst_31776 = cljs.core.first.call(null,inst_31773);
var state_31796__$1 = state_31796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31796__$1,(7),ch,inst_31776);
} else {
if((state_val_31797 === (13))){
var inst_31790 = (state_31796[(2)]);
var state_31796__$1 = state_31796;
var statearr_31801_31827 = state_31796__$1;
(statearr_31801_31827[(2)] = inst_31790);

(statearr_31801_31827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (6))){
var inst_31781 = (state_31796[(2)]);
var state_31796__$1 = state_31796;
if(cljs.core.truth_(inst_31781)){
var statearr_31802_31828 = state_31796__$1;
(statearr_31802_31828[(1)] = (8));

} else {
var statearr_31803_31829 = state_31796__$1;
(statearr_31803_31829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (3))){
var inst_31794 = (state_31796[(2)]);
var state_31796__$1 = state_31796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31796__$1,inst_31794);
} else {
if((state_val_31797 === (12))){
var state_31796__$1 = state_31796;
var statearr_31804_31830 = state_31796__$1;
(statearr_31804_31830[(2)] = null);

(statearr_31804_31830[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (2))){
var inst_31773 = (state_31796[(7)]);
var state_31796__$1 = state_31796;
if(cljs.core.truth_(inst_31773)){
var statearr_31805_31831 = state_31796__$1;
(statearr_31805_31831[(1)] = (4));

} else {
var statearr_31806_31832 = state_31796__$1;
(statearr_31806_31832[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (11))){
var inst_31787 = cljs.core.async.close_BANG_.call(null,ch);
var state_31796__$1 = state_31796;
var statearr_31807_31833 = state_31796__$1;
(statearr_31807_31833[(2)] = inst_31787);

(statearr_31807_31833[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (9))){
var state_31796__$1 = state_31796;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31808_31834 = state_31796__$1;
(statearr_31808_31834[(1)] = (11));

} else {
var statearr_31809_31835 = state_31796__$1;
(statearr_31809_31835[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (5))){
var inst_31773 = (state_31796[(7)]);
var state_31796__$1 = state_31796;
var statearr_31810_31836 = state_31796__$1;
(statearr_31810_31836[(2)] = inst_31773);

(statearr_31810_31836[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (10))){
var inst_31792 = (state_31796[(2)]);
var state_31796__$1 = state_31796;
var statearr_31811_31837 = state_31796__$1;
(statearr_31811_31837[(2)] = inst_31792);

(statearr_31811_31837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (8))){
var inst_31773 = (state_31796[(7)]);
var inst_31783 = cljs.core.next.call(null,inst_31773);
var inst_31773__$1 = inst_31783;
var state_31796__$1 = (function (){var statearr_31812 = state_31796;
(statearr_31812[(7)] = inst_31773__$1);

return statearr_31812;
})();
var statearr_31813_31838 = state_31796__$1;
(statearr_31813_31838[(2)] = null);

(statearr_31813_31838[(1)] = (2));


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
});})(c__30473__auto__))
;
return ((function (switch__30452__auto__,c__30473__auto__){
return (function() {
var cljs$core$async$state_machine__30453__auto__ = null;
var cljs$core$async$state_machine__30453__auto____0 = (function (){
var statearr_31817 = [null,null,null,null,null,null,null,null];
(statearr_31817[(0)] = cljs$core$async$state_machine__30453__auto__);

(statearr_31817[(1)] = (1));

return statearr_31817;
});
var cljs$core$async$state_machine__30453__auto____1 = (function (state_31796){
while(true){
var ret_value__30454__auto__ = (function (){try{while(true){
var result__30455__auto__ = switch__30452__auto__.call(null,state_31796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30455__auto__;
}
break;
}
}catch (e31818){if((e31818 instanceof Object)){
var ex__30456__auto__ = e31818;
var statearr_31819_31839 = state_31796;
(statearr_31819_31839[(5)] = ex__30456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31840 = state_31796;
state_31796 = G__31840;
continue;
} else {
return ret_value__30454__auto__;
}
break;
}
});
cljs$core$async$state_machine__30453__auto__ = function(state_31796){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30453__auto____1.call(this,state_31796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30453__auto____0;
cljs$core$async$state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30453__auto____1;
return cljs$core$async$state_machine__30453__auto__;
})()
;})(switch__30452__auto__,c__30473__auto__))
})();
var state__30475__auto__ = (function (){var statearr_31820 = f__30474__auto__.call(null);
(statearr_31820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30473__auto__);

return statearr_31820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30475__auto__);
});})(c__30473__auto__))
);

return c__30473__auto__;
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
var x__28675__auto__ = (((_ == null))?null:_);
var m__28676__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,_);
} else {
var m__28676__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,_);
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
var x__28675__auto__ = (((m == null))?null:m);
var m__28676__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28676__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__28675__auto__ = (((m == null))?null:m);
var m__28676__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,m,ch);
} else {
var m__28676__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,m,ch);
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
var x__28675__auto__ = (((m == null))?null:m);
var m__28676__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,m);
} else {
var m__28676__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async32066 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32066 = (function (mult,ch,cs,meta32067){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta32067 = meta32067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32068,meta32067__$1){
var self__ = this;
var _32068__$1 = this;
return (new cljs.core.async.t_cljs$core$async32066(self__.mult,self__.ch,self__.cs,meta32067__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32068){
var self__ = this;
var _32068__$1 = this;
return self__.meta32067;
});})(cs))
;

cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32066.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32067","meta32067",-1700642075,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32066.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32066";

cljs.core.async.t_cljs$core$async32066.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cljs.core.async/t_cljs$core$async32066");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32066 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32066(mult__$1,ch__$1,cs__$1,meta32067){
return (new cljs.core.async.t_cljs$core$async32066(mult__$1,ch__$1,cs__$1,meta32067));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32066(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30473__auto___32291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30473__auto___32291,cs,m,dchan,dctr,done){
return (function (){
var f__30474__auto__ = (function (){var switch__30452__auto__ = ((function (c__30473__auto___32291,cs,m,dchan,dctr,done){
return (function (state_32203){
var state_val_32204 = (state_32203[(1)]);
if((state_val_32204 === (7))){
var inst_32199 = (state_32203[(2)]);
var state_32203__$1 = state_32203;
var statearr_32205_32292 = state_32203__$1;
(statearr_32205_32292[(2)] = inst_32199);

(statearr_32205_32292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (20))){
var inst_32102 = (state_32203[(7)]);
var inst_32114 = cljs.core.first.call(null,inst_32102);
var inst_32115 = cljs.core.nth.call(null,inst_32114,(0),null);
var inst_32116 = cljs.core.nth.call(null,inst_32114,(1),null);
var state_32203__$1 = (function (){var statearr_32206 = state_32203;
(statearr_32206[(8)] = inst_32115);

return statearr_32206;
})();
if(cljs.core.truth_(inst_32116)){
var statearr_32207_32293 = state_32203__$1;
(statearr_32207_32293[(1)] = (22));

} else {
var statearr_32208_32294 = state_32203__$1;
(statearr_32208_32294[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (27))){
var inst_32144 = (state_32203[(9)]);
var inst_32146 = (state_32203[(10)]);
var inst_32071 = (state_32203[(11)]);
var inst_32151 = (state_32203[(12)]);
var inst_32151__$1 = cljs.core._nth.call(null,inst_32144,inst_32146);
var inst_32152 = cljs.core.async.put_BANG_.call(null,inst_32151__$1,inst_32071,done);
var state_32203__$1 = (function (){var statearr_32209 = state_32203;
(statearr_32209[(12)] = inst_32151__$1);

return statearr_32209;
})();
if(cljs.core.truth_(inst_32152)){
var statearr_32210_32295 = state_32203__$1;
(statearr_32210_32295[(1)] = (30));

} else {
var statearr_32211_32296 = state_32203__$1;
(statearr_32211_32296[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (1))){
var state_32203__$1 = state_32203;
var statearr_32212_32297 = state_32203__$1;
(statearr_32212_32297[(2)] = null);

(statearr_32212_32297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (24))){
var inst_32102 = (state_32203[(7)]);
var inst_32121 = (state_32203[(2)]);
var inst_32122 = cljs.core.next.call(null,inst_32102);
var inst_32080 = inst_32122;
var inst_32081 = null;
var inst_32082 = (0);
var inst_32083 = (0);
var state_32203__$1 = (function (){var statearr_32213 = state_32203;
(statearr_32213[(13)] = inst_32082);

(statearr_32213[(14)] = inst_32081);

(statearr_32213[(15)] = inst_32121);

(statearr_32213[(16)] = inst_32080);

(statearr_32213[(17)] = inst_32083);

return statearr_32213;
})();
var statearr_32214_32298 = state_32203__$1;
(statearr_32214_32298[(2)] = null);

(statearr_32214_32298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (39))){
var state_32203__$1 = state_32203;
var statearr_32218_32299 = state_32203__$1;
(statearr_32218_32299[(2)] = null);

(statearr_32218_32299[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (4))){
var inst_32071 = (state_32203[(11)]);
var inst_32071__$1 = (state_32203[(2)]);
var inst_32072 = (inst_32071__$1 == null);
var state_32203__$1 = (function (){var statearr_32219 = state_32203;
(statearr_32219[(11)] = inst_32071__$1);

return statearr_32219;
})();
if(cljs.core.truth_(inst_32072)){
var statearr_32220_32300 = state_32203__$1;
(statearr_32220_32300[(1)] = (5));

} else {
var statearr_32221_32301 = state_32203__$1;
(statearr_32221_32301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (15))){
var inst_32082 = (state_32203[(13)]);
var inst_32081 = (state_32203[(14)]);
var inst_32080 = (state_32203[(16)]);
var inst_32083 = (state_32203[(17)]);
var inst_32098 = (state_32203[(2)]);
var inst_32099 = (inst_32083 + (1));
var tmp32215 = inst_32082;
var tmp32216 = inst_32081;
var tmp32217 = inst_32080;
var inst_32080__$1 = tmp32217;
var inst_32081__$1 = tmp32216;
var inst_32082__$1 = tmp32215;
var inst_32083__$1 = inst_32099;
var state_32203__$1 = (function (){var statearr_32222 = state_32203;
(statearr_32222[(18)] = inst_32098);

(statearr_32222[(13)] = inst_32082__$1);

(statearr_32222[(14)] = inst_32081__$1);

(statearr_32222[(16)] = inst_32080__$1);

(statearr_32222[(17)] = inst_32083__$1);

return statearr_32222;
})();
var statearr_32223_32302 = state_32203__$1;
(statearr_32223_32302[(2)] = null);

(statearr_32223_32302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (21))){
var inst_32125 = (state_32203[(2)]);
var state_32203__$1 = state_32203;
var statearr_32227_32303 = state_32203__$1;
(statearr_32227_32303[(2)] = inst_32125);

(statearr_32227_32303[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (31))){
var inst_32151 = (state_32203[(12)]);
var inst_32155 = done.call(null,null);
var inst_32156 = cljs.core.async.untap_STAR_.call(null,m,inst_32151);
var state_32203__$1 = (function (){var statearr_32228 = state_32203;
(statearr_32228[(19)] = inst_32155);

return statearr_32228;
})();
var statearr_32229_32304 = state_32203__$1;
(statearr_32229_32304[(2)] = inst_32156);

(statearr_32229_32304[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (32))){
var inst_32144 = (state_32203[(9)]);
var inst_32143 = (state_32203[(20)]);
var inst_32146 = (state_32203[(10)]);
var inst_32145 = (state_32203[(21)]);
var inst_32158 = (state_32203[(2)]);
var inst_32159 = (inst_32146 + (1));
var tmp32224 = inst_32144;
var tmp32225 = inst_32143;
var tmp32226 = inst_32145;
var inst_32143__$1 = tmp32225;
var inst_32144__$1 = tmp32224;
var inst_32145__$1 = tmp32226;
var inst_32146__$1 = inst_32159;
var state_32203__$1 = (function (){var statearr_32230 = state_32203;
(statearr_32230[(9)] = inst_32144__$1);

(statearr_32230[(20)] = inst_32143__$1);

(statearr_32230[(10)] = inst_32146__$1);

(statearr_32230[(21)] = inst_32145__$1);

(statearr_32230[(22)] = inst_32158);

return statearr_32230;
})();
var statearr_32231_32305 = state_32203__$1;
(statearr_32231_32305[(2)] = null);

(statearr_32231_32305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (40))){
var inst_32171 = (state_32203[(23)]);
var inst_32175 = done.call(null,null);
var inst_32176 = cljs.core.async.untap_STAR_.call(null,m,inst_32171);
var state_32203__$1 = (function (){var statearr_32232 = state_32203;
(statearr_32232[(24)] = inst_32175);

return statearr_32232;
})();
var statearr_32233_32306 = state_32203__$1;
(statearr_32233_32306[(2)] = inst_32176);

(statearr_32233_32306[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (33))){
var inst_32162 = (state_32203[(25)]);
var inst_32164 = cljs.core.chunked_seq_QMARK_.call(null,inst_32162);
var state_32203__$1 = state_32203;
if(inst_32164){
var statearr_32234_32307 = state_32203__$1;
(statearr_32234_32307[(1)] = (36));

} else {
var statearr_32235_32308 = state_32203__$1;
(statearr_32235_32308[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (13))){
var inst_32092 = (state_32203[(26)]);
var inst_32095 = cljs.core.async.close_BANG_.call(null,inst_32092);
var state_32203__$1 = state_32203;
var statearr_32236_32309 = state_32203__$1;
(statearr_32236_32309[(2)] = inst_32095);

(statearr_32236_32309[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (22))){
var inst_32115 = (state_32203[(8)]);
var inst_32118 = cljs.core.async.close_BANG_.call(null,inst_32115);
var state_32203__$1 = state_32203;
var statearr_32237_32310 = state_32203__$1;
(statearr_32237_32310[(2)] = inst_32118);

(statearr_32237_32310[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (36))){
var inst_32162 = (state_32203[(25)]);
var inst_32166 = cljs.core.chunk_first.call(null,inst_32162);
var inst_32167 = cljs.core.chunk_rest.call(null,inst_32162);
var inst_32168 = cljs.core.count.call(null,inst_32166);
var inst_32143 = inst_32167;
var inst_32144 = inst_32166;
var inst_32145 = inst_32168;
var inst_32146 = (0);
var state_32203__$1 = (function (){var statearr_32238 = state_32203;
(statearr_32238[(9)] = inst_32144);

(statearr_32238[(20)] = inst_32143);

(statearr_32238[(10)] = inst_32146);

(statearr_32238[(21)] = inst_32145);

return statearr_32238;
})();
var statearr_32239_32311 = state_32203__$1;
(statearr_32239_32311[(2)] = null);

(statearr_32239_32311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (41))){
var inst_32162 = (state_32203[(25)]);
var inst_32178 = (state_32203[(2)]);
var inst_32179 = cljs.core.next.call(null,inst_32162);
var inst_32143 = inst_32179;
var inst_32144 = null;
var inst_32145 = (0);
var inst_32146 = (0);
var state_32203__$1 = (function (){var statearr_32240 = state_32203;
(statearr_32240[(9)] = inst_32144);

(statearr_32240[(20)] = inst_32143);

(statearr_32240[(10)] = inst_32146);

(statearr_32240[(21)] = inst_32145);

(statearr_32240[(27)] = inst_32178);

return statearr_32240;
})();
var statearr_32241_32312 = state_32203__$1;
(statearr_32241_32312[(2)] = null);

(statearr_32241_32312[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (43))){
var state_32203__$1 = state_32203;
var statearr_32242_32313 = state_32203__$1;
(statearr_32242_32313[(2)] = null);

(statearr_32242_32313[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (29))){
var inst_32187 = (state_32203[(2)]);
var state_32203__$1 = state_32203;
var statearr_32243_32314 = state_32203__$1;
(statearr_32243_32314[(2)] = inst_32187);

(statearr_32243_32314[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (44))){
var inst_32196 = (state_32203[(2)]);
var state_32203__$1 = (function (){var statearr_32244 = state_32203;
(statearr_32244[(28)] = inst_32196);

return statearr_32244;
})();
var statearr_32245_32315 = state_32203__$1;
(statearr_32245_32315[(2)] = null);

(statearr_32245_32315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (6))){
var inst_32135 = (state_32203[(29)]);
var inst_32134 = cljs.core.deref.call(null,cs);
var inst_32135__$1 = cljs.core.keys.call(null,inst_32134);
var inst_32136 = cljs.core.count.call(null,inst_32135__$1);
var inst_32137 = cljs.core.reset_BANG_.call(null,dctr,inst_32136);
var inst_32142 = cljs.core.seq.call(null,inst_32135__$1);
var inst_32143 = inst_32142;
var inst_32144 = null;
var inst_32145 = (0);
var inst_32146 = (0);
var state_32203__$1 = (function (){var statearr_32246 = state_32203;
(statearr_32246[(9)] = inst_32144);

(statearr_32246[(20)] = inst_32143);

(statearr_32246[(30)] = inst_32137);

(statearr_32246[(29)] = inst_32135__$1);

(statearr_32246[(10)] = inst_32146);

(statearr_32246[(21)] = inst_32145);

return statearr_32246;
})();
var statearr_32247_32316 = state_32203__$1;
(statearr_32247_32316[(2)] = null);

(statearr_32247_32316[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (28))){
var inst_32143 = (state_32203[(20)]);
var inst_32162 = (state_32203[(25)]);
var inst_32162__$1 = cljs.core.seq.call(null,inst_32143);
var state_32203__$1 = (function (){var statearr_32248 = state_32203;
(statearr_32248[(25)] = inst_32162__$1);

return statearr_32248;
})();
if(inst_32162__$1){
var statearr_32249_32317 = state_32203__$1;
(statearr_32249_32317[(1)] = (33));

} else {
var statearr_32250_32318 = state_32203__$1;
(statearr_32250_32318[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (25))){
var inst_32146 = (state_32203[(10)]);
var inst_32145 = (state_32203[(21)]);
var inst_32148 = (inst_32146 < inst_32145);
var inst_32149 = inst_32148;
var state_32203__$1 = state_32203;
if(cljs.core.truth_(inst_32149)){
var statearr_32251_32319 = state_32203__$1;
(statearr_32251_32319[(1)] = (27));

} else {
var statearr_32252_32320 = state_32203__$1;
(statearr_32252_32320[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (34))){
var state_32203__$1 = state_32203;
var statearr_32253_32321 = state_32203__$1;
(statearr_32253_32321[(2)] = null);

(statearr_32253_32321[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (17))){
var state_32203__$1 = state_32203;
var statearr_32254_32322 = state_32203__$1;
(statearr_32254_32322[(2)] = null);

(statearr_32254_32322[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (3))){
var inst_32201 = (state_32203[(2)]);
var state_32203__$1 = state_32203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32203__$1,inst_32201);
} else {
if((state_val_32204 === (12))){
var inst_32130 = (state_32203[(2)]);
var state_32203__$1 = state_32203;
var statearr_32255_32323 = state_32203__$1;
(statearr_32255_32323[(2)] = inst_32130);

(statearr_32255_32323[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (2))){
var state_32203__$1 = state_32203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32203__$1,(4),ch);
} else {
if((state_val_32204 === (23))){
var state_32203__$1 = state_32203;
var statearr_32256_32324 = state_32203__$1;
(statearr_32256_32324[(2)] = null);

(statearr_32256_32324[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (35))){
var inst_32185 = (state_32203[(2)]);
var state_32203__$1 = state_32203;
var statearr_32257_32325 = state_32203__$1;
(statearr_32257_32325[(2)] = inst_32185);

(statearr_32257_32325[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (19))){
var inst_32102 = (state_32203[(7)]);
var inst_32106 = cljs.core.chunk_first.call(null,inst_32102);
var inst_32107 = cljs.core.chunk_rest.call(null,inst_32102);
var inst_32108 = cljs.core.count.call(null,inst_32106);
var inst_32080 = inst_32107;
var inst_32081 = inst_32106;
var inst_32082 = inst_32108;
var inst_32083 = (0);
var state_32203__$1 = (function (){var statearr_32258 = state_32203;
(statearr_32258[(13)] = inst_32082);

(statearr_32258[(14)] = inst_32081);

(statearr_32258[(16)] = inst_32080);

(statearr_32258[(17)] = inst_32083);

return statearr_32258;
})();
var statearr_32259_32326 = state_32203__$1;
(statearr_32259_32326[(2)] = null);

(statearr_32259_32326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (11))){
var inst_32080 = (state_32203[(16)]);
var inst_32102 = (state_32203[(7)]);
var inst_32102__$1 = cljs.core.seq.call(null,inst_32080);
var state_32203__$1 = (function (){var statearr_32260 = state_32203;
(statearr_32260[(7)] = inst_32102__$1);

return statearr_32260;
})();
if(inst_32102__$1){
var statearr_32261_32327 = state_32203__$1;
(statearr_32261_32327[(1)] = (16));

} else {
var statearr_32262_32328 = state_32203__$1;
(statearr_32262_32328[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (9))){
var inst_32132 = (state_32203[(2)]);
var state_32203__$1 = state_32203;
var statearr_32263_32329 = state_32203__$1;
(statearr_32263_32329[(2)] = inst_32132);

(statearr_32263_32329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (5))){
var inst_32078 = cljs.core.deref.call(null,cs);
var inst_32079 = cljs.core.seq.call(null,inst_32078);
var inst_32080 = inst_32079;
var inst_32081 = null;
var inst_32082 = (0);
var inst_32083 = (0);
var state_32203__$1 = (function (){var statearr_32264 = state_32203;
(statearr_32264[(13)] = inst_32082);

(statearr_32264[(14)] = inst_32081);

(statearr_32264[(16)] = inst_32080);

(statearr_32264[(17)] = inst_32083);

return statearr_32264;
})();
var statearr_32265_32330 = state_32203__$1;
(statearr_32265_32330[(2)] = null);

(statearr_32265_32330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (14))){
var state_32203__$1 = state_32203;
var statearr_32266_32331 = state_32203__$1;
(statearr_32266_32331[(2)] = null);

(statearr_32266_32331[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (45))){
var inst_32193 = (state_32203[(2)]);
var state_32203__$1 = state_32203;
var statearr_32267_32332 = state_32203__$1;
(statearr_32267_32332[(2)] = inst_32193);

(statearr_32267_32332[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (26))){
var inst_32135 = (state_32203[(29)]);
var inst_32189 = (state_32203[(2)]);
var inst_32190 = cljs.core.seq.call(null,inst_32135);
var state_32203__$1 = (function (){var statearr_32268 = state_32203;
(statearr_32268[(31)] = inst_32189);

return statearr_32268;
})();
if(inst_32190){
var statearr_32269_32333 = state_32203__$1;
(statearr_32269_32333[(1)] = (42));

} else {
var statearr_32270_32334 = state_32203__$1;
(statearr_32270_32334[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (16))){
var inst_32102 = (state_32203[(7)]);
var inst_32104 = cljs.core.chunked_seq_QMARK_.call(null,inst_32102);
var state_32203__$1 = state_32203;
if(inst_32104){
var statearr_32271_32335 = state_32203__$1;
(statearr_32271_32335[(1)] = (19));

} else {
var statearr_32272_32336 = state_32203__$1;
(statearr_32272_32336[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (38))){
var inst_32182 = (state_32203[(2)]);
var state_32203__$1 = state_32203;
var statearr_32273_32337 = state_32203__$1;
(statearr_32273_32337[(2)] = inst_32182);

(statearr_32273_32337[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (30))){
var state_32203__$1 = state_32203;
var statearr_32274_32338 = state_32203__$1;
(statearr_32274_32338[(2)] = null);

(statearr_32274_32338[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (10))){
var inst_32081 = (state_32203[(14)]);
var inst_32083 = (state_32203[(17)]);
var inst_32091 = cljs.core._nth.call(null,inst_32081,inst_32083);
var inst_32092 = cljs.core.nth.call(null,inst_32091,(0),null);
var inst_32093 = cljs.core.nth.call(null,inst_32091,(1),null);
var state_32203__$1 = (function (){var statearr_32275 = state_32203;
(statearr_32275[(26)] = inst_32092);

return statearr_32275;
})();
if(cljs.core.truth_(inst_32093)){
var statearr_32276_32339 = state_32203__$1;
(statearr_32276_32339[(1)] = (13));

} else {
var statearr_32277_32340 = state_32203__$1;
(statearr_32277_32340[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (18))){
var inst_32128 = (state_32203[(2)]);
var state_32203__$1 = state_32203;
var statearr_32278_32341 = state_32203__$1;
(statearr_32278_32341[(2)] = inst_32128);

(statearr_32278_32341[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (42))){
var state_32203__$1 = state_32203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32203__$1,(45),dchan);
} else {
if((state_val_32204 === (37))){
var inst_32162 = (state_32203[(25)]);
var inst_32071 = (state_32203[(11)]);
var inst_32171 = (state_32203[(23)]);
var inst_32171__$1 = cljs.core.first.call(null,inst_32162);
var inst_32172 = cljs.core.async.put_BANG_.call(null,inst_32171__$1,inst_32071,done);
var state_32203__$1 = (function (){var statearr_32279 = state_32203;
(statearr_32279[(23)] = inst_32171__$1);

return statearr_32279;
})();
if(cljs.core.truth_(inst_32172)){
var statearr_32280_32342 = state_32203__$1;
(statearr_32280_32342[(1)] = (39));

} else {
var statearr_32281_32343 = state_32203__$1;
(statearr_32281_32343[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (8))){
var inst_32082 = (state_32203[(13)]);
var inst_32083 = (state_32203[(17)]);
var inst_32085 = (inst_32083 < inst_32082);
var inst_32086 = inst_32085;
var state_32203__$1 = state_32203;
if(cljs.core.truth_(inst_32086)){
var statearr_32282_32344 = state_32203__$1;
(statearr_32282_32344[(1)] = (10));

} else {
var statearr_32283_32345 = state_32203__$1;
(statearr_32283_32345[(1)] = (11));

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
});})(c__30473__auto___32291,cs,m,dchan,dctr,done))
;
return ((function (switch__30452__auto__,c__30473__auto___32291,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30453__auto__ = null;
var cljs$core$async$mult_$_state_machine__30453__auto____0 = (function (){
var statearr_32287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32287[(0)] = cljs$core$async$mult_$_state_machine__30453__auto__);

(statearr_32287[(1)] = (1));

return statearr_32287;
});
var cljs$core$async$mult_$_state_machine__30453__auto____1 = (function (state_32203){
while(true){
var ret_value__30454__auto__ = (function (){try{while(true){
var result__30455__auto__ = switch__30452__auto__.call(null,state_32203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30455__auto__;
}
break;
}
}catch (e32288){if((e32288 instanceof Object)){
var ex__30456__auto__ = e32288;
var statearr_32289_32346 = state_32203;
(statearr_32289_32346[(5)] = ex__30456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32347 = state_32203;
state_32203 = G__32347;
continue;
} else {
return ret_value__30454__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30453__auto__ = function(state_32203){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30453__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30453__auto____1.call(this,state_32203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30453__auto____0;
cljs$core$async$mult_$_state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30453__auto____1;
return cljs$core$async$mult_$_state_machine__30453__auto__;
})()
;})(switch__30452__auto__,c__30473__auto___32291,cs,m,dchan,dctr,done))
})();
var state__30475__auto__ = (function (){var statearr_32290 = f__30474__auto__.call(null);
(statearr_32290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30473__auto___32291);

return statearr_32290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30475__auto__);
});})(c__30473__auto___32291,cs,m,dchan,dctr,done))
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
var args32348 = [];
var len__29087__auto___32351 = arguments.length;
var i__29088__auto___32352 = (0);
while(true){
if((i__29088__auto___32352 < len__29087__auto___32351)){
args32348.push((arguments[i__29088__auto___32352]));

var G__32353 = (i__29088__auto___32352 + (1));
i__29088__auto___32352 = G__32353;
continue;
} else {
}
break;
}

var G__32350 = args32348.length;
switch (G__32350) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32348.length)].join('')));

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
var x__28675__auto__ = (((m == null))?null:m);
var m__28676__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,m,ch);
} else {
var m__28676__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,m,ch);
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
var x__28675__auto__ = (((m == null))?null:m);
var m__28676__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,m,ch);
} else {
var m__28676__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,m,ch);
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
var x__28675__auto__ = (((m == null))?null:m);
var m__28676__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,m);
} else {
var m__28676__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,m);
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
var x__28675__auto__ = (((m == null))?null:m);
var m__28676__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,m,state_map);
} else {
var m__28676__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,m,state_map);
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
var x__28675__auto__ = (((m == null))?null:m);
var m__28676__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,m,mode);
} else {
var m__28676__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29094__auto__ = [];
var len__29087__auto___32365 = arguments.length;
var i__29088__auto___32366 = (0);
while(true){
if((i__29088__auto___32366 < len__29087__auto___32365)){
args__29094__auto__.push((arguments[i__29088__auto___32366]));

var G__32367 = (i__29088__auto___32366 + (1));
i__29088__auto___32366 = G__32367;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((3) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29095__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32359){
var map__32360 = p__32359;
var map__32360__$1 = ((((!((map__32360 == null)))?((((map__32360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32360):map__32360);
var opts = map__32360__$1;
var statearr_32362_32368 = state;
(statearr_32362_32368[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32360,map__32360__$1,opts){
return (function (val){
var statearr_32363_32369 = state;
(statearr_32363_32369[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32360,map__32360__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32364_32370 = state;
(statearr_32364_32370[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32355){
var G__32356 = cljs.core.first.call(null,seq32355);
var seq32355__$1 = cljs.core.next.call(null,seq32355);
var G__32357 = cljs.core.first.call(null,seq32355__$1);
var seq32355__$2 = cljs.core.next.call(null,seq32355__$1);
var G__32358 = cljs.core.first.call(null,seq32355__$2);
var seq32355__$3 = cljs.core.next.call(null,seq32355__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32356,G__32357,G__32358,seq32355__$3);
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
if(typeof cljs.core.async.t_cljs$core$async32536 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32536 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32537){
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
this.meta32537 = meta32537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32538,meta32537__$1){
var self__ = this;
var _32538__$1 = this;
return (new cljs.core.async.t_cljs$core$async32536(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32537__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32538){
var self__ = this;
var _32538__$1 = this;
return self__.meta32537;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async32536.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32537","meta32537",-843354765,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32536.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32536";

cljs.core.async.t_cljs$core$async32536.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cljs.core.async/t_cljs$core$async32536");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32536 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32536(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32537){
return (new cljs.core.async.t_cljs$core$async32536(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32537));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32536(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30473__auto___32701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30473__auto___32701,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30474__auto__ = (function (){var switch__30452__auto__ = ((function (c__30473__auto___32701,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32638){
var state_val_32639 = (state_32638[(1)]);
if((state_val_32639 === (7))){
var inst_32554 = (state_32638[(2)]);
var state_32638__$1 = state_32638;
var statearr_32640_32702 = state_32638__$1;
(statearr_32640_32702[(2)] = inst_32554);

(statearr_32640_32702[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (20))){
var inst_32566 = (state_32638[(7)]);
var state_32638__$1 = state_32638;
var statearr_32641_32703 = state_32638__$1;
(statearr_32641_32703[(2)] = inst_32566);

(statearr_32641_32703[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (27))){
var state_32638__$1 = state_32638;
var statearr_32642_32704 = state_32638__$1;
(statearr_32642_32704[(2)] = null);

(statearr_32642_32704[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (1))){
var inst_32542 = (state_32638[(8)]);
var inst_32542__$1 = calc_state.call(null);
var inst_32544 = (inst_32542__$1 == null);
var inst_32545 = cljs.core.not.call(null,inst_32544);
var state_32638__$1 = (function (){var statearr_32643 = state_32638;
(statearr_32643[(8)] = inst_32542__$1);

return statearr_32643;
})();
if(inst_32545){
var statearr_32644_32705 = state_32638__$1;
(statearr_32644_32705[(1)] = (2));

} else {
var statearr_32645_32706 = state_32638__$1;
(statearr_32645_32706[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (24))){
var inst_32598 = (state_32638[(9)]);
var inst_32589 = (state_32638[(10)]);
var inst_32612 = (state_32638[(11)]);
var inst_32612__$1 = inst_32589.call(null,inst_32598);
var state_32638__$1 = (function (){var statearr_32646 = state_32638;
(statearr_32646[(11)] = inst_32612__$1);

return statearr_32646;
})();
if(cljs.core.truth_(inst_32612__$1)){
var statearr_32647_32707 = state_32638__$1;
(statearr_32647_32707[(1)] = (29));

} else {
var statearr_32648_32708 = state_32638__$1;
(statearr_32648_32708[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (4))){
var inst_32557 = (state_32638[(2)]);
var state_32638__$1 = state_32638;
if(cljs.core.truth_(inst_32557)){
var statearr_32649_32709 = state_32638__$1;
(statearr_32649_32709[(1)] = (8));

} else {
var statearr_32650_32710 = state_32638__$1;
(statearr_32650_32710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (15))){
var inst_32583 = (state_32638[(2)]);
var state_32638__$1 = state_32638;
if(cljs.core.truth_(inst_32583)){
var statearr_32651_32711 = state_32638__$1;
(statearr_32651_32711[(1)] = (19));

} else {
var statearr_32652_32712 = state_32638__$1;
(statearr_32652_32712[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (21))){
var inst_32588 = (state_32638[(12)]);
var inst_32588__$1 = (state_32638[(2)]);
var inst_32589 = cljs.core.get.call(null,inst_32588__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32590 = cljs.core.get.call(null,inst_32588__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32591 = cljs.core.get.call(null,inst_32588__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32638__$1 = (function (){var statearr_32653 = state_32638;
(statearr_32653[(10)] = inst_32589);

(statearr_32653[(12)] = inst_32588__$1);

(statearr_32653[(13)] = inst_32590);

return statearr_32653;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32638__$1,(22),inst_32591);
} else {
if((state_val_32639 === (31))){
var inst_32620 = (state_32638[(2)]);
var state_32638__$1 = state_32638;
if(cljs.core.truth_(inst_32620)){
var statearr_32654_32713 = state_32638__$1;
(statearr_32654_32713[(1)] = (32));

} else {
var statearr_32655_32714 = state_32638__$1;
(statearr_32655_32714[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (32))){
var inst_32597 = (state_32638[(14)]);
var state_32638__$1 = state_32638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32638__$1,(35),out,inst_32597);
} else {
if((state_val_32639 === (33))){
var inst_32588 = (state_32638[(12)]);
var inst_32566 = inst_32588;
var state_32638__$1 = (function (){var statearr_32656 = state_32638;
(statearr_32656[(7)] = inst_32566);

return statearr_32656;
})();
var statearr_32657_32715 = state_32638__$1;
(statearr_32657_32715[(2)] = null);

(statearr_32657_32715[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (13))){
var inst_32566 = (state_32638[(7)]);
var inst_32573 = inst_32566.cljs$lang$protocol_mask$partition0$;
var inst_32574 = (inst_32573 & (64));
var inst_32575 = inst_32566.cljs$core$ISeq$;
var inst_32576 = (inst_32574) || (inst_32575);
var state_32638__$1 = state_32638;
if(cljs.core.truth_(inst_32576)){
var statearr_32658_32716 = state_32638__$1;
(statearr_32658_32716[(1)] = (16));

} else {
var statearr_32659_32717 = state_32638__$1;
(statearr_32659_32717[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (22))){
var inst_32597 = (state_32638[(14)]);
var inst_32598 = (state_32638[(9)]);
var inst_32596 = (state_32638[(2)]);
var inst_32597__$1 = cljs.core.nth.call(null,inst_32596,(0),null);
var inst_32598__$1 = cljs.core.nth.call(null,inst_32596,(1),null);
var inst_32599 = (inst_32597__$1 == null);
var inst_32600 = cljs.core._EQ_.call(null,inst_32598__$1,change);
var inst_32601 = (inst_32599) || (inst_32600);
var state_32638__$1 = (function (){var statearr_32660 = state_32638;
(statearr_32660[(14)] = inst_32597__$1);

(statearr_32660[(9)] = inst_32598__$1);

return statearr_32660;
})();
if(cljs.core.truth_(inst_32601)){
var statearr_32661_32718 = state_32638__$1;
(statearr_32661_32718[(1)] = (23));

} else {
var statearr_32662_32719 = state_32638__$1;
(statearr_32662_32719[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (36))){
var inst_32588 = (state_32638[(12)]);
var inst_32566 = inst_32588;
var state_32638__$1 = (function (){var statearr_32663 = state_32638;
(statearr_32663[(7)] = inst_32566);

return statearr_32663;
})();
var statearr_32664_32720 = state_32638__$1;
(statearr_32664_32720[(2)] = null);

(statearr_32664_32720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (29))){
var inst_32612 = (state_32638[(11)]);
var state_32638__$1 = state_32638;
var statearr_32665_32721 = state_32638__$1;
(statearr_32665_32721[(2)] = inst_32612);

(statearr_32665_32721[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (6))){
var state_32638__$1 = state_32638;
var statearr_32666_32722 = state_32638__$1;
(statearr_32666_32722[(2)] = false);

(statearr_32666_32722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (28))){
var inst_32608 = (state_32638[(2)]);
var inst_32609 = calc_state.call(null);
var inst_32566 = inst_32609;
var state_32638__$1 = (function (){var statearr_32667 = state_32638;
(statearr_32667[(15)] = inst_32608);

(statearr_32667[(7)] = inst_32566);

return statearr_32667;
})();
var statearr_32668_32723 = state_32638__$1;
(statearr_32668_32723[(2)] = null);

(statearr_32668_32723[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (25))){
var inst_32634 = (state_32638[(2)]);
var state_32638__$1 = state_32638;
var statearr_32669_32724 = state_32638__$1;
(statearr_32669_32724[(2)] = inst_32634);

(statearr_32669_32724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (34))){
var inst_32632 = (state_32638[(2)]);
var state_32638__$1 = state_32638;
var statearr_32670_32725 = state_32638__$1;
(statearr_32670_32725[(2)] = inst_32632);

(statearr_32670_32725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (17))){
var state_32638__$1 = state_32638;
var statearr_32671_32726 = state_32638__$1;
(statearr_32671_32726[(2)] = false);

(statearr_32671_32726[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (3))){
var state_32638__$1 = state_32638;
var statearr_32672_32727 = state_32638__$1;
(statearr_32672_32727[(2)] = false);

(statearr_32672_32727[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (12))){
var inst_32636 = (state_32638[(2)]);
var state_32638__$1 = state_32638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32638__$1,inst_32636);
} else {
if((state_val_32639 === (2))){
var inst_32542 = (state_32638[(8)]);
var inst_32547 = inst_32542.cljs$lang$protocol_mask$partition0$;
var inst_32548 = (inst_32547 & (64));
var inst_32549 = inst_32542.cljs$core$ISeq$;
var inst_32550 = (inst_32548) || (inst_32549);
var state_32638__$1 = state_32638;
if(cljs.core.truth_(inst_32550)){
var statearr_32673_32728 = state_32638__$1;
(statearr_32673_32728[(1)] = (5));

} else {
var statearr_32674_32729 = state_32638__$1;
(statearr_32674_32729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (23))){
var inst_32597 = (state_32638[(14)]);
var inst_32603 = (inst_32597 == null);
var state_32638__$1 = state_32638;
if(cljs.core.truth_(inst_32603)){
var statearr_32675_32730 = state_32638__$1;
(statearr_32675_32730[(1)] = (26));

} else {
var statearr_32676_32731 = state_32638__$1;
(statearr_32676_32731[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (35))){
var inst_32623 = (state_32638[(2)]);
var state_32638__$1 = state_32638;
if(cljs.core.truth_(inst_32623)){
var statearr_32677_32732 = state_32638__$1;
(statearr_32677_32732[(1)] = (36));

} else {
var statearr_32678_32733 = state_32638__$1;
(statearr_32678_32733[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (19))){
var inst_32566 = (state_32638[(7)]);
var inst_32585 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32566);
var state_32638__$1 = state_32638;
var statearr_32679_32734 = state_32638__$1;
(statearr_32679_32734[(2)] = inst_32585);

(statearr_32679_32734[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (11))){
var inst_32566 = (state_32638[(7)]);
var inst_32570 = (inst_32566 == null);
var inst_32571 = cljs.core.not.call(null,inst_32570);
var state_32638__$1 = state_32638;
if(inst_32571){
var statearr_32680_32735 = state_32638__$1;
(statearr_32680_32735[(1)] = (13));

} else {
var statearr_32681_32736 = state_32638__$1;
(statearr_32681_32736[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (9))){
var inst_32542 = (state_32638[(8)]);
var state_32638__$1 = state_32638;
var statearr_32682_32737 = state_32638__$1;
(statearr_32682_32737[(2)] = inst_32542);

(statearr_32682_32737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (5))){
var state_32638__$1 = state_32638;
var statearr_32683_32738 = state_32638__$1;
(statearr_32683_32738[(2)] = true);

(statearr_32683_32738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (14))){
var state_32638__$1 = state_32638;
var statearr_32684_32739 = state_32638__$1;
(statearr_32684_32739[(2)] = false);

(statearr_32684_32739[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (26))){
var inst_32598 = (state_32638[(9)]);
var inst_32605 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32598);
var state_32638__$1 = state_32638;
var statearr_32685_32740 = state_32638__$1;
(statearr_32685_32740[(2)] = inst_32605);

(statearr_32685_32740[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (16))){
var state_32638__$1 = state_32638;
var statearr_32686_32741 = state_32638__$1;
(statearr_32686_32741[(2)] = true);

(statearr_32686_32741[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (38))){
var inst_32628 = (state_32638[(2)]);
var state_32638__$1 = state_32638;
var statearr_32687_32742 = state_32638__$1;
(statearr_32687_32742[(2)] = inst_32628);

(statearr_32687_32742[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (30))){
var inst_32598 = (state_32638[(9)]);
var inst_32589 = (state_32638[(10)]);
var inst_32590 = (state_32638[(13)]);
var inst_32615 = cljs.core.empty_QMARK_.call(null,inst_32589);
var inst_32616 = inst_32590.call(null,inst_32598);
var inst_32617 = cljs.core.not.call(null,inst_32616);
var inst_32618 = (inst_32615) && (inst_32617);
var state_32638__$1 = state_32638;
var statearr_32688_32743 = state_32638__$1;
(statearr_32688_32743[(2)] = inst_32618);

(statearr_32688_32743[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (10))){
var inst_32542 = (state_32638[(8)]);
var inst_32562 = (state_32638[(2)]);
var inst_32563 = cljs.core.get.call(null,inst_32562,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32564 = cljs.core.get.call(null,inst_32562,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32565 = cljs.core.get.call(null,inst_32562,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32566 = inst_32542;
var state_32638__$1 = (function (){var statearr_32689 = state_32638;
(statearr_32689[(16)] = inst_32563);

(statearr_32689[(17)] = inst_32564);

(statearr_32689[(7)] = inst_32566);

(statearr_32689[(18)] = inst_32565);

return statearr_32689;
})();
var statearr_32690_32744 = state_32638__$1;
(statearr_32690_32744[(2)] = null);

(statearr_32690_32744[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (18))){
var inst_32580 = (state_32638[(2)]);
var state_32638__$1 = state_32638;
var statearr_32691_32745 = state_32638__$1;
(statearr_32691_32745[(2)] = inst_32580);

(statearr_32691_32745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (37))){
var state_32638__$1 = state_32638;
var statearr_32692_32746 = state_32638__$1;
(statearr_32692_32746[(2)] = null);

(statearr_32692_32746[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (8))){
var inst_32542 = (state_32638[(8)]);
var inst_32559 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32542);
var state_32638__$1 = state_32638;
var statearr_32693_32747 = state_32638__$1;
(statearr_32693_32747[(2)] = inst_32559);

(statearr_32693_32747[(1)] = (10));


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
});})(c__30473__auto___32701,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30452__auto__,c__30473__auto___32701,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30453__auto__ = null;
var cljs$core$async$mix_$_state_machine__30453__auto____0 = (function (){
var statearr_32697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32697[(0)] = cljs$core$async$mix_$_state_machine__30453__auto__);

(statearr_32697[(1)] = (1));

return statearr_32697;
});
var cljs$core$async$mix_$_state_machine__30453__auto____1 = (function (state_32638){
while(true){
var ret_value__30454__auto__ = (function (){try{while(true){
var result__30455__auto__ = switch__30452__auto__.call(null,state_32638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30455__auto__;
}
break;
}
}catch (e32698){if((e32698 instanceof Object)){
var ex__30456__auto__ = e32698;
var statearr_32699_32748 = state_32638;
(statearr_32699_32748[(5)] = ex__30456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32749 = state_32638;
state_32638 = G__32749;
continue;
} else {
return ret_value__30454__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30453__auto__ = function(state_32638){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30453__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30453__auto____1.call(this,state_32638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30453__auto____0;
cljs$core$async$mix_$_state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30453__auto____1;
return cljs$core$async$mix_$_state_machine__30453__auto__;
})()
;})(switch__30452__auto__,c__30473__auto___32701,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30475__auto__ = (function (){var statearr_32700 = f__30474__auto__.call(null);
(statearr_32700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30473__auto___32701);

return statearr_32700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30475__auto__);
});})(c__30473__auto___32701,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__28675__auto__ = (((p == null))?null:p);
var m__28676__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28676__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__28675__auto__ = (((p == null))?null:p);
var m__28676__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,p,v,ch);
} else {
var m__28676__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args32750 = [];
var len__29087__auto___32753 = arguments.length;
var i__29088__auto___32754 = (0);
while(true){
if((i__29088__auto___32754 < len__29087__auto___32753)){
args32750.push((arguments[i__29088__auto___32754]));

var G__32755 = (i__29088__auto___32754 + (1));
i__29088__auto___32754 = G__32755;
continue;
} else {
}
break;
}

var G__32752 = args32750.length;
switch (G__32752) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32750.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28675__auto__ = (((p == null))?null:p);
var m__28676__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,p);
} else {
var m__28676__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,p);
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
var x__28675__auto__ = (((p == null))?null:p);
var m__28676__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28675__auto__)]);
if(!((m__28676__auto__ == null))){
return m__28676__auto__.call(null,p,v);
} else {
var m__28676__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28676__auto____$1 == null))){
return m__28676__auto____$1.call(null,p,v);
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
var args32758 = [];
var len__29087__auto___32883 = arguments.length;
var i__29088__auto___32884 = (0);
while(true){
if((i__29088__auto___32884 < len__29087__auto___32883)){
args32758.push((arguments[i__29088__auto___32884]));

var G__32885 = (i__29088__auto___32884 + (1));
i__29088__auto___32884 = G__32885;
continue;
} else {
}
break;
}

var G__32760 = args32758.length;
switch (G__32760) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32758.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28012__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28012__auto__)){
return or__28012__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28012__auto__,mults){
return (function (p1__32757_SHARP_){
if(cljs.core.truth_(p1__32757_SHARP_.call(null,topic))){
return p1__32757_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32757_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28012__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32761 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32761 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32762){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32762 = meta32762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32763,meta32762__$1){
var self__ = this;
var _32763__$1 = this;
return (new cljs.core.async.t_cljs$core$async32761(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32762__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32761.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32763){
var self__ = this;
var _32763__$1 = this;
return self__.meta32762;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32761.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32761.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32761.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async32761.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32761.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async32761.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32761.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32761.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32762","meta32762",-162927370,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32761.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32761";

cljs.core.async.t_cljs$core$async32761.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cljs.core.async/t_cljs$core$async32761");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32761 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32761(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32762){
return (new cljs.core.async.t_cljs$core$async32761(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32762));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32761(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30473__auto___32887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30473__auto___32887,mults,ensure_mult,p){
return (function (){
var f__30474__auto__ = (function (){var switch__30452__auto__ = ((function (c__30473__auto___32887,mults,ensure_mult,p){
return (function (state_32835){
var state_val_32836 = (state_32835[(1)]);
if((state_val_32836 === (7))){
var inst_32831 = (state_32835[(2)]);
var state_32835__$1 = state_32835;
var statearr_32837_32888 = state_32835__$1;
(statearr_32837_32888[(2)] = inst_32831);

(statearr_32837_32888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (20))){
var state_32835__$1 = state_32835;
var statearr_32838_32889 = state_32835__$1;
(statearr_32838_32889[(2)] = null);

(statearr_32838_32889[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (1))){
var state_32835__$1 = state_32835;
var statearr_32839_32890 = state_32835__$1;
(statearr_32839_32890[(2)] = null);

(statearr_32839_32890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (24))){
var inst_32814 = (state_32835[(7)]);
var inst_32823 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32814);
var state_32835__$1 = state_32835;
var statearr_32840_32891 = state_32835__$1;
(statearr_32840_32891[(2)] = inst_32823);

(statearr_32840_32891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (4))){
var inst_32766 = (state_32835[(8)]);
var inst_32766__$1 = (state_32835[(2)]);
var inst_32767 = (inst_32766__$1 == null);
var state_32835__$1 = (function (){var statearr_32841 = state_32835;
(statearr_32841[(8)] = inst_32766__$1);

return statearr_32841;
})();
if(cljs.core.truth_(inst_32767)){
var statearr_32842_32892 = state_32835__$1;
(statearr_32842_32892[(1)] = (5));

} else {
var statearr_32843_32893 = state_32835__$1;
(statearr_32843_32893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (15))){
var inst_32808 = (state_32835[(2)]);
var state_32835__$1 = state_32835;
var statearr_32844_32894 = state_32835__$1;
(statearr_32844_32894[(2)] = inst_32808);

(statearr_32844_32894[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (21))){
var inst_32828 = (state_32835[(2)]);
var state_32835__$1 = (function (){var statearr_32845 = state_32835;
(statearr_32845[(9)] = inst_32828);

return statearr_32845;
})();
var statearr_32846_32895 = state_32835__$1;
(statearr_32846_32895[(2)] = null);

(statearr_32846_32895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (13))){
var inst_32790 = (state_32835[(10)]);
var inst_32792 = cljs.core.chunked_seq_QMARK_.call(null,inst_32790);
var state_32835__$1 = state_32835;
if(inst_32792){
var statearr_32847_32896 = state_32835__$1;
(statearr_32847_32896[(1)] = (16));

} else {
var statearr_32848_32897 = state_32835__$1;
(statearr_32848_32897[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (22))){
var inst_32820 = (state_32835[(2)]);
var state_32835__$1 = state_32835;
if(cljs.core.truth_(inst_32820)){
var statearr_32849_32898 = state_32835__$1;
(statearr_32849_32898[(1)] = (23));

} else {
var statearr_32850_32899 = state_32835__$1;
(statearr_32850_32899[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (6))){
var inst_32766 = (state_32835[(8)]);
var inst_32814 = (state_32835[(7)]);
var inst_32816 = (state_32835[(11)]);
var inst_32814__$1 = topic_fn.call(null,inst_32766);
var inst_32815 = cljs.core.deref.call(null,mults);
var inst_32816__$1 = cljs.core.get.call(null,inst_32815,inst_32814__$1);
var state_32835__$1 = (function (){var statearr_32851 = state_32835;
(statearr_32851[(7)] = inst_32814__$1);

(statearr_32851[(11)] = inst_32816__$1);

return statearr_32851;
})();
if(cljs.core.truth_(inst_32816__$1)){
var statearr_32852_32900 = state_32835__$1;
(statearr_32852_32900[(1)] = (19));

} else {
var statearr_32853_32901 = state_32835__$1;
(statearr_32853_32901[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (25))){
var inst_32825 = (state_32835[(2)]);
var state_32835__$1 = state_32835;
var statearr_32854_32902 = state_32835__$1;
(statearr_32854_32902[(2)] = inst_32825);

(statearr_32854_32902[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (17))){
var inst_32790 = (state_32835[(10)]);
var inst_32799 = cljs.core.first.call(null,inst_32790);
var inst_32800 = cljs.core.async.muxch_STAR_.call(null,inst_32799);
var inst_32801 = cljs.core.async.close_BANG_.call(null,inst_32800);
var inst_32802 = cljs.core.next.call(null,inst_32790);
var inst_32776 = inst_32802;
var inst_32777 = null;
var inst_32778 = (0);
var inst_32779 = (0);
var state_32835__$1 = (function (){var statearr_32855 = state_32835;
(statearr_32855[(12)] = inst_32777);

(statearr_32855[(13)] = inst_32778);

(statearr_32855[(14)] = inst_32776);

(statearr_32855[(15)] = inst_32779);

(statearr_32855[(16)] = inst_32801);

return statearr_32855;
})();
var statearr_32856_32903 = state_32835__$1;
(statearr_32856_32903[(2)] = null);

(statearr_32856_32903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (3))){
var inst_32833 = (state_32835[(2)]);
var state_32835__$1 = state_32835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32835__$1,inst_32833);
} else {
if((state_val_32836 === (12))){
var inst_32810 = (state_32835[(2)]);
var state_32835__$1 = state_32835;
var statearr_32857_32904 = state_32835__$1;
(statearr_32857_32904[(2)] = inst_32810);

(statearr_32857_32904[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (2))){
var state_32835__$1 = state_32835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32835__$1,(4),ch);
} else {
if((state_val_32836 === (23))){
var state_32835__$1 = state_32835;
var statearr_32858_32905 = state_32835__$1;
(statearr_32858_32905[(2)] = null);

(statearr_32858_32905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (19))){
var inst_32766 = (state_32835[(8)]);
var inst_32816 = (state_32835[(11)]);
var inst_32818 = cljs.core.async.muxch_STAR_.call(null,inst_32816);
var state_32835__$1 = state_32835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32835__$1,(22),inst_32818,inst_32766);
} else {
if((state_val_32836 === (11))){
var inst_32790 = (state_32835[(10)]);
var inst_32776 = (state_32835[(14)]);
var inst_32790__$1 = cljs.core.seq.call(null,inst_32776);
var state_32835__$1 = (function (){var statearr_32859 = state_32835;
(statearr_32859[(10)] = inst_32790__$1);

return statearr_32859;
})();
if(inst_32790__$1){
var statearr_32860_32906 = state_32835__$1;
(statearr_32860_32906[(1)] = (13));

} else {
var statearr_32861_32907 = state_32835__$1;
(statearr_32861_32907[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (9))){
var inst_32812 = (state_32835[(2)]);
var state_32835__$1 = state_32835;
var statearr_32862_32908 = state_32835__$1;
(statearr_32862_32908[(2)] = inst_32812);

(statearr_32862_32908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (5))){
var inst_32773 = cljs.core.deref.call(null,mults);
var inst_32774 = cljs.core.vals.call(null,inst_32773);
var inst_32775 = cljs.core.seq.call(null,inst_32774);
var inst_32776 = inst_32775;
var inst_32777 = null;
var inst_32778 = (0);
var inst_32779 = (0);
var state_32835__$1 = (function (){var statearr_32863 = state_32835;
(statearr_32863[(12)] = inst_32777);

(statearr_32863[(13)] = inst_32778);

(statearr_32863[(14)] = inst_32776);

(statearr_32863[(15)] = inst_32779);

return statearr_32863;
})();
var statearr_32864_32909 = state_32835__$1;
(statearr_32864_32909[(2)] = null);

(statearr_32864_32909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (14))){
var state_32835__$1 = state_32835;
var statearr_32868_32910 = state_32835__$1;
(statearr_32868_32910[(2)] = null);

(statearr_32868_32910[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (16))){
var inst_32790 = (state_32835[(10)]);
var inst_32794 = cljs.core.chunk_first.call(null,inst_32790);
var inst_32795 = cljs.core.chunk_rest.call(null,inst_32790);
var inst_32796 = cljs.core.count.call(null,inst_32794);
var inst_32776 = inst_32795;
var inst_32777 = inst_32794;
var inst_32778 = inst_32796;
var inst_32779 = (0);
var state_32835__$1 = (function (){var statearr_32869 = state_32835;
(statearr_32869[(12)] = inst_32777);

(statearr_32869[(13)] = inst_32778);

(statearr_32869[(14)] = inst_32776);

(statearr_32869[(15)] = inst_32779);

return statearr_32869;
})();
var statearr_32870_32911 = state_32835__$1;
(statearr_32870_32911[(2)] = null);

(statearr_32870_32911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (10))){
var inst_32777 = (state_32835[(12)]);
var inst_32778 = (state_32835[(13)]);
var inst_32776 = (state_32835[(14)]);
var inst_32779 = (state_32835[(15)]);
var inst_32784 = cljs.core._nth.call(null,inst_32777,inst_32779);
var inst_32785 = cljs.core.async.muxch_STAR_.call(null,inst_32784);
var inst_32786 = cljs.core.async.close_BANG_.call(null,inst_32785);
var inst_32787 = (inst_32779 + (1));
var tmp32865 = inst_32777;
var tmp32866 = inst_32778;
var tmp32867 = inst_32776;
var inst_32776__$1 = tmp32867;
var inst_32777__$1 = tmp32865;
var inst_32778__$1 = tmp32866;
var inst_32779__$1 = inst_32787;
var state_32835__$1 = (function (){var statearr_32871 = state_32835;
(statearr_32871[(12)] = inst_32777__$1);

(statearr_32871[(13)] = inst_32778__$1);

(statearr_32871[(14)] = inst_32776__$1);

(statearr_32871[(15)] = inst_32779__$1);

(statearr_32871[(17)] = inst_32786);

return statearr_32871;
})();
var statearr_32872_32912 = state_32835__$1;
(statearr_32872_32912[(2)] = null);

(statearr_32872_32912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (18))){
var inst_32805 = (state_32835[(2)]);
var state_32835__$1 = state_32835;
var statearr_32873_32913 = state_32835__$1;
(statearr_32873_32913[(2)] = inst_32805);

(statearr_32873_32913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (8))){
var inst_32778 = (state_32835[(13)]);
var inst_32779 = (state_32835[(15)]);
var inst_32781 = (inst_32779 < inst_32778);
var inst_32782 = inst_32781;
var state_32835__$1 = state_32835;
if(cljs.core.truth_(inst_32782)){
var statearr_32874_32914 = state_32835__$1;
(statearr_32874_32914[(1)] = (10));

} else {
var statearr_32875_32915 = state_32835__$1;
(statearr_32875_32915[(1)] = (11));

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
});})(c__30473__auto___32887,mults,ensure_mult,p))
;
return ((function (switch__30452__auto__,c__30473__auto___32887,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30453__auto__ = null;
var cljs$core$async$state_machine__30453__auto____0 = (function (){
var statearr_32879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32879[(0)] = cljs$core$async$state_machine__30453__auto__);

(statearr_32879[(1)] = (1));

return statearr_32879;
});
var cljs$core$async$state_machine__30453__auto____1 = (function (state_32835){
while(true){
var ret_value__30454__auto__ = (function (){try{while(true){
var result__30455__auto__ = switch__30452__auto__.call(null,state_32835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30455__auto__;
}
break;
}
}catch (e32880){if((e32880 instanceof Object)){
var ex__30456__auto__ = e32880;
var statearr_32881_32916 = state_32835;
(statearr_32881_32916[(5)] = ex__30456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32917 = state_32835;
state_32835 = G__32917;
continue;
} else {
return ret_value__30454__auto__;
}
break;
}
});
cljs$core$async$state_machine__30453__auto__ = function(state_32835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30453__auto____1.call(this,state_32835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30453__auto____0;
cljs$core$async$state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30453__auto____1;
return cljs$core$async$state_machine__30453__auto__;
})()
;})(switch__30452__auto__,c__30473__auto___32887,mults,ensure_mult,p))
})();
var state__30475__auto__ = (function (){var statearr_32882 = f__30474__auto__.call(null);
(statearr_32882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30473__auto___32887);

return statearr_32882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30475__auto__);
});})(c__30473__auto___32887,mults,ensure_mult,p))
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
var args32918 = [];
var len__29087__auto___32921 = arguments.length;
var i__29088__auto___32922 = (0);
while(true){
if((i__29088__auto___32922 < len__29087__auto___32921)){
args32918.push((arguments[i__29088__auto___32922]));

var G__32923 = (i__29088__auto___32922 + (1));
i__29088__auto___32922 = G__32923;
continue;
} else {
}
break;
}

var G__32920 = args32918.length;
switch (G__32920) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32918.length)].join('')));

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
var args32925 = [];
var len__29087__auto___32928 = arguments.length;
var i__29088__auto___32929 = (0);
while(true){
if((i__29088__auto___32929 < len__29087__auto___32928)){
args32925.push((arguments[i__29088__auto___32929]));

var G__32930 = (i__29088__auto___32929 + (1));
i__29088__auto___32929 = G__32930;
continue;
} else {
}
break;
}

var G__32927 = args32925.length;
switch (G__32927) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32925.length)].join('')));

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
var args32932 = [];
var len__29087__auto___33003 = arguments.length;
var i__29088__auto___33004 = (0);
while(true){
if((i__29088__auto___33004 < len__29087__auto___33003)){
args32932.push((arguments[i__29088__auto___33004]));

var G__33005 = (i__29088__auto___33004 + (1));
i__29088__auto___33004 = G__33005;
continue;
} else {
}
break;
}

var G__32934 = args32932.length;
switch (G__32934) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32932.length)].join('')));

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
var c__30473__auto___33007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30473__auto___33007,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30474__auto__ = (function (){var switch__30452__auto__ = ((function (c__30473__auto___33007,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32973){
var state_val_32974 = (state_32973[(1)]);
if((state_val_32974 === (7))){
var state_32973__$1 = state_32973;
var statearr_32975_33008 = state_32973__$1;
(statearr_32975_33008[(2)] = null);

(statearr_32975_33008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32974 === (1))){
var state_32973__$1 = state_32973;
var statearr_32976_33009 = state_32973__$1;
(statearr_32976_33009[(2)] = null);

(statearr_32976_33009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32974 === (4))){
var inst_32937 = (state_32973[(7)]);
var inst_32939 = (inst_32937 < cnt);
var state_32973__$1 = state_32973;
if(cljs.core.truth_(inst_32939)){
var statearr_32977_33010 = state_32973__$1;
(statearr_32977_33010[(1)] = (6));

} else {
var statearr_32978_33011 = state_32973__$1;
(statearr_32978_33011[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32974 === (15))){
var inst_32969 = (state_32973[(2)]);
var state_32973__$1 = state_32973;
var statearr_32979_33012 = state_32973__$1;
(statearr_32979_33012[(2)] = inst_32969);

(statearr_32979_33012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32974 === (13))){
var inst_32962 = cljs.core.async.close_BANG_.call(null,out);
var state_32973__$1 = state_32973;
var statearr_32980_33013 = state_32973__$1;
(statearr_32980_33013[(2)] = inst_32962);

(statearr_32980_33013[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32974 === (6))){
var state_32973__$1 = state_32973;
var statearr_32981_33014 = state_32973__$1;
(statearr_32981_33014[(2)] = null);

(statearr_32981_33014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32974 === (3))){
var inst_32971 = (state_32973[(2)]);
var state_32973__$1 = state_32973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32973__$1,inst_32971);
} else {
if((state_val_32974 === (12))){
var inst_32959 = (state_32973[(8)]);
var inst_32959__$1 = (state_32973[(2)]);
var inst_32960 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32959__$1);
var state_32973__$1 = (function (){var statearr_32982 = state_32973;
(statearr_32982[(8)] = inst_32959__$1);

return statearr_32982;
})();
if(cljs.core.truth_(inst_32960)){
var statearr_32983_33015 = state_32973__$1;
(statearr_32983_33015[(1)] = (13));

} else {
var statearr_32984_33016 = state_32973__$1;
(statearr_32984_33016[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32974 === (2))){
var inst_32936 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32937 = (0);
var state_32973__$1 = (function (){var statearr_32985 = state_32973;
(statearr_32985[(9)] = inst_32936);

(statearr_32985[(7)] = inst_32937);

return statearr_32985;
})();
var statearr_32986_33017 = state_32973__$1;
(statearr_32986_33017[(2)] = null);

(statearr_32986_33017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32974 === (11))){
var inst_32937 = (state_32973[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32973,(10),Object,null,(9));
var inst_32946 = chs__$1.call(null,inst_32937);
var inst_32947 = done.call(null,inst_32937);
var inst_32948 = cljs.core.async.take_BANG_.call(null,inst_32946,inst_32947);
var state_32973__$1 = state_32973;
var statearr_32987_33018 = state_32973__$1;
(statearr_32987_33018[(2)] = inst_32948);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32973__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32974 === (9))){
var inst_32937 = (state_32973[(7)]);
var inst_32950 = (state_32973[(2)]);
var inst_32951 = (inst_32937 + (1));
var inst_32937__$1 = inst_32951;
var state_32973__$1 = (function (){var statearr_32988 = state_32973;
(statearr_32988[(7)] = inst_32937__$1);

(statearr_32988[(10)] = inst_32950);

return statearr_32988;
})();
var statearr_32989_33019 = state_32973__$1;
(statearr_32989_33019[(2)] = null);

(statearr_32989_33019[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32974 === (5))){
var inst_32957 = (state_32973[(2)]);
var state_32973__$1 = (function (){var statearr_32990 = state_32973;
(statearr_32990[(11)] = inst_32957);

return statearr_32990;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32973__$1,(12),dchan);
} else {
if((state_val_32974 === (14))){
var inst_32959 = (state_32973[(8)]);
var inst_32964 = cljs.core.apply.call(null,f,inst_32959);
var state_32973__$1 = state_32973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32973__$1,(16),out,inst_32964);
} else {
if((state_val_32974 === (16))){
var inst_32966 = (state_32973[(2)]);
var state_32973__$1 = (function (){var statearr_32991 = state_32973;
(statearr_32991[(12)] = inst_32966);

return statearr_32991;
})();
var statearr_32992_33020 = state_32973__$1;
(statearr_32992_33020[(2)] = null);

(statearr_32992_33020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32974 === (10))){
var inst_32941 = (state_32973[(2)]);
var inst_32942 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32973__$1 = (function (){var statearr_32993 = state_32973;
(statearr_32993[(13)] = inst_32941);

return statearr_32993;
})();
var statearr_32994_33021 = state_32973__$1;
(statearr_32994_33021[(2)] = inst_32942);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32973__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32974 === (8))){
var inst_32955 = (state_32973[(2)]);
var state_32973__$1 = state_32973;
var statearr_32995_33022 = state_32973__$1;
(statearr_32995_33022[(2)] = inst_32955);

(statearr_32995_33022[(1)] = (5));


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
});})(c__30473__auto___33007,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30452__auto__,c__30473__auto___33007,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30453__auto__ = null;
var cljs$core$async$state_machine__30453__auto____0 = (function (){
var statearr_32999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32999[(0)] = cljs$core$async$state_machine__30453__auto__);

(statearr_32999[(1)] = (1));

return statearr_32999;
});
var cljs$core$async$state_machine__30453__auto____1 = (function (state_32973){
while(true){
var ret_value__30454__auto__ = (function (){try{while(true){
var result__30455__auto__ = switch__30452__auto__.call(null,state_32973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30455__auto__;
}
break;
}
}catch (e33000){if((e33000 instanceof Object)){
var ex__30456__auto__ = e33000;
var statearr_33001_33023 = state_32973;
(statearr_33001_33023[(5)] = ex__30456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33024 = state_32973;
state_32973 = G__33024;
continue;
} else {
return ret_value__30454__auto__;
}
break;
}
});
cljs$core$async$state_machine__30453__auto__ = function(state_32973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30453__auto____1.call(this,state_32973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30453__auto____0;
cljs$core$async$state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30453__auto____1;
return cljs$core$async$state_machine__30453__auto__;
})()
;})(switch__30452__auto__,c__30473__auto___33007,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30475__auto__ = (function (){var statearr_33002 = f__30474__auto__.call(null);
(statearr_33002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30473__auto___33007);

return statearr_33002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30475__auto__);
});})(c__30473__auto___33007,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args33026 = [];
var len__29087__auto___33084 = arguments.length;
var i__29088__auto___33085 = (0);
while(true){
if((i__29088__auto___33085 < len__29087__auto___33084)){
args33026.push((arguments[i__29088__auto___33085]));

var G__33086 = (i__29088__auto___33085 + (1));
i__29088__auto___33085 = G__33086;
continue;
} else {
}
break;
}

var G__33028 = args33026.length;
switch (G__33028) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33026.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30473__auto___33088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30473__auto___33088,out){
return (function (){
var f__30474__auto__ = (function (){var switch__30452__auto__ = ((function (c__30473__auto___33088,out){
return (function (state_33060){
var state_val_33061 = (state_33060[(1)]);
if((state_val_33061 === (7))){
var inst_33040 = (state_33060[(7)]);
var inst_33039 = (state_33060[(8)]);
var inst_33039__$1 = (state_33060[(2)]);
var inst_33040__$1 = cljs.core.nth.call(null,inst_33039__$1,(0),null);
var inst_33041 = cljs.core.nth.call(null,inst_33039__$1,(1),null);
var inst_33042 = (inst_33040__$1 == null);
var state_33060__$1 = (function (){var statearr_33062 = state_33060;
(statearr_33062[(7)] = inst_33040__$1);

(statearr_33062[(9)] = inst_33041);

(statearr_33062[(8)] = inst_33039__$1);

return statearr_33062;
})();
if(cljs.core.truth_(inst_33042)){
var statearr_33063_33089 = state_33060__$1;
(statearr_33063_33089[(1)] = (8));

} else {
var statearr_33064_33090 = state_33060__$1;
(statearr_33064_33090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (1))){
var inst_33029 = cljs.core.vec.call(null,chs);
var inst_33030 = inst_33029;
var state_33060__$1 = (function (){var statearr_33065 = state_33060;
(statearr_33065[(10)] = inst_33030);

return statearr_33065;
})();
var statearr_33066_33091 = state_33060__$1;
(statearr_33066_33091[(2)] = null);

(statearr_33066_33091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (4))){
var inst_33030 = (state_33060[(10)]);
var state_33060__$1 = state_33060;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33060__$1,(7),inst_33030);
} else {
if((state_val_33061 === (6))){
var inst_33056 = (state_33060[(2)]);
var state_33060__$1 = state_33060;
var statearr_33067_33092 = state_33060__$1;
(statearr_33067_33092[(2)] = inst_33056);

(statearr_33067_33092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (3))){
var inst_33058 = (state_33060[(2)]);
var state_33060__$1 = state_33060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33060__$1,inst_33058);
} else {
if((state_val_33061 === (2))){
var inst_33030 = (state_33060[(10)]);
var inst_33032 = cljs.core.count.call(null,inst_33030);
var inst_33033 = (inst_33032 > (0));
var state_33060__$1 = state_33060;
if(cljs.core.truth_(inst_33033)){
var statearr_33069_33093 = state_33060__$1;
(statearr_33069_33093[(1)] = (4));

} else {
var statearr_33070_33094 = state_33060__$1;
(statearr_33070_33094[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (11))){
var inst_33030 = (state_33060[(10)]);
var inst_33049 = (state_33060[(2)]);
var tmp33068 = inst_33030;
var inst_33030__$1 = tmp33068;
var state_33060__$1 = (function (){var statearr_33071 = state_33060;
(statearr_33071[(11)] = inst_33049);

(statearr_33071[(10)] = inst_33030__$1);

return statearr_33071;
})();
var statearr_33072_33095 = state_33060__$1;
(statearr_33072_33095[(2)] = null);

(statearr_33072_33095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (9))){
var inst_33040 = (state_33060[(7)]);
var state_33060__$1 = state_33060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33060__$1,(11),out,inst_33040);
} else {
if((state_val_33061 === (5))){
var inst_33054 = cljs.core.async.close_BANG_.call(null,out);
var state_33060__$1 = state_33060;
var statearr_33073_33096 = state_33060__$1;
(statearr_33073_33096[(2)] = inst_33054);

(statearr_33073_33096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (10))){
var inst_33052 = (state_33060[(2)]);
var state_33060__$1 = state_33060;
var statearr_33074_33097 = state_33060__$1;
(statearr_33074_33097[(2)] = inst_33052);

(statearr_33074_33097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (8))){
var inst_33040 = (state_33060[(7)]);
var inst_33041 = (state_33060[(9)]);
var inst_33039 = (state_33060[(8)]);
var inst_33030 = (state_33060[(10)]);
var inst_33044 = (function (){var cs = inst_33030;
var vec__33035 = inst_33039;
var v = inst_33040;
var c = inst_33041;
return ((function (cs,vec__33035,v,c,inst_33040,inst_33041,inst_33039,inst_33030,state_val_33061,c__30473__auto___33088,out){
return (function (p1__33025_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33025_SHARP_);
});
;})(cs,vec__33035,v,c,inst_33040,inst_33041,inst_33039,inst_33030,state_val_33061,c__30473__auto___33088,out))
})();
var inst_33045 = cljs.core.filterv.call(null,inst_33044,inst_33030);
var inst_33030__$1 = inst_33045;
var state_33060__$1 = (function (){var statearr_33075 = state_33060;
(statearr_33075[(10)] = inst_33030__$1);

return statearr_33075;
})();
var statearr_33076_33098 = state_33060__$1;
(statearr_33076_33098[(2)] = null);

(statearr_33076_33098[(1)] = (2));


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
});})(c__30473__auto___33088,out))
;
return ((function (switch__30452__auto__,c__30473__auto___33088,out){
return (function() {
var cljs$core$async$state_machine__30453__auto__ = null;
var cljs$core$async$state_machine__30453__auto____0 = (function (){
var statearr_33080 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33080[(0)] = cljs$core$async$state_machine__30453__auto__);

(statearr_33080[(1)] = (1));

return statearr_33080;
});
var cljs$core$async$state_machine__30453__auto____1 = (function (state_33060){
while(true){
var ret_value__30454__auto__ = (function (){try{while(true){
var result__30455__auto__ = switch__30452__auto__.call(null,state_33060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30455__auto__;
}
break;
}
}catch (e33081){if((e33081 instanceof Object)){
var ex__30456__auto__ = e33081;
var statearr_33082_33099 = state_33060;
(statearr_33082_33099[(5)] = ex__30456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33100 = state_33060;
state_33060 = G__33100;
continue;
} else {
return ret_value__30454__auto__;
}
break;
}
});
cljs$core$async$state_machine__30453__auto__ = function(state_33060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30453__auto____1.call(this,state_33060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30453__auto____0;
cljs$core$async$state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30453__auto____1;
return cljs$core$async$state_machine__30453__auto__;
})()
;})(switch__30452__auto__,c__30473__auto___33088,out))
})();
var state__30475__auto__ = (function (){var statearr_33083 = f__30474__auto__.call(null);
(statearr_33083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30473__auto___33088);

return statearr_33083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30475__auto__);
});})(c__30473__auto___33088,out))
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
var args33101 = [];
var len__29087__auto___33150 = arguments.length;
var i__29088__auto___33151 = (0);
while(true){
if((i__29088__auto___33151 < len__29087__auto___33150)){
args33101.push((arguments[i__29088__auto___33151]));

var G__33152 = (i__29088__auto___33151 + (1));
i__29088__auto___33151 = G__33152;
continue;
} else {
}
break;
}

var G__33103 = args33101.length;
switch (G__33103) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33101.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30473__auto___33154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30473__auto___33154,out){
return (function (){
var f__30474__auto__ = (function (){var switch__30452__auto__ = ((function (c__30473__auto___33154,out){
return (function (state_33127){
var state_val_33128 = (state_33127[(1)]);
if((state_val_33128 === (7))){
var inst_33109 = (state_33127[(7)]);
var inst_33109__$1 = (state_33127[(2)]);
var inst_33110 = (inst_33109__$1 == null);
var inst_33111 = cljs.core.not.call(null,inst_33110);
var state_33127__$1 = (function (){var statearr_33129 = state_33127;
(statearr_33129[(7)] = inst_33109__$1);

return statearr_33129;
})();
if(inst_33111){
var statearr_33130_33155 = state_33127__$1;
(statearr_33130_33155[(1)] = (8));

} else {
var statearr_33131_33156 = state_33127__$1;
(statearr_33131_33156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33128 === (1))){
var inst_33104 = (0);
var state_33127__$1 = (function (){var statearr_33132 = state_33127;
(statearr_33132[(8)] = inst_33104);

return statearr_33132;
})();
var statearr_33133_33157 = state_33127__$1;
(statearr_33133_33157[(2)] = null);

(statearr_33133_33157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33128 === (4))){
var state_33127__$1 = state_33127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33127__$1,(7),ch);
} else {
if((state_val_33128 === (6))){
var inst_33122 = (state_33127[(2)]);
var state_33127__$1 = state_33127;
var statearr_33134_33158 = state_33127__$1;
(statearr_33134_33158[(2)] = inst_33122);

(statearr_33134_33158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33128 === (3))){
var inst_33124 = (state_33127[(2)]);
var inst_33125 = cljs.core.async.close_BANG_.call(null,out);
var state_33127__$1 = (function (){var statearr_33135 = state_33127;
(statearr_33135[(9)] = inst_33124);

return statearr_33135;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33127__$1,inst_33125);
} else {
if((state_val_33128 === (2))){
var inst_33104 = (state_33127[(8)]);
var inst_33106 = (inst_33104 < n);
var state_33127__$1 = state_33127;
if(cljs.core.truth_(inst_33106)){
var statearr_33136_33159 = state_33127__$1;
(statearr_33136_33159[(1)] = (4));

} else {
var statearr_33137_33160 = state_33127__$1;
(statearr_33137_33160[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33128 === (11))){
var inst_33104 = (state_33127[(8)]);
var inst_33114 = (state_33127[(2)]);
var inst_33115 = (inst_33104 + (1));
var inst_33104__$1 = inst_33115;
var state_33127__$1 = (function (){var statearr_33138 = state_33127;
(statearr_33138[(10)] = inst_33114);

(statearr_33138[(8)] = inst_33104__$1);

return statearr_33138;
})();
var statearr_33139_33161 = state_33127__$1;
(statearr_33139_33161[(2)] = null);

(statearr_33139_33161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33128 === (9))){
var state_33127__$1 = state_33127;
var statearr_33140_33162 = state_33127__$1;
(statearr_33140_33162[(2)] = null);

(statearr_33140_33162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33128 === (5))){
var state_33127__$1 = state_33127;
var statearr_33141_33163 = state_33127__$1;
(statearr_33141_33163[(2)] = null);

(statearr_33141_33163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33128 === (10))){
var inst_33119 = (state_33127[(2)]);
var state_33127__$1 = state_33127;
var statearr_33142_33164 = state_33127__$1;
(statearr_33142_33164[(2)] = inst_33119);

(statearr_33142_33164[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33128 === (8))){
var inst_33109 = (state_33127[(7)]);
var state_33127__$1 = state_33127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33127__$1,(11),out,inst_33109);
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
});})(c__30473__auto___33154,out))
;
return ((function (switch__30452__auto__,c__30473__auto___33154,out){
return (function() {
var cljs$core$async$state_machine__30453__auto__ = null;
var cljs$core$async$state_machine__30453__auto____0 = (function (){
var statearr_33146 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33146[(0)] = cljs$core$async$state_machine__30453__auto__);

(statearr_33146[(1)] = (1));

return statearr_33146;
});
var cljs$core$async$state_machine__30453__auto____1 = (function (state_33127){
while(true){
var ret_value__30454__auto__ = (function (){try{while(true){
var result__30455__auto__ = switch__30452__auto__.call(null,state_33127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30455__auto__;
}
break;
}
}catch (e33147){if((e33147 instanceof Object)){
var ex__30456__auto__ = e33147;
var statearr_33148_33165 = state_33127;
(statearr_33148_33165[(5)] = ex__30456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33166 = state_33127;
state_33127 = G__33166;
continue;
} else {
return ret_value__30454__auto__;
}
break;
}
});
cljs$core$async$state_machine__30453__auto__ = function(state_33127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30453__auto____1.call(this,state_33127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30453__auto____0;
cljs$core$async$state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30453__auto____1;
return cljs$core$async$state_machine__30453__auto__;
})()
;})(switch__30452__auto__,c__30473__auto___33154,out))
})();
var state__30475__auto__ = (function (){var statearr_33149 = f__30474__auto__.call(null);
(statearr_33149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30473__auto___33154);

return statearr_33149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30475__auto__);
});})(c__30473__auto___33154,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33174 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33174 = (function (map_LT_,f,ch,meta33175){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33175 = meta33175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33176,meta33175__$1){
var self__ = this;
var _33176__$1 = this;
return (new cljs.core.async.t_cljs$core$async33174(self__.map_LT_,self__.f,self__.ch,meta33175__$1));
});

cljs.core.async.t_cljs$core$async33174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33176){
var self__ = this;
var _33176__$1 = this;
return self__.meta33175;
});

cljs.core.async.t_cljs$core$async33174.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33174.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33174.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33174.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33174.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33177 = (function (map_LT_,f,ch,meta33175,_,fn1,meta33178){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33175 = meta33175;
this._ = _;
this.fn1 = fn1;
this.meta33178 = meta33178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33179,meta33178__$1){
var self__ = this;
var _33179__$1 = this;
return (new cljs.core.async.t_cljs$core$async33177(self__.map_LT_,self__.f,self__.ch,self__.meta33175,self__._,self__.fn1,meta33178__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33179){
var self__ = this;
var _33179__$1 = this;
return self__.meta33178;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33177.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33177.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33167_SHARP_){
return f1.call(null,(((p1__33167_SHARP_ == null))?null:self__.f.call(null,p1__33167_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33177.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33175","meta33175",128832095,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33174","cljs.core.async/t_cljs$core$async33174",-1663375114,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33178","meta33178",-963844702,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33177";

cljs.core.async.t_cljs$core$async33177.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cljs.core.async/t_cljs$core$async33177");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33177 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33177(map_LT___$1,f__$1,ch__$1,meta33175__$1,___$2,fn1__$1,meta33178){
return (new cljs.core.async.t_cljs$core$async33177(map_LT___$1,f__$1,ch__$1,meta33175__$1,___$2,fn1__$1,meta33178));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33177(self__.map_LT_,self__.f,self__.ch,self__.meta33175,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28000__auto__ = ret;
if(cljs.core.truth_(and__28000__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28000__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33174.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33174.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33175","meta33175",128832095,null)], null);
});

cljs.core.async.t_cljs$core$async33174.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33174";

cljs.core.async.t_cljs$core$async33174.cljs$lang$ctorPrWriter = (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cljs.core.async/t_cljs$core$async33174");
});

cljs.core.async.__GT_t_cljs$core$async33174 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33174(map_LT___$1,f__$1,ch__$1,meta33175){
return (new cljs.core.async.t_cljs$core$async33174(map_LT___$1,f__$1,ch__$1,meta33175));
});

}

return (new cljs.core.async.t_cljs$core$async33174(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33183 = (function (map_GT_,f,ch,meta33184){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta33184 = meta33184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33185,meta33184__$1){
var self__ = this;
var _33185__$1 = this;
return (new cljs.core.async.t_cljs$core$async33183(self__.map_GT_,self__.f,self__.ch,meta33184__$1));
});

cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33185){
var self__ = this;
var _33185__$1 = this;
return self__.meta33184;
});

cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33184","meta33184",-476384697,null)], null);
});

cljs.core.async.t_cljs$core$async33183.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33183";

cljs.core.async.t_cljs$core$async33183.cljs$lang$ctorPrWriter = (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cljs.core.async/t_cljs$core$async33183");
});

cljs.core.async.__GT_t_cljs$core$async33183 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33183(map_GT___$1,f__$1,ch__$1,meta33184){
return (new cljs.core.async.t_cljs$core$async33183(map_GT___$1,f__$1,ch__$1,meta33184));
});

}

return (new cljs.core.async.t_cljs$core$async33183(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33189 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33189 = (function (filter_GT_,p,ch,meta33190){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta33190 = meta33190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33191,meta33190__$1){
var self__ = this;
var _33191__$1 = this;
return (new cljs.core.async.t_cljs$core$async33189(self__.filter_GT_,self__.p,self__.ch,meta33190__$1));
});

cljs.core.async.t_cljs$core$async33189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33191){
var self__ = this;
var _33191__$1 = this;
return self__.meta33190;
});

cljs.core.async.t_cljs$core$async33189.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33189.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33189.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33189.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33189.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33189.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33189.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33189.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33190","meta33190",-825061982,null)], null);
});

cljs.core.async.t_cljs$core$async33189.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33189.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33189";

cljs.core.async.t_cljs$core$async33189.cljs$lang$ctorPrWriter = (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cljs.core.async/t_cljs$core$async33189");
});

cljs.core.async.__GT_t_cljs$core$async33189 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33189(filter_GT___$1,p__$1,ch__$1,meta33190){
return (new cljs.core.async.t_cljs$core$async33189(filter_GT___$1,p__$1,ch__$1,meta33190));
});

}

return (new cljs.core.async.t_cljs$core$async33189(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args33192 = [];
var len__29087__auto___33236 = arguments.length;
var i__29088__auto___33237 = (0);
while(true){
if((i__29088__auto___33237 < len__29087__auto___33236)){
args33192.push((arguments[i__29088__auto___33237]));

var G__33238 = (i__29088__auto___33237 + (1));
i__29088__auto___33237 = G__33238;
continue;
} else {
}
break;
}

var G__33194 = args33192.length;
switch (G__33194) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33192.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30473__auto___33240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30473__auto___33240,out){
return (function (){
var f__30474__auto__ = (function (){var switch__30452__auto__ = ((function (c__30473__auto___33240,out){
return (function (state_33215){
var state_val_33216 = (state_33215[(1)]);
if((state_val_33216 === (7))){
var inst_33211 = (state_33215[(2)]);
var state_33215__$1 = state_33215;
var statearr_33217_33241 = state_33215__$1;
(statearr_33217_33241[(2)] = inst_33211);

(statearr_33217_33241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33216 === (1))){
var state_33215__$1 = state_33215;
var statearr_33218_33242 = state_33215__$1;
(statearr_33218_33242[(2)] = null);

(statearr_33218_33242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33216 === (4))){
var inst_33197 = (state_33215[(7)]);
var inst_33197__$1 = (state_33215[(2)]);
var inst_33198 = (inst_33197__$1 == null);
var state_33215__$1 = (function (){var statearr_33219 = state_33215;
(statearr_33219[(7)] = inst_33197__$1);

return statearr_33219;
})();
if(cljs.core.truth_(inst_33198)){
var statearr_33220_33243 = state_33215__$1;
(statearr_33220_33243[(1)] = (5));

} else {
var statearr_33221_33244 = state_33215__$1;
(statearr_33221_33244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33216 === (6))){
var inst_33197 = (state_33215[(7)]);
var inst_33202 = p.call(null,inst_33197);
var state_33215__$1 = state_33215;
if(cljs.core.truth_(inst_33202)){
var statearr_33222_33245 = state_33215__$1;
(statearr_33222_33245[(1)] = (8));

} else {
var statearr_33223_33246 = state_33215__$1;
(statearr_33223_33246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33216 === (3))){
var inst_33213 = (state_33215[(2)]);
var state_33215__$1 = state_33215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33215__$1,inst_33213);
} else {
if((state_val_33216 === (2))){
var state_33215__$1 = state_33215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33215__$1,(4),ch);
} else {
if((state_val_33216 === (11))){
var inst_33205 = (state_33215[(2)]);
var state_33215__$1 = state_33215;
var statearr_33224_33247 = state_33215__$1;
(statearr_33224_33247[(2)] = inst_33205);

(statearr_33224_33247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33216 === (9))){
var state_33215__$1 = state_33215;
var statearr_33225_33248 = state_33215__$1;
(statearr_33225_33248[(2)] = null);

(statearr_33225_33248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33216 === (5))){
var inst_33200 = cljs.core.async.close_BANG_.call(null,out);
var state_33215__$1 = state_33215;
var statearr_33226_33249 = state_33215__$1;
(statearr_33226_33249[(2)] = inst_33200);

(statearr_33226_33249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33216 === (10))){
var inst_33208 = (state_33215[(2)]);
var state_33215__$1 = (function (){var statearr_33227 = state_33215;
(statearr_33227[(8)] = inst_33208);

return statearr_33227;
})();
var statearr_33228_33250 = state_33215__$1;
(statearr_33228_33250[(2)] = null);

(statearr_33228_33250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33216 === (8))){
var inst_33197 = (state_33215[(7)]);
var state_33215__$1 = state_33215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33215__$1,(11),out,inst_33197);
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
});})(c__30473__auto___33240,out))
;
return ((function (switch__30452__auto__,c__30473__auto___33240,out){
return (function() {
var cljs$core$async$state_machine__30453__auto__ = null;
var cljs$core$async$state_machine__30453__auto____0 = (function (){
var statearr_33232 = [null,null,null,null,null,null,null,null,null];
(statearr_33232[(0)] = cljs$core$async$state_machine__30453__auto__);

(statearr_33232[(1)] = (1));

return statearr_33232;
});
var cljs$core$async$state_machine__30453__auto____1 = (function (state_33215){
while(true){
var ret_value__30454__auto__ = (function (){try{while(true){
var result__30455__auto__ = switch__30452__auto__.call(null,state_33215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30455__auto__;
}
break;
}
}catch (e33233){if((e33233 instanceof Object)){
var ex__30456__auto__ = e33233;
var statearr_33234_33251 = state_33215;
(statearr_33234_33251[(5)] = ex__30456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33252 = state_33215;
state_33215 = G__33252;
continue;
} else {
return ret_value__30454__auto__;
}
break;
}
});
cljs$core$async$state_machine__30453__auto__ = function(state_33215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30453__auto____1.call(this,state_33215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30453__auto____0;
cljs$core$async$state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30453__auto____1;
return cljs$core$async$state_machine__30453__auto__;
})()
;})(switch__30452__auto__,c__30473__auto___33240,out))
})();
var state__30475__auto__ = (function (){var statearr_33235 = f__30474__auto__.call(null);
(statearr_33235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30473__auto___33240);

return statearr_33235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30475__auto__);
});})(c__30473__auto___33240,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args33253 = [];
var len__29087__auto___33256 = arguments.length;
var i__29088__auto___33257 = (0);
while(true){
if((i__29088__auto___33257 < len__29087__auto___33256)){
args33253.push((arguments[i__29088__auto___33257]));

var G__33258 = (i__29088__auto___33257 + (1));
i__29088__auto___33257 = G__33258;
continue;
} else {
}
break;
}

var G__33255 = args33253.length;
switch (G__33255) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33253.length)].join('')));

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
var c__30473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30473__auto__){
return (function (){
var f__30474__auto__ = (function (){var switch__30452__auto__ = ((function (c__30473__auto__){
return (function (state_33425){
var state_val_33426 = (state_33425[(1)]);
if((state_val_33426 === (7))){
var inst_33421 = (state_33425[(2)]);
var state_33425__$1 = state_33425;
var statearr_33427_33468 = state_33425__$1;
(statearr_33427_33468[(2)] = inst_33421);

(statearr_33427_33468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (20))){
var inst_33391 = (state_33425[(7)]);
var inst_33402 = (state_33425[(2)]);
var inst_33403 = cljs.core.next.call(null,inst_33391);
var inst_33377 = inst_33403;
var inst_33378 = null;
var inst_33379 = (0);
var inst_33380 = (0);
var state_33425__$1 = (function (){var statearr_33428 = state_33425;
(statearr_33428[(8)] = inst_33377);

(statearr_33428[(9)] = inst_33402);

(statearr_33428[(10)] = inst_33379);

(statearr_33428[(11)] = inst_33380);

(statearr_33428[(12)] = inst_33378);

return statearr_33428;
})();
var statearr_33429_33469 = state_33425__$1;
(statearr_33429_33469[(2)] = null);

(statearr_33429_33469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (1))){
var state_33425__$1 = state_33425;
var statearr_33430_33470 = state_33425__$1;
(statearr_33430_33470[(2)] = null);

(statearr_33430_33470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (4))){
var inst_33366 = (state_33425[(13)]);
var inst_33366__$1 = (state_33425[(2)]);
var inst_33367 = (inst_33366__$1 == null);
var state_33425__$1 = (function (){var statearr_33431 = state_33425;
(statearr_33431[(13)] = inst_33366__$1);

return statearr_33431;
})();
if(cljs.core.truth_(inst_33367)){
var statearr_33432_33471 = state_33425__$1;
(statearr_33432_33471[(1)] = (5));

} else {
var statearr_33433_33472 = state_33425__$1;
(statearr_33433_33472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (15))){
var state_33425__$1 = state_33425;
var statearr_33437_33473 = state_33425__$1;
(statearr_33437_33473[(2)] = null);

(statearr_33437_33473[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (21))){
var state_33425__$1 = state_33425;
var statearr_33438_33474 = state_33425__$1;
(statearr_33438_33474[(2)] = null);

(statearr_33438_33474[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (13))){
var inst_33377 = (state_33425[(8)]);
var inst_33379 = (state_33425[(10)]);
var inst_33380 = (state_33425[(11)]);
var inst_33378 = (state_33425[(12)]);
var inst_33387 = (state_33425[(2)]);
var inst_33388 = (inst_33380 + (1));
var tmp33434 = inst_33377;
var tmp33435 = inst_33379;
var tmp33436 = inst_33378;
var inst_33377__$1 = tmp33434;
var inst_33378__$1 = tmp33436;
var inst_33379__$1 = tmp33435;
var inst_33380__$1 = inst_33388;
var state_33425__$1 = (function (){var statearr_33439 = state_33425;
(statearr_33439[(8)] = inst_33377__$1);

(statearr_33439[(14)] = inst_33387);

(statearr_33439[(10)] = inst_33379__$1);

(statearr_33439[(11)] = inst_33380__$1);

(statearr_33439[(12)] = inst_33378__$1);

return statearr_33439;
})();
var statearr_33440_33475 = state_33425__$1;
(statearr_33440_33475[(2)] = null);

(statearr_33440_33475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (22))){
var state_33425__$1 = state_33425;
var statearr_33441_33476 = state_33425__$1;
(statearr_33441_33476[(2)] = null);

(statearr_33441_33476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (6))){
var inst_33366 = (state_33425[(13)]);
var inst_33375 = f.call(null,inst_33366);
var inst_33376 = cljs.core.seq.call(null,inst_33375);
var inst_33377 = inst_33376;
var inst_33378 = null;
var inst_33379 = (0);
var inst_33380 = (0);
var state_33425__$1 = (function (){var statearr_33442 = state_33425;
(statearr_33442[(8)] = inst_33377);

(statearr_33442[(10)] = inst_33379);

(statearr_33442[(11)] = inst_33380);

(statearr_33442[(12)] = inst_33378);

return statearr_33442;
})();
var statearr_33443_33477 = state_33425__$1;
(statearr_33443_33477[(2)] = null);

(statearr_33443_33477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (17))){
var inst_33391 = (state_33425[(7)]);
var inst_33395 = cljs.core.chunk_first.call(null,inst_33391);
var inst_33396 = cljs.core.chunk_rest.call(null,inst_33391);
var inst_33397 = cljs.core.count.call(null,inst_33395);
var inst_33377 = inst_33396;
var inst_33378 = inst_33395;
var inst_33379 = inst_33397;
var inst_33380 = (0);
var state_33425__$1 = (function (){var statearr_33444 = state_33425;
(statearr_33444[(8)] = inst_33377);

(statearr_33444[(10)] = inst_33379);

(statearr_33444[(11)] = inst_33380);

(statearr_33444[(12)] = inst_33378);

return statearr_33444;
})();
var statearr_33445_33478 = state_33425__$1;
(statearr_33445_33478[(2)] = null);

(statearr_33445_33478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (3))){
var inst_33423 = (state_33425[(2)]);
var state_33425__$1 = state_33425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33425__$1,inst_33423);
} else {
if((state_val_33426 === (12))){
var inst_33411 = (state_33425[(2)]);
var state_33425__$1 = state_33425;
var statearr_33446_33479 = state_33425__$1;
(statearr_33446_33479[(2)] = inst_33411);

(statearr_33446_33479[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (2))){
var state_33425__$1 = state_33425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33425__$1,(4),in$);
} else {
if((state_val_33426 === (23))){
var inst_33419 = (state_33425[(2)]);
var state_33425__$1 = state_33425;
var statearr_33447_33480 = state_33425__$1;
(statearr_33447_33480[(2)] = inst_33419);

(statearr_33447_33480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (19))){
var inst_33406 = (state_33425[(2)]);
var state_33425__$1 = state_33425;
var statearr_33448_33481 = state_33425__$1;
(statearr_33448_33481[(2)] = inst_33406);

(statearr_33448_33481[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (11))){
var inst_33377 = (state_33425[(8)]);
var inst_33391 = (state_33425[(7)]);
var inst_33391__$1 = cljs.core.seq.call(null,inst_33377);
var state_33425__$1 = (function (){var statearr_33449 = state_33425;
(statearr_33449[(7)] = inst_33391__$1);

return statearr_33449;
})();
if(inst_33391__$1){
var statearr_33450_33482 = state_33425__$1;
(statearr_33450_33482[(1)] = (14));

} else {
var statearr_33451_33483 = state_33425__$1;
(statearr_33451_33483[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (9))){
var inst_33413 = (state_33425[(2)]);
var inst_33414 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33425__$1 = (function (){var statearr_33452 = state_33425;
(statearr_33452[(15)] = inst_33413);

return statearr_33452;
})();
if(cljs.core.truth_(inst_33414)){
var statearr_33453_33484 = state_33425__$1;
(statearr_33453_33484[(1)] = (21));

} else {
var statearr_33454_33485 = state_33425__$1;
(statearr_33454_33485[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (5))){
var inst_33369 = cljs.core.async.close_BANG_.call(null,out);
var state_33425__$1 = state_33425;
var statearr_33455_33486 = state_33425__$1;
(statearr_33455_33486[(2)] = inst_33369);

(statearr_33455_33486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (14))){
var inst_33391 = (state_33425[(7)]);
var inst_33393 = cljs.core.chunked_seq_QMARK_.call(null,inst_33391);
var state_33425__$1 = state_33425;
if(inst_33393){
var statearr_33456_33487 = state_33425__$1;
(statearr_33456_33487[(1)] = (17));

} else {
var statearr_33457_33488 = state_33425__$1;
(statearr_33457_33488[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (16))){
var inst_33409 = (state_33425[(2)]);
var state_33425__$1 = state_33425;
var statearr_33458_33489 = state_33425__$1;
(statearr_33458_33489[(2)] = inst_33409);

(statearr_33458_33489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (10))){
var inst_33380 = (state_33425[(11)]);
var inst_33378 = (state_33425[(12)]);
var inst_33385 = cljs.core._nth.call(null,inst_33378,inst_33380);
var state_33425__$1 = state_33425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33425__$1,(13),out,inst_33385);
} else {
if((state_val_33426 === (18))){
var inst_33391 = (state_33425[(7)]);
var inst_33400 = cljs.core.first.call(null,inst_33391);
var state_33425__$1 = state_33425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33425__$1,(20),out,inst_33400);
} else {
if((state_val_33426 === (8))){
var inst_33379 = (state_33425[(10)]);
var inst_33380 = (state_33425[(11)]);
var inst_33382 = (inst_33380 < inst_33379);
var inst_33383 = inst_33382;
var state_33425__$1 = state_33425;
if(cljs.core.truth_(inst_33383)){
var statearr_33459_33490 = state_33425__$1;
(statearr_33459_33490[(1)] = (10));

} else {
var statearr_33460_33491 = state_33425__$1;
(statearr_33460_33491[(1)] = (11));

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
});})(c__30473__auto__))
;
return ((function (switch__30452__auto__,c__30473__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30453__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30453__auto____0 = (function (){
var statearr_33464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33464[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30453__auto__);

(statearr_33464[(1)] = (1));

return statearr_33464;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30453__auto____1 = (function (state_33425){
while(true){
var ret_value__30454__auto__ = (function (){try{while(true){
var result__30455__auto__ = switch__30452__auto__.call(null,state_33425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30455__auto__;
}
break;
}
}catch (e33465){if((e33465 instanceof Object)){
var ex__30456__auto__ = e33465;
var statearr_33466_33492 = state_33425;
(statearr_33466_33492[(5)] = ex__30456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33493 = state_33425;
state_33425 = G__33493;
continue;
} else {
return ret_value__30454__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30453__auto__ = function(state_33425){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30453__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30453__auto____1.call(this,state_33425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30453__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30453__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30453__auto__;
})()
;})(switch__30452__auto__,c__30473__auto__))
})();
var state__30475__auto__ = (function (){var statearr_33467 = f__30474__auto__.call(null);
(statearr_33467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30473__auto__);

return statearr_33467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30475__auto__);
});})(c__30473__auto__))
);

return c__30473__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args33494 = [];
var len__29087__auto___33497 = arguments.length;
var i__29088__auto___33498 = (0);
while(true){
if((i__29088__auto___33498 < len__29087__auto___33497)){
args33494.push((arguments[i__29088__auto___33498]));

var G__33499 = (i__29088__auto___33498 + (1));
i__29088__auto___33498 = G__33499;
continue;
} else {
}
break;
}

var G__33496 = args33494.length;
switch (G__33496) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33494.length)].join('')));

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
var args33501 = [];
var len__29087__auto___33504 = arguments.length;
var i__29088__auto___33505 = (0);
while(true){
if((i__29088__auto___33505 < len__29087__auto___33504)){
args33501.push((arguments[i__29088__auto___33505]));

var G__33506 = (i__29088__auto___33505 + (1));
i__29088__auto___33505 = G__33506;
continue;
} else {
}
break;
}

var G__33503 = args33501.length;
switch (G__33503) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33501.length)].join('')));

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
var args33508 = [];
var len__29087__auto___33559 = arguments.length;
var i__29088__auto___33560 = (0);
while(true){
if((i__29088__auto___33560 < len__29087__auto___33559)){
args33508.push((arguments[i__29088__auto___33560]));

var G__33561 = (i__29088__auto___33560 + (1));
i__29088__auto___33560 = G__33561;
continue;
} else {
}
break;
}

var G__33510 = args33508.length;
switch (G__33510) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33508.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30473__auto___33563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30473__auto___33563,out){
return (function (){
var f__30474__auto__ = (function (){var switch__30452__auto__ = ((function (c__30473__auto___33563,out){
return (function (state_33534){
var state_val_33535 = (state_33534[(1)]);
if((state_val_33535 === (7))){
var inst_33529 = (state_33534[(2)]);
var state_33534__$1 = state_33534;
var statearr_33536_33564 = state_33534__$1;
(statearr_33536_33564[(2)] = inst_33529);

(statearr_33536_33564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33535 === (1))){
var inst_33511 = null;
var state_33534__$1 = (function (){var statearr_33537 = state_33534;
(statearr_33537[(7)] = inst_33511);

return statearr_33537;
})();
var statearr_33538_33565 = state_33534__$1;
(statearr_33538_33565[(2)] = null);

(statearr_33538_33565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33535 === (4))){
var inst_33514 = (state_33534[(8)]);
var inst_33514__$1 = (state_33534[(2)]);
var inst_33515 = (inst_33514__$1 == null);
var inst_33516 = cljs.core.not.call(null,inst_33515);
var state_33534__$1 = (function (){var statearr_33539 = state_33534;
(statearr_33539[(8)] = inst_33514__$1);

return statearr_33539;
})();
if(inst_33516){
var statearr_33540_33566 = state_33534__$1;
(statearr_33540_33566[(1)] = (5));

} else {
var statearr_33541_33567 = state_33534__$1;
(statearr_33541_33567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33535 === (6))){
var state_33534__$1 = state_33534;
var statearr_33542_33568 = state_33534__$1;
(statearr_33542_33568[(2)] = null);

(statearr_33542_33568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33535 === (3))){
var inst_33531 = (state_33534[(2)]);
var inst_33532 = cljs.core.async.close_BANG_.call(null,out);
var state_33534__$1 = (function (){var statearr_33543 = state_33534;
(statearr_33543[(9)] = inst_33531);

return statearr_33543;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33534__$1,inst_33532);
} else {
if((state_val_33535 === (2))){
var state_33534__$1 = state_33534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33534__$1,(4),ch);
} else {
if((state_val_33535 === (11))){
var inst_33514 = (state_33534[(8)]);
var inst_33523 = (state_33534[(2)]);
var inst_33511 = inst_33514;
var state_33534__$1 = (function (){var statearr_33544 = state_33534;
(statearr_33544[(7)] = inst_33511);

(statearr_33544[(10)] = inst_33523);

return statearr_33544;
})();
var statearr_33545_33569 = state_33534__$1;
(statearr_33545_33569[(2)] = null);

(statearr_33545_33569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33535 === (9))){
var inst_33514 = (state_33534[(8)]);
var state_33534__$1 = state_33534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33534__$1,(11),out,inst_33514);
} else {
if((state_val_33535 === (5))){
var inst_33514 = (state_33534[(8)]);
var inst_33511 = (state_33534[(7)]);
var inst_33518 = cljs.core._EQ_.call(null,inst_33514,inst_33511);
var state_33534__$1 = state_33534;
if(inst_33518){
var statearr_33547_33570 = state_33534__$1;
(statearr_33547_33570[(1)] = (8));

} else {
var statearr_33548_33571 = state_33534__$1;
(statearr_33548_33571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33535 === (10))){
var inst_33526 = (state_33534[(2)]);
var state_33534__$1 = state_33534;
var statearr_33549_33572 = state_33534__$1;
(statearr_33549_33572[(2)] = inst_33526);

(statearr_33549_33572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33535 === (8))){
var inst_33511 = (state_33534[(7)]);
var tmp33546 = inst_33511;
var inst_33511__$1 = tmp33546;
var state_33534__$1 = (function (){var statearr_33550 = state_33534;
(statearr_33550[(7)] = inst_33511__$1);

return statearr_33550;
})();
var statearr_33551_33573 = state_33534__$1;
(statearr_33551_33573[(2)] = null);

(statearr_33551_33573[(1)] = (2));


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
});})(c__30473__auto___33563,out))
;
return ((function (switch__30452__auto__,c__30473__auto___33563,out){
return (function() {
var cljs$core$async$state_machine__30453__auto__ = null;
var cljs$core$async$state_machine__30453__auto____0 = (function (){
var statearr_33555 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33555[(0)] = cljs$core$async$state_machine__30453__auto__);

(statearr_33555[(1)] = (1));

return statearr_33555;
});
var cljs$core$async$state_machine__30453__auto____1 = (function (state_33534){
while(true){
var ret_value__30454__auto__ = (function (){try{while(true){
var result__30455__auto__ = switch__30452__auto__.call(null,state_33534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30455__auto__;
}
break;
}
}catch (e33556){if((e33556 instanceof Object)){
var ex__30456__auto__ = e33556;
var statearr_33557_33574 = state_33534;
(statearr_33557_33574[(5)] = ex__30456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33575 = state_33534;
state_33534 = G__33575;
continue;
} else {
return ret_value__30454__auto__;
}
break;
}
});
cljs$core$async$state_machine__30453__auto__ = function(state_33534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30453__auto____1.call(this,state_33534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30453__auto____0;
cljs$core$async$state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30453__auto____1;
return cljs$core$async$state_machine__30453__auto__;
})()
;})(switch__30452__auto__,c__30473__auto___33563,out))
})();
var state__30475__auto__ = (function (){var statearr_33558 = f__30474__auto__.call(null);
(statearr_33558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30473__auto___33563);

return statearr_33558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30475__auto__);
});})(c__30473__auto___33563,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33576 = [];
var len__29087__auto___33646 = arguments.length;
var i__29088__auto___33647 = (0);
while(true){
if((i__29088__auto___33647 < len__29087__auto___33646)){
args33576.push((arguments[i__29088__auto___33647]));

var G__33648 = (i__29088__auto___33647 + (1));
i__29088__auto___33647 = G__33648;
continue;
} else {
}
break;
}

var G__33578 = args33576.length;
switch (G__33578) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33576.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30473__auto___33650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30473__auto___33650,out){
return (function (){
var f__30474__auto__ = (function (){var switch__30452__auto__ = ((function (c__30473__auto___33650,out){
return (function (state_33616){
var state_val_33617 = (state_33616[(1)]);
if((state_val_33617 === (7))){
var inst_33612 = (state_33616[(2)]);
var state_33616__$1 = state_33616;
var statearr_33618_33651 = state_33616__$1;
(statearr_33618_33651[(2)] = inst_33612);

(statearr_33618_33651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (1))){
var inst_33579 = (new Array(n));
var inst_33580 = inst_33579;
var inst_33581 = (0);
var state_33616__$1 = (function (){var statearr_33619 = state_33616;
(statearr_33619[(7)] = inst_33581);

(statearr_33619[(8)] = inst_33580);

return statearr_33619;
})();
var statearr_33620_33652 = state_33616__$1;
(statearr_33620_33652[(2)] = null);

(statearr_33620_33652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (4))){
var inst_33584 = (state_33616[(9)]);
var inst_33584__$1 = (state_33616[(2)]);
var inst_33585 = (inst_33584__$1 == null);
var inst_33586 = cljs.core.not.call(null,inst_33585);
var state_33616__$1 = (function (){var statearr_33621 = state_33616;
(statearr_33621[(9)] = inst_33584__$1);

return statearr_33621;
})();
if(inst_33586){
var statearr_33622_33653 = state_33616__$1;
(statearr_33622_33653[(1)] = (5));

} else {
var statearr_33623_33654 = state_33616__$1;
(statearr_33623_33654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (15))){
var inst_33606 = (state_33616[(2)]);
var state_33616__$1 = state_33616;
var statearr_33624_33655 = state_33616__$1;
(statearr_33624_33655[(2)] = inst_33606);

(statearr_33624_33655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (13))){
var state_33616__$1 = state_33616;
var statearr_33625_33656 = state_33616__$1;
(statearr_33625_33656[(2)] = null);

(statearr_33625_33656[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (6))){
var inst_33581 = (state_33616[(7)]);
var inst_33602 = (inst_33581 > (0));
var state_33616__$1 = state_33616;
if(cljs.core.truth_(inst_33602)){
var statearr_33626_33657 = state_33616__$1;
(statearr_33626_33657[(1)] = (12));

} else {
var statearr_33627_33658 = state_33616__$1;
(statearr_33627_33658[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (3))){
var inst_33614 = (state_33616[(2)]);
var state_33616__$1 = state_33616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33616__$1,inst_33614);
} else {
if((state_val_33617 === (12))){
var inst_33580 = (state_33616[(8)]);
var inst_33604 = cljs.core.vec.call(null,inst_33580);
var state_33616__$1 = state_33616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33616__$1,(15),out,inst_33604);
} else {
if((state_val_33617 === (2))){
var state_33616__$1 = state_33616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33616__$1,(4),ch);
} else {
if((state_val_33617 === (11))){
var inst_33596 = (state_33616[(2)]);
var inst_33597 = (new Array(n));
var inst_33580 = inst_33597;
var inst_33581 = (0);
var state_33616__$1 = (function (){var statearr_33628 = state_33616;
(statearr_33628[(10)] = inst_33596);

(statearr_33628[(7)] = inst_33581);

(statearr_33628[(8)] = inst_33580);

return statearr_33628;
})();
var statearr_33629_33659 = state_33616__$1;
(statearr_33629_33659[(2)] = null);

(statearr_33629_33659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (9))){
var inst_33580 = (state_33616[(8)]);
var inst_33594 = cljs.core.vec.call(null,inst_33580);
var state_33616__$1 = state_33616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33616__$1,(11),out,inst_33594);
} else {
if((state_val_33617 === (5))){
var inst_33589 = (state_33616[(11)]);
var inst_33584 = (state_33616[(9)]);
var inst_33581 = (state_33616[(7)]);
var inst_33580 = (state_33616[(8)]);
var inst_33588 = (inst_33580[inst_33581] = inst_33584);
var inst_33589__$1 = (inst_33581 + (1));
var inst_33590 = (inst_33589__$1 < n);
var state_33616__$1 = (function (){var statearr_33630 = state_33616;
(statearr_33630[(11)] = inst_33589__$1);

(statearr_33630[(12)] = inst_33588);

return statearr_33630;
})();
if(cljs.core.truth_(inst_33590)){
var statearr_33631_33660 = state_33616__$1;
(statearr_33631_33660[(1)] = (8));

} else {
var statearr_33632_33661 = state_33616__$1;
(statearr_33632_33661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (14))){
var inst_33609 = (state_33616[(2)]);
var inst_33610 = cljs.core.async.close_BANG_.call(null,out);
var state_33616__$1 = (function (){var statearr_33634 = state_33616;
(statearr_33634[(13)] = inst_33609);

return statearr_33634;
})();
var statearr_33635_33662 = state_33616__$1;
(statearr_33635_33662[(2)] = inst_33610);

(statearr_33635_33662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (10))){
var inst_33600 = (state_33616[(2)]);
var state_33616__$1 = state_33616;
var statearr_33636_33663 = state_33616__$1;
(statearr_33636_33663[(2)] = inst_33600);

(statearr_33636_33663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (8))){
var inst_33589 = (state_33616[(11)]);
var inst_33580 = (state_33616[(8)]);
var tmp33633 = inst_33580;
var inst_33580__$1 = tmp33633;
var inst_33581 = inst_33589;
var state_33616__$1 = (function (){var statearr_33637 = state_33616;
(statearr_33637[(7)] = inst_33581);

(statearr_33637[(8)] = inst_33580__$1);

return statearr_33637;
})();
var statearr_33638_33664 = state_33616__$1;
(statearr_33638_33664[(2)] = null);

(statearr_33638_33664[(1)] = (2));


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
});})(c__30473__auto___33650,out))
;
return ((function (switch__30452__auto__,c__30473__auto___33650,out){
return (function() {
var cljs$core$async$state_machine__30453__auto__ = null;
var cljs$core$async$state_machine__30453__auto____0 = (function (){
var statearr_33642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33642[(0)] = cljs$core$async$state_machine__30453__auto__);

(statearr_33642[(1)] = (1));

return statearr_33642;
});
var cljs$core$async$state_machine__30453__auto____1 = (function (state_33616){
while(true){
var ret_value__30454__auto__ = (function (){try{while(true){
var result__30455__auto__ = switch__30452__auto__.call(null,state_33616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30455__auto__;
}
break;
}
}catch (e33643){if((e33643 instanceof Object)){
var ex__30456__auto__ = e33643;
var statearr_33644_33665 = state_33616;
(statearr_33644_33665[(5)] = ex__30456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33666 = state_33616;
state_33616 = G__33666;
continue;
} else {
return ret_value__30454__auto__;
}
break;
}
});
cljs$core$async$state_machine__30453__auto__ = function(state_33616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30453__auto____1.call(this,state_33616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30453__auto____0;
cljs$core$async$state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30453__auto____1;
return cljs$core$async$state_machine__30453__auto__;
})()
;})(switch__30452__auto__,c__30473__auto___33650,out))
})();
var state__30475__auto__ = (function (){var statearr_33645 = f__30474__auto__.call(null);
(statearr_33645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30473__auto___33650);

return statearr_33645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30475__auto__);
});})(c__30473__auto___33650,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33667 = [];
var len__29087__auto___33741 = arguments.length;
var i__29088__auto___33742 = (0);
while(true){
if((i__29088__auto___33742 < len__29087__auto___33741)){
args33667.push((arguments[i__29088__auto___33742]));

var G__33743 = (i__29088__auto___33742 + (1));
i__29088__auto___33742 = G__33743;
continue;
} else {
}
break;
}

var G__33669 = args33667.length;
switch (G__33669) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33667.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30473__auto___33745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30473__auto___33745,out){
return (function (){
var f__30474__auto__ = (function (){var switch__30452__auto__ = ((function (c__30473__auto___33745,out){
return (function (state_33711){
var state_val_33712 = (state_33711[(1)]);
if((state_val_33712 === (7))){
var inst_33707 = (state_33711[(2)]);
var state_33711__$1 = state_33711;
var statearr_33713_33746 = state_33711__$1;
(statearr_33713_33746[(2)] = inst_33707);

(statearr_33713_33746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33712 === (1))){
var inst_33670 = [];
var inst_33671 = inst_33670;
var inst_33672 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33711__$1 = (function (){var statearr_33714 = state_33711;
(statearr_33714[(7)] = inst_33671);

(statearr_33714[(8)] = inst_33672);

return statearr_33714;
})();
var statearr_33715_33747 = state_33711__$1;
(statearr_33715_33747[(2)] = null);

(statearr_33715_33747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33712 === (4))){
var inst_33675 = (state_33711[(9)]);
var inst_33675__$1 = (state_33711[(2)]);
var inst_33676 = (inst_33675__$1 == null);
var inst_33677 = cljs.core.not.call(null,inst_33676);
var state_33711__$1 = (function (){var statearr_33716 = state_33711;
(statearr_33716[(9)] = inst_33675__$1);

return statearr_33716;
})();
if(inst_33677){
var statearr_33717_33748 = state_33711__$1;
(statearr_33717_33748[(1)] = (5));

} else {
var statearr_33718_33749 = state_33711__$1;
(statearr_33718_33749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33712 === (15))){
var inst_33701 = (state_33711[(2)]);
var state_33711__$1 = state_33711;
var statearr_33719_33750 = state_33711__$1;
(statearr_33719_33750[(2)] = inst_33701);

(statearr_33719_33750[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33712 === (13))){
var state_33711__$1 = state_33711;
var statearr_33720_33751 = state_33711__$1;
(statearr_33720_33751[(2)] = null);

(statearr_33720_33751[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33712 === (6))){
var inst_33671 = (state_33711[(7)]);
var inst_33696 = inst_33671.length;
var inst_33697 = (inst_33696 > (0));
var state_33711__$1 = state_33711;
if(cljs.core.truth_(inst_33697)){
var statearr_33721_33752 = state_33711__$1;
(statearr_33721_33752[(1)] = (12));

} else {
var statearr_33722_33753 = state_33711__$1;
(statearr_33722_33753[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33712 === (3))){
var inst_33709 = (state_33711[(2)]);
var state_33711__$1 = state_33711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33711__$1,inst_33709);
} else {
if((state_val_33712 === (12))){
var inst_33671 = (state_33711[(7)]);
var inst_33699 = cljs.core.vec.call(null,inst_33671);
var state_33711__$1 = state_33711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33711__$1,(15),out,inst_33699);
} else {
if((state_val_33712 === (2))){
var state_33711__$1 = state_33711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33711__$1,(4),ch);
} else {
if((state_val_33712 === (11))){
var inst_33679 = (state_33711[(10)]);
var inst_33675 = (state_33711[(9)]);
var inst_33689 = (state_33711[(2)]);
var inst_33690 = [];
var inst_33691 = inst_33690.push(inst_33675);
var inst_33671 = inst_33690;
var inst_33672 = inst_33679;
var state_33711__$1 = (function (){var statearr_33723 = state_33711;
(statearr_33723[(11)] = inst_33691);

(statearr_33723[(7)] = inst_33671);

(statearr_33723[(12)] = inst_33689);

(statearr_33723[(8)] = inst_33672);

return statearr_33723;
})();
var statearr_33724_33754 = state_33711__$1;
(statearr_33724_33754[(2)] = null);

(statearr_33724_33754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33712 === (9))){
var inst_33671 = (state_33711[(7)]);
var inst_33687 = cljs.core.vec.call(null,inst_33671);
var state_33711__$1 = state_33711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33711__$1,(11),out,inst_33687);
} else {
if((state_val_33712 === (5))){
var inst_33679 = (state_33711[(10)]);
var inst_33675 = (state_33711[(9)]);
var inst_33672 = (state_33711[(8)]);
var inst_33679__$1 = f.call(null,inst_33675);
var inst_33680 = cljs.core._EQ_.call(null,inst_33679__$1,inst_33672);
var inst_33681 = cljs.core.keyword_identical_QMARK_.call(null,inst_33672,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33682 = (inst_33680) || (inst_33681);
var state_33711__$1 = (function (){var statearr_33725 = state_33711;
(statearr_33725[(10)] = inst_33679__$1);

return statearr_33725;
})();
if(cljs.core.truth_(inst_33682)){
var statearr_33726_33755 = state_33711__$1;
(statearr_33726_33755[(1)] = (8));

} else {
var statearr_33727_33756 = state_33711__$1;
(statearr_33727_33756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33712 === (14))){
var inst_33704 = (state_33711[(2)]);
var inst_33705 = cljs.core.async.close_BANG_.call(null,out);
var state_33711__$1 = (function (){var statearr_33729 = state_33711;
(statearr_33729[(13)] = inst_33704);

return statearr_33729;
})();
var statearr_33730_33757 = state_33711__$1;
(statearr_33730_33757[(2)] = inst_33705);

(statearr_33730_33757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33712 === (10))){
var inst_33694 = (state_33711[(2)]);
var state_33711__$1 = state_33711;
var statearr_33731_33758 = state_33711__$1;
(statearr_33731_33758[(2)] = inst_33694);

(statearr_33731_33758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33712 === (8))){
var inst_33679 = (state_33711[(10)]);
var inst_33671 = (state_33711[(7)]);
var inst_33675 = (state_33711[(9)]);
var inst_33684 = inst_33671.push(inst_33675);
var tmp33728 = inst_33671;
var inst_33671__$1 = tmp33728;
var inst_33672 = inst_33679;
var state_33711__$1 = (function (){var statearr_33732 = state_33711;
(statearr_33732[(7)] = inst_33671__$1);

(statearr_33732[(8)] = inst_33672);

(statearr_33732[(14)] = inst_33684);

return statearr_33732;
})();
var statearr_33733_33759 = state_33711__$1;
(statearr_33733_33759[(2)] = null);

(statearr_33733_33759[(1)] = (2));


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
});})(c__30473__auto___33745,out))
;
return ((function (switch__30452__auto__,c__30473__auto___33745,out){
return (function() {
var cljs$core$async$state_machine__30453__auto__ = null;
var cljs$core$async$state_machine__30453__auto____0 = (function (){
var statearr_33737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33737[(0)] = cljs$core$async$state_machine__30453__auto__);

(statearr_33737[(1)] = (1));

return statearr_33737;
});
var cljs$core$async$state_machine__30453__auto____1 = (function (state_33711){
while(true){
var ret_value__30454__auto__ = (function (){try{while(true){
var result__30455__auto__ = switch__30452__auto__.call(null,state_33711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30455__auto__;
}
break;
}
}catch (e33738){if((e33738 instanceof Object)){
var ex__30456__auto__ = e33738;
var statearr_33739_33760 = state_33711;
(statearr_33739_33760[(5)] = ex__30456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33761 = state_33711;
state_33711 = G__33761;
continue;
} else {
return ret_value__30454__auto__;
}
break;
}
});
cljs$core$async$state_machine__30453__auto__ = function(state_33711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30453__auto____1.call(this,state_33711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30453__auto____0;
cljs$core$async$state_machine__30453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30453__auto____1;
return cljs$core$async$state_machine__30453__auto__;
})()
;})(switch__30452__auto__,c__30473__auto___33745,out))
})();
var state__30475__auto__ = (function (){var statearr_33740 = f__30474__auto__.call(null);
(statearr_33740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30473__auto___33745);

return statearr_33740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30475__auto__);
});})(c__30473__auto___33745,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map