export default function Boxing({ tugas, deadline }) {
  return (
    <div className="p-4">
      <h1 className="text-lg p-2">{tugas}</h1>
      <h1 className="text-lg p-2">{deadline}</h1>
    </div>
  );
}
