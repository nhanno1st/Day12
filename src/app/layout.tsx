import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Next.js Task Render Demo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
  <body className="bg-gray-50 text-gray-900 min-h-screen">
    <nav className="p-4 bg-white shadow-sm border-b flex justify-center gap-6 text-sm font-medium">
      <Link
        href="/task-ssr"
        className="text-blue-600 hover:text-blue-800 transition"
      >
        SSR
      </Link>
      <Link
        href="/task-ssg"
        className="text-blue-600 hover:text-blue-800 transition"
      >
        SSG
      </Link>
      <Link
        href="/task-csr"
        className="text-blue-600 hover:text-blue-800 transition"
      >
        CSR
      </Link>
    </nav>

    <main className="p-6 max-w-3xl mx-auto">{children}</main>
  </body>
</html>

  );
}
