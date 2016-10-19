// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.tests.mokedex');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('mokepon.tests.core');
goog.require('mokepon.monsters');
goog.require('mokepon.rpg');
goog.require('mokepon.container');
mokepon.tests.mokedex.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),mokepon.tests.core.reset_game], null)], null);
mokepon.tests.mokedex.mokedex_captured_encountered = (function mokepon$tests$mokedex$mokedex_captured_encountered(){
return cljs.test.test_var.call(null,mokepon$tests$mokedex$mokedex_captured_encountered.cljs$lang$var);
});
mokepon.tests.mokedex.mokedex_captured_encountered.cljs$lang$test = (function (){

try{var values__23053__auto___26292 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(0),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"chipu","chipu",516526769)),x__19298__auto__);
})();
var result__23054__auto___26293 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___26292);
if(cljs.core.truth_(result__23054__auto___26293)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(0),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"chipu","chipu",516526769)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___26292),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(0),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"chipu","chipu",516526769)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___26292);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26287){var t__23091__auto___26294 = e26287;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(0),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"chipu","chipu",516526769)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___26294,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto___26295 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(0),new cljs.core.Keyword(null,"encountered","encountered",1052334671));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto___26296 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___26295);
if(cljs.core.truth_(result__23054__auto___26296)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(0),new cljs.core.Keyword(null,"encountered","encountered",1052334671)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___26295),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(0),new cljs.core.Keyword(null,"encountered","encountered",1052334671)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___26295);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26288){var t__23091__auto___26297 = e26288;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(0),new cljs.core.Keyword(null,"encountered","encountered",1052334671)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___26297,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto___26298 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(0),new cljs.core.Keyword(null,"captured","captured",704575240));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto___26299 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___26298);
if(cljs.core.truth_(result__23054__auto___26299)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(0),new cljs.core.Keyword(null,"captured","captured",704575240)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___26298),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(0),new cljs.core.Keyword(null,"captured","captured",704575240)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___26298);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26289){var t__23091__auto___26300 = e26289;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(0),new cljs.core.Keyword(null,"captured","captured",704575240)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___26300,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),(0));

mokepon.container.remove_dead_team_members_BANG_.call(null);

try{var values__23053__auto___26301 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(0),new cljs.core.Keyword(null,"encountered","encountered",1052334671));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto___26302 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___26301);
if(cljs.core.truth_(result__23054__auto___26302)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(0),new cljs.core.Keyword(null,"encountered","encountered",1052334671)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___26301),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(0),new cljs.core.Keyword(null,"encountered","encountered",1052334671)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___26301);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26290){var t__23091__auto___26303 = e26290;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(0),new cljs.core.Keyword(null,"encountered","encountered",1052334671)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___26303,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(0),new cljs.core.Keyword(null,"captured","captured",704575240));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(0),new cljs.core.Keyword(null,"captured","captured",704575240)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(0),new cljs.core.Keyword(null,"captured","captured",704575240)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23054__auto__;
}catch (e26291){var t__23091__auto__ = e26291;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(0),new cljs.core.Keyword(null,"captured","captured",704575240)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.mokedex.mokedex_captured_encountered.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.mokedex.mokedex_captured_encountered;},new cljs.core.Symbol("mokepon.tests.mokedex","mokedex-captured-encountered","mokepon.tests.mokedex/mokedex-captured-encountered",1162003666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.mokedex","mokepon.tests.mokedex",-1359366060,null),new cljs.core.Symbol(null,"mokedex-captured-encountered","mokedex-captured-encountered",-1623851995,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/mokedex.cljs",38,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.mokedex.mokedex_captured_encountered)?mokepon.tests.mokedex.mokedex_captured_encountered.cljs$lang$test:null)]));
mokepon.tests.mokedex.mokedex_battle_encountered = (function mokepon$tests$mokedex$mokedex_battle_encountered(){
return cljs.test.test_var.call(null,mokepon$tests$mokedex$mokedex_battle_encountered.cljs$lang$var);
});
mokepon.tests.mokedex.mokedex_battle_encountered.cljs$lang$test = (function (){

mokepon.container.set_battle_BANG_.call(null,new cljs.core.Keyword(null,"chipu","chipu",516526769),mokepon.monsters.sulbabaur);

try{var values__23053__auto___26306 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(2),new cljs.core.Keyword(null,"encountered","encountered",1052334671));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto___26307 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___26306);
if(cljs.core.truth_(result__23054__auto___26307)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(2),new cljs.core.Keyword(null,"encountered","encountered",1052334671)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___26306),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(2),new cljs.core.Keyword(null,"encountered","encountered",1052334671)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___26306);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26304){var t__23091__auto___26308 = e26304;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(2),new cljs.core.Keyword(null,"encountered","encountered",1052334671)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___26308,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(2),new cljs.core.Keyword(null,"captured","captured",704575240));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,false),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(2),new cljs.core.Keyword(null,"captured","captured",704575240)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(2),new cljs.core.Keyword(null,"captured","captured",704575240)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23054__auto__;
}catch (e26305){var t__23091__auto__ = e26305;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(2),new cljs.core.Keyword(null,"captured","captured",704575240)),false),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.mokedex.mokedex_battle_encountered.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.mokedex.mokedex_battle_encountered;},new cljs.core.Symbol("mokepon.tests.mokedex","mokedex-battle-encountered","mokepon.tests.mokedex/mokedex-battle-encountered",1218676980,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.mokedex","mokepon.tests.mokedex",-1359366060,null),new cljs.core.Symbol(null,"mokedex-battle-encountered","mokedex-battle-encountered",-1565085701,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/mokedex.cljs",36,1,38,38,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.mokedex.mokedex_battle_encountered)?mokepon.tests.mokedex.mokedex_battle_encountered.cljs$lang$test:null)]));
mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex = (function mokepon$tests$mokedex$capturing_mokepon_show_up_in_mokedex(){
return cljs.test.test_var.call(null,mokepon$tests$mokedex$capturing_mokepon_show_up_in_mokedex.cljs$lang$var);
});
mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex.cljs$lang$test = (function (){

mokepon.tests.core.set_cash.call(null,(20));

mokepon.container.set_battle_BANG_.call(null,new cljs.core.Keyword(null,"chipu","chipu",516526769),mokepon.monsters.sulbabaur);

mokepon.container.buy_item_BANG_.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696)], null),(100000000));

mokepon.container.throw_mokebox_BANG_.call(null);

try{var values__23053__auto___26312 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(2),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),x__19298__auto__);
})();
var result__23054__auto___26313 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___26312);
if(cljs.core.truth_(result__23054__auto___26313)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(2),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___26312),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(2),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___26312);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26309){var t__23091__auto___26314 = e26309;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(2),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___26314,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto___26315 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(2),new cljs.core.Keyword(null,"encountered","encountered",1052334671));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto___26316 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___26315);
if(cljs.core.truth_(result__23054__auto___26316)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(2),new cljs.core.Keyword(null,"encountered","encountered",1052334671)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___26315),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(2),new cljs.core.Keyword(null,"encountered","encountered",1052334671)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___26315);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26310){var t__23091__auto___26317 = e26310;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(2),new cljs.core.Keyword(null,"encountered","encountered",1052334671)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___26317,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(2),new cljs.core.Keyword(null,"captured","captured",704575240));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(2),new cljs.core.Keyword(null,"captured","captured",704575240)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(2),new cljs.core.Keyword(null,"captured","captured",704575240)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23054__auto__;
}catch (e26311){var t__23091__auto__ = e26311;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730),(2),new cljs.core.Keyword(null,"captured","captured",704575240)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex;},new cljs.core.Symbol("mokepon.tests.mokedex","capturing-mokepon-show-up-in-mokedex","mokepon.tests.mokedex/capturing-mokepon-show-up-in-mokedex",-1054936520,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.mokedex","mokepon.tests.mokedex",-1359366060,null),new cljs.core.Symbol(null,"capturing-mokepon-show-up-in-mokedex","capturing-mokepon-show-up-in-mokedex",-1626755787,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/mokedex.cljs",46,1,49,49,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex)?mokepon.tests.mokedex.capturing_mokepon_show_up_in_mokedex.cljs$lang$test:null)]));

//# sourceMappingURL=mokedex.js.map