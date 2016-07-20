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
var G__49722__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__49719 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__49720 = cljs.core.seq(vec__49719);
var first__49721 = cljs.core.first(seq__49720);
var seq__49720__$1 = cljs.core.next(seq__49720);
var tag = first__49721;
var body = seq__49720__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__49722 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49723__i = 0, G__49723__a = new Array(arguments.length -  0);
while (G__49723__i < G__49723__a.length) {G__49723__a[G__49723__i] = arguments[G__49723__i + 0]; ++G__49723__i;}
  args = new cljs.core.IndexedSeq(G__49723__a,0);
} 
return G__49722__delegate.call(this,args);};
G__49722.cljs$lang$maxFixedArity = 0;
G__49722.cljs$lang$applyTo = (function (arglist__49724){
var args = cljs.core.seq(arglist__49724);
return G__49722__delegate(args);
});
G__49722.cljs$core$IFn$_invoke$arity$variadic = G__49722__delegate;
return G__49722;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__28792__auto__ = (function sablono$core$update_arglists_$_iter__49731(s__49732){
return (new cljs.core.LazySeq(null,(function (){
var s__49732__$1 = s__49732;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__49732__$1);
if(temp__4657__auto__){
var s__49732__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49732__$2)){
var c__28790__auto__ = cljs.core.chunk_first(s__49732__$2);
var size__28791__auto__ = cljs.core.count(c__28790__auto__);
var b__49734 = cljs.core.chunk_buffer(size__28791__auto__);
if((function (){var i__49733 = (0);
while(true){
if((i__49733 < size__28791__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__28790__auto__,i__49733);
cljs.core.chunk_append(b__49734,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__49737 = (i__49733 + (1));
i__49733 = G__49737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49734),sablono$core$update_arglists_$_iter__49731(cljs.core.chunk_rest(s__49732__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49734),null);
}
} else {
var args = cljs.core.first(s__49732__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__49731(cljs.core.rest(s__49732__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28792__auto__(arglists);
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
var args__29094__auto__ = [];
var len__29087__auto___49745 = arguments.length;
var i__29088__auto___49746 = (0);
while(true){
if((i__29088__auto___49746 < len__29087__auto___49745)){
args__29094__auto__.push((arguments[i__29088__auto___49746]));

var G__49747 = (i__29088__auto___49746 + (1));
i__29088__auto___49746 = G__49747;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__28792__auto__ = (function sablono$core$iter__49739(s__49740){
return (new cljs.core.LazySeq(null,(function (){
var s__49740__$1 = s__49740;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__49740__$1);
if(temp__4657__auto__){
var s__49740__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49740__$2)){
var c__28790__auto__ = cljs.core.chunk_first(s__49740__$2);
var size__28791__auto__ = cljs.core.count(c__28790__auto__);
var b__49742 = cljs.core.chunk_buffer(size__28791__auto__);
if((function (){var i__49741 = (0);
while(true){
if((i__49741 < size__28791__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__28790__auto__,i__49741);
cljs.core.chunk_append(b__49742,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__49748 = (i__49741 + (1));
i__49741 = G__49748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49742),sablono$core$iter__49739(cljs.core.chunk_rest(s__49740__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49742),null);
}
} else {
var style = cljs.core.first(s__49740__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__49739(cljs.core.rest(s__49740__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28792__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq49738){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49738));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__49753 = goog.dom.getDocument().body;
var G__49754 = (function (){var G__49755 = "script";
var G__49756 = {"src": src};
return goog.dom.createDom(G__49755,G__49756);
})();
return goog.dom.appendChild(G__49753,G__49754);
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
sablono.core.link_to49757 = (function sablono$core$link_to49757(var_args){
var args__29094__auto__ = [];
var len__29087__auto___49760 = arguments.length;
var i__29088__auto___49761 = (0);
while(true){
if((i__29088__auto___49761 < len__29087__auto___49760)){
args__29094__auto__.push((arguments[i__29088__auto___49761]));

var G__49762 = (i__29088__auto___49761 + (1));
i__29088__auto___49761 = G__49762;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((1) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to49757.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29095__auto__);
});

sablono.core.link_to49757.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to49757.cljs$lang$maxFixedArity = (1);

sablono.core.link_to49757.cljs$lang$applyTo = (function (seq49758){
var G__49759 = cljs.core.first(seq49758);
var seq49758__$1 = cljs.core.next(seq49758);
return sablono.core.link_to49757.cljs$core$IFn$_invoke$arity$variadic(G__49759,seq49758__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to49757);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to49763 = (function sablono$core$mail_to49763(var_args){
var args__29094__auto__ = [];
var len__29087__auto___49770 = arguments.length;
var i__29088__auto___49771 = (0);
while(true){
if((i__29088__auto___49771 < len__29087__auto___49770)){
args__29094__auto__.push((arguments[i__29088__auto___49771]));

var G__49772 = (i__29088__auto___49771 + (1));
i__29088__auto___49771 = G__49772;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((1) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to49763.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29095__auto__);
});

sablono.core.mail_to49763.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__49766){
var vec__49767 = p__49766;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49767,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__28012__auto__ = content;
if(cljs.core.truth_(or__28012__auto__)){
return or__28012__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to49763.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to49763.cljs$lang$applyTo = (function (seq49764){
var G__49765 = cljs.core.first(seq49764);
var seq49764__$1 = cljs.core.next(seq49764);
return sablono.core.mail_to49763.cljs$core$IFn$_invoke$arity$variadic(G__49765,seq49764__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to49763);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list49773 = (function sablono$core$unordered_list49773(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__28792__auto__ = (function sablono$core$unordered_list49773_$_iter__49780(s__49781){
return (new cljs.core.LazySeq(null,(function (){
var s__49781__$1 = s__49781;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__49781__$1);
if(temp__4657__auto__){
var s__49781__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49781__$2)){
var c__28790__auto__ = cljs.core.chunk_first(s__49781__$2);
var size__28791__auto__ = cljs.core.count(c__28790__auto__);
var b__49783 = cljs.core.chunk_buffer(size__28791__auto__);
if((function (){var i__49782 = (0);
while(true){
if((i__49782 < size__28791__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__28790__auto__,i__49782);
cljs.core.chunk_append(b__49783,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__49786 = (i__49782 + (1));
i__49782 = G__49786;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49783),sablono$core$unordered_list49773_$_iter__49780(cljs.core.chunk_rest(s__49781__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49783),null);
}
} else {
var x = cljs.core.first(s__49781__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list49773_$_iter__49780(cljs.core.rest(s__49781__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28792__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list49773);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list49787 = (function sablono$core$ordered_list49787(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__28792__auto__ = (function sablono$core$ordered_list49787_$_iter__49794(s__49795){
return (new cljs.core.LazySeq(null,(function (){
var s__49795__$1 = s__49795;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__49795__$1);
if(temp__4657__auto__){
var s__49795__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49795__$2)){
var c__28790__auto__ = cljs.core.chunk_first(s__49795__$2);
var size__28791__auto__ = cljs.core.count(c__28790__auto__);
var b__49797 = cljs.core.chunk_buffer(size__28791__auto__);
if((function (){var i__49796 = (0);
while(true){
if((i__49796 < size__28791__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__28790__auto__,i__49796);
cljs.core.chunk_append(b__49797,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__49800 = (i__49796 + (1));
i__49796 = G__49800;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49797),sablono$core$ordered_list49787_$_iter__49794(cljs.core.chunk_rest(s__49795__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49797),null);
}
} else {
var x = cljs.core.first(s__49795__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list49787_$_iter__49794(cljs.core.rest(s__49795__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28792__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list49787);
/**
 * Create an image element.
 */
sablono.core.image49801 = (function sablono$core$image49801(var_args){
var args49802 = [];
var len__29087__auto___49805 = arguments.length;
var i__29088__auto___49806 = (0);
while(true){
if((i__29088__auto___49806 < len__29087__auto___49805)){
args49802.push((arguments[i__29088__auto___49806]));

var G__49807 = (i__29088__auto___49806 + (1));
i__29088__auto___49806 = G__49807;
continue;
} else {
}
break;
}

var G__49804 = args49802.length;
switch (G__49804) {
case 1:
return sablono.core.image49801.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image49801.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49802.length)].join('')));

}
});

sablono.core.image49801.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image49801.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image49801.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image49801);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__49809_SHARP_,p2__49810_SHARP_){
return [cljs.core.str(p1__49809_SHARP_),cljs.core.str("["),cljs.core.str(p2__49810_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__49811_SHARP_,p2__49812_SHARP_){
return [cljs.core.str(p1__49811_SHARP_),cljs.core.str("-"),cljs.core.str(p2__49812_SHARP_)].join('');
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
sablono.core.color_field49813 = (function sablono$core$color_field49813(var_args){
var args49814 = [];
var len__29087__auto___49881 = arguments.length;
var i__29088__auto___49882 = (0);
while(true){
if((i__29088__auto___49882 < len__29087__auto___49881)){
args49814.push((arguments[i__29088__auto___49882]));

var G__49883 = (i__29088__auto___49882 + (1));
i__29088__auto___49882 = G__49883;
continue;
} else {
}
break;
}

var G__49816 = args49814.length;
switch (G__49816) {
case 1:
return sablono.core.color_field49813.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field49813.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49814.length)].join('')));

}
});

sablono.core.color_field49813.cljs$core$IFn$_invoke$arity$1 = (function (name__31639__auto__){
return sablono.core.color_field49813.cljs$core$IFn$_invoke$arity$2(name__31639__auto__,null);
});

sablono.core.color_field49813.cljs$core$IFn$_invoke$arity$2 = (function (name__31639__auto__,value__31640__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__31639__auto__,value__31640__auto__);
});

sablono.core.color_field49813.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field49813);

/**
 * Creates a date input field.
 */
sablono.core.date_field49817 = (function sablono$core$date_field49817(var_args){
var args49818 = [];
var len__29087__auto___49885 = arguments.length;
var i__29088__auto___49886 = (0);
while(true){
if((i__29088__auto___49886 < len__29087__auto___49885)){
args49818.push((arguments[i__29088__auto___49886]));

var G__49887 = (i__29088__auto___49886 + (1));
i__29088__auto___49886 = G__49887;
continue;
} else {
}
break;
}

var G__49820 = args49818.length;
switch (G__49820) {
case 1:
return sablono.core.date_field49817.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field49817.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49818.length)].join('')));

}
});

sablono.core.date_field49817.cljs$core$IFn$_invoke$arity$1 = (function (name__31639__auto__){
return sablono.core.date_field49817.cljs$core$IFn$_invoke$arity$2(name__31639__auto__,null);
});

sablono.core.date_field49817.cljs$core$IFn$_invoke$arity$2 = (function (name__31639__auto__,value__31640__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__31639__auto__,value__31640__auto__);
});

sablono.core.date_field49817.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field49817);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field49821 = (function sablono$core$datetime_field49821(var_args){
var args49822 = [];
var len__29087__auto___49889 = arguments.length;
var i__29088__auto___49890 = (0);
while(true){
if((i__29088__auto___49890 < len__29087__auto___49889)){
args49822.push((arguments[i__29088__auto___49890]));

var G__49891 = (i__29088__auto___49890 + (1));
i__29088__auto___49890 = G__49891;
continue;
} else {
}
break;
}

var G__49824 = args49822.length;
switch (G__49824) {
case 1:
return sablono.core.datetime_field49821.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field49821.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49822.length)].join('')));

}
});

sablono.core.datetime_field49821.cljs$core$IFn$_invoke$arity$1 = (function (name__31639__auto__){
return sablono.core.datetime_field49821.cljs$core$IFn$_invoke$arity$2(name__31639__auto__,null);
});

sablono.core.datetime_field49821.cljs$core$IFn$_invoke$arity$2 = (function (name__31639__auto__,value__31640__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__31639__auto__,value__31640__auto__);
});

sablono.core.datetime_field49821.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field49821);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field49825 = (function sablono$core$datetime_local_field49825(var_args){
var args49826 = [];
var len__29087__auto___49893 = arguments.length;
var i__29088__auto___49894 = (0);
while(true){
if((i__29088__auto___49894 < len__29087__auto___49893)){
args49826.push((arguments[i__29088__auto___49894]));

var G__49895 = (i__29088__auto___49894 + (1));
i__29088__auto___49894 = G__49895;
continue;
} else {
}
break;
}

var G__49828 = args49826.length;
switch (G__49828) {
case 1:
return sablono.core.datetime_local_field49825.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field49825.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49826.length)].join('')));

}
});

sablono.core.datetime_local_field49825.cljs$core$IFn$_invoke$arity$1 = (function (name__31639__auto__){
return sablono.core.datetime_local_field49825.cljs$core$IFn$_invoke$arity$2(name__31639__auto__,null);
});

sablono.core.datetime_local_field49825.cljs$core$IFn$_invoke$arity$2 = (function (name__31639__auto__,value__31640__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__31639__auto__,value__31640__auto__);
});

sablono.core.datetime_local_field49825.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field49825);

/**
 * Creates a email input field.
 */
sablono.core.email_field49829 = (function sablono$core$email_field49829(var_args){
var args49830 = [];
var len__29087__auto___49897 = arguments.length;
var i__29088__auto___49898 = (0);
while(true){
if((i__29088__auto___49898 < len__29087__auto___49897)){
args49830.push((arguments[i__29088__auto___49898]));

var G__49899 = (i__29088__auto___49898 + (1));
i__29088__auto___49898 = G__49899;
continue;
} else {
}
break;
}

var G__49832 = args49830.length;
switch (G__49832) {
case 1:
return sablono.core.email_field49829.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field49829.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49830.length)].join('')));

}
});

sablono.core.email_field49829.cljs$core$IFn$_invoke$arity$1 = (function (name__31639__auto__){
return sablono.core.email_field49829.cljs$core$IFn$_invoke$arity$2(name__31639__auto__,null);
});

sablono.core.email_field49829.cljs$core$IFn$_invoke$arity$2 = (function (name__31639__auto__,value__31640__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__31639__auto__,value__31640__auto__);
});

sablono.core.email_field49829.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field49829);

/**
 * Creates a file input field.
 */
sablono.core.file_field49833 = (function sablono$core$file_field49833(var_args){
var args49834 = [];
var len__29087__auto___49901 = arguments.length;
var i__29088__auto___49902 = (0);
while(true){
if((i__29088__auto___49902 < len__29087__auto___49901)){
args49834.push((arguments[i__29088__auto___49902]));

var G__49903 = (i__29088__auto___49902 + (1));
i__29088__auto___49902 = G__49903;
continue;
} else {
}
break;
}

var G__49836 = args49834.length;
switch (G__49836) {
case 1:
return sablono.core.file_field49833.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field49833.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49834.length)].join('')));

}
});

sablono.core.file_field49833.cljs$core$IFn$_invoke$arity$1 = (function (name__31639__auto__){
return sablono.core.file_field49833.cljs$core$IFn$_invoke$arity$2(name__31639__auto__,null);
});

sablono.core.file_field49833.cljs$core$IFn$_invoke$arity$2 = (function (name__31639__auto__,value__31640__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__31639__auto__,value__31640__auto__);
});

sablono.core.file_field49833.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field49833);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field49837 = (function sablono$core$hidden_field49837(var_args){
var args49838 = [];
var len__29087__auto___49905 = arguments.length;
var i__29088__auto___49906 = (0);
while(true){
if((i__29088__auto___49906 < len__29087__auto___49905)){
args49838.push((arguments[i__29088__auto___49906]));

var G__49907 = (i__29088__auto___49906 + (1));
i__29088__auto___49906 = G__49907;
continue;
} else {
}
break;
}

var G__49840 = args49838.length;
switch (G__49840) {
case 1:
return sablono.core.hidden_field49837.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field49837.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49838.length)].join('')));

}
});

sablono.core.hidden_field49837.cljs$core$IFn$_invoke$arity$1 = (function (name__31639__auto__){
return sablono.core.hidden_field49837.cljs$core$IFn$_invoke$arity$2(name__31639__auto__,null);
});

sablono.core.hidden_field49837.cljs$core$IFn$_invoke$arity$2 = (function (name__31639__auto__,value__31640__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__31639__auto__,value__31640__auto__);
});

sablono.core.hidden_field49837.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field49837);

/**
 * Creates a month input field.
 */
sablono.core.month_field49841 = (function sablono$core$month_field49841(var_args){
var args49842 = [];
var len__29087__auto___49909 = arguments.length;
var i__29088__auto___49910 = (0);
while(true){
if((i__29088__auto___49910 < len__29087__auto___49909)){
args49842.push((arguments[i__29088__auto___49910]));

var G__49911 = (i__29088__auto___49910 + (1));
i__29088__auto___49910 = G__49911;
continue;
} else {
}
break;
}

var G__49844 = args49842.length;
switch (G__49844) {
case 1:
return sablono.core.month_field49841.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field49841.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49842.length)].join('')));

}
});

sablono.core.month_field49841.cljs$core$IFn$_invoke$arity$1 = (function (name__31639__auto__){
return sablono.core.month_field49841.cljs$core$IFn$_invoke$arity$2(name__31639__auto__,null);
});

sablono.core.month_field49841.cljs$core$IFn$_invoke$arity$2 = (function (name__31639__auto__,value__31640__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__31639__auto__,value__31640__auto__);
});

sablono.core.month_field49841.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field49841);

/**
 * Creates a number input field.
 */
sablono.core.number_field49845 = (function sablono$core$number_field49845(var_args){
var args49846 = [];
var len__29087__auto___49913 = arguments.length;
var i__29088__auto___49914 = (0);
while(true){
if((i__29088__auto___49914 < len__29087__auto___49913)){
args49846.push((arguments[i__29088__auto___49914]));

var G__49915 = (i__29088__auto___49914 + (1));
i__29088__auto___49914 = G__49915;
continue;
} else {
}
break;
}

var G__49848 = args49846.length;
switch (G__49848) {
case 1:
return sablono.core.number_field49845.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field49845.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49846.length)].join('')));

}
});

sablono.core.number_field49845.cljs$core$IFn$_invoke$arity$1 = (function (name__31639__auto__){
return sablono.core.number_field49845.cljs$core$IFn$_invoke$arity$2(name__31639__auto__,null);
});

sablono.core.number_field49845.cljs$core$IFn$_invoke$arity$2 = (function (name__31639__auto__,value__31640__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__31639__auto__,value__31640__auto__);
});

sablono.core.number_field49845.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field49845);

/**
 * Creates a password input field.
 */
sablono.core.password_field49849 = (function sablono$core$password_field49849(var_args){
var args49850 = [];
var len__29087__auto___49917 = arguments.length;
var i__29088__auto___49918 = (0);
while(true){
if((i__29088__auto___49918 < len__29087__auto___49917)){
args49850.push((arguments[i__29088__auto___49918]));

var G__49919 = (i__29088__auto___49918 + (1));
i__29088__auto___49918 = G__49919;
continue;
} else {
}
break;
}

var G__49852 = args49850.length;
switch (G__49852) {
case 1:
return sablono.core.password_field49849.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field49849.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49850.length)].join('')));

}
});

