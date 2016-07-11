// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.tests');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('mokepon.monsters');
goog.require('mokepon.rpg');
goog.require('mokepon.items');
goog.require('mokepon.container');
mokepon.tests.state = (function mokepon$tests$state(){
return cljs.core.deref.call(null,mokepon.container.app_state.call(null));
});
mokepon.tests.log = (function mokepon$tests$log(o){
return console.log(cljs.core.clj__GT_js.call(null,o));
});
mokepon.tests.reset_game = (function mokepon$tests$reset_game(){
cljs.core.reset_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.new_game);

return mokepon.container.take_chipu_BANG_.call(null);
});
mokepon.tests.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),mokepon.tests.reset_game], null)], null);
mokepon.tests.make_enemy_attack_ready = (function mokepon$tests$make_enemy_attack_ready(){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"at","at",1476951349)], null),mokepon.rpg.active_turn_threshold);
});
mokepon.tests.set_cash = (function mokepon$tests$set_cash(amount){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"cash","cash",181122222),amount);
});
mokepon.tests.has_play_by_play = (function mokepon$tests$has_play_by_play(message){
try{var values__22451__auto__ = (function (){var x__19298__auto__ = cljs.core.PersistentHashSet.fromArray([message], true);
return cljs.core._conj.call(null,(function (){var x__19298__auto____$1 = new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732).cljs$core$IFn$_invoke$arity$1(mokepon.tests.state.call(null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__22452__auto__ = cljs.core.apply.call(null,cljs.core.some,values__22451__auto__);
if(cljs.core.truth_(result__22452__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"message","message",1234475525,null),null], null), null),cljs.core.list(new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),cljs.core.list(new cljs.core.Symbol(null,"state","state",-348086572,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.some,values__22451__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"message","message",1234475525,null),null], null), null),cljs.core.list(new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),cljs.core.list(new cljs.core.Symbol(null,"state","state",-348086572,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"some","some",-310548046,null),values__22451__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22452__auto__;
}catch (e22705){var t__22489__auto__ = e22705;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"message","message",1234475525,null),null], null), null),cljs.core.list(new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),cljs.core.list(new cljs.core.Symbol(null,"state","state",-348086572,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
mokepon.tests.get_state = (function mokepon$tests$get_state(var_args){
var args__19546__auto__ = [];
var len__19539__auto___22707 = arguments.length;
var i__19540__auto___22708 = (0);
while(true){
if((i__19540__auto___22708 < len__19539__auto___22707)){
args__19546__auto__.push((arguments[i__19540__auto___22708]));

var G__22709 = (i__19540__auto___22708 + (1));
i__19540__auto___22708 = G__22709;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return cljs.core.get_in.call(null,mokepon.tests.state.call(null),path);
});

mokepon.tests.get_state.cljs$lang$maxFixedArity = (0);

mokepon.tests.get_state.cljs$lang$applyTo = (function (seq22706){
return mokepon.tests.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22706));
});

mokepon.tests.log_state = (function mokepon$tests$log_state(var_args){
var args__19546__auto__ = [];
var len__19539__auto___22711 = arguments.length;
var i__19540__auto___22712 = (0);
while(true){
if((i__19540__auto___22712 < len__19539__auto___22711)){
args__19546__auto__.push((arguments[i__19540__auto___22712]));

var G__22713 = (i__19540__auto___22712 + (1));
i__19540__auto___22712 = G__22713;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.tests.log_state.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.tests.log_state.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return mokepon.tests.log.call(null,cljs.core.apply.call(null,mokepon.tests.get_state,path));
});

mokepon.tests.log_state.cljs$lang$maxFixedArity = (0);

mokepon.tests.log_state.cljs$lang$applyTo = (function (seq22710){
return mokepon.tests.log_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22710));
});

mokepon.tests.being_attacked = (function mokepon$tests$being_attacked(){
return cljs.test.test_var.call(null,mokepon$tests$being_attacked.cljs$lang$var);
});
mokepon.tests.being_attacked.cljs$lang$test = (function (){

mokepon.container.set_battle_BANG_.call(null,new cljs.core.Keyword(null,"chipu","chipu",516526769),mokepon.monsters.sulbabaur);

mokepon.tests.has_play_by_play.call(null,"It has begun! Chipu vs Sulbabaur!");

mokepon.tests.make_enemy_attack_ready.call(null);

mokepon.container.tick_battle_core_BANG_.call(null);

try{var values__22451__auto__ = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(mokepon.container.chosen_monster.call(null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(40)),x__19298__auto__);
})();
var result__22452__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto__);
if(cljs.core.truth_(result__22452__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"hp","hp",-1541237831),cljs.core.list(new cljs.core.Symbol("tnr","chosen-monster","tnr/chosen-monster",1410479290,null))),(40)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"hp","hp",-1541237831),cljs.core.list(new cljs.core.Symbol("tnr","chosen-monster","tnr/chosen-monster",1410479290,null))),(40)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22452__auto__;
}catch (e22714){var t__22489__auto__ = e22714;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"hp","hp",-1541237831),cljs.core.list(new cljs.core.Symbol("tnr","chosen-monster","tnr/chosen-monster",1410479290,null))),(40)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.being_attacked.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.being_attacked;},new cljs.core.Symbol("mokepon.tests","being-attacked","mokepon.tests/being-attacked",2024292635,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"being-attacked","being-attacked",-240715179,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",24,1,36,36,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.being_attacked)?mokepon.tests.being_attacked.cljs$lang$test:null)]));
mokepon.tests.being_killed = (function mokepon$tests$being_killed(){
return cljs.test.test_var.call(null,mokepon$tests$being_killed.cljs$lang$var);
});
mokepon.tests.being_killed.cljs$lang$test = (function (){

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null),mokepon.monsters.sulbabaur);

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),(0));

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),(0));

