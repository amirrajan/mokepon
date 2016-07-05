// Compiled by ClojureScript 1.9.76 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36337){
var map__36362 = p__36337;
var map__36362__$1 = ((((!((map__36362 == null)))?((((map__36362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36362):map__36362);
var m = map__36362__$1;
var n = cljs.core.get.call(null,map__36362__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36362__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36364_36386 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36365_36387 = null;
var count__36366_36388 = (0);
var i__36367_36389 = (0);
while(true){
if((i__36367_36389 < count__36366_36388)){
var f_36390 = cljs.core._nth.call(null,chunk__36365_36387,i__36367_36389);
cljs.core.println.call(null,"  ",f_36390);

var G__36391 = seq__36364_36386;
var G__36392 = chunk__36365_36387;
var G__36393 = count__36366_36388;
var G__36394 = (i__36367_36389 + (1));
seq__36364_36386 = G__36391;
chunk__36365_36387 = G__36392;
count__36366_36388 = G__36393;
i__36367_36389 = G__36394;
continue;
} else {
var temp__4657__auto___36395 = cljs.core.seq.call(null,seq__36364_36386);
if(temp__4657__auto___36395){
var seq__36364_36396__$1 = temp__4657__auto___36395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36364_36396__$1)){
var c__28823__auto___36397 = cljs.core.chunk_first.call(null,seq__36364_36396__$1);
var G__36398 = cljs.core.chunk_rest.call(null,seq__36364_36396__$1);
var G__36399 = c__28823__auto___36397;
var G__36400 = cljs.core.count.call(null,c__28823__auto___36397);
var G__36401 = (0);
seq__36364_36386 = G__36398;
chunk__36365_36387 = G__36399;
count__36366_36388 = G__36400;
i__36367_36389 = G__36401;
continue;
} else {
var f_36402 = cljs.core.first.call(null,seq__36364_36396__$1);
cljs.core.println.call(null,"  ",f_36402);

var G__36403 = cljs.core.next.call(null,seq__36364_36396__$1);
var G__36404 = null;
var G__36405 = (0);
var G__36406 = (0);
seq__36364_36386 = G__36403;
chunk__36365_36387 = G__36404;
count__36366_36388 = G__36405;
i__36367_36389 = G__36406;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36407 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28012__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28012__auto__)){
return or__28012__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36407);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36407)))?cljs.core.second.call(null,arglists_36407):arglists_36407));
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
var seq__36368_36408 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36369_36409 = null;
var count__36370_36410 = (0);
var i__36371_36411 = (0);
while(true){
if((i__36371_36411 < count__36370_36410)){
var vec__36372_36412 = cljs.core._nth.call(null,chunk__36369_36409,i__36371_36411);
var name_36413 = cljs.core.nth.call(null,vec__36372_36412,(0),null);
var map__36375_36414 = cljs.core.nth.call(null,vec__36372_36412,(1),null);
var map__36375_36415__$1 = ((((!((map__36375_36414 == null)))?((((map__36375_36414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36375_36414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36375_36414):map__36375_36414);
var doc_36416 = cljs.core.get.call(null,map__36375_36415__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36417 = cljs.core.get.call(null,map__36375_36415__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36413);

cljs.core.println.call(null," ",arglists_36417);

if(cljs.core.truth_(doc_36416)){
cljs.core.println.call(null," ",doc_36416);
} else {
}

var G__36418 = seq__36368_36408;
var G__36419 = chunk__36369_36409;
var G__36420 = count__36370_36410;
var G__36421 = (i__36371_36411 + (1));
seq__36368_36408 = G__36418;
chunk__36369_36409 = G__36419;
count__36370_36410 = G__36420;
i__36371_36411 = G__36421;
continue;
} else {
var temp__4657__auto___36422 = cljs.core.seq.call(null,seq__36368_36408);
if(temp__4657__auto___36422){
var seq__36368_36423__$1 = temp__4657__auto___36422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36368_36423__$1)){
var c__28823__auto___36424 = cljs.core.chunk_first.call(null,seq__36368_36423__$1);
var G__36425 = cljs.core.chunk_rest.call(null,seq__36368_36423__$1);
var G__36426 = c__28823__auto___36424;
var G__36427 = cljs.core.count.call(null,c__28823__auto___36424);
var G__36428 = (0);
seq__36368_36408 = G__36425;
chunk__36369_36409 = G__36426;
count__36370_36410 = G__36427;
i__36371_36411 = G__36428;
continue;
} else {
var vec__36377_36429 = cljs.core.first.call(null,seq__36368_36423__$1);
var name_36430 = cljs.core.nth.call(null,vec__36377_36429,(0),null);
var map__36380_36431 = cljs.core.nth.call(null,vec__36377_36429,(1),null);
var map__36380_36432__$1 = ((((!((map__36380_36431 == null)))?((((map__36380_36431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36380_36431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36380_36431):map__36380_36431);
var doc_36433 = cljs.core.get.call(null,map__36380_36432__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36434 = cljs.core.get.call(null,map__36380_36432__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36430);

cljs.core.println.call(null," ",arglists_36434);

if(cljs.core.truth_(doc_36433)){
cljs.core.println.call(null," ",doc_36433);
} else {
}

var G__36435 = cljs.core.next.call(null,seq__36368_36423__$1);
var G__36436 = null;
var G__36437 = (0);
var G__36438 = (0);
seq__36368_36408 = G__36435;
chunk__36369_36409 = G__36436;
count__36370_36410 = G__36437;
i__36371_36411 = G__36438;
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

var seq__36382 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36383 = null;
var count__36384 = (0);
var i__36385 = (0);
while(true){
if((i__36385 < count__36384)){
var role = cljs.core._nth.call(null,chunk__36383,i__36385);
var temp__4657__auto___36439__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36439__$1)){
var spec_36440 = temp__4657__auto___36439__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36440));
} else {
}

var G__36441 = seq__36382;
var G__36442 = chunk__36383;
var G__36443 = count__36384;
var G__36444 = (i__36385 + (1));
seq__36382 = G__36441;
chunk__36383 = G__36442;
count__36384 = G__36443;
i__36385 = G__36444;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36382);
if(temp__4657__auto____$1){
var seq__36382__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36382__$1)){
var c__28823__auto__ = cljs.core.chunk_first.call(null,seq__36382__$1);
var G__36445 = cljs.core.chunk_rest.call(null,seq__36382__$1);
var G__36446 = c__28823__auto__;
var G__36447 = cljs.core.count.call(null,c__28823__auto__);
var G__36448 = (0);
seq__36382 = G__36445;
chunk__36383 = G__36446;
count__36384 = G__36447;
i__36385 = G__36448;
continue;
} else {
var role = cljs.core.first.call(null,seq__36382__$1);
var temp__4657__auto___36449__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36449__$2)){
var spec_36450 = temp__4657__auto___36449__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36450));
} else {
}

var G__36451 = cljs.core.next.call(null,seq__36382__$1);
var G__36452 = null;
var G__36453 = (0);
var G__36454 = (0);
seq__36382 = G__36451;
chunk__36383 = G__36452;
count__36384 = G__36453;
i__36385 = G__36454;
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