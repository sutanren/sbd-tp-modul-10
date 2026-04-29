import React, { useState, useEffect } from 'react';

const response = {
  page: 1,
  results: [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      image: "https://picsum.photos/500",
    },
  ],
};

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`Angka ${count} habis dibagi oleh 10!`);
    }
  }, [count]);

  return (
    <div className="min-h-screen bg-gray-100 font-sans pb-10">
      
      <nav className="bg-slate-800 text-white p-4 shadow-md flex justify-between items-center mb-8 px-8">
        <div className="font-bold text-xl tracking-wide">Sutan Rendy Rizaldi</div>
        <ul className="flex space-x-8 font-medium">
          <li className="hover:text-blue-300 cursor-pointer transition-colors">Home</li>
          <li className="hover:text-blue-300 cursor-pointer transition-colors">Profile</li>
          <li className="hover:text-blue-300 cursor-pointer transition-colors">Contact</li>
        </ul>
      </nav>

      <main className="max-w-6xl mx-auto px-4">
        
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm text-center max-w-md mx-auto border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Counter Demo</h2>
          <div className="text-5xl font-semibold mb-8 text-slate-700">{count}</div>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setCount(count - 1)} 
              className="bg-blue-200 hover:bg-blue-300 text-blue-900 px-6 py-2 rounded-lg font-bold shadow-sm transition-all"
            >
              -
            </button>
            <button 
              onClick={() => setCount(0)} 
              className="bg-blue-200 hover:bg-blue-300 text-blue-900 px-6 py-2 rounded-lg font-bold shadow-sm transition-all"
            >
              Reset
            </button>
            <button 
              onClick={() => setCount(count + 1)} 
              className="bg-blue-200 hover:bg-blue-300 text-blue-900 px-6 py-2 rounded-lg font-bold shadow-sm transition-all"
            >
              +
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Data Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {response.results.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col border border-gray-200 hover:shadow-md transition-shadow">
                <img 
                  src={`${item.image}?random=${item.id}`} 
                  alt={item.title} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg mb-3 capitalize text-slate-800 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm flex-1 whitespace-pre-line line-clamp-4">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}