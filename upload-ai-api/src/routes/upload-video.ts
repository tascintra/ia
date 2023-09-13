import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function uploadVideoRoute(app: FastifyInstance) {
  app.post("/videos", async () => {
    
  })
}