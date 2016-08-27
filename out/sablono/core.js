// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__37426__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__37423 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__37424 = cljs.core.seq(vec__37423);
var first__37425 = cljs.core.first(seq__37424);
var seq__37424__$1 = cljs.core.next(seq__37424);
var tag = first__37425;
var body = seq__37424__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__37426 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37427__i = 0, G__37427__a = new Array(arguments.length -  0);
while (G__37427__i < G__37427__a.length) {G__37427__a[G__37427__i] = arguments[G__37427__i + 0]; ++G__37427__i;}
  args = new cljs.core.IndexedSeq(G__37427__a,0);
} 
return G__37426__delegate.call(this,args);};
G__37426.cljs$lang$maxFixedArity = 0;
G__37426.cljs$lang$applyTo = (function (arglist__37428){
var args = cljs.core.seq(arglist__37428);
return G__37426__delegate(args);
});
G__37426.cljs$core$IFn$_invoke$arity$variadic = G__37426__delegate;
return G__37426;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19244__auto__ = (function sablono$core$update_arglists_$_iter__37435(s__37436){
return (new cljs.core.LazySeq(null,(function (){
var s__37436__$1 = s__37436;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__37436__$1);
if(temp__4657__auto__){
var s__37436__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37436__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__37436__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__37438 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__37437 = (0);
while(true){
if((i__37437 < size__19243__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__37437);
cljs.core.chunk_append(b__37438,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__37441 = (i__37437 + (1));
i__37437 = G__37441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37438),sablono$core$update_arglists_$_iter__37435(cljs.core.chunk_rest(s__37436__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37438),null);
}
} else {
var args = cljs.core.first(s__37436__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__37435(cljs.core.rest(s__37436__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__(arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__19546__auto__ = [];
var len__19539__auto___37449 = arguments.length;
var i__19540__auto___37450 = (0);
while(true){
if((i__19540__auto___37450 < len__19539__auto___37449)){
args__19546__auto__.push((arguments[i__19540__auto___37450]));

var G__37451 = (i__19540__auto___37450 + (1));
i__19540__auto___37450 = G__37451;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19244__auto__ = (function sablono$core$iter__37443(s__37444){
return (new cljs.core.LazySeq(null,(function (){
var s__37444__$1 = s__37444;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__37444__$1);
if(temp__4657__auto__){
var s__37444__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37444__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__37444__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__37446 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__37445 = (0);
while(true){
if((i__37445 < size__19243__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__37445);
cljs.core.chunk_append(b__37446,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__37452 = (i__37445 + (1));
i__37445 = G__37452;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37446),sablono$core$iter__37443(cljs.core.chunk_rest(s__37444__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37446),null);
}
} else {
var style = cljs.core.first(s__37444__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__37443(cljs.core.rest(s__37444__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq37442){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37442));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__37457 = goog.dom.getDocument().body;
var G__37458 = (function (){var G__37459 = "script";
var G__37460 = {"src": src};
return goog.dom.createDom(G__37459,G__37460);
})();
return goog.dom.appendChild(G__37457,G__37458);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to37461 = (function sablono$core$link_to37461(var_args){
var args__19546__auto__ = [];
var len__19539__auto___37464 = arguments.length;
var i__19540__auto___37465 = (0);
while(true){
if((i__19540__auto___37465 < len__19539__auto___37464)){
args__19546__auto__.push((arguments[i__19540__auto___37465]));

var G__37466 = (i__19540__auto___37465 + (1));
i__19540__auto___37465 = G__37466;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to37461.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.link_to37461.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to37461.cljs$lang$maxFixedArity = (1);

sablono.core.link_to37461.cljs$lang$applyTo = (function (seq37462){
var G__37463 = cljs.core.first(seq37462);
var seq37462__$1 = cljs.core.next(seq37462);
return sablono.core.link_to37461.cljs$core$IFn$_invoke$arity$variadic(G__37463,seq37462__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to37461);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to37467 = (function sablono$core$mail_to37467(var_args){
var args__19546__auto__ = [];
var len__19539__auto___37474 = arguments.length;
var i__19540__auto___37475 = (0);
while(true){
if((i__19540__auto___37475 < len__19539__auto___37474)){
args__19546__auto__.push((arguments[i__19540__auto___37475]));

var G__37476 = (i__19540__auto___37475 + (1));
i__19540__auto___37475 = G__37476;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to37467.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.mail_to37467.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__37470){
var vec__37471 = p__37470;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37471,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18464__auto__ = content;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to37467.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to37467.cljs$lang$applyTo = (function (seq37468){
var G__37469 = cljs.core.first(seq37468);
var seq37468__$1 = cljs.core.next(seq37468);
return sablono.core.mail_to37467.cljs$core$IFn$_invoke$arity$variadic(G__37469,seq37468__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to37467);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list37477 = (function sablono$core$unordered_list37477(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__19244__auto__ = (function sablono$core$unordered_list37477_$_iter__37484(s__37485){
return (new cljs.core.LazySeq(null,(function (){
var s__37485__$1 = s__37485;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__37485__$1);
if(temp__4657__auto__){
var s__37485__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37485__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__37485__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__37487 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__37486 = (0);
while(true){
if((i__37486 < size__19243__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__37486);
cljs.core.chunk_append(b__37487,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__37490 = (i__37486 + (1));
i__37486 = G__37490;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37487),sablono$core$unordered_list37477_$_iter__37484(cljs.core.chunk_rest(s__37485__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37487),null);
}
} else {
var x = cljs.core.first(s__37485__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list37477_$_iter__37484(cljs.core.rest(s__37485__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list37477);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list37491 = (function sablono$core$ordered_list37491(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__19244__auto__ = (function sablono$core$ordered_list37491_$_iter__37498(s__37499){
return (new cljs.core.LazySeq(null,(function (){
var s__37499__$1 = s__37499;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__37499__$1);
if(temp__4657__auto__){
var s__37499__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37499__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__37499__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__37501 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__37500 = (0);
while(true){
if((i__37500 < size__19243__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__37500);
cljs.core.chunk_append(b__37501,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__37504 = (i__37500 + (1));
i__37500 = G__37504;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37501),sablono$core$ordered_list37491_$_iter__37498(cljs.core.chunk_rest(s__37499__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37501),null);
}
} else {
var x = cljs.core.first(s__37499__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list37491_$_iter__37498(cljs.core.rest(s__37499__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list37491);
/**
 * Create an image element.
 */
sablono.core.image37505 = (function sablono$core$image37505(var_args){
var args37506 = [];
var len__19539__auto___37509 = arguments.length;
var i__19540__auto___37510 = (0);
while(true){
if((i__19540__auto___37510 < len__19539__auto___37509)){
args37506.push((arguments[i__19540__auto___37510]));

var G__37511 = (i__19540__auto___37510 + (1));
i__19540__auto___37510 = G__37511;
continue;
} else {
}
break;
}

var G__37508 = args37506.length;
switch (G__37508) {
case 1:
return sablono.core.image37505.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image37505.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37506.length)].join('')));

}
});

sablono.core.image37505.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image37505.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image37505.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image37505);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__37513_SHARP_,p2__37514_SHARP_){
return [cljs.core.str(p1__37513_SHARP_),cljs.core.str("["),cljs.core.str(p2__37514_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__37515_SHARP_,p2__37516_SHARP_){
return [cljs.core.str(p1__37515_SHARP_),cljs.core.str("-"),cljs.core.str(p2__37516_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field37517 = (function sablono$core$color_field37517(var_args){
var args37518 = [];
var len__19539__auto___37585 = arguments.length;
var i__19540__auto___37586 = (0);
while(true){
if((i__19540__auto___37586 < len__19539__auto___37585)){
args37518.push((arguments[i__19540__auto___37586]));

var G__37587 = (i__19540__auto___37586 + (1));
i__19540__auto___37586 = G__37587;
continue;
} else {
}
break;
}

var G__37520 = args37518.length;
switch (G__37520) {
case 1:
return sablono.core.color_field37517.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field37517.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37518.length)].join('')));

}
});

sablono.core.color_field37517.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.color_field37517.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.color_field37517.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.color_field37517.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field37517);

/**
 * Creates a date input field.
 */
sablono.core.date_field37521 = (function sablono$core$date_field37521(var_args){
var args37522 = [];
var len__19539__auto___37589 = arguments.length;
var i__19540__auto___37590 = (0);
while(true){
if((i__19540__auto___37590 < len__19539__auto___37589)){
args37522.push((arguments[i__19540__auto___37590]));

var G__37591 = (i__19540__auto___37590 + (1));
i__19540__auto___37590 = G__37591;
continue;
} else {
}
break;
}

var G__37524 = args37522.length;
switch (G__37524) {
case 1:
return sablono.core.date_field37521.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field37521.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37522.length)].join('')));

}
});

sablono.core.date_field37521.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.date_field37521.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.date_field37521.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.date_field37521.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field37521);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field37525 = (function sablono$core$datetime_field37525(var_args){
var args37526 = [];
var len__19539__auto___37593 = arguments.length;
var i__19540__auto___37594 = (0);
while(true){
if((i__19540__auto___37594 < len__19539__auto___37593)){
args37526.push((arguments[i__19540__auto___37594]));

var G__37595 = (i__19540__auto___37594 + (1));
i__19540__auto___37594 = G__37595;
continue;
} else {
}
break;
}

var G__37528 = args37526.length;
switch (G__37528) {
case 1:
return sablono.core.datetime_field37525.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field37525.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37526.length)].join('')));

}
});

sablono.core.datetime_field37525.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.datetime_field37525.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.datetime_field37525.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.datetime_field37525.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field37525);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field37529 = (function sablono$core$datetime_local_field37529(var_args){
var args37530 = [];
var len__19539__auto___37597 = arguments.length;
var i__19540__auto___37598 = (0);
while(true){
if((i__19540__auto___37598 < len__19539__auto___37597)){
args37530.push((arguments[i__19540__auto___37598]));

var G__37599 = (i__19540__auto___37598 + (1));
i__19540__auto___37598 = G__37599;
continue;
} else {
}
break;
}

var G__37532 = args37530.length;
switch (G__37532) {
case 1:
return sablono.core.datetime_local_field37529.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field37529.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37530.length)].join('')));

}
});

sablono.core.datetime_local_field37529.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.datetime_local_field37529.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.datetime_local_field37529.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.datetime_local_field37529.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field37529);

/**
 * Creates a email input field.
 */
sablono.core.email_field37533 = (function sablono$core$email_field37533(var_args){
var args37534 = [];
var len__19539__auto___37601 = arguments.length;
var i__19540__auto___37602 = (0);
while(true){
if((i__19540__auto___37602 < len__19539__auto___37601)){
args37534.push((arguments[i__19540__auto___37602]));

var G__37603 = (i__19540__auto___37602 + (1));
i__19540__auto___37602 = G__37603;
continue;
} else {
}
break;
}

var G__37536 = args37534.length;
switch (G__37536) {
case 1:
return sablono.core.email_field37533.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field37533.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37534.length)].join('')));

}
});

sablono.core.email_field37533.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.email_field37533.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.email_field37533.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.email_field37533.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field37533);

/**
 * Creates a file input field.
 */
sablono.core.file_field37537 = (function sablono$core$file_field37537(var_args){
var args37538 = [];
var len__19539__auto___37605 = arguments.length;
var i__19540__auto___37606 = (0);
while(true){
if((i__19540__auto___37606 < len__19539__auto___37605)){
args37538.push((arguments[i__19540__auto___37606]));

var G__37607 = (i__19540__auto___37606 + (1));
i__19540__auto___37606 = G__37607;
continue;
} else {
}
break;
}

var G__37540 = args37538.length;
switch (G__37540) {
case 1:
return sablono.core.file_field37537.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field37537.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37538.length)].join('')));

}
});

sablono.core.file_field37537.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.file_field37537.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.file_field37537.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.file_field37537.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field37537);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field37541 = (function sablono$core$hidden_field37541(var_args){
var args37542 = [];
var len__19539__auto___37609 = arguments.length;
var i__19540__auto___37610 = (0);
while(true){
if((i__19540__auto___37610 < len__19539__auto___37609)){
args37542.push((arguments[i__19540__auto___37610]));

var G__37611 = (i__19540__auto___37610 + (1));
i__19540__auto___37610 = G__37611;
continue;
} else {
}
break;
}

var G__37544 = args37542.length;
switch (G__37544) {
case 1:
return sablono.core.hidden_field37541.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field37541.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37542.length)].join('')));

}
});

sablono.core.hidden_field37541.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.hidden_field37541.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.hidden_field37541.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.hidden_field37541.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field37541);

/**
 * Creates a month input field.
 */
sablono.core.month_field37545 = (function sablono$core$month_field37545(var_args){
var args37546 = [];
var len__19539__auto___37613 = arguments.length;
var i__19540__auto___37614 = (0);
while(true){
if((i__19540__auto___37614 < len__19539__auto___37613)){
args37546.push((arguments[i__19540__auto___37614]));

var G__37615 = (i__19540__auto___37614 + (1));
i__19540__auto___37614 = G__37615;
continue;
} else {
}
break;
}

var G__37548 = args37546.length;
switch (G__37548) {
case 1:
return sablono.core.month_field37545.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field37545.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37546.length)].join('')));

}
});

sablono.core.month_field37545.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.month_field37545.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.month_field37545.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.month_field37545.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field37545);

/**
 * Creates a number input field.
 */
sablono.core.number_field37549 = (function sablono$core$number_field37549(var_args){
var args37550 = [];
var len__19539__auto___37617 = arguments.length;
var i__19540__auto___37618 = (0);
while(true){
if((i__19540__auto___37618 < len__19539__auto___37617)){
args37550.push((arguments[i__19540__auto___37618]));

var G__37619 = (i__19540__auto___37618 + (1));
i__19540__auto___37618 = G__37619;
continue;
} else {
}
break;
}

var G__37552 = args37550.length;
switch (G__37552) {
case 1:
return sablono.core.number_field37549.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field37549.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37550.length)].join('')));

}
});

sablono.core.number_field37549.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.number_field37549.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.number_field37549.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.number_field37549.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field37549);

/**
 * Creates a password input field.
 */
sablono.core.password_field37553 = (function sablono$core$password_field37553(var_args){
var args37554 = [];
var len__19539__auto___37621 = arguments.length;
var i__19540__auto___37622 = (0);
while(true){
if((i__19540__auto___37622 < len__19539__auto___37621)){
args37554.push((arguments[i__19540__auto___37622]));

var G__37623 = (i__19540__auto___37622 + (1));
i__19540__auto___37622 = G__37623;
continue;
} else {
}
break;
}

var G__37556 = args37554.length;
switch (G__37556) {
case 1:
return sablono.core.password_field37553.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field37553.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37554.length)].join('')));

}
});

sablono.core.password_field37553.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.password_field37553.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.password_field37553.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.password_field37553.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field37553);

/**
 * Creates a range input field.
 */
sablono.core.range_field37557 = (function sablono$core$range_field37557(var_args){
var args37558 = [];
var len__19539__auto___37625 = arguments.length;
var i__19540__auto___37626 = (0);
while(true){
if((i__19540__auto___37626 < len__19539__auto___37625)){
args37558.push((arguments[i__19540__auto___37626]));

var G__37627 = (i__19540__auto___37626 + (1));
i__19540__auto___37626 = G__37627;
continue;
} else {
}
break;
}

var G__37560 = args37558.length;
switch (G__37560) {
case 1:
return sablono.core.range_field37557.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field37557.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37558.length)].join('')));

}
});

