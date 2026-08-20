import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export default function ProductPage() {
  return (
    <main>
      <nav>
        <Link href="/">Home</Link>
      </nav>

      <h1>MacBook Pro</h1>

      <Image
        src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D"
        alt="MacBook Pro"
        width={600}
        height={400}
      />

      <p>$1999</p>

      <Script
        src="https://example.com/analytics.js"
        strategy="lazyOnload"
      />
    </main>
  );
}