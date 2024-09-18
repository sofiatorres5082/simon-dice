# Juego de Patrón de Memoria en React

## Descripción

El "Juego de Patrón de Memoria" es una implementación en React del clásico juego "Simon Says". Los jugadores deben memorizar y repetir un patrón de colores que se muestra en secuencia. Cada vez que el jugador repite correctamente el patrón, se agrega un nuevo paso, aumentando la dificultad. Si el jugador comete un error, el juego termina y se muestra la puntuación obtenida.

## Características

- **Interfaz de Usuario:** Botones de colores que se iluminan en secuencia.
- **Lógica del Juego:** Genera y muestra una secuencia de botones. Los jugadores deben repetir la secuencia correctamente para avanzar.
- **Nivel de Dificultad Progresiva:** La secuencia se vuelve más larga y más rápida con cada acierto.
- **Reinicio del Juego:** Opción para reiniciar el juego tras una derrota.
- **Manejo de Estado con React:** Utiliza `useState` y `useEffect` para gestionar el estado del juego.
- **Diseño Responsivo:** Adaptado para verse bien en dispositivos móviles y pantallas de escritorio.

## Requisitos

- Node.js (v16 o superior)
- npm (v7 o superior) o Yarn

## Instalación

1. **Clonar el Repositorio:**

   ```bash
   git clone https://github.com/sofiatorres5082/simon-dice.git

   ```

2. **Navegar al Directorio del Proyecto**

cd simon-dice

3. **Instalar las Dependencias**

npm install

4. **Iniciar el Servidor de Desarrollo**

npm run dev

## Estructura del Proyecto

src/: Contiene todos los archivos fuente de React.
Button.js: Componente de botón del juego.
Modal.js: Componente de modal utilizado para mostrar mensajes y configuraciones.
Game.js: Componente principal del juego que maneja la lógica y el estado.
public/: Contiene archivos estáticos como imágenes y el archivo index.html.
package.json: Archivo de configuración del proyecto con las dependencias y scripts.
README.md: Este archivo
