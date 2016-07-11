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
var G__23833__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__23830 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__23831 = cljs.core.seq.call(null,vec__23830);
var first__23832 = cljs.core.first.call(null,seq__23831);
var seq__23831__$1 = cljs.core.next.call(null,seq__23831);
var tag = first__23832;
var body = seq__23831__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__23833 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23834__i = 0, G__23834__a = new Array(arguments.length -  0);
while (G__23834__i < G__23834__a.length) {G__23834__a[G__23834__i] = arguments[G__23834__i + 0]; ++G__23834__i;}
  args = new cljs.core.IndexedSeq(G__23834__a,0);
} 
return G__23833__delegate.call(this,args);};
G__23833.cljs$lang$maxFixedArity = 0;
G__23833.cljs$lang$applyTo = (function (arglist__23835){
var args = cljs.core.seq(arglist__23835);
return G__23833__delegate(args);
});
G__23833.cljs$core$IFn$_invoke$arity$variadic = G__23833__delegate;
return G__23833;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19244__auto__ = (function sablono$core$update_arglists_$_iter__23840(s__23841){
return (new cljs.core.LazySeq(null,(function (){
var s__23841__$1 = s__23841;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23841__$1);
if(temp__4657__auto__){
var s__23841__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23841__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__23841__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__23843 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__23842 = (0);
while(true){
if((i__23842 < size__19243__auto__)){
var args = cljs.core._nth.call(null,c__19242__auto__,i__23842);
cljs.core.chunk_append.call(null,b__23843,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__23844 = (i__23842 + (1));
i__23842 = G__23844;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23843),sablono$core$update_arglists_$_iter__23840.call(null,cljs.core.chunk_rest.call(null,s__23841__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23843),null);
}
} else {
var args = cljs.core.first.call(null,s__23841__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__23840.call(null,cljs.core.rest.call(null,s__23841__$2)));
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
var len__19539__auto___23850 = arguments.length;
var i__19540__auto___23851 = (0);
while(true){
if((i__19540__auto___23851 < len__19539__auto___23850)){
args__19546__auto__.push((arguments[i__19540__auto___23851]));

var G__23852 = (i__19540__auto___23851 + (1));
i__19540__auto___23851 = G__23852;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19244__auto__ = (function sablono$core$iter__23846(s__23847){
return (new cljs.core.LazySeq(null,(function (){
var s__23847__$1 = s__23847;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23847__$1);
if(temp__4657__auto__){
var s__23847__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23847__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__23847__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__23849 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__23848 = (0);
while(true){
if((i__23848 < size__19243__auto__)){
var style = cljs.core._nth.call(null,c__19242__auto__,i__23848);
cljs.core.chunk_append.call(null,b__23849,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__23853 = (i__23848 + (1));
i__23848 = G__23853;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23849),sablono$core$iter__23846.call(null,cljs.core.chunk_rest.call(null,s__23847__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23849),null);
}
} else {
var style = cljs.core.first.call(null,s__23847__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__23846.call(null,cljs.core.rest.call(null,s__23847__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq23845){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23845));
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
sablono.core.link_to23854 = (function sablono$core$link_to23854(var_args){
var args__19546__auto__ = [];
var len__19539__auto___23857 = arguments.length;
var i__19540__auto___23858 = (0);
while(true){
if((i__19540__auto___23858 < len__19539__auto___23857)){
args__19546__auto__.push((arguments[i__19540__auto___23858]));

var G__23859 = (i__19540__auto___23858 + (1));
i__19540__auto___23858 = G__23859;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to23854.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.link_to23854.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to23854.cljs$lang$maxFixedArity = (1);

sablono.core.link_to23854.cljs$lang$applyTo = (function (seq23855){
var G__23856 = cljs.core.first.call(null,seq23855);
var seq23855__$1 = cljs.core.next.call(null,seq23855);
return sablono.core.link_to23854.cljs$core$IFn$_invoke$arity$variadic(G__23856,seq23855__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to23854);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to23860 = (function sablono$core$mail_to23860(var_args){
var args__19546__auto__ = [];
var len__19539__auto___23867 = arguments.length;
var i__19540__auto___23868 = (0);
while(true){
if((i__19540__auto___23868 < len__19539__auto___23867)){
args__19546__auto__.push((arguments[i__19540__auto___23868]));

var G__23869 = (i__19540__auto___23868 + (1));
i__19540__auto___23868 = G__23869;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to23860.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.mail_to23860.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__23863){
var vec__23864 = p__23863;
var content = cljs.core.nth.call(null,vec__23864,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18464__auto__ = content;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to23860.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to23860.cljs$lang$applyTo = (function (seq23861){
var G__23862 = cljs.core.first.call(null,seq23861);
var seq23861__$1 = cljs.core.next.call(null,seq23861);
return sablono.core.mail_to23860.cljs$core$IFn$_invoke$arity$variadic(G__23862,seq23861__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to23860);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list23870 = (function sablono$core$unordered_list23870(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19244__auto__ = (function sablono$core$unordered_list23870_$_iter__23875(s__23876){
return (new cljs.core.LazySeq(null,(function (){
var s__23876__$1 = s__23876;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23876__$1);
if(temp__4657__auto__){
var s__23876__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23876__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__23876__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__23878 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__23877 = (0);
while(true){
if((i__23877 < size__19243__auto__)){
var x = cljs.core._nth.call(null,c__19242__auto__,i__23877);
cljs.core.chunk_append.call(null,b__23878,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23879 = (i__23877 + (1));
i__23877 = G__23879;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23878),sablono$core$unordered_list23870_$_iter__23875.call(null,cljs.core.chunk_rest.call(null,s__23876__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23878),null);
}
} else {
var x = cljs.core.first.call(null,s__23876__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list23870_$_iter__23875.call(null,cljs.core.rest.call(null,s__23876__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list23870);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list23880 = (function sablono$core$ordered_list23880(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19244__auto__ = (function sablono$core$ordered_list23880_$_iter__23885(s__23886){
return (new cljs.core.LazySeq(null,(function (){
var s__23886__$1 = s__23886;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23886__$1);
if(temp__4657__auto__){
var s__23886__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23886__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__23886__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__23888 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__23887 = (0);
while(true){
if((i__23887 < size__19243__auto__)){
var x = cljs.core._nth.call(null,c__19242__auto__,i__23887);
cljs.core.chunk_append.call(null,b__23888,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23889 = (i__23887 + (1));
i__23887 = G__23889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23888),sablono$core$ordered_list23880_$_iter__23885.call(null,cljs.core.chunk_rest.call(null,s__23886__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23888),null);
}
} else {
var x = cljs.core.first.call(null,s__23886__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list23880_$_iter__23885.call(null,cljs.core.rest.call(null,s__23886__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list23880);
/**
 * Create an image element.
 */
sablono.core.image23890 = (function sablono$core$image23890(var_args){
var args23891 = [];
var len__19539__auto___23894 = arguments.length;
var i__19540__auto___23895 = (0);
while(true){
if((i__19540__auto___23895 < len__19539__auto___23894)){
args23891.push((arguments[i__19540__auto___23895]));

var G__23896 = (i__19540__auto___23895 + (1));
i__19540__auto___23895 = G__23896;
continue;
} else {
}
break;
}

var G__23893 = args23891.length;
switch (G__23893) {
case 1:
return sablono.core.image23890.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image23890.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23891.length)].join('')));

}
});

sablono.core.image23890.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image23890.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image23890.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image23890);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__23898_SHARP_,p2__23899_SHARP_){
return [cljs.core.str(p1__23898_SHARP_),cljs.core.str("["),cljs.core.str(p2__23899_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__23900_SHARP_,p2__23901_SHARP_){
return [cljs.core.str(p1__23900_SHARP_),cljs.core.str("-"),cljs.core.str(p2__23901_SHARP_)].join('');
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
sablono.core.color_field23902 = (function sablono$core$color_field23902(var_args){
var args23903 = [];
var len__19539__auto___23970 = arguments.length;
var i__19540__auto___23971 = (0);
while(true){
if((i__19540__auto___23971 < len__19539__auto___23970)){
args23903.push((arguments[i__19540__auto___23971]));

var G__23972 = (i__19540__auto___23971 + (1));
i__19540__auto___23971 = G__23972;
continue;
} else {
}
break;
}

var G__23905 = args23903.length;
switch (G__23905) {
case 1:
return sablono.core.color_field23902.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field23902.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23903.length)].join('')));

}
});

sablono.core.color_field23902.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.color_field23902.call(null,name__23630__auto__,null);
});

sablono.core.color_field23902.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.color_field23902.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field23902);

/**
 * Creates a date input field.
 */
sablono.core.date_field23906 = (function sablono$core$date_field23906(var_args){
var args23907 = [];
var len__19539__auto___23974 = arguments.length;
var i__19540__auto___23975 = (0);
while(true){
if((i__19540__auto___23975 < len__19539__auto___23974)){
args23907.push((arguments[i__19540__auto___23975]));

var G__23976 = (i__19540__auto___23975 + (1));
i__19540__auto___23975 = G__23976;
continue;
} else {
}
break;
}

var G__23909 = args23907.length;
switch (G__23909) {
case 1:
return sablono.core.date_field23906.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field23906.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23907.length)].join('')));

}
});

sablono.core.date_field23906.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.date_field23906.call(null,name__23630__auto__,null);
});

sablono.core.date_field23906.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.date_field23906.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field23906);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field23910 = (function sablono$core$datetime_field23910(var_args){
var args23911 = [];
var len__19539__auto___23978 = arguments.length;
var i__19540__auto___23979 = (0);
while(true){
if((i__19540__auto___23979 < len__19539__auto___23978)){
args23911.push((arguments[i__19540__auto___23979]));

var G__23980 = (i__19540__auto___23979 + (1));
i__19540__auto___23979 = G__23980;
continue;
} else {
}
break;
}

var G__23913 = args23911.length;
switch (G__23913) {
case 1:
return sablono.core.datetime_field23910.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field23910.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23911.length)].join('')));

}
});

sablono.core.datetime_field23910.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.datetime_field23910.call(null,name__23630__auto__,null);
});

sablono.core.datetime_field23910.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.datetime_field23910.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field23910);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field23914 = (function sablono$core$datetime_local_field23914(var_args){
var args23915 = [];
var len__19539__auto___23982 = arguments.length;
var i__19540__auto___23983 = (0);
while(true){
if((i__19540__auto___23983 < len__19539__auto___23982)){
args23915.push((arguments[i__19540__auto___23983]));

var G__23984 = (i__19540__auto___23983 + (1));
i__19540__auto___23983 = G__23984;
continue;
} else {
}
break;
}

var G__23917 = args23915.length;
switch (G__23917) {
case 1:
return sablono.core.datetime_local_field23914.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field23914.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23915.length)].join('')));

}
});

sablono.core.datetime_local_field23914.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.datetime_local_field23914.call(null,name__23630__auto__,null);
});

sablono.core.datetime_local_field23914.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.datetime_local_field23914.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field23914);

/**
 * Creates a email input field.
 */
sablono.core.email_field23918 = (function sablono$core$email_field23918(var_args){
var args23919 = [];
var len__19539__auto___23986 = arguments.length;
var i__19540__auto___23987 = (0);
while(true){
if((i__19540__auto___23987 < len__19539__auto___23986)){
args23919.push((arguments[i__19540__auto___23987]));

var G__23988 = (i__19540__auto___23987 + (1));
i__19540__auto___23987 = G__23988;
continue;
} else {
}
break;
}

var G__23921 = args23919.length;
switch (G__23921) {
case 1:
return sablono.core.email_field23918.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field23918.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23919.length)].join('')));

}
});

sablono.core.email_field23918.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.email_field23918.call(null,name__23630__auto__,null);
});

sablono.core.email_field23918.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.email_field23918.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field23918);

/**
 * Creates a file input field.
 */
sablono.core.file_field23922 = (function sablono$core$file_field23922(var_args){
var args23923 = [];
var len__19539__auto___23990 = arguments.length;
var i__19540__auto___23991 = (0);
while(true){
if((i__19540__auto___23991 < len__19539__auto___23990)){
args23923.push((arguments[i__19540__auto___23991]));

var G__23992 = (i__19540__auto___23991 + (1));
i__19540__auto___23991 = G__23992;
continue;
} else {
}
break;
}

var G__23925 = args23923.length;
switch (G__23925) {
case 1:
return sablono.core.file_field23922.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field23922.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23923.length)].join('')));

}
});

sablono.core.file_field23922.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.file_field23922.call(null,name__23630__auto__,null);
});

sablono.core.file_field23922.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.file_field23922.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field23922);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field23926 = (function sablono$core$hidden_field23926(var_args){
var args23927 = [];
var len__19539__auto___23994 = arguments.length;
var i__19540__auto___23995 = (0);
while(true){
if((i__19540__auto___23995 < len__19539__auto___23994)){
args23927.push((arguments[i__19540__auto___23995]));

var G__23996 = (i__19540__auto___23995 + (1));
i__19540__auto___23995 = G__23996;
continue;
} else {
}
break;
}

var G__23929 = args23927.length;
switch (G__23929) {
case 1:
return sablono.core.hidden_field23926.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field23926.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23927.length)].join('')));

}
});

sablono.core.hidden_field23926.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.hidden_field23926.call(null,name__23630__auto__,null);
});

sablono.core.hidden_field23926.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.hidden_field23926.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field23926);

