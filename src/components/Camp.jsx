import React from "react";
import { PEOPLE_URL } from "../../constants";

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-20 ">
        <div className="flex items-center">
          <div className="rounded-full bg-green-50 p-4">
            <img src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1 ml-2">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="text-sm text-white ">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <img
                src={url}
                key={url}
                width={52}
                height={52}
                className="inline-block h-10 w-10 rounded-full"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="border-2 border-green-500 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[350px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joinde"
        />
        <CampSite 
        backgroundImage="bg-bg-img-1"
        title="Mountain View"
        subtitle="Prigen, Pasuruan"
        peopleJoined="50+ Joinde"/>
      </div>
    </section>
  );
};

export default Camp;
