var map = function(Interscript) {Interscript.define_map("iso-pan-Guru-Latn-15919-2001", function(Interscript, map) {
map.dependencies = [];
map.stages.main = function(s) {
s = Interscript.parallel_replace_tree(s, map.cache.PTREE_4279913972735947316);
s = Interscript.functions.compose(s, {});
return s;
};
map.cache.PTREE_4279913972735947316 = {"2565":{"":"a"},"2566":{"":"ā"},"2567":{"":"i"},"2568":{"":"ī"},"2569":{"":"u"},"2570":{"":"ū"},"2575":{"":"e"},"2576":{"":"ai"},"2579":{"":"o"},"2580":{"":"au"},"2581":{"":"ka","2620":{"":"qa"}},"2582":{"":"kha","2620":{"":"ḵẖa"}},"2583":{"":"ga","2620":{"":"ġa"}},"2584":{"":"gha"},"2585":{"":"ṅa"},"2586":{"":"ca"},"2587":{"":"cha"},"2588":{"":"ja","2620":{"":"za"}},"2589":{"":"jha"},"2590":{"":"ña"},"2591":{"":"ṭa"},"2592":{"":"ṭha"},"2593":{"":"ḍa"},"2594":{"":"ḍha"},"2595":{"":"ṇa"},"2596":{"":"ta"},"2597":{"":"tha"},"2598":{"":"da"},"2599":{"":"dha"},"2600":{"":"na"},"2602":{"":"pa"},"2603":{"":"pha","2620":{"":"fa"}},"2604":{"":"ba"},"2605":{"":"bha"},"2606":{"":"ma"},"2607":{"":"ya"},"2608":{"":"ra"},"2610":{"":"la","2620":{"":"ḷa"}},"2613":{"":"va"},"2652":{"":"ṛa"},"2616":{"":"sa","2620":{"":"śa"}},"2617":{"":"ha"},"2562":{"":"ṃ","2568":{"":"ī:ṃ"}},"2672":{"":"ṁ","2568":{"":"ī:ṁ"}},"2563":{"":"ḥ"},"2561":{"":"m̐"},"2622":{"":"ā"},"2623":{"":"i"},"2624":{"":"ī"},"2625":{"":"u"},"2626":{"":"ū"},"2631":{"":"e"},"2632":{"":"ai"},"2635":{"":"o"},"2636":{"":"au"},"2673":{"":"","2565":{"":":a"},"2566":{"":":ā"},"2567":{"":":i"},"2568":{"":":ī"},"2569":{"":":u"},"2570":{"":":ū"},"2575":{"":":e"},"2576":{"":":ai"},"2579":{"":":o"},"2580":{"":":au"},"2622":{"":":ā"},"2623":{"":":i"},"2624":{"":":ī"},"2625":{"":":u"},"2626":{"":":ū"},"2631":{"":":e"},"2632":{"":":ai"},"2635":{"":":o"},"2636":{"":":au"}},"2662":{"":"0"},"2663":{"":"1"},"2664":{"":"2"},"2665":{"":"3"},"2666":{"":"4"},"2667":{"":"5"},"2668":{"":"6"},"2669":{"":"7"},"2670":{"":"8"},"2671":{"":"9"}};
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }