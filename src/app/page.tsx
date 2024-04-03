import Navbar from "@/components/Navbar";
import Image from "next/image";

async function getData() {
  const query: string = `*[_type=="blog"]| order(_createdat desc){
    title,
    smallDescription,
    'currentSlug':slug.current
  }`;
}

export default function Home() {
  return (
    <div>
      <h1>Hello from Index Page</h1>
    </div>
  );
}
