// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.components');
goog.require('cljs.core');
goog.require('sablono.core');
mokepon.components.a = (function mokepon$components$a(text,on_click){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:;",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),text], null);
});
mokepon.components.disabled_a = (function mokepon$components$disabled_a(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:;",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#a0a0a0",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"default"], null)], null),text], null);
});
mokepon.components.conditional_a = (function mokepon$components$conditional_a(predicate,text,on_click){
if(cljs.core.truth_(predicate)){
return mokepon.components.a.call(null,text,on_click);
} else {
return mokepon.components.disabled_a.call(null,text);
}
});
mokepon.components.todo = (function mokepon$components$todo(){
return window.alert("todo");
});
mokepon.components.section = (function mokepon$components$section(var_args){
var args__19546__auto__ = [];
var len__19539__auto___30774 = arguments.length;
var i__19540__auto___30775 = (0);
while(true){
if((i__19540__auto___30775 < len__19539__auto___30774)){
args__19546__auto__.push((arguments[i__19540__auto___30775]));

var G__30776 = (i__19540__auto___30775 + (1));
i__19540__auto___30775 = G__30776;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic = (function (elements){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),elements,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null)], null);
});

mokepon.components.section.cljs$lang$maxFixedArity = (0);

mokepon.components.section.cljs$lang$applyTo = (function (seq30773){
return mokepon.components.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30773));
});

