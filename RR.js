const Voz = document.querySelector ('.Vozrast1');
const Tariv = document.querySelector('#total');
const SS = document.querySelector('.StahovaSumma1');
const kompani = document.querySelector('.BankCred');
const Pol = document.querySelector('.Pol');
const Stav = document.querySelector('.Stavka1');
const Obnv = document.querySelectorAll('input');
const ObnvS = document.querySelectorAll('select');
const IM = document.querySelector('.TipIM');
const TarivI = document.querySelector('#totalI');
const TarivT = document.querySelector('#totalT');
var VPR = ""; 
var IPR = "";
var TPR = "";
/* Тарифы жизни S = сб V = Втб R = РСХБ*/
const SLМ18 = 0.00193;	const SLG18 = 0.00119;	const VLМ18 = 0.00259;	const VLG18 = 0.00173;	const RLМ18 = 0.0024;	const RLG18 = 0.0016;
const SLМ19 = 0.00193;	const SLG19 = 0.00119;	const VLМ19 = 0.00259;	const VLG19 = 0.00173;	const RLМ19 = 0.0024;	const RLG19 = 0.0016;
const SLМ20 = 0.00193;	const SLG20 = 0.00119;	const VLМ20 = 0.00259;	const VLG20 = 0.00173;	const RLМ20 = 0.0024;	const RLG20 = 0.0016;
const SLМ21 = 0.00209;	const SLG21 = 0.00128;	const VLМ21 = 0.00281;	const VLG21 = 0.00194;	const RLМ21 = 0.0026;	const RLG21 = 0.00181;
const SLМ22 = 0.00209;	const SLG22 = 0.00131;	const VLМ22 = 0.00281;	const VLG22 = 0.00194;	const RLМ22 = 0.0026;	const RLG22 = 0.00181;
const SLМ23 = 0.00209;	const SLG23 = 0.00136;	const VLМ23 = 0.00281;	const VLG23 = 0.00194;	const RLМ23 = 0.0026;	const RLG23 = 0.00181;
const SLМ24 = 0.00209;	const SLG24 = 0.00139;	const VLМ24 = 0.00281;	const VLG24 = 0.00194;	const RLМ24 = 0.0026;	const RLG24 = 0.00181;
const SLМ25 = 0.00209;	const SLG25 = 0.00145;	const VLМ25 = 0.00281;	const VLG25 = 0.00194;	const RLМ25 = 0.0026;	const RLG25 = 0.00181;
const SLМ26 = 0.00209;	const SLG26 = 0.00148;	const VLМ26 = 0.00281;	const VLG26 = 0.00194;	const RLМ26 = 0.0026;	const RLG26 = 0.00181;
const SLМ27 = 0.00209;	const SLG27 = 0.00153;	const VLМ27 = 0.00281;	const VLG27 = 0.00194;	const RLМ27 = 0.0026;	const RLG27 = 0.00181;
const SLМ28 = 0.00209;	const SLG28 = 0.00162;	const VLМ28 = 0.00281;	const VLG28 = 0.00194;	const RLМ28 = 0.0026;	const RLG28 = 0.00181;
const SLМ29 = 0.00209;	const SLG29 = 0.0017;	const VLМ29 = 0.00281;	const VLG29 = 0.00194;	const RLМ29 = 0.0026;	const RLG29 = 0.00181;
const SLМ30 = 0.00209;	const SLG30 = 0.0017;	const VLМ30 = 0.00281;	const VLG30 = 0.00216;	const RLМ30 = 0.0026;	const RLG30 = 0.00201;
const SLМ31 = 0.00242;	const SLG31 = 0.00189;	const VLМ31 = 0.00323;	const VLG31 = 0.00216;	const RLМ31 = 0.00301;	const RLG31 = 0.00201;
const SLМ32 = 0.00242;	const SLG32 = 0.00189;	const VLМ32 = 0.00323;	const VLG32 = 0.00216;	const RLМ32 = 0.00301;	const RLG32 = 0.00201;
const SLМ33 = 0.00242;	const SLG33 = 0.00189;	const VLМ33 = 0.00323;	const VLG33 = 0.00216;	const RLМ33 = 0.00301;	const RLG33 = 0.00201;
const SLМ34 = 0.00258;	const SLG34 = 0.00208;	const VLМ34 = 0.00345;	const VLG34 = 0.00238;	const RLМ34 = 0.00321;	const RLG34 = 0.0022;
const SLМ35 = 0.00258;	const SLG35 = 0.00227;	const VLМ35 = 0.00345;	const VLG35 = 0.00259;	const RLМ35 = 0.00321;	const RLG35 = 0.0024;
const SLМ36 = 0.00274;	const SLG36 = 0.00227;	const VLМ36 = 0.00366;	const VLG36 = 0.00259;	const RLМ36 = 0.00341;	const RLG36 = 0.0024;
const SLМ37 = 0.0029;	const SLG37 = 0.00246;	const VLМ37 = 0.00388;	const VLG37 = 0.00281;	const RLМ37 = 0.0036;	const RLG37 = 0.0026;
const SLМ38 = 0.00306;	const SLG38 = 0.00246;	const VLМ38 = 0.0041;	const VLG38 = 0.00281;	const RLМ38 = 0.0038;	const RLG38 = 0.0026;
const SLМ39 = 0.00322;	const SLG39 = 0.00246;	const VLМ39 = 0.00431;	const VLG39 = 0.00281;	const RLМ39 = 0.00401;	const RLG39 = 0.0026;
const SLМ40 = 0.00338;	const SLG40 = 0.00265;	const VLМ40 = 0.00453;	const VLG40 = 0.00303;	const RLМ40 = 0.00421;	const RLG40 = 0.00281;
const SLМ41 = 0.0037;	const SLG41 = 0.00302;	const VLМ41 = 0.00474;	const VLG41 = 0.00323;	const RLМ41 = 0.00461;	const RLG41 = 0.00321;
const SLМ42 = 0.00386;	const SLG42 = 0.00302;	const VLМ42 = 0.00496;	const VLG42 = 0.00323;	const RLМ42 = 0.0048;	const RLG42 = 0.00321;
const SLМ43 = 0.00419;	const SLG43 = 0.0034;	const VLМ43 = 0.00539;	const VLG43 = 0.00366;	const RLМ43 = 0.00521;	const RLG43 = 0.0036;
const SLМ44 = 0.00451;	const SLG44 = 0.00359;	const VLМ44 = 0.00582;	const VLG44 = 0.00388;	const RLМ44 = 0.00561;	const RLG44 = 0.0038;
const SLМ45 = 0.00467;	const SLG45 = 0.00397;	const VLМ45 = 0.00604;	const VLG45 = 0.00431;	const RLМ45 = 0.00581;	const RLG45 = 0.00421;
const SLМ46 = 0.00515;	const SLG46 = 0.00416;	const VLМ46 = 0.00647;	const VLG46 = 0.00431;	const RLМ46 = 0.00641;	const RLG46 = 0.00441;
const SLМ47 = 0.00547;	const SLG47 = 0.00454;	const VLМ47 = 0.00691;	const VLG47 = 0.00474;	const RLМ47 = 0.00681;	const RLG47 = 0.0048;
const SLМ48 = 0.00596;	const SLG48 = 0.0051;	const VLМ48 = 0.00755;	const VLG48 = 0.00539;	const RLМ48 = 0.00742;	const RLG48 = 0.00541;
const SLМ49 = 0.0066;	const SLG49 = 0.00548;	const VLМ49 = 0.0082;	const VLG49 = 0.00561;	const RLМ49 = 0.00821;	const RLG49 = 0.00581;
const SLМ50 = 0.00741;	const SLG50 = 0.00605;	const VLМ50 = 0.00927;	const VLG50 = 0.00626;	const RLМ50 = 0.00921;	const RLG50 = 0.00641;
const SLМ51 = 0.00821;	const SLG51 = 0.00643;	const VLМ51 = 0.01014;	const VLG51 = 0.00647;	const RLМ51 = 0.01022;	const RLG51 = 0.00681;
const SLМ52 = 0.00934;	const SLG52 = 0.00718;	const VLМ52 = 0.01143;	const VLG52 = 0.00712;	const RLМ52 = 0.01162;	const RLG52 = 0.00761;
const SLМ53 = 0.01079;	const SLG53 = 0.00869;	const VLМ53 = 0.01316;	const VLG53 = 0.00862;	const RLМ53 = 0.01342;	const RLG53 = 0.00921;
const SLМ54 = 0.01224;	const SLG54 = 0.00983;	const VLМ54 = 0.01488;	const VLG54 = 0.0097;	const RLМ54 = 0.01523;	const RLG54 = 0.01041;
const SLМ55 = 0.01369;	const SLG55 = 0.01096;	const VLМ55 = 0.01661;	const VLG55 = 0.01079;	const RLМ55 = 0.01703;	const RLG55 = 0.01162;
const SLМ56 = 0.0153;	const SLG56 = 0.01229;	const VLМ56 = 0.01834;	const VLG56 = 0.01187;	const RLМ56 = 0.01903;	const RLG56 = 0.01303;
const SLМ57 = 0.01707;	const SLG57 = 0.0138;	const VLМ57 = 0.02027;	const VLG57 = 0.01316;	const RLМ57 = 0.02124;	const RLG57 = 0.01462;
const SLМ58 = 0.01932;	const SLG58 = 0.0155;	const VLМ58 = 0.02265;	const VLG58 = 0.01445;	const RLМ58 = 0.02405;	const RLG58 = 0.01643;
const SLМ59 = 0.0219;	const SLG59 = 0.01758;	const VLМ59 = 0.02523;	const VLG59 = 0.01596;	const RLМ59 = 0.02724;	const RLG59 = 0.01863;
const SLМ60 = 0.02496;	const SLG60 = 0.0206;	const VLМ60 = 0.02804;	const VLG60 = 0.01812;	const RLМ60 = 0.03105;	const RLG60 = 0.02184;
/* тарифы жизни конец*/
/* тарифы Имущества*/
const IMTSK = 0.001; const IMTSD = 0.0015; const IMTSA = 0.001;
const IMTVK = 0.0011; const IMTVD = 0.00165; const IMTVA = 0.0011;
const IMTRK = 0.0011; const IMTRD = 0.00165; const IMTRA = 0.0011;
/* тарифы Имущества конец*/
/* тарифы Титул*/
const TITS = 0; 
const TITV = 0.00140;
const TITR = 0;
/* тарифы Титул конец*/




