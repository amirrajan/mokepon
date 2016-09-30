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

try{var values__19693__auto__ = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(mokepon.container.app_state_chosen_monster.call(null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(40)),x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"hp","hp",-1541237831),cljs.core.list(new cljs.core.Symbol("tnr","app-state-chosen-monster","tnr/app-state-chosen-monster",325088959,null))),(40)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"hp","hp",-1541237831),cljs.core.list(new cljs.core.Symbol("tnr","app-state-chosen-monster","tnr/app-state-chosen-monster",325088959,null))),(40)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19694__auto__;
}catch (e24166){var t__19731__auto__ = e24166;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"hp","hp",-1541237831),cljs.core.list(new cljs.core.Symbol("tnr","app-state-chosen-monster","tnr/app-state-chosen-monster",325088959,null))),(40)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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

try{var values__19693__auto__ = (function (){var x__19298__auto__ = mokepon.container.team_count.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.call(null,cljs.core.zero_QMARK_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","team-count","tnr/team-count",2125883243,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.zero_QMARK_,values__19693__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","team-count","tnr/team-count",2125883243,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),values__19693__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19694__auto__;
}catch (e24167){var t__19731__auto__ = e24167;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","team-count","tnr/team-count",2125883243,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.battle.being_killed.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.being_killed;},new cljs.core.Symbol("mokepon.tests.battle","being-killed","mokepon.tests.battle/being-killed",1360500954,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.battle","mokepon.tests.battle",1013080789,null),new cljs.core.Symbol(null,"being-killed","being-killed",-2004338758,null),"src/mokepon/tests/battle.cljs",22,1,23,23,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.being_killed)?mokepon.tests.battle.being_killed.cljs$lang$test:null)]));
mokepon.tests.battle.capturing_wild_mokepon = (function mokepon$tests$battle$capturing_wild_mokepon(){
return cljs.test.test_var.call(null,mokepon$tests$battle$capturing_wild_mokepon.cljs$lang$var);
});
mokepon.tests.battle.capturing_wild_mokepon.cljs$lang$test = (function (){

mokepon.tests.core.set_cash.call(null,(20));

mokepon.container.set_battle_BANG_.call(null,new cljs.core.Keyword(null,"chipu","chipu",516526769),mokepon.monsters.sulbabaur);

try{var values__19693__auto___24175 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto___24176 = cljs.core.apply.call(null,cljs.core.zero_QMARK_,values__19693__auto___24175);
if(cljs.core.truth_(result__19694__auto___24176)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.zero_QMARK_,values__19693__auto___24175),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),values__19693__auto___24175);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24168){var t__19731__auto___24177 = e24168;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385))),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24177,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.container.throw_mokebox_BANG_.call(null);

try{var values__19693__auto___24178 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto___24179 = cljs.core.apply.call(null,cljs.core.zero_QMARK_,values__19693__auto___24178);
if(cljs.core.truth_(result__19694__auto___24179)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.zero_QMARK_,values__19693__auto___24178),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),values__19693__auto___24178);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24169){var t__19731__auto___24180 = e24169;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385))),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24180,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.container.buy_item_BANG_.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));

mokepon.container.buy_item_BANG_.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));

try{var values__19693__auto___24181 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),x__19298__auto__);
})();
var result__19694__auto___24182 = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto___24181);
if(cljs.core.truth_(result__19694__auto___24182)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto___24181),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto___24181);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24170){var t__19731__auto___24183 = e24170;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24183,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.container.throw_mokebox_BANG_.call(null);

try{var values__19693__auto___24184 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto___24185 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__19693__auto___24184);
if(cljs.core.truth_(result__19694__auto___24185)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.nil_QMARK_,values__19693__auto___24184),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__19693__auto___24184);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24171){var t__19731__auto___24186 = e24171;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014))),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24186,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__19693__auto___24187 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),x__19298__auto__);
})();
var result__19694__auto___24188 = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto___24187);
if(cljs.core.truth_(result__19694__auto___24188)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto___24187),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto___24187);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24172){var t__19731__auto___24189 = e24172;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24189,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696)], null),(100000000));

mokepon.container.throw_mokebox_BANG_.call(null);

try{var values__19693__auto___24190 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014));
return cljs.core._conj.call(null,(function (){var x__19298__auto____$1 = cljs.core.dissoc.call(null,mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"battling","battling",-129800115)),new cljs.core.Keyword(null,"captured","captured",704575240));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__19694__auto___24191 = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto___24190);
if(cljs.core.truth_(result__19694__auto___24191)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115)),new cljs.core.Keyword(null,"captured","captured",704575240))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto___24190),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115)),new cljs.core.Keyword(null,"captured","captured",704575240))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto___24190);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24173){var t__19731__auto___24192 = e24173;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115)),new cljs.core.Keyword(null,"captured","captured",704575240))),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24192,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__19693__auto__ = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.call(null,cljs.core.zero_QMARK_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.zero_QMARK_,values__19693__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),values__19693__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19694__auto__;
}catch (e24174){var t__19731__auto__ = e24174;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385))),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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

