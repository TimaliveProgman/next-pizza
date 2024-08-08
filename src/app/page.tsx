import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import Categories from "@/components/shared/categories";
import SortPopup from "@/components/shared/sort-popup";
import TopBar from "@/components/shared/top-bar";
import { Filters } from "@/components/shared/filters";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div>
            Список товаров
          </div>
        </div>
      </Container>
    </>
  );
}