mokepon.container.remove_dead_team_members_BANG_.call(null);

try{var values__22451__auto__ = (function (){var x__19298__auto__ = mokepon.container.team_count.call(null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__22452__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto__);
if(cljs.core.truth_(result__22452__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","team-count","tnr/team-count",2125883243,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","team-count","tnr/team-count",2125883243,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22452__auto__;
}catch (e22715){var t__22489__auto__ = e22715;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","team-count","tnr/team-count",2125883243,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.being_killed.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.being_killed;},new cljs.core.Symbol("mokepon.tests","being-killed","mokepon.tests/being-killed",935313140,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"being-killed","being-killed",-2004338758,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",22,1,44,44,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.being_killed)?mokepon.tests.being_killed.cljs$lang$test:null)]));
mokepon.tests.healing_team = (function mokepon$tests$healing_team(){
return cljs.test.test_var.call(null,mokepon$tests$healing_team.cljs$lang$var);
});
mokepon.tests.healing_team.cljs$lang$test = (function (){

try{var values__22451__auto__ = (function (){var x__19298__auto__ = mokepon.rpg.heal_team.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(10),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(50)], null),new cljs.core.Keyword(null,"deogude","deogude",1813060744),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(5),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(100)], null)], null));
return cljs.core._conj.call(null,(function (){var x__19298__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(50),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(50)], null),new cljs.core.Keyword(null,"deogude","deogude",1813060744),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(100),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(100)], null)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__22452__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto__);
if(cljs.core.truth_(result__22452__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","heal-team","rpg/heal-team",-1158106545,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(10),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(50)], null),new cljs.core.Keyword(null,"deogude","deogude",1813060744),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(5),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(100)], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(50),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(50)], null),new cljs.core.Keyword(null,"deogude","deogude",1813060744),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(100),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(100)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","heal-team","rpg/heal-team",-1158106545,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(10),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(50)], null),new cljs.core.Keyword(null,"deogude","deogude",1813060744),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(5),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(100)], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(50),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(50)], null),new cljs.core.Keyword(null,"deogude","deogude",1813060744),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(100),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(100)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22452__auto__;
}catch (e22716){var t__22489__auto__ = e22716;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","heal-team","rpg/heal-team",-1158106545,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(10),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(50)], null),new cljs.core.Keyword(null,"deogude","deogude",1813060744),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(5),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(100)], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(50),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(50)], null),new cljs.core.Keyword(null,"deogude","deogude",1813060744),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(100),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(100)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.healing_team.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.healing_team;},new cljs.core.Symbol("mokepon.tests","healing-team","mokepon.tests/healing-team",-1996525511,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"healing-team","healing-team",260962679,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",22,1,57,57,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.healing_team)?mokepon.tests.healing_team.cljs$lang$test:null)]));
mokepon.tests.capturing_wild_mokepon = (function mokepon$tests$capturing_wild_mokepon(){
return cljs.test.test_var.call(null,mokepon$tests$capturing_wild_mokepon.cljs$lang$var);
});
mokepon.tests.capturing_wild_mokepon.cljs$lang$test = (function (){

mokepon.tests.set_cash.call(null,(20));

mokepon.container.set_battle_BANG_.call(null,new cljs.core.Keyword(null,"chipu","chipu",516526769),mokepon.monsters.sulbabaur);

try{var values__22451__auto___22724 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__22452__auto___22725 = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto___22724);
if(cljs.core.truth_(result__22452__auto___22725)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto___22724),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto___22724);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e22717){var t__22489__auto___22726 = e22717;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto___22726,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.container.throw_mokebox_BANG_.call(null);

try{var values__22451__auto___22727 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__22452__auto___22728 = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto___22727);
if(cljs.core.truth_(result__22452__auto___22728)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto___22727),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto___22727);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e22718){var t__22489__auto___22729 = e22718;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto___22729,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.container.buy_item_BANG_.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));

mokepon.container.buy_item_BANG_.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));

