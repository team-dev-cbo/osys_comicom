/* 
 * Bibliothèque contenant l'ensemble des fonctions utilisées dans la gestion des pages du calendrier équipement
 */

//--------------------------------------------------------------------
// Fonction  : verif_date
// Rôle      : vérification du format de la date saisie
//--------------------------------------------------------------------
function verif_date(input)
{
    var dateOrigine = input.value;
    var regex = new RegExp("[/-]");
    var date = dateOrigine.split(regex);
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

    if(!result){
        input.value="";
        input.focus();
    }

    return result;
}

//--------------------------------------------------------------------
// Fonction  : ConvNum_Cale
// Rôle      : Conversion d'une date en un entier
//--------------------------------------------------------------------
function ConvNum_Cale(tabDeDate) {
    for (i=0; i<tabDeDate.length; i++)
        tabDeDate[i] = (tabDeDate[i].charAt(0)=='0')?tabDeDate[i].charAt(1):tabDeDate[i];
    return tabDeDate;

}

//--------------------------------------------------------------------
// Fonction  : compare_dates_cale
// Rôle      : Comparaison que deux dates chronologiquement se suivent
//--------------------------------------------------------------------
function compare_dates_cale(datedebut, datefin) {

    var result = true;

    var tabDatedebut = datedebut.split('/');
    var tabDatefin = datefin.split('/');

    datedebut = ConvNum_Cale(tabDatedebut);
    datefin = ConvNum_Cale(tabDatefin);

    var datTest_Datedebut = new Date(parseInt(tabDatedebut[2]), parseInt(tabDatedebut[1])-1, parseInt(tabDatedebut[0]));
    var datTest_Datefin   = new Date(parseInt(tabDatefin[2]), parseInt(tabDatefin[1])-1, parseInt(tabDatefin[0]));


    if(datTest_Datefin-datTest_Datedebut<0){
        result = false;
    }

    return result;

}