sablono.core.range_field37557.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.range_field37557.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.range_field37557.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.range_field37557.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field37557);

/**
 * Creates a search input field.
 */
sablono.core.search_field37561 = (function sablono$core$search_field37561(var_args){
var args37562 = [];
var len__19539__auto___37629 = arguments.length;
var i__19540__auto___37630 = (0);
while(true){
if((i__19540__auto___37630 < len__19539__auto___37629)){
args37562.push((arguments[i__19540__auto___37630]));

var G__37631 = (i__19540__auto___37630 + (1));
i__19540__auto___37630 = G__37631;
continue;
} else {
}
break;
}

var G__37564 = args37562.length;
switch (G__37564) {
case 1:
return sablono.core.search_field37561.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field37561.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37562.length)].join('')));

}
});

sablono.core.search_field37561.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.search_field37561.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.search_field37561.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.search_field37561.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field37561);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field37565 = (function sablono$core$tel_field37565(var_args){
var args37566 = [];
var len__19539__auto___37633 = arguments.length;
var i__19540__auto___37634 = (0);
while(true){
if((i__19540__auto___37634 < len__19539__auto___37633)){
args37566.push((arguments[i__19540__auto___37634]));

var G__37635 = (i__19540__auto___37634 + (1));
i__19540__auto___37634 = G__37635;
continue;
} else {
}
break;
}

var G__37568 = args37566.length;
switch (G__37568) {
case 1:
return sablono.core.tel_field37565.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field37565.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37566.length)].join('')));

}
});

