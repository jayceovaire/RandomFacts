import { Button } from "../components/Button.tsx";
import { useState } from "https://esm.sh/stable/preact@10.15.1/denonext/hooks.js";
import { useSignal } from "https://esm.sh/v127/@preact/signals@1.1.3/X-ZS8q/denonext/signals.mjs";


interface StateProps {
    state: string;
    fact_key: string
}

export default function MyIsland(props: StateProps) {
    const [factState, setFactState] = useState<string>('');
    const factoid = useSignal(props.state);

    const getFact = async () => {
        try {
            const resp = await fetch(
                `https://api.api-ninjas.com/v1/facts?limit=1`,
                {
                    headers: {
                        'X-Api-Key': props.fact_key
                    }
                }
            );

            if (!resp.ok) {
                setFactState('An Error occurred');
            } else {
                const data = await resp.json();
                setFactState(data?.[0]?.fact || "No fact found");
            }
        } catch (error) {
            setFactState('An Error occurred');
        }
    };

    return (
        <>
            <div className={'grid grid-cols-5 grid-rows-3'}>
                <div className={' flex items-center justify-center row-start-1 col-start-2 col-span-3 text-center text-align-center text-lg'}>
                    {factState || factoid}
                </div>
                <div className={'flex items-center justify-center row-start-3 col-start-3 col-span-1 text-align-center text-center'}>
                    <Button onClick={getFact}>Press Me</Button>
                </div>
            </div>
        </>
    );
}
