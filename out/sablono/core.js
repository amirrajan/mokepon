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
var G__27974__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__27971 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__27972 = cljs.core.seq(vec__27971);
var first__27973 = cljs.core.first(seq__27972);
var seq__27972__$1 = cljs.core.next(seq__27972);
var tag = first__27973;
var body = seq__27972__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__27974 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27975__i = 0, G__27975__a = new Array(arguments.length -  0);
while (G__27975__i < G__27975__a.length) {G__27975__a[G__27975__i] = arguments[G__27975__i + 0]; ++G__27975__i;}
  args = new cljs.core.IndexedSeq(G__27975__a,0);
} 
return G__27974__delegate.call(this,args);};
G__27974.cljs$lang$maxFixedArity = 0;
G__27974.cljs$lang$applyTo = (function (arglist__27976){
var args = cljs.core.seq(arglist__27976);
return G__27974__delegate(args);
});
G__27974.cljs$core$IFn$_invoke$arity$variadic = G__27974__delegate;
return G__27974;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19508__auto__ = (function sablono$core$update_arglists_$_iter__27983(s__27984){
return (new cljs.core.LazySeq(null,(function (){
var s__27984__$1 = s__27984;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__27984__$1);
if(temp__4657__auto__){
var s__27984__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27984__$2)){
var c__19506__auto__ = cljs.core.chunk_first(s__27984__$2);
var size__19507__auto__ = cljs.core.count(c__19506__auto__);
var b__27986 = cljs.core.chunk_buffer(size__19507__auto__);
if((function (){var i__27985 = (0);
while(true){
if((i__27985 < size__19507__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19506__auto__,i__27985);
cljs.core.chunk_append(b__27986,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__27989 = (i__27985 + (1));
i__27985 = G__27989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27986),sablono$core$update_arglists_$_iter__27983(cljs.core.chunk_rest(s__27984__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27986),null);
}
} else {
var args = cljs.core.first(s__27984__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__27983(cljs.core.rest(s__27984__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19508__auto__(arglists);
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
var args__19810__auto__ = [];
var len__19803__auto___27997 = arguments.length;
var i__19804__auto___27998 = (0);
while(true){
if((i__19804__auto___27998 < len__19803__auto___27997)){
args__19810__auto__.push((arguments[i__19804__auto___27998]));

var G__27999 = (i__19804__auto___27998 + (1));
i__19804__auto___27998 = G__27999;
continue;
} else {
}
break;
}

var argseq__19811__auto__ = ((((0) < args__19810__auto__.length))?(new cljs.core.IndexedSeq(args__19810__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19811__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19508__auto__ = (function sablono$core$iter__27991(s__27992){
return (new cljs.core.LazySeq(null,(function (){
var s__27992__$1 = s__27992;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__27992__$1);
if(temp__4657__auto__){
var s__27992__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27992__$2)){
var c__19506__auto__ = cljs.core.chunk_first(s__27992__$2);
var size__19507__auto__ = cljs.core.count(c__19506__auto__);
var b__27994 = cljs.core.chunk_buffer(size__19507__auto__);
if((function (){var i__27993 = (0);
while(true){
if((i__27993 < size__19507__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19506__auto__,i__27993);
cljs.core.chunk_append(b__27994,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__28000 = (i__27993 + (1));
i__27993 = G__28000;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27994),sablono$core$iter__27991(cljs.core.chunk_rest(s__27992__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27994),null);
}
} else {
var style = cljs.core.first(s__27992__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__27991(cljs.core.rest(s__27992__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19508__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq27990){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27990));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__28005 = goog.dom.getDocument().body;
var G__28006 = (function (){var G__28007 = "script";
var G__28008 = {"src": src};
return goog.dom.createDom(G__28007,G__28008);
})();
return goog.dom.appendChild(G__28005,G__28006);
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
sablono.core.link_to28009 = (function sablono$core$link_to28009(var_args){
var args__19810__auto__ = [];
var len__19803__auto___28012 = arguments.length;
var i__19804__auto___28013 = (0);
while(true){
if((i__19804__auto___28013 < len__19803__auto___28012)){
args__19810__auto__.push((arguments[i__19804__auto___28013]));

var G__28014 = (i__19804__auto___28013 + (1));
i__19804__auto___28013 = G__28014;
continue;
} else {
}
break;
}

var argseq__19811__auto__ = ((((1) < args__19810__auto__.length))?(new cljs.core.IndexedSeq(args__19810__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to28009.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19811__auto__);
});

sablono.core.link_to28009.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to28009.cljs$lang$maxFixedArity = (1);

sablono.core.link_to28009.cljs$lang$applyTo = (function (seq28010){
var G__28011 = cljs.core.first(seq28010);
var seq28010__$1 = cljs.core.next(seq28010);
return sablono.core.link_to28009.cljs$core$IFn$_invoke$arity$variadic(G__28011,seq28010__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to28009);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to28015 = (function sablono$core$mail_to28015(var_args){
var args__19810__auto__ = [];
var len__19803__auto___28022 = arguments.length;
var i__19804__auto___28023 = (0);
while(true){
if((i__19804__auto___28023 < len__19803__auto___28022)){
args__19810__auto__.push((arguments[i__19804__auto___28023]));

var G__28024 = (i__19804__auto___28023 + (1));
i__19804__auto___28023 = G__28024;
continue;
} else {
}
break;
}

var argseq__19811__auto__ = ((((1) < args__19810__auto__.length))?(new cljs.core.IndexedSeq(args__19810__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to28015.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19811__auto__);
});

sablono.core.mail_to28015.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__28018){
var vec__28019 = p__28018;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28019,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18728__auto__ = content;
if(cljs.core.truth_(or__18728__auto__)){
return or__18728__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to28015.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to28015.cljs$lang$applyTo = (function (seq28016){
var G__28017 = cljs.core.first(seq28016);
var seq28016__$1 = cljs.core.next(seq28016);
return sablono.core.mail_to28015.cljs$core$IFn$_invoke$arity$variadic(G__28017,seq28016__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to28015);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list28025 = (function sablono$core$unordered_list28025(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__19508__auto__ = (function sablono$core$unordered_list28025_$_iter__28032(s__28033){
return (new cljs.core.LazySeq(null,(function (){
var s__28033__$1 = s__28033;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__28033__$1);
if(temp__4657__auto__){
var s__28033__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28033__$2)){
var c__19506__auto__ = cljs.core.chunk_first(s__28033__$2);
var size__19507__auto__ = cljs.core.count(c__19506__auto__);
var b__28035 = cljs.core.chunk_buffer(size__19507__auto__);
if((function (){var i__28034 = (0);
while(true){
if((i__28034 < size__19507__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19506__auto__,i__28034);
cljs.core.chunk_append(b__28035,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__28038 = (i__28034 + (1));
i__28034 = G__28038;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28035),sablono$core$unordered_list28025_$_iter__28032(cljs.core.chunk_rest(s__28033__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28035),null);
}
} else {
var x = cljs.core.first(s__28033__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list28025_$_iter__28032(cljs.core.rest(s__28033__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19508__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list28025);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list28039 = (function sablono$core$ordered_list28039(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__19508__auto__ = (function sablono$core$ordered_list28039_$_iter__28046(s__28047){
return (new cljs.core.LazySeq(null,(function (){
var s__28047__$1 = s__28047;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__28047__$1);
if(temp__4657__auto__){
var s__28047__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28047__$2)){
var c__19506__auto__ = cljs.core.chunk_first(s__28047__$2);
var size__19507__auto__ = cljs.core.count(c__19506__auto__);
var b__28049 = cljs.core.chunk_buffer(size__19507__auto__);
if((function (){var i__28048 = (0);
while(true){
if((i__28048 < size__19507__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19506__auto__,i__28048);
cljs.core.chunk_append(b__28049,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__28052 = (i__28048 + (1));
i__28048 = G__28052;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28049),sablono$core$ordered_list28039_$_iter__28046(cljs.core.chunk_rest(s__28047__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28049),null);
}
} else {
var x = cljs.core.first(s__28047__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list28039_$_iter__28046(cljs.core.rest(s__28047__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19508__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list28039);
/**
 * Create an image element.
 */
sablono.core.image28053 = (function sablono$core$image28053(var_args){
var args28054 = [];
var len__19803__auto___28057 = arguments.length;
var i__19804__auto___28058 = (0);
while(true){
if((i__19804__auto___28058 < len__19803__auto___28057)){
args28054.push((arguments[i__19804__auto___28058]));

var G__28059 = (i__19804__auto___28058 + (1));
i__19804__auto___28058 = G__28059;
continue;
} else {
}
break;
}

var G__28056 = args28054.length;
switch (G__28056) {
case 1:
return sablono.core.image28053.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image28053.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28054.length)].join('')));

}
});

sablono.core.image28053.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image28053.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image28053.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image28053);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__28061_SHARP_,p2__28062_SHARP_){
return [cljs.core.str(p1__28061_SHARP_),cljs.core.str("["),cljs.core.str(p2__28062_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__28063_SHARP_,p2__28064_SHARP_){
return [cljs.core.str(p1__28063_SHARP_),cljs.core.str("-"),cljs.core.str(p2__28064_SHARP_)].join('');
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
sablono.core.color_field28065 = (function sablono$core$color_field28065(var_args){
var args28066 = [];
var len__19803__auto___28133 = arguments.length;
var i__19804__auto___28134 = (0);
while(true){
if((i__19804__auto___28134 < len__19803__auto___28133)){
args28066.push((arguments[i__19804__auto___28134]));

var G__28135 = (i__19804__auto___28134 + (1));
i__19804__auto___28134 = G__28135;
continue;
} else {
}
break;
}

var G__28068 = args28066.length;
switch (G__28068) {
case 1:
return sablono.core.color_field28065.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field28065.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28066.length)].join('')));

}
});

sablono.core.color_field28065.cljs$core$IFn$_invoke$arity$1 = (function (name__20454__auto__){
return sablono.core.color_field28065.cljs$core$IFn$_invoke$arity$2(name__20454__auto__,null);
});

sablono.core.color_field28065.cljs$core$IFn$_invoke$arity$2 = (function (name__20454__auto__,value__20455__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__20454__auto__,value__20455__auto__);
});

sablono.core.color_field28065.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field28065);

/**
 * Creates a date input field.
 */
sablono.core.date_field28069 = (function sablono$core$date_field28069(var_args){
var args28070 = [];
var len__19803__auto___28137 = arguments.length;
var i__19804__auto___28138 = (0);
while(true){
if((i__19804__auto___28138 < len__19803__auto___28137)){
args28070.push((arguments[i__19804__auto___28138]));

var G__28139 = (i__19804__auto___28138 + (1));
i__19804__auto___28138 = G__28139;
continue;
} else {
}
break;
}

var G__28072 = args28070.length;
switch (G__28072) {
case 1:
return sablono.core.date_field28069.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field28069.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28070.length)].join('')));

}
});

sablono.core.date_field28069.cljs$core$IFn$_invoke$arity$1 = (function (name__20454__auto__){
return sablono.core.date_field28069.cljs$core$IFn$_invoke$arity$2(name__20454__auto__,null);
});

sablono.core.date_field28069.cljs$core$IFn$_invoke$arity$2 = (function (name__20454__auto__,value__20455__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__20454__auto__,value__20455__auto__);
});

sablono.core.date_field28069.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field28069);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field28073 = (function sablono$core$datetime_field28073(var_args){
var args28074 = [];
var len__19803__auto___28141 = arguments.length;
var i__19804__auto___28142 = (0);
while(true){
if((i__19804__auto___28142 < len__19803__auto___28141)){
args28074.push((arguments[i__19804__auto___28142]));

var G__28143 = (i__19804__auto___28142 + (1));
i__19804__auto___28142 = G__28143;
continue;
} else {
}
break;
}

var G__28076 = args28074.length;
switch (G__28076) {
case 1:
return sablono.core.datetime_field28073.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field28073.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28074.length)].join('')));

}
});

sablono.core.datetime_field28073.cljs$core$IFn$_invoke$arity$1 = (function (name__20454__auto__){
return sablono.core.datetime_field28073.cljs$core$IFn$_invoke$arity$2(name__20454__auto__,null);
});

sablono.core.datetime_field28073.cljs$core$IFn$_invoke$arity$2 = (function (name__20454__auto__,value__20455__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__20454__auto__,value__20455__auto__);
});

sablono.core.datetime_field28073.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field28073);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field28077 = (function sablono$core$datetime_local_field28077(var_args){
var args28078 = [];
var len__19803__auto___28145 = arguments.length;
var i__19804__auto___28146 = (0);
while(true){
if((i__19804__auto___28146 < len__19803__auto___28145)){
args28078.push((arguments[i__19804__auto___28146]));

var G__28147 = (i__19804__auto___28146 + (1));
i__19804__auto___28146 = G__28147;
continue;
} else {
}
break;
}

var G__28080 = args28078.length;
switch (G__28080) {
case 1:
return sablono.core.datetime_local_field28077.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field28077.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28078.length)].join('')));

}
});

sablono.core.datetime_local_field28077.cljs$core$IFn$_invoke$arity$1 = (function (name__20454__auto__){
return sablono.core.datetime_local_field28077.cljs$core$IFn$_invoke$arity$2(name__20454__auto__,null);
});

sablono.core.datetime_local_field28077.cljs$core$IFn$_invoke$arity$2 = (function (name__20454__auto__,value__20455__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__20454__auto__,value__20455__auto__);
});

sablono.core.datetime_local_field28077.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field28077);

/**
 * Creates a email input field.
 */
sablono.core.email_field28081 = (function sablono$core$email_field28081(var_args){
var args28082 = [];
var len__19803__auto___28149 = arguments.length;
var i__19804__auto___28150 = (0);
while(true){
if((i__19804__auto___28150 < len__19803__auto___28149)){
args28082.push((arguments[i__19804__auto___28150]));

var G__28151 = (i__19804__auto___28150 + (1));
i__19804__auto___28150 = G__28151;
continue;
} else {
}
break;
}

var G__28084 = args28082.length;
switch (G__28084) {
case 1:
return sablono.core.email_field28081.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field28081.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28082.length)].join('')));

}
});

sablono.core.email_field28081.cljs$core$IFn$_invoke$arity$1 = (function (name__20454__auto__){
return sablono.core.email_field28081.cljs$core$IFn$_invoke$arity$2(name__20454__auto__,null);
});

sablono.core.email_field28081.cljs$core$IFn$_invoke$arity$2 = (function (name__20454__auto__,value__20455__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__20454__auto__,value__20455__auto__);
});

sablono.core.email_field28081.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field28081);

/**
 * Creates a file input field.
 */
sablono.core.file_field28085 = (function sablono$core$file_field28085(var_args){
var args28086 = [];
var len__19803__auto___28153 = arguments.length;
var i__19804__auto___28154 = (0);
while(true){
if((i__19804__auto___28154 < len__19803__auto___28153)){
args28086.push((arguments[i__19804__auto___28154]));

var G__28155 = (i__19804__auto___28154 + (1));
i__19804__auto___28154 = G__28155;
continue;
} else {
}
break;
}

var G__28088 = args28086.length;
switch (G__28088) {
case 1:
return sablono.core.file_field28085.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field28085.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28086.length)].join('')));

}
});

sablono.core.file_field28085.cljs$core$IFn$_invoke$arity$1 = (function (name__20454__auto__){
return sablono.core.file_field28085.cljs$core$IFn$_invoke$arity$2(name__20454__auto__,null);
});

sablono.core.file_field28085.cljs$core$IFn$_invoke$arity$2 = (function (name__20454__auto__,value__20455__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__20454__auto__,value__20455__auto__);
});

sablono.core.file_field28085.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field28085);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field28089 = (function sablono$core$hidden_field28089(var_args){
var args28090 = [];
var len__19803__auto___28157 = arguments.length;
var i__19804__auto___28158 = (0);
while(true){
if((i__19804__auto___28158 < len__19803__auto___28157)){
args28090.push((arguments[i__19804__auto___28158]));

var G__28159 = (i__19804__auto___28158 + (1));
i__19804__auto___28158 = G__28159;
continue;
} else {
}
break;
}

var G__28092 = args28090.length;
switch (G__28092) {
case 1:
return sablono.core.hidden_field28089.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field28089.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28090.length)].join('')));

}
});

sablono.core.hidden_field28089.cljs$core$IFn$_invoke$arity$1 = (function (name__20454__auto__){
return sablono.core.hidden_field28089.cljs$core$IFn$_invoke$arity$2(name__20454__auto__,null);
});

sablono.core.hidden_field28089.cljs$core$IFn$_invoke$arity$2 = (function (name__20454__auto__,value__20455__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__20454__auto__,value__20455__auto__);
});

sablono.core.hidden_field28089.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field28089);

/**
 * Creates a month input field.
 */
sablono.core.month_field28093 = (function sablono$core$month_field28093(var_args){
var args28094 = [];
var len__19803__auto___28161 = arguments.length;
var i__19804__auto___28162 = (0);
while(true){
if((i__19804__auto___28162 < len__19803__auto___28161)){
args28094.push((arguments[i__19804__auto___28162]));

var G__28163 = (i__19804__auto___28162 + (1));
i__19804__auto___28162 = G__28163;
continue;
} else {
}
break;
}

var G__28096 = args28094.length;
switch (G__28096) {
case 1:
return sablono.core.month_field28093.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field28093.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28094.length)].join('')));

}
});

sablono.core.month_field28093.cljs$core$IFn$_invoke$arity$1 = (function (name__20454__auto__){
return sablono.core.month_field28093.cljs$core$IFn$_invoke$arity$2(name__20454__auto__,null);
});

sablono.core.month_field28093.cljs$core$IFn$_invoke$arity$2 = (function (name__20454__auto__,value__20455__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__20454__auto__,value__20455__auto__);
});

sablono.core.month_field28093.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field28093);

/**
 * Creates a number input field.
 */
sablono.core.number_field28097 = (function sablono$core$number_field28097(var_args){
var args28098 = [];
var len__19803__auto___28165 = arguments.length;
var i__19804__auto___28166 = (0);
while(true){
if((i__19804__auto___28166 < len__19803__auto___28165)){
args28098.push((arguments[i__19804__auto___28166]));

var G__28167 = (i__19804__auto___28166 + (1));
i__19804__auto___28166 = G__28167;
continue;
} else {
}
break;
}

var G__28100 = args28098.length;
switch (G__28100) {
case 1:
return sablono.core.number_field28097.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field28097.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28098.length)].join('')));

}
});

sablono.core.number_field28097.cljs$core$IFn$_invoke$arity$1 = (function (name__20454__auto__){
return sablono.core.number_field28097.cljs$core$IFn$_invoke$arity$2(name__20454__auto__,null);
});

sablono.core.number_field28097.cljs$core$IFn$_invoke$arity$2 = (function (name__20454__auto__,value__20455__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__20454__auto__,value__20455__auto__);
});

sablono.core.number_field28097.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field28097);

/**
 * Creates a password input field.
 */
sablono.core.password_field28101 = (function sablono$core$password_field28101(var_args){
var args28102 = [];
var len__19803__auto___28169 = arguments.length;
var i__19804__auto___28170 = (0);
while(true){
if((i__19804__auto___28170 < len__19803__auto___28169)){
args28102.push((arguments[i__19804__auto___28170]));

var G__28171 = (i__19804__auto___28170 + (1));
i__19804__auto___28170 = G__28171;
continue;
} else {
}
break;
}

var G__28104 = args28102.length;
switch (G__28104) {
case 1:
return sablono.core.password_field28101.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field28101.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28102.length)].join('')));

}
});

