// Compiled by ClojureScript 1.9.76 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__25476__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__25473 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__25474 = cljs.core.seq.call(null,vec__25473);
var first__25475 = cljs.core.first.call(null,seq__25474);
var seq__25474__$1 = cljs.core.next.call(null,seq__25474);
var tag = first__25475;
var body = seq__25474__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__25476 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25477__i = 0, G__25477__a = new Array(arguments.length -  0);
while (G__25477__i < G__25477__a.length) {G__25477__a[G__25477__i] = arguments[G__25477__i + 0]; ++G__25477__i;}
  args = new cljs.core.IndexedSeq(G__25477__a,0);
} 
return G__25476__delegate.call(this,args);};
G__25476.cljs$lang$maxFixedArity = 0;
G__25476.cljs$lang$applyTo = (function (arglist__25478){
var args = cljs.core.seq(arglist__25478);
return G__25476__delegate(args);
});
G__25476.cljs$core$IFn$_invoke$arity$variadic = G__25476__delegate;
return G__25476;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19244__auto__ = (function sablono$core$update_arglists_$_iter__25483(s__25484){
return (new cljs.core.LazySeq(null,(function (){
var s__25484__$1 = s__25484;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25484__$1);
if(temp__4657__auto__){
var s__25484__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25484__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__25484__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__25486 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__25485 = (0);
while(true){
if((i__25485 < size__19243__auto__)){
var args = cljs.core._nth.call(null,c__19242__auto__,i__25485);
cljs.core.chunk_append.call(null,b__25486,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__25487 = (i__25485 + (1));
i__25485 = G__25487;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25486),sablono$core$update_arglists_$_iter__25483.call(null,cljs.core.chunk_rest.call(null,s__25484__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25486),null);
}
} else {
var args = cljs.core.first.call(null,s__25484__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__25483.call(null,cljs.core.rest.call(null,s__25484__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__19546__auto__ = [];
var len__19539__auto___25493 = arguments.length;
var i__19540__auto___25494 = (0);
while(true){
if((i__19540__auto___25494 < len__19539__auto___25493)){
args__19546__auto__.push((arguments[i__19540__auto___25494]));

var G__25495 = (i__19540__auto___25494 + (1));
i__19540__auto___25494 = G__25495;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19244__auto__ = (function sablono$core$iter__25489(s__25490){
return (new cljs.core.LazySeq(null,(function (){
var s__25490__$1 = s__25490;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25490__$1);
if(temp__4657__auto__){
var s__25490__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25490__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__25490__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__25492 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__25491 = (0);
while(true){
if((i__25491 < size__19243__auto__)){
var style = cljs.core._nth.call(null,c__19242__auto__,i__25491);
cljs.core.chunk_append.call(null,b__25492,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__25496 = (i__25491 + (1));
i__25491 = G__25496;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25492),sablono$core$iter__25489.call(null,cljs.core.chunk_rest.call(null,s__25490__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25492),null);
}
} else {
var style = cljs.core.first.call(null,s__25490__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__25489.call(null,cljs.core.rest.call(null,s__25490__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq25488){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25488));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to25497 = (function sablono$core$link_to25497(var_args){
var args__19546__auto__ = [];
var len__19539__auto___25500 = arguments.length;
var i__19540__auto___25501 = (0);
while(true){
if((i__19540__auto___25501 < len__19539__auto___25500)){
args__19546__auto__.push((arguments[i__19540__auto___25501]));

var G__25502 = (i__19540__auto___25501 + (1));
i__19540__auto___25501 = G__25502;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to25497.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.link_to25497.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to25497.cljs$lang$maxFixedArity = (1);

sablono.core.link_to25497.cljs$lang$applyTo = (function (seq25498){
var G__25499 = cljs.core.first.call(null,seq25498);
var seq25498__$1 = cljs.core.next.call(null,seq25498);
return sablono.core.link_to25497.cljs$core$IFn$_invoke$arity$variadic(G__25499,seq25498__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to25497);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to25503 = (function sablono$core$mail_to25503(var_args){
var args__19546__auto__ = [];
var len__19539__auto___25510 = arguments.length;
var i__19540__auto___25511 = (0);
while(true){
if((i__19540__auto___25511 < len__19539__auto___25510)){
args__19546__auto__.push((arguments[i__19540__auto___25511]));

var G__25512 = (i__19540__auto___25511 + (1));
i__19540__auto___25511 = G__25512;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to25503.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.mail_to25503.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__25506){
var vec__25507 = p__25506;
var content = cljs.core.nth.call(null,vec__25507,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18464__auto__ = content;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to25503.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to25503.cljs$lang$applyTo = (function (seq25504){
var G__25505 = cljs.core.first.call(null,seq25504);
var seq25504__$1 = cljs.core.next.call(null,seq25504);
return sablono.core.mail_to25503.cljs$core$IFn$_invoke$arity$variadic(G__25505,seq25504__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to25503);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list25513 = (function sablono$core$unordered_list25513(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19244__auto__ = (function sablono$core$unordered_list25513_$_iter__25518(s__25519){
return (new cljs.core.LazySeq(null,(function (){
var s__25519__$1 = s__25519;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25519__$1);
if(temp__4657__auto__){
var s__25519__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25519__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__25519__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__25521 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__25520 = (0);
while(true){
if((i__25520 < size__19243__auto__)){
var x = cljs.core._nth.call(null,c__19242__auto__,i__25520);
cljs.core.chunk_append.call(null,b__25521,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25522 = (i__25520 + (1));
i__25520 = G__25522;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25521),sablono$core$unordered_list25513_$_iter__25518.call(null,cljs.core.chunk_rest.call(null,s__25519__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25521),null);
}
} else {
var x = cljs.core.first.call(null,s__25519__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list25513_$_iter__25518.call(null,cljs.core.rest.call(null,s__25519__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list25513);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list25523 = (function sablono$core$ordered_list25523(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19244__auto__ = (function sablono$core$ordered_list25523_$_iter__25528(s__25529){
return (new cljs.core.LazySeq(null,(function (){
var s__25529__$1 = s__25529;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25529__$1);
if(temp__4657__auto__){
var s__25529__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25529__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__25529__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__25531 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__25530 = (0);
while(true){
if((i__25530 < size__19243__auto__)){
var x = cljs.core._nth.call(null,c__19242__auto__,i__25530);
cljs.core.chunk_append.call(null,b__25531,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25532 = (i__25530 + (1));
i__25530 = G__25532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25531),sablono$core$ordered_list25523_$_iter__25528.call(null,cljs.core.chunk_rest.call(null,s__25529__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25531),null);
}
} else {
var x = cljs.core.first.call(null,s__25529__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list25523_$_iter__25528.call(null,cljs.core.rest.call(null,s__25529__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list25523);
/**
 * Create an image element.
 */
sablono.core.image25533 = (function sablono$core$image25533(var_args){
var args25534 = [];
var len__19539__auto___25537 = arguments.length;
var i__19540__auto___25538 = (0);
while(true){
if((i__19540__auto___25538 < len__19539__auto___25537)){
args25534.push((arguments[i__19540__auto___25538]));

var G__25539 = (i__19540__auto___25538 + (1));
i__19540__auto___25538 = G__25539;
continue;
} else {
}
break;
}

var G__25536 = args25534.length;
switch (G__25536) {
case 1:
return sablono.core.image25533.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image25533.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25534.length)].join('')));

}
});

sablono.core.image25533.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image25533.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image25533.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image25533);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__25541_SHARP_,p2__25542_SHARP_){
return [cljs.core.str(p1__25541_SHARP_),cljs.core.str("["),cljs.core.str(p2__25542_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__25543_SHARP_,p2__25544_SHARP_){
return [cljs.core.str(p1__25543_SHARP_),cljs.core.str("-"),cljs.core.str(p2__25544_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18464__auto__ = value;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field25545 = (function sablono$core$color_field25545(var_args){
var args25546 = [];
var len__19539__auto___25613 = arguments.length;
var i__19540__auto___25614 = (0);
while(true){
if((i__19540__auto___25614 < len__19539__auto___25613)){
args25546.push((arguments[i__19540__auto___25614]));

var G__25615 = (i__19540__auto___25614 + (1));
i__19540__auto___25614 = G__25615;
continue;
} else {
}
break;
}

var G__25548 = args25546.length;
switch (G__25548) {
case 1:
return sablono.core.color_field25545.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field25545.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25546.length)].join('')));

}
});

sablono.core.color_field25545.cljs$core$IFn$_invoke$arity$1 = (function (name__23668__auto__){
return sablono.core.color_field25545.call(null,name__23668__auto__,null);
});

sablono.core.color_field25545.cljs$core$IFn$_invoke$arity$2 = (function (name__23668__auto__,value__23669__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__23668__auto__,value__23669__auto__);
});

sablono.core.color_field25545.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field25545);

/**
 * Creates a date input field.
 */
sablono.core.date_field25549 = (function sablono$core$date_field25549(var_args){
var args25550 = [];
var len__19539__auto___25617 = arguments.length;
var i__19540__auto___25618 = (0);
while(true){
if((i__19540__auto___25618 < len__19539__auto___25617)){
args25550.push((arguments[i__19540__auto___25618]));

var G__25619 = (i__19540__auto___25618 + (1));
i__19540__auto___25618 = G__25619;
continue;
} else {
}
break;
}

var G__25552 = args25550.length;
switch (G__25552) {
case 1:
return sablono.core.date_field25549.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field25549.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25550.length)].join('')));

}
});

sablono.core.date_field25549.cljs$core$IFn$_invoke$arity$1 = (function (name__23668__auto__){
return sablono.core.date_field25549.call(null,name__23668__auto__,null);
});

sablono.core.date_field25549.cljs$core$IFn$_invoke$arity$2 = (function (name__23668__auto__,value__23669__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__23668__auto__,value__23669__auto__);
});

sablono.core.date_field25549.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field25549);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field25553 = (function sablono$core$datetime_field25553(var_args){
var args25554 = [];
var len__19539__auto___25621 = arguments.length;
var i__19540__auto___25622 = (0);
while(true){
if((i__19540__auto___25622 < len__19539__auto___25621)){
args25554.push((arguments[i__19540__auto___25622]));

var G__25623 = (i__19540__auto___25622 + (1));
i__19540__auto___25622 = G__25623;
continue;
} else {
}
break;
}

var G__25556 = args25554.length;
switch (G__25556) {
case 1:
return sablono.core.datetime_field25553.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field25553.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25554.length)].join('')));

}
});

sablono.core.datetime_field25553.cljs$core$IFn$_invoke$arity$1 = (function (name__23668__auto__){
return sablono.core.datetime_field25553.call(null,name__23668__auto__,null);
});

sablono.core.datetime_field25553.cljs$core$IFn$_invoke$arity$2 = (function (name__23668__auto__,value__23669__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__23668__auto__,value__23669__auto__);
});

sablono.core.datetime_field25553.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field25553);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field25557 = (function sablono$core$datetime_local_field25557(var_args){
var args25558 = [];
var len__19539__auto___25625 = arguments.length;
var i__19540__auto___25626 = (0);
while(true){
if((i__19540__auto___25626 < len__19539__auto___25625)){
args25558.push((arguments[i__19540__auto___25626]));

var G__25627 = (i__19540__auto___25626 + (1));
i__19540__auto___25626 = G__25627;
continue;
} else {
}
break;
}

var G__25560 = args25558.length;
switch (G__25560) {
case 1:
return sablono.core.datetime_local_field25557.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field25557.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25558.length)].join('')));

}
});

sablono.core.datetime_local_field25557.cljs$core$IFn$_invoke$arity$1 = (function (name__23668__auto__){
return sablono.core.datetime_local_field25557.call(null,name__23668__auto__,null);
});

sablono.core.datetime_local_field25557.cljs$core$IFn$_invoke$arity$2 = (function (name__23668__auto__,value__23669__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__23668__auto__,value__23669__auto__);
});

sablono.core.datetime_local_field25557.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field25557);

/**
 * Creates a email input field.
 */
sablono.core.email_field25561 = (function sablono$core$email_field25561(var_args){
var args25562 = [];
var len__19539__auto___25629 = arguments.length;
var i__19540__auto___25630 = (0);
while(true){
if((i__19540__auto___25630 < len__19539__auto___25629)){
args25562.push((arguments[i__19540__auto___25630]));

var G__25631 = (i__19540__auto___25630 + (1));
i__19540__auto___25630 = G__25631;
continue;
} else {
}
break;
}

var G__25564 = args25562.length;
switch (G__25564) {
case 1:
return sablono.core.email_field25561.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field25561.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25562.length)].join('')));

}
});

sablono.core.email_field25561.cljs$core$IFn$_invoke$arity$1 = (function (name__23668__auto__){
return sablono.core.email_field25561.call(null,name__23668__auto__,null);
});

sablono.core.email_field25561.cljs$core$IFn$_invoke$arity$2 = (function (name__23668__auto__,value__23669__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__23668__auto__,value__23669__auto__);
});

sablono.core.email_field25561.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field25561);

/**
 * Creates a file input field.
 */
sablono.core.file_field25565 = (function sablono$core$file_field25565(var_args){
var args25566 = [];
var len__19539__auto___25633 = arguments.length;
var i__19540__auto___25634 = (0);
while(true){
if((i__19540__auto___25634 < len__19539__auto___25633)){
args25566.push((arguments[i__19540__auto___25634]));

var G__25635 = (i__19540__auto___25634 + (1));
i__19540__auto___25634 = G__25635;
continue;
} else {
}
break;
}

var G__25568 = args25566.length;
switch (G__25568) {
case 1:
return sablono.core.file_field25565.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field25565.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25566.length)].join('')));

}
});

sablono.core.file_field25565.cljs$core$IFn$_invoke$arity$1 = (function (name__23668__auto__){
return sablono.core.file_field25565.call(null,name__23668__auto__,null);
});

sablono.core.file_field25565.cljs$core$IFn$_invoke$arity$2 = (function (name__23668__auto__,value__23669__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__23668__auto__,value__23669__auto__);
});

sablono.core.file_field25565.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field25565);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field25569 = (function sablono$core$hidden_field25569(var_args){
var args25570 = [];
var len__19539__auto___25637 = arguments.length;
var i__19540__auto___25638 = (0);
while(true){
if((i__19540__auto___25638 < len__19539__auto___25637)){
args25570.push((arguments[i__19540__auto___25638]));

var G__25639 = (i__19540__auto___25638 + (1));
i__19540__auto___25638 = G__25639;
continue;
} else {
}
break;
}

var G__25572 = args25570.length;
switch (G__25572) {
case 1:
return sablono.core.hidden_field25569.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field25569.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25570.length)].join('')));

}
});

sablono.core.hidden_field25569.cljs$core$IFn$_invoke$arity$1 = (function (name__23668__auto__){
return sablono.core.hidden_field25569.call(null,name__23668__auto__,null);
});

sablono.core.hidden_field25569.cljs$core$IFn$_invoke$arity$2 = (function (name__23668__auto__,value__23669__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__23668__auto__,value__23669__auto__);
});

sablono.core.hidden_field25569.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field25569);

/**
 * Creates a month input field.
 */
sablono.core.month_field25573 = (function sablono$core$month_field25573(var_args){
var args25574 = [];
var len__19539__auto___25641 = arguments.length;
var i__19540__auto___25642 = (0);
while(true){
if((i__19540__auto___25642 < len__19539__auto___25641)){
args25574.push((arguments[i__19540__auto___25642]));

var G__25643 = (i__19540__auto___25642 + (1));
i__19540__auto___25642 = G__25643;
continue;
} else {
}
break;
}

var G__25576 = args25574.length;
switch (G__25576) {
case 1:
return sablono.core.month_field25573.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field25573.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25574.length)].join('')));

}
});

sablono.core.month_field25573.cljs$core$IFn$_invoke$arity$1 = (function (name__23668__auto__){
return sablono.core.month_field25573.call(null,name__23668__auto__,null);
});

sablono.core.month_field25573.cljs$core$IFn$_invoke$arity$2 = (function (name__23668__auto__,value__23669__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__23668__auto__,value__23669__auto__);
});

sablono.core.month_field25573.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field25573);

/**
 * Creates a number input field.
 */
sablono.core.number_field25577 = (function sablono$core$number_field25577(var_args){
var args25578 = [];
var len__19539__auto___25645 = arguments.length;
var i__19540__auto___25646 = (0);
while(true){
if((i__19540__auto___25646 < len__19539__auto___25645)){
args25578.push((arguments[i__19540__auto___25646]));

var G__25647 = (i__19540__auto___25646 + (1));
i__19540__auto___25646 = G__25647;
continue;
} else {
}
break;
}

var G__25580 = args25578.length;
switch (G__25580) {
case 1:
return sablono.core.number_field25577.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field25577.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25578.length)].join('')));

}
});

sablono.core.number_field25577.cljs$core$IFn$_invoke$arity$1 = (function (name__23668__auto__){
return sablono.core.number_field25577.call(null,name__23668__auto__,null);
});

sablono.core.number_field25577.cljs$core$IFn$_invoke$arity$2 = (function (name__23668__auto__,value__23669__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__23668__auto__,value__23669__auto__);
});

sablono.core.number_field25577.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field25577);

