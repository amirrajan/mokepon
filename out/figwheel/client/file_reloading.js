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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__20598_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__20598_SHARP_));
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
var seq__20603 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__20604 = null;
var count__20605 = (0);
var i__20606 = (0);
while(true){
if((i__20606 < count__20605)){
var n = cljs.core._nth.call(null,chunk__20604,i__20606);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__20607 = seq__20603;
var G__20608 = chunk__20604;
var G__20609 = count__20605;
var G__20610 = (i__20606 + (1));
seq__20603 = G__20607;
chunk__20604 = G__20608;
count__20605 = G__20609;
i__20606 = G__20610;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20603);
if(temp__4657__auto__){
var seq__20603__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20603__$1)){
var c__19275__auto__ = cljs.core.chunk_first.call(null,seq__20603__$1);
var G__20611 = cljs.core.chunk_rest.call(null,seq__20603__$1);
var G__20612 = c__19275__auto__;
var G__20613 = cljs.core.count.call(null,c__19275__auto__);
var G__20614 = (0);
seq__20603 = G__20611;
chunk__20604 = G__20612;
count__20605 = G__20613;
i__20606 = G__20614;
continue;
} else {
var n = cljs.core.first.call(null,seq__20603__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__20615 = cljs.core.next.call(null,seq__20603__$1);
var G__20616 = null;
var G__20617 = (0);
var G__20618 = (0);
seq__20603 = G__20615;
chunk__20604 = G__20616;
count__20605 = G__20617;
i__20606 = G__20618;
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

var seq__20669_20680 = cljs.core.seq.call(null,deps);
var chunk__20670_20681 = null;
var count__20671_20682 = (0);
var i__20672_20683 = (0);
while(true){
if((i__20672_20683 < count__20671_20682)){
var dep_20684 = cljs.core._nth.call(null,chunk__20670_20681,i__20672_20683);
topo_sort_helper_STAR_.call(null,dep_20684,(depth + (1)),state);

var G__20685 = seq__20669_20680;
var G__20686 = chunk__20670_20681;
var G__20687 = count__20671_20682;
var G__20688 = (i__20672_20683 + (1));
seq__20669_20680 = G__20685;
chunk__20670_20681 = G__20686;
count__20671_20682 = G__20687;
i__20672_20683 = G__20688;
continue;
} else {
var temp__4657__auto___20689 = cljs.core.seq.call(null,seq__20669_20680);
if(temp__4657__auto___20689){
var seq__20669_20690__$1 = temp__4657__auto___20689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20669_20690__$1)){
var c__19275__auto___20691 = cljs.core.chunk_first.call(null,seq__20669_20690__$1);
var G__20692 = cljs.core.chunk_rest.call(null,seq__20669_20690__$1);
var G__20693 = c__19275__auto___20691;
var G__20694 = cljs.core.count.call(null,c__19275__auto___20691);
var G__20695 = (0);
seq__20669_20680 = G__20692;
chunk__20670_20681 = G__20693;
count__20671_20682 = G__20694;
i__20672_20683 = G__20695;
continue;
} else {
var dep_20696 = cljs.core.first.call(null,seq__20669_20690__$1);
topo_sort_helper_STAR_.call(null,dep_20696,(depth + (1)),state);

var G__20697 = cljs.core.next.call(null,seq__20669_20690__$1);
var G__20698 = null;
var G__20699 = (0);
var G__20700 = (0);
seq__20669_20680 = G__20697;
chunk__20670_20681 = G__20698;
count__20671_20682 = G__20699;
i__20672_20683 = G__20700;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__20673){
var vec__20677 = p__20673;
var seq__20678 = cljs.core.seq.call(null,vec__20677);
var first__20679 = cljs.core.first.call(null,seq__20678);
var seq__20678__$1 = cljs.core.next.call(null,seq__20678);
var x = first__20679;
var xs = seq__20678__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__20677,seq__20678,first__20679,seq__20678__$1,x,xs,get_deps__$1){
return (function (p1__20619_SHARP_){
return clojure.set.difference.call(null,p1__20619_SHARP_,x);
});})(vec__20677,seq__20678,first__20679,seq__20678__$1,x,xs,get_deps__$1))
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
var seq__20713 = cljs.core.seq.call(null,provides);
var chunk__20714 = null;
var count__20715 = (0);
var i__20716 = (0);
while(true){
if((i__20716 < count__20715)){
var prov = cljs.core._nth.call(null,chunk__20714,i__20716);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__20717_20725 = cljs.core.seq.call(null,requires);
var chunk__20718_20726 = null;
var count__20719_20727 = (0);
var i__20720_20728 = (0);
while(true){
if((i__20720_20728 < count__20719_20727)){
var req_20729 = cljs.core._nth.call(null,chunk__20718_20726,i__20720_20728);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20729,prov);

var G__20730 = seq__20717_20725;
var G__20731 = chunk__20718_20726;
var G__20732 = count__20719_20727;
var G__20733 = (i__20720_20728 + (1));
seq__20717_20725 = G__20730;
chunk__20718_20726 = G__20731;
count__20719_20727 = G__20732;
i__20720_20728 = G__20733;
continue;
} else {
var temp__4657__auto___20734 = cljs.core.seq.call(null,seq__20717_20725);
if(temp__4657__auto___20734){
var seq__20717_20735__$1 = temp__4657__auto___20734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20717_20735__$1)){
var c__19275__auto___20736 = cljs.core.chunk_first.call(null,seq__20717_20735__$1);
var G__20737 = cljs.core.chunk_rest.call(null,seq__20717_20735__$1);
var G__20738 = c__19275__auto___20736;
var G__20739 = cljs.core.count.call(null,c__19275__auto___20736);
var G__20740 = (0);
seq__20717_20725 = G__20737;
chunk__20718_20726 = G__20738;
count__20719_20727 = G__20739;
i__20720_20728 = G__20740;
continue;
} else {
var req_20741 = cljs.core.first.call(null,seq__20717_20735__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20741,prov);

var G__20742 = cljs.core.next.call(null,seq__20717_20735__$1);
var G__20743 = null;
var G__20744 = (0);
var G__20745 = (0);
seq__20717_20725 = G__20742;
chunk__20718_20726 = G__20743;
count__20719_20727 = G__20744;
i__20720_20728 = G__20745;
continue;
}
} else {
}
}
break;
}

