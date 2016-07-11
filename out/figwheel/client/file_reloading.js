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
var or__18464__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18464__auto__){
return or__18464__auto__;
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
var or__18464__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29074_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29074_SHARP_));
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
var seq__29079 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29080 = null;
var count__29081 = (0);
var i__29082 = (0);
while(true){
if((i__29082 < count__29081)){
var n = cljs.core._nth.call(null,chunk__29080,i__29082);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29083 = seq__29079;
var G__29084 = chunk__29080;
var G__29085 = count__29081;
var G__29086 = (i__29082 + (1));
seq__29079 = G__29083;
chunk__29080 = G__29084;
count__29081 = G__29085;
i__29082 = G__29086;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29079);
if(temp__4657__auto__){
var seq__29079__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29079__$1)){
var c__19275__auto__ = cljs.core.chunk_first.call(null,seq__29079__$1);
var G__29087 = cljs.core.chunk_rest.call(null,seq__29079__$1);
var G__29088 = c__19275__auto__;
var G__29089 = cljs.core.count.call(null,c__19275__auto__);
var G__29090 = (0);
seq__29079 = G__29087;
chunk__29080 = G__29088;
count__29081 = G__29089;
i__29082 = G__29090;
continue;
} else {
var n = cljs.core.first.call(null,seq__29079__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29091 = cljs.core.next.call(null,seq__29079__$1);
var G__29092 = null;
var G__29093 = (0);
var G__29094 = (0);
seq__29079 = G__29091;
chunk__29080 = G__29092;
count__29081 = G__29093;
i__29082 = G__29094;
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

var seq__29145_29156 = cljs.core.seq.call(null,deps);
var chunk__29146_29157 = null;
var count__29147_29158 = (0);
var i__29148_29159 = (0);
while(true){
if((i__29148_29159 < count__29147_29158)){
var dep_29160 = cljs.core._nth.call(null,chunk__29146_29157,i__29148_29159);
topo_sort_helper_STAR_.call(null,dep_29160,(depth + (1)),state);

var G__29161 = seq__29145_29156;
var G__29162 = chunk__29146_29157;
var G__29163 = count__29147_29158;
var G__29164 = (i__29148_29159 + (1));
seq__29145_29156 = G__29161;
chunk__29146_29157 = G__29162;
count__29147_29158 = G__29163;
i__29148_29159 = G__29164;
continue;
} else {
var temp__4657__auto___29165 = cljs.core.seq.call(null,seq__29145_29156);
if(temp__4657__auto___29165){
var seq__29145_29166__$1 = temp__4657__auto___29165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29145_29166__$1)){
var c__19275__auto___29167 = cljs.core.chunk_first.call(null,seq__29145_29166__$1);
var G__29168 = cljs.core.chunk_rest.call(null,seq__29145_29166__$1);
var G__29169 = c__19275__auto___29167;
var G__29170 = cljs.core.count.call(null,c__19275__auto___29167);
var G__29171 = (0);
seq__29145_29156 = G__29168;
chunk__29146_29157 = G__29169;
count__29147_29158 = G__29170;
i__29148_29159 = G__29171;
continue;
} else {
var dep_29172 = cljs.core.first.call(null,seq__29145_29166__$1);
topo_sort_helper_STAR_.call(null,dep_29172,(depth + (1)),state);

var G__29173 = cljs.core.next.call(null,seq__29145_29166__$1);
var G__29174 = null;
var G__29175 = (0);
var G__29176 = (0);
seq__29145_29156 = G__29173;
chunk__29146_29157 = G__29174;
count__29147_29158 = G__29175;
i__29148_29159 = G__29176;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29149){
var vec__29153 = p__29149;
var seq__29154 = cljs.core.seq.call(null,vec__29153);
var first__29155 = cljs.core.first.call(null,seq__29154);
var seq__29154__$1 = cljs.core.next.call(null,seq__29154);
var x = first__29155;
var xs = seq__29154__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29153,seq__29154,first__29155,seq__29154__$1,x,xs,get_deps__$1){
return (function (p1__29095_SHARP_){
return clojure.set.difference.call(null,p1__29095_SHARP_,x);
});})(vec__29153,seq__29154,first__29155,seq__29154__$1,x,xs,get_deps__$1))
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
var seq__29189 = cljs.core.seq.call(null,provides);
var chunk__29190 = null;
var count__29191 = (0);
var i__29192 = (0);
while(true){
if((i__29192 < count__29191)){
var prov = cljs.core._nth.call(null,chunk__29190,i__29192);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29193_29201 = cljs.core.seq.call(null,requires);
var chunk__29194_29202 = null;
var count__29195_29203 = (0);
var i__29196_29204 = (0);
while(true){
if((i__29196_29204 < count__29195_29203)){
var req_29205 = cljs.core._nth.call(null,chunk__29194_29202,i__29196_29204);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29205,prov);

var G__29206 = seq__29193_29201;
var G__29207 = chunk__29194_29202;
var G__29208 = count__29195_29203;
var G__29209 = (i__29196_29204 + (1));
seq__29193_29201 = G__29206;
chunk__29194_29202 = G__29207;
count__29195_29203 = G__29208;
i__29196_29204 = G__29209;
continue;
} else {
var temp__4657__auto___29210 = cljs.core.seq.call(null,seq__29193_29201);
if(temp__4657__auto___29210){
var seq__29193_29211__$1 = temp__4657__auto___29210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29193_29211__$1)){
var c__19275__auto___29212 = cljs.core.chunk_first.call(null,seq__29193_29211__$1);
var G__29213 = cljs.core.chunk_rest.call(null,seq__29193_29211__$1);
var G__29214 = c__19275__auto___29212;
var G__29215 = cljs.core.count.call(null,c__19275__auto___29212);
var G__29216 = (0);
seq__29193_29201 = G__29213;
chunk__29194_29202 = G__29214;
count__29195_29203 = G__29215;
i__29196_29204 = G__29216;
continue;
} else {
var req_29217 = cljs.core.first.call(null,seq__29193_29211__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29217,prov);

var G__29218 = cljs.core.next.call(null,seq__29193_29211__$1);
var G__29219 = null;
var G__29220 = (0);
var G__29221 = (0);
seq__29193_29201 = G__29218;
chunk__29194_29202 = G__29219;
count__29195_29203 = G__29220;
i__29196_29204 = G__29221;
continue;
}
} else {
}
}
break;
}

