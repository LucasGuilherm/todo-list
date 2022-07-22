import { gql, useMutation } from "@apollo/client";
import { Plus } from "phosphor-react";
import { FormEvent, useState } from "react";

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
  const [createTodo, { loading }] = useMutation(ADD_ITEM);

  const [tittle, setTitle] = useState("");
  // const [description, setDescription] = useState();

  const handleCreateTodo = async (event: FormEvent) => {
    event.preventDefault();

    console.log(tittle);

    await createTodo({
      variables: {
        itemProps: {
          tittle,
        },
      },
    });
  };

  return (
    <div className="border border-gray-500 rounded-md w-[650px] flex items-center justify-between m-0 overflow-hidden">
      <form
        className="w-full flex items-center justify-between m-0 overflow-hidden"
        onSubmit={handleCreateTodo}
      >
        <input
          type="text"
          placeholder="New Item"
          className="overflow-hidden w-full bg-gray-900 p-2 focus:outline-none resize-none empty:before:content-['New_Item'] empty:before:text-gray-300"
          // role="textbox"
          // contentEditable={true}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button className="p-2 mx-2 rounded-full hover:bg-gray-500">
          <Plus size={20} />
        </button>
      </form>
    </div>
  );
}
