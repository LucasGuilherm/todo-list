import { CheckSquare } from "phosphor-react";

const actionIconsCSS =
  "p-2 mr-4 hover:cursor-pointer hover:bg-gray-500 rounded-full hover:transition-colors";

interface ItemProps {
  tittle?: string;
  description?: string;
  isCompleted?: boolean;
}
export function Item(props: ItemProps) {
  return (
    <div className="w-[600px] border border-gray-500 rounded-md">
      <div className="p-4">
        <h1 className="font-bold mb-1">{props.tittle}</h1>
        <p>{props.description}</p>
      </div>
      <ul className="flex flex-row ml-2 mt-2 mb-2">
        <li className={actionIconsCSS}>
          <CheckSquare size={20} />
        </li>
        <li className={actionIconsCSS}>
          <CheckSquare size={20} />
        </li>
        <li className={actionIconsCSS}>
          <CheckSquare size={20} />
        </li>
      </ul>
    </div>
  );
}
