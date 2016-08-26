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
var G__35327__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__35324 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__35325 = cljs.core.seq(vec__35324);
var first__35326 = cljs.core.first(seq__35325);
var seq__35325__$1 = cljs.core.next(seq__35325);
var tag = first__35326;
var body = seq__35325__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__35327 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35328__i = 0, G__35328__a = new Array(arguments.length -  0);
while (G__35328__i < G__35328__a.length) {G__35328__a[G__35328__i] = arguments[G__35328__i + 0]; ++G__35328__i;}
  args = new cljs.core.IndexedSeq(G__35328__a,0);
} 
return G__35327__delegate.call(this,args);};
G__35327.cljs$lang$maxFixedArity = 0;
G__35327.cljs$lang$applyTo = (function (arglist__35329){
var args = cljs.core.seq(arglist__35329);
return G__35327__delegate(args);
});
G__35327.cljs$core$IFn$_invoke$arity$variadic = G__35327__delegate;
return G__35327;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19244__auto__ = (function sablono$core$update_arglists_$_iter__35336(s__35337){
return (new cljs.core.LazySeq(null,(function (){
var s__35337__$1 = s__35337;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__35337__$1);
if(temp__4657__auto__){
var s__35337__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35337__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__35337__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__35339 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__35338 = (0);
while(true){
if((i__35338 < size__19243__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__35338);
cljs.core.chunk_append(b__35339,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__35342 = (i__35338 + (1));
i__35338 = G__35342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35339),sablono$core$update_arglists_$_iter__35336(cljs.core.chunk_rest(s__35337__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35339),null);
}
} else {
var args = cljs.core.first(s__35337__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__35336(cljs.core.rest(s__35337__$2)));
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
var len__19539__auto___35350 = arguments.length;
var i__19540__auto___35351 = (0);
while(true){
if((i__19540__auto___35351 < len__19539__auto___35350)){
args__19546__auto__.push((arguments[i__19540__auto___35351]));

var G__35352 = (i__19540__auto___35351 + (1));
i__19540__auto___35351 = G__35352;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19244__auto__ = (function sablono$core$iter__35344(s__35345){
return (new cljs.core.LazySeq(null,(function (){
var s__35345__$1 = s__35345;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__35345__$1);
if(temp__4657__auto__){
var s__35345__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35345__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__35345__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__35347 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__35346 = (0);
while(true){
if((i__35346 < size__19243__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__35346);
cljs.core.chunk_append(b__35347,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__35353 = (i__35346 + (1));
i__35346 = G__35353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35347),sablono$core$iter__35344(cljs.core.chunk_rest(s__35345__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35347),null);
}
} else {
var style = cljs.core.first(s__35345__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__35344(cljs.core.rest(s__35345__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq35343){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35343));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__35358 = goog.dom.getDocument().body;
var G__35359 = (function (){var G__35360 = "script";
var G__35361 = {"src": src};
return goog.dom.createDom(G__35360,G__35361);
})();
return goog.dom.appendChild(G__35358,G__35359);
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
sablono.core.link_to35362 = (function sablono$core$link_to35362(var_args){
var args__19546__auto__ = [];
var len__19539__auto___35365 = arguments.length;
var i__19540__auto___35366 = (0);
while(true){
if((i__19540__auto___35366 < len__19539__auto___35365)){
args__19546__auto__.push((arguments[i__19540__auto___35366]));

var G__35367 = (i__19540__auto___35366 + (1));
i__19540__auto___35366 = G__35367;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to35362.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.link_to35362.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to35362.cljs$lang$maxFixedArity = (1);

sablono.core.link_to35362.cljs$lang$applyTo = (function (seq35363){
var G__35364 = cljs.core.first(seq35363);
var seq35363__$1 = cljs.core.next(seq35363);
return sablono.core.link_to35362.cljs$core$IFn$_invoke$arity$variadic(G__35364,seq35363__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to35362);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to35368 = (function sablono$core$mail_to35368(var_args){
var args__19546__auto__ = [];
var len__19539__auto___35375 = arguments.length;
var i__19540__auto___35376 = (0);
while(true){
if((i__19540__auto___35376 < len__19539__auto___35375)){
args__19546__auto__.push((arguments[i__19540__auto___35376]));

var G__35377 = (i__19540__auto___35376 + (1));
i__19540__auto___35376 = G__35377;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to35368.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.mail_to35368.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__35371){
var vec__35372 = p__35371;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35372,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18464__auto__ = content;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to35368.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to35368.cljs$lang$applyTo = (function (seq35369){
var G__35370 = cljs.core.first(seq35369);
var seq35369__$1 = cljs.core.next(seq35369);
return sablono.core.mail_to35368.cljs$core$IFn$_invoke$arity$variadic(G__35370,seq35369__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to35368);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list35378 = (function sablono$core$unordered_list35378(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__19244__auto__ = (function sablono$core$unordered_list35378_$_iter__35385(s__35386){
return (new cljs.core.LazySeq(null,(function (){
var s__35386__$1 = s__35386;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__35386__$1);
if(temp__4657__auto__){
var s__35386__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35386__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__35386__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__35388 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__35387 = (0);
while(true){
if((i__35387 < size__19243__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__35387);
cljs.core.chunk_append(b__35388,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__35391 = (i__35387 + (1));
i__35387 = G__35391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35388),sablono$core$unordered_list35378_$_iter__35385(cljs.core.chunk_rest(s__35386__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35388),null);
}
} else {
var x = cljs.core.first(s__35386__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list35378_$_iter__35385(cljs.core.rest(s__35386__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list35378);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list35392 = (function sablono$core$ordered_list35392(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__19244__auto__ = (function sablono$core$ordered_list35392_$_iter__35399(s__35400){
return (new cljs.core.LazySeq(null,(function (){
var s__35400__$1 = s__35400;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__35400__$1);
if(temp__4657__auto__){
var s__35400__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35400__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__35400__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__35402 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__35401 = (0);
while(true){
if((i__35401 < size__19243__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__35401);
cljs.core.chunk_append(b__35402,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__35405 = (i__35401 + (1));
i__35401 = G__35405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35402),sablono$core$ordered_list35392_$_iter__35399(cljs.core.chunk_rest(s__35400__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35402),null);
}
} else {
var x = cljs.core.first(s__35400__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list35392_$_iter__35399(cljs.core.rest(s__35400__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list35392);
/**
 * Create an image element.
 */
sablono.core.image35406 = (function sablono$core$image35406(var_args){
var args35407 = [];
var len__19539__auto___35410 = arguments.length;
var i__19540__auto___35411 = (0);
while(true){
if((i__19540__auto___35411 < len__19539__auto___35410)){
args35407.push((arguments[i__19540__auto___35411]));

var G__35412 = (i__19540__auto___35411 + (1));
i__19540__auto___35411 = G__35412;
continue;
} else {
}
break;
}

var G__35409 = args35407.length;
switch (G__35409) {
case 1:
return sablono.core.image35406.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image35406.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35407.length)].join('')));

}
});

sablono.core.image35406.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image35406.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image35406.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image35406);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__35414_SHARP_,p2__35415_SHARP_){
return [cljs.core.str(p1__35414_SHARP_),cljs.core.str("["),cljs.core.str(p2__35415_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__35416_SHARP_,p2__35417_SHARP_){
return [cljs.core.str(p1__35416_SHARP_),cljs.core.str("-"),cljs.core.str(p2__35417_SHARP_)].join('');
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
sablono.core.color_field35418 = (function sablono$core$color_field35418(var_args){
var args35419 = [];
var len__19539__auto___35486 = arguments.length;
var i__19540__auto___35487 = (0);
while(true){
if((i__19540__auto___35487 < len__19539__auto___35486)){
args35419.push((arguments[i__19540__auto___35487]));

var G__35488 = (i__19540__auto___35487 + (1));
i__19540__auto___35487 = G__35488;
continue;
} else {
}
break;
}

var G__35421 = args35419.length;
switch (G__35421) {
case 1:
return sablono.core.color_field35418.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field35418.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35419.length)].join('')));

}
});

sablono.core.color_field35418.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.color_field35418.cljs$core$IFn$_invoke$arity$2(name__20270__auto__,null);
});

sablono.core.color_field35418.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.color_field35418.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field35418);

/**
 * Creates a date input field.
 */
sablono.core.date_field35422 = (function sablono$core$date_field35422(var_args){
var args35423 = [];
var len__19539__auto___35490 = arguments.length;
var i__19540__auto___35491 = (0);
while(true){
if((i__19540__auto___35491 < len__19539__auto___35490)){
args35423.push((arguments[i__19540__auto___35491]));

var G__35492 = (i__19540__auto___35491 + (1));
i__19540__auto___35491 = G__35492;
continue;
} else {
}
break;
}

var G__35425 = args35423.length;
switch (G__35425) {
case 1:
return sablono.core.date_field35422.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field35422.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35423.length)].join('')));

}
});

sablono.core.date_field35422.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.date_field35422.cljs$core$IFn$_invoke$arity$2(name__20270__auto__,null);
});

sablono.core.date_field35422.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.date_field35422.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field35422);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field35426 = (function sablono$core$datetime_field35426(var_args){
var args35427 = [];
var len__19539__auto___35494 = arguments.length;
var i__19540__auto___35495 = (0);
while(true){
if((i__19540__auto___35495 < len__19539__auto___35494)){
args35427.push((arguments[i__19540__auto___35495]));

var G__35496 = (i__19540__auto___35495 + (1));
i__19540__auto___35495 = G__35496;
continue;
} else {
}
break;
}

var G__35429 = args35427.length;
switch (G__35429) {
case 1:
return sablono.core.datetime_field35426.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field35426.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35427.length)].join('')));

}
});

sablono.core.datetime_field35426.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.datetime_field35426.cljs$core$IFn$_invoke$arity$2(name__20270__auto__,null);
});

sablono.core.datetime_field35426.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.datetime_field35426.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field35426);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field35430 = (function sablono$core$datetime_local_field35430(var_args){
var args35431 = [];
var len__19539__auto___35498 = arguments.length;
var i__19540__auto___35499 = (0);
while(true){
if((i__19540__auto___35499 < len__19539__auto___35498)){
args35431.push((arguments[i__19540__auto___35499]));

var G__35500 = (i__19540__auto___35499 + (1));
i__19540__auto___35499 = G__35500;
continue;
} else {
}
break;
}

var G__35433 = args35431.length;
switch (G__35433) {
case 1:
return sablono.core.datetime_local_field35430.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field35430.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35431.length)].join('')));

}
});

sablono.core.datetime_local_field35430.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.datetime_local_field35430.cljs$core$IFn$_invoke$arity$2(name__20270__auto__,null);
});

sablono.core.datetime_local_field35430.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.datetime_local_field35430.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field35430);

/**
 * Creates a email input field.
 */
sablono.core.email_field35434 = (function sablono$core$email_field35434(var_args){
var args35435 = [];
var len__19539__auto___35502 = arguments.length;
var i__19540__auto___35503 = (0);
while(true){
if((i__19540__auto___35503 < len__19539__auto___35502)){
args35435.push((arguments[i__19540__auto___35503]));

var G__35504 = (i__19540__auto___35503 + (1));
i__19540__auto___35503 = G__35504;
continue;
} else {
}
break;
}

var G__35437 = args35435.length;
switch (G__35437) {
case 1:
return sablono.core.email_field35434.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field35434.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35435.length)].join('')));

}
});

sablono.core.email_field35434.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.email_field35434.cljs$core$IFn$_invoke$arity$2(name__20270__auto__,null);
});

sablono.core.email_field35434.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.email_field35434.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field35434);

/**
 * Creates a file input field.
 */
sablono.core.file_field35438 = (function sablono$core$file_field35438(var_args){
var args35439 = [];
var len__19539__auto___35506 = arguments.length;
var i__19540__auto___35507 = (0);
while(true){
if((i__19540__auto___35507 < len__19539__auto___35506)){
args35439.push((arguments[i__19540__auto___35507]));

var G__35508 = (i__19540__auto___35507 + (1));
i__19540__auto___35507 = G__35508;
continue;
} else {
}
break;
}

var G__35441 = args35439.length;
switch (G__35441) {
case 1:
return sablono.core.file_field35438.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field35438.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35439.length)].join('')));

}
});

sablono.core.file_field35438.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.file_field35438.cljs$core$IFn$_invoke$arity$2(name__20270__auto__,null);
});

sablono.core.file_field35438.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.file_field35438.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field35438);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field35442 = (function sablono$core$hidden_field35442(var_args){
var args35443 = [];
var len__19539__auto___35510 = arguments.length;
var i__19540__auto___35511 = (0);
while(true){
if((i__19540__auto___35511 < len__19539__auto___35510)){
args35443.push((arguments[i__19540__auto___35511]));

var G__35512 = (i__19540__auto___35511 + (1));
i__19540__auto___35511 = G__35512;
continue;
} else {
}
break;
}

var G__35445 = args35443.length;
switch (G__35445) {
case 1:
return sablono.core.hidden_field35442.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field35442.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35443.length)].join('')));

}
});

sablono.core.hidden_field35442.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.hidden_field35442.cljs$core$IFn$_invoke$arity$2(name__20270__auto__,null);
});

