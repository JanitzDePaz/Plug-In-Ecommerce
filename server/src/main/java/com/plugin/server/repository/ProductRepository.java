package com.plugin.server.repository;

import com.plugin.server.dto.ProductCardDTO;
import com.plugin.server.model.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    // SQL Query for shop cards
    @Query("SELECT new com.plugin.server.dto.ProductCardDTO(" +
            "p.id, p.name, p.slug, p.price, p.mainImage, " +
            "p.category, p.active, p.discount) " +
            "FROM Product p")
    List<ProductCardDTO> allProductCards();


    // SQL Query for product summary (WIP)
    // @Query("SELECT new com.plugin.server.dto.ProductSummaryDTO(p.id, p.name,
    // p.slug, p.description, p.longDescription, p.price, p.discount, p.stock,
    // p.category, p.brand, p.mainImage, p.images, p.specifications, p.active) FROM
    // Product p WHERE p.slug = ?1")
    // ProductSummaryDTO productSummary(String slug);
}