try{var values__22451__auto___22730 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),x__19298__auto__);
})();
var result__22452__auto___22731 = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto___22730);
if(cljs.core.truth_(result__22452__auto___22731)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto___22730),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto___22730);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e22719){var t__22489__auto___22732 = e22719;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto___22732,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.container.throw_mokebox_BANG_.call(null);

try{var values__22451__auto___22733 = (function (){var x__19298__auto__ = mokepon.tests.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__19298__auto__);
})();
var result__22452__auto___22734 = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto___22733);
if(cljs.core.truth_(result__22452__auto___22734)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto___22733),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto___22733);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e22720){var t__22489__auto___22735 = e22720;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),null),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto___22735,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22451__auto___22736 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),x__19298__auto__);
})();
var result__22452__auto___22737 = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto___22736);
if(cljs.core.truth_(result__22452__auto___22737)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto___22736),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto___22736);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e22721){var t__22489__auto___22738 = e22721;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto___22738,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696)], null),(100000000));

mokepon.container.throw_mokebox_BANG_.call(null);

try{var values__22451__auto___22739 = (function (){var x__19298__auto__ = mokepon.tests.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014));
return cljs.core._conj.call(null,(function (){var x__19298__auto____$1 = cljs.core.dissoc.call(null,mokepon.tests.get_state.call(null,new cljs.core.Keyword(null,"battling","battling",-129800115)),new cljs.core.Keyword(null,"captured","captured",704575240));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__22452__auto___22740 = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto___22739);
if(cljs.core.truth_(result__22452__auto___22740)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115)),new cljs.core.Keyword(null,"captured","captured",704575240))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto___22739),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115)),new cljs.core.Keyword(null,"captured","captured",704575240))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto___22739);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e22722){var t__22489__auto___22741 = e22722;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115)),new cljs.core.Keyword(null,"captured","captured",704575240))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto___22741,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22451__auto__ = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__22452__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto__);
if(cljs.core.truth_(result__22452__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22452__auto__;
}catch (e22723){var t__22489__auto__ = e22723;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.capturing_wild_mokepon.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.capturing_wild_mokepon;},new cljs.core.Symbol("mokepon.tests","capturing-wild-mokepon","mokepon.tests/capturing-wild-mokepon",-1766279940,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"capturing-wild-mokepon","capturing-wild-mokepon",228998406,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",32,1,65,65,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.capturing_wild_mokepon)?mokepon.tests.capturing_wild_mokepon.cljs$lang$test:null)]));
mokepon.tests.battle_is_over_if_mokepon_is_captured = (function mokepon$tests$battle_is_over_if_mokepon_is_captured(){
return cljs.test.test_var.call(null,mokepon$tests$battle_is_over_if_mokepon_is_captured.cljs$lang$var);
});
mokepon.tests.battle_is_over_if_mokepon_is_captured.cljs$lang$test = (function (){

mokepon.container.buy_item_BANG_.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));

mokepon.container.set_battle_BANG_.call(null,new cljs.core.Keyword(null,"chipu","chipu",516526769),mokepon.monsters.sulbabaur);

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696)], null),(100000000));

mokepon.container.throw_mokebox_BANG_.call(null);

try{var values__22451__auto__ = (function (){var x__19298__auto__ = mokepon.rpg.battle_over_QMARK_.call(null,mokepon.tests.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769)),mokepon.tests.get_state.call(null,new cljs.core.Keyword(null,"battling","battling",-129800115)));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__22452__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto__);
if(cljs.core.truth_(result__22452__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","battle-over?","rpg/battle-over?",498853509,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769)),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115))),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","battle-over?","rpg/battle-over?",498853509,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769)),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115))),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22452__auto__;
}catch (e22742){var t__22489__auto__ = e22742;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","battle-over?","rpg/battle-over?",498853509,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769)),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115))),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.battle_is_over_if_mokepon_is_captured.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle_is_over_if_mokepon_is_captured;},new cljs.core.Symbol("mokepon.tests","battle-is-over-if-mokepon-is-captured","mokepon.tests/battle-is-over-if-mokepon-is-captured",-1694911388,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"battle-is-over-if-mokepon-is-captured","battle-is-over-if-mokepon-is-captured",1640644398,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",47,1,94,94,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle_is_over_if_mokepon_is_captured)?mokepon.tests.battle_is_over_if_mokepon_is_captured.cljs$lang$test:null)]));
mokepon.tests.purchasing_item = (function mokepon$tests$purchasing_item(){
return cljs.test.test_var.call(null,mokepon$tests$purchasing_item.cljs$lang$var);
});
mokepon.tests.purchasing_item.cljs$lang$test = (function (){

mokepon.tests.set_cash.call(null,(10));

mokepon.container.buy_item_BANG_.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));

