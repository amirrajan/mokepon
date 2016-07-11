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
var G__36923__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__36920 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__36921 = cljs.core.seq.call(null,vec__36920);
var first__36922 = cljs.core.first.call(null,seq__36921);
var seq__36921__$1 = cljs.core.next.call(null,seq__36921);
var tag = first__36922;
var body = seq__36921__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__36923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36924__i = 0, G__36924__a = new Array(arguments.length -  0);
while (G__36924__i < G__36924__a.length) {G__36924__a[G__36924__i] = arguments[G__36924__i + 0]; ++G__36924__i;}
  args = new cljs.core.IndexedSeq(G__36924__a,0);
} 
return G__36923__delegate.call(this,args);};
G__36923.cljs$lang$maxFixedArity = 0;
G__36923.cljs$lang$applyTo = (function (arglist__36925){
var args = cljs.core.seq(arglist__36925);
return G__36923__delegate(args);
});
G__36923.cljs$core$IFn$_invoke$arity$variadic = G__36923__delegate;
return G__36923;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__28792__auto__ = (function sablono$core$update_arglists_$_iter__36930(s__36931){
return (new cljs.core.LazySeq(null,(function (){
var s__36931__$1 = s__36931;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36931__$1);
if(temp__4657__auto__){
var s__36931__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36931__$2)){
var c__28790__auto__ = cljs.core.chunk_first.call(null,s__36931__$2);
var size__28791__auto__ = cljs.core.count.call(null,c__28790__auto__);
var b__36933 = cljs.core.chunk_buffer.call(null,size__28791__auto__);
if((function (){var i__36932 = (0);
while(true){
if((i__36932 < size__28791__auto__)){
var args = cljs.core._nth.call(null,c__28790__auto__,i__36932);
cljs.core.chunk_append.call(null,b__36933,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__36934 = (i__36932 + (1));
i__36932 = G__36934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36933),sablono$core$update_arglists_$_iter__36930.call(null,cljs.core.chunk_rest.call(null,s__36931__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36933),null);
}
} else {
var args = cljs.core.first.call(null,s__36931__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__36930.call(null,cljs.core.rest.call(null,s__36931__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28792__auto__.call(null,arglists);
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
var len__29087__auto___36940 = arguments.length;
var i__29088__auto___36941 = (0);
while(true){
if((i__29088__auto___36941 < len__29087__auto___36940)){
args__29094__auto__.push((arguments[i__29088__auto___36941]));

var G__36942 = (i__29088__auto___36941 + (1));
i__29088__auto___36941 = G__36942;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__28792__auto__ = (function sablono$core$iter__36936(s__36937){
return (new cljs.core.LazySeq(null,(function (){
var s__36937__$1 = s__36937;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36937__$1);
if(temp__4657__auto__){
var s__36937__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36937__$2)){
var c__28790__auto__ = cljs.core.chunk_first.call(null,s__36937__$2);
var size__28791__auto__ = cljs.core.count.call(null,c__28790__auto__);
var b__36939 = cljs.core.chunk_buffer.call(null,size__28791__auto__);
if((function (){var i__36938 = (0);
while(true){
if((i__36938 < size__28791__auto__)){
var style = cljs.core._nth.call(null,c__28790__auto__,i__36938);
cljs.core.chunk_append.call(null,b__36939,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__36943 = (i__36938 + (1));
i__36938 = G__36943;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36939),sablono$core$iter__36936.call(null,cljs.core.chunk_rest.call(null,s__36937__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36939),null);
}
} else {
var style = cljs.core.first.call(null,s__36937__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__36936.call(null,cljs.core.rest.call(null,s__36937__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28792__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq36935){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36935));
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
sablono.core.link_to36944 = (function sablono$core$link_to36944(var_args){
var args__29094__auto__ = [];
var len__29087__auto___36947 = arguments.length;
var i__29088__auto___36948 = (0);
while(true){
if((i__29088__auto___36948 < len__29087__auto___36947)){
args__29094__auto__.push((arguments[i__29088__auto___36948]));

var G__36949 = (i__29088__auto___36948 + (1));
i__29088__auto___36948 = G__36949;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((1) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to36944.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29095__auto__);
});

sablono.core.link_to36944.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to36944.cljs$lang$maxFixedArity = (1);

sablono.core.link_to36944.cljs$lang$applyTo = (function (seq36945){
var G__36946 = cljs.core.first.call(null,seq36945);
var seq36945__$1 = cljs.core.next.call(null,seq36945);
return sablono.core.link_to36944.cljs$core$IFn$_invoke$arity$variadic(G__36946,seq36945__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to36944);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to36950 = (function sablono$core$mail_to36950(var_args){
var args__29094__auto__ = [];
var len__29087__auto___36957 = arguments.length;
var i__29088__auto___36958 = (0);
while(true){
if((i__29088__auto___36958 < len__29087__auto___36957)){
args__29094__auto__.push((arguments[i__29088__auto___36958]));

var G__36959 = (i__29088__auto___36958 + (1));
i__29088__auto___36958 = G__36959;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((1) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to36950.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29095__auto__);
});

sablono.core.mail_to36950.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__36953){
var vec__36954 = p__36953;
var content = cljs.core.nth.call(null,vec__36954,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__28012__auto__ = content;
if(cljs.core.truth_(or__28012__auto__)){
return or__28012__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to36950.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to36950.cljs$lang$applyTo = (function (seq36951){
var G__36952 = cljs.core.first.call(null,seq36951);
var seq36951__$1 = cljs.core.next.call(null,seq36951);
return sablono.core.mail_to36950.cljs$core$IFn$_invoke$arity$variadic(G__36952,seq36951__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to36950);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list36960 = (function sablono$core$unordered_list36960(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__28792__auto__ = (function sablono$core$unordered_list36960_$_iter__36965(s__36966){
return (new cljs.core.LazySeq(null,(function (){
var s__36966__$1 = s__36966;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36966__$1);
if(temp__4657__auto__){
var s__36966__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36966__$2)){
var c__28790__auto__ = cljs.core.chunk_first.call(null,s__36966__$2);
var size__28791__auto__ = cljs.core.count.call(null,c__28790__auto__);
var b__36968 = cljs.core.chunk_buffer.call(null,size__28791__auto__);
if((function (){var i__36967 = (0);
while(true){
if((i__36967 < size__28791__auto__)){
var x = cljs.core._nth.call(null,c__28790__auto__,i__36967);
cljs.core.chunk_append.call(null,b__36968,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36969 = (i__36967 + (1));
i__36967 = G__36969;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36968),sablono$core$unordered_list36960_$_iter__36965.call(null,cljs.core.chunk_rest.call(null,s__36966__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36968),null);
}
} else {
var x = cljs.core.first.call(null,s__36966__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list36960_$_iter__36965.call(null,cljs.core.rest.call(null,s__36966__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28792__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list36960);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list36970 = (function sablono$core$ordered_list36970(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__28792__auto__ = (function sablono$core$ordered_list36970_$_iter__36975(s__36976){
return (new cljs.core.LazySeq(null,(function (){
var s__36976__$1 = s__36976;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36976__$1);
if(temp__4657__auto__){
var s__36976__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36976__$2)){
var c__28790__auto__ = cljs.core.chunk_first.call(null,s__36976__$2);
var size__28791__auto__ = cljs.core.count.call(null,c__28790__auto__);
var b__36978 = cljs.core.chunk_buffer.call(null,size__28791__auto__);
if((function (){var i__36977 = (0);
while(true){
if((i__36977 < size__28791__auto__)){
var x = cljs.core._nth.call(null,c__28790__auto__,i__36977);
cljs.core.chunk_append.call(null,b__36978,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36979 = (i__36977 + (1));
i__36977 = G__36979;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36978),sablono$core$ordered_list36970_$_iter__36975.call(null,cljs.core.chunk_rest.call(null,s__36976__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36978),null);
}
} else {
var x = cljs.core.first.call(null,s__36976__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list36970_$_iter__36975.call(null,cljs.core.rest.call(null,s__36976__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28792__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list36970);
/**
 * Create an image element.
 */
sablono.core.image36980 = (function sablono$core$image36980(var_args){
var args36981 = [];
var len__29087__auto___36984 = arguments.length;
var i__29088__auto___36985 = (0);
while(true){
if((i__29088__auto___36985 < len__29087__auto___36984)){
args36981.push((arguments[i__29088__auto___36985]));

var G__36986 = (i__29088__auto___36985 + (1));
i__29088__auto___36985 = G__36986;
continue;
} else {
}
break;
}

var G__36983 = args36981.length;
switch (G__36983) {
case 1:
return sablono.core.image36980.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image36980.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36981.length)].join('')));

}
});

sablono.core.image36980.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image36980.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image36980.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image36980);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__36988_SHARP_,p2__36989_SHARP_){
return [cljs.core.str(p1__36988_SHARP_),cljs.core.str("["),cljs.core.str(p2__36989_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__36990_SHARP_,p2__36991_SHARP_){
return [cljs.core.str(p1__36990_SHARP_),cljs.core.str("-"),cljs.core.str(p2__36991_SHARP_)].join('');
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
sablono.core.color_field36992 = (function sablono$core$color_field36992(var_args){
var args36993 = [];
var len__29087__auto___37060 = arguments.length;
var i__29088__auto___37061 = (0);
while(true){
if((i__29088__auto___37061 < len__29087__auto___37060)){
args36993.push((arguments[i__29088__auto___37061]));

var G__37062 = (i__29088__auto___37061 + (1));
i__29088__auto___37061 = G__37062;
continue;
} else {
}
break;
}

var G__36995 = args36993.length;
switch (G__36995) {
case 1:
return sablono.core.color_field36992.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field36992.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36993.length)].join('')));

}
});

sablono.core.color_field36992.cljs$core$IFn$_invoke$arity$1 = (function (name__29818__auto__){
return sablono.core.color_field36992.call(null,name__29818__auto__,null);
});

sablono.core.color_field36992.cljs$core$IFn$_invoke$arity$2 = (function (name__29818__auto__,value__29819__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__29818__auto__,value__29819__auto__);
});

sablono.core.color_field36992.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field36992);

/**
 * Creates a date input field.
 */
sablono.core.date_field36996 = (function sablono$core$date_field36996(var_args){
var args36997 = [];
var len__29087__auto___37064 = arguments.length;
var i__29088__auto___37065 = (0);
while(true){
if((i__29088__auto___37065 < len__29087__auto___37064)){
args36997.push((arguments[i__29088__auto___37065]));

var G__37066 = (i__29088__auto___37065 + (1));
i__29088__auto___37065 = G__37066;
continue;
} else {
}
break;
}

var G__36999 = args36997.length;
switch (G__36999) {
case 1:
return sablono.core.date_field36996.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field36996.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36997.length)].join('')));

}
});

sablono.core.date_field36996.cljs$core$IFn$_invoke$arity$1 = (function (name__29818__auto__){
return sablono.core.date_field36996.call(null,name__29818__auto__,null);
});

sablono.core.date_field36996.cljs$core$IFn$_invoke$arity$2 = (function (name__29818__auto__,value__29819__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__29818__auto__,value__29819__auto__);
});

sablono.core.date_field36996.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field36996);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field37000 = (function sablono$core$datetime_field37000(var_args){
var args37001 = [];
var len__29087__auto___37068 = arguments.length;
var i__29088__auto___37069 = (0);
while(true){
if((i__29088__auto___37069 < len__29087__auto___37068)){
args37001.push((arguments[i__29088__auto___37069]));

var G__37070 = (i__29088__auto___37069 + (1));
i__29088__auto___37069 = G__37070;
continue;
} else {
}
break;
}

var G__37003 = args37001.length;
switch (G__37003) {
case 1:
return sablono.core.datetime_field37000.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field37000.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37001.length)].join('')));

}
});

sablono.core.datetime_field37000.cljs$core$IFn$_invoke$arity$1 = (function (name__29818__auto__){
return sablono.core.datetime_field37000.call(null,name__29818__auto__,null);
});

sablono.core.datetime_field37000.cljs$core$IFn$_invoke$arity$2 = (function (name__29818__auto__,value__29819__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__29818__auto__,value__29819__auto__);
});

sablono.core.datetime_field37000.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field37000);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field37004 = (function sablono$core$datetime_local_field37004(var_args){
var args37005 = [];
var len__29087__auto___37072 = arguments.length;
var i__29088__auto___37073 = (0);
while(true){
if((i__29088__auto___37073 < len__29087__auto___37072)){
args37005.push((arguments[i__29088__auto___37073]));

var G__37074 = (i__29088__auto___37073 + (1));
i__29088__auto___37073 = G__37074;
continue;
} else {
}
break;
}

var G__37007 = args37005.length;
switch (G__37007) {
case 1:
return sablono.core.datetime_local_field37004.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field37004.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37005.length)].join('')));

}
});

sablono.core.datetime_local_field37004.cljs$core$IFn$_invoke$arity$1 = (function (name__29818__auto__){
return sablono.core.datetime_local_field37004.call(null,name__29818__auto__,null);
});

sablono.core.datetime_local_field37004.cljs$core$IFn$_invoke$arity$2 = (function (name__29818__auto__,value__29819__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__29818__auto__,value__29819__auto__);
});

sablono.core.datetime_local_field37004.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field37004);

/**
 * Creates a email input field.
 */
sablono.core.email_field37008 = (function sablono$core$email_field37008(var_args){
var args37009 = [];
var len__29087__auto___37076 = arguments.length;
var i__29088__auto___37077 = (0);
while(true){
if((i__29088__auto___37077 < len__29087__auto___37076)){
args37009.push((arguments[i__29088__auto___37077]));

var G__37078 = (i__29088__auto___37077 + (1));
i__29088__auto___37077 = G__37078;
continue;
} else {
}
break;
}

var G__37011 = args37009.length;
switch (G__37011) {
case 1:
return sablono.core.email_field37008.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field37008.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37009.length)].join('')));

}
});

sablono.core.email_field37008.cljs$core$IFn$_invoke$arity$1 = (function (name__29818__auto__){
return sablono.core.email_field37008.call(null,name__29818__auto__,null);
});

sablono.core.email_field37008.cljs$core$IFn$_invoke$arity$2 = (function (name__29818__auto__,value__29819__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__29818__auto__,value__29819__auto__);
});

sablono.core.email_field37008.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field37008);

/**
 * Creates a file input field.
 */
sablono.core.file_field37012 = (function sablono$core$file_field37012(var_args){
var args37013 = [];
var len__29087__auto___37080 = arguments.length;
var i__29088__auto___37081 = (0);
while(true){
if((i__29088__auto___37081 < len__29087__auto___37080)){
args37013.push((arguments[i__29088__auto___37081]));

var G__37082 = (i__29088__auto___37081 + (1));
i__29088__auto___37081 = G__37082;
continue;
} else {
}
break;
}

var G__37015 = args37013.length;
switch (G__37015) {
case 1:
return sablono.core.file_field37012.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field37012.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37013.length)].join('')));

}
});

sablono.core.file_field37012.cljs$core$IFn$_invoke$arity$1 = (function (name__29818__auto__){
return sablono.core.file_field37012.call(null,name__29818__auto__,null);
});

sablono.core.file_field37012.cljs$core$IFn$_invoke$arity$2 = (function (name__29818__auto__,value__29819__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__29818__auto__,value__29819__auto__);
});

sablono.core.file_field37012.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field37012);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field37016 = (function sablono$core$hidden_field37016(var_args){
var args37017 = [];
var len__29087__auto___37084 = arguments.length;
var i__29088__auto___37085 = (0);
while(true){
if((i__29088__auto___37085 < len__29087__auto___37084)){
args37017.push((arguments[i__29088__auto___37085]));

var G__37086 = (i__29088__auto___37085 + (1));
i__29088__auto___37085 = G__37086;
continue;
} else {
}
break;
}

var G__37019 = args37017.length;
switch (G__37019) {
case 1:
return sablono.core.hidden_field37016.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field37016.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37017.length)].join('')));

}
});

sablono.core.hidden_field37016.cljs$core$IFn$_invoke$arity$1 = (function (name__29818__auto__){
return sablono.core.hidden_field37016.call(null,name__29818__auto__,null);
});

sablono.core.hidden_field37016.cljs$core$IFn$_invoke$arity$2 = (function (name__29818__auto__,value__29819__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__29818__auto__,value__29819__auto__);
});

sablono.core.hidden_field37016.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field37016);

/**
 * Creates a month input field.
 */
sablono.core.month_field37020 = (function sablono$core$month_field37020(var_args){
var args37021 = [];
var len__29087__auto___37088 = arguments.length;
var i__29088__auto___37089 = (0);
while(true){
if((i__29088__auto___37089 < len__29087__auto___37088)){
args37021.push((arguments[i__29088__auto___37089]));

var G__37090 = (i__29088__auto___37089 + (1));
i__29088__auto___37089 = G__37090;
continue;
} else {
}
break;
}

var G__37023 = args37021.length;
switch (G__37023) {
case 1:
return sablono.core.month_field37020.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field37020.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37021.length)].join('')));

}
});

sablono.core.month_field37020.cljs$core$IFn$_invoke$arity$1 = (function (name__29818__auto__){
return sablono.core.month_field37020.call(null,name__29818__auto__,null);
});

sablono.core.month_field37020.cljs$core$IFn$_invoke$arity$2 = (function (name__29818__auto__,value__29819__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__29818__auto__,value__29819__auto__);
});

sablono.core.month_field37020.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field37020);

/**
 * Creates a number input field.
 */
sablono.core.number_field37024 = (function sablono$core$number_field37024(var_args){
var args37025 = [];
var len__29087__auto___37092 = arguments.length;
var i__29088__auto___37093 = (0);
while(true){
if((i__29088__auto___37093 < len__29087__auto___37092)){
args37025.push((arguments[i__29088__auto___37093]));

var G__37094 = (i__29088__auto___37093 + (1));
i__29088__auto___37093 = G__37094;
continue;
} else {
}
break;
}

var G__37027 = args37025.length;
switch (G__37027) {
case 1:
return sablono.core.number_field37024.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field37024.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37025.length)].join('')));

}
});

sablono.core.number_field37024.cljs$core$IFn$_invoke$arity$1 = (function (name__29818__auto__){
return sablono.core.number_field37024.call(null,name__29818__auto__,null);
});

sablono.core.number_field37024.cljs$core$IFn$_invoke$arity$2 = (function (name__29818__auto__,value__29819__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__29818__auto__,value__29819__auto__);
});

sablono.core.number_field37024.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field37024);

/**
 * Creates a password input field.
 */
sablono.core.password_field37028 = (function sablono$core$password_field37028(var_args){
var args37029 = [];
var len__29087__auto___37096 = arguments.length;
var i__29088__auto___37097 = (0);
while(true){
if((i__29088__auto___37097 < len__29087__auto___37096)){
args37029.push((arguments[i__29088__auto___37097]));

var G__37098 = (i__29088__auto___37097 + (1));
i__29088__auto___37097 = G__37098;
continue;
} else {
}
break;
}

var G__37031 = args37029.length;
switch (G__37031) {
case 1:
return sablono.core.password_field37028.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field37028.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37029.length)].join('')));

}
});

