import { FC, ReactElement } from "react";
import StatsView from "./StatsView";

const DashBoard: FC = (): ReactElement => { 
  return (
    <div className="py-8 px-12">
      <div className="">
        <h4 className="bg-purple-600 text-md ml-auto rounded-sm  px-2 text-slate-200 w-max">
          Task status as of {new Date().toUTCString().substring(0, 17)}
        </h4>
        {/*  */}
        <section>
          {/* status view */}
          <StatsView />
          <div className="overflow-y-auto">
            {[{ _id: "one" }, { _id: "two" }, { _id: "two" }, { _id: "two" }, { _id: "two" }, { _id: "three" }].map((item) => (
              <div className="rounded-lg p-4 my-4 w-[70%] bg-purple-600/5 mx-auto  border border-purple-500/50">
                <section className="flex justify-between items-center">
                  <h2 className="text-slate-100 text-lg font-medium">
                    The title of the task that need to be done
                  </h2>
                  <span className="rounded-full px-2 py-1 text-slate-400 border border-current text-[10px]">
                    22 Dec 2022
                  </span>
                </section>
                <p className="text-slate-400 font-extralight leading-5 py-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  ullam corporis incidunt nam nulla molestias nemo enim quos
                  placeat necessitatibus at, pariatur labore voluptate earum
                  totam quas dolores quaerat.nem eveniet, modi perspiciatis
                  quisquam.
                </p>
                <section className="flex justify-between items-center">
                  <div className="text-purple-500 text-lg flex items-center font-medium">
                    <input
                      type="checkbox"
                      id={`status-${item._id}`}
                      className="w-4 h-4 rounded-full mr-2 accent-inherit"
                    />
                    <label
                      htmlFor={`status-${item._id}`}
                      className="cursor-pointer"
                    >
                      In progress
                    </label>
                  </div>
                  <span className="rounded-md px-2 py-1 cursor-pointer text-slate-200 shadow-sm shadow-green-800/50 bg-green-600 text-sm">
                    Complete
                  </span>
                </section>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashBoard;
