import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const worksDirectory = path.join(process.cwd(), 'content/works')

export function getWorksData() {
  const filenames = fs.readdirSync(worksDirectory)
  return filenames.map(filename => {
    const filePath = path.join(worksDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')

    const { data, content } = matter(fileContents)

    return {
      id: data.id,
      title: data.title,
      thumbnail: data.thumbnail,
      description: data.description,
      content
    }
  })
}

