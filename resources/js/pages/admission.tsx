import { Head } from '@inertiajs/react';

export default function Admission() {
    return (
        <>
            <Head title="Admission" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Admission</h1>
                <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ipsam ea iste quo similique molestias
                        repellendus unde nisi, dicta eius totam numquam
                        placeat dignissimos sed est?
                    </p>
                    <p>
                        Voluptatem quisquam eius, illum nesciunt saepe
                        veritatis explicabo sit consequuntur dolorem
                        provident nihil, ratione at libero praesentium
                        dolores. Fugit quam autem repellat, aliquid iusto
                        quidem eaque.
                    </p>
                    <p>
                        Sit amet consectetur adipiscing elit sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                </div>
            </div>
        </>
    );
}
