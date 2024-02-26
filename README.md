# Fleet Management Software API NodeJS Sample Implementation

## Introducción

Este proyecto es una implementación de
[Fleet Management Software API](https://github.com/Laboratoria/curriculum/tree/main/projects/05-fleet-management-api)
en NodeJS, orientada a implementar los proyectos de **DevOps**.
Actualmente, solo se ha implementado el endpoint
[GET /taxis](https://app.swaggerhub.com/apis-docs/ssinuco/FleetManagementAPI/2.0.0#/taxis/getTaxi)
sin autenticación.

## ¿Cómo ejecutar este proyecto?

1. **Configurar la base de datos**:
   - Necesitas una base de datos PostgreSQL en Vercel con al menos la tabla `taxis`. 
   - Puedes crear esta base de datos siguiendo los
   [pasos 2, 3 y 4](https://github.com/Laboratoria/curriculum/tree/main/projects/05-fleet-management-api#8-pistas-tips-y-lecturas-complementarias)
   de la sección "8. Pistas, tips y lecturas complementarias"
   del README de Fleet Management Software API.

2. **Configurar variables de entorno**:
   - Renombra el archivo `.env.sample` a `.env`.
   - Modifica el valor de la variable de entorno `DATABASE_URL` con la información proporcionada por Vercel.
   - Opcionalmente, puedes cambiar la variable de entorno `PORT` para especificar el puerto en el que la API escuchará peticiones HTTP. Esto es importante al desplegar la API en la nube en proyectos de **DevOps**.

3. **Instalar dependencias**:
   - Ejecuta el comando `npm install` en una terminal para instalar las dependencias necesarias.

4. **Iniciar la aplicación**:
   - Ejecuta el comando `npm run dev` en una terminal para iniciar la aplicación en modo desarrollo.

   Puedes probar la aplicación haciendo una petición GET a `http://localhost:PORT/taxis`,
   reemplazando `PORT` por el valor de la variable de entorno `PORT` en el archivo `.env`.
   Si la aplicación se está ejecutando correctamente, deberías obtener como respuesta un array
   JSON con 10 registros de la tabla `taxis` de la base de datos configurada en Vercel.

## ¿Cómo compilar este proyecto?

- Para compilar el proyecto, ejecuta el comando `npm run build` en una terminal. El resultado
  de la compilación estará en la carpeta `build`.
- Para probar la aplicación compilada, ejecuta el comando `npm run start` en una terminal.
