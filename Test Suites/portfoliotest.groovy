import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('https://remington7002.github.io/portfolio-ahmed/#/')

WebUI.click(findTestObject('Object Repository/Page_Ahmed Razas Portfolio/label__menu-icon'))

WebUI.click(findTestObject('Object Repository/Page_Ahmed Razas Portfolio/a_Contact'))

WebUI.click(findTestObject('Object Repository/Page_Ahmed Razas Portfolio/label__menu-icon_1'))

WebUI.click(findTestObject('Object Repository/Page_Ahmed Razas Portfolio/a_Education'))

WebUI.click(findTestObject('Object Repository/Page_Ahmed Razas Portfolio/span__navicon'))

WebUI.click(findTestObject('Object Repository/Page_Ahmed Razas Portfolio/a_Experience'))

WebUI.click(findTestObject('Object Repository/Page_Ahmed Razas Portfolio/div_Work'))

WebUI.click(findTestObject('Object Repository/Page_Ahmed Razas Portfolio/div_Work'))

WebUI.click(findTestObject('Object Repository/Page_Ahmed Razas Portfolio/label__menu-icon_1_2'))

WebUI.click(findTestObject('Object Repository/Page_Ahmed Razas Portfolio/a_Contact'))

WebUI.click(findTestObject('Object Repository/Page_Ahmed Razas Portfolio/span__navicon_1'))

WebUI.click(findTestObject('Object Repository/Page_Ahmed Razas Portfolio/a_Home'))

WebUI.closeBrowser()

