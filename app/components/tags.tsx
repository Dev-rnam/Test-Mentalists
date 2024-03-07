import { TAGS } from "../constants";

export const Tags = () => {
  return (
    <div className="w-[300px] gap-2 h-[100px] flex  items-center  flex-wrap tags">
      {TAGS.map((data) => (
        <div
          key={data.id}
          className="rounded-full text-center text-black tag-border text-xs p-2 px-4"
        >
          {data.label}
        </div>
      ))}
    </div>
  );
};
