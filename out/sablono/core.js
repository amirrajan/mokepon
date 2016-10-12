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
var G__25583__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__25580 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__25581 = cljs.core.seq.call(null,vec__25580);
var first__25582 = cljs.core.first.call(null,seq__25581);
var seq__25581__$1 = cljs.core.next.call(null,seq__25581);
var tag = first__25582;
var body = seq__25581__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__25583 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25584__i = 0, G__25584__a = new Array(arguments.length -  0);
while (G__25584__i < G__25584__a.length) {G__25584__a[G__25584__i] = arguments[G__25584__i + 0]; ++G__25584__i;}
  args = new cljs.core.IndexedSeq(G__25584__a,0);
} 
return G__25583__delegate.call(this,args);};
G__25583.cljs$lang$maxFixedArity = 0;
G__25583.cljs$lang$applyTo = (function (arglist__25585){
var args = cljs.core.seq(arglist__25585);
return G__25583__delegate(args);
});
G__25583.cljs$core$IFn$_invoke$arity$variadic = G__25583__delegate;
return G__25583;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19244__auto__ = (function sablono$core$update_arglists_$_iter__25590(s__25591){
return (new cljs.core.LazySeq(null,(function (){
var s__25591__$1 = s__25591;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25591__$1);
if(temp__4657__auto__){
var s__25591__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25591__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__25591__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__25593 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__25592 = (0);
while(true){
if((i__25592 < size__19243__auto__)){
var args = cljs.core._nth.call(null,c__19242__auto__,i__25592);
cljs.core.chunk_append.call(null,b__25593,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__25594 = (i__25592 + (1));
i__25592 = G__25594;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25593),sablono$core$update_arglists_$_iter__25590.call(null,cljs.core.chunk_rest.call(null,s__25591__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25593),null);
}
} else {
var args = cljs.core.first.call(null,s__25591__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__25590.call(null,cljs.core.rest.call(null,s__25591__$2)));
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
var len__19539__auto___25600 = arguments.length;
var i__19540__auto___25601 = (0);
while(true){
if((i__19540__auto___25601 < len__19539__auto___25600)){
args__19546__auto__.push((arguments[i__19540__auto___25601]));

var G__25602 = (i__19540__auto___25601 + (1));
i__19540__auto___25601 = G__25602;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19244__auto__ = (function sablono$core$iter__25596(s__25597){
return (new cljs.core.LazySeq(null,(function (){
var s__25597__$1 = s__25597;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25597__$1);
if(temp__4657__auto__){
var s__25597__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25597__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__25597__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__25599 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__25598 = (0);
while(true){
if((i__25598 < size__19243__auto__)){
var style = cljs.core._nth.call(null,c__19242__auto__,i__25598);
cljs.core.chunk_append.call(null,b__25599,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__25603 = (i__25598 + (1));
i__25598 = G__25603;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25599),sablono$core$iter__25596.call(null,cljs.core.chunk_rest.call(null,s__25597__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25599),null);
}
} else {
var style = cljs.core.first.call(null,s__25597__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__25596.call(null,cljs.core.rest.call(null,s__25597__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq25595){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25595));
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
sablono.core.link_to25604 = (function sablono$core$link_to25604(var_args){
var args__19546__auto__ = [];
var len__19539__auto___25607 = arguments.length;
var i__19540__auto___25608 = (0);
while(true){
if((i__19540__auto___25608 < len__19539__auto___25607)){
args__19546__auto__.push((arguments[i__19540__auto___25608]));

var G__25609 = (i__19540__auto___25608 + (1));
i__19540__auto___25608 = G__25609;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to25604.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.link_to25604.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to25604.cljs$lang$maxFixedArity = (1);

sablono.core.link_to25604.cljs$lang$applyTo = (function (seq25605){
var G__25606 = cljs.core.first.call(null,seq25605);
var seq25605__$1 = cljs.core.next.call(null,seq25605);
return sablono.core.link_to25604.cljs$core$IFn$_invoke$arity$variadic(G__25606,seq25605__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to25604);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to25610 = (function sablono$core$mail_to25610(var_args){
var args__19546__auto__ = [];
var len__19539__auto___25617 = arguments.length;
var i__19540__auto___25618 = (0);
while(true){
if((i__19540__auto___25618 < len__19539__auto___25617)){
args__19546__auto__.push((arguments[i__19540__auto___25618]));

var G__25619 = (i__19540__auto___25618 + (1));
i__19540__auto___25618 = G__25619;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to25610.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.mail_to25610.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__25613){
var vec__25614 = p__25613;
var content = cljs.core.nth.call(null,vec__25614,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18464__auto__ = content;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to25610.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to25610.cljs$lang$applyTo = (function (seq25611){
var G__25612 = cljs.core.first.call(null,seq25611);
var seq25611__$1 = cljs.core.next.call(null,seq25611);
return sablono.core.mail_to25610.cljs$core$IFn$_invoke$arity$variadic(G__25612,seq25611__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to25610);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list25620 = (function sablono$core$unordered_list25620(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19244__auto__ = (function sablono$core$unordered_list25620_$_iter__25625(s__25626){
return (new cljs.core.LazySeq(null,(function (){
var s__25626__$1 = s__25626;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25626__$1);
if(temp__4657__auto__){
var s__25626__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25626__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__25626__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__25628 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__25627 = (0);
while(true){
if((i__25627 < size__19243__auto__)){
var x = cljs.core._nth.call(null,c__19242__auto__,i__25627);
cljs.core.chunk_append.call(null,b__25628,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25629 = (i__25627 + (1));
i__25627 = G__25629;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25628),sablono$core$unordered_list25620_$_iter__25625.call(null,cljs.core.chunk_rest.call(null,s__25626__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25628),null);
}
} else {
var x = cljs.core.first.call(null,s__25626__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list25620_$_iter__25625.call(null,cljs.core.rest.call(null,s__25626__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list25620);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list25630 = (function sablono$core$ordered_list25630(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19244__auto__ = (function sablono$core$ordered_list25630_$_iter__25635(s__25636){
return (new cljs.core.LazySeq(null,(function (){
var s__25636__$1 = s__25636;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25636__$1);
if(temp__4657__auto__){
var s__25636__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25636__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__25636__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__25638 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__25637 = (0);
while(true){
if((i__25637 < size__19243__auto__)){
var x = cljs.core._nth.call(null,c__19242__auto__,i__25637);
cljs.core.chunk_append.call(null,b__25638,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25639 = (i__25637 + (1));
i__25637 = G__25639;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25638),sablono$core$ordered_list25630_$_iter__25635.call(null,cljs.core.chunk_rest.call(null,s__25636__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25638),null);
}
} else {
var x = cljs.core.first.call(null,s__25636__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list25630_$_iter__25635.call(null,cljs.core.rest.call(null,s__25636__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list25630);
/**
 * Create an image element.
 */
sablono.core.image25640 = (function sablono$core$image25640(var_args){
var args25641 = [];
var len__19539__auto___25644 = arguments.length;
var i__19540__auto___25645 = (0);
while(true){
if((i__19540__auto___25645 < len__19539__auto___25644)){
args25641.push((arguments[i__19540__auto___25645]));

var G__25646 = (i__19540__auto___25645 + (1));
i__19540__auto___25645 = G__25646;
continue;
} else {
}
break;
}

var G__25643 = args25641.length;
switch (G__25643) {
case 1:
return sablono.core.image25640.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image25640.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25641.length)].join('')));

}
});

sablono.core.image25640.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image25640.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image25640.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image25640);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__25648_SHARP_,p2__25649_SHARP_){
return [cljs.core.str(p1__25648_SHARP_),cljs.core.str("["),cljs.core.str(p2__25649_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__25650_SHARP_,p2__25651_SHARP_){
return [cljs.core.str(p1__25650_SHARP_),cljs.core.str("-"),cljs.core.str(p2__25651_SHARP_)].join('');
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
sablono.core.color_field25652 = (function sablono$core$color_field25652(var_args){
var args25653 = [];
var len__19539__auto___25720 = arguments.length;
var i__19540__auto___25721 = (0);
while(true){
if((i__19540__auto___25721 < len__19539__auto___25720)){
args25653.push((arguments[i__19540__auto___25721]));

var G__25722 = (i__19540__auto___25721 + (1));
i__19540__auto___25721 = G__25722;
continue;
} else {
}
break;
}

var G__25655 = args25653.length;
switch (G__25655) {
case 1:
return sablono.core.color_field25652.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field25652.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25653.length)].join('')));

}
});

sablono.core.color_field25652.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.color_field25652.call(null,name__23630__auto__,null);
});

sablono.core.color_field25652.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.color_field25652.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field25652);

/**
 * Creates a date input field.
 */
sablono.core.date_field25656 = (function sablono$core$date_field25656(var_args){
var args25657 = [];
var len__19539__auto___25724 = arguments.length;
var i__19540__auto___25725 = (0);
while(true){
if((i__19540__auto___25725 < len__19539__auto___25724)){
args25657.push((arguments[i__19540__auto___25725]));

var G__25726 = (i__19540__auto___25725 + (1));
i__19540__auto___25725 = G__25726;
continue;
} else {
}
break;
}

var G__25659 = args25657.length;
switch (G__25659) {
case 1:
return sablono.core.date_field25656.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field25656.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25657.length)].join('')));

}
});

sablono.core.date_field25656.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.date_field25656.call(null,name__23630__auto__,null);
});

sablono.core.date_field25656.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.date_field25656.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field25656);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field25660 = (function sablono$core$datetime_field25660(var_args){
var args25661 = [];
var len__19539__auto___25728 = arguments.length;
var i__19540__auto___25729 = (0);
while(true){
if((i__19540__auto___25729 < len__19539__auto___25728)){
args25661.push((arguments[i__19540__auto___25729]));

var G__25730 = (i__19540__auto___25729 + (1));
i__19540__auto___25729 = G__25730;
continue;
} else {
}
break;
}

var G__25663 = args25661.length;
switch (G__25663) {
case 1:
return sablono.core.datetime_field25660.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field25660.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25661.length)].join('')));

}
});

sablono.core.datetime_field25660.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.datetime_field25660.call(null,name__23630__auto__,null);
});

sablono.core.datetime_field25660.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.datetime_field25660.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field25660);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field25664 = (function sablono$core$datetime_local_field25664(var_args){
var args25665 = [];
var len__19539__auto___25732 = arguments.length;
var i__19540__auto___25733 = (0);
while(true){
if((i__19540__auto___25733 < len__19539__auto___25732)){
args25665.push((arguments[i__19540__auto___25733]));

var G__25734 = (i__19540__auto___25733 + (1));
i__19540__auto___25733 = G__25734;
continue;
} else {
}
break;
}

var G__25667 = args25665.length;
switch (G__25667) {
case 1:
return sablono.core.datetime_local_field25664.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field25664.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25665.length)].join('')));

}
});

sablono.core.datetime_local_field25664.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.datetime_local_field25664.call(null,name__23630__auto__,null);
});

sablono.core.datetime_local_field25664.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.datetime_local_field25664.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field25664);

/**
 * Creates a email input field.
 */
sablono.core.email_field25668 = (function sablono$core$email_field25668(var_args){
var args25669 = [];
var len__19539__auto___25736 = arguments.length;
var i__19540__auto___25737 = (0);
while(true){
if((i__19540__auto___25737 < len__19539__auto___25736)){
args25669.push((arguments[i__19540__auto___25737]));

var G__25738 = (i__19540__auto___25737 + (1));
i__19540__auto___25737 = G__25738;
continue;
} else {
}
break;
}

var G__25671 = args25669.length;
switch (G__25671) {
case 1:
return sablono.core.email_field25668.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field25668.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25669.length)].join('')));

}
});

sablono.core.email_field25668.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.email_field25668.call(null,name__23630__auto__,null);
});

sablono.core.email_field25668.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.email_field25668.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field25668);

/**
 * Creates a file input field.
 */
sablono.core.file_field25672 = (function sablono$core$file_field25672(var_args){
var args25673 = [];
var len__19539__auto___25740 = arguments.length;
var i__19540__auto___25741 = (0);
while(true){
if((i__19540__auto___25741 < len__19539__auto___25740)){
args25673.push((arguments[i__19540__auto___25741]));

var G__25742 = (i__19540__auto___25741 + (1));
i__19540__auto___25741 = G__25742;
continue;
} else {
}
break;
}

var G__25675 = args25673.length;
switch (G__25675) {
case 1:
return sablono.core.file_field25672.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field25672.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25673.length)].join('')));

}
});

sablono.core.file_field25672.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.file_field25672.call(null,name__23630__auto__,null);
});

sablono.core.file_field25672.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.file_field25672.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field25672);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field25676 = (function sablono$core$hidden_field25676(var_args){
var args25677 = [];
var len__19539__auto___25744 = arguments.length;
var i__19540__auto___25745 = (0);
while(true){
if((i__19540__auto___25745 < len__19539__auto___25744)){
args25677.push((arguments[i__19540__auto___25745]));

var G__25746 = (i__19540__auto___25745 + (1));
i__19540__auto___25745 = G__25746;
continue;
} else {
}
break;
}

var G__25679 = args25677.length;
switch (G__25679) {
case 1:
return sablono.core.hidden_field25676.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field25676.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25677.length)].join('')));

}
});

sablono.core.hidden_field25676.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.hidden_field25676.call(null,name__23630__auto__,null);
});

sablono.core.hidden_field25676.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.hidden_field25676.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field25676);

