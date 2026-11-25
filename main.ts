// A Wi-Fi network name that tells the neighbours a whole story about their cat.
import { mkdirSync, writeFileSync } from "node:fs";

const ssid = "Your Cat Also Eats Dinner Here";

const n = [...ssid].length;
if (n < 1 || n > 32) throw new Error(`network name is ${n} characters`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, ssid, "utf8");
