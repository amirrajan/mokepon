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
var G__28575__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__28572 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__28573 = cljs.core.seq(vec__28572);
var first__28574 = cljs.core.first(seq__28573);
var seq__28573__$1 = cljs.core.next(seq__28573);
var tag = first__28574;
var body = seq__28573__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__28575 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28576__i = 0, G__28576__a = new Array(arguments.length -  0);
while (G__28576__i < G__28576__a.length) {G__28576__a[G__28576__i] = arguments[G__28576__i + 0]; ++G__28576__i;}
  args = new cljs.core.IndexedSeq(G__28576__a,0);
} 
return G__28575__delegate.call(this,args);};
G__28575.cljs$lang$maxFixedArity = 0;
G__28575.cljs$lang$applyTo = (function (arglist__28577){
var args = cljs.core.seq(arglist__28577);
return G__28575__delegate(args);
});
G__28575.cljs$core$IFn$_invoke$arity$variadic = G__28575__delegate;
return G__28575;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19244__auto__ = (function sablono$core$update_arglists_$_iter__28584(s__28585){
return (new cljs.core.LazySeq(null,(function (){
var s__28585__$1 = s__28585;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__28585__$1);
if(temp__4657__auto__){
var s__28585__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28585__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__28585__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__28587 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__28586 = (0);
while(true){
if((i__28586 < size__19243__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__28586);
cljs.core.chunk_append(b__28587,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__28590 = (i__28586 + (1));
i__28586 = G__28590;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28587),sablono$core$update_arglists_$_iter__28584(cljs.core.chunk_rest(s__28585__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28587),null);
}
} else {
var args = cljs.core.first(s__28585__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__28584(cljs.core.rest(s__28585__$2)));
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
var len__19539__auto___28598 = arguments.length;
var i__19540__auto___28599 = (0);
while(true){
if((i__19540__auto___28599 < len__19539__auto___28598)){
args__19546__auto__.push((arguments[i__19540__auto___28599]));

var G__28600 = (i__19540__auto___28599 + (1));
i__19540__auto___28599 = G__28600;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19244__auto__ = (function sablono$core$iter__28592(s__28593){
return (new cljs.core.LazySeq(null,(function (){
var s__28593__$1 = s__28593;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__28593__$1);
if(temp__4657__auto__){
var s__28593__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28593__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__28593__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__28595 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__28594 = (0);
while(true){
if((i__28594 < size__19243__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__28594);
cljs.core.chunk_append(b__28595,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__28601 = (i__28594 + (1));
i__28594 = G__28601;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28595),sablono$core$iter__28592(cljs.core.chunk_rest(s__28593__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28595),null);
}
} else {
var style = cljs.core.first(s__28593__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__28592(cljs.core.rest(s__28593__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq28591){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28591));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__28606 = goog.dom.getDocument().body;
var G__28607 = (function (){var G__28608 = "script";
var G__28609 = {"src": src};
return goog.dom.createDom(G__28608,G__28609);
})();
return goog.dom.appendChild(G__28606,G__28607);
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
sablono.core.link_to28610 = (function sablono$core$link_to28610(var_args){
var args__19546__auto__ = [];
var len__19539__auto___28613 = arguments.length;
var i__19540__auto___28614 = (0);
while(true){
if((i__19540__auto___28614 < len__19539__auto___28613)){
args__19546__auto__.push((arguments[i__19540__auto___28614]));

var G__28615 = (i__19540__auto___28614 + (1));
i__19540__auto___28614 = G__28615;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to28610.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.link_to28610.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to28610.cljs$lang$maxFixedArity = (1);

sablono.core.link_to28610.cljs$lang$applyTo = (function (seq28611){
var G__28612 = cljs.core.first(seq28611);
var seq28611__$1 = cljs.core.next(seq28611);
return sablono.core.link_to28610.cljs$core$IFn$_invoke$arity$variadic(G__28612,seq28611__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to28610);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to28616 = (function sablono$core$mail_to28616(var_args){
var args__19546__auto__ = [];
var len__19539__auto___28623 = arguments.length;
var i__19540__auto___28624 = (0);
while(true){
if((i__19540__auto___28624 < len__19539__auto___28623)){
args__19546__auto__.push((arguments[i__19540__auto___28624]));

var G__28625 = (i__19540__auto___28624 + (1));
i__19540__auto___28624 = G__28625;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to28616.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.mail_to28616.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__28619){
var vec__28620 = p__28619;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28620,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18464__auto__ = content;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to28616.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to28616.cljs$lang$applyTo = (function (seq28617){
var G__28618 = cljs.core.first(seq28617);
var seq28617__$1 = cljs.core.next(seq28617);
return sablono.core.mail_to28616.cljs$core$IFn$_invoke$arity$variadic(G__28618,seq28617__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to28616);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list28626 = (function sablono$core$unordered_list28626(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__19244__auto__ = (function sablono$core$unordered_list28626_$_iter__28633(s__28634){
return (new cljs.core.LazySeq(null,(function (){
var s__28634__$1 = s__28634;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__28634__$1);
if(temp__4657__auto__){
var s__28634__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28634__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__28634__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__28636 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__28635 = (0);
while(true){
if((i__28635 < size__19243__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__28635);
cljs.core.chunk_append(b__28636,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__28639 = (i__28635 + (1));
i__28635 = G__28639;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28636),sablono$core$unordered_list28626_$_iter__28633(cljs.core.chunk_rest(s__28634__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28636),null);
}
} else {
var x = cljs.core.first(s__28634__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list28626_$_iter__28633(cljs.core.rest(s__28634__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list28626);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list28640 = (function sablono$core$ordered_list28640(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__19244__auto__ = (function sablono$core$ordered_list28640_$_iter__28647(s__28648){
return (new cljs.core.LazySeq(null,(function (){
var s__28648__$1 = s__28648;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__28648__$1);
if(temp__4657__auto__){
var s__28648__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28648__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__28648__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__28650 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__28649 = (0);
while(true){
if((i__28649 < size__19243__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__28649);
cljs.core.chunk_append(b__28650,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__28653 = (i__28649 + (1));
i__28649 = G__28653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28650),sablono$core$ordered_list28640_$_iter__28647(cljs.core.chunk_rest(s__28648__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28650),null);
}
} else {
var x = cljs.core.first(s__28648__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list28640_$_iter__28647(cljs.core.rest(s__28648__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list28640);
/**
 * Create an image element.
 */
sablono.core.image28654 = (function sablono$core$image28654(var_args){
var args28655 = [];
var len__19539__auto___28658 = arguments.length;
var i__19540__auto___28659 = (0);
while(true){
if((i__19540__auto___28659 < len__19539__auto___28658)){
args28655.push((arguments[i__19540__auto___28659]));

var G__28660 = (i__19540__auto___28659 + (1));
i__19540__auto___28659 = G__28660;
continue;
} else {
}
break;
}

var G__28657 = args28655.length;
switch (G__28657) {
case 1:
return sablono.core.image28654.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image28654.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28655.length)].join('')));

}
});

sablono.core.image28654.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image28654.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image28654.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image28654);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__28662_SHARP_,p2__28663_SHARP_){
return [cljs.core.str(p1__28662_SHARP_),cljs.core.str("["),cljs.core.str(p2__28663_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__28664_SHARP_,p2__28665_SHARP_){
return [cljs.core.str(p1__28664_SHARP_),cljs.core.str("-"),cljs.core.str(p2__28665_SHARP_)].join('');
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
sablono.core.color_field28666 = (function sablono$core$color_field28666(var_args){
var args28667 = [];
var len__19539__auto___28734 = arguments.length;
var i__19540__auto___28735 = (0);
while(true){
if((i__19540__auto___28735 < len__19539__auto___28734)){
args28667.push((arguments[i__19540__auto___28735]));

var G__28736 = (i__19540__auto___28735 + (1));
i__19540__auto___28735 = G__28736;
continue;
} else {
}
break;
}

var G__28669 = args28667.length;
switch (G__28669) {
case 1:
return sablono.core.color_field28666.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field28666.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28667.length)].join('')));

}
});

sablono.core.color_field28666.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.color_field28666.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.color_field28666.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.color_field28666.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field28666);

/**
 * Creates a date input field.
 */
sablono.core.date_field28670 = (function sablono$core$date_field28670(var_args){
var args28671 = [];
var len__19539__auto___28738 = arguments.length;
var i__19540__auto___28739 = (0);
while(true){
if((i__19540__auto___28739 < len__19539__auto___28738)){
args28671.push((arguments[i__19540__auto___28739]));

var G__28740 = (i__19540__auto___28739 + (1));
i__19540__auto___28739 = G__28740;
continue;
} else {
}
break;
}

var G__28673 = args28671.length;
switch (G__28673) {
case 1:
return sablono.core.date_field28670.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field28670.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28671.length)].join('')));

}
});

sablono.core.date_field28670.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.date_field28670.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.date_field28670.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.date_field28670.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field28670);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field28674 = (function sablono$core$datetime_field28674(var_args){
var args28675 = [];
var len__19539__auto___28742 = arguments.length;
var i__19540__auto___28743 = (0);
while(true){
if((i__19540__auto___28743 < len__19539__auto___28742)){
args28675.push((arguments[i__19540__auto___28743]));

var G__28744 = (i__19540__auto___28743 + (1));
i__19540__auto___28743 = G__28744;
continue;
} else {
}
break;
}

var G__28677 = args28675.length;
switch (G__28677) {
case 1:
return sablono.core.datetime_field28674.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field28674.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28675.length)].join('')));

}
});

sablono.core.datetime_field28674.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.datetime_field28674.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.datetime_field28674.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.datetime_field28674.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field28674);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field28678 = (function sablono$core$datetime_local_field28678(var_args){
var args28679 = [];
var len__19539__auto___28746 = arguments.length;
var i__19540__auto___28747 = (0);
while(true){
if((i__19540__auto___28747 < len__19539__auto___28746)){
args28679.push((arguments[i__19540__auto___28747]));

var G__28748 = (i__19540__auto___28747 + (1));
i__19540__auto___28747 = G__28748;
continue;
} else {
}
break;
}

var G__28681 = args28679.length;
switch (G__28681) {
case 1:
return sablono.core.datetime_local_field28678.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field28678.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28679.length)].join('')));

}
});

sablono.core.datetime_local_field28678.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.datetime_local_field28678.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.datetime_local_field28678.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.datetime_local_field28678.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field28678);

/**
 * Creates a email input field.
 */
sablono.core.email_field28682 = (function sablono$core$email_field28682(var_args){
var args28683 = [];
var len__19539__auto___28750 = arguments.length;
var i__19540__auto___28751 = (0);
while(true){
if((i__19540__auto___28751 < len__19539__auto___28750)){
args28683.push((arguments[i__19540__auto___28751]));

var G__28752 = (i__19540__auto___28751 + (1));
i__19540__auto___28751 = G__28752;
continue;
} else {
}
break;
}

var G__28685 = args28683.length;
switch (G__28685) {
case 1:
return sablono.core.email_field28682.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field28682.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28683.length)].join('')));

}
});

sablono.core.email_field28682.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.email_field28682.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.email_field28682.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.email_field28682.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field28682);

/**
 * Creates a file input field.
 */
sablono.core.file_field28686 = (function sablono$core$file_field28686(var_args){
var args28687 = [];
var len__19539__auto___28754 = arguments.length;
var i__19540__auto___28755 = (0);
while(true){
if((i__19540__auto___28755 < len__19539__auto___28754)){
args28687.push((arguments[i__19540__auto___28755]));

var G__28756 = (i__19540__auto___28755 + (1));
i__19540__auto___28755 = G__28756;
continue;
} else {
}
break;
}

var G__28689 = args28687.length;
switch (G__28689) {
case 1:
return sablono.core.file_field28686.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field28686.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28687.length)].join('')));

}
});

sablono.core.file_field28686.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.file_field28686.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.file_field28686.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.file_field28686.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field28686);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field28690 = (function sablono$core$hidden_field28690(var_args){
var args28691 = [];
var len__19539__auto___28758 = arguments.length;
var i__19540__auto___28759 = (0);
while(true){
if((i__19540__auto___28759 < len__19539__auto___28758)){
args28691.push((arguments[i__19540__auto___28759]));

var G__28760 = (i__19540__auto___28759 + (1));
i__19540__auto___28759 = G__28760;
continue;
} else {
}
break;
}

var G__28693 = args28691.length;
switch (G__28693) {
case 1:
return sablono.core.hidden_field28690.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field28690.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28691.length)].join('')));

}
});

sablono.core.hidden_field28690.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.hidden_field28690.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.hidden_field28690.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.hidden_field28690.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field28690);

/**
 * Creates a month input field.
 */
sablono.core.month_field28694 = (function sablono$core$month_field28694(var_args){
var args28695 = [];
var len__19539__auto___28762 = arguments.length;
var i__19540__auto___28763 = (0);
while(true){
if((i__19540__auto___28763 < len__19539__auto___28762)){
args28695.push((arguments[i__19540__auto___28763]));

var G__28764 = (i__19540__auto___28763 + (1));
i__19540__auto___28763 = G__28764;
continue;
} else {
}
break;
}

var G__28697 = args28695.length;
switch (G__28697) {
case 1:
return sablono.core.month_field28694.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field28694.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28695.length)].join('')));

}
});

sablono.core.month_field28694.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.month_field28694.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.month_field28694.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.month_field28694.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field28694);

/**
 * Creates a number input field.
 */
sablono.core.number_field28698 = (function sablono$core$number_field28698(var_args){
var args28699 = [];
var len__19539__auto___28766 = arguments.length;
var i__19540__auto___28767 = (0);
while(true){
if((i__19540__auto___28767 < len__19539__auto___28766)){
args28699.push((arguments[i__19540__auto___28767]));

var G__28768 = (i__19540__auto___28767 + (1));
i__19540__auto___28767 = G__28768;
continue;
} else {
}
break;
}

var G__28701 = args28699.length;
switch (G__28701) {
case 1:
return sablono.core.number_field28698.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field28698.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28699.length)].join('')));

}
});

sablono.core.number_field28698.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.number_field28698.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.number_field28698.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.number_field28698.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field28698);

/**
 * Creates a password input field.
 */
sablono.core.password_field28702 = (function sablono$core$password_field28702(var_args){
var args28703 = [];
var len__19539__auto___28770 = arguments.length;
var i__19540__auto___28771 = (0);
while(true){
if((i__19540__auto___28771 < len__19539__auto___28770)){
args28703.push((arguments[i__19540__auto___28771]));

var G__28772 = (i__19540__auto___28771 + (1));
i__19540__auto___28771 = G__28772;
continue;
} else {
}
break;
}

var G__28705 = args28703.length;
switch (G__28705) {
case 1:
return sablono.core.password_field28702.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field28702.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28703.length)].join('')));

}
});

