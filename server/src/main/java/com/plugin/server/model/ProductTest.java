package com.plugin.server.model;

public class ProductTest{
    public static void main(String[] args){
        Product PC = new Product(1, "PC1", "This pc contains...",  23.4 , "LapTop", "/../../", false);

        System.out.println("PC id: " + PC.getId());
        System.out.println("PC name: " + PC.getName());
        System.out.println("PC price: " + PC.getPrice());
        System.out.println("PC category: " + PC.getCategory());
    }
}