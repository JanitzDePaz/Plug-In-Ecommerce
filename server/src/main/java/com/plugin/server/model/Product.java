package com.plugin.server.model;
import java.time.LocalDate;

public class Product {
    
    private int id;
    private String name;
    private String description;
    private double price;
    private String category;
    private int rate;
    private LocalDate deliveryDays;
    private String imgUrl;
    private boolean active;

    public Product(int id, String name, String description, double price, String category, String imgUrl, boolean active) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.rate = (int)(Math.random() * 7) + 1;
        this.deliveryDays = LocalDate.now().plusDays((int)(Math.random() * 3) + 1);
        this.imgUrl = imgUrl;
        this.active = active;
    }

    public int getId(){return id; }
    public String getName(){return name;}
    public String getDescription(){return description;}
    public double getPrice(){return price;}
    public String getCategory(){return category;}
    public int getRate(){return rate;}
    public LocalDate getDeliveryDays(){return deliveryDays;}
    public String getImgUrl(){return imgUrl;}
    public boolean getActive(){return active;}
}
