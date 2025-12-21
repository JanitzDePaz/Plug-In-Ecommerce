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
            "Headphone", // Categoría
            new ArrayList<>(Arrays.asList( // Rutas de imágenes
                "/products/headphones/sony-xm5/sony-xm5-Front.png",
                "/products/headphones/sony-xm5/sony-xm5-Data.png",
                "/products/headphones/sony-xm5/sony-xm5-Side.png")),
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
            "Headphone",
            new ArrayList<>(Arrays.asList(
                "/products/headphones/airpods-pro-2/airpods-pro-2-Front.png",
                "/products/headphones/airpods-pro-2/airpods-pro-2-Side.png",
                "/products/headphones/airpods-pro-2/airpods-pro-2-Ear.png")),
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
            "Headphone",
            new ArrayList<>(Arrays.asList(
                "/products/headphones/hyperx-alpha/angle.png",
                "/products/headphones/hyperx-alpha/front.png",
                "/products/headphones/hyperx-alpha/mic.png")),
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
            "Headphone",
            new ArrayList<>(Arrays.asList(
                "/products/headphones/bose-qc-ultra/angle.png",
                "/products/headphones/bose-qc-ultra/front.png",
                "/products/headphones/bose-qc-ultra/side.png")),
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
            "Headphone",
            new ArrayList<>(Arrays.asList(
                "/products/headphones/galaxy-buds2-pro/case.png",
                "/products/headphones/galaxy-buds2-pro/open.png",
                "/products/headphones/galaxy-buds2-pro/front.png")),
            60,
            "Samsung",
            20,
            new ArrayList<>(Arrays.asList("Tipo: In-Ear (TWS)", "Sonido: Hi-Fi 24-bit",
                                          "Batería: 5h (ANC on)", "Compatibilidad: Android/iOS"))));
                                          
                
                // 1. Shure SM7B (El estándar para Podcast/Streaming)
        productList.add(new Product(
            301, // ID
            "Shure SM7B", // Nombre
            "Micrófono dinámico vocal legendario para estudios y podcasting.", // Descripción corta
            "Conocido por su sonido cálido y suave. Ideal para grabaciones de voz profesionales, streaming y podcasting. Rechazo excepcional de ruido electromagnético.", // Descripción larga
            new BigDecimal("399.00"), // Precio
            "Micrófonos", // Categoría
            new ArrayList<>(Arrays.asList( // Rutas de imágenes
                "/products/microphones/shure-sm7b/shure-sm7b-front.png",
                "/products/microphones/shure-sm7b/shure-sm7b-side.png",
                "/products/microphones/shure-sm7b/shure-sm7b-angle.png")),
            25, // Stock
            "Shure", // Marca
            0, // Descuento
            new ArrayList<>(Arrays.asList("Tipo: Dinámico (XLR)", "Patrón: Cardioide",
                                            "Respuesta: 50Hz - 20kHz", "Uso: Estudio/Broadcast"))));

        // 2. Blue Yeti X (El rey del USB)
        productList.add(new Product(
            302,
            "Blue Yeti X",
            "Micrófono USB profesional para juegos y streaming.",
            "Matriz de cuatro cápsulas de condensador para un sonido nítido. Medidor LED de alta resolución y perilla inteligente multifunción. Software Blue VO!CE incluido.",
            new BigDecimal("169.99"),
            "Micrófonos",
            new ArrayList<>(Arrays.asList(
                "/products/microphones/blue-yeti-x/blue-yeti-x-front.png",
                "/products/microphones/blue-yeti-x/blue-yeti-x-knob.png",
                "/products/microphones/blue-yeti-x/blue-yeti-x-stand.png")),
            45,
            "Logitech / Blue",
            10,
            new ArrayList<>(Arrays.asList("Tipo: Condensador (USB)", "Patrones: 4 (Cardioide, Omni, Bi, Stereo)",
                                            "Frecuencia: 20Hz - 20kHz", "Extras: Iluminación LED"))));

        // 3. HyperX QuadCast S (El favorito de los Gamers con RGB)
        productList.add(new Product(
            303,
            "HyperX QuadCast S",
            "Micrófono USB de condensador con iluminación RGB.",
            "Increíble iluminación RGB personalizable. Incluye soporte antivibración y filtro pop integrado. Sensor de silenciamiento con un toque e indicador LED.",
            new BigDecimal("159.99"),
            "Micrófonos",
            new ArrayList<>(Arrays.asList(
                "/products/microphones/hyperx-quadcast-s/quadcast-s-front.png",
                "/products/microphones/hyperx-quadcast-s/quadcast-s-rgb.png",
                "/products/microphones/hyperx-quadcast-s/quadcast-s-top.png")),
            60,
            "HyperX",
            5,
            new ArrayList<>(Arrays.asList("Tipo: Condensador (USB)", "Iluminación: RGB Dinámico",
                                            "Montura: Antivibración incluida", "Control: Tap-to-Mute"))));

        // 4. Røde Wireless GO II (Inalámbrico compacto)
        productList.add(new Product(
            304,
            "Røde Wireless GO II",
            "Sistema de micrófono inalámbrico compacto de doble canal.",
            "El sistema de micrófono inalámbrico más pequeño y versátil. Alcance de hasta 200m, grabación a bordo y compatibilidad universal con cámaras y móviles.",
            new BigDecimal("299.00"),
            "Micrófonos",
            new ArrayList<>(Arrays.asList(
                "/products/microphones/rode-wireless-go/rode-go-ii-pair.png",
                "/products/microphones/rode-wireless-go/rode-go-ii-transmitter.png",
                "/products/microphones/rode-wireless-go/rode-go-ii-receiver.png")),
            15,
            "Røde",
            0,
            new ArrayList<>(Arrays.asList("Tipo: Inalámbrico (Lavalier)", "Alcance: 200m",
                                            "Batería: 7h recargable", "Canales: Doble"))));

        // 5. Audio-Technica AT2020 (Entrada al mundo profesional XLR)
        productList.add(new Product(
            305,
            "Audio-Technica AT2020",
            "Micrófono de condensador cardioide para estudio.",
            "El estándar de precio/rendimiento en tecnología de micrófonos de condensador de estudio. Ideal para project/home studio. Requiere alimentación Phantom 48V.",
            new BigDecimal("99.00"),
            "Micrófonos",
            new ArrayList<>(Arrays.asList(
                "/products/microphones/at2020/at2020-front.png",
                "/products/microphones/at2020/at2020-mount.png")),
            80,
            "Audio-Technica",
            20,
            new ArrayList<>(Arrays.asList("Tipo: Condensador (XLR)", "Diafragma: Baja masa",
                                            "SPL Máximo: 144 dB", "Requiere: Interfaz de Audio / 48V"))));
                                          
                // 1. Logitech G Pro X Superlight 2 (El estándar de Esports)
        productList.add(new Product(
            401,
            "Logitech G Pro X Superlight 2",
            "El ratón inalámbrico más ligero y preciso para competición.",
            "Diseñado con profesionales de los esports. Peso inferior a 60g, interruptores híbridos LIGHTFORCE y sensor HERO 2 para una precisión milimétrica sin cables.",
            new BigDecimal("169.00"),
            "Ratones",
            new ArrayList<>(Arrays.asList(
                "/products/mouses/g-pro-x-superlight-2/side-view.png",
                "/products/mouses/g-pro-x-superlight-2/awards.png",
                "/products/mouses/g-pro-x-superlight-2/sensor.png",
                "/products/mouses/g-pro-x-superlight-2/battery.png",
                "/products/mouses/g-pro-x-superlight-2/weight.png")),
            40,
            "Logitech G",
            0,
            new ArrayList<>(Arrays.asList("Sensor: HERO 2 (32k DPI)", "Peso: 60g",
                                            "Batería: 95 horas", "Polling Rate: 2000Hz"))));

        // 2. Razer DeathAdder V3 Pro (Ergonomía Gaming)
        productList.add(new Product(
            402,
            "Razer DeathAdder V3 Pro",
            "Ratón ergonómico ultraligero para agarre de palma.",
            "La leyenda ha evolucionado. 63g de peso, forma ergonómica refinada y sensor óptico Razer Focus Pro 30K. Conexión inalámbrica HyperSpeed un 25% más rápida.",
            new BigDecimal("159.99"),
            "Ratones",
            new ArrayList<>(Arrays.asList(
                "/products/mouses/deathadder-v3-pro/top-view.png",
                "/products/mouses/deathadder-v3-pro/weight.png",
                "/products/mouses/deathadder-v3-pro/design.png",
                "/products/mouses/deathadder-v3-pro/sensor.png",
                "/products/mouses/deathadder-v3-pro/switches.png",
                "/products/mouses/deathadder-v3-pro/wireless.png")),
            25,
            "Razer",
            10,
            new ArrayList<>(Arrays.asList("Sensor: Focus Pro 30K", "Peso: 63g",
                                            "Switches: Ópticos Gen-3", "Diseño: Ergonómico diestro"))));

        // 3. Logitech MX Master 3S (El Rey de la Productividad)
        productList.add(new Product(
            403,
            "Logitech MX Master 3S",
            "Ratón de alto rendimiento para creativos y programadores.",
            "Clics silenciosos y desplazamiento electromagnético MagSpeed para una velocidad y precisión infinitas. Sensor de 8000 DPI que funciona incluso sobre cristal.",
            new BigDecimal("129.00"),
            "Ratones",
            new ArrayList<>(Arrays.asList(
                "/products/mouses/mx-master-3s/side-view.png",
                "/products/mouses/mx-master-3s/sensor.png",
                "/products/mouses/mx-master-3s/scroll.png",
                "/products/mouses/mx-master-3s/clicks.png",
                "/products/mouses/mx-master-3s/buttons.png")),
            50,
            "Logitech",
            15,
            new ArrayList<>(Arrays.asList("Tipo: Productividad", "Scroll: MagSpeed Infinito",
                                            "Conectividad: Bluetooth / Logi Bolt", "Botones: 7 personalizables"))));

        // 4. Logitech G502 X Plus (El todoterreno con RGB)
        productList.add(new Product(
            404,
            "Logitech G502 X Plus",
            "La reinvención del ratón gaming más popular del mundo.",
            "Icono rediseñado. Interruptores híbridos óptico-mecánicos LIGHTFORCE, iluminación RGB LIGHTSYNC de 8 zonas y tecnología inalámbrica LIGHTSPEED de calidad profesional.",
            new BigDecimal("145.00"),
            "Ratones",
            new ArrayList<>(Arrays.asList(
                "/products/mouses/g502-x-plus/view.png",
                "/products/mouses/g502-x-plus/top-view.png",
                "/products/mouses/g502-x-plus/side-view.png",
                "/products/mouses/g502-x-plus/front-view.png",
                "/products/mouses/g502-x-plus/bottom-view.png")),
            35,
            "Logitech G",
            5,
            new ArrayList<>(Arrays.asList("Botones: 13 programables", "Iluminación: RGB 8 zonas",
                                            "Switch: Híbrido Óptico-Mecánico", "Peso: 106g"))));

        // 5. Razer Basilisk V3 (Calidad-Precio con cable)
        productList.add(new Product(
            405,
            "Razer Basilisk V3",
            "Ratón gaming ergonómico con rueda inclinable.",
            "Domina tu estilo de juego. 11 botones programables, rueda inclinable HyperScroll inteligente y una base con iluminación RGB Chroma espectacular.",
            new BigDecimal("79.99"),
            "Ratones",
            new ArrayList<>(Arrays.asList(
                "/products/mouses/razer-basilisk-v3/top-view.png",
                "/products/mouses/razer-basilisk-v3/side-buttons.png",
                "/products/mouses/razer-basilisk-v3/side-view.png",
                "/products/mouses/razer-basilisk-v3/back-logo.png",
                "/products/mouses/razer-basilisk-v3/hand-grip.png")),
            100,
            "Razer",
            20,
            new ArrayList<>(Arrays.asList("Conexión: Cableado (Speedflex)", "Rueda: 4 direcciones (HyperScroll)",
                                            "Iluminación: Chroma RGB Underglow", "Sensor: Focus+ 26K"))));


        // 1. Logitech MX Keys S (El estándar de oficina)
        productList.add(new Product(
            502,
            "Logitech MX Keys S",
            "Teclado inalámbrico de perfil bajo para productividad.",
            "Escritura fluida, natural y precisa con teclas cóncavas. Iluminación inteligente que detecta tus manos y automatización de tareas con Smart Actions.",
            new BigDecimal("119.00"),
            "Teclados",
            new ArrayList<>(Arrays.asList(
                "/products/keyboards/mx-keys-s/keyboard-profile-view.png",
                "/products/keyboards/mx-keys-s/eco-friendly-features.png",
                "/products/keyboards/mx-keys-s/typing-comfort-lifestyle.png")),
            60,
            "Logitech",
            10,
            new ArrayList<>(Arrays.asList("Tipo: Membrana (Tijera)", "Perfil: Bajo (Low Profile)",
                                            "Batería: USB-C Recargable", "Conexión: Multi-dispositivo (3)"))));

        // 2. Razer Huntsman V3 Pro TKL (Esports Mainstream)
        productList.add(new Product(
            503,
            "Razer Huntsman V3 Pro TKL",
            "Teclado óptico analógico para competición sin teclado numérico.",
            "Velocidad inigualable con los switches ópticos analógicos Gen-2 de Razer. Modo de disparo rápido, actuación ajustable y almacenamiento híbrido integrado.",
            new BigDecimal("229.99"),
            "Teclados",
            new ArrayList<>(Arrays.asList(
                "/products/keyboards/huntsman-v3-pro/huntsman-v3-top.png",
                "/products/keyboards/huntsman-v3-pro/huntsman-v3-wrist.png",
                "/products/keyboards/huntsman-v3-pro/huntsman-v3-side.png")),
            25,
            "Razer",
            5,
            new ArrayList<>(Arrays.asList("Switch: Óptico Analógico Gen-2", "Layout: TKL (Tenkeyless)",
                                            "Reposamuñecas: Magnético incluido", "Placa: Aluminio cepillado"))));

        // 3. Keychron Q1 Pro (Entrada al mundo Custom)
        productList.add(new Product(
            504,
            "Keychron Q1 Pro",
            "Teclado mecánico custom inalámbrico QMK/VIA totalmente de aluminio.",
            "Cuerpo de aluminio CNC completo, diseño de doble junta (Gasket Mount) y soporte para QMK/VIA. Una experiencia de escritura premium y sonido 'thocky' de serie.",
            new BigDecimal("199.00"),
            "Teclados",
            new ArrayList<>(Arrays.asList(
                "/products/keyboards/keychron-q1-pro/q1-pro-top.png",
                "/products/keyboards/keychron-q1-pro/q1-pro-exploded.png",
                "/products/keyboards/keychron-q1-pro/q1-pro-knob.png")),
            10,
            "Keychron",
            0,
            new ArrayList<>(Arrays.asList("Layout: 75% con Perilla", "Conexión: Bluetooth 5.1 / Cable",
                                            "Hot-Swappable: Sí", "Montaje: Double Gasket"))));

        // 4. Corsair K70 MAX RGB (Clásico Full Size)
        productList.add(new Product(
            505,
            "Corsair K70 MAX RGB",
            "Teclado mecánico-magnético premium de tamaño completo.",
            "Equipado con interruptores magnéticos CORSAIR MGX ajustables. Proceso AXON para una velocidad de 8000Hz y reposamuñecas de espuma viscoelástica.",
            new BigDecimal("229.99"),
            "Teclados",
            new ArrayList<>(Arrays.asList(
                "/products/keyboards/corsair-k70-max/k70-max-top.png",
                "/products/keyboards/corsair-k70-max/k70-max-wheel.png")),
            40,
            "Corsair",
            15,
            new ArrayList<>(Arrays.asList("Switch: Magnético MGX", "Layout: 100% Full Size",
                                            "Polling Rate: 8000Hz", "Keycaps: PBT Double-shot"))));
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