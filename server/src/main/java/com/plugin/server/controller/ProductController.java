package com.plugin.server.controller;

import com.plugin.server.dto.ProductCardDTO;
import com.plugin.server.dto.ProductSummaryDTO;
import com.plugin.server.model.Product;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import com.plugin.server.repository.ProductRepository;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:5173")

public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    
    //public List<Product> getAllProductsData() {
    //    return productRepository.allProducts();
   //}
    @GetMapping
    public List<ProductCardDTO> getAllProductsCardsDTO() {
        return productRepository.allProductCards();
    }

    // @GetMapping("/{slug}")
    // public ProductSummaryDTO getProductsSummaryDTO(@PathVariable String slug) {
    // return productRepository.productSummary(slug);
    // }
}