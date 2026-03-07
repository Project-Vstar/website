/* eslint-disable no-undef */
export const runtime = 'edge';
import { NextResponse } from "next/server";

const TOKEN_URL = "https://id.twitch.tv/oauth2/token";
const SCHEDULE_URL = "https://api.twitch.tv/helix/schedule";

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
    const broadcaster_id = searchParams.get("broadcaster_id");

    if (!broadcaster_id) return NextResponse.json({ data: { segments: [] } });

    try {
        const token = await getAppToken();
        const res = await fetch(`${SCHEDULE_URL}?broadcaster_id=${broadcaster_id}`, {
            headers: {
                "Client-ID": process.env.TWITCH_CLIENT_ID,
                Authorization: `Bearer ${token}`,
            },
            next: { revalidate: 600 } // Cache for 10 mins
        });

        const data = await res.json();
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({ data: { segments: [] }, error: err.message });
    }
}