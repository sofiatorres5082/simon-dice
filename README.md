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

## Instalación

1. **Clonar el Repositorio:**

```bash
git clone https://github.com/sofiatorres5082/simon-dice.git
```

2. **Navegar al Directorio del Proyecto**

```bash
cd simon-dice
 ```

3. **Instalar las Dependencias**

```bash
npm install
```

4. **Iniciar el Servidor de Desarrollo**

```bash
npm run dev
 ```
