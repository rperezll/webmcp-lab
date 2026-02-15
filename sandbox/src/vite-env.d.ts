/// <reference types="vite/client" />

interface Window {
  ai: any;
}

interface Navigator {
  modelContext: {
    registerTool(tool: any): Promise<void>;
    _tools?: Map<any, any>;
    simulate?: (name: string, params: any) => Promise<any>;
  };
}
