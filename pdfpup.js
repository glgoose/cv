const puppeteer = require("puppeteer");

const url = "http://localhost:8080";

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle0" });

    await page.pdf({
        path: "cv.pdf",
        format: "A4",
        preferCSSPageSize: true,
        printBackground: false
    });

    await browser.close();
})();