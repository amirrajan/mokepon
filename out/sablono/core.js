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
var G__69980__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__69977 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__69978 = cljs.core.seq(vec__69977);
var first__69979 = cljs.core.first(seq__69978);
var seq__69978__$1 = cljs.core.next(seq__69978);
var tag = first__69979;
var body = seq__69978__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__69980 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69981__i = 0, G__69981__a = new Array(arguments.length -  0);
while (G__69981__i < G__69981__a.length) {G__69981__a[G__69981__i] = arguments[G__69981__i + 0]; ++G__69981__i;}
  args = new cljs.core.IndexedSeq(G__69981__a,0);
} 
return G__69980__delegate.call(this,args);};
G__69980.cljs$lang$maxFixedArity = 0;
G__69980.cljs$lang$applyTo = (function (arglist__69982){
var args = cljs.core.seq(arglist__69982);
return G__69980__delegate(args);
});
G__69980.cljs$core$IFn$_invoke$arity$variadic = G__69980__delegate;
return G__69980;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19244__auto__ = (function sablono$core$update_arglists_$_iter__69989(s__69990){
return (new cljs.core.LazySeq(null,(function (){
var s__69990__$1 = s__69990;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__69990__$1);
if(temp__4657__auto__){
var s__69990__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69990__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__69990__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__69992 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__69991 = (0);
while(true){
if((i__69991 < size__19243__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__69991);
cljs.core.chunk_append(b__69992,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__69995 = (i__69991 + (1));
i__69991 = G__69995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69992),sablono$core$update_arglists_$_iter__69989(cljs.core.chunk_rest(s__69990__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69992),null);
}
} else {
var args = cljs.core.first(s__69990__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__69989(cljs.core.rest(s__69990__$2)));
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
var len__19539__auto___70003 = arguments.length;
var i__19540__auto___70004 = (0);
while(true){
if((i__19540__auto___70004 < len__19539__auto___70003)){
args__19546__auto__.push((arguments[i__19540__auto___70004]));

var G__70005 = (i__19540__auto___70004 + (1));
i__19540__auto___70004 = G__70005;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19244__auto__ = (function sablono$core$iter__69997(s__69998){
return (new cljs.core.LazySeq(null,(function (){
var s__69998__$1 = s__69998;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__69998__$1);
if(temp__4657__auto__){
var s__69998__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69998__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__69998__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__70000 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__69999 = (0);
while(true){
if((i__69999 < size__19243__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__69999);
cljs.core.chunk_append(b__70000,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__70006 = (i__69999 + (1));
i__69999 = G__70006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70000),sablono$core$iter__69997(cljs.core.chunk_rest(s__69998__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70000),null);
}
} else {
var style = cljs.core.first(s__69998__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__69997(cljs.core.rest(s__69998__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq69996){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69996));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__70011 = goog.dom.getDocument().body;
var G__70012 = (function (){var G__70013 = "script";
var G__70014 = {"src": src};
return goog.dom.createDom(G__70013,G__70014);
})();
return goog.dom.appendChild(G__70011,G__70012);
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
sablono.core.link_to70015 = (function sablono$core$link_to70015(var_args){
var args__19546__auto__ = [];
var len__19539__auto___70018 = arguments.length;
var i__19540__auto___70019 = (0);
while(true){
if((i__19540__auto___70019 < len__19539__auto___70018)){
args__19546__auto__.push((arguments[i__19540__auto___70019]));

var G__70020 = (i__19540__auto___70019 + (1));
i__19540__auto___70019 = G__70020;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to70015.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.link_to70015.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to70015.cljs$lang$maxFixedArity = (1);

sablono.core.link_to70015.cljs$lang$applyTo = (function (seq70016){
var G__70017 = cljs.core.first(seq70016);
var seq70016__$1 = cljs.core.next(seq70016);
return sablono.core.link_to70015.cljs$core$IFn$_invoke$arity$variadic(G__70017,seq70016__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to70015);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to70021 = (function sablono$core$mail_to70021(var_args){
var args__19546__auto__ = [];
var len__19539__auto___70028 = arguments.length;
var i__19540__auto___70029 = (0);
while(true){
if((i__19540__auto___70029 < len__19539__auto___70028)){
args__19546__auto__.push((arguments[i__19540__auto___70029]));

var G__70030 = (i__19540__auto___70029 + (1));
i__19540__auto___70029 = G__70030;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to70021.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.mail_to70021.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__70024){
var vec__70025 = p__70024;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70025,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18464__auto__ = content;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to70021.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to70021.cljs$lang$applyTo = (function (seq70022){
var G__70023 = cljs.core.first(seq70022);
var seq70022__$1 = cljs.core.next(seq70022);
return sablono.core.mail_to70021.cljs$core$IFn$_invoke$arity$variadic(G__70023,seq70022__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to70021);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list70031 = (function sablono$core$unordered_list70031(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__19244__auto__ = (function sablono$core$unordered_list70031_$_iter__70038(s__70039){
return (new cljs.core.LazySeq(null,(function (){
var s__70039__$1 = s__70039;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__70039__$1);
if(temp__4657__auto__){
var s__70039__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70039__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__70039__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__70041 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__70040 = (0);
while(true){
if((i__70040 < size__19243__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__70040);
cljs.core.chunk_append(b__70041,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__70044 = (i__70040 + (1));
i__70040 = G__70044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70041),sablono$core$unordered_list70031_$_iter__70038(cljs.core.chunk_rest(s__70039__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70041),null);
}
} else {
var x = cljs.core.first(s__70039__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list70031_$_iter__70038(cljs.core.rest(s__70039__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list70031);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list70045 = (function sablono$core$ordered_list70045(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__19244__auto__ = (function sablono$core$ordered_list70045_$_iter__70052(s__70053){
return (new cljs.core.LazySeq(null,(function (){
var s__70053__$1 = s__70053;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__70053__$1);
if(temp__4657__auto__){
var s__70053__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70053__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__70053__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__70055 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__70054 = (0);
while(true){
if((i__70054 < size__19243__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__70054);
cljs.core.chunk_append(b__70055,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__70058 = (i__70054 + (1));
i__70054 = G__70058;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70055),sablono$core$ordered_list70045_$_iter__70052(cljs.core.chunk_rest(s__70053__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70055),null);
}
} else {
var x = cljs.core.first(s__70053__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list70045_$_iter__70052(cljs.core.rest(s__70053__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list70045);
/**
 * Create an image element.
 */
sablono.core.image70059 = (function sablono$core$image70059(var_args){
var args70060 = [];
var len__19539__auto___70063 = arguments.length;
var i__19540__auto___70064 = (0);
while(true){
if((i__19540__auto___70064 < len__19539__auto___70063)){
args70060.push((arguments[i__19540__auto___70064]));

var G__70065 = (i__19540__auto___70064 + (1));
i__19540__auto___70064 = G__70065;
continue;
} else {
}
break;
}

var G__70062 = args70060.length;
switch (G__70062) {
case 1:
return sablono.core.image70059.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image70059.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70060.length)].join('')));

}
});

sablono.core.image70059.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image70059.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image70059.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image70059);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__70067_SHARP_,p2__70068_SHARP_){
return [cljs.core.str(p1__70067_SHARP_),cljs.core.str("["),cljs.core.str(p2__70068_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__70069_SHARP_,p2__70070_SHARP_){
return [cljs.core.str(p1__70069_SHARP_),cljs.core.str("-"),cljs.core.str(p2__70070_SHARP_)].join('');
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
sablono.core.color_field70071 = (function sablono$core$color_field70071(var_args){
var args70072 = [];
var len__19539__auto___70139 = arguments.length;
var i__19540__auto___70140 = (0);
while(true){
if((i__19540__auto___70140 < len__19539__auto___70139)){
args70072.push((arguments[i__19540__auto___70140]));

var G__70141 = (i__19540__auto___70140 + (1));
i__19540__auto___70140 = G__70141;
continue;
} else {
}
break;
}

var G__70074 = args70072.length;
switch (G__70074) {
case 1:
return sablono.core.color_field70071.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field70071.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70072.length)].join('')));

}
});

sablono.core.color_field70071.cljs$core$IFn$_invoke$arity$1 = (function (name__22089__auto__){
return sablono.core.color_field70071.cljs$core$IFn$_invoke$arity$2(name__22089__auto__,null);
});

sablono.core.color_field70071.cljs$core$IFn$_invoke$arity$2 = (function (name__22089__auto__,value__22090__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__22089__auto__,value__22090__auto__);
});

sablono.core.color_field70071.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field70071);

/**
 * Creates a date input field.
 */
sablono.core.date_field70075 = (function sablono$core$date_field70075(var_args){
var args70076 = [];
var len__19539__auto___70143 = arguments.length;
var i__19540__auto___70144 = (0);
while(true){
if((i__19540__auto___70144 < len__19539__auto___70143)){
args70076.push((arguments[i__19540__auto___70144]));

var G__70145 = (i__19540__auto___70144 + (1));
i__19540__auto___70144 = G__70145;
continue;
} else {
}
break;
}

var G__70078 = args70076.length;
switch (G__70078) {
case 1:
return sablono.core.date_field70075.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field70075.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70076.length)].join('')));

}
});

sablono.core.date_field70075.cljs$core$IFn$_invoke$arity$1 = (function (name__22089__auto__){
return sablono.core.date_field70075.cljs$core$IFn$_invoke$arity$2(name__22089__auto__,null);
});

sablono.core.date_field70075.cljs$core$IFn$_invoke$arity$2 = (function (name__22089__auto__,value__22090__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__22089__auto__,value__22090__auto__);
});

sablono.core.date_field70075.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field70075);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field70079 = (function sablono$core$datetime_field70079(var_args){
var args70080 = [];
var len__19539__auto___70147 = arguments.length;
var i__19540__auto___70148 = (0);
while(true){
if((i__19540__auto___70148 < len__19539__auto___70147)){
args70080.push((arguments[i__19540__auto___70148]));

var G__70149 = (i__19540__auto___70148 + (1));
i__19540__auto___70148 = G__70149;
continue;
} else {
}
break;
}

var G__70082 = args70080.length;
switch (G__70082) {
case 1:
return sablono.core.datetime_field70079.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field70079.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70080.length)].join('')));

}
});

sablono.core.datetime_field70079.cljs$core$IFn$_invoke$arity$1 = (function (name__22089__auto__){
return sablono.core.datetime_field70079.cljs$core$IFn$_invoke$arity$2(name__22089__auto__,null);
});

sablono.core.datetime_field70079.cljs$core$IFn$_invoke$arity$2 = (function (name__22089__auto__,value__22090__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__22089__auto__,value__22090__auto__);
});

sablono.core.datetime_field70079.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field70079);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field70083 = (function sablono$core$datetime_local_field70083(var_args){
var args70084 = [];
var len__19539__auto___70151 = arguments.length;
var i__19540__auto___70152 = (0);
while(true){
if((i__19540__auto___70152 < len__19539__auto___70151)){
args70084.push((arguments[i__19540__auto___70152]));

var G__70153 = (i__19540__auto___70152 + (1));
i__19540__auto___70152 = G__70153;
continue;
} else {
}
break;
}

var G__70086 = args70084.length;
switch (G__70086) {
case 1:
return sablono.core.datetime_local_field70083.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field70083.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70084.length)].join('')));

}
});

sablono.core.datetime_local_field70083.cljs$core$IFn$_invoke$arity$1 = (function (name__22089__auto__){
return sablono.core.datetime_local_field70083.cljs$core$IFn$_invoke$arity$2(name__22089__auto__,null);
});

sablono.core.datetime_local_field70083.cljs$core$IFn$_invoke$arity$2 = (function (name__22089__auto__,value__22090__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__22089__auto__,value__22090__auto__);
});

sablono.core.datetime_local_field70083.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field70083);

/**
 * Creates a email input field.
 */
sablono.core.email_field70087 = (function sablono$core$email_field70087(var_args){
var args70088 = [];
var len__19539__auto___70155 = arguments.length;
var i__19540__auto___70156 = (0);
while(true){
if((i__19540__auto___70156 < len__19539__auto___70155)){
args70088.push((arguments[i__19540__auto___70156]));

var G__70157 = (i__19540__auto___70156 + (1));
i__19540__auto___70156 = G__70157;
continue;
} else {
}
break;
}

var G__70090 = args70088.length;
switch (G__70090) {
case 1:
return sablono.core.email_field70087.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field70087.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70088.length)].join('')));

}
});

sablono.core.email_field70087.cljs$core$IFn$_invoke$arity$1 = (function (name__22089__auto__){
return sablono.core.email_field70087.cljs$core$IFn$_invoke$arity$2(name__22089__auto__,null);
});

sablono.core.email_field70087.cljs$core$IFn$_invoke$arity$2 = (function (name__22089__auto__,value__22090__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__22089__auto__,value__22090__auto__);
});

sablono.core.email_field70087.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field70087);

/**
 * Creates a file input field.
 */
sablono.core.file_field70091 = (function sablono$core$file_field70091(var_args){
var args70092 = [];
var len__19539__auto___70159 = arguments.length;
var i__19540__auto___70160 = (0);
while(true){
if((i__19540__auto___70160 < len__19539__auto___70159)){
args70092.push((arguments[i__19540__auto___70160]));

var G__70161 = (i__19540__auto___70160 + (1));
i__19540__auto___70160 = G__70161;
continue;
} else {
}
break;
}

var G__70094 = args70092.length;
switch (G__70094) {
case 1:
return sablono.core.file_field70091.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field70091.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70092.length)].join('')));

}
});

sablono.core.file_field70091.cljs$core$IFn$_invoke$arity$1 = (function (name__22089__auto__){
return sablono.core.file_field70091.cljs$core$IFn$_invoke$arity$2(name__22089__auto__,null);
});

sablono.core.file_field70091.cljs$core$IFn$_invoke$arity$2 = (function (name__22089__auto__,value__22090__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__22089__auto__,value__22090__auto__);
});

sablono.core.file_field70091.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field70091);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field70095 = (function sablono$core$hidden_field70095(var_args){
var args70096 = [];
var len__19539__auto___70163 = arguments.length;
var i__19540__auto___70164 = (0);
while(true){
if((i__19540__auto___70164 < len__19539__auto___70163)){
args70096.push((arguments[i__19540__auto___70164]));

var G__70165 = (i__19540__auto___70164 + (1));
i__19540__auto___70164 = G__70165;
continue;
} else {
}
break;
}

var G__70098 = args70096.length;
switch (G__70098) {
case 1:
return sablono.core.hidden_field70095.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field70095.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70096.length)].join('')));

}
});

sablono.core.hidden_field70095.cljs$core$IFn$_invoke$arity$1 = (function (name__22089__auto__){
return sablono.core.hidden_field70095.cljs$core$IFn$_invoke$arity$2(name__22089__auto__,null);
});

sablono.core.hidden_field70095.cljs$core$IFn$_invoke$arity$2 = (function (name__22089__auto__,value__22090__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__22089__auto__,value__22090__auto__);
});

sablono.core.hidden_field70095.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field70095);

/**
 * Creates a month input field.
 */
sablono.core.month_field70099 = (function sablono$core$month_field70099(var_args){
var args70100 = [];
var len__19539__auto___70167 = arguments.length;
var i__19540__auto___70168 = (0);
while(true){
if((i__19540__auto___70168 < len__19539__auto___70167)){
args70100.push((arguments[i__19540__auto___70168]));

var G__70169 = (i__19540__auto___70168 + (1));
i__19540__auto___70168 = G__70169;
continue;
} else {
}
break;
}

var G__70102 = args70100.length;
switch (G__70102) {
case 1:
return sablono.core.month_field70099.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field70099.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70100.length)].join('')));

}
});

sablono.core.month_field70099.cljs$core$IFn$_invoke$arity$1 = (function (name__22089__auto__){
return sablono.core.month_field70099.cljs$core$IFn$_invoke$arity$2(name__22089__auto__,null);
});

sablono.core.month_field70099.cljs$core$IFn$_invoke$arity$2 = (function (name__22089__auto__,value__22090__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__22089__auto__,value__22090__auto__);
});

sablono.core.month_field70099.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field70099);

