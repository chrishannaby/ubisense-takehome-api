exports.handler = async function (event, context) {
  const now = new Date().getTime();
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify([
      {
        name: "Assembly A",
        cycleTimeHrs: 1.5,
        currentProduct: {
          id: "604676cf40ef9e9137f831e7",
          entryTime: now - (31 * 60 * 1000)
        }
      },
      {
        name: "Assembly B",
        cycleTimeHrs: 1,
        currentProduct: {
          id: "604676cf40ef9e9137f831e7",
          entryTime: now - (20 * 60 * 1000)
        }
      },
      {
        name: "Assembly C",
        cycleTimeHrs: 2,
        currentProduct: null
      },
      {
        name: "Inspection",
        cycleTimeHrs: 0.5,
        currentProduct: {
          id: "604676cf40ef9e9137f831e7",
          entryTime: now - (5 * 60 * 1000)
        }
      },
    ])
  }
}