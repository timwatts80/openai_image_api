// App contents
const axios = require('axios');

const prompt = "a white siamese cat";
const size = "1024x1024";
const apiKey = process.env.OPENAI_API_KEY;

async function createImage() {
  try {
    const response = await axios.post('https://api.openai.com/v1/images', {
      prompt,
      n: 1,
      size,
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    const imageUrl = response.data.data[0].url;
    console.log('Image URL:', imageUrl);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

createImage();
