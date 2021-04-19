const { Telegraf } = require('telegraf');
const dotenv = require('dotenv');
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT;
const bot = new Telegraf(process.env.BOT_TOKEN);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

let membersList = ['none'];
let stickerArr = [
    { "id": "CAACAgUAAxkBAAECMwtgfGgZrBr_2MFM-VqNTQABywkeJ-0AAnkAA-vVjA7XhddiBhbHtR8E" },
    { "id": "CAACAgIAAxkBAAECMw1gfGi6i2KgQPpiQZq9vyqloehXMAACLAkAAryT2EhOI9U2ONvszR8E" },
    { "id": "CAACAgIAAxkBAAECMw9gfGjefNhV7zEjkJkHs0F2qwTsBgACBgADBc7CLcfjg7kRESs8HwQ" },
    { "id": "CAACAgIAAxkBAAECMxFgfGj7Tsq-NZhSp5AGg7YmCcYGMgACXQADkO08J41uRuay44IJHwQ" },
    { "id": "CAACAgEAAxkBAAECMxNgfGkV0YpH6lUPLJsQ_wEvBptVVAAC8AUAAmbKaAkeIsG13YeGxh8E" },
    { "id": "CAACAgEAAxkBAAECMxVgfGk3h4uZDHJ0CvjFr0ZbiEvFfQACLAUAAmbKaAly6N0q-lJBtx8E" },
    { "id": "CAACAgIAAxkBAAECMxlgfGm6IRMJ7YGnfrBguvnRZ9mMJQACwwcAAqbUwUlN-Oq0u8ow2h8E" },
    { "id": "CAACAgIAAxkBAAECMxtgfGnbwvFpYLI4tpCU6J2me68S3wACNgkAAjhNUUg9PWv7J-kS7R8E" },
    { "id": "CAACAgIAAxkBAAECMx1gfGnzJztZ_WEQWROWBuCnI05ulQACXgkAAkcEeEuifIY3lfUKOh8E" },
    { "id": "CAACAgIAAxkBAAECMx9gfGoDSHobmlWmaO05DgaWQLLPhAACOAADq891EbDcWeCuhV_qHwQ" },
    { "id": "CAACAgIAAxkBAAECMyNgfGovfJDl3hCrbVN3Z3jd0tL4QgACqQADaf0wHkVQRznyo-drHwQ" },
    { "id": "CAACAgIAAxkBAAECMyVgfGpOsP-wBQsFFXXU__WBDBZjrwAC0gEAAsVnCAABgpzLsIjCkgcfBA" },
    { "id": "CAACAgIAAxkBAAECMydgfGpq_WW8NA92Aug1R4kr7zYJrQACwwADe04qEB4ea94UmaWCHwQ" },
    { "id": "CAACAgIAAxkBAAECMylgfGqdsqMyml5RbFpZPRzpFYiqTwACUgADnnArDQYc1qeV5hRRHwQ" },
    { "id": "CAACAgIAAxkBAAECMytgfGqsczZ4u8COC39WrDhDR1rgvQACXQEAAlrjihfliV1DjL_77h8E" },
    { "id": "CAACAgIAAxkBAAECMytgfGqsczZ4u8COC39WrDhDR1rgvQACXQEAAlrjihfliV1DjL_77h8E" },
    { "id": "CAACAgIAAxkBAAECMy9gfGvp1irgoKIXl2gC0BJjilsnNgACfwAD-5_VJOldMqFkzsquHwQ" },
    { "id": "CAACAgIAAxkBAAECMzFgfGv8ylo2I5klqrjOWB2EWKO0WAACLAgBAAFji0YMrTLbAAF7sgF-HwQ" },
    { "id": "CAACAgIAAxkBAAECMzNgfGxEl8PQEMVCI3e07p4OvV4SxQACkAADamwZHBXuP64YmUu6HwQ" }
]

bot.start((ctx) => {
    ctx.reply('Привіт, бот буде сповіщати тебе про нових учасників, для їх перевірки надішли команду /check');
});

app.get('/', (req, res) => {
    res.send('hello there');
});

app.post('/newmember', (req, res) => {
    let memberName = req.body.name;
    let memberContact = req.body.contact;
    if (membersList[0] == 'none') {
        membersList.pop();
    }
    membersList.push({
        "name": memberName,
        "contacts": memberContact
    })
    console.log(memberName);
    console.log(memberContact);
    console.log(membersList);
})

bot.command('check', (ctx) => {
    if (membersList[0] == 'none') {
        console.log('!!!');
        ctx.reply('Зараз немає нових заявок. Перевірте пізніше.')
    } else {
        membersList.forEach((item, index, arr) => {
            ctx.replyWithSticker(random());
            ctx.reply(membersList[index].name + ' бажає приєднатися, його контакти: ' + membersList[index].contacts);
            console.log(membersList[index].contacts);
            console.log(membersList[index].name);
        });
        membersList = ['none'];
        console.log(membersList);
    }
})

function random() {
    let randomSticker = Math.floor(Math.random() * (19 - 0)) + 0;
    return stickerArr[randomSticker].id;
}

bot.launch();

app.listen(8800, () => {
    console.log(`Server is listening port $(port)`);
});

module.exports = app;