import { MAX_DESCRIPTION_LENGTH } from "@/constants/note";
import { truncateString } from "@/lib/utils";

interface IShareableNoteDescriptionProps {
  description: string;
}

function ShareableNoteDescription({ description }: IShareableNoteDescriptionProps) {
  return (
    <div
      className="text-slate-600 text-[13px] mt-4 mx-4 font-medium mb-2"
    >
      {truncateString(description, MAX_DESCRIPTION_LENGTH)}
    </div>
  );
}

export default ShareableNoteDescription;