/**
 * Creates a number input field.
 */
sablono.core.number_field70103 = (function sablono$core$number_field70103(var_args){
var args70104 = [];
var len__19539__auto___70171 = arguments.length;
var i__19540__auto___70172 = (0);
while(true){
if((i__19540__auto___70172 < len__19539__auto___70171)){
args70104.push((arguments[i__19540__auto___70172]));

var G__70173 = (i__19540__auto___70172 + (1));
i__19540__auto___70172 = G__70173;
continue;
} else {
}
break;
}

var G__70106 = args70104.length;
switch (G__70106) {
case 1:
return sablono.core.number_field70103.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field70103.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70104.length)].join('')));

}
});

sablono.core.number_field70103.cljs$core$IFn$_invoke$arity$1 = (function (name__22089__auto__){
return sablono.core.number_field70103.cljs$core$IFn$_invoke$arity$2(name__22089__auto__,null);
});

sablono.core.number_field70103.cljs$core$IFn$_invoke$arity$2 = (function (name__22089__auto__,value__22090__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__22089__auto__,value__22090__auto__);
});

sablono.core.number_field70103.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field70103);

/**
 * Creates a password input field.
 */
sablono.core.password_field70107 = (function sablono$core$password_field70107(var_args){
var args70108 = [];
var len__19539__auto___70175 = arguments.length;
var i__19540__auto___70176 = (0);
while(true){
if((i__19540__auto___70176 < len__19539__auto___70175)){
args70108.push((arguments[i__19540__auto___70176]));

var G__70177 = (i__19540__auto___70176 + (1));
i__19540__auto___70176 = G__70177;
continue;
} else {
}
break;
}

var G__70110 = args70108.length;
switch (G__70110) {
case 1:
return sablono.core.password_field70107.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field70107.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70108.length)].join('')));

}
});

