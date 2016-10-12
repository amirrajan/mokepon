// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.tests.battle');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('mokepon.tests.core');
goog.require('mokepon.monsters');
goog.require('mokepon.rpg');
goog.require('mokepon.container');
mokepon.tests.battle.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),mokepon.tests.core.reset_game], null)], null);
mokepon.tests.battle.being_attacked = (function mokepon$tests$battle$being_attacked(){
return cljs.test.test_var.call(null,mokepon$tests$battle$being_attacked.cljs$lang$var);
});
mokepon.tests.battle.being_attacked.cljs$lang$test = (function (){

mokepon.container.set_battle_BANG_.call(null,new cljs.core.Keyword(null,"chipu","chipu",516526769),mokepon.monsters.sulbabaur);

mokepon.tests.core.has_play_by_play.call(null,"It has begun! Chipu vs Sulbabaur!");

mokepon.tests.core.make_enemy_attack_ready.call(null);

mokepon.container.tick_battle_core_BANG_.call(null);

try{var values__23053__auto__ = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(mokepon.container.app_state_chosen_monster.call(null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(40)),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"hp","hp",-1541237831),cljs.core.list(new cljs.core.Symbol("tnr","app-state-chosen-monster","tnr/app-state-chosen-monster",325088959,null))),(40)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"hp","hp",-1541237831),cljs.core.list(new cljs.core.Symbol("tnr","app-state-chosen-monster","tnr/app-state-chosen-monster",325088959,null))),(40)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23054__auto__;
}catch (e23895){var t__23091__auto__ = e23895;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"hp","hp",-1541237831),cljs.core.list(new cljs.core.Symbol("tnr","app-state-chosen-monster","tnr/app-state-chosen-monster",325088959,null))),(40)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.battle.being_attacked.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.being_attacked;},new cljs.core.Symbol("mokepon.tests.battle","being-attacked","mokepon.tests.battle/being-attacked",-1627363467,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.battle","mokepon.tests.battle",1013080789,null),new cljs.core.Symbol(null,"being-attacked","being-attacked",-240715179,null),"src/mokepon/tests/battle.cljs",24,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.being_attacked)?mokepon.tests.battle.being_attacked.cljs$lang$test:null)]));
mokepon.tests.battle.being_killed = (function mokepon$tests$battle$being_killed(){
return cljs.test.test_var.call(null,mokepon$tests$battle$being_killed.cljs$lang$var);
});
mokepon.tests.battle.being_killed.cljs$lang$test = (function (){

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null),mokepon.monsters.sulbabaur);

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),(0));

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),(0));

mokepon.container.remove_dead_team_members_BANG_.call(null);

try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.container.team_count.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.call(null,cljs.core.zero_QMARK_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","team-count","tnr/team-count",2125883243,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.zero_QMARK_,values__23053__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","team-count","tnr/team-count",2125883243,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),values__23053__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23054__auto__;
}catch (e23896){var t__23091__auto__ = e23896;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","team-count","tnr/team-count",2125883243,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.battle.being_killed.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.being_killed;},new cljs.core.Symbol("mokepon.tests.battle","being-killed","mokepon.tests.battle/being-killed",1360500954,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.battle","mokepon.tests.battle",1013080789,null),new cljs.core.Symbol(null,"being-killed","being-killed",-2004338758,null),"src/mokepon/tests/battle.cljs",22,1,23,23,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.being_killed)?mokepon.tests.battle.being_killed.cljs$lang$test:null)]));
mokepon.tests.battle.capturing_wild_mokepon = (function mokepon$tests$battle$capturing_wild_mokepon(){
return cljs.test.test_var.call(null,mokepon$tests$battle$capturing_wild_mokepon.cljs$lang$var);
});
mokepon.tests.battle.capturing_wild_mokepon.cljs$lang$test = (function (){

mokepon.tests.core.set_cash.call(null,(20));

mokepon.container.set_battle_BANG_.call(null,new cljs.core.Keyword(null,"chipu","chipu",516526769),mokepon.monsters.sulbabaur);

try{var values__23053__auto___23904 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__23054__auto___23905 = cljs.core.apply.call(null,cljs.core.zero_QMARK_,values__23053__auto___23904);
if(cljs.core.truth_(result__23054__auto___23905)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.zero_QMARK_,values__23053__auto___23904),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),values__23053__auto___23904);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23897){var t__23091__auto___23906 = e23897;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385))),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23906,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.container.throw_mokebox_BANG_.call(null);

