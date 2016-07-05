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
var G__35023__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__35020 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__35021 = cljs.core.seq.call(null,vec__35020);
var first__35022 = cljs.core.first.call(null,seq__35021);
var seq__35021__$1 = cljs.core.next.call(null,seq__35021);
var tag = first__35022;
var body = seq__35021__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__35023 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35024__i = 0, G__35024__a = new Array(arguments.length -  0);
while (G__35024__i < G__35024__a.length) {G__35024__a[G__35024__i] = arguments[G__35024__i + 0]; ++G__35024__i;}
  args = new cljs.core.IndexedSeq(G__35024__a,0);
} 
return G__35023__delegate.call(this,args);};
G__35023.cljs$lang$maxFixedArity = 0;
G__35023.cljs$lang$applyTo = (function (arglist__35025){
var args = cljs.core.seq(arglist__35025);
return G__35023__delegate(args);
});
G__35023.cljs$core$IFn$_invoke$arity$variadic = G__35023__delegate;
return G__35023;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__28792__auto__ = (function sablono$core$update_arglists_$_iter__35030(s__35031){
return (new cljs.core.LazySeq(null,(function (){
var s__35031__$1 = s__35031;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35031__$1);
if(temp__4657__auto__){
var s__35031__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35031__$2)){
var c__28790__auto__ = cljs.core.chunk_first.call(null,s__35031__$2);
var size__28791__auto__ = cljs.core.count.call(null,c__28790__auto__);
var b__35033 = cljs.core.chunk_buffer.call(null,size__28791__auto__);
if((function (){var i__35032 = (0);
while(true){
if((i__35032 < size__28791__auto__)){
var args = cljs.core._nth.call(null,c__28790__auto__,i__35032);
cljs.core.chunk_append.call(null,b__35033,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__35034 = (i__35032 + (1));
i__35032 = G__35034;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35033),sablono$core$update_arglists_$_iter__35030.call(null,cljs.core.chunk_rest.call(null,s__35031__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35033),null);
}
} else {
var args = cljs.core.first.call(null,s__35031__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__35030.call(null,cljs.core.rest.call(null,s__35031__$2)));
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
var len__29087__auto___35040 = arguments.length;
var i__29088__auto___35041 = (0);
while(true){
if((i__29088__auto___35041 < len__29087__auto___35040)){
args__29094__auto__.push((arguments[i__29088__auto___35041]));

var G__35042 = (i__29088__auto___35041 + (1));
i__29088__auto___35041 = G__35042;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((0) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__29095__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__28792__auto__ = (function sablono$core$iter__35036(s__35037){
return (new cljs.core.LazySeq(null,(function (){
var s__35037__$1 = s__35037;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35037__$1);
if(temp__4657__auto__){
var s__35037__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35037__$2)){
var c__28790__auto__ = cljs.core.chunk_first.call(null,s__35037__$2);
var size__28791__auto__ = cljs.core.count.call(null,c__28790__auto__);
var b__35039 = cljs.core.chunk_buffer.call(null,size__28791__auto__);
if((function (){var i__35038 = (0);
while(true){
if((i__35038 < size__28791__auto__)){
var style = cljs.core._nth.call(null,c__28790__auto__,i__35038);
cljs.core.chunk_append.call(null,b__35039,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__35043 = (i__35038 + (1));
i__35038 = G__35043;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35039),sablono$core$iter__35036.call(null,cljs.core.chunk_rest.call(null,s__35037__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35039),null);
}
} else {
var style = cljs.core.first.call(null,s__35037__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__35036.call(null,cljs.core.rest.call(null,s__35037__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq35035){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35035));
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
sablono.core.link_to35044 = (function sablono$core$link_to35044(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35047 = arguments.length;
var i__29088__auto___35048 = (0);
while(true){
if((i__29088__auto___35048 < len__29087__auto___35047)){
args__29094__auto__.push((arguments[i__29088__auto___35048]));

var G__35049 = (i__29088__auto___35048 + (1));
i__29088__auto___35048 = G__35049;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((1) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to35044.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29095__auto__);
});

sablono.core.link_to35044.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to35044.cljs$lang$maxFixedArity = (1);

sablono.core.link_to35044.cljs$lang$applyTo = (function (seq35045){
var G__35046 = cljs.core.first.call(null,seq35045);
var seq35045__$1 = cljs.core.next.call(null,seq35045);
return sablono.core.link_to35044.cljs$core$IFn$_invoke$arity$variadic(G__35046,seq35045__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to35044);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to35050 = (function sablono$core$mail_to35050(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35057 = arguments.length;
var i__29088__auto___35058 = (0);
while(true){
if((i__29088__auto___35058 < len__29087__auto___35057)){
args__29094__auto__.push((arguments[i__29088__auto___35058]));

var G__35059 = (i__29088__auto___35058 + (1));
i__29088__auto___35058 = G__35059;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((1) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to35050.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29095__auto__);
});

sablono.core.mail_to35050.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__35053){
var vec__35054 = p__35053;
var content = cljs.core.nth.call(null,vec__35054,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__28012__auto__ = content;
if(cljs.core.truth_(or__28012__auto__)){
return or__28012__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to35050.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to35050.cljs$lang$applyTo = (function (seq35051){
var G__35052 = cljs.core.first.call(null,seq35051);
var seq35051__$1 = cljs.core.next.call(null,seq35051);
return sablono.core.mail_to35050.cljs$core$IFn$_invoke$arity$variadic(G__35052,seq35051__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to35050);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list35060 = (function sablono$core$unordered_list35060(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__28792__auto__ = (function sablono$core$unordered_list35060_$_iter__35065(s__35066){
return (new cljs.core.LazySeq(null,(function (){
var s__35066__$1 = s__35066;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35066__$1);
if(temp__4657__auto__){
var s__35066__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35066__$2)){
var c__28790__auto__ = cljs.core.chunk_first.call(null,s__35066__$2);
var size__28791__auto__ = cljs.core.count.call(null,c__28790__auto__);
var b__35068 = cljs.core.chunk_buffer.call(null,size__28791__auto__);
if((function (){var i__35067 = (0);
while(true){
if((i__35067 < size__28791__auto__)){
var x = cljs.core._nth.call(null,c__28790__auto__,i__35067);
cljs.core.chunk_append.call(null,b__35068,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__35069 = (i__35067 + (1));
i__35067 = G__35069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35068),sablono$core$unordered_list35060_$_iter__35065.call(null,cljs.core.chunk_rest.call(null,s__35066__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35068),null);
}
} else {
var x = cljs.core.first.call(null,s__35066__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list35060_$_iter__35065.call(null,cljs.core.rest.call(null,s__35066__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list35060);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list35070 = (function sablono$core$ordered_list35070(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__28792__auto__ = (function sablono$core$ordered_list35070_$_iter__35075(s__35076){
return (new cljs.core.LazySeq(null,(function (){
var s__35076__$1 = s__35076;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35076__$1);
if(temp__4657__auto__){
var s__35076__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35076__$2)){
var c__28790__auto__ = cljs.core.chunk_first.call(null,s__35076__$2);
var size__28791__auto__ = cljs.core.count.call(null,c__28790__auto__);
var b__35078 = cljs.core.chunk_buffer.call(null,size__28791__auto__);
if((function (){var i__35077 = (0);
while(true){
if((i__35077 < size__28791__auto__)){
var x = cljs.core._nth.call(null,c__28790__auto__,i__35077);
cljs.core.chunk_append.call(null,b__35078,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__35079 = (i__35077 + (1));
i__35077 = G__35079;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35078),sablono$core$ordered_list35070_$_iter__35075.call(null,cljs.core.chunk_rest.call(null,s__35076__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35078),null);
}
} else {
var x = cljs.core.first.call(null,s__35076__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list35070_$_iter__35075.call(null,cljs.core.rest.call(null,s__35076__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list35070);
/**
 * Create an image element.
 */
sablono.core.image35080 = (function sablono$core$image35080(var_args){
var args35081 = [];
var len__29087__auto___35084 = arguments.length;
var i__29088__auto___35085 = (0);
while(true){
if((i__29088__auto___35085 < len__29087__auto___35084)){
args35081.push((arguments[i__29088__auto___35085]));

var G__35086 = (i__29088__auto___35085 + (1));
i__29088__auto___35085 = G__35086;
continue;
} else {
}
break;
}

var G__35083 = args35081.length;
switch (G__35083) {
case 1:
return sablono.core.image35080.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image35080.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35081.length)].join('')));

}
});

sablono.core.image35080.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image35080.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image35080.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image35080);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__35088_SHARP_,p2__35089_SHARP_){
return [cljs.core.str(p1__35088_SHARP_),cljs.core.str("["),cljs.core.str(p2__35089_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__35090_SHARP_,p2__35091_SHARP_){
return [cljs.core.str(p1__35090_SHARP_),cljs.core.str("-"),cljs.core.str(p2__35091_SHARP_)].join('');
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
sablono.core.color_field35092 = (function sablono$core$color_field35092(var_args){
var args35093 = [];
var len__29087__auto___35160 = arguments.length;
var i__29088__auto___35161 = (0);
while(true){
if((i__29088__auto___35161 < len__29087__auto___35160)){
args35093.push((arguments[i__29088__auto___35161]));

var G__35162 = (i__29088__auto___35161 + (1));
i__29088__auto___35161 = G__35162;
continue;
} else {
}
break;
}

var G__35095 = args35093.length;
switch (G__35095) {
case 1:
return sablono.core.color_field35092.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field35092.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35093.length)].join('')));

}
});

sablono.core.color_field35092.cljs$core$IFn$_invoke$arity$1 = (function (name__29562__auto__){
return sablono.core.color_field35092.call(null,name__29562__auto__,null);
});

sablono.core.color_field35092.cljs$core$IFn$_invoke$arity$2 = (function (name__29562__auto__,value__29563__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__29562__auto__,value__29563__auto__);
});

sablono.core.color_field35092.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field35092);

/**
 * Creates a date input field.
 */
sablono.core.date_field35096 = (function sablono$core$date_field35096(var_args){
var args35097 = [];
var len__29087__auto___35164 = arguments.length;
var i__29088__auto___35165 = (0);
while(true){
if((i__29088__auto___35165 < len__29087__auto___35164)){
args35097.push((arguments[i__29088__auto___35165]));

var G__35166 = (i__29088__auto___35165 + (1));
i__29088__auto___35165 = G__35166;
continue;
} else {
}
break;
}

var G__35099 = args35097.length;
switch (G__35099) {
case 1:
return sablono.core.date_field35096.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field35096.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35097.length)].join('')));

}
});

sablono.core.date_field35096.cljs$core$IFn$_invoke$arity$1 = (function (name__29562__auto__){
return sablono.core.date_field35096.call(null,name__29562__auto__,null);
});

sablono.core.date_field35096.cljs$core$IFn$_invoke$arity$2 = (function (name__29562__auto__,value__29563__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__29562__auto__,value__29563__auto__);
});

sablono.core.date_field35096.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field35096);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field35100 = (function sablono$core$datetime_field35100(var_args){
var args35101 = [];
var len__29087__auto___35168 = arguments.length;
var i__29088__auto___35169 = (0);
while(true){
if((i__29088__auto___35169 < len__29087__auto___35168)){
args35101.push((arguments[i__29088__auto___35169]));

var G__35170 = (i__29088__auto___35169 + (1));
i__29088__auto___35169 = G__35170;
continue;
} else {
}
break;
}

var G__35103 = args35101.length;
switch (G__35103) {
case 1:
return sablono.core.datetime_field35100.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field35100.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35101.length)].join('')));

}
});

sablono.core.datetime_field35100.cljs$core$IFn$_invoke$arity$1 = (function (name__29562__auto__){
return sablono.core.datetime_field35100.call(null,name__29562__auto__,null);
});

sablono.core.datetime_field35100.cljs$core$IFn$_invoke$arity$2 = (function (name__29562__auto__,value__29563__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__29562__auto__,value__29563__auto__);
});

sablono.core.datetime_field35100.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field35100);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field35104 = (function sablono$core$datetime_local_field35104(var_args){
var args35105 = [];
var len__29087__auto___35172 = arguments.length;
var i__29088__auto___35173 = (0);
while(true){
if((i__29088__auto___35173 < len__29087__auto___35172)){
args35105.push((arguments[i__29088__auto___35173]));

var G__35174 = (i__29088__auto___35173 + (1));
i__29088__auto___35173 = G__35174;
continue;
} else {
}
break;
}

var G__35107 = args35105.length;
switch (G__35107) {
case 1:
return sablono.core.datetime_local_field35104.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field35104.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35105.length)].join('')));

}
});

sablono.core.datetime_local_field35104.cljs$core$IFn$_invoke$arity$1 = (function (name__29562__auto__){
return sablono.core.datetime_local_field35104.call(null,name__29562__auto__,null);
});

sablono.core.datetime_local_field35104.cljs$core$IFn$_invoke$arity$2 = (function (name__29562__auto__,value__29563__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__29562__auto__,value__29563__auto__);
});

sablono.core.datetime_local_field35104.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field35104);

/**
 * Creates a email input field.
 */
sablono.core.email_field35108 = (function sablono$core$email_field35108(var_args){
var args35109 = [];
var len__29087__auto___35176 = arguments.length;
var i__29088__auto___35177 = (0);
while(true){
if((i__29088__auto___35177 < len__29087__auto___35176)){
args35109.push((arguments[i__29088__auto___35177]));

var G__35178 = (i__29088__auto___35177 + (1));
i__29088__auto___35177 = G__35178;
continue;
} else {
}
break;
}

var G__35111 = args35109.length;
switch (G__35111) {
case 1:
return sablono.core.email_field35108.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field35108.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35109.length)].join('')));

}
});

sablono.core.email_field35108.cljs$core$IFn$_invoke$arity$1 = (function (name__29562__auto__){
return sablono.core.email_field35108.call(null,name__29562__auto__,null);
});

sablono.core.email_field35108.cljs$core$IFn$_invoke$arity$2 = (function (name__29562__auto__,value__29563__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__29562__auto__,value__29563__auto__);
});

sablono.core.email_field35108.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field35108);

/**
 * Creates a file input field.
 */
sablono.core.file_field35112 = (function sablono$core$file_field35112(var_args){
var args35113 = [];
var len__29087__auto___35180 = arguments.length;
var i__29088__auto___35181 = (0);
while(true){
if((i__29088__auto___35181 < len__29087__auto___35180)){
args35113.push((arguments[i__29088__auto___35181]));

var G__35182 = (i__29088__auto___35181 + (1));
i__29088__auto___35181 = G__35182;
continue;
} else {
}
break;
}

var G__35115 = args35113.length;
switch (G__35115) {
case 1:
return sablono.core.file_field35112.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field35112.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35113.length)].join('')));

}
});

sablono.core.file_field35112.cljs$core$IFn$_invoke$arity$1 = (function (name__29562__auto__){
return sablono.core.file_field35112.call(null,name__29562__auto__,null);
});

sablono.core.file_field35112.cljs$core$IFn$_invoke$arity$2 = (function (name__29562__auto__,value__29563__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__29562__auto__,value__29563__auto__);
});

sablono.core.file_field35112.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field35112);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field35116 = (function sablono$core$hidden_field35116(var_args){
var args35117 = [];
var len__29087__auto___35184 = arguments.length;
var i__29088__auto___35185 = (0);
while(true){
if((i__29088__auto___35185 < len__29087__auto___35184)){
args35117.push((arguments[i__29088__auto___35185]));

var G__35186 = (i__29088__auto___35185 + (1));
i__29088__auto___35185 = G__35186;
continue;
} else {
}
break;
}

var G__35119 = args35117.length;
switch (G__35119) {
case 1:
return sablono.core.hidden_field35116.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field35116.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35117.length)].join('')));

}
});

sablono.core.hidden_field35116.cljs$core$IFn$_invoke$arity$1 = (function (name__29562__auto__){
return sablono.core.hidden_field35116.call(null,name__29562__auto__,null);
});

sablono.core.hidden_field35116.cljs$core$IFn$_invoke$arity$2 = (function (name__29562__auto__,value__29563__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__29562__auto__,value__29563__auto__);
});

sablono.core.hidden_field35116.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field35116);

/**
 * Creates a month input field.
 */
sablono.core.month_field35120 = (function sablono$core$month_field35120(var_args){
var args35121 = [];
var len__29087__auto___35188 = arguments.length;
var i__29088__auto___35189 = (0);
while(true){
if((i__29088__auto___35189 < len__29087__auto___35188)){
args35121.push((arguments[i__29088__auto___35189]));

var G__35190 = (i__29088__auto___35189 + (1));
i__29088__auto___35189 = G__35190;
continue;
} else {
}
break;
}

var G__35123 = args35121.length;
switch (G__35123) {
case 1:
return sablono.core.month_field35120.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field35120.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35121.length)].join('')));

}
});

sablono.core.month_field35120.cljs$core$IFn$_invoke$arity$1 = (function (name__29562__auto__){
return sablono.core.month_field35120.call(null,name__29562__auto__,null);
});

sablono.core.month_field35120.cljs$core$IFn$_invoke$arity$2 = (function (name__29562__auto__,value__29563__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__29562__auto__,value__29563__auto__);
});

sablono.core.month_field35120.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field35120);

/**
 * Creates a number input field.
 */
sablono.core.number_field35124 = (function sablono$core$number_field35124(var_args){
var args35125 = [];
var len__29087__auto___35192 = arguments.length;
var i__29088__auto___35193 = (0);
while(true){
if((i__29088__auto___35193 < len__29087__auto___35192)){
args35125.push((arguments[i__29088__auto___35193]));

var G__35194 = (i__29088__auto___35193 + (1));
i__29088__auto___35193 = G__35194;
continue;
} else {
}
break;
}

var G__35127 = args35125.length;
switch (G__35127) {
case 1:
return sablono.core.number_field35124.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field35124.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35125.length)].join('')));

}
});

sablono.core.number_field35124.cljs$core$IFn$_invoke$arity$1 = (function (name__29562__auto__){
return sablono.core.number_field35124.call(null,name__29562__auto__,null);
});

sablono.core.number_field35124.cljs$core$IFn$_invoke$arity$2 = (function (name__29562__auto__,value__29563__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__29562__auto__,value__29563__auto__);
});

sablono.core.number_field35124.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field35124);

/**
 * Creates a password input field.
 */
sablono.core.password_field35128 = (function sablono$core$password_field35128(var_args){
var args35129 = [];
var len__29087__auto___35196 = arguments.length;
var i__29088__auto___35197 = (0);
while(true){
if((i__29088__auto___35197 < len__29087__auto___35196)){
args35129.push((arguments[i__29088__auto___35197]));

var G__35198 = (i__29088__auto___35197 + (1));
i__29088__auto___35197 = G__35198;
continue;
} else {
}
break;
}

var G__35131 = args35129.length;
switch (G__35131) {
case 1:
return sablono.core.password_field35128.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field35128.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35129.length)].join('')));

}
});

sablono.core.password_field35128.cljs$core$IFn$_invoke$arity$1 = (function (name__29562__auto__){
return sablono.core.password_field35128.call(null,name__29562__auto__,null);
});

sablono.core.password_field35128.cljs$core$IFn$_invoke$arity$2 = (function (name__29562__auto__,value__29563__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__29562__auto__,value__29563__auto__);
});

sablono.core.password_field35128.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field35128);

/**
 * Creates a range input field.
 */
sablono.core.range_field35132 = (function sablono$core$range_field35132(var_args){
var args35133 = [];
var len__29087__auto___35200 = arguments.length;
var i__29088__auto___35201 = (0);
while(true){
if((i__29088__auto___35201 < len__29087__auto___35200)){
args35133.push((arguments[i__29088__auto___35201]));

var G__35202 = (i__29088__auto___35201 + (1));
i__29088__auto___35201 = G__35202;
continue;
} else {
}
break;
}

var G__35135 = args35133.length;
switch (G__35135) {
case 1:
return sablono.core.range_field35132.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field35132.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35133.length)].join('')));

}
});

sablono.core.range_field35132.cljs$core$IFn$_invoke$arity$1 = (function (name__29562__auto__){
return sablono.core.range_field35132.call(null,name__29562__auto__,null);
});

sablono.core.range_field35132.cljs$core$IFn$_invoke$arity$2 = (function (name__29562__auto__,value__29563__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__29562__auto__,value__29563__auto__);
});

sablono.core.range_field35132.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field35132);

/**
 * Creates a search input field.
 */
sablono.core.search_field35136 = (function sablono$core$search_field35136(var_args){
var args35137 = [];
var len__29087__auto___35204 = arguments.length;
var i__29088__auto___35205 = (0);
while(true){
if((i__29088__auto___35205 < len__29087__auto___35204)){
args35137.push((arguments[i__29088__auto___35205]));

var G__35206 = (i__29088__auto___35205 + (1));
i__29088__auto___35205 = G__35206;
continue;
} else {
}
break;
}

var G__35139 = args35137.length;
switch (G__35139) {
case 1:
return sablono.core.search_field35136.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field35136.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35137.length)].join('')));

}
});

sablono.core.search_field35136.cljs$core$IFn$_invoke$arity$1 = (function (name__29562__auto__){
return sablono.core.search_field35136.call(null,name__29562__auto__,null);
});

sablono.core.search_field35136.cljs$core$IFn$_invoke$arity$2 = (function (name__29562__auto__,value__29563__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__29562__auto__,value__29563__auto__);
});

sablono.core.search_field35136.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field35136);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field35140 = (function sablono$core$tel_field35140(var_args){
var args35141 = [];
var len__29087__auto___35208 = arguments.length;
var i__29088__auto___35209 = (0);
while(true){
if((i__29088__auto___35209 < len__29087__auto___35208)){
args35141.push((arguments[i__29088__auto___35209]));

var G__35210 = (i__29088__auto___35209 + (1));
i__29088__auto___35209 = G__35210;
continue;
} else {
}
break;
}

var G__35143 = args35141.length;
switch (G__35143) {
case 1:
return sablono.core.tel_field35140.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field35140.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35141.length)].join('')));

}
});

