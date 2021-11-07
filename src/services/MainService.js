const ANIME_API_BASE_URL="https://api.aniapi.com/v1"


const param={
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_ANI_API_KEY}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }
export const fetchCallAnime = async (url) => {
    try {
      let resp = await fetch(ANIME_API_BASE_URL + url, param);
      if (!resp.ok) {
        if (resp.status === 401) {
          window.location.reload();
        }
        const error = (resp && resp.message) || resp.statusText;
        throw new Error(error);
      }
      return await resp.json();
    } catch (error) {
      console.log("Error: " + error);
      throw error;
    }
  };