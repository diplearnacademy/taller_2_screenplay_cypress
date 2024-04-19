# Taller #2 Screenplay Web - Cypress

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Este repositorio contiene un escenario de login en Saucedemo con Screenplay y Cypress para comparar con la implementación en SerenityBDD.

## Contenido

- Automatización Screenplay Web
- Ejecución por Terminal
	

## Automatización Screenplay Web

En la rama principal encontrarás el Login. El objetivo de este ejemplo es ver una implementacion basica del Patron para realizar la misama en SerenityBDD.

## Configuración luego de clonar el proyecto y Ejecución por Terminal

Luego de clonar el proyecto, puedes ejecutar los siguientes comandos por CMD en la ruta donde se ha guardado o abrirlo en tu IDE de preferencia para luego ejecutar los comandos y que el proyecto descargue los paquetes e información necesaria para su correcta ejecución.

Instalar Cypress para que se descarguen todos los archivos necesarios para su ejecución.
```sh
npm install cypress --save-dev
```
Instalar **npx** para ejecutar comandos por consola mucho mas fácil. 

```sh
npm install -g npx
```

Confirma que todo esta funcionando correctamente lanzando el siguiente comando.
```sh
npx cypress open
```
Te deberia lanzar una ventana como la siguiente:

![](https://i.postimg.cc/RVw3Dbqz/Captura-de-pantalla-2023-09-16-012439.png)

Al dar Click, seleccionas el navegador de tu preferencia.

![](https://i.postimg.cc/FFyN5tbG/Captura-de-pantalla-2023-09-16-012546.png)

Esto abrirá tu navegador con la siguiente vista

![](https://i.postimg.cc/sxNJHH2W/Screenshot-1.png)

Y aqui solo resta darle Click al test que quieres ejecutar y este abrira tu test.

![](https://i.postimg.cc/vBjXH8Jj/Captura-de-pantalla-2023-09-16-012859.png)


### Troubleshooting
- Si tienes problemas instalando Cypress, ejecuta este comando.
```sh
npm cypress install --force
```
- Si no te deja ejecutar tus test o Cypress parece bloquearse, ejecuta este comando y luego vuelves a instalar con el comando mencionado arriba o en el punto anterior.
```sh
cypress clear cache
```
- Si no te deja ejecutar con el comando **npx cypress open** intenta con este comando.  Si tampoco funciona, reinstala Cypress nuevamente.
```sh
cypress run --browser chrome
```

Espero que el proyecto sea de ayuda. 

Cualquier cosa que requieras, no dudes en comentar, crear un issue o contactarnos, con gusto atenderé a la mayor brevedad posible.

Muchas gracias

**Happy Coding!**

***Juan de Jesús Fernández Graciano***
***Dip Learn Academy***