sablono.core.password_field28702.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.password_field28702.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.password_field28702.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.password_field28702.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field28702);

/**
 * Creates a range input field.
 */
sablono.core.range_field28706 = (function sablono$core$range_field28706(var_args){
var args28707 = [];
var len__19539__auto___28774 = arguments.length;
var i__19540__auto___28775 = (0);
while(true){
if((i__19540__auto___28775 < len__19539__auto___28774)){
args28707.push((arguments[i__19540__auto___28775]));

var G__28776 = (i__19540__auto___28775 + (1));
i__19540__auto___28775 = G__28776;
continue;
} else {
}
break;
}

var G__28709 = args28707.length;
switch (G__28709) {
case 1:
return sablono.core.range_field28706.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field28706.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28707.length)].join('')));

}
});

sablono.core.range_field28706.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.range_field28706.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.range_field28706.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.range_field28706.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field28706);

/**
 * Creates a search input field.
 */
sablono.core.search_field28710 = (function sablono$core$search_field28710(var_args){
var args28711 = [];
var len__19539__auto___28778 = arguments.length;
var i__19540__auto___28779 = (0);
while(true){
if((i__19540__auto___28779 < len__19539__auto___28778)){
args28711.push((arguments[i__19540__auto___28779]));

var G__28780 = (i__19540__auto___28779 + (1));
i__19540__auto___28779 = G__28780;
continue;
} else {
}
break;
}

var G__28713 = args28711.length;
switch (G__28713) {
case 1:
return sablono.core.search_field28710.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field28710.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28711.length)].join('')));

}
});