var G__20746 = seq__20713;
var G__20747 = chunk__20714;
var G__20748 = count__20715;
var G__20749 = (i__20716 + (1));
seq__20713 = G__20746;
chunk__20714 = G__20747;
count__20715 = G__20748;
i__20716 = G__20749;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20713);
if(temp__4657__auto__){
var seq__20713__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20713__$1)){
var c__19275__auto__ = cljs.core.chunk_first.call(null,seq__20713__$1);
var G__20750 = cljs.core.chunk_rest.call(null,seq__20713__$1);
var G__20751 = c__19275__auto__;
var G__20752 = cljs.core.count.call(null,c__19275__auto__);
var G__20753 = (0);
seq__20713 = G__20750;
chunk__20714 = G__20751;
count__20715 = G__20752;
i__20716 = G__20753;
continue;
} else {
var prov = cljs.core.first.call(null,seq__20713__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__20721_20754 = cljs.core.seq.call(null,requires);
var chunk__20722_20755 = null;
var count__20723_20756 = (0);
var i__20724_20757 = (0);
while(true){
if((i__20724_20757 < count__20723_20756)){
var req_20758 = cljs.core._nth.call(null,chunk__20722_20755,i__20724_20757);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20758,prov);

var G__20759 = seq__20721_20754;
var G__20760 = chunk__20722_20755;
var G__20761 = count__20723_20756;
var G__20762 = (i__20724_20757 + (1));
seq__20721_20754 = G__20759;
chunk__20722_20755 = G__20760;
count__20723_20756 = G__20761;
i__20724_20757 = G__20762;
continue;
} else {
var temp__4657__auto___20763__$1 = cljs.core.seq.call(null,seq__20721_20754);
if(temp__4657__auto___20763__$1){
var seq__20721_20764__$1 = temp__4657__auto___20763__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20721_20764__$1)){
var c__19275__auto___20765 = cljs.core.chunk_first.call(null,seq__20721_20764__$1);
var G__20766 = cljs.core.chunk_rest.call(null,seq__20721_20764__$1);
var G__20767 = c__19275__auto___20765;
var G__20768 = cljs.core.count.call(null,c__19275__auto___20765);
var G__20769 = (0);
seq__20721_20754 = G__20766;
chunk__20722_20755 = G__20767;
count__20723_20756 = G__20768;
i__20724_20757 = G__20769;
continue;
} else {
var req_20770 = cljs.core.first.call(null,seq__20721_20764__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20770,prov);

var G__20771 = cljs.core.next.call(null,seq__20721_20764__$1);
var G__20772 = null;
var G__20773 = (0);
var G__20774 = (0);
seq__20721_20754 = G__20771;
chunk__20722_20755 = G__20772;
count__20723_20756 = G__20773;
i__20724_20757 = G__20774;
continue;
}
} else {
}
}
break;
}

