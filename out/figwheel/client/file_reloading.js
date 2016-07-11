// Compiled by ClojureScript 1.9.76 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28012__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28012__auto__){
return or__28012__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28012__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__28012__auto__)){
return or__28012__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34220_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34220_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34225 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34226 = null;
var count__34227 = (0);
var i__34228 = (0);
while(true){
if((i__34228 < count__34227)){
var n = cljs.core._nth.call(null,chunk__34226,i__34228);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34229 = seq__34225;
var G__34230 = chunk__34226;
var G__34231 = count__34227;
var G__34232 = (i__34228 + (1));
seq__34225 = G__34229;
chunk__34226 = G__34230;
count__34227 = G__34231;
i__34228 = G__34232;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34225);
if(temp__4657__auto__){
var seq__34225__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34225__$1)){
var c__28823__auto__ = cljs.core.chunk_first.call(null,seq__34225__$1);
var G__34233 = cljs.core.chunk_rest.call(null,seq__34225__$1);
var G__34234 = c__28823__auto__;
var G__34235 = cljs.core.count.call(null,c__28823__auto__);
var G__34236 = (0);
seq__34225 = G__34233;
chunk__34226 = G__34234;
count__34227 = G__34235;
i__34228 = G__34236;
continue;
} else {
var n = cljs.core.first.call(null,seq__34225__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34237 = cljs.core.next.call(null,seq__34225__$1);
var G__34238 = null;
var G__34239 = (0);
var G__34240 = (0);
seq__34225 = G__34237;
chunk__34226 = G__34238;
count__34227 = G__34239;
i__34228 = G__34240;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34291_34302 = cljs.core.seq.call(null,deps);
var chunk__34292_34303 = null;
var count__34293_34304 = (0);
var i__34294_34305 = (0);
while(true){
if((i__34294_34305 < count__34293_34304)){
var dep_34306 = cljs.core._nth.call(null,chunk__34292_34303,i__34294_34305);
topo_sort_helper_STAR_.call(null,dep_34306,(depth + (1)),state);

var G__34307 = seq__34291_34302;
var G__34308 = chunk__34292_34303;
var G__34309 = count__34293_34304;
var G__34310 = (i__34294_34305 + (1));
seq__34291_34302 = G__34307;
chunk__34292_34303 = G__34308;
count__34293_34304 = G__34309;
i__34294_34305 = G__34310;
continue;
} else {
var temp__4657__auto___34311 = cljs.core.seq.call(null,seq__34291_34302);
if(temp__4657__auto___34311){
var seq__34291_34312__$1 = temp__4657__auto___34311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34291_34312__$1)){
var c__28823__auto___34313 = cljs.core.chunk_first.call(null,seq__34291_34312__$1);
var G__34314 = cljs.core.chunk_rest.call(null,seq__34291_34312__$1);
var G__34315 = c__28823__auto___34313;
var G__34316 = cljs.core.count.call(null,c__28823__auto___34313);
var G__34317 = (0);
seq__34291_34302 = G__34314;
chunk__34292_34303 = G__34315;
count__34293_34304 = G__34316;
i__34294_34305 = G__34317;
continue;
} else {
var dep_34318 = cljs.core.first.call(null,seq__34291_34312__$1);
topo_sort_helper_STAR_.call(null,dep_34318,(depth + (1)),state);

var G__34319 = cljs.core.next.call(null,seq__34291_34312__$1);
var G__34320 = null;
var G__34321 = (0);
var G__34322 = (0);
seq__34291_34302 = G__34319;
chunk__34292_34303 = G__34320;
count__34293_34304 = G__34321;
i__34294_34305 = G__34322;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34295){
var vec__34299 = p__34295;
var seq__34300 = cljs.core.seq.call(null,vec__34299);
var first__34301 = cljs.core.first.call(null,seq__34300);
var seq__34300__$1 = cljs.core.next.call(null,seq__34300);
var x = first__34301;
var xs = seq__34300__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34299,seq__34300,first__34301,seq__34300__$1,x,xs,get_deps__$1){
return (function (p1__34241_SHARP_){
return clojure.set.difference.call(null,p1__34241_SHARP_,x);
});})(vec__34299,seq__34300,first__34301,seq__34300__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34335 = cljs.core.seq.call(null,provides);
var chunk__34336 = null;
var count__34337 = (0);
var i__34338 = (0);
while(true){
if((i__34338 < count__34337)){
var prov = cljs.core._nth.call(null,chunk__34336,i__34338);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34339_34347 = cljs.core.seq.call(null,requires);
var chunk__34340_34348 = null;
var count__34341_34349 = (0);
var i__34342_34350 = (0);
while(true){
if((i__34342_34350 < count__34341_34349)){
var req_34351 = cljs.core._nth.call(null,chunk__34340_34348,i__34342_34350);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34351,prov);

var G__34352 = seq__34339_34347;
var G__34353 = chunk__34340_34348;
var G__34354 = count__34341_34349;
var G__34355 = (i__34342_34350 + (1));
seq__34339_34347 = G__34352;
chunk__34340_34348 = G__34353;
count__34341_34349 = G__34354;
i__34342_34350 = G__34355;
continue;
} else {
var temp__4657__auto___34356 = cljs.core.seq.call(null,seq__34339_34347);
if(temp__4657__auto___34356){
var seq__34339_34357__$1 = temp__4657__auto___34356;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34339_34357__$1)){
var c__28823__auto___34358 = cljs.core.chunk_first.call(null,seq__34339_34357__$1);
var G__34359 = cljs.core.chunk_rest.call(null,seq__34339_34357__$1);
var G__34360 = c__28823__auto___34358;
var G__34361 = cljs.core.count.call(null,c__28823__auto___34358);
var G__34362 = (0);
seq__34339_34347 = G__34359;
chunk__34340_34348 = G__34360;
count__34341_34349 = G__34361;
i__34342_34350 = G__34362;
continue;
} else {
var req_34363 = cljs.core.first.call(null,seq__34339_34357__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34363,prov);

var G__34364 = cljs.core.next.call(null,seq__34339_34357__$1);
var G__34365 = null;
var G__34366 = (0);
var G__34367 = (0);
seq__34339_34347 = G__34364;
chunk__34340_34348 = G__34365;
count__34341_34349 = G__34366;
i__34342_34350 = G__34367;
continue;
}
} else {
}
}
break;
}

var G__34368 = seq__34335;
var G__34369 = chunk__34336;
var G__34370 = count__34337;
var G__34371 = (i__34338 + (1));
seq__34335 = G__34368;
chunk__34336 = G__34369;
count__34337 = G__34370;
i__34338 = G__34371;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34335);
if(temp__4657__auto__){
var seq__34335__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34335__$1)){
var c__28823__auto__ = cljs.core.chunk_first.call(null,seq__34335__$1);
var G__34372 = cljs.core.chunk_rest.call(null,seq__34335__$1);
var G__34373 = c__28823__auto__;
var G__34374 = cljs.core.count.call(null,c__28823__auto__);
var G__34375 = (0);
seq__34335 = G__34372;
chunk__34336 = G__34373;
count__34337 = G__34374;
i__34338 = G__34375;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34335__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34343_34376 = cljs.core.seq.call(null,requires);
var chunk__34344_34377 = null;
var count__34345_34378 = (0);
var i__34346_34379 = (0);
while(true){
if((i__34346_34379 < count__34345_34378)){
var req_34380 = cljs.core._nth.call(null,chunk__34344_34377,i__34346_34379);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34380,prov);

var G__34381 = seq__34343_34376;
var G__34382 = chunk__34344_34377;
var G__34383 = count__34345_34378;
var G__34384 = (i__34346_34379 + (1));
seq__34343_34376 = G__34381;
chunk__34344_34377 = G__34382;
count__34345_34378 = G__34383;
i__34346_34379 = G__34384;
continue;
} else {
var temp__4657__auto___34385__$1 = cljs.core.seq.call(null,seq__34343_34376);
if(temp__4657__auto___34385__$1){
var seq__34343_34386__$1 = temp__4657__auto___34385__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34343_34386__$1)){
var c__28823__auto___34387 = cljs.core.chunk_first.call(null,seq__34343_34386__$1);
var G__34388 = cljs.core.chunk_rest.call(null,seq__34343_34386__$1);
var G__34389 = c__28823__auto___34387;
var G__34390 = cljs.core.count.call(null,c__28823__auto___34387);
var G__34391 = (0);
seq__34343_34376 = G__34388;
chunk__34344_34377 = G__34389;
count__34345_34378 = G__34390;
i__34346_34379 = G__34391;
continue;
} else {
var req_34392 = cljs.core.first.call(null,seq__34343_34386__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34392,prov);

var G__34393 = cljs.core.next.call(null,seq__34343_34386__$1);
var G__34394 = null;
var G__34395 = (0);
var G__34396 = (0);
seq__34343_34376 = G__34393;
chunk__34344_34377 = G__34394;
count__34345_34378 = G__34395;
i__34346_34379 = G__34396;
continue;
}
} else {
}
}
break;
}

