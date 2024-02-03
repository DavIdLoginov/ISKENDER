import StoriesCard from "../atoms/stories/StoriesCard";

function Stories() {
  const data = [
    {
      name: "Скидки",
      img: "https://s3-alpha-sig.figma.com/img/9af1/7286/6bc25f324d518eceb8a1b4f263176e31?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bui1QIJecQagdMrxPXroTLLBuoWDWo9lbbZewEn1ezkbvvXNFY4aZFBj84HPo6ryF9R20d5Nenpv07n-JoS5Os40NfJhCATIflgMAX4EUH2ZADAtOw8lq89xWHxg4uYs7xaPul77s0~nZq2n46YHo-SXqPKw44pa22geVPF9o~Cu5~-rGZfzX0qSTU6mr6FfbEOuhPgVF6EarZAZWgJM0CP7jLzzpalxwCoNYILCEkXyxmYlta~tMisoY0exFQj4AJE2PhlSlZLDSiltnA-hAIdz9MYdfJQnjiGV0yE2Ni4BcWTviDkasXDBNbm29ywmCfZd6Yd0WmbH1MvxxqE4xA__",
    },
    {
      name: "Акции",
      img: "https://s3-alpha-sig.figma.com/img/0256/5b24/95f83086e477e613e9d3d35bdb23b545?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JeyG9QzzSVWbQkhuITKijY0i0J4cVZve-9ukJDd4PVt8mG3WErdEIBSECNNWABFxbWNs71CrwBZcZ8~uFVN8i~qAQxwI2ClkfFvJ3AlOsaAss3IFzX651iX8fmpoiKOdOba1UWfNg3PUfXwN-M5yMlVXPZIZqtLdHuaxlcRWWBCoqmYt2h37LPz917qqUxcGFwclV1VZfmsldMeQZAbv8hJVN0UyPDFWnpg9-sIPCqcco8tfgB0rqzAlhyChjDRbZRAhQgLjTCYmphcJq2zedpBQ0iKmhT84fNr6k7FyNFgCImdzheXdJPiSybaQOZPv~tW62a8ncLDXOyuDWCtM-Q__",
    },
    {
      name: "Распродажа",
      img: "https://s3-alpha-sig.figma.com/img/b0aa/f831/df5aaf65db088843bd8ef2090e9ba23b?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ADf4UwzkZUH0FX9C~FgfpQDWh6i-3XkjWArDTaBOTkW-gHy1TKP79Otmxb7P~EoeFVCYEdaGDATpG08-USycaXwp4qcm48EphtMc1vcoYgfgKf8fLmrIjqqD5HqV3kS0fn1GnEr1wRbm2hb6aYCnYen95sgd3hzSltNzJCtQQu5xniAkd2wfR3~h3U2fQsvn6URSDwdbmnr-1LjIfrQxk2ZHc1asdTyAPlDW51iipxQtfvsiWgHxydA~WvTTVIghvB26CctC64oxnwoUf7SxaJskM8g~PqyeH-AGv4YgQe443x9qMJR40MrT4LJT0IsAflAJxoWij4bsHYOibe3SIA__",
    },
    {
      name: "Подарки",
      img: "https://s3-alpha-sig.figma.com/img/3825/a63f/addbc5ba6c3128af444d8f717b9cbf29?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YgDnOBgLXWNAjw7XocgUgAjcecNl8x53bn9e6rQAKafZ2~yrbHIQr2XJhjdYox1N5RlN6Euc~YGTvmM9KvzQv7qU3~tlfpyx9l45J5JuINFnjzzTU6t5LxdgLpwfNA8rffHPGwjhh9AnkuZy5wHwzevYKDxXaaDtHW4uG5pl3thRzOC1wamxkGV6edw9X5izWyuwrjoKNYmWX3GNfQOeUowUdvsE0v0aaVI0HMegdfDwSdqCMHN5pohfVw2fX2jWvsxsa3i0ZULy65ZRFbt34jY~1zgRduZB4VodIYypLiPA-uub52Dvh68Aph866t5klVNrFdJk34pyzInq5JGnVw__",
    },
    {
      name: "Подарки",
      img: "https://s3-alpha-sig.figma.com/img/09c0/93f7/369ca53fff2dc8a0d5c596711dc43a4e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UHQblJgWZsiZKF402AQq72FleJGdaK76qKh95dAcuOUHvdHClRm2rlONGSGqSKTUC2h6eyiZp1O7OBxCz69aIsk5VBiL0TWQcSFU3xxnZ~wcg961JN3RmfnqGaB~Py0JYpTuob5LPlbbAOz-K~7uS~07M16u97dBlezFMfaEpI2JbLtvEtOybq3-fTMLYfkIvaDWrdU7LD~7S28nnnlHTHPaY4JMffEk~NN8DfSliT-sV7ElfG7RitBD3qhahPLoL6niaER-MSuU7pR-sj4ZgXwfIA6l2WdJUEudwiNc4hZ7~SwPJnPWdaPZOpeALC9NvjESza2XZvrTwhNW43D43A__",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "",
      img: "",
    },
  ];
  return (
    <section className="flex gap-10 mt-10">
      {data.map((item, index) => (
        <StoriesCard key={index} {...item} />
      ))}
    </section>
  );
}

export default Stories;
