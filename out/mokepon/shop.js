// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.shop');
goog.require('cljs.core');
mokepon.shop.captured_monsters_gt_eq = (function mokepon$shop$captured_monsters_gt_eq(monster_count){
return (function (game_state){
return (cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"captured","captured",704575240),cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mokedex","mokedex",-1954142182),new cljs.core.Keyword(null,"monsters","monsters",-2097589730)], null)))) >= monster_count);
});
});
mokepon.shop.shop_items = (function mokepon$shop$shop_items(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385),new cljs.core.Keyword(null,"name","name",1843675177),"Mok\u00E9box",new cljs.core.Keyword(null,"cost","cost",-1094861735),(10),new cljs.core.Keyword(null,"description","description",-1428560544),"Catches Mok\u00E9pon.",new cljs.core.Keyword(null,"available-if","available-if",-1775710480),(function (_){
return true;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"candy","candy",-1977730302),new cljs.core.Keyword(null,"name","name",1843675177),"Candy",new cljs.core.Keyword(null,"cost","cost",-1094861735),(5),new cljs.core.Keyword(null,"description","description",-1428560544),"Heals Mok\u00E9pon.",new cljs.core.Keyword(null,"available-if","available-if",-1775710480),(function (_){
return true;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"battery","battery",18489324),new cljs.core.Keyword(null,"name","name",1843675177),"Battery",new cljs.core.Keyword(null,"description","description",-1428560544),"Evolves electric Mok\u00E9pon.",new cljs.core.Keyword(null,"cost","cost",-1094861735),(25),new cljs.core.Keyword(null,"available-if","available-if",-1775710480),mokepon.shop.captured_monsters_gt_eq.call(null,(4))], null)], null);
});
mokepon.shop.shop_item_available_QMARK_ = (function mokepon$shop$shop_item_available_QMARK_(game_state,item){
return new cljs.core.Keyword(null,"available-if","available-if",-1775710480).cljs$core$IFn$_invoke$arity$1(item).call(null,game_state);
});
mokepon.shop.available_shop_items = (function mokepon$shop$available_shop_items(game_state){
return cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.call(null,(function (p1__23858_SHARP_){
return mokepon.shop.shop_item_available_QMARK_.call(null,game_state,p1__23858_SHARP_);
}),mokepon.shop.shop_items.call(null)));
});
mokepon.shop.shop_items_lookup = (function mokepon$shop$shop_items_lookup(){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),item], null);
}),mokepon.shop.shop_items.call(null)));
});

//# sourceMappingURL=shop.js.map