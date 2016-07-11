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
var G__20206__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__20203 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__20204 = cljs.core.seq.call(null,vec__20203);
var first__20205 = cljs.core.first.call(null,seq__20204);
var seq__20204__$1 = cljs.core.next.call(null,seq__20204);
var tag = first__20205;
var body = seq__20204__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__20206 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20207__i = 0, G__20207__a = new Array(arguments.length -  0);
while (G__20207__i < G__20207__a.length) {G__20207__a[G__20207__i] = arguments[G__20207__i + 0]; ++G__20207__i;}
  args = new cljs.core.IndexedSeq(G__20207__a,0);
} 
return G__20206__delegate.call(this,args);};
G__20206.cljs$lang$maxFixedArity = 0;
G__20206.cljs$lang$applyTo = (function (arglist__20208){
var args = cljs.core.seq(arglist__20208);
return G__20206__delegate(args);
});
G__20206.cljs$core$IFn$_invoke$arity$variadic = G__20206__delegate;
return G__20206;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19244__auto__ = (function sablono$core$update_arglists_$_iter__20213(s__20214){
return (new cljs.core.LazySeq(null,(function (){
var s__20214__$1 = s__20214;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20214__$1);
if(temp__4657__auto__){
var s__20214__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20214__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__20214__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__20216 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__20215 = (0);
while(true){
if((i__20215 < size__19243__auto__)){
var args = cljs.core._nth.call(null,c__19242__auto__,i__20215);
cljs.core.chunk_append.call(null,b__20216,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__20217 = (i__20215 + (1));
i__20215 = G__20217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20216),sablono$core$update_arglists_$_iter__20213.call(null,cljs.core.chunk_rest.call(null,s__20214__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20216),null);
}
} else {
var args = cljs.core.first.call(null,s__20214__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__20213.call(null,cljs.core.rest.call(null,s__20214__$2)));
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
var len__19539__auto___20223 = arguments.length;
var i__19540__auto___20224 = (0);
while(true){
if((i__19540__auto___20224 < len__19539__auto___20223)){
args__19546__auto__.push((arguments[i__19540__auto___20224]));

var G__20225 = (i__19540__auto___20224 + (1));
i__19540__auto___20224 = G__20225;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19244__auto__ = (function sablono$core$iter__20219(s__20220){
return (new cljs.core.LazySeq(null,(function (){
var s__20220__$1 = s__20220;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20220__$1);
if(temp__4657__auto__){
var s__20220__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20220__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__20220__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__20222 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__20221 = (0);
while(true){
if((i__20221 < size__19243__auto__)){
var style = cljs.core._nth.call(null,c__19242__auto__,i__20221);
cljs.core.chunk_append.call(null,b__20222,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__20226 = (i__20221 + (1));
i__20221 = G__20226;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20222),sablono$core$iter__20219.call(null,cljs.core.chunk_rest.call(null,s__20220__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20222),null);
}
} else {
var style = cljs.core.first.call(null,s__20220__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__20219.call(null,cljs.core.rest.call(null,s__20220__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq20218){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20218));
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
sablono.core.link_to20227 = (function sablono$core$link_to20227(var_args){
var args__19546__auto__ = [];
var len__19539__auto___20230 = arguments.length;
var i__19540__auto___20231 = (0);
while(true){
if((i__19540__auto___20231 < len__19539__auto___20230)){
args__19546__auto__.push((arguments[i__19540__auto___20231]));

var G__20232 = (i__19540__auto___20231 + (1));
i__19540__auto___20231 = G__20232;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to20227.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.link_to20227.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to20227.cljs$lang$maxFixedArity = (1);

sablono.core.link_to20227.cljs$lang$applyTo = (function (seq20228){
var G__20229 = cljs.core.first.call(null,seq20228);
var seq20228__$1 = cljs.core.next.call(null,seq20228);
return sablono.core.link_to20227.cljs$core$IFn$_invoke$arity$variadic(G__20229,seq20228__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to20227);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to20233 = (function sablono$core$mail_to20233(var_args){
var args__19546__auto__ = [];
var len__19539__auto___20240 = arguments.length;
var i__19540__auto___20241 = (0);
while(true){
if((i__19540__auto___20241 < len__19539__auto___20240)){
args__19546__auto__.push((arguments[i__19540__auto___20241]));

var G__20242 = (i__19540__auto___20241 + (1));
i__19540__auto___20241 = G__20242;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to20233.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.mail_to20233.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__20236){
var vec__20237 = p__20236;
var content = cljs.core.nth.call(null,vec__20237,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18464__auto__ = content;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to20233.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to20233.cljs$lang$applyTo = (function (seq20234){
var G__20235 = cljs.core.first.call(null,seq20234);
var seq20234__$1 = cljs.core.next.call(null,seq20234);
return sablono.core.mail_to20233.cljs$core$IFn$_invoke$arity$variadic(G__20235,seq20234__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to20233);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list20243 = (function sablono$core$unordered_list20243(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19244__auto__ = (function sablono$core$unordered_list20243_$_iter__20248(s__20249){
return (new cljs.core.LazySeq(null,(function (){
var s__20249__$1 = s__20249;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20249__$1);
if(temp__4657__auto__){
var s__20249__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20249__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__20249__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__20251 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__20250 = (0);
while(true){
if((i__20250 < size__19243__auto__)){
var x = cljs.core._nth.call(null,c__19242__auto__,i__20250);
cljs.core.chunk_append.call(null,b__20251,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__20252 = (i__20250 + (1));
i__20250 = G__20252;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20251),sablono$core$unordered_list20243_$_iter__20248.call(null,cljs.core.chunk_rest.call(null,s__20249__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20251),null);
}
} else {
var x = cljs.core.first.call(null,s__20249__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list20243_$_iter__20248.call(null,cljs.core.rest.call(null,s__20249__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list20243);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list20253 = (function sablono$core$ordered_list20253(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19244__auto__ = (function sablono$core$ordered_list20253_$_iter__20258(s__20259){
return (new cljs.core.LazySeq(null,(function (){
var s__20259__$1 = s__20259;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20259__$1);
if(temp__4657__auto__){
var s__20259__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20259__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__20259__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__20261 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__20260 = (0);
while(true){
if((i__20260 < size__19243__auto__)){
var x = cljs.core._nth.call(null,c__19242__auto__,i__20260);
cljs.core.chunk_append.call(null,b__20261,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__20262 = (i__20260 + (1));
i__20260 = G__20262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20261),sablono$core$ordered_list20253_$_iter__20258.call(null,cljs.core.chunk_rest.call(null,s__20259__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20261),null);
}
} else {
var x = cljs.core.first.call(null,s__20259__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list20253_$_iter__20258.call(null,cljs.core.rest.call(null,s__20259__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list20253);
/**
 * Create an image element.
 */
sablono.core.image20263 = (function sablono$core$image20263(var_args){
var args20264 = [];
var len__19539__auto___20267 = arguments.length;
var i__19540__auto___20268 = (0);
while(true){
if((i__19540__auto___20268 < len__19539__auto___20267)){
args20264.push((arguments[i__19540__auto___20268]));

var G__20269 = (i__19540__auto___20268 + (1));
i__19540__auto___20268 = G__20269;
continue;
} else {
}
break;
}

var G__20266 = args20264.length;
switch (G__20266) {
case 1:
return sablono.core.image20263.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image20263.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20264.length)].join('')));

}
});

sablono.core.image20263.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image20263.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image20263.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image20263);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__20271_SHARP_,p2__20272_SHARP_){
return [cljs.core.str(p1__20271_SHARP_),cljs.core.str("["),cljs.core.str(p2__20272_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__20273_SHARP_,p2__20274_SHARP_){
return [cljs.core.str(p1__20273_SHARP_),cljs.core.str("-"),cljs.core.str(p2__20274_SHARP_)].join('');
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
sablono.core.color_field20275 = (function sablono$core$color_field20275(var_args){
var args20276 = [];
var len__19539__auto___20343 = arguments.length;
var i__19540__auto___20344 = (0);
while(true){
if((i__19540__auto___20344 < len__19539__auto___20343)){
args20276.push((arguments[i__19540__auto___20344]));

var G__20345 = (i__19540__auto___20344 + (1));
i__19540__auto___20344 = G__20345;
continue;
} else {
}
break;
}

var G__20278 = args20276.length;
switch (G__20278) {
case 1:
return sablono.core.color_field20275.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field20275.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20276.length)].join('')));

}
});

sablono.core.color_field20275.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.color_field20275.call(null,name__20190__auto__,null);
});

sablono.core.color_field20275.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.color_field20275.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field20275);

/**
 * Creates a date input field.
 */
sablono.core.date_field20279 = (function sablono$core$date_field20279(var_args){
var args20280 = [];
var len__19539__auto___20347 = arguments.length;
var i__19540__auto___20348 = (0);
while(true){
if((i__19540__auto___20348 < len__19539__auto___20347)){
args20280.push((arguments[i__19540__auto___20348]));

var G__20349 = (i__19540__auto___20348 + (1));
i__19540__auto___20348 = G__20349;
continue;
} else {
}
break;
}

var G__20282 = args20280.length;
switch (G__20282) {
case 1:
return sablono.core.date_field20279.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field20279.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20280.length)].join('')));

}
});

sablono.core.date_field20279.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.date_field20279.call(null,name__20190__auto__,null);
});

sablono.core.date_field20279.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.date_field20279.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field20279);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field20283 = (function sablono$core$datetime_field20283(var_args){
var args20284 = [];
var len__19539__auto___20351 = arguments.length;
var i__19540__auto___20352 = (0);
while(true){
if((i__19540__auto___20352 < len__19539__auto___20351)){
args20284.push((arguments[i__19540__auto___20352]));

var G__20353 = (i__19540__auto___20352 + (1));
i__19540__auto___20352 = G__20353;
continue;
} else {
}
break;
}

var G__20286 = args20284.length;
switch (G__20286) {
case 1:
return sablono.core.datetime_field20283.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field20283.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20284.length)].join('')));

}
});

sablono.core.datetime_field20283.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.datetime_field20283.call(null,name__20190__auto__,null);
});

sablono.core.datetime_field20283.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.datetime_field20283.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field20283);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field20287 = (function sablono$core$datetime_local_field20287(var_args){
var args20288 = [];
var len__19539__auto___20355 = arguments.length;
var i__19540__auto___20356 = (0);
while(true){
if((i__19540__auto___20356 < len__19539__auto___20355)){
args20288.push((arguments[i__19540__auto___20356]));

var G__20357 = (i__19540__auto___20356 + (1));
i__19540__auto___20356 = G__20357;
continue;
} else {
}
break;
}

var G__20290 = args20288.length;
switch (G__20290) {
case 1:
return sablono.core.datetime_local_field20287.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field20287.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20288.length)].join('')));

}
});

sablono.core.datetime_local_field20287.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.datetime_local_field20287.call(null,name__20190__auto__,null);
});

sablono.core.datetime_local_field20287.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.datetime_local_field20287.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field20287);

/**
 * Creates a email input field.
 */
sablono.core.email_field20291 = (function sablono$core$email_field20291(var_args){
var args20292 = [];
var len__19539__auto___20359 = arguments.length;
var i__19540__auto___20360 = (0);
while(true){
if((i__19540__auto___20360 < len__19539__auto___20359)){
args20292.push((arguments[i__19540__auto___20360]));

var G__20361 = (i__19540__auto___20360 + (1));
i__19540__auto___20360 = G__20361;
continue;
} else {
}
break;
}

var G__20294 = args20292.length;
switch (G__20294) {
case 1:
return sablono.core.email_field20291.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field20291.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20292.length)].join('')));

}
});

sablono.core.email_field20291.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.email_field20291.call(null,name__20190__auto__,null);
});

sablono.core.email_field20291.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.email_field20291.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field20291);

/**
 * Creates a file input field.
 */
sablono.core.file_field20295 = (function sablono$core$file_field20295(var_args){
var args20296 = [];
var len__19539__auto___20363 = arguments.length;
var i__19540__auto___20364 = (0);
while(true){
if((i__19540__auto___20364 < len__19539__auto___20363)){
args20296.push((arguments[i__19540__auto___20364]));

var G__20365 = (i__19540__auto___20364 + (1));
i__19540__auto___20364 = G__20365;
continue;
} else {
}
break;
}

var G__20298 = args20296.length;
switch (G__20298) {
case 1:
return sablono.core.file_field20295.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field20295.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20296.length)].join('')));

}
});

sablono.core.file_field20295.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.file_field20295.call(null,name__20190__auto__,null);
});

sablono.core.file_field20295.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.file_field20295.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field20295);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field20299 = (function sablono$core$hidden_field20299(var_args){
var args20300 = [];
var len__19539__auto___20367 = arguments.length;
var i__19540__auto___20368 = (0);
while(true){
if((i__19540__auto___20368 < len__19539__auto___20367)){
args20300.push((arguments[i__19540__auto___20368]));

var G__20369 = (i__19540__auto___20368 + (1));
i__19540__auto___20368 = G__20369;
continue;
} else {
}
break;
}

var G__20302 = args20300.length;
switch (G__20302) {
case 1:
return sablono.core.hidden_field20299.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field20299.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20300.length)].join('')));

}
});

sablono.core.hidden_field20299.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.hidden_field20299.call(null,name__20190__auto__,null);
});

sablono.core.hidden_field20299.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.hidden_field20299.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field20299);

