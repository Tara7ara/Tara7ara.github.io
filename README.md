# Tara7ara.github.io
Cyberseguridad: Llenguatge de Marques, con el profesor Rafa Laguna

**Recordatorio** de subir las cosas al GitHub: 
* git add -A . (para añadir los camios al git)
* git commit -m "" (las comillas es donde hay que poner titulo)
* git push (para subirlo al github)
* git pull (por si hemos trabajado desde casa)
* git clone (por si no tenemos el repositorio en donde estamos trabajando)

## Lenguaje de marcas

**Lenguaje de marcas** es un lenguaje que marca los contenidos por lo que son.

**NO** clasifica, almacena y transporta datos.

## XML

```XML 
<?xml version="1.0" enconding="UTF-8" ?>
<!-- COMENTARIO -->
<character>
	<name>Nombre</name>
	<surname>Apellido</surname>
	<age years="0" />
</character>
```

### Resumen

**XML** o **Lenguaje de Marcas Extensible**, es un lenguaje que describe y estructura super bien el contenido. 

Cuando abrimos un archivo **XML** al principio del codigo tendremos que poner → \<?xml version="1.0" enconding="UTF-8" ?>
Que básicamente dice que es un archivo *XML* con la codificación *UTF-8*.

Todo archivo XML, necesita una **etiqueta raíz**, una etiqueta donde dependen el resto de elementos, lo ideal es que represente algo y toda etiqueta raíz debe cerrarse. 

### Como usar XML

* Etiquetas pares:
	* Se abren y cierran, Cuando lo que tenemos que escribir es muy variable, puede ser par (character por ejemplo, o cuando algo vaya a contener muchos datos)
* Etiquetas impares:
	* Se cierran en sí mismas. Por ejemplo la edad, es una cosa muy concreta, entonces es recomendable hacerla impar.

Para comentar: \<!-- COMENTARIO -->