sablono.core.password_field70107.cljs$core$IFn$_invoke$arity$1 = (function (name__22089__auto__){
return sablono.core.password_field70107.cljs$core$IFn$_invoke$arity$2(name__22089__auto__,null);
});

sablono.core.password_field70107.cljs$core$IFn$_invoke$arity$2 = (function (name__22089__auto__,value__22090__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__22089__auto__,value__22090__auto__);
});

sablono.core.password_field70107.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field70107);

/**
 * Creates a range input field.
 */
sablono.core.range_field70111 = (function sablono$core$range_field70111(var_args){
var args70112 = [];
var len__19539__auto___70179 = arguments.length;
var i__19540__auto___70180 = (0);
while(true){
if((i__19540__auto___70180 < len__19539__auto___70179)){
args70112.push((arguments[i__19540__auto___70180]));

var G__70181 = (i__19540__auto___70180 + (1));
i__19540__auto___70180 = G__70181;
continue;
} else {
}
break;
}

var G__70114 = args70112.length;
switch (G__70114) {
case 1:
return sablono.core.range_field70111.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field70111.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70112.length)].join('')));

}
});

sablono.core.range_field70111.cljs$core$IFn$_invoke$arity$1 = (function (name__22089__auto__){
return sablono.core.range_field70111.cljs$core$IFn$_invoke$arity$2(name__22089__auto__,null);
});

