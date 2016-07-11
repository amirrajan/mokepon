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
var G__30487__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__30484 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__30485 = cljs.core.seq.call(null,vec__30484);
var first__30486 = cljs.core.first.call(null,seq__30485);
var seq__30485__$1 = cljs.core.next.call(null,seq__30485);
var tag = first__30486;
var body = seq__30485__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__30487 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30488__i = 0, G__30488__a = new Array(arguments.length -  0);
while (G__30488__i < G__30488__a.length) {G__30488__a[G__30488__i] = arguments[G__30488__i + 0]; ++G__30488__i;}
  args = new cljs.core.IndexedSeq(G__30488__a,0);
} 
return G__30487__delegate.call(this,args);};
G__30487.cljs$lang$maxFixedArity = 0;
G__30487.cljs$lang$applyTo = (function (arglist__30489){
var args = cljs.core.seq(arglist__30489);
return G__30487__delegate(args);
});
G__30487.cljs$core$IFn$_invoke$arity$variadic = G__30487__delegate;
return G__30487;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19244__auto__ = (function sablono$core$update_arglists_$_iter__30494(s__30495){
return (new cljs.core.LazySeq(null,(function (){
var s__30495__$1 = s__30495;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30495__$1);
if(temp__4657__auto__){
var s__30495__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30495__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__30495__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__30497 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__30496 = (0);
while(true){
if((i__30496 < size__19243__auto__)){
var args = cljs.core._nth.call(null,c__19242__auto__,i__30496);
cljs.core.chunk_append.call(null,b__30497,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__30498 = (i__30496 + (1));
i__30496 = G__30498;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30497),sablono$core$update_arglists_$_iter__30494.call(null,cljs.core.chunk_rest.call(null,s__30495__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30497),null);
}
} else {
var args = cljs.core.first.call(null,s__30495__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__30494.call(null,cljs.core.rest.call(null,s__30495__$2)));
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
var len__19539__auto___30504 = arguments.length;
var i__19540__auto___30505 = (0);
while(true){
if((i__19540__auto___30505 < len__19539__auto___30504)){
args__19546__auto__.push((arguments[i__19540__auto___30505]));

var G__30506 = (i__19540__auto___30505 + (1));
i__19540__auto___30505 = G__30506;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19244__auto__ = (function sablono$core$iter__30500(s__30501){
return (new cljs.core.LazySeq(null,(function (){
var s__30501__$1 = s__30501;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30501__$1);
if(temp__4657__auto__){
var s__30501__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30501__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__30501__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__30503 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__30502 = (0);
while(true){
if((i__30502 < size__19243__auto__)){
var style = cljs.core._nth.call(null,c__19242__auto__,i__30502);
cljs.core.chunk_append.call(null,b__30503,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__30507 = (i__30502 + (1));
i__30502 = G__30507;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30503),sablono$core$iter__30500.call(null,cljs.core.chunk_rest.call(null,s__30501__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30503),null);
}
} else {
var style = cljs.core.first.call(null,s__30501__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__30500.call(null,cljs.core.rest.call(null,s__30501__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq30499){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30499));
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
sablono.core.link_to30508 = (function sablono$core$link_to30508(var_args){
var args__19546__auto__ = [];
var len__19539__auto___30511 = arguments.length;
var i__19540__auto___30512 = (0);
while(true){
if((i__19540__auto___30512 < len__19539__auto___30511)){
args__19546__auto__.push((arguments[i__19540__auto___30512]));

var G__30513 = (i__19540__auto___30512 + (1));
i__19540__auto___30512 = G__30513;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to30508.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.link_to30508.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to30508.cljs$lang$maxFixedArity = (1);

sablono.core.link_to30508.cljs$lang$applyTo = (function (seq30509){
var G__30510 = cljs.core.first.call(null,seq30509);
var seq30509__$1 = cljs.core.next.call(null,seq30509);
return sablono.core.link_to30508.cljs$core$IFn$_invoke$arity$variadic(G__30510,seq30509__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to30508);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to30514 = (function sablono$core$mail_to30514(var_args){
var args__19546__auto__ = [];
var len__19539__auto___30521 = arguments.length;
var i__19540__auto___30522 = (0);
while(true){
if((i__19540__auto___30522 < len__19539__auto___30521)){
args__19546__auto__.push((arguments[i__19540__auto___30522]));

var G__30523 = (i__19540__auto___30522 + (1));
i__19540__auto___30522 = G__30523;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to30514.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.mail_to30514.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__30517){
var vec__30518 = p__30517;
var content = cljs.core.nth.call(null,vec__30518,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18464__auto__ = content;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to30514.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to30514.cljs$lang$applyTo = (function (seq30515){
var G__30516 = cljs.core.first.call(null,seq30515);
var seq30515__$1 = cljs.core.next.call(null,seq30515);
return sablono.core.mail_to30514.cljs$core$IFn$_invoke$arity$variadic(G__30516,seq30515__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to30514);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list30524 = (function sablono$core$unordered_list30524(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19244__auto__ = (function sablono$core$unordered_list30524_$_iter__30529(s__30530){
return (new cljs.core.LazySeq(null,(function (){
var s__30530__$1 = s__30530;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30530__$1);
if(temp__4657__auto__){
var s__30530__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30530__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__30530__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__30532 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__30531 = (0);
while(true){
if((i__30531 < size__19243__auto__)){
var x = cljs.core._nth.call(null,c__19242__auto__,i__30531);
cljs.core.chunk_append.call(null,b__30532,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__30533 = (i__30531 + (1));
i__30531 = G__30533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30532),sablono$core$unordered_list30524_$_iter__30529.call(null,cljs.core.chunk_rest.call(null,s__30530__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30532),null);
}
} else {
var x = cljs.core.first.call(null,s__30530__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list30524_$_iter__30529.call(null,cljs.core.rest.call(null,s__30530__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list30524);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list30534 = (function sablono$core$ordered_list30534(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19244__auto__ = (function sablono$core$ordered_list30534_$_iter__30539(s__30540){
return (new cljs.core.LazySeq(null,(function (){
var s__30540__$1 = s__30540;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30540__$1);
if(temp__4657__auto__){
var s__30540__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30540__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__30540__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__30542 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__30541 = (0);
while(true){
if((i__30541 < size__19243__auto__)){
var x = cljs.core._nth.call(null,c__19242__auto__,i__30541);
cljs.core.chunk_append.call(null,b__30542,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__30543 = (i__30541 + (1));
i__30541 = G__30543;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30542),sablono$core$ordered_list30534_$_iter__30539.call(null,cljs.core.chunk_rest.call(null,s__30540__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30542),null);
}
} else {
var x = cljs.core.first.call(null,s__30540__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list30534_$_iter__30539.call(null,cljs.core.rest.call(null,s__30540__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list30534);
/**
 * Create an image element.
 */
sablono.core.image30544 = (function sablono$core$image30544(var_args){
var args30545 = [];
var len__19539__auto___30548 = arguments.length;
var i__19540__auto___30549 = (0);
while(true){
if((i__19540__auto___30549 < len__19539__auto___30548)){
args30545.push((arguments[i__19540__auto___30549]));

var G__30550 = (i__19540__auto___30549 + (1));
i__19540__auto___30549 = G__30550;
continue;
} else {
}
break;
}

var G__30547 = args30545.length;
switch (G__30547) {
case 1:
return sablono.core.image30544.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image30544.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30545.length)].join('')));

}
});

sablono.core.image30544.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image30544.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image30544.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image30544);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__30552_SHARP_,p2__30553_SHARP_){
return [cljs.core.str(p1__30552_SHARP_),cljs.core.str("["),cljs.core.str(p2__30553_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__30554_SHARP_,p2__30555_SHARP_){
return [cljs.core.str(p1__30554_SHARP_),cljs.core.str("-"),cljs.core.str(p2__30555_SHARP_)].join('');
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
sablono.core.color_field30556 = (function sablono$core$color_field30556(var_args){
var args30557 = [];
var len__19539__auto___30624 = arguments.length;
var i__19540__auto___30625 = (0);
while(true){
if((i__19540__auto___30625 < len__19539__auto___30624)){
args30557.push((arguments[i__19540__auto___30625]));

var G__30626 = (i__19540__auto___30625 + (1));
i__19540__auto___30625 = G__30626;
continue;
} else {
}
break;
}

var G__30559 = args30557.length;
switch (G__30559) {
case 1:
return sablono.core.color_field30556.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field30556.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30557.length)].join('')));

}
});

sablono.core.color_field30556.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.color_field30556.call(null,name__20190__auto__,null);
});

sablono.core.color_field30556.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.color_field30556.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field30556);

/**
 * Creates a date input field.
 */
sablono.core.date_field30560 = (function sablono$core$date_field30560(var_args){
var args30561 = [];
var len__19539__auto___30628 = arguments.length;
var i__19540__auto___30629 = (0);
while(true){
if((i__19540__auto___30629 < len__19539__auto___30628)){
args30561.push((arguments[i__19540__auto___30629]));

var G__30630 = (i__19540__auto___30629 + (1));
i__19540__auto___30629 = G__30630;
continue;
} else {
}
break;
}

var G__30563 = args30561.length;
switch (G__30563) {
case 1:
return sablono.core.date_field30560.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field30560.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30561.length)].join('')));

}
});

sablono.core.date_field30560.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.date_field30560.call(null,name__20190__auto__,null);
});

sablono.core.date_field30560.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.date_field30560.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field30560);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field30564 = (function sablono$core$datetime_field30564(var_args){
var args30565 = [];
var len__19539__auto___30632 = arguments.length;
var i__19540__auto___30633 = (0);
while(true){
if((i__19540__auto___30633 < len__19539__auto___30632)){
args30565.push((arguments[i__19540__auto___30633]));

var G__30634 = (i__19540__auto___30633 + (1));
i__19540__auto___30633 = G__30634;
continue;
} else {
}
break;
}

var G__30567 = args30565.length;
switch (G__30567) {
case 1:
return sablono.core.datetime_field30564.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field30564.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30565.length)].join('')));

}
});

sablono.core.datetime_field30564.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.datetime_field30564.call(null,name__20190__auto__,null);
});

sablono.core.datetime_field30564.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.datetime_field30564.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field30564);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field30568 = (function sablono$core$datetime_local_field30568(var_args){
var args30569 = [];
var len__19539__auto___30636 = arguments.length;
var i__19540__auto___30637 = (0);
while(true){
if((i__19540__auto___30637 < len__19539__auto___30636)){
args30569.push((arguments[i__19540__auto___30637]));

var G__30638 = (i__19540__auto___30637 + (1));
i__19540__auto___30637 = G__30638;
continue;
} else {
}
break;
}

var G__30571 = args30569.length;
switch (G__30571) {
case 1:
return sablono.core.datetime_local_field30568.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field30568.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30569.length)].join('')));

}
});

sablono.core.datetime_local_field30568.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.datetime_local_field30568.call(null,name__20190__auto__,null);
});

sablono.core.datetime_local_field30568.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.datetime_local_field30568.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field30568);

/**
 * Creates a email input field.
 */
sablono.core.email_field30572 = (function sablono$core$email_field30572(var_args){
var args30573 = [];
var len__19539__auto___30640 = arguments.length;
var i__19540__auto___30641 = (0);
while(true){
if((i__19540__auto___30641 < len__19539__auto___30640)){
args30573.push((arguments[i__19540__auto___30641]));

var G__30642 = (i__19540__auto___30641 + (1));
i__19540__auto___30641 = G__30642;
continue;
} else {
}
break;
}

var G__30575 = args30573.length;
switch (G__30575) {
case 1:
return sablono.core.email_field30572.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field30572.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30573.length)].join('')));

}
});

sablono.core.email_field30572.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.email_field30572.call(null,name__20190__auto__,null);
});

sablono.core.email_field30572.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.email_field30572.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field30572);

/**
 * Creates a file input field.
 */
sablono.core.file_field30576 = (function sablono$core$file_field30576(var_args){
var args30577 = [];
var len__19539__auto___30644 = arguments.length;
var i__19540__auto___30645 = (0);
while(true){
if((i__19540__auto___30645 < len__19539__auto___30644)){
args30577.push((arguments[i__19540__auto___30645]));

var G__30646 = (i__19540__auto___30645 + (1));
i__19540__auto___30645 = G__30646;
continue;
} else {
}
break;
}

var G__30579 = args30577.length;
switch (G__30579) {
case 1:
return sablono.core.file_field30576.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field30576.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30577.length)].join('')));

}
});

sablono.core.file_field30576.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.file_field30576.call(null,name__20190__auto__,null);
});

sablono.core.file_field30576.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.file_field30576.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field30576);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field30580 = (function sablono$core$hidden_field30580(var_args){
var args30581 = [];
var len__19539__auto___30648 = arguments.length;
var i__19540__auto___30649 = (0);
while(true){
if((i__19540__auto___30649 < len__19539__auto___30648)){
args30581.push((arguments[i__19540__auto___30649]));

var G__30650 = (i__19540__auto___30649 + (1));
i__19540__auto___30649 = G__30650;
continue;
} else {
}
break;
}

var G__30583 = args30581.length;
switch (G__30583) {
case 1:
return sablono.core.hidden_field30580.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field30580.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30581.length)].join('')));

}
});

sablono.core.hidden_field30580.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.hidden_field30580.call(null,name__20190__auto__,null);
});

sablono.core.hidden_field30580.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.hidden_field30580.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field30580);

