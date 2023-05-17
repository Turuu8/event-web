import { useChangesNavbarSearch } from "@/context";

export const Footer = () => {
  const { search } = useChangesNavbarSearch() as { search: boolean };
  return (
    <div className={`pt-[200px] px-[60px] text-[#686873] pb-[30px]  max-[1600px]:p-[80px_45px_25px] ${search ? "hidden" : ""}`}>
      <div className="w-full border-t-[0.5px] border-[#686873] flexrow justify-between pt-[25px]">
        <h1 className="text-center text-[18px]  max-[1600px]:text-[14px]">Pinecone Academy &nbsp;|&nbsp; Leap Team 3</h1>
        <h1 className="text-center text-[18px]  max-[1600px]:text-[14px]">@2023 UBevents web designed by Surneke</h1>
      </div>
    </div>
  );
};
