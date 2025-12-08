package com.plugin.server.model;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;

public class Product {

    private int id;
    private String name;
    private String slug;
    private String description;
    private String longDescription;
    private BigDecimal price;
    private String category;
    private int rate;
    private LocalDate estimateDeliveryDays;
    private ArrayList<String> imgUrl;
    private boolean active;
    private int stock;
    private String brand;
    private int discount;
    private ArrayList<String> specifications;

    public Product(int id, String name, String description, String longDescription, BigDecimal price, String category, ArrayList<String> imgUrl,
        int stock, String brand, int discount, ArrayList<String> specifications) {
        this.id = id;
        this.name = name;
        this.slug = name.toLowerCase().replaceAll(" ", "-").replaceAll("[^a-z0-9\\-]", "");
        this.description = description;
        this.longDescription = longDescription;
        this.price = price;
        this.category = category;
        this.rate = (int) (Math.random() * 10) + 1;
        this.estimateDeliveryDays = LocalDate.now().plusDays((int) (Math.random() * 3) + 1);
        this.imgUrl = imgUrl;
        this.stock = stock;
        this.active = stock > 0;
        this.brand = brand;
        this.discount = discount;
        this.specifications = specifications;
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

    public ArrayList<String> getImgUrl() {
        return imgUrl;
    }

    public String getFirstImg() {
        return imgUrl.get(0);
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
    public ArrayList<String> getSpecifications() {
        return specifications;
    }
    public String getSlug() {
        return slug;
    }
}