sablono.core.password_field49849.cljs$core$IFn$_invoke$arity$1 = (function (name__31639__auto__){
return sablono.core.password_field49849.cljs$core$IFn$_invoke$arity$2(name__31639__auto__,null);
});

sablono.core.password_field49849.cljs$core$IFn$_invoke$arity$2 = (function (name__31639__auto__,value__31640__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__31639__auto__,value__31640__auto__);
});

sablono.core.password_field49849.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field49849);

/**
 * Creates a range input field.
 */
sablono.core.range_field49853 = (function sablono$core$range_field49853(var_args){
var args49854 = [];
var len__29087__auto___49921 = arguments.length;
var i__29088__auto___49922 = (0);
while(true){
if((i__29088__auto___49922 < len__29087__auto___49921)){
args49854.push((arguments[i__29088__auto___49922]));

var G__49923 = (i__29088__auto___49922 + (1));
i__29088__auto___49922 = G__49923;
continue;
} else {
}
break;
}

var G__49856 = args49854.length;
switch (G__49856) {
case 1:
return sablono.core.range_field49853.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field49853.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49854.length)].join('')));

}
});

sablono.core.range_field49853.cljs$core$IFn$_invoke$arity$1 = (function (name__31639__auto__){
return sablono.core.range_field49853.cljs$core$IFn$_invoke$arity$2(name__31639__auto__,null);
});

