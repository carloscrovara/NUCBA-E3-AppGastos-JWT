# App de Gastos - Auth

### Alumno: Carlos Crovara

### Camada NUCBA: 2317

## Instrucciones de instalación

```
git clone https://github.com/carloscrovara/NUCBA-E3-AppGastos-JWT.git

npm install

crear archivo .env con las variables de entorno (conexión a bases de datos y valores de access y refresh secret tokens)

npx prisma generate

npm run dev

en Postman importar la colección de requests que se encuentra en la carpeta postman del proyecto
```

## Funcionalidades principales

-> Registro y login de usuarios.

-> Creación, modificación y eliminación de un gasto de un usuario logueado.

-> Consulta de todos los gastos de un usuario. 

-> Consulta de un gasto en particular de un usuario.

-> Consulta de gastos de un usuario en un rango de fechas determinado. 

-> Consulta del total de gastos de un usuario en un rango de fechas establecido. 