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
- Existan infintas soluciones -> \\(-sen(x)=1 → x=n\cdot pi/n\\)

## Ecuaciones Diferenciales Ordinarias Orden 1 (EDO)

Una ecuación diferencial ordinaria de orden 1 es una ecuación que involucra:

- Una variable independiente: \\(t\\) (tiempo)
- Una variable dependiente: una función \\(y(t)\\)
- La derivada de la función \\(y(t)\\): \\(y'(t)\\)

Ejemplos:

$$y'(t)-sen(t)=0$$

$$y'(t)-ty^2(t)+y(t)=0$$

$$y(t)\cdot y'(t)+t=0$$

$$e^{y(t)+2y(t)}\cdot y'(t)-2t=0$$

Incógnita = \\(y(t)\\)

Definición: Una función \\(y(t)\\) es solución de una EDO de orden 1 en un intervalo \\(I\\) si:

- \\(y(t)\\) y \\(y'(t)\\) están definidas en I
- \\(y(t)\\) verifica la EDO

Ejemplos:

1. Demostrar que \\(y(t)=t^3\\) es solución de la EDO \\(ty'(t)-3y(t)=0\\) en \\(\mathbb{R}(I=(-\infty, +\infty))\\)  
\\(y(t)=t^3\\) y \\(y'(t)=3t^2\\) están definidas para cualquier valor de \\(t\\)  
\\(t\cdot y'(t)-3y(t)=0\\)? <- \\(y(t)\\) cumpla la EDO

$$t(3t^2)-3t^3=3t^3-3t^3=0$$
    
2. \\(y(t) - 2t^3\\) es solución de la EDO anterior en \\(\mathbb{R}\\)  
\\(y(t)-2t^3\\) y \\(y'(t)=6t^2\\) están definidos en \\(\mathbb{R}\\)  
$$t(6t^2)-3\cdot (2t^3)=6t^3-6t^3 = 0$$  
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


Obtener la solución particular de la EDO que cumpla la condición inicial → Obtener la curva intergal que pasa por el punto \\((t0,y0)\\)

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

Ejemplos:
1. 
$$PVI\\left\\{\\begin{matrix} 
y'=t^3-y^3
\\\\ 
y(0)=0
\\end{matrix}\\right.$$

$$f(t,y)=t^3-y^3\ →\ continua\ en\ \mathbb{R}x\mathbb{R}$$
$$\frac{\delta f}{\delta y}=-3y^2\ →\ continua\ en\ \mathbb{R}x\mathbb{R}$$

Para cualquier rectángulo R que contenga al punto \\((0,0)\\) tanto \\(f\\) como \\(\frac{\delta f}{\delta y}\\) son continunas.  
Luego, existe una única solución del PVI definida en \\(I=(0-\delta,0+\delta)=(-\delta,\delta)\\)

2.
$$PVI\\left\\{\\begin{matrix} 
ty'+2y=sen(t)
\\\\ 
y(\pi)=0
\\end{matrix}\\right.$$

$$y'= \frac{sen(t)-2y}{t} → f(t,y)=\frac{sen(t)-2y}{t} $$
$$\frac{\delta f}{\delta y} = \frac{-2}{t} = \frac{sen(t)}{t} - (\frac{2}{t})\cdot y$$
$$f(t,y)\ es\ continua\ en\ (\mathbb{R}-{t=0})x\mathbb{R}$$
$$\frac{\delta f}{\delta y}\ es\ continua\ en\ (\mathbb{R}-{t=0})x\mathbb{R}$$

Son continua para cualquier punto \\((t,y)\\) del plano excepto cuando \\(t=0\\)

Existe rectangulo R que contenga al punto \\((\pi,0)\\) tanto \\(f\\) como \\(\frac{\delta f}{\delta y}\\) son continunas.  
Luego existe una única solución del PVI definida en \\(I=(\pi-\delta,\pi+\delta)\\)

3.
$$PVI\\left\\{\\begin{matrix} 
y'=(y^2)t=0
\\\\ 
y(0)=1
\\end{matrix}\\right.$$
$$y'=y^{2t},\ f(t,y)=y^2\cdot t$$
$$\frac{\delta f}{\delta y} = 2yt$$
$$f(t,y)\ es\ continua\ en\ \mathbb{R}x\mathbb{R}$$
$$\frac{\delta f}{\delta y}\ es\ continua\ en\ \mathbb{R}x\mathbb{R}$$

Son continua para cualquier punto \\((t,y)\\) del plano excepto cuando \\(t=0\\)

Existe rectangulo R que contenga al punto \\((\pi,0)\\) tanto \\(f\\) como \\(\frac{\delta f}{\delta y}\\) son continunas.  
Luego existe una única solución del PVI definida en \\(I=(0-\delta,0+\delta)\\)

Solución de PVI → \\(y(t)=-2/t^2-2\\)

\\(I=(-\sqrt{2},\sqrt{2})\\)

## Métodos exactos de resolución de EDOs de orden 1

### Ecuaciones de variable separable

Una EDO \\(y'=f(t,y)\\) es de variable separable si \\(f(t,y)\\) se puede experesar como producto de la forma:
$$y'=a(t)\cdot t(y)$$

Siendo a algo que depende solo de \\(t\\) y \\(b\\) algo que solo depende de \\(y\\)

Ejemplos:
1.
$$y'=ty^2=b(y)$$
$$y\cdot y'+t=0 → y\cdot y' = -t → y'=\frac{-t}{y}=-t\cdot(\frac{1}{y})$$


2.
$$y'=1+t+y^2+ty^2 → y'=(1+t)+(1+t)\cdot y^2=(1+t)(1+y^2)$$

$$y'=a(t)\cdot b(y)$$
$$\frac{\delta y}{\delta t}=a(t)\cdot b(y) → \frac{1}{b(y)}\ \delta y=a(t) \delta t → \int \frac{1}{b(y)}\ \delta y=\int a(t)\ \delta t$$

Ejemplos:

1. 
$$y'=ty^2$$
$$\frac{\delta y}{\delta t}=ty^2 → \frac{1}{y^2\ \delta y}=t\ \delta t$$
$$\int \frac{1}{y^2} \delta y=\int t\ \delta t → \frac{y^{-2+1}}{-2+1} = \frac{t^2}{2+C},\ C \in \mathbb{R}$$
$$\frac{y^{-1}}{-1}=\frac{t^2}{2+C},\ C \in \mathbb{R}$$
$$\frac{y^{-1}}{-1}=t^2+2C/2 ,\ C \in \mathbb{R}$$
$$y=\frac{{-2}}{t^2+2C},\ C \in \mathbb{R}\ ←\ solución$$
    
    
### Ecuaciones lineales
$$y'(t)+a(t)y(t)=b(t)$$

Ejemplos:
1.
$$ty'=y=-t^3cos(t)$$
$$y' \frac{-1}{t} \cdot y=-t cos(t)$$

2.
$$ty'-y=t^2 cos(t)$$
EDO homogénea asociada: \\(ty'-y=0\\) → varable separable  
Paso 2: \\(y_p(t)=C(T)\cdot t\\)

Imponemos que \\(y\_p(t)\\) sea la solución de la EDO completa, es decir, \\(y\_p(t)\\) debe cumplirla EDO \\(ty'-y=t^2 cos(t)\\)  
Luego, 
$$ty'_p(t)-y_p(t)=-t^2 cos(t)$$
$$y'_p(t)=C'(t)t+C(t)$$
$$t y'_p(t)-y_p(t)=-t^2 cos(t)$$
$$t(C'(t)t+C(t))-C(T)t=t^2 cos(t)$$
$$t^2 C'(t)+tC(t)-tC(t) = t^2 cos(t)$$
$$t^2 C'(t)=-t^2 cos(t)$$
$$C'(t)=-cos(t) → C(t)= \int-cos(t)\ dt = sen(t)$$
$$C(T)=-sen(t) → y_p(t) = t sen(t)$$

Luego, la solución general de la EDO linal completa es:

$$y(t,C)=y_H(t,C)+y_p(t)=Ct-tsen(t)\ C \in \mathbb{R}$$

Luego, 
$$ty'_p(t)-y_p(t)=-t^2 cos(t)$$
$$y'_p(t)=C'(t)t+C(t)$$

### Ecuaciones de Bernoulli

$$y'(t)+ a(t)\cdot y(t)+b(t) \cdot y(t)^\alpha=0$$

Con \\(\alpha \geq 2\\)

Idea: Hacer un cambio de variabl para transformarla EDO de Bernoulli en una EDO lineal

Cambio: \\(Z(t)= y(t)^{1-\\alpha}\\)  
\\(Z'(t)=(1-\alpha)\cdot y(t)^{(1-\alpha)-1}y'(t)\\)  
\\(Z'(t)=Z'(t)=(1-\alpha)y(t)^{-\alpha}y'(t)\\) (REGLA DE LA CADENA)

Multiplicar la EDO por \\(y(t)^{-\alpha}\\)

$$y'(t)+a(t)y(t)+b(t)y(t)^\alpha=0$$  
$$y(t)^{-\alpha}\cdot y'(t)+a(t)\cdot y^{1-\alpha}+b(y)+b(t)=0$$

Ejemplo:
$$y'+y-ty^2$$
$$z=y^{-1}$$
$$z'=(-1)\cdot y^{-2}\cdot y'=-y^{-2}\cdot y'$$

Multiplicamos la EDO por \\(y^{-2}\\)  
\\(-z'+z-t=0\\) → EDO lineal en la variable \\(z(t)\\) → solución: \\(z(t,c)= ce^t+t+1\\)

Deshacemos el cambio \\(z=y^{-1}\\)  
Luego: \\(y(t,c)=\frac{1}{Ce^t+t+1}\\)

## Resumen

- Variable separable:  
Forma: \\(y'=a(t)\cdot b(y)\\)  
Solución general de la EDO Homogénea

- Lineales:  
Forma: \\(y'+a(t)y=b(t) → y(t,C)=y_H(t,C)+y_p(t)\\)  
\\(y_H(t,C)\\)→Solución genreal de la EDO Homogénea  
\\(y_p(t)\\)→Solución particular de la edo completa (Método variación de las constantes)  

- Bernoulli:  
Forma: \\( y'+a(t)y+b(t)\cdot y^\alpha=0,\ \alpha\geq	2 \\)  
Cambio de variable para trasformar la EDO en una lineal:  
\\(Z=y^{1-alpha}\\)   
\\(Z'=(1-\alpha)\cdot y^{\alpha}\cdot y'\\)