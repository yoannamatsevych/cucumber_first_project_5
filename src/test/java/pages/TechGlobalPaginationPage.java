package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class TechGlobalPaginationPage extends TechGlobalBasePage{

    public TechGlobalPaginationPage(){
        super();
    }

    @FindBy(id = "main_heading")
    public WebElement mainHeader;

    @FindBy(id = "sub_heading")
    public WebElement subHeader;

    @FindBy(id = "content")
    public WebElement contentParagraph;

    @FindBy(id = "previous")
    public WebElement previousButton;

    @FindBy(id = "next")
    public WebElement nextButton;

    @FindBy(css = "div[class*='Data']>p")
    public List<WebElement> cityInfo;


}