sablono.core.hidden_field35442.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.hidden_field35442.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field35442);

/**
 * Creates a month input field.
 */
sablono.core.month_field35446 = (function sablono$core$month_field35446(var_args){
var args35447 = [];
var len__19539__auto___35514 = arguments.length;
var i__19540__auto___35515 = (0);
while(true){
if((i__19540__auto___35515 < len__19539__auto___35514)){
args35447.push((arguments[i__19540__auto___35515]));

var G__35516 = (i__19540__auto___35515 + (1));
i__19540__auto___35515 = G__35516;
continue;
} else {
}
break;
}

var G__35449 = args35447.length;
switch (G__35449) {
case 1:
return sablono.core.month_field35446.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field35446.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35447.length)].join('')));

}
});

sablono.core.month_field35446.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.month_field35446.cljs$core$IFn$_invoke$arity$2(name__20270__auto__,null);
});

sablono.core.month_field35446.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.month_field35446.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field35446);

/**
 * Creates a number input field.
 */
sablono.core.number_field35450 = (function sablono$core$number_field35450(var_args){
var args35451 = [];
var len__19539__auto___35518 = arguments.length;
var i__19540__auto___35519 = (0);
while(true){
if((i__19540__auto___35519 < len__19539__auto___35518)){
args35451.push((arguments[i__19540__auto___35519]));

var G__35520 = (i__19540__auto___35519 + (1));
i__19540__auto___35519 = G__35520;
continue;
} else {
}
break;
}

var G__35453 = args35451.length;
switch (G__35453) {
case 1:
return sablono.core.number_field35450.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field35450.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35451.length)].join('')));

}
});