/**
 * Creates a month input field.
 */
sablono.core.month_field25680 = (function sablono$core$month_field25680(var_args){
var args25681 = [];
var len__19539__auto___25748 = arguments.length;
var i__19540__auto___25749 = (0);
while(true){
if((i__19540__auto___25749 < len__19539__auto___25748)){
args25681.push((arguments[i__19540__auto___25749]));

var G__25750 = (i__19540__auto___25749 + (1));
i__19540__auto___25749 = G__25750;
continue;
} else {
}
break;
}

var G__25683 = args25681.length;
switch (G__25683) {
case 1:
return sablono.core.month_field25680.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field25680.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25681.length)].join('')));

}
});

sablono.core.month_field25680.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.month_field25680.call(null,name__23630__auto__,null);
});

sablono.core.month_field25680.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.month_field25680.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field25680);

/**
 * Creates a number input field.
 */
sablono.core.number_field25684 = (function sablono$core$number_field25684(var_args){
var args25685 = [];
var len__19539__auto___25752 = arguments.length;
var i__19540__auto___25753 = (0);
while(true){
if((i__19540__auto___25753 < len__19539__auto___25752)){
args25685.push((arguments[i__19540__auto___25753]));

var G__25754 = (i__19540__auto___25753 + (1));
i__19540__auto___25753 = G__25754;
continue;
} else {
}
break;
}

var G__25687 = args25685.length;
switch (G__25687) {
case 1:
return sablono.core.number_field25684.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field25684.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25685.length)].join('')));

}
});

