var map = function(Interscript) {Interscript.define_map("alalc-pli-Deva-Latn-2012", function(Interscript, map) {
map.dependencies = [];
map.stages.main = function(s) {
s = Interscript.gsub(s, "ं(?=[कखगघङ])", "ṅ");
s = Interscript.gsub(s, "ं(?=[चछजझञ])", "ñ");
s = Interscript.gsub(s, "ं(?=[टठडढण])", "ṇ");
s = Interscript.gsub(s, "ं(?=[तथदधन])", "n");
s = Interscript.parallel_replace_tree(s, map.cache.PTREE_1557955496892885995);
s = Interscript.functions.compose(s, {});
return s;
};
map.cache.PTREE_1557955496892885995 = {"2309":{"":"a"},"2310":{"":"ā"},"2311":{"":"i"},"2312":{"":"ī"},"2313":{"":"u"},"2314":{"":"ū"},"2319":{"":"e"},"2323":{"":"o"},"2325":{"":"ka"},"2326":{"":"kha"},"2327":{"":"ga"},"2328":{"":"gha"},"2329":{"":"ṅa"},"2330":{"":"ca"},"2331":{"":"cha"},"2332":{"":"ja"},"2333":{"":"jha"},"2334":{"":"ña"},"2335":{"":"ṭa"},"2336":{"":"ṭha"},"2337":{"":"ḍa"},"2338":{"":"ḍha"},"2339":{"":"ṇa"},"2340":{"":"ta"},"2341":{"":"tha"},"2342":{"":"da"},"2343":{"":"dha"},"2344":{"":"na"},"2346":{"":"pa"},"2347":{"":"pha"},"2348":{"":"ba"},"2349":{"":"bha"},"2350":{"":"ma"},"2351":{"":"ya"},"2352":{"":"ra"},"2354":{"":"la"},"2355":{"":"ḻa"},"2357":{"":"va"},"2358":{"":"śa"},"2359":{"":"ṣa"},"2360":{"":"sa"},"2361":{"":"ha"},"2307":{"":"ḥ"},"2306":{"":"ṃ"},"2366":{"":"ā"},"2367":{"":"i"},"2368":{"":"ī"},"2369":{"":"u"},"2370":{"":"ū"},"2375":{"":"e"},"2379":{"":"o"},"2381":{"":""},"8205":{"":""}};
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }