// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.tests.home');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('mokepon.tests.core');
goog.require('mokepon.monsters');
goog.require('mokepon.rpg');
goog.require('mokepon.container');
mokepon.tests.home.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),mokepon.tests.core.reset_game], null)], null);
mokepon.tests.home.healing_team = (function mokepon$tests$home$healing_team(){
return cljs.test.test_var.call(null,mokepon$tests$home$healing_team.cljs$lang$var);
});
mokepon.tests.home.healing_team.cljs$lang$test = (function (){

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(10),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(50)], null),new cljs.core.Keyword(null,"deogude","deogude",1813060744),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(5),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(100)], null)], null));

mokepon.container.sleep_at_home_BANG_.call(null);

mokepon.tests.core.has_play_by_play.call(null,"Slept. Team has been healed.");

try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699));
return cljs.core._conj.call(null,(function (){var x__19298__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(50),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(50)], null),new cljs.core.Keyword(null,"deogude","deogude",1813060744),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(100),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(100)], null)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(50),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(50)], null),new cljs.core.Keyword(null,"deogude","deogude",1813060744),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(100),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(100)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(50),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(50)], null),new cljs.core.Keyword(null,"deogude","deogude",1813060744),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(100),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(100)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23054__auto__;
}catch (e26340){var t__23091__auto__ = e26340;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(50),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(50)], null),new cljs.core.Keyword(null,"deogude","deogude",1813060744),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(100),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(100)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.home.healing_team.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.home.healing_team;},new cljs.core.Symbol("mokepon.tests.home","healing-team","mokepon.tests.home/healing-team",1549010046,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.home","mokepon.tests.home",-752638978,null),new cljs.core.Symbol(null,"healing-team","healing-team",260962679,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/home.cljs",22,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.home.healing_team)?mokepon.tests.home.healing_team.cljs$lang$test:null)]));

//# sourceMappingURL=home.js.map