sablono.core.number_field25684.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.number_field25684.call(null,name__23630__auto__,null);
});

sablono.core.number_field25684.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.number_field25684.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field25684);

/**
 * Creates a password input field.
 */
sablono.core.password_field25688 = (function sablono$core$password_field25688(var_args){
var args25689 = [];
var len__19539__auto___25756 = arguments.length;
var i__19540__auto___25757 = (0);
while(true){
if((i__19540__auto___25757 < len__19539__auto___25756)){
args25689.push((arguments[i__19540__auto___25757]));

var G__25758 = (i__19540__auto___25757 + (1));
i__19540__auto___25757 = G__25758;
continue;
} else {
}
break;
}

var G__25691 = args25689.length;
switch (G__25691) {
case 1:
return sablono.core.password_field25688.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field25688.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25689.length)].join('')));

}
});

sablono.core.password_field25688.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.password_field25688.call(null,name__23630__auto__,null);
});

sablono.core.password_field25688.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.password_field25688.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field25688);

/**
 * Creates a range input field.
 */
sablono.core.range_field25692 = (function sablono$core$range_field25692(var_args){
var args25693 = [];
var len__19539__auto___25760 = arguments.length;
var i__19540__auto___25761 = (0);
while(true){
if((i__19540__auto___25761 < len__19539__auto___25760)){
args25693.push((arguments[i__19540__auto___25761]));

var G__25762 = (i__19540__auto___25761 + (1));
i__19540__auto___25761 = G__25762;
continue;
} else {
}
break;
}

var G__25695 = args25693.length;
switch (G__25695) {
case 1:
return sablono.core.range_field25692.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field25692.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25693.length)].join('')));

}
});

