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
                "Perfil ultra delgado que ocupa el mínimo espaçcio en el escritorio. Tasa de refresco mejorada de 100Hz para transiciones suaves.",
                79, "Monitor", "monitor.png", false));

        productList.add(new Product(20, "Philips 24\" Full HD",
                "Imágenes panorámicas con panel VA para un alto contraste estático. Tecnología Flicker-Free para reducir la fatiga ocular durante horas.",
                65, "Monitor", "monitor.png", false));

        // Seeder de Auricular (IDs 21-40)
        productList.add(new Product(21, "Logitech G733 Lightspeed",
                "Auricular inalámbricos ultraligeros con iluminación RGB frontal y diadema de suspensión. Tecnología de micrófono Blue VO!CE para una voz nítida en streaming.",
                129, "Auricular", "auriculares.png", false));

        productList.add(new Product(22, "Razer Kraken V3 X",
                "Diseño ultraligero de 285g para maratones de juego sin fatiga. Drivers Razer TriForce de 40mm para un sonido potente y envolvente 7.1.",
                60, "Auricular", "auriculares.png", false));

        productList.add(new Product(23, "HyperX Cloud II Red",
                "Comodidad legendaria con espuma viscoelástica y piel sintética premium. Caja de control de audio USB con sonido envolvente virtual 7.1.",
                85, "Auricular", "auriculares.png", false));

        productList.add(new Product(24, "Sony WH-1000XM5",
                "Líderes en cancelación de ruido (ANC) con procesador V1 integrado. Hasta 30 horas de batería y llamadas cristalinas con 4 micrófonos beamforming.",
                349, "Auricular", "auriculares.png", false));

        productList.add(new Product(25, "Corsair Virtuoso RGB Wireless XT",
                "Audio de alta fidelidad con conexión simultánea Slipstream Wireless y Bluetooth. Construcción en aluminio mecanizado y micrófono de grado broadcast.",
                199, "Auricular", "auriculares.png", false));

        productList.add(new Product(26, "SteelSeries Arctis Nova 7",
                "Sistema acústico Nova con controladores de alta fidelidad y audio espacial 360°. Conexión inalámbrica dual para mezclar audio de juego y móvil.",
                165, "Auricular", "auriculares.png", false));

        productList.add(new Product(27, "JBL Tune 510BT",
                "Sonido JBL Pure Bass inalámbrico con hasta 40 horas de autonomía y carga rápida. Diseño plegable, ligero y cómodo para el uso diario en movimiento.",
                45, "Auricular", "auriculares.png", false));

        productList.add(new Product(28, "Logitech G Pro X 2 Lightspeed",
                "Diseñados con profesionales de eSports, incluyen drivers de grafeno de 50mm. Conectividad inalámbrica robusta y bisagras duraderas de acero y aluminio.",
                229, "Auricular", "auriculares.png", false));

        productList.add(new Product(29, "Razer BlackShark V2 Pro",
                "Tecnología HyperSpeed Wireless para un audio sin pérdidas y baja latencia. Micrófono supercardioide desmontable y aislamiento pasivo de ruido avanzado.",
                159, "Auricular", "auriculares.png", false));

        productList.add(new Product(30, "Audio-Technica ATH-M50xBT2",
                "La aclamada firma sónica de la serie M, ahora con conectividad inalámbrica. Batería de 50 horas y modo de baja latencia para streaming y juegos.",
                189, "Auricular", "auriculares.png", false));

        productList.add(new Product(31, "Mars Gaming MH1",
                "Auricular gaming económicos con diseño ergonómico y micrófono flexible. Drivers de neodimio de 40mm con graves optimizados para inmersión.",
                15, "Auricular", "auriculares.png", false));

        productList.add(new Product(32, "ASUS ROG Delta S Wireless",
                "Auricular ligeros con conectividad de 2.4 GHz y Bluetooth. Micrófonos con IA de beamforming y batería de hasta 25 horas de uso continuo.",
                175, "Auricular", "auriculares.png", false));

        productList.add(new Product(33, "Sennheiser HD 560S",
                "Referencia analítica para audiófilos con diseño abierto para un escenario sonoro natural. Respuesta de frecuencia lineal y graves extendidos y precisos.",
                149, "Auricular", "auriculares.png", false));

        productList.add(new Product(34, "Apple AirPods Pro (2.ª gen)",
                "Cancelación activa de ruido hasta dos veces mayor y modo de sonido ambiente adaptativo. Audio espacial personalizado y estuche de carga MagSafe.",
                279, "Auricular", "auriculares.png", false));

        productList.add(new Product(35, "Xiaomi Redmi Buds 4 Active",
                "Drivers dinámicos de 12mm para graves potentes en un formato TWS compacto. Conexión rápida Google Fast Pair y resistencia al agua IPX4.",
                25, "Auricular", "auriculares.png", false));

        productList.add(new Product(36, "Astro A50 + Base Station",
                "La experiencia de audio definitiva sin cables con base de carga magnética. Dolby Audio integrado y balance de juego/voz ajustable en el auricular.",
                319, "Auricular", "auriculares.png", false));

        productList.add(new Product(37, "Beyerdynamic DT 770 Pro 80 Ohm",
                "Leyenda de estudio de grabación, cerrados y difusos para monitoreo crítico. Construcción robusta hecha en Alemania con repuestos disponibles.",
                139, "Auricular", "auriculares.png", false));

        productList.add(new Product(38, "Corsair HS80 RGB Wireless",
                "Audio Dolby Atmos inmersivo con conexión inalámbrica ultrarrápida Slipstream. Micrófono omnidireccional con calidad de transmisión y función flip-to-mute.",
                125, "Auricular", "auriculares.png", false));

        productList.add(new Product(39, "Razer Barracuda X",
                "Híbridos 4 en 1 (PC, Consola, Móvil) con dongle USB-C inalámbrico. Diseño ergonómico de 250g ideal tanto para jugar en casa como para salir.",
                99, "Auricular", "auriculares.png", false));

        productList.add(new Product(40, "EPOS H3 Hybrid",
                "Conectividad dual (USB/Consola + Bluetooth) para mezclar chat y juego. Audio de ingeniería alemana con micrófono de brazo levadizo magnético.",
                109, "Auricular", "auriculares.png", false));
        // Seeder de Teclados (IDs 41-60)
        productList.add(new Product(41, "Logitech G915 TKL Wireless",
                "Teclado mecánico gaming ultrafino con tecnología inalámbrica Lightspeed y Bluetooth. Switches GL táctiles de perfil bajo y RGB Lightsync personalizable.",
                219, "Teclado", "teclado.png", false));

        productList.add(new Product(42, "Razer Huntsman V2 Analog",
                "Switches ópticos analógicos con accionamiento ajustable para un control preciso. Incluye reposamuñecas magnético y teclas de PBT de doble inyección.",
                189, "Teclado", "teclado.png", false));

        productList.add(new Product(43, "Corsair K70 RGB PRO",
                "Estructura de aluminio cepillado con switches CHERRY MX mecánicos. Tecnología de procesamiento AXON 8x más rápida y cable USB-C extraíble.",
                149, "Teclado", "teclado.png", false));

        productList.add(new Product(44, "Keychron K2 V2 Wireless",
                "Teclado mecánico compacto del 75% compatible con Mac y Windows. Conexión Bluetooth para hasta 3 dispositivos y batería de larga duración.",
                99, "Teclado", "teclado.png", false));

        productList.add(new Product(45, "SteelSeries Apex Pro TKL",
                "El teclado más rápido del mundo con switches OmniPoint ajustables de 0.2mm a 3.8mm. Pantalla inteligente OLED integrada para notificaciones en tiempo real.",
                209, "Teclado", "teclado.png", false));

        productList.add(new Product(46, "Logitech MX Keys S",
                "Teclado de perfil bajo para productividad con teclas cóncavas adaptadas a las yemas. Escritura fluida, silenciosa y retroiluminación inteligente automática.",
                115, "Teclado", "teclado.png", false));

        productList.add(new Product(47, "Newskill Suiko Ivory RGB",
                "Teclado mecánico gaming en color blanco con switches Kailh Red. Incluye reposamuñecas acolchado y más de 20 modos de iluminación RGB.",
                69, "Teclado", "teclado.png", false));

        productList.add(new Product(48, "Razer BlackWidow V4 Pro",
                "Centro de comando definitivo con dial de control y 8 teclas macro dedicadas. Iluminación inferior envolvente y switches mecánicos Razer Green clicky.",
                249, "Teclado", "teclado.png", false));

        productList.add(new Product(49, "HyperX Alloy Origins Core",
                "Diseño TKL compacto y robusto con cuerpo completo de aluminio aeronáutico. Switches mecánicos HyperX personalizados equilibrados para velocidad y precisión.",
                95, "Teclado", "teclado.png", false));

        productList.add(new Product(50, "Asus ROG Azoth",
                "Teclado custom gaming 75% con pantalla OLED y kit de lubricación incluido. Montaje de junta de silicona y tres capas de amortiguación para un sonido premium.",
                289, "Teclado", "teclado.png", false));

        productList.add(new Product(51, "Mars Gaming MKMINI",
                "Teclado ultra-compacto 60% con switches mecánicos OUTEMU PRO. Iluminación RGB Chroma y compatibilidad total multiplataforma.",
                25, "Teclado", "teclado.png", false));

        productList.add(new Product(52, "Ducky One 3 Mini Daybreak",
                "Teclado 60% con acústica Quack Mechanics para una experiencia de escritura sólida. PCB Hot-swap que permite cambiar switches sin soldar.",
                129, "Teclado", "teclado.png", false));

        productList.add(new Product(53, "Krom Kernel TKL",
                "Teclado mecánico sin teclado numérico perfecto para setups con espacio reducido. Iluminación LED RGB configurable por tecla sin necesidad de software.",
                45, "Teclado", "teclado.png", false));

        productList.add(new Product(54, "Logitech K120 Business",
                "La opción estándar para oficina: duradero, resistente a salpicaduras y fiable. Teclas silenciosas de perfil bajo con distribución estándar completa.",
                15, "Teclado", "teclado.png", false));

        productList.add(new Product(55, "Razer Ornata V3",
                "Teclado híbrido de perfil bajo con switches de membrana mecánica. Teclas con recubrimiento UV duradero y reposamuñecas magnético suave.",
                79, "Teclado", "teclado.png", false));

        productList.add(new Product(56, "Wooting 60HE+",
                "Teclado analógico revolucionario con punto de actuación configurable de 0.1mm. Modo Rapid Trigger para una respuesta instantánea en juegos competitivos.",
                189, "Teclado", "teclado.png", false));

        productList.add(new Product(57, "Tempest K10 RGB",
                "Teclado de membrana gaming con retroiluminación RGB y función anti-ghosting. Base metálica para mayor estabilidad durante sesiones intensas.",
                19, "Teclado", "teclado.png", false));

        productList.add(new Product(58, "Corsair K55 RGB PRO XT",
                "Teclado de membrana silencioso con certificación IP42 de resistencia al polvo y agua. Seis teclas macro dedicadas compatibles con el software Elgato Stream Deck.",
                64, "Teclado", "teclado.png", false));

        productList.add(new Product(59, "Akko 3068B Plus",
                "Teclado mecánico 65% inalámbrico con estética Black & Gold y teclas PBT. Conectividad triple modo (2.4Ghz, BT5.0, USB-C) y batería de 1800mAh.",
                89, "Teclado", "teclado.png", false));

        productList.add(new Product(60, "Apple Magic Keyboard Touch ID",
                "Teclado inalámbrico recargable con autenticación segura por huella dactilar. Mecanismo de tijera optimizado para una escritura precisa y muy estable.",
                159, "Teclado", "teclado.png", false));
        productList.add(new Product(61, "Logitech G502 HERO",
                "El ratón gaming más vendido del mundo con sensor HERO 25K de precisión submicrométrica. 11 botones programables y sistema de pesas ajustable.",
                59, "Ratón", "raton.png", false));

        productList.add(new Product(62, "Razer DeathAdder V3 Pro",
                "Diseño ergonómico refinado de 63g optimizado con profesionales de eSports. Sensor óptico Focus Pro de 30K y switches ópticos Gen-3.",
                159, "Ratón", "raton.png", false));

        productList.add(new Product(63, "Logitech MX Master 3S",
                "El rey de la productividad con sensor de 8K DPI que funciona sobre cristal. Rueda MagSpeed electromagnética y clics silenciosos.",
                105, "Ratón", "raton.png", false));

        productList.add(new Product(64, "Glorious Model O Wireless",
                "Ratón ultraligero con diseño de panal de abeja y solo 69g de peso. Batería de 71 horas y patines G-Skates 100% PTFE virgen.",
                89, "Ratón", "raton.png", false));

        productList.add(new Product(65, "SteelSeries Aerox 3",
                "Protección AquaBarrier IP54 contra polvo y agua con diseño perforado ligero. Conectividad Quantum 2.0 Wireless y carga rápida USB-C.",
                69, "Ratón", "raton.png", false));

        productList.add(new Product(66, "Corsair M65 RGB ULTRA",
                "Estructura de aluminio anodizado duradera con botón 'Sniper' dedicado. Sistema de ajuste de peso y tecnología Quickstrike para clics inmediatos.",
                75, "Ratón", "raton.png", false));

        productList.add(new Product(67, "Razer Basilisk V3",
                "Rueda inclinable HyperScroll de 4 direcciones y 11 zonas de iluminación RGB. Gatillo multifunción icónico y diseño ergonómico para diestros.",
                79, "Ratón", "raton.png", false));

        productList.add(new Product(68, "Logitech G Pro X Superlight 2",
                "La evolución del icono competitivo, ahora con 60g y switches híbridos Lightforce. Sensor HERO 2 y tasa de sondeo inalámbrica de 2000Hz.",
                169, "Ratón", "raton.png", false));

        productList.add(new Product(69, "Zowie EC2-C",
                "Diseño asimétrico legendario enfocado puramente al rendimiento en eSports. Sin drivers (Plug&Play), cable paracord flexible y sensor 3360.",
                74, "Ratón", "raton.png", false));

        productList.add(new Product(70, "Apple Magic Mouse",
                "Superficie Multi-Touch que permite gestos sencillos como pasar páginas. Diseño minimalista recargable con batería de un mes de duración.",
                85, "Ratón", "raton.png", false));

        productList.add(new Product(71, "Krom Kalax",
                "Ratón gaming económico con sensor óptico de hasta 3200 DPI. Diseño ergonómico con revestimiento de goma y 7 colores de iluminación LED.",
                15, "Ratón", "raton.png", false));

        productList.add(new Product(72, "ASUS ROG Chakram X",
                "Joystick programable integrado en el lateral y sensor AimPoint de 36.000 DPI. Conectividad triple modo y switches intercambiables en caliente.",
                165, "Ratón", "raton.png", false));

        productList.add(new Product(73, "HyperX Pulsefire Haste",
                "Carcasa hexagonal ultraligera de 59g para movimientos más rápidos. Cable HyperFlex y microinterruptores TTC Golden a prueba de polvo.",
                49, "Ratón", "raton.png", false));

        productList.add(new Product(74, "Newskill Helios",
                "Iluminación RGB personalizable y sensor óptico PMW 3389 de 16000 DPI. Superficie antideslizante y software dedicado para macros.",
                39, "Ratón", "raton.png", false));

        productList.add(new Product(75, "Razer Viper 8KHz",
                "Tecnología HyperPolling de 8000Hz para la latencia más baja del mercado. Diseño ambidiestro ligero de 71g con switches ópticos de 2.ª gen.",
                99, "Ratón", "raton.png", false));

        productList.add(new Product(76, "Logitech G203 Lightsync",
                "El clásico accesible con iluminación RGB vibrante y sensor de 8.000 DPI. Diseño clásico de 6 botones probado y amado por jugadores de todo el mundo.",
                29, "Ratón", "raton.png", false));

        productList.add(new Product(77, "Mars Gaming MM55",
                "Ratón ultraligero con estructura Hive interna y tan solo 55g de peso. Sensor óptico de 12800 DPI y cable Feather parcord.",
                19, "Ratón", "raton.png", false));

        productList.add(new Product(78, "Corsair Dark Core RGB PRO",
                "Conexión inalámbrica ultrarrápida de 1ms y carga inalámbrica Qi. Agarre lateral intercambiable y sensor de 18.000 DPI optimizado.",
                109, "Ratón", "raton.png", false));

        productList.add(new Product(79, "Trust Verto Vertical",
                "Diseño vertical ergonómico que reduce la tensión en muñeca y brazo. Sensor óptico ajustable y cable de 1.5m para libertad de movimiento.",
                24, "Ratón", "raton.png", false));

        productList.add(new Product(80, "HP 240 Bluetooth",
                "Ratón esencial portátil con conexión Bluetooth 5.1 fiable. Diseño elegante y ambidiestro perfecto para portátiles y viajes.",
                18, "Ratón", "raton.png", false));
        productList.add(new Product(81, "Blue Yeti X",
                "El micrófono USB definitivo para streaming con matriz de cuatro cápsulas. Medidor LED de alta resolución y efectos vocales Blue VO!CE integrados.",
                179, "Micrófono", "microfono.png", false));

        productList.add(new Product(82, "Shure SM7B",
                "El estándar de la industria para podcasting y radiodifusión. Sonido cálido y suave con excelente blindaje contra zumbidos electromagnéticos.",
                389, "Micrófono", "microfono.png", false));

        productList.add(new Product(83, "HyperX QuadCast S",
                "Micrófono USB con iluminación RGB dinámica y montura antivibración integrada. Sensor de silenciamiento con un toque y cuatro patrones polares.",
                159, "Micrófono", "microfono.png", false));

        productList.add(new Product(84, "Rode NT1 5th Gen",
                "Revolucionaria conexión Dual Connect (XLR y USB-C) con grabación de 32 bits flotantes. Ruido propio ultrabajo de 4dBA, ideal para estudio.",
                259, "Micrófono", "microfono.png", false));

        productList.add(new Product(85, "Elgato Wave:3",
                "Micrófono de condensador premium con tecnología Clipguard anti-distorsión. Integración total con el software de mezcla digital Wave Link.",
                149, "Micrófono", "microfono.png", false));

        productList.add(new Product(86, "Razer Seiren Mini",
                "Micrófono condensador ultracompacto para setups minimalistas. Patrón de captación supercardioide que reduce el ruido de fondo.",
                49, "Micrófono", "microfono.png", false));

        productList.add(new Product(87, "Audio-Technica AT2020USB-X",
                "La calidad del legendario AT2020 con conversión A/D de alta resolución a 24-bit/96 kHz. Botón de silencio táctil y salida de auriculares directa.",
                139, "Micrófono", "microfono.png", false));

        productList.add(new Product(88, "Fifine K669B",
                "La mejor relación calidad-precio en USB, cuerpo metálico robusto. Control de volumen integrado y patrón cardioide claro para llamadas y vídeos.",
                35, "Micrófono", "microfono.png", false));

        productList.add(new Product(89, "Samson Q2U Recording Pack",
                "Micrófono dinámico versátil con salidas XLR y USB simultáneas. Incluye soporte de sobremesa, clip y cables, perfecto para empezar.",
                79, "Micrófono", "microfono.png", false));

        productList.add(new Product(90, "DJI Mic (2 TX + 1 RX)",
                "Sistema inalámbrico compacto todo en uno con alcance de hasta 250m. Grabación de doble canal y memoria interna de 14 horas.",
                249, "Micrófono", "microfono.png", false));

        productList.add(new Product(91, "Rode VideoMic GO II",
                "Micrófono de cañón ligero para cámaras y dispositivos móviles. No requiere batería y ofrece un sonido direccional nítido.",
                99, "Micrófono", "microfono.png", false));

        productList.add(new Product(92, "Blue Snowball iCE",
                "Diseño retro de esfera con cápsula de condensador personalizada. Certificado por Skype y Discord, simplemente enchufar y grabar.",
                55, "Micrófono", "microfono.png", false));

        productList.add(new Product(93, "Trust Gaming GXT 232 Mantis",
                "Micrófono USB con trípode y filtro pop incluido para streaming casual. Conexión digital clara y soporte amortiguador universal.",
                29, "Micrófono", "microfono.png", false));

        productList.add(new Product(94, "Newskill Kaliope",
                "Iluminación RGB backlight y patrón de recepción unidireccional cardioide. Construcción en metal reforzado y controles en el frontal.",
                69, "Micrófono", "microfono.png", false));

        productList.add(new Product(95, "Mars Gaming MMIC",
                "Micrófono direccional de alto rendimiento con diseño futurista RGB Flow. Brazo flexible adaptable y base sólida antideslizante.",
                15, "Micrófono", "microfono.png", false));

        productList.add(new Product(96, "Sennheiser Profile USB",
                "Cápsula de condensador cardioide optimizada para la voz humana. Controles físicos de ganancia, mezcla y volumen para un manejo inmediato.",
                129, "Micrófono", "microfono.png", false));

        productList.add(new Product(97, "Krom Kapsule",
                "Set de doble micrófono condensador con calidad de estudio HD. Montura anti-shock y filtro antipop para grabaciones profesionales.",
                54, "Micrófono", "microfono.png", false));

        productList.add(new Product(98, "JBL Quantum Stream",
                "Doble patrón de voz seleccionable (cardioide u omnidireccional). Soporte reversible de 360 grados y monitoreo de voz integrado.",
                99, "Micrófono", "microfono.png", false));

        productList.add(new Product(99, "Logitech Blue Sona",
                "Micrófono dinámico XLR activo diseñado para creadores de contenido. Tecnología ClearAmp integrada que entrega +25dB de ganancia limpia.",
                349, "Micrófono", "microfono.png", false));

        productList.add(new Product(100, "Neumann TLM 102",
                "Calidad de estudio de gama alta en un formato compacto. Impresionante nivel de presión sonora máxima de 144 dB para voces e instrumentos.",
                649, "Micrófono", "microfono.png", false));
        return productList;
    }

}