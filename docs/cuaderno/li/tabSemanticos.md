---
id: tabSemanticos-li
title: Tableros Semánticos
sidebar_label: Tableros Semánticos
---

## Fórmulas Alfa vs Fórmulas Beta

Las **fórmulas alfa** mantienen el árbol  
Las **fórmulas beta** dividen el árbol

### Fórmulas Alfa

|\\(F\\)|\\(F_1\\)|\\(F_2\\)|
|-|-|-|
|\\(A_1 \\land A_2\\)|\\(A_1\\)|\\(A_2\\)|
|\\(\\neg (A_1 \\to A_2)\\)|\\(A_1\\)|\\(\\neg A_2\\)|
|\\(\\neg (A_1 \\lor A_2)\\)|\\(\\neg A_1\\)|\\(\\neg A_2\\)|
|\\(A_1 \\leftrightarrow A_2\\)|\\(A_1\\to A_2\\)|\\(A_2\\to A_1\\)|

### Fórmulas Beta

|\\(F\\)|\\(F_1\\)|\\(F_2\\)|
|-|-|-|
|\\(B_1 \\lor B_2\\)|\\(B_1\\)|\\(B_2\\)|
|\\(B_1 \\to B_2\\)|\\(\\neg B_1\\)|\\( B_2\\)|
|\\(\\neg (B_1 \\land B_2)\\)|\\(\\neg B_1\\)|\\(\\neg B_2\\)|
|\\(\\neg (B_1 \\leftrightarrow B_2)\\)|\\(\\neg (B_1\\to B_2)\\)|\\(\\neg (B_2\\to B_1)\\)|

## Fórmulas Gamma vs Fórmulas Delta

Las **Fórmulas Gamma** usan un término que ya existía  
Las **Fórmulas Delta** añaden una nueva constante

### Fórmulas Gamma

|\\(F\\)|\\(F_1\\)|
|-|-|
|\\(\\forall x\ F\\)|\\(F[x/t]\\)|
|\\(\\neg\\exists x\ F\\)|\\(\\neg F[x/t]\\)|

### Fórmulas Delta

|\\(F\\)|\\(F_1\\)|
|-|-|
|\\(\\exists x\ F\\)|\\(F[x/x_0]\\)|
|\\(\\neg\\forall x\ F\\)|\\(\\neg F[x/x_0]\\)|

## Algoritmo para la resolución del tablero semántico

Elegir una rama. Si hay una **contradicción**, cerrar la rama con una **hoja cerrada**. Si hay **doble negación de p**, sustituir por **p**. Si hay una **fórmula alfa**, **dividir sus componentes**, si hay **fórmula beta**, **dividir el árbol por sus componentes**. Si se llega a un **conjunto de literales**, se cierra la rama en una **hoja abierta**. Es **satisfaccible** si tiene **hojas abiertas**, es **no satisfaccible** si todas las hojas son **cerradas** y es **tautología** si \\(\\neg F\\) es **insatisfacible**.