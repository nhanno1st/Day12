import { getTasks } from '@/lib/service';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function TaskSSR() {
  const tasks = await getTasks();

  return (

<div className="space-y-2">
  {tasks.map((task) => (
    <div key={task.id} className="bg-white shadow p-4 rounded flex justify-between items-center">
      <div>
        <p className="font-medium">✅ {task.title}</p>
      </div>
      <Link
        href={`/task-isr/${task.id}`}
        className="text-blue-600 hover:underline text-sm"
      >
        Detail
      </Link>
    </div>
  ))}
</div>
  );
}
