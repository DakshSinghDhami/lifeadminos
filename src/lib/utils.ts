// Minimal class name helper — no dependencies
export function cn(
  ...inputs: Array<string | undefined | null | false | Record<string, unknown>>
): string {
  const out: string[] = [];
  for (const i of inputs) {
    if (!i) continue;
    if (typeof i === "string") {
      out.push(i);
    } else if (typeof i === "object") {
      for (const k in i) {
        if (i[k]) out.push(k);
      }
    }
  }
  return out.join(" ");
}