sablono.core.password_field28101.cljs$core$IFn$_invoke$arity$1 = (function (name__20454__auto__){
return sablono.core.password_field28101.cljs$core$IFn$_invoke$arity$2(name__20454__auto__,null);
});

sablono.core.password_field28101.cljs$core$IFn$_invoke$arity$2 = (function (name__20454__auto__,value__20455__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__20454__auto__,value__20455__auto__);
});

sablono.core.password_field28101.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field28101);

/**
 * Creates a range input field.
 */
sablono.core.range_field28105 = (function sablono$core$range_field28105(var_args){
var args28106 = [];
var len__19803__auto___28173 = arguments.length;
var i__19804__auto___28174 = (0);
while(true){
if((i__19804__auto___28174 < len__19803__auto___28173)){
args28106.push((arguments[i__19804__auto___28174]));

var G__28175 = (i__19804__auto___28174 + (1));
i__19804__auto___28174 = G__28175;
continue;
} else {
}
break;
}

var G__28108 = args28106.length;
switch (G__28108) {
case 1:
return sablono.core.range_field28105.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field28105.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28106.length)].join('')));

}
});

sablono.core.range_field28105.cljs$core$IFn$_invoke$arity$1 = (function (name__20454__auto__){
return sablono.core.range_field28105.cljs$core$IFn$_invoke$arity$2(name__20454__auto__,null);
});

