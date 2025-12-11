package com.plugin.server.controller;

import com.plugin.server.model.Product;
import com.plugin.server.model.ProductCardDTO;
import com.plugin.server.model.ProductSummaryDTO;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:5173")

public class ProductController {
        public List<Product> getAllProductsData() {
                List<Product> productList = new ArrayList<>();

                // Monitors
                // Aoc Gaming
                productList.add(new Product(
                                101,
                                "AOC Gaming 24G2SP",
                                "Monitor Gaming 24 pulgadas 165Hz.",
                                "Panel IPS con tasa de refresco de 165Hz y 1ms de respuesta. Compatible con G-Sync y FreeSync Premium.",
                                new BigDecimal("159.99"),
                                "Monitor",
                                new ArrayList<>(Arrays.asList(
                                                "/products/monitors/AOC-Gaming-24G2SP/AOC-Gaming-24G2SP-Front.png",
                                                "/products/monitors/AOC-Gaming-24G2SP/AOC-Gaming-24G2SP-Left.png",
                                                "/products/monitors/AOC-Gaming-24G2SP/AOC-Gaming-24G2SP-Right.png",
                                                "/products/monitors/AOC-Gaming-24G2SP/AOC-Gaming-24G2SP-Back.png")),
                                45,
                                "AOC",
                                10,
                                new ArrayList<>(Arrays.asList("Resolución: 1920x1080", "Refresco: 165Hz",
                                                "Panel: IPS"))));

                // Samsung Odyssey
                productList.add(new Product(
                                102,
                                "Samsung Odyssey G5",
                                "Monitor Curvo 1000R WQHD.",
                                "Sumérgete en el juego con la curvatura 1000R que coincide con el campo de visión humano. Resolución WQHD.",
                                new BigDecimal("299.00"),
                                "Monitor",
                                new ArrayList<>(Arrays.asList(
                                                "/products/monitors/samsung-odyssey-g5/samsung-odyssey-g5-Front.png",
                                                "/products/monitors/samsung-odyssey-g5/samsung-odyssey-g5-Side.png",
                                                "/products/monitors/samsung-odyssey-g5/samsung-odyssey-g5-Back.png")),
                                20,
                                "Samsung",
                                5,
                                new ArrayList<>(Arrays.asList("Resolución: 2560x1440", "Curvatura: 1000R",
                                                "Refresco: 144Hz"))));
                // 3. Dell UltraSharp
                productList.add(new Product(
                                103,
                                "Dell UltraSharp U2723QE",
                                "Monitor 4K USB-C Hub.",
                                "La mejor precisión de color con tecnología IPS Black. Conectividad masiva con USB-C Hub integrado.",
                                new BigDecimal("620.50"),
                                "Monitor",
                                new ArrayList<>(Arrays.asList(
                                                "/products/monitors/Dell-UltraSharp-U2723QE/Dell-UltraSharp-U2723QE-Front.png",
                                                "/products/monitors/Dell-UltraSharp-U2723QE/Dell-UltraSharp-U2723QE-Right.png",
                                                "/products/monitors/Dell-UltraSharp-U2723QE/Dell-UltraSharp-U2723QE-Left.png",
                                                "/products/monitors/Dell-UltraSharp-U2723QE/Dell-UltraSharp-U2723QE-BackPorts.png",
                                                "/products/monitors/Dell-UltraSharp-U2723QE/Dell-UltraSharp-U2723QE-Back.png",
                                                "/products/monitors/Dell-UltraSharp-U2723QE/Dell-UltraSharp-U2723QE-Adjustable1.png",
                                                "/products/monitors/Dell-UltraSharp-U2723QE/Dell-UltraSharp-U2723QE-Adjustable2.png")),
                                10,
                                "Dell",
                                0,
                                new ArrayList<>(Arrays.asList("Resolución: 4K 3840x2160", "Panel: IPS Black",
                                                "Conexión: USB-C 90W"))));

                // 4. BenQ Zowie
                productList.add(new Product(
                                104,
                                "BenQ ZOWIE XL2566K",
                                "Monitor eSports 360Hz TN.",
                                "Diseñado exclusivamente para competición profesional. Panel TN rápido con tecnología DyAc+.",
                                new BigDecimal("699.99"),
                                "Monitor",
                                new ArrayList<>(Arrays.asList(
                                                "/products/monitors/benq-zowie-xl2566k/benq-zowie-xl2566k-Front.png",
                                                "/products/monitors/benq-zowie-xl2566k/benq-zowie-xl2566k-Right.png",
                                                "/products/monitors/benq-zowie-xl2566k/benq-zowie-xl2566k-Left.png",
                                                "/products/monitors/benq-zowie-xl2566k/benq-zowie-xl2566k-Back.png")),
                                5,
                                "BenQ",
                                0,
                                new ArrayList<>(Arrays.asList("Refresco: 360Hz", "Panel: TN Fast",
                                                "Tecnología: DyAc+"))));

                // 5. LG Office
                productList.add(new Product(
                                105,
                                "LG 24MP400-B",
                                "Monitor IPS Full HD básico.",
                                "Diseño sin bordes en tres lados. Ideal para oficina y teletrabajo con protección ocular.",
                                new BigDecimal("99.00"),
                                "Monitor",
                                new ArrayList<>(Arrays.asList(
                                                "/products/monitors/lg-24mp400-b/lg-24mp400-b-Front.png",
                                                "/products/monitors/lg-24mp400-b/lg-24mp400-b-Right.png",
                                                "/products/monitors/lg-24mp400-b/lg-24mp400-b-Left.png",
                                                "/products/monitors/lg-24mp400-b/lg-24mp400-b-Side.png")),
                                100,
                                "LG",
                                15,
                                new ArrayList<>(Arrays.asList("Resolución: 1080p", "Panel: IPS", "Frecuencia: 75Hz"))));




                                productList.add(new Product(
            201, // ID
            "Sony WH-1000XM5", // Nombre
            "Auriculares inalámbricos con cancelación de ruido líder.", // Descripción corta
            "Experiencia de escucha inmersiva con dos procesadores para cancelación de ruido de última generación y sonido de alta resolución. Diseño ligero y cómodo.", // Descripción larga
            new BigDecimal("349.99"), // Precio
            "Auriculares", // Categoría
            new ArrayList<>(Arrays.asList( // Rutas de imágenes
                "/products/headphones/sony-xm5/sony-xm5-front.png",
                "/products/headphones/sony-xm5/sony-xm5-side.png",
                "/products/headphones/sony-xm5/sony-xm5-case.png")),
            30, // Stock
            "Sony", // Marca
            15, // Descuento (%)
            new ArrayList<>(Arrays.asList("Tipo: Over-Ear", "Cancelación de Ruido: Sí",
                                          "Conectividad: Bluetooth 5.2", "Autonomía: 30h"))));

        // 2. Apple AirPods Pro 2da Gen (In-Ear TWS)
        productList.add(new Product(
            202,
            "Apple AirPods Pro (2da Gen)",
            "Auriculares Inalámbricos True Wireless con Audio Espacial.",
            "Mejor cancelación de ruido, modo de sonido ambiente adaptativo y hasta 6 horas de autonomía con una sola carga. Chip H2 para un rendimiento superior.",
            new BigDecimal("279.00"),
            "Auriculares",
            new ArrayList<>(Arrays.asList(
                "/products/headphones/airpods-pro-2/airpods-pro-2-front.png",
                "/products/headphones/airpods-pro-2/airpods-pro-2-case.png",
                "/products/headphones/airpods-pro-2/airpods-pro-2-ear.png")),
            50,
            "Apple",
            5,
            new ArrayList<>(Arrays.asList("Tipo: In-Ear (TWS)", "Cancelación de Ruido: Adaptativa",
                                          "Chip: Apple H2", "Resistencia: IPX4"))));

        // 3. HyperX Cloud Alpha (Gaming Headset)
        productList.add(new Product(
            203,
            "HyperX Cloud Alpha",
            "Auriculares Gaming con doble cámara para PC/Consolas.",
            "Tecnología de cámara doble para mayor distinción y claridad. Almohadillas de espuma viscoelástica y estructura de aluminio duradera.",
            new BigDecimal("89.99"),
            "Auriculares",
            new ArrayList<>(Arrays.asList(
                "/products/headphones/hyperx-alpha/hyperx-alpha-front.png",
                "/products/headphones/hyperx-alpha/hyperx-alpha-mic.png",
                "/products/headphones/hyperx-alpha/hyperx-alpha-side.png")),
            40,
            "HyperX",
            10,
            new ArrayList<>(Arrays.asList("Tipo: Over-Ear (Con cable)", "Micrófono: Desmontable con Cancelación de Ruido",
                                          "Drivers: Doble Cámara", "Plataforma: Multiplataforma"))));

        // 4. Bose QuietComfort Ultra (Over-Ear con Gran Comodidad)
        productList.add(new Product(
            204,
            "Bose QuietComfort Ultra",
            "La mejor cancelación de ruido de Bose con un ajuste increíble.",
            "Sonido inmersivo y personalizado con tecnología CustomTune. Ideales para viajes largos gracias a su excepcional comodidad y rendimiento ANC.",
            new BigDecimal("429.95"),
            "Auriculares",
            new ArrayList<>(Arrays.asList(
                "/products/headphones/bose-qc-ultra/bose-qc-ultra-front.png",
                "/products/headphones/bose-qc-ultra/bose-qc-ultra-folded.png")),
            15,
            "Bose",
            0,
            new ArrayList<>(Arrays.asList("Tipo: Over-Ear", "Cancelación de Ruido: Lider en la Industria",
                                          "Tecnología: QuietComfort", "Plegables: Sí"))));

        // 5. Samsung Galaxy Buds2 Pro (In-Ear Económicos)
        productList.add(new Product(
            205,
            "Samsung Galaxy Buds2 Pro",
            "TWS pequeños con sonido Hi-Fi de 24 bits.",
            "Diseño ergonómico y compacto para un ajuste cómodo. Audio de alta fidelidad con cancelación de ruido inteligente (ANC).",
            new BigDecimal("129.99"),
            "Auriculares",
            new ArrayList<>(Arrays.asList(
                "/products/headphones/galaxy-buds2-pro/buds2-pro-case.png",
                "/products/headphones/galaxy-buds2-pro/buds2-pro-open.png")),
            60,
            "Samsung",
            20,
            new ArrayList<>(Arrays.asList("Tipo: In-Ear (TWS)", "Sonido: Hi-Fi 24-bit",
                                          "Batería: 5h (ANC on)", "Compatibilidad: Android/iOS"))));
                return productList;
        }

