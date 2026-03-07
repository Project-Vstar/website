export const runtime = 'edge';
import { NextResponse } from "next/server";

const TOKEN_URL = "https://id.twitch.tv/oauth2/token";
const STREAMS_URL = "https://api.twitch.tv/helix/streams";

let cachedToken = null;
let tokenExpiry = 0;

async function getAppToken() {
    if (cachedToken && Date.now() < tokenExpiry) return cachedToken;
    const res = await fetch(TOKEN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            client_id: process.env.TWITCH_CLIENT_ID,
            client_secret: process.env.TWITCH_CLIENT_SECRET,
            grant_type: "client_credentials",
        }),
    });
    const data = await res.json();
    cachedToken = data.access_token;
    tokenExpiry = Date.now() + (data.expires_in - 60) * 1000;
    return cachedToken;
}

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    // This allows multiple user_login params like ?user_login=dee&user_login=dreamydiino
    const logins = searchParams.getAll("user_login"); 
    
    if (logins.length === 0) return NextResponse.json({ data: [] });

    try {
        const token = await getAppToken();
        const query = logins.map(l => `user_login=${l}`).join('&');
        const res = await fetch(`${STREAMS_URL}?${query}`, {
            headers: {
                "Client-ID": process.env.TWITCH_CLIENT_ID,
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await res.json();
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({ data: [], error: err.message });
    }
}