sablono.core.search_field28710.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.search_field28710.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.search_field28710.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.search_field28710.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field28710);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field28714 = (function sablono$core$tel_field28714(var_args){
var args28715 = [];
var len__19539__auto___28782 = arguments.length;
var i__19540__auto___28783 = (0);
while(true){
if((i__19540__auto___28783 < len__19539__auto___28782)){
args28715.push((arguments[i__19540__auto___28783]));

var G__28784 = (i__19540__auto___28783 + (1));
i__19540__auto___28783 = G__28784;
continue;
} else {
}
break;
}

var G__28717 = args28715.length;
switch (G__28717) {
case 1:
return sablono.core.tel_field28714.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field28714.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28715.length)].join('')));

}
});

sablono.core.tel_field28714.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.tel_field28714.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.tel_field28714.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.tel_field28714.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field28714);

/**
 * Creates a text input field.
 */
sablono.core.text_field28718 = (function sablono$core$text_field28718(var_args){
var args28719 = [];
var len__19539__auto___28786 = arguments.length;
var i__19540__auto___28787 = (0);
while(true){
if((i__19540__auto___28787 < len__19539__auto___28786)){
args28719.push((arguments[i__19540__auto___28787]));

var G__28788 = (i__19540__auto___28787 + (1));
i__19540__auto___28787 = G__28788;
continue;
} else {
}
break;
}

var G__28721 = args28719.length;
switch (G__28721) {
case 1:
return sablono.core.text_field28718.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field28718.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28719.length)].join('')));

}
});

