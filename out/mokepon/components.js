// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.components');
goog.require('cljs.core');
goog.require('sablono.core');
mokepon.components.a = (function mokepon$components$a(text,on_click){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"javascript:;",cljs.core.cst$kw$on_DASH_click,on_click], null),text], null);
});
mokepon.components.disabled_a = (function mokepon$components$disabled_a(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"javascript:;",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"#a0a0a0",cljs.core.cst$kw$cursor,"default"], null)], null),text], null);
});
mokepon.components.conditional_a = (function mokepon$components$conditional_a(predicate,text,on_click){
if(cljs.core.truth_(predicate)){
return mokepon.components.a(text,on_click);
} else {
return mokepon.components.disabled_a(text);
}
});
mokepon.components.todo = (function mokepon$components$todo(){
return window.alert("todo");
});
mokepon.components.section = (function mokepon$components$section(var_args){
var args__19546__auto__ = [];
var len__19539__auto___30803 = arguments.length;
var i__19540__auto___30804 = (0);
while(true){
if((i__19540__auto___30804 < len__19539__auto___30803)){
args__19546__auto__.push((arguments[i__19540__auto___30804]));

var G__30805 = (i__19540__auto___30804 + (1));
i__19540__auto___30804 = G__30805;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic = (function (elements){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,elements,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null)], null);
});

mokepon.components.section.cljs$lang$maxFixedArity = (0);

mokepon.components.section.cljs$lang$applyTo = (function (seq30802){
return mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30802));
});

