# Página de Adopción de Mascotas 

## Descripción del Proyecto

Este proyecto es una página web de adopción de mascotas. Los usuarios pueden explorar una lista de perros disponibles para adopción, ver detalles específicos de cada mascota y agregar sus perros favoritos a una lista personal de favoritos.

La aplicación consume datos desde la API de [huachitos.cl](https://huachitos.cl/api/animales/tipo/perro), lo que permite mantener actualizada la lista de perros disponibles en tiempo real.

### Funcionalidades Principales

**Visualización de Perros Disponibles**:
   - La página muestra una lista de perros obtenidos de la API de (https://huachitos.cl/api/animales/tipo/perro). 
   - Cada perro se presenta con su imagen, nombre, edad, géneroy una breve descripción.

**Agregar a Favoritos**:
   - Los usuarios pueden seleccionar perros y añadirlos a una lista de favoritos.
   - Esta lista se puede ver en una sección separada, lo que facilita la revisión de las mascotas seleccionadas para adopción futura.

**Detalles de la Mascota**:
   - Al hacer clic en una mascota, se muestra información detallada sobre ella, incluyendo su raza, fecha de nacimiento y una breve descripción.

**Eliminación de Favoritos**:
   - Los usuarios pueden eliminar mascotas de la lista de favoritos en cualquier momento, manteniendo la lista actualizada según sus preferencias.

### Componentes y Servicios

#### Componentes principales

- **`RefugioPatitasAdoptComponent`**:
  - Componente principal que muestra la lista de perros disponibles para adopción.
  - Utiliza el servicio `PetDataService` para obtener la información de los perros desde la API.

- **`CartComponent`**:
  - Componente que muestra la lista de perros favoritos seleccionados por el usuario.
  - Permite eliminar perros de la lista de favoritos.

#### Servicios

- **`PetDataService`**:
  - Servicio encargado de realizar las peticiones a la API de (https://huachitos.cl/api/animales/tipo/perro).
  - Obtiene la lista de perros y maneja los datos necesarios para los componentes.

- **`PetCartService`**:
  - Servicio que gestiona la lista de mascotas favoritas.
  - Permite añadir y eliminar mascotas de la lista de favoritos y mantener el estado actualizado.

### API Utilizada

- **API de Huachitos**:
  - La aplicación se conecta a la API de [huachitos.cl](https://huachitos.cl/api/animales/tipo/perro) para obtener los datos de los perros.
  - La API proporciona información en formato JSON que incluye detalles como el nombre, edad, raza y otros atributos de cada perro.
    
    
### Enlace a StackBlitz 

- Visualizar el proyecto en línea a través del siguiente enlace: [(https://stackblitz.com/~/github.com/griseldaalegre/proyecto-seminario-angular)]

- **Datos de alumno** 
* Nombre y Apellido: Griselda Daiana Alegre
*  DNI: 39922063
*  Email: alegregriselda5@gmail.com
*  Sede: Tandil.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