try{var values__22451__auto__ = (function (){var x__19298__auto__ = mokepon.tests.get_state.call(null,new cljs.core.Keyword(null,"cash","cash",181122222));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__22452__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto__);
if(cljs.core.truth_(result__22452__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22452__auto__;
}catch (e22743){var t__22489__auto__ = e22743;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.purchasing_item.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.purchasing_item;},new cljs.core.Symbol("mokepon.tests","purchasing-item","mokepon.tests/purchasing-item",1699665062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"purchasing-item","purchasing-item",-58960928,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",25,1,107,107,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.purchasing_item)?mokepon.tests.purchasing_item.cljs$lang$test:null)]));
mokepon.tests.not_enough_cash_to_buy_item = (function mokepon$tests$not_enough_cash_to_buy_item(){
return cljs.test.test_var.call(null,mokepon$tests$not_enough_cash_to_buy_item.cljs$lang$var);
});
mokepon.tests.not_enough_cash_to_buy_item.cljs$lang$test = (function (){

mokepon.tests.set_cash.call(null,(0));

mokepon.container.buy_item_BANG_.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385).cljs$core$IFn$_invoke$arity$1(mokepon.items.store_items_lookup));

try{var values__22451__auto___22746 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__22452__auto___22747 = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto___22746);
if(cljs.core.truth_(result__22452__auto___22747)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto___22746),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto___22746);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e22744){var t__22489__auto___22748 = e22744;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto___22748,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22451__auto__ = (function (){var x__19298__auto__ = mokepon.tests.get_state.call(null,new cljs.core.Keyword(null,"cash","cash",181122222));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__22452__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto__);
if(cljs.core.truth_(result__22452__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22452__auto__;
}catch (e22745){var t__22489__auto__ = e22745;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.not_enough_cash_to_buy_item.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.not_enough_cash_to_buy_item;},new cljs.core.Symbol("mokepon.tests","not-enough-cash-to-buy-item","mokepon.tests/not-enough-cash-to-buy-item",1962861684,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"not-enough-cash-to-buy-item","not-enough-cash-to-buy-item",-34771522,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",37,1,113,113,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.not_enough_cash_to_buy_item)?mokepon.tests.not_enough_cash_to_buy_item.cljs$lang$test:null)]));
mokepon.tests.electric_only_does_half_damage_to_grass = (function mokepon$tests$electric_only_does_half_damage_to_grass(){
return cljs.test.test_var.call(null,mokepon$tests$electric_only_does_half_damage_to_grass.cljs$lang$var);
});
mokepon.tests.electric_only_does_half_damage_to_grass.cljs$lang$test = (function (){

mokepon.container.set_battle_BANG_.call(null,new cljs.core.Keyword(null,"chipu","chipu",516526769),mokepon.monsters.sulbabaur);

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"at","at",1476951349)], null),mokepon.rpg.active_turn_threshold);

mokepon.container.attack_BANG_.call(null);

mokepon.tests.has_play_by_play.call(null,"Chipu attacks Sulbabaur for 5. It wasn't very effective.");

try{var values__22451__auto__ = (function (){var x__19298__auto__ = mokepon.tests.get_state.call(null,new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"hp","hp",-1541237831));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(45)),x__19298__auto__);
})();
var result__22452__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto__);
if(cljs.core.truth_(result__22452__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(45)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(45)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22452__auto__;
}catch (e22749){var t__22489__auto__ = e22749;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(45)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.electric_only_does_half_damage_to_grass.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.electric_only_does_half_damage_to_grass;},new cljs.core.Symbol("mokepon.tests","electric-only-does-half-damage-to-grass","mokepon.tests/electric-only-does-half-damage-to-grass",1156352178,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"electric-only-does-half-damage-to-grass","electric-only-does-half-damage-to-grass",-570871352,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",49,1,120,120,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.electric_only_does_half_damage_to_grass)?mokepon.tests.electric_only_does_half_damage_to_grass.cljs$lang$test:null)]));
mokepon.tests.ground_mokepon_do_double_damage_to_electric = (function mokepon$tests$ground_mokepon_do_double_damage_to_electric(){
return cljs.test.test_var.call(null,mokepon$tests$ground_mokepon_do_double_damage_to_electric.cljs$lang$var);
});
mokepon.tests.ground_mokepon_do_double_damage_to_electric.cljs$lang$test = (function (){
mokepon.container.set_battle_BANG_.call(null,new cljs.core.Keyword(null,"chipu","chipu",516526769),mokepon.monsters.deogude);

mokepon.tests.make_enemy_attack_ready.call(null);

mokepon.container.tick_battle_core_BANG_.call(null);

mokepon.tests.has_play_by_play.call(null,"It has begun! Chipu vs Deogude!");

mokepon.tests.has_play_by_play.call(null,"Deogude attacks Chipu for 20. It was super effective.");

try{var values__22451__auto__ = (function (){var x__19298__auto__ = mokepon.tests.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(30)),x__19298__auto__);
})();
var result__22452__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto__);
if(cljs.core.truth_(result__22452__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(30)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(30)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22452__auto__;
}catch (e22750){var t__22489__auto__ = e22750;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(30)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.ground_mokepon_do_double_damage_to_electric.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.ground_mokepon_do_double_damage_to_electric;},new cljs.core.Symbol("mokepon.tests","ground-mokepon-do-double-damage-to-electric","mokepon.tests/ground-mokepon-do-double-damage-to-electric",-253524326,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"ground-mokepon-do-double-damage-to-electric","ground-mokepon-do-double-damage-to-electric",1810629076,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",53,1,128,128,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.ground_mokepon_do_double_damage_to_electric)?mokepon.tests.ground_mokepon_do_double_damage_to_electric.cljs$lang$test:null)]));
mokepon.tests.ground_mokepon_are_immune_to_electric = (function mokepon$tests$ground_mokepon_are_immune_to_electric(){
return cljs.test.test_var.call(null,mokepon$tests$ground_mokepon_are_immune_to_electric.cljs$lang$var);
});
mokepon.tests.ground_mokepon_are_immune_to_electric.cljs$lang$test = (function (){
mokepon.container.set_battle_BANG_.call(null,new cljs.core.Keyword(null,"chipu","chipu",516526769),mokepon.monsters.deogude);

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"at","at",1476951349)], null),(1800));

mokepon.container.attack_BANG_.call(null);

mokepon.tests.has_play_by_play.call(null,"Deogude is immune to Chipu's attack. No damage was done.");

try{var values__22451__auto__ = (function (){var x__19298__auto__ = mokepon.tests.get_state.call(null,new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"hp","hp",-1541237831));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(50)),x__19298__auto__);
})();
var result__22452__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto__);
if(cljs.core.truth_(result__22452__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(50)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(50)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22452__auto__;
}catch (e22751){var t__22489__auto__ = e22751;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(50)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.ground_mokepon_are_immune_to_electric.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.ground_mokepon_are_immune_to_electric;},new cljs.core.Symbol("mokepon.tests","ground-mokepon-are-immune-to-electric","mokepon.tests/ground-mokepon-are-immune-to-electric",1806660845,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"ground-mokepon-are-immune-to-electric","ground-mokepon-are-immune-to-electric",-490935021,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",47,1,136,136,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.ground_mokepon_are_immune_to_electric)?mokepon.tests.ground_mokepon_are_immune_to_electric.cljs$lang$test:null)]));
mokepon.tests.electric_mokepon_do_double_damage_to_water = (function mokepon$tests$electric_mokepon_do_double_damage_to_water(){
return cljs.test.test_var.call(null,mokepon$tests$electric_mokepon_do_double_damage_to_water.cljs$lang$var);
});
mokepon.tests.electric_mokepon_do_double_damage_to_water.cljs$lang$test = (function (){
mokepon.container.set_battle_BANG_.call(null,new cljs.core.Keyword(null,"chipu","chipu",516526769),mokepon.monsters.tirsqule);

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"at","at",1476951349)], null),(1800));