/**
 * Creates a month input field.
 */
sablono.core.month_field23930 = (function sablono$core$month_field23930(var_args){
var args23931 = [];
var len__19539__auto___23998 = arguments.length;
var i__19540__auto___23999 = (0);
while(true){
if((i__19540__auto___23999 < len__19539__auto___23998)){
args23931.push((arguments[i__19540__auto___23999]));

var G__24000 = (i__19540__auto___23999 + (1));
i__19540__auto___23999 = G__24000;
continue;
} else {
}
break;
}

var G__23933 = args23931.length;
switch (G__23933) {
case 1:
return sablono.core.month_field23930.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field23930.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23931.length)].join('')));

}
});

sablono.core.month_field23930.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.month_field23930.call(null,name__23630__auto__,null);
});

sablono.core.month_field23930.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.month_field23930.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field23930);

/**
 * Creates a number input field.
 */
sablono.core.number_field23934 = (function sablono$core$number_field23934(var_args){
var args23935 = [];
var len__19539__auto___24002 = arguments.length;
var i__19540__auto___24003 = (0);
while(true){
if((i__19540__auto___24003 < len__19539__auto___24002)){
args23935.push((arguments[i__19540__auto___24003]));

var G__24004 = (i__19540__auto___24003 + (1));
i__19540__auto___24003 = G__24004;
continue;
} else {
}
break;
}

var G__23937 = args23935.length;
switch (G__23937) {
case 1:
return sablono.core.number_field23934.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field23934.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23935.length)].join('')));

}
});