sablono.core.range_field49853.cljs$core$IFn$_invoke$arity$2 = (function (name__31639__auto__,value__31640__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__31639__auto__,value__31640__auto__);
});

sablono.core.range_field49853.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field49853);

/**
 * Creates a search input field.
 */
sablono.core.search_field49857 = (function sablono$core$search_field49857(var_args){
var args49858 = [];
var len__29087__auto___49925 = arguments.length;
var i__29088__auto___49926 = (0);
while(true){
if((i__29088__auto___49926 < len__29087__auto___49925)){
args49858.push((arguments[i__29088__auto___49926]));

var G__49927 = (i__29088__auto___49926 + (1));
i__29088__auto___49926 = G__49927;
continue;
} else {
}
break;
}

var G__49860 = args49858.length;
switch (G__49860) {
case 1:
return sablono.core.search_field49857.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field49857.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49858.length)].join('')));

}
});

sablono.core.search_field49857.cljs$core$IFn$_invoke$arity$1 = (function (name__31639__auto__){
return sablono.core.search_field49857.cljs$core$IFn$_invoke$arity$2(name__31639__auto__,null);
});

sablono.core.search_field49857.cljs$core$IFn$_invoke$arity$2 = (function (name__31639__auto__,value__31640__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__31639__auto__,value__31640__auto__);
});

