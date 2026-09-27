import BookCard from './components/BookCard';

const books = [
  {
    id: 1,
    title: "7つの習慣",
    author: "スティーブン・R・コヴィー",
    rating: "★★★★★",
    comment: "小手先のテクニックより、まず自分の考え方を変える大切さに気づかされた。",
  },
  {
    id: 2,
    title: "イシューからはじめよ",
    author: "安宅和人",
    rating: "★★★★☆",
    comment: "「解く前に、そもそも解くべき問題か」を考える視点が今の仕事にも効いている。",
  },
  {
    id: 3,
    title: "嫌われる勇気",
    author: "岸見一郎・古賀史健",
    rating: "★★★★☆",
    comment: "対話形式で読みやすく、他人の評価に振り回されすぎない考え方が学べた。",
  },
];

function App() {
  return (
    <main className="max-w-2xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">わたしの本棚</h1>
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          rating={book.rating}
          comment={book.comment}
        />
      ))}
    </main>
  );
}

export default App;