/**
 * Creates a month input field.
 */
sablono.core.month_field30584 = (function sablono$core$month_field30584(var_args){
var args30585 = [];
var len__19539__auto___30652 = arguments.length;
var i__19540__auto___30653 = (0);
while(true){
if((i__19540__auto___30653 < len__19539__auto___30652)){
args30585.push((arguments[i__19540__auto___30653]));

var G__30654 = (i__19540__auto___30653 + (1));
i__19540__auto___30653 = G__30654;
continue;
} else {
}
break;
}

var G__30587 = args30585.length;
switch (G__30587) {
case 1:
return sablono.core.month_field30584.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field30584.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30585.length)].join('')));

}
});

sablono.core.month_field30584.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.month_field30584.call(null,name__20190__auto__,null);
});

sablono.core.month_field30584.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.month_field30584.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field30584);

/**
 * Creates a number input field.
 */
sablono.core.number_field30588 = (function sablono$core$number_field30588(var_args){
var args30589 = [];
var len__19539__auto___30656 = arguments.length;
var i__19540__auto___30657 = (0);
while(true){
if((i__19540__auto___30657 < len__19539__auto___30656)){
args30589.push((arguments[i__19540__auto___30657]));

var G__30658 = (i__19540__auto___30657 + (1));
i__19540__auto___30657 = G__30658;
continue;
} else {
}
break;
}

var G__30591 = args30589.length;
switch (G__30591) {
case 1:
return sablono.core.number_field30588.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field30588.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30589.length)].join('')));

}
});

