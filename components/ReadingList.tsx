interface ReadingItem {
  title: string;
  category?: string;
  date?: string;
}

interface ReadingListProps {
  items: ReadingItem[];
}

export default function ReadingList({ items }: ReadingListProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Thoughts</h2>
      <p className="text-gray-600 mb-6 text-sm">
        Active engagement with industry trends, methodologies, and emerging patterns.
      </p>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex flex-col sm:flex-row sm:items-start sm:justify-between pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
            <div className="flex-1">
              <p className="text-gray-900 font-medium">{item.title}</p>
              {item.category && (
                <span className="inline-block mt-1 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                  {item.category}
                </span>
              )}
            </div>
            {item.date && (
              <span className="text-xs text-gray-400 mt-1 sm:mt-0 sm:ml-4">
                {item.date}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