sablono.core.range_field25692.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.range_field25692.call(null,name__23630__auto__,null);
});

sablono.core.range_field25692.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.range_field25692.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field25692);

/**
 * Creates a search input field.
 */
sablono.core.search_field25696 = (function sablono$core$search_field25696(var_args){
var args25697 = [];
var len__19539__auto___25764 = arguments.length;
var i__19540__auto___25765 = (0);
while(true){
if((i__19540__auto___25765 < len__19539__auto___25764)){
args25697.push((arguments[i__19540__auto___25765]));

var G__25766 = (i__19540__auto___25765 + (1));
i__19540__auto___25765 = G__25766;
continue;
} else {
}
break;
}

var G__25699 = args25697.length;
switch (G__25699) {
case 1:
return sablono.core.search_field25696.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field25696.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25697.length)].join('')));

}
});

sablono.core.search_field25696.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.search_field25696.call(null,name__23630__auto__,null);
});

sablono.core.search_field25696.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.search_field25696.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field25696);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field25700 = (function sablono$core$tel_field25700(var_args){
var args25701 = [];
var len__19539__auto___25768 = arguments.length;
var i__19540__auto___25769 = (0);
while(true){
if((i__19540__auto___25769 < len__19539__auto___25768)){
args25701.push((arguments[i__19540__auto___25769]));

var G__25770 = (i__19540__auto___25769 + (1));
i__19540__auto___25769 = G__25770;
continue;
} else {
}
break;
}

var G__25703 = args25701.length;
switch (G__25703) {
case 1:
return sablono.core.tel_field25700.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field25700.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25701.length)].join('')));

}
});

