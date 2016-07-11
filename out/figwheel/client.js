// Compiled by ClojureScript 1.9.76 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__31648 = cljs.core._EQ_;
var expr__31649 = (function (){var or__18464__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__31648.call(null,"true",expr__31649))){
return true;
} else {
if(cljs.core.truth_(pred__31648.call(null,"false",expr__31649))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__31649)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31651__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__31651 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31652__i = 0, G__31652__a = new Array(arguments.length -  0);
while (G__31652__i < G__31652__a.length) {G__31652__a[G__31652__i] = arguments[G__31652__i + 0]; ++G__31652__i;}
  args = new cljs.core.IndexedSeq(G__31652__a,0);
} 
return G__31651__delegate.call(this,args);};
G__31651.cljs$lang$maxFixedArity = 0;
G__31651.cljs$lang$applyTo = (function (arglist__31653){
var args = cljs.core.seq(arglist__31653);
return G__31651__delegate(args);
});
G__31651.cljs$core$IFn$_invoke$arity$variadic = G__31651__delegate;
return G__31651;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31654){
var map__31657 = p__31654;
var map__31657__$1 = ((((!((map__31657 == null)))?((((map__31657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31657):map__31657);
var message = cljs.core.get.call(null,map__31657__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31657__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18464__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18452__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18452__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18452__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20519__auto___31819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto___31819,ch){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto___31819,ch){
return (function (state_31788){
var state_val_31789 = (state_31788[(1)]);
if((state_val_31789 === (7))){
var inst_31784 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
var statearr_31790_31820 = state_31788__$1;
(statearr_31790_31820[(2)] = inst_31784);

(statearr_31790_31820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (1))){
var state_31788__$1 = state_31788;
var statearr_31791_31821 = state_31788__$1;
(statearr_31791_31821[(2)] = null);

(statearr_31791_31821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (4))){
var inst_31741 = (state_31788[(7)]);
var inst_31741__$1 = (state_31788[(2)]);
var state_31788__$1 = (function (){var statearr_31792 = state_31788;
(statearr_31792[(7)] = inst_31741__$1);

return statearr_31792;
})();
if(cljs.core.truth_(inst_31741__$1)){
var statearr_31793_31822 = state_31788__$1;
(statearr_31793_31822[(1)] = (5));

} else {
var statearr_31794_31823 = state_31788__$1;
(statearr_31794_31823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (15))){
var inst_31748 = (state_31788[(8)]);
var inst_31763 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31748);
var inst_31764 = cljs.core.first.call(null,inst_31763);
var inst_31765 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31764);
var inst_31766 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_31765)].join('');
var inst_31767 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31766);
var state_31788__$1 = state_31788;
var statearr_31795_31824 = state_31788__$1;
(statearr_31795_31824[(2)] = inst_31767);

(statearr_31795_31824[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (13))){
var inst_31772 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
var statearr_31796_31825 = state_31788__$1;
(statearr_31796_31825[(2)] = inst_31772);

(statearr_31796_31825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (6))){
var state_31788__$1 = state_31788;
var statearr_31797_31826 = state_31788__$1;
(statearr_31797_31826[(2)] = null);

(statearr_31797_31826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (17))){
var inst_31770 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
var statearr_31798_31827 = state_31788__$1;
(statearr_31798_31827[(2)] = inst_31770);

(statearr_31798_31827[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (3))){
var inst_31786 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31788__$1,inst_31786);
} else {
if((state_val_31789 === (12))){
var inst_31747 = (state_31788[(9)]);
var inst_31761 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31747,opts);
var state_31788__$1 = state_31788;
if(cljs.core.truth_(inst_31761)){
var statearr_31799_31828 = state_31788__$1;
(statearr_31799_31828[(1)] = (15));

} else {
var statearr_31800_31829 = state_31788__$1;
(statearr_31800_31829[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (2))){
var state_31788__$1 = state_31788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31788__$1,(4),ch);
} else {
if((state_val_31789 === (11))){
var inst_31748 = (state_31788[(8)]);
var inst_31753 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31754 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31748);
var inst_31755 = cljs.core.async.timeout.call(null,(1000));
var inst_31756 = [inst_31754,inst_31755];
var inst_31757 = (new cljs.core.PersistentVector(null,2,(5),inst_31753,inst_31756,null));
var state_31788__$1 = state_31788;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31788__$1,(14),inst_31757);
} else {
if((state_val_31789 === (9))){
var inst_31748 = (state_31788[(8)]);
var inst_31774 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31775 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31748);
var inst_31776 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31775);
var inst_31777 = [cljs.core.str("Not loading: "),cljs.core.str(inst_31776)].join('');
var inst_31778 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31777);
var state_31788__$1 = (function (){var statearr_31801 = state_31788;
(statearr_31801[(10)] = inst_31774);

return statearr_31801;
})();
var statearr_31802_31830 = state_31788__$1;
(statearr_31802_31830[(2)] = inst_31778);

(statearr_31802_31830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (5))){
var inst_31741 = (state_31788[(7)]);
var inst_31743 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31744 = (new cljs.core.PersistentArrayMap(null,2,inst_31743,null));
var inst_31745 = (new cljs.core.PersistentHashSet(null,inst_31744,null));
var inst_31746 = figwheel.client.focus_msgs.call(null,inst_31745,inst_31741);
var inst_31747 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31746);
var inst_31748 = cljs.core.first.call(null,inst_31746);
var inst_31749 = figwheel.client.autoload_QMARK_.call(null);
var state_31788__$1 = (function (){var statearr_31803 = state_31788;
(statearr_31803[(8)] = inst_31748);

(statearr_31803[(9)] = inst_31747);

return statearr_31803;
})();
if(cljs.core.truth_(inst_31749)){
var statearr_31804_31831 = state_31788__$1;
(statearr_31804_31831[(1)] = (8));

} else {
var statearr_31805_31832 = state_31788__$1;
(statearr_31805_31832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (14))){
var inst_31759 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
var statearr_31806_31833 = state_31788__$1;
(statearr_31806_31833[(2)] = inst_31759);

(statearr_31806_31833[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (16))){
var state_31788__$1 = state_31788;
var statearr_31807_31834 = state_31788__$1;
(statearr_31807_31834[(2)] = null);

(statearr_31807_31834[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (10))){
var inst_31780 = (state_31788[(2)]);
var state_31788__$1 = (function (){var statearr_31808 = state_31788;
(statearr_31808[(11)] = inst_31780);

return statearr_31808;
})();
var statearr_31809_31835 = state_31788__$1;
(statearr_31809_31835[(2)] = null);

(statearr_31809_31835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (8))){
var inst_31747 = (state_31788[(9)]);
var inst_31751 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31747,opts);
var state_31788__$1 = state_31788;
if(cljs.core.truth_(inst_31751)){
var statearr_31810_31836 = state_31788__$1;
(statearr_31810_31836[(1)] = (11));

} else {
var statearr_31811_31837 = state_31788__$1;
(statearr_31811_31837[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20519__auto___31819,ch))
;
return ((function (switch__20498__auto__,c__20519__auto___31819,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20499__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20499__auto____0 = (function (){
var statearr_31815 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31815[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20499__auto__);

(statearr_31815[(1)] = (1));

return statearr_31815;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20499__auto____1 = (function (state_31788){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_31788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e31816){if((e31816 instanceof Object)){
var ex__20502__auto__ = e31816;
var statearr_31817_31838 = state_31788;
(statearr_31817_31838[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31839 = state_31788;
state_31788 = G__31839;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20499__auto__ = function(state_31788){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20499__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20499__auto____1.call(this,state_31788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20499__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20499__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto___31819,ch))
})();
var state__20521__auto__ = (function (){var statearr_31818 = f__20520__auto__.call(null);
(statearr_31818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto___31819);

return statearr_31818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto___31819,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31840_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31840_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31847 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31847){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_31845 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_31846 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_31845,_STAR_print_newline_STAR_31846,base_path_31847){
return (function() { 
var G__31848__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__31848 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31849__i = 0, G__31849__a = new Array(arguments.length -  0);
while (G__31849__i < G__31849__a.length) {G__31849__a[G__31849__i] = arguments[G__31849__i + 0]; ++G__31849__i;}
  args = new cljs.core.IndexedSeq(G__31849__a,0);
} 
return G__31848__delegate.call(this,args);};
G__31848.cljs$lang$maxFixedArity = 0;
G__31848.cljs$lang$applyTo = (function (arglist__31850){
var args = cljs.core.seq(arglist__31850);
return G__31848__delegate(args);
});
G__31848.cljs$core$IFn$_invoke$arity$variadic = G__31848__delegate;
return G__31848;
})()
;})(_STAR_print_fn_STAR_31845,_STAR_print_newline_STAR_31846,base_path_31847))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31846;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31845;
}}catch (e31844){if((e31844 instanceof Error)){
var e = e31844;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31847], null));
} else {
var e = e31844;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31847))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31851){
var map__31860 = p__31851;
var map__31860__$1 = ((((!((map__31860 == null)))?((((map__31860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31860):map__31860);
var opts = map__31860__$1;
var build_id = cljs.core.get.call(null,map__31860__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31860,map__31860__$1,opts,build_id){
return (function (p__31862){
var vec__31863 = p__31862;
var seq__31864 = cljs.core.seq.call(null,vec__31863);
var first__31865 = cljs.core.first.call(null,seq__31864);
var seq__31864__$1 = cljs.core.next.call(null,seq__31864);
var map__31866 = first__31865;
var map__31866__$1 = ((((!((map__31866 == null)))?((((map__31866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31866):map__31866);
var msg = map__31866__$1;
var msg_name = cljs.core.get.call(null,map__31866__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31864__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31863,seq__31864,first__31865,seq__31864__$1,map__31866,map__31866__$1,msg,msg_name,_,map__31860,map__31860__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31863,seq__31864,first__31865,seq__31864__$1,map__31866,map__31866__$1,msg,msg_name,_,map__31860,map__31860__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31860,map__31860__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31874){
var vec__31875 = p__31874;
var seq__31876 = cljs.core.seq.call(null,vec__31875);
var first__31877 = cljs.core.first.call(null,seq__31876);
var seq__31876__$1 = cljs.core.next.call(null,seq__31876);
var map__31878 = first__31877;
var map__31878__$1 = ((((!((map__31878 == null)))?((((map__31878.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31878.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31878):map__31878);
var msg = map__31878__$1;
var msg_name = cljs.core.get.call(null,map__31878__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31876__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31880){
var map__31892 = p__31880;
var map__31892__$1 = ((((!((map__31892 == null)))?((((map__31892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31892):map__31892);
var on_compile_warning = cljs.core.get.call(null,map__31892__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31892__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31892,map__31892__$1,on_compile_warning,on_compile_fail){
return (function (p__31894){
var vec__31895 = p__31894;
var seq__31896 = cljs.core.seq.call(null,vec__31895);
var first__31897 = cljs.core.first.call(null,seq__31896);
var seq__31896__$1 = cljs.core.next.call(null,seq__31896);
var map__31898 = first__31897;
var map__31898__$1 = ((((!((map__31898 == null)))?((((map__31898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31898):map__31898);
var msg = map__31898__$1;
var msg_name = cljs.core.get.call(null,map__31898__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31896__$1;
var pred__31900 = cljs.core._EQ_;
var expr__31901 = msg_name;
if(cljs.core.truth_(pred__31900.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31901))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31900.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31901))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31892,map__31892__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20519__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto__,msg_hist,msg_names,msg){
return (function (state_32117){
var state_val_32118 = (state_32117[(1)]);
if((state_val_32118 === (7))){
var inst_32041 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
if(cljs.core.truth_(inst_32041)){
var statearr_32119_32165 = state_32117__$1;
(statearr_32119_32165[(1)] = (8));

} else {
var statearr_32120_32166 = state_32117__$1;
(statearr_32120_32166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (20))){
var inst_32111 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
var statearr_32121_32167 = state_32117__$1;
(statearr_32121_32167[(2)] = inst_32111);

(statearr_32121_32167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (27))){
var inst_32107 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
var statearr_32122_32168 = state_32117__$1;
(statearr_32122_32168[(2)] = inst_32107);

(statearr_32122_32168[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (1))){
var inst_32034 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32117__$1 = state_32117;
if(cljs.core.truth_(inst_32034)){
var statearr_32123_32169 = state_32117__$1;
(statearr_32123_32169[(1)] = (2));

} else {
var statearr_32124_32170 = state_32117__$1;
(statearr_32124_32170[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (24))){
var inst_32109 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
var statearr_32125_32171 = state_32117__$1;
(statearr_32125_32171[(2)] = inst_32109);

(statearr_32125_32171[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (4))){
var inst_32115 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32117__$1,inst_32115);
} else {
if((state_val_32118 === (15))){
var inst_32113 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
var statearr_32126_32172 = state_32117__$1;
(statearr_32126_32172[(2)] = inst_32113);

(statearr_32126_32172[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (21))){
var inst_32072 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
var statearr_32127_32173 = state_32117__$1;
(statearr_32127_32173[(2)] = inst_32072);

(statearr_32127_32173[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (31))){
var inst_32096 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32117__$1 = state_32117;
if(cljs.core.truth_(inst_32096)){
var statearr_32128_32174 = state_32117__$1;
(statearr_32128_32174[(1)] = (34));

} else {
var statearr_32129_32175 = state_32117__$1;
(statearr_32129_32175[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (32))){
var inst_32105 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
var statearr_32130_32176 = state_32117__$1;
(statearr_32130_32176[(2)] = inst_32105);

(statearr_32130_32176[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (33))){
var inst_32094 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
var statearr_32131_32177 = state_32117__$1;
(statearr_32131_32177[(2)] = inst_32094);

(statearr_32131_32177[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (13))){
var inst_32055 = figwheel.client.heads_up.clear.call(null);
var state_32117__$1 = state_32117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32117__$1,(16),inst_32055);
} else {
if((state_val_32118 === (22))){
var inst_32076 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32077 = figwheel.client.heads_up.append_message.call(null,inst_32076);
var state_32117__$1 = state_32117;
var statearr_32132_32178 = state_32117__$1;
(statearr_32132_32178[(2)] = inst_32077);

(statearr_32132_32178[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (36))){
var inst_32103 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
var statearr_32133_32179 = state_32117__$1;
(statearr_32133_32179[(2)] = inst_32103);

(statearr_32133_32179[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (29))){
var inst_32087 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
var statearr_32134_32180 = state_32117__$1;
(statearr_32134_32180[(2)] = inst_32087);

(statearr_32134_32180[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (6))){
var inst_32036 = (state_32117[(7)]);
var state_32117__$1 = state_32117;
var statearr_32135_32181 = state_32117__$1;
(statearr_32135_32181[(2)] = inst_32036);

(statearr_32135_32181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (28))){
var inst_32083 = (state_32117[(2)]);
var inst_32084 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32085 = figwheel.client.heads_up.display_warning.call(null,inst_32084);
var state_32117__$1 = (function (){var statearr_32136 = state_32117;
(statearr_32136[(8)] = inst_32083);

return statearr_32136;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32117__$1,(29),inst_32085);
} else {
if((state_val_32118 === (25))){
var inst_32081 = figwheel.client.heads_up.clear.call(null);
var state_32117__$1 = state_32117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32117__$1,(28),inst_32081);
} else {
if((state_val_32118 === (34))){
var inst_32098 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32117__$1 = state_32117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32117__$1,(37),inst_32098);
} else {
if((state_val_32118 === (17))){
var inst_32063 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
var statearr_32137_32182 = state_32117__$1;
(statearr_32137_32182[(2)] = inst_32063);

(statearr_32137_32182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (3))){
var inst_32053 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32117__$1 = state_32117;
if(cljs.core.truth_(inst_32053)){
var statearr_32138_32183 = state_32117__$1;
(statearr_32138_32183[(1)] = (13));

} else {
var statearr_32139_32184 = state_32117__$1;
(statearr_32139_32184[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (12))){
var inst_32049 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
var statearr_32140_32185 = state_32117__$1;
(statearr_32140_32185[(2)] = inst_32049);

(statearr_32140_32185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (2))){
var inst_32036 = (state_32117[(7)]);
var inst_32036__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32117__$1 = (function (){var statearr_32141 = state_32117;
(statearr_32141[(7)] = inst_32036__$1);

return statearr_32141;
})();
if(cljs.core.truth_(inst_32036__$1)){
var statearr_32142_32186 = state_32117__$1;
(statearr_32142_32186[(1)] = (5));

} else {
var statearr_32143_32187 = state_32117__$1;
(statearr_32143_32187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (23))){
var inst_32079 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32117__$1 = state_32117;
if(cljs.core.truth_(inst_32079)){
var statearr_32144_32188 = state_32117__$1;
(statearr_32144_32188[(1)] = (25));

} else {
var statearr_32145_32189 = state_32117__$1;
(statearr_32145_32189[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (35))){
var state_32117__$1 = state_32117;
var statearr_32146_32190 = state_32117__$1;
(statearr_32146_32190[(2)] = null);

(statearr_32146_32190[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (19))){
var inst_32074 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32117__$1 = state_32117;
if(cljs.core.truth_(inst_32074)){
var statearr_32147_32191 = state_32117__$1;
(statearr_32147_32191[(1)] = (22));

} else {
var statearr_32148_32192 = state_32117__$1;
(statearr_32148_32192[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (11))){
var inst_32045 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
var statearr_32149_32193 = state_32117__$1;
(statearr_32149_32193[(2)] = inst_32045);

(statearr_32149_32193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (9))){
var inst_32047 = figwheel.client.heads_up.clear.call(null);
var state_32117__$1 = state_32117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32117__$1,(12),inst_32047);
} else {
if((state_val_32118 === (5))){
var inst_32038 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32117__$1 = state_32117;
var statearr_32150_32194 = state_32117__$1;
(statearr_32150_32194[(2)] = inst_32038);

(statearr_32150_32194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (14))){
var inst_32065 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32117__$1 = state_32117;
if(cljs.core.truth_(inst_32065)){
var statearr_32151_32195 = state_32117__$1;
(statearr_32151_32195[(1)] = (18));

} else {
var statearr_32152_32196 = state_32117__$1;
(statearr_32152_32196[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (26))){
var inst_32089 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32117__$1 = state_32117;
if(cljs.core.truth_(inst_32089)){
var statearr_32153_32197 = state_32117__$1;
(statearr_32153_32197[(1)] = (30));

} else {
var statearr_32154_32198 = state_32117__$1;
(statearr_32154_32198[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (16))){
var inst_32057 = (state_32117[(2)]);
var inst_32058 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32059 = figwheel.client.format_messages.call(null,inst_32058);
var inst_32060 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32061 = figwheel.client.heads_up.display_error.call(null,inst_32059,inst_32060);
var state_32117__$1 = (function (){var statearr_32155 = state_32117;
(statearr_32155[(9)] = inst_32057);

return statearr_32155;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32117__$1,(17),inst_32061);
} else {
if((state_val_32118 === (30))){
var inst_32091 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32092 = figwheel.client.heads_up.display_warning.call(null,inst_32091);
var state_32117__$1 = state_32117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32117__$1,(33),inst_32092);
} else {
if((state_val_32118 === (10))){
var inst_32051 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
var statearr_32156_32199 = state_32117__$1;
(statearr_32156_32199[(2)] = inst_32051);

(statearr_32156_32199[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (18))){
var inst_32067 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32068 = figwheel.client.format_messages.call(null,inst_32067);
var inst_32069 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32070 = figwheel.client.heads_up.display_error.call(null,inst_32068,inst_32069);
var state_32117__$1 = state_32117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32117__$1,(21),inst_32070);
} else {
if((state_val_32118 === (37))){
var inst_32100 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
var statearr_32157_32200 = state_32117__$1;
(statearr_32157_32200[(2)] = inst_32100);

(statearr_32157_32200[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (8))){
var inst_32043 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32117__$1 = state_32117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32117__$1,(11),inst_32043);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20519__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20498__auto__,c__20519__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto____0 = (function (){
var statearr_32161 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32161[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto__);

(statearr_32161[(1)] = (1));

return statearr_32161;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto____1 = (function (state_32117){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_32117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e32162){if((e32162 instanceof Object)){
var ex__20502__auto__ = e32162;
var statearr_32163_32201 = state_32117;
(statearr_32163_32201[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32202 = state_32117;
state_32117 = G__32202;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto__ = function(state_32117){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto____1.call(this,state_32117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto__,msg_hist,msg_names,msg))
})();
var state__20521__auto__ = (function (){var statearr_32164 = f__20520__auto__.call(null);
(statearr_32164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto__);

return statearr_32164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto__,msg_hist,msg_names,msg))
);

return c__20519__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20519__auto___32265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto___32265,ch){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto___32265,ch){
return (function (state_32248){
var state_val_32249 = (state_32248[(1)]);
if((state_val_32249 === (1))){
var state_32248__$1 = state_32248;
var statearr_32250_32266 = state_32248__$1;
(statearr_32250_32266[(2)] = null);

(statearr_32250_32266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32249 === (2))){
var state_32248__$1 = state_32248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32248__$1,(4),ch);
} else {
if((state_val_32249 === (3))){
var inst_32246 = (state_32248[(2)]);
var state_32248__$1 = state_32248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32248__$1,inst_32246);
} else {
if((state_val_32249 === (4))){
var inst_32236 = (state_32248[(7)]);
var inst_32236__$1 = (state_32248[(2)]);
var state_32248__$1 = (function (){var statearr_32251 = state_32248;
(statearr_32251[(7)] = inst_32236__$1);

return statearr_32251;
})();
if(cljs.core.truth_(inst_32236__$1)){
var statearr_32252_32267 = state_32248__$1;
(statearr_32252_32267[(1)] = (5));

} else {
var statearr_32253_32268 = state_32248__$1;
(statearr_32253_32268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32249 === (5))){
var inst_32236 = (state_32248[(7)]);
var inst_32238 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32236);
var state_32248__$1 = state_32248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32248__$1,(8),inst_32238);
} else {
if((state_val_32249 === (6))){
var state_32248__$1 = state_32248;
var statearr_32254_32269 = state_32248__$1;
(statearr_32254_32269[(2)] = null);

(statearr_32254_32269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32249 === (7))){
var inst_32244 = (state_32248[(2)]);
var state_32248__$1 = state_32248;
var statearr_32255_32270 = state_32248__$1;
(statearr_32255_32270[(2)] = inst_32244);

(statearr_32255_32270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32249 === (8))){
var inst_32240 = (state_32248[(2)]);
var state_32248__$1 = (function (){var statearr_32256 = state_32248;
(statearr_32256[(8)] = inst_32240);

return statearr_32256;
})();
var statearr_32257_32271 = state_32248__$1;
(statearr_32257_32271[(2)] = null);

(statearr_32257_32271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__20519__auto___32265,ch))
;
return ((function (switch__20498__auto__,c__20519__auto___32265,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20499__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20499__auto____0 = (function (){
var statearr_32261 = [null,null,null,null,null,null,null,null,null];
(statearr_32261[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20499__auto__);

(statearr_32261[(1)] = (1));

return statearr_32261;
});
var figwheel$client$heads_up_plugin_$_state_machine__20499__auto____1 = (function (state_32248){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_32248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e32262){if((e32262 instanceof Object)){
var ex__20502__auto__ = e32262;
var statearr_32263_32272 = state_32248;
(statearr_32263_32272[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32273 = state_32248;
state_32248 = G__32273;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20499__auto__ = function(state_32248){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20499__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20499__auto____1.call(this,state_32248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20499__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20499__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto___32265,ch))
})();
var state__20521__auto__ = (function (){var statearr_32264 = f__20520__auto__.call(null);
(statearr_32264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto___32265);

return statearr_32264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto___32265,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20519__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto__){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto__){
return (function (state_32294){
var state_val_32295 = (state_32294[(1)]);
if((state_val_32295 === (1))){
var inst_32289 = cljs.core.async.timeout.call(null,(3000));
var state_32294__$1 = state_32294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32294__$1,(2),inst_32289);
} else {
if((state_val_32295 === (2))){
var inst_32291 = (state_32294[(2)]);
var inst_32292 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32294__$1 = (function (){var statearr_32296 = state_32294;
(statearr_32296[(7)] = inst_32291);

return statearr_32296;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32294__$1,inst_32292);
} else {
return null;
}
}
});})(c__20519__auto__))
;
return ((function (switch__20498__auto__,c__20519__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20499__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20499__auto____0 = (function (){
var statearr_32300 = [null,null,null,null,null,null,null,null];
(statearr_32300[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20499__auto__);

(statearr_32300[(1)] = (1));

return statearr_32300;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20499__auto____1 = (function (state_32294){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_32294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e32301){if((e32301 instanceof Object)){
var ex__20502__auto__ = e32301;
var statearr_32302_32304 = state_32294;
(statearr_32302_32304[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32305 = state_32294;
state_32294 = G__32305;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20499__auto__ = function(state_32294){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20499__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20499__auto____1.call(this,state_32294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20499__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20499__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto__))
})();
var state__20521__auto__ = (function (){var statearr_32303 = f__20520__auto__.call(null);
(statearr_32303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto__);

return statearr_32303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto__))
);

return c__20519__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32306){
var map__32313 = p__32306;
var map__32313__$1 = ((((!((map__32313 == null)))?((((map__32313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32313):map__32313);
var ed = map__32313__$1;
var formatted_exception = cljs.core.get.call(null,map__32313__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32313__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32313__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32315_32319 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32316_32320 = null;
var count__32317_32321 = (0);
var i__32318_32322 = (0);
while(true){
if((i__32318_32322 < count__32317_32321)){
var msg_32323 = cljs.core._nth.call(null,chunk__32316_32320,i__32318_32322);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32323);

var G__32324 = seq__32315_32319;
var G__32325 = chunk__32316_32320;
var G__32326 = count__32317_32321;
var G__32327 = (i__32318_32322 + (1));
seq__32315_32319 = G__32324;
chunk__32316_32320 = G__32325;
count__32317_32321 = G__32326;
i__32318_32322 = G__32327;
continue;
} else {
var temp__4657__auto___32328 = cljs.core.seq.call(null,seq__32315_32319);
if(temp__4657__auto___32328){
var seq__32315_32329__$1 = temp__4657__auto___32328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32315_32329__$1)){
var c__19275__auto___32330 = cljs.core.chunk_first.call(null,seq__32315_32329__$1);
var G__32331 = cljs.core.chunk_rest.call(null,seq__32315_32329__$1);
var G__32332 = c__19275__auto___32330;
var G__32333 = cljs.core.count.call(null,c__19275__auto___32330);
var G__32334 = (0);
seq__32315_32319 = G__32331;
chunk__32316_32320 = G__32332;
count__32317_32321 = G__32333;
i__32318_32322 = G__32334;
continue;
} else {
var msg_32335 = cljs.core.first.call(null,seq__32315_32329__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32335);

var G__32336 = cljs.core.next.call(null,seq__32315_32329__$1);
var G__32337 = null;
var G__32338 = (0);
var G__32339 = (0);
seq__32315_32319 = G__32336;
chunk__32316_32320 = G__32337;
count__32317_32321 = G__32338;
i__32318_32322 = G__32339;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32340){
var map__32343 = p__32340;
var map__32343__$1 = ((((!((map__32343 == null)))?((((map__32343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32343):map__32343);
var w = map__32343__$1;
var message = cljs.core.get.call(null,map__32343__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18452__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18452__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18452__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32355 = cljs.core.seq.call(null,plugins);
var chunk__32356 = null;
var count__32357 = (0);
var i__32358 = (0);
while(true){
if((i__32358 < count__32357)){
var vec__32359 = cljs.core._nth.call(null,chunk__32356,i__32358);
var k = cljs.core.nth.call(null,vec__32359,(0),null);
var plugin = cljs.core.nth.call(null,vec__32359,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32365 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32355,chunk__32356,count__32357,i__32358,pl_32365,vec__32359,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32365.call(null,msg_hist);
});})(seq__32355,chunk__32356,count__32357,i__32358,pl_32365,vec__32359,k,plugin))
);
} else {
}

var G__32366 = seq__32355;
var G__32367 = chunk__32356;
var G__32368 = count__32357;
var G__32369 = (i__32358 + (1));
seq__32355 = G__32366;
chunk__32356 = G__32367;
count__32357 = G__32368;
i__32358 = G__32369;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32355);
if(temp__4657__auto__){
var seq__32355__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32355__$1)){
var c__19275__auto__ = cljs.core.chunk_first.call(null,seq__32355__$1);
var G__32370 = cljs.core.chunk_rest.call(null,seq__32355__$1);
var G__32371 = c__19275__auto__;
var G__32372 = cljs.core.count.call(null,c__19275__auto__);
var G__32373 = (0);
seq__32355 = G__32370;
chunk__32356 = G__32371;
count__32357 = G__32372;
i__32358 = G__32373;
continue;
} else {
var vec__32362 = cljs.core.first.call(null,seq__32355__$1);
var k = cljs.core.nth.call(null,vec__32362,(0),null);
var plugin = cljs.core.nth.call(null,vec__32362,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32374 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32355,chunk__32356,count__32357,i__32358,pl_32374,vec__32362,k,plugin,seq__32355__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32374.call(null,msg_hist);
});})(seq__32355,chunk__32356,count__32357,i__32358,pl_32374,vec__32362,k,plugin,seq__32355__$1,temp__4657__auto__))
);
} else {
}

var G__32375 = cljs.core.next.call(null,seq__32355__$1);
var G__32376 = null;
var G__32377 = (0);
var G__32378 = (0);
seq__32355 = G__32375;
chunk__32356 = G__32376;
count__32357 = G__32377;
i__32358 = G__32378;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args32379 = [];
var len__19539__auto___32382 = arguments.length;
var i__19540__auto___32383 = (0);
while(true){
if((i__19540__auto___32383 < len__19539__auto___32382)){
args32379.push((arguments[i__19540__auto___32383]));

var G__32384 = (i__19540__auto___32383 + (1));
i__19540__auto___32383 = G__32384;
continue;
} else {
}
break;
}

var G__32381 = args32379.length;
switch (G__32381) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32379.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19546__auto__ = [];
var len__19539__auto___32390 = arguments.length;
var i__19540__auto___32391 = (0);
while(true){
if((i__19540__auto___32391 < len__19539__auto___32390)){
args__19546__auto__.push((arguments[i__19540__auto___32391]));

var G__32392 = (i__19540__auto___32391 + (1));
i__19540__auto___32391 = G__32392;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32387){
var map__32388 = p__32387;
var map__32388__$1 = ((((!((map__32388 == null)))?((((map__32388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32388):map__32388);
var opts = map__32388__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32386){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32386));
});


//# sourceMappingURL=client.js.map