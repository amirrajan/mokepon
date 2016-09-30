// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.tests.messages');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('mokepon.tests.core');
goog.require('mokepon.monsters');
goog.require('mokepon.rpg');
goog.require('mokepon.container');
mokepon.tests.messages.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),mokepon.tests.core.reset_game], null)], null);
mokepon.tests.messages.first_message_from_mom = (function mokepon$tests$messages$first_message_from_mom(){
return cljs.test.test_var.call(null,mokepon$tests$messages$first_message_from_mom.cljs$lang$var);
});
mokepon.tests.messages.first_message_from_mom.cljs$lang$test = (function (){

var first_message = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"messages","messages",345434482),(0));
try{var values__19693__auto___24086 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(first_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Where are you? Have you found a job yet?! Come by the house. I have a Chipu for you. Maybe you can make some money with it."),x__19298__auto__);
})();
var result__19694__auto___24087 = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto___24086);
if(cljs.core.truth_(result__19694__auto___24087)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),"Where are you? Have you found a job yet?! Come by the house. I have a Chipu for you. Maybe you can make some money with it."),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto___24086),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),"Where are you? Have you found a job yet?! Come by the house. I have a Chipu for you. Maybe you can make some money with it."),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto___24086);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24083){var t__19731__auto___24088 = e24083;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),"Where are you? Have you found a job yet?! Come by the house. I have a Chipu for you. Maybe you can make some money with it."),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24088,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__19693__auto___24089 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(first_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"mom","mom",-1320393848)),x__19298__auto__);
})();
var result__19694__auto___24090 = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto___24089);
if(cljs.core.truth_(result__19694__auto___24090)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),new cljs.core.Keyword(null,"mom","mom",-1320393848)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto___24089),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),new cljs.core.Keyword(null,"mom","mom",-1320393848)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto___24089);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24084){var t__19731__auto___24091 = e24084;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),new cljs.core.Keyword(null,"mom","mom",-1320393848)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24091,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__19693__auto__ = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(first_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19694__auto__;
}catch (e24085){var t__19731__auto__ = e24085;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.messages.first_message_from_mom.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.first_message_from_mom;},new cljs.core.Symbol("mokepon.tests.messages","first-message-from-mom","mokepon.tests.messages/first-message-from-mom",-361860598,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.messages","mokepon.tests.messages",1834786765,null),new cljs.core.Symbol(null,"first-message-from-mom","first-message-from-mom",-1944264826,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/messages.cljs",32,1,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.first_message_from_mom)?mokepon.tests.messages.first_message_from_mom.cljs$lang$test:null)]));
mokepon.tests.messages.losing_chipu_causes_angry_mom = (function mokepon$tests$messages$losing_chipu_causes_angry_mom(){
return cljs.test.test_var.call(null,mokepon$tests$messages$losing_chipu_causes_angry_mom.cljs$lang$var);
});
mokepon.tests.messages.losing_chipu_causes_angry_mom.cljs$lang$test = (function (){

cljs.core.reset_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.new_game.call(null));

mokepon.container.remove_dead_team_members_BANG_.call(null);

try{var values__19693__auto___24097 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"messages","messages",345434482),(1),new cljs.core.Keyword(null,"text","text",-1790561697));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__19298__auto__);
})();
var result__19694__auto___24098 = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto___24097);
if(cljs.core.truth_(result__19694__auto___24098)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"messages","messages",345434482),(1),new cljs.core.Keyword(null,"text","text",-1790561697)),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto___24097),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"messages","messages",345434482),(1),new cljs.core.Keyword(null,"text","text",-1790561697)),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto___24097);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24092){var t__19731__auto___24099 = e24092;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"messages","messages",345434482),(1),new cljs.core.Keyword(null,"text","text",-1790561697)),null),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24099,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cljs.core.reset_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.new_game.call(null));

mokepon.container.take_chipu_BANG_.call(null);

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null),mokepon.monsters.sulbabaur);

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),(0));

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),(0));