/*Расчет вывода Жизнь*/
for (const Obnv1 of Obnv)
{Obnv1.addEventListener('input', function()
{   TIT ();
    Immushestvo();
    calculateTIT ();
    if (kompani.value == 1) SL ();
    if (kompani.value == 2) VL ();
    if (kompani.value == 3) RL ();
    calculate ();
    function SL () {
        if (Pol.value == 1) SLM ();
        if (Pol.value == 2) SLG ();
    }
    function VL () {
        if (Pol.value == 1) VLM ();
        if (Pol.value == 2) VLG ();
    }
    function RL () {
        if (Pol.value == 1) RLM ();
        if (Pol.value == 2) RLG ();
    }
    })
}

for (const Obnv2 of ObnvS)
{Obnv2.addEventListener('click', function()
{
    TIT ();
    Immushestvo();
    calculateTIT ();
    if (kompani.value == 1) SL ();
    if (kompani.value == 2) VL ();
    if (kompani.value == 3) RL ();
    calculate ();
    function SL () {
        if (Pol.value == 1) SLM ();
        if (Pol.value == 2) SLG ();
    }
    function VL () {
        if (Pol.value == 1) VLM ();
        if (Pol.value == 2) VLG ();
    }
    function RL () {
        if (Pol.value == 1) RLM ();
        if (Pol.value == 2) RLG ();
    }
    })
}
/*Расчет вывода Жизнь конец*/
/*Расчет вывода Имущества*/
function Immushestvo()
{
    if (kompani.value == 1) IMTS ();
    if (kompani.value == 2) IMTV ();
    if (kompani.value == 3) IMTR ();
    calculateIM ();
    function IMTS () {
        if (IM.value == 1) IPR = IMTSK;
        if (IM.value == 2) IPR = IMTSD;
        if (IM.value == 3) IPR = IMTSA;
    }
    
    function IMTV () {
        if (IM.value == 1) IPR = IMTVK;
        if (IM.value == 2) IPR = IMTVD;
        if (IM.value == 3) IPR = IMTVA;
    }
    
    function IMTR () {
        if (IM.value == 1) IPR = IMTRK;
        if (IM.value == 2) IPR = IMTRD;
        if (IM.value == 3) IPR = IMTRA;
    }
}

