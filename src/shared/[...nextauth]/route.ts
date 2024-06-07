// import NextAuth, { AuthOptions } from 'next-auth'
// import { PrismaAdapter } from '@next-auth/prisma-adapter'
// import { sendVerificationRequest } from '@/shared/utils/sendVerificationRequest'

// export const authOptions: AuthOptions = {
// 	providers: [
// 		// @ts-ignore
// 		{
// 			id: 'sendgrid',
// 			type: 'email',
// 			sendVerificationRequest: sendVerificationRequest,
// 		},
// 	],

// 	pages: {
// 		signIn: '/signin',
// 	},
// 	adapter: PrismaAdapter(prisma),
// 	session: {
// 		strategy: 'jwt',
// 	},
// }

// const handler = NextAuth(authOptions)
// export { handler as GET, handler as POST }
