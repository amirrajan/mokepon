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
var G__35591__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__35588 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__35589 = cljs.core.seq(vec__35588);
var first__35590 = cljs.core.first(seq__35589);
var seq__35589__$1 = cljs.core.next(seq__35589);
var tag = first__35590;
var body = seq__35589__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__35591 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35592__i = 0, G__35592__a = new Array(arguments.length -  0);
while (G__35592__i < G__35592__a.length) {G__35592__a[G__35592__i] = arguments[G__35592__i + 0]; ++G__35592__i;}
  args = new cljs.core.IndexedSeq(G__35592__a,0);
} 
return G__35591__delegate.call(this,args);};
G__35591.cljs$lang$maxFixedArity = 0;
G__35591.cljs$lang$applyTo = (function (arglist__35593){
var args = cljs.core.seq(arglist__35593);
return G__35591__delegate(args);
});
G__35591.cljs$core$IFn$_invoke$arity$variadic = G__35591__delegate;
return G__35591;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19244__auto__ = (function sablono$core$update_arglists_$_iter__35600(s__35601){
return (new cljs.core.LazySeq(null,(function (){
var s__35601__$1 = s__35601;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__35601__$1);
if(temp__4657__auto__){
var s__35601__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35601__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__35601__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__35603 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__35602 = (0);
while(true){
if((i__35602 < size__19243__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__35602);
cljs.core.chunk_append(b__35603,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__35606 = (i__35602 + (1));
i__35602 = G__35606;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35603),sablono$core$update_arglists_$_iter__35600(cljs.core.chunk_rest(s__35601__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35603),null);
}
} else {
var args = cljs.core.first(s__35601__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__35600(cljs.core.rest(s__35601__$2)));
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
var len__19539__auto___35614 = arguments.length;
var i__19540__auto___35615 = (0);
while(true){
if((i__19540__auto___35615 < len__19539__auto___35614)){
args__19546__auto__.push((arguments[i__19540__auto___35615]));

var G__35616 = (i__19540__auto___35615 + (1));
i__19540__auto___35615 = G__35616;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19244__auto__ = (function sablono$core$iter__35608(s__35609){
return (new cljs.core.LazySeq(null,(function (){
var s__35609__$1 = s__35609;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__35609__$1);
if(temp__4657__auto__){
var s__35609__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35609__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__35609__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__35611 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__35610 = (0);
while(true){
if((i__35610 < size__19243__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__35610);
cljs.core.chunk_append(b__35611,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__35617 = (i__35610 + (1));
i__35610 = G__35617;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35611),sablono$core$iter__35608(cljs.core.chunk_rest(s__35609__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35611),null);
}
} else {
var style = cljs.core.first(s__35609__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__35608(cljs.core.rest(s__35609__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq35607){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35607));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__35622 = goog.dom.getDocument().body;
var G__35623 = (function (){var G__35624 = "script";
var G__35625 = {"src": src};
return goog.dom.createDom(G__35624,G__35625);
})();
return goog.dom.appendChild(G__35622,G__35623);
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
sablono.core.link_to35626 = (function sablono$core$link_to35626(var_args){
var args__19546__auto__ = [];
var len__19539__auto___35629 = arguments.length;
var i__19540__auto___35630 = (0);
while(true){
if((i__19540__auto___35630 < len__19539__auto___35629)){
args__19546__auto__.push((arguments[i__19540__auto___35630]));

var G__35631 = (i__19540__auto___35630 + (1));
i__19540__auto___35630 = G__35631;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to35626.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.link_to35626.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to35626.cljs$lang$maxFixedArity = (1);

sablono.core.link_to35626.cljs$lang$applyTo = (function (seq35627){
var G__35628 = cljs.core.first(seq35627);
var seq35627__$1 = cljs.core.next(seq35627);
return sablono.core.link_to35626.cljs$core$IFn$_invoke$arity$variadic(G__35628,seq35627__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to35626);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to35632 = (function sablono$core$mail_to35632(var_args){
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
return sablono.core.mail_to35632.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.mail_to35632.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__35635){
var vec__35636 = p__35635;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35636,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18464__auto__ = content;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to35632.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to35632.cljs$lang$applyTo = (function (seq35633){
var G__35634 = cljs.core.first(seq35633);
var seq35633__$1 = cljs.core.next(seq35633);
return sablono.core.mail_to35632.cljs$core$IFn$_invoke$arity$variadic(G__35634,seq35633__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to35632);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list35642 = (function sablono$core$unordered_list35642(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__19244__auto__ = (function sablono$core$unordered_list35642_$_iter__35649(s__35650){
return (new cljs.core.LazySeq(null,(function (){
var s__35650__$1 = s__35650;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__35650__$1);
if(temp__4657__auto__){
var s__35650__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35650__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__35650__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__35652 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__35651 = (0);
while(true){
if((i__35651 < size__19243__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__35651);
cljs.core.chunk_append(b__35652,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__35655 = (i__35651 + (1));
i__35651 = G__35655;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35652),sablono$core$unordered_list35642_$_iter__35649(cljs.core.chunk_rest(s__35650__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35652),null);
}
} else {
var x = cljs.core.first(s__35650__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list35642_$_iter__35649(cljs.core.rest(s__35650__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list35642);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list35656 = (function sablono$core$ordered_list35656(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__19244__auto__ = (function sablono$core$ordered_list35656_$_iter__35663(s__35664){
return (new cljs.core.LazySeq(null,(function (){
var s__35664__$1 = s__35664;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__35664__$1);
if(temp__4657__auto__){
var s__35664__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35664__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__35664__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__35666 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__35665 = (0);
while(true){
if((i__35665 < size__19243__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__35665);
cljs.core.chunk_append(b__35666,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__35669 = (i__35665 + (1));
i__35665 = G__35669;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35666),sablono$core$ordered_list35656_$_iter__35663(cljs.core.chunk_rest(s__35664__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35666),null);
}
} else {
var x = cljs.core.first(s__35664__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list35656_$_iter__35663(cljs.core.rest(s__35664__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list35656);
/**
 * Create an image element.
 */
sablono.core.image35670 = (function sablono$core$image35670(var_args){
var args35671 = [];
var len__19539__auto___35674 = arguments.length;
var i__19540__auto___35675 = (0);
while(true){
if((i__19540__auto___35675 < len__19539__auto___35674)){
args35671.push((arguments[i__19540__auto___35675]));

var G__35676 = (i__19540__auto___35675 + (1));
i__19540__auto___35675 = G__35676;
continue;
} else {
}
break;
}

var G__35673 = args35671.length;
switch (G__35673) {
case 1:
return sablono.core.image35670.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image35670.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35671.length)].join('')));

}
});

sablono.core.image35670.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image35670.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image35670.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image35670);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__35678_SHARP_,p2__35679_SHARP_){
return [cljs.core.str(p1__35678_SHARP_),cljs.core.str("["),cljs.core.str(p2__35679_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__35680_SHARP_,p2__35681_SHARP_){
return [cljs.core.str(p1__35680_SHARP_),cljs.core.str("-"),cljs.core.str(p2__35681_SHARP_)].join('');
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
sablono.core.color_field35682 = (function sablono$core$color_field35682(var_args){
var args35683 = [];
var len__19539__auto___35750 = arguments.length;
var i__19540__auto___35751 = (0);
while(true){
if((i__19540__auto___35751 < len__19539__auto___35750)){
args35683.push((arguments[i__19540__auto___35751]));

var G__35752 = (i__19540__auto___35751 + (1));
i__19540__auto___35751 = G__35752;
continue;
} else {
}
break;
}

var G__35685 = args35683.length;
switch (G__35685) {
case 1:
return sablono.core.color_field35682.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field35682.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35683.length)].join('')));

}
});

sablono.core.color_field35682.cljs$core$IFn$_invoke$arity$1 = (function (name__20014__auto__){
return sablono.core.color_field35682.cljs$core$IFn$_invoke$arity$2(name__20014__auto__,null);
});

sablono.core.color_field35682.cljs$core$IFn$_invoke$arity$2 = (function (name__20014__auto__,value__20015__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__20014__auto__,value__20015__auto__);
});

sablono.core.color_field35682.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field35682);

/**
 * Creates a date input field.
 */
sablono.core.date_field35686 = (function sablono$core$date_field35686(var_args){
var args35687 = [];
var len__19539__auto___35754 = arguments.length;
var i__19540__auto___35755 = (0);
while(true){
if((i__19540__auto___35755 < len__19539__auto___35754)){
args35687.push((arguments[i__19540__auto___35755]));

var G__35756 = (i__19540__auto___35755 + (1));
i__19540__auto___35755 = G__35756;
continue;
} else {
}
break;
}

var G__35689 = args35687.length;
switch (G__35689) {
case 1:
return sablono.core.date_field35686.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field35686.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35687.length)].join('')));

}
});

sablono.core.date_field35686.cljs$core$IFn$_invoke$arity$1 = (function (name__20014__auto__){
return sablono.core.date_field35686.cljs$core$IFn$_invoke$arity$2(name__20014__auto__,null);
});

sablono.core.date_field35686.cljs$core$IFn$_invoke$arity$2 = (function (name__20014__auto__,value__20015__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__20014__auto__,value__20015__auto__);
});

sablono.core.date_field35686.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field35686);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field35690 = (function sablono$core$datetime_field35690(var_args){
var args35691 = [];
var len__19539__auto___35758 = arguments.length;
var i__19540__auto___35759 = (0);
while(true){
if((i__19540__auto___35759 < len__19539__auto___35758)){
args35691.push((arguments[i__19540__auto___35759]));

var G__35760 = (i__19540__auto___35759 + (1));
i__19540__auto___35759 = G__35760;
continue;
} else {
}
break;
}

var G__35693 = args35691.length;
switch (G__35693) {
case 1:
return sablono.core.datetime_field35690.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field35690.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35691.length)].join('')));

}
});

sablono.core.datetime_field35690.cljs$core$IFn$_invoke$arity$1 = (function (name__20014__auto__){
return sablono.core.datetime_field35690.cljs$core$IFn$_invoke$arity$2(name__20014__auto__,null);
});

sablono.core.datetime_field35690.cljs$core$IFn$_invoke$arity$2 = (function (name__20014__auto__,value__20015__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__20014__auto__,value__20015__auto__);
});

sablono.core.datetime_field35690.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field35690);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field35694 = (function sablono$core$datetime_local_field35694(var_args){
var args35695 = [];
var len__19539__auto___35762 = arguments.length;
var i__19540__auto___35763 = (0);
while(true){
if((i__19540__auto___35763 < len__19539__auto___35762)){
args35695.push((arguments[i__19540__auto___35763]));

var G__35764 = (i__19540__auto___35763 + (1));
i__19540__auto___35763 = G__35764;
continue;
} else {
}
break;
}

var G__35697 = args35695.length;
switch (G__35697) {
case 1:
return sablono.core.datetime_local_field35694.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field35694.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35695.length)].join('')));

}
});

sablono.core.datetime_local_field35694.cljs$core$IFn$_invoke$arity$1 = (function (name__20014__auto__){
return sablono.core.datetime_local_field35694.cljs$core$IFn$_invoke$arity$2(name__20014__auto__,null);
});

sablono.core.datetime_local_field35694.cljs$core$IFn$_invoke$arity$2 = (function (name__20014__auto__,value__20015__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__20014__auto__,value__20015__auto__);
});

sablono.core.datetime_local_field35694.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field35694);

/**
 * Creates a email input field.
 */
sablono.core.email_field35698 = (function sablono$core$email_field35698(var_args){
var args35699 = [];
var len__19539__auto___35766 = arguments.length;
var i__19540__auto___35767 = (0);
while(true){
if((i__19540__auto___35767 < len__19539__auto___35766)){
args35699.push((arguments[i__19540__auto___35767]));

var G__35768 = (i__19540__auto___35767 + (1));
i__19540__auto___35767 = G__35768;
continue;
} else {
}
break;
}

var G__35701 = args35699.length;
switch (G__35701) {
case 1:
return sablono.core.email_field35698.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field35698.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35699.length)].join('')));

}
});

sablono.core.email_field35698.cljs$core$IFn$_invoke$arity$1 = (function (name__20014__auto__){
return sablono.core.email_field35698.cljs$core$IFn$_invoke$arity$2(name__20014__auto__,null);
});

sablono.core.email_field35698.cljs$core$IFn$_invoke$arity$2 = (function (name__20014__auto__,value__20015__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__20014__auto__,value__20015__auto__);
});

sablono.core.email_field35698.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field35698);

/**
 * Creates a file input field.
 */
sablono.core.file_field35702 = (function sablono$core$file_field35702(var_args){
var args35703 = [];
var len__19539__auto___35770 = arguments.length;
var i__19540__auto___35771 = (0);
while(true){
if((i__19540__auto___35771 < len__19539__auto___35770)){
args35703.push((arguments[i__19540__auto___35771]));

var G__35772 = (i__19540__auto___35771 + (1));
i__19540__auto___35771 = G__35772;
continue;
} else {
}
break;
}

var G__35705 = args35703.length;
switch (G__35705) {
case 1:
return sablono.core.file_field35702.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field35702.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35703.length)].join('')));

}
});

sablono.core.file_field35702.cljs$core$IFn$_invoke$arity$1 = (function (name__20014__auto__){
return sablono.core.file_field35702.cljs$core$IFn$_invoke$arity$2(name__20014__auto__,null);
});

sablono.core.file_field35702.cljs$core$IFn$_invoke$arity$2 = (function (name__20014__auto__,value__20015__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__20014__auto__,value__20015__auto__);
});

sablono.core.file_field35702.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field35702);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field35706 = (function sablono$core$hidden_field35706(var_args){
var args35707 = [];
var len__19539__auto___35774 = arguments.length;
var i__19540__auto___35775 = (0);
while(true){
if((i__19540__auto___35775 < len__19539__auto___35774)){
args35707.push((arguments[i__19540__auto___35775]));

var G__35776 = (i__19540__auto___35775 + (1));
i__19540__auto___35775 = G__35776;
continue;
} else {
}
break;
}

var G__35709 = args35707.length;
switch (G__35709) {
case 1:
return sablono.core.hidden_field35706.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field35706.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35707.length)].join('')));

}
});

sablono.core.hidden_field35706.cljs$core$IFn$_invoke$arity$1 = (function (name__20014__auto__){
return sablono.core.hidden_field35706.cljs$core$IFn$_invoke$arity$2(name__20014__auto__,null);
});

sablono.core.hidden_field35706.cljs$core$IFn$_invoke$arity$2 = (function (name__20014__auto__,value__20015__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__20014__auto__,value__20015__auto__);
});

sablono.core.hidden_field35706.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field35706);

/**
 * Creates a month input field.
 */
sablono.core.month_field35710 = (function sablono$core$month_field35710(var_args){
var args35711 = [];
var len__19539__auto___35778 = arguments.length;
var i__19540__auto___35779 = (0);
while(true){
if((i__19540__auto___35779 < len__19539__auto___35778)){
args35711.push((arguments[i__19540__auto___35779]));

var G__35780 = (i__19540__auto___35779 + (1));
i__19540__auto___35779 = G__35780;
continue;
} else {
}
break;
}

var G__35713 = args35711.length;
switch (G__35713) {
case 1:
return sablono.core.month_field35710.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field35710.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35711.length)].join('')));

}
});

