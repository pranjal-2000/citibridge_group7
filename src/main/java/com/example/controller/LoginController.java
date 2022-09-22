package com.example.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.loginapp.modal.User;
import com.example.loginapp.repository.LoginRepository;
//import com.example.loginapp.service.LoginServiceImpl;
@RestController
@CrossOrigin
//@RequestMapping(value="/user") 
public class LoginController {

	@Autowired
	private LoginRepository repo;
	
	@PostMapping("/user/login")
	public String loginUser(@RequestBody User userData)
	{
		System.out.println(userData);
		User user=repo.findByUsername(userData.username);
		if(user.getPassword().equals(userData.password))
		{
			//return ResponseEntity.ok(user);
			return "valid";
		}
		//return (ResponseEntity<?>) ResponseEntity.internalServerError();
		return "invalid";
	}
	
	/*@CrossOrigin(origins = "http://localhost:4200/mainpage")
	@GetMapping("/mainpage")
	@ResponseBody
	public List<StockObject> showData()
	{
		ArbitrageImp opp=new ArbitrageImp();
		List<StockObject> stocklist=opp.opportunity();
		System.out.println("ok");
		return stocklist;
	}*/

}