/**
 * Creates a password input field.
 */
sablono.core.password_field25581 = (function sablono$core$password_field25581(var_args){
var args25582 = [];
var len__19539__auto___25649 = arguments.length;
var i__19540__auto___25650 = (0);
while(true){
if((i__19540__auto___25650 < len__19539__auto___25649)){
args25582.push((arguments[i__19540__auto___25650]));

var G__25651 = (i__19540__auto___25650 + (1));
i__19540__auto___25650 = G__25651;
continue;
} else {
}
break;
}

var G__25584 = args25582.length;
switch (G__25584) {
case 1:
return sablono.core.password_field25581.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field25581.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25582.length)].join('')));

}
});

sablono.core.password_field25581.cljs$core$IFn$_invoke$arity$1 = (function (name__23668__auto__){
return sablono.core.password_field25581.call(null,name__23668__auto__,null);
});

sablono.core.password_field25581.cljs$core$IFn$_invoke$arity$2 = (function (name__23668__auto__,value__23669__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__23668__auto__,value__23669__auto__);
});

sablono.core.password_field25581.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field25581);

/**
 * Creates a range input field.
 */
sablono.core.range_field25585 = (function sablono$core$range_field25585(var_args){
var args25586 = [];
var len__19539__auto___25653 = arguments.length;
var i__19540__auto___25654 = (0);
while(true){
if((i__19540__auto___25654 < len__19539__auto___25653)){
args25586.push((arguments[i__19540__auto___25654]));

var G__25655 = (i__19540__auto___25654 + (1));
i__19540__auto___25654 = G__25655;
continue;
} else {
}
break;
}

var G__25588 = args25586.length;
switch (G__25588) {
case 1:
return sablono.core.range_field25585.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field25585.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25586.length)].join('')));

}
});