sablono.core.password_field37028.cljs$core$IFn$_invoke$arity$1 = (function (name__29818__auto__){
return sablono.core.password_field37028.call(null,name__29818__auto__,null);
});

sablono.core.password_field37028.cljs$core$IFn$_invoke$arity$2 = (function (name__29818__auto__,value__29819__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__29818__auto__,value__29819__auto__);
});

sablono.core.password_field37028.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field37028);

/**
 * Creates a range input field.
 */
sablono.core.range_field37032 = (function sablono$core$range_field37032(var_args){
var args37033 = [];
var len__29087__auto___37100 = arguments.length;
var i__29088__auto___37101 = (0);
while(true){
if((i__29088__auto___37101 < len__29087__auto___37100)){
args37033.push((arguments[i__29088__auto___37101]));

var G__37102 = (i__29088__auto___37101 + (1));
i__29088__auto___37101 = G__37102;
continue;
} else {
}
break;
}

var G__37035 = args37033.length;
switch (G__37035) {
case 1:
return sablono.core.range_field37032.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field37032.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37033.length)].join('')));

}
});

sablono.core.range_field37032.cljs$core$IFn$_invoke$arity$1 = (function (name__29818__auto__){
return sablono.core.range_field37032.call(null,name__29818__auto__,null);
});

