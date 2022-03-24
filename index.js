const PORT = 8000;

const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();

const url = 'https://roic.ai/company/AAPL?utm_source=main';

axios(url).then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    $('.flex .text-left', html).each(function() {
        console.log($(this).text());
    })
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))