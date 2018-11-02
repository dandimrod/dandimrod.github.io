---
id: parcial1-msn
title: Ejercicios para el Parcial 1
sidebar_label: Parcial 1
---

## Ejercicio 1
$$PVI\\left\\{\\begin{matrix} 
ty'+4y=0
\\\\ 
y(1)=1
\\end{matrix}\\right.$$
1) Demostrar existencia y unicidad del PVI
2) Calcular la solución exacta del PVI
3) Dar una estimación de la cota del error que se comete para la 1ª iteración del método de Euler en \\([1,2]\\) con paso \\(h=0.5\\)

1) Aplicamos el teorema de Picard

$$f(ty)=\frac{-4y}{t}$$
$$\frac{\delta f}{\delta y}=\frac{-4}{t}$$

Ambas tienen que ser continuas en \\(\mathbb{R}-\\{0\\}x\mathbb{R}\\)

Podemos encontrar un rectángulo R que contiene al punto \\((1,1)\\) donde \\(f\\) y \\(\frac{\delta f}{\delta y}\\) son continuas. Luego, por el teorema de Picard podemos asegurar que existe una única solución de PVI definida en \\(I=(1-\delta,1+\delta)\\)

2) EDO variable separable

$$ty'+4y=0→\int \frac{y'}{y} → \int \frac{-4}{t} → ln(|y|)=-4\cdot ln(|t|)+e$$
$$ln(|y|)=ln(|t|)^{-4}+e → e^{ln(|y|)}=e^e\cdot e^{ln(|t|)^{-4}}→|y|=c|t|^{-4}→y=\pm c t^{-4}$$
$$y(t,c)=c\cdot t^{-4}$$
Siendo la solución en el pvi
