import { INTERNAL_SERVER_ERROR, INVALID_TAG_ID, INVALID_USER_ID } from "@/constants/error";
import { TAG_DELETED_SUCCESSFULLY, TAG_SAVED_SUCCESSFULLY, TAG_UPDATED_SUCCESSFULLY, TAGS_FETCHED_SUCCESSFULLY } from "@/constants/messages";
import ITag from "@/interfaces/models/tag";
import { connect } from "@/lib/database";
import { createTag, findAllUserTag, updateTag } from "@/service/tag.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const tagInfo = await req.json() as ITag;
    
    await connect();
    const tag = await createTag(tagInfo);

    return NextResponse.json({
      message: TAG_SAVED_SUCCESSFULLY,
      data: tag,
    });

  } catch(err: any) {
    return NextResponse.json(
      { error: err?.message || INTERNAL_SERVER_ERROR },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const clerkUserId = req.nextUrl.searchParams.get("userId");

    if (!clerkUserId) {
      return NextResponse.json({ error: INVALID_USER_ID }, { status: 400 });
    }

    await connect();
    const tags = await findAllUserTag(clerkUserId);

    return NextResponse.json({
      message: TAGS_FETCHED_SUCCESSFULLY,
      data: tags,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || INTERNAL_SERVER_ERROR },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const tagId = req.nextUrl.searchParams.get("id");
    const tagInfo = (await req.json()) as ITag;

    if (!tagId) {
      return NextResponse.json({ error: INVALID_TAG_ID }, { status: 400 });
    }

    await connect();
    const tag = await updateTag(tagId, tagInfo);

    return NextResponse.json({
      message: TAG_UPDATED_SUCCESSFULLY,
      data: tag,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || INTERNAL_SERVER_ERROR },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const tagId = req.nextUrl.searchParams.get("id");

    if (!tagId) {
      return NextResponse.json({ error: INVALID_TAG_ID }, { status: 400 });
    }

    await connect();

    
    const tags = await findAllUserTag(tagId);

    return NextResponse.json({
      message: TAG_DELETED_SUCCESSFULLY,
      data: {},
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || INTERNAL_SERVER_ERROR },
      { status: 500 }
    );
  }
}