var map = function(Interscript) {Interscript.define_map("bgnpcgn-kaz-Cyrl-Latn-1979", function(Interscript, map) {
map.dependencies = [];
map.stages.main = function(s) {
s = Interscript.parallel_replace_tree(s, map.cache.PTREE_3045390816827257927);
return s;
};
map.cache.PTREE_3045390816827257927 = {"1040":{"":"A"},"1240":{"":"Ä"},"1041":{"":"B"},"1042":{"":"V"},"1043":{"":"G"},"1170":{"":"Gh"},"1044":{"":"D"},"1045":{"":"E"},"1025":{"":"Yo"},"1046":{"":"Zh"},"1047":{"":"Z"},"1048":{"":"Ī"},"1049":{"":"Y"},"1050":{"":"K"},"1178":{"":"Q"},"1051":{"":"L"},"1052":{"":"M"},"1053":{"":"N"},"1186":{"":"Ng"},"1054":{"":"O"},"1256":{"":"Ö"},"1055":{"":"P"},"1056":{"":"R"},"1057":{"":"S"},"1058":{"":"T"},"1059":{"":"Ū"},"1200":{"":"U"},"1198":{"":"Ü"},"1060":{"":"F"},"1061":{"":"Kh"},"1210":{"":"H"},"1062":{"":"Ts"},"1063":{"":"Ch"},"1064":{"":"Sh"},"1065":{"":"Shch"},"1066":{"":"”"},"1067":{"":"Y"},"1030":{"":"I"},"1068":{"":"’"},"1069":{"":"Ė"},"1070":{"":"Yu"},"1071":{"":"Ya"},"1072":{"":"a"},"1241":{"":"ä"},"1073":{"":"b"},"1074":{"":"v"},"1075":{"":"g"},"1171":{"":"gh"},"1076":{"":"d"},"1077":{"":"e"},"1105":{"":"yo"},"1078":{"":"zh"},"1079":{"":"z"},"1080":{"":"ī"},"1081":{"":"y"},"1082":{"":"k"},"1179":{"":"q"},"1083":{"":"l"},"1084":{"":"m"},"1085":{"":"n"},"1187":{"":"ng"},"1086":{"":"o"},"1257":{"":"ö"},"1087":{"":"p"},"1088":{"":"r"},"1089":{"":"s"},"1090":{"":"t"},"1091":{"":"ū"},"1201":{"":"u"},"1199":{"":"ü"},"1092":{"":"f"},"1093":{"":"kh"},"1211":{"":"h"},"1094":{"":"ts"},"1095":{"":"ch"},"1096":{"":"sh"},"1097":{"":"shch"},"1098":{"":"”"},"1099":{"":"y"},"1110":{"":"i"},"1100":{"":"’"},"1101":{"":"ė"},"1102":{"":"yu"},"1103":{"":"ya"}};
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }