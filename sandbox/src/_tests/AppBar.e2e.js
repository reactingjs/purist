const puppeteer = require('puppeteer')

let page
let browser
const width = 1920
const height = 1080

beforeAll(async () => {
  browser = await puppeteer.launch({
    args: [`--window-size=${width},${height}`],
    headless: false,
    slowMo: 250
  })

  page = await browser.newPage()
  await page.setViewport({ width, height })
})

afterAll(() => {
  browser.close()
})

describe('AppBar', () => {
  it('should be 60px tall', async () => {
    await page.goto('localhost:5000')

    const appBarHeight = await page.$eval(
      // TODO: Add static selectors to core-components.
      '#app > div > div > div:nth-child(1)',
      (el) => el.clientHeight
    )

    expect(appBarHeight).toEqual(60)
  })
})
