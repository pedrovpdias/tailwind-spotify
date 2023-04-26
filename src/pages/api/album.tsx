export default async function handler(req, res) {
    const url = `${process.env.API_URL}albums/382ObEPsp2rxGrnsizN5TX`;

    const token = await fetch(`${process.env.BASE_URL}api/access-token`);
    const accessToken = await token.json();

    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Authorization': `${accessToken.token_type} ${accessToken.access_token}`
        }
    });

    const data = await response.json();

    return res.send(data);
}