import { INTERNAL_SERVER_ERROR } from "@/constants/error";
import { SHARE_URL_CREATED, INVALID_SNIPPET } from "@/constants/messages";
import { SHAREABLE_LINK_VALIDITY } from "@/constants/share";
import IShare from "@/interfaces/models/share";
import { connect } from "@/lib/database";
import { createShare, findPreviousShares } from "@/service/share.service";
import { findSnippet } from "@/service/snippet.service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const snippetId = payload?.share;

    if (!snippetId) {
      return NextResponse.json({ error: INVALID_SNIPPET }, { status: 400 });
    }

    await connect();
    const snippetInfo = await findSnippet(snippetId);

    if (!snippetInfo) {
      return NextResponse.json({ error: INVALID_SNIPPET }, { status: 400 });
    }

    const validTillDate = new Date();
    validTillDate.setMinutes(validTillDate.getMinutes() + SHAREABLE_LINK_VALIDITY);

    let shareInfo;

    const previousShareInfo = await findPreviousShares(snippetId);
    
    if (previousShareInfo.length) {
      shareInfo = previousShareInfo[previousShareInfo.length - 1] as IShare;
    } else {
      shareInfo = await createShare({
        id: crypto.randomUUID(),
        snippetId: snippetInfo.id,
        ownerId: snippetInfo.clerkUserId,
        validTill: validTillDate.toISOString(),
        viewedBy: [],
      });
    }


    return NextResponse.json({
      message: SHARE_URL_CREATED,
      data: {
        url: `/share/${shareInfo.id}`,
        validFor: "3 hours",
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || INTERNAL_SERVER_ERROR },
      { status: 500 }
    );
  }
}
