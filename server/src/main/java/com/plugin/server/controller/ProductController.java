package com.plugin.server.controller;

import com.plugin.server.model.Product;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.ArrayList;


@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:5173")

public class ProductController {
    @GetMapping
    public List<Product> getProducts(){
        List<Product> productList = new ArrayList<>();

        for(int i = 0; i < 10; i++){
            String imageUrl = "/url/url"+i;
            productList.add(new Product(i, "PC"+i, "Description of PC" + (i+1), Math.random()*45+i, "PCs", imageUrl, true));
        }

        return productList;
    }
    
}