package com.plugin.server.controller;

import com.plugin.server.model.Product;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.ArrayList;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:5173")

public class ProductController {
    @GetMapping
    public List<Product> getProducts() {
        List<Product> productList = new ArrayList<>();

        // Seeder de Monitores
        productList.add(new Product(1, "LG 27\" 27G411A-B",
                "Monitor IPS de 27 pulgadas Full HD con tasa de refresco de 100Hz. Ideal para productividad y gaming casual con tecnología AMD FreeSync.",
                95, "Monitor", "monitor.png", false));

        productList.add(new Product(2, "LG 24\" 24G411A-B Full HD",
                "Pantalla compacta de 24 pulgadas con bordes ultrafinos y panel IPS. Ofrece colores vivos y tiempos de respuesta rápidos de 1ms (MBR).",
                79, "Monitor", "monitor.png", false));

        productList.add(new Product(3, "AOC Full HD",
                "Monitor versátil 1080p con perfil delgado y gestión de cables integrada. Perfecto para oficinas domésticas gracias a su tecnología LowBlue.",
                85, "Monitor", "monitor.png", false));

        productList.add(new Product(4, "Philips Full HD",
                "Calidad de imagen nítida con tecnología SmartContrast para negros profundos. Diseño elegante texturizado con altavoces integrados.",
                60, "Monitor", "monitor.png", false));

        productList.add(new Product(5, "MSI MAG 272F 27\" Full HD",
                "Diseñado para eSports con 180Hz de refresco y panel Rapid IPS. Tiempo de respuesta de 0.5ms para una ventaja competitiva real.",
                109, "Monitor", "monitor.png", false));

        productList.add(new Product(6, "Lenovo L24i-4A Full HD",
                "Estética moderna con soporte metálico minimalista y pantalla de 24 pulgadas. Panel IPS con cobertura de color sRGB del 99% para creadores.",
                84, "Monitor", "monitor.png", false));

        productList.add(new Product(7, "Samsung Odyssey G5 G50D",
                "Experiencia inmersiva QHD con panel IPS de alta fidelidad y 165Hz. Compatible con G-Sync para un juego fluido sin interrupciones visuales.",
                159, "Monitor", "monitor.png", false));

        productList.add(new Product(8, "Acer Nitro VG270 27\" 144Hz",
                "Monitor gaming robusto con 144Hz y tecnología Radeon FreeSync. Diseño ZeroFrame que maximiza el área de visión.",
                75, "Monitor", "monitor.png", false));

        productList.add(new Product(9, "AOC Full HD (Neobyte)",
                "Solución económica y eficiente con resolución 1920x1080 y panel LED. Incluye modos de ahorro de energía y conectividad HDMI estándar.",
                80, "Monitor", "monitor.png", false));

        productList.add(new Product(10, "Lenovo 27\" Legion R27s Gaming",
                "Monitor de alto rendimiento con tasa de refresco overclockeable a 180Hz. Soporte LTPS ajustable en altura y pivotante para ergonomía total.",
                119, "Monitor", "monitor.png", false));

        productList.add(new Product(11, "Xiaomi Monitor A24i",
                "Cuerpo ultrafino de 7.5mm con resolución FHD y tasa de refresco de 100Hz. Calibración de color profesional Delta E < 2 de fábrica.",
                64, "Monitor", "monitor.png", false));

        productList.add(new Product(12, "AOC 27\" QHD q27g4xf",
                "Resolución Quad HD (2K) para un detalle gráfico superior en 27 pulgadas. Panel Fast IPS de 180Hz para una claridad de movimiento excepcional.",
                118, "Monitor", "monitor.png", false));

        productList.add(new Product(13, "AOC Full HD (Fibra VIGO)",
                "Monitor básico fiable con panel anti-reflejos y buena luminosidad. Una opción sólida para tareas administrativas y navegación web diaria.",
                86, "Monitor", "monitor.png", false));

        productList.add(new Product(14, "ASUS VY279HGE 27\" Full HD",
                "Tecnología Eye Care Plus con tratamiento antibacteriano patentado en los biseles. Panel IPS de 144Hz suave ideal para salud visual.",
                168, "Monitor", "monitor.png", false));

        productList.add(new Product(15, "AOC Gaming 24G2U 24\" LED IPS 144Hz",
                "El estándar calidad-precio: 144Hz, 1ms y panel IPS con colores precisos. Incluye hub USB integrado y soporte totalmente ajustable.",
                40, "Monitor", "monitor.png", false));

        productList.add(new Product(16, "LG Monitor Carrefour",
                "Monitor todo terreno para uso multimedia y ofimática con estabilizador de negros. Panel resistente con buena reproducción de color y montaje VESA.",
                143, "Monitor", "monitor.png", false));

        productList.add(new Product(17, "LG Monitor Neobyte",
                "Pantalla eficiente con modo de lectura dedicado y protección contra parpadeo. Conexión sencilla Plug & Play para cualquier escritorio.",
                91, "Monitor", "monitor.png", false));

        productList.add(new Product(18, "ASUS ROG Strix Gaming",
                "Monitor premium ROG con iluminación Aura Sync y especificaciones de torneo. Rendimiento térmico avanzado y precisión de color profesional.",
                219, "Monitor", "monitor.png", false));

        productList.add(new Product(19, "Acer SA243YP1BI 24\" Full‑HD 144Hz",
                "Perfil ultra delgado que ocupa el mínimo espacio en el escritorio. Tasa de refresco mejorada de 100Hz para transiciones suaves.",
                79, "Monitor", "monitor.png", false));

        productList.add(new Product(20, "Philips 24\" Full HD",
                "Imágenes panorámicas con panel VA para un alto contraste estático. Tecnología Flicker-Free para reducir la fatiga ocular durante horas.",
                65, "Monitor", "monitor.png", false));

        return productList;
    }

}