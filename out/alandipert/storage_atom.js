// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('alandipert.storage_atom');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.Timer');
goog.require('clojure.string');
alandipert.storage_atom.transit_read_handlers = (function (){var G__30494 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30494) : cljs.core.atom.call(null,G__30494));
})();
alandipert.storage_atom.transit_write_handlers = (function (){var G__30495 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30495) : cljs.core.atom.call(null,G__30495));
})();
alandipert.storage_atom.clj__GT_json = (function alandipert$storage_atom$clj__GT_json(x){
return cognitect.transit.write(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handlers,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(alandipert.storage_atom.transit_write_handlers) : cljs.core.deref.call(null,alandipert.storage_atom.transit_write_handlers))], null)),x);
});
alandipert.storage_atom.json__GT_clj = (function alandipert$storage_atom$json__GT_clj(x){
return cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handlers,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(alandipert.storage_atom.transit_read_handlers) : cljs.core.deref.call(null,alandipert.storage_atom.transit_read_handlers))], null)),x);
});

/**
 * Represents a storage resource.
 * @interface
 */
alandipert.storage_atom.IStorageBackend = function(){};

alandipert.storage_atom._get = (function alandipert$storage_atom$_get(this$,not_found){
if((!((this$ == null))) && (!((this$.alandipert$storage_atom$IStorageBackend$_get$arity$2 == null)))){
return this$.alandipert$storage_atom$IStorageBackend$_get$arity$2(this$,not_found);
} else {
var x__19391__auto__ = (((this$ == null))?null:this$);
var m__19392__auto__ = (alandipert.storage_atom._get[goog.typeOf(x__19391__auto__)]);
if(!((m__19392__auto__ == null))){
return (m__19392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__19392__auto__.cljs$core$IFn$_invoke$arity$2(this$,not_found) : m__19392__auto__.call(null,this$,not_found));
} else {
var m__19392__auto____$1 = (alandipert.storage_atom._get["_"]);
if(!((m__19392__auto____$1 == null))){
return (m__19392__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__19392__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,not_found) : m__19392__auto____$1.call(null,this$,not_found));
} else {
throw cljs.core.missing_protocol("IStorageBackend.-get",this$);
}
}
}
});

/**
 * Commit value to storage at location.
 */
alandipert.storage_atom._commit_BANG_ = (function alandipert$storage_atom$_commit_BANG_(this$,value){
if((!((this$ == null))) && (!((this$.alandipert$storage_atom$IStorageBackend$_commit_BANG_$arity$2 == null)))){
return this$.alandipert$storage_atom$IStorageBackend$_commit_BANG_$arity$2(this$,value);
} else {
var x__19391__auto__ = (((this$ == null))?null:this$);
var m__19392__auto__ = (alandipert.storage_atom._commit_BANG_[goog.typeOf(x__19391__auto__)]);
if(!((m__19392__auto__ == null))){
return (m__19392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__19392__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__19392__auto__.call(null,this$,value));
} else {
var m__19392__auto____$1 = (alandipert.storage_atom._commit_BANG_["_"]);
if(!((m__19392__auto____$1 == null))){
return (m__19392__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__19392__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,value) : m__19392__auto____$1.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IStorageBackend.-commit!",this$);
}
}
}
});


/**
* @constructor
 * @implements {alandipert.storage_atom.IStorageBackend}
*/
alandipert.storage_atom.StorageBackend = (function (store,key){
this.store = store;
this.key = key;
})
alandipert.storage_atom.StorageBackend.prototype.alandipert$storage_atom$IStorageBackend$ = true;

alandipert.storage_atom.StorageBackend.prototype.alandipert$storage_atom$IStorageBackend$_get$arity$2 = (function (this$,not_found){
var self__ = this;
var this$__$1 = this;
var temp__4655__auto__ = self__.store.getItem(alandipert.storage_atom.clj__GT_json(self__.key));
if(cljs.core.truth_(temp__4655__auto__)){
var existing = temp__4655__auto__;
return alandipert.storage_atom.json__GT_clj(existing);
} else {
return not_found;
}
});

alandipert.storage_atom.StorageBackend.prototype.alandipert$storage_atom$IStorageBackend$_commit_BANG_$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return self__.store.setItem(alandipert.storage_atom.clj__GT_json(self__.key),alandipert.storage_atom.clj__GT_json(value));
});

alandipert.storage_atom.StorageBackend.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$store,cljs.core.cst$sym$key], null);
});

alandipert.storage_atom.StorageBackend.cljs$lang$type = true;