sablono.core.number_field30588.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.number_field30588.call(null,name__20190__auto__,null);
});

sablono.core.number_field30588.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.number_field30588.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field30588);

/**
 * Creates a password input field.
 */
sablono.core.password_field30592 = (function sablono$core$password_field30592(var_args){
var args30593 = [];
var len__19539__auto___30660 = arguments.length;
var i__19540__auto___30661 = (0);
while(true){
if((i__19540__auto___30661 < len__19539__auto___30660)){
args30593.push((arguments[i__19540__auto___30661]));

var G__30662 = (i__19540__auto___30661 + (1));
i__19540__auto___30661 = G__30662;
continue;
} else {
}
break;
}

var G__30595 = args30593.length;
switch (G__30595) {
case 1:
return sablono.core.password_field30592.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field30592.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30593.length)].join('')));

}
});

sablono.core.password_field30592.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.password_field30592.call(null,name__20190__auto__,null);
});

sablono.core.password_field30592.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.password_field30592.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field30592);

/**
 * Creates a range input field.
 */
sablono.core.range_field30596 = (function sablono$core$range_field30596(var_args){
var args30597 = [];
var len__19539__auto___30664 = arguments.length;
var i__19540__auto___30665 = (0);
while(true){
if((i__19540__auto___30665 < len__19539__auto___30664)){
args30597.push((arguments[i__19540__auto___30665]));

var G__30666 = (i__19540__auto___30665 + (1));
i__19540__auto___30665 = G__30666;
continue;
} else {
}
break;
}

var G__30599 = args30597.length;
switch (G__30599) {
case 1:
return sablono.core.range_field30596.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field30596.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30597.length)].join('')));

}
});

