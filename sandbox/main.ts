import { executeAction } from "./src/action";
import { logger } from "./src/logger";
import { installPolyfill } from "./src/polyfill";
import { descriptionPrompt } from "./src/prompt";
import { inputSchema } from "./src/schema";

installPolyfill();

const toolDefinition = {
  name: "fill_corporate_expense_v2",
  description: descriptionPrompt,
  inputSchema,
  execute: executeAction,
};

setTimeout(async () => {
  if (navigator.modelContext) {
    try {
      await navigator.modelContext.registerTool(toolDefinition);
      logger("🟢 Sistema conectado y listo para comenzar.");
    } catch (e) {
      logger("🔴 Error: " + e);
    }
  } else {
    logger("⚠️ WebMCP no detectado.");
  }
}, 1000);
