import { useState } from "react";

import Controls from "../Controls/Controls";
import Progress from "../Progress/Progress";
import ArticleView from "../ArticleView/ArticleView";

export default function Reader({ data }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handlePrev = () => {
    setSelectedIdx(selectedIdx - 1);
  };

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };
  const totalArticles = data.length;

  const isFirst = selectedIdx === 0;
  const isLast = selectedIdx === totalArticles - 1;

  const currentArticle = data[selectedIdx];

  return (
    <div>
      <Controls
        onPrev={handlePrev}
        onNext={handleNext}
        isFirst={isFirst}
        isLast={isLast}
      ></Controls>
      <Progress current={selectedIdx + 1} total={totalArticles}></Progress>
      <ArticleView article={currentArticle}></ArticleView>
    </div>
  );
}