sablono.core.range_field25585.cljs$core$IFn$_invoke$arity$1 = (function (name__23668__auto__){
return sablono.core.range_field25585.call(null,name__23668__auto__,null);
});

sablono.core.range_field25585.cljs$core$IFn$_invoke$arity$2 = (function (name__23668__auto__,value__23669__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__23668__auto__,value__23669__auto__);
});

sablono.core.range_field25585.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field25585);

/**
 * Creates a search input field.
 */
sablono.core.search_field25589 = (function sablono$core$search_field25589(var_args){
var args25590 = [];
var len__19539__auto___25657 = arguments.length;
var i__19540__auto___25658 = (0);
while(true){
if((i__19540__auto___25658 < len__19539__auto___25657)){
args25590.push((arguments[i__19540__auto___25658]));

var G__25659 = (i__19540__auto___25658 + (1));
i__19540__auto___25658 = G__25659;
continue;
} else {
}
break;
}

var G__25592 = args25590.length;
switch (G__25592) {
case 1:
return sablono.core.search_field25589.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field25589.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25590.length)].join('')));

}
});

sablono.core.search_field25589.cljs$core$IFn$_invoke$arity$1 = (function (name__23668__auto__){
return sablono.core.search_field25589.call(null,name__23668__auto__,null);
});

