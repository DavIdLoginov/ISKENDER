import Categories from "../organisms/Categories";
import Header from "../organisms/Header";
import Naming from "../molecules/Naming";
import Stories from "../organisms/Stories";
import Swipper from "../organisms/Swipper";
import News from "../organisms/News";
import Address from "../organisms/Address";

function MainPage() {
  return (
    <>
      <Header />
      <main>
        <Stories />

        <Naming title="Категории" podTitle="" />

        <Categories />

        <Naming title="Хиты продаж" podTitle="перейти в каталог" />

        <Swipper variant={1} />

        <Naming title="Новости" podTitle="все" />

        <News />

        <Naming title="Аукционные товары" podTitle="перейти в каталог" />

        <Swipper variant={2} />

        <Naming title="Адреса магазинов" podTitle="" />

        <Address />
      </main>
    </>
  );
}

export default MainPage;