sablono.core.tel_field25700.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.tel_field25700.call(null,name__23630__auto__,null);
});

sablono.core.tel_field25700.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.tel_field25700.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field25700);

/**
 * Creates a text input field.
 */
sablono.core.text_field25704 = (function sablono$core$text_field25704(var_args){
var args25705 = [];
var len__19539__auto___25772 = arguments.length;
var i__19540__auto___25773 = (0);
while(true){
if((i__19540__auto___25773 < len__19539__auto___25772)){
args25705.push((arguments[i__19540__auto___25773]));

var G__25774 = (i__19540__auto___25773 + (1));
i__19540__auto___25773 = G__25774;
continue;
} else {
}
break;
}

var G__25707 = args25705.length;
switch (G__25707) {
case 1:
return sablono.core.text_field25704.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field25704.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25705.length)].join('')));

}
});

sablono.core.text_field25704.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.text_field25704.call(null,name__23630__auto__,null);
});

sablono.core.text_field25704.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.text_field25704.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field25704);

/**
 * Creates a time input field.
 */
sablono.core.time_field25708 = (function sablono$core$time_field25708(var_args){
var args25709 = [];
var len__19539__auto___25776 = arguments.length;
var i__19540__auto___25777 = (0);
while(true){
if((i__19540__auto___25777 < len__19539__auto___25776)){
args25709.push((arguments[i__19540__auto___25777]));

var G__25778 = (i__19540__auto___25777 + (1));
i__19540__auto___25777 = G__25778;
continue;
} else {
}
break;
}

var G__25711 = args25709.length;
switch (G__25711) {
case 1:
return sablono.core.time_field25708.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field25708.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25709.length)].join('')));

}
});