sablono.core.month_field35710.cljs$core$IFn$_invoke$arity$1 = (function (name__20014__auto__){
return sablono.core.month_field35710.cljs$core$IFn$_invoke$arity$2(name__20014__auto__,null);
});

sablono.core.month_field35710.cljs$core$IFn$_invoke$arity$2 = (function (name__20014__auto__,value__20015__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__20014__auto__,value__20015__auto__);
});

sablono.core.month_field35710.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field35710);

/**
 * Creates a number input field.
 */
sablono.core.number_field35714 = (function sablono$core$number_field35714(var_args){
var args35715 = [];
var len__19539__auto___35782 = arguments.length;
var i__19540__auto___35783 = (0);
while(true){
if((i__19540__auto___35783 < len__19539__auto___35782)){
args35715.push((arguments[i__19540__auto___35783]));

var G__35784 = (i__19540__auto___35783 + (1));
i__19540__auto___35783 = G__35784;
continue;
} else {
}
break;
}

var G__35717 = args35715.length;
switch (G__35717) {
case 1:
return sablono.core.number_field35714.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field35714.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35715.length)].join('')));

}
});

sablono.core.number_field35714.cljs$core$IFn$_invoke$arity$1 = (function (name__20014__auto__){
return sablono.core.number_field35714.cljs$core$IFn$_invoke$arity$2(name__20014__auto__,null);
});

