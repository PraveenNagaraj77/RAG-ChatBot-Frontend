import React, { useEffect } from "react";

function SourceLinks({ sources }) {
  useEffect(() => {
    if (sources?.length > 0) {
      console.log(`Sources attached: ${sources.length}`, sources.map(s => s.title));
    }
  }, [sources]);

  return (
    <div className="sources">
      {sources.map((s, i) => (
        <a
          key={i}
          href={s.url}
          target="_blank"
          rel="noreferrer"
          className="source-chip"
        >
          {s.title}
        </a>
      ))}
    </div>
  );
}

export default SourceLinks;