try{var values__23053__auto___23907 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__23054__auto___23908 = cljs.core.apply.call(null,cljs.core.zero_QMARK_,values__23053__auto___23907);
if(cljs.core.truth_(result__23054__auto___23908)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.zero_QMARK_,values__23053__auto___23907),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),values__23053__auto___23907);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23898){var t__23091__auto___23909 = e23898;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385))),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23909,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.container.buy_item_BANG_.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));

mokepon.container.buy_item_BANG_.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));

try{var values__23053__auto___23910 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),x__19298__auto__);
})();
var result__23054__auto___23911 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___23910);
if(cljs.core.truth_(result__23054__auto___23911)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___23910),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___23910);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23899){var t__23091__auto___23912 = e23899;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23912,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.container.throw_mokebox_BANG_.call(null);

try{var values__23053__auto___23913 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__23054__auto___23914 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__23053__auto___23913);
if(cljs.core.truth_(result__23054__auto___23914)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.nil_QMARK_,values__23053__auto___23913),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__23053__auto___23913);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23900){var t__23091__auto___23915 = e23900;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014))),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23915,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto___23916 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),x__19298__auto__);
})();
var result__23054__auto___23917 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___23916);
if(cljs.core.truth_(result__23054__auto___23917)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___23916),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___23916);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23901){var t__23091__auto___23918 = e23901;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23918,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696)], null),(100000000));

mokepon.container.throw_mokebox_BANG_.call(null);

try{var values__23053__auto___23919 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014));
return cljs.core._conj.call(null,(function (){var x__19298__auto____$1 = cljs.core.dissoc.call(null,mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"battling","battling",-129800115)),new cljs.core.Keyword(null,"captured","captured",704575240));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__23054__auto___23920 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___23919);
if(cljs.core.truth_(result__23054__auto___23920)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115)),new cljs.core.Keyword(null,"captured","captured",704575240))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___23919),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115)),new cljs.core.Keyword(null,"captured","captured",704575240))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___23919);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23902){var t__23091__auto___23921 = e23902;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115)),new cljs.core.Keyword(null,"captured","captured",704575240))),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23921,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.call(null,cljs.core.zero_QMARK_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.zero_QMARK_,values__23053__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),values__23053__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23054__auto__;
}catch (e23903){var t__23091__auto__ = e23903;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385))),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.battle.capturing_wild_mokepon.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.capturing_wild_mokepon;},new cljs.core.Symbol("mokepon.tests.battle","capturing-wild-mokepon","mokepon.tests.battle/capturing-wild-mokepon",1946195686,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.battle","mokepon.tests.battle",1013080789,null),new cljs.core.Symbol(null,"capturing-wild-mokepon","capturing-wild-mokepon",228998406,null),"src/mokepon/tests/battle.cljs",32,1,38,38,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.capturing_wild_mokepon)?mokepon.tests.battle.capturing_wild_mokepon.cljs$lang$test:null)]));
mokepon.tests.battle.battle_is_over_if_mokepon_is_captured = (function mokepon$tests$battle$battle_is_over_if_mokepon_is_captured(){
return cljs.test.test_var.call(null,mokepon$tests$battle$battle_is_over_if_mokepon_is_captured.cljs$lang$var);
});
mokepon.tests.battle.battle_is_over_if_mokepon_is_captured.cljs$lang$test = (function (){

mokepon.container.buy_item_BANG_.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));

mokepon.container.set_battle_BANG_.call(null,new cljs.core.Keyword(null,"chipu","chipu",516526769),mokepon.monsters.sulbabaur);

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696)], null),(100000000));

mokepon.container.throw_mokebox_BANG_.call(null);