sablono.core.number_field35450.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.number_field35450.cljs$core$IFn$_invoke$arity$2(name__20270__auto__,null);
});

sablono.core.number_field35450.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.number_field35450.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field35450);

/**
 * Creates a password input field.
 */
sablono.core.password_field35454 = (function sablono$core$password_field35454(var_args){
var args35455 = [];
var len__19539__auto___35522 = arguments.length;
var i__19540__auto___35523 = (0);
while(true){
if((i__19540__auto___35523 < len__19539__auto___35522)){
args35455.push((arguments[i__19540__auto___35523]));

var G__35524 = (i__19540__auto___35523 + (1));
i__19540__auto___35523 = G__35524;
continue;
} else {
}
break;
}

var G__35457 = args35455.length;
switch (G__35457) {
case 1:
return sablono.core.password_field35454.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field35454.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35455.length)].join('')));

}
});

sablono.core.password_field35454.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.password_field35454.cljs$core$IFn$_invoke$arity$2(name__20270__auto__,null);
});

sablono.core.password_field35454.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.password_field35454.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field35454);

/**
 * Creates a range input field.
 */
sablono.core.range_field35458 = (function sablono$core$range_field35458(var_args){
var args35459 = [];
var len__19539__auto___35526 = arguments.length;
var i__19540__auto___35527 = (0);
while(true){
if((i__19540__auto___35527 < len__19539__auto___35526)){
args35459.push((arguments[i__19540__auto___35527]));

var G__35528 = (i__19540__auto___35527 + (1));
i__19540__auto___35527 = G__35528;
continue;
} else {
}
break;
}

var G__35461 = args35459.length;
switch (G__35461) {
case 1:
return sablono.core.range_field35458.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field35458.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35459.length)].join('')));

}
});