mokepon.components.team_view = (function mokepon$components$team_view(team,header,empty_text){
return mokepon.components.section.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),header], null),((cljs.core.empty_QMARK_.call(null,team))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),empty_text], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19244__auto__ = (function mokepon$components$team_view_$_iter__30793(s__30794){
return (new cljs.core.LazySeq(null,(function (){
var s__30794__$1 = s__30794;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30794__$1);
if(temp__4657__auto__){
var s__30794__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30794__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__30794__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__30796 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__30795 = (0);
while(true){
if((i__30795 < size__19243__auto__)){
var vec__30803 = cljs.core._nth.call(null,c__19242__auto__,i__30795);
var k = cljs.core.nth.call(null,vec__30803,(0),null);
var v = cljs.core.nth.call(null,vec__30803,(1),null);
cljs.core.chunk_append.call(null,b__30796,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(v)], null),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(" (hp: "),cljs.core.str(new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696).cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(")")].join('')], null));

var G__30809 = (i__30795 + (1));
i__30795 = G__30809;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30796),mokepon$components$team_view_$_iter__30793.call(null,cljs.core.chunk_rest.call(null,s__30794__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30796),null);
}
} else {
var vec__30806 = cljs.core.first.call(null,s__30794__$2);
var k = cljs.core.nth.call(null,vec__30806,(0),null);
var v = cljs.core.nth.call(null,vec__30806,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(v)], null),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(" (hp: "),cljs.core.str(new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696).cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(")")].join('')], null),mokepon$components$team_view_$_iter__30793.call(null,cljs.core.rest.call(null,s__30794__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__.call(null,team);
})()], null));
});
mokepon.components.ask_mommy_view = (function mokepon$components$ask_mommy_view(team,team_at_home,take_chipu_handler){
if((cljs.core.empty_QMARK_.call(null,team)) && (cljs.core.empty_QMARK_.call(null,team_at_home))){
return mokepon.components.section.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Your mom feels pity for your sorry ass."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"From her extended arm, a Chipu whimpers, hanging by the scruff of its neck."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\"Make something of yourself, you worthless millenial!\" she says to you."], null),mokepon.components.a.call(null,"Take Chipu.",take_chipu_handler));
} else {
return null;
}
});
mokepon.components.adventure_view = (function mokepon$components$adventure_view(description,action_text,key,go_to_location_handler){
return mokepon.components.section.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),description], null),mokepon.components.a.call(null,action_text,(function (){
return go_to_location_handler.call(null,key);
})));
});
mokepon.components.adventures_view = (function mokepon$components$adventures_view(location,team,go_to_location_handler){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),mokepon.components.adventure_view.call(null,"Your mother's home stands in the distance. Smoke bellows from the chimney.","Go home.",new cljs.core.Keyword(null,"home","home",-74557309),go_to_location_handler),mokepon.components.adventure_view.call(null,"There is a Mok\u00E9pon store with a half working neon sign flashing. Looks kinda shady.","Go shop.",new cljs.core.Keyword(null,"store","store",1512230022),go_to_location_handler),mokepon.components.adventure_view.call(null,"There is a rock face jutting out. It looks freaking scary.","Go be awesome in the canyon.",new cljs.core.Keyword(null,"canyon","canyon",-310776600),go_to_location_handler),mokepon.components.adventure_view.call(null,"There is a line of trees off in the distance.","Go be awesome in the forest.",new cljs.core.Keyword(null,"forest","forest",278860306),go_to_location_handler),mokepon.components.adventure_view.call(null,"The neighborhood pool hasn't been cleaned in a while. Smells like poop.","Go be awesome in the pool.",new cljs.core.Keyword(null,"pool","pool",-1814211613),go_to_location_handler)], null);
});
mokepon.components.progress_bar_view = (function mokepon$components$progress_bar_view(percentage){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"solid 1px black",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"green",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(((100) * percentage)),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null)], null)], null);
});
mokepon.components.battler_view = (function mokepon$components$battler_view(monster,full_active_turn){
return mokepon.components.section.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(monster)),cljs.core.str(" (hp: "),cljs.core.str(new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(monster)),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"battle-text","battle-text",-1976034145).cljs$core$IFn$_invoke$arity$1(monster)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),mokepon.components.progress_bar_view.call(null,(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(monster) / full_active_turn)));
});
mokepon.components.play_by_play_view = (function mokepon$components$play_by_play_view(play_by_play){
return mokepon.components.section.call(null,(function (){var iter__19244__auto__ = (function mokepon$components$play_by_play_view_$_iter__30814(s__30815){
return (new cljs.core.LazySeq(null,(function (){
var s__30815__$1 = s__30815;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30815__$1);
if(temp__4657__auto__){
var s__30815__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30815__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__30815__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__30817 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__30816 = (0);
while(true){
if((i__30816 < size__19243__auto__)){
var i = cljs.core._nth.call(null,c__19242__auto__,i__30816);
cljs.core.chunk_append.call(null,b__30817,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),i], null));

var G__30818 = (i__30816 + (1));
i__30816 = G__30818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30817),mokepon$components$play_by_play_view_$_iter__30814.call(null,cljs.core.chunk_rest.call(null,s__30815__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30817),null);
}
} else {
var i = cljs.core.first.call(null,s__30815__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),i], null),mokepon$components$play_by_play_view_$_iter__30814.call(null,cljs.core.rest.call(null,s__30815__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__.call(null,cljs.core.take.call(null,(25),cljs.core.reverse.call(null,play_by_play)));
})());
});
mokepon.components.battle_report_view = (function mokepon$components$battle_report_view(battle_over_QMARK_,go_to_location_handler){
if(cljs.core.truth_(battle_over_QMARK_)){
return mokepon.components.section.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The fight has ended."], null),mokepon.components.a.call(null,"Head back.",(function (){
return go_to_location_handler.call(null,new cljs.core.Keyword(null,"outside","outside",-13164995));
})));
} else {
return null;
}
});
mokepon.components.battle_actions_view = (function mokepon$components$battle_actions_view(team,choosable_monsters,chosen_can_attack_QMARK_,attack_handler,battle_over_QMARK_,items,throw_mokebox_handler,choose_monster_handler){
return mokepon.components.section.call(null,mokepon.components.conditional_a.call(null,chosen_can_attack_QMARK_,"Attack!",attack_handler),(cljs.core.truth_(new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385).cljs$core$IFn$_invoke$arity$1(items))?mokepon.components.conditional_a.call(null,(cljs.core.not.call(null,battle_over_QMARK_)) && ((new cljs.core.Keyword(null,"mokebox","mokebox",-2057865385).cljs$core$IFn$_invoke$arity$1(items) > (0))),"Throw Mok\u00E9box!",throw_mokebox_handler):null),(((cljs.core.not.call(null,battle_over_QMARK_)) && ((cljs.core.count.call(null,choosable_monsters) > (1))))?(function (){var iter__19244__auto__ = (function mokepon$components$battle_actions_view_$_iter__30823(s__30824){
return (new cljs.core.LazySeq(null,(function (){
var s__30824__$1 = s__30824;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30824__$1);
if(temp__4657__auto__){
var s__30824__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30824__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__30824__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__30826 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__30825 = (0);
while(true){
if((i__30825 < size__19243__auto__)){
var m = cljs.core._nth.call(null,c__19242__auto__,i__30825);
cljs.core.chunk_append.call(null,b__30826,mokepon.components.a.call(null,[cljs.core.str("Choose "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m.call(null,team))),cljs.core.str("!")].join(''),((function (i__30825,m,c__19242__auto__,size__19243__auto__,b__30826,s__30824__$2,temp__4657__auto__){
return (function (){
return choose_monster_handler.call(null,m);
});})(i__30825,m,c__19242__auto__,size__19243__auto__,b__30826,s__30824__$2,temp__4657__auto__))
));

var G__30827 = (i__30825 + (1));
i__30825 = G__30827;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30826),mokepon$components$battle_actions_view_$_iter__30823.call(null,cljs.core.chunk_rest.call(null,s__30824__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30826),null);
}
} else {
var m = cljs.core.first.call(null,s__30824__$2);
return cljs.core.cons.call(null,mokepon.components.a.call(null,[cljs.core.str("Choose "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m.call(null,team))),cljs.core.str("!")].join(''),((function (m,s__30824__$2,temp__4657__auto__){
return (function (){
return choose_monster_handler.call(null,m);
});})(m,s__30824__$2,temp__4657__auto__))
),mokepon$components$battle_actions_view_$_iter__30823.call(null,cljs.core.rest.call(null,s__30824__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__.call(null,choosable_monsters);
})():null));
});
mokepon.components.battle_view = (function mokepon$components$battle_view(team,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,battling,active_turn_threshold,attack_handler,go_to_location_handler,items,throw_mokebox_handler,choose_monster_handler){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),mokepon.components.battler_view.call(null,battling,active_turn_threshold),mokepon.components.battler_view.call(null,chosen,active_turn_threshold),mokepon.components.battle_actions_view.call(null,team,choosable_monsters,chosen_can_attack_QMARK_,attack_handler,battle_over_QMARK_,items,throw_mokebox_handler,choose_monster_handler),mokepon.components.battle_report_view.call(null,battle_over_QMARK_,go_to_location_handler)], null);
});
mokepon.components.location_view = (function mokepon$components$location_view(location_description,team,find_trouble_handler,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,battling,go_to_location_handler,attack_handler,go_to_location_handler__$1,active_turn_threshold,items,throw_mokebox_handler,choose_monster_handler){
if((battling == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),mokepon.components.section.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),location_description], null)),mokepon.components.section.call(null,((cljs.core.empty_QMARK_.call(null,team))?mokepon.components.disabled_a.call(null,"Go look for some trouble."):mokepon.components.a.call(null,"Go look for some trouble.",find_trouble_handler)),mokepon.components.a.call(null,"Head back.",(function (){
return go_to_location_handler__$1.call(null,new cljs.core.Keyword(null,"outside","outside",-13164995));
})))], null);
} else {
return mokepon.components.battle_view.call(null,team,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,battling,active_turn_threshold,attack_handler,go_to_location_handler__$1,items,throw_mokebox_handler,choose_monster_handler);
}
});
mokepon.components.home_view = (function mokepon$components$home_view(team,team_at_home,take_chipu_handler,go_to_location_handler,sleep_at_home_handler){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),mokepon.components.section.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You are being worthless at home."], null)),mokepon.components.ask_mommy_view.call(null,team,team_at_home,take_chipu_handler),mokepon.components.team_view.call(null,team_at_home,"Mok\u00E9pon chillin' at the crib:","None."),mokepon.components.section.call(null,mokepon.components.a.call(null,"Sleep. Cause you're a lazy worthless millenial.",sleep_at_home_handler),mokepon.components.a.call(null,"Head back.",(function (){
return go_to_location_handler.call(null,new cljs.core.Keyword(null,"outside","outside",-13164995));
})))], null);
});
mokepon.components.store_view = (function mokepon$components$store_view(store_items,buy_item_handler,go_to_location_handler){
return mokepon.components.section.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str("You walk into the store. A midget stands behind the counter on a stool. "),cljs.core.str("He occasionally props himself up with locked arms and dangles his feet in the air.")].join('')], null),(function (){var iter__19244__auto__ = (function mokepon$components$store_view_$_iter__30832(s__30833){
return (new cljs.core.LazySeq(null,(function (){
var s__30833__$1 = s__30833;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30833__$1);
if(temp__4657__auto__){
var s__30833__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30833__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__30833__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__30835 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__30834 = (0);
while(true){
if((i__30834 < size__19243__auto__)){
var item = cljs.core._nth.call(null,c__19242__auto__,i__30834);
cljs.core.chunk_append.call(null,b__30835,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null),new cljs.core.Keyword(null,"href","href",-793805698),"javascript:;",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30834,item,c__19242__auto__,size__19243__auto__,b__30835,s__30833__$2,temp__4657__auto__){
return (function (){
return buy_item_handler.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
});})(i__30834,item,c__19242__auto__,size__19243__auto__,b__30835,s__30833__$2,temp__4657__auto__))
], null),[cljs.core.str("Buy "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" \u0191iddy)")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"smaller"], null)], null),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(item)], null)], null));

