exports.handler = async function(event, context) {
  return {
      statusCode: 200,
      body: JSON.stringify([
        {
          id: "604676cf40ef9e9137f831e7",
          serialNumber: "121612129",
          model: "5R",
          image: "https://i.postimg.cc/MKbJTkrx/5R.jpg"
        },
        {
          id: "60467703c7e7ca6bca3b598c",
          serialNumber: "342612171",
          model: "2R",
          image: "https://i.postimg.cc/RVzz4CdX/2R.jpg"
        },
        {
          id: "6046770b70a8ffd3e95e7dc8",
          serialNumber: "9232842345",
          model: "8R",
          image: "https://i.postimg.cc/cLxytDV3/8R.png"
        },
        {
          id: "604677132b5381c3d19a0dcc",
          serialNumber: "784213414",
          model: "5R",
          image: "https://i.postimg.cc/MKbJTkrx/5R.jpg"
        },
        {
          id: "6046771b40c3fce9a6f8c11f",
          serialNumber: "4315112123",
          model: "2R",
          image: "https://i.postimg.cc/RVzz4CdX/2R.jpg"
        },
      ])
  };
}