import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const postUrl = searchParams.get('url');

  if (!postUrl) {
    return NextResponse.json({ error: 'URL parameter required' }, { status: 400 });
  }

  try {
    // Use Instagram's public oEmbed API (no authentication required)
    const oembedUrl = `https://api.instagram.com/oembed/?url=${encodeURIComponent(postUrl)}&omitscript=true`;
    
    const response = await fetch(oembedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json',
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      // Log the error for debugging
      const errorText = await response.text();
      console.error('Instagram oEmbed API error:', response.status, errorText);
      throw new Error(`Failed to fetch Instagram data: ${response.status}`);
    }

    const data = await response.json();
    
    // Instagram oEmbed returns thumbnail_url for reels
    // If thumbnail_url is not available, try to construct it from the post ID
    let thumbnailUrl = data.thumbnail_url;
    
    if (!thumbnailUrl && data.media_id) {
      // Fallback: construct thumbnail URL (this may not always work)
      thumbnailUrl = `https://www.instagram.com/p/${data.media_id}/media/?size=l`;
    }

    return NextResponse.json({ 
      thumbnail_url: thumbnailUrl,
      author_name: data.author_name || 'urbanhomeheroes',
      title: data.title || 'Instagram Reel',
      html: data.html,
      media_id: data.media_id
    });
  } catch (error) {
    console.error('Error fetching Instagram video:', error);
    // Return a response with null thumbnail so the component can handle it gracefully
    return NextResponse.json({ 
      thumbnail_url: null,
      author_name: 'urbanhomeheroes',
      title: 'Instagram Reel',
      error: error.message
    }, { status: 200 }); // Return 200 so component doesn't treat it as an error
  }
}