sablono.core.range_field70111.cljs$core$IFn$_invoke$arity$2 = (function (name__22089__auto__,value__22090__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__22089__auto__,value__22090__auto__);
});

sablono.core.range_field70111.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field70111);

/**
 * Creates a search input field.
 */
sablono.core.search_field70115 = (function sablono$core$search_field70115(var_args){
var args70116 = [];
var len__19539__auto___70183 = arguments.length;
var i__19540__auto___70184 = (0);
while(true){
if((i__19540__auto___70184 < len__19539__auto___70183)){
args70116.push((arguments[i__19540__auto___70184]));

var G__70185 = (i__19540__auto___70184 + (1));
i__19540__auto___70184 = G__70185;
continue;
} else {
}
break;
}

var G__70118 = args70116.length;
switch (G__70118) {
case 1:
return sablono.core.search_field70115.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field70115.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70116.length)].join('')));

}
});

sablono.core.search_field70115.cljs$core$IFn$_invoke$arity$1 = (function (name__22089__auto__){
return sablono.core.search_field70115.cljs$core$IFn$_invoke$arity$2(name__22089__auto__,null);
});

sablono.core.search_field70115.cljs$core$IFn$_invoke$arity$2 = (function (name__22089__auto__,value__22090__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__22089__auto__,value__22090__auto__);
});

