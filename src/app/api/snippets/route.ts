import { INTERNAL_SERVER_ERROR, INVALID_SNIPPET_ID, INVALID_USER_ID } from "@/constants/error";
import { SNIPPET_DELETED_SUCCESSFULLY, SNIPPET_SAVED_SUCCESSFULLY, SNIPPET_UPDATED_SUCCESSFULLY, SNIPPETS_FETCHED_SUCCESSFULLY } from "@/constants/messages";
import ISnippet from "@/interfaces/models/snippet";
import { connect } from "@/lib/database";
import { createSnippet, findAllUserSnippet, updateSnippet } from "@/service/snippet.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const snippetInfo = await req.json() as ISnippet;
    
    await connect();
    const snippet = await createSnippet(snippetInfo);

    return NextResponse.json({
      message: SNIPPET_SAVED_SUCCESSFULLY,
      data: snippet,
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
    const snippets = await findAllUserSnippet(clerkUserId);

    return NextResponse.json({
      message: SNIPPETS_FETCHED_SUCCESSFULLY,
      data: snippets,
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
    const snippetId = req.nextUrl.searchParams.get("id");
    const snippetInfo = (await req.json()) as ISnippet;

    if (!snippetId) {
      return NextResponse.json({ error: INVALID_SNIPPET_ID }, { status: 400 });
    }

    await connect();
    const snippet = await updateSnippet(snippetId, snippetInfo);

    return NextResponse.json({
      message: SNIPPET_UPDATED_SUCCESSFULLY,
      data: snippet,
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
    const snippetId = req.nextUrl.searchParams.get("id");

    if (!snippetId) {
      return NextResponse.json({ error: INVALID_SNIPPET_ID }, { status: 400 });
    }

    await connect();

    
    const snippets = await findAllUserSnippet(snippetId);

    return NextResponse.json({
      message: SNIPPET_DELETED_SUCCESSFULLY,
      data: {},
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || INTERNAL_SERVER_ERROR },
      { status: 500 }
    );
  }
}