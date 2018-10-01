
FOR /R ".\..\..\dandimrod.github.io master\dandimrod.github.io" %%F IN (*.*) DO (
    set str1="%%F"
    set searchVal="dandimrod.github.io master\dandimrod.github.io\.git"
    Echo."%%F"| findstr /C:"dandimrod.github.io master\dandimrod.github.io\.git">nul && (
        Echo."%%F"
    ) || (
        Echo no
    )
    )
rem XCOPY .\build\dandimrod.github.io\*  ".\..\..\dandimrod.github.io master\dandimrod.github.io" /s /i
rem DEL /F /S