set APP_DIR=%1
set BIN_DIR=%APP_DIR%\bin\win64

set JAVA_EXE=%BIN_DIR%\jre\bin\java.exe

nssm install "QuartisRuntime" "%JAVA_EXE%"

nssm set "QuartisRuntime" DisplayName "Quartis Runtime"

nssm set "QuartisRuntime" Description "Serveur d'applications Quartis"

nssm set "QuartisRuntime" Start SERVICE_AUTO_START

nssm set "QuartisRuntime" AppDirectory "%APP_DIR%"

nssm set "QuartisRuntime" AppStdout "%APP_DIR%\logs\service-quartis-runtime-out.log" 

nssm set "QuartisRuntime" AppStderr "%APP_DIR%\logs\service-quartis-runtime-err.log"

nssm set "QuartisRuntime" AppParameters "-jar jars\Quartis-Pro-runtime.jar -S . Quartis-Pro-runtime conf/Quartis-Pro-runtime.xml"