/**
 * Creates a month input field.
 */
sablono.core.month_field20303 = (function sablono$core$month_field20303(var_args){
var args20304 = [];
var len__19539__auto___20371 = arguments.length;
var i__19540__auto___20372 = (0);
while(true){
if((i__19540__auto___20372 < len__19539__auto___20371)){
args20304.push((arguments[i__19540__auto___20372]));

var G__20373 = (i__19540__auto___20372 + (1));
i__19540__auto___20372 = G__20373;
continue;
} else {
}
break;
}

var G__20306 = args20304.length;
switch (G__20306) {
case 1:
return sablono.core.month_field20303.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field20303.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20304.length)].join('')));

}
});

sablono.core.month_field20303.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.month_field20303.call(null,name__20190__auto__,null);
});

sablono.core.month_field20303.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.month_field20303.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field20303);

/**
 * Creates a number input field.
 */
sablono.core.number_field20307 = (function sablono$core$number_field20307(var_args){
var args20308 = [];
var len__19539__auto___20375 = arguments.length;
var i__19540__auto___20376 = (0);
while(true){
if((i__19540__auto___20376 < len__19539__auto___20375)){
args20308.push((arguments[i__19540__auto___20376]));

var G__20377 = (i__19540__auto___20376 + (1));
i__19540__auto___20376 = G__20377;
continue;
} else {
}
break;
}

var G__20310 = args20308.length;
switch (G__20310) {
case 1:
return sablono.core.number_field20307.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field20307.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20308.length)].join('')));

}
});

