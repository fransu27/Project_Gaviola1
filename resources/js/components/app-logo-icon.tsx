import type { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <img
            src="acc-logo.png"
            alt="Abuyog Community College"
            className="size-full object-contain"
        />
    );
}