sablono.core.search_field49857.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field49857);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field49861 = (function sablono$core$tel_field49861(var_args){
var args49862 = [];
var len__29087__auto___49929 = arguments.length;
var i__29088__auto___49930 = (0);
while(true){
if((i__29088__auto___49930 < len__29087__auto___49929)){
args49862.push((arguments[i__29088__auto___49930]));

var G__49931 = (i__29088__auto___49930 + (1));
i__29088__auto___49930 = G__49931;
continue;
} else {
}
break;
}

var G__49864 = args49862.length;
switch (G__49864) {
case 1:
return sablono.core.tel_field49861.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field49861.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49862.length)].join('')));

}
});

sablono.core.tel_field49861.cljs$core$IFn$_invoke$arity$1 = (function (name__31639__auto__){
return sablono.core.tel_field49861.cljs$core$IFn$_invoke$arity$2(name__31639__auto__,null);
});

sablono.core.tel_field49861.cljs$core$IFn$_invoke$arity$2 = (function (name__31639__auto__,value__31640__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__31639__auto__,value__31640__auto__);
});

sablono.core.tel_field49861.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field49861);

/**
 * Creates a text input field.
 */
sablono.core.text_field49865 = (function sablono$core$text_field49865(var_args){
var args49866 = [];
var len__29087__auto___49933 = arguments.length;
var i__29088__auto___49934 = (0);
while(true){
if((i__29088__auto___49934 < len__29087__auto___49933)){
args49866.push((arguments[i__29088__auto___49934]));

var G__49935 = (i__29088__auto___49934 + (1));
i__29088__auto___49934 = G__49935;
continue;
} else {
}
break;
}

var G__49868 = args49866.length;
switch (G__49868) {
case 1:
return sablono.core.text_field49865.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field49865.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49866.length)].join('')));

}
});