sablono.core.number_field35714.cljs$core$IFn$_invoke$arity$2 = (function (name__20014__auto__,value__20015__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__20014__auto__,value__20015__auto__);
});

sablono.core.number_field35714.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field35714);

/**
 * Creates a password input field.
 */
sablono.core.password_field35718 = (function sablono$core$password_field35718(var_args){
var args35719 = [];
var len__19539__auto___35786 = arguments.length;
var i__19540__auto___35787 = (0);
while(true){
if((i__19540__auto___35787 < len__19539__auto___35786)){
args35719.push((arguments[i__19540__auto___35787]));

var G__35788 = (i__19540__auto___35787 + (1));
i__19540__auto___35787 = G__35788;
continue;
} else {
}
break;
}

var G__35721 = args35719.length;
switch (G__35721) {
case 1:
return sablono.core.password_field35718.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field35718.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35719.length)].join('')));

}
});

sablono.core.password_field35718.cljs$core$IFn$_invoke$arity$1 = (function (name__20014__auto__){
return sablono.core.password_field35718.cljs$core$IFn$_invoke$arity$2(name__20014__auto__,null);
});

sablono.core.password_field35718.cljs$core$IFn$_invoke$arity$2 = (function (name__20014__auto__,value__20015__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__20014__auto__,value__20015__auto__);
});

