import axios from "axios";
import React from "react";

function formatDateTime(dateTime) {
  const date = new Date(dateTime);
  const formattedDate = date.toLocaleDateString("tr-TR");
  const formattedTime = date.toLocaleTimeString("tr-TR");
  return `${formattedDate} ${formattedTime}`;
}
function ListNews({ newsData }) {
  return (
    <div>
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 p-4 text-white text-center">
        <h1 className="text-4xl font-extrabold">Haberler</h1>
        <p className="text-xl">Sizler için güncel haberler!</p>
      </header>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsData.map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white"
            >
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-blue-500 mb-2">
                  {item.value.title}
                </h2>
                <p className="text-gray-700">{item.value.text}</p>
                <div className="flex justify-between text-gray-600 mt-4">
                  <p>{item.value.news_type}</p>
                  <p>Öncelik: {item.value.priority}</p>
                </div>
                <div className="text-gray-600 mt-2">
                  <p>
                    Oluşturulma Tarihi: {formatDateTime(item.value.createdAt)}
                  </p>
                  <p>Yazar: {item.value.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer">
        <footer className="bg-blue-500 p-4 text-white text-center">
          <p>&copy; 2023 Haberler Sitesi</p>
        </footer>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:5050/listnews/listNews");

    if (response.data && Array.isArray(response.data)) {
      return {
        props: {
          newsData: response.data,
        },
      };
    } else {
      return {
        props: {
          newsData: [],
        },
      };
    }
  } catch (error) {
    console.error("Hata:", error);
    return {
      props: {
        newsData: [],
      },
    };
  }
}

export default ListNews;