sablono.core.search_field25589.cljs$core$IFn$_invoke$arity$2 = (function (name__23668__auto__,value__23669__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__23668__auto__,value__23669__auto__);
});

sablono.core.search_field25589.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field25589);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field25593 = (function sablono$core$tel_field25593(var_args){
var args25594 = [];
var len__19539__auto___25661 = arguments.length;
var i__19540__auto___25662 = (0);
while(true){
if((i__19540__auto___25662 < len__19539__auto___25661)){
args25594.push((arguments[i__19540__auto___25662]));

var G__25663 = (i__19540__auto___25662 + (1));
i__19540__auto___25662 = G__25663;
continue;
} else {
}
break;
}

var G__25596 = args25594.length;
switch (G__25596) {
case 1:
return sablono.core.tel_field25593.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field25593.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25594.length)].join('')));

}
});

sablono.core.tel_field25593.cljs$core$IFn$_invoke$arity$1 = (function (name__23668__auto__){
return sablono.core.tel_field25593.call(null,name__23668__auto__,null);
});

sablono.core.tel_field25593.cljs$core$IFn$_invoke$arity$2 = (function (name__23668__auto__,value__23669__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__23668__auto__,value__23669__auto__);
});

sablono.core.tel_field25593.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field25593);

/**
 * Creates a text input field.
 */