sablono.core.password_field35718.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field35718);

/**
 * Creates a range input field.
 */
sablono.core.range_field35722 = (function sablono$core$range_field35722(var_args){
var args35723 = [];
var len__19539__auto___35790 = arguments.length;
var i__19540__auto___35791 = (0);
while(true){
if((i__19540__auto___35791 < len__19539__auto___35790)){
args35723.push((arguments[i__19540__auto___35791]));

var G__35792 = (i__19540__auto___35791 + (1));
i__19540__auto___35791 = G__35792;
continue;
} else {
}
break;
}

var G__35725 = args35723.length;
switch (G__35725) {
case 1:
return sablono.core.range_field35722.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field35722.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35723.length)].join('')));

}
});

sablono.core.range_field35722.cljs$core$IFn$_invoke$arity$1 = (function (name__20014__auto__){
return sablono.core.range_field35722.cljs$core$IFn$_invoke$arity$2(name__20014__auto__,null);
});

sablono.core.range_field35722.cljs$core$IFn$_invoke$arity$2 = (function (name__20014__auto__,value__20015__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__20014__auto__,value__20015__auto__);
});

sablono.core.range_field35722.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field35722);

/**
 * Creates a search input field.
 */
sablono.core.search_field35726 = (function sablono$core$search_field35726(var_args){
var args35727 = [];
var len__19539__auto___35794 = arguments.length;
var i__19540__auto___35795 = (0);
while(true){
if((i__19540__auto___35795 < len__19539__auto___35794)){
args35727.push((arguments[i__19540__auto___35795]));

var G__35796 = (i__19540__auto___35795 + (1));
i__19540__auto___35795 = G__35796;
continue;
} else {
}
break;
}

var G__35729 = args35727.length;
switch (G__35729) {
case 1:
return sablono.core.search_field35726.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field35726.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35727.length)].join('')));

}
});