sablono.core.text_field28718.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.text_field28718.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.text_field28718.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.text_field28718.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field28718);

/**
 * Creates a time input field.
 */
sablono.core.time_field28722 = (function sablono$core$time_field28722(var_args){
var args28723 = [];
var len__19539__auto___28790 = arguments.length;
var i__19540__auto___28791 = (0);
while(true){
if((i__19540__auto___28791 < len__19539__auto___28790)){
args28723.push((arguments[i__19540__auto___28791]));

var G__28792 = (i__19540__auto___28791 + (1));
i__19540__auto___28791 = G__28792;
continue;
} else {
}
break;
}

var G__28725 = args28723.length;
switch (G__28725) {
case 1:
return sablono.core.time_field28722.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field28722.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28723.length)].join('')));

}
});

sablono.core.time_field28722.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.time_field28722.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.time_field28722.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.time_field28722.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field28722);

/**
 * Creates a url input field.
 */
sablono.core.url_field28726 = (function sablono$core$url_field28726(var_args){
var args28727 = [];
var len__19539__auto___28794 = arguments.length;
var i__19540__auto___28795 = (0);
while(true){
if((i__19540__auto___28795 < len__19539__auto___28794)){
args28727.push((arguments[i__19540__auto___28795]));

var G__28796 = (i__19540__auto___28795 + (1));
i__19540__auto___28795 = G__28796;
continue;
} else {
}
break;
}

var G__28729 = args28727.length;
switch (G__28729) {
case 1:
return sablono.core.url_field28726.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field28726.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28727.length)].join('')));

}
});

