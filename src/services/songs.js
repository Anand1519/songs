import axios from "axios";

const BASE_URL = "https://itunes.apple.com/search?term=Michael+jackson";

const getSongs = async () => {
  try {
    const resp = await axios({
      method: "get",
      url: BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response", resp.data.results);
    return resp.data.results;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { getSongs };
