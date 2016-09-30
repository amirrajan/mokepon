// Compiled by ClojureScript 1.9.76 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__23493__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__23490 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__23491 = cljs.core.seq.call(null,vec__23490);
var first__23492 = cljs.core.first.call(null,seq__23491);
var seq__23491__$1 = cljs.core.next.call(null,seq__23491);
var tag = first__23492;
var body = seq__23491__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__23493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23494__i = 0, G__23494__a = new Array(arguments.length -  0);
while (G__23494__i < G__23494__a.length) {G__23494__a[G__23494__i] = arguments[G__23494__i + 0]; ++G__23494__i;}
  args = new cljs.core.IndexedSeq(G__23494__a,0);
} 
return G__23493__delegate.call(this,args);};
G__23493.cljs$lang$maxFixedArity = 0;
G__23493.cljs$lang$applyTo = (function (arglist__23495){
var args = cljs.core.seq(arglist__23495);
return G__23493__delegate(args);
});
G__23493.cljs$core$IFn$_invoke$arity$variadic = G__23493__delegate;
return G__23493;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19244__auto__ = (function sablono$core$update_arglists_$_iter__23500(s__23501){
return (new cljs.core.LazySeq(null,(function (){
var s__23501__$1 = s__23501;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23501__$1);
if(temp__4657__auto__){
var s__23501__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23501__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__23501__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__23503 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__23502 = (0);
while(true){
if((i__23502 < size__19243__auto__)){
var args = cljs.core._nth.call(null,c__19242__auto__,i__23502);
cljs.core.chunk_append.call(null,b__23503,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__23504 = (i__23502 + (1));
i__23502 = G__23504;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23503),sablono$core$update_arglists_$_iter__23500.call(null,cljs.core.chunk_rest.call(null,s__23501__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23503),null);
}
} else {
var args = cljs.core.first.call(null,s__23501__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__23500.call(null,cljs.core.rest.call(null,s__23501__$2)));
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
var len__19539__auto___23510 = arguments.length;
var i__19540__auto___23511 = (0);
while(true){
if((i__19540__auto___23511 < len__19539__auto___23510)){
args__19546__auto__.push((arguments[i__19540__auto___23511]));

var G__23512 = (i__19540__auto___23511 + (1));
i__19540__auto___23511 = G__23512;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19244__auto__ = (function sablono$core$iter__23506(s__23507){
return (new cljs.core.LazySeq(null,(function (){
var s__23507__$1 = s__23507;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23507__$1);
if(temp__4657__auto__){
var s__23507__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23507__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__23507__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__23509 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__23508 = (0);
while(true){
if((i__23508 < size__19243__auto__)){
var style = cljs.core._nth.call(null,c__19242__auto__,i__23508);
cljs.core.chunk_append.call(null,b__23509,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__23513 = (i__23508 + (1));
i__23508 = G__23513;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23509),sablono$core$iter__23506.call(null,cljs.core.chunk_rest.call(null,s__23507__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23509),null);
}
} else {
var style = cljs.core.first.call(null,s__23507__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__23506.call(null,cljs.core.rest.call(null,s__23507__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq23505){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23505));
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
sablono.core.link_to23514 = (function sablono$core$link_to23514(var_args){
var args__19546__auto__ = [];
var len__19539__auto___23517 = arguments.length;
var i__19540__auto___23518 = (0);
while(true){
if((i__19540__auto___23518 < len__19539__auto___23517)){
args__19546__auto__.push((arguments[i__19540__auto___23518]));

var G__23519 = (i__19540__auto___23518 + (1));
i__19540__auto___23518 = G__23519;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to23514.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.link_to23514.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to23514.cljs$lang$maxFixedArity = (1);

sablono.core.link_to23514.cljs$lang$applyTo = (function (seq23515){
var G__23516 = cljs.core.first.call(null,seq23515);
var seq23515__$1 = cljs.core.next.call(null,seq23515);
return sablono.core.link_to23514.cljs$core$IFn$_invoke$arity$variadic(G__23516,seq23515__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to23514);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to23520 = (function sablono$core$mail_to23520(var_args){
var args__19546__auto__ = [];
var len__19539__auto___23527 = arguments.length;
var i__19540__auto___23528 = (0);
while(true){
if((i__19540__auto___23528 < len__19539__auto___23527)){
args__19546__auto__.push((arguments[i__19540__auto___23528]));

var G__23529 = (i__19540__auto___23528 + (1));
i__19540__auto___23528 = G__23529;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to23520.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.mail_to23520.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__23523){
var vec__23524 = p__23523;
var content = cljs.core.nth.call(null,vec__23524,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18464__auto__ = content;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to23520.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to23520.cljs$lang$applyTo = (function (seq23521){
var G__23522 = cljs.core.first.call(null,seq23521);
var seq23521__$1 = cljs.core.next.call(null,seq23521);
return sablono.core.mail_to23520.cljs$core$IFn$_invoke$arity$variadic(G__23522,seq23521__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to23520);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list23530 = (function sablono$core$unordered_list23530(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19244__auto__ = (function sablono$core$unordered_list23530_$_iter__23535(s__23536){
return (new cljs.core.LazySeq(null,(function (){
var s__23536__$1 = s__23536;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23536__$1);
if(temp__4657__auto__){
var s__23536__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23536__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__23536__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__23538 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__23537 = (0);
while(true){
if((i__23537 < size__19243__auto__)){
var x = cljs.core._nth.call(null,c__19242__auto__,i__23537);
cljs.core.chunk_append.call(null,b__23538,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23539 = (i__23537 + (1));
i__23537 = G__23539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23538),sablono$core$unordered_list23530_$_iter__23535.call(null,cljs.core.chunk_rest.call(null,s__23536__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23538),null);
}
} else {
var x = cljs.core.first.call(null,s__23536__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list23530_$_iter__23535.call(null,cljs.core.rest.call(null,s__23536__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list23530);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list23540 = (function sablono$core$ordered_list23540(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19244__auto__ = (function sablono$core$ordered_list23540_$_iter__23545(s__23546){
return (new cljs.core.LazySeq(null,(function (){
var s__23546__$1 = s__23546;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23546__$1);
if(temp__4657__auto__){
var s__23546__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23546__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__23546__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__23548 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__23547 = (0);
while(true){
if((i__23547 < size__19243__auto__)){
var x = cljs.core._nth.call(null,c__19242__auto__,i__23547);
cljs.core.chunk_append.call(null,b__23548,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23549 = (i__23547 + (1));
i__23547 = G__23549;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23548),sablono$core$ordered_list23540_$_iter__23545.call(null,cljs.core.chunk_rest.call(null,s__23546__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23548),null);
}
} else {
var x = cljs.core.first.call(null,s__23546__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list23540_$_iter__23545.call(null,cljs.core.rest.call(null,s__23546__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list23540);
/**
 * Create an image element.
 */
sablono.core.image23550 = (function sablono$core$image23550(var_args){
var args23551 = [];
var len__19539__auto___23554 = arguments.length;
var i__19540__auto___23555 = (0);
while(true){
if((i__19540__auto___23555 < len__19539__auto___23554)){
args23551.push((arguments[i__19540__auto___23555]));

var G__23556 = (i__19540__auto___23555 + (1));
i__19540__auto___23555 = G__23556;
continue;
} else {
}
break;
}

var G__23553 = args23551.length;
switch (G__23553) {
case 1:
return sablono.core.image23550.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image23550.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23551.length)].join('')));

}
});

sablono.core.image23550.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image23550.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image23550.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image23550);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__23558_SHARP_,p2__23559_SHARP_){
return [cljs.core.str(p1__23558_SHARP_),cljs.core.str("["),cljs.core.str(p2__23559_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__23560_SHARP_,p2__23561_SHARP_){
return [cljs.core.str(p1__23560_SHARP_),cljs.core.str("-"),cljs.core.str(p2__23561_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field23562 = (function sablono$core$color_field23562(var_args){
var args23563 = [];
var len__19539__auto___23630 = arguments.length;
var i__19540__auto___23631 = (0);
while(true){
if((i__19540__auto___23631 < len__19539__auto___23630)){
args23563.push((arguments[i__19540__auto___23631]));

var G__23632 = (i__19540__auto___23631 + (1));
i__19540__auto___23631 = G__23632;
continue;
} else {
}
break;
}

var G__23565 = args23563.length;
switch (G__23565) {
case 1:
return sablono.core.color_field23562.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field23562.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23563.length)].join('')));

}
});

sablono.core.color_field23562.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.color_field23562.call(null,name__20270__auto__,null);
});

sablono.core.color_field23562.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.color_field23562.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field23562);

/**
 * Creates a date input field.
 */
sablono.core.date_field23566 = (function sablono$core$date_field23566(var_args){
var args23567 = [];
var len__19539__auto___23634 = arguments.length;
var i__19540__auto___23635 = (0);
while(true){
if((i__19540__auto___23635 < len__19539__auto___23634)){
args23567.push((arguments[i__19540__auto___23635]));

var G__23636 = (i__19540__auto___23635 + (1));
i__19540__auto___23635 = G__23636;
continue;
} else {
}
break;
}

var G__23569 = args23567.length;
switch (G__23569) {
case 1:
return sablono.core.date_field23566.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field23566.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23567.length)].join('')));

}
});

sablono.core.date_field23566.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.date_field23566.call(null,name__20270__auto__,null);
});

sablono.core.date_field23566.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.date_field23566.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field23566);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field23570 = (function sablono$core$datetime_field23570(var_args){
var args23571 = [];
var len__19539__auto___23638 = arguments.length;
var i__19540__auto___23639 = (0);
while(true){
if((i__19540__auto___23639 < len__19539__auto___23638)){
args23571.push((arguments[i__19540__auto___23639]));

var G__23640 = (i__19540__auto___23639 + (1));
i__19540__auto___23639 = G__23640;
continue;
} else {
}
break;
}

var G__23573 = args23571.length;
switch (G__23573) {
case 1:
return sablono.core.datetime_field23570.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field23570.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23571.length)].join('')));

}
});

sablono.core.datetime_field23570.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.datetime_field23570.call(null,name__20270__auto__,null);
});

sablono.core.datetime_field23570.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.datetime_field23570.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field23570);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field23574 = (function sablono$core$datetime_local_field23574(var_args){
var args23575 = [];
var len__19539__auto___23642 = arguments.length;
var i__19540__auto___23643 = (0);
while(true){
if((i__19540__auto___23643 < len__19539__auto___23642)){
args23575.push((arguments[i__19540__auto___23643]));

var G__23644 = (i__19540__auto___23643 + (1));
i__19540__auto___23643 = G__23644;
continue;
} else {
}
break;
}

var G__23577 = args23575.length;
switch (G__23577) {
case 1:
return sablono.core.datetime_local_field23574.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field23574.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23575.length)].join('')));

}
});

sablono.core.datetime_local_field23574.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.datetime_local_field23574.call(null,name__20270__auto__,null);
});

sablono.core.datetime_local_field23574.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.datetime_local_field23574.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field23574);

/**
 * Creates a email input field.
 */
sablono.core.email_field23578 = (function sablono$core$email_field23578(var_args){
var args23579 = [];
var len__19539__auto___23646 = arguments.length;
var i__19540__auto___23647 = (0);
while(true){
if((i__19540__auto___23647 < len__19539__auto___23646)){
args23579.push((arguments[i__19540__auto___23647]));

var G__23648 = (i__19540__auto___23647 + (1));
i__19540__auto___23647 = G__23648;
continue;
} else {
}
break;
}

var G__23581 = args23579.length;
switch (G__23581) {
case 1:
return sablono.core.email_field23578.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field23578.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23579.length)].join('')));

}
});

sablono.core.email_field23578.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.email_field23578.call(null,name__20270__auto__,null);
});

sablono.core.email_field23578.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.email_field23578.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field23578);

/**
 * Creates a file input field.
 */
sablono.core.file_field23582 = (function sablono$core$file_field23582(var_args){
var args23583 = [];
var len__19539__auto___23650 = arguments.length;
var i__19540__auto___23651 = (0);
while(true){
if((i__19540__auto___23651 < len__19539__auto___23650)){
args23583.push((arguments[i__19540__auto___23651]));

var G__23652 = (i__19540__auto___23651 + (1));
i__19540__auto___23651 = G__23652;
continue;
} else {
}
break;
}

var G__23585 = args23583.length;
switch (G__23585) {
case 1:
return sablono.core.file_field23582.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field23582.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23583.length)].join('')));

}
});

sablono.core.file_field23582.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.file_field23582.call(null,name__20270__auto__,null);
});

sablono.core.file_field23582.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.file_field23582.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field23582);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field23586 = (function sablono$core$hidden_field23586(var_args){
var args23587 = [];
var len__19539__auto___23654 = arguments.length;
var i__19540__auto___23655 = (0);
while(true){
if((i__19540__auto___23655 < len__19539__auto___23654)){
args23587.push((arguments[i__19540__auto___23655]));

var G__23656 = (i__19540__auto___23655 + (1));
i__19540__auto___23655 = G__23656;
continue;
} else {
}
break;
}

var G__23589 = args23587.length;
switch (G__23589) {
case 1:
return sablono.core.hidden_field23586.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field23586.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23587.length)].join('')));

}
});

sablono.core.hidden_field23586.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.hidden_field23586.call(null,name__20270__auto__,null);
});

sablono.core.hidden_field23586.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.hidden_field23586.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field23586);

/**
 * Creates a month input field.
 */
sablono.core.month_field23590 = (function sablono$core$month_field23590(var_args){
var args23591 = [];
var len__19539__auto___23658 = arguments.length;
var i__19540__auto___23659 = (0);
while(true){
if((i__19540__auto___23659 < len__19539__auto___23658)){
args23591.push((arguments[i__19540__auto___23659]));

var G__23660 = (i__19540__auto___23659 + (1));
i__19540__auto___23659 = G__23660;
continue;
} else {
}
break;
}

var G__23593 = args23591.length;
switch (G__23593) {
case 1:
return sablono.core.month_field23590.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field23590.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23591.length)].join('')));

}
});