sablono.core.number_field23934.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.number_field23934.call(null,name__23630__auto__,null);
});

sablono.core.number_field23934.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.number_field23934.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field23934);

/**
 * Creates a password input field.
 */
sablono.core.password_field23938 = (function sablono$core$password_field23938(var_args){
var args23939 = [];
var len__19539__auto___24006 = arguments.length;
var i__19540__auto___24007 = (0);
while(true){
if((i__19540__auto___24007 < len__19539__auto___24006)){
args23939.push((arguments[i__19540__auto___24007]));

var G__24008 = (i__19540__auto___24007 + (1));
i__19540__auto___24007 = G__24008;
continue;
} else {
}
break;
}

var G__23941 = args23939.length;
switch (G__23941) {
case 1:
return sablono.core.password_field23938.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field23938.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23939.length)].join('')));

}
});

sablono.core.password_field23938.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.password_field23938.call(null,name__23630__auto__,null);
});

sablono.core.password_field23938.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.password_field23938.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field23938);

/**
 * Creates a range input field.
 */
sablono.core.range_field23942 = (function sablono$core$range_field23942(var_args){
var args23943 = [];
var len__19539__auto___24010 = arguments.length;
var i__19540__auto___24011 = (0);
while(true){
if((i__19540__auto___24011 < len__19539__auto___24010)){
args23943.push((arguments[i__19540__auto___24011]));

var G__24012 = (i__19540__auto___24011 + (1));
i__19540__auto___24011 = G__24012;
continue;
} else {
}
break;
}

var G__23945 = args23943.length;
switch (G__23945) {
case 1:
return sablono.core.range_field23942.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field23942.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23943.length)].join('')));

}
});