sablono.core.range_field30596.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.range_field30596.call(null,name__20190__auto__,null);
});

sablono.core.range_field30596.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.range_field30596.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field30596);

/**
 * Creates a search input field.
 */
sablono.core.search_field30600 = (function sablono$core$search_field30600(var_args){
var args30601 = [];
var len__19539__auto___30668 = arguments.length;
var i__19540__auto___30669 = (0);
while(true){
if((i__19540__auto___30669 < len__19539__auto___30668)){
args30601.push((arguments[i__19540__auto___30669]));

var G__30670 = (i__19540__auto___30669 + (1));
i__19540__auto___30669 = G__30670;
continue;
} else {
}
break;
}

var G__30603 = args30601.length;
switch (G__30603) {
case 1:
return sablono.core.search_field30600.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field30600.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30601.length)].join('')));

}
});

sablono.core.search_field30600.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.search_field30600.call(null,name__20190__auto__,null);
});

sablono.core.search_field30600.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.search_field30600.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field30600);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field30604 = (function sablono$core$tel_field30604(var_args){
var args30605 = [];
var len__19539__auto___30672 = arguments.length;
var i__19540__auto___30673 = (0);
while(true){
if((i__19540__auto___30673 < len__19539__auto___30672)){
args30605.push((arguments[i__19540__auto___30673]));

var G__30674 = (i__19540__auto___30673 + (1));
i__19540__auto___30673 = G__30674;
continue;
} else {
}
break;
}

var G__30607 = args30605.length;
switch (G__30607) {
case 1:
return sablono.core.tel_field30604.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field30604.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30605.length)].join('')));

}
});