sablono.core.search_field35726.cljs$core$IFn$_invoke$arity$1 = (function (name__20014__auto__){
return sablono.core.search_field35726.cljs$core$IFn$_invoke$arity$2(name__20014__auto__,null);
});

sablono.core.search_field35726.cljs$core$IFn$_invoke$arity$2 = (function (name__20014__auto__,value__20015__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__20014__auto__,value__20015__auto__);
});

sablono.core.search_field35726.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field35726);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field35730 = (function sablono$core$tel_field35730(var_args){
var args35731 = [];
var len__19539__auto___35798 = arguments.length;
var i__19540__auto___35799 = (0);
while(true){
if((i__19540__auto___35799 < len__19539__auto___35798)){
args35731.push((arguments[i__19540__auto___35799]));

var G__35800 = (i__19540__auto___35799 + (1));
i__19540__auto___35799 = G__35800;
continue;
} else {
}
break;
}

var G__35733 = args35731.length;
switch (G__35733) {
case 1:
return sablono.core.tel_field35730.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field35730.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35731.length)].join('')));

}
});

sablono.core.tel_field35730.cljs$core$IFn$_invoke$arity$1 = (function (name__20014__auto__){
return sablono.core.tel_field35730.cljs$core$IFn$_invoke$arity$2(name__20014__auto__,null);
});

