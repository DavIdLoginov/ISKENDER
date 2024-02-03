import React from "react";
import CategoriesCard from "../atoms/categories/CategoriesCard";

const Categories = () => {
  const data = [
    {
      quantity: "3000 товаров",
      name: "Ванны",
      img: "https://s3-alpha-sig.figma.com/img/70ee/62a2/715c6d5b09301972c6935e1bdca70a66?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WzUrEJ6aEBkqC3Iy8THQGbhI3ME4O6laYm8K3f72qFtQgV23vu9Ho0VeJflOyss~urbExUqJavWV7gqhCwCTOweso9bOCxrWpSrFsoMnEMZCqfqBSaaItjgdbOabJb1Mtc6nFxIicwHvOm745KJXAmtnq0RTtwy~iB-3a6feGVLgp-hScLJ-0CEQLdBbvs7I-C0WwM6Ij2NHJrba2ZOdzwufVnhrxZiDmEx-9peQrrODs145q2fpYfDBagP3ROHWJ4Ir6rrOv8jug-9x2kpByZfUwDlWUh1Ja-n-vrJ~dQND4uWKuP~L~itFfdx2lmIp52qQ3FO6xZPNqPbX~YUZcg__",
    },
    {
      quantity: "3000 товаров",
      name: "Смесители",
      img: "https://s3-alpha-sig.figma.com/img/5b0e/c834/439ead342ee7ab86ba3278506004ca5f?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K77ur4rJo9IFjnsVNoSbDGOGWMvAQiV25Re9uLYlXVLl7GEP~YG1X87hgB3u7WPz2s~BeN8~yyrUBnG8qowpDKRQvipnGHlpUyS4wQK3ZIfZsQZNYG8mTf70s94Dofkaaf8gCOeoho3GrLR0xBMrQWeHWdsBofMz-wS6mL2zz0HUsBTFBo8HYJF5q6lfEWc76WcL7M57fx67rG-hHjn2qk0g2I1h0D0iIaKM9~uLc5falHaU3o0sjrvimO~IrZM3~VZDBIpa2EpxHx2yQaxWcp0wwMpx1BMVEdHH57g4aKR1MqIHpdJvJhmIKI-8sWhMbRTXrtKnAxROpNHEUdXdpQ__",
    },
    {
      quantity: "3000 товаров",
      name: "Вытяжки для кухни",
      img: "https://s3-alpha-sig.figma.com/img/94ef/08cc/8b28b823adb7a20bc50ff97935dfc449?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MOD8QzgoAPV7bbJolMc-AAEa0NQfTjZVQEBgR0LMBkoPlnVGPTgwDOR6q1AAy1Wh1O5UHFqT55BOU0L~8sQybbXH1tgMUoi1nieNM8kzmb22a2uuCRivgxx21X1Z68fIeffNTOy1nVRseVWCEqzRCCQQmdZ-SSIAe3LlaY1zXja6ArisUNOMHStiyUvZUxjEJWL8KrZDyloHssCdD05iJWC2qKBLQhX-86Nk6Hw2tHm4ctVJU3jMM9Kg2tk3DeJjOeOk3QaGbVNRPNO-aRMW7WqjrAlun1mhj~Lw7lYf0aDdHx19uy6h3gdNIU6eLIoqCw7X6YnJ5icNz2FxtAHFrw__",
    },
    {
      quantity: "3000 товаров",
      name: "Кухонные мойки",
      img: "https://s3-alpha-sig.figma.com/img/dbc2/1def/bc5805bf1df15d3f5bd30b27e6a3e3f2?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eBLyXVDLVs2a2b2RfPwG3HrOJSSjlNGFp1I~jS7Z0l9y~HQXRapmDAR0qH6~rVHY8MvxajIG5trBsa32Nj7SpLs~d14Y5EGESWcvuhi9N0K08kErIa72WiWdx2kz2ShksR1eMd-T8f4Y0cuVKKt0WXPCAyoCIvIMcTMHtZB~jgRigiV2n8MFu0rnZHmry-4-YOZG00hMUxqXE~1Jlfp-5F9EUherFqwn2zGK5dSruMeGbumJSRKY6sHH2GFTUK2Wvs8pks4f3JXAMEHHGruODYHLABWp7vi13WP74u0T0HJBF5cqLxgyllllNCasxOuDTJC0vQq1TEQakwBKIOv8XQ__",
    },
    {
      quantity: "3000 товаров",
      name: "Другие",
      img: "https://s3-alpha-sig.figma.com/img/1680/ca1b/ab13f25539269dc7f839629befabb751?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iYQeN0W52fDY-zFzjkJsa8v46JfJB78p2ttGbVINAEcUgWCbFcukUOPFfTus7Q2CSIvd8EFMLVAFkfrVNvje2S7ukk2UIrzKY1X-N5i4JLM4iRT-PvbT3sF8~D5inP4SepRYbi9EIB6ywNIAXOzpv7D1LehuT~wM8Di1sG4W0akWSHBSXxVOCu1tWL0ZMG-ORZPInkZyfYtcrkqdk-vCFQ25pi66VuTA14Y3TGy9dwwqycI7bcPf9WK4WD-L9o8NkpySaj1O0EJDXa78QKYuZx5uhCOONiPmdwp~bfYWJDgrZi~1JsW-xgSPNKT2W2ZGpipUZAZ4P~E9eD1QQZzWfg__",
    },
    {
      quantity: "3000 товаров",
      name: "Унитазы",
      img: "https://s3-alpha-sig.figma.com/img/fc6e/9890/9943499544b61f36d5773243b0f33138?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S5ZTxUhTkYyFB6Y-rZAPzex0LHOYLjhaNC71Ynpxh99vbHjSdf1oGWKUgiRUnbVkEVeLjSxGVZvzO7rq8-pNiSp7SHGa4hMBa32DH~AbtAOvXu2vFGjWa-8Vnc6wzE0t7vofggINjTjcGW9CQ0j3S2bewa3ffk~euPquaostCqt9Fdijdg0ebOUygJT2kTXGdkbTVy2L-vZYrkx5DDUMhmdnp4REfTwLSxCkNFz6Q7HTxVI5DilHSbYe4tmAe1-4hOHd0lzdLTVCH10TF1mf5DRwAP69pLhQ0SJN-Oet5o2Z0mZsGRoXqZQtCPeNYlErU8YRxLuXXMbyqp0vkWtygw__",
    },
    {
      quantity: "3000 товаров",
      name: "Вытяжки для кухни",
      img: "https://s3-alpha-sig.figma.com/img/94ef/08cc/8b28b823adb7a20bc50ff97935dfc449?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MOD8QzgoAPV7bbJolMc-AAEa0NQfTjZVQEBgR0LMBkoPlnVGPTgwDOR6q1AAy1Wh1O5UHFqT55BOU0L~8sQybbXH1tgMUoi1nieNM8kzmb22a2uuCRivgxx21X1Z68fIeffNTOy1nVRseVWCEqzRCCQQmdZ-SSIAe3LlaY1zXja6ArisUNOMHStiyUvZUxjEJWL8KrZDyloHssCdD05iJWC2qKBLQhX-86Nk6Hw2tHm4ctVJU3jMM9Kg2tk3DeJjOeOk3QaGbVNRPNO-aRMW7WqjrAlun1mhj~Lw7lYf0aDdHx19uy6h3gdNIU6eLIoqCw7X6YnJ5icNz2FxtAHFrw__",
    },
    {
      quantity: "3000 товаров",
      name: "Умывальники",
      img: "https://s3-alpha-sig.figma.com/img/a58f/d4d0/0ac159176cc9f22529ee8e7a425a4d74?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qC517IM8vzeuGq3upxSRKoMtcC9oUQbT2zYDk3pJFpHMdrJTeteQGIAlXKOs-GfNV7NqtB2i3PLs6Qpw5eXQcczkUvA83vIdZsiVvMvMJtz-fq7YyFhJZ7oSSAOAXOHfdC7Em7xys5lO0NPBboxWbj980pCHxVFFm3OIjC6iGXjRKTy4vlFzLVT8pD7g7wW1gVpYFcG5grsqKhskMo5rYBaDWnbIITCVUNysLRUijy-ix2XDDnLdBBRxDIfwi95qi1gwdz-KXoDk9sND~jcmDuqgDdUZjHBCW1v4iGo8eY8frit808LrX7k6KZWblnnRh7W0O5PdwVMtn8bkwIwPIA__",
    },
    {
      quantity: "3000 товаров",
      name: "Полотенцесушители",
      img: "https://s3-alpha-sig.figma.com/img/df96/6dcb/f0fcf971ae51c63218ba6d3e0f9cad2e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DPmN962MIIfbM3z9plBehwBzCRvy5ut9rK6z4yLagch~t0~bllCjMjYBaGCCwQGtWE3ngTWUATXytUnxasfP8KBc7vJxyPPC~QhIVZ5CyiUFBQitvrFgo7Xl7s~Kojh6j73-dk54uKRk7Ed1l4nmOHPmH63VzkxGBBJjqGmusYTSJ4B5HKA5mbQdfV2WXWMi-4G7nFp1tyJPr0KRwpCB4qHIMejzROHsuZ1cy2PbPhh-iVOvYQlC5~2VA2LdqDXoZKytL5R82ze3bUAovUeBc7K76C5vEWWsHS76KgLn6j0FfegwNwVUbSo~-4cWgXPVbg~DxGCXbuY5RnXaKbB9LQ__",
    },
    {
      quantity: "3000 товаров",
      name: "Водонагреватели",
      img: "https://s3-alpha-sig.figma.com/img/de9f/de2f/e9600a0452260fe3de1071dfdd40ded9?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pEOimGqDqLUQ9YR~QDZ5Igzc84AtHSs8NyWkKHqZR8lRxJl6u3ujCevXuoF-nWr8d52kunGONTtFp-OQNzQzN9TZDTOW7eV92CQwKv3zmKw9Cp3J8jAy6SRA4LXZei92EBo7n1LD3U8BtS4K9pyqHGWUufrwEUmzDa1WcfLUAByVL6PYXKMLHhWE~RwJRI8YnIXyGRvf3xsVuCOAx0Ej8fIl3rRoMFzdGqWh1bD5CkwMLhdn5EZ7FWvgiwajotGzmDUvyot6A6xW8hedvahxOx4O7uVAAhIZ4s8MP3co2E9IKdC1p32hv3iniKUbvhqxou5Rn1uSQsL2JZnt5a154g__",
    },
    {
      quantity: "3000 товаров",
      name: "Душевые",
      img: "https://s3-alpha-sig.figma.com/img/bdbc/620f/6d4e73df2570c16de1b6dbf951dd8335?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bVaHL~lNCz5IbkJL48QV3x0Jmbs00mZuKc8WskUpWziwOdmJrdYQlnCqzgs2irW9pdrjU46n4PO0bkRLZQ2SI0icpkAu1Ai6Hftbb9VZYbJIZBh3zHbwbBMYdCDVzPejXK7IFDuepyWUUfXxXsqjYr7QmL9IsfhHRY-0ERIbxriY1Ll-uGtSnzDD1TlIZNMhEBKMIFp9skmyiPpxYaTfYB3sO34C-W0IG763OH1hawxgxd4k7CsUqtyJ45JihybENn98~qduAbydbqiLYW3wbc5uYvzRhvOVWeoMOa7h~BbCetKd1QKCPj1vIVctF4gPLxh8VR9gzz5o4htbc0D8Lg__",
    },
    {
      quantity: "3000 товаров",
      name: "Водонагреватели",
      img: "https://s3-alpha-sig.figma.com/img/ccfb/404e/7ed6020bc5c7ce2b8326ba2c4ea4ebe6?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M7nvE3SxykecdoHVjr1so2ctrOwrWFPDjdzZyc5pMTIgKrK8ixFjFOkXCgcaNm~EJkE~Fpu3X6GhNtFjTSkAsZJXjfKMFqZXshR~CuX4eDQ~91T8cAvQ2XE3DmKfGXgRg2yThedtDvhy5WzRiEi4tMBEoS4BmfnI4czibl02JSdLuQaCmjqp-gSu-OsM623swmUh9sM~2ZgU5TbFEuC3Ft5YzOp1ZtWTZEdPkN28ii-uZbGtzW0IjcxoMCEYaRJFsvEU4z3BEfU0U8Gy5EWkUtdw3ovGtSwBFxMYsU4wvBKbbPQmq-PLjE~23MRfONdKTV05FdAsdZyp-QGscUzm2w__",
    },
    {
      quantity: "3000 товаров",
      name: "Водонагреватели",
      img: "https://s3-alpha-sig.figma.com/img/ccfb/404e/7ed6020bc5c7ce2b8326ba2c4ea4ebe6?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M7nvE3SxykecdoHVjr1so2ctrOwrWFPDjdzZyc5pMTIgKrK8ixFjFOkXCgcaNm~EJkE~Fpu3X6GhNtFjTSkAsZJXjfKMFqZXshR~CuX4eDQ~91T8cAvQ2XE3DmKfGXgRg2yThedtDvhy5WzRiEi4tMBEoS4BmfnI4czibl02JSdLuQaCmjqp-gSu-OsM623swmUh9sM~2ZgU5TbFEuC3Ft5YzOp1ZtWTZEdPkN28ii-uZbGtzW0IjcxoMCEYaRJFsvEU4z3BEfU0U8Gy5EWkUtdw3ovGtSwBFxMYsU4wvBKbbPQmq-PLjE~23MRfONdKTV05FdAsdZyp-QGscUzm2w__",
    },
    {
      quantity: "3000 товаров",
      name: "Полотенцесушители",
      img: "https://s3-alpha-sig.figma.com/img/df96/6dcb/f0fcf971ae51c63218ba6d3e0f9cad2e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DPmN962MIIfbM3z9plBehwBzCRvy5ut9rK6z4yLagch~t0~bllCjMjYBaGCCwQGtWE3ngTWUATXytUnxasfP8KBc7vJxyPPC~QhIVZ5CyiUFBQitvrFgo7Xl7s~Kojh6j73-dk54uKRk7Ed1l4nmOHPmH63VzkxGBBJjqGmusYTSJ4B5HKA5mbQdfV2WXWMi-4G7nFp1tyJPr0KRwpCB4qHIMejzROHsuZ1cy2PbPhh-iVOvYQlC5~2VA2LdqDXoZKytL5R82ze3bUAovUeBc7K76C5vEWWsHS76KgLn6j0FfegwNwVUbSo~-4cWgXPVbg~DxGCXbuY5RnXaKbB9LQ__",
    },
  ];
  return (
    <section className="flex flex-wrap gap-5">
      {data.map((item, index) => (
        <CategoriesCard key={index} {...item} />
      ))}
    </section>
  );
};

export default Categories;
