package com.plugin.server.model;

public class Product {
    
    private int id;
    private String name;
    private String description;
    private double price;
    private String category;
    private String imgURL;
    private boolean active;

    public Product(int id, String name, String description, double price, String category, String imgURL, boolean active) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.imgURL = imgURL;
        this.active = active;
    }

    public int getId(){return id; }
    public String getName(){return name;}
    public String getDescription(){return description;}
    public double getPrice(){return price;}
    public String getCategory(){return category;}
     public String getImageUrl(){return imgURL;}
      public boolean getActive(){return active;}
}