Una [WEB](https://desarrolloweb.com/manuales/18) o esta otra [WEB](https://aws.amazon.com/es/what-is/xml/) que explica todo de forma resumida.

## DTD

```DTD
<!ELEMENT character (name, surname?, age> <!-- el ? es que puede estar o no -->
<!ELEMENT name(#PCDATA)>
<!ELEMENT surname(#PCDATA)>
<!ELEMENT age EMPTY> <!-- algo o nada -->


<!ATTLIST character id_charater CDATA #REQUIRED>
<!ATTLIST age years CDATA #REQUIRED>
```

Este **DTD**, es una continuación del **XML** anterior.

### Resumen

Todo archivo DTL, necesita una **archivo XML**, ya que el DTL "clasifica" las etiquetas de XML, más bien dicho, los clasifica.

### Explicación de las etiquetas

* Primera etiqueta:
	* En esta etiqueta tenemos que poner la clasificación general de XML, que en este caso es character y poner las sub etiquetas que despues las tendremos que poner.
* Las demás etiquetas: 
	* Las subetiquetas que hemos puesto anteriormente, hay que poner cada uno de los puestos.
	
**Las demás etiquetas** se pueden clasificar en dos:

* <!ELEMENT> Es la declaración de un elemento, y puede tener las siguientes subcategorias:
	* **USO**: \<!ELEMENT nombre_elemento (modelo_contenido)>
	* (#PCDATA) → **parsed character data**, es texto plano interpretado
	* EMPTY → Es un elemento que dice que no puede tener un hijo de categoria.

	* Sufijos que pueden tener las etiquetas <!ELEMENT>:

> | sufijo | Significado |  
> | --- | --- | 
> | ? | El elemento puede tener una o ninguna subcategoria, pero nunca más de una |
> | * | El elemento puede tener cero o más subcategorias |
> | + | El elemento puede debe tener al menos una subcategoria, pero puede tener más |

* <!ATTLIST> Es la declaración de una lista de atributos. Puede contener lo siguiente:
	* **USO**: \<!ATTLIST nombre_elemento	nombre_atributo    valor_atributo    valor_defecto> Todos estos valores, pueden estar o no estar.
	* \#REQUIRED: Es obligatorio el atributo.

Para comentar: \<!-- COMENTARIO -->

Una [WEB](http://codexexempla.org/articulos/2008/index.php) de donde he sacado la información.

## HTML

**HTML** → Hyper Text Markup Language, fue creado en el 1993 (mientras que el HTTP fue creado en el 1991).

Se dice que **Tim Berners-Lee** fue el creador de HTTP y por consecuencia HTML.

HTML fue muy importante ya que antes del 1991 no havia manera de tener una comunicación estandar, y HTML es importante ya que es un estandar de comunicación y por eso fue revolucionario.

En esta asignatura aprenderemos HTML5, que es html Life Scheme.

``` HTML
<!DOCTYPE html>
<html>
<head>
	<title> Martí Tarrasón: Alumne de Cyber de ENTI</title>	
</head>

<body>

	<header>
		<h1><a href="index.html">Martí Tarrasón</a></h1>
		<p>Alumne de Enti, hacker en los tiempos libres</p>
	</header>

	<nav>
		<ul>
			<li><a href="cv.html><abbr title="Curriculum Vitae">CV</abbr></a></li>
			<li><a href="hobbies.html><abbr title="Hobbies de Martí">Hobbies</abbr></a></li>
			<li><a href="contacto.html><abbr title="Contacto,contactame">Contacto</abbr></a></li>
		</ul>
	</nav>

	<main>
		<h2>Estudiante en:</h2>
		<p>ENTI, Escoles Noves Tecnologíes de la Informació</h2>
		
		<blockquote>
		El conocimiento es poder. <em>Francis Bacon</em>
		</blockquote>
		
		<h2>Ficha</h2>
		<p><img src="https://d273yxk2oj202w.cloudfront.net/upldr/enti-classlife-education/2023/03/07/minithumbnail/qweqweqew.webp" alt="Foto de perfil de Classlife"></p>
	
		<h3>Asignaturas</h3>
		<ol>
			<li> Implantació de sistemes operatius (Rafa Laguna Corripio)</li>
				<ul>
					<li>Instal·lació, configuració i explotació del sistema informàtic </li>
					<li>Gestió de la informació i de recursos en una xarxa </li>
					<li>Implantació de programari específic </li>
					<li>Seguretat, rendiment i recursos </li>
				</ul>
		</ol>
	</main>

	<footer>
		<h2>Información extra<h2>
		<p>Taratara (c) 2023</p>
	</footer>

</body>
</html>
```

**APUNTES**

Las etiquetas son como XML y DTD, se abren y se tienen que cerrarse.

Si no se entiende los apuntes, puedes mirar el archivo index.html para que se pueda ver que es lo que hace y como se usan bien las etiquetas.

Tambien hay etiquetas que no he hablado aqui pero en el archivo nombrado anteriormente se puede ver lo que hace.

* En cada html, necesita su etiqueta raiz, que en este caso es ```<html>```
* Para poner un titulo se usa ```<title>```
* Para la cabezera del html se usa ```<head>```
* Para el cuerpo de html se usa ```<body>```
* Para poner un titulo se usa ```<h1> <h2>```
* Para poner un texto de forma normal se usa ```<p>```
* Para poner el texto en nergita se usa ```<strong>```
* Para poner el texto en cursiva se usa ```<em>```
* Para hacer una lista primero se usa ```<ol>``` (ordenate list) o ```<ul>``` (uordenate list) y despues ```<li>``` para cada linea de la lista
* Para poner una etiqueta cringe se usa ```<marquee>``` o ```<blink>``` pero esta ultima ya no funciona
* Para poner un link se usa ```<a>```
* Para poner una imagen se usa ```<img>```
	* Se puede poner un link en la img usando ```<a>```
	* Se puede poner un id para clasificar cada img ```<id="name">```
	* Por si no carga se usa, o para que los ciegos sepan que es ```<alt="name">```
	* Tendriamos que poner un titulo a la imagen para que cuando tengamos al raton en la imagen, salga una descripcion ```<title="name">```
* Para comentar se usa ```<!-- -->```
* Para citar un comentario se usa ```<blockquote>```

**RECORDATORIO**, si estas en firefox, y el html esta bien hecho, hacemos control+u y saldra una ventana extra con el html.

---

**Pequeño inciso**

www.google.es 

* \.es → TLD, Top Level Domain: es el dominio
* www. → World Wide Web: no es un protocolo, es la red ancha del mundo, ahora ya no hace falta poner, ya que el navegador se usa para navegar y no para otras cosas.

[comment]: <> (INTERNET no es igual a DOMINIOS, INTERNET es una multiredes y el DOMINIO es una red)

**RECOMENDACION DEL RAFA**, tener un dominio de *mierda* y luchar por hacer nuestras cosas.

## CSS

**CSS** = Cascada de estilos

```CSS
/*h1{
	background-color:olive;
	/* colores: se pueden poner #fa00af (hexadecimal) o color con name:
	black 	#000000 	
	silver 	#c0c0c0 	
	gray 	#808080 	
	white 	#ffffff 	
	maroon 	#800000 	
	red 	#ff0000 	
	purple 	#800080 	
	fuchsia #ff00ff 	
	green 	#008000 	
	lime 	#00ff00 	
	olive 	#808000 	
	yellow 	#ffff00 	
	navy 	#000080 	
	blue 	#0000ff 	
	teal 	#008080 	
	aqua	#00ffff
	/*
}
h2{
	color:red;
}
h3{
	background-color:aqua;
	color:pink;
}
ul{
	border:1px solid red
	/*formas de la linea: solid, dashed, dotted/*
}

```

**APUNTES**

Si no se entiende los apuntes, puedes mirar el archivo index.html para que se pueda ver que es lo que hace y como se usan bien las etiquetas.

Tambien hay propiedades que no he hablado aqui pero en el archivo nombrado anteriormente se puede ver lo que hace.

* En cada css, necesita su etiqueta raiz si lo ponemos en el mismo sitio que el html, que en este caso es ```<style>```
* Para editar una cosa del html, me tengo que referir a ello por la etiqueta, se llama selector ```h1{}```
* Para editar algo con un id, se edita de esta manera ```#name{}```
* Para editar una classe, se edita de la siguiente manera ```.name{}```
* Dentro de la "etiqueta" se puede modificar poniendo propiedades:
	* Para poner color en el texto, se puede poner colores por el nombre, o por el codigo RGB ``` color:#ffffff; ```
	* Para poner un color de fondo ``` background-color:#101010; ```
	* Para quitar la linea del link ``` text-decoration:none; ```
	* Para poner el texto en alguna parte que queremos ``` text-align:center; ```
	* Para poner una fuente en el texto ``` font-family:sans-serif; ```
	* Para editar el tamaño de la fuente ``` font-size: 10px; ```
	* Para quitar los puntos o los numeros de la lista``` list-style: none; ```
	* Para editar el tamaño del relleno, se edita por pixeles ``` padding:0 0 16px 0; ```
	* Para editar el ancho de los margenes, si solo se pone un numero se pone en los 4 lados ``` margin:1px; ```
	* Para editar la anchura del borde, para las lineas podemos poner "solid/dotted/dasehd" ``` border:1px solid grey; ```
	* Para editar el comportamiente del contenedor ``` display: flex; ```
	* Para poner un esquema de posicionamiento ``` position: fixed; ```
	* Para desplazar una caja donde queramos ``` bottom: 0; ```	
	
* Si te has dado cuenta, en css en las propiedades, se tiene que "cerrar" por cada porpiedad como en c++ ";"
* Para comentar se usa ```/* comentario */```
* Con CSS tambien se puede animar una animación, por ejemplo: 

```CSS
.dvd {
    animation: cambio-color 3s infinite;
  }

  @keyframes cambio-color {
    0% {
      color: red;
    }
    25% {
      color: blue;
    }
    50% {
      color: green;
    }
    75% {
      color: yellow;
    }
    100% {
      color: purple;
    }
  }
```

**Esquema de colores básicos**

* Color Negro: black / #000 / #000000
* Color Blanco: white / #fff / #ffffff
* Color Rojo: red / #f00 / #ff0000
* Color Azul: blue / #00f / #0000ff
* Color Amarillo: yellow / #ff0 / #ffff00
* Color Gris: gray / #808080
* Color Verde: green / #008000

Una [WEB](https://developer.mozilla.org/es/docs/Web/CSS) o otra [WEB](https://www.eniun.com/resumen-tabla-propiedades-css-valores/) o esta otra [WEB](https://cssreference.io/) de donde he sacado la información.

## MARKDOWN
Los _apuntes_ MARKDOWN

### Estilo de carácters

Cursiva: _CORRECTA_ *OTRA FORMA CORRECTA*

Negrita: **CORRECTA** __OTRA FORMA CORRECTA__

~~TACHADO~~

~~***tachado negrita y cursiva***~~

[comment]: <> (Esto es un comentario que no saldrà)
[comment]: <> (Todo se cierra desde dentro hacia fuera)

### Carácters extendidos (emojis)

:poop: :alien: :cry: :imp:

[Emojis para poner en texto](https://gist.github.com/rxaviers/7360908)

**RECUERDA**, estos emj estan para git y en pocos sitios más.

### Listas

* lista n1
	* sub apartado de la lista 1
	* otro sub apartado
* lista n2
* lista n3

### Citas

> Para escribir una cita:
>
>> Esto es una cita dentro de una cita 
>
> Continuamos con la primera cita
>
> -Taratara 2023

### Separador

---
Acabo de poner un separador

### Enlaces

Esto es un enlace a la mejor web del mundo:

[CondorChem](https://condorchem.com)

Y [ESTO](https://enti.cat) es otro enlace.

### Imagen incrustada

![programmer](https://static.vecteezy.com/system/resources/thumbnails/011/961/865/small/programmer-icon-line-color-illustration-vector.jpg)

### Ejemplo de resaltado de sintaxis

```kotlin
fun main(args: Array<String>) {
	// imprimira un Hello World
    println("Hello World")
}
```

### Listas de tareas

- [ ] Primera tarea
- [x] Segunda tarea
- [ ] Tercera tarea 

### Tablas

| id_character | name | age | level |
| ---: | ---: | ---: | ---: |
| 1 | Eustaquio | 197 | 99 |
| 2 | Mariana | 20 | 100 |
| 3 | Mortadelo | 100 | 1 |
| 4 | Messi | 44 | 32 |

[comment]: <> (Donde esten los : los numeros se alinean donde esten puestos)

### Escapar caracters

\# ejemplo de escapado

\*que en otras cosas*






























## Campos del formulario de contacto

El formulario de contacto en HTML incluye los siguientes campos:

- input type="text" name="contact_name": campo de texto para el nombre del usuario.
- input type="text" name="contact_surname": campo de texto para el apellido del usuario.
- input type="email" name="contact_email": campo de texto para el correo electrónico del usuario.
- input type="password" name="contraseña": campo de texto para la contraseña del usuario.
- input type="color" name="contact_color": campo para seleccionar el color de los ojos del usuario.
- input type="date" name="contact_date": campo para ingresar la fecha de nacimiento del usuario.
- select name="contact_zodiaco": campo de selección para elegir el signo zodiacal del usuario.
- input type="number" name="edad": campo para ingresar la edad del usuario.
- textarea name="mensaje": campo de texto para que el usuario pueda escribir un mensaje.

## Explicación del código JavaScript

He agregado un script en JavaScript que agrega un controlador de eventos al formulario de contacto tal como nos pide la tarea.
Este controlador intercepta el envío del formulario al hacer clic en el botón Enviar y evita que la página se recargue al utilizar event.preventDefault();. 
En su lugar, se ejecuta la función enviarFormulario(), que simplemente imprime "ENVIADO" en la consola.
El <script> esta al final de todo para que se ejecute cuando le doy click al boton.