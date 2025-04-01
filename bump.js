const { Client } = require("discord.js-selfbot-v13");
require("dotenv").config();

const client = new Client();

client.on("ready", async () => {
   console.log(`Logged in as ${client.user.tag}!`);

   const channel = await client.channels.fetch(process.env.BUMP_CHANNEL);

   async function bump() {
      try {
         await channel.sendSlash("302050872383242240", "bump");
         console.count("Bumped!");
      } catch (err) {
         console.error("Failed to bump:", err.message);
      }
   }

   function loop() {
      const randomNum =
         Math.floor(Math.random() * (9000000 - 7200000 + 1)) + 7200000;
      setTimeout(() => {
         bump();
         loop();
      }, randomNum);
   }

   bump();
   loop();
});

client.login(process.env.TOKEN);
