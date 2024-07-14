'use client';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: 'identified_only',
    capture_pageview: false, // Disable automatic pageview capture, as we capture manually
    capture_pageleave: true,
    capture_heatmaps: true,
    capture_performance: true,
  });
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
// import { SessionProvider } from 'next-auth/react'

// type Props = {
// 	children?: React.ReactNode
// }

// export const Providers = ({ children }: Props) => {
// 	return <>{children}</>
// 	// return <SessionProvider>{children}</SessionProvider>
// }
// 'use client'

// import { SessionProvider } from 'next-auth/react'

// type Props = {
// 	children?: React.ReactNode
// }

// export const Providers = ({ children }: Props) => {
// 	return <SessionProvider>{children}</SessionProvider>
// }