mokepon.container.attack_BANG_.call(null);

mokepon.tests.has_play_by_play.call(null,"Chipu attacks Tirsqule for 20. It was super effective.");

try{var values__22451__auto__ = (function (){var x__19298__auto__ = mokepon.tests.get_state.call(null,new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"hp","hp",-1541237831));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(30)),x__19298__auto__);
})();
var result__22452__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto__);
if(cljs.core.truth_(result__22452__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(30)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(30)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22452__auto__;
}catch (e22752){var t__22489__auto__ = e22752;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(30)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.electric_mokepon_do_double_damage_to_water.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.electric_mokepon_do_double_damage_to_water;},new cljs.core.Symbol("mokepon.tests","electric-mokepon-do-double-damage-to-water","mokepon.tests/electric-mokepon-do-double-damage-to-water",-373147097,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"electric-mokepon-do-double-damage-to-water","electric-mokepon-do-double-damage-to-water",1894825309,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",52,1,143,143,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.electric_mokepon_do_double_damage_to_water)?mokepon.tests.electric_mokepon_do_double_damage_to_water.cljs$lang$test:null)]));
mokepon.tests.water_mokepon_do_normal_damage_to_electric = (function mokepon$tests$water_mokepon_do_normal_damage_to_electric(){
return cljs.test.test_var.call(null,mokepon$tests$water_mokepon_do_normal_damage_to_electric.cljs$lang$var);
});
mokepon.tests.water_mokepon_do_normal_damage_to_electric.cljs$lang$test = (function (){
mokepon.container.set_battle_BANG_.call(null,new cljs.core.Keyword(null,"chipu","chipu",516526769),mokepon.monsters.tirsqule);

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"at","at",1476951349)], null),(1800));

mokepon.tests.make_enemy_attack_ready.call(null);

mokepon.container.tick_battle_core_BANG_.call(null);

mokepon.tests.has_play_by_play.call(null,"Tirsqule attacks Chipu for 10.");

try{var values__22451__auto__ = (function (){var x__19298__auto__ = mokepon.tests.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(40)),x__19298__auto__);
})();
var result__22452__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto__);
if(cljs.core.truth_(result__22452__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(40)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(40)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22452__auto__;
}catch (e22753){var t__22489__auto__ = e22753;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(40)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.water_mokepon_do_normal_damage_to_electric.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.water_mokepon_do_normal_damage_to_electric;},new cljs.core.Symbol("mokepon.tests","water-mokepon-do-normal-damage-to-electric","mokepon.tests/water-mokepon-do-normal-damage-to-electric",-836225506,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"water-mokepon-do-normal-damage-to-electric","water-mokepon-do-normal-damage-to-electric",-1220563676,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",52,1,150,150,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.water_mokepon_do_normal_damage_to_electric)?mokepon.tests.water_mokepon_do_normal_damage_to_electric.cljs$lang$test:null)]));
mokepon.tests.looking_for_trouble_chooses_first_monster_on_team = (function mokepon$tests$looking_for_trouble_chooses_first_monster_on_team(){
return cljs.test.test_var.call(null,mokepon$tests$looking_for_trouble_chooses_first_monster_on_team.cljs$lang$var);
});
mokepon.tests.looking_for_trouble_chooses_first_monster_on_team.cljs$lang$test = (function (){
cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699)], null),(function (p1__22754_SHARP_){
return cljs.core.dissoc.call(null,p1__22754_SHARP_,new cljs.core.Keyword(null,"chipu","chipu",516526769));
}));

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null),mokepon.monsters.sulbabaur);