sablono.core.month_field23590.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.month_field23590.call(null,name__20270__auto__,null);
});

sablono.core.month_field23590.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.month_field23590.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field23590);

/**
 * Creates a number input field.
 */
sablono.core.number_field23594 = (function sablono$core$number_field23594(var_args){
var args23595 = [];
var len__19539__auto___23662 = arguments.length;
var i__19540__auto___23663 = (0);
while(true){
if((i__19540__auto___23663 < len__19539__auto___23662)){
args23595.push((arguments[i__19540__auto___23663]));

var G__23664 = (i__19540__auto___23663 + (1));
i__19540__auto___23663 = G__23664;
continue;
} else {
}
break;
}

var G__23597 = args23595.length;
switch (G__23597) {
case 1:
return sablono.core.number_field23594.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field23594.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23595.length)].join('')));

}
});

sablono.core.number_field23594.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.number_field23594.call(null,name__20270__auto__,null);
});

sablono.core.number_field23594.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.number_field23594.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field23594);

/**
 * Creates a password input field.
 */
sablono.core.password_field23598 = (function sablono$core$password_field23598(var_args){
var args23599 = [];
var len__19539__auto___23666 = arguments.length;
var i__19540__auto___23667 = (0);
while(true){
if((i__19540__auto___23667 < len__19539__auto___23666)){
args23599.push((arguments[i__19540__auto___23667]));

var G__23668 = (i__19540__auto___23667 + (1));
i__19540__auto___23667 = G__23668;
continue;
} else {
}
break;
}

var G__23601 = args23599.length;
switch (G__23601) {
case 1:
return sablono.core.password_field23598.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field23598.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23599.length)].join('')));

}
});

