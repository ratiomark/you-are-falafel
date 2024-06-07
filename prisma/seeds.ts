import { PrismaClient, Technology } from '@prisma/client'

const prisma = new PrismaClient()

const tech = [{ name: 'react' }, { name: 'sql' }]
const project = [{ name: 'next project' }, { name: 'blog project' }]

const seed = async () => {
	for (const t of tech) {
		await prisma.technology.create({ data: t })
	}
	for (const p of project) {
		await prisma.project.create({ data: p })
	}
}

seed()