try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.rpg.battle_over_QMARK_.call(null,mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769)),mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"battling","battling",-129800115)));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","battle-over?","rpg/battle-over?",498853509,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769)),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115))),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","battle-over?","rpg/battle-over?",498853509,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769)),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115))),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23054__auto__;
}catch (e23922){var t__23091__auto__ = e23922;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","battle-over?","rpg/battle-over?",498853509,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769)),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115))),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.battle.battle_is_over_if_mokepon_is_captured.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.battle_is_over_if_mokepon_is_captured;},new cljs.core.Symbol("mokepon.tests.battle","battle-is-over-if-mokepon-is-captured","mokepon.tests.battle/battle-is-over-if-mokepon-is-captured",-1219472818,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.battle","mokepon.tests.battle",1013080789,null),new cljs.core.Symbol(null,"battle-is-over-if-mokepon-is-captured","battle-is-over-if-mokepon-is-captured",1640644398,null),"src/mokepon/tests/battle.cljs",47,1,66,66,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.battle_is_over_if_mokepon_is_captured)?mokepon.tests.battle.battle_is_over_if_mokepon_is_captured.cljs$lang$test:null)]));
mokepon.tests.battle.using_candy = (function mokepon$tests$battle$using_candy(){
return cljs.test.test_var.call(null,mokepon$tests$battle$using_candy.cljs$lang$var);
});
mokepon.tests.battle.using_candy.cljs$lang$test = (function (){

mokepon.container.buy_item_BANG_.call(null,new cljs.core.Keyword(null,"candy","candy",-1977730302));

try{var values__23053__auto___23927 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"candy","candy",-1977730302));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),x__19298__auto__);
})();
var result__23054__auto___23928 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___23927);
if(cljs.core.truth_(result__23054__auto___23928)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___23927),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___23927);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23923){var t__23091__auto___23929 = e23923;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23929,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.container.set_battle_BANG_.call(null,new cljs.core.Keyword(null,"chipu","chipu",516526769),mokepon.monsters.deogude);

mokepon.tests.core.make_enemy_attack_ready.call(null);

mokepon.container.tick_battle_core_BANG_.call(null);

try{var values__23053__auto___23930 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(30)),x__19298__auto__);
})();
var result__23054__auto___23931 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___23930);
if(cljs.core.truth_(result__23054__auto___23931)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(30)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___23930),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(30)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___23930);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23924){var t__23091__auto___23932 = e23924;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(30)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23932,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.container.use_candy_BANG_.call(null);

mokepon.tests.core.has_play_by_play.call(null,"Chipu has eated the delicious candy and was healed for 10 hp.");

try{var values__23053__auto___23933 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"candy","candy",-1977730302));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__23054__auto___23934 = cljs.core.apply.call(null,cljs.core.zero_QMARK_,values__23053__auto___23933);
if(cljs.core.truth_(result__23054__auto___23934)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.zero_QMARK_,values__23053__auto___23933),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),values__23053__auto___23933);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23925){var t__23091__auto___23935 = e23925;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302))),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23935,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(40)),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(40)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(40)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23054__auto__;
}catch (e23926){var t__23091__auto__ = e23926;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(40)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.battle.using_candy.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.using_candy;},new cljs.core.Symbol("mokepon.tests.battle","using-candy","mokepon.tests.battle/using-candy",-1368366020,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.battle","mokepon.tests.battle",1013080789,null),new cljs.core.Symbol(null,"using-candy","using-candy",15600604,null),"src/mokepon/tests/battle.cljs",21,1,79,79,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.using_candy)?mokepon.tests.battle.using_candy.cljs$lang$test:null)]));
mokepon.tests.battle.using_candy_max_hp = (function mokepon$tests$battle$using_candy_max_hp(){
return cljs.test.test_var.call(null,mokepon$tests$battle$using_candy_max_hp.cljs$lang$var);
});
mokepon.tests.battle.using_candy_max_hp.cljs$lang$test = (function (){

mokepon.container.buy_item_BANG_.call(null,new cljs.core.Keyword(null,"candy","candy",-1977730302));

try{var values__23053__auto___23939 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"candy","candy",-1977730302));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),x__19298__auto__);
})();
var result__23054__auto___23940 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___23939);
if(cljs.core.truth_(result__23054__auto___23940)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___23939),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___23939);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23936){var t__23091__auto___23941 = e23936;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23941,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.container.set_battle_BANG_.call(null,new cljs.core.Keyword(null,"chipu","chipu",516526769),mokepon.monsters.deogude);

mokepon.container.use_candy_BANG_.call(null);

mokepon.tests.core.has_play_by_play.call(null,"Chipu has eated the delicious candy and was healed for 10 hp.");

try{var values__23053__auto___23942 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"candy","candy",-1977730302));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__23054__auto___23943 = cljs.core.apply.call(null,cljs.core.zero_QMARK_,values__23053__auto___23942);
if(cljs.core.truth_(result__23054__auto___23943)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.zero_QMARK_,values__23053__auto___23942),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),values__23053__auto___23942);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23937){var t__23091__auto___23944 = e23937;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302))),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23944,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(50)),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(50)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(50)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23054__auto__;
}catch (e23938){var t__23091__auto__ = e23938;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(50)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.battle.using_candy_max_hp.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.using_candy_max_hp;},new cljs.core.Symbol("mokepon.tests.battle","using-candy-max-hp","mokepon.tests.battle/using-candy-max-hp",-2038956613,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.battle","mokepon.tests.battle",1013080789,null),new cljs.core.Symbol(null,"using-candy-max-hp","using-candy-max-hp",1372414619,null),"src/mokepon/tests/battle.cljs",28,1,92,92,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.using_candy_max_hp)?mokepon.tests.battle.using_candy_max_hp.cljs$lang$test:null)]));
mokepon.tests.battle.choosing_mokepon_within_battle = (function mokepon$tests$battle$choosing_mokepon_within_battle(){
return cljs.test.test_var.call(null,mokepon$tests$battle$choosing_mokepon_within_battle.cljs$lang$var);
});
mokepon.tests.battle.choosing_mokepon_within_battle.cljs$lang$test = (function (){

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null),mokepon.monsters.sulbabaur);

mokepon.container.go_to_location_BANG_.call(null,new cljs.core.Keyword(null,"forest","forest",278860306));

mokepon.container.find_trouble_BANG_.call(null,false);

try{var values__23053__auto___23950 = (function (){var x__19298__auto__ = mokepon.rpg.choosable_monsters.call(null,mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699)));
return cljs.core._conj.call(null,(function (){var x__19298__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__23054__auto___23951 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___23950);
if(cljs.core.truth_(result__23054__auto___23951)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","choosable-monsters","rpg/choosable-monsters",-1510155964,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___23950),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","choosable-monsters","rpg/choosable-monsters",-1510155964,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___23950);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23945){var t__23091__auto___23952 = e23945;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","choosable-monsters","rpg/choosable-monsters",-1510155964,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23952,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"at","at",1476951349)], null),mokepon.rpg.active_turn_threshold);

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349)], null),mokepon.rpg.active_turn_threshold);