sablono.core.number_field20307.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.number_field20307.call(null,name__20190__auto__,null);
});

sablono.core.number_field20307.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.number_field20307.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field20307);

/**
 * Creates a password input field.
 */
sablono.core.password_field20311 = (function sablono$core$password_field20311(var_args){
var args20312 = [];
var len__19539__auto___20379 = arguments.length;
var i__19540__auto___20380 = (0);
while(true){
if((i__19540__auto___20380 < len__19539__auto___20379)){
args20312.push((arguments[i__19540__auto___20380]));

var G__20381 = (i__19540__auto___20380 + (1));
i__19540__auto___20380 = G__20381;
continue;
} else {
}
break;
}

var G__20314 = args20312.length;
switch (G__20314) {
case 1:
return sablono.core.password_field20311.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field20311.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20312.length)].join('')));

}
});

sablono.core.password_field20311.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.password_field20311.call(null,name__20190__auto__,null);
});

sablono.core.password_field20311.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.password_field20311.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field20311);

/**
 * Creates a range input field.
 */
sablono.core.range_field20315 = (function sablono$core$range_field20315(var_args){
var args20316 = [];
var len__19539__auto___20383 = arguments.length;
var i__19540__auto___20384 = (0);
while(true){
if((i__19540__auto___20384 < len__19539__auto___20383)){
args20316.push((arguments[i__19540__auto___20384]));

var G__20385 = (i__19540__auto___20384 + (1));
i__19540__auto___20384 = G__20385;
continue;
} else {
}
break;
}

var G__20318 = args20316.length;
switch (G__20318) {
case 1:
return sablono.core.range_field20315.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field20315.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20316.length)].join('')));

}
});

