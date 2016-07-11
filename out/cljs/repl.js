// Compiled by ClojureScript 1.9.76 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38639){
var map__38664 = p__38639;
var map__38664__$1 = ((((!((map__38664 == null)))?((((map__38664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38664):map__38664);
var m = map__38664__$1;
var n = cljs.core.get.call(null,map__38664__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38664__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38666_38688 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38667_38689 = null;
var count__38668_38690 = (0);
var i__38669_38691 = (0);
while(true){
if((i__38669_38691 < count__38668_38690)){
var f_38692 = cljs.core._nth.call(null,chunk__38667_38689,i__38669_38691);
cljs.core.println.call(null,"  ",f_38692);

var G__38693 = seq__38666_38688;
var G__38694 = chunk__38667_38689;
var G__38695 = count__38668_38690;
var G__38696 = (i__38669_38691 + (1));
seq__38666_38688 = G__38693;
chunk__38667_38689 = G__38694;
count__38668_38690 = G__38695;
i__38669_38691 = G__38696;
continue;
} else {
var temp__4657__auto___38697 = cljs.core.seq.call(null,seq__38666_38688);
if(temp__4657__auto___38697){
var seq__38666_38698__$1 = temp__4657__auto___38697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38666_38698__$1)){
var c__28823__auto___38699 = cljs.core.chunk_first.call(null,seq__38666_38698__$1);
var G__38700 = cljs.core.chunk_rest.call(null,seq__38666_38698__$1);
var G__38701 = c__28823__auto___38699;
var G__38702 = cljs.core.count.call(null,c__28823__auto___38699);
var G__38703 = (0);
seq__38666_38688 = G__38700;
chunk__38667_38689 = G__38701;
count__38668_38690 = G__38702;
i__38669_38691 = G__38703;
continue;
} else {
var f_38704 = cljs.core.first.call(null,seq__38666_38698__$1);
cljs.core.println.call(null,"  ",f_38704);

var G__38705 = cljs.core.next.call(null,seq__38666_38698__$1);
var G__38706 = null;
var G__38707 = (0);
var G__38708 = (0);
seq__38666_38688 = G__38705;
chunk__38667_38689 = G__38706;
count__38668_38690 = G__38707;
i__38669_38691 = G__38708;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38709 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28012__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28012__auto__)){
return or__28012__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38709);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38709)))?cljs.core.second.call(null,arglists_38709):arglists_38709));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38670_38710 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38671_38711 = null;
var count__38672_38712 = (0);
var i__38673_38713 = (0);
while(true){
if((i__38673_38713 < count__38672_38712)){
var vec__38674_38714 = cljs.core._nth.call(null,chunk__38671_38711,i__38673_38713);
var name_38715 = cljs.core.nth.call(null,vec__38674_38714,(0),null);
var map__38677_38716 = cljs.core.nth.call(null,vec__38674_38714,(1),null);
var map__38677_38717__$1 = ((((!((map__38677_38716 == null)))?((((map__38677_38716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38677_38716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38677_38716):map__38677_38716);
var doc_38718 = cljs.core.get.call(null,map__38677_38717__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38719 = cljs.core.get.call(null,map__38677_38717__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38715);

cljs.core.println.call(null," ",arglists_38719);

if(cljs.core.truth_(doc_38718)){
cljs.core.println.call(null," ",doc_38718);
} else {
}

var G__38720 = seq__38670_38710;
var G__38721 = chunk__38671_38711;
var G__38722 = count__38672_38712;
var G__38723 = (i__38673_38713 + (1));
seq__38670_38710 = G__38720;
chunk__38671_38711 = G__38721;
count__38672_38712 = G__38722;
i__38673_38713 = G__38723;
continue;
} else {
var temp__4657__auto___38724 = cljs.core.seq.call(null,seq__38670_38710);
if(temp__4657__auto___38724){
var seq__38670_38725__$1 = temp__4657__auto___38724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38670_38725__$1)){
var c__28823__auto___38726 = cljs.core.chunk_first.call(null,seq__38670_38725__$1);
var G__38727 = cljs.core.chunk_rest.call(null,seq__38670_38725__$1);
var G__38728 = c__28823__auto___38726;
var G__38729 = cljs.core.count.call(null,c__28823__auto___38726);
var G__38730 = (0);
seq__38670_38710 = G__38727;
chunk__38671_38711 = G__38728;
count__38672_38712 = G__38729;
i__38673_38713 = G__38730;
continue;
} else {
var vec__38679_38731 = cljs.core.first.call(null,seq__38670_38725__$1);
var name_38732 = cljs.core.nth.call(null,vec__38679_38731,(0),null);
var map__38682_38733 = cljs.core.nth.call(null,vec__38679_38731,(1),null);
var map__38682_38734__$1 = ((((!((map__38682_38733 == null)))?((((map__38682_38733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38682_38733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38682_38733):map__38682_38733);
var doc_38735 = cljs.core.get.call(null,map__38682_38734__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38736 = cljs.core.get.call(null,map__38682_38734__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38732);

cljs.core.println.call(null," ",arglists_38736);

if(cljs.core.truth_(doc_38735)){
cljs.core.println.call(null," ",doc_38735);
} else {
}

var G__38737 = cljs.core.next.call(null,seq__38670_38725__$1);
var G__38738 = null;
var G__38739 = (0);
var G__38740 = (0);
seq__38670_38710 = G__38737;
chunk__38671_38711 = G__38738;
count__38672_38712 = G__38739;
i__38673_38713 = G__38740;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__38684 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38685 = null;
var count__38686 = (0);
var i__38687 = (0);
while(true){
if((i__38687 < count__38686)){
var role = cljs.core._nth.call(null,chunk__38685,i__38687);
var temp__4657__auto___38741__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38741__$1)){
var spec_38742 = temp__4657__auto___38741__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_38742));
} else {
}

var G__38743 = seq__38684;
var G__38744 = chunk__38685;
var G__38745 = count__38686;
var G__38746 = (i__38687 + (1));
seq__38684 = G__38743;
chunk__38685 = G__38744;
count__38686 = G__38745;
i__38687 = G__38746;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__38684);
if(temp__4657__auto____$1){
var seq__38684__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38684__$1)){
var c__28823__auto__ = cljs.core.chunk_first.call(null,seq__38684__$1);
var G__38747 = cljs.core.chunk_rest.call(null,seq__38684__$1);
var G__38748 = c__28823__auto__;
var G__38749 = cljs.core.count.call(null,c__28823__auto__);
var G__38750 = (0);
seq__38684 = G__38747;
chunk__38685 = G__38748;
count__38686 = G__38749;
i__38687 = G__38750;
continue;
} else {
var role = cljs.core.first.call(null,seq__38684__$1);
var temp__4657__auto___38751__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38751__$2)){
var spec_38752 = temp__4657__auto___38751__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_38752));
} else {
}

var G__38753 = cljs.core.next.call(null,seq__38684__$1);
var G__38754 = null;
var G__38755 = (0);
var G__38756 = (0);
seq__38684 = G__38753;
chunk__38685 = G__38754;
count__38686 = G__38755;
i__38687 = G__38756;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map