@echo off
rem --- Efface l'ecran
CLS 
rem --- Supprimer la dependance de QuartisTomcat 
echo Supprimer la dependance de QuartisTomcat avec QuartisTools
sc config QuartisTomcat depend= ""
pause
echo fin