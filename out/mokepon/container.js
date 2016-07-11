// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.container');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('mokepon.monsters');
goog.require('mokepon.items');
goog.require('alandipert.storage_atom');
goog.require('mokepon.rpg');
goog.require('mokepon.components');
mokepon.container.alert = (function mokepon$container$alert(message){
return (function (){
return window.alert(message);
});
});
cljs.core.reset_BANG_.call(null,alandipert.storage_atom.storage_delay,(1000));
if(typeof mokepon.container.current_app_state !== 'undefined'){
} else {
mokepon.container.current_app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"game","game",-441523833)], null));
}
if(typeof mokepon.container.game_app_state !== 'undefined'){
} else {
mokepon.container.game_app_state = alandipert.storage_atom.local_storage.call(null,cljs.core.atom.call(null,mokepon.rpg.new_game),new cljs.core.Keyword(null,"game","game",-441523833));
}
if(typeof mokepon.container.test_app_state !== 'undefined'){
} else {
mokepon.container.test_app_state = cljs.core.atom.call(null,mokepon.rpg.new_game);
}
mokepon.container.app_state = (function mokepon$container$app_state(){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.current_app_state)),new cljs.core.Keyword(null,"game","game",-441523833))){
return mokepon.container.game_app_state;
} else {
return mokepon.container.test_app_state;
}
});
mokepon.container.get_state = (function mokepon$container$get_state(var_args){
var args__19546__auto__ = [];
var len__19539__auto___31094 = arguments.length;
var i__19540__auto___31095 = (0);
while(true){
if((i__19540__auto___31095 < len__19539__auto___31094)){
args__19546__auto__.push((arguments[i__19540__auto___31095]));

var G__31096 = (i__19540__auto___31095 + (1));
i__19540__auto___31095 = G__31096;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,mokepon.container.app_state.call(null)),path);
});

mokepon.container.get_state.cljs$lang$maxFixedArity = (0);

mokepon.container.get_state.cljs$lang$applyTo = (function (seq31093){
return mokepon.container.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31093));
});

mokepon.container.team_count = (function mokepon$container$team_count(){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null))));
});
mokepon.container.chosen_monster = (function mokepon$container$chosen_monster(){
return mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null))));
});
mokepon.container.set_battle = (function mokepon$container$set_battle(chosen_key,battling){
return cljs.core.assoc.call(null,cljs.core.deref.call(null,mokepon.container.app_state.call(null)),new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355),chosen_key,new cljs.core.Keyword(null,"battling","battling",-129800115),battling);
});
mokepon.container.clear_battle_BANG_ = (function mokepon$container$clear_battle_BANG_(){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355),null,new cljs.core.Keyword(null,"battling","battling",-129800115),null);
});
mokepon.container.update_in_team = (function mokepon$container$update_in_team(monster_key,new_value){
return cljs.core.assoc.call(null,new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null))),monster_key,new_value);
});
mokepon.container.add_to_play_by_play = (function mokepon$container$add_to_play_by_play(var_args){
var args__19546__auto__ = [];
var len__19539__auto___31098 = arguments.length;
var i__19540__auto___31099 = (0);
while(true){
if((i__19540__auto___31099 < len__19539__auto___31098)){
args__19546__auto__.push((arguments[i__19540__auto___31099]));

var G__31100 = (i__19540__auto___31099 + (1));
i__19540__auto___31099 = G__31100;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.container.add_to_play_by_play.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.container.add_to_play_by_play.cljs$core$IFn$_invoke$arity$variadic = (function (text){
return cljs.core.conj.call(null,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null))),cljs.core.apply.call(null,cljs.core.str,text));
});

mokepon.container.add_to_play_by_play.cljs$lang$maxFixedArity = (0);

mokepon.container.add_to_play_by_play.cljs$lang$applyTo = (function (seq31097){
return mokepon.container.add_to_play_by_play.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31097));
});

