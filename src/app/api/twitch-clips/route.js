/* eslint-disable no-undef */
// app/api/twitch-clips/route.js
// Fetches recent clips for a Twitch channel using the Helix API.
//
// Required env vars (set in .env.local):
//   TWITCH_CLIENT_ID     — your Twitch app client ID
//   TWITCH_CLIENT_SECRET — your Twitch app client secret
//
// Usage: GET /api/twitch-clips?channel=DreamyDiino&limit=4

import { NextResponse } from "next/server";

const TOKEN_URL = "https://id.twitch.tv/oauth2/token";
const USERS_URL = "https://api.twitch.tv/helix/users";
const CLIPS_URL = "https://api.twitch.tv/helix/clips";

// Cache the app access token in module scope (survives across requests in prod)
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

    if (!res.ok) throw new Error("Failed to obtain Twitch token");

    const data = await res.json();
    cachedToken = data.access_token;
    // Expire 60 s before actual expiry to avoid edge-case staleness
    tokenExpiry = Date.now() + (data.expires_in - 60) * 1000;
    return cachedToken;
}

function formatDuration(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
}

function formatViews(n) {
    if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
    return String(n);
}

function formatDate(iso) {
    return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const channel = searchParams.get("channel") || "DreamyDiino";
    const limit = Math.min(parseInt(searchParams.get("limit") || "4", 10), 20);

    try {
        const token = await getAppToken();
        const headers = {
            "Client-ID": process.env.TWITCH_CLIENT_ID,
            Authorization: `Bearer ${token}`,
        };

        // 1. Resolve channel name → user ID
        const userRes = await fetch(`${USERS_URL}?login=${encodeURIComponent(channel)}`, { headers });
        if (!userRes.ok) throw new Error("User lookup failed");
        const userData = await userRes.json();
        const user = userData.data?.[0];
        if (!user) throw new Error(`Channel "${channel}" not found`);

        // 2. Fetch top clips (sorted by recent)
        const clipsRes = await fetch(
            `${CLIPS_URL}?broadcaster_id=${user.id}&first=${limit}&sort=time`,
            { headers, next: { revalidate: 300 } } // cache 5 min
        );
        if (!clipsRes.ok) throw new Error("Clips fetch failed");
        const clipsData = await clipsRes.json();

        const clips = (clipsData.data || []).map((c) => ({
            id: c.id,
            title: c.title,
            url: c.url,
            thumbnail: c.thumbnail_url,
            views: formatViews(c.view_count),
            date: formatDate(c.created_at),
            duration: formatDuration(c.duration),
        }));

        return NextResponse.json({ clips }, { status: 200 });
    } catch (err) {
        console.error("[twitch-clips]", err.message);
        return NextResponse.json({ clips: [], error: err.message }, { status: 200 });
    }
}