sablono.core.text_field25597 = (function sablono$core$text_field25597(var_args){
var args25598 = [];
var len__19539__auto___25665 = arguments.length;
var i__19540__auto___25666 = (0);
while(true){
if((i__19540__auto___25666 < len__19539__auto___25665)){
args25598.push((arguments[i__19540__auto___25666]));

var G__25667 = (i__19540__auto___25666 + (1));
i__19540__auto___25666 = G__25667;
continue;
} else {
}
break;
}

var G__25600 = args25598.length;
switch (G__25600) {
case 1:
return sablono.core.text_field25597.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field25597.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25598.length)].join('')));

}
});

sablono.core.text_field25597.cljs$core$IFn$_invoke$arity$1 = (function (name__23668__auto__){
return sablono.core.text_field25597.call(null,name__23668__auto__,null);
});

sablono.core.text_field25597.cljs$core$IFn$_invoke$arity$2 = (function (name__23668__auto__,value__23669__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__23668__auto__,value__23669__auto__);
});

sablono.core.text_field25597.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field25597);

/**
 * Creates a time input field.
 */
sablono.core.time_field25601 = (function sablono$core$time_field25601(var_args){
var args25602 = [];
var len__19539__auto___25669 = arguments.length;
var i__19540__auto___25670 = (0);
while(true){
if((i__19540__auto___25670 < len__19539__auto___25669)){
args25602.push((arguments[i__19540__auto___25670]));

var G__25671 = (i__19540__auto___25670 + (1));
i__19540__auto___25670 = G__25671;
continue;
} else {
}
break;
}

var G__25604 = args25602.length;
switch (G__25604) {
case 1:
return sablono.core.time_field25601.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field25601.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25602.length)].join('')));

}
});

