import { SHAREABLE_LINK_VALIDITY } from "@/constants/share";
import IShare from "@/interfaces/models/share";
import Share from "@/models/Share.model";
import { DeleteResult } from "mongodb";
import { HydratedDocument, UpdateWriteOpResult } from "mongoose";

type ShareDocument = IShare & Document;

export const createShare = (
  share: IShare
): Promise<HydratedDocument<IShare>> => {
  return Share.create(share);
};

export const updateShare = (
  id: string,
  share: IShare
): Promise<UpdateWriteOpResult> => {
  return Share.updateOne({ id: id }, share);
};

export const deleteShare = (id: string): Promise<DeleteResult> => {
  return Share.deleteOne({ id });
};

export const findShare = (id: string): Promise<ShareDocument | null> => {
  return Share.findOne({ id });
};

export const findAllUserShare = (
  clerkUserId: string
): Promise<Array<HydratedDocument<IShare>>> => {
  return Share.find({ ownerId: clerkUserId });
};

export const findPreviousShares = async (shareId: string) => {


    const validTillDate = new Date();
    validTillDate.setMinutes(
      validTillDate.getMinutes() + SHAREABLE_LINK_VALIDITY
    );

  return Share.aggregate([
    {
      $match: {
        $and: [
          {
            id: shareId,
          },
          {
            validTill: {
              $gte: new Date().toISOString(),
            },
          },
          {
            validTill: {
              $lte: validTillDate.toISOString(),
            },
          },
        ],
      },
    },
  ]);
}