sablono.core.password_field23598.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.password_field23598.call(null,name__20270__auto__,null);
});

sablono.core.password_field23598.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.password_field23598.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field23598);

/**
 * Creates a range input field.
 */
sablono.core.range_field23602 = (function sablono$core$range_field23602(var_args){
var args23603 = [];
var len__19539__auto___23670 = arguments.length;
var i__19540__auto___23671 = (0);
while(true){
if((i__19540__auto___23671 < len__19539__auto___23670)){
args23603.push((arguments[i__19540__auto___23671]));

var G__23672 = (i__19540__auto___23671 + (1));
i__19540__auto___23671 = G__23672;
continue;
} else {
}
break;
}

var G__23605 = args23603.length;
switch (G__23605) {
case 1:
return sablono.core.range_field23602.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field23602.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23603.length)].join('')));

}
});

sablono.core.range_field23602.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.range_field23602.call(null,name__20270__auto__,null);
});

sablono.core.range_field23602.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.range_field23602.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field23602);

/**
 * Creates a search input field.
 */
sablono.core.search_field23606 = (function sablono$core$search_field23606(var_args){
var args23607 = [];
var len__19539__auto___23674 = arguments.length;
var i__19540__auto___23675 = (0);
while(true){
if((i__19540__auto___23675 < len__19539__auto___23674)){
args23607.push((arguments[i__19540__auto___23675]));

var G__23676 = (i__19540__auto___23675 + (1));
i__19540__auto___23675 = G__23676;
continue;
} else {
}
break;
}

var G__23609 = args23607.length;
switch (G__23609) {
case 1:
return sablono.core.search_field23606.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field23606.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23607.length)].join('')));

}
});