mokepon.container.decrement_item_BANG_ = (function mokepon$container$decrement_item_BANG_(item_key){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_key], null),(function (p1__31101_SHARP_){
return ((function (){var or__18464__auto__ = p1__31101_SHARP_;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return (0);
}
})() - (1));
}));
});
mokepon.container.item_count = (function mokepon$container$item_count(item_key){
var or__18464__auto__ = mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"items","items",1031954938),item_key);
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return (0);
}
});
mokepon.container.add_to_play_by_play_BANG_ = (function mokepon$container$add_to_play_by_play_BANG_(var_args){
var args__19546__auto__ = [];
var len__19539__auto___31103 = arguments.length;
var i__19540__auto___31104 = (0);
while(true){
if((i__19540__auto___31104 < len__19539__auto___31103)){
args__19546__auto__.push((arguments[i__19540__auto___31104]));

var G__31105 = (i__19540__auto___31104 + (1));
i__19540__auto___31104 = G__31105;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (message){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),cljs.core.apply.call(null,mokepon.container.add_to_play_by_play,message));
});

mokepon.container.add_to_play_by_play_BANG_.cljs$lang$maxFixedArity = (0);

mokepon.container.add_to_play_by_play_BANG_.cljs$lang$applyTo = (function (seq31102){
return mokepon.container.add_to_play_by_play_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31102));
});

mokepon.container.choose_monster_BANG_ = (function mokepon$container$choose_monster_BANG_(team_key){
if(cljs.core.not_EQ_.call(null,mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355)),team_key)){
cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355),team_key);

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"team","team",1355747699),mokepon.rpg.reset_team_at.call(null,mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699))));

return mokepon.container.add_to_play_by_play_BANG_.call(null,"You have chosen ",mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699),team_key,new cljs.core.Keyword(null,"name","name",1843675177))," to fight!");
} else {
return null;
}
});
mokepon.container.first_live_team_member = (function mokepon$container$first_live_team_member(){
return cljs.core.first.call(null,mokepon.rpg.choosable_monsters.call(null,mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699))));
});
mokepon.container.buy_item_BANG_ = (function mokepon$container$buy_item_BANG_(item_id){
var item = item_id.call(null,mokepon.items.store_items_lookup);
var current_cash = new cljs.core.Keyword(null,"cash","cash",181122222).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null)));
var afford_QMARK_ = (current_cash >= new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(item));
var new_cash = (current_cash - new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(item));
if(afford_QMARK_){
cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"cash","cash",181122222),new_cash);

mokepon.container.add_to_play_by_play_BANG_.call(null,"You take the ",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)," from the midget's saggy, squishy hand. ","He smiles and gives you a tip of his top hat.");

return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id], null),((function (item,current_cash,afford_QMARK_,new_cash){
return (function (){
return (mokepon.container.item_count.call(null,item_id) + (1));
});})(item,current_cash,afford_QMARK_,new_cash))
);
} else {
return mokepon.container.add_to_play_by_play_BANG_.call(null,"The midget bitch slaps you saying that you can't afford that. ","He wonders if you were taught common core math.");
}
});
mokepon.container.throw_mokebox_BANG_ = (function mokepon$container$throw_mokebox_BANG_(){
var map__31109 = new cljs.core.Keyword(null,"battling","battling",-129800115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null)));
var map__31109__$1 = ((((!((map__31109 == null)))?((((map__31109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31109):map__31109);
var max_hp = cljs.core.get.call(null,map__31109__$1,new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696));
var hp = cljs.core.get.call(null,map__31109__$1,new cljs.core.Keyword(null,"hp","hp",-1541237831));
var capture_chance = ((max_hp - hp) / max_hp);
var roll = cljs.core.rand.call(null);
var captured_QMARK_ = (capture_chance > roll);
var has_mokeball_QMARK_ = new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null))));
var battling = new cljs.core.Keyword(null,"battling","battling",-129800115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null)));
if(cljs.core.truth_(has_mokeball_QMARK_)){
mokepon.container.decrement_item_BANG_.call(null,new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385));

if(captured_QMARK_){
mokepon.container.add_to_play_by_play_BANG_.call(null,"The Mok\u00E9box knocks out the ",mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"name","name",1843675177)),". It's been captured!");

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"captured","captured",704575240)], null),true);