mokepon.container.remove_dead_team_members_BANG_.call(null);

var angry_message = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"messages","messages",345434482),(1));
try{var values__19693__auto___24100 = (function (){var x__19298__auto__ = angry_message.call(null,new cljs.core.Keyword(null,"text","text",-1790561697));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Did your Chipu get killed? Worthless. Come by and I'll give you another one."),x__19298__auto__);
})();
var result__19694__auto___24101 = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto___24100);
if(cljs.core.truth_(result__19694__auto___24101)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null),new cljs.core.Keyword(null,"text","text",-1790561697)),"Did your Chipu get killed? Worthless. Come by and I'll give you another one."),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto___24100),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null),new cljs.core.Keyword(null,"text","text",-1790561697)),"Did your Chipu get killed? Worthless. Come by and I'll give you another one."),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto___24100);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24093){var t__19731__auto___24102 = e24093;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null),new cljs.core.Keyword(null,"text","text",-1790561697)),"Did your Chipu get killed? Worthless. Come by and I'll give you another one."),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24102,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__19693__auto___24103 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(angry_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__19694__auto___24104 = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto___24103);
if(cljs.core.truth_(result__19694__auto___24104)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto___24103),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto___24103);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24094){var t__19731__auto___24105 = e24094;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24105,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__19693__auto___24106 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(angry_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"mom","mom",-1320393848)),x__19298__auto__);
})();
var result__19694__auto___24107 = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto___24106);
if(cljs.core.truth_(result__19694__auto___24107)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),new cljs.core.Keyword(null,"mom","mom",-1320393848)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto___24106),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),new cljs.core.Keyword(null,"mom","mom",-1320393848)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto___24106);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24095){var t__19731__auto___24108 = e24095;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),new cljs.core.Keyword(null,"mom","mom",-1320393848)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24108,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__19693__auto__ = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"seen?","seen?",-1677689856).cljs$core$IFn$_invoke$arity$1(angry_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,false),x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19694__auto__;
}catch (e24096){var t__19731__auto__ = e24096;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.messages.losing_chipu_causes_angry_mom.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.losing_chipu_causes_angry_mom;},new cljs.core.Symbol("mokepon.tests.messages","losing-chipu-causes-angry-mom","mokepon.tests.messages/losing-chipu-causes-angry-mom",632628653,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.messages","mokepon.tests.messages",1834786765,null),new cljs.core.Symbol(null,"losing-chipu-causes-angry-mom","losing-chipu-causes-angry-mom",-2019309295,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/messages.cljs",39,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.losing_chipu_causes_angry_mom)?mokepon.tests.messages.losing_chipu_causes_angry_mom.cljs$lang$test:null)]));
mokepon.tests.messages.checking_messages_marks_them_as_seen = (function mokepon$tests$messages$checking_messages_marks_them_as_seen(){
return cljs.test.test_var.call(null,mokepon$tests$messages$checking_messages_marks_them_as_seen.cljs$lang$var);
});
mokepon.tests.messages.checking_messages_marks_them_as_seen.cljs$lang$test = (function (){
try{var values__19693__auto___24112 = (function (){var x__19298__auto__ = mokepon.container.app_state_new_message_count.call(null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),x__19298__auto__);
})();
var result__19694__auto___24113 = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto___24112);
if(cljs.core.truth_(result__19694__auto___24113)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","app-state-new-message-count","tnr/app-state-new-message-count",1238876994,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto___24112),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","app-state-new-message-count","tnr/app-state-new-message-count",1238876994,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto___24112);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24109){var t__19731__auto___24114 = e24109;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","app-state-new-message-count","tnr/app-state-new-message-count",1238876994,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24114,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.container.view_messages_BANG_.call(null);

try{var values__19693__auto___24115 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"location","location",1815599388));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"messages","messages",345434482)),x__19298__auto__);
})();
var result__19694__auto___24116 = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto___24115);
if(cljs.core.truth_(result__19694__auto___24116)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"location","location",1815599388)),new cljs.core.Keyword(null,"messages","messages",345434482)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto___24115),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"location","location",1815599388)),new cljs.core.Keyword(null,"messages","messages",345434482)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto___24115);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24110){var t__19731__auto___24117 = e24110;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"location","location",1815599388)),new cljs.core.Keyword(null,"messages","messages",345434482)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24117,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__19693__auto__ = (function (){var x__19298__auto__ = mokepon.container.app_state_new_message_count.call(null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","app-state-new-message-count","tnr/app-state-new-message-count",1238876994,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","app-state-new-message-count","tnr/app-state-new-message-count",1238876994,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19694__auto__;
}catch (e24111){var t__19731__auto__ = e24111;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","app-state-new-message-count","tnr/app-state-new-message-count",1238876994,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.messages.checking_messages_marks_them_as_seen.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.checking_messages_marks_them_as_seen;},new cljs.core.Symbol("mokepon.tests.messages","checking-messages-marks-them-as-seen","mokepon.tests.messages/checking-messages-marks-them-as-seen",-1549953241,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.messages","mokepon.tests.messages",1834786765,null),new cljs.core.Symbol(null,"checking-messages-marks-them-as-seen","checking-messages-marks-them-as-seen",-982637645,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/messages.cljs",46,1,61,61,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.checking_messages_marks_them_as_seen)?mokepon.tests.messages.checking_messages_marks_them_as_seen.cljs$lang$test:null)]));
mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget = (function mokepon$tests$messages$first_chipu_from_mom_yields_message_from_midget(){
return cljs.test.test_var.call(null,mokepon$tests$messages$first_chipu_from_mom_yields_message_from_midget.cljs$lang$var);
});
mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget.cljs$lang$test = (function (){

cljs.core.reset_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.new_game.call(null));

mokepon.container.take_chipu_BANG_.call(null);

var midget_message = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"messages","messages",345434482),(1));
try{var values__19693__auto___24122 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(midget_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Hey kid. Your mom told me that I can sell stuff to you. Come by."),x__19298__auto__);
})();
var result__19694__auto___24123 = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto___24122);
if(cljs.core.truth_(result__19694__auto___24123)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),"Hey kid. Your mom told me that I can sell stuff to you. Come by."),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto___24122),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),"Hey kid. Your mom told me that I can sell stuff to you. Come by."),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto___24122);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24118){var t__19731__auto___24124 = e24118;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),"Hey kid. Your mom told me that I can sell stuff to you. Come by."),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24124,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__19693__auto___24125 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(midget_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__19694__auto___24126 = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto___24125);
if(cljs.core.truth_(result__19694__auto___24126)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto___24125),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto___24125);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24119){var t__19731__auto___24127 = e24119;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24127,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__19693__auto___24128 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(midget_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"midget","midget",2073970809)),x__19298__auto__);
})();
var result__19694__auto___24129 = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto___24128);
if(cljs.core.truth_(result__19694__auto___24129)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),new cljs.core.Keyword(null,"midget","midget",2073970809)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto___24128),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),new cljs.core.Keyword(null,"midget","midget",2073970809)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto___24128);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24120){var t__19731__auto___24130 = e24120;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),new cljs.core.Keyword(null,"midget","midget",2073970809)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24130,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__19693__auto__ = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"seen?","seen?",-1677689856).cljs$core$IFn$_invoke$arity$1(midget_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,false),x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19694__auto__;
}catch (e24121){var t__19731__auto__ = e24121;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget;},new cljs.core.Symbol("mokepon.tests.messages","first-chipu-from-mom-yields-message-from-midget","mokepon.tests.messages/first-chipu-from-mom-yields-message-from-midget",401439979,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.messages","mokepon.tests.messages",1834786765,null),new cljs.core.Symbol(null,"first-chipu-from-mom-yields-message-from-midget","first-chipu-from-mom-yields-message-from-midget",-1310795929,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/messages.cljs",57,1,71,71,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget)?mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget.cljs$lang$test:null)]));

//# sourceMappingURL=messages.js.map