sablono.core.range_field28105.cljs$core$IFn$_invoke$arity$2 = (function (name__20454__auto__,value__20455__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__20454__auto__,value__20455__auto__);
});

sablono.core.range_field28105.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field28105);

/**
 * Creates a search input field.
 */
sablono.core.search_field28109 = (function sablono$core$search_field28109(var_args){
var args28110 = [];
var len__19803__auto___28177 = arguments.length;
var i__19804__auto___28178 = (0);
while(true){
if((i__19804__auto___28178 < len__19803__auto___28177)){
args28110.push((arguments[i__19804__auto___28178]));

var G__28179 = (i__19804__auto___28178 + (1));
i__19804__auto___28178 = G__28179;
continue;
} else {
}
break;
}

var G__28112 = args28110.length;
switch (G__28112) {
case 1:
return sablono.core.search_field28109.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field28109.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28110.length)].join('')));

}
});

sablono.core.search_field28109.cljs$core$IFn$_invoke$arity$1 = (function (name__20454__auto__){
return sablono.core.search_field28109.cljs$core$IFn$_invoke$arity$2(name__20454__auto__,null);
});

sablono.core.search_field28109.cljs$core$IFn$_invoke$arity$2 = (function (name__20454__auto__,value__20455__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__20454__auto__,value__20455__auto__);
});