var G__20775 = cljs.core.next.call(null,seq__20713__$1);
var G__20776 = null;
var G__20777 = (0);
var G__20778 = (0);
seq__20713 = G__20775;
chunk__20714 = G__20776;
count__20715 = G__20777;
i__20716 = G__20778;
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
var seq__20783_20787 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__20784_20788 = null;
var count__20785_20789 = (0);
var i__20786_20790 = (0);
while(true){
if((i__20786_20790 < count__20785_20789)){
var ns_20791 = cljs.core._nth.call(null,chunk__20784_20788,i__20786_20790);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_20791);

var G__20792 = seq__20783_20787;
var G__20793 = chunk__20784_20788;
var G__20794 = count__20785_20789;
var G__20795 = (i__20786_20790 + (1));
seq__20783_20787 = G__20792;
chunk__20784_20788 = G__20793;
count__20785_20789 = G__20794;
i__20786_20790 = G__20795;
continue;
} else {
var temp__4657__auto___20796 = cljs.core.seq.call(null,seq__20783_20787);
if(temp__4657__auto___20796){
var seq__20783_20797__$1 = temp__4657__auto___20796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20783_20797__$1)){
var c__19275__auto___20798 = cljs.core.chunk_first.call(null,seq__20783_20797__$1);
var G__20799 = cljs.core.chunk_rest.call(null,seq__20783_20797__$1);
var G__20800 = c__19275__auto___20798;
var G__20801 = cljs.core.count.call(null,c__19275__auto___20798);
var G__20802 = (0);
seq__20783_20787 = G__20799;
chunk__20784_20788 = G__20800;
count__20785_20789 = G__20801;
i__20786_20790 = G__20802;
continue;
} else {
var ns_20803 = cljs.core.first.call(null,seq__20783_20797__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_20803);

var G__20804 = cljs.core.next.call(null,seq__20783_20797__$1);
var G__20805 = null;
var G__20806 = (0);
var G__20807 = (0);
seq__20783_20787 = G__20804;
chunk__20784_20788 = G__20805;
count__20785_20789 = G__20806;
i__20786_20790 = G__20807;
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
var G__20808__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__20808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20809__i = 0, G__20809__a = new Array(arguments.length -  0);
while (G__20809__i < G__20809__a.length) {G__20809__a[G__20809__i] = arguments[G__20809__i + 0]; ++G__20809__i;}
  args = new cljs.core.IndexedSeq(G__20809__a,0);
} 
return G__20808__delegate.call(this,args);};
G__20808.cljs$lang$maxFixedArity = 0;
G__20808.cljs$lang$applyTo = (function (arglist__20810){
var args = cljs.core.seq(arglist__20810);
return G__20808__delegate(args);
});
G__20808.cljs$core$IFn$_invoke$arity$variadic = G__20808__delegate;
return G__20808;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__20812 = cljs.core._EQ_;
var expr__20813 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__20812.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__20813))){
var path_parts = ((function (pred__20812,expr__20813){
return (function (p1__20811_SHARP_){
return clojure.string.split.call(null,p1__20811_SHARP_,/[\/\\]/);
});})(pred__20812,expr__20813))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__20812,expr__20813){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e20815){if((e20815 instanceof Error)){
var e = e20815;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e20815;

}
}})());
});
;})(path_parts,sep,root,pred__20812,expr__20813))
} else {
if(cljs.core.truth_(pred__20812.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__20813))){
return ((function (pred__20812,expr__20813){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__20812,expr__20813){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__20812,expr__20813))
);

return deferred.addErrback(((function (deferred,pred__20812,expr__20813){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__20812,expr__20813))
);
});
;})(pred__20812,expr__20813))
} else {
return ((function (pred__20812,expr__20813){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__20812,expr__20813))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__20816,callback){
var map__20819 = p__20816;
var map__20819__$1 = ((((!((map__20819 == null)))?((((map__20819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20819):map__20819);
var file_msg = map__20819__$1;
var request_url = cljs.core.get.call(null,map__20819__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__20819,map__20819__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__20819,map__20819__$1,file_msg,request_url))
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
return (function (state_20843){
var state_val_20844 = (state_20843[(1)]);
if((state_val_20844 === (7))){
var inst_20839 = (state_20843[(2)]);
var state_20843__$1 = state_20843;
var statearr_20845_20865 = state_20843__$1;
(statearr_20845_20865[(2)] = inst_20839);

(statearr_20845_20865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (1))){
var state_20843__$1 = state_20843;
var statearr_20846_20866 = state_20843__$1;
(statearr_20846_20866[(2)] = null);

(statearr_20846_20866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (4))){
var inst_20823 = (state_20843[(7)]);
var inst_20823__$1 = (state_20843[(2)]);
var state_20843__$1 = (function (){var statearr_20847 = state_20843;
(statearr_20847[(7)] = inst_20823__$1);

return statearr_20847;
})();
if(cljs.core.truth_(inst_20823__$1)){
var statearr_20848_20867 = state_20843__$1;
(statearr_20848_20867[(1)] = (5));

} else {
var statearr_20849_20868 = state_20843__$1;
(statearr_20849_20868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (6))){
var state_20843__$1 = state_20843;
var statearr_20850_20869 = state_20843__$1;
(statearr_20850_20869[(2)] = null);

(statearr_20850_20869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (3))){
var inst_20841 = (state_20843[(2)]);
var state_20843__$1 = state_20843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20843__$1,inst_20841);
} else {
if((state_val_20844 === (2))){
var state_20843__$1 = state_20843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20843__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_20844 === (11))){
var inst_20835 = (state_20843[(2)]);
var state_20843__$1 = (function (){var statearr_20851 = state_20843;
(statearr_20851[(8)] = inst_20835);

return statearr_20851;
})();
var statearr_20852_20870 = state_20843__$1;
(statearr_20852_20870[(2)] = null);

(statearr_20852_20870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (9))){
var inst_20829 = (state_20843[(9)]);
var inst_20827 = (state_20843[(10)]);
var inst_20831 = inst_20829.call(null,inst_20827);
var state_20843__$1 = state_20843;
var statearr_20853_20871 = state_20843__$1;
(statearr_20853_20871[(2)] = inst_20831);

(statearr_20853_20871[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (5))){
var inst_20823 = (state_20843[(7)]);
var inst_20825 = figwheel.client.file_reloading.blocking_load.call(null,inst_20823);
var state_20843__$1 = state_20843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20843__$1,(8),inst_20825);
} else {
if((state_val_20844 === (10))){
var inst_20827 = (state_20843[(10)]);
var inst_20833 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_20827);
var state_20843__$1 = state_20843;
var statearr_20854_20872 = state_20843__$1;
(statearr_20854_20872[(2)] = inst_20833);

(statearr_20854_20872[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (8))){
var inst_20829 = (state_20843[(9)]);
var inst_20823 = (state_20843[(7)]);
var inst_20827 = (state_20843[(2)]);
var inst_20828 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_20829__$1 = cljs.core.get.call(null,inst_20828,inst_20823);
var state_20843__$1 = (function (){var statearr_20855 = state_20843;
(statearr_20855[(9)] = inst_20829__$1);

(statearr_20855[(10)] = inst_20827);

return statearr_20855;
})();
if(cljs.core.truth_(inst_20829__$1)){
var statearr_20856_20873 = state_20843__$1;
(statearr_20856_20873[(1)] = (9));

} else {
var statearr_20857_20874 = state_20843__$1;
(statearr_20857_20874[(1)] = (10));

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
var statearr_20861 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20861[(0)] = figwheel$client$file_reloading$state_machine__20499__auto__);

(statearr_20861[(1)] = (1));

return statearr_20861;
});
var figwheel$client$file_reloading$state_machine__20499__auto____1 = (function (state_20843){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_20843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e20862){if((e20862 instanceof Object)){
var ex__20502__auto__ = e20862;
var statearr_20863_20875 = state_20843;
(statearr_20863_20875[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20876 = state_20843;
state_20843 = G__20876;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20499__auto__ = function(state_20843){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20499__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20499__auto____1.call(this,state_20843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20499__auto____0;
figwheel$client$file_reloading$state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20499__auto____1;
return figwheel$client$file_reloading$state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto__))
})();
var state__20521__auto__ = (function (){var statearr_20864 = f__20520__auto__.call(null);
(statearr_20864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto__);

return statearr_20864;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__20877,callback){
var map__20880 = p__20877;
var map__20880__$1 = ((((!((map__20880 == null)))?((((map__20880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20880):map__20880);
var file_msg = map__20880__$1;
var namespace = cljs.core.get.call(null,map__20880__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__20880,map__20880__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__20880,map__20880__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__20882){
var map__20885 = p__20882;
var map__20885__$1 = ((((!((map__20885 == null)))?((((map__20885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20885):map__20885);
var file_msg = map__20885__$1;
var namespace = cljs.core.get.call(null,map__20885__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__20887,callback){
var map__20890 = p__20887;
var map__20890__$1 = ((((!((map__20890 == null)))?((((map__20890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20890):map__20890);
var file_msg = map__20890__$1;
var request_url = cljs.core.get.call(null,map__20890__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__20890__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20519__auto___20994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto___20994,out){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto___20994,out){
return (function (state_20976){
var state_val_20977 = (state_20976[(1)]);
if((state_val_20977 === (1))){
var inst_20950 = cljs.core.seq.call(null,files);
var inst_20951 = cljs.core.first.call(null,inst_20950);
var inst_20952 = cljs.core.next.call(null,inst_20950);
var inst_20953 = files;
var state_20976__$1 = (function (){var statearr_20978 = state_20976;
(statearr_20978[(7)] = inst_20951);

(statearr_20978[(8)] = inst_20952);

(statearr_20978[(9)] = inst_20953);

return statearr_20978;
})();
var statearr_20979_20995 = state_20976__$1;
(statearr_20979_20995[(2)] = null);

(statearr_20979_20995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (2))){
var inst_20953 = (state_20976[(9)]);
var inst_20959 = (state_20976[(10)]);
var inst_20958 = cljs.core.seq.call(null,inst_20953);
var inst_20959__$1 = cljs.core.first.call(null,inst_20958);
var inst_20960 = cljs.core.next.call(null,inst_20958);
var inst_20961 = (inst_20959__$1 == null);
var inst_20962 = cljs.core.not.call(null,inst_20961);
var state_20976__$1 = (function (){var statearr_20980 = state_20976;
(statearr_20980[(11)] = inst_20960);

(statearr_20980[(10)] = inst_20959__$1);

return statearr_20980;
})();
if(inst_20962){
var statearr_20981_20996 = state_20976__$1;
(statearr_20981_20996[(1)] = (4));

} else {
var statearr_20982_20997 = state_20976__$1;
(statearr_20982_20997[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (3))){
var inst_20974 = (state_20976[(2)]);
var state_20976__$1 = state_20976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20976__$1,inst_20974);
} else {
if((state_val_20977 === (4))){
var inst_20959 = (state_20976[(10)]);
var inst_20964 = figwheel.client.file_reloading.reload_js_file.call(null,inst_20959);
var state_20976__$1 = state_20976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20976__$1,(7),inst_20964);
} else {
if((state_val_20977 === (5))){
var inst_20970 = cljs.core.async.close_BANG_.call(null,out);
var state_20976__$1 = state_20976;
var statearr_20983_20998 = state_20976__$1;
(statearr_20983_20998[(2)] = inst_20970);

(statearr_20983_20998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (6))){
var inst_20972 = (state_20976[(2)]);
var state_20976__$1 = state_20976;
var statearr_20984_20999 = state_20976__$1;
(statearr_20984_20999[(2)] = inst_20972);

(statearr_20984_20999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (7))){
var inst_20960 = (state_20976[(11)]);
var inst_20966 = (state_20976[(2)]);
var inst_20967 = cljs.core.async.put_BANG_.call(null,out,inst_20966);
var inst_20953 = inst_20960;
var state_20976__$1 = (function (){var statearr_20985 = state_20976;
(statearr_20985[(12)] = inst_20967);

(statearr_20985[(9)] = inst_20953);

return statearr_20985;
})();
var statearr_20986_21000 = state_20976__$1;
(statearr_20986_21000[(2)] = null);

(statearr_20986_21000[(1)] = (2));


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
});})(c__20519__auto___20994,out))
;
return ((function (switch__20498__auto__,c__20519__auto___20994,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto____0 = (function (){
var statearr_20990 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20990[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto__);

(statearr_20990[(1)] = (1));

return statearr_20990;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto____1 = (function (state_20976){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_20976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e20991){if((e20991 instanceof Object)){
var ex__20502__auto__ = e20991;
var statearr_20992_21001 = state_20976;
(statearr_20992_21001[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21002 = state_20976;
state_20976 = G__21002;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto__ = function(state_20976){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto____1.call(this,state_20976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto___20994,out))
})();
var state__20521__auto__ = (function (){var statearr_20993 = f__20520__auto__.call(null);
(statearr_20993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto___20994);

return statearr_20993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto___20994,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__21003,opts){
var map__21007 = p__21003;
var map__21007__$1 = ((((!((map__21007 == null)))?((((map__21007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21007):map__21007);
var eval_body__$1 = cljs.core.get.call(null,map__21007__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__21007__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e21009){var e = e21009;
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
return (function (p1__21010_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__21010_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__21019){
var vec__21020 = p__21019;
var k = cljs.core.nth.call(null,vec__21020,(0),null);
var v = cljs.core.nth.call(null,vec__21020,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__21023){
var vec__21024 = p__21023;
var k = cljs.core.nth.call(null,vec__21024,(0),null);
var v = cljs.core.nth.call(null,vec__21024,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__21030,p__21031){
var map__21278 = p__21030;
var map__21278__$1 = ((((!((map__21278 == null)))?((((map__21278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21278):map__21278);
var opts = map__21278__$1;
var before_jsload = cljs.core.get.call(null,map__21278__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__21278__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__21278__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__21279 = p__21031;
var map__21279__$1 = ((((!((map__21279 == null)))?((((map__21279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21279):map__21279);
var msg = map__21279__$1;
var files = cljs.core.get.call(null,map__21279__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__21279__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__21279__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20519__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto__,map__21278,map__21278__$1,opts,before_jsload,on_jsload,reload_dependents,map__21279,map__21279__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto__,map__21278,map__21278__$1,opts,before_jsload,on_jsload,reload_dependents,map__21279,map__21279__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_21432){
var state_val_21433 = (state_21432[(1)]);
if((state_val_21433 === (7))){
var inst_21295 = (state_21432[(7)]);
var inst_21296 = (state_21432[(8)]);
var inst_21293 = (state_21432[(9)]);
var inst_21294 = (state_21432[(10)]);
var inst_21301 = cljs.core._nth.call(null,inst_21294,inst_21296);
var inst_21302 = figwheel.client.file_reloading.eval_body.call(null,inst_21301,opts);
var inst_21303 = (inst_21296 + (1));
var tmp21434 = inst_21295;
var tmp21435 = inst_21293;
var tmp21436 = inst_21294;
var inst_21293__$1 = tmp21435;
var inst_21294__$1 = tmp21436;
var inst_21295__$1 = tmp21434;
var inst_21296__$1 = inst_21303;
var state_21432__$1 = (function (){var statearr_21437 = state_21432;
(statearr_21437[(11)] = inst_21302);

(statearr_21437[(7)] = inst_21295__$1);

(statearr_21437[(8)] = inst_21296__$1);

(statearr_21437[(9)] = inst_21293__$1);

(statearr_21437[(10)] = inst_21294__$1);

return statearr_21437;
})();
var statearr_21438_21524 = state_21432__$1;
(statearr_21438_21524[(2)] = null);

(statearr_21438_21524[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (20))){
var inst_21336 = (state_21432[(12)]);
var inst_21344 = figwheel.client.file_reloading.sort_files.call(null,inst_21336);
var state_21432__$1 = state_21432;
var statearr_21439_21525 = state_21432__$1;
(statearr_21439_21525[(2)] = inst_21344);

(statearr_21439_21525[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (27))){
var state_21432__$1 = state_21432;
var statearr_21440_21526 = state_21432__$1;
(statearr_21440_21526[(2)] = null);

(statearr_21440_21526[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (1))){
var inst_21285 = (state_21432[(13)]);
var inst_21282 = before_jsload.call(null,files);
var inst_21283 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_21284 = (function (){return ((function (inst_21285,inst_21282,inst_21283,state_val_21433,c__20519__auto__,map__21278,map__21278__$1,opts,before_jsload,on_jsload,reload_dependents,map__21279,map__21279__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21027_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21027_SHARP_);
});
;})(inst_21285,inst_21282,inst_21283,state_val_21433,c__20519__auto__,map__21278,map__21278__$1,opts,before_jsload,on_jsload,reload_dependents,map__21279,map__21279__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21285__$1 = cljs.core.filter.call(null,inst_21284,files);
var inst_21286 = cljs.core.not_empty.call(null,inst_21285__$1);
var state_21432__$1 = (function (){var statearr_21441 = state_21432;
(statearr_21441[(14)] = inst_21283);

(statearr_21441[(15)] = inst_21282);

(statearr_21441[(13)] = inst_21285__$1);

return statearr_21441;
})();
if(cljs.core.truth_(inst_21286)){
var statearr_21442_21527 = state_21432__$1;
(statearr_21442_21527[(1)] = (2));

} else {
var statearr_21443_21528 = state_21432__$1;
(statearr_21443_21528[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (24))){
var state_21432__$1 = state_21432;
var statearr_21444_21529 = state_21432__$1;
(statearr_21444_21529[(2)] = null);

(statearr_21444_21529[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (39))){
var inst_21386 = (state_21432[(16)]);
var state_21432__$1 = state_21432;
var statearr_21445_21530 = state_21432__$1;
(statearr_21445_21530[(2)] = inst_21386);

(statearr_21445_21530[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (46))){
var inst_21427 = (state_21432[(2)]);
var state_21432__$1 = state_21432;
var statearr_21446_21531 = state_21432__$1;
(statearr_21446_21531[(2)] = inst_21427);

(statearr_21446_21531[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (4))){
var inst_21330 = (state_21432[(2)]);
var inst_21331 = cljs.core.List.EMPTY;
var inst_21332 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_21331);
var inst_21333 = (function (){return ((function (inst_21330,inst_21331,inst_21332,state_val_21433,c__20519__auto__,map__21278,map__21278__$1,opts,before_jsload,on_jsload,reload_dependents,map__21279,map__21279__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21028_SHARP_){
var and__18452__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__21028_SHARP_);
if(cljs.core.truth_(and__18452__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21028_SHARP_));
} else {
return and__18452__auto__;
}
});
;})(inst_21330,inst_21331,inst_21332,state_val_21433,c__20519__auto__,map__21278,map__21278__$1,opts,before_jsload,on_jsload,reload_dependents,map__21279,map__21279__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21334 = cljs.core.filter.call(null,inst_21333,files);
var inst_21335 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_21336 = cljs.core.concat.call(null,inst_21334,inst_21335);
var state_21432__$1 = (function (){var statearr_21447 = state_21432;
(statearr_21447[(12)] = inst_21336);

(statearr_21447[(17)] = inst_21330);

(statearr_21447[(18)] = inst_21332);

return statearr_21447;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_21448_21532 = state_21432__$1;
(statearr_21448_21532[(1)] = (16));

} else {
var statearr_21449_21533 = state_21432__$1;
(statearr_21449_21533[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (15))){
var inst_21320 = (state_21432[(2)]);
var state_21432__$1 = state_21432;
var statearr_21450_21534 = state_21432__$1;
(statearr_21450_21534[(2)] = inst_21320);

(statearr_21450_21534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (21))){
var inst_21346 = (state_21432[(19)]);
var inst_21346__$1 = (state_21432[(2)]);
var inst_21347 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_21346__$1);
var state_21432__$1 = (function (){var statearr_21451 = state_21432;
(statearr_21451[(19)] = inst_21346__$1);

return statearr_21451;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21432__$1,(22),inst_21347);
} else {
if((state_val_21433 === (31))){
var inst_21430 = (state_21432[(2)]);
var state_21432__$1 = state_21432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21432__$1,inst_21430);
} else {
if((state_val_21433 === (32))){
var inst_21386 = (state_21432[(16)]);
var inst_21391 = inst_21386.cljs$lang$protocol_mask$partition0$;
var inst_21392 = (inst_21391 & (64));
var inst_21393 = inst_21386.cljs$core$ISeq$;
var inst_21394 = (inst_21392) || (inst_21393);
var state_21432__$1 = state_21432;
if(cljs.core.truth_(inst_21394)){
var statearr_21452_21535 = state_21432__$1;
(statearr_21452_21535[(1)] = (35));

} else {
var statearr_21453_21536 = state_21432__$1;
(statearr_21453_21536[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (40))){
var inst_21407 = (state_21432[(20)]);
var inst_21406 = (state_21432[(2)]);
var inst_21407__$1 = cljs.core.get.call(null,inst_21406,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_21408 = cljs.core.get.call(null,inst_21406,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_21409 = cljs.core.not_empty.call(null,inst_21407__$1);
var state_21432__$1 = (function (){var statearr_21454 = state_21432;
(statearr_21454[(20)] = inst_21407__$1);

(statearr_21454[(21)] = inst_21408);

return statearr_21454;
})();
if(cljs.core.truth_(inst_21409)){
var statearr_21455_21537 = state_21432__$1;
(statearr_21455_21537[(1)] = (41));

} else {
var statearr_21456_21538 = state_21432__$1;
(statearr_21456_21538[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (33))){
var state_21432__$1 = state_21432;
var statearr_21457_21539 = state_21432__$1;
(statearr_21457_21539[(2)] = false);

(statearr_21457_21539[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (13))){
var inst_21306 = (state_21432[(22)]);
var inst_21310 = cljs.core.chunk_first.call(null,inst_21306);
var inst_21311 = cljs.core.chunk_rest.call(null,inst_21306);
var inst_21312 = cljs.core.count.call(null,inst_21310);
var inst_21293 = inst_21311;
var inst_21294 = inst_21310;
var inst_21295 = inst_21312;
var inst_21296 = (0);
var state_21432__$1 = (function (){var statearr_21458 = state_21432;
(statearr_21458[(7)] = inst_21295);

(statearr_21458[(8)] = inst_21296);

(statearr_21458[(9)] = inst_21293);

(statearr_21458[(10)] = inst_21294);

return statearr_21458;
})();
var statearr_21459_21540 = state_21432__$1;
(statearr_21459_21540[(2)] = null);

(statearr_21459_21540[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (22))){
var inst_21349 = (state_21432[(23)]);
var inst_21354 = (state_21432[(24)]);
var inst_21350 = (state_21432[(25)]);
var inst_21346 = (state_21432[(19)]);
var inst_21349__$1 = (state_21432[(2)]);
var inst_21350__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_21349__$1);
var inst_21351 = (function (){var all_files = inst_21346;
var res_SINGLEQUOTE_ = inst_21349__$1;
var res = inst_21350__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_21349,inst_21354,inst_21350,inst_21346,inst_21349__$1,inst_21350__$1,state_val_21433,c__20519__auto__,map__21278,map__21278__$1,opts,before_jsload,on_jsload,reload_dependents,map__21279,map__21279__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21029_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__21029_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_21349,inst_21354,inst_21350,inst_21346,inst_21349__$1,inst_21350__$1,state_val_21433,c__20519__auto__,map__21278,map__21278__$1,opts,before_jsload,on_jsload,reload_dependents,map__21279,map__21279__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21352 = cljs.core.filter.call(null,inst_21351,inst_21349__$1);
var inst_21353 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_21354__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_21353);
var inst_21355 = cljs.core.not_empty.call(null,inst_21354__$1);
var state_21432__$1 = (function (){var statearr_21460 = state_21432;
(statearr_21460[(23)] = inst_21349__$1);

(statearr_21460[(24)] = inst_21354__$1);

(statearr_21460[(26)] = inst_21352);

(statearr_21460[(25)] = inst_21350__$1);

return statearr_21460;
})();
if(cljs.core.truth_(inst_21355)){
var statearr_21461_21541 = state_21432__$1;
(statearr_21461_21541[(1)] = (23));

} else {
var statearr_21462_21542 = state_21432__$1;
(statearr_21462_21542[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (36))){
var state_21432__$1 = state_21432;
var statearr_21463_21543 = state_21432__$1;
(statearr_21463_21543[(2)] = false);

(statearr_21463_21543[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (41))){
var inst_21407 = (state_21432[(20)]);
var inst_21411 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_21412 = cljs.core.map.call(null,inst_21411,inst_21407);
var inst_21413 = cljs.core.pr_str.call(null,inst_21412);
var inst_21414 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_21413)].join('');
var inst_21415 = figwheel.client.utils.log.call(null,inst_21414);
var state_21432__$1 = state_21432;
var statearr_21464_21544 = state_21432__$1;
(statearr_21464_21544[(2)] = inst_21415);

(statearr_21464_21544[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (43))){
var inst_21408 = (state_21432[(21)]);
var inst_21418 = (state_21432[(2)]);
var inst_21419 = cljs.core.not_empty.call(null,inst_21408);
var state_21432__$1 = (function (){var statearr_21465 = state_21432;
(statearr_21465[(27)] = inst_21418);

return statearr_21465;
})();
if(cljs.core.truth_(inst_21419)){
var statearr_21466_21545 = state_21432__$1;
(statearr_21466_21545[(1)] = (44));

} else {
var statearr_21467_21546 = state_21432__$1;
(statearr_21467_21546[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (29))){
var inst_21349 = (state_21432[(23)]);
var inst_21354 = (state_21432[(24)]);
var inst_21386 = (state_21432[(16)]);
var inst_21352 = (state_21432[(26)]);
var inst_21350 = (state_21432[(25)]);
var inst_21346 = (state_21432[(19)]);
var inst_21382 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_21385 = (function (){var all_files = inst_21346;
var res_SINGLEQUOTE_ = inst_21349;
var res = inst_21350;
var files_not_loaded = inst_21352;
var dependencies_that_loaded = inst_21354;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21349,inst_21354,inst_21386,inst_21352,inst_21350,inst_21346,inst_21382,state_val_21433,c__20519__auto__,map__21278,map__21278__$1,opts,before_jsload,on_jsload,reload_dependents,map__21279,map__21279__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21384){
var map__21468 = p__21384;
var map__21468__$1 = ((((!((map__21468 == null)))?((((map__21468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21468):map__21468);
var namespace = cljs.core.get.call(null,map__21468__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21349,inst_21354,inst_21386,inst_21352,inst_21350,inst_21346,inst_21382,state_val_21433,c__20519__auto__,map__21278,map__21278__$1,opts,before_jsload,on_jsload,reload_dependents,map__21279,map__21279__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21386__$1 = cljs.core.group_by.call(null,inst_21385,inst_21352);
var inst_21388 = (inst_21386__$1 == null);
var inst_21389 = cljs.core.not.call(null,inst_21388);
var state_21432__$1 = (function (){var statearr_21470 = state_21432;
(statearr_21470[(28)] = inst_21382);

(statearr_21470[(16)] = inst_21386__$1);

return statearr_21470;
})();
if(inst_21389){
var statearr_21471_21547 = state_21432__$1;
(statearr_21471_21547[(1)] = (32));

} else {
var statearr_21472_21548 = state_21432__$1;
(statearr_21472_21548[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (44))){
var inst_21408 = (state_21432[(21)]);
var inst_21421 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21408);
var inst_21422 = cljs.core.pr_str.call(null,inst_21421);
var inst_21423 = [cljs.core.str("not required: "),cljs.core.str(inst_21422)].join('');
var inst_21424 = figwheel.client.utils.log.call(null,inst_21423);
var state_21432__$1 = state_21432;
var statearr_21473_21549 = state_21432__$1;
(statearr_21473_21549[(2)] = inst_21424);

(statearr_21473_21549[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (6))){
var inst_21327 = (state_21432[(2)]);
var state_21432__$1 = state_21432;
var statearr_21474_21550 = state_21432__$1;
(statearr_21474_21550[(2)] = inst_21327);

(statearr_21474_21550[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (28))){
var inst_21352 = (state_21432[(26)]);
var inst_21379 = (state_21432[(2)]);
var inst_21380 = cljs.core.not_empty.call(null,inst_21352);
var state_21432__$1 = (function (){var statearr_21475 = state_21432;
(statearr_21475[(29)] = inst_21379);

return statearr_21475;
})();
if(cljs.core.truth_(inst_21380)){
var statearr_21476_21551 = state_21432__$1;
(statearr_21476_21551[(1)] = (29));

} else {
var statearr_21477_21552 = state_21432__$1;
(statearr_21477_21552[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (25))){
var inst_21350 = (state_21432[(25)]);
var inst_21366 = (state_21432[(2)]);
var inst_21367 = cljs.core.not_empty.call(null,inst_21350);
var state_21432__$1 = (function (){var statearr_21478 = state_21432;
(statearr_21478[(30)] = inst_21366);

return statearr_21478;
})();
if(cljs.core.truth_(inst_21367)){
var statearr_21479_21553 = state_21432__$1;
(statearr_21479_21553[(1)] = (26));

} else {
var statearr_21480_21554 = state_21432__$1;
(statearr_21480_21554[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (34))){
var inst_21401 = (state_21432[(2)]);
var state_21432__$1 = state_21432;
if(cljs.core.truth_(inst_21401)){
var statearr_21481_21555 = state_21432__$1;
(statearr_21481_21555[(1)] = (38));

} else {
var statearr_21482_21556 = state_21432__$1;
(statearr_21482_21556[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (17))){
var state_21432__$1 = state_21432;
var statearr_21483_21557 = state_21432__$1;
(statearr_21483_21557[(2)] = recompile_dependents);

(statearr_21483_21557[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (3))){
var state_21432__$1 = state_21432;
var statearr_21484_21558 = state_21432__$1;
(statearr_21484_21558[(2)] = null);

(statearr_21484_21558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (12))){
var inst_21323 = (state_21432[(2)]);
var state_21432__$1 = state_21432;
var statearr_21485_21559 = state_21432__$1;
(statearr_21485_21559[(2)] = inst_21323);

(statearr_21485_21559[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (2))){
var inst_21285 = (state_21432[(13)]);
var inst_21292 = cljs.core.seq.call(null,inst_21285);
var inst_21293 = inst_21292;
var inst_21294 = null;
var inst_21295 = (0);
var inst_21296 = (0);
var state_21432__$1 = (function (){var statearr_21486 = state_21432;
(statearr_21486[(7)] = inst_21295);

(statearr_21486[(8)] = inst_21296);

(statearr_21486[(9)] = inst_21293);

(statearr_21486[(10)] = inst_21294);

return statearr_21486;
})();
var statearr_21487_21560 = state_21432__$1;
(statearr_21487_21560[(2)] = null);

(statearr_21487_21560[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (23))){
var inst_21349 = (state_21432[(23)]);
var inst_21354 = (state_21432[(24)]);
var inst_21352 = (state_21432[(26)]);
var inst_21350 = (state_21432[(25)]);
var inst_21346 = (state_21432[(19)]);
var inst_21357 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_21359 = (function (){var all_files = inst_21346;
var res_SINGLEQUOTE_ = inst_21349;
var res = inst_21350;
var files_not_loaded = inst_21352;
var dependencies_that_loaded = inst_21354;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21349,inst_21354,inst_21352,inst_21350,inst_21346,inst_21357,state_val_21433,c__20519__auto__,map__21278,map__21278__$1,opts,before_jsload,on_jsload,reload_dependents,map__21279,map__21279__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21358){
var map__21488 = p__21358;
var map__21488__$1 = ((((!((map__21488 == null)))?((((map__21488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21488):map__21488);
var request_url = cljs.core.get.call(null,map__21488__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21349,inst_21354,inst_21352,inst_21350,inst_21346,inst_21357,state_val_21433,c__20519__auto__,map__21278,map__21278__$1,opts,before_jsload,on_jsload,reload_dependents,map__21279,map__21279__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21360 = cljs.core.reverse.call(null,inst_21354);
var inst_21361 = cljs.core.map.call(null,inst_21359,inst_21360);
var inst_21362 = cljs.core.pr_str.call(null,inst_21361);
var inst_21363 = figwheel.client.utils.log.call(null,inst_21362);
var state_21432__$1 = (function (){var statearr_21490 = state_21432;
(statearr_21490[(31)] = inst_21357);

return statearr_21490;
})();
var statearr_21491_21561 = state_21432__$1;
(statearr_21491_21561[(2)] = inst_21363);

(statearr_21491_21561[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (35))){
var state_21432__$1 = state_21432;
var statearr_21492_21562 = state_21432__$1;
(statearr_21492_21562[(2)] = true);

(statearr_21492_21562[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (19))){
var inst_21336 = (state_21432[(12)]);
var inst_21342 = figwheel.client.file_reloading.expand_files.call(null,inst_21336);
var state_21432__$1 = state_21432;
var statearr_21493_21563 = state_21432__$1;
(statearr_21493_21563[(2)] = inst_21342);

(statearr_21493_21563[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (11))){
var state_21432__$1 = state_21432;
var statearr_21494_21564 = state_21432__$1;
(statearr_21494_21564[(2)] = null);

(statearr_21494_21564[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (9))){
var inst_21325 = (state_21432[(2)]);
var state_21432__$1 = state_21432;
var statearr_21495_21565 = state_21432__$1;
(statearr_21495_21565[(2)] = inst_21325);

(statearr_21495_21565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (5))){
var inst_21295 = (state_21432[(7)]);
var inst_21296 = (state_21432[(8)]);
var inst_21298 = (inst_21296 < inst_21295);
var inst_21299 = inst_21298;
var state_21432__$1 = state_21432;
if(cljs.core.truth_(inst_21299)){
var statearr_21496_21566 = state_21432__$1;
(statearr_21496_21566[(1)] = (7));

} else {
var statearr_21497_21567 = state_21432__$1;
(statearr_21497_21567[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (14))){
var inst_21306 = (state_21432[(22)]);
var inst_21315 = cljs.core.first.call(null,inst_21306);
var inst_21316 = figwheel.client.file_reloading.eval_body.call(null,inst_21315,opts);
var inst_21317 = cljs.core.next.call(null,inst_21306);
var inst_21293 = inst_21317;
var inst_21294 = null;
var inst_21295 = (0);
var inst_21296 = (0);
var state_21432__$1 = (function (){var statearr_21498 = state_21432;
(statearr_21498[(32)] = inst_21316);

(statearr_21498[(7)] = inst_21295);

(statearr_21498[(8)] = inst_21296);

(statearr_21498[(9)] = inst_21293);

(statearr_21498[(10)] = inst_21294);

return statearr_21498;
})();
var statearr_21499_21568 = state_21432__$1;
(statearr_21499_21568[(2)] = null);

(statearr_21499_21568[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (45))){
var state_21432__$1 = state_21432;
var statearr_21500_21569 = state_21432__$1;
(statearr_21500_21569[(2)] = null);

(statearr_21500_21569[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (26))){
var inst_21349 = (state_21432[(23)]);
var inst_21354 = (state_21432[(24)]);
var inst_21352 = (state_21432[(26)]);
var inst_21350 = (state_21432[(25)]);
var inst_21346 = (state_21432[(19)]);
var inst_21369 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_21371 = (function (){var all_files = inst_21346;
var res_SINGLEQUOTE_ = inst_21349;
var res = inst_21350;
var files_not_loaded = inst_21352;
var dependencies_that_loaded = inst_21354;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21349,inst_21354,inst_21352,inst_21350,inst_21346,inst_21369,state_val_21433,c__20519__auto__,map__21278,map__21278__$1,opts,before_jsload,on_jsload,reload_dependents,map__21279,map__21279__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21370){
var map__21501 = p__21370;
var map__21501__$1 = ((((!((map__21501 == null)))?((((map__21501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21501):map__21501);
var namespace = cljs.core.get.call(null,map__21501__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__21501__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21349,inst_21354,inst_21352,inst_21350,inst_21346,inst_21369,state_val_21433,c__20519__auto__,map__21278,map__21278__$1,opts,before_jsload,on_jsload,reload_dependents,map__21279,map__21279__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21372 = cljs.core.map.call(null,inst_21371,inst_21350);
var inst_21373 = cljs.core.pr_str.call(null,inst_21372);
var inst_21374 = figwheel.client.utils.log.call(null,inst_21373);
var inst_21375 = (function (){var all_files = inst_21346;
var res_SINGLEQUOTE_ = inst_21349;
var res = inst_21350;
var files_not_loaded = inst_21352;
var dependencies_that_loaded = inst_21354;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21349,inst_21354,inst_21352,inst_21350,inst_21346,inst_21369,inst_21371,inst_21372,inst_21373,inst_21374,state_val_21433,c__20519__auto__,map__21278,map__21278__$1,opts,before_jsload,on_jsload,reload_dependents,map__21279,map__21279__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21349,inst_21354,inst_21352,inst_21350,inst_21346,inst_21369,inst_21371,inst_21372,inst_21373,inst_21374,state_val_21433,c__20519__auto__,map__21278,map__21278__$1,opts,before_jsload,on_jsload,reload_dependents,map__21279,map__21279__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21376 = setTimeout(inst_21375,(10));
var state_21432__$1 = (function (){var statearr_21503 = state_21432;
(statearr_21503[(33)] = inst_21369);

(statearr_21503[(34)] = inst_21374);

return statearr_21503;
})();
var statearr_21504_21570 = state_21432__$1;
(statearr_21504_21570[(2)] = inst_21376);

(statearr_21504_21570[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (16))){
var state_21432__$1 = state_21432;
var statearr_21505_21571 = state_21432__$1;
(statearr_21505_21571[(2)] = reload_dependents);

(statearr_21505_21571[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (38))){
var inst_21386 = (state_21432[(16)]);
var inst_21403 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21386);
var state_21432__$1 = state_21432;
var statearr_21506_21572 = state_21432__$1;
(statearr_21506_21572[(2)] = inst_21403);

(statearr_21506_21572[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (30))){
var state_21432__$1 = state_21432;
var statearr_21507_21573 = state_21432__$1;
(statearr_21507_21573[(2)] = null);

(statearr_21507_21573[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (10))){
var inst_21306 = (state_21432[(22)]);
var inst_21308 = cljs.core.chunked_seq_QMARK_.call(null,inst_21306);
var state_21432__$1 = state_21432;
if(inst_21308){
var statearr_21508_21574 = state_21432__$1;
(statearr_21508_21574[(1)] = (13));

} else {
var statearr_21509_21575 = state_21432__$1;
(statearr_21509_21575[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (18))){
var inst_21340 = (state_21432[(2)]);
var state_21432__$1 = state_21432;
if(cljs.core.truth_(inst_21340)){
var statearr_21510_21576 = state_21432__$1;
(statearr_21510_21576[(1)] = (19));

} else {
var statearr_21511_21577 = state_21432__$1;
(statearr_21511_21577[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (42))){
var state_21432__$1 = state_21432;
var statearr_21512_21578 = state_21432__$1;
(statearr_21512_21578[(2)] = null);

(statearr_21512_21578[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (37))){
var inst_21398 = (state_21432[(2)]);
var state_21432__$1 = state_21432;
var statearr_21513_21579 = state_21432__$1;
(statearr_21513_21579[(2)] = inst_21398);

(statearr_21513_21579[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21433 === (8))){
var inst_21293 = (state_21432[(9)]);
var inst_21306 = (state_21432[(22)]);
var inst_21306__$1 = cljs.core.seq.call(null,inst_21293);
var state_21432__$1 = (function (){var statearr_21514 = state_21432;
(statearr_21514[(22)] = inst_21306__$1);

return statearr_21514;
})();
if(inst_21306__$1){
var statearr_21515_21580 = state_21432__$1;
(statearr_21515_21580[(1)] = (10));

} else {
var statearr_21516_21581 = state_21432__$1;
(statearr_21516_21581[(1)] = (11));

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
});})(c__20519__auto__,map__21278,map__21278__$1,opts,before_jsload,on_jsload,reload_dependents,map__21279,map__21279__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20498__auto__,c__20519__auto__,map__21278,map__21278__$1,opts,before_jsload,on_jsload,reload_dependents,map__21279,map__21279__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto____0 = (function (){
var statearr_21520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21520[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto__);

(statearr_21520[(1)] = (1));

return statearr_21520;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto____1 = (function (state_21432){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_21432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e21521){if((e21521 instanceof Object)){
var ex__20502__auto__ = e21521;
var statearr_21522_21582 = state_21432;
(statearr_21522_21582[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21583 = state_21432;
state_21432 = G__21583;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto__ = function(state_21432){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto____1.call(this,state_21432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto__,map__21278,map__21278__$1,opts,before_jsload,on_jsload,reload_dependents,map__21279,map__21279__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20521__auto__ = (function (){var statearr_21523 = f__20520__auto__.call(null);
(statearr_21523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto__);

return statearr_21523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto__,map__21278,map__21278__$1,opts,before_jsload,on_jsload,reload_dependents,map__21279,map__21279__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20519__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__21586,link){
var map__21589 = p__21586;
var map__21589__$1 = ((((!((map__21589 == null)))?((((map__21589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21589):map__21589);
var file = cljs.core.get.call(null,map__21589__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__21589,map__21589__$1,file){
return (function (p1__21584_SHARP_,p2__21585_SHARP_){
if(cljs.core._EQ_.call(null,p1__21584_SHARP_,p2__21585_SHARP_)){
return p1__21584_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__21589,map__21589__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__21595){
var map__21596 = p__21595;
var map__21596__$1 = ((((!((map__21596 == null)))?((((map__21596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21596):map__21596);
var match_length = cljs.core.get.call(null,map__21596__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__21596__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__21591_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__21591_SHARP_);
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
var args21598 = [];
var len__19539__auto___21601 = arguments.length;
var i__19540__auto___21602 = (0);
while(true){
if((i__19540__auto___21602 < len__19539__auto___21601)){
args21598.push((arguments[i__19540__auto___21602]));

var G__21603 = (i__19540__auto___21602 + (1));
i__19540__auto___21602 = G__21603;
continue;
} else {
}
break;
}

var G__21600 = args21598.length;
switch (G__21600) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21598.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__21605_SHARP_,p2__21606_SHARP_){
return cljs.core.assoc.call(null,p1__21605_SHARP_,cljs.core.get.call(null,p2__21606_SHARP_,key),p2__21606_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__21607){
var map__21610 = p__21607;
var map__21610__$1 = ((((!((map__21610 == null)))?((((map__21610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21610):map__21610);
var f_data = map__21610__$1;
var file = cljs.core.get.call(null,map__21610__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__21612,files_msg){
var map__21619 = p__21612;
var map__21619__$1 = ((((!((map__21619 == null)))?((((map__21619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21619):map__21619);
var opts = map__21619__$1;
var on_cssload = cljs.core.get.call(null,map__21619__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__21621_21625 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__21622_21626 = null;
var count__21623_21627 = (0);
var i__21624_21628 = (0);
while(true){
if((i__21624_21628 < count__21623_21627)){
var f_21629 = cljs.core._nth.call(null,chunk__21622_21626,i__21624_21628);
figwheel.client.file_reloading.reload_css_file.call(null,f_21629);

var G__21630 = seq__21621_21625;
var G__21631 = chunk__21622_21626;
var G__21632 = count__21623_21627;
var G__21633 = (i__21624_21628 + (1));
seq__21621_21625 = G__21630;
chunk__21622_21626 = G__21631;
count__21623_21627 = G__21632;
i__21624_21628 = G__21633;
continue;
} else {
var temp__4657__auto___21634 = cljs.core.seq.call(null,seq__21621_21625);
if(temp__4657__auto___21634){
var seq__21621_21635__$1 = temp__4657__auto___21634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21621_21635__$1)){
var c__19275__auto___21636 = cljs.core.chunk_first.call(null,seq__21621_21635__$1);
var G__21637 = cljs.core.chunk_rest.call(null,seq__21621_21635__$1);
var G__21638 = c__19275__auto___21636;
var G__21639 = cljs.core.count.call(null,c__19275__auto___21636);
var G__21640 = (0);
seq__21621_21625 = G__21637;
chunk__21622_21626 = G__21638;
count__21623_21627 = G__21639;
i__21624_21628 = G__21640;
continue;
} else {
var f_21641 = cljs.core.first.call(null,seq__21621_21635__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_21641);

var G__21642 = cljs.core.next.call(null,seq__21621_21635__$1);
var G__21643 = null;
var G__21644 = (0);
var G__21645 = (0);
seq__21621_21625 = G__21642;
chunk__21622_21626 = G__21643;
count__21623_21627 = G__21644;
i__21624_21628 = G__21645;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__21619,map__21619__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__21619,map__21619__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map