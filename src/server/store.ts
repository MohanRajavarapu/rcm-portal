import path from "node:path";
import { mkdir, readFile, writeFile } from "node:fs/promises";

const dataDir = () => path.join(process.cwd(), ".data");

export async function readJsonArray<T>(file: string): Promise<T[]> {
  const full = path.join(dataDir(), file);
  try {
    const raw = await readFile(full, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch {
    return [];
  }
}

export async function appendJsonRecord<T>(file: string, record: T): Promise<void> {
  const dir = dataDir();
  await mkdir(dir, { recursive: true });
  const full = path.join(dir, file);
  const existing = await readJsonArray<T>(file);
  existing.push(record);
  await writeFile(full, `${JSON.stringify(existing, null, 2)}\n`, "utf8");
}
