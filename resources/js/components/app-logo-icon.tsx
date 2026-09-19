import type { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon(
    props: ImgHTMLAttributes<HTMLImageElement>,
) {
    return (
        <img
            {...props}
            src="/acc-logo.png"
            alt="Abuyog Community College"
            className="size-full object-contain"
        />
    );
}
