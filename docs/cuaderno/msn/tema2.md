---
id: tema2-msn
title: Tema 2 - Métodos Numéricos de Resolución de EDO Orden 1
sidebar_label: Tema 2
---

## Introducción

$$PVI\\left\\{\\begin{matrix} 
y'(t)=f(t,y(t))
\\\\ 
y(a)=\alpha
\\end{matrix}\\right.$$

Supongamos que se cumplen las condiciones del teorema de Picard y, por tanto, existe una única solcución de PVI definida en un intervalo \\(I=(a,b)\\)

Denotamos por \\(y(t)\\) a la **solución exacta** del PVI

- Dividimos el intervalo \\((a,b)\\) en \\(N\\) partes iguales.
- Obtenemos \\(N+1\\) puntos dentro del intervalo (h=paso)

$$t_0\hspace{15mm} t_1\hspace{15mm} t_2\hspace{15mm} t_3\hspace{15mm} t_4\hspace{15mm} t_5$$
$$|--------------------|$$
$$a\hspace{95mm} b$$ 
$$N=5$$
$$t_1=t_0+h$$
$$t_2=t_0+2h$$
$$t_n=t_0+nh$$

**Objetivo**: dar una **aproximación** de lo que vale la solución exacta \\(y(t)\\), en cada uno de los puntos \\(t_i\\)  
\\(y(t_i)\\) → valor exacto de la solución \\(y(t)\\) en \\(t_i\\)
\\(y_i\\) → valor aproximado de la solución en \\(t_i\\)

## Error

$$ Error\ exacto\ en\ nodo\ t_i= |y(t_i)-y_i|$$
Para ello necesitamos conocer la solución exacta en \\(y(t)\\)  
Cotas del error → Valor aproximado del error que se puede cometer

$$|y(t_i)-y_i| \geq  C\cdot h^1$$ 
Para métodos numéricos de orden 1 (Euler)

$$|y(t_i)-y_i| \geq  C\cdot h^k \ con\ k>1$$ 
Para métodos numéricos de orden superior (Runge-Kutta)

## Método de orden 1: Método de Euler

$$PVI\\left\\{\\begin{matrix} 
y'(t)=f(t,y(t))
\\\\ 
y(a)=\alpha
\\end{matrix}\\right.$$
$$I=(a,b)$$
$$t_0\hspace{15mm} t_1\hspace{15mm} t_2\hspace{15mm} t_3\hspace{15mm} ...\hspace{15mm} t_n$$
$$|--------------------|$$
$$a\hspace{95mm} b$$ 
\\(y_0\\) = valor aproximado de la solución en \\(t_0\\) = \\(\alpha\\)
\\(y_1\\) = valor aproximado de la solución en \\(t_1\\) = \\(\alpha\\)

$$y(t)=y_0+f(t_0,y_0)\cdot (t-t_0)$$

$$Euler\\left\\{\\begin{matrix} 
y_0=\alpha
\\\\ 
y_{i+1}=y_i+h\cdot f(t_i,y_i)
\\end{matrix}\\right.$$

Ejemplo:

$$PVI\\left\\{\\begin{matrix} 
y'=t^2, 0 \geq t \geq 2
\\\\ 
y(0)=0
\\end{matrix}\\right.$$

Aplicar Euler par \\(N=4\\)

$$t_0\hspace{20mm} t_1\hspace{20mm} t_2\hspace{20mm} t_3\hspace{20mm} t_4$$
$$|--------------------|$$
$$0\hspace{95mm} 2$$ 

$$h=\frac{2-0}{4} =\frac{1}{2}$$

|\\(i\\)|\\(t_i\\)|\\(y_i\\)|
|-|-|-|
|\\(0\\)|\\(0\\)|\\(0\\)|
|\\(1\\)|\\(\frac{1}{2}\\)|\\(0+\frac{1}{2}\cdot f(0,0)=0\\)|
|\\(2\\)|\\(1\\)|\\(0+\frac{1}{2}\cdot f(\frac{1}{2},0)=\frac{1}{8}\\)|
|\\(3\\)|\\(\frac{3}{2}\\)|\\(\frac{1}{8}+\frac{1}{2}\cdot f(1,\frac{1}{8})=\frac{5}{8}\\)|
|\\(4\\)|\\(2\\)|\\(\frac{5}{8}+\frac{1}{2}\cdot f(\frac{3}{2},\frac{5}{8})=\frac{7}{4}\\)|

$$PVI\\left\\{\\begin{matrix} 
y'=t^2
\\\\ 
y(0)=0
\\end{matrix}\\right.$$

Solución exacta:

$$\int y' = \int t^2 → \frac{t^3}{3}+C, C\in R$$
$$ y(0)=\frac{0^3}{3}+C=C=0$$

|\\(i\\)|\\(t_i\\)|\\(y_i\\)|\\(y_i\ exacto\\)|\\(error\ exacto\\)|
|-|-|-|-|-|
|\\(0\\)|\\(0\\)|\\(0\\)|\\(0\\)|\\(0\\)|
|\\(1\\)|\\(\frac{1}{2}\\)|\\(0+\frac{1}{2}\cdot f(0,0)=0\\)|\\(0.0416\\)|\\(0.0416\\)|
|\\(2\\)|\\(1\\)|\\(0+\frac{1}{2}\cdot f(\frac{1}{2},0)=\frac{1}{8}\\)|\\(0.333\\)|\\(0.208\\)|
|\\(3\\)|\\(\frac{3}{2}\\)|\\(\frac{1}{8}+\frac{1}{2}\cdot f(1,\frac{1}{8})=\frac{5}{8}\\)|\\(1.125\\)|\\(0.5\\)|
|\\(4\\)|\\(2\\)|\\(\frac{5}{8}+\frac{1}{2}\cdot f(\frac{3}{2},\frac{5}{8})=\frac{7}{4}\\)|\\(2.666\\)|\\(.9166\\)|

### Cota de error par el método de Euler

$$PVI\\left\\{\\begin{matrix} 
y'(t)=f(t,y(t))
\\\\ 
y(a)=\alpha
\\end{matrix}\\right. I=(a,b)$$

Sea \\(y(t)\\) la solución exavta del PV, definida en I y sea M y L dos constantes tales que

$$|\frac{\delta f}{\delta y}|  \geq  L,\ para\ t\in (a,b), y\in R$$
$$|y''(t)| \geq M,\ para\ t\in (a,b)$$
$$|y(t_i)-y_i| \geq  \frac{h\cdot M}{2L}(e^{L\cdot (t_i-a)}-1)$$
Esta es la cota de error.

Ejemplo:

$$PVI\\left\\{\\begin{matrix} 
y'=y-t^2+1,\ 0 \geq t \geq 2
\\\\ 
y(0)=0.5
\\end{matrix}\\right. I=(0,2)$$

Método de euler con \\(N=10\\)  
Solución exacta \\(y(t)=(t+1)^2-0.5\cdot e^t\\)

- Calculamos la constante L: \\(|\frac{\delta f}{\delta y}|  \geq  L\\)  
$$ f(t,y)=y+t^2+1 → \frac{\delta f}{\delta y}=1 → |\frac{\delta f}{\delta y}|=|1| \geq L → L=1 $$
- Calculamos la constante M: \\(|y''(t)| \geq M\\)
$$ y'(t)=2t+2-0.5\cdot e^t$$
$$ y''(t)=2-0.5\cdot e^t$$
$$|y''(t)|=|2-0.5\cdot e^t|$$
$$|y''(t)|=|2|+|0.5\cdot e^t|$$
$$Dado\ I=(0,2)$$
$$|y''(t)|=|2|+|0.5\cdot e^2|=M$$
- Calculamos la cota del error
  $$|y(t_i)-y_i| \geq  \frac{0.2\cdot (0.5\cdot e^2)}{2\cdot 1}(e^{1\cdot (t_i-a)}-1)$$
