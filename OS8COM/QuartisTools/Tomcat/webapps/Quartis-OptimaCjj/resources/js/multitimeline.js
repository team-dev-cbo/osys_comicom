// -- Initialise l'affichae des fenetres et les clics sur les boutons
//    pour l'ajout, la modificaction et la suppression des evenements Machine, Production ou personnel
// ------

var visibleRange = "";
function initShowDialog() {

	$('#dlg_MA').puidialog({
		showEffect : 'fade',
		hideEffect : 'fade',
		minimizable : true,
		maximizable : true,
		width : 600,
		modal : true
/*		buttons : [ {
			text : 'REINITIALISER',
			click : function() {
				$('#dlg').puidialog('hide');
			}
		}, {
			text : 'SUPPRIMER',
			class : 'right',
			click : function() {
				$('#dlg').puidialog('hide');
			}
		}, {
			text : 'VALIDER',
			class : 'right',
			click : function() {
				$('#dlg').puidialog('hide');
			}
		} ]
*/
	});

	$('#dlg_EP').puidialog({
		showEffect : 'fade',
		hideEffect : 'fade',
		minimizable : true,
		maximizable : true,
		width : 600,
		modal : true
	});

	$('#dlg_EPOP').puidialog({
		showEffect : 'fade',
		hideEffect : 'fade',
		minimizable : true,
		maximizable : true,
		width : 600,
		modal : true
	});

	$('#dlg_AEPOP').puidialog({
		showEffect : 'fade',
		hideEffect : 'fade',
		minimizable : true,
		maximizable : true,
		width : 600,
		modal : true
	});

	$('#dlg_OFA').puidialog({
		showEffect : 'fade',
		hideEffect : 'fade',
		minimizable : true,
		maximizable : true,
		width : 600,
		modal : true
	/*
	 * buttons : [ { text : 'REINITIALISER', click : function() {
	 * $('#dlg').puidialog('hide'); } }, { text : 'SUPPRIMER', class : 'right',
	 * click : function() { $('#dlg').puidialog('hide'); } }, { text :
	 * 'VALIDER', class : 'right', click : function() {
	 * $('#dlg').puidialog('hide'); } } ]
	 */
	});
	$('#dlg_OF').puidialog({
		showEffect : 'fade',
		hideEffect : 'fade',
		minimizable : true,
		maximizable : true,
		width : 600,
		modal : true
	/*
	 * buttons : [ { text : 'REINITIALISER', click : function() {
	 * $('#dlg').puidialog('hide'); } }, { text : 'SUPPRIMER', class : 'right',
	 * click : function() { $('#dlg').puidialog('hide'); } }, { text :
	 * 'VALIDER', class : 'right', click : function() {
	 * $('#dlg').puidialog('hide'); } } ]
	 */
	});
	$('#dlg_OP').puidialog({
		showEffect : 'fade',
		hideEffect : 'fade',
		minimizable : true,
		maximizable : true,
		width : 600,
		modal : true
	/*
	 * buttons : [ { text : 'REINITIALISER', click : function() {
	 * $('#dlg').puidialog('hide'); } }, { text : 'SUPPRIMER', class : 'right',
	 * click : function() { $('#dlg').puidialog('hide'); } }, { text :
	 * 'VALIDER', class : 'right', click : function() {
	 * $('#dlg').puidialog('hide'); } } ]
	 */
	});

	$('#tabView\\:add_maa').puibutton({
		click : function(event) {
			$('#dlg_MA').puidialog('show');
		}
	});
	$('#tabView\\:add_ep').puibutton({
		click : function(event) {
			$('#dlg_EP').puidialog('show');
		}
	});
	$('#tabView\\:add_epop').puibutton({
		click : function(event) {
			$('#dlg_AEPOP').puidialog('show');
		}
	});
	$('#tabView\\:add_depop').puibutton({
		click : function(event) {
			$('#dlg_EPOP').puidialog('show');
		}
	});
	$('#tabView\\:add_dep').puibutton({
		click : function(event) {
			$('#dlg_EP').puidialog('show');
		}
	});
	$('#tabView\\:addModOFQuit').puibutton({
		click : function(event) {
			$('#dlg_OF').puidialog('hide');
		}
	});
	$('#tabView\\:addModOPQuit').puibutton({
		click : function(event) {
			$('#dlg_OP').puidialog('hide');
		}
	});
	$('#addModEtatQuit').puibutton({
		click : function(event) {
			$('#dlg_MA').puidialog('hide');
		}
	});
	$('#tabView\\:add_ma').puibutton({
		click : function(event) {
			$('#dlg_MA').puidialog('show');
		}
	});
	$('#tabView\\:add_off').puibutton({
		click : function(event) {
			$('#dlg_OFA').puidialog('show');
		}
	});
	$('#tabView\\:add_of').puibutton({
		click : function(event) {
			$('#dlg_OF').puidialog('show');
		}
	});
	$('#tabView\\:add_opp').puibutton({
		click : function(event) {
			$('#dlg_OP').puidialog('show');
		}
	});
	$('#tabView\\:add_op').puibutton({
		click : function(event) {
			$('#dlg_OP').puidialog('show');
		}
	});
}

function closeDlgMa() {

	// console.log("Entrer une fois");
	PF('detailTimelineWdgtEtatPers').hide();
	// var elemMa = document.getElementById('dlg_MA');

	// -- Il peut y avoir 2 appels consecutifs et au deuxieme appel,
	// une erreur se produit dans la ligne $('#dlg_MA').puidialog('hide')
	// Pour eviter l'erreur, il ne faut pas l'appeler si la fenetre est cache
	// --
	// if (elemMa.style.display != 'none') {

	// -- Cache la fenetre dialog
	// $('#dlg_MA').puidialog('hide');

	// -- Cache le div pour qu'au deuxieme appel elem.style.display='hidden'
	// $('#dlg_MA').hide();
	// }
}

function closeDlgPop() {

	PF('detailTimelineOPWdgt').hide();
}

function closeDlgEP() {
	var elemEp = document.getElementById('dlg_EP');

	if (elemEp.style.display != 'none') {

		// -- Cache la fenetre dialog
		$('#dlg_EP').puidialog('hide');

		// -- Cache le div pour qu'au deuxieme appel elem.style.display='hidden'
		$('#dlg_EP').hide();
	}
}

function closeDlgEPOP() {
		
	var elemEp = document.getElementById('dlg_EPOP');

	if (elemEp.style.display != 'none') {

		// -- Cache la fenetre dialog
		$('#dlg_EPOP').puidialog('hide');

		// -- Cache le div pour qu'au deuxieme appel elem.style.display='hidden'
		$('#dlg_EPOP').hide();
	}
}

function closeDlgAEPOP() {
	var elemEp = document.getElementById('dlg_AEPOP');

	if (elemEp.style.display != 'none') {

		// -- Cache la fenetre dialog
		$('#dlg_AEPOP').puidialog('hide');

		// -- Cache le div pour qu'au deuxieme appel elem.style.display='hidden'
		$('#dlg_AEPOP').hide();
	}
}

function clickButton() {
	$('#tabView\\:formGantt\\:btnSearchGantt').click();
}

$(
		".timeline-event.timeline-event-range.ui-widget.ui-state-default.evtEtatMach.timeline-event-selected.ui-state-active")
		.mouseover(function() {
			alert("Handler for .click() called.");
		});

function closeDlgOf() {
	
	PF('detailTimelineOFWdgt').hide();

	//var elemOf = document.getElementById('dlg_OF');

	//if (elemOf.style.display != 'none') {
	//	$('#dlg_OF').puidialog('hide');
	//	// $('#dlg_OF').hide;
	//	elemOf.style.display = 'none';
	//}
}

function closeDlgOfA() {
	PF('detailTimelineOFWdgtA').hide();

//	console.log("closeDlgOfA - Entrer une fois");

//	var elemOfA = document.getElementById('dlg_OFA');
	//if (elemOfA.style.display != 'none') {
	//	$('#dlg_OFA').puidialog('hide');
	//	// $('#dlg_OFA').hide;
	//	elemOfA.style.display = 'none';
	//}
}

