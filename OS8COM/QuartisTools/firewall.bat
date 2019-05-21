@echo off
echo ajout exeception Osys_TRACE
netsh firewall add portopening TCP 5040 "Osys_TRACE"
echo ajout exeception Osys_SRV
netsh firewall add portopening TCP 5060 "Osys_SRV"
echo ajout exeception Osys_MEM
netsh firewall add portopening TCP 5050 "Osys_MEM"
echo ajout exeception Osys_console_WEB
netsh firewall add portopening TCP 5070 "Osys_console_WEB"
echo ajout exeception Osys_profile
netsh firewall add portopening TCP 5080 "Osys_profile"
echo ajout exeception Osys_Web_QuartisTools
netsh firewall add portopening TCP 2080 "Osys_Web_QuartisTools"
echo ajout exeception Osys_Tomcat
netsh firewall add portopening TCP 8383 "Osys_Tomcat"
pause
echo fin
