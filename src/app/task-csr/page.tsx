'use client';

import { useEffect, useState } from 'react';
import { apiBaseUrl, defaultHeaders } from '@/lib/apiConfig';
import type { Task } from '@/lib/types';
import Link from 'next/link';

export default function TaskCSR() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch(`${apiBaseUrl}/workspaces/tasks`, {
      headers: defaultHeaders,
    })
      .then((res) => res.json())
      .then(setTasks);
  }, []);

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
