import { NextResponse } from 'next/server';

const INSTAGRAM_USERNAME = 'urbanhomeheroes';

export async function GET() {
  try {
    // Fetch Instagram profile using a public endpoint
    // Note: Instagram's public API is limited, so we'll use a workaround
    const response = await fetch(
      `https://www.instagram.com/${INSTAGRAM_USERNAME}/?__a=1&__d=dis`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );

    if (!response.ok) {
      // If direct fetch fails, return empty array
      // Client will show fallback UI
      return NextResponse.json({ posts: [] });
    }

    const html = await response.text();
    
    // Try to extract post data from the HTML
    // Instagram embeds post data in script tags
    const scriptMatch = html.match(/window\._sharedData\s*=\s*({.+?});/);
    
    if (scriptMatch) {
      try {
        const data = JSON.parse(scriptMatch[1]);
        const posts = data?.entry_data?.ProfilePage?.[0]?.graphql?.user?.edge_owner_to_timeline_media?.edges || [];
        
        const postUrls = posts
          .slice(0, 6)
          .map((edge) => `https://www.instagram.com/p/${edge.node.shortcode}/`);
        
        return NextResponse.json({ posts: postUrls });
      } catch (parseError) {
        console.error('Error parsing Instagram data:', parseError);
      }
    }

    // Fallback: return empty array
    return NextResponse.json({ posts: [] });
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    // Return empty array on error - client will show fallback
    return NextResponse.json({ posts: [] });
  }
}
