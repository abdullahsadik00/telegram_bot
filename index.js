const { Telegraf } = require("telegraf");
const axios = require("axios");

// Replace with your actual bot token
const bot = new Telegraf("7119256974:AAGici0WkFOv7Bbs6trSNCZb-RjwjdA2Qgw");

// URL of the external source for binary search code
const codeUrl = 'https://raw.githubusercontent.com/singhsanket143/FrontendDSA/master/Aug_29/trees.js';

// Function to fetch the binary search code from an external source
async function fetchBinarySearchCode() {
    try {
        const response = await axios.get(codeUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching binary search code:', error);
        return 'Error fetching code. Please try again later.';
    }
}

// Handle /start command
bot.start((ctx) => ctx.reply("Welcome 👋"));

// Handle /binarySearch command
bot.command('binarySearch', async (ctx) => {
    const binarySearchCode = await fetchBinarySearchCode();
    ctx.reply(`\`\`\`javascript\n${binarySearchCode}\n\`\`\``, { parse_mode: 'MarkdownV2' });
});

// Handle sticker messages
bot.on('sticker', (ctx) => {
    ctx.reply("❤️❤️❤️");
});

// Launch the bot
bot.launch()
    .then(() => console.log('Bot started successfully'))
    .catch((err) => console.error('Failed to start bot:', err));