sablono.core.range_field20315.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.range_field20315.call(null,name__20190__auto__,null);
});

sablono.core.range_field20315.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.range_field20315.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field20315);

/**
 * Creates a search input field.
 */
sablono.core.search_field20319 = (function sablono$core$search_field20319(var_args){
var args20320 = [];
var len__19539__auto___20387 = arguments.length;
var i__19540__auto___20388 = (0);
while(true){
if((i__19540__auto___20388 < len__19539__auto___20387)){
args20320.push((arguments[i__19540__auto___20388]));

var G__20389 = (i__19540__auto___20388 + (1));
i__19540__auto___20388 = G__20389;
continue;
} else {
}
break;
}

var G__20322 = args20320.length;
switch (G__20322) {
case 1:
return sablono.core.search_field20319.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field20319.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20320.length)].join('')));

}
});

sablono.core.search_field20319.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.search_field20319.call(null,name__20190__auto__,null);
});

sablono.core.search_field20319.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.search_field20319.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field20319);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field20323 = (function sablono$core$tel_field20323(var_args){
var args20324 = [];
var len__19539__auto___20391 = arguments.length;
var i__19540__auto___20392 = (0);
while(true){
if((i__19540__auto___20392 < len__19539__auto___20391)){
args20324.push((arguments[i__19540__auto___20392]));

var G__20393 = (i__19540__auto___20392 + (1));
i__19540__auto___20392 = G__20393;
continue;
} else {
}
break;
}

var G__20326 = args20324.length;
switch (G__20326) {
case 1:
return sablono.core.tel_field20323.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field20323.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20324.length)].join('')));

}
});