/*Расчет вывода Имущества Конец */

function calculate () {
    if (kompani.value == 1) var TarivV = VPR * SS.value;
    if (kompani.value == 2) var TarivV = VPR * SS.value * 1.1;
    if (kompani.value == 3) var TarivV = VPR * SS.value * (1 + (Stav.value / 100));
    const Perevod = new Intl.NumberFormat('ru', { style: 'currency', currency: 'RUB', maximumFractionDigits: 2 });
    Tariv.innerText = Perevod.format(TarivV);
}

function calculateIM () {
    if (kompani.value == 1) var TarivVI = IPR * SS.value;
    if (kompani.value == 2) var TarivVI = IPR * SS.value * 1.1;
    if (kompani.value == 3) var TarivVI = IPR * SS.value * (1 + (Stav.value / 100));
    const Perevod = new Intl.NumberFormat('ru', { style: 'currency', currency: 'RUB', maximumFractionDigits: 2 });
    TarivI.innerText = Perevod.format(TarivVI);
}
function calculateTIT () {
    if (kompani.value == 1) var TarivTT = TPR * SS.value;
    if (kompani.value == 2) var TarivTT = TPR * SS.value * 1.1;
    if (kompani.value == 3) var TarivTT = TPR * SS.value * (1 + (Stav.value / 100));
    const Perevod = new Intl.NumberFormat('ru', { style: 'currency', currency: 'RUB', maximumFractionDigits: 2 });
    TarivT.innerText = Perevod.format(TarivTT);
}

   
/*функия подбора тарифа по возрасту*/
function SLM () {
    if (Voz.value == 18) VPR = SLМ18;
    if (Voz.value == 19) VPR = SLМ19;
    if (Voz.value == 20) VPR = SLМ20;
    if (Voz.value == 21) VPR = SLМ21;
    if (Voz.value == 22) VPR = SLМ22;
    if (Voz.value == 23) VPR = SLМ23;
    if (Voz.value == 24) VPR = SLМ24;
    if (Voz.value == 25) VPR = SLМ25;
    if (Voz.value == 26) VPR = SLМ26;
    if (Voz.value == 27) VPR = SLМ27;
    if (Voz.value == 28) VPR = SLМ28;
    if (Voz.value == 29) VPR = SLМ29;
    if (Voz.value == 30) VPR = SLМ30;
    if (Voz.value == 31) VPR = SLМ31;
    if (Voz.value == 32) VPR = SLМ32;
    if (Voz.value == 33) VPR = SLМ33;
    if (Voz.value == 34) VPR = SLМ34;
    if (Voz.value == 35) VPR = SLМ35;
    if (Voz.value == 36) VPR = SLМ36;
    if (Voz.value == 37) VPR = SLМ37;
    if (Voz.value == 38) VPR = SLМ38;
    if (Voz.value == 39) VPR = SLМ39;
    if (Voz.value == 40) VPR = SLМ40;
    if (Voz.value == 41) VPR = SLМ41;
    if (Voz.value == 42) VPR = SLМ42;
    if (Voz.value == 43) VPR = SLМ43;
    if (Voz.value == 44) VPR = SLМ44;
    if (Voz.value == 45) VPR = SLМ45;
    if (Voz.value == 46) VPR = SLМ46;
    if (Voz.value == 47) VPR = SLМ47;
    if (Voz.value == 48) VPR = SLМ48;
    if (Voz.value == 49) VPR = SLМ49;
    if (Voz.value == 50) VPR = SLМ50;
    if (Voz.value == 51) VPR = SLМ51;
    if (Voz.value == 52) VPR = SLМ52;
    if (Voz.value == 53) VPR = SLМ53;
    if (Voz.value == 54) VPR = SLМ54;
    if (Voz.value == 55) VPR = SLМ55;
    if (Voz.value == 56) VPR = SLМ56;
    if (Voz.value == 57) VPR = SLМ57;
    if (Voz.value == 58) VPR = SLМ58;
    if (Voz.value == 59) VPR = SLМ59;
    if (Voz.value == 60) VPR = SLМ60;
}
function SLG () {
    if (Voz.value == 18) VPR = SLG18;
    if (Voz.value == 19) VPR = SLG19;
    if (Voz.value == 20) VPR = SLG20;
    if (Voz.value == 21) VPR = SLG21;
    if (Voz.value == 22) VPR = SLG22;
    if (Voz.value == 23) VPR = SLG23;
    if (Voz.value == 24) VPR = SLG24;
    if (Voz.value == 25) VPR = SLG25;
    if (Voz.value == 26) VPR = SLG26;
    if (Voz.value == 27) VPR = SLG27;
    if (Voz.value == 28) VPR = SLG28;
    if (Voz.value == 29) VPR = SLG29;
    if (Voz.value == 30) VPR = SLG30;
    if (Voz.value == 31) VPR = SLG31;
    if (Voz.value == 32) VPR = SLG32;
    if (Voz.value == 33) VPR = SLG33;
    if (Voz.value == 34) VPR = SLG34;
    if (Voz.value == 35) VPR = SLG35;
    if (Voz.value == 36) VPR = SLG36;
    if (Voz.value == 37) VPR = SLG37;
    if (Voz.value == 38) VPR = SLG38;
    if (Voz.value == 39) VPR = SLG39;
    if (Voz.value == 40) VPR = SLG40;
    if (Voz.value == 41) VPR = SLG41;
    if (Voz.value == 42) VPR = SLG42;
    if (Voz.value == 43) VPR = SLG43;
    if (Voz.value == 44) VPR = SLG44;
    if (Voz.value == 45) VPR = SLG45;
    if (Voz.value == 46) VPR = SLG46;
    if (Voz.value == 47) VPR = SLG47;
    if (Voz.value == 48) VPR = SLG48;
    if (Voz.value == 49) VPR = SLG49;
    if (Voz.value == 50) VPR = SLG50;
    if (Voz.value == 51) VPR = SLG51;
    if (Voz.value == 52) VPR = SLG52;
    if (Voz.value == 53) VPR = SLG53;
    if (Voz.value == 54) VPR = SLG54;
    if (Voz.value == 55) VPR = SLG55;
    if (Voz.value == 56) VPR = SLG56;
    if (Voz.value == 57) VPR = SLG57;
    if (Voz.value == 58) VPR = SLG58;
    if (Voz.value == 59) VPR = SLG59;
    if (Voz.value == 60) VPR = SLG60;  
    
}
function VLM () {
    if (Voz.value == 18) VPR = VLМ18;
    if (Voz.value == 19) VPR = VLМ19;
    if (Voz.value == 20) VPR = VLМ20;
    if (Voz.value == 21) VPR = VLМ21;
    if (Voz.value == 22) VPR = VLМ22;
    if (Voz.value == 23) VPR = VLМ23;
    if (Voz.value == 24) VPR = VLМ24;
    if (Voz.value == 25) VPR = VLМ25;
    if (Voz.value == 26) VPR = VLМ26;
    if (Voz.value == 27) VPR = VLМ27;
    if (Voz.value == 28) VPR = VLМ28;
    if (Voz.value == 29) VPR = VLМ29;
    if (Voz.value == 30) VPR = VLМ30;
    if (Voz.value == 31) VPR = VLМ31;
    if (Voz.value == 32) VPR = VLМ32;
    if (Voz.value == 33) VPR = VLМ33;
    if (Voz.value == 34) VPR = VLМ34;
    if (Voz.value == 35) VPR = VLМ35;
    if (Voz.value == 36) VPR = VLМ36;
    if (Voz.value == 37) VPR = VLМ37;
    if (Voz.value == 38) VPR = VLМ38;
    if (Voz.value == 39) VPR = VLМ39;
    if (Voz.value == 40) VPR = VLМ40;
    if (Voz.value == 41) VPR = VLМ41;
    if (Voz.value == 42) VPR = VLМ42;
    if (Voz.value == 43) VPR = VLМ43;
    if (Voz.value == 44) VPR = VLМ44;
    if (Voz.value == 45) VPR = VLМ45;
    if (Voz.value == 46) VPR = VLМ46;
    if (Voz.value == 47) VPR = VLМ47;
    if (Voz.value == 48) VPR = VLМ48;
    if (Voz.value == 49) VPR = VLМ49;
    if (Voz.value == 50) VPR = VLМ50;
    if (Voz.value == 51) VPR = VLМ51;
    if (Voz.value == 52) VPR = VLМ52;
    if (Voz.value == 53) VPR = VLМ53;
    if (Voz.value == 54) VPR = VLМ54;
    if (Voz.value == 55) VPR = VLМ55;
    if (Voz.value == 56) VPR = VLМ56;
    if (Voz.value == 57) VPR = VLМ57;
    if (Voz.value == 58) VPR = VLМ58;
    if (Voz.value == 59) VPR = VLМ59;
    if (Voz.value == 60) VPR = VLМ60;   
}
function VLG () {
    if (Voz.value == 18) VPR = VLG18;
    if (Voz.value == 19) VPR = VLG19;
    if (Voz.value == 20) VPR = VLG20;
    if (Voz.value == 21) VPR = VLG21;
    if (Voz.value == 22) VPR = VLG22;
    if (Voz.value == 23) VPR = VLG23;
    if (Voz.value == 24) VPR = VLG24;
    if (Voz.value == 25) VPR = VLG25;
    if (Voz.value == 26) VPR = VLG26;
    if (Voz.value == 27) VPR = VLG27;
    if (Voz.value == 28) VPR = VLG28;
    if (Voz.value == 29) VPR = VLG29;
    if (Voz.value == 30) VPR = VLG30;
    if (Voz.value == 31) VPR = VLG31;
    if (Voz.value == 32) VPR = VLG32;
    if (Voz.value == 33) VPR = VLG33;
    if (Voz.value == 34) VPR = VLG34;
    if (Voz.value == 35) VPR = VLG35;
    if (Voz.value == 36) VPR = VLG36;
    if (Voz.value == 37) VPR = VLG37;
    if (Voz.value == 38) VPR = VLG38;
    if (Voz.value == 39) VPR = VLG39;
    if (Voz.value == 40) VPR = VLG40;
    if (Voz.value == 41) VPR = VLG41;
    if (Voz.value == 42) VPR = VLG42;
    if (Voz.value == 43) VPR = VLG43;
    if (Voz.value == 44) VPR = VLG44;
    if (Voz.value == 45) VPR = VLG45;
    if (Voz.value == 46) VPR = VLG46;
    if (Voz.value == 47) VPR = VLG47;
    if (Voz.value == 48) VPR = VLG48;
    if (Voz.value == 49) VPR = VLG49;
    if (Voz.value == 50) VPR = VLG50;
    if (Voz.value == 51) VPR = VLG51;
    if (Voz.value == 52) VPR = VLG52;
    if (Voz.value == 53) VPR = VLG53;
    if (Voz.value == 54) VPR = VLG54;
    if (Voz.value == 55) VPR = VLG55;
    if (Voz.value == 56) VPR = VLG56;
    if (Voz.value == 57) VPR = VLG57;
    if (Voz.value == 58) VPR = VLG58;
    if (Voz.value == 59) VPR = VLG59;
    if (Voz.value == 60) VPR = VLG60;
}
function RLM () {
    if (Voz.value == 18) VPR = RLМ18;
    if (Voz.value == 19) VPR = RLМ19;
    if (Voz.value == 20) VPR = RLМ20;
    if (Voz.value == 21) VPR = RLМ21;
    if (Voz.value == 22) VPR = RLМ22;
    if (Voz.value == 23) VPR = RLМ23;
    if (Voz.value == 24) VPR = RLМ24;
    if (Voz.value == 25) VPR = RLМ25;
    if (Voz.value == 26) VPR = RLМ26;
    if (Voz.value == 27) VPR = RLМ27;
    if (Voz.value == 28) VPR = RLМ28;
    if (Voz.value == 29) VPR = RLМ29;
    if (Voz.value == 30) VPR = RLМ30;
    if (Voz.value == 31) VPR = RLМ31;
    if (Voz.value == 32) VPR = RLМ32;
    if (Voz.value == 33) VPR = RLМ33;
    if (Voz.value == 34) VPR = RLМ34;
    if (Voz.value == 35) VPR = RLМ35;
    if (Voz.value == 36) VPR = RLМ36;
    if (Voz.value == 37) VPR = RLМ37;
    if (Voz.value == 38) VPR = RLМ38;
    if (Voz.value == 39) VPR = RLМ39;
    if (Voz.value == 40) VPR = RLМ40;
    if (Voz.value == 41) VPR = RLМ41;
    if (Voz.value == 42) VPR = RLМ42;
    if (Voz.value == 43) VPR = RLМ43;
    if (Voz.value == 44) VPR = RLМ44;
    if (Voz.value == 45) VPR = RLМ45;
    if (Voz.value == 46) VPR = RLМ46;
    if (Voz.value == 47) VPR = RLМ47;
    if (Voz.value == 48) VPR = RLМ48;
    if (Voz.value == 49) VPR = RLМ49;
    if (Voz.value == 50) VPR = RLМ50;
    if (Voz.value == 51) VPR = RLМ51;
    if (Voz.value == 52) VPR = RLМ52;
    if (Voz.value == 53) VPR = RLМ53;
    if (Voz.value == 54) VPR = RLМ54;
    if (Voz.value == 55) VPR = RLМ55;
    if (Voz.value == 56) VPR = RLМ56;
    if (Voz.value == 57) VPR = RLМ57;
    if (Voz.value == 58) VPR = RLМ58;
    if (Voz.value == 59) VPR = RLМ59;
    if (Voz.value == 60) VPR = RLМ60;
}
function RLG () {
    if (Voz.value == 18) VPR = RLG18;
    if (Voz.value == 19) VPR = RLG19;
    if (Voz.value == 20) VPR = RLG20;
    if (Voz.value == 21) VPR = RLG21;
    if (Voz.value == 22) VPR = RLG22;
    if (Voz.value == 23) VPR = RLG23;
    if (Voz.value == 24) VPR = RLG24;
    if (Voz.value == 25) VPR = RLG25;
    if (Voz.value == 26) VPR = RLG26;
    if (Voz.value == 27) VPR = RLG27;
    if (Voz.value == 28) VPR = RLG28;
    if (Voz.value == 29) VPR = RLG29;
    if (Voz.value == 30) VPR = RLG30;
    if (Voz.value == 31) VPR = RLG31;
    if (Voz.value == 32) VPR = RLG32;
    if (Voz.value == 33) VPR = RLG33;
    if (Voz.value == 34) VPR = RLG34;
    if (Voz.value == 35) VPR = RLG35;
    if (Voz.value == 36) VPR = RLG36;
    if (Voz.value == 37) VPR = RLG37;
    if (Voz.value == 38) VPR = RLG38;
    if (Voz.value == 39) VPR = RLG39;
    if (Voz.value == 40) VPR = RLG40;
    if (Voz.value == 41) VPR = RLG41;
    if (Voz.value == 42) VPR = RLG42;
    if (Voz.value == 43) VPR = RLG43;
    if (Voz.value == 44) VPR = RLG44;
    if (Voz.value == 45) VPR = RLG45;
    if (Voz.value == 46) VPR = RLG46;
    if (Voz.value == 47) VPR = RLG47;
    if (Voz.value == 48) VPR = RLG48;
    if (Voz.value == 49) VPR = RLG49;
    if (Voz.value == 50) VPR = RLG50;
    if (Voz.value == 51) VPR = RLG51;
    if (Voz.value == 52) VPR = RLG52;
    if (Voz.value == 53) VPR = RLG53;
    if (Voz.value == 54) VPR = RLG54;
    if (Voz.value == 55) VPR = RLG55;
    if (Voz.value == 56) VPR = RLG56;
    if (Voz.value == 57) VPR = RLG57;
    if (Voz.value == 58) VPR = RLG58;
    if (Voz.value == 59) VPR = RLG59;
    if (Voz.value == 60) VPR = RLG60;
}

/*функия подбора тарифа по имущесту*/

function IMTS () {
    if (IM.value == 1) IPR = IMTSK;
    if (IM.value == 2) IPR = IMTSD;
    if (IM.value == 3) IPR = IMTSA;
}

function IMTV () {
    if (IM.value == 1) IPR = IMTVK;
    if (IM.value == 2) IPR = IMTVD;
    if (IM.value == 3) IPR = IMTVA;
}

function IMTR () {
    if (IM.value == 1) IPR = IMTRK;
    if (IM.value == 2) IPR = IMTRD;
    if (IM.value == 3) IPR = IMTRA;
}

/*функия подбора тарифа по Титулу*/
function TIT () {
    if (kompani.value == 1) TPR = TITS ;
    if (kompani.value == 2) TPR = TITV ;
    if (kompani.value == 3) TPR = TITR ;
}