sablono.core.range_field23942.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.range_field23942.call(null,name__23630__auto__,null);
});

sablono.core.range_field23942.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.range_field23942.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field23942);

/**
 * Creates a search input field.
 */
sablono.core.search_field23946 = (function sablono$core$search_field23946(var_args){
var args23947 = [];
var len__19539__auto___24014 = arguments.length;
var i__19540__auto___24015 = (0);
while(true){
if((i__19540__auto___24015 < len__19539__auto___24014)){
args23947.push((arguments[i__19540__auto___24015]));

var G__24016 = (i__19540__auto___24015 + (1));
i__19540__auto___24015 = G__24016;
continue;
} else {
}
break;
}

var G__23949 = args23947.length;
switch (G__23949) {
case 1:
return sablono.core.search_field23946.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field23946.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23947.length)].join('')));

}
});

sablono.core.search_field23946.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.search_field23946.call(null,name__23630__auto__,null);
});

sablono.core.search_field23946.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.search_field23946.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field23946);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field23950 = (function sablono$core$tel_field23950(var_args){
var args23951 = [];
var len__19539__auto___24018 = arguments.length;
var i__19540__auto___24019 = (0);
while(true){
if((i__19540__auto___24019 < len__19539__auto___24018)){
args23951.push((arguments[i__19540__auto___24019]));

var G__24020 = (i__19540__auto___24019 + (1));
i__19540__auto___24019 = G__24020;
continue;
} else {
}
break;
}

var G__23953 = args23951.length;
switch (G__23953) {
case 1:
return sablono.core.tel_field23950.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field23950.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23951.length)].join('')));

}
});

sablono.core.tel_field23950.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.tel_field23950.call(null,name__23630__auto__,null);
});

sablono.core.tel_field23950.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.tel_field23950.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field23950);

/**
 * Creates a text input field.
 */
sablono.core.text_field23954 = (function sablono$core$text_field23954(var_args){
var args23955 = [];
var len__19539__auto___24022 = arguments.length;
var i__19540__auto___24023 = (0);
while(true){
if((i__19540__auto___24023 < len__19539__auto___24022)){
args23955.push((arguments[i__19540__auto___24023]));

var G__24024 = (i__19540__auto___24023 + (1));
i__19540__auto___24023 = G__24024;
continue;
} else {
}
break;
}

var G__23957 = args23955.length;
switch (G__23957) {
case 1:
return sablono.core.text_field23954.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field23954.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23955.length)].join('')));

}
});

sablono.core.text_field23954.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.text_field23954.call(null,name__23630__auto__,null);
});

sablono.core.text_field23954.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.text_field23954.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field23954);

/**
 * Creates a time input field.
 */
sablono.core.time_field23958 = (function sablono$core$time_field23958(var_args){
var args23959 = [];
var len__19539__auto___24026 = arguments.length;
var i__19540__auto___24027 = (0);
while(true){
if((i__19540__auto___24027 < len__19539__auto___24026)){
args23959.push((arguments[i__19540__auto___24027]));

var G__24028 = (i__19540__auto___24027 + (1));
i__19540__auto___24027 = G__24028;
continue;
} else {
}
break;
}

var G__23961 = args23959.length;
switch (G__23961) {
case 1:
return sablono.core.time_field23958.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field23958.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23959.length)].join('')));

}
});

sablono.core.time_field23958.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.time_field23958.call(null,name__23630__auto__,null);
});

sablono.core.time_field23958.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.time_field23958.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field23958);

/**
 * Creates a url input field.
 */
sablono.core.url_field23962 = (function sablono$core$url_field23962(var_args){
var args23963 = [];
var len__19539__auto___24030 = arguments.length;
var i__19540__auto___24031 = (0);
while(true){
if((i__19540__auto___24031 < len__19539__auto___24030)){
args23963.push((arguments[i__19540__auto___24031]));

var G__24032 = (i__19540__auto___24031 + (1));
i__19540__auto___24031 = G__24032;
continue;
} else {
}
break;
}

var G__23965 = args23963.length;
switch (G__23965) {
case 1:
return sablono.core.url_field23962.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field23962.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23963.length)].join('')));

}
});

sablono.core.url_field23962.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.url_field23962.call(null,name__23630__auto__,null);
});

sablono.core.url_field23962.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.url_field23962.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field23962);

/**
 * Creates a week input field.
 */
sablono.core.week_field23966 = (function sablono$core$week_field23966(var_args){
var args23967 = [];
var len__19539__auto___24034 = arguments.length;
var i__19540__auto___24035 = (0);
while(true){
if((i__19540__auto___24035 < len__19539__auto___24034)){
args23967.push((arguments[i__19540__auto___24035]));

var G__24036 = (i__19540__auto___24035 + (1));
i__19540__auto___24035 = G__24036;
continue;
} else {
}
break;
}

var G__23969 = args23967.length;
switch (G__23969) {
case 1:
return sablono.core.week_field23966.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field23966.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23967.length)].join('')));

}
});

sablono.core.week_field23966.cljs$core$IFn$_invoke$arity$1 = (function (name__23630__auto__){
return sablono.core.week_field23966.call(null,name__23630__auto__,null);
});

sablono.core.week_field23966.cljs$core$IFn$_invoke$arity$2 = (function (name__23630__auto__,value__23631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__23630__auto__,value__23631__auto__);
});

sablono.core.week_field23966.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field23966);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box24038 = (function sablono$core$check_box24038(var_args){
var args24039 = [];
var len__19539__auto___24042 = arguments.length;
var i__19540__auto___24043 = (0);
while(true){
if((i__19540__auto___24043 < len__19539__auto___24042)){
args24039.push((arguments[i__19540__auto___24043]));

var G__24044 = (i__19540__auto___24043 + (1));
i__19540__auto___24043 = G__24044;
continue;
} else {
}
break;
}

var G__24041 = args24039.length;
switch (G__24041) {
case 1:
return sablono.core.check_box24038.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box24038.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box24038.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24039.length)].join('')));

}
});

sablono.core.check_box24038.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box24038.call(null,name,null);
});

sablono.core.check_box24038.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box24038.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box24038.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box24038.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box24038);
/**
 * Creates a radio button.
 */
sablono.core.radio_button24046 = (function sablono$core$radio_button24046(var_args){
var args24047 = [];
var len__19539__auto___24050 = arguments.length;
var i__19540__auto___24051 = (0);
while(true){
if((i__19540__auto___24051 < len__19539__auto___24050)){
args24047.push((arguments[i__19540__auto___24051]));

var G__24052 = (i__19540__auto___24051 + (1));
i__19540__auto___24051 = G__24052;
continue;
} else {
}
break;
}

var G__24049 = args24047.length;
switch (G__24049) {
case 1:
return sablono.core.radio_button24046.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button24046.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button24046.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24047.length)].join('')));

}
});

sablono.core.radio_button24046.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button24046.call(null,group,null);
});