sablono.core.text_field49865.cljs$core$IFn$_invoke$arity$1 = (function (name__31639__auto__){
return sablono.core.text_field49865.cljs$core$IFn$_invoke$arity$2(name__31639__auto__,null);
});

sablono.core.text_field49865.cljs$core$IFn$_invoke$arity$2 = (function (name__31639__auto__,value__31640__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__31639__auto__,value__31640__auto__);
});

sablono.core.text_field49865.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field49865);

/**
 * Creates a time input field.
 */
sablono.core.time_field49869 = (function sablono$core$time_field49869(var_args){
var args49870 = [];
var len__29087__auto___49937 = arguments.length;
var i__29088__auto___49938 = (0);
while(true){
if((i__29088__auto___49938 < len__29087__auto___49937)){
args49870.push((arguments[i__29088__auto___49938]));

var G__49939 = (i__29088__auto___49938 + (1));
i__29088__auto___49938 = G__49939;
continue;
} else {
}
break;
}

var G__49872 = args49870.length;
switch (G__49872) {
case 1:
return sablono.core.time_field49869.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field49869.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49870.length)].join('')));

}
});

sablono.core.time_field49869.cljs$core$IFn$_invoke$arity$1 = (function (name__31639__auto__){
return sablono.core.time_field49869.cljs$core$IFn$_invoke$arity$2(name__31639__auto__,null);
});