function closeDlgOp() {
	PF('detailTimelineOPWdgt').hide();
	
	//var elemOp = document.getElementById('dlg_OP');
	//if (elemOp.style.display != 'none') {
	//	$('#dlg_OP').puidialog('hide');
	//	// $('#dlg_OP').hide;
	//	elemOp.style.display = 'none';
	//}
}
function closeDlgOpA() {
	PF('detailTimelineOPWdgtA').hide();
	
	//var elemOp = document.getElementById('dlg_OP');
	//if (elemOp.style.display != 'none') {
	//	$('#dlg_OP').puidialog('hide');
	//	// $('#dlg_OP').hide;
	//	elemOp.style.display = 'none';
	//}
}

function closeDlgEtatPers() {
	PF('detailTimelineWdgtEtatPers').hide();
}

function closeDlgOfPers() {
	PF('detailTimelineOfPersWdgtT').hide();
}

function closeDlgAddOfPers() {
	PF('detailTimelineOfPersAddWdgt').hide();
}

// -- Fonction appele au demarrage de la page web
$(function() {
	// -- Initialisation des dialogs pour le Gantt
	initShowDialog();	
});

// -- Pour définir la plage égale pour les 3 gantts au chargement de la page
function onInitRangeGantt() {
	var range = PF('timelineFirstWdgt').getVisibleRange();
	PF('timelineSecondWdgt').setVisibleRange(range.start, range.end);
	PF('timelineThirdWdgt').setVisibleRange(range.start, range.end);
}

function onInitRangeGanttPers() {
	var range = PF('timelineFirstWdgt').getVisibleRange();
	PF('timelineSecondWdgt').setVisibleRange(range.start, range.end);
}

/* Met en background la couleur sur le gantt pour les états machines */
function loadBackgroundEvtEtatMach() {
	
	elem = document.getElementsByClassName('evtEtatMach');

	spans = $('.evtEtatMach span');
	for ( var i = 0; i < elem.length; i++) {
		var test = spans[i].style.backgroundColor;
		elem[i].style.backgroundColor = test;
		elem[i].style.setProperty('background', 'none');
		elem[i].style.setProperty('background-color', test, 'important');
		
		if (test == 'rgb(0, 0, 0)') {
			elem[i].style.setProperty('color', 'white', 'important');
		} else if (test == 'rgb(255, 255, 255)') {
			elem[i].style.setProperty('border', '1px solid rgb(123, 137, 168)', 'important');
		}
	}
}

/* Met en background la couleur sur les gantt pour les OF */
function loadBackgroundEvtOfOper() {
	elem = document.getElementsByClassName('evtOfOper');

	spans = $('.evtOfOper span');
	for ( var i = 0; i < elem.length; i++) {
		var test = spans[i].style.backgroundColor;
		elem[i].style.backgroundColor = test;
		elem[i].style.setProperty('background', 'none');
		elem[i].style.setProperty('background-color', test, 'important');
		
		if (test == 'rgb(0, 0, 0)') {
			elem[i].style.setProperty('color', 'white', 'important');
		} else if (test == 'rgb(255, 255, 255)') {
			elem[i].style.setProperty('border', '1px solid rgb(123, 137, 168)', 'important');
		}

	}
}

/* Met en background la couleur sur le gantt pour les personnels pour la prod */
function loadBackgroundEvtPers() {
	elem = document.getElementsByClassName('evtPers');
	
	spans = $('.evtPers span');
	for(var i = 0; i < elem.length; i++) {
			var test = spans[i].style.backgroundColor;
			elem[i].style.backgroundColor = test;
			elem[i].style.setProperty('background', 'none');
			elem[i].style.setProperty('background-color', test, 'important');
			
			if (test == 'rgb(0, 0, 0)') {
				elem[i].style.setProperty('color', 'white', 'important');
			} else if (test == 'rgb(255, 255, 255)') {
				elem[i].style.setProperty('border', '1px solid rgb(123, 137, 168)', 'important');
			}
	}
}

