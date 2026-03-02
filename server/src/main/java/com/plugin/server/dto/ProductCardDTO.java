package com.plugin.server.dto;

import java.time.LocalDate;

import java.math.BigDecimal;

public class ProductCardDTO {
    private long id;
    private String name;
    private String slug;
    private BigDecimal price;
    private String imgUrl;
    private int rate;
    private String category;
    private LocalDate estimateDeliveryDays;
    private boolean active;
    private int discount;

    public ProductCardDTO(long id, String name, String slug, BigDecimal price,
            String imgUrl, String category, boolean active, int discount) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.price = price;
        this.imgUrl = imgUrl;
        this.rate = (int) (Math.random() * 10) + 1;
        this.category = category;
        this.active = active;
        this.discount = discount;
        this.estimateDeliveryDays = LocalDate.now().plusDays((int) (Math.random() * 3) + 1);
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

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

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