mokepon.components.team_view = (function mokepon$components$team_view(team,header,empty_text){
return mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,header], null),((cljs.core.empty_QMARK_(team))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,empty_text], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__19244__auto__ = (function mokepon$components$team_view_$_iter__30824(s__30825){
return (new cljs.core.LazySeq(null,(function (){
var s__30825__$1 = s__30825;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__30825__$1);
if(temp__4657__auto__){
var s__30825__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30825__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__30825__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__30827 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__30826 = (0);
while(true){
if((i__30826 < size__19243__auto__)){
var vec__30836 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__30826);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30836,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30836,(1),null);
cljs.core.chunk_append(b__30827,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)], null),[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(" (hp: "),cljs.core.str(cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str("/"),cljs.core.str(cljs.core.cst$kw$max_DASH_hp.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(")")].join('')], null));

var G__30842 = (i__30826 + (1));
i__30826 = G__30842;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30827),mokepon$components$team_view_$_iter__30824(cljs.core.chunk_rest(s__30825__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30827),null);
}
} else {
var vec__30839 = cljs.core.first(s__30825__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30839,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30839,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)], null),[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(" (hp: "),cljs.core.str(cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str("/"),cljs.core.str(cljs.core.cst$kw$max_DASH_hp.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(")")].join('')], null),mokepon$components$team_view_$_iter__30824(cljs.core.rest(s__30825__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__(team);
})()], null)], 0));
});
mokepon.components.ask_mommy_view = (function mokepon$components$ask_mommy_view(team,team_at_home,take_chipu_handler){
if((cljs.core.empty_QMARK_(team)) && (cljs.core.empty_QMARK_(team_at_home))){
return mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Your mom feels pity for your sorry ass."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"From her extended arm, a Chipu whimpers, hanging by the scruff of its neck."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"\"Make something of yourself, you worthless millenial!\" she says to you."], null),mokepon.components.a("Take Chipu.",take_chipu_handler)], 0));
} else {
return null;
}
});
mokepon.components.adventure_view = (function mokepon$components$adventure_view(description,action_text,key,go_to_location_handler){
return mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,description], null),mokepon.components.a(action_text,(function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(key) : go_to_location_handler.call(null,key));
}))], 0));
});
mokepon.components.adventures_view = (function mokepon$components$adventures_view(location,team,go_to_location_handler){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.components.adventure_view("Your mother's home stands in the distance. Smoke bellows from the chimney.","Go home.",cljs.core.cst$kw$home,go_to_location_handler),mokepon.components.adventure_view("There is a Mok\u00E9pon store with a half working neon sign flashing. Looks kinda shady.","Go shop.",cljs.core.cst$kw$store,go_to_location_handler),mokepon.components.adventure_view("There is a rock face jutting out. It looks freaking scary.","Go be awesome in the canyon.",cljs.core.cst$kw$canyon,go_to_location_handler),mokepon.components.adventure_view("There is a line of trees off in the distance.","Go be awesome in the forest.",cljs.core.cst$kw$forest,go_to_location_handler),mokepon.components.adventure_view("The neighborhood pool hasn't been cleaned in a while. Smells like poop.","Go be awesome in the pool.",cljs.core.cst$kw$pool,go_to_location_handler)], null);
});
mokepon.components.progress_bar_view = (function mokepon$components$progress_bar_view(percentage){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$border,"solid 1px black",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$background,"green",cljs.core.cst$kw$margin,"0px",cljs.core.cst$kw$padding,"0px",cljs.core.cst$kw$width,[cljs.core.str(((100) * percentage)),cljs.core.str("%")].join(''),cljs.core.cst$kw$height,"100%"], null)], null)], null)], null);
});
mokepon.components.battler_view = (function mokepon$components$battler_view(monster,full_active_turn){
return mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(monster)),cljs.core.str(" (hp: "),cljs.core.str(cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(monster)),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$battle_DASH_text.cljs$core$IFn$_invoke$arity$1(monster)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),mokepon.components.progress_bar_view((cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(monster) / full_active_turn))], 0));
});
mokepon.components.play_by_play_view = (function mokepon$components$play_by_play_view(play_by_play){
return mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var iter__19244__auto__ = (function mokepon$components$play_by_play_view_$_iter__30849(s__30850){
return (new cljs.core.LazySeq(null,(function (){
var s__30850__$1 = s__30850;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__30850__$1);
if(temp__4657__auto__){
var s__30850__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30850__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__30850__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__30852 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__30851 = (0);
while(true){
if((i__30851 < size__19243__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__30851);
cljs.core.chunk_append(b__30852,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,i], null));

var G__30855 = (i__30851 + (1));
i__30851 = G__30855;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30852),mokepon$components$play_by_play_view_$_iter__30849(cljs.core.chunk_rest(s__30850__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30852),null);
}
} else {
var i = cljs.core.first(s__30850__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,i], null),mokepon$components$play_by_play_view_$_iter__30849(cljs.core.rest(s__30850__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((25),cljs.core.reverse(play_by_play)));
})()], 0));
});
mokepon.components.battle_report_view = (function mokepon$components$battle_report_view(battle_over_QMARK_,go_to_location_handler){
if(cljs.core.truth_(battle_over_QMARK_)){
return mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The fight has ended."], null),mokepon.components.a("Head back.",(function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$outside) : go_to_location_handler.call(null,cljs.core.cst$kw$outside));
}))], 0));
} else {
return null;
}
});
mokepon.components.battle_actions_view = (function mokepon$components$battle_actions_view(team,choosable_monsters,chosen_can_attack_QMARK_,attack_handler,battle_over_QMARK_,items,throw_mokebox_handler,choose_monster_handler,candy_handler){
return mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mokepon.components.conditional_a(chosen_can_attack_QMARK_,"Attack!",attack_handler),(cljs.core.truth_(cljs.core.cst$kw$candy.cljs$core$IFn$_invoke$arity$1(items))?mokepon.components.conditional_a((cljs.core.not(battle_over_QMARK_)) && ((cljs.core.cst$kw$candy.cljs$core$IFn$_invoke$arity$1(items) > (0))),"Candy!",candy_handler):null),(cljs.core.truth_(cljs.core.cst$kw$mokebox.cljs$core$IFn$_invoke$arity$1(items))?mokepon.components.conditional_a((cljs.core.not(battle_over_QMARK_)) && ((cljs.core.cst$kw$mokebox.cljs$core$IFn$_invoke$arity$1(items) > (0))),"Throw Mok\u00E9box!",throw_mokebox_handler):null),(((cljs.core.not(battle_over_QMARK_)) && ((cljs.core.count(choosable_monsters) > (1))))?(function (){var iter__19244__auto__ = (function mokepon$components$battle_actions_view_$_iter__30862(s__30863){
return (new cljs.core.LazySeq(null,(function (){
var s__30863__$1 = s__30863;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__30863__$1);
if(temp__4657__auto__){
var s__30863__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30863__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__30863__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__30865 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__30864 = (0);
while(true){
if((i__30864 < size__19243__auto__)){
var m = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__30864);
cljs.core.chunk_append(b__30865,mokepon.components.a([cljs.core.str("Choose "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(team) : m.call(null,team)))),cljs.core.str("!")].join(''),((function (i__30864,m,c__19242__auto__,size__19243__auto__,b__30865,s__30863__$2,temp__4657__auto__){
return (function (){
return (choose_monster_handler.cljs$core$IFn$_invoke$arity$1 ? choose_monster_handler.cljs$core$IFn$_invoke$arity$1(m) : choose_monster_handler.call(null,m));
});})(i__30864,m,c__19242__auto__,size__19243__auto__,b__30865,s__30863__$2,temp__4657__auto__))
));

var G__30868 = (i__30864 + (1));
i__30864 = G__30868;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30865),mokepon$components$battle_actions_view_$_iter__30862(cljs.core.chunk_rest(s__30863__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30865),null);
}
} else {
var m = cljs.core.first(s__30863__$2);
return cljs.core.cons(mokepon.components.a([cljs.core.str("Choose "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(team) : m.call(null,team)))),cljs.core.str("!")].join(''),((function (m,s__30863__$2,temp__4657__auto__){
return (function (){
return (choose_monster_handler.cljs$core$IFn$_invoke$arity$1 ? choose_monster_handler.cljs$core$IFn$_invoke$arity$1(m) : choose_monster_handler.call(null,m));
});})(m,s__30863__$2,temp__4657__auto__))
),mokepon$components$battle_actions_view_$_iter__30862(cljs.core.rest(s__30863__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__(choosable_monsters);
})():null)], 0));
});
mokepon.components.battle_view = (function mokepon$components$battle_view(team,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,battling,active_turn_threshold,attack_handler,go_to_location_handler,items,throw_mokebox_handler,choose_monster_handler,candy_handler){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.components.battler_view(battling,active_turn_threshold),mokepon.components.battler_view(chosen,active_turn_threshold),mokepon.components.battle_actions_view(team,choosable_monsters,chosen_can_attack_QMARK_,attack_handler,battle_over_QMARK_,items,throw_mokebox_handler,choose_monster_handler,candy_handler),mokepon.components.battle_report_view(battle_over_QMARK_,go_to_location_handler)], null);
});
mokepon.components.location_view = (function mokepon$components$location_view(location_description,team,find_trouble_handler,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,battling,go_to_location_handler,attack_handler,go_to_location_handler__$1,active_turn_threshold,items,throw_mokebox_handler,choose_monster_handler,candy_handler){
if((battling == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,location_description], null)], 0)),mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core.empty_QMARK_(team))?mokepon.components.disabled_a("Go look for some trouble."):mokepon.components.a("Go look for some trouble.",find_trouble_handler)),mokepon.components.a("Head back.",(function (){
return (go_to_location_handler__$1.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler__$1.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$outside) : go_to_location_handler__$1.call(null,cljs.core.cst$kw$outside));
}))], 0))], null);
} else {
return mokepon.components.battle_view(team,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,battling,active_turn_threshold,attack_handler,go_to_location_handler__$1,items,throw_mokebox_handler,choose_monster_handler,candy_handler);
}
});
mokepon.components.home_view = (function mokepon$components$home_view(team,team_at_home,take_chipu_handler,go_to_location_handler,sleep_at_home_handler){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"You are being worthless at home."], null)], 0)),mokepon.components.ask_mommy_view(team,team_at_home,take_chipu_handler),mokepon.components.team_view(team_at_home,"Mok\u00E9pon chillin' at the crib:","None."),mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mokepon.components.a("Sleep. Cause you're a lazy worthless millenial.",sleep_at_home_handler),mokepon.components.a("Head back.",(function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$outside) : go_to_location_handler.call(null,cljs.core.cst$kw$outside));
}))], 0))], null);
});
mokepon.components.store_view = (function mokepon$components$store_view(store_items,buy_item_handler,go_to_location_handler){
return mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str("You walk into the store. A midget stands behind the counter on a stool. "),cljs.core.str("He occasionally props himself up with locked arms and dangles his feet in the air.")].join('')], null),(function (){var iter__19244__auto__ = (function mokepon$components$store_view_$_iter__30879(s__30880){
return (new cljs.core.LazySeq(null,(function (){
var s__30880__$1 = s__30880;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__30880__$1);
if(temp__4657__auto__){
var s__30880__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30880__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__30880__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__30882 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__30881 = (0);
while(true){
if((i__30881 < size__19243__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__30881);
cljs.core.chunk_append(b__30882,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,(0),cljs.core.cst$kw$padding,(0)], null),cljs.core.cst$kw$href,"javascript:;",cljs.core.cst$kw$on_DASH_click,((function (i__30881,item,c__19242__auto__,size__19243__auto__,b__30882,s__30880__$2,temp__4657__auto__){
return (function (){
var G__30887 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item);
return (buy_item_handler.cljs$core$IFn$_invoke$arity$1 ? buy_item_handler.cljs$core$IFn$_invoke$arity$1(G__30887) : buy_item_handler.call(null,G__30887));
});})(i__30881,item,c__19242__auto__,size__19243__auto__,b__30882,s__30880__$2,temp__4657__auto__))
], null),[cljs.core.str("Buy "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" ("),cljs.core.str(cljs.core.cst$kw$cost.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" \u0191iddy)")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$margin,(0),cljs.core.cst$kw$padding,(0),cljs.core.cst$kw$margin_DASH_bottom,"10px",cljs.core.cst$kw$font_DASH_size,"smaller"], null)], null),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(item)], null)], null));