sablono.core.tel_field37565.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.tel_field37565.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.tel_field37565.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.tel_field37565.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field37565);

/**
 * Creates a text input field.
 */
sablono.core.text_field37569 = (function sablono$core$text_field37569(var_args){
var args37570 = [];
var len__19539__auto___37637 = arguments.length;
var i__19540__auto___37638 = (0);
while(true){
if((i__19540__auto___37638 < len__19539__auto___37637)){
args37570.push((arguments[i__19540__auto___37638]));

var G__37639 = (i__19540__auto___37638 + (1));
i__19540__auto___37638 = G__37639;
continue;
} else {
}
break;
}

var G__37572 = args37570.length;
switch (G__37572) {
case 1:
return sablono.core.text_field37569.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field37569.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37570.length)].join('')));

}
});

sablono.core.text_field37569.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.text_field37569.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.text_field37569.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.text_field37569.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field37569);

/**
 * Creates a time input field.
 */
sablono.core.time_field37573 = (function sablono$core$time_field37573(var_args){
var args37574 = [];
var len__19539__auto___37641 = arguments.length;
var i__19540__auto___37642 = (0);
while(true){
if((i__19540__auto___37642 < len__19539__auto___37641)){
args37574.push((arguments[i__19540__auto___37642]));

var G__37643 = (i__19540__auto___37642 + (1));
i__19540__auto___37642 = G__37643;
continue;
} else {
}
break;
}

var G__37576 = args37574.length;
switch (G__37576) {
case 1:
return sablono.core.time_field37573.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field37573.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37574.length)].join('')));

}
});

