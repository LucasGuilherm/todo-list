import { gql, useMutation } from "@apollo/client";
import { format } from "date-fns";
import { Plus } from "phosphor-react";
import { FormEvent, useState } from "react";
import { GET_TODOS } from "../pages/home";
import { Loader } from "./loader";

const ADD_ITEM = gql`
  mutation ($itemProps: Filter) {
    createItem(itemProps: $itemProps) {
      tittle
      description
      isCompleted
    }
  }
`;

export function AddBar() {
  const [tittle, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [createTodo, { data, loading }] = useMutation(ADD_ITEM);

  const handleCreateTodo = async (event: FormEvent) => {
    event.preventDefault();

    const response = await createTodo({
      variables: {
        itemProps: {
          tittle,
          description,
        },
      },
      refetchQueries: [{ query: GET_TODOS }],
    });
  };

  return (
    <>
      <div className="border border-gray-500 rounded-md w-[650px] flex items-center justify-between m-0 overflow-hidden">
        <form
          className="w-full flex items-center m-0 overflow-hidden"
          onSubmit={handleCreateTodo}
        >
          <div className="w-full flex flex-col justify-between m-0 overflow-hidden">
            <input
              type="text"
              placeholder="Titulo"
              className="overflow-hidden w-full bg-gray-900 p-2 focus:outline-none"
              onChange={(event) => setTitle(event.target.value)}
            />
            <span
              // type="text"
              // placeholder="New Item"
              className="overflow-hidden w-full bg-gray-900 p-2 pb-4 focus:outline-none resize-none empty:before:content-['New_Item'] empty:before:text-gray-300"
              role="textbox"
              contentEditable={true}
              // onChange={(event) => setTitle(event.target.innerText)}
              onInput={(event) => {
                const inputElement = event.target as HTMLInputElement;
                setDescription(inputElement.innerText);
              }}
            />
          </div>
          <button className="p-2 mx-2 rounded-full hover:bg-gray-500">
            <Plus size={20} />
          </button>
        </form>
      </div>
      {loading ? <Loader /> : ""}
    </>
  );
}