sablono.core.search_field28109.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field28109);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field28113 = (function sablono$core$tel_field28113(var_args){
var args28114 = [];
var len__19803__auto___28181 = arguments.length;
var i__19804__auto___28182 = (0);
while(true){
if((i__19804__auto___28182 < len__19803__auto___28181)){
args28114.push((arguments[i__19804__auto___28182]));

var G__28183 = (i__19804__auto___28182 + (1));
i__19804__auto___28182 = G__28183;
continue;
} else {
}
break;
}

var G__28116 = args28114.length;
switch (G__28116) {
case 1:
return sablono.core.tel_field28113.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field28113.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28114.length)].join('')));

}
});

sablono.core.tel_field28113.cljs$core$IFn$_invoke$arity$1 = (function (name__20454__auto__){
return sablono.core.tel_field28113.cljs$core$IFn$_invoke$arity$2(name__20454__auto__,null);
});

sablono.core.tel_field28113.cljs$core$IFn$_invoke$arity$2 = (function (name__20454__auto__,value__20455__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__20454__auto__,value__20455__auto__);
});

sablono.core.tel_field28113.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field28113);

/**
 * Creates a text input field.
 */
sablono.core.text_field28117 = (function sablono$core$text_field28117(var_args){
var args28118 = [];
var len__19803__auto___28185 = arguments.length;
var i__19804__auto___28186 = (0);
while(true){
if((i__19804__auto___28186 < len__19803__auto___28185)){
args28118.push((arguments[i__19804__auto___28186]));

var G__28187 = (i__19804__auto___28186 + (1));
i__19804__auto___28186 = G__28187;
continue;
} else {
}
break;
}

var G__28120 = args28118.length;
switch (G__28120) {
case 1:
return sablono.core.text_field28117.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field28117.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28118.length)].join('')));

}
});