sablono.core.tel_field35140.cljs$core$IFn$_invoke$arity$1 = (function (name__29562__auto__){
return sablono.core.tel_field35140.call(null,name__29562__auto__,null);
});

sablono.core.tel_field35140.cljs$core$IFn$_invoke$arity$2 = (function (name__29562__auto__,value__29563__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__29562__auto__,value__29563__auto__);
});

sablono.core.tel_field35140.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field35140);

/**
 * Creates a text input field.
 */
sablono.core.text_field35144 = (function sablono$core$text_field35144(var_args){
var args35145 = [];
var len__29087__auto___35212 = arguments.length;
var i__29088__auto___35213 = (0);
while(true){
if((i__29088__auto___35213 < len__29087__auto___35212)){
args35145.push((arguments[i__29088__auto___35213]));

var G__35214 = (i__29088__auto___35213 + (1));
i__29088__auto___35213 = G__35214;
continue;
} else {
}
break;
}

var G__35147 = args35145.length;
switch (G__35147) {
case 1:
return sablono.core.text_field35144.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field35144.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35145.length)].join('')));

}
});

sablono.core.text_field35144.cljs$core$IFn$_invoke$arity$1 = (function (name__29562__auto__){
return sablono.core.text_field35144.call(null,name__29562__auto__,null);
});