sablono.core.range_field37032.cljs$core$IFn$_invoke$arity$2 = (function (name__29818__auto__,value__29819__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__29818__auto__,value__29819__auto__);
});

sablono.core.range_field37032.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field37032);

/**
 * Creates a search input field.
 */
sablono.core.search_field37036 = (function sablono$core$search_field37036(var_args){
var args37037 = [];
var len__29087__auto___37104 = arguments.length;
var i__29088__auto___37105 = (0);
while(true){
if((i__29088__auto___37105 < len__29087__auto___37104)){
args37037.push((arguments[i__29088__auto___37105]));

var G__37106 = (i__29088__auto___37105 + (1));
i__29088__auto___37105 = G__37106;
continue;
} else {
}
break;
}

var G__37039 = args37037.length;
switch (G__37039) {
case 1:
return sablono.core.search_field37036.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field37036.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37037.length)].join('')));

}
});

sablono.core.search_field37036.cljs$core$IFn$_invoke$arity$1 = (function (name__29818__auto__){
return sablono.core.search_field37036.call(null,name__29818__auto__,null);
});

sablono.core.search_field37036.cljs$core$IFn$_invoke$arity$2 = (function (name__29818__auto__,value__29819__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__29818__auto__,value__29819__auto__);
});

sablono.core.search_field37036.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field37036);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field37040 = (function sablono$core$tel_field37040(var_args){
var args37041 = [];
var len__29087__auto___37108 = arguments.length;
var i__29088__auto___37109 = (0);
while(true){
if((i__29088__auto___37109 < len__29087__auto___37108)){
args37041.push((arguments[i__29088__auto___37109]));

var G__37110 = (i__29088__auto___37109 + (1));
i__29088__auto___37109 = G__37110;
continue;
} else {
}
break;
}

var G__37043 = args37041.length;
switch (G__37043) {
case 1:
return sablono.core.tel_field37040.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field37040.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37041.length)].join('')));

}
});