sablono.core.search_field70115.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field70115);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field70119 = (function sablono$core$tel_field70119(var_args){
var args70120 = [];
var len__19539__auto___70187 = arguments.length;
var i__19540__auto___70188 = (0);
while(true){
if((i__19540__auto___70188 < len__19539__auto___70187)){
args70120.push((arguments[i__19540__auto___70188]));

var G__70189 = (i__19540__auto___70188 + (1));
i__19540__auto___70188 = G__70189;
continue;
} else {
}
break;
}

var G__70122 = args70120.length;
switch (G__70122) {
case 1:
return sablono.core.tel_field70119.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field70119.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70120.length)].join('')));

}
});

sablono.core.tel_field70119.cljs$core$IFn$_invoke$arity$1 = (function (name__22089__auto__){
return sablono.core.tel_field70119.cljs$core$IFn$_invoke$arity$2(name__22089__auto__,null);
});

sablono.core.tel_field70119.cljs$core$IFn$_invoke$arity$2 = (function (name__22089__auto__,value__22090__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__22089__auto__,value__22090__auto__);
});

sablono.core.tel_field70119.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field70119);

/**
 * Creates a text input field.
 */
sablono.core.text_field70123 = (function sablono$core$text_field70123(var_args){
var args70124 = [];
var len__19539__auto___70191 = arguments.length;
var i__19540__auto___70192 = (0);
while(true){
if((i__19540__auto___70192 < len__19539__auto___70191)){
args70124.push((arguments[i__19540__auto___70192]));

var G__70193 = (i__19540__auto___70192 + (1));
i__19540__auto___70192 = G__70193;
continue;
} else {
}
break;
}

var G__70126 = args70124.length;
switch (G__70126) {
case 1:
return sablono.core.text_field70123.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field70123.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70124.length)].join('')));

}
});

