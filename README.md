# Tienda de Tecnología
## Requisitos
### Tener instalado nodejs v20 o superior.
## Instrucciones

### Cree un archivo de variables de entorno .env en él ponga las siguientes variables
- **DB_HOST=** <tu_host>
- **DB_DATABASE=** plataformaReviews
- **DB_USERNAME=** <tu_usuario>
- **DB_PASSWORD=** <tu_contraseña>
- **KEY_TOKEN=** <tu_contraseña_token>
### Ejecute npm install para instalar los paquetes necesarios para el proyecto.
### Abra una terminal y ejecute tsc -w para el modo observador de Typescript
### Abra otra terminal y ejecute node ./dist/app para ejecutar el servidor

## Base de Datos

La base de datos utilizada es `plataformaReviews`, y las tablas se crean con las siguientes estructuras:

```sql
CREATE DATABASE plataformaReviews;
USE plataformaReviews;

CREATE TABLE user (
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    password VARCHAR(300) NOT NULL,
    role VARCHAR(20) DEFAULT 'user'
);

CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(500) NOT NULL,
    category VARCHAR(50) NOT NULL
);

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rating INT(2) NOT NULL ,
    comment VARCHAR(500),
);```