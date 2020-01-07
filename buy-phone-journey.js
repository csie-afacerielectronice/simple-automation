const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false,
    args: []});
  const page = await browser.newPage();
  page.setViewport({width: 1920, height: 1080});
  
  await page.goto('https://www.telekom.ro/promotie-smartphones/', {waitUntil: 'load'});
  console.log('page loaded');
  
  await page.screenshot({path: 'promotion.png'});

  const buy = '#bf_phones_list_id > div:nth-child(2) > div.bf_phone_actions > form > input.btn.btn-primary';
  await Promise.all([
    page.click(buy),
    page.waitForNavigation({waitUntil: 'load'})
  ]);
  await page.screenshot({path: 'basket.png'});

  const finalize = '.proceedToCheckout';
  await Promise.all([
    page.click(finalize),
    page.waitForNavigation({waitUntil: 'load'})
  ]);

  await page.screenshot({path: 'checkout.png'});

  await page.focus('#firstName')
  await page.keyboard.type('Gogu')

  await page.focus('#lastName')
  await page.keyboard.type('Testeaza')

  await page.focus('#cnp')
  await page.keyboard.type('2960426120028')

  await page.focus('#phoneNo')
  await page.keyboard.type('0767100342')

  await page.focus('#email')
  await page.keyboard.type('eduard.budacu@gmail.com')
  
  await page.click('#form-checkout-personal-data-new > p > span.b2c_ckt_submit > input.btn.btn-primary.btn-rect');

  //TODO - implement the address automation


 // await browser.close();
})();