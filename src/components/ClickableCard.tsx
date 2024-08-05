interface Props {
  onClickHandler: () => void;
  title: string;
  body: any;
}

export default function ClickableCard({onClickHandler, title, body}: Props) {
  return (
    <div className="flex-1 w-full my-2">
      <a onClick={onClickHandler} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: body }}></p>
      </a>
    </div>
  );
}