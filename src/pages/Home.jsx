function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to Bluestock IPO Platform</h1>
        <p className="text-lg text-gray-700 mb-6">Track upcoming IPOs and invest smartly.</p>
        <a href="/ipos" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          View IPOs
        </a>
      </div>
    );
  }
  
  export default Home;
  