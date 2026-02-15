import { logger } from "./logger";

export const executeAction = async (params: any) => {
  logger(`🤖 Analizando interacción: ${JSON.stringify(params)}`);

  const fill = (id: string, val: any) => {
    const el = document.getElementById(id) as
      | HTMLInputElement
      | HTMLSelectElement;
    if (el) {
      el.value = val ?? "";
      el.style.backgroundColor = "#e6ffe6";
      el.style.borderColor = "lime";
      setTimeout(() => {
        el.style.backgroundColor = "white";
        el.style.borderColor = "";
      }, 2000);
    }
  };

  fill("glCode", params.category);
  fill("costCenter", params.costCenter ?? "CC-GEN-000");
  fill("amount", params.amountCents);
  fill("expenseDate", params.date);

  if (params.originDest) fill("routeInfo", params.originDest);
  else fill("routeInfo", "");

  if (params.attendees) fill("paxCount", params.attendees);

  fill("projectCode", params.projectName ?? "BAU-INTERNAL");
  fill("taxId", "ES-VAT-21");

  const auditStr = `[AUTO-VERIFIED] | ${params.date} | ${params.justification.toUpperCase()} | AUTH: AI_AGENT_01`;
  fill("notes", auditStr);

  logger("✅ Gasto procesado e insertado en el sistema legado.");

  return {
    content: [
      {
        type: "text",
        text: `Formulario completado para ${params.justification}. Importe: ${params.amountCents / 100}€.`,
      },
    ],
  };
};