sablono.core.tel_field30604.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.tel_field30604.call(null,name__20190__auto__,null);
});

sablono.core.tel_field30604.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.tel_field30604.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field30604);

/**
 * Creates a text input field.
 */
sablono.core.text_field30608 = (function sablono$core$text_field30608(var_args){
var args30609 = [];
var len__19539__auto___30676 = arguments.length;
var i__19540__auto___30677 = (0);
while(true){
if((i__19540__auto___30677 < len__19539__auto___30676)){
args30609.push((arguments[i__19540__auto___30677]));

var G__30678 = (i__19540__auto___30677 + (1));
i__19540__auto___30677 = G__30678;
continue;
} else {
}
break;
}

var G__30611 = args30609.length;
switch (G__30611) {
case 1:
return sablono.core.text_field30608.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field30608.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30609.length)].join('')));

}
});

sablono.core.text_field30608.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.text_field30608.call(null,name__20190__auto__,null);
});

sablono.core.text_field30608.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.text_field30608.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field30608);

/**
 * Creates a time input field.
 */
sablono.core.time_field30612 = (function sablono$core$time_field30612(var_args){
var args30613 = [];
var len__19539__auto___30680 = arguments.length;
var i__19540__auto___30681 = (0);
while(true){
if((i__19540__auto___30681 < len__19539__auto___30680)){
args30613.push((arguments[i__19540__auto___30681]));

var G__30682 = (i__19540__auto___30681 + (1));
i__19540__auto___30681 = G__30682;
continue;
} else {
}
break;
}

var G__30615 = args30613.length;
switch (G__30615) {
case 1:
return sablono.core.time_field30612.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field30612.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30613.length)].join('')));

}
});