sablono.core.text_field70123.cljs$core$IFn$_invoke$arity$1 = (function (name__22089__auto__){
return sablono.core.text_field70123.cljs$core$IFn$_invoke$arity$2(name__22089__auto__,null);
});

sablono.core.text_field70123.cljs$core$IFn$_invoke$arity$2 = (function (name__22089__auto__,value__22090__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__22089__auto__,value__22090__auto__);
});

sablono.core.text_field70123.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field70123);

/**
 * Creates a time input field.
 */
sablono.core.time_field70127 = (function sablono$core$time_field70127(var_args){
var args70128 = [];
var len__19539__auto___70195 = arguments.length;
var i__19540__auto___70196 = (0);
while(true){
if((i__19540__auto___70196 < len__19539__auto___70195)){
args70128.push((arguments[i__19540__auto___70196]));

var G__70197 = (i__19540__auto___70196 + (1));
i__19540__auto___70196 = G__70197;
continue;
} else {
}
break;
}

var G__70130 = args70128.length;
switch (G__70130) {
case 1:
return sablono.core.time_field70127.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field70127.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70128.length)].join('')));

}
});

sablono.core.time_field70127.cljs$core$IFn$_invoke$arity$1 = (function (name__22089__auto__){
return sablono.core.time_field70127.cljs$core$IFn$_invoke$arity$2(name__22089__auto__,null);
});

