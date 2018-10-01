---
id: dedNatural-li
title: Deducción Natural
sidebar_label: Dedución Natural
---

## Reglas generales

|   |Introdución|Eliminación|
|-|-|-|
|\\(\land\\)|\\( \\frac{F\ G}{F\\land G}\ \land i\\)| \\( \\frac{F\\land G}{F}\land e_{1}\ \\frac{F\\land G}{G}\land e_{2}\\)|
|\\(\lor\\)|\\( \\frac{F}{F\\lor G}\lor i_{1}\ \\frac{G}{F\\lor G}\lor i_{2}\\)|\\( \\frac{F\lor G\\ \boxed{\\begin{array}{}F\\\\H\\end{array}} \boxed{\\begin{array}{}G\\\\H\\end{array}}}{H}\ \lor e\\)|
|\\(\to\\)|\\(\\frac{\boxed{\\begin{array}{}F\\\\G\\end{array}}}{F\\to G}\to i\\)|\\(\\frac{F\\ F\\to G}{G}\to e\\)|
|\\(\neg\\)|\\(\\frac{\boxed{\\begin{array}{}F\\\\\\bot\\end{array}}}{\\neg F}\neg i\\)|\\(\\frac{F\\ \\neg F}{\\bot}\neg e\\)|
|\\(\bot\\)|\\(\\frac{F\\ \\neg F}{\\bot}\neg e\\)|\\(\\frac{\\bot}{F}\bot e\\)|
|\\(\neg\neg\\)|\\(\\frac{F}{\neg \neg F}\neg \neg i\\)|\\(\\frac{\neg \neg F}{F}\neg \neg e\\)|
|\\(\leftrightarrow\\)|\\(\\frac{F\\to G\\ G\\to F}{F\leftrightarrow G}\leftrightarrow i\\)|\\(\\frac{F\\leftrightarrow G}{F\to G}\leftrightarrow e_1\\ \\frac{F\\leftrightarrow G}{G\to F}\leftrightarrow e_2\\)|

## Otras reglas

|Regla|
|-| 
|\\(\\frac{\\neg G\\ F\\to G}{\\neg F}\ MT\\)|
|\\(\\frac{F}{F}\ hyp\\)|
|\\(\\frac{\boxed{\\begin{array}{}\\neg F\\\\\\bot\\end{array}}}{F}\ RAA\\)|
|\\( \\frac{}{F\\lor \\neg F}\ LEM\\)|

## Reglas en el primer orden

|   |Introdución|Eliminación|
|-|-|-|
|\\(\\forall\\)|\\(\\frac{\boxed{\\begin{array}{}x_0\\\\F[x/x_0]\\end{array}}}{\\forall x \ F}\forall i\\)|\\( \\frac{\\forall x\ F}{F[x/t]}\ \forall e\\)|
|\\(\\exists\\)|\\( \\frac{F[x/t]}{\\exists x\ F}\ \exists i\\)|\\(\\frac{\\exists x\ F\ \boxed{\\begin{array}{}x_0,\ F[x/x_0]\\\\G\\end{array}}}{G}\exists e\\)|