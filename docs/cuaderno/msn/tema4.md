---
id: tema4-msn
title: Tema 4 - Problemas de contorno
sidebar_label: Tema 4
---

## Introducción

$$(PC)\\left\\{\\begin{matrix} 
y''=f(t,y(t),y'(t))\ t\in [a,b]
\\\\ 
a_1\cdot y(a)+a_2\cdot y(a)=\alpha
\\\\
b_1\cdot y(b)+b_2\cdot y(b)=\beta
\\end{matrix}\\right.$$

Es un PVI de EDO de orden 2, pero en un intervalo \\([a,b]\\).

- Si \\(a_1=b_1=1\\) y \\(a_2=b_2=0\\) → \\((PC)\\left\\{\\begin{matrix} 
y''=f(t,y(t),y'(t))\ t\in [a,b]
\\\\ 
y(a)=\alpha,\ y(b)=\beta
\\end{matrix}\\right.\\) Condiciones de contorno de tipo **Dirichlet**

- Si \\(a_1=b_1=0\\) y \\(a_2=b_2=1\\) → \\((PC)\\left\\{\\begin{matrix} 
y''=f(t,y(t),y'(t))\ t\in [a,b]
\\\\ 
y'(a)=\alpha,\ y'(b)=\beta
\\end{matrix}\\right.\\) Condiciones de contorno de tipo **Neumaun**

- Si \\(y'(a)=\alpha\\) y \\(y'(b)=\beta\\) → \\((PC)\\left\\{\\begin{matrix} 
y''=f(t,y(t),y'(t))\ t\in [a,b]
\\\\ 
y'(a)=\alpha,\ y(b)=\beta
\\end{matrix}\\right.\\) Condiciones de contorno de tipo **mixto**



## Existencia y unicidad de solución de un Problema de Contorno

<div style="background-color:#c5e8ec">

Ejemplo:

$$(PC)\\left\\{\\begin{matrix} 
y''=4y-cos(t)\ t\in [0,\pi ]
\\\\ 
y(0)=0,\ y(\pi )=0
\\end{matrix}\\right.$$

Solución general de la EDO → \\(y(t,c_1,c_2)=c_1 cos(t)+ c_2 sen(t)\\)
Imponiendo las condiciones de contorno: 
$$y(0)=c_1 cos(0)+ c_2 sen(0)→c_1=3$$
$$y(\pi )=c_1 cos(\pi )+ c_2 sen(\pi )→c_1=-7$$

El PC no tiene solución :(
</div>

$$y''=f(t,y(t),y'(t))$$

Supongamos que las funciones \\(f\\), \\(\frac{\delta f}{\delta y}\\) y \\(\frac{\delta f}{\delta y'}\\) son continuas en un conjunto \\(D\\). Si:

- \\(\frac{\delta f}{\delta y}>0\ en\ D\\)
- \\(|\frac{\delta f}{\delta y'}|\leq M\ en\ D\\)

Cualquier PC definido a partir de la EDO tiene una única solución.