var G__30889 = (i__30881 + (1));
i__30881 = G__30889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30882),mokepon$components$store_view_$_iter__30879(cljs.core.chunk_rest(s__30880__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30882),null);
}
} else {
var item = cljs.core.first(s__30880__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,(0),cljs.core.cst$kw$padding,(0)], null),cljs.core.cst$kw$href,"javascript:;",cljs.core.cst$kw$on_DASH_click,((function (item,s__30880__$2,temp__4657__auto__){
return (function (){
var G__30888 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item);
return (buy_item_handler.cljs$core$IFn$_invoke$arity$1 ? buy_item_handler.cljs$core$IFn$_invoke$arity$1(G__30888) : buy_item_handler.call(null,G__30888));
});})(item,s__30880__$2,temp__4657__auto__))
], null),[cljs.core.str("Buy "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" ("),cljs.core.str(cljs.core.cst$kw$cost.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" \u0191iddy)")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$margin,(0),cljs.core.cst$kw$padding,(0),cljs.core.cst$kw$margin_DASH_bottom,"10px",cljs.core.cst$kw$font_DASH_size,"smaller"], null)], null),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(item)], null)], null),mokepon$components$store_view_$_iter__30879(cljs.core.rest(s__30880__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__(store_items);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),mokepon.components.a("Head back.",(function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$outside) : go_to_location_handler.call(null,cljs.core.cst$kw$outside));
}))], 0));
});
mokepon.components.outside_view = (function mokepon$components$outside_view(location,team,go_to_location_handler){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"You are being worthless outside."], null)], 0)),mokepon.components.adventures_view(location,team,go_to_location_handler)], null);
});
mokepon.components.title_view = (function mokepon$components$title_view(){
return mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"title"], null),"Mok\u00E9pon"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"tag-line"], null),"Catching 'em all just got real, yo"], null)], 0));
});
mokepon.components.status_view = (function mokepon$components$status_view(cash,items,store_items_lookup,team,play_by_play){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Cash: ",cash," \u0191iddy"], 0)),mokepon.components.team_view(team,"Your posse:","No one. Cause you're worthless."),mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Items:"], null),((cljs.core.empty_QMARK_(items))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"None. Cause you're worthless."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__19244__auto__ = (function mokepon$components$status_view_$_iter__30908(s__30909){
return (new cljs.core.LazySeq(null,(function (){
var s__30909__$1 = s__30909;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__30909__$1);
if(temp__4657__auto__){
var s__30909__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30909__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__30909__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__30911 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__30910 = (0);
while(true){
if((i__30910 < size__19243__auto__)){
var vec__30920 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__30910);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30920,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30920,(1),null);
cljs.core.chunk_append(b__30911,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(store_items_lookup) : k.call(null,store_items_lookup)))),cljs.core.str(": "),cljs.core.str(v)].join('')], null));

