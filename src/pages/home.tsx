import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { AddBar } from "../components/addBar";
import { Item } from "../components/item";

const GET_TODOS = gql`
  query {
    items {
      isCompleted
      tittle
      description
    }
  }
`;

interface Item {
  isCompleted: boolean;
  tittle?: string;
  description?: string;
}

export function Home() {
  // const [lista, addLista] = useState([]);
  const { data, loading } = useQuery<{ items: Item[] }>(GET_TODOS);

  if (loading) {
    return <div className="flex flex-1 justify-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-6 items-center justify-center pt-8">
      <AddBar />
      {data?.items.map((item, index) => (
        <Item
          key={index}
          tittle={item.tittle}
          description={item.description}
          isCompleted={item.isCompleted}
        />
      ))}
    </div>
  );
}