alandipert.storage_atom.StorageBackend.cljs$lang$ctorStr = "alandipert.storage-atom/StorageBackend";

alandipert.storage_atom.StorageBackend.cljs$lang$ctorPrWriter = (function (this__19334__auto__,writer__19335__auto__,opt__19336__auto__){
return cljs.core._write(writer__19335__auto__,"alandipert.storage-atom/StorageBackend");
});

alandipert.storage_atom.__GT_StorageBackend = (function alandipert$storage_atom$__GT_StorageBackend(store,key){
return (new alandipert.storage_atom.StorageBackend(store,key));
});

/**
 * Return a function that will always store a future call into the
 *   same atom. If recalled before the time is elapsed, the call is
 *   replaced without being executed.
 */
alandipert.storage_atom.debounce_factory = (function alandipert$storage_atom$debounce_factory(){
var f = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
return ((function (f){
return (function (func,ttime){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(f) : cljs.core.deref.call(null,f)))){
var G__30499_30502 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(f) : cljs.core.deref.call(null,f));
goog.Timer.clear(G__30499_30502);
} else {
}

var G__30500 = f;
var G__30501 = goog.Timer.callOnce(func,ttime);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30500,G__30501) : cljs.core.reset_BANG_.call(null,G__30500,G__30501));
});
;})(f))
});
/**
 * Delay in ms before a change is committed to the local storage. If a
 * new change occurs before the time is elapsed, the old change is
 * discarded an only the new one is committed.
 */
alandipert.storage_atom.storage_delay = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((10)) : cljs.core.atom.call(null,(10)));
alandipert.storage_atom._STAR_storage_delay_STAR_ = null;
alandipert.storage_atom._STAR_watch_active_STAR_ = true;
alandipert.storage_atom.store = (function alandipert$storage_atom$store(atom,backend){
var existing = alandipert.storage_atom._get(backend,cljs.core.cst$kw$alandipert$storage_DASH_atom_SLASH_none);
var debounce = alandipert.storage_atom.debounce_factory();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alandipert$storage_DASH_atom_SLASH_none,existing)){
alandipert.storage_atom._commit_BANG_(backend,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom)));
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom,existing) : cljs.core.reset_BANG_.call(null,atom,existing));
}

var G__30510 = atom;
cljs.core.add_watch(G__30510,cljs.core.cst$kw$alandipert$storage_DASH_atom_SLASH_storage_DASH_watch,((function (G__30510,existing,debounce){
return (function (p1__30505_SHARP_,p2__30506_SHARP_,p3__30503_SHARP_,p4__30504_SHARP_){
if(cljs.core.truth_((function (){var and__18716__auto__ = alandipert.storage_atom._STAR_watch_active_STAR_;
if(cljs.core.truth_(and__18716__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p3__30503_SHARP_,p4__30504_SHARP_);
} else {
return and__18716__auto__;
}
})())){
var G__30511 = ((function (G__30510,existing,debounce){
return (function (){
return alandipert.storage_atom._commit_BANG_(backend,p4__30504_SHARP_);
});})(G__30510,existing,debounce))
;
var G__30512 = (function (){var or__18728__auto__ = alandipert.storage_atom._STAR_storage_delay_STAR_;
if(cljs.core.truth_(or__18728__auto__)){
return or__18728__auto__;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(alandipert.storage_atom.storage_delay) : cljs.core.deref.call(null,alandipert.storage_atom.storage_delay));
}
})();
return (debounce.cljs$core$IFn$_invoke$arity$2 ? debounce.cljs$core$IFn$_invoke$arity$2(G__30511,G__30512) : debounce.call(null,G__30511,G__30512));
} else {
return null;
}
});})(G__30510,existing,debounce))
);

