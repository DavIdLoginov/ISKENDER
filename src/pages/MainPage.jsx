import Categories from "../organisms/Categories";
import Header from "../organisms/Header";
import Stories from "../organisms/Stories";

function MainPage() {
  return (
    <>
    <Header />
    <main>
      <Stories />
      <h3 className="section__title">
        Категории
      </h3>
      <Categories />
    </main>
    </>
  );
}

export default MainPage;