var G__29222 = seq__29189;
var G__29223 = chunk__29190;
var G__29224 = count__29191;
var G__29225 = (i__29192 + (1));
seq__29189 = G__29222;
chunk__29190 = G__29223;
count__29191 = G__29224;
i__29192 = G__29225;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29189);
if(temp__4657__auto__){
var seq__29189__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29189__$1)){
var c__19275__auto__ = cljs.core.chunk_first.call(null,seq__29189__$1);
var G__29226 = cljs.core.chunk_rest.call(null,seq__29189__$1);
var G__29227 = c__19275__auto__;
var G__29228 = cljs.core.count.call(null,c__19275__auto__);
var G__29229 = (0);
seq__29189 = G__29226;
chunk__29190 = G__29227;
count__29191 = G__29228;
i__29192 = G__29229;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29189__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29197_29230 = cljs.core.seq.call(null,requires);
var chunk__29198_29231 = null;
var count__29199_29232 = (0);
var i__29200_29233 = (0);
while(true){
if((i__29200_29233 < count__29199_29232)){
var req_29234 = cljs.core._nth.call(null,chunk__29198_29231,i__29200_29233);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29234,prov);

var G__29235 = seq__29197_29230;
var G__29236 = chunk__29198_29231;
var G__29237 = count__29199_29232;
var G__29238 = (i__29200_29233 + (1));
seq__29197_29230 = G__29235;
chunk__29198_29231 = G__29236;
count__29199_29232 = G__29237;
i__29200_29233 = G__29238;
continue;
} else {
var temp__4657__auto___29239__$1 = cljs.core.seq.call(null,seq__29197_29230);
if(temp__4657__auto___29239__$1){
var seq__29197_29240__$1 = temp__4657__auto___29239__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29197_29240__$1)){
var c__19275__auto___29241 = cljs.core.chunk_first.call(null,seq__29197_29240__$1);
var G__29242 = cljs.core.chunk_rest.call(null,seq__29197_29240__$1);
var G__29243 = c__19275__auto___29241;
var G__29244 = cljs.core.count.call(null,c__19275__auto___29241);
var G__29245 = (0);
seq__29197_29230 = G__29242;
chunk__29198_29231 = G__29243;
count__29199_29232 = G__29244;
i__29200_29233 = G__29245;
continue;
} else {
var req_29246 = cljs.core.first.call(null,seq__29197_29240__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29246,prov);

var G__29247 = cljs.core.next.call(null,seq__29197_29240__$1);
var G__29248 = null;
var G__29249 = (0);
var G__29250 = (0);
seq__29197_29230 = G__29247;
chunk__29198_29231 = G__29248;
count__29199_29232 = G__29249;
i__29200_29233 = G__29250;
continue;
}
} else {
}
}
break;
}

