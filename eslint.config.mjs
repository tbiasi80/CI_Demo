import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: globals.node },
    rules: { 
      "no-console": "warn", //Regola per avvisare il caso di presenza di messaggi di console.log con un warning durante il check
      "prefer-const": "error" //Regola per dare errore se si dichiara una variabile con let ma non viene mai riassegnata, suggerendo di usare const al suo posto.
    }
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
]);
