package FullStackApp.FullStackApp.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import FullStackApp.FullStackApp.model.User;
import FullStackApp.FullStackApp.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
	
	@Autowired
	private UserRepository userRepo;
	
	
	@PostMapping("/user")
	public User newUser(@RequestBody User newuser) {
	    System.out.println("Received new user: " + newuser);
	    return userRepo.save(newuser);
	}

	@GetMapping("/users")
		public List<User> getAllUser(){
			return userRepo.findAll();
	}
	
	@GetMapping("/user/{id}")
	public Optional<User> getUserById(@PathVariable String id) {
		return userRepo.findById(id);
	}
	
	@PutMapping("user/{id}")
	public Optional<User> updateUser(@PathVariable String id, @RequestBody User newUser) {
	    return userRepo.findById(id)
	        .map(user -> {
	            user.setUsername(newUser.getUsername());
	            user.setName(newUser.getName());
	            user.setEmail(newUser.getEmail());
	            userRepo.save(user);
	            return user;
	        });
	}
	
	@DeleteMapping("/user/{id}")
	public String deleteById(@PathVariable String id) {
		userRepo.deleteById(id);
		return "User With Id"+id+"has been Deleted to the Database.";
	}

}