sablono.core.tel_field37040.cljs$core$IFn$_invoke$arity$1 = (function (name__29818__auto__){
return sablono.core.tel_field37040.call(null,name__29818__auto__,null);
});

sablono.core.tel_field37040.cljs$core$IFn$_invoke$arity$2 = (function (name__29818__auto__,value__29819__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__29818__auto__,value__29819__auto__);
});

sablono.core.tel_field37040.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field37040);

/**
 * Creates a text input field.
 */
sablono.core.text_field37044 = (function sablono$core$text_field37044(var_args){
var args37045 = [];
var len__29087__auto___37112 = arguments.length;
var i__29088__auto___37113 = (0);
while(true){
if((i__29088__auto___37113 < len__29087__auto___37112)){
args37045.push((arguments[i__29088__auto___37113]));

var G__37114 = (i__29088__auto___37113 + (1));
i__29088__auto___37113 = G__37114;
continue;
} else {
}
break;
}

var G__37047 = args37045.length;
switch (G__37047) {
case 1:
return sablono.core.text_field37044.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field37044.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37045.length)].join('')));

}
});

sablono.core.text_field37044.cljs$core$IFn$_invoke$arity$1 = (function (name__29818__auto__){
return sablono.core.text_field37044.call(null,name__29818__auto__,null);
});

