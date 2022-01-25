const axios = require('axios');


async function makeGetRequest() {

  let res = await axios.get();

  let data = res.data;
  console.log(data);
}

makeGetRequest();