mokepon.container.go_to_location_BANG_.call(null,new cljs.core.Keyword(null,"forest","forest",278860306));

mokepon.container.find_trouble_BANG_.call(null,false);

try{var values__22451__auto__ = (function (){var x__19298__auto__ = mokepon.container.chosen_monster.call(null);
return cljs.core._conj.call(null,(function (){var x__19298__auto____$1 = mokepon.tests.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__22452__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto__);
if(cljs.core.truth_(result__22452__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","chosen-monster","tnr/chosen-monster",1410479290,null)),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","chosen-monster","tnr/chosen-monster",1410479290,null)),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22452__auto__;
}catch (e22755){var t__22489__auto__ = e22755;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","chosen-monster","tnr/chosen-monster",1410479290,null)),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014))),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.looking_for_trouble_chooses_first_monster_on_team.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.looking_for_trouble_chooses_first_monster_on_team;},new cljs.core.Symbol("mokepon.tests","looking-for-trouble-chooses-first-monster-on-team","mokepon.tests/looking-for-trouble-chooses-first-monster-on-team",-1044505200,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"looking-for-trouble-chooses-first-monster-on-team","looking-for-trouble-chooses-first-monster-on-team",1186174678,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",59,1,158,158,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.looking_for_trouble_chooses_first_monster_on_team)?mokepon.tests.looking_for_trouble_chooses_first_monster_on_team.cljs$lang$test:null)]));
mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead = (function mokepon$tests$battle_doesnt_end_until_all_of_team_is_dead(){
return cljs.test.test_var.call(null,mokepon$tests$battle_doesnt_end_until_all_of_team_is_dead.cljs$lang$var);
});
mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead.cljs$lang$test = (function (){
cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null),mokepon.monsters.sulbabaur);

mokepon.container.go_to_location_BANG_.call(null,new cljs.core.Keyword(null,"forest","forest",278860306));

mokepon.container.find_trouble_BANG_.call(null,false);

mokepon.tests.make_enemy_attack_ready.call(null);

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"power","power",-937852079)], null),(100));

mokepon.container.tick_battle_core_BANG_.call(null);

try{var values__22451__auto___22757 = (function (){var x__19298__auto__ = mokepon.rpg.is_dead_QMARK_.call(null,mokepon.tests.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769)));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__22452__auto___22758 = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto___22757);
if(cljs.core.truth_(result__22452__auto___22758)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","is-dead?","rpg/is-dead?",-1539886536,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769))),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto___22757),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","is-dead?","rpg/is-dead?",-1539886536,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769))),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto___22757);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e22756){var t__22489__auto___22759 = e22756;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","is-dead?","rpg/is-dead?",-1539886536,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769))),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto___22759,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.container.tick_battle_core_BANG_.call(null);

return mokepon.tests.has_play_by_play.call(null,"Sulbabaur dashes into battle!");
});

mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead;},new cljs.core.Symbol("mokepon.tests","battle-doesnt-end-until-all-of-team-is-dead","mokepon.tests/battle-doesnt-end-until-all-of-team-is-dead",-84082980,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"battle-doesnt-end-until-all-of-team-is-dead","battle-doesnt-end-until-all-of-team-is-dead",26109846,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",53,1,165,165,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead)?mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead.cljs$lang$test:null)]));
mokepon.tests.choosing_mokepon_within_battle = (function mokepon$tests$choosing_mokepon_within_battle(){
return cljs.test.test_var.call(null,mokepon$tests$choosing_mokepon_within_battle.cljs$lang$var);
});
mokepon.tests.choosing_mokepon_within_battle.cljs$lang$test = (function (){

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null),mokepon.monsters.sulbabaur);

mokepon.container.go_to_location_BANG_.call(null,new cljs.core.Keyword(null,"forest","forest",278860306));

mokepon.container.find_trouble_BANG_.call(null,false);

try{var values__22451__auto___22765 = (function (){var x__19298__auto__ = mokepon.rpg.choosable_monsters.call(null,mokepon.tests.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699)));
return cljs.core._conj.call(null,(function (){var x__19298__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__22452__auto___22766 = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto___22765);
if(cljs.core.truth_(result__22452__auto___22766)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","choosable-monsters","rpg/choosable-monsters",-1510155964,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto___22765),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","choosable-monsters","rpg/choosable-monsters",-1510155964,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto___22765);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e22760){var t__22489__auto___22767 = e22760;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","choosable-monsters","rpg/choosable-monsters",-1510155964,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto___22767,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"at","at",1476951349)], null),mokepon.rpg.active_turn_threshold);

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349)], null),mokepon.rpg.active_turn_threshold);