sablono.core.time_field49869.cljs$core$IFn$_invoke$arity$2 = (function (name__31639__auto__,value__31640__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__31639__auto__,value__31640__auto__);
});

sablono.core.time_field49869.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field49869);

/**
 * Creates a url input field.
 */
sablono.core.url_field49873 = (function sablono$core$url_field49873(var_args){
var args49874 = [];
var len__29087__auto___49941 = arguments.length;
var i__29088__auto___49942 = (0);
while(true){
if((i__29088__auto___49942 < len__29087__auto___49941)){
args49874.push((arguments[i__29088__auto___49942]));

var G__49943 = (i__29088__auto___49942 + (1));
i__29088__auto___49942 = G__49943;
continue;
} else {
}
break;
}

var G__49876 = args49874.length;
switch (G__49876) {
case 1:
return sablono.core.url_field49873.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field49873.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49874.length)].join('')));

}
});

sablono.core.url_field49873.cljs$core$IFn$_invoke$arity$1 = (function (name__31639__auto__){
return sablono.core.url_field49873.cljs$core$IFn$_invoke$arity$2(name__31639__auto__,null);
});

sablono.core.url_field49873.cljs$core$IFn$_invoke$arity$2 = (function (name__31639__auto__,value__31640__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__31639__auto__,value__31640__auto__);
});