sablono.core.tel_field20323.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.tel_field20323.call(null,name__20190__auto__,null);
});

sablono.core.tel_field20323.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.tel_field20323.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field20323);

/**
 * Creates a text input field.
 */
sablono.core.text_field20327 = (function sablono$core$text_field20327(var_args){
var args20328 = [];
var len__19539__auto___20395 = arguments.length;
var i__19540__auto___20396 = (0);
while(true){
if((i__19540__auto___20396 < len__19539__auto___20395)){
args20328.push((arguments[i__19540__auto___20396]));

var G__20397 = (i__19540__auto___20396 + (1));
i__19540__auto___20396 = G__20397;
continue;
} else {
}
break;
}

var G__20330 = args20328.length;
switch (G__20330) {
case 1:
return sablono.core.text_field20327.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field20327.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20328.length)].join('')));

}
});

sablono.core.text_field20327.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.text_field20327.call(null,name__20190__auto__,null);
});

sablono.core.text_field20327.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.text_field20327.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field20327);

/**
 * Creates a time input field.
 */
sablono.core.time_field20331 = (function sablono$core$time_field20331(var_args){
var args20332 = [];
var len__19539__auto___20399 = arguments.length;
var i__19540__auto___20400 = (0);
while(true){
if((i__19540__auto___20400 < len__19539__auto___20399)){
args20332.push((arguments[i__19540__auto___20400]));

var G__20401 = (i__19540__auto___20400 + (1));
i__19540__auto___20400 = G__20401;
continue;
} else {
}
break;
}

var G__20334 = args20332.length;
switch (G__20334) {
case 1:
return sablono.core.time_field20331.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field20331.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20332.length)].join('')));

}
});