sablono.core.text_field35144.cljs$core$IFn$_invoke$arity$2 = (function (name__29562__auto__,value__29563__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__29562__auto__,value__29563__auto__);
});

sablono.core.text_field35144.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field35144);

/**
 * Creates a time input field.
 */
sablono.core.time_field35148 = (function sablono$core$time_field35148(var_args){
var args35149 = [];
var len__29087__auto___35216 = arguments.length;
var i__29088__auto___35217 = (0);
while(true){
if((i__29088__auto___35217 < len__29087__auto___35216)){
args35149.push((arguments[i__29088__auto___35217]));

var G__35218 = (i__29088__auto___35217 + (1));
i__29088__auto___35217 = G__35218;
continue;
} else {
}
break;
}

var G__35151 = args35149.length;
switch (G__35151) {
case 1:
return sablono.core.time_field35148.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field35148.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35149.length)].join('')));

}
});

sablono.core.time_field35148.cljs$core$IFn$_invoke$arity$1 = (function (name__29562__auto__){
return sablono.core.time_field35148.call(null,name__29562__auto__,null);
});

sablono.core.time_field35148.cljs$core$IFn$_invoke$arity$2 = (function (name__29562__auto__,value__29563__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__29562__auto__,value__29563__auto__);
});

sablono.core.time_field35148.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field35148);

