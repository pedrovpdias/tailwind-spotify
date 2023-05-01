export default async function handler(req, res) {
    const url = `${process.env.API_URL}albums/?ids=5lnQLEUiVDkLbFJHXHQu9m,2qwN15acAl3sm3Idce5vK9,27UqZoE1kV6sIV6uQcI28A,712VoD72K500yLhhgqCyVe,7h5xn0Olvx2p0eQcSt1Osy,6S0BIiWtnqU0PtumXMpin0`;

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