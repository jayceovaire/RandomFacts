/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";
import {load} from "https://deno.land/std@0.197.0/dotenv/mod.ts";

await load()

// getting environment variables for API use
const fact_key = Deno.env.get('FACT_KEY')
export default fact_key

await start(manifest, { plugins: [twindPlugin(twindConfig)] });
