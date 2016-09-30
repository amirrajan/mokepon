// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.tests.shop');
goog.require('cljs.core');
goog.require('mokepon.monsters');
goog.require('mokepon.container');
goog.require('mokepon.shop');
goog.require('mokepon.rpg');
goog.require('cljs.test');
goog.require('mokepon.tests.core');
mokepon.tests.shop.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),mokepon.tests.core.reset_game], null)], null);
mokepon.tests.shop.purchasing_item = (function mokepon$tests$shop$purchasing_item(){
return cljs.test.test_var.call(null,mokepon$tests$shop$purchasing_item.cljs$lang$var);
});
mokepon.tests.shop.purchasing_item.cljs$lang$test = (function (){

mokepon.tests.core.set_cash.call(null,(10));

mokepon.container.buy_item_BANG_.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));

mokepon.tests.core.has_play_by_play.call(null,"Bought Mok\u00E9box.");

try{var values__19693__auto___24066 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),x__19298__auto__);
})();
var result__19694__auto___24067 = cljs.core.apply.call(null,cljs.core._EQ_,values__19693__auto___24066);
if(cljs.core.truth_(result__19694__auto___24067)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19693__auto___24066),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19693__auto___24066);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24064){var t__19731__auto___24068 = e24064;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24068,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__19693__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"cash","cash",181122222));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.call(null,cljs.core.zero_QMARK_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.zero_QMARK_,values__19693__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),values__19693__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19694__auto__;
}catch (e24065){var t__19731__auto__ = e24065;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222))),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.shop.purchasing_item.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.shop.purchasing_item;},new cljs.core.Symbol("mokepon.tests.shop","purchasing-item","mokepon.tests.shop/purchasing-item",1235958526,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.shop","mokepon.tests.shop",600065345,null),new cljs.core.Symbol(null,"purchasing-item","purchasing-item",-58960928,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/shop.cljs",25,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.shop.purchasing_item)?mokepon.tests.shop.purchasing_item.cljs$lang$test:null)]));
mokepon.tests.shop.not_enough_cash_to_buy_item = (function mokepon$tests$shop$not_enough_cash_to_buy_item(){
return cljs.test.test_var.call(null,mokepon$tests$shop$not_enough_cash_to_buy_item.cljs$lang$var);
});
mokepon.tests.shop.not_enough_cash_to_buy_item.cljs$lang$test = (function (){

mokepon.tests.core.set_cash.call(null,(0));

mokepon.container.buy_item_BANG_.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));

mokepon.tests.core.has_play_by_play.call(null,"Can't afford.");

try{var values__19693__auto___24071 = (function (){var x__19298__auto__ = mokepon.container.item_count.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto___24072 = cljs.core.apply.call(null,cljs.core.zero_QMARK_,values__19693__auto___24071);
if(cljs.core.truth_(result__19694__auto___24072)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.zero_QMARK_,values__19693__auto___24071),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),values__19693__auto___24071);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e24069){var t__19731__auto___24073 = e24069;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol("tnr","item-count","tnr/item-count",1649075411,null),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385))),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto___24073,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__19693__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"cash","cash",181122222));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.call(null,cljs.core.zero_QMARK_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.zero_QMARK_,values__19693__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),values__19693__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19694__auto__;
}catch (e24070){var t__19731__auto__ = e24070;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"cash","cash",181122222))),new cljs.core.Keyword(null,"actual","actual",107306363),t__19731__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.shop.not_enough_cash_to_buy_item.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.shop.not_enough_cash_to_buy_item;},new cljs.core.Symbol("mokepon.tests.shop","not-enough-cash-to-buy-item","mokepon.tests.shop/not-enough-cash-to-buy-item",542290588,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.shop","mokepon.tests.shop",600065345,null),new cljs.core.Symbol(null,"not-enough-cash-to-buy-item","not-enough-cash-to-buy-item",-34771522,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/shop.cljs",37,1,25,25,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.shop.not_enough_cash_to_buy_item)?mokepon.tests.shop.not_enough_cash_to_buy_item.cljs$lang$test:null)]));

//# sourceMappingURL=shop.js.map