return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699)], null),((function (map__31109,map__31109__$1,max_hp,hp,capture_chance,roll,captured_QMARK_,has_mokeball_QMARK_,battling){
return (function (p1__31106_SHARP_){
return cljs.core.assoc.call(null,p1__31106_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(battling),battling);
});})(map__31109,map__31109__$1,max_hp,hp,capture_chance,roll,captured_QMARK_,has_mokeball_QMARK_,battling))
);
} else {
return mokepon.container.add_to_play_by_play_BANG_.call(null,"The Mok\u00E9box bounces off ",mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"name","name",1843675177)),". It's still too strong!");
}
} else {
return null;
}
});
mokepon.container.sleep_at_home_BANG_ = (function mokepon$container$sleep_at_home_BANG_(){
mokepon.container.add_to_play_by_play_BANG_.call(null,"You've slept. Your posse has been healed.");

return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699)], null),(function (p1__31111_SHARP_){
return mokepon.rpg.heal_team.call(null,p1__31111_SHARP_);
}));
});
mokepon.container.reset_team_at_BANG_ = (function mokepon$container$reset_team_at_BANG_(){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699)], null),(function (p1__31112_SHARP_){
return mokepon.rpg.reset_team_at.call(null,p1__31112_SHARP_);
}));
});
mokepon.container.tick_battle_core_BANG_ = (function mokepon$container$tick_battle_core_BANG_(){
var map__31115 = mokepon.rpg.tick_battle.call(null,mokepon.container.chosen_monster.call(null),new cljs.core.Keyword(null,"battling","battling",-129800115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null))),new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null))));
var map__31115__$1 = ((((!((map__31115 == null)))?((((map__31115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31115):map__31115);
var battling = cljs.core.get.call(null,map__31115__$1,new cljs.core.Keyword(null,"battling","battling",-129800115));
var chosen = cljs.core.get.call(null,map__31115__$1,new cljs.core.Keyword(null,"chosen","chosen",-1422409985));
var play_by_play = cljs.core.get.call(null,map__31115__$1,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732));
cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"battling","battling",-129800115),battling,new cljs.core.Keyword(null,"team","team",1355747699),mokepon.container.update_in_team.call(null,new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null))),chosen),new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),play_by_play);

var live_member_key = mokepon.container.first_live_team_member.call(null);
var live_monster = cljs.core.get_in.call(null,cljs.core.deref.call(null,mokepon.container.app_state.call(null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),live_member_key], null));
if(cljs.core.truth_((function (){var and__18452__auto__ = mokepon.rpg.is_dead_QMARK_.call(null,chosen);
if(cljs.core.truth_(and__18452__auto__)){
return live_member_key;
} else {
return and__18452__auto__;
}
})())){
mokepon.container.add_to_play_by_play_BANG_.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(live_monster)),cljs.core.str(" dashes into battle!")].join(''));

return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355),live_member_key);
} else {
return null;
}
});
mokepon.container.dead_team_member_keys = (function mokepon$container$dead_team_member_keys(){
return cljs.core.map.call(null,(function (p__31125){
var vec__31126 = p__31125;
var k = cljs.core.nth.call(null,vec__31126,(0),null);
var v = cljs.core.nth.call(null,vec__31126,(1),null);
return k;
}),cljs.core.filter.call(null,(function (p__31129){
var vec__31130 = p__31129;
var k = cljs.core.nth.call(null,vec__31130,(0),null);
var v = cljs.core.nth.call(null,vec__31130,(1),null);
return mokepon.rpg.is_dead_QMARK_.call(null,v);
}),new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null)))));
});
mokepon.container.remove_dead_team_members_BANG_ = (function mokepon$container$remove_dead_team_members_BANG_(){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699)], null),(function (p1__31133_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__31133_SHARP_,mokepon.container.dead_team_member_keys.call(null));
}));
});
mokepon.container.count_down_BANG_ = (function mokepon$container$count_down_BANG_(message,callback){
if(cljs.core.truth_(message)){
mokepon.container.add_to_play_by_play_BANG_.call(null,message);
} else {
}

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"battle-count-down","battle-count-down",-484367345),(mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"battle-count-down","battle-count-down",-484367345)) - (250)));

