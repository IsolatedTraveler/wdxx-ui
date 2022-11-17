import { parallel } from "gulp";
import type { Plugin } from "rollup";
import vue from "@vitejs/plugin-vue";
import VueMacros from "unplugin-vue-macros/rollup";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import glob from "fast-glob";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild, { minify as minifyPlugin } from "rollup-plugin-esbuild";
import { rollup } from "rollup";

import { epRoot, target, generateExternal, writeBundles } from "../../utils";
import { withTaskName } from "../../utils";
import { UiPlusAlias } from "../plugins";