mokepon.container.choose_monster_BANG_.call(null,new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014));

try{var values__23053__auto___23953 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),x__19298__auto__);
})();
var result__23054__auto___23954 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___23953);
if(cljs.core.truth_(result__23054__auto___23954)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355)),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___23953),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355)),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___23953);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23946){var t__23091__auto___23955 = e23946;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355)),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23955,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto___23956 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"at","at",1476951349));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__23054__auto___23957 = cljs.core.apply.call(null,cljs.core.zero_QMARK_,values__23053__auto___23956);
if(cljs.core.truth_(result__23054__auto___23957)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"at","at",1476951349))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.zero_QMARK_,values__23053__auto___23956),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"at","at",1476951349))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),values__23053__auto___23956);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23947){var t__23091__auto___23958 = e23947;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"at","at",1476951349))),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23958,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto___23959 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__23054__auto___23960 = cljs.core.apply.call(null,cljs.core.zero_QMARK_,values__23053__auto___23959);
if(cljs.core.truth_(result__23054__auto___23960)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.zero_QMARK_,values__23053__auto___23959),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),values__23053__auto___23959);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23948){var t__23091__auto___23961 = e23948;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349))),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23961,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.tests.core.has_play_by_play.call(null,"You have chosen Sulbabaur to fight!");

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349)], null),mokepon.rpg.active_turn_threshold);

mokepon.container.choose_monster_BANG_.call(null,new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014));