sablono.core.search_field23606.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.search_field23606.call(null,name__20270__auto__,null);
});

sablono.core.search_field23606.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.search_field23606.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field23606);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field23610 = (function sablono$core$tel_field23610(var_args){
var args23611 = [];
var len__19539__auto___23678 = arguments.length;
var i__19540__auto___23679 = (0);
while(true){
if((i__19540__auto___23679 < len__19539__auto___23678)){
args23611.push((arguments[i__19540__auto___23679]));

var G__23680 = (i__19540__auto___23679 + (1));
i__19540__auto___23679 = G__23680;
continue;
} else {
}
break;
}

var G__23613 = args23611.length;
switch (G__23613) {
case 1:
return sablono.core.tel_field23610.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field23610.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23611.length)].join('')));

}
});

sablono.core.tel_field23610.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.tel_field23610.call(null,name__20270__auto__,null);
});

sablono.core.tel_field23610.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.tel_field23610.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field23610);

/**
 * Creates a text input field.
 */
sablono.core.text_field23614 = (function sablono$core$text_field23614(var_args){
var args23615 = [];
var len__19539__auto___23682 = arguments.length;
var i__19540__auto___23683 = (0);
while(true){
if((i__19540__auto___23683 < len__19539__auto___23682)){
args23615.push((arguments[i__19540__auto___23683]));

var G__23684 = (i__19540__auto___23683 + (1));
i__19540__auto___23683 = G__23684;
continue;
} else {
}
break;
}

var G__23617 = args23615.length;
switch (G__23617) {
case 1:
return sablono.core.text_field23614.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field23614.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23615.length)].join('')));

}
});

