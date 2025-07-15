import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-xl border border-gray-200">
  <h1 className="text-3xl font-bold text-center text-indigo-700 mb-4">
    Task Rendering Demo
  </h1>

  <p className="text-gray-700 text-center mb-4">
    Chọn một hình thức render để xem:
  </p>

  <ul className="list-disc pl-6 space-y-3 text-gray-800">
    <li>
      <Link
        href="/task-ssr"
        className="text-blue-600 hover:underline hover:text-blue-800"
      >
        Server-side Rendering (SSR)
      </Link>
    </li>
    <li>
      <Link
        href="/task-ssg"
        className="text-blue-600 hover:underline hover:text-blue-800"
      >
        Static Site Generation (SSG)
      </Link>
    </li>
    <li>
      <Link
        href="/task-csr"
        className="text-blue-600 hover:underline hover:text-blue-800"
      >
        Client-side Rendering (CSR)
      </Link>
    </li>
  </ul>
</div>

  );
}