sablono.core.time_field37573.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.time_field37573.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.time_field37573.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.time_field37573.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field37573);

/**
 * Creates a url input field.
 */
sablono.core.url_field37577 = (function sablono$core$url_field37577(var_args){
var args37578 = [];
var len__19539__auto___37645 = arguments.length;
var i__19540__auto___37646 = (0);
while(true){
if((i__19540__auto___37646 < len__19539__auto___37645)){
args37578.push((arguments[i__19540__auto___37646]));

var G__37647 = (i__19540__auto___37646 + (1));
i__19540__auto___37646 = G__37647;
continue;
} else {
}
break;
}

var G__37580 = args37578.length;
switch (G__37580) {
case 1:
return sablono.core.url_field37577.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field37577.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37578.length)].join('')));

}
});

sablono.core.url_field37577.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.url_field37577.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.url_field37577.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.url_field37577.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field37577);

/**
 * Creates a week input field.
 */
sablono.core.week_field37581 = (function sablono$core$week_field37581(var_args){
var args37582 = [];
var len__19539__auto___37649 = arguments.length;
var i__19540__auto___37650 = (0);
while(true){
if((i__19540__auto___37650 < len__19539__auto___37649)){
args37582.push((arguments[i__19540__auto___37650]));

var G__37651 = (i__19540__auto___37650 + (1));
i__19540__auto___37650 = G__37651;
continue;
} else {
}
break;
}

var G__37584 = args37582.length;
switch (G__37584) {
case 1:
return sablono.core.week_field37581.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field37581.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37582.length)].join('')));

}
});

