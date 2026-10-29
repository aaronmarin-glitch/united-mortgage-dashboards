export default function SalesFloorPage() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#050b17]">
      <iframe
        src="/sales-floor/index.html"
        title="United Mortgage Sales Floor Dashboard"
        className="h-full w-full border-0"
        allowFullScreen
      />
    </main>
  );
}