sablono.core.time_field20331.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.time_field20331.call(null,name__20190__auto__,null);
});

sablono.core.time_field20331.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.time_field20331.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field20331);

/**
 * Creates a url input field.
 */
sablono.core.url_field20335 = (function sablono$core$url_field20335(var_args){
var args20336 = [];
var len__19539__auto___20403 = arguments.length;
var i__19540__auto___20404 = (0);
while(true){
if((i__19540__auto___20404 < len__19539__auto___20403)){
args20336.push((arguments[i__19540__auto___20404]));

var G__20405 = (i__19540__auto___20404 + (1));
i__19540__auto___20404 = G__20405;
continue;
} else {
}
break;
}

var G__20338 = args20336.length;
switch (G__20338) {
case 1:
return sablono.core.url_field20335.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field20335.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20336.length)].join('')));

}
});

sablono.core.url_field20335.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.url_field20335.call(null,name__20190__auto__,null);
});

sablono.core.url_field20335.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.url_field20335.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field20335);

/**
 * Creates a week input field.
 */
sablono.core.week_field20339 = (function sablono$core$week_field20339(var_args){
var args20340 = [];
var len__19539__auto___20407 = arguments.length;
var i__19540__auto___20408 = (0);
while(true){
if((i__19540__auto___20408 < len__19539__auto___20407)){
args20340.push((arguments[i__19540__auto___20408]));

var G__20409 = (i__19540__auto___20408 + (1));
i__19540__auto___20408 = G__20409;
continue;
} else {
}
break;
}

var G__20342 = args20340.length;
switch (G__20342) {
case 1:
return sablono.core.week_field20339.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field20339.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20340.length)].join('')));

}
});

sablono.core.week_field20339.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.week_field20339.call(null,name__20190__auto__,null);
});

sablono.core.week_field20339.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.week_field20339.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field20339);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box20411 = (function sablono$core$check_box20411(var_args){
var args20412 = [];
var len__19539__auto___20415 = arguments.length;
var i__19540__auto___20416 = (0);
while(true){
if((i__19540__auto___20416 < len__19539__auto___20415)){
args20412.push((arguments[i__19540__auto___20416]));

var G__20417 = (i__19540__auto___20416 + (1));
i__19540__auto___20416 = G__20417;
continue;
} else {
}
break;
}

var G__20414 = args20412.length;
switch (G__20414) {
case 1:
return sablono.core.check_box20411.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box20411.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box20411.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20412.length)].join('')));

}
});

sablono.core.check_box20411.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box20411.call(null,name,null);
});

sablono.core.check_box20411.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box20411.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box20411.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box20411.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box20411);
/**
 * Creates a radio button.
 */
sablono.core.radio_button20419 = (function sablono$core$radio_button20419(var_args){
var args20420 = [];
var len__19539__auto___20423 = arguments.length;
var i__19540__auto___20424 = (0);
while(true){
if((i__19540__auto___20424 < len__19539__auto___20423)){
args20420.push((arguments[i__19540__auto___20424]));

var G__20425 = (i__19540__auto___20424 + (1));
i__19540__auto___20424 = G__20425;
continue;
} else {
}
break;
}

var G__20422 = args20420.length;
switch (G__20422) {
case 1:
return sablono.core.radio_button20419.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button20419.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button20419.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20420.length)].join('')));

}
});

sablono.core.radio_button20419.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button20419.call(null,group,null);
});

