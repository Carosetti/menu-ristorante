export default function MenuPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
      {/* Logo sopra il titolo */}
      <img
        src="/logo.jpeg"
        alt="Logo"
        className="mb-6 h-20 w-auto"
      />

      <h1 className="text-3xl font-bold mb-6 text-gray-900">Seleziona il menù</h1>

      <div className="flex flex-col gap-4">
        <a
          href="/menu-it.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600"
        >
          <img
            src="https://flagcdn.com/w40/it.png"
            alt="Italian Flag"
            width={24}
            height={16}
            className="inline-block"
          />
          Menù Italiano 
        </a>

        <a
          href="/menu-en.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600"
        >
          <img
            src="https://flagcdn.com/w40/us.png"
            alt="USA Flag"
            width={24}
            height={16}
            className="inline-block"
          />
          English Menu
        </a>
      </div>
    </main>
  );
}
