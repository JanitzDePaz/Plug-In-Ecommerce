import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("./routes/Inicio.tsx"),
    route("Tienda", "./routes/shop/Tienda.tsx"),
    route("DetallesDelProducto/:productName", "./routes/shop/ProductPage.tsx")
    
] satisfies RouteConfig;
