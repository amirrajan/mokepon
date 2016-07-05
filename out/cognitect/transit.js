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
var seq__29145_29149 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__29146_29150 = null;
var count__29147_29151 = (0);
var i__29148_29152 = (0);
while(true){
if((i__29148_29152 < count__29147_29151)){
var k_29153 = cljs.core._nth.call(null,chunk__29146_29150,i__29148_29152);
var v_29154 = (b[k_29153]);
(a[k_29153] = v_29154);

var G__29155 = seq__29145_29149;
var G__29156 = chunk__29146_29150;
var G__29157 = count__29147_29151;
var G__29158 = (i__29148_29152 + (1));
seq__29145_29149 = G__29155;
chunk__29146_29150 = G__29156;
count__29147_29151 = G__29157;
i__29148_29152 = G__29158;
continue;
} else {
var temp__4657__auto___29159 = cljs.core.seq.call(null,seq__29145_29149);
if(temp__4657__auto___29159){
var seq__29145_29160__$1 = temp__4657__auto___29159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29145_29160__$1)){
var c__28823__auto___29161 = cljs.core.chunk_first.call(null,seq__29145_29160__$1);
var G__29162 = cljs.core.chunk_rest.call(null,seq__29145_29160__$1);
var G__29163 = c__28823__auto___29161;
var G__29164 = cljs.core.count.call(null,c__28823__auto___29161);
var G__29165 = (0);
seq__29145_29149 = G__29162;
chunk__29146_29150 = G__29163;
count__29147_29151 = G__29164;
i__29148_29152 = G__29165;
continue;
} else {
var k_29166 = cljs.core.first.call(null,seq__29145_29160__$1);
var v_29167 = (b[k_29166]);
(a[k_29166] = v_29167);

var G__29168 = cljs.core.next.call(null,seq__29145_29160__$1);
var G__29169 = null;
var G__29170 = (0);
var G__29171 = (0);
seq__29145_29149 = G__29168;
chunk__29146_29150 = G__29169;
count__29147_29151 = G__29170;
i__29148_29152 = G__29171;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cognitect.transit/VectorBuilder");
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
var args29172 = [];
var len__29087__auto___29175 = arguments.length;
var i__29088__auto___29176 = (0);
while(true){
if((i__29088__auto___29176 < len__29087__auto___29175)){
args29172.push((arguments[i__29088__auto___29176]));

var G__29177 = (i__29088__auto___29176 + (1));
i__29088__auto___29176 = G__29177;
continue;
} else {
}
break;
}

var G__29174 = args29172.length;
switch (G__29174) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29172.length)].join('')));

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
var G__29179 = (i + (2));
var G__29180 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__29179;
ret = G__29180;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cognitect.transit/SymbolHandler");
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
var seq__29181_29185 = cljs.core.seq.call(null,v);
var chunk__29182_29186 = null;
var count__29183_29187 = (0);
var i__29184_29188 = (0);
while(true){
if((i__29184_29188 < count__29183_29187)){
var x_29189 = cljs.core._nth.call(null,chunk__29182_29186,i__29184_29188);
ret.push(x_29189);

var G__29190 = seq__29181_29185;
var G__29191 = chunk__29182_29186;
var G__29192 = count__29183_29187;
var G__29193 = (i__29184_29188 + (1));
seq__29181_29185 = G__29190;
chunk__29182_29186 = G__29191;
count__29183_29187 = G__29192;
i__29184_29188 = G__29193;
continue;
} else {
var temp__4657__auto___29194 = cljs.core.seq.call(null,seq__29181_29185);
if(temp__4657__auto___29194){
var seq__29181_29195__$1 = temp__4657__auto___29194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29181_29195__$1)){
var c__28823__auto___29196 = cljs.core.chunk_first.call(null,seq__29181_29195__$1);
var G__29197 = cljs.core.chunk_rest.call(null,seq__29181_29195__$1);
var G__29198 = c__28823__auto___29196;
var G__29199 = cljs.core.count.call(null,c__28823__auto___29196);
var G__29200 = (0);
seq__29181_29185 = G__29197;
chunk__29182_29186 = G__29198;
count__29183_29187 = G__29199;
i__29184_29188 = G__29200;
continue;
} else {
var x_29201 = cljs.core.first.call(null,seq__29181_29195__$1);
ret.push(x_29201);

var G__29202 = cljs.core.next.call(null,seq__29181_29195__$1);
var G__29203 = null;
var G__29204 = (0);
var G__29205 = (0);
seq__29181_29185 = G__29202;
chunk__29182_29186 = G__29203;
count__29183_29187 = G__29204;
i__29184_29188 = G__29205;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cognitect.transit/MapHandler");
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
var seq__29206_29210 = cljs.core.seq.call(null,v);
var chunk__29207_29211 = null;
var count__29208_29212 = (0);
var i__29209_29213 = (0);
while(true){
if((i__29209_29213 < count__29208_29212)){
var x_29214 = cljs.core._nth.call(null,chunk__29207_29211,i__29209_29213);
ret.push(x_29214);

var G__29215 = seq__29206_29210;
var G__29216 = chunk__29207_29211;
var G__29217 = count__29208_29212;
var G__29218 = (i__29209_29213 + (1));
seq__29206_29210 = G__29215;
chunk__29207_29211 = G__29216;
count__29208_29212 = G__29217;
i__29209_29213 = G__29218;
continue;
} else {
var temp__4657__auto___29219 = cljs.core.seq.call(null,seq__29206_29210);
if(temp__4657__auto___29219){
var seq__29206_29220__$1 = temp__4657__auto___29219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29206_29220__$1)){
var c__28823__auto___29221 = cljs.core.chunk_first.call(null,seq__29206_29220__$1);
var G__29222 = cljs.core.chunk_rest.call(null,seq__29206_29220__$1);
var G__29223 = c__28823__auto___29221;
var G__29224 = cljs.core.count.call(null,c__28823__auto___29221);
var G__29225 = (0);
seq__29206_29210 = G__29222;
chunk__29207_29211 = G__29223;
count__29208_29212 = G__29224;
i__29209_29213 = G__29225;
continue;
} else {
var x_29226 = cljs.core.first.call(null,seq__29206_29220__$1);
ret.push(x_29226);

var G__29227 = cljs.core.next.call(null,seq__29206_29220__$1);
var G__29228 = null;
var G__29229 = (0);
var G__29230 = (0);
seq__29206_29210 = G__29227;
chunk__29207_29211 = G__29228;
count__29208_29212 = G__29229;
i__29209_29213 = G__29230;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cognitect.transit/SetHandler");
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
var seq__29231_29235 = cljs.core.seq.call(null,v);
var chunk__29232_29236 = null;
var count__29233_29237 = (0);
var i__29234_29238 = (0);
while(true){
if((i__29234_29238 < count__29233_29237)){
var x_29239 = cljs.core._nth.call(null,chunk__29232_29236,i__29234_29238);
ret.push(x_29239);

var G__29240 = seq__29231_29235;
var G__29241 = chunk__29232_29236;
var G__29242 = count__29233_29237;
var G__29243 = (i__29234_29238 + (1));
seq__29231_29235 = G__29240;
chunk__29232_29236 = G__29241;
count__29233_29237 = G__29242;
i__29234_29238 = G__29243;
continue;
} else {
var temp__4657__auto___29244 = cljs.core.seq.call(null,seq__29231_29235);
if(temp__4657__auto___29244){
var seq__29231_29245__$1 = temp__4657__auto___29244;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29231_29245__$1)){
var c__28823__auto___29246 = cljs.core.chunk_first.call(null,seq__29231_29245__$1);
var G__29247 = cljs.core.chunk_rest.call(null,seq__29231_29245__$1);
var G__29248 = c__28823__auto___29246;
var G__29249 = cljs.core.count.call(null,c__28823__auto___29246);
var G__29250 = (0);
seq__29231_29235 = G__29247;
chunk__29232_29236 = G__29248;
count__29233_29237 = G__29249;
i__29234_29238 = G__29250;
continue;
} else {
var x_29251 = cljs.core.first.call(null,seq__29231_29245__$1);
ret.push(x_29251);

var G__29252 = cljs.core.next.call(null,seq__29231_29245__$1);
var G__29253 = null;
var G__29254 = (0);
var G__29255 = (0);
seq__29231_29235 = G__29252;
chunk__29232_29236 = G__29253;
count__29233_29237 = G__29254;
i__29234_29238 = G__29255;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cognitect.transit/UUIDHandler");
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
var args29256 = [];
var len__29087__auto___29271 = arguments.length;
var i__29088__auto___29272 = (0);
while(true){
if((i__29088__auto___29272 < len__29087__auto___29271)){
args29256.push((arguments[i__29088__auto___29272]));

var G__29273 = (i__29088__auto___29272 + (1));
i__29088__auto___29272 = G__29273;
continue;
} else {
}
break;
}

var G__29258 = args29256.length;
switch (G__29258) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29256.length)].join('')));

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
var G__29259 = obj;
G__29259.push(kfn.call(null,k),vfn.call(null,v));

return G__29259;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x29260 = cljs.core.clone.call(null,handlers);
x29260.forEach = ((function (x29260,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__29261 = cljs.core.seq.call(null,coll);
var chunk__29262 = null;
var count__29263 = (0);
var i__29264 = (0);
while(true){
if((i__29264 < count__29263)){
var vec__29265 = cljs.core._nth.call(null,chunk__29262,i__29264);
var k = cljs.core.nth.call(null,vec__29265,(0),null);
var v = cljs.core.nth.call(null,vec__29265,(1),null);
f.call(null,v,k);

var G__29275 = seq__29261;
var G__29276 = chunk__29262;
var G__29277 = count__29263;
var G__29278 = (i__29264 + (1));
seq__29261 = G__29275;
chunk__29262 = G__29276;
count__29263 = G__29277;
i__29264 = G__29278;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29261);
if(temp__4657__auto__){
var seq__29261__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29261__$1)){
var c__28823__auto__ = cljs.core.chunk_first.call(null,seq__29261__$1);
var G__29279 = cljs.core.chunk_rest.call(null,seq__29261__$1);
var G__29280 = c__28823__auto__;
var G__29281 = cljs.core.count.call(null,c__28823__auto__);
var G__29282 = (0);
seq__29261 = G__29279;
chunk__29262 = G__29280;
count__29263 = G__29281;
i__29264 = G__29282;
continue;
} else {
var vec__29268 = cljs.core.first.call(null,seq__29261__$1);
var k = cljs.core.nth.call(null,vec__29268,(0),null);
var v = cljs.core.nth.call(null,vec__29268,(1),null);
f.call(null,v,k);

var G__29283 = cljs.core.next.call(null,seq__29261__$1);
var G__29284 = null;
var G__29285 = (0);
var G__29286 = (0);
seq__29261 = G__29283;
chunk__29262 = G__29284;
count__29263 = G__29285;
i__29264 = G__29286;
continue;
}
} else {
return null;
}
}
break;
}
});})(x29260,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x29260;
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
var args29287 = [];
var len__29087__auto___29293 = arguments.length;
var i__29088__auto___29294 = (0);
while(true){
if((i__29088__auto___29294 < len__29087__auto___29293)){
args29287.push((arguments[i__29088__auto___29294]));

var G__29295 = (i__29088__auto___29294 + (1));
i__29088__auto___29294 = G__29295;
continue;
} else {
}
break;
}

var G__29289 = args29287.length;
switch (G__29289) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29287.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit29290 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit29290 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta29291){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta29291 = meta29291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit29290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29292,meta29291__$1){
var self__ = this;
var _29292__$1 = this;
return (new cognitect.transit.t_cognitect$transit29290(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta29291__$1));
});

cognitect.transit.t_cognitect$transit29290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29292){
var self__ = this;
var _29292__$1 = this;
return self__.meta29291;
});

cognitect.transit.t_cognitect$transit29290.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit29290.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit29290.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit29290.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit29290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta29291","meta29291",-1409481786,null)], null);
});

cognitect.transit.t_cognitect$transit29290.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit29290.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit29290";

cognitect.transit.t_cognitect$transit29290.cljs$lang$ctorPrWriter = (function (this__28618__auto__,writer__28619__auto__,opt__28620__auto__){
return cljs.core._write.call(null,writer__28619__auto__,"cognitect.transit/t_cognitect$transit29290");
});

cognitect.transit.__GT_t_cognitect$transit29290 = (function cognitect$transit$__GT_t_cognitect$transit29290(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta29291){
return (new cognitect.transit.t_cognitect$transit29290(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta29291));
});

}

return (new cognitect.transit.t_cognitect$transit29290(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__28012__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__28012__auto__)){
return or__28012__auto__;
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