sablono.core.url_field28726.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.url_field28726.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.url_field28726.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.url_field28726.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field28726);

/**
 * Creates a week input field.
 */
sablono.core.week_field28730 = (function sablono$core$week_field28730(var_args){
var args28731 = [];
var len__19539__auto___28798 = arguments.length;
var i__19540__auto___28799 = (0);
while(true){
if((i__19540__auto___28799 < len__19539__auto___28798)){
args28731.push((arguments[i__19540__auto___28799]));

var G__28800 = (i__19540__auto___28799 + (1));
i__19540__auto___28799 = G__28800;
continue;
} else {
}
break;
}

var G__28733 = args28731.length;
switch (G__28733) {
case 1:
return sablono.core.week_field28730.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field28730.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28731.length)].join('')));

}
});

sablono.core.week_field28730.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.week_field28730.cljs$core$IFn$_invoke$arity$2(name__23630__auto__,null);
});

sablono.core.week_field28730.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.week_field28730.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field28730);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box28802 = (function sablono$core$check_box28802(var_args){
var args28803 = [];
var len__19539__auto___28806 = arguments.length;
var i__19540__auto___28807 = (0);
while(true){
if((i__19540__auto___28807 < len__19539__auto___28806)){
args28803.push((arguments[i__19540__auto___28807]));

var G__28808 = (i__19540__auto___28807 + (1));
i__19540__auto___28807 = G__28808;
continue;
} else {
}
break;
}

var G__28805 = args28803.length;
switch (G__28805) {
case 1:
return sablono.core.check_box28802.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box28802.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box28802.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28803.length)].join('')));

}
});

sablono.core.check_box28802.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box28802.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box28802.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box28802.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box28802.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box28802.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box28802);
/**
 * Creates a radio button.
 */
sablono.core.radio_button28810 = (function sablono$core$radio_button28810(var_args){
var args28811 = [];
var len__19539__auto___28814 = arguments.length;
var i__19540__auto___28815 = (0);
while(true){
if((i__19540__auto___28815 < len__19539__auto___28814)){
args28811.push((arguments[i__19540__auto___28815]));

var G__28816 = (i__19540__auto___28815 + (1));
i__19540__auto___28815 = G__28816;
continue;
} else {
}
break;
}

var G__28813 = args28811.length;
switch (G__28813) {
case 1:
return sablono.core.radio_button28810.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button28810.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button28810.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28811.length)].join('')));

}
});

