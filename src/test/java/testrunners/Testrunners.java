package testrunners;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//@RunWith(Cucumber.class)
@CucumberOptions(features={"featurefiles/AiLogin.feature",
		"featurefiles/AiLogout.feature",
		"featurefiles/AiCreateNewJob.feature",
		"featurefiles/addcollaborator.feature",
		"featurefiles/SkillsandEdu.feature",
		"featurefiles/additionalinfo.feature",
		"featurefiles/prescreeningQ.feature"},glue="stepdefinitions",
dryRun=false,plugin={"com.cucumber.listener.ExtentCucumberFormatter:Reports/loginres.html"},
		 format={"pretty","html:target/cucumber","json:target/cucumber.json"},tags="@RecruiterLogin,@Registration,@RecruiterLogout,@CreateNewJob,@SkillsandEducation,@AdditionalInfo,@PreScreeningQuestions")
public class Testrunners extends AbstractTestNGCucumberTests
{
	

}
