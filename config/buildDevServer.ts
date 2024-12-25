import { Configuration } from "webpack";
import { buildOptions } from "./types/types";

export function buildDevServer({port}: buildOptions): Configuration["devServer"] {
    return {
        host: '192.168.1.3',
        port: port,
        open: true,
        historyApiFallback: true,
    }
}