sablono.core.time_field30612.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.time_field30612.call(null,name__20190__auto__,null);
});

sablono.core.time_field30612.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.time_field30612.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field30612);

/**
 * Creates a url input field.
 */
sablono.core.url_field30616 = (function sablono$core$url_field30616(var_args){
var args30617 = [];
var len__19539__auto___30684 = arguments.length;
var i__19540__auto___30685 = (0);
while(true){
if((i__19540__auto___30685 < len__19539__auto___30684)){
args30617.push((arguments[i__19540__auto___30685]));

var G__30686 = (i__19540__auto___30685 + (1));
i__19540__auto___30685 = G__30686;
continue;
} else {
}
break;
}

var G__30619 = args30617.length;
switch (G__30619) {
case 1:
return sablono.core.url_field30616.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field30616.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30617.length)].join('')));

}
});

sablono.core.url_field30616.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.url_field30616.call(null,name__20190__auto__,null);
});

sablono.core.url_field30616.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.url_field30616.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field30616);

/**
 * Creates a week input field.
 */
sablono.core.week_field30620 = (function sablono$core$week_field30620(var_args){
var args30621 = [];
var len__19539__auto___30688 = arguments.length;
var i__19540__auto___30689 = (0);
while(true){
if((i__19540__auto___30689 < len__19539__auto___30688)){
args30621.push((arguments[i__19540__auto___30689]));

var G__30690 = (i__19540__auto___30689 + (1));
i__19540__auto___30689 = G__30690;
continue;
} else {
}
break;
}

var G__30623 = args30621.length;
switch (G__30623) {
case 1:
return sablono.core.week_field30620.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field30620.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30621.length)].join('')));

}
});

sablono.core.week_field30620.cljs$core$IFn$_invoke$arity$1 = (function (name__20190__auto__){
return sablono.core.week_field30620.call(null,name__20190__auto__,null);
});

sablono.core.week_field30620.cljs$core$IFn$_invoke$arity$2 = (function (name__20190__auto__,value__20191__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__20190__auto__,value__20191__auto__);
});

sablono.core.week_field30620.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field30620);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box30692 = (function sablono$core$check_box30692(var_args){
var args30693 = [];
var len__19539__auto___30696 = arguments.length;
var i__19540__auto___30697 = (0);
while(true){
if((i__19540__auto___30697 < len__19539__auto___30696)){
args30693.push((arguments[i__19540__auto___30697]));

var G__30698 = (i__19540__auto___30697 + (1));
i__19540__auto___30697 = G__30698;
continue;
} else {
}
break;
}

var G__30695 = args30693.length;
switch (G__30695) {
case 1:
return sablono.core.check_box30692.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box30692.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box30692.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30693.length)].join('')));

}
});

sablono.core.check_box30692.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box30692.call(null,name,null);
});

sablono.core.check_box30692.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box30692.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box30692.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box30692.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box30692);
/**
 * Creates a radio button.
 */
sablono.core.radio_button30700 = (function sablono$core$radio_button30700(var_args){
var args30701 = [];
var len__19539__auto___30704 = arguments.length;
var i__19540__auto___30705 = (0);
while(true){
if((i__19540__auto___30705 < len__19539__auto___30704)){
args30701.push((arguments[i__19540__auto___30705]));

var G__30706 = (i__19540__auto___30705 + (1));
i__19540__auto___30705 = G__30706;
continue;
} else {
}
break;
}

var G__30703 = args30701.length;
switch (G__30703) {
case 1:
return sablono.core.radio_button30700.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button30700.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button30700.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30701.length)].join('')));

}
});

sablono.core.radio_button30700.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button30700.call(null,group,null);
});