sablono.core.range_field35458.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.range_field35458.cljs$core$IFn$_invoke$arity$2(name__20270__auto__,null);
});

sablono.core.range_field35458.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.range_field35458.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field35458);

/**
 * Creates a search input field.
 */
sablono.core.search_field35462 = (function sablono$core$search_field35462(var_args){
var args35463 = [];
var len__19539__auto___35530 = arguments.length;
var i__19540__auto___35531 = (0);
while(true){
if((i__19540__auto___35531 < len__19539__auto___35530)){
args35463.push((arguments[i__19540__auto___35531]));

var G__35532 = (i__19540__auto___35531 + (1));
i__19540__auto___35531 = G__35532;
continue;
} else {
}
break;
}

var G__35465 = args35463.length;
switch (G__35465) {
case 1:
return sablono.core.search_field35462.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field35462.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35463.length)].join('')));

}
});

sablono.core.search_field35462.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.search_field35462.cljs$core$IFn$_invoke$arity$2(name__20270__auto__,null);
});

sablono.core.search_field35462.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.search_field35462.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field35462);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field35466 = (function sablono$core$tel_field35466(var_args){
var args35467 = [];
var len__19539__auto___35534 = arguments.length;
var i__19540__auto___35535 = (0);
while(true){
if((i__19540__auto___35535 < len__19539__auto___35534)){
args35467.push((arguments[i__19540__auto___35535]));

var G__35536 = (i__19540__auto___35535 + (1));
i__19540__auto___35535 = G__35536;
continue;
} else {
}
break;
}

var G__35469 = args35467.length;
switch (G__35469) {
case 1:
return sablono.core.tel_field35466.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field35466.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35467.length)].join('')));

}
});

