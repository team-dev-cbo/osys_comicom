//--------------------------------------------------------------------
// function ConvNum()
//
// Resume : fonction de conversion d'une date en entier
//
// Parametres
// --> Entrée : - tabDeDate --> Date à convertir
// --> Sortie : - Date convertie
//--------------------------------------------------------------------
function ConvNum(tabDeDate) {
    for (i=0; i<tabDeDate.length; i++)
        tabDeDate[i] = (tabDeDate[i].charAt(0)=='0')?tabDeDate[i].charAt(1):tabDeDate[i];
    return tabDeDate;
}

//--------------------------------------------------------------------
// function compare_dates()
//
// Resume : fonction de comparaison de deux dates
//          la date de fin doit etre superieure ou egale a
//          la date de début
//
// Parametres
// --> Entrée : - datedebut --> Date de debut a teste
//              - datefin   --> Dtae de Fin a tester
// --> Sortie : result --> resultat du test de comparaison (tru : OK / false = KO)
//--------------------------------------------------------------------
function compare_dates(datedebut, datefin){
    var result = true;

    var tabDatedebut = datedebut.split('/');
    var tabDatefin = datefin.split('/');

    datedebut = ConvNum(tabDatedebut);
    datefin = ConvNum(tabDatefin);

    var datTest_Datedebut = new Date(parseInt(tabDatedebut[2]), parseInt(tabDatedebut[1])-1, parseInt(tabDatedebut[0]));
    var datTest_Datefin   = new Date(parseInt(tabDatefin[2]), parseInt(tabDatefin[1])-1, parseInt(tabDatefin[0]));


    if(datTest_Datefin-datTest_Datedebut<0){
        result = false;
    }

    
	if(result)
		alert("Comparaison des dates OK !!!");
	else
		alert("La date de debut est superieure a la date de fin !!!");
	
	return result;	
}

//--------------------------------------------------------------------
// function verif_date()
//
// Resume : fonction de verification du format et de la cohérence
//          de la date saisie dans le formulaire,
//          Format attendu : DD/MM/YYYY
//
// Parametres
// --> Entrée : input --> Valeur du champ Date
// --> Sortie : booleen --> tests OK
//--------------------------------------------------------------------
function verif_date(input)
{
    var regex = new RegExp("[/-]");
    var date = input.split(regex);
    var nbJours = new Array('',31,28,31,30,31,30,31,31,30,31,30,31);
    var result = true;

    if (date['2'] == null)
        result=false;
    //alert(date['2'].length)
    if(result){
        if (date['2'].length != 4)
            result=false;
    }

    if(result){
        if ( date['2']%4 == 0 && date['2']%100 > 0 || date['2']%400 == 0 )
            nbJours['2'] = 29;
    }

    if(result){
        if( isNaN(date['2']) )
            result=false;
    }

    if(result){
        if ( isNaN(date['1']) || date['1'] > 12 || date['1'] < 1 )
            result=false;
    }

    if(result){
        if ( isNaN(date['0']) || date['0'] > nbJours[Math.round(date['1'])] || date['0'] < 1 )
            result=false;
    }
	
	if(result)
		alert("Format de date OK !!!");
	else
		alert("Format de Date erroné !!!");

    return result;
}


function compare_dates_heure(datedebut, datefin){
    var result = true;

    var gdh;
    var regexdate = new RegExp("[/]");
    var regexheure = new RegExp("[:]");

    gdh = datedebut.split(" ");
    var tabDatedebut  = gdh[0].split(regexdate);
    var tabheuredebut = gdh[1].split(regexheure);

    tabDatedebut = ConvNum(tabDatedebut);
    tabheuredebut = ConvNum(tabheuredebut);

    var datTest_Datedebut = new Date(parseInt(tabDatedebut[2]), parseInt(tabDatedebut[1])-1, parseInt(tabDatedebut[0]), parseInt(tabheuredebut[0]), parseInt(tabheuredebut[1]),parseInt("59"), parseInt(0));//parseInt(tabheuredebut[2]), parseInt(0));


    gdh = datefin.split(" ");
    var tabDateFin  = gdh[0].split(regexdate);
    var tabheureFin = gdh[1].split(regexheure);


    tabDateFin = ConvNum(tabDateFin);
    tabheureFin = ConvNum(tabheureFin);

    var datTest_DateFin = new Date(parseInt(tabDateFin[2]), parseInt(tabDateFin[1])-1, parseInt(tabDateFin[0]), parseInt(tabheureFin[0]), parseInt(tabheureFin[1]),parseInt("59"),parseInt(0));//parseInt(tabheuredebut[2]), parseInt(0));


    //alert(datTest_DateFin+" - "+datTest_Datedebut);
    if(datTest_DateFin-datTest_Datedebut<0){
        result = false;
    }	
	
	if(result)
		alert("Comparaison des dates OK !!!");
	else
		alert("La date de debut est superieure a la date de fin !!!");
	
	
    return result;
}



//--------------------------------------------------------------------
// Fonction  : verif_date_heure
// Rôle      : verification
//--------------------------------------------------------------------
function verif_date_heure(input){

    var gdh = input.split(" ");
    var regexdate = new RegExp("[/]");
    var regexheure = new RegExp("[:]");

    var nbJours = new Array('',31,28,31,30,31,30,31,31,30,31,30,31);
    var result = true;

    var date = gdh[0].split(regexdate);

    if(result){
        if(gdh[1]==null){
            result=false;
        } else{
            var heure = gdh[1].split(regexheure);
        }
    }

    //alert(date['0']+"-"+date['1']+"-"+date['2']+"-"+heure['0']+"-"+heure['1']+"-"+heure['2']);

    //if(result){
    //    if (isNaN(heure['2']) || heure['2'] > 59 || heure['2'] < 0 )
    //        result=false;
    //}

    if(result){
        if (isNaN(heure['1']) || heure['1'] > 59 || heure['1'] < 0 )
            result=false;
    }

    if(result){
        if (isNaN(heure['0']) || heure['0'] > 23 || heure['0'] < 0 )
            result=false;
    }


    if(result){
        if (date['2'] == null)
            result=false;
    }

    if(result){
        if (date['2'].length != 4)
            result=false;
    }

    if(result){
        if ( date['2']%4 == 0 && date['2']%100 > 0 || date['2']%400 == 0 )
            nbJours['2'] = 29;
    }

    if(result){
        if( isNaN(date['2']) )
            result=false;
    }

    if(result){
        if ( isNaN(date['1']) || date['1'] > 12 || date['1'] < 1 )
            result=false;
    }

    if(result){
        if ( isNaN(date['0']) || date['0'] > nbJours[Math.round(date['1'])] || date['0'] < 1 )
            result=false;
    }

	
	if(result)
		alert("Format de date OK !!!");
	else
		alert("Format de Date erroné !!!");
}

