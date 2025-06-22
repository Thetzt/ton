const fetch = require('node-fetch');

exports.handler = async () => {
  try {
    const response = await fetch('https://justanotherpanel.com/api/v2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        key: '7590d2173f1e2fe1ef245261a99aa5bf',
        action: 'balance'
      })
    });

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'API request failed' })
    };
  }
};