sablono.core.tel_field35466.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.tel_field35466.cljs$core$IFn$_invoke$arity$2(name__20270__auto__,null);
});

sablono.core.tel_field35466.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.tel_field35466.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field35466);

/**
 * Creates a text input field.
 */
sablono.core.text_field35470 = (function sablono$core$text_field35470(var_args){
var args35471 = [];
var len__19539__auto___35538 = arguments.length;
var i__19540__auto___35539 = (0);
while(true){
if((i__19540__auto___35539 < len__19539__auto___35538)){
args35471.push((arguments[i__19540__auto___35539]));

var G__35540 = (i__19540__auto___35539 + (1));
i__19540__auto___35539 = G__35540;
continue;
} else {
}
break;
}

var G__35473 = args35471.length;
switch (G__35473) {
case 1:
return sablono.core.text_field35470.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field35470.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35471.length)].join('')));

}
});

sablono.core.text_field35470.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.text_field35470.cljs$core$IFn$_invoke$arity$2(name__20270__auto__,null);
});

sablono.core.text_field35470.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.text_field35470.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field35470);

/**
 * Creates a time input field.
 */
sablono.core.time_field35474 = (function sablono$core$time_field35474(var_args){
var args35475 = [];
var len__19539__auto___35542 = arguments.length;
var i__19540__auto___35543 = (0);
while(true){
if((i__19540__auto___35543 < len__19539__auto___35542)){
args35475.push((arguments[i__19540__auto___35543]));

var G__35544 = (i__19540__auto___35543 + (1));
i__19540__auto___35543 = G__35544;
continue;
} else {
}
break;
}

var G__35477 = args35475.length;
switch (G__35477) {
case 1:
return sablono.core.time_field35474.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field35474.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35475.length)].join('')));

}
});

