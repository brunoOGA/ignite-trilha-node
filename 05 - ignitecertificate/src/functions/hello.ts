export const handle = async (event) => {
  return {
    status: 201,
    body: JSON.stringify({ 
      message: 'Hello World Ignite Serverless'
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
};