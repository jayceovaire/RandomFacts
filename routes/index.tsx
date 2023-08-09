import { Head } from "$fresh/runtime.ts";
import MyIsland from "../islands/MyIsland.tsx";
import fact_key from "../main.ts";


export default function Home() {

  return (
    <>
      <Head>
        <title>Random Facts</title>
      </Head>
      <h1 className={"flex justify-center text-center align-center"}>Press the button to learn a random fact</h1>
      <hr className="my-4 mx-auto w-3/4" />
      <div class="flex justify-center align-center">
            <MyIsland fact_key={fact_key} />
        </div>
    </>
  );
}
