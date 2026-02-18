# WebMCP Lab

> **[Febrero de 2026]** El uso de esta utilidad requiere de una versión _Canary_ de Google Chrome (versión 146 o superior) con los flags correspondientes activados (**WebMCP for testing**). Para las pruebas, utilizaremos nuestra herramienta WebMCP a través de la extensión [Model Context Tool Inspector](https://github.com/beaufortfrancois/model-context-tool-inspector), lo que nos permitirá utilizar una API Key de Gemini gratuita.

Prototipo que demuestra el uso de **WebMCP** dentro del navegador y cómo podemos exponer, desde nuestras interfaces, herramientas utilizables por LLMs para interactuar con las opciones y flujos visualizados. Esto viene a demostrar la **ganancia de accesibilidad** dentro del marco de webs con mucha carga cognitiva donde el usuario puede sencillamente escribir o decir lo que quiere hacer y la IA interpreta y usa las herramientas disponibles para interactuar (por ejemplo tabulando un formulario). Todo esto basado en la definición estándar [Model Context Protocol (MCP)](https://modelcontextprotocol.io/specification/2025-11-25).

## Sandbox para pruebas

Para testear el alcance de esta tecnología se plantea una aplicación _legacy_ denominada "ENTERPRISE_EXPENSE_MGR_V2.EXE". Este programa, **encargado de la gestión de gastos corporativos**, presenta un formulario especialmente complejo que el usuario debe cumplimentar y validar en los diferentes tipos de entrada de datos.

<p align="center">
  <img src="/assets/webmcp-test.png" alt="Detección y prompt para ejecutar la acción de cargar un nuevo gasto" width="600">
</p>

<p align="center">
  <img src="/assets/webmcp-test2.png" alt="Uso de la tool por parte de un LLM para tabular el formulario" width="600">
</p>

## Ejecutar el entorno

> Construido sobre **Node 22**.

```bash
cd sandbox
```

```bash
# Instalamos dependencias
npm i
```

```bash
# Ejecutamos la aplicación en modo desarrollo
npm run dev
```

> Puedes ver la definción de la tool en el [schema.ts](/sandbox/src/schema.ts).

# Referencias

- **Documentación de WebMCP:** https://github.com/webmachinelearning/webmcp