try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349));
return cljs.core._conj.call(null,(function (){var x__19298__auto____$1 = mokepon.rpg.active_turn_threshold;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349)),new cljs.core.Symbol("rpg","active-turn-threshold","rpg/active-turn-threshold",-1952951630,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349)),new cljs.core.Symbol("rpg","active-turn-threshold","rpg/active-turn-threshold",-1952951630,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23054__auto__;
}catch (e23949){var t__23091__auto__ = e23949;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349)),new cljs.core.Symbol("rpg","active-turn-threshold","rpg/active-turn-threshold",-1952951630,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.battle.choosing_mokepon_within_battle.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.choosing_mokepon_within_battle;},new cljs.core.Symbol("mokepon.tests.battle","choosing-mokepon-within-battle","mokepon.tests.battle/choosing-mokepon-within-battle",-490572729,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.battle","mokepon.tests.battle",1013080789,null),new cljs.core.Symbol(null,"choosing-mokepon-within-battle","choosing-mokepon-within-battle",1235545895,null),"src/mokepon/tests/battle.cljs",40,1,102,102,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.choosing_mokepon_within_battle)?mokepon.tests.battle.choosing_mokepon_within_battle.cljs$lang$test:null)]));
mokepon.tests.battle.looking_for_trouble_chooses_first_monster_on_team = (function mokepon$tests$battle$looking_for_trouble_chooses_first_monster_on_team(){
return cljs.test.test_var.call(null,mokepon$tests$battle$looking_for_trouble_chooses_first_monster_on_team.cljs$lang$var);
});
mokepon.tests.battle.looking_for_trouble_chooses_first_monster_on_team.cljs$lang$test = (function (){
cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699)], null),(function (p1__23962_SHARP_){
return cljs.core.dissoc.call(null,p1__23962_SHARP_,new cljs.core.Keyword(null,"chipu","chipu",516526769));
}));

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null),mokepon.monsters.sulbabaur);

mokepon.container.go_to_location_BANG_.call(null,new cljs.core.Keyword(null,"forest","forest",278860306));

mokepon.container.find_trouble_BANG_.call(null,false);

try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.container.app_state_chosen_monster.call(null);
return cljs.core._conj.call(null,(function (){var x__19298__auto____$1 = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","app-state-chosen-monster","tnr/app-state-chosen-monster",325088959,null)),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","app-state-chosen-monster","tnr/app-state-chosen-monster",325088959,null)),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23054__auto__;
}catch (e23963){var t__23091__auto__ = e23963;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","app-state-chosen-monster","tnr/app-state-chosen-monster",325088959,null)),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014))),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.battle.looking_for_trouble_chooses_first_monster_on_team.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.looking_for_trouble_chooses_first_monster_on_team;},new cljs.core.Symbol("mokepon.tests.battle","looking-for-trouble-chooses-first-monster-on-team","mokepon.tests.battle/looking-for-trouble-chooses-first-monster-on-team",-1357499402,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.battle","mokepon.tests.battle",1013080789,null),new cljs.core.Symbol(null,"looking-for-trouble-chooses-first-monster-on-team","looking-for-trouble-chooses-first-monster-on-team",1186174678,null),"src/mokepon/tests/battle.cljs",59,1,121,121,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.looking_for_trouble_chooses_first_monster_on_team)?mokepon.tests.battle.looking_for_trouble_chooses_first_monster_on_team.cljs$lang$test:null)]));
mokepon.tests.battle.battle_doesnt_end_until_all_of_team_is_dead = (function mokepon$tests$battle$battle_doesnt_end_until_all_of_team_is_dead(){
return cljs.test.test_var.call(null,mokepon$tests$battle$battle_doesnt_end_until_all_of_team_is_dead.cljs$lang$var);
});
mokepon.tests.battle.battle_doesnt_end_until_all_of_team_is_dead.cljs$lang$test = (function (){
cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null),mokepon.monsters.sulbabaur);

mokepon.container.go_to_location_BANG_.call(null,new cljs.core.Keyword(null,"forest","forest",278860306));

mokepon.container.find_trouble_BANG_.call(null,false);

mokepon.tests.core.make_enemy_attack_ready.call(null);

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"power","power",-937852079)], null),(100));

mokepon.container.tick_battle_core_BANG_.call(null);

