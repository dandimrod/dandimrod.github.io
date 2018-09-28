---
id: tema1-msn
title: Tema 1 - Ecuaciones Diferenciales Ordinarias Orden 1
sidebar_label: Tema 1
---


## ¿Qué es una ecuación?

Igualdad donde hay "algo" que no conocemos = **incógnita**

### Ecuaciones algebráicas

Igualdad de la forma \\(P(x)=0\\) donde \\(P(x)\\) es un polinomio

$$x-2=0$$
$$x^2+1=0$$
$$x^3-2x^2+x-3=0$$

### Ecuaciones no lineales

Se estudian en CIN
Ejemplos:

$$xe^x=1$$
$$sin(x)=1$$
$$x=tan(x)$$

**Incógnita:** Variable \\(x\\) (un número)  
**Solución:** valor de la variable  que verifica la igualdad  

## Casos que pueden ocurrir al resolver estas ecuaciones:

- Exista una única solución => \\(x-2= 0 → x=2\\)
- Existan varias soluciones => \\(x^2+x-2=0 → x1=1 x2=-2\\)
- No exista solución -> \\(x^2+1=0\\)
- Existan infintas soluciones -> \\(-sen(x)=1 → x=n*pi/n\\)

## Ecuaciones Diferenciales Ordinarias Orden 1 (EDO)

Una ecuación diferencial ordinaria de orden 1 es una ecuación que involucra:

- Una variable independiente: \\(t\\) (tiempo)
- Una variable dependiente: una función \\(y(t)\\)
- La derivada de la función \\(y(t)\\): \\(y'(t)\\)

Ejemplos:

$$y'(t)-sen(t)=0$$

$$y'(t)-ty^2(t)+y(t)=0$$

$$y(t)*y'(t)+t=0$$

$$e^{y(t)+2y(t)}*y'(t)-2t=0$$

Incógnita = \\(y(t)\\)

Definición: Una función \\(y(t)\\) es solución de una EDO de orden 1 en un intervalo \\(I\\) si:

- \\(y(t)\\) y \\(y'(t)\\) están definidas en I
- \\(y(t)\\) verifica la EDO

Ejemplos:

1. Demostrar que \\(y(t)=t^3\\) es solución de la EDO \\(ty'(t)-3y(t)=0\\) en \\(\mathbb{R}(I=(-\infty, +\infty))\\)  
\\(y(t)=t^3\\) y \\(y'(t)=3t^2\\) están definidas para cualquier valor de \\(t\\)  
\\(t*y'(t)-3y(t)=0\\)? <- \\(y(t)\\) cumpla la EDO

$$t(3t^2)-3t^3=3t^3-3t^3=0$$
    
2. \\(y(t) - 2t^3\\) es solución de la EDO anterior en \\(\mathbb{R}\\)  
\\(y(t)-2t^3\\) y \\(y'(t)=6t^2\\) están definidos en \\(\mathbb{R}\\)  
$$t(6t^2)-3*(2t^3)=6t^3-6t^3 = 0$$  
En general \\(y(t)=Ct^3\\) es solución de la EDO anterior en \\(\mathbb{R}\\) para cualquier valor de \\(C\\)  
La EDO \\(ty'(t)-3y(t)=0\\) tiene **infinitas** soluciones de la forma \\(y(t)=ct^3\\)

3. Demostrar que la función \\(y(t)=t^2+C\\) es solcuión de la EDO \\(y'(t)=2t\\) en \\(\mathbb{R}\\) para cualquier valor de \\(C\\)  
Hay infinitas soluciones

Si una EDO de orden 1 tiene solución entonces existen infinitas soluciones  
Puede que no exista solución, por ejemplo \\(y'(t)+1=0\\)

Por lo tanto, dada una EDO, puede ocurrir:

- No tiene solución
- Tiene infinitas soluciones

## Problema del valor inicial

$$PVI\\left\\{\\begin{matrix} 
y'(t)=f(t,y(t)) 
\\\\ 
y(t0)=y0 
\\end{matrix}\\right.$$


Obtener la solución particular de la EDO que cumpla la condición inicial =>   Obtener la curva intergal que pasa por el punto (t0,y0)

Ejemplo:
$$PVI\\left\\{\\begin{matrix} 
EDO\ de\ orden\ 1\ y'(t)=2t → y(t,c)=t^2+c
\\\\ 
y(t0)=1
\\end{matrix}\\right.$$

### Teorema de Picard

Condiciones para garantizar **existencia y unicidad** de un PVI

$$PVI\\left\\{\\begin{matrix} 
EDO\ de\ orden\ 1\ y'(t)=2t → y(t,c)=t^2+c
\\\\ 
y(t0)=y0
\\end{matrix}\\right.$$

Si \\(f(t,y(t))\\) y \\(\\frac{\delta f}{\delta y}\\) son continuas en un rectángulo \\(T\\) que contenga el punto \\((t0,y0)\\) entonces, existe una única solución del PVI, \\(y(t)\\), definida en un entero de \\(t0\\).