mokepon.container.choose_monster_BANG_.call(null,new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014));

try{var values__22451__auto___22768 = (function (){var x__19298__auto__ = mokepon.tests.get_state.call(null,new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),x__19298__auto__);
})();
var result__22452__auto___22769 = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto___22768);
if(cljs.core.truth_(result__22452__auto___22769)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355)),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto___22768),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355)),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto___22768);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e22761){var t__22489__auto___22770 = e22761;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355)),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto___22770,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22451__auto___22771 = (function (){var x__19298__auto__ = mokepon.tests.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"at","at",1476951349));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__22452__auto___22772 = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto___22771);
if(cljs.core.truth_(result__22452__auto___22772)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"at","at",1476951349)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto___22771),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"at","at",1476951349)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto___22771);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e22762){var t__22489__auto___22773 = e22762;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"at","at",1476951349)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto___22773,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22451__auto___22774 = (function (){var x__19298__auto__ = mokepon.tests.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__22452__auto___22775 = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto___22774);
if(cljs.core.truth_(result__22452__auto___22775)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto___22774),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto___22774);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e22763){var t__22489__auto___22776 = e22763;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto___22776,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.tests.has_play_by_play.call(null,"You have chosen Sulbabaur to fight!");

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349)], null),mokepon.rpg.active_turn_threshold);

mokepon.container.choose_monster_BANG_.call(null,new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014));

