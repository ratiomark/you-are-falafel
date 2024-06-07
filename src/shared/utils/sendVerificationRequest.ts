import sgMail from '@sendgrid/mail'

// sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

type SendVerificationRequestParams = {
	identifier: string
	url: string
	provider: {
		from: string
	}
	firstName: string
}

export async function sendVerificationRequest(params: any) {
	console.log(params)
	const { identifier, url, provider, firstName } = params
	const { host } = new URL(url)
	// const msg = {
	// 	to: identifier,
	// 	from: provider.from,
	// 	subject: `Sign in to ${host}`,
	// 	html: `
	//     <p>Hello ${firstName},</p>
	//     <p>Please click the link below to sign in to ${host}:</p>
	//     <p><a href="${url}">${url}</a></p>
	//   `,
	// }
	// await sgMail.send(msg)
}