sablono.core.tel_field35730.cljs$core$IFn$_invoke$arity$2 = (function (name__20014__auto__,value__20015__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__20014__auto__,value__20015__auto__);
});

sablono.core.tel_field35730.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field35730);

/**
 * Creates a text input field.
 */
sablono.core.text_field35734 = (function sablono$core$text_field35734(var_args){
var args35735 = [];
var len__19539__auto___35802 = arguments.length;
var i__19540__auto___35803 = (0);
while(true){
if((i__19540__auto___35803 < len__19539__auto___35802)){
args35735.push((arguments[i__19540__auto___35803]));

var G__35804 = (i__19540__auto___35803 + (1));
i__19540__auto___35803 = G__35804;
continue;
} else {
}
break;
}

var G__35737 = args35735.length;
switch (G__35737) {
case 1:
return sablono.core.text_field35734.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field35734.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35735.length)].join('')));

}
});

sablono.core.text_field35734.cljs$core$IFn$_invoke$arity$1 = (function (name__20014__auto__){
return sablono.core.text_field35734.cljs$core$IFn$_invoke$arity$2(name__20014__auto__,null);
});

sablono.core.text_field35734.cljs$core$IFn$_invoke$arity$2 = (function (name__20014__auto__,value__20015__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__20014__auto__,value__20015__auto__);
});

sablono.core.text_field35734.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field35734);

/**
 * Creates a time input field.
 */
sablono.core.time_field35738 = (function sablono$core$time_field35738(var_args){
var args35739 = [];
var len__19539__auto___35806 = arguments.length;
var i__19540__auto___35807 = (0);
while(true){
if((i__19540__auto___35807 < len__19539__auto___35806)){
args35739.push((arguments[i__19540__auto___35807]));

var G__35808 = (i__19540__auto___35807 + (1));
i__19540__auto___35807 = G__35808;
continue;
} else {
}
break;
}

var G__35741 = args35739.length;
switch (G__35741) {
case 1:
return sablono.core.time_field35738.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field35738.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35739.length)].join('')));

}
});

sablono.core.time_field35738.cljs$core$IFn$_invoke$arity$1 = (function (name__20014__auto__){
return sablono.core.time_field35738.cljs$core$IFn$_invoke$arity$2(name__20014__auto__,null);
});