sablono.core.text_field37044.cljs$core$IFn$_invoke$arity$2 = (function (name__29818__auto__,value__29819__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__29818__auto__,value__29819__auto__);
});

sablono.core.text_field37044.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field37044);

/**
 * Creates a time input field.
 */
sablono.core.time_field37048 = (function sablono$core$time_field37048(var_args){
var args37049 = [];
var len__29087__auto___37116 = arguments.length;
var i__29088__auto___37117 = (0);
while(true){
if((i__29088__auto___37117 < len__29087__auto___37116)){
args37049.push((arguments[i__29088__auto___37117]));

var G__37118 = (i__29088__auto___37117 + (1));
i__29088__auto___37117 = G__37118;
continue;
} else {
}
break;
}

var G__37051 = args37049.length;
switch (G__37051) {
case 1:
return sablono.core.time_field37048.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field37048.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37049.length)].join('')));

}
});

sablono.core.time_field37048.cljs$core$IFn$_invoke$arity$1 = (function (name__29818__auto__){
return sablono.core.time_field37048.call(null,name__29818__auto__,null);
});

sablono.core.time_field37048.cljs$core$IFn$_invoke$arity$2 = (function (name__29818__auto__,value__29819__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__29818__auto__,value__29819__auto__);
});

sablono.core.time_field37048.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field37048);