try{var values__19693__auto__ = (function (){var x__19298__auto__ = mokepon.rpg.battle_over_QMARK_.call(null,mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769)),mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"battling","battling",-129800115)));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","battle-over?","rpg/battle-over?",498853509,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769)),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115))),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","battle-over?","rpg/battle-over?",498853509,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769)),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115))),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19694__auto__;
}catch (e24193){var t__19731__auto__ = e24193;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","battle-over?","rpg/battle-over?",498853509,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769)),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115))),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.battle.battle_is_over_if_mokepon_is_captured.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.battle_is_over_if_mokepon_is_captured;},new cljs.core.Symbol("mokepon.tests.battle","battle-is-over-if-mokepon-is-captured","mokepon.tests.battle/battle-is-over-if-mokepon-is-captured",-1219472818,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.battle","mokepon.tests.battle",1013080789,null),new cljs.core.Symbol(null,"battle-is-over-if-mokepon-is-captured","battle-is-over-if-mokepon-is-captured",1640644398,null),"src/mokepon/tests/battle.cljs",47,1,66,66,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.battle_is_over_if_mokepon_is_captured)?mokepon.tests.battle.battle_is_over_if_mokepon_is_captured.cljs$lang$test:null)]));
mokepon.tests.battle.using_candy = (function mokepon$tests$battle$using_candy(){
return cljs.test.test_var.call(null,mokepon$tests$battle$using_candy.cljs$lang$var);
});
mokepon.tests.battle.using_candy.cljs$lang$test = (function (){

mokepon.container.buy_item_BANG_.call(null,new cljs.core.Keyword(null,"candy","candy",-1977730302));

try{var values__19693__auto___24198 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"candy","candy",-1977730302));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),x__19298__auto__);
})();
var result__19694__auto___24199 = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto___24198);
if(cljs.core.truth_(result__19694__auto___24199)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto___24198),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto___24198);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24194){var t__19731__auto___24200 = e24194;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24200,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.container.set_battle_BANG_.call(null,new cljs.core.Keyword(null,"chipu","chipu",516526769),mokepon.monsters.deogude);

mokepon.tests.core.make_enemy_attack_ready.call(null);

mokepon.container.tick_battle_core_BANG_.call(null);

try{var values__19693__auto___24201 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(30)),x__19298__auto__);
})();
var result__19694__auto___24202 = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto___24201);
if(cljs.core.truth_(result__19694__auto___24202)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(30)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto___24201),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(30)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto___24201);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24195){var t__19731__auto___24203 = e24195;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(30)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24203,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.container.use_candy_BANG_.call(null);

mokepon.tests.core.has_play_by_play.call(null,"Chipu has eated the delicious candy and was healed for 10 hp.");

try{var values__19693__auto___24204 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"candy","candy",-1977730302));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto___24205 = cljs.core.apply.call(null,cljs.core.zero_QMARK_,values__19693__auto___24204);
if(cljs.core.truth_(result__19694__auto___24205)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.zero_QMARK_,values__19693__auto___24204),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),values__19693__auto___24204);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24196){var t__19731__auto___24206 = e24196;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302))),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24206,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__19693__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(40)),x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(40)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(40)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19694__auto__;
}catch (e24197){var t__19731__auto__ = e24197;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(40)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.battle.using_candy.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.using_candy;},new cljs.core.Symbol("mokepon.tests.battle","using-candy","mokepon.tests.battle/using-candy",-1368366020,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.battle","mokepon.tests.battle",1013080789,null),new cljs.core.Symbol(null,"using-candy","using-candy",15600604,null),"src/mokepon/tests/battle.cljs",21,1,79,79,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.using_candy)?mokepon.tests.battle.using_candy.cljs$lang$test:null)]));
mokepon.tests.battle.using_candy_max_hp = (function mokepon$tests$battle$using_candy_max_hp(){
return cljs.test.test_var.call(null,mokepon$tests$battle$using_candy_max_hp.cljs$lang$var);
});
mokepon.tests.battle.using_candy_max_hp.cljs$lang$test = (function (){

mokepon.container.buy_item_BANG_.call(null,new cljs.core.Keyword(null,"candy","candy",-1977730302));

try{var values__19693__auto___24210 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"candy","candy",-1977730302));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),x__19298__auto__);
})();
var result__19694__auto___24211 = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto___24210);
if(cljs.core.truth_(result__19694__auto___24211)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto___24210),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto___24210);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24207){var t__19731__auto___24212 = e24207;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24212,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.container.set_battle_BANG_.call(null,new cljs.core.Keyword(null,"chipu","chipu",516526769),mokepon.monsters.deogude);

mokepon.container.use_candy_BANG_.call(null);

mokepon.tests.core.has_play_by_play.call(null,"Chipu has eated the delicious candy and was healed for 10 hp.");

try{var values__19693__auto___24213 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"candy","candy",-1977730302));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto___24214 = cljs.core.apply.call(null,cljs.core.zero_QMARK_,values__19693__auto___24213);
if(cljs.core.truth_(result__19694__auto___24214)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.zero_QMARK_,values__19693__auto___24213),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),values__19693__auto___24213);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24208){var t__19731__auto___24215 = e24208;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"candy","candy",-1977730302))),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24215,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__19693__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(50)),x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(50)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(50)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19694__auto__;
}catch (e24209){var t__19731__auto__ = e24209;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)),(50)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.battle.using_candy_max_hp.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.using_candy_max_hp;},new cljs.core.Symbol("mokepon.tests.battle","using-candy-max-hp","mokepon.tests.battle/using-candy-max-hp",-2038956613,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.battle","mokepon.tests.battle",1013080789,null),new cljs.core.Symbol(null,"using-candy-max-hp","using-candy-max-hp",1372414619,null),"src/mokepon/tests/battle.cljs",28,1,92,92,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.using_candy_max_hp)?mokepon.tests.battle.using_candy_max_hp.cljs$lang$test:null)]));
mokepon.tests.battle.choosing_mokepon_within_battle = (function mokepon$tests$battle$choosing_mokepon_within_battle(){
return cljs.test.test_var.call(null,mokepon$tests$battle$choosing_mokepon_within_battle.cljs$lang$var);
});
mokepon.tests.battle.choosing_mokepon_within_battle.cljs$lang$test = (function (){

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null),mokepon.monsters.sulbabaur);

mokepon.container.go_to_location_BANG_.call(null,new cljs.core.Keyword(null,"forest","forest",278860306));

mokepon.container.find_trouble_BANG_.call(null,false);

try{var values__19693__auto___24221 = (function (){var x__19298__auto__ = mokepon.rpg.choosable_monsters.call(null,mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699)));
return cljs.core._conj.call(null,(function (){var x__19298__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__19694__auto___24222 = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto___24221);
if(cljs.core.truth_(result__19694__auto___24222)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","choosable-monsters","rpg/choosable-monsters",-1510155964,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto___24221),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","choosable-monsters","rpg/choosable-monsters",-1510155964,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto___24221);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24216){var t__19731__auto___24223 = e24216;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","choosable-monsters","rpg/choosable-monsters",-1510155964,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24223,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"at","at",1476951349)], null),mokepon.rpg.active_turn_threshold);

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349)], null),mokepon.rpg.active_turn_threshold);

