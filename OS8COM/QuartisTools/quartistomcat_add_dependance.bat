@echo off
rem --- Efface l'ecran
CLS 
rem --- Creer une dependance entre le service QuartisTomcat et le service QuartisTools
echo Creer la dependance de QuartisTomcat avec QuartisTools 
sc config QuartisTomcat depend= "QuartisTools"
pause
echo fin