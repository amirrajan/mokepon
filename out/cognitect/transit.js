// Compiled by ClojureScript 1.9.76 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__20601_20605 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__20602_20606 = null;
var count__20603_20607 = (0);
var i__20604_20608 = (0);
while(true){
if((i__20604_20608 < count__20603_20607)){
var k_20609 = cljs.core._nth.call(null,chunk__20602_20606,i__20604_20608);
var v_20610 = (b[k_20609]);
(a[k_20609] = v_20610);

var G__20611 = seq__20601_20605;
var G__20612 = chunk__20602_20606;
var G__20613 = count__20603_20607;
var G__20614 = (i__20604_20608 + (1));
seq__20601_20605 = G__20611;
chunk__20602_20606 = G__20612;
count__20603_20607 = G__20613;
i__20604_20608 = G__20614;
continue;
} else {
var temp__4657__auto___20615 = cljs.core.seq.call(null,seq__20601_20605);
if(temp__4657__auto___20615){
var seq__20601_20616__$1 = temp__4657__auto___20615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20601_20616__$1)){
var c__19275__auto___20617 = cljs.core.chunk_first.call(null,seq__20601_20616__$1);
var G__20618 = cljs.core.chunk_rest.call(null,seq__20601_20616__$1);
var G__20619 = c__19275__auto___20617;
var G__20620 = cljs.core.count.call(null,c__19275__auto___20617);
var G__20621 = (0);
seq__20601_20605 = G__20618;
chunk__20602_20606 = G__20619;
count__20603_20607 = G__20620;
i__20604_20608 = G__20621;
continue;
} else {
var k_20622 = cljs.core.first.call(null,seq__20601_20616__$1);
var v_20623 = (b[k_20622]);
(a[k_20622] = v_20623);

var G__20624 = cljs.core.next.call(null,seq__20601_20616__$1);
var G__20625 = null;
var G__20626 = (0);
var G__20627 = (0);
seq__20601_20605 = G__20624;
chunk__20602_20606 = G__20625;
count__20603_20607 = G__20626;
i__20604_20608 = G__20627;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__19070__auto__,writer__19071__auto__,opt__19072__auto__){
return cljs.core._write.call(null,writer__19071__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__19070__auto__,writer__19071__auto__,opt__19072__auto__){
return cljs.core._write.call(null,writer__19071__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args20628 = [];
var len__19539__auto___20631 = arguments.length;
var i__19540__auto___20632 = (0);
while(true){
if((i__19540__auto___20632 < len__19539__auto___20631)){
args20628.push((arguments[i__19540__auto___20632]));

var G__20633 = (i__19540__auto___20632 + (1));
i__19540__auto___20632 = G__20633;
continue;
} else {
}
break;
}

var G__20630 = args20628.length;
switch (G__20630) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20628.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__20635 = (i + (2));
var G__20636 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__20635;
ret = G__20636;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__19070__auto__,writer__19071__auto__,opt__19072__auto__){
return cljs.core._write.call(null,writer__19071__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__19070__auto__,writer__19071__auto__,opt__19072__auto__){
return cljs.core._write.call(null,writer__19071__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__20637_20641 = cljs.core.seq.call(null,v);
var chunk__20638_20642 = null;
var count__20639_20643 = (0);
var i__20640_20644 = (0);
while(true){
if((i__20640_20644 < count__20639_20643)){
var x_20645 = cljs.core._nth.call(null,chunk__20638_20642,i__20640_20644);
ret.push(x_20645);

var G__20646 = seq__20637_20641;
var G__20647 = chunk__20638_20642;
var G__20648 = count__20639_20643;
var G__20649 = (i__20640_20644 + (1));
seq__20637_20641 = G__20646;
chunk__20638_20642 = G__20647;
count__20639_20643 = G__20648;
i__20640_20644 = G__20649;
continue;
} else {
var temp__4657__auto___20650 = cljs.core.seq.call(null,seq__20637_20641);
if(temp__4657__auto___20650){
var seq__20637_20651__$1 = temp__4657__auto___20650;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20637_20651__$1)){
var c__19275__auto___20652 = cljs.core.chunk_first.call(null,seq__20637_20651__$1);
var G__20653 = cljs.core.chunk_rest.call(null,seq__20637_20651__$1);
var G__20654 = c__19275__auto___20652;
var G__20655 = cljs.core.count.call(null,c__19275__auto___20652);
var G__20656 = (0);
seq__20637_20641 = G__20653;
chunk__20638_20642 = G__20654;
count__20639_20643 = G__20655;
i__20640_20644 = G__20656;
continue;
} else {
var x_20657 = cljs.core.first.call(null,seq__20637_20651__$1);
ret.push(x_20657);

var G__20658 = cljs.core.next.call(null,seq__20637_20651__$1);
var G__20659 = null;
var G__20660 = (0);
var G__20661 = (0);
seq__20637_20641 = G__20658;
chunk__20638_20642 = G__20659;
count__20639_20643 = G__20660;
i__20640_20644 = G__20661;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__19070__auto__,writer__19071__auto__,opt__19072__auto__){
return cljs.core._write.call(null,writer__19071__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__19070__auto__,writer__19071__auto__,opt__19072__auto__){
return cljs.core._write.call(null,writer__19071__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__20662_20666 = cljs.core.seq.call(null,v);
var chunk__20663_20667 = null;
var count__20664_20668 = (0);
var i__20665_20669 = (0);
while(true){
if((i__20665_20669 < count__20664_20668)){
var x_20670 = cljs.core._nth.call(null,chunk__20663_20667,i__20665_20669);
ret.push(x_20670);

var G__20671 = seq__20662_20666;
var G__20672 = chunk__20663_20667;
var G__20673 = count__20664_20668;
var G__20674 = (i__20665_20669 + (1));
seq__20662_20666 = G__20671;
chunk__20663_20667 = G__20672;
count__20664_20668 = G__20673;
i__20665_20669 = G__20674;
continue;
} else {
var temp__4657__auto___20675 = cljs.core.seq.call(null,seq__20662_20666);
if(temp__4657__auto___20675){
var seq__20662_20676__$1 = temp__4657__auto___20675;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20662_20676__$1)){
var c__19275__auto___20677 = cljs.core.chunk_first.call(null,seq__20662_20676__$1);
var G__20678 = cljs.core.chunk_rest.call(null,seq__20662_20676__$1);
var G__20679 = c__19275__auto___20677;
var G__20680 = cljs.core.count.call(null,c__19275__auto___20677);
var G__20681 = (0);
seq__20662_20666 = G__20678;
chunk__20663_20667 = G__20679;
count__20664_20668 = G__20680;
i__20665_20669 = G__20681;
continue;
} else {
var x_20682 = cljs.core.first.call(null,seq__20662_20676__$1);
ret.push(x_20682);

var G__20683 = cljs.core.next.call(null,seq__20662_20676__$1);
var G__20684 = null;
var G__20685 = (0);
var G__20686 = (0);
seq__20662_20666 = G__20683;
chunk__20663_20667 = G__20684;
count__20664_20668 = G__20685;
i__20665_20669 = G__20686;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__19070__auto__,writer__19071__auto__,opt__19072__auto__){
return cljs.core._write.call(null,writer__19071__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__20687_20691 = cljs.core.seq.call(null,v);
var chunk__20688_20692 = null;
var count__20689_20693 = (0);
var i__20690_20694 = (0);
while(true){
if((i__20690_20694 < count__20689_20693)){
var x_20695 = cljs.core._nth.call(null,chunk__20688_20692,i__20690_20694);
ret.push(x_20695);

var G__20696 = seq__20687_20691;
var G__20697 = chunk__20688_20692;
var G__20698 = count__20689_20693;
var G__20699 = (i__20690_20694 + (1));
seq__20687_20691 = G__20696;
chunk__20688_20692 = G__20697;
count__20689_20693 = G__20698;
i__20690_20694 = G__20699;
continue;
} else {
var temp__4657__auto___20700 = cljs.core.seq.call(null,seq__20687_20691);
if(temp__4657__auto___20700){
var seq__20687_20701__$1 = temp__4657__auto___20700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20687_20701__$1)){
var c__19275__auto___20702 = cljs.core.chunk_first.call(null,seq__20687_20701__$1);
var G__20703 = cljs.core.chunk_rest.call(null,seq__20687_20701__$1);
var G__20704 = c__19275__auto___20702;
var G__20705 = cljs.core.count.call(null,c__19275__auto___20702);
var G__20706 = (0);
seq__20687_20691 = G__20703;
chunk__20688_20692 = G__20704;
count__20689_20693 = G__20705;
i__20690_20694 = G__20706;
continue;
} else {
var x_20707 = cljs.core.first.call(null,seq__20687_20701__$1);
ret.push(x_20707);

var G__20708 = cljs.core.next.call(null,seq__20687_20701__$1);
var G__20709 = null;
var G__20710 = (0);
var G__20711 = (0);
seq__20687_20691 = G__20708;
chunk__20688_20692 = G__20709;
count__20689_20693 = G__20710;
i__20690_20694 = G__20711;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__19070__auto__,writer__19071__auto__,opt__19072__auto__){
return cljs.core._write.call(null,writer__19071__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__19070__auto__,writer__19071__auto__,opt__19072__auto__){
return cljs.core._write.call(null,writer__19071__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args20712 = [];
var len__19539__auto___20727 = arguments.length;
var i__19540__auto___20728 = (0);
while(true){
if((i__19540__auto___20728 < len__19539__auto___20727)){
args20712.push((arguments[i__19540__auto___20728]));

var G__20729 = (i__19540__auto___20728 + (1));
i__19540__auto___20728 = G__20729;
continue;
} else {
}
break;
}

var G__20714 = args20712.length;
switch (G__20714) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20712.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__20715 = obj;
G__20715.push(kfn.call(null,k),vfn.call(null,v));

return G__20715;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x20716 = cljs.core.clone.call(null,handlers);
x20716.forEach = ((function (x20716,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__20717 = cljs.core.seq.call(null,coll);
var chunk__20718 = null;
var count__20719 = (0);
var i__20720 = (0);
while(true){
if((i__20720 < count__20719)){
var vec__20721 = cljs.core._nth.call(null,chunk__20718,i__20720);
var k = cljs.core.nth.call(null,vec__20721,(0),null);
var v = cljs.core.nth.call(null,vec__20721,(1),null);
f.call(null,v,k);

var G__20731 = seq__20717;
var G__20732 = chunk__20718;
var G__20733 = count__20719;
var G__20734 = (i__20720 + (1));
seq__20717 = G__20731;
chunk__20718 = G__20732;
count__20719 = G__20733;
i__20720 = G__20734;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20717);
if(temp__4657__auto__){
var seq__20717__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20717__$1)){
var c__19275__auto__ = cljs.core.chunk_first.call(null,seq__20717__$1);
var G__20735 = cljs.core.chunk_rest.call(null,seq__20717__$1);
var G__20736 = c__19275__auto__;
var G__20737 = cljs.core.count.call(null,c__19275__auto__);
var G__20738 = (0);
seq__20717 = G__20735;
chunk__20718 = G__20736;
count__20719 = G__20737;
i__20720 = G__20738;
continue;
} else {
var vec__20724 = cljs.core.first.call(null,seq__20717__$1);
var k = cljs.core.nth.call(null,vec__20724,(0),null);
var v = cljs.core.nth.call(null,vec__20724,(1),null);
f.call(null,v,k);

var G__20739 = cljs.core.next.call(null,seq__20717__$1);
var G__20740 = null;
var G__20741 = (0);
var G__20742 = (0);
seq__20717 = G__20739;
chunk__20718 = G__20740;
count__20719 = G__20741;
i__20720 = G__20742;
continue;
}
} else {
return null;
}
}
break;
}
});})(x20716,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x20716;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args20743 = [];
var len__19539__auto___20749 = arguments.length;
var i__19540__auto___20750 = (0);
while(true){
if((i__19540__auto___20750 < len__19539__auto___20749)){
args20743.push((arguments[i__19540__auto___20750]));

var G__20751 = (i__19540__auto___20750 + (1));
i__19540__auto___20750 = G__20751;
continue;
} else {
}
break;
}

var G__20745 = args20743.length;
switch (G__20745) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20743.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit20746 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit20746 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta20747){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta20747 = meta20747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit20746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20748,meta20747__$1){
var self__ = this;
var _20748__$1 = this;
return (new cognitect.transit.t_cognitect$transit20746(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta20747__$1));
});

cognitect.transit.t_cognitect$transit20746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20748){
var self__ = this;
var _20748__$1 = this;
return self__.meta20747;
});

cognitect.transit.t_cognitect$transit20746.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit20746.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit20746.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit20746.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit20746.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta20747","meta20747",-1723598173,null)], null);
});

cognitect.transit.t_cognitect$transit20746.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit20746.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit20746";

cognitect.transit.t_cognitect$transit20746.cljs$lang$ctorPrWriter = (function (this__19070__auto__,writer__19071__auto__,opt__19072__auto__){
return cljs.core._write.call(null,writer__19071__auto__,"cognitect.transit/t_cognitect$transit20746");
});

cognitect.transit.__GT_t_cognitect$transit20746 = (function cognitect$transit$__GT_t_cognitect$transit20746(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta20747){
return (new cognitect.transit.t_cognitect$transit20746(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta20747));
});

}

return (new cognitect.transit.t_cognitect$transit20746(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__18464__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map