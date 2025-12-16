// src/utils/cloudinary.ts
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
})

export const uploadToCloudinary = async (buffer: Buffer, filename: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    const publicId = filename.replace(/\.[^/.]+$/, '')

    cloudinary.uploader
      .upload_stream(
        {
          folder: 'payload-media',
          public_id: publicId,
          resource_type: 'auto',
          overwrite: true,
        },
        (error, result) => {
          if (error) {
            reject(error)
          } else {
            resolve(result)
          }
        },
      )
      .end(buffer)
  })
}

export { cloudinary }
