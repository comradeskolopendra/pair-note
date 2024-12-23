import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "config-types";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: 3000,
        open: true,
        historyApiFallback: true,
    }
}