mokepon.container.choose_monster_BANG_.call(null,new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014));

try{var values__19693__auto___24224 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),x__19298__auto__);
})();
var result__19694__auto___24225 = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto___24224);
if(cljs.core.truth_(result__19694__auto___24225)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355)),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto___24224),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355)),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto___24224);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24217){var t__19731__auto___24226 = e24217;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355)),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24226,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__19693__auto___24227 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"at","at",1476951349));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto___24228 = cljs.core.apply.call(null,cljs.core.zero_QMARK_,values__19693__auto___24227);
if(cljs.core.truth_(result__19694__auto___24228)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"at","at",1476951349))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.zero_QMARK_,values__19693__auto___24227),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"at","at",1476951349))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),values__19693__auto___24227);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24218){var t__19731__auto___24229 = e24218;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"at","at",1476951349))),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24229,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__19693__auto___24230 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto___24231 = cljs.core.apply.call(null,cljs.core.zero_QMARK_,values__19693__auto___24230);
if(cljs.core.truth_(result__19694__auto___24231)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.zero_QMARK_,values__19693__auto___24230),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),values__19693__auto___24230);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24219){var t__19731__auto___24232 = e24219;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349))),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24232,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.tests.core.has_play_by_play.call(null,"You have chosen Sulbabaur to fight!");

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349)], null),mokepon.rpg.active_turn_threshold);

mokepon.container.choose_monster_BANG_.call(null,new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014));

