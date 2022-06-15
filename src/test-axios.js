import axios from "axios";

const backendGql = async ({ query, method }) => {
  try {
    const response = await axios(`https://staging.back.mouqy.com/graphql`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        query: query,
      },
    });
    if (!response.data.errors) {
      return response.data.data;
    } else {
      throw response.data.errors;
    }
  } catch (error) {
    console.warn("🚀 ~ shopifyApi ~ error", error);
    throw error;
  }
};

export default backendGql;