return G__30510;
});
alandipert.storage_atom.maybe_update_backend = (function alandipert$storage_atom$maybe_update_backend(atom,storage,k,default$,e){
if((storage === e.storageArea)){
if(cljs.core.empty_QMARK_(e.key)){
var _STAR_watch_active_STAR_30518 = alandipert.storage_atom._STAR_watch_active_STAR_;
alandipert.storage_atom._STAR_watch_active_STAR_ = false;

try{return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom,default$) : cljs.core.reset_BANG_.call(null,atom,default$));
}finally {alandipert.storage_atom._STAR_watch_active_STAR_ = _STAR_watch_active_STAR_30518;
}} else {
try{var temp__4657__auto__ = alandipert.storage_atom.json__GT_clj(e.key);
if(cljs.core.truth_(temp__4657__auto__)){
var sk = temp__4657__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sk,k)){
var _STAR_watch_active_STAR_30520 = alandipert.storage_atom._STAR_watch_active_STAR_;
alandipert.storage_atom._STAR_watch_active_STAR_ = false;

try{var G__30521 = atom;
var G__30522 = (function (){var value = e.newValue;
if(!(clojure.string.blank_QMARK_(value))){
return alandipert.storage_atom.json__GT_clj(value);
} else {
return default$;
}
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30521,G__30522) : cljs.core.reset_BANG_.call(null,G__30521,G__30522));
}finally {alandipert.storage_atom._STAR_watch_active_STAR_ = _STAR_watch_active_STAR_30520;
}} else {
return null;
}
} else {
return null;
}
}catch (e30519){var e__$1 = e30519;
return null;
}}
} else {
return null;
}
});
alandipert.storage_atom.link_storage = (function alandipert$storage_atom$link_storage(atom,storage,k){
var default$ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
return window.addEventListener("storage",((function (default$){
return (function (p1__30523_SHARP_){
return alandipert.storage_atom.maybe_update_backend(atom,storage,k,default$,p1__30523_SHARP_);
});})(default$))
);
});
/**
 * Create and dispatch a synthetic StorageEvent. Expects key to be a string.
 *   An empty key indicates that all storage is being cleared.
 */
alandipert.storage_atom.dispatch_remove_event_BANG_ = (function alandipert$storage_atom$dispatch_remove_event_BANG_(storage,key){
var event = document.createEvent("StorageEvent");
event.initStorageEvent("storage",false,false,key,null,null,window.location.href,storage);

window.dispatchEvent(event);

return null;
});
alandipert.storage_atom.load_html_storage = (function alandipert$storage_atom$load_html_storage(storage,k){
return (new alandipert.storage_atom.StorageBackend(storage,k)).alandipert$storage_atom$IStorageBackend$_get$arity$2(null,null);
});
alandipert.storage_atom.load_local_storage = (function alandipert$storage_atom$load_local_storage(k){
return alandipert.storage_atom.load_html_storage(localStorage,k);
});
alandipert.storage_atom.load_session_storage = (function alandipert$storage_atom$load_session_storage(k){
return alandipert.storage_atom.load_html_storage(sessionStorage,k);
});
alandipert.storage_atom.html_storage = (function alandipert$storage_atom$html_storage(atom,storage,k){
alandipert.storage_atom.link_storage(atom,storage,k);

return alandipert.storage_atom.store(atom,(new alandipert.storage_atom.StorageBackend(storage,k)));
});
alandipert.storage_atom.local_storage = (function alandipert$storage_atom$local_storage(atom,k){
return alandipert.storage_atom.html_storage(atom,localStorage,k);
});
alandipert.storage_atom.session_storage = (function alandipert$storage_atom$session_storage(atom,k){
return alandipert.storage_atom.html_storage(atom,sessionStorage,k);
});
/**
 * Clear storage and also trigger an event on the current window
 *   so its atoms will be cleared as well.
 */
alandipert.storage_atom.clear_html_storage_BANG_ = (function alandipert$storage_atom$clear_html_storage_BANG_(storage){
storage.clear();

return alandipert.storage_atom.dispatch_remove_event_BANG_(storage,"");
});
alandipert.storage_atom.clear_local_storage_BANG_ = (function alandipert$storage_atom$clear_local_storage_BANG_(){
return alandipert.storage_atom.clear_html_storage_BANG_(localStorage);
});
alandipert.storage_atom.clear_session_storage_BANG_ = (function alandipert$storage_atom$clear_session_storage_BANG_(){
return alandipert.storage_atom.clear_html_storage_BANG_(sessionStorage);
});
/**
 * Remove key from storage and also trigger an event on the current
 *   window so its atoms will be cleared as well.
 */
alandipert.storage_atom.remove_html_storage_BANG_ = (function alandipert$storage_atom$remove_html_storage_BANG_(storage,k){
var key = alandipert.storage_atom.clj__GT_json(k);
storage.removeItem(key);

return alandipert.storage_atom.dispatch_remove_event_BANG_(storage,key);
});
alandipert.storage_atom.remove_local_storage_BANG_ = (function alandipert$storage_atom$remove_local_storage_BANG_(k){
return alandipert.storage_atom.remove_html_storage_BANG_(localStorage,k);
});
alandipert.storage_atom.remove_session_storage_BANG_ = (function alandipert$storage_atom$remove_session_storage_BANG_(k){
return alandipert.storage_atom.remove_html_storage_BANG_(sessionStorage,k);
});