try{var values__23053__auto___23965 = (function (){var x__19298__auto__ = mokepon.rpg.is_dead_QMARK_.call(null,mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769)));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__23054__auto___23966 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___23965);
if(cljs.core.truth_(result__23054__auto___23966)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","is-dead?","rpg/is-dead?",-1539886536,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769))),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___23965),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","is-dead?","rpg/is-dead?",-1539886536,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769))),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___23965);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23964){var t__23091__auto___23967 = e23964;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","is-dead?","rpg/is-dead?",-1539886536,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769))),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23967,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.container.tick_battle_core_BANG_.call(null);

return mokepon.tests.core.has_play_by_play.call(null,"Sulbabaur dashes into battle!");
});

mokepon.tests.battle.battle_doesnt_end_until_all_of_team_is_dead.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.battle_doesnt_end_until_all_of_team_is_dead;},new cljs.core.Symbol("mokepon.tests.battle","battle-doesnt-end-until-all-of-team-is-dead","mokepon.tests.battle/battle-doesnt-end-until-all-of-team-is-dead",-686548810,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.battle","mokepon.tests.battle",1013080789,null),new cljs.core.Symbol(null,"battle-doesnt-end-until-all-of-team-is-dead","battle-doesnt-end-until-all-of-team-is-dead",26109846,null),"src/mokepon/tests/battle.cljs",53,1,128,128,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.battle_doesnt_end_until_all_of_team_is_dead)?mokepon.tests.battle.battle_doesnt_end_until_all_of_team_is_dead.cljs$lang$test:null)]));
mokepon.tests.battle.winning_battle_gives_fiddy = (function mokepon$tests$battle$winning_battle_gives_fiddy(){
return cljs.test.test_var.call(null,mokepon$tests$battle$winning_battle_gives_fiddy.cljs$lang$var);
});
mokepon.tests.battle.winning_battle_gives_fiddy.cljs$lang$test = (function (){

mokepon.tests.core.set_cash.call(null,(0));

mokepon.container.set_battle_BANG_.call(null,new cljs.core.Keyword(null,"chipu","chipu",516526769),mokepon.monsters.sulbabaur);

mokepon.tests.core.make_chosen_attack_ready.call(null);

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"power","power",-937852079)], null),(50));

mokepon.container.attack_BANG_.call(null);

try{var values__23053__auto___23971 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"cash","cash",181122222));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__23054__auto___23972 = cljs.core.apply.call(null,cljs.core.zero_QMARK_,values__23053__auto___23971);
if(cljs.core.truth_(result__23054__auto___23972)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.zero_QMARK_,values__23053__auto___23971),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),values__23053__auto___23971);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23968){var t__23091__auto___23973 = e23968;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222))),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23973,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.tests.core.make_chosen_attack_ready.call(null);

mokepon.container.attack_BANG_.call(null);

try{var values__23053__auto___23974 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"battling","battling",-129800115));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__23054__auto___23975 = cljs.core.apply.call(null,mokepon.rpg.is_dead_QMARK_,values__23053__auto___23974);
if(cljs.core.truth_(result__23054__auto___23975)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("rpg","is-dead?","rpg/is-dead?",-1539886536,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,mokepon.rpg.is_dead_QMARK_,values__23053__auto___23974),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("rpg","is-dead?","rpg/is-dead?",-1539886536,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("rpg","is-dead?","rpg/is-dead?",-1539886536,null),values__23053__auto___23974);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23969){var t__23091__auto___23976 = e23969;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("rpg","is-dead?","rpg/is-dead?",-1539886536,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115))),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23976,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"cash","cash",181122222));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(3)),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222)),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222)),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23054__auto__;
}catch (e23970){var t__23091__auto__ = e23970;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222)),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.battle.winning_battle_gives_fiddy.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.winning_battle_gives_fiddy;},new cljs.core.Symbol("mokepon.tests.battle","winning-battle-gives-fiddy","mokepon.tests.battle/winning-battle-gives-fiddy",-159824708,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.battle","mokepon.tests.battle",1013080789,null),new cljs.core.Symbol(null,"winning-battle-gives-fiddy","winning-battle-gives-fiddy",551808988,null),"src/mokepon/tests/battle.cljs",36,1,147,147,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.winning_battle_gives_fiddy)?mokepon.tests.battle.winning_battle_gives_fiddy.cljs$lang$test:null)]));

//# sourceMappingURL=battle.js.map