var G__30836 = (i__30834 + (1));
i__30834 = G__30836;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30835),mokepon$components$store_view_$_iter__30832.call(null,cljs.core.chunk_rest.call(null,s__30833__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30835),null);
}
} else {
var item = cljs.core.first.call(null,s__30833__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null),new cljs.core.Keyword(null,"href","href",-793805698),"javascript:;",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__30833__$2,temp__4657__auto__){
return (function (){
return buy_item_handler.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
});})(item,s__30833__$2,temp__4657__auto__))
], null),[cljs.core.str("Buy "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" \u0191iddy)")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"smaller"], null)], null),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(item)], null)], null),mokepon$components$store_view_$_iter__30832.call(null,cljs.core.rest.call(null,s__30833__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__.call(null,store_items);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),mokepon.components.a.call(null,"Head back.",(function (){
return go_to_location_handler.call(null,new cljs.core.Keyword(null,"outside","outside",-13164995));
})));
});
mokepon.components.outside_view = (function mokepon$components$outside_view(location,team,go_to_location_handler){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),mokepon.components.section.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You are being worthless outside."], null)),mokepon.components.adventures_view.call(null,location,team,go_to_location_handler)], null);
});
mokepon.components.title_view = (function mokepon$components$title_view(){
return mokepon.components.section.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"title"], null),"Mok\u00E9pon"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"tag-line"], null),"Catching 'em all just got real, yo"], null));
});
mokepon.components.status_view = (function mokepon$components$status_view(cash,items,store_items_lookup,team,play_by_play){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),mokepon.components.section.call(null,"Cash: ",cash," \u0191iddy"),mokepon.components.team_view.call(null,team,"Your posse:","No one. Cause you're worthless."),mokepon.components.section.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Items:"], null),((cljs.core.empty_QMARK_.call(null,items))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"None. Cause you're worthless."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19244__auto__ = (function mokepon$components$status_view_$_iter__30853(s__30854){
return (new cljs.core.LazySeq(null,(function (){
var s__30854__$1 = s__30854;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30854__$1);
if(temp__4657__auto__){
var s__30854__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30854__$2)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,s__30854__$2);
var size__19243__auto__ = cljs.core.count.call(null,c__19242__auto__);
var b__30856 = cljs.core.chunk_buffer.call(null,size__19243__auto__);
if((function (){var i__30855 = (0);
while(true){
if((i__30855 < size__19243__auto__)){
var vec__30863 = cljs.core._nth.call(null,c__19242__auto__,i__30855);
var k = cljs.core.nth.call(null,vec__30863,(0),null);
var v = cljs.core.nth.call(null,vec__30863,(1),null);
cljs.core.chunk_append.call(null,b__30856,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(k.call(null,store_items_lookup))),cljs.core.str(": "),cljs.core.str(v)].join('')], null));

var G__30869 = (i__30855 + (1));
i__30855 = G__30869;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30856),mokepon$components$status_view_$_iter__30853.call(null,cljs.core.chunk_rest.call(null,s__30854__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30856),null);
}
} else {
var vec__30866 = cljs.core.first.call(null,s__30854__$2);
var k = cljs.core.nth.call(null,vec__30866,(0),null);
var v = cljs.core.nth.call(null,vec__30866,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(k.call(null,store_items_lookup))),cljs.core.str(": "),cljs.core.str(v)].join('')], null),mokepon$components$status_view_$_iter__30853.call(null,cljs.core.rest.call(null,s__30854__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__.call(null,items);
})()], null))),mokepon.components.play_by_play_view.call(null,play_by_play)], null);
});
mokepon.components.rpg_view = (function mokepon$components$rpg_view(state,take_chipu_handler,go_to_location_handler,find_trouble_handler,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,attack_handler,sleep_at_home_handler,active_turn_threshold,store_items,store_items_lookup,buy_item_handler,throw_mokebox_handler,choose_monster_handler){
var map__30872 = state;
var map__30872__$1 = ((((!((map__30872 == null)))?((((map__30872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30872):map__30872);
var location = cljs.core.get.call(null,map__30872__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var team = cljs.core.get.call(null,map__30872__$1,new cljs.core.Keyword(null,"team","team",1355747699));
var team_at_home = cljs.core.get.call(null,map__30872__$1,new cljs.core.Keyword(null,"team-at-home","team-at-home",-1793865184));
var battling = cljs.core.get.call(null,map__30872__$1,new cljs.core.Keyword(null,"battling","battling",-129800115));
var cash = cljs.core.get.call(null,map__30872__$1,new cljs.core.Keyword(null,"cash","cash",181122222));
var items = cljs.core.get.call(null,map__30872__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var play_by_play = cljs.core.get.call(null,map__30872__$1,new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732));
var location_awesome_text = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"forest","forest",278860306),"You are currently chillin' like a villian in the forest.",new cljs.core.Keyword(null,"canyon","canyon",-310776600),"You are currently chillin' like a villian in the canyon.",new cljs.core.Keyword(null,"pool","pool",-1814211613),"You are currently chillin' like a villian in the pool. Gross."], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),mokepon.components.title_view.call(null),((cljs.core._EQ_.call(null,location,new cljs.core.Keyword(null,"outside","outside",-13164995)))?mokepon.components.outside_view.call(null,location,team,go_to_location_handler):(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([location], true),cljs.core.keys.call(null,location_awesome_text)))?mokepon.components.location_view.call(null,location.call(null,location_awesome_text),team,find_trouble_handler,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,battling,go_to_location_handler,attack_handler,go_to_location_handler,active_turn_threshold,items,throw_mokebox_handler,choose_monster_handler):((cljs.core._EQ_.call(null,location,new cljs.core.Keyword(null,"home","home",-74557309)))?mokepon.components.home_view.call(null,team,team_at_home,take_chipu_handler,go_to_location_handler,sleep_at_home_handler):((cljs.core._EQ_.call(null,location,new cljs.core.Keyword(null,"store","store",1512230022)))?mokepon.components.store_view.call(null,store_items,buy_item_handler,go_to_location_handler):mokepon.components.section.call(null,[cljs.core.str("Location "),cljs.core.str(location),cljs.core.str(" not handled.")].join(''),mokepon.components.a.call(null,"Go back.",((function (map__30872,map__30872__$1,location,team,team_at_home,battling,cash,items,play_by_play,location_awesome_text){
return (function (){
return go_to_location_handler.call(null,new cljs.core.Keyword(null,"outside","outside",-13164995));
});})(map__30872,map__30872__$1,location,team,team_at_home,battling,cash,items,play_by_play,location_awesome_text))
))
)))),mokepon.components.status_view.call(null,cash,items,store_items_lookup,team,play_by_play)], null);
});

//# sourceMappingURL=components.js.map