sablono.core.text_field28117.cljs$core$IFn$_invoke$arity$1 = (function (name__20454__auto__){
return sablono.core.text_field28117.cljs$core$IFn$_invoke$arity$2(name__20454__auto__,null);
});

sablono.core.text_field28117.cljs$core$IFn$_invoke$arity$2 = (function (name__20454__auto__,value__20455__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__20454__auto__,value__20455__auto__);
});

sablono.core.text_field28117.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field28117);

/**
 * Creates a time input field.
 */
sablono.core.time_field28121 = (function sablono$core$time_field28121(var_args){
var args28122 = [];
var len__19803__auto___28189 = arguments.length;
var i__19804__auto___28190 = (0);
while(true){
if((i__19804__auto___28190 < len__19803__auto___28189)){
args28122.push((arguments[i__19804__auto___28190]));

var G__28191 = (i__19804__auto___28190 + (1));
i__19804__auto___28190 = G__28191;
continue;
} else {
}
break;
}

var G__28124 = args28122.length;
switch (G__28124) {
case 1:
return sablono.core.time_field28121.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field28121.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28122.length)].join('')));

}
});

sablono.core.time_field28121.cljs$core$IFn$_invoke$arity$1 = (function (name__20454__auto__){
return sablono.core.time_field28121.cljs$core$IFn$_invoke$arity$2(name__20454__auto__,null);
});

