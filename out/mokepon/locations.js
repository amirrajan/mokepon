// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.locations');
goog.require('cljs.core');
goog.require('mokepon.monsters');
mokepon.locations.location_monsters = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$forest,mokepon.monsters.sulbabaur,cljs.core.cst$kw$canyon,mokepon.monsters.deogude,cljs.core.cst$kw$pool,mokepon.monsters.tirsqule], null);
mokepon.locations.captured_monsters_gt_eq = (function mokepon$locations$captured_monsters_gt_eq(monster_count){
return (function (game_state){
return (cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$captured,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters], null)))) >= monster_count);
});
});
mokepon.locations.location_info = (function mokepon$locations$location_info(){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$phone,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$description,"",cljs.core.cst$kw$action,"Phone",cljs.core.cst$kw$available_DASH_if,(function (_){
return true;
})], null),cljs.core.cst$kw$home,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$description,"",cljs.core.cst$kw$action,"Home",cljs.core.cst$kw$available_DASH_if,(function (_){
return true;
})], null),cljs.core.cst$kw$shop,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$description,"",cljs.core.cst$kw$action,"Shop",cljs.core.cst$kw$awesome_DASH_text,"Hodor",cljs.core.cst$kw$available_DASH_if,mokepon.locations.captured_monsters_gt_eq((1))], null),cljs.core.cst$kw$canyon,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$description,"Canyon",cljs.core.cst$kw$action,"Canyon",cljs.core.cst$kw$awesome_DASH_text,"Canyon",cljs.core.cst$kw$available_DASH_if,mokepon.locations.captured_monsters_gt_eq((1))], null),cljs.core.cst$kw$forest,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$description,"Forest",cljs.core.cst$kw$action,"Forest",cljs.core.cst$kw$awesome_DASH_text,"Forest",cljs.core.cst$kw$available_DASH_if,mokepon.locations.captured_monsters_gt_eq((1))], null),cljs.core.cst$kw$pool,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$description,"Lake",cljs.core.cst$kw$action,"Lake",cljs.core.cst$kw$awesome_DASH_text,"Lake",cljs.core.cst$kw$available_DASH_if,mokepon.locations.captured_monsters_gt_eq((1))], null)], null);
});
