var map = function(Interscript) {Interscript.define_map("odni-ara-Arab-Latn-2015", function(Interscript, map) {
map.dependencies = [];
map.stages.main = function(s) {
s = Interscript.parallel_regexp_gsub(s, map.cache.PRE_2899922454136323132);
s = Interscript.gsub(s, "(?<="+Interscript.aliases.boundary+")(?<!"+Interscript.aliases.boundary+"[‘’'])[a-￿]", function(a){return a.toUpperCase();});
s = Interscript.gsub(s, "\ Al\ ", " al ");
return s;
};
map.cache.PRE_2899922454136323132 = ["(?<_0>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_1>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_2>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_3>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_4>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_5>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_6>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_7>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_8>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_9>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_10>"+Interscript.aliases.non_word_boundary+"ُ?اللَّه)|(?<_11>ِي(?=(?:َ|u064f)))|(?<_12>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_13>"+Interscript.aliases.boundary+"اللَّه)|(?<_14>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ])ة)|(?<_15>ِيَّ)|(?<_16>"+Interscript.aliases.non_word_boundary+"ُ?ال)|(?<_17>َ(?=a[ht]))|(?<_18>َوْ)|(?<_19>َيْ)|(?<_20>"+Interscript.aliases.boundary+"ال)|(?<_21>َ(?=ة))|(?<_22>ِي)|(?<_23>ُو)|(?<_24>َا)|(?<_25>َى)|(?<_26>ة"+Interscript.aliases.line_end+")|(?<_27>بّ)|(?<_28>تّ)|(?<_29>ثّ)|(?<_30>جّ)|(?<_31>حّ)|(?<_32>خّ)|(?<_33>دّ)|(?<_34>ذّ)|(?<_35>رّ)|(?<_36>زّ)|(?<_37>سّ)|(?<_38>شّ)|(?<_39>صّ)|(?<_40>ضّ)|(?<_41>طّ)|(?<_42>ظّ)|(?<_43>غّ)|(?<_44>فّ)|(?<_45>قّ)|(?<_46>كّ)|(?<_47>لّ)|(?<_48>مّ)|(?<_49>نّ)|(?<_50>هّ)|(?<_51>وّ)|(?<_52>يّ)|(?<_53>"+Interscript.aliases.boundary+"ا)|(?<_54>َ)|(?<_55>ِ)|(?<_56>ُ)|(?<_57>ْ)|(?<_58>آ)|(?<_59>ة)|(?<_60>ئ)|(?<_61>ء)|(?<_62>أ)|(?<_63>ا)|(?<_64>ب)|(?<_65>ت)|(?<_66>ث)|(?<_67>ج)|(?<_68>ح)|(?<_69>خ)|(?<_70>د)|(?<_71>ذ)|(?<_72>ر)|(?<_73>ز)|(?<_74>س)|(?<_75>ش)|(?<_76>ص)|(?<_77>ض)|(?<_78>ط)|(?<_79>ظ)|(?<_80>ع)|(?<_81>غ)|(?<_82>ف)|(?<_83>ق)|(?<_84>ك)|(?<_85>ل)|(?<_86>م)|(?<_87>ن)|(?<_88>ه)|(?<_89>و)|(?<_90>ي)", ["ah","ah","ah","ah","ah","ah","ah","ah","ah","ah","allah","iy","ah","Allah","ah","iy"," al ","","aw","ay","al ","","i","u","a","á","ah","bb","tt","th","jj","hh","kh","dd","dh","rr","zz","ss","sh","ṣṣ","ḍḍ","ṭṭ","ẓẓ","gh","ff","qq","kk","ll","mm","nn","hh","ww","yy","","a","i","u","","a","at","’","’","","a","b","t","th","j","h","kh","d","dh","r","z","s","sh","ṣ","ḍ","ṭ","ẓ","’","gh","f","q","k","l","m","n","h","w","y"]];
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }