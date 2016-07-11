// Compiled by ClojureScript 1.9.76 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31131){
var map__31156 = p__31131;
var map__31156__$1 = ((((!((map__31156 == null)))?((((map__31156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31156):map__31156);
var m = map__31156__$1;
var n = cljs.core.get.call(null,map__31156__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31156__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__31158_31180 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31159_31181 = null;
var count__31160_31182 = (0);
var i__31161_31183 = (0);
while(true){
if((i__31161_31183 < count__31160_31182)){
var f_31184 = cljs.core._nth.call(null,chunk__31159_31181,i__31161_31183);
cljs.core.println.call(null,"  ",f_31184);

var G__31185 = seq__31158_31180;
var G__31186 = chunk__31159_31181;
var G__31187 = count__31160_31182;
var G__31188 = (i__31161_31183 + (1));
seq__31158_31180 = G__31185;
chunk__31159_31181 = G__31186;
count__31160_31182 = G__31187;
i__31161_31183 = G__31188;
continue;
} else {
var temp__4657__auto___31189 = cljs.core.seq.call(null,seq__31158_31180);
if(temp__4657__auto___31189){
var seq__31158_31190__$1 = temp__4657__auto___31189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31158_31190__$1)){
var c__19275__auto___31191 = cljs.core.chunk_first.call(null,seq__31158_31190__$1);
var G__31192 = cljs.core.chunk_rest.call(null,seq__31158_31190__$1);
var G__31193 = c__19275__auto___31191;
var G__31194 = cljs.core.count.call(null,c__19275__auto___31191);
var G__31195 = (0);
seq__31158_31180 = G__31192;
chunk__31159_31181 = G__31193;
count__31160_31182 = G__31194;
i__31161_31183 = G__31195;
continue;
} else {
var f_31196 = cljs.core.first.call(null,seq__31158_31190__$1);
cljs.core.println.call(null,"  ",f_31196);

var G__31197 = cljs.core.next.call(null,seq__31158_31190__$1);
var G__31198 = null;
var G__31199 = (0);
var G__31200 = (0);
seq__31158_31180 = G__31197;
chunk__31159_31181 = G__31198;
count__31160_31182 = G__31199;
i__31161_31183 = G__31200;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31201 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18464__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31201);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31201)))?cljs.core.second.call(null,arglists_31201):arglists_31201));
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
var seq__31162_31202 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31163_31203 = null;
var count__31164_31204 = (0);
var i__31165_31205 = (0);
while(true){
if((i__31165_31205 < count__31164_31204)){
var vec__31166_31206 = cljs.core._nth.call(null,chunk__31163_31203,i__31165_31205);
var name_31207 = cljs.core.nth.call(null,vec__31166_31206,(0),null);
var map__31169_31208 = cljs.core.nth.call(null,vec__31166_31206,(1),null);
var map__31169_31209__$1 = ((((!((map__31169_31208 == null)))?((((map__31169_31208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31169_31208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31169_31208):map__31169_31208);
var doc_31210 = cljs.core.get.call(null,map__31169_31209__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31211 = cljs.core.get.call(null,map__31169_31209__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31207);

cljs.core.println.call(null," ",arglists_31211);

if(cljs.core.truth_(doc_31210)){
cljs.core.println.call(null," ",doc_31210);
} else {
}

var G__31212 = seq__31162_31202;
var G__31213 = chunk__31163_31203;
var G__31214 = count__31164_31204;
var G__31215 = (i__31165_31205 + (1));
seq__31162_31202 = G__31212;
chunk__31163_31203 = G__31213;
count__31164_31204 = G__31214;
i__31165_31205 = G__31215;
continue;
} else {
var temp__4657__auto___31216 = cljs.core.seq.call(null,seq__31162_31202);
if(temp__4657__auto___31216){
var seq__31162_31217__$1 = temp__4657__auto___31216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31162_31217__$1)){
var c__19275__auto___31218 = cljs.core.chunk_first.call(null,seq__31162_31217__$1);
var G__31219 = cljs.core.chunk_rest.call(null,seq__31162_31217__$1);
var G__31220 = c__19275__auto___31218;
var G__31221 = cljs.core.count.call(null,c__19275__auto___31218);
var G__31222 = (0);
seq__31162_31202 = G__31219;
chunk__31163_31203 = G__31220;
count__31164_31204 = G__31221;
i__31165_31205 = G__31222;
continue;
} else {
var vec__31171_31223 = cljs.core.first.call(null,seq__31162_31217__$1);
var name_31224 = cljs.core.nth.call(null,vec__31171_31223,(0),null);
var map__31174_31225 = cljs.core.nth.call(null,vec__31171_31223,(1),null);
var map__31174_31226__$1 = ((((!((map__31174_31225 == null)))?((((map__31174_31225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31174_31225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31174_31225):map__31174_31225);
var doc_31227 = cljs.core.get.call(null,map__31174_31226__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31228 = cljs.core.get.call(null,map__31174_31226__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31224);

cljs.core.println.call(null," ",arglists_31228);

if(cljs.core.truth_(doc_31227)){
cljs.core.println.call(null," ",doc_31227);
} else {
}

var G__31229 = cljs.core.next.call(null,seq__31162_31217__$1);
var G__31230 = null;
var G__31231 = (0);
var G__31232 = (0);
seq__31162_31202 = G__31229;
chunk__31163_31203 = G__31230;
count__31164_31204 = G__31231;
i__31165_31205 = G__31232;
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

var seq__31176 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31177 = null;
var count__31178 = (0);
var i__31179 = (0);
while(true){
if((i__31179 < count__31178)){
var role = cljs.core._nth.call(null,chunk__31177,i__31179);
var temp__4657__auto___31233__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___31233__$1)){
var spec_31234 = temp__4657__auto___31233__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_31234));
} else {
}

var G__31235 = seq__31176;
var G__31236 = chunk__31177;
var G__31237 = count__31178;
var G__31238 = (i__31179 + (1));
seq__31176 = G__31235;
chunk__31177 = G__31236;
count__31178 = G__31237;
i__31179 = G__31238;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__31176);
if(temp__4657__auto____$1){
var seq__31176__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31176__$1)){
var c__19275__auto__ = cljs.core.chunk_first.call(null,seq__31176__$1);
var G__31239 = cljs.core.chunk_rest.call(null,seq__31176__$1);
var G__31240 = c__19275__auto__;
var G__31241 = cljs.core.count.call(null,c__19275__auto__);
var G__31242 = (0);
seq__31176 = G__31239;
chunk__31177 = G__31240;
count__31178 = G__31241;
i__31179 = G__31242;
continue;
} else {
var role = cljs.core.first.call(null,seq__31176__$1);
var temp__4657__auto___31243__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___31243__$2)){
var spec_31244 = temp__4657__auto___31243__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_31244));
} else {
}

var G__31245 = cljs.core.next.call(null,seq__31176__$1);
var G__31246 = null;
var G__31247 = (0);
var G__31248 = (0);
seq__31176 = G__31245;
chunk__31177 = G__31246;
count__31178 = G__31247;
i__31179 = G__31248;
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