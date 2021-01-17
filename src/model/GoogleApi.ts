import axios from 'axios';

async function getGoogleId(accessToken: string) {
  let response = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`);
  return response.data;
}

