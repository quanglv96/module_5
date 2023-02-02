package guang.controller;

import guang.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import guang.service.Product.IProductService;

import java.util.Optional;

@RestController
@RequestMapping("/product")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private IProductService productService;
    @GetMapping
    public ResponseEntity<Iterable<Product>> findAll(){
        return new ResponseEntity<>(productService.findAll(),HttpStatus.OK);
    }
    @GetMapping("{id}")
    public ResponseEntity<Optional<Product>> findById(@PathVariable("id") Long id){
        return new ResponseEntity<>(productService.findById(id),HttpStatus.OK);
    }
    @PostMapping()
    public ResponseEntity<Iterable<Product>> save(@RequestBody Product product){
        productService.save(product);
        return new ResponseEntity<>(productService.findAll(),HttpStatus.OK);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<Iterable<Product>> delete(@PathVariable("id") Long id){
        productService.remove(id);
        return new ResponseEntity<>(productService.findAll(),HttpStatus.OK);
    }

}
