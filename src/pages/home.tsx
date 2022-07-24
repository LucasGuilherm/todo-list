import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { AddBar } from "../components/addBar";
import { Item } from "../components/item";
import { Loader } from "../components/loader";

export const GET_TODOS = gql`
  query {
    items {
      isCompleted
      tittle
      description
      creationDate
    }
  }
`;

interface Item {
  isCompleted: boolean;
  tittle?: string;
  description?: string;
  creationDate: string;
}

export function Home() {
  const { data, loading } = useQuery<{ items: Item[] }>(GET_TODOS);

  const sortedData = data?.items.slice().sort(function (a, b) {
    return Number(b.creationDate) - Number(a.creationDate);
  });

  return (
    <div className="flex flex-col gap-6 items-center justify-center pt-8">
      <AddBar />
      <>{loading ? <Loader /> : ""}</>
      {sortedData?.map((item, index) => (
        <Item
          key={index}
          tittle={item.tittle}
          description={item.description}
          isCompleted={item.isCompleted}
          creationDate={item.creationDate}
        />
      ))}
    </div>
  );
}