/**
 * Creates a url input field.
 */
sablono.core.url_field35152 = (function sablono$core$url_field35152(var_args){
var args35153 = [];
var len__29087__auto___35220 = arguments.length;
var i__29088__auto___35221 = (0);
while(true){
if((i__29088__auto___35221 < len__29087__auto___35220)){
args35153.push((arguments[i__29088__auto___35221]));

var G__35222 = (i__29088__auto___35221 + (1));
i__29088__auto___35221 = G__35222;
continue;
} else {
}
break;
}

var G__35155 = args35153.length;
switch (G__35155) {
case 1:
return sablono.core.url_field35152.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field35152.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35153.length)].join('')));

}
});

sablono.core.url_field35152.cljs$core$IFn$_invoke$arity$1 = (function (name__29562__auto__){
return sablono.core.url_field35152.call(null,name__29562__auto__,null);
});

sablono.core.url_field35152.cljs$core$IFn$_invoke$arity$2 = (function (name__29562__auto__,value__29563__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__29562__auto__,value__29563__auto__);
});

sablono.core.url_field35152.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field35152);

/**
 * Creates a week input field.
 */
sablono.core.week_field35156 = (function sablono$core$week_field35156(var_args){
var args35157 = [];
var len__29087__auto___35224 = arguments.length;
var i__29088__auto___35225 = (0);
while(true){
if((i__29088__auto___35225 < len__29087__auto___35224)){
args35157.push((arguments[i__29088__auto___35225]));

var G__35226 = (i__29088__auto___35225 + (1));
i__29088__auto___35225 = G__35226;
continue;
} else {
}
break;
}

var G__35159 = args35157.length;
switch (G__35159) {
case 1:
return sablono.core.week_field35156.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field35156.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35157.length)].join('')));

}
});

