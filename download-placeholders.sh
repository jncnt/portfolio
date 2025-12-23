#!/bin/bash
# Generate placeholder images using a public service
# This script creates placeholder images for projects and certifications

echo "Creating placeholder image directories..."
mkdir -p public/images

echo "Downloading placeholder images..."

# Project placeholders (using placeholder service)
curl -o public/images/project-1.jpg "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop" &
curl -o public/images/project-2.jpg "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop" &
curl -o public/images/project-3.jpg "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop" &

# Certification placeholders
curl -o public/images/cert-istqb.jpg "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop" &
curl -o public/images/cert-react.jpg "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop" &
curl -o public/images/cert-webdev.jpg "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop" &

wait

echo "✓ Placeholder images downloaded to public/images/"
echo "Note: Replace these with your actual project screenshots and certificate images"