sablono.core.time_field25708.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.time_field25708.call(null,name__23630__auto__,null);
});

sablono.core.time_field25708.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.time_field25708.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field25708);

/**
 * Creates a url input field.
 */
sablono.core.url_field25712 = (function sablono$core$url_field25712(var_args){
var args25713 = [];
var len__19539__auto___25780 = arguments.length;
var i__19540__auto___25781 = (0);
while(true){
if((i__19540__auto___25781 < len__19539__auto___25780)){
args25713.push((arguments[i__19540__auto___25781]));

var G__25782 = (i__19540__auto___25781 + (1));
i__19540__auto___25781 = G__25782;
continue;
} else {
}
break;
}

var G__25715 = args25713.length;
switch (G__25715) {
case 1:
return sablono.core.url_field25712.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field25712.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25713.length)].join('')));

}
});

sablono.core.url_field25712.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.url_field25712.call(null,name__23630__auto__,null);
});

sablono.core.url_field25712.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.url_field25712.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field25712);

/**
 * Creates a week input field.
 */
sablono.core.week_field25716 = (function sablono$core$week_field25716(var_args){
var args25717 = [];
var len__19539__auto___25784 = arguments.length;
var i__19540__auto___25785 = (0);
while(true){
if((i__19540__auto___25785 < len__19539__auto___25784)){
args25717.push((arguments[i__19540__auto___25785]));

var G__25786 = (i__19540__auto___25785 + (1));
i__19540__auto___25785 = G__25786;
continue;
} else {
}
break;
}

var G__25719 = args25717.length;
switch (G__25719) {
case 1:
return sablono.core.week_field25716.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field25716.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25717.length)].join('')));

}
});

sablono.core.week_field25716.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.week_field25716.call(null,name__23630__auto__,null);
});

sablono.core.week_field25716.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.week_field25716.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field25716);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box25788 = (function sablono$core$check_box25788(var_args){
var args25789 = [];
var len__19539__auto___25792 = arguments.length;
var i__19540__auto___25793 = (0);
while(true){
if((i__19540__auto___25793 < len__19539__auto___25792)){
args25789.push((arguments[i__19540__auto___25793]));

var G__25794 = (i__19540__auto___25793 + (1));
i__19540__auto___25793 = G__25794;
continue;
} else {
}
break;
}

var G__25791 = args25789.length;
switch (G__25791) {
case 1:
return sablono.core.check_box25788.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box25788.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box25788.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25789.length)].join('')));

}
});

sablono.core.check_box25788.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box25788.call(null,name,null);
});

sablono.core.check_box25788.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box25788.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box25788.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box25788.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box25788);
/**
 * Creates a radio button.
 */
sablono.core.radio_button25796 = (function sablono$core$radio_button25796(var_args){
var args25797 = [];
var len__19539__auto___25800 = arguments.length;
var i__19540__auto___25801 = (0);
while(true){
if((i__19540__auto___25801 < len__19539__auto___25800)){
args25797.push((arguments[i__19540__auto___25801]));

var G__25802 = (i__19540__auto___25801 + (1));
i__19540__auto___25801 = G__25802;
continue;
} else {
}
break;
}

var G__25799 = args25797.length;
switch (G__25799) {
case 1:
return sablono.core.radio_button25796.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button25796.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button25796.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25797.length)].join('')));

}
});

sablono.core.radio_button25796.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button25796.call(null,group,null);
});