/**
 * Creates a url input field.
 */
sablono.core.url_field37052 = (function sablono$core$url_field37052(var_args){
var args37053 = [];
var len__29087__auto___37120 = arguments.length;
var i__29088__auto___37121 = (0);
while(true){
if((i__29088__auto___37121 < len__29087__auto___37120)){
args37053.push((arguments[i__29088__auto___37121]));

var G__37122 = (i__29088__auto___37121 + (1));
i__29088__auto___37121 = G__37122;
continue;
} else {
}
break;
}

var G__37055 = args37053.length;
switch (G__37055) {
case 1:
return sablono.core.url_field37052.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field37052.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37053.length)].join('')));

}
});

sablono.core.url_field37052.cljs$core$IFn$_invoke$arity$1 = (function (name__29818__auto__){
return sablono.core.url_field37052.call(null,name__29818__auto__,null);
});

sablono.core.url_field37052.cljs$core$IFn$_invoke$arity$2 = (function (name__29818__auto__,value__29819__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__29818__auto__,value__29819__auto__);
});

sablono.core.url_field37052.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field37052);

/**
 * Creates a week input field.
 */
sablono.core.week_field37056 = (function sablono$core$week_field37056(var_args){
var args37057 = [];
var len__29087__auto___37124 = arguments.length;
var i__29088__auto___37125 = (0);
while(true){
if((i__29088__auto___37125 < len__29087__auto___37124)){
args37057.push((arguments[i__29088__auto___37125]));

var G__37126 = (i__29088__auto___37125 + (1));
i__29088__auto___37125 = G__37126;
continue;
} else {
}
break;
}

var G__37059 = args37057.length;
switch (G__37059) {
case 1:
return sablono.core.week_field37056.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field37056.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37057.length)].join('')));

}
});

