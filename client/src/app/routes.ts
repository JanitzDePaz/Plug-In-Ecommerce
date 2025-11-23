import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("./routes/Inicio.tsx"),
    route("Tienda", "./routes/Tienda.tsx")
] satisfies RouteConfig;