sablono.core.time_field70127.cljs$core$IFn$_invoke$arity$2 = (function (name__22089__auto__,value__22090__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__22089__auto__,value__22090__auto__);
});

sablono.core.time_field70127.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field70127);

/**
 * Creates a url input field.
 */
sablono.core.url_field70131 = (function sablono$core$url_field70131(var_args){
var args70132 = [];
var len__19539__auto___70199 = arguments.length;
var i__19540__auto___70200 = (0);
while(true){
if((i__19540__auto___70200 < len__19539__auto___70199)){
args70132.push((arguments[i__19540__auto___70200]));

var G__70201 = (i__19540__auto___70200 + (1));
i__19540__auto___70200 = G__70201;
continue;
} else {
}
break;
}

var G__70134 = args70132.length;
switch (G__70134) {
case 1:
return sablono.core.url_field70131.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field70131.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70132.length)].join('')));

}
});

sablono.core.url_field70131.cljs$core$IFn$_invoke$arity$1 = (function (name__22089__auto__){
return sablono.core.url_field70131.cljs$core$IFn$_invoke$arity$2(name__22089__auto__,null);
});

sablono.core.url_field70131.cljs$core$IFn$_invoke$arity$2 = (function (name__22089__auto__,value__22090__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__22089__auto__,value__22090__auto__);
});

sablono.core.url_field70131.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field70131);

/**
 * Creates a week input field.
 */
sablono.core.week_field70135 = (function sablono$core$week_field70135(var_args){
var args70136 = [];
var len__19539__auto___70203 = arguments.length;
var i__19540__auto___70204 = (0);
while(true){
if((i__19540__auto___70204 < len__19539__auto___70203)){
args70136.push((arguments[i__19540__auto___70204]));

var G__70205 = (i__19540__auto___70204 + (1));
i__19540__auto___70204 = G__70205;
continue;
} else {
}
break;
}

var G__70138 = args70136.length;
switch (G__70138) {
case 1:
return sablono.core.week_field70135.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field70135.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70136.length)].join('')));

}
});

sablono.core.week_field70135.cljs$core$IFn$_invoke$arity$1 = (function (name__22089__auto__){
return sablono.core.week_field70135.cljs$core$IFn$_invoke$arity$2(name__22089__auto__,null);
});

sablono.core.week_field70135.cljs$core$IFn$_invoke$arity$2 = (function (name__22089__auto__,value__22090__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__22089__auto__,value__22090__auto__);
});

sablono.core.week_field70135.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field70135);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box70207 = (function sablono$core$check_box70207(var_args){
var args70208 = [];
var len__19539__auto___70211 = arguments.length;
var i__19540__auto___70212 = (0);
while(true){
if((i__19540__auto___70212 < len__19539__auto___70211)){
args70208.push((arguments[i__19540__auto___70212]));

var G__70213 = (i__19540__auto___70212 + (1));
i__19540__auto___70212 = G__70213;
continue;
} else {
}
break;
}

var G__70210 = args70208.length;
switch (G__70210) {
case 1:
return sablono.core.check_box70207.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box70207.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box70207.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70208.length)].join('')));

}
});

sablono.core.check_box70207.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box70207.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box70207.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box70207.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box70207.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box70207.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box70207);
/**
 * Creates a radio button.
 */
sablono.core.radio_button70215 = (function sablono$core$radio_button70215(var_args){
var args70216 = [];
var len__19539__auto___70219 = arguments.length;
var i__19540__auto___70220 = (0);
while(true){
if((i__19540__auto___70220 < len__19539__auto___70219)){
args70216.push((arguments[i__19540__auto___70220]));

var G__70221 = (i__19540__auto___70220 + (1));
i__19540__auto___70220 = G__70221;
continue;
} else {
}
break;
}

var G__70218 = args70216.length;
switch (G__70218) {
case 1:
return sablono.core.radio_button70215.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button70215.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button70215.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70216.length)].join('')));

}
});