sablono.core.time_field28121.cljs$core$IFn$_invoke$arity$2 = (function (name__20454__auto__,value__20455__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__20454__auto__,value__20455__auto__);
});

sablono.core.time_field28121.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field28121);

/**
 * Creates a url input field.
 */
sablono.core.url_field28125 = (function sablono$core$url_field28125(var_args){
var args28126 = [];
var len__19803__auto___28193 = arguments.length;
var i__19804__auto___28194 = (0);
while(true){
if((i__19804__auto___28194 < len__19803__auto___28193)){
args28126.push((arguments[i__19804__auto___28194]));

var G__28195 = (i__19804__auto___28194 + (1));
i__19804__auto___28194 = G__28195;
continue;
} else {
}
break;
}

var G__28128 = args28126.length;
switch (G__28128) {
case 1:
return sablono.core.url_field28125.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field28125.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28126.length)].join('')));

}
});

sablono.core.url_field28125.cljs$core$IFn$_invoke$arity$1 = (function (name__20454__auto__){
return sablono.core.url_field28125.cljs$core$IFn$_invoke$arity$2(name__20454__auto__,null);
});

sablono.core.url_field28125.cljs$core$IFn$_invoke$arity$2 = (function (name__20454__auto__,value__20455__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__20454__auto__,value__20455__auto__);
});