sablono.core.text_field23614.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.text_field23614.call(null,name__20270__auto__,null);
});

sablono.core.text_field23614.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.text_field23614.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field23614);

/**
 * Creates a time input field.
 */
sablono.core.time_field23618 = (function sablono$core$time_field23618(var_args){
var args23619 = [];
var len__19539__auto___23686 = arguments.length;
var i__19540__auto___23687 = (0);
while(true){
if((i__19540__auto___23687 < len__19539__auto___23686)){
args23619.push((arguments[i__19540__auto___23687]));

var G__23688 = (i__19540__auto___23687 + (1));
i__19540__auto___23687 = G__23688;
continue;
} else {
}
break;
}

var G__23621 = args23619.length;
switch (G__23621) {
case 1:
return sablono.core.time_field23618.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field23618.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23619.length)].join('')));

}
});

sablono.core.time_field23618.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.time_field23618.call(null,name__20270__auto__,null);
});

sablono.core.time_field23618.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.time_field23618.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field23618);

/**
 * Creates a url input field.
 */
sablono.core.url_field23622 = (function sablono$core$url_field23622(var_args){
var args23623 = [];
var len__19539__auto___23690 = arguments.length;
var i__19540__auto___23691 = (0);
while(true){
if((i__19540__auto___23691 < len__19539__auto___23690)){
args23623.push((arguments[i__19540__auto___23691]));

var G__23692 = (i__19540__auto___23691 + (1));
i__19540__auto___23691 = G__23692;
continue;
} else {
}
break;
}

var G__23625 = args23623.length;
switch (G__23625) {
case 1:
return sablono.core.url_field23622.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field23622.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23623.length)].join('')));

}
});

