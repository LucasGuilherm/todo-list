import { CheckSquare } from "phosphor-react";
import { format } from "date-fns";

const actionIconsCSS =
  "p-2 mr-4 hover:cursor-pointer hover:bg-gray-500 rounded-full hover:transition-colors";

interface ItemProps {
  tittle?: string;
  description?: string;
  isCompleted?: boolean;
  creationDate: string;
}
export function Item(props: ItemProps) {
  // console.log(
  //   format(new Date(parseInt(props.creationDate)), "dd/MM/yyyy HH:mm:ss")
  // );

  return (
    <div className="w-[600px] border border-gray-500 rounded-md animate-slideDown-item">
      <div className="p-4">
        <h1 className="font-bold mb-1">{props.tittle}</h1>
        <p className="whitespace-pre-line">{props.description}</p>
        <p>
          {format(
            new Date(parseInt(props.creationDate)),
            "dd/MM/yyyy HH:mm:ss"
          )}
        </p>
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
