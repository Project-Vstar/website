export async function fetchLiveStreams(logins) {
  if (!logins.length) return [];
  const params = logins.map((l) => `user_login=${l}`).join("&");
  try {
    const res = await fetch(`/api/twitch/streams?${params}`);
    if (!res.ok) return [];
    return (await res.json()).data ?? [];
  } catch { return []; }
}

export async function fetchSchedule(broadcasterId) {
  if (!broadcasterId) return [];
  try {
    const res = await fetch(`/api/twitch/schedule?broadcaster_id=${broadcasterId}`);
    if (!res.ok) return [];
    return (await res.json()).data?.segments ?? [];
  } catch { return []; }
}

export async function fetchClips(twitchLogin, limit = 2) {
  if (!twitchLogin) return [];
  try {
    const res = await fetch(`/api/twitch-clips?channel=${twitchLogin}&limit=${limit}`);
    if (!res.ok) return [];
    return (await res.json()).clips ?? [];
  } catch { return []; }
}

export async function fetchYouTubeVideos(channelId, limit = 2) {
  if (!channelId) return [];
  try {
    const res = await fetch(`/api/youtube/videos?channelId=${channelId}&limit=${limit}`);
    const data = await res.json();
    if (data.error) {
      console.warn("YouTube API:", data.error.message);
      return [];
    }
    return (data.items || []).map((item) => ({
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      date: new Date(item.snippet.publishedAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
      }),
    }));
  } catch (error) {
    console.warn("YouTube fetch failed:", error);
    return [];
  }
}
