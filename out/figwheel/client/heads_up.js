// Compiled by ClojureScript 1.9.76 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19546__auto__ = [];
var len__19539__auto___21668 = arguments.length;
var i__19540__auto___21669 = (0);
while(true){
if((i__19540__auto___21669 < len__19539__auto___21668)){
args__19546__auto__.push((arguments[i__19540__auto___21669]));

var G__21670 = (i__19540__auto___21669 + (1));
i__19540__auto___21669 = G__21670;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((2) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19547__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__21660_21671 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__21661_21672 = null;
var count__21662_21673 = (0);
var i__21663_21674 = (0);
while(true){
if((i__21663_21674 < count__21662_21673)){
var k_21675 = cljs.core._nth.call(null,chunk__21661_21672,i__21663_21674);
e.setAttribute(cljs.core.name.call(null,k_21675),cljs.core.get.call(null,attrs,k_21675));

var G__21676 = seq__21660_21671;
var G__21677 = chunk__21661_21672;
var G__21678 = count__21662_21673;
var G__21679 = (i__21663_21674 + (1));
seq__21660_21671 = G__21676;
chunk__21661_21672 = G__21677;
count__21662_21673 = G__21678;
i__21663_21674 = G__21679;
continue;
} else {
var temp__4657__auto___21680 = cljs.core.seq.call(null,seq__21660_21671);
if(temp__4657__auto___21680){
var seq__21660_21681__$1 = temp__4657__auto___21680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21660_21681__$1)){
var c__19275__auto___21682 = cljs.core.chunk_first.call(null,seq__21660_21681__$1);
var G__21683 = cljs.core.chunk_rest.call(null,seq__21660_21681__$1);
var G__21684 = c__19275__auto___21682;
var G__21685 = cljs.core.count.call(null,c__19275__auto___21682);
var G__21686 = (0);
seq__21660_21671 = G__21683;
chunk__21661_21672 = G__21684;
count__21662_21673 = G__21685;
i__21663_21674 = G__21686;
continue;
} else {
var k_21687 = cljs.core.first.call(null,seq__21660_21681__$1);
e.setAttribute(cljs.core.name.call(null,k_21687),cljs.core.get.call(null,attrs,k_21687));

var G__21688 = cljs.core.next.call(null,seq__21660_21681__$1);
var G__21689 = null;
var G__21690 = (0);
var G__21691 = (0);
seq__21660_21671 = G__21688;
chunk__21661_21672 = G__21689;
count__21662_21673 = G__21690;
i__21663_21674 = G__21691;
continue;
}
} else {
}
}
break;
}

var seq__21664_21692 = cljs.core.seq.call(null,children);
var chunk__21665_21693 = null;
var count__21666_21694 = (0);
var i__21667_21695 = (0);
while(true){
if((i__21667_21695 < count__21666_21694)){
var ch_21696 = cljs.core._nth.call(null,chunk__21665_21693,i__21667_21695);
e.appendChild(ch_21696);

var G__21697 = seq__21664_21692;
var G__21698 = chunk__21665_21693;
var G__21699 = count__21666_21694;
var G__21700 = (i__21667_21695 + (1));
seq__21664_21692 = G__21697;
chunk__21665_21693 = G__21698;
count__21666_21694 = G__21699;
i__21667_21695 = G__21700;
continue;
} else {
var temp__4657__auto___21701 = cljs.core.seq.call(null,seq__21664_21692);
if(temp__4657__auto___21701){
var seq__21664_21702__$1 = temp__4657__auto___21701;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21664_21702__$1)){
var c__19275__auto___21703 = cljs.core.chunk_first.call(null,seq__21664_21702__$1);
var G__21704 = cljs.core.chunk_rest.call(null,seq__21664_21702__$1);
var G__21705 = c__19275__auto___21703;
var G__21706 = cljs.core.count.call(null,c__19275__auto___21703);
var G__21707 = (0);
seq__21664_21692 = G__21704;
chunk__21665_21693 = G__21705;
count__21666_21694 = G__21706;
i__21667_21695 = G__21707;
continue;
} else {
var ch_21708 = cljs.core.first.call(null,seq__21664_21702__$1);
e.appendChild(ch_21708);

var G__21709 = cljs.core.next.call(null,seq__21664_21702__$1);
var G__21710 = null;
var G__21711 = (0);
var G__21712 = (0);
seq__21664_21692 = G__21709;
chunk__21665_21693 = G__21710;
count__21666_21694 = G__21711;
i__21667_21695 = G__21712;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq21657){
var G__21658 = cljs.core.first.call(null,seq21657);
var seq21657__$1 = cljs.core.next.call(null,seq21657);
var G__21659 = cljs.core.first.call(null,seq21657__$1);
var seq21657__$2 = cljs.core.next.call(null,seq21657__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__21658,G__21659,seq21657__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19389__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19390__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19391__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19392__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19393__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19389__auto__,prefer_table__19390__auto__,method_cache__19391__auto__,cached_hierarchy__19392__auto__,hierarchy__19393__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19389__auto__,prefer_table__19390__auto__,method_cache__19391__auto__,cached_hierarchy__19392__auto__,hierarchy__19393__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19393__auto__,method_table__19389__auto__,prefer_table__19390__auto__,method_cache__19391__auto__,cached_hierarchy__19392__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_21713 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_21713.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_21713.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_21713.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_21713);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__21714,st_map){
var map__21721 = p__21714;
var map__21721__$1 = ((((!((map__21721 == null)))?((((map__21721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21721):map__21721);
var container_el = cljs.core.get.call(null,map__21721__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__21721,map__21721__$1,container_el){
return (function (p__21723){
var vec__21724 = p__21723;
var k = cljs.core.nth.call(null,vec__21724,(0),null);
var v = cljs.core.nth.call(null,vec__21724,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__21721,map__21721__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__21727,dom_str){
var map__21730 = p__21727;
var map__21730__$1 = ((((!((map__21730 == null)))?((((map__21730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21730):map__21730);
var c = map__21730__$1;
var content_area_el = cljs.core.get.call(null,map__21730__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__21732){
var map__21735 = p__21732;
var map__21735__$1 = ((((!((map__21735 == null)))?((((map__21735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21735):map__21735);
var content_area_el = cljs.core.get.call(null,map__21735__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20519__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto__){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto__){
return (function (state_21778){
var state_val_21779 = (state_21778[(1)]);
if((state_val_21779 === (1))){
var inst_21763 = (state_21778[(7)]);
var inst_21763__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_21764 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_21765 = ["10px","10px","100%","68px","1.0"];
var inst_21766 = cljs.core.PersistentHashMap.fromArrays(inst_21764,inst_21765);
var inst_21767 = cljs.core.merge.call(null,inst_21766,style);
var inst_21768 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21763__$1,inst_21767);
var inst_21769 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_21763__$1,msg);
var inst_21770 = cljs.core.async.timeout.call(null,(300));
var state_21778__$1 = (function (){var statearr_21780 = state_21778;
(statearr_21780[(8)] = inst_21769);

(statearr_21780[(7)] = inst_21763__$1);

(statearr_21780[(9)] = inst_21768);

return statearr_21780;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21778__$1,(2),inst_21770);
} else {
if((state_val_21779 === (2))){
var inst_21763 = (state_21778[(7)]);
var inst_21772 = (state_21778[(2)]);
var inst_21773 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_21774 = ["auto"];
var inst_21775 = cljs.core.PersistentHashMap.fromArrays(inst_21773,inst_21774);
var inst_21776 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21763,inst_21775);
var state_21778__$1 = (function (){var statearr_21781 = state_21778;
(statearr_21781[(10)] = inst_21772);

return statearr_21781;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21778__$1,inst_21776);
} else {
return null;
}
}
});})(c__20519__auto__))
;
return ((function (switch__20498__auto__,c__20519__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20499__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20499__auto____0 = (function (){
var statearr_21785 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21785[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20499__auto__);

(statearr_21785[(1)] = (1));

return statearr_21785;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20499__auto____1 = (function (state_21778){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_21778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e21786){if((e21786 instanceof Object)){
var ex__20502__auto__ = e21786;
var statearr_21787_21789 = state_21778;
(statearr_21787_21789[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21790 = state_21778;
state_21778 = G__21790;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20499__auto__ = function(state_21778){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20499__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20499__auto____1.call(this,state_21778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20499__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20499__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto__))
})();
var state__20521__auto__ = (function (){var statearr_21788 = f__20520__auto__.call(null);
(statearr_21788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto__);

return statearr_21788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto__))
);

return c__20519__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__21794 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__21794,(0),null);
var ln = cljs.core.nth.call(null,vec__21794,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__21801 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__21801,(0),null);
var file_line = cljs.core.nth.call(null,vec__21801,(1),null);
var file_column = cljs.core.nth.call(null,vec__21801,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__21801,file_name,file_line,file_column){
return (function (p1__21797_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__21797_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__21801,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18464__auto__ = file_line;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
var and__18452__auto__ = cause;
if(cljs.core.truth_(and__18452__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18452__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__21806 = figwheel.client.heads_up.ensure_container.call(null);
var map__21806__$1 = ((((!((map__21806 == null)))?((((map__21806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21806):map__21806);
var content_area_el = cljs.core.get.call(null,map__21806__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20519__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto__){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto__){
return (function (state_21854){
var state_val_21855 = (state_21854[(1)]);
if((state_val_21855 === (1))){
var inst_21837 = (state_21854[(7)]);
var inst_21837__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_21838 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_21839 = ["0.0"];
var inst_21840 = cljs.core.PersistentHashMap.fromArrays(inst_21838,inst_21839);
var inst_21841 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21837__$1,inst_21840);
var inst_21842 = cljs.core.async.timeout.call(null,(300));
var state_21854__$1 = (function (){var statearr_21856 = state_21854;
(statearr_21856[(8)] = inst_21841);

(statearr_21856[(7)] = inst_21837__$1);

return statearr_21856;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21854__$1,(2),inst_21842);
} else {
if((state_val_21855 === (2))){
var inst_21837 = (state_21854[(7)]);
var inst_21844 = (state_21854[(2)]);
var inst_21845 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_21846 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_21847 = cljs.core.PersistentHashMap.fromArrays(inst_21845,inst_21846);
var inst_21848 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21837,inst_21847);
var inst_21849 = cljs.core.async.timeout.call(null,(200));
var state_21854__$1 = (function (){var statearr_21857 = state_21854;
(statearr_21857[(9)] = inst_21848);

(statearr_21857[(10)] = inst_21844);

return statearr_21857;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21854__$1,(3),inst_21849);
} else {
if((state_val_21855 === (3))){
var inst_21837 = (state_21854[(7)]);
var inst_21851 = (state_21854[(2)]);
var inst_21852 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_21837,"");
var state_21854__$1 = (function (){var statearr_21858 = state_21854;
(statearr_21858[(11)] = inst_21851);

return statearr_21858;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21854__$1,inst_21852);
} else {
return null;
}
}
}
});})(c__20519__auto__))
;
return ((function (switch__20498__auto__,c__20519__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20499__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20499__auto____0 = (function (){
var statearr_21862 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21862[(0)] = figwheel$client$heads_up$clear_$_state_machine__20499__auto__);

(statearr_21862[(1)] = (1));

return statearr_21862;
});
var figwheel$client$heads_up$clear_$_state_machine__20499__auto____1 = (function (state_21854){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_21854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e21863){if((e21863 instanceof Object)){
var ex__20502__auto__ = e21863;
var statearr_21864_21866 = state_21854;
(statearr_21864_21866[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21867 = state_21854;
state_21854 = G__21867;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20499__auto__ = function(state_21854){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20499__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20499__auto____1.call(this,state_21854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20499__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20499__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto__))
})();
var state__20521__auto__ = (function (){var statearr_21865 = f__20520__auto__.call(null);
(statearr_21865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto__);

return statearr_21865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto__))
);

return c__20519__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20519__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20519__auto__){
return (function (){
var f__20520__auto__ = (function (){var switch__20498__auto__ = ((function (c__20519__auto__){
return (function (state_21899){
var state_val_21900 = (state_21899[(1)]);
if((state_val_21900 === (1))){
var inst_21889 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_21899__$1 = state_21899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21899__$1,(2),inst_21889);
} else {
if((state_val_21900 === (2))){
var inst_21891 = (state_21899[(2)]);
var inst_21892 = cljs.core.async.timeout.call(null,(400));
var state_21899__$1 = (function (){var statearr_21901 = state_21899;
(statearr_21901[(7)] = inst_21891);

return statearr_21901;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21899__$1,(3),inst_21892);
} else {
if((state_val_21900 === (3))){
var inst_21894 = (state_21899[(2)]);
var inst_21895 = figwheel.client.heads_up.clear.call(null);
var state_21899__$1 = (function (){var statearr_21902 = state_21899;
(statearr_21902[(8)] = inst_21894);

return statearr_21902;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21899__$1,(4),inst_21895);
} else {
if((state_val_21900 === (4))){
var inst_21897 = (state_21899[(2)]);
var state_21899__$1 = state_21899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21899__$1,inst_21897);
} else {
return null;
}
}
}
}
});})(c__20519__auto__))
;
return ((function (switch__20498__auto__,c__20519__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20499__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20499__auto____0 = (function (){
var statearr_21906 = [null,null,null,null,null,null,null,null,null];
(statearr_21906[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20499__auto__);

(statearr_21906[(1)] = (1));

return statearr_21906;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20499__auto____1 = (function (state_21899){
while(true){
var ret_value__20500__auto__ = (function (){try{while(true){
var result__20501__auto__ = switch__20498__auto__.call(null,state_21899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20501__auto__;
}
break;
}
}catch (e21907){if((e21907 instanceof Object)){
var ex__20502__auto__ = e21907;
var statearr_21908_21910 = state_21899;
(statearr_21908_21910[(5)] = ex__20502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21911 = state_21899;
state_21899 = G__21911;
continue;
} else {
return ret_value__20500__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20499__auto__ = function(state_21899){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20499__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20499__auto____1.call(this,state_21899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20499__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20499__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20499__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20499__auto__;
})()
;})(switch__20498__auto__,c__20519__auto__))
})();
var state__20521__auto__ = (function (){var statearr_21909 = f__20520__auto__.call(null);
(statearr_21909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20519__auto__);

return statearr_21909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20521__auto__);
});})(c__20519__auto__))
);

return c__20519__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map