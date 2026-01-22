import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const postUrl = searchParams.get('url');

  if (!postUrl) {
    return NextResponse.json({ error: 'URL parameter required' }, { status: 400 });
  }

  try {
    // Use Instagram's public oEmbed API (no authentication required)
    const oembedUrl = `https://api.instagram.com/oembed/?url=${encodeURIComponent(postUrl)}`;
    
    const response = await fetch(oembedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Instagram data');
    }

    const data = await response.json();
    
    // Extract video URL from the HTML embed code
    // Instagram oEmbed returns HTML with video URL in the embed
    // We'll parse it to get the direct video URL
    let videoUrl = null;
    
    // Try to extract video URL from HTML
    if (data.html) {
      // Instagram embeds contain video URLs in the iframe src
      const iframeMatch = data.html.match(/src="([^"]+)"/);
      if (iframeMatch) {
        // The iframe URL contains the video data
        // We'll need to fetch the iframe content to get the actual video URL
        videoUrl = iframeMatch[1];
      }
    }

    return NextResponse.json({ 
      thumbnail_url: data.thumbnail_url,
      author_name: data.author_name,
      title: data.title,
      html: data.html,
      videoUrl: videoUrl
    });
  } catch (error) {
    console.error('Error fetching Instagram video:', error);
    return NextResponse.json({ error: 'Failed to fetch video' }, { status: 500 });
  }
}
