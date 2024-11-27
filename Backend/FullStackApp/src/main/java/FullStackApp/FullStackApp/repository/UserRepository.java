package FullStackApp.FullStackApp.repository;



import org.springframework.data.mongodb.repository.MongoRepository;

import FullStackApp.FullStackApp.model.User;



public interface UserRepository  extends MongoRepository<User, String>{

}
