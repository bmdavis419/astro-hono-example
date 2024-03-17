export const EmailList: React.FC<{
  emails: { email: string; createdAt: Date }[];
}> = ({ emails }) => {
  return (
    <div className="w-full overflow-auto rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="min-w-full">
        <thead className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
          <tr className="divide-x divide-gray-200 dark:divide-gray-700">
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Created At</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-gray-50 text-sm dark:divide-gray-700 dark:bg-gray-900">
          {emails.map((e, i) => {
            return (
              <tr
                className="divide-x divide-gray-200 dark:divide-gray-700"
                key={i}
              >
                <td className="px-4 py-3">{e.email}</td>
                <td className="px-4 py-3">
                  {new Date(e.createdAt).toDateString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
