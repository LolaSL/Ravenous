const apiKey = "cbsIfchzNEAZYiM8EQZMjaNgQCkmUW2uKezMCk09XBxJrjxb5J_x8Qa6kfjzOIXkDmygoOPK_wOrZx1r4Yobr-4xjlnAnOzxpZd9oHzGc3ODT9JefgTvARlsSxb_ZXYx";
const cors = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "https://api.yelp.com/v3";
const searchEndpoint = "/businesses/search";

const getSuggestions = async (keyword, location, sort) => {
  const endpoint = `${cors}${baseUrl}${searchEndpoint}?term=${keyword}&location=${location}&sort_by=${sort}`;

  try {
    const response = await fetch(endpoint,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    );
    if (response.ok) {
       const jsonResponse = await response.json();
        const results = jsonResponse.businesses.map((business) => ({
        id: business.id,
        img: business.image_url,
        name: business.name,
        address: `${business.location.display_address[0]}, ${business.location.display_address[1]}`,
        category: business.categories[0].title,
        rating: business.rating,
        reviews: business.review_count
      }));
      return results;
    }
  }
  catch (error) {
    console.log(error);
  };
};
export default getSuggestions;