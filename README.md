EmmanailStudio96 

Descripción del Proyecto

Emmanail Studio 96 es una plataforma web para un spa especializado en manicura, pedicura y depilación. Permite a los clientes explorar los servicios, conocer la empresa y gestionar sus citas de manera fácil y eficiente.

Características Principales

1. Pantalla de Inicio (Home)

Navegador principal con enlaces a las diferentes secciones de la página.

Carrusel con imágenes de los servicios ofrecidos.

Botón de Reservar Cita que redirige al sistema de reservas.

Footer con información de contacto, se verificara en las vistas para no logueados excluyendo en la de iniciar sesion no aparece.

2. Quiénes Somos

Información sobre la empresa, sus valores, misión y visión.

Teléfonos de contacto y dirección.

Botón de Reservar Cita.

3. Nuestros Servicios

Lista de servicios ofrecidos junto con sus costos.

Botón de Reservar Cita que redirige a la sección de inicio de sesión.

4. Registro de Usuarios

Formulario donde los clientes ingresan sus datos para registrarse en el sistema.

5. Iniciar Sesión

Los clientes ingresan su usuario y contraseña para acceder al sistema de reservas.

Si los datos son correctos, se redirige a una nueva pestaña con el sistema de reservas.

Sistema de Reservas

Al iniciar sesión, el usuario accede a una nueva pestaña con tres secciones principales:

1. Mi Cuenta

Muestra los datos del usuario.

Logo de la empresa.

2. Mis Reservas

Muestra las reservas activas del usuario.

Si el cliente no tiene reservas, aparece un mensaje informativo.

Cada reserva tiene un botón de Cancelar Reserva (disponible hasta un día antes de la cita, el mismo día no se puede cancelar).

Si una reserva es cancelada exitosamente, se reflejará como cancelada en el sistema.

3. Reservar Cita

Formulario para seleccionar la fecha, hora y servicio a contratar.

No se permiten reservas los fines de semana.

Navegación dentro del Sistema

El navegador incluye el logo de la empresa, el nombre del usuario y un botón de Cerrar Sesión.

Al presionar Cerrar Sesión, el usuario es redirigido de nuevo al Home.

Tecnologías Utilizadas

Frontend: React.js

Backend: Express.js con TypeScript

Base de Datos: PostgreSQL

Instalación y Configuración

Requisitos Previos

Node.js instalado

PostgreSQL configurado

Pasos para ejecutar el proyecto

Clonar el repositorio:

git clone https://github.com/pi-rym/PM3-JonhatanCorona.git

Instalar dependencias:

npm install

Configurar las variables de entorno en un archivo .env

Ejecutar el servidor:

npm run dev

Acceder a la aplicación en el navegador: http://localhost:3000

Contacto

Correo: contacto@emmanailstudio96.com

Teléfono: +123 456 7890

Dirección: Calle Principal 123, Ciudad XYZ

EmmanailStudio96 - Tu bienestar, nuestra prioridad. 💅✨



Mejoras para el Proyecto


Sistema de Notificaciones

Enviar recordatorios de citas, nuevos registros de citas y usuarios, modificaciones de citas por correo o notificaciones push.

Notificar al usuario sobre cambios en su reserva.


Gestión de Perfiles de Usuarios

Permitir a los clientes actualizar su información.

Integrar una foto de perfil.


Sistema de Reservas

Permitir al cliente modifica algun servicio contratado, la fecha y la hora.


Panel de Administración

Dashboard para gestionar citas y usuarios.

Estadísticas sobre reservas y servicios más solicitados.