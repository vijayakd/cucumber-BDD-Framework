package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
 features = "C:\\Users\\vijay\\eclipse-workspace\\CucumberBDDFreeCRM\\src\\main\\java\\features\\login.feature"
 ,glue= {"stepDefinition"},
 format= {"pretty","html:test-output"},
 strict=true,
 monochrome=true,
 dryRun=false
 
 
 )


public class LoginRunner {

}
