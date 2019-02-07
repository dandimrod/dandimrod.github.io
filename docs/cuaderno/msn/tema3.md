---
id: tema3-msn
title: Tema 3 - Ecuaciones Diferenciales de Orden Superior
sidebar_label: Tema 3
---

## Introducción

\\(t\\) → variable independiente  
\\(y(t)\\) → variable dependiente
\\(y'(t)\\) e \\(y''(t\\) → 1ª y 2ª derivadas de \\(y(t)\\)

Entonces:

$$y''(t)=f(t, y(t), y'(t))$$

<div style="background-color:#c5e8ec">
Ejemplos:

$$y''= sen(t) + 3y + (y')^2$$
$$y''+ty'+sen(t)\cdot y = e^t$$

</div>

## Solución general de una EDO de orden 2

Una función \\(y(t)\\) se dice que es solución de una EDO de orden 2 en un intervalo \\(I\\) si:

1. \\(y(t)\\), \\(y'(t)\\) e \\(y''(t)\\) están definidas en \\(I\\)
2. \\(y(t)\\) cumple la igualdad, es decir, \\(y''(t)=f(t, y(t), y'(t))\\) para todo \\(I\\)

<div style="background-color:#c5e8ec">
Ejemplo:

Demostrar que la función \\(y(t)=2 sen(t) -1/3 \cdot cos(2t) \\)es solución de \\(y''+y=cos(2t)\\)

$$y'(t)=2cos(t) + \frac{2}{3} sen(2t)$$
$$y''(t)=-2 sen(t)+ \frac{4}{3} cos(2t)$$

1. \\(y(t)\\), \\(y'(t)\\) e \\(y''(t)\\) están definidas para todo \\(\mathbb{R}\\)
2. \\(y''(t)+y(t)=cos(2t)\\)

$$-2 sen(t)+ \frac{4}{3}\cdot cos(2t)+ 2sen(t)-\frac{1}{3}\cdot cos(2t)= cos(2t)$$

</div>

\\(y''(t)=f(t, y(t), y'(t))\\) → solución general y(t,c_1,c_2) siendo C_1 y c_2 constantes

### EDO de orden 2 lineales

$$a(t)\cdot y''+b(t)\cdot y'+c(t)\cdot y=d(t)$$

En particular, nos vamos a centrar en las EDO de orden 2 **Lineales de coeficientes constantes:**

$$a\cdot y''+b\cdot y'+c\cdot y=d(t) \ a,b,c \in \mathbb{R}$$

<div style="background-color:#c5e8ec">

Ejemplo:

$$y''+e^t\cdot y'+2y=sen(t)→EDO\ de\ orden\ 2\ lineal$$
$$2y''-y'=e^t→EDO\ de\ orden\ 2\ linal\ de\ coeficientes\ constantes$$

</div>

$$a\cdot y''+b\cdot y'+c\cdot y=d(t)$$

Solución general: \\(y(t,c_1,c_2)=y_H(t,c_1,c_2)+y_p(t)\\)  
Siendo:

\\(y_H(t,c_1,c_2)\\) → solución general de la EDO homogénea \\(ay''+by'+cy=0\\)
\\(y_p(t)\\)  → Solución particular de la EDO completa por el **Método de los coeficientes indeterminados**

#### Solución general de la EDO de orden 2 lineal homogénea

Se trata de buscar un **sistema fundamental de soluciones:** es decir, un conjunto de 2 soluciones \\(y_1(t)\\) e \\(y_2(t)\\) que constituyan una base del conjuto de todas las soluciones

De forma que, la solución general de la EDO homogénea se va expresar como combinación lineal de \\(y_1(t)\\) e \\(y_2(t)\\)

$$y_H(t,c_1,c_2)=c_1y_1(t)+c_2y_2(t)$$

¿Cómo obtener las soluciones \\(y_1(t)\\) e \\(y_2(t)\\) del s.f.s?

1. Calcular el **polinomio caracterísitco** asociado a la EDO a(t)\cdot y''+b(t)\cdot y'+c(t)\cdot y=0

$$p(r)=a\cdot r^2+b\cdot r + c$$

2. Calcular las raíces de \\(p(r)=0\\)

**Caso 1:** Dos raíces simples \\(r_1\\) y \\(r_2\\) → \\(s.f.s ={y_1(t)=e^{r_1t}+y_2(t)=e^{r_2t}}\\)

Luego, \\(y_H(t,c_1,c_2)=c_1e^{r_1t}+c_2e^{r_2t}\\)

**Caso 2:** Una raíz doble \\(r → s.f.s.={y_1(t)=e^{rt},y_2(t)=e^{rt}}\\)

Luego, \\(y_H(t,c_1,c_2)=c_1e^{rt}+c_2e^{rt}\\)

// caso 3 buscar ostia puta

<div style="background-color:#c5e8ec">
Ejemplo: 
$$y''+3y'+2y=3t+1$$

$$y_H(t,c_1,c_2) =\ Solución\ general\ de\ y''+3y' +2 y=0$$

Polinomio característico:

$$p(r)=r^2+3r+2$$

Raíces de \\(P(r)=0\\):
$$r=\frac{-3\pm\sqrt{9-4\cdot 2}}{2}=\frac{-3\pm1}{2}→r_1=-1\ r_2=-2$$

$$y_H(t,c_1,c_2)=c_1e^{-t}+c_2e^{-2t}$$

</div>

#### Método de los coeficientes indererminados
##### Caso 1
$$ay''+by'+cy=b(t)$$
La forma de la solución particular \\(y_p(t)\\) va a depender de la forma que tenga el término independiente de \\(b(t)\\).

- Si \\(b(t)= p_n(t)\cdot e^{rt}\\) (Siendo \\(p_n\\) un polinomio de grado \\(n\\))→\\(y_p(t)= t^s \cdot q_n(t)\cdot e^{rt}\\), donde \\(s=\\left\\{\\begin{matrix} 
0\ si\ r\ no\ es\ raiz\ de\ p(r)=0
\\\\ 
1\ si\ r\ es\ raiz\ simple\ de\ p(r)=0
\\\\ 
2\ si\ r\ es\ raiz\ doble\ de\ p(r)=0
\\end{matrix}\\right.\\)

<div style="background-color:#c5e8ec">
Ejemplo:

$$y''+3y'+2y=3t+1 → y_H(t,c_1,c_2)=c_1e^{-t}+c_2e^{-2t}$$

$$b(t)=3t+1=(3r+1)\cdot e^{0\cdot t}$$

y_p=t^3\cdot q_1(t)\cdot e^{0t}=t^0 \cdot (At+B)\cdot e^{0t}=At+B

s=0 ya que r=0 no es raíz de p(r)=0

Imponemos que y_p(t) =At+B sea la soluciónde la EDO completa y''+3y'+2y=3t+1 , es decir:
$$y_p''(t)+3y_p'(t)+2y_p(t)=3t+1$$

$$0+3A+2(At+B)=3t+1$$
$$3A+2At+2B=3t+1$$

$$\\left\\{\\begin{matrix} 
2A=B → A=\frac{3}{2}
\\\\ 
3A+2B=1 → \frac{9}{2}+2B=1 → B=\frac{-7}{4}
\\end{matrix}\\right.$$

$$y_p(t)=\frac{3}{2} t- \frac{-7}{4}$$

</div>

<div style="background-color:#c5e8ec">
Ejemplo:

$$y''-y=2-t^2$$

$$(H)\ p(r)=r^2-1=0 → r_1=1 r_2=-1 → y_H(t,c_1,c_2)=c_1e^{t}+c_2e^{-t}$$
$$(NH)\ y''-y=2-t^2\ b(t)=(2-t^2)\cdot e^{0t} → y_p(t)= t^0\cdot (At^2 + Bt+C)\cdot e^{0t} = At^3+Bt+C$$

$$y_p'(t)=2At+B$$
$$y_p''(t)=2A$$
$$y''(t)-y_p(t)=2-t^2$$
$$2A-(At^2+Bt+C)=2-t^2$$
$$-At^2-Bt+2A-C=2-t^2$$
$$-A=-1 → A=1$$
$$-B=0 → B=0$$
$$2A-C=2 → C=0$$
$$y_p(t)=t^2$$

</div>

##### Caso 2

$$b(t)= p_n(t)\cdot e^{\alpha t} cos(\beta t)+ q_m(t)\cdot e^{r\alpha} sen(\beta t)$$

$$ y_p(t)= t^s(P_N(t)e^{\alpha t} cos(\beta t)+Q_N(t)\cdot e^{r\alpha} sen(\beta t))\ con\ N=max\{n,m\}$$

$$s=\\left\\{\\begin{matrix} 
0\ si\ \alpha \pm \beta \cdot i\ no\ es\ raiz\ compleja\ de\ p(r)=0
\\\\ 
1\ si\ \alpha \pm \beta \cdot i\ es\ raiz\ compleja\ de\ p(r)=0
\\end{matrix}\\right.$$

<div style="background-color:#c5e8ec">
Ejemplo:

$$y''+3y'+2y=5 sen(t) → y_H(t,c_1,c_2)=c_1e^{-t}+c_2e^{-2t}$$

$$b(t)= E\cdot sen(t)= D\cdot e^{0t}\cdot cos(t)+5\cdot e^{0t}\cdot sen(t)$$

$$y_p=t^0(Ae^{0t}\cdot cos(t) + B\cdot e^{0t} \cdot sen(t))$$

Ya que \\(\alpha \pm \beta i \\) no es raíz de \\(p(r)=0\\)

$$y_p(t)=Acos(t)+Bsen(t)$$
$$y_p'(t)=-Asen(t)+Bcos(t)$$
$$y_p''(t)=-Asen(t)-Bcos(t)$$

$$-Acos(t)-Bsen(t)+3(-Asen(t)+Bcos(t))+2(-Asen(t)-Bcos(t))=5sen(t)$$

$$(-a+3B+2A)cos(t)+(-B-3A+2B)sen(t)=5sen(t)$$

$$\\left\\{\\begin{matrix} 
3B+A=0
\\\\ 
B-3A=5
\\end{matrix}\\right.$$

$$A=\frac{-3}{2},\ B=\frac{1}{2}→y_p(t)=\frac{-3}{2}cos(t)+\frac{1}{2}sen(t)$$

$$y(t,c_1,c_2)=c_1e^{-t}+c_2e^{-2t}-\frac{3}{2}cos(t)+\frac{1}{2}sen(t)$$
</div>


##### Caso 3
Principio de superposición

$$ay''+by'+cy=b_1(t)+b_2(t)$$


<div style="background-color:#c5e8ec">
Ejemplo:

$$y''+3y'+2y=3t+1+5\cdot sen(t)$$
La parte \\(b_1(t)\\) corresponde al caso 1 y \\(b_2(t)\\) corresponde al caso 2
</div>

$$(H)\ ay''+by'+cy=0\ →\ Solución\ general y_H(b,c_1,c_2)$$
$$(NH_1)\  ay''+by'+cy=b_1(t)\ →\ y_{p_1}(t)$$
$$(NH_2)\  ay''+by'+cy=b_2(t)\ →\ y_{p_2}(t)$$

Solución de la EDO completa:

$$ay''+by'+cy=b_1(t)+b_2(t)$$

Viene dada por:

$$y(b,c_1,c_2)=y_H(b,c_1,c_2)+y_p(t)$$
$$y(b,c_1,c_2)=y_H(b,c_1,c_2)+y_{p_1}(t)+y_{p_2}(t)$$

<div style="background-color:#c5e8ec">
Ejemplo:

$$y''+3y'+2y=3t+1+5\cdot sen(t)$$

$$(H)\ p(r)=r^2+3r+2=0 → r_1=-2 r_2=-1 → y_H(t,c_1,c_2)=c_1e^{-2t}+c_2e^{-t}$$
$$(NH_1)\ y''+3y'+2y=3t+1\ → y_{p_1}(t)=\frac{3}{2}t-\frac{7}{4}$$
$$(NH_2)\ y''+3y'+ 2y=5sen(t)\ → y_{p_2}(t)=-\frac{2}{2}cos(t)+\frac{1}{2}sen(t)$$
$$y(t,c_1,c_2)=c_1e^{-2t}+c_2e^{-t}+\frac{3}{2}t-\frac{7}{4}-\frac{2}{2}cos(t)+\frac{1}{2}sen(t)$$
</div>


## Probleman de Valores iniciales asociadas a EDO de orden 2:

$$(PVI)\\left\\{\\begin{matrix} 
y''=f(t,y(t),y'(t))
\\\\ 
y(t_0)=\alpha _0,\ y'(t_0)=\alpha _1
\\end{matrix}\\right.$$

<div style="background-color:#c5e8ec">
Ejemplo:

$$(PVI)\\left\\{\\begin{matrix} 
y''+2y'+y=t^2
\\\\ 
y(0)=0,\ y'(0)=0
\\end{matrix}\\right.$$

Siendo la solución general de la EDO:
$$y(t,c_1,c_2)=c_1e^{-t}+c_2e^{-t}+t^2-4t+6$$

Solución del PVI:
Imponemos las condiciones:

$$y(0)=0 → c_1+6=0 → c_1=-6$$

$$y'(0)=0 → c_1+c_2=-4 → c_2=-2$$

Por lo tanto:

$$y(t)=-6e^{-t}-2e^{-t}+t^2-4t+6$$

</div>

## Métodos Numéricos asociados a las EDO de orden 2

$$(PVI)\\left\\{\\begin{matrix} 
y''=f(t,y(t),y'(t))
\\\\ 
y(t_0)=\alpha _0,\ y'(t_0)=\alpha _1
\\end{matrix}\\right.$$

$$I=(a,b)$$
$$a\leq t\leq b$$
$$t_0\hspace{15mm} t_1\hspace{15mm} t_2\hspace{15mm} t_3\hspace{15mm} ...\hspace{15mm} t_n$$
$$|--------------------|$$
$$a\hspace{95mm} b$$ 

$$y_n=aproximación\ de\ y(t_n)$$

Hacemos un cambio de variable: \\(v=y'\\)

Obtenemos 2 PVI asociados a EDO de orden 1

$$(PVI)_1\\left\\{\\begin{matrix} 
y'(t)=v(t)
\\\\ 
y(t_0)=\alpha _0
\\end{matrix}\\right.$$

$$(PVI)_2\\left\\{\\begin{matrix} 
v'(t)=f(t,y(t),v(t))
\\\\ 
v(t_0)=\alpha _1
\\end{matrix}\\right.$$

Método de Euler

$$Euler_1\\left\\{\\begin{matrix} 
y_0=\alpha _0
\\\\
y_{n+1}=y_n+h \cdot v_n
\\end{matrix}\\right.$$

$$$$

$$(Euler)_2\\left\\{\\begin{matrix} 
v_0=\alpha _1
\\\\ 
v_{n+1}=v_n+h\cdot f(t_n,y_n,v_n)
\\end{matrix}\\right.$$

$$Esquema\ general \\left\\{\\begin{matrix} 
Conocidos\ \alpha _0\ y\ alpha_1
\\\\ 
y_{n+1}=y_n+h\cdot v_n
\\\\ 
v_{n+1}=v_n+h\cdot f(t_n,y_n,v_n)
\\end{matrix}\\right.$$