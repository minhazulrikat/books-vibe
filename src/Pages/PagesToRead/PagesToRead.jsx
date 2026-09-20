import { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import BookContext from "../../Context/BookContext";
import EmptyList from "../ListedBooks/EmptyList/EmptyList";

const PagesToRead = () => {
  const { readBooks } = useContext(BookContext);

  const data = readBooks.map((book) => {
    return {
      name:
        book.bookName.length > 10
          ? `${book.bookName.slice(0, 10)}...`
          : book.bookName,
      pages: book.totalPages,
    };
  });
  return (
    <div className="container mx-auto px-4 min-h-[70vh] my-15">
      {readBooks.length === 0 ? (
        <EmptyList
          title={"No Reading Data Yet"}
          paragraph={
            "Your reading chart will appear here once you add books to your read list. Start reading and track your progress."
          }
        />
      ) : (
        <>
          <div className="block md:hidden">
            <ResponsiveContainer width="100%" height={600}>
              <BarChart
                layout="vertical"
                data={data}
              
              >
                <CartesianGrid
                  stroke="#94a3b8"
                  strokeDasharray="5 5"
                  strokeOpacity={0.5}
                />

                <XAxis type="number" stroke="#e11d48" />

                <YAxis
                  type="category"
                  dataKey="name"
                  stroke="#e11d48"
                  width={120}
                  tick={{ fontSize: 12 }}
                />

                <Tooltip />

                <Bar
                  dataKey="pages"
                  fill="#0ea5e9"
                  fillOpacity={0.85}
                  stroke="#0369a1"
                  strokeWidth={2}
                  radius={4}
                  barSize={30}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="hidden md:block">
            <ResponsiveContainer height={600} width={"100%"}>
              <BarChart
                style={{
                  aspectRatio: 1.618,
                }}
                data={data}
                responsive
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  stroke="#94a3b8"
                  strokeDasharray="5 5"
                  strokeOpacity={0.5}
                />
                <XAxis
                  tick={{ fontSize: 16 }}
                  interval={0}
                  dataKey="name"
                  stroke="#e11d48"
                />
                <YAxis stroke="#e11d48" strokeWidth={2} />
                <Tooltip />
                <Bar
                  dataKey="pages"
                  fill="#0ea5e9"
                  fillOpacity={0.85}
                  stroke="#0369a1"
                  strokeWidth={2}
                  radius={4}
                  barSize={30}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default PagesToRead;