sablono.core.radio_button20419.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button20419.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button20419.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button20419.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button20419);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options20427 = (function sablono$core$select_options20427(coll){
var iter__19244__auto__ = (function sablono$core$select_options20427_$_iter__20444(s__20445){
return (new cljs.core.LazySeq(null,(function (){
var s__20445__$1 = s__20445;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20445__$1);
if(temp__4657__auto__){
var s__20445__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20445__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__20445__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__20447 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__20446 = (0);
while(true){
if((i__20446 < size__19243__auto__)){
var x = cljs.core._nth.call(null,c__19242__auto__,i__20446);
cljs.core.chunk_append.call(null,b__20447,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20454 = x;
var text = cljs.core.nth.call(null,vec__20454,(0),null);
var val = cljs.core.nth.call(null,vec__20454,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__20454,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options20427.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__20460 = (i__20446 + (1));
i__20446 = G__20460;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20447),sablono$core$select_options20427_$_iter__20444.call(null,cljs.core.chunk_rest.call(null,s__20445__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20447),null);
}
} else {
var x = cljs.core.first.call(null,s__20445__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20457 = x;
var text = cljs.core.nth.call(null,vec__20457,(0),null);
var val = cljs.core.nth.call(null,vec__20457,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__20457,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options20427.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options20427_$_iter__20444.call(null,cljs.core.rest.call(null,s__20445__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options20427);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down20461 = (function sablono$core$drop_down20461(var_args){
var args20462 = [];
var len__19539__auto___20465 = arguments.length;
var i__19540__auto___20466 = (0);
while(true){
if((i__19540__auto___20466 < len__19539__auto___20465)){
args20462.push((arguments[i__19540__auto___20466]));

var G__20467 = (i__19540__auto___20466 + (1));
i__19540__auto___20466 = G__20467;
continue;
} else {
}
break;
}

var G__20464 = args20462.length;
switch (G__20464) {
case 2:
return sablono.core.drop_down20461.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down20461.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20462.length)].join('')));

}
});

sablono.core.drop_down20461.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down20461.call(null,name,options,null);
});

sablono.core.drop_down20461.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down20461.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down20461);
/**
 * Creates a text area element.
 */
sablono.core.text_area20469 = (function sablono$core$text_area20469(var_args){
var args20470 = [];
var len__19539__auto___20473 = arguments.length;
var i__19540__auto___20474 = (0);
while(true){
if((i__19540__auto___20474 < len__19539__auto___20473)){
args20470.push((arguments[i__19540__auto___20474]));

var G__20475 = (i__19540__auto___20474 + (1));
i__19540__auto___20474 = G__20475;
continue;
} else {
}
break;
}

var G__20472 = args20470.length;
switch (G__20472) {
case 1:
return sablono.core.text_area20469.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area20469.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20470.length)].join('')));

}
});

sablono.core.text_area20469.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area20469.call(null,name,null);
});

sablono.core.text_area20469.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area20469.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area20469);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label20477 = (function sablono$core$label20477(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label20477);
/**
 * Creates a submit button.
 */
sablono.core.submit_button20478 = (function sablono$core$submit_button20478(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button20478);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button20479 = (function sablono$core$reset_button20479(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button20479);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to20480 = (function sablono$core$form_to20480(var_args){
var args__19546__auto__ = [];
var len__19539__auto___20487 = arguments.length;
var i__19540__auto___20488 = (0);
while(true){
if((i__19540__auto___20488 < len__19539__auto___20487)){
args__19546__auto__.push((arguments[i__19540__auto___20488]));

var G__20489 = (i__19540__auto___20488 + (1));
i__19540__auto___20488 = G__20489;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to20480.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.form_to20480.cljs$core$IFn$_invoke$arity$variadic = (function (p__20483,body){
var vec__20484 = p__20483;
var method = cljs.core.nth.call(null,vec__20484,(0),null);
var action = cljs.core.nth.call(null,vec__20484,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to20480.cljs$lang$maxFixedArity = (1);

sablono.core.form_to20480.cljs$lang$applyTo = (function (seq20481){
var G__20482 = cljs.core.first.call(null,seq20481);
var seq20481__$1 = cljs.core.next.call(null,seq20481);
return sablono.core.form_to20480.cljs$core$IFn$_invoke$arity$variadic(G__20482,seq20481__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to20480);

//# sourceMappingURL=core.js.map