sablono.core.week_field37056.cljs$core$IFn$_invoke$arity$1 = (function (name__29818__auto__){
return sablono.core.week_field37056.call(null,name__29818__auto__,null);
});

sablono.core.week_field37056.cljs$core$IFn$_invoke$arity$2 = (function (name__29818__auto__,value__29819__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__29818__auto__,value__29819__auto__);
});

sablono.core.week_field37056.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field37056);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box37128 = (function sablono$core$check_box37128(var_args){
var args37129 = [];
var len__29087__auto___37132 = arguments.length;
var i__29088__auto___37133 = (0);
while(true){
if((i__29088__auto___37133 < len__29087__auto___37132)){
args37129.push((arguments[i__29088__auto___37133]));

var G__37134 = (i__29088__auto___37133 + (1));
i__29088__auto___37133 = G__37134;
continue;
} else {
}
break;
}

var G__37131 = args37129.length;
switch (G__37131) {
case 1:
return sablono.core.check_box37128.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box37128.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box37128.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37129.length)].join('')));

}
});

sablono.core.check_box37128.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box37128.call(null,name,null);
});

sablono.core.check_box37128.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box37128.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box37128.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box37128.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box37128);
/**
 * Creates a radio button.
 */
sablono.core.radio_button37136 = (function sablono$core$radio_button37136(var_args){
var args37137 = [];
var len__29087__auto___37140 = arguments.length;
var i__29088__auto___37141 = (0);
while(true){
if((i__29088__auto___37141 < len__29087__auto___37140)){
args37137.push((arguments[i__29088__auto___37141]));

var G__37142 = (i__29088__auto___37141 + (1));
i__29088__auto___37141 = G__37142;
continue;
} else {
}
break;
}

var G__37139 = args37137.length;
switch (G__37139) {
case 1:
return sablono.core.radio_button37136.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button37136.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button37136.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37137.length)].join('')));

}
});

sablono.core.radio_button37136.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button37136.call(null,group,null);
});

