<?xml version='1.0' encoding='UTF-8' ?>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml"
	xmlns:ui="http://java.sun.com/jsf/facelets"
	xmlns:h="http://java.sun.com/jsf/html"
	xmlns:f="http://java.sun.com/jsf/core"
	xmlns:p="http://primefaces.org/ui"
	xmlns:c="http://java.sun.com/jsp/jstl/core">
<h:head>
	<title>Quartis Pro Gestion des Contrôles</title>
	<link rel="stylesheet" media="screen" href="../css/treeView.css" />
	<script type="text/javascript" src="../js/treeView.js"></script>

</h:head>

<h:body>
	<jsp:useBean id="licence" scope="request"
		class="licence.LicenceInformations" />

	<h1>Gestion des Licences</h1>
	<label>Licences Utilisateurs Ateliers : </label>
	<label id="maxuseratel"><%=licence.getMaxUserAtel() %></label>
	<br/>
	<label>Licences Utilisateurs Web : </label>
	<label id="maxuserweb"><%=licence.getMaxUserWeb() %></label>
	<br/>
	<label>Date fin validité licence : </label>
	<label id="datefin"><%=licence.getDateFin() %></label>
	
	
	<h3>---------   </h3>
	<h3>Détail de la licence</h3>
	<label>Valide : </label>
	<label id="isValidLicence"><%=licence.isValidLicence() %></label>
	<br/>
	<label>Cle : </label>
	<label id="key"><%=licence.getKey() %></label>
	<br/>
	<label>Type : </label>
	<label id="type"><%=licence.getTypeLicence() %></label>
	<br/>
	<label>Statut : </label>
	<label id="status"><%=licence.getLicenceStatus() %></label>
	<br/>
	<label>Id Client : </label>
	<label id="idClient"><%=licence.getIdClient() %></label>
	<br/>
	<label>Id Poste : </label>
	<label id="idPoste"><%=licence.getIdPost() %></label>
	<br/>
	<label>Date de fin de validité : </label>
	<label id="dueDate"><%=licence.getDueDate() %></label>
	<br/>
	<label>Nombre de connexion atelier maximum : </label>
	<label id="nbConnAtelier"><%=licence.getNbConnAtelier() %></label>
	<br/>
	<label>Nombre de connexion web maximum : </label>
	<label id="nbConnWeb"><%=licence.getNbConnWeb() %></label>
	
</h:body>
</html>