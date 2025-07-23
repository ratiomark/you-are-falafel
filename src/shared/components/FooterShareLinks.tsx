'use client';
import Link from 'next/link';
import { copyToClipboard, getShareHelper } from '../lib/shareHelpers';
import { usePostHog } from 'posthog-js/react';


const socialTitleList = ['facebook', 'linkedIn', 'twitter'];

export const FooterShareLinks = () => {
  const posthog = usePostHog();
  const linkTexts = ['Facebook', 'LinkedIn', 'Twitter'];
  return (
    <>
      <span
        onClick={() => {
          posthog.capture('share_copied_to_clipboard', { from: 'footer' });
          copyToClipboard();
        }}
      >
        <span className="underline-effect underline-white cursor-pointer">Copy link</span>
        &nbsp;/&nbsp;
      </span>
      {linkTexts.map((text, index) => {
        return (
          <Link
            target="_blank"
            href={getShareHelper(index)}
            key={text}
            onClick={() => {
              posthog.capture(`share_${socialTitleList[index]}`, { from: 'footer' });
            }}
          >
            <span className="underline-effect underline-white cursor-pointer">{text}</span>
            {index !== linkTexts.length - 1 && <span>&nbsp;/&nbsp;</span>}
          </Link>
        );
      })}
    </>
  );
};
