package com.plugin.server.model;

import java.time.LocalDate;
import java.math.BigDecimal;

public class ProductCardDTO {
    private String name;
    private String slug;
    private BigDecimal price;
    private String imgUrl;
    private int rating;
    private LocalDate estimateDeliveryDays;
    private boolean active;

    public void ProductCardDTO(){}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public LocalDate getEstimateDeliveryDays() {
        return estimateDeliveryDays;
    }

    public void setEstimateDeliveryDays(LocalDate estimateDeliveryDays) {
        this.estimateDeliveryDays = estimateDeliveryDays;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