sablono.core.time_field35474.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.time_field35474.cljs$core$IFn$_invoke$arity$2(name__20270__auto__,null);
});

sablono.core.time_field35474.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.time_field35474.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field35474);

/**
 * Creates a url input field.
 */
sablono.core.url_field35478 = (function sablono$core$url_field35478(var_args){
var args35479 = [];
var len__19539__auto___35546 = arguments.length;
var i__19540__auto___35547 = (0);
while(true){
if((i__19540__auto___35547 < len__19539__auto___35546)){
args35479.push((arguments[i__19540__auto___35547]));

var G__35548 = (i__19540__auto___35547 + (1));
i__19540__auto___35547 = G__35548;
continue;
} else {
}
break;
}

var G__35481 = args35479.length;
switch (G__35481) {
case 1:
return sablono.core.url_field35478.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field35478.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35479.length)].join('')));

}
});

sablono.core.url_field35478.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.url_field35478.cljs$core$IFn$_invoke$arity$2(name__20270__auto__,null);
});

sablono.core.url_field35478.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.url_field35478.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field35478);

/**
 * Creates a week input field.
 */
sablono.core.week_field35482 = (function sablono$core$week_field35482(var_args){
var args35483 = [];
var len__19539__auto___35550 = arguments.length;
var i__19540__auto___35551 = (0);
while(true){
if((i__19540__auto___35551 < len__19539__auto___35550)){
args35483.push((arguments[i__19540__auto___35551]));

var G__35552 = (i__19540__auto___35551 + (1));
i__19540__auto___35551 = G__35552;
continue;
} else {
}
break;
}

var G__35485 = args35483.length;
switch (G__35485) {
case 1:
return sablono.core.week_field35482.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field35482.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35483.length)].join('')));

}
});

sablono.core.week_field35482.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.week_field35482.cljs$core$IFn$_invoke$arity$2(name__20270__auto__,null);
});

sablono.core.week_field35482.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.week_field35482.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field35482);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box35554 = (function sablono$core$check_box35554(var_args){
var args35555 = [];
var len__19539__auto___35558 = arguments.length;
var i__19540__auto___35559 = (0);
while(true){
if((i__19540__auto___35559 < len__19539__auto___35558)){
args35555.push((arguments[i__19540__auto___35559]));

var G__35560 = (i__19540__auto___35559 + (1));
i__19540__auto___35559 = G__35560;
continue;
} else {
}
break;
}

var G__35557 = args35555.length;
switch (G__35557) {
case 1:
return sablono.core.check_box35554.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box35554.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box35554.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35555.length)].join('')));

}
});

sablono.core.check_box35554.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box35554.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box35554.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box35554.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box35554.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box35554.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box35554);
/**
 * Creates a radio button.
 */
sablono.core.radio_button35562 = (function sablono$core$radio_button35562(var_args){
var args35563 = [];
var len__19539__auto___35566 = arguments.length;
var i__19540__auto___35567 = (0);
while(true){
if((i__19540__auto___35567 < len__19539__auto___35566)){
args35563.push((arguments[i__19540__auto___35567]));

var G__35568 = (i__19540__auto___35567 + (1));
i__19540__auto___35567 = G__35568;
continue;
} else {
}
break;
}

var G__35565 = args35563.length;
switch (G__35565) {
case 1:
return sablono.core.radio_button35562.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button35562.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button35562.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35563.length)].join('')));

}
});

