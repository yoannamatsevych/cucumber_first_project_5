package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

import java.util.List;

public class TechGlobalBasePage {

    public TechGlobalBasePage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }



    @FindBy(id = "dropdown-button")
    public WebElement practiceDropdown;

    @FindBy(css = "#dropdown-menu a")
    public List<WebElement> dropdownOptions;




}
