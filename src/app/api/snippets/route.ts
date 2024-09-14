import { INTERNAL_SERVER_ERROR } from "@/constants/error";
import { SNIPPET_SAVED_SUCCESSFULLY } from "@/constants/messages";
import ISnippet from "@/interfaces/models/snippet";
import { connect } from "@/lib/database";
import { createSnippet } from "@/service/snippet.service";
import { NextResponse } from "next/server";

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