sablono.core.radio_button24046.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button24046.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button24046.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button24046.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button24046);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options24054 = (function sablono$core$select_options24054(coll){
var iter__19244__auto__ = (function sablono$core$select_options24054_$_iter__24071(s__24072){
return (new cljs.core.LazySeq(null,(function (){
var s__24072__$1 = s__24072;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24072__$1);
if(temp__4657__auto__){
var s__24072__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24072__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__24072__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__24074 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__24073 = (0);
while(true){
if((i__24073 < size__19243__auto__)){
var x = cljs.core._nth.call(null,c__19242__auto__,i__24073);
cljs.core.chunk_append.call(null,b__24074,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24081 = x;
var text = cljs.core.nth.call(null,vec__24081,(0),null);
var val = cljs.core.nth.call(null,vec__24081,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24081,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options24054.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__24087 = (i__24073 + (1));
i__24073 = G__24087;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24074),sablono$core$select_options24054_$_iter__24071.call(null,cljs.core.chunk_rest.call(null,s__24072__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24074),null);
}
} else {
var x = cljs.core.first.call(null,s__24072__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24084 = x;
var text = cljs.core.nth.call(null,vec__24084,(0),null);
var val = cljs.core.nth.call(null,vec__24084,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24084,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options24054.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options24054_$_iter__24071.call(null,cljs.core.rest.call(null,s__24072__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options24054);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down24088 = (function sablono$core$drop_down24088(var_args){
var args24089 = [];
var len__19539__auto___24092 = arguments.length;
var i__19540__auto___24093 = (0);
while(true){
if((i__19540__auto___24093 < len__19539__auto___24092)){
args24089.push((arguments[i__19540__auto___24093]));

var G__24094 = (i__19540__auto___24093 + (1));
i__19540__auto___24093 = G__24094;
continue;
} else {
}
break;
}

var G__24091 = args24089.length;
switch (G__24091) {
case 2:
return sablono.core.drop_down24088.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down24088.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24089.length)].join('')));

}
});

sablono.core.drop_down24088.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down24088.call(null,name,options,null);
});

sablono.core.drop_down24088.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down24088.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down24088);
/**
 * Creates a text area element.
 */
sablono.core.text_area24096 = (function sablono$core$text_area24096(var_args){
var args24097 = [];
var len__19539__auto___24100 = arguments.length;
var i__19540__auto___24101 = (0);
while(true){
if((i__19540__auto___24101 < len__19539__auto___24100)){
args24097.push((arguments[i__19540__auto___24101]));

var G__24102 = (i__19540__auto___24101 + (1));
i__19540__auto___24101 = G__24102;
continue;
} else {
}
break;
}

var G__24099 = args24097.length;
switch (G__24099) {
case 1:
return sablono.core.text_area24096.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area24096.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24097.length)].join('')));

}
});

sablono.core.text_area24096.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area24096.call(null,name,null);
});

sablono.core.text_area24096.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area24096.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area24096);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label24104 = (function sablono$core$label24104(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label24104);
/**
 * Creates a submit button.
 */
sablono.core.submit_button24105 = (function sablono$core$submit_button24105(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button24105);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button24106 = (function sablono$core$reset_button24106(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button24106);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to24107 = (function sablono$core$form_to24107(var_args){
var args__19546__auto__ = [];
var len__19539__auto___24114 = arguments.length;
var i__19540__auto___24115 = (0);
while(true){
if((i__19540__auto___24115 < len__19539__auto___24114)){
args__19546__auto__.push((arguments[i__19540__auto___24115]));

var G__24116 = (i__19540__auto___24115 + (1));
i__19540__auto___24115 = G__24116;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to24107.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.form_to24107.cljs$core$IFn$_invoke$arity$variadic = (function (p__24110,body){
var vec__24111 = p__24110;
var method = cljs.core.nth.call(null,vec__24111,(0),null);
var action = cljs.core.nth.call(null,vec__24111,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to24107.cljs$lang$maxFixedArity = (1);

sablono.core.form_to24107.cljs$lang$applyTo = (function (seq24108){
var G__24109 = cljs.core.first.call(null,seq24108);
var seq24108__$1 = cljs.core.next.call(null,seq24108);
return sablono.core.form_to24107.cljs$core$IFn$_invoke$arity$variadic(G__24109,seq24108__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to24107);

//# sourceMappingURL=core.js.map