sablono.core.time_field25601.cljs$core$IFn$_invoke$arity$1 = (function (name__23668__auto__){
return sablono.core.time_field25601.call(null,name__23668__auto__,null);
});

sablono.core.time_field25601.cljs$core$IFn$_invoke$arity$2 = (function (name__23668__auto__,value__23669__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__23668__auto__,value__23669__auto__);
});

sablono.core.time_field25601.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field25601);

/**
 * Creates a url input field.
 */
sablono.core.url_field25605 = (function sablono$core$url_field25605(var_args){
var args25606 = [];
var len__19539__auto___25673 = arguments.length;
var i__19540__auto___25674 = (0);
while(true){
if((i__19540__auto___25674 < len__19539__auto___25673)){
args25606.push((arguments[i__19540__auto___25674]));

var G__25675 = (i__19540__auto___25674 + (1));
i__19540__auto___25674 = G__25675;
continue;
} else {
}
break;
}

var G__25608 = args25606.length;
switch (G__25608) {
case 1:
return sablono.core.url_field25605.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field25605.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25606.length)].join('')));

}
});

sablono.core.url_field25605.cljs$core$IFn$_invoke$arity$1 = (function (name__23668__auto__){
return sablono.core.url_field25605.call(null,name__23668__auto__,null);
});