try{var values__19693__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349));
return cljs.core._conj.call(null,(function (){var x__19298__auto____$1 = mokepon.rpg.active_turn_threshold;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349)),new cljs.core.Symbol("rpg","active-turn-threshold","rpg/active-turn-threshold",-1952951630,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349)),new cljs.core.Symbol("rpg","active-turn-threshold","rpg/active-turn-threshold",-1952951630,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19694__auto__;
}catch (e24220){var t__19731__auto__ = e24220;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"at","at",1476951349)),new cljs.core.Symbol("rpg","active-turn-threshold","rpg/active-turn-threshold",-1952951630,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.battle.choosing_mokepon_within_battle.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.choosing_mokepon_within_battle;},new cljs.core.Symbol("mokepon.tests.battle","choosing-mokepon-within-battle","mokepon.tests.battle/choosing-mokepon-within-battle",-490572729,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.battle","mokepon.tests.battle",1013080789,null),new cljs.core.Symbol(null,"choosing-mokepon-within-battle","choosing-mokepon-within-battle",1235545895,null),"src/mokepon/tests/battle.cljs",40,1,102,102,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.choosing_mokepon_within_battle)?mokepon.tests.battle.choosing_mokepon_within_battle.cljs$lang$test:null)]));
mokepon.tests.battle.looking_for_trouble_chooses_first_monster_on_team = (function mokepon$tests$battle$looking_for_trouble_chooses_first_monster_on_team(){
return cljs.test.test_var.call(null,mokepon$tests$battle$looking_for_trouble_chooses_first_monster_on_team.cljs$lang$var);
});
mokepon.tests.battle.looking_for_trouble_chooses_first_monster_on_team.cljs$lang$test = (function (){
cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699)], null),(function (p1__24233_SHARP_){
return cljs.core.dissoc.call(null,p1__24233_SHARP_,new cljs.core.Keyword(null,"chipu","chipu",516526769));
}));

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null),mokepon.monsters.sulbabaur);

mokepon.container.go_to_location_BANG_.call(null,new cljs.core.Keyword(null,"forest","forest",278860306));

mokepon.container.find_trouble_BANG_.call(null,false);

try{var values__19693__auto__ = (function (){var x__19298__auto__ = mokepon.container.app_state_chosen_monster.call(null);
return cljs.core._conj.call(null,(function (){var x__19298__auto____$1 = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","app-state-chosen-monster","tnr/app-state-chosen-monster",325088959,null)),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","app-state-chosen-monster","tnr/app-state-chosen-monster",325088959,null)),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19694__auto__;
}catch (e24234){var t__19731__auto__ = e24234;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","app-state-chosen-monster","tnr/app-state-chosen-monster",325088959,null)),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014))),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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

try{var values__19693__auto___24236 = (function (){var x__19298__auto__ = mokepon.rpg.is_dead_QMARK_.call(null,mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769)));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__19298__auto__);
})();
var result__19694__auto___24237 = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto___24236);
if(cljs.core.truth_(result__19694__auto___24237)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","is-dead?","rpg/is-dead?",-1539886536,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769))),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto___24236),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","is-dead?","rpg/is-dead?",-1539886536,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769))),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto___24236);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24235){var t__19731__auto___24238 = e24235;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rpg","is-dead?","rpg/is-dead?",-1539886536,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769))),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24238,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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

try{var values__19693__auto___24242 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"cash","cash",181122222));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto___24243 = cljs.core.apply.call(null,cljs.core.zero_QMARK_,values__19693__auto___24242);
if(cljs.core.truth_(result__19694__auto___24243)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.zero_QMARK_,values__19693__auto___24242),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),values__19693__auto___24242);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24239){var t__19731__auto___24244 = e24239;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222))),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24244,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.tests.core.make_chosen_attack_ready.call(null);

mokepon.container.attack_BANG_.call(null);

try{var values__19693__auto___24245 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"battling","battling",-129800115));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto___24246 = cljs.core.apply.call(null,mokepon.rpg.is_dead_QMARK_,values__19693__auto___24245);
if(cljs.core.truth_(result__19694__auto___24246)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("rpg","is-dead?","rpg/is-dead?",-1539886536,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,mokepon.rpg.is_dead_QMARK_,values__19693__auto___24245),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("rpg","is-dead?","rpg/is-dead?",-1539886536,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("rpg","is-dead?","rpg/is-dead?",-1539886536,null),values__19693__auto___24245);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24240){var t__19731__auto___24247 = e24240;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("rpg","is-dead?","rpg/is-dead?",-1539886536,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"battling","battling",-129800115))),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24247,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__19693__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"cash","cash",181122222));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(3)),x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222)),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222)),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19694__auto__;
}catch (e24241){var t__19731__auto__ = e24241;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222)),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.battle.winning_battle_gives_fiddy.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.battle.winning_battle_gives_fiddy;},new cljs.core.Symbol("mokepon.tests.battle","winning-battle-gives-fiddy","mokepon.tests.battle/winning-battle-gives-fiddy",-159824708,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.battle","mokepon.tests.battle",1013080789,null),new cljs.core.Symbol(null,"winning-battle-gives-fiddy","winning-battle-gives-fiddy",551808988,null),"src/mokepon/tests/battle.cljs",36,1,147,147,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.battle.winning_battle_gives_fiddy)?mokepon.tests.battle.winning_battle_gives_fiddy.cljs$lang$test:null)]));

//# sourceMappingURL=battle.js.map