/* Met en background la couleur sur le gantt pour les états personnels */
function loadBackgroundEvtEtatPers() {
	elem = document.getElementsByClassName('evtEtatPers');
	spans = $('.evtEtatPers span');
	for ( var i = 0; i < elem.length; i++) {
		var test = spans[i].style.backgroundColor;
		elem[i].style.backgroundColor = test;
		elem[i].style.setProperty('background', 'none');
		elem[i].style.setProperty('background-color', test, 'important');
		
		if (test == 'rgb(0, 0, 0)') {
			elem[i].style.setProperty('color', 'white', 'important');
		} else if (test == 'rgb(255, 255, 255)') {
			elem[i].style.setProperty('border', '1px solid rgb(123, 137, 168)', 'important');
		}

	}
}

/* Met en background la couleur sur les gantt pour les OF */
function loadBackgroundEvtOfPers() {
	elem = document.getElementsByClassName('evtOfPers');

	spans = $('.evtOfPers span');
	for ( var i = 0; i < elem.length; i++) {
		var test = spans[i].style.backgroundColor;
		elem[i].style.backgroundColor = test;
		elem[i].style.setProperty('background', 'none');
		elem[i].style.setProperty('background-color', test, 'important');
		
		if (test == 'rgb(0, 0, 0)') {
			elem[i].style.setProperty('color', 'white', 'important');
		} else if (test == 'rgb(255, 255, 255)') {
			elem[i].style.setProperty('border', '1px solid rgb(123, 137, 168)', 'important');
		}

	}
}

/* Rajoute un icone modifier si l'élément a été modifié pour les OF */
function loadModifyIconEtatMach() {

	spans = $('.evtEtatMach span');

	for ( var i = 0; i < spans.length; i++) {

		var test = spans[i].getAttribute('class');
		
		if(test === 'true') {
			var td = spans[i].parentNode;
			
			var img = document.createElement("img");
			img.setAttribute('src', '../../resources/img/modify.png');
			img.setAttribute("id", "iconCorrFlag");
			
			var imageTest = td.firstChild;

			if ((imageTest instanceof HTMLImageElement) === false) {
				td.insertBefore(img, td.firstChild);
			} 
		}
	}
}

/*
 * Rajoute un icone modifier si l'élément a été modifié pour les ETAT
 * MACHINES
 */
function loadModifyIconOF() {

	spans = $('.evtOfOper span');

	for ( var i = 0; i < spans.length; i++) {

		var test = spans[i].getAttribute('class');

		if (test === 'true') {
			var td = spans[i].parentNode;
			
			var img = document.createElement("img");
			img.setAttribute('src', '../../resources/img/modify.png');
			img.setAttribute("id", "iconCorrFlag");
			
			var imageTest = td.firstChild;
			
			if ((imageTest instanceof HTMLImageElement) === false) {
				td.insertBefore(img, td.firstChild);
			}
		}
	}
}

/*
 * Rajoute un icone modifier si l'élément a été modifié pour les ETAT
 * PERSONNEL
 */
function loadModifyIconOP() {

	spans = $('.evtPers span');

	for ( var i = 0; i < spans.length; i++) {

		var test = spans[i].getAttribute('class');

		if (test === 'true') {
			var td = spans[i].parentNode;
			
			var img = document.createElement("img");
			img.setAttribute('src', '../../resources/img/modify.png');
			img.setAttribute("id", "iconCorrFlag");
			
			var imageTest = td.firstChild;
			
			if ((imageTest instanceof HTMLImageElement) === false) {
				td.insertBefore(img, td.firstChild);
			}
		}
	}
}

