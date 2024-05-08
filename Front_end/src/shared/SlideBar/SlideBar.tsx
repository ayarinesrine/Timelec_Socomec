"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function SlideBar() {
  const icons = [
    { title: faHouse, path: "" },
    { title: faUser, path: "" },
    { title: faList, path: "" },
    { title: faToolbox, path: "" },
    { title: faGear, path: "" },
  ];
  const [hover, setHover] = useState(false);
  return (
    <div className="w-defaultwidth m-auto py-1 sticky  top-0">
      <div className="bg-blue  h-[90vh]  m-auto rounded-xl  py-10 grid ">
        <div className="  ">
          <img src="./assets/logoWhite.png" className="w-[80%] m-auto" />
        </div>
        <div>
          {icons.map((item, index) => (
            <div key={index} className="flex">
              <a href={item.path} className="m-auto">
                <FontAwesomeIcon
                  className={` p-2 rounded-lg   text-white `}
                  style={{ boxSizing: "initial" }}
                  icon={item.title}
                />
              </a>
            </div>
          ))}
        </div>
        <div className="mb-auto flex">
          <a href="/" className="mx-auto">
            <FontAwesomeIcon
              style={{ boxSizing: "initial" }}
              icon={faRightToBracket}
              className="h-8 m-auto text-white "
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SlideBar;