var G__30926 = (i__30910 + (1));
i__30910 = G__30926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30911),mokepon$components$status_view_$_iter__30908(cljs.core.chunk_rest(s__30909__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30911),null);
}
} else {
var vec__30923 = cljs.core.first(s__30909__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30923,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30923,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(store_items_lookup) : k.call(null,store_items_lookup)))),cljs.core.str(": "),cljs.core.str(v)].join('')], null),mokepon$components$status_view_$_iter__30908(cljs.core.rest(s__30909__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__(items);
})()], null))], 0)),mokepon.components.play_by_play_view(play_by_play)], null);
});
mokepon.components.rpg_view = (function mokepon$components$rpg_view(state,take_chipu_handler,go_to_location_handler,find_trouble_handler,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,attack_handler,sleep_at_home_handler,active_turn_threshold,store_items,store_items_lookup,buy_item_handler,throw_mokebox_handler,choose_monster_handler,candy_handler){
var map__30929 = state;
var map__30929__$1 = ((((!((map__30929 == null)))?((((map__30929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30929):map__30929);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30929__$1,cljs.core.cst$kw$location);
var team = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30929__$1,cljs.core.cst$kw$team);
var team_at_home = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30929__$1,cljs.core.cst$kw$team_DASH_at_DASH_home);
var battling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30929__$1,cljs.core.cst$kw$battling);
var cash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30929__$1,cljs.core.cst$kw$cash);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30929__$1,cljs.core.cst$kw$items);
var play_by_play = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30929__$1,cljs.core.cst$kw$play_DASH_by_DASH_play);
var location_awesome_text = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$forest,"You are currently chillin' like a villian in the forest.",cljs.core.cst$kw$canyon,"You are currently chillin' like a villian in the canyon.",cljs.core.cst$kw$pool,"You are currently chillin' like a villian in the pool. Gross."], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.components.title_view(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,cljs.core.cst$kw$outside))?mokepon.components.outside_view(location,team,go_to_location_handler):(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([location], true),cljs.core.keys(location_awesome_text)))?mokepon.components.location_view((location.cljs$core$IFn$_invoke$arity$1 ? location.cljs$core$IFn$_invoke$arity$1(location_awesome_text) : location.call(null,location_awesome_text)),team,find_trouble_handler,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,battling,go_to_location_handler,attack_handler,go_to_location_handler,active_turn_threshold,items,throw_mokebox_handler,choose_monster_handler,candy_handler):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,cljs.core.cst$kw$home))?mokepon.components.home_view(team,team_at_home,take_chipu_handler,go_to_location_handler,sleep_at_home_handler):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,cljs.core.cst$kw$store))?mokepon.components.store_view(store_items,buy_item_handler,go_to_location_handler):mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Location "),cljs.core.str(location),cljs.core.str(" not handled.")].join(''),mokepon.components.a("Go back.",((function (map__30929,map__30929__$1,location,team,team_at_home,battling,cash,items,play_by_play,location_awesome_text){
return (function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$outside) : go_to_location_handler.call(null,cljs.core.cst$kw$outside));
});})(map__30929,map__30929__$1,location,team,team_at_home,battling,cash,items,play_by_play,location_awesome_text))
)], 0))
)))),mokepon.components.status_view(cash,items,store_items_lookup,team,play_by_play)], null);
});
