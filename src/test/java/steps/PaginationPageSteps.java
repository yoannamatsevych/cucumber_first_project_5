package steps;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import org.junit.Assert;
import org.openqa.selenium.NotFoundException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import pages.TechGlobalBasePage;
import pages.TechGlobalFrontendTestingPage;
import pages.TechGlobalPaginationPage;
import utils.Driver;
import utils.DropdownHandler;

import java.util.List;


public class PaginationPageSteps {

    WebDriver driver;
    TechGlobalBasePage techGlobalBasePage;
    TechGlobalFrontendTestingPage techGlobalFrontendTestingPage;
    TechGlobalPaginationPage techGlobalPaginationPage;

    @Before
    public void setPage(){
        driver = Driver.getDriver();
        techGlobalBasePage = new TechGlobalBasePage();
        techGlobalFrontendTestingPage = new TechGlobalFrontendTestingPage();
        techGlobalPaginationPage = new TechGlobalPaginationPage();
    }



    @Given("user is on {string}")
    public void user_is_on_https_techGlobal_training_netlify_app(String url) {
        driver.get(url);
    }

    @When("user moves to \"Practices\" header dropdown")
    public void user_moves_to_Practices_header_dropdown() {
        Actions action = new Actions(driver);
        action.moveToElement(techGlobalBasePage.practiceDropdown);
    }

    @When("user clicks on {string} header dropdown option")
    public void user_clicks_on_option(String option) {
        DropdownHandler.clickOnDropdownOptions(techGlobalBasePage.practiceDropdown,
                techGlobalBasePage.dropdownOptions, option);
    }

    @Then("user should be navigated to {string}")
    public void user_should_be_navigated_to_according_page(String navigatedURL) {
        Assert.assertEquals(navigatedURL, driver.getCurrentUrl());
    }

    @Then("user clicks on {string} card")
    public void user_clicks_on_Pagination_card(String cardName) {
        techGlobalFrontendTestingPage.clickOnCard(cardName);
    }

    @Then("user should see {string} heading")
    public void user_should_see_according_heading(String mainHeader) {
        switch(mainHeader){
            case "Pagination":
                Assert.assertEquals(mainHeader, techGlobalPaginationPage.mainHeader.getText());
                break;
            case "World City Populations 2022":
                Assert.assertEquals(mainHeader, techGlobalPaginationPage.subHeader.getText());
                break;
            default:
                throw new NotFoundException();
        }

    }

    @Then("user should see {string} paragraph")
    public void user_should_see_paragraph(String string) {
        Assert.assertEquals(string, techGlobalPaginationPage.contentParagraph.getText());
    }


    @And("user should see {string} button is disabled")
    public void userShouldSeeButtonIsDisabled(String button) {
        switch (button){
            case "Previous":
                Assert.assertFalse(techGlobalPaginationPage.previousButton.isEnabled());
                break;
            case "Next":
                Assert.assertFalse(techGlobalPaginationPage.nextButton.isEnabled());
                break;
            default:
                throw new NotFoundException();
        }

    }

    @And("user should see {string} button is enabled")
    public void userShouldSeeButtonIsEnabled(String button) {
        switch(button) {
            case "Next":
                Assert.assertTrue(button, techGlobalPaginationPage.nextButton.isEnabled());
                break;
            case "Previous":
                Assert.assertTrue(button, techGlobalPaginationPage.previousButton.isEnabled());
                break;
            default:
                throw new NotFoundException();
        }
    }

    @When("user clicks on {string} button")
    public void userClicksOnButton(String button) {
        techGlobalPaginationPage.nextButton.click();
    }

    @When("user clicks on {string} button till it becomes disabled")
    public void userClicksOnButtonTillItBecomesDisabled(String button) {
        while(techGlobalPaginationPage.nextButton.isEnabled()){
            techGlobalPaginationPage.nextButton.click();
        }
    }

    @And("user should see {string} city with info below and an image")
    public void userShouldSeeCityWithInfoBelowAndAnImage(String city, DataTable dataTable) {
        List<String> expectedTest = dataTable.asList();
        for (int i = 0; i < expectedTest.size(); i++) {
            Assert.assertEquals(expectedTest.get(i), techGlobalPaginationPage.cityInfo.get(i).getText());
        }
        if(techGlobalPaginationPage.nextButton.isEnabled()) techGlobalPaginationPage.nextButton.click();
    }


}

