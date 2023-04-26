export default async function handler(req, res) {
    const response = await fetch(`${process.env.TOKEN_URL}?grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    const data = await response.json();
    
    return res.send(data)
  }