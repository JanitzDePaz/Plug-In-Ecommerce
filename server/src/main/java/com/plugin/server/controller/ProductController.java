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
                //Aoc Gaming
                productList.add(new Product(
                                101,
                                "AOC Gaming 24G2SP",
                                "Monitor Gaming 24 pulgadas 165Hz.",
                                "Panel IPS con tasa de refresco de 165Hz y 1ms de respuesta. Compatible con G-Sync y FreeSync Premium.",
                                new BigDecimal("159.99"),
                                "Monitor",
                                new ArrayList<>(Arrays.asList("/products/monitors/monitor1/monitorImg1.png", "/products/monitors/monitor1/monitorImg2.png", "/products/monitors/monitor1/monitorImg3.png", "/products/monitors/monitor1/monitorImg4.png", "/products/monitors/monitor1/monitorImg5.png")),
                                45,
                                "AOC",
                                10,
                                new ArrayList<>(Arrays.asList("Resolución: 1920x1080", "Refresco: 165Hz",
                                                "Panel: IPS"))));

                //Samsung Odyssey
                productList.add(new Product(
                                102,
                                "Samsung Odyssey G5",
                                "Monitor Curvo 1000R WQHD.",
                                "Sumérgete en el juego con la curvatura 1000R que coincide con el campo de visión humano. Resolución WQHD.",
                                new BigDecimal("299.00"),
                                "Monitor",
                                new ArrayList<>(Arrays.asList("/products/monitors/monitor2/monitorImg1.png", "/products/monitors/monitor2/monitorImg2.png", "/products/monitors/monitor2/monitorImg3.png", "/products/monitors/monitor2/monitorImg4.png", "/products/monitors/monitor2/monitorImg5.png")),
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
                                new ArrayList<>(Arrays.asList("/products/monitors/monitor3/monitorImg1.png", "/products/monitors/monitor3/monitorImg2.png", "/products/monitors/monitor3/monitorImg3.png", "/products/monitors/monitor3/monitorImg4.png", "/products/monitors/monitor3/monitorImg5.png")),
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
                                new ArrayList<>(Arrays.asList("/products/monitors/monitor4/monitorImg1.png", "/products/monitors/monitor4/monitorImg2.png", "/products/monitors/monitor4/monitorImg3.png", "/products/monitors/monitor4/monitorImg4.png", "/products/monitors/monitor4/monitorImg5.png")),
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
                                new ArrayList<>(Arrays.asList("/products/monitors/monitor5/monitorImg1.png", "/products/monitors/monitor5/monitorImg2.png", "/products/monitors/monitor5/monitorImg3.png", "/products/monitors/monitor5/monitorImg4.png", "/products/monitors/monitor5/monitorImg5.png")),
                                100,
                                "LG",
                                15,
                                new ArrayList<>(Arrays.asList("Resolución: 1080p", "Panel: IPS", "Frecuencia: 75Hz"))));
                return productList;
        }
        @GetMapping
        public List<ProductCardDTO> getAllProductsCardsDTO() {
                List <Product> products = getAllProductsData();
                List<ProductCardDTO> productCardsDTOList = new ArrayList<>();

                for(Product product : products ) {
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
                };

                return productCardsDTOList;
        }


        @GetMapping("/{slug}")
        public ProductSummaryDTO getProductsSummaryDTO(@PathVariable String slug) {
                List <Product> products = getAllProductsData();
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
                };
                return productSummaryDTO;
        }       
}