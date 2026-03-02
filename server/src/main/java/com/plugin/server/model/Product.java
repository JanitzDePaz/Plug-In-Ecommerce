package com.plugin.server.model;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String slug;
    private String description;

    @Column(name = "long_description")
    private String longDescription;

    private BigDecimal price;
    private int discount;
    private int stock;
    private String category;
    private String brand;

    @Column(name = "main_img")
    private String mainImage;

    @ElementCollection
    private List<String> images;

    @ElementCollection
    private List<String> specifications;
    private boolean active;

    // Backend generated fields
    private LocalDate estimateDeliveryDays;
    private int rate;

    public Product() {
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getLongDescription() {
        return longDescription;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public String getCategory() {
        return category;
    }

    public int getRate() {
        return rate;
    }

    public LocalDate getEstimateDeliveryDays() {
        return estimateDeliveryDays;
    }

    public List<String> getImages() {
        return images;
    }

    public String getMainImage() {
        return mainImage;
    }

    public boolean getActive() {
        return active;
    }

    public int getStock() {
        return stock;
    }

    public String getBrand() {
        return brand;
    }

    public int getDiscount() {
        return discount;
    }

    public List<String> getSpecifications() {
        return specifications;
    }

    public String getSlug() {
        return slug;
    }
}
