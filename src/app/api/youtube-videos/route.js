export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const channelId = searchParams.get("channelId");
    const limit = searchParams.get("limit") || 4;

    const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet&order=date&maxResults=${limit}&type=video`
    );
    const data = await res.json();

    const videos = data.items.map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        date: new Date(item.snippet.publishedAt).toLocaleDateString(),
        views: "",
    }));

    return Response.json({ videos });
}