sablono.core.url_field25605.cljs$core$IFn$_invoke$arity$2 = (function (name__23668__auto__,value__23669__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__23668__auto__,value__23669__auto__);
});

sablono.core.url_field25605.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field25605);

/**
 * Creates a week input field.
 */
sablono.core.week_field25609 = (function sablono$core$week_field25609(var_args){
var args25610 = [];
var len__19539__auto___25677 = arguments.length;
var i__19540__auto___25678 = (0);
while(true){
if((i__19540__auto___25678 < len__19539__auto___25677)){
args25610.push((arguments[i__19540__auto___25678]));

var G__25679 = (i__19540__auto___25678 + (1));
i__19540__auto___25678 = G__25679;
continue;
} else {
}
break;
}

var G__25612 = args25610.length;
switch (G__25612) {
case 1:
return sablono.core.week_field25609.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field25609.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25610.length)].join('')));

}
});

sablono.core.week_field25609.cljs$core$IFn$_invoke$arity$1 = (function (name__23668__auto__){
return sablono.core.week_field25609.call(null,name__23668__auto__,null);
});

sablono.core.week_field25609.cljs$core$IFn$_invoke$arity$2 = (function (name__23668__auto__,value__23669__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__23668__auto__,value__23669__auto__);
});

sablono.core.week_field25609.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field25609);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box25681 = (function sablono$core$check_box25681(var_args){
var args25682 = [];
var len__19539__auto___25685 = arguments.length;
var i__19540__auto___25686 = (0);
while(true){
if((i__19540__auto___25686 < len__19539__auto___25685)){
args25682.push((arguments[i__19540__auto___25686]));

var G__25687 = (i__19540__auto___25686 + (1));
i__19540__auto___25686 = G__25687;
continue;
} else {
}
break;
}

var G__25684 = args25682.length;
switch (G__25684) {
case 1:
return sablono.core.check_box25681.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box25681.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box25681.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25682.length)].join('')));

}
});

sablono.core.check_box25681.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box25681.call(null,name,null);
});

sablono.core.check_box25681.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box25681.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box25681.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18464__auto__ = value;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box25681.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box25681);
/**
 * Creates a radio button.
 */
sablono.core.radio_button25689 = (function sablono$core$radio_button25689(var_args){
var args25690 = [];
var len__19539__auto___25693 = arguments.length;
var i__19540__auto___25694 = (0);
while(true){
if((i__19540__auto___25694 < len__19539__auto___25693)){
args25690.push((arguments[i__19540__auto___25694]));

var G__25695 = (i__19540__auto___25694 + (1));
i__19540__auto___25694 = G__25695;
continue;
} else {
}
break;
}

var G__25692 = args25690.length;
switch (G__25692) {
case 1:
return sablono.core.radio_button25689.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button25689.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button25689.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25690.length)].join('')));

}
});

sablono.core.radio_button25689.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button25689.call(null,group,null);
});