        @GetMapping
        public List<ProductCardDTO> getAllProductsCardsDTO() {
                List<Product> products = getAllProductsData();
                List<ProductCardDTO> productCardsDTOList = new ArrayList<>();

                for (Product product : products) {
                        ProductCardDTO productCardDTO = new ProductCardDTO();
                        productCardDTO.setId(product.getId());
                        productCardDTO.setCategory(product.getCategory());
                        productCardDTO.setName(product.getName());
                        productCardDTO.setSlug(product.getSlug());
                        productCardDTO.setPrice(product.getPrice());
                        productCardDTO.setImgUrl(product.getMainImg());
                        productCardDTO.setRate(product.getRate());
                        productCardDTO.setEstimateDeliveryDays(product.getEstimateDeliveryDays());
                        productCardDTO.setActive(product.getActive());
                        productCardDTO.setDiscount(product.getDiscount());
                        productCardsDTOList.add(productCardDTO);
                }
                ;

                return productCardsDTOList;
        }

        @GetMapping("/{slug}")
        public ProductSummaryDTO getProductsSummaryDTO(@PathVariable String slug) {
                List<Product> products = getAllProductsData();
                ProductSummaryDTO productSummaryDTO = new ProductSummaryDTO();

                for (Product product : products) {
                        if (product.getSlug().equals(slug)) {
                                productSummaryDTO.setId(product.getId());
                                productSummaryDTO.setName(product.getName());
                                productSummaryDTO.setSlug(product.getSlug());
                                productSummaryDTO.setLongDescription(product.getLongDescription());
                                productSummaryDTO.setPrice(product.getPrice());
                                productSummaryDTO.setCategory(product.getCategory());
                                productSummaryDTO.setRate(product.getRate());
                                productSummaryDTO.setEstimateDeliveryDays(product.getEstimateDeliveryDays());
                                productSummaryDTO.setImgUrl(product.getImgUrl());
                                productSummaryDTO.setMainImg(product.getMainImg());
                                productSummaryDTO.setActive(product.getActive());
                                productSummaryDTO.setStock(product.getStock());
                                productSummaryDTO.setBrand(product.getBrand());
                                productSummaryDTO.setDiscount(product.getDiscount());
                                productSummaryDTO.setSpecifications(product.getSpecifications());

                        }
                }
                ;
                return productSummaryDTO;
        }
}