return window.setTimeout(callback,(250));
});
mokepon.container.tick_battle_BANG_ = (function mokepon$container$tick_battle_BANG_(){
if(cljs.core.not.call(null,mokepon.rpg.battle_over_QMARK_.call(null,mokepon.container.chosen_monster.call(null),new cljs.core.Keyword(null,"battling","battling",-129800115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null)))))){
if(cljs.core.not.call(null,mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"battle-count-down","battle-count-down",-484367345)))){
cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"battle-count-down","battle-count-down",-484367345),(5000));

return window.setTimeout((function (){
return mokepon$container$tick_battle_BANG_.call(null);
}),(250));
} else {
if(cljs.core._EQ_.call(null,mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"battle-count-down","battle-count-down",-484367345)),(5000))){
return mokepon.container.count_down_BANG_.call(null,"Battle starts in 5...",mokepon$container$tick_battle_BANG_);
} else {
if(cljs.core._EQ_.call(null,mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"battle-count-down","battle-count-down",-484367345)),(4000))){
return mokepon.container.count_down_BANG_.call(null,"Battle starts in 4...",mokepon$container$tick_battle_BANG_);
} else {
if(cljs.core._EQ_.call(null,mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"battle-count-down","battle-count-down",-484367345)),(3000))){
return mokepon.container.count_down_BANG_.call(null,"Battle starts in 3...",mokepon$container$tick_battle_BANG_);
} else {
if(cljs.core._EQ_.call(null,mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"battle-count-down","battle-count-down",-484367345)),(2000))){
return mokepon.container.count_down_BANG_.call(null,"Battle starts in 2...",mokepon$container$tick_battle_BANG_);
} else {
if(cljs.core._EQ_.call(null,mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"battle-count-down","battle-count-down",-484367345)),(1000))){
return mokepon.container.count_down_BANG_.call(null,"Battle starts in 1...",mokepon$container$tick_battle_BANG_);
} else {
if(cljs.core._EQ_.call(null,mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"battle-count-down","battle-count-down",-484367345)),(0))){
mokepon.container.tick_battle_core_BANG_.call(null);

return window.setTimeout((function (){
return mokepon$container$tick_battle_BANG_.call(null);
}),(300));
} else {
return mokepon.container.count_down_BANG_.call(null,null,mokepon$container$tick_battle_BANG_);

}
}
}
}
}
}
}
} else {
return mokepon.container.reset_team_at_BANG_.call(null);
}
});
mokepon.container.take_chipu_BANG_ = (function mokepon$container$take_chipu_BANG_(){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"team","team",1355747699),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null))),new cljs.core.Keyword(null,"chipu","chipu",516526769),mokepon.monsters.chipu));
});
mokepon.container.go_to_location_BANG_ = (function mokepon$container$go_to_location_BANG_(loc){
mokepon.container.remove_dead_team_members_BANG_.call(null);

return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"location","location",1815599388),loc,new cljs.core.Keyword(null,"battling","battling",-129800115),null,new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355),null,new cljs.core.Keyword(null,"battle-count-down","battle-count-down",-484367345),null);
});
mokepon.container.attack_BANG_ = (function mokepon$container$attack_BANG_(){
var map__31136 = mokepon.rpg.apply_player_attack.call(null,mokepon.container.chosen_monster.call(null),new cljs.core.Keyword(null,"battling","battling",-129800115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null))),new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null))));
var map__31136__$1 = ((((!((map__31136 == null)))?((((map__31136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31136):map__31136);
var battling = cljs.core.get.call(null,map__31136__$1,new cljs.core.Keyword(null,"battling","battling",-129800115));
var chosen = cljs.core.get.call(null,map__31136__$1,new cljs.core.Keyword(null,"chosen","chosen",-1422409985));
var play_by_play = cljs.core.get.call(null,map__31136__$1,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732));
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"battling","battling",-129800115),battling,new cljs.core.Keyword(null,"team","team",1355747699),mokepon.container.update_in_team.call(null,new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null))),chosen),new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),play_by_play);
});
mokepon.container.set_monsters = (function mokepon$container$set_monsters(chosen_key,battling,play_by_play){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355),chosen_key,new cljs.core.Keyword(null,"battling","battling",-129800115),battling,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),mokepon.container.add_to_play_by_play.call(null,"It has begun! ",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(chosen_key.call(null,new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null)))))," vs ",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(battling),"!")], null);
});
mokepon.container.set_battle_BANG_ = (function mokepon$container$set_battle_BANG_(chosen_key,battling){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.merge,mokepon.container.set_monsters.call(null,chosen_key,battling,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null)))));
});
mokepon.container.location_monsters = (function mokepon$container$location_monsters(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"forest","forest",278860306),mokepon.monsters.sulbabaur,new cljs.core.Keyword(null,"canyon","canyon",-310776600),mokepon.monsters.deogude,new cljs.core.Keyword(null,"pool","pool",-1814211613),mokepon.monsters.tirsqule], null);
});
mokepon.container.find_trouble_BANG_ = (function mokepon$container$find_trouble_BANG_(kick_off_battle){
var team = new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null)));
var location = new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null)));
var first_team_member = mokepon.container.first_live_team_member.call(null);
var monster_for_location = location.call(null,mokepon.container.location_monsters.call(null));
if(cljs.core.empty_QMARK_.call(null,team)){
return false;
} else {
if(cljs.core.truth_(monster_for_location)){
mokepon.container.set_battle_BANG_.call(null,first_team_member,monster_for_location);

if(cljs.core.truth_(kick_off_battle)){
return mokepon.container.tick_battle_BANG_.call(null);
} else {
return null;
}
} else {
return null;
}
}
});
mokepon.container.chosen_can_attack_QMARK_ = (function mokepon$container$chosen_can_attack_QMARK_(){
var and__18452__auto__ = mokepon.rpg.can_attack_QMARK_.call(null,mokepon.container.chosen_monster.call(null));
if(cljs.core.truth_(and__18452__auto__)){
return cljs.core.not.call(null,mokepon.rpg.battle_over_QMARK_.call(null,mokepon.container.chosen_monster.call(null),new cljs.core.Keyword(null,"battling","battling",-129800115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null)))));
} else {
return and__18452__auto__;
}
});
mokepon.container.rpg_container = (function mokepon$container$rpg_container(){
return sablono.interpreter.interpret.call(null,mokepon.components.rpg_view.call(null,cljs.core.deref.call(null,mokepon.container.app_state.call(null)),mokepon.container.take_chipu_BANG_,mokepon.container.go_to_location_BANG_,(function (){
return mokepon.container.find_trouble_BANG_.call(null,true);
}),mokepon.rpg.choosable_monsters.call(null,mokepon.container.get_state.call(null,new cljs.core.Keyword(null,"team","team",1355747699))),mokepon.container.chosen_monster.call(null),mokepon.container.chosen_can_attack_QMARK_.call(null),mokepon.rpg.battle_over_QMARK_.call(null,mokepon.container.chosen_monster.call(null),new cljs.core.Keyword(null,"battling","battling",-129800115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mokepon.container.app_state.call(null)))),mokepon.container.attack_BANG_,mokepon.container.sleep_at_home_BANG_,mokepon.rpg.active_turn_threshold,mokepon.items.store_items,mokepon.items.store_items_lookup,mokepon.container.buy_item_BANG_,mokepon.container.throw_mokebox_BANG_,mokepon.container.choose_monster_BANG_));
});
mokepon.container.render_BANG_ = (function mokepon$container$render_BANG_(){
return React.render(mokepon.container.rpg_container.call(null),document.getElementById("app"));
});
cljs.core.add_watch.call(null,mokepon.container.game_app_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,___$2,___$3){
return mokepon.container.render_BANG_.call(null);
}));

//# sourceMappingURL=container.js.map