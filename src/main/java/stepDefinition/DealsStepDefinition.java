package stepDefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DealsStepDefinition {
	WebDriver driver;
	
	@Given("^user is already on login page$")
	public void user_is_already_on_login_page() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\vijay\\Downloads\\chromedriver_win32\\chromedriver.exe");
		 driver = new ChromeDriver();
		 driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
			driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
			driver.get("https://classic.crmpro.com");
			System.out.println("1");

			System.out.println("entering login page");

	}

	@When("^whe title of login page is FREECRM$")
	public void whe_title_of_login_page_is_FREECRM()  {
		System.out.println("2");

		String title=driver.getTitle();
		System.out.println("title of login page is =="+title);
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
		
	  	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password(DataTable data)   {
		List<List<String>> dataval=data.raw();
		WebElement uname=driver.findElement(By.name("username"));
		uname.sendKeys(dataval.get(0).get(0));
		WebElement pword=driver.findElement(By.name("password"));
		pword.sendKeys(dataval.get(0).get(1));
	   }

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {
		System.out.println("4");

		WebElement loginbtn=driver.findElement(By.xpath("//div[@class=\"input-group-btn\"]//input[@class=\"btn btn-small\"]"));
		//loginbtn.click();
		System.out.println("4");

		JavascriptExecutor js= (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", loginbtn);
	   }

	@SuppressWarnings("deprecation")
	@Then("^user is on Home Page$")
	public void user_is_on_Home_Page()  {
		String title=driver.getTitle();
		System.out.println("Title of home page===="+title);
		Assert.assertEquals("CRMPRO", title);
	    }
	

	@Then("^user moves to new deals page$")
	public void user_moves_to_new_deals_page()   {
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		WebElement deal_tab = driver.findElement(By.xpath("//a[contains(text(),\"Deals\")]"));
		WebElement new_deal = driver.findElement(By.xpath("//a[contains(text(),\"New Deal\")]"));
		
		action.moveToElement(deal_tab).build().perform();
		new_deal.click();
	  
	   }

	@Then("^user enters new deals$")
	public void user_enters_new_deals(DataTable data)   {
	List<List<String>> dataval=data.raw();   
	driver.findElement(By.id("title")).sendKeys(dataval.get(0).get(0));
	driver.findElement(By.id("amount")).sendKeys(dataval.get(0).get(1));
	driver.findElement(By.id("probability")).sendKeys(dataval.get(0).get(2));
	driver.findElement(By.id("commission")).sendKeys(dataval.get(0).get(3));

	
	}
	

	@Then("^close Browser$")
	public void close_Browser()  {
	driver.quit();  
	}
	
	

}