sablono.core.time_field35738.cljs$core$IFn$_invoke$arity$2 = (function (name__20014__auto__,value__20015__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__20014__auto__,value__20015__auto__);
});

sablono.core.time_field35738.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field35738);

/**
 * Creates a url input field.
 */
sablono.core.url_field35742 = (function sablono$core$url_field35742(var_args){
var args35743 = [];
var len__19539__auto___35810 = arguments.length;
var i__19540__auto___35811 = (0);
while(true){
if((i__19540__auto___35811 < len__19539__auto___35810)){
args35743.push((arguments[i__19540__auto___35811]));

var G__35812 = (i__19540__auto___35811 + (1));
i__19540__auto___35811 = G__35812;
continue;
} else {
}
break;
}

var G__35745 = args35743.length;
switch (G__35745) {
case 1:
return sablono.core.url_field35742.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field35742.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35743.length)].join('')));

}
});

sablono.core.url_field35742.cljs$core$IFn$_invoke$arity$1 = (function (name__20014__auto__){
return sablono.core.url_field35742.cljs$core$IFn$_invoke$arity$2(name__20014__auto__,null);
});

sablono.core.url_field35742.cljs$core$IFn$_invoke$arity$2 = (function (name__20014__auto__,value__20015__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__20014__auto__,value__20015__auto__);
});

sablono.core.url_field35742.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field35742);

/**
 * Creates a week input field.
 */
sablono.core.week_field35746 = (function sablono$core$week_field35746(var_args){
var args35747 = [];
var len__19539__auto___35814 = arguments.length;
var i__19540__auto___35815 = (0);
while(true){
if((i__19540__auto___35815 < len__19539__auto___35814)){
args35747.push((arguments[i__19540__auto___35815]));

var G__35816 = (i__19540__auto___35815 + (1));
i__19540__auto___35815 = G__35816;
continue;
} else {
}
break;
}

var G__35749 = args35747.length;
switch (G__35749) {
case 1:
return sablono.core.week_field35746.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field35746.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35747.length)].join('')));

}
});

sablono.core.week_field35746.cljs$core$IFn$_invoke$arity$1 = (function (name__20014__auto__){
return sablono.core.week_field35746.cljs$core$IFn$_invoke$arity$2(name__20014__auto__,null);
});

sablono.core.week_field35746.cljs$core$IFn$_invoke$arity$2 = (function (name__20014__auto__,value__20015__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__20014__auto__,value__20015__auto__);
});

sablono.core.week_field35746.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field35746);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box35818 = (function sablono$core$check_box35818(var_args){
var args35819 = [];
var len__19539__auto___35822 = arguments.length;
var i__19540__auto___35823 = (0);
while(true){
if((i__19540__auto___35823 < len__19539__auto___35822)){
args35819.push((arguments[i__19540__auto___35823]));

var G__35824 = (i__19540__auto___35823 + (1));
i__19540__auto___35823 = G__35824;
continue;
} else {
}
break;
}

var G__35821 = args35819.length;
switch (G__35821) {
case 1:
return sablono.core.check_box35818.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box35818.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box35818.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35819.length)].join('')));

}
});

sablono.core.check_box35818.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box35818.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box35818.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box35818.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box35818.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box35818.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box35818);
/**
 * Creates a radio button.
 */
sablono.core.radio_button35826 = (function sablono$core$radio_button35826(var_args){
var args35827 = [];
var len__19539__auto___35830 = arguments.length;
var i__19540__auto___35831 = (0);
while(true){
if((i__19540__auto___35831 < len__19539__auto___35830)){
args35827.push((arguments[i__19540__auto___35831]));

var G__35832 = (i__19540__auto___35831 + (1));
i__19540__auto___35831 = G__35832;
continue;
} else {
}
break;
}

var G__35829 = args35827.length;
switch (G__35829) {
case 1:
return sablono.core.radio_button35826.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button35826.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button35826.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35827.length)].join('')));

}
});

