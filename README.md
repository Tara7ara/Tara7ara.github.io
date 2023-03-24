# Tara7ara.github.io

Esta página es un test a modo de CV.

## Lista de tareas a hacer en la pàgina

- [ ] Crear plantilla de cuerpo HTML
- [ ] Añadir navegación
- [ ] Crear estilo básico
- [ ] Y probar que todo vaya bien

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