sablono.core.url_field23622.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.url_field23622.call(null,name__20270__auto__,null);
});

sablono.core.url_field23622.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.url_field23622.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field23622);

/**
 * Creates a week input field.
 */
sablono.core.week_field23626 = (function sablono$core$week_field23626(var_args){
var args23627 = [];
var len__19539__auto___23694 = arguments.length;
var i__19540__auto___23695 = (0);
while(true){
if((i__19540__auto___23695 < len__19539__auto___23694)){
args23627.push((arguments[i__19540__auto___23695]));

var G__23696 = (i__19540__auto___23695 + (1));
i__19540__auto___23695 = G__23696;
continue;
} else {
}
break;
}

var G__23629 = args23627.length;
switch (G__23629) {
case 1:
return sablono.core.week_field23626.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field23626.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23627.length)].join('')));

}
});

sablono.core.week_field23626.cljs$core$IFn$_invoke$arity$1 = (function (name__20270__auto__){
return sablono.core.week_field23626.call(null,name__20270__auto__,null);
});

sablono.core.week_field23626.cljs$core$IFn$_invoke$arity$2 = (function (name__20270__auto__,value__20271__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__20270__auto__,value__20271__auto__);
});

sablono.core.week_field23626.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field23626);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box23698 = (function sablono$core$check_box23698(var_args){
var args23699 = [];
var len__19539__auto___23702 = arguments.length;
var i__19540__auto___23703 = (0);
while(true){
if((i__19540__auto___23703 < len__19539__auto___23702)){
args23699.push((arguments[i__19540__auto___23703]));

var G__23704 = (i__19540__auto___23703 + (1));
i__19540__auto___23703 = G__23704;
continue;
} else {
}
break;
}

var G__23701 = args23699.length;
switch (G__23701) {
case 1:
return sablono.core.check_box23698.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box23698.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box23698.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23699.length)].join('')));

}
});

sablono.core.check_box23698.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box23698.call(null,name,null);
});

sablono.core.check_box23698.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box23698.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box23698.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box23698.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box23698);
/**
 * Creates a radio button.
 */
sablono.core.radio_button23706 = (function sablono$core$radio_button23706(var_args){
var args23707 = [];
var len__19539__auto___23710 = arguments.length;
var i__19540__auto___23711 = (0);
while(true){
if((i__19540__auto___23711 < len__19539__auto___23710)){
args23707.push((arguments[i__19540__auto___23711]));

var G__23712 = (i__19540__auto___23711 + (1));
i__19540__auto___23711 = G__23712;
continue;
} else {
}
break;
}

var G__23709 = args23707.length;
switch (G__23709) {
case 1:
return sablono.core.radio_button23706.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button23706.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button23706.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23707.length)].join('')));

}
});

sablono.core.radio_button23706.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button23706.call(null,group,null);
});

