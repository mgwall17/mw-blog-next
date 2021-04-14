import React from "react";

export default function Home({ data }) {
  return (
    <div>
      {data &&
        data.map((data) => (
          <React.Fragment>
            <h2>{data.title}</h2>
            <div>{data.content}</div>
          </React.Fragment>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  // get posts from our api
  const res = await fetch("http://localhost:1337/about");
  const data = await res.json();

  return {
    props: { data },
  };
}