sablono.core.radio_button70215.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button70215.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button70215.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button70215.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button70215.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button70215.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button70215);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__70224 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__70224);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options70225 = (function sablono$core$select_options70225(coll){
var iter__19244__auto__ = (function sablono$core$select_options70225_$_iter__70244(s__70245){
return (new cljs.core.LazySeq(null,(function (){
var s__70245__$1 = s__70245;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__70245__$1);
if(temp__4657__auto__){
var s__70245__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70245__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__70245__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__70247 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__70246 = (0);
while(true){
if((i__70246 < size__19243__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__70246);
cljs.core.chunk_append(b__70247,((cljs.core.sequential_QMARK_(x))?(function (){var vec__70256 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70256,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70256,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70256,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options70225(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__70262 = (i__70246 + (1));
i__70246 = G__70262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70247),sablono$core$select_options70225_$_iter__70244(cljs.core.chunk_rest(s__70245__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70247),null);
}
} else {
var x = cljs.core.first(s__70245__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__70259 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70259,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70259,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70259,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options70225(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options70225_$_iter__70244(cljs.core.rest(s__70245__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options70225);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down70263 = (function sablono$core$drop_down70263(var_args){
var args70264 = [];
var len__19539__auto___70267 = arguments.length;
var i__19540__auto___70268 = (0);
while(true){
if((i__19540__auto___70268 < len__19539__auto___70267)){
args70264.push((arguments[i__19540__auto___70268]));

var G__70269 = (i__19540__auto___70268 + (1));
i__19540__auto___70268 = G__70269;
continue;
} else {
}
break;
}

var G__70266 = args70264.length;
switch (G__70266) {
case 2:
return sablono.core.drop_down70263.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down70263.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70264.length)].join('')));

}
});

sablono.core.drop_down70263.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down70263.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down70263.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down70263.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down70263);
/**
 * Creates a text area element.
 */
sablono.core.text_area70271 = (function sablono$core$text_area70271(var_args){
var args70272 = [];
var len__19539__auto___70275 = arguments.length;
var i__19540__auto___70276 = (0);
while(true){
if((i__19540__auto___70276 < len__19539__auto___70275)){
args70272.push((arguments[i__19540__auto___70276]));

var G__70277 = (i__19540__auto___70276 + (1));
i__19540__auto___70276 = G__70277;
continue;
} else {
}
break;
}

var G__70274 = args70272.length;
switch (G__70274) {
case 1:
return sablono.core.text_area70271.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area70271.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70272.length)].join('')));

}
});

sablono.core.text_area70271.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area70271.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area70271.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area70271.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area70271);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label70279 = (function sablono$core$label70279(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label70279);
/**
 * Creates a submit button.
 */
sablono.core.submit_button70280 = (function sablono$core$submit_button70280(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button70280);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button70281 = (function sablono$core$reset_button70281(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button70281);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to70282 = (function sablono$core$form_to70282(var_args){
var args__19546__auto__ = [];
var len__19539__auto___70292 = arguments.length;
var i__19540__auto___70293 = (0);
while(true){
if((i__19540__auto___70293 < len__19539__auto___70292)){
args__19546__auto__.push((arguments[i__19540__auto___70293]));

var G__70294 = (i__19540__auto___70293 + (1));
i__19540__auto___70293 = G__70294;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to70282.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.form_to70282.cljs$core$IFn$_invoke$arity$variadic = (function (p__70285,body){
var vec__70286 = p__70285;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70286,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70286,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__70289 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__70290 = "_method";
var G__70291 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__70289,G__70290,G__70291) : sablono.core.hidden_field.call(null,G__70289,G__70290,G__70291));
})()], null)),body));
});

sablono.core.form_to70282.cljs$lang$maxFixedArity = (1);

sablono.core.form_to70282.cljs$lang$applyTo = (function (seq70283){
var G__70284 = cljs.core.first(seq70283);
var seq70283__$1 = cljs.core.next(seq70283);
return sablono.core.form_to70282.cljs$core$IFn$_invoke$arity$variadic(G__70284,seq70283__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to70282);