var G__34397 = cljs.core.next.call(null,seq__34335__$1);
var G__34398 = null;
var G__34399 = (0);
var G__34400 = (0);
seq__34335 = G__34397;
chunk__34336 = G__34398;
count__34337 = G__34399;
i__34338 = G__34400;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34405_34409 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34406_34410 = null;
var count__34407_34411 = (0);
var i__34408_34412 = (0);
while(true){
if((i__34408_34412 < count__34407_34411)){
var ns_34413 = cljs.core._nth.call(null,chunk__34406_34410,i__34408_34412);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34413);

var G__34414 = seq__34405_34409;
var G__34415 = chunk__34406_34410;
var G__34416 = count__34407_34411;
var G__34417 = (i__34408_34412 + (1));
seq__34405_34409 = G__34414;
chunk__34406_34410 = G__34415;
count__34407_34411 = G__34416;
i__34408_34412 = G__34417;
continue;
} else {
var temp__4657__auto___34418 = cljs.core.seq.call(null,seq__34405_34409);
if(temp__4657__auto___34418){
var seq__34405_34419__$1 = temp__4657__auto___34418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34405_34419__$1)){
var c__28823__auto___34420 = cljs.core.chunk_first.call(null,seq__34405_34419__$1);
var G__34421 = cljs.core.chunk_rest.call(null,seq__34405_34419__$1);
var G__34422 = c__28823__auto___34420;
var G__34423 = cljs.core.count.call(null,c__28823__auto___34420);
var G__34424 = (0);
seq__34405_34409 = G__34421;
chunk__34406_34410 = G__34422;
count__34407_34411 = G__34423;
i__34408_34412 = G__34424;
continue;
} else {
var ns_34425 = cljs.core.first.call(null,seq__34405_34419__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34425);

var G__34426 = cljs.core.next.call(null,seq__34405_34419__$1);
var G__34427 = null;
var G__34428 = (0);
var G__34429 = (0);
seq__34405_34409 = G__34426;
chunk__34406_34410 = G__34427;
count__34407_34411 = G__34428;
i__34408_34412 = G__34429;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28012__auto__ = goog.require__;
if(cljs.core.truth_(or__28012__auto__)){
return or__28012__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34430__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34430 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34431__i = 0, G__34431__a = new Array(arguments.length -  0);
while (G__34431__i < G__34431__a.length) {G__34431__a[G__34431__i] = arguments[G__34431__i + 0]; ++G__34431__i;}
  args = new cljs.core.IndexedSeq(G__34431__a,0);
} 
return G__34430__delegate.call(this,args);};
G__34430.cljs$lang$maxFixedArity = 0;
G__34430.cljs$lang$applyTo = (function (arglist__34432){
var args = cljs.core.seq(arglist__34432);
return G__34430__delegate(args);
});
G__34430.cljs$core$IFn$_invoke$arity$variadic = G__34430__delegate;
return G__34430;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34434 = cljs.core._EQ_;
var expr__34435 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34434.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34435))){
var path_parts = ((function (pred__34434,expr__34435){
return (function (p1__34433_SHARP_){
return clojure.string.split.call(null,p1__34433_SHARP_,/[\/\\]/);
});})(pred__34434,expr__34435))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__34434,expr__34435){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34437){if((e34437 instanceof Error)){
var e = e34437;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34437;

}
}})());
});
;})(path_parts,sep,root,pred__34434,expr__34435))
} else {
if(cljs.core.truth_(pred__34434.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34435))){
return ((function (pred__34434,expr__34435){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__34434,expr__34435){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34434,expr__34435))
);

return deferred.addErrback(((function (deferred,pred__34434,expr__34435){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34434,expr__34435))
);
});
;})(pred__34434,expr__34435))
} else {
return ((function (pred__34434,expr__34435){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34434,expr__34435))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34438,callback){
var map__34441 = p__34438;
var map__34441__$1 = ((((!((map__34441 == null)))?((((map__34441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34441):map__34441);
var file_msg = map__34441__$1;
var request_url = cljs.core.get.call(null,map__34441__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34441,map__34441__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34441,map__34441__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30729__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto__){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto__){
return (function (state_34465){
var state_val_34466 = (state_34465[(1)]);
if((state_val_34466 === (7))){
var inst_34461 = (state_34465[(2)]);
var state_34465__$1 = state_34465;
var statearr_34467_34487 = state_34465__$1;
(statearr_34467_34487[(2)] = inst_34461);

(statearr_34467_34487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (1))){
var state_34465__$1 = state_34465;
var statearr_34468_34488 = state_34465__$1;
(statearr_34468_34488[(2)] = null);

(statearr_34468_34488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (4))){
var inst_34445 = (state_34465[(7)]);
var inst_34445__$1 = (state_34465[(2)]);
var state_34465__$1 = (function (){var statearr_34469 = state_34465;
(statearr_34469[(7)] = inst_34445__$1);

return statearr_34469;
})();
if(cljs.core.truth_(inst_34445__$1)){
var statearr_34470_34489 = state_34465__$1;
(statearr_34470_34489[(1)] = (5));

} else {
var statearr_34471_34490 = state_34465__$1;
(statearr_34471_34490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (6))){
var state_34465__$1 = state_34465;
var statearr_34472_34491 = state_34465__$1;
(statearr_34472_34491[(2)] = null);

(statearr_34472_34491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (3))){
var inst_34463 = (state_34465[(2)]);
var state_34465__$1 = state_34465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34465__$1,inst_34463);
} else {
if((state_val_34466 === (2))){
var state_34465__$1 = state_34465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34465__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34466 === (11))){
var inst_34457 = (state_34465[(2)]);
var state_34465__$1 = (function (){var statearr_34473 = state_34465;
(statearr_34473[(8)] = inst_34457);

return statearr_34473;
})();
var statearr_34474_34492 = state_34465__$1;
(statearr_34474_34492[(2)] = null);

(statearr_34474_34492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (9))){
var inst_34451 = (state_34465[(9)]);
var inst_34449 = (state_34465[(10)]);
var inst_34453 = inst_34451.call(null,inst_34449);
var state_34465__$1 = state_34465;
var statearr_34475_34493 = state_34465__$1;
(statearr_34475_34493[(2)] = inst_34453);

(statearr_34475_34493[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (5))){
var inst_34445 = (state_34465[(7)]);
var inst_34447 = figwheel.client.file_reloading.blocking_load.call(null,inst_34445);
var state_34465__$1 = state_34465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34465__$1,(8),inst_34447);
} else {
if((state_val_34466 === (10))){
var inst_34449 = (state_34465[(10)]);
var inst_34455 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34449);
var state_34465__$1 = state_34465;
var statearr_34476_34494 = state_34465__$1;
(statearr_34476_34494[(2)] = inst_34455);

(statearr_34476_34494[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (8))){
var inst_34451 = (state_34465[(9)]);
var inst_34445 = (state_34465[(7)]);
var inst_34449 = (state_34465[(2)]);
var inst_34450 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34451__$1 = cljs.core.get.call(null,inst_34450,inst_34445);
var state_34465__$1 = (function (){var statearr_34477 = state_34465;
(statearr_34477[(9)] = inst_34451__$1);

(statearr_34477[(10)] = inst_34449);

return statearr_34477;
})();
if(cljs.core.truth_(inst_34451__$1)){
var statearr_34478_34495 = state_34465__$1;
(statearr_34478_34495[(1)] = (9));

} else {
var statearr_34479_34496 = state_34465__$1;
(statearr_34479_34496[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30729__auto__))
;
return ((function (switch__30708__auto__,c__30729__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30709__auto__ = null;
var figwheel$client$file_reloading$state_machine__30709__auto____0 = (function (){
var statearr_34483 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34483[(0)] = figwheel$client$file_reloading$state_machine__30709__auto__);

(statearr_34483[(1)] = (1));

return statearr_34483;
});
var figwheel$client$file_reloading$state_machine__30709__auto____1 = (function (state_34465){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_34465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e34484){if((e34484 instanceof Object)){
var ex__30712__auto__ = e34484;
var statearr_34485_34497 = state_34465;
(statearr_34485_34497[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34498 = state_34465;
state_34465 = G__34498;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30709__auto__ = function(state_34465){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30709__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30709__auto____1.call(this,state_34465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30709__auto____0;
figwheel$client$file_reloading$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30709__auto____1;
return figwheel$client$file_reloading$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto__))
})();
var state__30731__auto__ = (function (){var statearr_34486 = f__30730__auto__.call(null);
(statearr_34486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto__);

return statearr_34486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto__))
);

return c__30729__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34499,callback){
var map__34502 = p__34499;
var map__34502__$1 = ((((!((map__34502 == null)))?((((map__34502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34502):map__34502);
var file_msg = map__34502__$1;
var namespace = cljs.core.get.call(null,map__34502__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34502,map__34502__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34502,map__34502__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34504){
var map__34507 = p__34504;
var map__34507__$1 = ((((!((map__34507 == null)))?((((map__34507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34507):map__34507);
var file_msg = map__34507__$1;
var namespace = cljs.core.get.call(null,map__34507__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28000__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__28000__auto__){
var or__28012__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28012__auto__)){
return or__28012__auto__;
} else {
var or__28012__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28012__auto____$1)){
return or__28012__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28000__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34509,callback){
var map__34512 = p__34509;
var map__34512__$1 = ((((!((map__34512 == null)))?((((map__34512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34512):map__34512);
var file_msg = map__34512__$1;
var request_url = cljs.core.get.call(null,map__34512__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34512__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30729__auto___34616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto___34616,out){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto___34616,out){
return (function (state_34598){
var state_val_34599 = (state_34598[(1)]);
if((state_val_34599 === (1))){
var inst_34572 = cljs.core.seq.call(null,files);
var inst_34573 = cljs.core.first.call(null,inst_34572);
var inst_34574 = cljs.core.next.call(null,inst_34572);
var inst_34575 = files;
var state_34598__$1 = (function (){var statearr_34600 = state_34598;
(statearr_34600[(7)] = inst_34574);

(statearr_34600[(8)] = inst_34573);

(statearr_34600[(9)] = inst_34575);

return statearr_34600;
})();
var statearr_34601_34617 = state_34598__$1;
(statearr_34601_34617[(2)] = null);

(statearr_34601_34617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (2))){
var inst_34581 = (state_34598[(10)]);
var inst_34575 = (state_34598[(9)]);
var inst_34580 = cljs.core.seq.call(null,inst_34575);
var inst_34581__$1 = cljs.core.first.call(null,inst_34580);
var inst_34582 = cljs.core.next.call(null,inst_34580);
var inst_34583 = (inst_34581__$1 == null);
var inst_34584 = cljs.core.not.call(null,inst_34583);
var state_34598__$1 = (function (){var statearr_34602 = state_34598;
(statearr_34602[(10)] = inst_34581__$1);

(statearr_34602[(11)] = inst_34582);

return statearr_34602;
})();
if(inst_34584){
var statearr_34603_34618 = state_34598__$1;
(statearr_34603_34618[(1)] = (4));

} else {
var statearr_34604_34619 = state_34598__$1;
(statearr_34604_34619[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (3))){
var inst_34596 = (state_34598[(2)]);
var state_34598__$1 = state_34598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34598__$1,inst_34596);
} else {
if((state_val_34599 === (4))){
var inst_34581 = (state_34598[(10)]);
var inst_34586 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34581);
var state_34598__$1 = state_34598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34598__$1,(7),inst_34586);
} else {
if((state_val_34599 === (5))){
var inst_34592 = cljs.core.async.close_BANG_.call(null,out);
var state_34598__$1 = state_34598;
var statearr_34605_34620 = state_34598__$1;
(statearr_34605_34620[(2)] = inst_34592);

(statearr_34605_34620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (6))){
var inst_34594 = (state_34598[(2)]);
var state_34598__$1 = state_34598;
var statearr_34606_34621 = state_34598__$1;
(statearr_34606_34621[(2)] = inst_34594);

(statearr_34606_34621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (7))){
var inst_34582 = (state_34598[(11)]);
var inst_34588 = (state_34598[(2)]);
var inst_34589 = cljs.core.async.put_BANG_.call(null,out,inst_34588);
var inst_34575 = inst_34582;
var state_34598__$1 = (function (){var statearr_34607 = state_34598;
(statearr_34607[(12)] = inst_34589);

(statearr_34607[(9)] = inst_34575);

return statearr_34607;
})();
var statearr_34608_34622 = state_34598__$1;
(statearr_34608_34622[(2)] = null);

(statearr_34608_34622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__30729__auto___34616,out))
;
return ((function (switch__30708__auto__,c__30729__auto___34616,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30709__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30709__auto____0 = (function (){
var statearr_34612 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34612[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30709__auto__);

(statearr_34612[(1)] = (1));

return statearr_34612;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30709__auto____1 = (function (state_34598){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_34598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e34613){if((e34613 instanceof Object)){
var ex__30712__auto__ = e34613;
var statearr_34614_34623 = state_34598;
(statearr_34614_34623[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34624 = state_34598;
state_34598 = G__34624;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30709__auto__ = function(state_34598){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30709__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30709__auto____1.call(this,state_34598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30709__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30709__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto___34616,out))
})();
var state__30731__auto__ = (function (){var statearr_34615 = f__30730__auto__.call(null);
(statearr_34615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto___34616);

return statearr_34615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto___34616,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34625,opts){
var map__34629 = p__34625;
var map__34629__$1 = ((((!((map__34629 == null)))?((((map__34629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34629):map__34629);
var eval_body__$1 = cljs.core.get.call(null,map__34629__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34629__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28000__auto__ = eval_body__$1;
if(cljs.core.truth_(and__28000__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__28000__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34631){var e = e34631;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34632_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34632_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34641){
var vec__34642 = p__34641;
var k = cljs.core.nth.call(null,vec__34642,(0),null);
var v = cljs.core.nth.call(null,vec__34642,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34645){
var vec__34646 = p__34645;
var k = cljs.core.nth.call(null,vec__34646,(0),null);
var v = cljs.core.nth.call(null,vec__34646,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34652,p__34653){
var map__34900 = p__34652;
var map__34900__$1 = ((((!((map__34900 == null)))?((((map__34900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34900):map__34900);
var opts = map__34900__$1;
var before_jsload = cljs.core.get.call(null,map__34900__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34900__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34900__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34901 = p__34653;
var map__34901__$1 = ((((!((map__34901 == null)))?((((map__34901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34901):map__34901);
var msg = map__34901__$1;
var files = cljs.core.get.call(null,map__34901__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34901__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34901__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30729__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30729__auto__,map__34900,map__34900__$1,opts,before_jsload,on_jsload,reload_dependents,map__34901,map__34901__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30730__auto__ = (function (){var switch__30708__auto__ = ((function (c__30729__auto__,map__34900,map__34900__$1,opts,before_jsload,on_jsload,reload_dependents,map__34901,map__34901__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35054){
var state_val_35055 = (state_35054[(1)]);
if((state_val_35055 === (7))){
var inst_34918 = (state_35054[(7)]);
var inst_34915 = (state_35054[(8)]);
var inst_34916 = (state_35054[(9)]);
var inst_34917 = (state_35054[(10)]);
var inst_34923 = cljs.core._nth.call(null,inst_34916,inst_34918);
var inst_34924 = figwheel.client.file_reloading.eval_body.call(null,inst_34923,opts);
var inst_34925 = (inst_34918 + (1));
var tmp35056 = inst_34915;
var tmp35057 = inst_34916;
var tmp35058 = inst_34917;
var inst_34915__$1 = tmp35056;
var inst_34916__$1 = tmp35057;
var inst_34917__$1 = tmp35058;
var inst_34918__$1 = inst_34925;
var state_35054__$1 = (function (){var statearr_35059 = state_35054;
(statearr_35059[(7)] = inst_34918__$1);

(statearr_35059[(11)] = inst_34924);

(statearr_35059[(8)] = inst_34915__$1);

(statearr_35059[(9)] = inst_34916__$1);

(statearr_35059[(10)] = inst_34917__$1);

return statearr_35059;
})();
var statearr_35060_35146 = state_35054__$1;
(statearr_35060_35146[(2)] = null);

(statearr_35060_35146[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (20))){
var inst_34958 = (state_35054[(12)]);
var inst_34966 = figwheel.client.file_reloading.sort_files.call(null,inst_34958);
var state_35054__$1 = state_35054;
var statearr_35061_35147 = state_35054__$1;
(statearr_35061_35147[(2)] = inst_34966);

(statearr_35061_35147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (27))){
var state_35054__$1 = state_35054;
var statearr_35062_35148 = state_35054__$1;
(statearr_35062_35148[(2)] = null);

(statearr_35062_35148[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (1))){
var inst_34907 = (state_35054[(13)]);
var inst_34904 = before_jsload.call(null,files);
var inst_34905 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34906 = (function (){return ((function (inst_34907,inst_34904,inst_34905,state_val_35055,c__30729__auto__,map__34900,map__34900__$1,opts,before_jsload,on_jsload,reload_dependents,map__34901,map__34901__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34649_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34649_SHARP_);
});
;})(inst_34907,inst_34904,inst_34905,state_val_35055,c__30729__auto__,map__34900,map__34900__$1,opts,before_jsload,on_jsload,reload_dependents,map__34901,map__34901__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34907__$1 = cljs.core.filter.call(null,inst_34906,files);
var inst_34908 = cljs.core.not_empty.call(null,inst_34907__$1);
var state_35054__$1 = (function (){var statearr_35063 = state_35054;
(statearr_35063[(14)] = inst_34905);

(statearr_35063[(13)] = inst_34907__$1);

(statearr_35063[(15)] = inst_34904);

return statearr_35063;
})();
if(cljs.core.truth_(inst_34908)){
var statearr_35064_35149 = state_35054__$1;
(statearr_35064_35149[(1)] = (2));

} else {
var statearr_35065_35150 = state_35054__$1;
(statearr_35065_35150[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (24))){
var state_35054__$1 = state_35054;
var statearr_35066_35151 = state_35054__$1;
(statearr_35066_35151[(2)] = null);

(statearr_35066_35151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (39))){
var inst_35008 = (state_35054[(16)]);
var state_35054__$1 = state_35054;
var statearr_35067_35152 = state_35054__$1;
(statearr_35067_35152[(2)] = inst_35008);

(statearr_35067_35152[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (46))){
var inst_35049 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
var statearr_35068_35153 = state_35054__$1;
(statearr_35068_35153[(2)] = inst_35049);

(statearr_35068_35153[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (4))){
var inst_34952 = (state_35054[(2)]);
var inst_34953 = cljs.core.List.EMPTY;
var inst_34954 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34953);
var inst_34955 = (function (){return ((function (inst_34952,inst_34953,inst_34954,state_val_35055,c__30729__auto__,map__34900,map__34900__$1,opts,before_jsload,on_jsload,reload_dependents,map__34901,map__34901__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34650_SHARP_){
var and__28000__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34650_SHARP_);
if(cljs.core.truth_(and__28000__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34650_SHARP_));
} else {
return and__28000__auto__;
}
});
;})(inst_34952,inst_34953,inst_34954,state_val_35055,c__30729__auto__,map__34900,map__34900__$1,opts,before_jsload,on_jsload,reload_dependents,map__34901,map__34901__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34956 = cljs.core.filter.call(null,inst_34955,files);
var inst_34957 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34958 = cljs.core.concat.call(null,inst_34956,inst_34957);
var state_35054__$1 = (function (){var statearr_35069 = state_35054;
(statearr_35069[(17)] = inst_34952);

(statearr_35069[(12)] = inst_34958);

(statearr_35069[(18)] = inst_34954);

return statearr_35069;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35070_35154 = state_35054__$1;
(statearr_35070_35154[(1)] = (16));

} else {
var statearr_35071_35155 = state_35054__$1;
(statearr_35071_35155[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (15))){
var inst_34942 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
var statearr_35072_35156 = state_35054__$1;
(statearr_35072_35156[(2)] = inst_34942);

(statearr_35072_35156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (21))){
var inst_34968 = (state_35054[(19)]);
var inst_34968__$1 = (state_35054[(2)]);
var inst_34969 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34968__$1);
var state_35054__$1 = (function (){var statearr_35073 = state_35054;
(statearr_35073[(19)] = inst_34968__$1);

return statearr_35073;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35054__$1,(22),inst_34969);
} else {
if((state_val_35055 === (31))){
var inst_35052 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35054__$1,inst_35052);
} else {
if((state_val_35055 === (32))){
var inst_35008 = (state_35054[(16)]);
var inst_35013 = inst_35008.cljs$lang$protocol_mask$partition0$;
var inst_35014 = (inst_35013 & (64));
var inst_35015 = inst_35008.cljs$core$ISeq$;
var inst_35016 = (inst_35014) || (inst_35015);
var state_35054__$1 = state_35054;
if(cljs.core.truth_(inst_35016)){
var statearr_35074_35157 = state_35054__$1;
(statearr_35074_35157[(1)] = (35));

} else {
var statearr_35075_35158 = state_35054__$1;
(statearr_35075_35158[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (40))){
var inst_35029 = (state_35054[(20)]);
var inst_35028 = (state_35054[(2)]);
var inst_35029__$1 = cljs.core.get.call(null,inst_35028,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35030 = cljs.core.get.call(null,inst_35028,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35031 = cljs.core.not_empty.call(null,inst_35029__$1);
var state_35054__$1 = (function (){var statearr_35076 = state_35054;
(statearr_35076[(20)] = inst_35029__$1);

(statearr_35076[(21)] = inst_35030);

return statearr_35076;
})();
if(cljs.core.truth_(inst_35031)){
var statearr_35077_35159 = state_35054__$1;
(statearr_35077_35159[(1)] = (41));

} else {
var statearr_35078_35160 = state_35054__$1;
(statearr_35078_35160[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (33))){
var state_35054__$1 = state_35054;
var statearr_35079_35161 = state_35054__$1;
(statearr_35079_35161[(2)] = false);

(statearr_35079_35161[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (13))){
var inst_34928 = (state_35054[(22)]);
var inst_34932 = cljs.core.chunk_first.call(null,inst_34928);
var inst_34933 = cljs.core.chunk_rest.call(null,inst_34928);
var inst_34934 = cljs.core.count.call(null,inst_34932);
var inst_34915 = inst_34933;
var inst_34916 = inst_34932;
var inst_34917 = inst_34934;
var inst_34918 = (0);
var state_35054__$1 = (function (){var statearr_35080 = state_35054;
(statearr_35080[(7)] = inst_34918);

(statearr_35080[(8)] = inst_34915);

(statearr_35080[(9)] = inst_34916);

(statearr_35080[(10)] = inst_34917);

return statearr_35080;
})();
var statearr_35081_35162 = state_35054__$1;
(statearr_35081_35162[(2)] = null);

(statearr_35081_35162[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (22))){
var inst_34972 = (state_35054[(23)]);
var inst_34971 = (state_35054[(24)]);
var inst_34976 = (state_35054[(25)]);
var inst_34968 = (state_35054[(19)]);
var inst_34971__$1 = (state_35054[(2)]);
var inst_34972__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34971__$1);
var inst_34973 = (function (){var all_files = inst_34968;
var res_SINGLEQUOTE_ = inst_34971__$1;
var res = inst_34972__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34972,inst_34971,inst_34976,inst_34968,inst_34971__$1,inst_34972__$1,state_val_35055,c__30729__auto__,map__34900,map__34900__$1,opts,before_jsload,on_jsload,reload_dependents,map__34901,map__34901__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34651_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34651_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34972,inst_34971,inst_34976,inst_34968,inst_34971__$1,inst_34972__$1,state_val_35055,c__30729__auto__,map__34900,map__34900__$1,opts,before_jsload,on_jsload,reload_dependents,map__34901,map__34901__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34974 = cljs.core.filter.call(null,inst_34973,inst_34971__$1);
var inst_34975 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34976__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34975);
var inst_34977 = cljs.core.not_empty.call(null,inst_34976__$1);
var state_35054__$1 = (function (){var statearr_35082 = state_35054;
(statearr_35082[(23)] = inst_34972__$1);

(statearr_35082[(24)] = inst_34971__$1);

(statearr_35082[(25)] = inst_34976__$1);

(statearr_35082[(26)] = inst_34974);

return statearr_35082;
})();
if(cljs.core.truth_(inst_34977)){
var statearr_35083_35163 = state_35054__$1;
(statearr_35083_35163[(1)] = (23));

} else {
var statearr_35084_35164 = state_35054__$1;
(statearr_35084_35164[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (36))){
var state_35054__$1 = state_35054;
var statearr_35085_35165 = state_35054__$1;
(statearr_35085_35165[(2)] = false);

(statearr_35085_35165[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (41))){
var inst_35029 = (state_35054[(20)]);
var inst_35033 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35034 = cljs.core.map.call(null,inst_35033,inst_35029);
var inst_35035 = cljs.core.pr_str.call(null,inst_35034);
var inst_35036 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35035)].join('');
var inst_35037 = figwheel.client.utils.log.call(null,inst_35036);
var state_35054__$1 = state_35054;
var statearr_35086_35166 = state_35054__$1;
(statearr_35086_35166[(2)] = inst_35037);

(statearr_35086_35166[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (43))){
var inst_35030 = (state_35054[(21)]);
var inst_35040 = (state_35054[(2)]);
var inst_35041 = cljs.core.not_empty.call(null,inst_35030);
var state_35054__$1 = (function (){var statearr_35087 = state_35054;
(statearr_35087[(27)] = inst_35040);

return statearr_35087;
})();
if(cljs.core.truth_(inst_35041)){
var statearr_35088_35167 = state_35054__$1;
(statearr_35088_35167[(1)] = (44));

} else {
var statearr_35089_35168 = state_35054__$1;
(statearr_35089_35168[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (29))){
var inst_35008 = (state_35054[(16)]);
var inst_34972 = (state_35054[(23)]);
var inst_34971 = (state_35054[(24)]);
var inst_34976 = (state_35054[(25)]);
var inst_34968 = (state_35054[(19)]);
var inst_34974 = (state_35054[(26)]);
var inst_35004 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35007 = (function (){var all_files = inst_34968;
var res_SINGLEQUOTE_ = inst_34971;
var res = inst_34972;
var files_not_loaded = inst_34974;
var dependencies_that_loaded = inst_34976;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35008,inst_34972,inst_34971,inst_34976,inst_34968,inst_34974,inst_35004,state_val_35055,c__30729__auto__,map__34900,map__34900__$1,opts,before_jsload,on_jsload,reload_dependents,map__34901,map__34901__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35006){
var map__35090 = p__35006;
var map__35090__$1 = ((((!((map__35090 == null)))?((((map__35090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35090):map__35090);
var namespace = cljs.core.get.call(null,map__35090__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35008,inst_34972,inst_34971,inst_34976,inst_34968,inst_34974,inst_35004,state_val_35055,c__30729__auto__,map__34900,map__34900__$1,opts,before_jsload,on_jsload,reload_dependents,map__34901,map__34901__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35008__$1 = cljs.core.group_by.call(null,inst_35007,inst_34974);
var inst_35010 = (inst_35008__$1 == null);
var inst_35011 = cljs.core.not.call(null,inst_35010);
var state_35054__$1 = (function (){var statearr_35092 = state_35054;
(statearr_35092[(16)] = inst_35008__$1);

(statearr_35092[(28)] = inst_35004);

return statearr_35092;
})();
if(inst_35011){
var statearr_35093_35169 = state_35054__$1;
(statearr_35093_35169[(1)] = (32));

} else {
var statearr_35094_35170 = state_35054__$1;
(statearr_35094_35170[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (44))){
var inst_35030 = (state_35054[(21)]);
var inst_35043 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35030);
var inst_35044 = cljs.core.pr_str.call(null,inst_35043);
var inst_35045 = [cljs.core.str("not required: "),cljs.core.str(inst_35044)].join('');
var inst_35046 = figwheel.client.utils.log.call(null,inst_35045);
var state_35054__$1 = state_35054;
var statearr_35095_35171 = state_35054__$1;
(statearr_35095_35171[(2)] = inst_35046);

(statearr_35095_35171[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (6))){
var inst_34949 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
var statearr_35096_35172 = state_35054__$1;
(statearr_35096_35172[(2)] = inst_34949);

(statearr_35096_35172[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (28))){
var inst_34974 = (state_35054[(26)]);
var inst_35001 = (state_35054[(2)]);
var inst_35002 = cljs.core.not_empty.call(null,inst_34974);
var state_35054__$1 = (function (){var statearr_35097 = state_35054;
(statearr_35097[(29)] = inst_35001);

return statearr_35097;
})();
if(cljs.core.truth_(inst_35002)){
var statearr_35098_35173 = state_35054__$1;
(statearr_35098_35173[(1)] = (29));

} else {
var statearr_35099_35174 = state_35054__$1;
(statearr_35099_35174[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (25))){
var inst_34972 = (state_35054[(23)]);
var inst_34988 = (state_35054[(2)]);
var inst_34989 = cljs.core.not_empty.call(null,inst_34972);
var state_35054__$1 = (function (){var statearr_35100 = state_35054;
(statearr_35100[(30)] = inst_34988);

return statearr_35100;
})();
if(cljs.core.truth_(inst_34989)){
var statearr_35101_35175 = state_35054__$1;
(statearr_35101_35175[(1)] = (26));

} else {
var statearr_35102_35176 = state_35054__$1;
(statearr_35102_35176[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (34))){
var inst_35023 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
if(cljs.core.truth_(inst_35023)){
var statearr_35103_35177 = state_35054__$1;
(statearr_35103_35177[(1)] = (38));

} else {
var statearr_35104_35178 = state_35054__$1;
(statearr_35104_35178[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (17))){
var state_35054__$1 = state_35054;
var statearr_35105_35179 = state_35054__$1;
(statearr_35105_35179[(2)] = recompile_dependents);

(statearr_35105_35179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (3))){
var state_35054__$1 = state_35054;
var statearr_35106_35180 = state_35054__$1;
(statearr_35106_35180[(2)] = null);

(statearr_35106_35180[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (12))){
var inst_34945 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
var statearr_35107_35181 = state_35054__$1;
(statearr_35107_35181[(2)] = inst_34945);

(statearr_35107_35181[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (2))){
var inst_34907 = (state_35054[(13)]);
var inst_34914 = cljs.core.seq.call(null,inst_34907);
var inst_34915 = inst_34914;
var inst_34916 = null;
var inst_34917 = (0);
var inst_34918 = (0);
var state_35054__$1 = (function (){var statearr_35108 = state_35054;
(statearr_35108[(7)] = inst_34918);

(statearr_35108[(8)] = inst_34915);

(statearr_35108[(9)] = inst_34916);

(statearr_35108[(10)] = inst_34917);

return statearr_35108;
})();
var statearr_35109_35182 = state_35054__$1;
(statearr_35109_35182[(2)] = null);

(statearr_35109_35182[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (23))){
var inst_34972 = (state_35054[(23)]);
var inst_34971 = (state_35054[(24)]);
var inst_34976 = (state_35054[(25)]);
var inst_34968 = (state_35054[(19)]);
var inst_34974 = (state_35054[(26)]);
var inst_34979 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34981 = (function (){var all_files = inst_34968;
var res_SINGLEQUOTE_ = inst_34971;
var res = inst_34972;
var files_not_loaded = inst_34974;
var dependencies_that_loaded = inst_34976;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34972,inst_34971,inst_34976,inst_34968,inst_34974,inst_34979,state_val_35055,c__30729__auto__,map__34900,map__34900__$1,opts,before_jsload,on_jsload,reload_dependents,map__34901,map__34901__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34980){
var map__35110 = p__34980;
var map__35110__$1 = ((((!((map__35110 == null)))?((((map__35110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35110):map__35110);
var request_url = cljs.core.get.call(null,map__35110__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34972,inst_34971,inst_34976,inst_34968,inst_34974,inst_34979,state_val_35055,c__30729__auto__,map__34900,map__34900__$1,opts,before_jsload,on_jsload,reload_dependents,map__34901,map__34901__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34982 = cljs.core.reverse.call(null,inst_34976);
var inst_34983 = cljs.core.map.call(null,inst_34981,inst_34982);
var inst_34984 = cljs.core.pr_str.call(null,inst_34983);
var inst_34985 = figwheel.client.utils.log.call(null,inst_34984);
var state_35054__$1 = (function (){var statearr_35112 = state_35054;
(statearr_35112[(31)] = inst_34979);

return statearr_35112;
})();
var statearr_35113_35183 = state_35054__$1;
(statearr_35113_35183[(2)] = inst_34985);

(statearr_35113_35183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (35))){
var state_35054__$1 = state_35054;
var statearr_35114_35184 = state_35054__$1;
(statearr_35114_35184[(2)] = true);

(statearr_35114_35184[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (19))){
var inst_34958 = (state_35054[(12)]);
var inst_34964 = figwheel.client.file_reloading.expand_files.call(null,inst_34958);
var state_35054__$1 = state_35054;
var statearr_35115_35185 = state_35054__$1;
(statearr_35115_35185[(2)] = inst_34964);

(statearr_35115_35185[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (11))){
var state_35054__$1 = state_35054;
var statearr_35116_35186 = state_35054__$1;
(statearr_35116_35186[(2)] = null);

(statearr_35116_35186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (9))){
var inst_34947 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
var statearr_35117_35187 = state_35054__$1;
(statearr_35117_35187[(2)] = inst_34947);

(statearr_35117_35187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (5))){
var inst_34918 = (state_35054[(7)]);
var inst_34917 = (state_35054[(10)]);
var inst_34920 = (inst_34918 < inst_34917);
var inst_34921 = inst_34920;
var state_35054__$1 = state_35054;
if(cljs.core.truth_(inst_34921)){
var statearr_35118_35188 = state_35054__$1;
(statearr_35118_35188[(1)] = (7));

} else {
var statearr_35119_35189 = state_35054__$1;
(statearr_35119_35189[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (14))){
var inst_34928 = (state_35054[(22)]);
var inst_34937 = cljs.core.first.call(null,inst_34928);
var inst_34938 = figwheel.client.file_reloading.eval_body.call(null,inst_34937,opts);
var inst_34939 = cljs.core.next.call(null,inst_34928);
var inst_34915 = inst_34939;
var inst_34916 = null;
var inst_34917 = (0);
var inst_34918 = (0);
var state_35054__$1 = (function (){var statearr_35120 = state_35054;
(statearr_35120[(7)] = inst_34918);

(statearr_35120[(8)] = inst_34915);

(statearr_35120[(9)] = inst_34916);

(statearr_35120[(10)] = inst_34917);

(statearr_35120[(32)] = inst_34938);

return statearr_35120;
})();
var statearr_35121_35190 = state_35054__$1;
(statearr_35121_35190[(2)] = null);

(statearr_35121_35190[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (45))){
var state_35054__$1 = state_35054;
var statearr_35122_35191 = state_35054__$1;
(statearr_35122_35191[(2)] = null);

(statearr_35122_35191[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (26))){
var inst_34972 = (state_35054[(23)]);
var inst_34971 = (state_35054[(24)]);
var inst_34976 = (state_35054[(25)]);
var inst_34968 = (state_35054[(19)]);
var inst_34974 = (state_35054[(26)]);
var inst_34991 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34993 = (function (){var all_files = inst_34968;
var res_SINGLEQUOTE_ = inst_34971;
var res = inst_34972;
var files_not_loaded = inst_34974;
var dependencies_that_loaded = inst_34976;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34972,inst_34971,inst_34976,inst_34968,inst_34974,inst_34991,state_val_35055,c__30729__auto__,map__34900,map__34900__$1,opts,before_jsload,on_jsload,reload_dependents,map__34901,map__34901__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34992){
var map__35123 = p__34992;
var map__35123__$1 = ((((!((map__35123 == null)))?((((map__35123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35123):map__35123);
var namespace = cljs.core.get.call(null,map__35123__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35123__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34972,inst_34971,inst_34976,inst_34968,inst_34974,inst_34991,state_val_35055,c__30729__auto__,map__34900,map__34900__$1,opts,before_jsload,on_jsload,reload_dependents,map__34901,map__34901__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34994 = cljs.core.map.call(null,inst_34993,inst_34972);
var inst_34995 = cljs.core.pr_str.call(null,inst_34994);
var inst_34996 = figwheel.client.utils.log.call(null,inst_34995);
var inst_34997 = (function (){var all_files = inst_34968;
var res_SINGLEQUOTE_ = inst_34971;
var res = inst_34972;
var files_not_loaded = inst_34974;
var dependencies_that_loaded = inst_34976;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34972,inst_34971,inst_34976,inst_34968,inst_34974,inst_34991,inst_34993,inst_34994,inst_34995,inst_34996,state_val_35055,c__30729__auto__,map__34900,map__34900__$1,opts,before_jsload,on_jsload,reload_dependents,map__34901,map__34901__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34972,inst_34971,inst_34976,inst_34968,inst_34974,inst_34991,inst_34993,inst_34994,inst_34995,inst_34996,state_val_35055,c__30729__auto__,map__34900,map__34900__$1,opts,before_jsload,on_jsload,reload_dependents,map__34901,map__34901__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34998 = setTimeout(inst_34997,(10));
var state_35054__$1 = (function (){var statearr_35125 = state_35054;
(statearr_35125[(33)] = inst_34991);

(statearr_35125[(34)] = inst_34996);

return statearr_35125;
})();
var statearr_35126_35192 = state_35054__$1;
(statearr_35126_35192[(2)] = inst_34998);

(statearr_35126_35192[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (16))){
var state_35054__$1 = state_35054;
var statearr_35127_35193 = state_35054__$1;
(statearr_35127_35193[(2)] = reload_dependents);

(statearr_35127_35193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (38))){
var inst_35008 = (state_35054[(16)]);
var inst_35025 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35008);
var state_35054__$1 = state_35054;
var statearr_35128_35194 = state_35054__$1;
(statearr_35128_35194[(2)] = inst_35025);

(statearr_35128_35194[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (30))){
var state_35054__$1 = state_35054;
var statearr_35129_35195 = state_35054__$1;
(statearr_35129_35195[(2)] = null);

(statearr_35129_35195[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (10))){
var inst_34928 = (state_35054[(22)]);
var inst_34930 = cljs.core.chunked_seq_QMARK_.call(null,inst_34928);
var state_35054__$1 = state_35054;
if(inst_34930){
var statearr_35130_35196 = state_35054__$1;
(statearr_35130_35196[(1)] = (13));

} else {
var statearr_35131_35197 = state_35054__$1;
(statearr_35131_35197[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (18))){
var inst_34962 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
if(cljs.core.truth_(inst_34962)){
var statearr_35132_35198 = state_35054__$1;
(statearr_35132_35198[(1)] = (19));

} else {
var statearr_35133_35199 = state_35054__$1;
(statearr_35133_35199[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (42))){
var state_35054__$1 = state_35054;
var statearr_35134_35200 = state_35054__$1;
(statearr_35134_35200[(2)] = null);

(statearr_35134_35200[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (37))){
var inst_35020 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
var statearr_35135_35201 = state_35054__$1;
(statearr_35135_35201[(2)] = inst_35020);

(statearr_35135_35201[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (8))){
var inst_34928 = (state_35054[(22)]);
var inst_34915 = (state_35054[(8)]);
var inst_34928__$1 = cljs.core.seq.call(null,inst_34915);
var state_35054__$1 = (function (){var statearr_35136 = state_35054;
(statearr_35136[(22)] = inst_34928__$1);

return statearr_35136;
})();
if(inst_34928__$1){
var statearr_35137_35202 = state_35054__$1;
(statearr_35137_35202[(1)] = (10));

} else {
var statearr_35138_35203 = state_35054__$1;
(statearr_35138_35203[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30729__auto__,map__34900,map__34900__$1,opts,before_jsload,on_jsload,reload_dependents,map__34901,map__34901__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30708__auto__,c__30729__auto__,map__34900,map__34900__$1,opts,before_jsload,on_jsload,reload_dependents,map__34901,map__34901__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30709__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30709__auto____0 = (function (){
var statearr_35142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35142[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30709__auto__);

(statearr_35142[(1)] = (1));

return statearr_35142;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30709__auto____1 = (function (state_35054){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__.call(null,state_35054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e35143){if((e35143 instanceof Object)){
var ex__30712__auto__ = e35143;
var statearr_35144_35204 = state_35054;
(statearr_35144_35204[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35205 = state_35054;
state_35054 = G__35205;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30709__auto__ = function(state_35054){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30709__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30709__auto____1.call(this,state_35054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30709__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30709__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30729__auto__,map__34900,map__34900__$1,opts,before_jsload,on_jsload,reload_dependents,map__34901,map__34901__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30731__auto__ = (function (){var statearr_35145 = f__30730__auto__.call(null);
(statearr_35145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30729__auto__);

return statearr_35145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30731__auto__);
});})(c__30729__auto__,map__34900,map__34900__$1,opts,before_jsload,on_jsload,reload_dependents,map__34901,map__34901__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30729__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35208,link){
var map__35211 = p__35208;
var map__35211__$1 = ((((!((map__35211 == null)))?((((map__35211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35211):map__35211);
var file = cljs.core.get.call(null,map__35211__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35211,map__35211__$1,file){
return (function (p1__35206_SHARP_,p2__35207_SHARP_){
if(cljs.core._EQ_.call(null,p1__35206_SHARP_,p2__35207_SHARP_)){
return p1__35206_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35211,map__35211__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35217){
var map__35218 = p__35217;
var map__35218__$1 = ((((!((map__35218 == null)))?((((map__35218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35218):map__35218);
var match_length = cljs.core.get.call(null,map__35218__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35218__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35213_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35213_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args35220 = [];
var len__29087__auto___35223 = arguments.length;
var i__29088__auto___35224 = (0);
while(true){
if((i__29088__auto___35224 < len__29087__auto___35223)){
args35220.push((arguments[i__29088__auto___35224]));

var G__35225 = (i__29088__auto___35224 + (1));
i__29088__auto___35224 = G__35225;
continue;
} else {
}
break;
}

var G__35222 = args35220.length;
switch (G__35222) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35220.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35227_SHARP_,p2__35228_SHARP_){
return cljs.core.assoc.call(null,p1__35227_SHARP_,cljs.core.get.call(null,p2__35228_SHARP_,key),p2__35228_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35229){
var map__35232 = p__35229;
var map__35232__$1 = ((((!((map__35232 == null)))?((((map__35232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35232):map__35232);
var f_data = map__35232__$1;
var file = cljs.core.get.call(null,map__35232__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35234,files_msg){
var map__35241 = p__35234;
var map__35241__$1 = ((((!((map__35241 == null)))?((((map__35241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35241):map__35241);
var opts = map__35241__$1;
var on_cssload = cljs.core.get.call(null,map__35241__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35243_35247 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35244_35248 = null;
var count__35245_35249 = (0);
var i__35246_35250 = (0);
while(true){
if((i__35246_35250 < count__35245_35249)){
var f_35251 = cljs.core._nth.call(null,chunk__35244_35248,i__35246_35250);
figwheel.client.file_reloading.reload_css_file.call(null,f_35251);

var G__35252 = seq__35243_35247;
var G__35253 = chunk__35244_35248;
var G__35254 = count__35245_35249;
var G__35255 = (i__35246_35250 + (1));
seq__35243_35247 = G__35252;
chunk__35244_35248 = G__35253;
count__35245_35249 = G__35254;
i__35246_35250 = G__35255;
continue;
} else {
var temp__4657__auto___35256 = cljs.core.seq.call(null,seq__35243_35247);
if(temp__4657__auto___35256){
var seq__35243_35257__$1 = temp__4657__auto___35256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35243_35257__$1)){
var c__28823__auto___35258 = cljs.core.chunk_first.call(null,seq__35243_35257__$1);
var G__35259 = cljs.core.chunk_rest.call(null,seq__35243_35257__$1);
var G__35260 = c__28823__auto___35258;
var G__35261 = cljs.core.count.call(null,c__28823__auto___35258);
var G__35262 = (0);
seq__35243_35247 = G__35259;
chunk__35244_35248 = G__35260;
count__35245_35249 = G__35261;
i__35246_35250 = G__35262;
continue;
} else {
var f_35263 = cljs.core.first.call(null,seq__35243_35257__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35263);

var G__35264 = cljs.core.next.call(null,seq__35243_35257__$1);
var G__35265 = null;
var G__35266 = (0);
var G__35267 = (0);
seq__35243_35247 = G__35264;
chunk__35244_35248 = G__35265;
count__35245_35249 = G__35266;
i__35246_35250 = G__35267;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__35241,map__35241__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__35241,map__35241__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map