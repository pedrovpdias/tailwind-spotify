export default async function handler(req, res) {
    const url = `${process.env.API_URL}tracks/11dFghVXANMlKmJXsNCbNl`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Authorization': `${req.token_type} ${req.access_token}`
        }
    });
    const data = await response.json();

    return res.send(data);
}