try{var values__22451__auto__ = (function (){var x__19298__auto__ = mokepon.tests.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349));
return cljs.core._conj.call(null,(function (){var x__19298__auto____$1 = mokepon.rpg.active_turn_threshold;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__22452__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22451__auto__);
if(cljs.core.truth_(result__22452__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349)),new cljs.core.Symbol("rpg","active-turn-threshold","rpg/active-turn-threshold",-1952951630,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22451__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349)),new cljs.core.Symbol("rpg","active-turn-threshold","rpg/active-turn-threshold",-1952951630,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22451__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22452__auto__;
}catch (e22764){var t__22489__auto__ = e22764;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349)),new cljs.core.Symbol("rpg","active-turn-threshold","rpg/active-turn-threshold",-1952951630,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__22489__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.choosing_mokepon_within_battle.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.choosing_mokepon_within_battle;},new cljs.core.Symbol("mokepon.tests","choosing-mokepon-within-battle","mokepon.tests/choosing-mokepon-within-battle",-1062627735,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"choosing-mokepon-within-battle","choosing-mokepon-within-battle",1235545895,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",40,1,184,184,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.choosing_mokepon_within_battle)?mokepon.tests.choosing_mokepon_within_battle.cljs$lang$test:null)]));
mokepon.tests.run_tests = (function mokepon$tests$run_tests(){
console.clear();

return cljs.test.run_block.call(null,(function (){var env22779 = cljs.test.empty_env.call(null);
var summary22780 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env22779,summary22780){
return (function (){
cljs.test.set_env_BANG_.call(null,env22779);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__22555__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__22555__auto__,env22779,summary22780){
return (function (){
if((env__22555__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),mokepon.tests.cljs_test_each_fixtures);
});})(env__22555__auto__,env22779,summary22780))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return mokepon.tests.being_attacked;},new cljs.core.Symbol("mokepon.tests","being-attacked","mokepon.tests/being-attacked",2024292635,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"being-attacked","being-attacked",-240715179,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",24,1,36,36,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.being_attacked)?mokepon.tests.being_attacked.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.being_killed;},new cljs.core.Symbol("mokepon.tests","being-killed","mokepon.tests/being-killed",935313140,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"being-killed","being-killed",-2004338758,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",22,1,44,44,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.being_killed)?mokepon.tests.being_killed.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.healing_team;},new cljs.core.Symbol("mokepon.tests","healing-team","mokepon.tests/healing-team",-1996525511,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"healing-team","healing-team",260962679,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",22,1,57,57,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.healing_team)?mokepon.tests.healing_team.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.capturing_wild_mokepon;},new cljs.core.Symbol("mokepon.tests","capturing-wild-mokepon","mokepon.tests/capturing-wild-mokepon",-1766279940,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"capturing-wild-mokepon","capturing-wild-mokepon",228998406,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",32,1,65,65,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.capturing_wild_mokepon)?mokepon.tests.capturing_wild_mokepon.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.battle_is_over_if_mokepon_is_captured;},new cljs.core.Symbol("mokepon.tests","battle-is-over-if-mokepon-is-captured","mokepon.tests/battle-is-over-if-mokepon-is-captured",-1694911388,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"battle-is-over-if-mokepon-is-captured","battle-is-over-if-mokepon-is-captured",1640644398,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",47,1,94,94,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle_is_over_if_mokepon_is_captured)?mokepon.tests.battle_is_over_if_mokepon_is_captured.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.purchasing_item;},new cljs.core.Symbol("mokepon.tests","purchasing-item","mokepon.tests/purchasing-item",1699665062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"purchasing-item","purchasing-item",-58960928,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",25,1,107,107,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.purchasing_item)?mokepon.tests.purchasing_item.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.not_enough_cash_to_buy_item;},new cljs.core.Symbol("mokepon.tests","not-enough-cash-to-buy-item","mokepon.tests/not-enough-cash-to-buy-item",1962861684,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"not-enough-cash-to-buy-item","not-enough-cash-to-buy-item",-34771522,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",37,1,113,113,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.not_enough_cash_to_buy_item)?mokepon.tests.not_enough_cash_to_buy_item.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.electric_only_does_half_damage_to_grass;},new cljs.core.Symbol("mokepon.tests","electric-only-does-half-damage-to-grass","mokepon.tests/electric-only-does-half-damage-to-grass",1156352178,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"electric-only-does-half-damage-to-grass","electric-only-does-half-damage-to-grass",-570871352,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",49,1,120,120,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.electric_only_does_half_damage_to_grass)?mokepon.tests.electric_only_does_half_damage_to_grass.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.ground_mokepon_do_double_damage_to_electric;},new cljs.core.Symbol("mokepon.tests","ground-mokepon-do-double-damage-to-electric","mokepon.tests/ground-mokepon-do-double-damage-to-electric",-253524326,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"ground-mokepon-do-double-damage-to-electric","ground-mokepon-do-double-damage-to-electric",1810629076,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",53,1,128,128,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.ground_mokepon_do_double_damage_to_electric)?mokepon.tests.ground_mokepon_do_double_damage_to_electric.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.ground_mokepon_are_immune_to_electric;},new cljs.core.Symbol("mokepon.tests","ground-mokepon-are-immune-to-electric","mokepon.tests/ground-mokepon-are-immune-to-electric",1806660845,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"ground-mokepon-are-immune-to-electric","ground-mokepon-are-immune-to-electric",-490935021,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",47,1,136,136,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.ground_mokepon_are_immune_to_electric)?mokepon.tests.ground_mokepon_are_immune_to_electric.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.electric_mokepon_do_double_damage_to_water;},new cljs.core.Symbol("mokepon.tests","electric-mokepon-do-double-damage-to-water","mokepon.tests/electric-mokepon-do-double-damage-to-water",-373147097,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"electric-mokepon-do-double-damage-to-water","electric-mokepon-do-double-damage-to-water",1894825309,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",52,1,143,143,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.electric_mokepon_do_double_damage_to_water)?mokepon.tests.electric_mokepon_do_double_damage_to_water.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.water_mokepon_do_normal_damage_to_electric;},new cljs.core.Symbol("mokepon.tests","water-mokepon-do-normal-damage-to-electric","mokepon.tests/water-mokepon-do-normal-damage-to-electric",-836225506,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"water-mokepon-do-normal-damage-to-electric","water-mokepon-do-normal-damage-to-electric",-1220563676,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",52,1,150,150,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.water_mokepon_do_normal_damage_to_electric)?mokepon.tests.water_mokepon_do_normal_damage_to_electric.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.looking_for_trouble_chooses_first_monster_on_team;},new cljs.core.Symbol("mokepon.tests","looking-for-trouble-chooses-first-monster-on-team","mokepon.tests/looking-for-trouble-chooses-first-monster-on-team",-1044505200,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"looking-for-trouble-chooses-first-monster-on-team","looking-for-trouble-chooses-first-monster-on-team",1186174678,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",59,1,158,158,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.looking_for_trouble_chooses_first_monster_on_team)?mokepon.tests.looking_for_trouble_chooses_first_monster_on_team.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead;},new cljs.core.Symbol("mokepon.tests","battle-doesnt-end-until-all-of-team-is-dead","mokepon.tests/battle-doesnt-end-until-all-of-team-is-dead",-84082980,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"battle-doesnt-end-until-all-of-team-is-dead","battle-doesnt-end-until-all-of-team-is-dead",26109846,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",53,1,165,165,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead)?mokepon.tests.battle_doesnt_end_until_all_of_team_is_dead.cljs$lang$test:null)])),new cljs.core.Var(function(){return mokepon.tests.choosing_mokepon_within_battle;},new cljs.core.Symbol("mokepon.tests","choosing-mokepon-within-battle","mokepon.tests/choosing-mokepon-within-battle",-1062627735,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"choosing-mokepon-within-battle","choosing-mokepon-within-battle",1235545895,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests.cljs",40,1,184,184,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.choosing_mokepon_within_battle)?mokepon.tests.choosing_mokepon_within_battle.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__22555__auto__,env22779,summary22780){
return (function (){
if((env__22555__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__22555__auto__,env22779,summary22780))
], null));
})());
});})(env22779,summary22780))
,((function (env22779,summary22780){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env22779,summary22780))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env22779,summary22780){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary22780,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary22780),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env22779,summary22780))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env22779,summary22780){
return (function (){
cljs.test.set_env_BANG_.call(null,env22779);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary22780));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary22780),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env22779,summary22780))
], null));
})());
});

//# sourceMappingURL=tests.js.map