package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class TechGlobalFrontendTestingPage extends TechGlobalBasePage{

    public TechGlobalFrontendTestingPage(){
        super();
    }

    @FindBy(css = "div[id^='card']")
    public List<WebElement> cards;

    public void clickOnCard(String cardText){
        for (WebElement card : cards) {
            if(card.getText().equals(cardText)){
                card.click();
                break;
            }
        }
    }

}