/* FormulairePers : Rajoute un icone modifie si l'element etatPers a ete modifie */
function loadModifyIconEtatPers() {

	spans = $('.evtEtatPers span');

	for ( var i = 0; i < spans.length; i++) {

		var test = spans[i].getAttribute('class');

		if (test === 'true') {
			var td = spans[i].parentNode;
			
			var img = document.createElement("img");
			img.setAttribute('src', '../../resources/img/modify.png');
			img.setAttribute("id", "iconCorrFlag");
			
			var imageTest = td.firstChild;
			
			if ((imageTest instanceof HTMLImageElement) === false) {
				td.insertBefore(img, td.firstChild);
			}
		}
	}
}

/*
 * FormulairePers : Rajoute un icone modifie si l'element OF/Oper a ete modifie 
 */
function loadModifyIconOFPers() {

	spans = $('.evtOfPers span');

	for ( var i = 0; i < spans.length; i++) {

		var test = spans[i].getAttribute('class');

		if (test === 'true') {
			var td = spans[i].parentNode;
			
			var img = document.createElement("img");
			img.setAttribute('src', '../../resources/img/modify.png');
			img.setAttribute("id", "iconCorrFlag");
			
			var imageTest = td.firstChild;
			
			if ((imageTest instanceof HTMLImageElement) === false) {
				td.insertBefore(img, td.firstChild);
			}
		}
	}
}

function onrangechange1() {
	var range = PF('timelineFirstWdgt').getVisibleRange();
	PF('timelineSecondWdgt').setVisibleRange(range.start, range.end);
	PF('timelineThirdWdgt').setVisibleRange(range.start, range.end);
	//PF('timelineFirstWdgt').setVisibleRange(range.start, range.end);
	// alert('test');
}

function onrangechange2() {
	var range = PF('timelineSecondWdgt').getVisibleRange();
	PF('timelineFirstWdgt').setVisibleRange(range.start, range.end);
	PF('timelineThirdWdgt').setVisibleRange(range.start, range.end);
}

function onRangehangeGanttPers() {
	var range = PF('timelineFirstWdgt').getVisibleRange();
	PF('timelineSecondWdgt').setVisibleRange(range.start, range.end);
}

function onRangehangeGanttPers2() {
	var range = PF('timelineSecondWdgt').getVisibleRange();
	PF('timelineFirstWdgt').setVisibleRange(range.start, range.end);
}

function onrangechange3() {
	var range = PF('timelineThirdWdgt').getVisibleRange();
	PF('timelineSecondWdgt').setVisibleRange(range.start, range.end);
	PF('timelineFirstWdgt').setVisibleRange(range.start, range.end);
}

function loadrange(i) {
	var range = PF('timelineFirstWdgt').getVisibleRange();
	PF('timelineSecondWdgt').setVisibleRange(range.start, range.end);
	PF('timelineThirdWdgt').setVisibleRange(range.start, range.end);
	selectTab(i);
}

function removeHighlight() {
	var elm = $("#formTabSearch\\:tableEvtProd tr");
	// elm.removeClass('ui-state-highlight');
	// elm.removeClass('ui-datatable-even.ui-state-highlight');
	// elm.removeClass('ui-state-hover');
	// elm.addClass('ui-datatable-even');
	elm.removeClass('ui-state-highlight');
	// elm.addClass('ui-datatable-odd');
}

function saveVisibleRange() {
	visibleRange = PF('timelineSecondWdgt').getVisibleRange();
}

function saveVisibleRangePers() {
	visibleRange = PF('timelineFirstWdgt').getVisibleRange();
}

function setVisibleRange() {
	if (visibleRange != "") {
		PF('timelineThirdWdgt').setVisibleRange(visibleRange.start, visibleRange.end);
		PF('timelineSecondWdgt').setVisibleRange(visibleRange.start, visibleRange.end);
		PF('timelineFirstWdgt').setVisibleRange(visibleRange.start, visibleRange.end);
	}
	
	visibleRange = "";
}

function setVisibleRangePers() {
	if (visibleRange != "") {
		PF('timelineFirstWdgt').setVisibleRange(visibleRange.start, visibleRange.end);
		PF('timelineSecondWdgt').setVisibleRange(visibleRange.start, visibleRange.end);
	}
	
	visibleRange = "";
}

