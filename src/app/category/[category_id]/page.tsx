'use client'
import { CategoryList } from "@/features/category-list/CategoryList";
import { HeaderWithNavigation } from "@/features/header-with-navigation/HeaderWithNavigation";
import { SubcategoryList } from "@/features/subcategory-list/SubcategoryList";
import { Container } from "@/shared/container/Container";
import { ListWrapper } from "@/shared/wrappers/list-wrapper/ListWrapper";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [active, setActive] = useState(false)
  const [heightRecalculation, setHeightRecalculation] = useState(false)

  useEffect(() => {
    setHeightRecalculation(true)
    const timeout = setTimeout(() => {
      setHeightRecalculation(false)
    }, 500)
    
    return () => {
      clearTimeout(timeout)
    }
  }, [active]);

  return (
    <section>
      <Container>
        <HeaderWithNavigation 
          link="/home"
          title="Realistic"
          active={active}
          setActive={setActive}
        />
        <div className="">
          <div 
            style={{ height: 1000, maxHeight: active ? 290 : 0, marginTop: active ? '10.14vw' : 0}} 
            className="overflow-hidden overflow-y-auto transition-all"
          >
            <CategoryList />
          </div>
          {active 
            ? (
            <div style={{marginBottom: 290}}>
              <ListWrapper className={`mt-[8.01vw]`}>
                <SubcategoryList />
              </ListWrapper>
            </div>
            )
            : (
              <ListWrapper className={`mt-[8.01vw]`}>
                <SubcategoryList />
              </ListWrapper>
            )
          }
        </div>
      </Container>
    </section>
  );
};