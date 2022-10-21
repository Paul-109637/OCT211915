package testrunners;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features={"featurefiles/candidatereg.feature"},glue="stepdefinitions",
dryRun=false,plugin={"com.cucumber.listener.ExtentCucumberFormatter:Reports/reports.html"},
		 format={"pretty","html:target/cucumber","json:target/cucumber.json"},tags="@Registration")
public class CandReg extends AbstractTestNGCucumberTests {

}
//format={"pretty","html:target/cucumber","json:target/cucumber.json"}