sablono.core.url_field49873.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field49873);

/**
 * Creates a week input field.
 */
sablono.core.week_field49877 = (function sablono$core$week_field49877(var_args){
var args49878 = [];
var len__29087__auto___49945 = arguments.length;
var i__29088__auto___49946 = (0);
while(true){
if((i__29088__auto___49946 < len__29087__auto___49945)){
args49878.push((arguments[i__29088__auto___49946]));

var G__49947 = (i__29088__auto___49946 + (1));
i__29088__auto___49946 = G__49947;
continue;
} else {
}
break;
}

var G__49880 = args49878.length;
switch (G__49880) {
case 1:
return sablono.core.week_field49877.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field49877.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49878.length)].join('')));

}
});

sablono.core.week_field49877.cljs$core$IFn$_invoke$arity$1 = (function (name__31639__auto__){
return sablono.core.week_field49877.cljs$core$IFn$_invoke$arity$2(name__31639__auto__,null);
});

sablono.core.week_field49877.cljs$core$IFn$_invoke$arity$2 = (function (name__31639__auto__,value__31640__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__31639__auto__,value__31640__auto__);
});

sablono.core.week_field49877.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field49877);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box49949 = (function sablono$core$check_box49949(var_args){
var args49950 = [];
var len__29087__auto___49953 = arguments.length;
var i__29088__auto___49954 = (0);
while(true){
if((i__29088__auto___49954 < len__29087__auto___49953)){
args49950.push((arguments[i__29088__auto___49954]));

var G__49955 = (i__29088__auto___49954 + (1));
i__29088__auto___49954 = G__49955;
continue;
} else {
}
break;
}

var G__49952 = args49950.length;
switch (G__49952) {
case 1:
return sablono.core.check_box49949.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box49949.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box49949.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49950.length)].join('')));

}
});

sablono.core.check_box49949.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box49949.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box49949.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box49949.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box49949.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box49949.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box49949);
/**
 * Creates a radio button.
 */
sablono.core.radio_button49957 = (function sablono$core$radio_button49957(var_args){
var args49958 = [];
var len__29087__auto___49961 = arguments.length;
var i__29088__auto___49962 = (0);
while(true){
if((i__29088__auto___49962 < len__29087__auto___49961)){
args49958.push((arguments[i__29088__auto___49962]));

var G__49963 = (i__29088__auto___49962 + (1));
i__29088__auto___49962 = G__49963;
continue;
} else {
}
break;
}

var G__49960 = args49958.length;
switch (G__49960) {
case 1:
return sablono.core.radio_button49957.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button49957.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button49957.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49958.length)].join('')));

}
});