sablono.core.week_field37581.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.week_field37581.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.week_field37581.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.week_field37581.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field37581);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box37653 = (function sablono$core$check_box37653(var_args){
var args37654 = [];
var len__19539__auto___37657 = arguments.length;
var i__19540__auto___37658 = (0);
while(true){
if((i__19540__auto___37658 < len__19539__auto___37657)){
args37654.push((arguments[i__19540__auto___37658]));

var G__37659 = (i__19540__auto___37658 + (1));
i__19540__auto___37658 = G__37659;
continue;
} else {
}
break;
}

var G__37656 = args37654.length;
switch (G__37656) {
case 1:
return sablono.core.check_box37653.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box37653.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box37653.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37654.length)].join('')));

}
});

sablono.core.check_box37653.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box37653.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box37653.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box37653.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box37653.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box37653.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box37653);
/**
 * Creates a radio button.
 */
sablono.core.radio_button37661 = (function sablono$core$radio_button37661(var_args){
var args37662 = [];
var len__19539__auto___37665 = arguments.length;
var i__19540__auto___37666 = (0);
while(true){
if((i__19540__auto___37666 < len__19539__auto___37665)){
args37662.push((arguments[i__19540__auto___37666]));

var G__37667 = (i__19540__auto___37666 + (1));
i__19540__auto___37666 = G__37667;
continue;
} else {
}
break;
}

var G__37664 = args37662.length;
switch (G__37664) {
case 1:
return sablono.core.radio_button37661.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button37661.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button37661.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37662.length)].join('')));

}
});