sablono.core.radio_button30700.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button30700.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button30700.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button30700.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button30700);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options30708 = (function sablono$core$select_options30708(coll){
var iter__19244__auto__ = (function sablono$core$select_options30708_$_iter__30725(s__30726){
return (new cljs.core.LazySeq(null,(function (){
var s__30726__$1 = s__30726;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30726__$1);
if(temp__4657__auto__){
var s__30726__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30726__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__30726__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__30728 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__30727 = (0);
while(true){
if((i__30727 < size__19243__auto__)){
var x = cljs.core._nth.call(null,c__19242__auto__,i__30727);
cljs.core.chunk_append.call(null,b__30728,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__30735 = x;
var text = cljs.core.nth.call(null,vec__30735,(0),null);
var val = cljs.core.nth.call(null,vec__30735,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__30735,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options30708.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__30741 = (i__30727 + (1));
i__30727 = G__30741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30728),sablono$core$select_options30708_$_iter__30725.call(null,cljs.core.chunk_rest.call(null,s__30726__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30728),null);
}
} else {
var x = cljs.core.first.call(null,s__30726__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__30738 = x;
var text = cljs.core.nth.call(null,vec__30738,(0),null);
var val = cljs.core.nth.call(null,vec__30738,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__30738,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options30708.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options30708_$_iter__30725.call(null,cljs.core.rest.call(null,s__30726__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options30708);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down30742 = (function sablono$core$drop_down30742(var_args){
var args30743 = [];
var len__19539__auto___30746 = arguments.length;
var i__19540__auto___30747 = (0);
while(true){
if((i__19540__auto___30747 < len__19539__auto___30746)){
args30743.push((arguments[i__19540__auto___30747]));

var G__30748 = (i__19540__auto___30747 + (1));
i__19540__auto___30747 = G__30748;
continue;
} else {
}
break;
}

var G__30745 = args30743.length;
switch (G__30745) {
case 2:
return sablono.core.drop_down30742.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down30742.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30743.length)].join('')));

}
});

sablono.core.drop_down30742.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down30742.call(null,name,options,null);
});

sablono.core.drop_down30742.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down30742.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down30742);
/**
 * Creates a text area element.
 */
sablono.core.text_area30750 = (function sablono$core$text_area30750(var_args){
var args30751 = [];
var len__19539__auto___30754 = arguments.length;
var i__19540__auto___30755 = (0);
while(true){
if((i__19540__auto___30755 < len__19539__auto___30754)){
args30751.push((arguments[i__19540__auto___30755]));

var G__30756 = (i__19540__auto___30755 + (1));
i__19540__auto___30755 = G__30756;
continue;
} else {
}
break;
}

var G__30753 = args30751.length;
switch (G__30753) {
case 1:
return sablono.core.text_area30750.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area30750.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30751.length)].join('')));

}
});

sablono.core.text_area30750.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area30750.call(null,name,null);
});

sablono.core.text_area30750.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area30750.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area30750);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label30758 = (function sablono$core$label30758(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label30758);
/**
 * Creates a submit button.
 */
sablono.core.submit_button30759 = (function sablono$core$submit_button30759(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button30759);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button30760 = (function sablono$core$reset_button30760(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button30760);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to30761 = (function sablono$core$form_to30761(var_args){
var args__19546__auto__ = [];
var len__19539__auto___30768 = arguments.length;
var i__19540__auto___30769 = (0);
while(true){
if((i__19540__auto___30769 < len__19539__auto___30768)){
args__19546__auto__.push((arguments[i__19540__auto___30769]));

var G__30770 = (i__19540__auto___30769 + (1));
i__19540__auto___30769 = G__30770;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((1) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to30761.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19547__auto__);
});

sablono.core.form_to30761.cljs$core$IFn$_invoke$arity$variadic = (function (p__30764,body){
var vec__30765 = p__30764;
var method = cljs.core.nth.call(null,vec__30765,(0),null);
var action = cljs.core.nth.call(null,vec__30765,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to30761.cljs$lang$maxFixedArity = (1);

sablono.core.form_to30761.cljs$lang$applyTo = (function (seq30762){
var G__30763 = cljs.core.first.call(null,seq30762);
var seq30762__$1 = cljs.core.next.call(null,seq30762);
return sablono.core.form_to30761.cljs$core$IFn$_invoke$arity$variadic(G__30763,seq30762__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to30761);

//# sourceMappingURL=core.js.map