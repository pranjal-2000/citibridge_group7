package com.example.stockData.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.AllArgsConstructor;
import yahoofinance.YahooFinance;
import java.io.*;
import java.math.BigDecimal;
import com.example.stockData.Model.StockObject;

@AllArgsConstructor
@Service
public class StockService
{
	public StockObject searchStock(final String ticker)
	{
		try
		{
			return new StockObject(YahooFinance.get(ticker));
		}
		catch(IOException e)
		{
			System.out.println("Error");
		}
		return null;
	}
	public BigDecimal findPrice(final StockObject stock) throws IOException
	{
		//get Stock from Yahoo finance API
		return stock.getStock().getQuote(true).getPrice();
	}

}