sablono.core.url_field28125.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field28125);

/**
 * Creates a week input field.
 */
sablono.core.week_field28129 = (function sablono$core$week_field28129(var_args){
var args28130 = [];
var len__19803__auto___28197 = arguments.length;
var i__19804__auto___28198 = (0);
while(true){
if((i__19804__auto___28198 < len__19803__auto___28197)){
args28130.push((arguments[i__19804__auto___28198]));

var G__28199 = (i__19804__auto___28198 + (1));
i__19804__auto___28198 = G__28199;
continue;
} else {
}
break;
}

var G__28132 = args28130.length;
switch (G__28132) {
case 1:
return sablono.core.week_field28129.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field28129.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28130.length)].join('')));

}
});

sablono.core.week_field28129.cljs$core$IFn$_invoke$arity$1 = (function (name__20454__auto__){
return sablono.core.week_field28129.cljs$core$IFn$_invoke$arity$2(name__20454__auto__,null);
});

sablono.core.week_field28129.cljs$core$IFn$_invoke$arity$2 = (function (name__20454__auto__,value__20455__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__20454__auto__,value__20455__auto__);
});

sablono.core.week_field28129.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field28129);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box28201 = (function sablono$core$check_box28201(var_args){
var args28202 = [];
var len__19803__auto___28205 = arguments.length;
var i__19804__auto___28206 = (0);
while(true){
if((i__19804__auto___28206 < len__19803__auto___28205)){
args28202.push((arguments[i__19804__auto___28206]));

var G__28207 = (i__19804__auto___28206 + (1));
i__19804__auto___28206 = G__28207;
continue;
} else {
}
break;
}

var G__28204 = args28202.length;
switch (G__28204) {
case 1:
return sablono.core.check_box28201.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box28201.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box28201.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28202.length)].join('')));

}
});

sablono.core.check_box28201.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box28201.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box28201.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box28201.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box28201.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box28201.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box28201);
/**
 * Creates a radio button.
 */
sablono.core.radio_button28209 = (function sablono$core$radio_button28209(var_args){
var args28210 = [];
var len__19803__auto___28213 = arguments.length;
var i__19804__auto___28214 = (0);
while(true){
if((i__19804__auto___28214 < len__19803__auto___28213)){
args28210.push((arguments[i__19804__auto___28214]));

var G__28215 = (i__19804__auto___28214 + (1));
i__19804__auto___28214 = G__28215;
continue;
} else {
}
break;
}

var G__28212 = args28210.length;
switch (G__28212) {
case 1:
return sablono.core.radio_button28209.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button28209.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button28209.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28210.length)].join('')));

}
});

