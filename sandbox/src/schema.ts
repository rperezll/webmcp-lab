export const inputSchema = {
  type: "object",
  properties: {
    category: {
      type: "string",
      enum: ["TRV-01", "TRV-02", "ACC-50", "FOD-99", "EQP-X5", "MSC-00"],
      description: "Código GL según el tipo de gasto",
    },
    costCenter: {
      type: "string",
      enum: ["CC-MK-2026", "CC-DEV-001", "CC-GEN-000"],
      description: "Centro de coste imputable",
    },
    amountCents: { type: "integer" },
    date: { type: "string", description: "Fecha del gasto (YYYY-MM-DD)" },
    justification: { type: "string" },
    originDest: {
      type: "string",
      description: "Origen y Destino (solo viajes)",
    },
    attendees: {
      type: "integer",
      description: "Número de personas (solo comidas)",
    },
    projectName: {
      type: "string",
      description: "Nombre del proyecto o código interno",
    },
  },
  required: ["category", "amountCents", "justification", "date"],
};
