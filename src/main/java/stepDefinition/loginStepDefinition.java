package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class loginStepDefinition {

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

/*	@Then("^ user enters \"(.*)\" and  \"(.*)\" $")
	public void user_enters_username_and_password(String username,String password) throws InterruptedException  {
		System.out.println("3");
		Thread.sleep(3000);

		WebElement uname=driver.findElement(By.name(username));
		uname.sendKeys("vijaya1979");
		WebElement pword=driver.findElement(By.name(password));
		pword.sendKeys("password");
		System.out.println("3");

		 }*/
	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) {
		System.out.println("3");
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		WebElement uname=driver.findElement(By.name("username"));
		uname.sendKeys(username);
		WebElement pword=driver.findElement(By.name("password"));
		pword.sendKeys(password);
		System.out.println("3");

		
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

	@Then("^user is on Home Page$")
	public void user_is_on_Home_Page()  {
		String title=driver.getTitle();
		System.out.println("Title of home page===="+title);
		Assert.assertEquals("CRMPRO", title);
	    }
	
	@Then("^user moves to new contacts page$")
	public void user_moves_to_new_contacts_page()  {
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		WebElement contact_tab = driver.findElement(By.xpath("//a[contains(text(),\"Contacts\")]"));
		WebElement new_contact = driver.findElement(By.xpath("//a[contains(text(),\"New Contact\")]"));
		
		action.moveToElement(contact_tab).build().perform();
		new_contact.click();
	  
	}

	@Then("^user enters details for \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_details_for_and_and(String firstname, String lastname, String position)   {
		driver.findElement(By.id("first_name")).sendKeys(firstname);
		driver.findElement(By.id("surname")).sendKeys(lastname);
		driver.findElement(By.id("company_position")).sendKeys(position);
        driver.findElement(By.xpath("//input[@type=\"submit\" and @value=\"Save\"]")).click();
		
	 }


	@Then("^close Browser$")
	public void close_Browser()  {
	driver.quit();  
	}
	
	
	
}