sablono.core.radio_button28209.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button28209.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button28209.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button28209.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button28209.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button28209.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button28209);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__28218 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__28218);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options28219 = (function sablono$core$select_options28219(coll){
var iter__19508__auto__ = (function sablono$core$select_options28219_$_iter__28238(s__28239){
return (new cljs.core.LazySeq(null,(function (){
var s__28239__$1 = s__28239;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__28239__$1);
if(temp__4657__auto__){
var s__28239__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28239__$2)){
var c__19506__auto__ = cljs.core.chunk_first(s__28239__$2);
var size__19507__auto__ = cljs.core.count(c__19506__auto__);
var b__28241 = cljs.core.chunk_buffer(size__19507__auto__);
if((function (){var i__28240 = (0);
while(true){
if((i__28240 < size__19507__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19506__auto__,i__28240);
cljs.core.chunk_append(b__28241,((cljs.core.sequential_QMARK_(x))?(function (){var vec__28250 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28250,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28250,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28250,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options28219(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__28256 = (i__28240 + (1));
i__28240 = G__28256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28241),sablono$core$select_options28219_$_iter__28238(cljs.core.chunk_rest(s__28239__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28241),null);
}
} else {
var x = cljs.core.first(s__28239__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__28253 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28253,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28253,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28253,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options28219(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options28219_$_iter__28238(cljs.core.rest(s__28239__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19508__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options28219);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down28257 = (function sablono$core$drop_down28257(var_args){
var args28258 = [];
var len__19803__auto___28261 = arguments.length;
var i__19804__auto___28262 = (0);
while(true){
if((i__19804__auto___28262 < len__19803__auto___28261)){
args28258.push((arguments[i__19804__auto___28262]));

var G__28263 = (i__19804__auto___28262 + (1));
i__19804__auto___28262 = G__28263;
continue;
} else {
}
break;
}

var G__28260 = args28258.length;
switch (G__28260) {
case 2:
return sablono.core.drop_down28257.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down28257.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28258.length)].join('')));

}
});

sablono.core.drop_down28257.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down28257.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down28257.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down28257.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down28257);
/**
 * Creates a text area element.
 */
sablono.core.text_area28265 = (function sablono$core$text_area28265(var_args){
var args28266 = [];
var len__19803__auto___28269 = arguments.length;
var i__19804__auto___28270 = (0);
while(true){
if((i__19804__auto___28270 < len__19803__auto___28269)){
args28266.push((arguments[i__19804__auto___28270]));

var G__28271 = (i__19804__auto___28270 + (1));
i__19804__auto___28270 = G__28271;
continue;
} else {
}
break;
}

var G__28268 = args28266.length;
switch (G__28268) {
case 1:
return sablono.core.text_area28265.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area28265.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28266.length)].join('')));

}
});

sablono.core.text_area28265.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area28265.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area28265.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area28265.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area28265);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label28273 = (function sablono$core$label28273(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label28273);
/**
 * Creates a submit button.
 */
sablono.core.submit_button28274 = (function sablono$core$submit_button28274(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button28274);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button28275 = (function sablono$core$reset_button28275(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button28275);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to28276 = (function sablono$core$form_to28276(var_args){
var args__19810__auto__ = [];
var len__19803__auto___28286 = arguments.length;
var i__19804__auto___28287 = (0);
while(true){
if((i__19804__auto___28287 < len__19803__auto___28286)){
args__19810__auto__.push((arguments[i__19804__auto___28287]));

var G__28288 = (i__19804__auto___28287 + (1));
i__19804__auto___28287 = G__28288;
continue;
} else {
}
break;
}

var argseq__19811__auto__ = ((((1) < args__19810__auto__.length))?(new cljs.core.IndexedSeq(args__19810__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to28276.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19811__auto__);
});

sablono.core.form_to28276.cljs$core$IFn$_invoke$arity$variadic = (function (p__28279,body){
var vec__28280 = p__28279;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28280,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28280,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__28283 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__28284 = "_method";
var G__28285 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__28283,G__28284,G__28285) : sablono.core.hidden_field.call(null,G__28283,G__28284,G__28285));
})()], null)),body));
});

sablono.core.form_to28276.cljs$lang$maxFixedArity = (1);

sablono.core.form_to28276.cljs$lang$applyTo = (function (seq28277){
var G__28278 = cljs.core.first(seq28277);
var seq28277__$1 = cljs.core.next(seq28277);
return sablono.core.form_to28276.cljs$core$IFn$_invoke$arity$variadic(G__28278,seq28277__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to28276);
