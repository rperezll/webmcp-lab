export const installPolyfill = () => {
  if (!navigator.modelContext) {
    console.log(
      "⚠️ WebMCP compatible no compatible con el navegador actual. Activando Polyfill local para desarrollo.",
    );

    const toolRegistry = new Map();

    navigator.modelContext = {
      _tools: toolRegistry,
      registerTool: async (tool: any) => {
        console.log(
          `[WebMCP Polyfill] Registrando herramienta: "${tool.name}"...`,
          `   └─ Descripción: ${tool.description.substring(0, 50)}...`,
        );

        toolRegistry.set(tool.name, tool);
        return Promise.resolve();
      },

      simulate: async (toolName: string, params: any) => {
        const tool = toolRegistry.get(toolName);
        if (!tool) throw new Error(`Herramienta ${toolName} no encontrada`);
        return tool.execute(params);
      },
    };
  } else {
    console.log("🟢 WebMCP compatible con el navegador actual");
  }
};
