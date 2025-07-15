import { getTaskById } from '@/lib/service';

export default async function TaskISR({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  console.log('TaskISR', { id }); 
  
  try {
    const task = await getTaskById(id);
    return (
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow border border-gray-200">
        <h1 className="text-2xl font-bold text-center text-emerald-700 mb-4">
          Task #{task.id} (ISR)
        </h1>
        <p className="text-lg text-gray-800">{task.title}</p>
      </div>
    );
  } catch (error) {
    return (
      <div className="max-w-xl mx-auto p-6 text-center text-red-600 bg-red-50 border border-red-200 rounded-xl shadow">
        Không tìm thấy task có ID: <strong>{id}</strong>
      </div>
    );
  }
}