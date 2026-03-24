package com.plugin.server.dto;

public class CartProductDTO {
    private String name;
    private float price;
    private String mainImg;
    private int quantity;

    public CartProductDTO(String name, float price, String mainImg, int quantity) {
        this.name = name;
        this.price = price;
        this.mainImg = mainImg;
        this.quantity = quantity;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public String getMainImg() {
        return mainImg;
    }

    public int getQuantity() {
        return quantity;
    }
}
