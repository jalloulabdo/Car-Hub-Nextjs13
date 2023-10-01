"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const handlenavigation = () => {
    const nexLimit = (pageNumber + 1) * 10;
    setLimit(nexLimit);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handlenavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
