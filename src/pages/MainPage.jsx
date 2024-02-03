import Categories from "../organisms/Categories";
import Header from "../organisms/Header";
import Naming from "../molecules/Naming";
import Stories from "../organisms/Stories";
import Swipper from "../organisms/Swipper";
import Counter from "../atoms/Counter";

function MainPage() {
  return (
    <>
      <Header />
      <main>
        <Stories />
        <Naming title="Категории" podTitle=''/>

        <Categories />

        <Naming title="Хиты продаж" podTitle='перейти в каталог'/>

        <Swipper />

        <Naming title="Новости" podTitle='все'/>

      </main>
    </>
  );
}

export default MainPage;
