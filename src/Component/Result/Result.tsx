import { Result } from "@/utils/type";
import { FC } from "react";

interface ResultProps {
  result: Result[];
}

const ResultItem: FC<ResultProps> = ({ result }): JSX.Element => {
  return (
    <div>
      {result.map((result) => {
        return <div key={result.id}>{result.original_title}</div>;
      })}
    </div>
  );
};

export default ResultItem;