sablono.core.week_field35156.cljs$core$IFn$_invoke$arity$1 = (function (name__29562__auto__){
return sablono.core.week_field35156.call(null,name__29562__auto__,null);
});

sablono.core.week_field35156.cljs$core$IFn$_invoke$arity$2 = (function (name__29562__auto__,value__29563__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__29562__auto__,value__29563__auto__);
});

sablono.core.week_field35156.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field35156);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box35228 = (function sablono$core$check_box35228(var_args){
var args35229 = [];
var len__29087__auto___35232 = arguments.length;
var i__29088__auto___35233 = (0);
while(true){
if((i__29088__auto___35233 < len__29087__auto___35232)){
args35229.push((arguments[i__29088__auto___35233]));

var G__35234 = (i__29088__auto___35233 + (1));
i__29088__auto___35233 = G__35234;
continue;
} else {
}
break;
}

var G__35231 = args35229.length;
switch (G__35231) {
case 1:
return sablono.core.check_box35228.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box35228.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box35228.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35229.length)].join('')));

}
});

sablono.core.check_box35228.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box35228.call(null,name,null);
});

sablono.core.check_box35228.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box35228.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box35228.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box35228.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box35228);
/**
 * Creates a radio button.
 */
sablono.core.radio_button35236 = (function sablono$core$radio_button35236(var_args){
var args35237 = [];
var len__29087__auto___35240 = arguments.length;
var i__29088__auto___35241 = (0);
while(true){
if((i__29088__auto___35241 < len__29087__auto___35240)){
args35237.push((arguments[i__29088__auto___35241]));

var G__35242 = (i__29088__auto___35241 + (1));
i__29088__auto___35241 = G__35242;
continue;
} else {
}
break;
}

var G__35239 = args35237.length;
switch (G__35239) {
case 1:
return sablono.core.radio_button35236.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button35236.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button35236.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35237.length)].join('')));

}
});

sablono.core.radio_button35236.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button35236.call(null,group,null);
});

