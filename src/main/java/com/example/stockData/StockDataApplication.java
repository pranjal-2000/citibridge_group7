package com.example.stockData;

import java.io.IOException;
import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.stockData.Model.StockObject;
import com.example.stockData.Service.ArbitrageImp;
import com.example.stockData.Service.StockService;

import yahoofinance.Stock;
import yahoofinance.YahooFinance;

@SpringBootApplication
public class StockDataApplication 
{
	public static void main(String[] args) throws IOException {
		SpringApplication.run(StockDataApplication.class, args);
		//StockDataImp ss=new StockDataImp();
		//ss.implement();
	}

}

/*class StockDataImp
{
	public void implement() throws IOException
	{
		BigDecimal price;
		StockService stockService=new StockService();
		final StockObject stock=stockService.searchStock("HDFC.NS");
		System.out.println(stock.getStock());
		price=stockService.findPrice(stock);
		System.out.println("Price:"+price);
		
		Stock stock1 = YahooFinance.get("HDFC.BO");
		BigDecimal price1 = stock1.getQuote(true).getPrice();
		BigDecimal change = stock1.getQuote().getChangeInPercent();
		BigDecimal peg = stock1.getStats().getPeg();
		BigDecimal dividend = stock1.getDividend().getAnnualYieldPercent();
		stock1.print();
		//ArbitrageImp opp=new ArbitrageImp();
		//opp.opportunity();
	}
}*/
