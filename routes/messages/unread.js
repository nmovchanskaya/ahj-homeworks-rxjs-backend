const Router = require('koa-router');
const { faker } = require('@faker-js/faker');

const router = new Router();

let messages = [];
/* = [
    {
    "id": 12345,
    "from": "anya@ivanova",
    "subject": "Hello from Anya",
    "body": "Long message body here" ,
    "received": 1696726883278,
    },
    {
    "id": 11111,
    "from": "alex@petrov",
    "subject": "Hello from Alex Petrov!",
    "body": "Long message body here from Alex",
    "received": 1696726883278
    },
    ,
    {
    "id": 222,
    "from": "nick@petrov",
    "subject": "Hello from Nick!",
    "body": "Long message body here from Nick",
    "received": 1696726883278
    },
    {
    "id": 333,
    "from": "pups@petrov",
    "subject": "Hello from Pups!",
    "body": "Long message body here from Pups",
    "received": 1696725893278
    },
    {
    "id": 444,
    "from": "pups@petrov",
    "subject": "Hello from Pups!",
    "body": "Long message body here from Pups",
    "received": 1696725883278
    }
];*/

  for (let i = 0; i < 3; i++) {
    messages.push({
        "id": faker.number.int(),
        "from": faker.internet.email(),
        "subject": `Hello from ${faker.person.firstName()}`,
        "body": `Long message from ${faker.person.firstName()}`,
        "received": faker.date.past()
    });
  }

  console.log(messages);

router.post('/messages/unread', (ctx) => {

    console.log(ctx.request.body);
  
    ctx.response.set('Access-Control-Allow-Origin', '*');
  
    try {
        const arrayIds = ctx.request.body.ids;

        const unreadMessages = messages.filter(msg => !(arrayIds.includes(msg.id)));
        console.log(unreadMessages);

        messages.push({
            "id": faker.number.int(),
            "from": faker.internet.email(),
            "subject": `Hello from ${faker.person.firstName()}`,
            "body": `Long message from ${faker.person.firstName()}`,
            "received": faker.date.past()
        });

        ctx.response.body = JSON.stringify({ 
          status: "OK",
          timestamk: Date.now(),
          messages: unreadMessages
        });
    }
    catch(error) {
        console.log(error);
    }
  });

  module.exports = router;
