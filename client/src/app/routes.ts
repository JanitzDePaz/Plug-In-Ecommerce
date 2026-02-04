import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("./routes/Inicio.tsx"),
    route("tienda", "./routes/shop/Tienda.tsx"),
    route("detallesDelProducto/:slug", "./routes/shop/ProductPage.tsx")
    
] satisfies RouteConfig;