sablono.core.radio_button49957.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button49957.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button49957.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button49957.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button49957.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button49957.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button49957);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__49966 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__49966);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options49967 = (function sablono$core$select_options49967(coll){
var iter__28792__auto__ = (function sablono$core$select_options49967_$_iter__49986(s__49987){
return (new cljs.core.LazySeq(null,(function (){
var s__49987__$1 = s__49987;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__49987__$1);
if(temp__4657__auto__){
var s__49987__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49987__$2)){
var c__28790__auto__ = cljs.core.chunk_first(s__49987__$2);
var size__28791__auto__ = cljs.core.count(c__28790__auto__);
var b__49989 = cljs.core.chunk_buffer(size__28791__auto__);
if((function (){var i__49988 = (0);
while(true){
if((i__49988 < size__28791__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__28790__auto__,i__49988);
cljs.core.chunk_append(b__49989,((cljs.core.sequential_QMARK_(x))?(function (){var vec__49998 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49998,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49998,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49998,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options49967(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__50004 = (i__49988 + (1));
i__49988 = G__50004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49989),sablono$core$select_options49967_$_iter__49986(cljs.core.chunk_rest(s__49987__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49989),null);
}
} else {
var x = cljs.core.first(s__49987__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__50001 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50001,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50001,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50001,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options49967(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options49967_$_iter__49986(cljs.core.rest(s__49987__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28792__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options49967);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down50005 = (function sablono$core$drop_down50005(var_args){
var args50006 = [];
var len__29087__auto___50009 = arguments.length;
var i__29088__auto___50010 = (0);
while(true){
if((i__29088__auto___50010 < len__29087__auto___50009)){
args50006.push((arguments[i__29088__auto___50010]));

var G__50011 = (i__29088__auto___50010 + (1));
i__29088__auto___50010 = G__50011;
continue;
} else {
}
break;
}

var G__50008 = args50006.length;
switch (G__50008) {
case 2:
return sablono.core.drop_down50005.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down50005.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50006.length)].join('')));

}
});

sablono.core.drop_down50005.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down50005.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down50005.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down50005.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down50005);
/**
 * Creates a text area element.
 */
sablono.core.text_area50013 = (function sablono$core$text_area50013(var_args){
var args50014 = [];
var len__29087__auto___50017 = arguments.length;
var i__29088__auto___50018 = (0);
while(true){
if((i__29088__auto___50018 < len__29087__auto___50017)){
args50014.push((arguments[i__29088__auto___50018]));

var G__50019 = (i__29088__auto___50018 + (1));
i__29088__auto___50018 = G__50019;
continue;
} else {
}
break;
}

var G__50016 = args50014.length;
switch (G__50016) {
case 1:
return sablono.core.text_area50013.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area50013.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50014.length)].join('')));

}
});

sablono.core.text_area50013.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area50013.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area50013.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area50013.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area50013);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label50021 = (function sablono$core$label50021(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label50021);
/**
 * Creates a submit button.
 */
sablono.core.submit_button50022 = (function sablono$core$submit_button50022(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button50022);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button50023 = (function sablono$core$reset_button50023(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button50023);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to50024 = (function sablono$core$form_to50024(var_args){
var args__29094__auto__ = [];
var len__29087__auto___50034 = arguments.length;
var i__29088__auto___50035 = (0);
while(true){
if((i__29088__auto___50035 < len__29087__auto___50034)){
args__29094__auto__.push((arguments[i__29088__auto___50035]));

var G__50036 = (i__29088__auto___50035 + (1));
i__29088__auto___50035 = G__50036;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((1) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to50024.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29095__auto__);
});

sablono.core.form_to50024.cljs$core$IFn$_invoke$arity$variadic = (function (p__50027,body){
var vec__50028 = p__50027;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50028,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50028,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__50031 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__50032 = "_method";
var G__50033 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__50031,G__50032,G__50033) : sablono.core.hidden_field.call(null,G__50031,G__50032,G__50033));
})()], null)),body));
});

sablono.core.form_to50024.cljs$lang$maxFixedArity = (1);

sablono.core.form_to50024.cljs$lang$applyTo = (function (seq50025){
var G__50026 = cljs.core.first(seq50025);
var seq50025__$1 = cljs.core.next(seq50025);
return sablono.core.form_to50024.cljs$core$IFn$_invoke$arity$variadic(G__50026,seq50025__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to50024);