sablono.core.radio_button35826.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button35826.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button35826.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button35826.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button35826.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button35826.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button35826);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__35835 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__35835);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options35836 = (function sablono$core$select_options35836(coll){
var iter__19244__auto__ = (function sablono$core$select_options35836_$_iter__35855(s__35856){
return (new cljs.core.LazySeq(null,(function (){
var s__35856__$1 = s__35856;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__35856__$1);
if(temp__4657__auto__){
var s__35856__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35856__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__35856__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__35858 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__35857 = (0);
while(true){
if((i__35857 < size__19243__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__35857);
cljs.core.chunk_append(b__35858,((cljs.core.sequential_QMARK_(x))?(function (){var vec__35867 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35867,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35867,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35867,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options35836(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__35873 = (i__35857 + (1));
i__35857 = G__35873;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35858),sablono$core$select_options35836_$_iter__35855(cljs.core.chunk_rest(s__35856__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35858),null);
}
} else {
var x = cljs.core.first(s__35856__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__35870 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35870,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35870,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35870,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options35836(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options35836_$_iter__35855(cljs.core.rest(s__35856__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options35836);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down35874 = (function sablono$core$drop_down35874(var_args){
var args35875 = [];
var len__19539__auto___35878 = arguments.length;
var i__19540__auto___35879 = (0);
while(true){
if((i__19540__auto___35879 < len__19539__auto___35878)){
args35875.push((arguments[i__19540__auto___35879]));

var G__35880 = (i__19540__auto___35879 + (1));
i__19540__auto___35879 = G__35880;
continue;
} else {
}
break;
}

var G__35877 = args35875.length;
switch (G__35877) {
case 2:
return sablono.core.drop_down35874.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down35874.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35875.length)].join('')));

}
});

sablono.core.drop_down35874.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down35874.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down35874.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down35874.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down35874);
/**
 * Creates a text area element.
 */
sablono.core.text_area35882 = (function sablono$core$text_area35882(var_args){
var args35883 = [];
var len__19539__auto___35886 = arguments.length;
var i__19540__auto___35887 = (0);
while(true){
if((i__19540__auto___35887 < len__19539__auto___35886)){
args35883.push((arguments[i__19540__auto___35887]));

var G__35888 = (i__19540__auto___35887 + (1));
i__19540__auto___35887 = G__35888;
continue;
} else {
}
break;
}

var G__35885 = args35883.length;
switch (G__35885) {
case 1:
return sablono.core.text_area35882.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area35882.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35883.length)].join('')));

}
});

sablono.core.text_area35882.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area35882.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area35882.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area35882.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area35882);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label35890 = (function sablono$core$label35890(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label35890);
/**
 * Creates a submit button.
 */
sablono.core.submit_button35891 = (function sablono$core$submit_button35891(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button35891);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button35892 = (function sablono$core$reset_button35892(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button35892);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to35893 = (function sablono$core$form_to35893(var_args){
var args__19546__auto__ = [];
var len__19539__auto___35903 = arguments.length;
var i__19540__auto___35904 = (0);
while(true){
if((i__19540__auto___35904 < len__19539__auto___35903)){
args__19546__auto__.push((arguments[i__19540__auto___35904]));

var G__35905 = (i__19540__auto___35904 + (1));
i__19540__auto___35904 = G__35905;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to35893.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.form_to35893.cljs$core$IFn$_invoke$arity$variadic = (function (p__35896,body){
var vec__35897 = p__35896;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35897,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35897,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__35900 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__35901 = "_method";
var G__35902 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__35900,G__35901,G__35902) : sablono.core.hidden_field.call(null,G__35900,G__35901,G__35902));
})()], null)),body));
});

sablono.core.form_to35893.cljs$lang$maxFixedArity = (1);

sablono.core.form_to35893.cljs$lang$applyTo = (function (seq35894){
var G__35895 = cljs.core.first(seq35894);
var seq35894__$1 = cljs.core.next(seq35894);
return sablono.core.form_to35893.cljs$core$IFn$_invoke$arity$variadic(G__35895,seq35894__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to35893);
