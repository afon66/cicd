import { useState } from "react";
import "./App.css";
import { Division } from "./division";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Division />
        <p style={{color: 'green'}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic odio
          similique aliquid itaque velit exercitationem fugiat soluta cupiditate
          culpa nobis, voluptatibus sapiente! Explicabo tempora, reprehenderit
          iure recusandae inventore natus expedita distinctio veniam quis?
          Cumque assumenda quo adipisci fugit voluptates! Voluptates asperiores
          in nulla repudiandae laboriosam corrupti eveniet quas est, neque autem
          veritatis. Aspernatur, ad. A aspernatur aperiam quisquam molestias
          iusto amet veritatis dolore, mollitia illum autem repudiandae, omnis
          ipsum perferendis laboriosam dolor illo dignissimos possimus
          doloremque. Quidem ex accusamus ipsa minima soluta molestiae impedit.
          Quibusdam qui quam aperiam, dolores hic a sunt at, harum temporibus
          dolorem quae quidem explicabo veniam possimus deserunt minus suscipit
          dolorum! Dolores ex aliquid sequi iste eligendi, explicabo sed, alias
          minus iure, nemo deserunt eius nobis reprehenderit accusamus? Iusto
          tenetur expedita molestias magnam, inventore nesciunt voluptate
          repellendus dolorem deserunt nam numquam libero id? Hic voluptatibus
          natus, quaerat est odio sunt aspernatur assumenda commodi molestiae
          consequatur eveniet excepturi saepe neque corporis maiores
          reprehenderit quo illum iure, doloribus harum iste tempora numquam
          nemo praesentium? Non fugiat a tempora ut laboriosam. Ea amet
          quibusdam non doloribus veniam consequuntur nihil, nobis, id
          cupiditate temporibus, ipsum sapiente? Animi, iusto eum consequuntur
          officia, fugit perferendis harum laborum illo molestias tempore,
          adipisci neque?
        </p>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