sablono.core.radio_button28810.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button28810.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button28810.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button28810.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button28810.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button28810.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button28810);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__28819 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__28819);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options28820 = (function sablono$core$select_options28820(coll){
var iter__19244__auto__ = (function sablono$core$select_options28820_$_iter__28839(s__28840){
return (new cljs.core.LazySeq(null,(function (){
var s__28840__$1 = s__28840;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__28840__$1);
if(temp__4657__auto__){
var s__28840__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28840__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__28840__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__28842 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__28841 = (0);
while(true){
if((i__28841 < size__19243__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__28841);
cljs.core.chunk_append(b__28842,((cljs.core.sequential_QMARK_(x))?(function (){var vec__28851 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28851,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28851,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28851,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options28820(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__28857 = (i__28841 + (1));
i__28841 = G__28857;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28842),sablono$core$select_options28820_$_iter__28839(cljs.core.chunk_rest(s__28840__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28842),null);
}
} else {
var x = cljs.core.first(s__28840__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__28854 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28854,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28854,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28854,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options28820(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options28820_$_iter__28839(cljs.core.rest(s__28840__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options28820);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down28858 = (function sablono$core$drop_down28858(var_args){
var args28859 = [];
var len__19539__auto___28862 = arguments.length;
var i__19540__auto___28863 = (0);
while(true){
if((i__19540__auto___28863 < len__19539__auto___28862)){
args28859.push((arguments[i__19540__auto___28863]));

var G__28864 = (i__19540__auto___28863 + (1));
i__19540__auto___28863 = G__28864;
continue;
} else {
}
break;
}

var G__28861 = args28859.length;
switch (G__28861) {
case 2:
return sablono.core.drop_down28858.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down28858.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28859.length)].join('')));

}
});

sablono.core.drop_down28858.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down28858.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down28858.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down28858.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down28858);
/**
 * Creates a text area element.
 */
sablono.core.text_area28866 = (function sablono$core$text_area28866(var_args){
var args28867 = [];
var len__19539__auto___28870 = arguments.length;
var i__19540__auto___28871 = (0);
while(true){
if((i__19540__auto___28871 < len__19539__auto___28870)){
args28867.push((arguments[i__19540__auto___28871]));

var G__28872 = (i__19540__auto___28871 + (1));
i__19540__auto___28871 = G__28872;
continue;
} else {
}
break;
}

var G__28869 = args28867.length;
switch (G__28869) {
case 1:
return sablono.core.text_area28866.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area28866.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28867.length)].join('')));

}
});

sablono.core.text_area28866.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area28866.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area28866.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area28866.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area28866);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label28874 = (function sablono$core$label28874(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label28874);
/**
 * Creates a submit button.
 */
sablono.core.submit_button28875 = (function sablono$core$submit_button28875(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button28875);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button28876 = (function sablono$core$reset_button28876(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button28876);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to28877 = (function sablono$core$form_to28877(var_args){
var args__19546__auto__ = [];
var len__19539__auto___28887 = arguments.length;
var i__19540__auto___28888 = (0);
while(true){
if((i__19540__auto___28888 < len__19539__auto___28887)){
args__19546__auto__.push((arguments[i__19540__auto___28888]));

var G__28889 = (i__19540__auto___28888 + (1));
i__19540__auto___28888 = G__28889;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to28877.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.form_to28877.cljs$core$IFn$_invoke$arity$variadic = (function (p__28880,body){
var vec__28881 = p__28880;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28881,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28881,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__28884 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__28885 = "_method";
var G__28886 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__28884,G__28885,G__28886) : sablono.core.hidden_field.call(null,G__28884,G__28885,G__28886));
})()], null)),body));
});

sablono.core.form_to28877.cljs$lang$maxFixedArity = (1);

sablono.core.form_to28877.cljs$lang$applyTo = (function (seq28878){
var G__28879 = cljs.core.first(seq28878);
var seq28878__$1 = cljs.core.next(seq28878);
return sablono.core.form_to28877.cljs$core$IFn$_invoke$arity$variadic(G__28879,seq28878__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to28877);
