import { MetadataRoute } from "next"

export const baseUrl = 'https://starliteastro.github.io'

export default function sitemap(): MetadataRoute.Sitemap {
  let routes = ['', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))
  return [...routes]
}