sablono.core.radio_button37661.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button37661.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button37661.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button37661.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button37661.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button37661.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button37661);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__37670 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__37670);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options37671 = (function sablono$core$select_options37671(coll){
var iter__19244__auto__ = (function sablono$core$select_options37671_$_iter__37690(s__37691){
return (new cljs.core.LazySeq(null,(function (){
var s__37691__$1 = s__37691;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__37691__$1);
if(temp__4657__auto__){
var s__37691__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37691__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__37691__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__37693 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__37692 = (0);
while(true){
if((i__37692 < size__19243__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__37692);
cljs.core.chunk_append(b__37693,((cljs.core.sequential_QMARK_(x))?(function (){var vec__37702 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37702,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37702,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37702,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options37671(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__37708 = (i__37692 + (1));
i__37692 = G__37708;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37693),sablono$core$select_options37671_$_iter__37690(cljs.core.chunk_rest(s__37691__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37693),null);
}
} else {
var x = cljs.core.first(s__37691__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__37705 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37705,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37705,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37705,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options37671(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options37671_$_iter__37690(cljs.core.rest(s__37691__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options37671);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down37709 = (function sablono$core$drop_down37709(var_args){
var args37710 = [];
var len__19539__auto___37713 = arguments.length;
var i__19540__auto___37714 = (0);
while(true){
if((i__19540__auto___37714 < len__19539__auto___37713)){
args37710.push((arguments[i__19540__auto___37714]));

var G__37715 = (i__19540__auto___37714 + (1));
i__19540__auto___37714 = G__37715;
continue;
} else {
}
break;
}

var G__37712 = args37710.length;
switch (G__37712) {
case 2:
return sablono.core.drop_down37709.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down37709.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37710.length)].join('')));

}
});

sablono.core.drop_down37709.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down37709.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down37709.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down37709.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down37709);
/**
 * Creates a text area element.
 */
sablono.core.text_area37717 = (function sablono$core$text_area37717(var_args){
var args37718 = [];
var len__19539__auto___37721 = arguments.length;
var i__19540__auto___37722 = (0);
while(true){
if((i__19540__auto___37722 < len__19539__auto___37721)){
args37718.push((arguments[i__19540__auto___37722]));

var G__37723 = (i__19540__auto___37722 + (1));
i__19540__auto___37722 = G__37723;
continue;
} else {
}
break;
}

var G__37720 = args37718.length;
switch (G__37720) {
case 1:
return sablono.core.text_area37717.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area37717.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37718.length)].join('')));

}
});

sablono.core.text_area37717.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area37717.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area37717.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area37717.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area37717);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label37725 = (function sablono$core$label37725(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label37725);
/**
 * Creates a submit button.
 */
sablono.core.submit_button37726 = (function sablono$core$submit_button37726(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button37726);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button37727 = (function sablono$core$reset_button37727(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button37727);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to37728 = (function sablono$core$form_to37728(var_args){
var args__19546__auto__ = [];
var len__19539__auto___37738 = arguments.length;
var i__19540__auto___37739 = (0);
while(true){
if((i__19540__auto___37739 < len__19539__auto___37738)){
args__19546__auto__.push((arguments[i__19540__auto___37739]));

var G__37740 = (i__19540__auto___37739 + (1));
i__19540__auto___37739 = G__37740;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to37728.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.form_to37728.cljs$core$IFn$_invoke$arity$variadic = (function (p__37731,body){
var vec__37732 = p__37731;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37732,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37732,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__37735 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__37736 = "_method";
var G__37737 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__37735,G__37736,G__37737) : sablono.core.hidden_field.call(null,G__37735,G__37736,G__37737));
})()], null)),body));
});

sablono.core.form_to37728.cljs$lang$maxFixedArity = (1);

sablono.core.form_to37728.cljs$lang$applyTo = (function (seq37729){
var G__37730 = cljs.core.first(seq37729);
var seq37729__$1 = cljs.core.next(seq37729);
return sablono.core.form_to37728.cljs$core$IFn$_invoke$arity$variadic(G__37730,seq37729__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to37728);