sablono.core.radio_button37136.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button37136.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button37136.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button37136.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button37136);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options37144 = (function sablono$core$select_options37144(coll){
var iter__28792__auto__ = (function sablono$core$select_options37144_$_iter__37161(s__37162){
return (new cljs.core.LazySeq(null,(function (){
var s__37162__$1 = s__37162;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37162__$1);
if(temp__4657__auto__){
var s__37162__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37162__$2)){
var c__28790__auto__ = cljs.core.chunk_first.call(null,s__37162__$2);
var size__28791__auto__ = cljs.core.count.call(null,c__28790__auto__);
var b__37164 = cljs.core.chunk_buffer.call(null,size__28791__auto__);
if((function (){var i__37163 = (0);
while(true){
if((i__37163 < size__28791__auto__)){
var x = cljs.core._nth.call(null,c__28790__auto__,i__37163);
cljs.core.chunk_append.call(null,b__37164,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37171 = x;
var text = cljs.core.nth.call(null,vec__37171,(0),null);
var val = cljs.core.nth.call(null,vec__37171,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37171,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options37144.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__37177 = (i__37163 + (1));
i__37163 = G__37177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37164),sablono$core$select_options37144_$_iter__37161.call(null,cljs.core.chunk_rest.call(null,s__37162__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37164),null);
}
} else {
var x = cljs.core.first.call(null,s__37162__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37174 = x;
var text = cljs.core.nth.call(null,vec__37174,(0),null);
var val = cljs.core.nth.call(null,vec__37174,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37174,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options37144.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options37144_$_iter__37161.call(null,cljs.core.rest.call(null,s__37162__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28792__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options37144);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down37178 = (function sablono$core$drop_down37178(var_args){
var args37179 = [];
var len__29087__auto___37182 = arguments.length;
var i__29088__auto___37183 = (0);
while(true){
if((i__29088__auto___37183 < len__29087__auto___37182)){
args37179.push((arguments[i__29088__auto___37183]));

var G__37184 = (i__29088__auto___37183 + (1));
i__29088__auto___37183 = G__37184;
continue;
} else {
}
break;
}

var G__37181 = args37179.length;
switch (G__37181) {
case 2:
return sablono.core.drop_down37178.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down37178.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37179.length)].join('')));

}
});

sablono.core.drop_down37178.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down37178.call(null,name,options,null);
});

sablono.core.drop_down37178.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down37178.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down37178);
/**
 * Creates a text area element.
 */
sablono.core.text_area37186 = (function sablono$core$text_area37186(var_args){
var args37187 = [];
var len__29087__auto___37190 = arguments.length;
var i__29088__auto___37191 = (0);
while(true){
if((i__29088__auto___37191 < len__29087__auto___37190)){
args37187.push((arguments[i__29088__auto___37191]));

var G__37192 = (i__29088__auto___37191 + (1));
i__29088__auto___37191 = G__37192;
continue;
} else {
}
break;
}

var G__37189 = args37187.length;
switch (G__37189) {
case 1:
return sablono.core.text_area37186.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area37186.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37187.length)].join('')));

}
});

sablono.core.text_area37186.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area37186.call(null,name,null);
});

sablono.core.text_area37186.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area37186.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area37186);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label37194 = (function sablono$core$label37194(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label37194);
/**
 * Creates a submit button.
 */
sablono.core.submit_button37195 = (function sablono$core$submit_button37195(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button37195);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button37196 = (function sablono$core$reset_button37196(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button37196);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to37197 = (function sablono$core$form_to37197(var_args){
var args__29094__auto__ = [];
var len__29087__auto___37204 = arguments.length;
var i__29088__auto___37205 = (0);
while(true){
if((i__29088__auto___37205 < len__29087__auto___37204)){
args__29094__auto__.push((arguments[i__29088__auto___37205]));

var G__37206 = (i__29088__auto___37205 + (1));
i__29088__auto___37205 = G__37206;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((1) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to37197.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29095__auto__);
});

sablono.core.form_to37197.cljs$core$IFn$_invoke$arity$variadic = (function (p__37200,body){
var vec__37201 = p__37200;
var method = cljs.core.nth.call(null,vec__37201,(0),null);
var action = cljs.core.nth.call(null,vec__37201,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to37197.cljs$lang$maxFixedArity = (1);

sablono.core.form_to37197.cljs$lang$applyTo = (function (seq37198){
var G__37199 = cljs.core.first.call(null,seq37198);
var seq37198__$1 = cljs.core.next.call(null,seq37198);
return sablono.core.form_to37197.cljs$core$IFn$_invoke$arity$variadic(G__37199,seq37198__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to37197);

//# sourceMappingURL=core.js.map