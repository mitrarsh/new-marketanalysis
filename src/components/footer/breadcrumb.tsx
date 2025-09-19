import React from "react";

const Breadcrumb: React.FC = () => {
  const path = window.location.pathname;
  const segments = path.split("/").filter(Boolean);

  return (
    <div className="breadcrumb flex flex-col">
      <h1>
        {segments.length > 0
          ? segments[segments.length - 1].replace(/-/g, " ")
          : "Home"}
      </h1>

      <span>
        <a href="/">Home</a>
        {segments.map((segment, index) => {
          const link = "/" + segments.slice(0, index + 1).join("/");
          const label = segment.replace(/-/g, " ");
          return (
            <span key={index}>
              {" > "}
              <a href={link}style={{color: "#0033cc"}}>{label}</a>
            </span>
          );
        })}
      </span>
    </div>
  );
};

export default Breadcrumb;