sablono.core.radio_button23706.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button23706.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button23706.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button23706.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button23706);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options23714 = (function sablono$core$select_options23714(coll){
var iter__19244__auto__ = (function sablono$core$select_options23714_$_iter__23731(s__23732){
return (new cljs.core.LazySeq(null,(function (){
var s__23732__$1 = s__23732;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23732__$1);
if(temp__4657__auto__){
var s__23732__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23732__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__23732__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__23734 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__23733 = (0);
while(true){
if((i__23733 < size__19243__auto__)){
var x = cljs.core._nth.call(null,c__19242__auto__,i__23733);
cljs.core.chunk_append.call(null,b__23734,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23741 = x;
var text = cljs.core.nth.call(null,vec__23741,(0),null);
var val = cljs.core.nth.call(null,vec__23741,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23741,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options23714.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__23747 = (i__23733 + (1));
i__23733 = G__23747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23734),sablono$core$select_options23714_$_iter__23731.call(null,cljs.core.chunk_rest.call(null,s__23732__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23734),null);
}
} else {
var x = cljs.core.first.call(null,s__23732__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23744 = x;
var text = cljs.core.nth.call(null,vec__23744,(0),null);
var val = cljs.core.nth.call(null,vec__23744,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23744,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options23714.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options23714_$_iter__23731.call(null,cljs.core.rest.call(null,s__23732__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options23714);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down23748 = (function sablono$core$drop_down23748(var_args){
var args23749 = [];
var len__19539__auto___23752 = arguments.length;
var i__19540__auto___23753 = (0);
while(true){
if((i__19540__auto___23753 < len__19539__auto___23752)){
args23749.push((arguments[i__19540__auto___23753]));

var G__23754 = (i__19540__auto___23753 + (1));
i__19540__auto___23753 = G__23754;
continue;
} else {
}
break;
}

var G__23751 = args23749.length;
switch (G__23751) {
case 2:
return sablono.core.drop_down23748.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down23748.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23749.length)].join('')));

}
});

sablono.core.drop_down23748.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down23748.call(null,name,options,null);
});

sablono.core.drop_down23748.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down23748.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down23748);
/**
 * Creates a text area element.
 */
sablono.core.text_area23756 = (function sablono$core$text_area23756(var_args){
var args23757 = [];
var len__19539__auto___23760 = arguments.length;
var i__19540__auto___23761 = (0);
while(true){
if((i__19540__auto___23761 < len__19539__auto___23760)){
args23757.push((arguments[i__19540__auto___23761]));

var G__23762 = (i__19540__auto___23761 + (1));
i__19540__auto___23761 = G__23762;
continue;
} else {
}
break;
}

var G__23759 = args23757.length;
switch (G__23759) {
case 1:
return sablono.core.text_area23756.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area23756.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23757.length)].join('')));

}
});

sablono.core.text_area23756.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area23756.call(null,name,null);
});

sablono.core.text_area23756.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area23756.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area23756);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label23764 = (function sablono$core$label23764(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label23764);
/**
 * Creates a submit button.
 */
sablono.core.submit_button23765 = (function sablono$core$submit_button23765(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button23765);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button23766 = (function sablono$core$reset_button23766(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button23766);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to23767 = (function sablono$core$form_to23767(var_args){
var args__19546__auto__ = [];
var len__19539__auto___23774 = arguments.length;
var i__19540__auto___23775 = (0);
while(true){
if((i__19540__auto___23775 < len__19539__auto___23774)){
args__19546__auto__.push((arguments[i__19540__auto___23775]));

var G__23776 = (i__19540__auto___23775 + (1));
i__19540__auto___23775 = G__23776;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to23767.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.form_to23767.cljs$core$IFn$_invoke$arity$variadic = (function (p__23770,body){
var vec__23771 = p__23770;
var method = cljs.core.nth.call(null,vec__23771,(0),null);
var action = cljs.core.nth.call(null,vec__23771,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to23767.cljs$lang$maxFixedArity = (1);

sablono.core.form_to23767.cljs$lang$applyTo = (function (seq23768){
var G__23769 = cljs.core.first.call(null,seq23768);
var seq23768__$1 = cljs.core.next.call(null,seq23768);
return sablono.core.form_to23767.cljs$core$IFn$_invoke$arity$variadic(G__23769,seq23768__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to23767);

//# sourceMappingURL=core.js.map