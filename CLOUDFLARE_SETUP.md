
# Cloudflare CDN and Security Setup Guide

This guide explains how to set up Cloudflare CDN, SSL, and image optimization for your Wrapping The World website.

## Step 1: Sign up for Cloudflare

1. Go to [Cloudflare.com](https://www.cloudflare.com/) and create an account or sign in
2. Add your domain (wrappingtheworld.com) to Cloudflare
3. Follow the steps to update your nameservers with your domain registrar

## Step 2: Configure Cloudflare Settings

### SSL/TLS Settings

1. Go to SSL/TLS tab in your Cloudflare dashboard
2. Set SSL/TLS encryption mode to "Full (strict)"
3. Enable "Always Use HTTPS" option under Edge Certificates
4. Enable "Automatic HTTPS Rewrites" 

### Speed Optimization

1. Go to Speed > Optimization in your Cloudflare dashboard
2. Enable Auto Minify for HTML, CSS, and JavaScript
3. Enable Brotli compression
4. Under "Image Optimization":
   - Enable "Polish" (set to "Lossy" for maximum compression)
   - Enable "Mirage" for faster loading of images
   - Enable "WebP" format conversion

### Caching Settings

1. Go to Caching in your Cloudflare dashboard
2. Set "Browser Cache TTL" to "Respect Existing Headers"
3. Set "Edge Cache TTL" to "2 hours" (or as needed)
4. Enable "Always Online"

### Page Rules

Create these page rules:

1. URL pattern: `wrappingtheworld.com/assets/*`
   - Cache Level: Cache Everything
   - Edge Cache TTL: 1 month
   
2. URL pattern: `wrappingtheworld.com/*.jpg`
   - Cache Level: Cache Everything
   - Edge Cache TTL: 1 week
   - Polish: Lossy

3. URL pattern: `wrappingtheworld.com/*.png`
   - Cache Level: Cache Everything
   - Edge Cache TTL: 1 week
   - Polish: Lossy

## Step 3: Netlify and Cloudflare Integration

Your Netlify configuration (`netlify.toml` and associated files) has been updated for optimal performance with Cloudflare. The site is now configured to:

1. Use appropriate cache headers for different asset types
2. Apply Cloudflare-specific optimizations via cf-polish headers
3. Ensure proper security with HTTPS enforcement
4. Optimize image loading and processing

## Monitoring and Optimization

After setup, monitor performance using:
- Cloudflare Analytics
- Google PageSpeed Insights
- Web Vitals in Google Search Console

## Additional Recommendations

1. Use WebP images where possible throughout your site
2. Consider enabling Cloudflare Argo for optimized routing
3. Set up Cloudflare Workers if you need edge computing capabilities
4. If experiencing any issues, check Cloudflare Troubleshooting in your dashboard

This configuration provides a good balance of performance and security while enabling modern image optimization techniques.