sablono.core.radio_button35562.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button35562.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button35562.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button35562.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button35562.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button35562.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button35562);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__35571 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__35571);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options35572 = (function sablono$core$select_options35572(coll){
var iter__19244__auto__ = (function sablono$core$select_options35572_$_iter__35591(s__35592){
return (new cljs.core.LazySeq(null,(function (){
var s__35592__$1 = s__35592;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__35592__$1);
if(temp__4657__auto__){
var s__35592__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35592__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__35592__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__35594 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__35593 = (0);
while(true){
if((i__35593 < size__19243__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__35593);
cljs.core.chunk_append(b__35594,((cljs.core.sequential_QMARK_(x))?(function (){var vec__35603 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35603,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35603,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35603,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options35572(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__35609 = (i__35593 + (1));
i__35593 = G__35609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35594),sablono$core$select_options35572_$_iter__35591(cljs.core.chunk_rest(s__35592__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35594),null);
}
} else {
var x = cljs.core.first(s__35592__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__35606 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35606,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35606,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35606,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options35572(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options35572_$_iter__35591(cljs.core.rest(s__35592__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options35572);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down35610 = (function sablono$core$drop_down35610(var_args){
var args35611 = [];
var len__19539__auto___35614 = arguments.length;
var i__19540__auto___35615 = (0);
while(true){
if((i__19540__auto___35615 < len__19539__auto___35614)){
args35611.push((arguments[i__19540__auto___35615]));

var G__35616 = (i__19540__auto___35615 + (1));
i__19540__auto___35615 = G__35616;
continue;
} else {
}
break;
}

var G__35613 = args35611.length;
switch (G__35613) {
case 2:
return sablono.core.drop_down35610.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down35610.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35611.length)].join('')));

}
});

sablono.core.drop_down35610.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down35610.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down35610.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down35610.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down35610);
/**
 * Creates a text area element.
 */
sablono.core.text_area35618 = (function sablono$core$text_area35618(var_args){
var args35619 = [];
var len__19539__auto___35622 = arguments.length;
var i__19540__auto___35623 = (0);
while(true){
if((i__19540__auto___35623 < len__19539__auto___35622)){
args35619.push((arguments[i__19540__auto___35623]));

var G__35624 = (i__19540__auto___35623 + (1));
i__19540__auto___35623 = G__35624;
continue;
} else {
}
break;
}

var G__35621 = args35619.length;
switch (G__35621) {
case 1:
return sablono.core.text_area35618.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area35618.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35619.length)].join('')));

}
});

sablono.core.text_area35618.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area35618.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area35618.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area35618.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area35618);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label35626 = (function sablono$core$label35626(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label35626);
/**
 * Creates a submit button.
 */
sablono.core.submit_button35627 = (function sablono$core$submit_button35627(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button35627);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button35628 = (function sablono$core$reset_button35628(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button35628);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to35629 = (function sablono$core$form_to35629(var_args){
var args__19546__auto__ = [];
var len__19539__auto___35639 = arguments.length;
var i__19540__auto___35640 = (0);
while(true){
if((i__19540__auto___35640 < len__19539__auto___35639)){
args__19546__auto__.push((arguments[i__19540__auto___35640]));

var G__35641 = (i__19540__auto___35640 + (1));
i__19540__auto___35640 = G__35641;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to35629.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.form_to35629.cljs$core$IFn$_invoke$arity$variadic = (function (p__35632,body){
var vec__35633 = p__35632;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35633,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35633,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__35636 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__35637 = "_method";
var G__35638 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__35636,G__35637,G__35638) : sablono.core.hidden_field.call(null,G__35636,G__35637,G__35638));
})()], null)),body));
});

sablono.core.form_to35629.cljs$lang$maxFixedArity = (1);

sablono.core.form_to35629.cljs$lang$applyTo = (function (seq35630){
var G__35631 = cljs.core.first(seq35630);
var seq35630__$1 = cljs.core.next(seq35630);
return sablono.core.form_to35629.cljs$core$IFn$_invoke$arity$variadic(G__35631,seq35630__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to35629);