sablono.core.radio_button25796.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button25796.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button25796.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button25796.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button25796);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options25804 = (function sablono$core$select_options25804(coll){
var iter__19244__auto__ = (function sablono$core$select_options25804_$_iter__25821(s__25822){
return (new cljs.core.LazySeq(null,(function (){
var s__25822__$1 = s__25822;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25822__$1);
if(temp__4657__auto__){
var s__25822__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25822__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__25822__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__25824 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__25823 = (0);
while(true){
if((i__25823 < size__19243__auto__)){
var x = cljs.core._nth.call(null,c__19242__auto__,i__25823);
cljs.core.chunk_append.call(null,b__25824,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25831 = x;
var text = cljs.core.nth.call(null,vec__25831,(0),null);
var val = cljs.core.nth.call(null,vec__25831,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25831,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options25804.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__25837 = (i__25823 + (1));
i__25823 = G__25837;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25824),sablono$core$select_options25804_$_iter__25821.call(null,cljs.core.chunk_rest.call(null,s__25822__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25824),null);
}
} else {
var x = cljs.core.first.call(null,s__25822__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25834 = x;
var text = cljs.core.nth.call(null,vec__25834,(0),null);
var val = cljs.core.nth.call(null,vec__25834,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25834,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options25804.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options25804_$_iter__25821.call(null,cljs.core.rest.call(null,s__25822__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options25804);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down25838 = (function sablono$core$drop_down25838(var_args){
var args25839 = [];
var len__19539__auto___25842 = arguments.length;
var i__19540__auto___25843 = (0);
while(true){
if((i__19540__auto___25843 < len__19539__auto___25842)){
args25839.push((arguments[i__19540__auto___25843]));

var G__25844 = (i__19540__auto___25843 + (1));
i__19540__auto___25843 = G__25844;
continue;
} else {
}
break;
}

var G__25841 = args25839.length;
switch (G__25841) {
case 2:
return sablono.core.drop_down25838.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down25838.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25839.length)].join('')));

}
});

sablono.core.drop_down25838.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down25838.call(null,name,options,null);
});

sablono.core.drop_down25838.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down25838.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down25838);
/**
 * Creates a text area element.
 */
sablono.core.text_area25846 = (function sablono$core$text_area25846(var_args){
var args25847 = [];
var len__19539__auto___25850 = arguments.length;
var i__19540__auto___25851 = (0);
while(true){
if((i__19540__auto___25851 < len__19539__auto___25850)){
args25847.push((arguments[i__19540__auto___25851]));

var G__25852 = (i__19540__auto___25851 + (1));
i__19540__auto___25851 = G__25852;
continue;
} else {
}
break;
}

var G__25849 = args25847.length;
switch (G__25849) {
case 1:
return sablono.core.text_area25846.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area25846.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25847.length)].join('')));

}
});

sablono.core.text_area25846.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area25846.call(null,name,null);
});

sablono.core.text_area25846.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area25846.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area25846);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label25854 = (function sablono$core$label25854(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label25854);
/**
 * Creates a submit button.
 */
sablono.core.submit_button25855 = (function sablono$core$submit_button25855(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button25855);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button25856 = (function sablono$core$reset_button25856(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button25856);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to25857 = (function sablono$core$form_to25857(var_args){
var args__19546__auto__ = [];
var len__19539__auto___25864 = arguments.length;
var i__19540__auto___25865 = (0);
while(true){
if((i__19540__auto___25865 < len__19539__auto___25864)){
args__19546__auto__.push((arguments[i__19540__auto___25865]));

var G__25866 = (i__19540__auto___25865 + (1));
i__19540__auto___25865 = G__25866;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to25857.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.form_to25857.cljs$core$IFn$_invoke$arity$variadic = (function (p__25860,body){
var vec__25861 = p__25860;
var method = cljs.core.nth.call(null,vec__25861,(0),null);
var action = cljs.core.nth.call(null,vec__25861,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to25857.cljs$lang$maxFixedArity = (1);

sablono.core.form_to25857.cljs$lang$applyTo = (function (seq25858){
var G__25859 = cljs.core.first.call(null,seq25858);
var seq25858__$1 = cljs.core.next.call(null,seq25858);
return sablono.core.form_to25857.cljs$core$IFn$_invoke$arity$variadic(G__25859,seq25858__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to25857);

//# sourceMappingURL=core.js.map