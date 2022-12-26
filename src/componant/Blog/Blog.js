import React, { useState } from "react";
import useQA from "../../Hook/useQA";
import "./blog.css";

const Blog = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const [items] = useQA();
  return (
    <div>
      <h1 className="m-3 text-5xl text-center font-bold pt-5">Q&A</h1>
      <div className="accordion">
        {items.map((item, index) => (
          <div key={item.title}>
            <div
              className="accordion-title"
              onClick={() => onTitleClick(index)}
            >
              {item.title}
              {activeIndex === index ? (
                <span>&#x25B2;</span>
              ) : (
                <span>&#x25BC;</span>
              )}
            </div>
            {activeIndex === index && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
