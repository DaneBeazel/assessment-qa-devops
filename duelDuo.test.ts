
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays choices', async () => {
    const draw = await driver.findElement(By.css('button'))
    const displayed = await driver.findElement(By.id('choices'))
    await draw.click()
    await driver.sleep(4000)
    expect(displayed).toBe(true)
})

test('Add to duo button displays player-duo', async () => {
    const addButton = await driver.findElement(By.css('/bot-btn'))
    await addButton.click()
    await driver.sleep(4000)
})