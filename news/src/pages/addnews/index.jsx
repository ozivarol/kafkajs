import React, { useState } from "react";
import axios from "axios";

const AddNews = () => {
  const [title, setTitle] = useState("");
  const [text, setContent] = useState("");
  const [news_type, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [priority, setPriority] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newsData = {
      title,
      text,
      news_type,
      author,
      priority,
    };

    try {
      console.log(JSON.stringify(newsData));
      const response = await axios.post(
        "http://localhost:4040/news/createNews",
        newsData
      );

      if (response.status === 200) {
        alert("Haber başarıyla eklendi!");
      } else {
        alert("Haber eklenirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("Hata:", error);
      alert("Haber eklenirken bir hata oluştu.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 p-4 text-white text-center w-full">
        <h1 className="text-4xl font-extrabold">Haberler</h1>
        <p className="text-xl">Sizler için güncel haberler!</p>
      </header>

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Haber Ekle</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="text-sm font-semibold">
              Başlık
            </label>
            <input
              type="text"
              id="title"
              className="w-full p-2 border rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="content" className="text-sm font-semibold">
              İçerik
            </label>
            <textarea
              id="content"
              className="w-full p-2 border rounded-md"
              value={text}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="category" className="text-sm font-semibold">
              Tür
            </label>
            <input
              type="text"
              id="category"
              className="w-full p-2 border rounded-md"
              value={news_type}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="author" className="text-sm font-semibold">
              Yazar
            </label>
            <input
              type="text"
              id="author"
              className="w-full p-2 border rounded-md"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="priority" className="text-sm font-semibold">
              Öncelik (1-10 arası bir sayı)
            </label>
            <input
              type="number"
              id="priority"
              min="1"
              max="10"
              className="w-full p-2 border rounded-md"
              value={priority}
              onChange={(e) => setPriority(parseInt(e.target.value, 10))}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover-bg-blue-600"
          >
            Haber Ekle
          </button>
        </form>
      </div>

      <div className="footer">
        <footer className="bg-blue-500 p-4 text-white text-center">
          <p>&copy; 2023 Haberler Sitesi</p>
        </footer>
      </div>
    </div>
  );
};

export default AddNews;