var G__29251 = cljs.core.next.call(null,seq__29189__$1);
var G__29252 = null;
var G__29253 = (0);
var G__29254 = (0);
seq__29189 = G__29251;
chunk__29190 = G__29252;
count__29191 = G__29253;
i__29192 = G__29254;
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
var seq__29259_29263 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29260_29264 = null;
var count__29261_29265 = (0);
var i__29262_29266 = (0);
while(true){
if((i__29262_29266 < count__29261_29265)){
var ns_29267 = cljs.core._nth.call(null,chunk__29260_29264,i__29262_29266);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29267);

var G__29268 = seq__29259_29263;
var G__29269 = chunk__29260_29264;
var G__29270 = count__29261_29265;
var G__29271 = (i__29262_29266 + (1));
seq__29259_29263 = G__29268;
chunk__29260_29264 = G__29269;
count__29261_29265 = G__29270;
i__29262_29266 = G__29271;
continue;
} else {
var temp__4657__auto___29272 = cljs.core.seq.call(null,seq__29259_29263);
if(temp__4657__auto___29272){
var seq__29259_29273__$1 = temp__4657__auto___29272;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29259_29273__$1)){
var c__19275__auto___29274 = cljs.core.chunk_first.call(null,seq__29259_29273__$1);
var G__29275 = cljs.core.chunk_rest.call(null,seq__29259_29273__$1);
var G__29276 = c__19275__auto___29274;
var G__29277 = cljs.core.count.call(null,c__19275__auto___29274);
var G__29278 = (0);
seq__29259_29263 = G__29275;
chunk__29260_29264 = G__29276;
count__29261_29265 = G__29277;
i__29262_29266 = G__29278;
continue;
} else {
var ns_29279 = cljs.core.first.call(null,seq__29259_29273__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29279);

var G__29280 = cljs.core.next.call(null,seq__29259_29273__$1);
var G__29281 = null;
var G__29282 = (0);
var G__29283 = (0);
seq__29259_29263 = G__29280;
chunk__29260_29264 = G__29281;
count__29261_29265 = G__29282;
i__29262_29266 = G__29283;
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
goog.require_figwheel_backup_ = (function (){var or__18464__auto__ = goog.require__;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
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
var G__29284__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29285__i = 0, G__29285__a = new Array(arguments.length -  0);
while (G__29285__i < G__29285__a.length) {G__29285__a[G__29285__i] = arguments[G__29285__i + 0]; ++G__29285__i;}
  args = new cljs.core.IndexedSeq(G__29285__a,0);
} 
return G__29284__delegate.call(this,args);};
G__29284.cljs$lang$maxFixedArity = 0;
G__29284.cljs$lang$applyTo = (function (arglist__29286){
var args = cljs.core.seq(arglist__29286);
return G__29284__delegate(args);
});
G__29284.cljs$core$IFn$_invoke$arity$variadic = G__29284__delegate;
return G__29284;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29288 = cljs.core._EQ_;
var expr__29289 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29288.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29289))){
var path_parts = ((function (pred__29288,expr__29289){
return (function (p1__29287_SHARP_){
return clojure.string.split.call(null,p1__29287_SHARP_,/[\/\\]/);
});})(pred__29288,expr__29289))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__29288,expr__29289){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29291){if((e29291 instanceof Error)){
var e = e29291;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29291;

}
}})());
});
;})(path_parts,sep,root,pred__29288,expr__29289))
} else {
if(cljs.core.truth_(pred__29288.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29289))){
return ((function (pred__29288,expr__29289){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__29288,expr__29289){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__29288,expr__29289))
);

return deferred.addErrback(((function (deferred,pred__29288,expr__29289){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__29288,expr__29289))
);
});
;})(pred__29288,expr__29289))
} else {
return ((function (pred__29288,expr__29289){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29288,expr__29289))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29292,callback){
var map__29295 = p__29292;
var map__29295__$1 = ((((!((map__29295 == null)))?((((map__29295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29295):map__29295);
var file_msg = map__29295__$1;
var request_url = cljs.core.get.call(null,map__29295__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29295,map__29295__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29295,map__29295__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__20519__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto__){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto__){
return (function (state_29319){
var state_val_29320 = (state_29319[(1)]);
if((state_val_29320 === (7))){
var inst_29315 = (state_29319[(2)]);
var state_29319__$1 = state_29319;
var statearr_29321_29341 = state_29319__$1;
(statearr_29321_29341[(2)] = inst_29315);

(statearr_29321_29341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (1))){
var state_29319__$1 = state_29319;
var statearr_29322_29342 = state_29319__$1;
(statearr_29322_29342[(2)] = null);

(statearr_29322_29342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (4))){
var inst_29299 = (state_29319[(7)]);
var inst_29299__$1 = (state_29319[(2)]);
var state_29319__$1 = (function (){var statearr_29323 = state_29319;
(statearr_29323[(7)] = inst_29299__$1);

return statearr_29323;
})();
if(cljs.core.truth_(inst_29299__$1)){
var statearr_29324_29343 = state_29319__$1;
(statearr_29324_29343[(1)] = (5));

} else {
var statearr_29325_29344 = state_29319__$1;
(statearr_29325_29344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (6))){
var state_29319__$1 = state_29319;
var statearr_29326_29345 = state_29319__$1;
(statearr_29326_29345[(2)] = null);

(statearr_29326_29345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (3))){
var inst_29317 = (state_29319[(2)]);
var state_29319__$1 = state_29319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29319__$1,inst_29317);
} else {
if((state_val_29320 === (2))){
var state_29319__$1 = state_29319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29319__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29320 === (11))){
var inst_29311 = (state_29319[(2)]);
var state_29319__$1 = (function (){var statearr_29327 = state_29319;
(statearr_29327[(8)] = inst_29311);

return statearr_29327;
})();
var statearr_29328_29346 = state_29319__$1;
(statearr_29328_29346[(2)] = null);

(statearr_29328_29346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (9))){
var inst_29303 = (state_29319[(9)]);
var inst_29305 = (state_29319[(10)]);
var inst_29307 = inst_29305.call(null,inst_29303);
var state_29319__$1 = state_29319;
var statearr_29329_29347 = state_29319__$1;
(statearr_29329_29347[(2)] = inst_29307);

(statearr_29329_29347[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (5))){
var inst_29299 = (state_29319[(7)]);
var inst_29301 = figwheel.client.file_reloading.blocking_load.call(null,inst_29299);
var state_29319__$1 = state_29319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29319__$1,(8),inst_29301);
} else {
if((state_val_29320 === (10))){
var inst_29303 = (state_29319[(9)]);
var inst_29309 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29303);
var state_29319__$1 = state_29319;
var statearr_29330_29348 = state_29319__$1;
(statearr_29330_29348[(2)] = inst_29309);

(statearr_29330_29348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (8))){
var inst_29305 = (state_29319[(10)]);
var inst_29299 = (state_29319[(7)]);
var inst_29303 = (state_29319[(2)]);
var inst_29304 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29305__$1 = cljs.core.get.call(null,inst_29304,inst_29299);
var state_29319__$1 = (function (){var statearr_29331 = state_29319;
(statearr_29331[(9)] = inst_29303);

(statearr_29331[(10)] = inst_29305__$1);

return statearr_29331;
})();
if(cljs.core.truth_(inst_29305__$1)){
var statearr_29332_29349 = state_29319__$1;
(statearr_29332_29349[(1)] = (9));

} else {
var statearr_29333_29350 = state_29319__$1;
(statearr_29333_29350[(1)] = (10));

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
});})(c__20519__auto__))
;
return ((function (switch__20498__auto__,c__20519__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20499__auto__ = null;
var figwheel$client$file_reloading$state_machine__20499__auto____0 = (function (){
var statearr_29337 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29337[(0)] = figwheel$client$file_reloading$state_machine__20499__auto__);

(statearr_29337[(1)] = (1));

return statearr_29337;
});
var figwheel$client$file_reloading$state_machine__20499__auto____1 = (function (state_29319){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_29319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e29338){if((e29338 instanceof Object)){
var ex__20502__auto__ = e29338;
var statearr_29339_29351 = state_29319;
(statearr_29339_29351[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29352 = state_29319;
state_29319 = G__29352;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20499__auto__ = function(state_29319){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20499__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20499__auto____1.call(this,state_29319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20499__auto____0;
figwheel$client$file_reloading$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20499__auto____1;
return figwheel$client$file_reloading$state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto__))
})();
var state__20521__auto__ = (function (){var statearr_29340 = f__20520__auto__.call(null);
(statearr_29340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto__);

return statearr_29340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto__))
);

return c__20519__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29353,callback){
var map__29356 = p__29353;
var map__29356__$1 = ((((!((map__29356 == null)))?((((map__29356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29356):map__29356);
var file_msg = map__29356__$1;
var namespace = cljs.core.get.call(null,map__29356__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29356,map__29356__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29356,map__29356__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29358){
var map__29361 = p__29358;
var map__29361__$1 = ((((!((map__29361 == null)))?((((map__29361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29361):map__29361);
var file_msg = map__29361__$1;
var namespace = cljs.core.get.call(null,map__29361__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18452__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18452__auto__){
var or__18464__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
var or__18464__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18464__auto____$1)){
return or__18464__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18452__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29363,callback){
var map__29366 = p__29363;
var map__29366__$1 = ((((!((map__29366 == null)))?((((map__29366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29366):map__29366);
var file_msg = map__29366__$1;
var request_url = cljs.core.get.call(null,map__29366__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29366__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20519__auto___29470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto___29470,out){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto___29470,out){
return (function (state_29452){
var state_val_29453 = (state_29452[(1)]);
if((state_val_29453 === (1))){
var inst_29426 = cljs.core.seq.call(null,files);
var inst_29427 = cljs.core.first.call(null,inst_29426);
var inst_29428 = cljs.core.next.call(null,inst_29426);
var inst_29429 = files;
var state_29452__$1 = (function (){var statearr_29454 = state_29452;
(statearr_29454[(7)] = inst_29427);

(statearr_29454[(8)] = inst_29429);

(statearr_29454[(9)] = inst_29428);

return statearr_29454;
})();
var statearr_29455_29471 = state_29452__$1;
(statearr_29455_29471[(2)] = null);

(statearr_29455_29471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (2))){
var inst_29429 = (state_29452[(8)]);
var inst_29435 = (state_29452[(10)]);
var inst_29434 = cljs.core.seq.call(null,inst_29429);
var inst_29435__$1 = cljs.core.first.call(null,inst_29434);
var inst_29436 = cljs.core.next.call(null,inst_29434);
var inst_29437 = (inst_29435__$1 == null);
var inst_29438 = cljs.core.not.call(null,inst_29437);
var state_29452__$1 = (function (){var statearr_29456 = state_29452;
(statearr_29456[(11)] = inst_29436);

(statearr_29456[(10)] = inst_29435__$1);

return statearr_29456;
})();
if(inst_29438){
var statearr_29457_29472 = state_29452__$1;
(statearr_29457_29472[(1)] = (4));

} else {
var statearr_29458_29473 = state_29452__$1;
(statearr_29458_29473[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (3))){
var inst_29450 = (state_29452[(2)]);
var state_29452__$1 = state_29452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29452__$1,inst_29450);
} else {
if((state_val_29453 === (4))){
var inst_29435 = (state_29452[(10)]);
var inst_29440 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29435);
var state_29452__$1 = state_29452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29452__$1,(7),inst_29440);
} else {
if((state_val_29453 === (5))){
var inst_29446 = cljs.core.async.close_BANG_.call(null,out);
var state_29452__$1 = state_29452;
var statearr_29459_29474 = state_29452__$1;
(statearr_29459_29474[(2)] = inst_29446);

(statearr_29459_29474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (6))){
var inst_29448 = (state_29452[(2)]);
var state_29452__$1 = state_29452;
var statearr_29460_29475 = state_29452__$1;
(statearr_29460_29475[(2)] = inst_29448);

(statearr_29460_29475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (7))){
var inst_29436 = (state_29452[(11)]);
var inst_29442 = (state_29452[(2)]);
var inst_29443 = cljs.core.async.put_BANG_.call(null,out,inst_29442);
var inst_29429 = inst_29436;
var state_29452__$1 = (function (){var statearr_29461 = state_29452;
(statearr_29461[(8)] = inst_29429);

(statearr_29461[(12)] = inst_29443);

return statearr_29461;
})();
var statearr_29462_29476 = state_29452__$1;
(statearr_29462_29476[(2)] = null);

(statearr_29462_29476[(1)] = (2));


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
});})(c__20519__auto___29470,out))
;
return ((function (switch__20498__auto__,c__20519__auto___29470,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto____0 = (function (){
var statearr_29466 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29466[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto__);

(statearr_29466[(1)] = (1));

return statearr_29466;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto____1 = (function (state_29452){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_29452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e29467){if((e29467 instanceof Object)){
var ex__20502__auto__ = e29467;
var statearr_29468_29477 = state_29452;
(statearr_29468_29477[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29478 = state_29452;
state_29452 = G__29478;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto__ = function(state_29452){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto____1.call(this,state_29452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto___29470,out))
})();
var state__20521__auto__ = (function (){var statearr_29469 = f__20520__auto__.call(null);
(statearr_29469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto___29470);

return statearr_29469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto___29470,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29479,opts){
var map__29483 = p__29479;
var map__29483__$1 = ((((!((map__29483 == null)))?((((map__29483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29483):map__29483);
var eval_body__$1 = cljs.core.get.call(null,map__29483__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29483__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18452__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18452__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18452__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29485){var e = e29485;
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
return (function (p1__29486_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29486_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29495){
var vec__29496 = p__29495;
var k = cljs.core.nth.call(null,vec__29496,(0),null);
var v = cljs.core.nth.call(null,vec__29496,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29499){
var vec__29500 = p__29499;
var k = cljs.core.nth.call(null,vec__29500,(0),null);
var v = cljs.core.nth.call(null,vec__29500,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29506,p__29507){
var map__29754 = p__29506;
var map__29754__$1 = ((((!((map__29754 == null)))?((((map__29754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29754):map__29754);
var opts = map__29754__$1;
var before_jsload = cljs.core.get.call(null,map__29754__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29754__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29754__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29755 = p__29507;
var map__29755__$1 = ((((!((map__29755 == null)))?((((map__29755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29755):map__29755);
var msg = map__29755__$1;
var files = cljs.core.get.call(null,map__29755__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29755__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29755__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20519__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto__,map__29754,map__29754__$1,opts,before_jsload,on_jsload,reload_dependents,map__29755,map__29755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto__,map__29754,map__29754__$1,opts,before_jsload,on_jsload,reload_dependents,map__29755,map__29755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29908){
var state_val_29909 = (state_29908[(1)]);
if((state_val_29909 === (7))){
var inst_29771 = (state_29908[(7)]);
var inst_29769 = (state_29908[(8)]);
var inst_29772 = (state_29908[(9)]);
var inst_29770 = (state_29908[(10)]);
var inst_29777 = cljs.core._nth.call(null,inst_29770,inst_29772);
var inst_29778 = figwheel.client.file_reloading.eval_body.call(null,inst_29777,opts);
var inst_29779 = (inst_29772 + (1));
var tmp29910 = inst_29771;
var tmp29911 = inst_29769;
var tmp29912 = inst_29770;
var inst_29769__$1 = tmp29911;
var inst_29770__$1 = tmp29912;
var inst_29771__$1 = tmp29910;
var inst_29772__$1 = inst_29779;
var state_29908__$1 = (function (){var statearr_29913 = state_29908;
(statearr_29913[(7)] = inst_29771__$1);

(statearr_29913[(8)] = inst_29769__$1);

(statearr_29913[(11)] = inst_29778);

(statearr_29913[(9)] = inst_29772__$1);

(statearr_29913[(10)] = inst_29770__$1);

return statearr_29913;
})();
var statearr_29914_30000 = state_29908__$1;
(statearr_29914_30000[(2)] = null);

(statearr_29914_30000[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (20))){
var inst_29812 = (state_29908[(12)]);
var inst_29820 = figwheel.client.file_reloading.sort_files.call(null,inst_29812);
var state_29908__$1 = state_29908;
var statearr_29915_30001 = state_29908__$1;
(statearr_29915_30001[(2)] = inst_29820);

(statearr_29915_30001[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (27))){
var state_29908__$1 = state_29908;
var statearr_29916_30002 = state_29908__$1;
(statearr_29916_30002[(2)] = null);

(statearr_29916_30002[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (1))){
var inst_29761 = (state_29908[(13)]);
var inst_29758 = before_jsload.call(null,files);
var inst_29759 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29760 = (function (){return ((function (inst_29761,inst_29758,inst_29759,state_val_29909,c__20519__auto__,map__29754,map__29754__$1,opts,before_jsload,on_jsload,reload_dependents,map__29755,map__29755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29503_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29503_SHARP_);
});
;})(inst_29761,inst_29758,inst_29759,state_val_29909,c__20519__auto__,map__29754,map__29754__$1,opts,before_jsload,on_jsload,reload_dependents,map__29755,map__29755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29761__$1 = cljs.core.filter.call(null,inst_29760,files);
var inst_29762 = cljs.core.not_empty.call(null,inst_29761__$1);
var state_29908__$1 = (function (){var statearr_29917 = state_29908;
(statearr_29917[(14)] = inst_29759);

(statearr_29917[(15)] = inst_29758);

(statearr_29917[(13)] = inst_29761__$1);

return statearr_29917;
})();
if(cljs.core.truth_(inst_29762)){
var statearr_29918_30003 = state_29908__$1;
(statearr_29918_30003[(1)] = (2));

} else {
var statearr_29919_30004 = state_29908__$1;
(statearr_29919_30004[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (24))){
var state_29908__$1 = state_29908;
var statearr_29920_30005 = state_29908__$1;
(statearr_29920_30005[(2)] = null);

(statearr_29920_30005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (39))){
var inst_29862 = (state_29908[(16)]);
var state_29908__$1 = state_29908;
var statearr_29921_30006 = state_29908__$1;
(statearr_29921_30006[(2)] = inst_29862);

(statearr_29921_30006[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (46))){
var inst_29903 = (state_29908[(2)]);
var state_29908__$1 = state_29908;
var statearr_29922_30007 = state_29908__$1;
(statearr_29922_30007[(2)] = inst_29903);

(statearr_29922_30007[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (4))){
var inst_29806 = (state_29908[(2)]);
var inst_29807 = cljs.core.List.EMPTY;
var inst_29808 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29807);
var inst_29809 = (function (){return ((function (inst_29806,inst_29807,inst_29808,state_val_29909,c__20519__auto__,map__29754,map__29754__$1,opts,before_jsload,on_jsload,reload_dependents,map__29755,map__29755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29504_SHARP_){
var and__18452__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29504_SHARP_);
if(cljs.core.truth_(and__18452__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29504_SHARP_));
} else {
return and__18452__auto__;
}
});
;})(inst_29806,inst_29807,inst_29808,state_val_29909,c__20519__auto__,map__29754,map__29754__$1,opts,before_jsload,on_jsload,reload_dependents,map__29755,map__29755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29810 = cljs.core.filter.call(null,inst_29809,files);
var inst_29811 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29812 = cljs.core.concat.call(null,inst_29810,inst_29811);
var state_29908__$1 = (function (){var statearr_29923 = state_29908;
(statearr_29923[(12)] = inst_29812);

(statearr_29923[(17)] = inst_29808);

(statearr_29923[(18)] = inst_29806);

return statearr_29923;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29924_30008 = state_29908__$1;
(statearr_29924_30008[(1)] = (16));

} else {
var statearr_29925_30009 = state_29908__$1;
(statearr_29925_30009[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (15))){
var inst_29796 = (state_29908[(2)]);
var state_29908__$1 = state_29908;
var statearr_29926_30010 = state_29908__$1;
(statearr_29926_30010[(2)] = inst_29796);

(statearr_29926_30010[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (21))){
var inst_29822 = (state_29908[(19)]);
var inst_29822__$1 = (state_29908[(2)]);
var inst_29823 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29822__$1);
var state_29908__$1 = (function (){var statearr_29927 = state_29908;
(statearr_29927[(19)] = inst_29822__$1);

return statearr_29927;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29908__$1,(22),inst_29823);
} else {
if((state_val_29909 === (31))){
var inst_29906 = (state_29908[(2)]);
var state_29908__$1 = state_29908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29908__$1,inst_29906);
} else {
if((state_val_29909 === (32))){
var inst_29862 = (state_29908[(16)]);
var inst_29867 = inst_29862.cljs$lang$protocol_mask$partition0$;
var inst_29868 = (inst_29867 & (64));
var inst_29869 = inst_29862.cljs$core$ISeq$;
var inst_29870 = (inst_29868) || (inst_29869);
var state_29908__$1 = state_29908;
if(cljs.core.truth_(inst_29870)){
var statearr_29928_30011 = state_29908__$1;
(statearr_29928_30011[(1)] = (35));

} else {
var statearr_29929_30012 = state_29908__$1;
(statearr_29929_30012[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (40))){
var inst_29883 = (state_29908[(20)]);
var inst_29882 = (state_29908[(2)]);
var inst_29883__$1 = cljs.core.get.call(null,inst_29882,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29884 = cljs.core.get.call(null,inst_29882,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29885 = cljs.core.not_empty.call(null,inst_29883__$1);
var state_29908__$1 = (function (){var statearr_29930 = state_29908;
(statearr_29930[(21)] = inst_29884);

(statearr_29930[(20)] = inst_29883__$1);

return statearr_29930;
})();
if(cljs.core.truth_(inst_29885)){
var statearr_29931_30013 = state_29908__$1;
(statearr_29931_30013[(1)] = (41));

} else {
var statearr_29932_30014 = state_29908__$1;
(statearr_29932_30014[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (33))){
var state_29908__$1 = state_29908;
var statearr_29933_30015 = state_29908__$1;
(statearr_29933_30015[(2)] = false);

(statearr_29933_30015[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (13))){
var inst_29782 = (state_29908[(22)]);
var inst_29786 = cljs.core.chunk_first.call(null,inst_29782);
var inst_29787 = cljs.core.chunk_rest.call(null,inst_29782);
var inst_29788 = cljs.core.count.call(null,inst_29786);
var inst_29769 = inst_29787;
var inst_29770 = inst_29786;
var inst_29771 = inst_29788;
var inst_29772 = (0);
var state_29908__$1 = (function (){var statearr_29934 = state_29908;
(statearr_29934[(7)] = inst_29771);

(statearr_29934[(8)] = inst_29769);

(statearr_29934[(9)] = inst_29772);

(statearr_29934[(10)] = inst_29770);

return statearr_29934;
})();
var statearr_29935_30016 = state_29908__$1;
(statearr_29935_30016[(2)] = null);

(statearr_29935_30016[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (22))){
var inst_29826 = (state_29908[(23)]);
var inst_29822 = (state_29908[(19)]);
var inst_29825 = (state_29908[(24)]);
var inst_29830 = (state_29908[(25)]);
var inst_29825__$1 = (state_29908[(2)]);
var inst_29826__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29825__$1);
var inst_29827 = (function (){var all_files = inst_29822;
var res_SINGLEQUOTE_ = inst_29825__$1;
var res = inst_29826__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29826,inst_29822,inst_29825,inst_29830,inst_29825__$1,inst_29826__$1,state_val_29909,c__20519__auto__,map__29754,map__29754__$1,opts,before_jsload,on_jsload,reload_dependents,map__29755,map__29755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29505_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29505_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29826,inst_29822,inst_29825,inst_29830,inst_29825__$1,inst_29826__$1,state_val_29909,c__20519__auto__,map__29754,map__29754__$1,opts,before_jsload,on_jsload,reload_dependents,map__29755,map__29755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29828 = cljs.core.filter.call(null,inst_29827,inst_29825__$1);
var inst_29829 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29830__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29829);
var inst_29831 = cljs.core.not_empty.call(null,inst_29830__$1);
var state_29908__$1 = (function (){var statearr_29936 = state_29908;
(statearr_29936[(23)] = inst_29826__$1);

(statearr_29936[(24)] = inst_29825__$1);

(statearr_29936[(26)] = inst_29828);

(statearr_29936[(25)] = inst_29830__$1);

return statearr_29936;
})();
if(cljs.core.truth_(inst_29831)){
var statearr_29937_30017 = state_29908__$1;
(statearr_29937_30017[(1)] = (23));

} else {
var statearr_29938_30018 = state_29908__$1;
(statearr_29938_30018[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (36))){
var state_29908__$1 = state_29908;
var statearr_29939_30019 = state_29908__$1;
(statearr_29939_30019[(2)] = false);

(statearr_29939_30019[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (41))){
var inst_29883 = (state_29908[(20)]);
var inst_29887 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29888 = cljs.core.map.call(null,inst_29887,inst_29883);
var inst_29889 = cljs.core.pr_str.call(null,inst_29888);
var inst_29890 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29889)].join('');
var inst_29891 = figwheel.client.utils.log.call(null,inst_29890);
var state_29908__$1 = state_29908;
var statearr_29940_30020 = state_29908__$1;
(statearr_29940_30020[(2)] = inst_29891);

(statearr_29940_30020[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (43))){
var inst_29884 = (state_29908[(21)]);
var inst_29894 = (state_29908[(2)]);
var inst_29895 = cljs.core.not_empty.call(null,inst_29884);
var state_29908__$1 = (function (){var statearr_29941 = state_29908;
(statearr_29941[(27)] = inst_29894);

return statearr_29941;
})();
if(cljs.core.truth_(inst_29895)){
var statearr_29942_30021 = state_29908__$1;
(statearr_29942_30021[(1)] = (44));

} else {
var statearr_29943_30022 = state_29908__$1;
(statearr_29943_30022[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (29))){
var inst_29826 = (state_29908[(23)]);
var inst_29822 = (state_29908[(19)]);
var inst_29862 = (state_29908[(16)]);
var inst_29825 = (state_29908[(24)]);
var inst_29828 = (state_29908[(26)]);
var inst_29830 = (state_29908[(25)]);
var inst_29858 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29861 = (function (){var all_files = inst_29822;
var res_SINGLEQUOTE_ = inst_29825;
var res = inst_29826;
var files_not_loaded = inst_29828;
var dependencies_that_loaded = inst_29830;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29826,inst_29822,inst_29862,inst_29825,inst_29828,inst_29830,inst_29858,state_val_29909,c__20519__auto__,map__29754,map__29754__$1,opts,before_jsload,on_jsload,reload_dependents,map__29755,map__29755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29860){
var map__29944 = p__29860;
var map__29944__$1 = ((((!((map__29944 == null)))?((((map__29944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29944):map__29944);
var namespace = cljs.core.get.call(null,map__29944__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29826,inst_29822,inst_29862,inst_29825,inst_29828,inst_29830,inst_29858,state_val_29909,c__20519__auto__,map__29754,map__29754__$1,opts,before_jsload,on_jsload,reload_dependents,map__29755,map__29755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29862__$1 = cljs.core.group_by.call(null,inst_29861,inst_29828);
var inst_29864 = (inst_29862__$1 == null);
var inst_29865 = cljs.core.not.call(null,inst_29864);
var state_29908__$1 = (function (){var statearr_29946 = state_29908;
(statearr_29946[(28)] = inst_29858);

(statearr_29946[(16)] = inst_29862__$1);

return statearr_29946;
})();
if(inst_29865){
var statearr_29947_30023 = state_29908__$1;
(statearr_29947_30023[(1)] = (32));

} else {
var statearr_29948_30024 = state_29908__$1;
(statearr_29948_30024[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (44))){
var inst_29884 = (state_29908[(21)]);
var inst_29897 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29884);
var inst_29898 = cljs.core.pr_str.call(null,inst_29897);
var inst_29899 = [cljs.core.str("not required: "),cljs.core.str(inst_29898)].join('');
var inst_29900 = figwheel.client.utils.log.call(null,inst_29899);
var state_29908__$1 = state_29908;
var statearr_29949_30025 = state_29908__$1;
(statearr_29949_30025[(2)] = inst_29900);

(statearr_29949_30025[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (6))){
var inst_29803 = (state_29908[(2)]);
var state_29908__$1 = state_29908;
var statearr_29950_30026 = state_29908__$1;
(statearr_29950_30026[(2)] = inst_29803);

(statearr_29950_30026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (28))){
var inst_29828 = (state_29908[(26)]);
var inst_29855 = (state_29908[(2)]);
var inst_29856 = cljs.core.not_empty.call(null,inst_29828);
var state_29908__$1 = (function (){var statearr_29951 = state_29908;
(statearr_29951[(29)] = inst_29855);

return statearr_29951;
})();
if(cljs.core.truth_(inst_29856)){
var statearr_29952_30027 = state_29908__$1;
(statearr_29952_30027[(1)] = (29));

} else {
var statearr_29953_30028 = state_29908__$1;
(statearr_29953_30028[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (25))){
var inst_29826 = (state_29908[(23)]);
var inst_29842 = (state_29908[(2)]);
var inst_29843 = cljs.core.not_empty.call(null,inst_29826);
var state_29908__$1 = (function (){var statearr_29954 = state_29908;
(statearr_29954[(30)] = inst_29842);

return statearr_29954;
})();
if(cljs.core.truth_(inst_29843)){
var statearr_29955_30029 = state_29908__$1;
(statearr_29955_30029[(1)] = (26));

} else {
var statearr_29956_30030 = state_29908__$1;
(statearr_29956_30030[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (34))){
var inst_29877 = (state_29908[(2)]);
var state_29908__$1 = state_29908;
if(cljs.core.truth_(inst_29877)){
var statearr_29957_30031 = state_29908__$1;
(statearr_29957_30031[(1)] = (38));

} else {
var statearr_29958_30032 = state_29908__$1;
(statearr_29958_30032[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (17))){
var state_29908__$1 = state_29908;
var statearr_29959_30033 = state_29908__$1;
(statearr_29959_30033[(2)] = recompile_dependents);

(statearr_29959_30033[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (3))){
var state_29908__$1 = state_29908;
var statearr_29960_30034 = state_29908__$1;
(statearr_29960_30034[(2)] = null);

(statearr_29960_30034[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (12))){
var inst_29799 = (state_29908[(2)]);
var state_29908__$1 = state_29908;
var statearr_29961_30035 = state_29908__$1;
(statearr_29961_30035[(2)] = inst_29799);

(statearr_29961_30035[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (2))){
var inst_29761 = (state_29908[(13)]);
var inst_29768 = cljs.core.seq.call(null,inst_29761);
var inst_29769 = inst_29768;
var inst_29770 = null;
var inst_29771 = (0);
var inst_29772 = (0);
var state_29908__$1 = (function (){var statearr_29962 = state_29908;
(statearr_29962[(7)] = inst_29771);

(statearr_29962[(8)] = inst_29769);

(statearr_29962[(9)] = inst_29772);

(statearr_29962[(10)] = inst_29770);

return statearr_29962;
})();
var statearr_29963_30036 = state_29908__$1;
(statearr_29963_30036[(2)] = null);

(statearr_29963_30036[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (23))){
var inst_29826 = (state_29908[(23)]);
var inst_29822 = (state_29908[(19)]);
var inst_29825 = (state_29908[(24)]);
var inst_29828 = (state_29908[(26)]);
var inst_29830 = (state_29908[(25)]);
var inst_29833 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29835 = (function (){var all_files = inst_29822;
var res_SINGLEQUOTE_ = inst_29825;
var res = inst_29826;
var files_not_loaded = inst_29828;
var dependencies_that_loaded = inst_29830;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29826,inst_29822,inst_29825,inst_29828,inst_29830,inst_29833,state_val_29909,c__20519__auto__,map__29754,map__29754__$1,opts,before_jsload,on_jsload,reload_dependents,map__29755,map__29755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29834){
var map__29964 = p__29834;
var map__29964__$1 = ((((!((map__29964 == null)))?((((map__29964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29964):map__29964);
var request_url = cljs.core.get.call(null,map__29964__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29826,inst_29822,inst_29825,inst_29828,inst_29830,inst_29833,state_val_29909,c__20519__auto__,map__29754,map__29754__$1,opts,before_jsload,on_jsload,reload_dependents,map__29755,map__29755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29836 = cljs.core.reverse.call(null,inst_29830);
var inst_29837 = cljs.core.map.call(null,inst_29835,inst_29836);
var inst_29838 = cljs.core.pr_str.call(null,inst_29837);
var inst_29839 = figwheel.client.utils.log.call(null,inst_29838);
var state_29908__$1 = (function (){var statearr_29966 = state_29908;
(statearr_29966[(31)] = inst_29833);

return statearr_29966;
})();
var statearr_29967_30037 = state_29908__$1;
(statearr_29967_30037[(2)] = inst_29839);

(statearr_29967_30037[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (35))){
var state_29908__$1 = state_29908;
var statearr_29968_30038 = state_29908__$1;
(statearr_29968_30038[(2)] = true);

(statearr_29968_30038[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (19))){
var inst_29812 = (state_29908[(12)]);
var inst_29818 = figwheel.client.file_reloading.expand_files.call(null,inst_29812);
var state_29908__$1 = state_29908;
var statearr_29969_30039 = state_29908__$1;
(statearr_29969_30039[(2)] = inst_29818);

(statearr_29969_30039[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (11))){
var state_29908__$1 = state_29908;
var statearr_29970_30040 = state_29908__$1;
(statearr_29970_30040[(2)] = null);

(statearr_29970_30040[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (9))){
var inst_29801 = (state_29908[(2)]);
var state_29908__$1 = state_29908;
var statearr_29971_30041 = state_29908__$1;
(statearr_29971_30041[(2)] = inst_29801);

(statearr_29971_30041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (5))){
var inst_29771 = (state_29908[(7)]);
var inst_29772 = (state_29908[(9)]);
var inst_29774 = (inst_29772 < inst_29771);
var inst_29775 = inst_29774;
var state_29908__$1 = state_29908;
if(cljs.core.truth_(inst_29775)){
var statearr_29972_30042 = state_29908__$1;
(statearr_29972_30042[(1)] = (7));

} else {
var statearr_29973_30043 = state_29908__$1;
(statearr_29973_30043[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (14))){
var inst_29782 = (state_29908[(22)]);
var inst_29791 = cljs.core.first.call(null,inst_29782);
var inst_29792 = figwheel.client.file_reloading.eval_body.call(null,inst_29791,opts);
var inst_29793 = cljs.core.next.call(null,inst_29782);
var inst_29769 = inst_29793;
var inst_29770 = null;
var inst_29771 = (0);
var inst_29772 = (0);
var state_29908__$1 = (function (){var statearr_29974 = state_29908;
(statearr_29974[(7)] = inst_29771);

(statearr_29974[(8)] = inst_29769);

(statearr_29974[(32)] = inst_29792);

(statearr_29974[(9)] = inst_29772);

(statearr_29974[(10)] = inst_29770);

return statearr_29974;
})();
var statearr_29975_30044 = state_29908__$1;
(statearr_29975_30044[(2)] = null);

(statearr_29975_30044[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (45))){
var state_29908__$1 = state_29908;
var statearr_29976_30045 = state_29908__$1;
(statearr_29976_30045[(2)] = null);

(statearr_29976_30045[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (26))){
var inst_29826 = (state_29908[(23)]);
var inst_29822 = (state_29908[(19)]);
var inst_29825 = (state_29908[(24)]);
var inst_29828 = (state_29908[(26)]);
var inst_29830 = (state_29908[(25)]);
var inst_29845 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29847 = (function (){var all_files = inst_29822;
var res_SINGLEQUOTE_ = inst_29825;
var res = inst_29826;
var files_not_loaded = inst_29828;
var dependencies_that_loaded = inst_29830;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29826,inst_29822,inst_29825,inst_29828,inst_29830,inst_29845,state_val_29909,c__20519__auto__,map__29754,map__29754__$1,opts,before_jsload,on_jsload,reload_dependents,map__29755,map__29755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29846){
var map__29977 = p__29846;
var map__29977__$1 = ((((!((map__29977 == null)))?((((map__29977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29977):map__29977);
var namespace = cljs.core.get.call(null,map__29977__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29977__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29826,inst_29822,inst_29825,inst_29828,inst_29830,inst_29845,state_val_29909,c__20519__auto__,map__29754,map__29754__$1,opts,before_jsload,on_jsload,reload_dependents,map__29755,map__29755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29848 = cljs.core.map.call(null,inst_29847,inst_29826);
var inst_29849 = cljs.core.pr_str.call(null,inst_29848);
var inst_29850 = figwheel.client.utils.log.call(null,inst_29849);
var inst_29851 = (function (){var all_files = inst_29822;
var res_SINGLEQUOTE_ = inst_29825;
var res = inst_29826;
var files_not_loaded = inst_29828;
var dependencies_that_loaded = inst_29830;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29826,inst_29822,inst_29825,inst_29828,inst_29830,inst_29845,inst_29847,inst_29848,inst_29849,inst_29850,state_val_29909,c__20519__auto__,map__29754,map__29754__$1,opts,before_jsload,on_jsload,reload_dependents,map__29755,map__29755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29826,inst_29822,inst_29825,inst_29828,inst_29830,inst_29845,inst_29847,inst_29848,inst_29849,inst_29850,state_val_29909,c__20519__auto__,map__29754,map__29754__$1,opts,before_jsload,on_jsload,reload_dependents,map__29755,map__29755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29852 = setTimeout(inst_29851,(10));
var state_29908__$1 = (function (){var statearr_29979 = state_29908;
(statearr_29979[(33)] = inst_29850);

(statearr_29979[(34)] = inst_29845);

return statearr_29979;
})();
var statearr_29980_30046 = state_29908__$1;
(statearr_29980_30046[(2)] = inst_29852);

(statearr_29980_30046[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (16))){
var state_29908__$1 = state_29908;
var statearr_29981_30047 = state_29908__$1;
(statearr_29981_30047[(2)] = reload_dependents);

(statearr_29981_30047[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (38))){
var inst_29862 = (state_29908[(16)]);
var inst_29879 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29862);
var state_29908__$1 = state_29908;
var statearr_29982_30048 = state_29908__$1;
(statearr_29982_30048[(2)] = inst_29879);

(statearr_29982_30048[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (30))){
var state_29908__$1 = state_29908;
var statearr_29983_30049 = state_29908__$1;
(statearr_29983_30049[(2)] = null);

(statearr_29983_30049[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (10))){
var inst_29782 = (state_29908[(22)]);
var inst_29784 = cljs.core.chunked_seq_QMARK_.call(null,inst_29782);
var state_29908__$1 = state_29908;
if(inst_29784){
var statearr_29984_30050 = state_29908__$1;
(statearr_29984_30050[(1)] = (13));

} else {
var statearr_29985_30051 = state_29908__$1;
(statearr_29985_30051[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (18))){
var inst_29816 = (state_29908[(2)]);
var state_29908__$1 = state_29908;
if(cljs.core.truth_(inst_29816)){
var statearr_29986_30052 = state_29908__$1;
(statearr_29986_30052[(1)] = (19));

} else {
var statearr_29987_30053 = state_29908__$1;
(statearr_29987_30053[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (42))){
var state_29908__$1 = state_29908;
var statearr_29988_30054 = state_29908__$1;
(statearr_29988_30054[(2)] = null);

(statearr_29988_30054[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (37))){
var inst_29874 = (state_29908[(2)]);
var state_29908__$1 = state_29908;
var statearr_29989_30055 = state_29908__$1;
(statearr_29989_30055[(2)] = inst_29874);

(statearr_29989_30055[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (8))){
var inst_29782 = (state_29908[(22)]);
var inst_29769 = (state_29908[(8)]);
var inst_29782__$1 = cljs.core.seq.call(null,inst_29769);
var state_29908__$1 = (function (){var statearr_29990 = state_29908;
(statearr_29990[(22)] = inst_29782__$1);

return statearr_29990;
})();
if(inst_29782__$1){
var statearr_29991_30056 = state_29908__$1;
(statearr_29991_30056[(1)] = (10));

} else {
var statearr_29992_30057 = state_29908__$1;
(statearr_29992_30057[(1)] = (11));

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
});})(c__20519__auto__,map__29754,map__29754__$1,opts,before_jsload,on_jsload,reload_dependents,map__29755,map__29755__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20498__auto__,c__20519__auto__,map__29754,map__29754__$1,opts,before_jsload,on_jsload,reload_dependents,map__29755,map__29755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto____0 = (function (){
var statearr_29996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29996[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto__);

(statearr_29996[(1)] = (1));

return statearr_29996;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto____1 = (function (state_29908){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_29908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e29997){if((e29997 instanceof Object)){
var ex__20502__auto__ = e29997;
var statearr_29998_30058 = state_29908;
(statearr_29998_30058[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30059 = state_29908;
state_29908 = G__30059;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto__ = function(state_29908){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto____1.call(this,state_29908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto__,map__29754,map__29754__$1,opts,before_jsload,on_jsload,reload_dependents,map__29755,map__29755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20521__auto__ = (function (){var statearr_29999 = f__20520__auto__.call(null);
(statearr_29999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto__);

return statearr_29999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto__,map__29754,map__29754__$1,opts,before_jsload,on_jsload,reload_dependents,map__29755,map__29755__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20519__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30062,link){
var map__30065 = p__30062;
var map__30065__$1 = ((((!((map__30065 == null)))?((((map__30065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30065):map__30065);
var file = cljs.core.get.call(null,map__30065__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__30065,map__30065__$1,file){
return (function (p1__30060_SHARP_,p2__30061_SHARP_){
if(cljs.core._EQ_.call(null,p1__30060_SHARP_,p2__30061_SHARP_)){
return p1__30060_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__30065,map__30065__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30071){
var map__30072 = p__30071;
var map__30072__$1 = ((((!((map__30072 == null)))?((((map__30072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30072):map__30072);
var match_length = cljs.core.get.call(null,map__30072__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30072__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30067_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30067_SHARP_);
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
var args30074 = [];
var len__19539__auto___30077 = arguments.length;
var i__19540__auto___30078 = (0);
while(true){
if((i__19540__auto___30078 < len__19539__auto___30077)){
args30074.push((arguments[i__19540__auto___30078]));

var G__30079 = (i__19540__auto___30078 + (1));
i__19540__auto___30078 = G__30079;
continue;
} else {
}
break;
}

var G__30076 = args30074.length;
switch (G__30076) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30074.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30081_SHARP_,p2__30082_SHARP_){
return cljs.core.assoc.call(null,p1__30081_SHARP_,cljs.core.get.call(null,p2__30082_SHARP_,key),p2__30082_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30083){
var map__30086 = p__30083;
var map__30086__$1 = ((((!((map__30086 == null)))?((((map__30086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30086):map__30086);
var f_data = map__30086__$1;
var file = cljs.core.get.call(null,map__30086__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30088,files_msg){
var map__30095 = p__30088;
var map__30095__$1 = ((((!((map__30095 == null)))?((((map__30095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30095):map__30095);
var opts = map__30095__$1;
var on_cssload = cljs.core.get.call(null,map__30095__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30097_30101 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30098_30102 = null;
var count__30099_30103 = (0);
var i__30100_30104 = (0);
while(true){
if((i__30100_30104 < count__30099_30103)){
var f_30105 = cljs.core._nth.call(null,chunk__30098_30102,i__30100_30104);
figwheel.client.file_reloading.reload_css_file.call(null,f_30105);

var G__30106 = seq__30097_30101;
var G__30107 = chunk__30098_30102;
var G__30108 = count__30099_30103;
var G__30109 = (i__30100_30104 + (1));
seq__30097_30101 = G__30106;
chunk__30098_30102 = G__30107;
count__30099_30103 = G__30108;
i__30100_30104 = G__30109;
continue;
} else {
var temp__4657__auto___30110 = cljs.core.seq.call(null,seq__30097_30101);
if(temp__4657__auto___30110){
var seq__30097_30111__$1 = temp__4657__auto___30110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30097_30111__$1)){
var c__19275__auto___30112 = cljs.core.chunk_first.call(null,seq__30097_30111__$1);
var G__30113 = cljs.core.chunk_rest.call(null,seq__30097_30111__$1);
var G__30114 = c__19275__auto___30112;
var G__30115 = cljs.core.count.call(null,c__19275__auto___30112);
var G__30116 = (0);
seq__30097_30101 = G__30113;
chunk__30098_30102 = G__30114;
count__30099_30103 = G__30115;
i__30100_30104 = G__30116;
continue;
} else {
var f_30117 = cljs.core.first.call(null,seq__30097_30111__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30117);

var G__30118 = cljs.core.next.call(null,seq__30097_30111__$1);
var G__30119 = null;
var G__30120 = (0);
var G__30121 = (0);
seq__30097_30101 = G__30118;
chunk__30098_30102 = G__30119;
count__30099_30103 = G__30120;
i__30100_30104 = G__30121;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30095,map__30095__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__30095,map__30095__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map