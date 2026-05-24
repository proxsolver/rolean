import { NextResponse } from "next/server";
import { generateAgentResponse, ChatMessage } from "@/domains/ai/agent";

export async function POST(request: Request) {
  try {
    const { messages } = await request.json() as { messages: ChatMessage[] };
    
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages array" }, { status: 400 });
    }

    const latestMessage = messages[messages.length - 1];
    const query = latestMessage?.content || "";

    const responseContent = generateAgentResponse(query, messages.slice(0, -1));

    return NextResponse.json({
      role: "assistant",
      content: responseContent,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
