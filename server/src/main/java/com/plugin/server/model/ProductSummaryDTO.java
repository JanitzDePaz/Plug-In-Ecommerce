package com.plugin.server.model;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;

public class ProductSummaryDTO {
    private int id;
    private String name;
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

    public ProductSummaryDTO() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLongDescription() {
        return longDescription;
    }

    public void setLongDescription(String longDescription) {
        this.longDescription = longDescription;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public LocalDate getEstimateDeliveryDays() {
        return estimateDeliveryDays;
    }

    public void setEstimateDeliveryDays(LocalDate estimateDeliveryDays) {
        this.estimateDeliveryDays = estimateDeliveryDays;
    }

    public ArrayList<String> getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(ArrayList<String> imgUrl) {
        this.imgUrl = imgUrl;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public ArrayList<String> getSpecifications() {
        return specifications;
    }

    public void setSpecifications(ArrayList<String> specifications) {
        this.specifications = specifications;
    }
}