sablono.core.radio_button35236.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button35236.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button35236.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button35236.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button35236);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options35244 = (function sablono$core$select_options35244(coll){
var iter__28792__auto__ = (function sablono$core$select_options35244_$_iter__35261(s__35262){
return (new cljs.core.LazySeq(null,(function (){
var s__35262__$1 = s__35262;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35262__$1);
if(temp__4657__auto__){
var s__35262__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35262__$2)){
var c__28790__auto__ = cljs.core.chunk_first.call(null,s__35262__$2);
var size__28791__auto__ = cljs.core.count.call(null,c__28790__auto__);
var b__35264 = cljs.core.chunk_buffer.call(null,size__28791__auto__);
if((function (){var i__35263 = (0);
while(true){
if((i__35263 < size__28791__auto__)){
var x = cljs.core._nth.call(null,c__28790__auto__,i__35263);
cljs.core.chunk_append.call(null,b__35264,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__35271 = x;
var text = cljs.core.nth.call(null,vec__35271,(0),null);
var val = cljs.core.nth.call(null,vec__35271,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__35271,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options35244.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__35277 = (i__35263 + (1));
i__35263 = G__35277;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35264),sablono$core$select_options35244_$_iter__35261.call(null,cljs.core.chunk_rest.call(null,s__35262__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35264),null);
}
} else {
var x = cljs.core.first.call(null,s__35262__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__35274 = x;
var text = cljs.core.nth.call(null,vec__35274,(0),null);
var val = cljs.core.nth.call(null,vec__35274,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__35274,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options35244.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options35244_$_iter__35261.call(null,cljs.core.rest.call(null,s__35262__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options35244);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down35278 = (function sablono$core$drop_down35278(var_args){
var args35279 = [];
var len__29087__auto___35282 = arguments.length;
var i__29088__auto___35283 = (0);
while(true){
if((i__29088__auto___35283 < len__29087__auto___35282)){
args35279.push((arguments[i__29088__auto___35283]));

var G__35284 = (i__29088__auto___35283 + (1));
i__29088__auto___35283 = G__35284;
continue;
} else {
}
break;
}

var G__35281 = args35279.length;
switch (G__35281) {
case 2:
return sablono.core.drop_down35278.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down35278.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35279.length)].join('')));

}
});

sablono.core.drop_down35278.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down35278.call(null,name,options,null);
});

sablono.core.drop_down35278.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down35278.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down35278);
/**
 * Creates a text area element.
 */
sablono.core.text_area35286 = (function sablono$core$text_area35286(var_args){
var args35287 = [];
var len__29087__auto___35290 = arguments.length;
var i__29088__auto___35291 = (0);
while(true){
if((i__29088__auto___35291 < len__29087__auto___35290)){
args35287.push((arguments[i__29088__auto___35291]));

var G__35292 = (i__29088__auto___35291 + (1));
i__29088__auto___35291 = G__35292;
continue;
} else {
}
break;
}

var G__35289 = args35287.length;
switch (G__35289) {
case 1:
return sablono.core.text_area35286.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area35286.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35287.length)].join('')));

}
});

sablono.core.text_area35286.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area35286.call(null,name,null);
});

sablono.core.text_area35286.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area35286.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area35286);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label35294 = (function sablono$core$label35294(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label35294);
/**
 * Creates a submit button.
 */
sablono.core.submit_button35295 = (function sablono$core$submit_button35295(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button35295);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button35296 = (function sablono$core$reset_button35296(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button35296);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to35297 = (function sablono$core$form_to35297(var_args){
var args__29094__auto__ = [];
var len__29087__auto___35304 = arguments.length;
var i__29088__auto___35305 = (0);
while(true){
if((i__29088__auto___35305 < len__29087__auto___35304)){
args__29094__auto__.push((arguments[i__29088__auto___35305]));

var G__35306 = (i__29088__auto___35305 + (1));
i__29088__auto___35305 = G__35306;
continue;
} else {
}
break;
}

var argseq__29095__auto__ = ((((1) < args__29094__auto__.length))?(new cljs.core.IndexedSeq(args__29094__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to35297.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29095__auto__);
});

sablono.core.form_to35297.cljs$core$IFn$_invoke$arity$variadic = (function (p__35300,body){
var vec__35301 = p__35300;
var method = cljs.core.nth.call(null,vec__35301,(0),null);
var action = cljs.core.nth.call(null,vec__35301,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to35297.cljs$lang$maxFixedArity = (1);

sablono.core.form_to35297.cljs$lang$applyTo = (function (seq35298){
var G__35299 = cljs.core.first.call(null,seq35298);
var seq35298__$1 = cljs.core.next.call(null,seq35298);
return sablono.core.form_to35297.cljs$core$IFn$_invoke$arity$variadic(G__35299,seq35298__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to35297);

//# sourceMappingURL=core.js.map