sablono.core.radio_button25689.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button25689.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button25689.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18464__auto__ = value;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button25689.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button25689);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options25697 = (function sablono$core$select_options25697(coll){
var iter__19244__auto__ = (function sablono$core$select_options25697_$_iter__25714(s__25715){
return (new cljs.core.LazySeq(null,(function (){
var s__25715__$1 = s__25715;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25715__$1);
if(temp__4657__auto__){
var s__25715__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25715__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__25715__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__25717 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__25716 = (0);
while(true){
if((i__25716 < size__19243__auto__)){
var x = cljs.core._nth.call(null,c__19242__auto__,i__25716);
cljs.core.chunk_append.call(null,b__25717,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25724 = x;
var text = cljs.core.nth.call(null,vec__25724,(0),null);
var val = cljs.core.nth.call(null,vec__25724,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25724,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options25697.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__25730 = (i__25716 + (1));
i__25716 = G__25730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25717),sablono$core$select_options25697_$_iter__25714.call(null,cljs.core.chunk_rest.call(null,s__25715__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25717),null);
}
} else {
var x = cljs.core.first.call(null,s__25715__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25727 = x;
var text = cljs.core.nth.call(null,vec__25727,(0),null);
var val = cljs.core.nth.call(null,vec__25727,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25727,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options25697.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options25697_$_iter__25714.call(null,cljs.core.rest.call(null,s__25715__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options25697);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down25731 = (function sablono$core$drop_down25731(var_args){
var args25732 = [];
var len__19539__auto___25735 = arguments.length;
var i__19540__auto___25736 = (0);
while(true){
if((i__19540__auto___25736 < len__19539__auto___25735)){
args25732.push((arguments[i__19540__auto___25736]));

var G__25737 = (i__19540__auto___25736 + (1));
i__19540__auto___25736 = G__25737;
continue;
} else {
}
break;
}

var G__25734 = args25732.length;
switch (G__25734) {
case 2:
return sablono.core.drop_down25731.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down25731.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25732.length)].join('')));

}
});

sablono.core.drop_down25731.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down25731.call(null,name,options,null);
});

sablono.core.drop_down25731.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down25731.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down25731);
/**
 * Creates a text area element.
 */
sablono.core.text_area25739 = (function sablono$core$text_area25739(var_args){
var args25740 = [];
var len__19539__auto___25743 = arguments.length;
var i__19540__auto___25744 = (0);
while(true){
if((i__19540__auto___25744 < len__19539__auto___25743)){
args25740.push((arguments[i__19540__auto___25744]));

var G__25745 = (i__19540__auto___25744 + (1));
i__19540__auto___25744 = G__25745;
continue;
} else {
}
break;
}

var G__25742 = args25740.length;
switch (G__25742) {
case 1:
return sablono.core.text_area25739.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area25739.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25740.length)].join('')));

}
});

sablono.core.text_area25739.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area25739.call(null,name,null);
});

sablono.core.text_area25739.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18464__auto__ = value;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area25739.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area25739);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label25747 = (function sablono$core$label25747(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label25747);
/**
 * Creates a submit button.
 */
sablono.core.submit_button25748 = (function sablono$core$submit_button25748(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button25748);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button25749 = (function sablono$core$reset_button25749(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button25749);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to25750 = (function sablono$core$form_to25750(var_args){
var args__19546__auto__ = [];
var len__19539__auto___25757 = arguments.length;
var i__19540__auto___25758 = (0);
while(true){
if((i__19540__auto___25758 < len__19539__auto___25757)){
args__19546__auto__.push((arguments[i__19540__auto___25758]));

var G__25759 = (i__19540__auto___25758 + (1));
i__19540__auto___25758 = G__25759;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to25750.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.form_to25750.cljs$core$IFn$_invoke$arity$variadic = (function (p__25753,body){
var vec__25754 = p__25753;
var method = cljs.core.nth.call(null,vec__25754,(0),null);
var action = cljs.core.nth.call(null,vec__25754,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to25750.cljs$lang$maxFixedArity = (1);

sablono.core.form_to25750.cljs$lang$applyTo = (function (seq25751){
var G__25752 = cljs.core.first.call(null,seq25751);
var seq25751__$1 = cljs.core.next.call(null,seq25751);
return sablono.core.form_to25750.cljs$core$IFn$_invoke$arity$variadic(G__25752,seq25751__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to25750);

//# sourceMappingURL=core.js.map