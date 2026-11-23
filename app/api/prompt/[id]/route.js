import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
import User from "@models/user";

//GET (read)
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const { id } = await params;

    const prompt = await Prompt.findById(id).populate("creator");

    if (!prompt) {
      return new Response("Prompt not found", { status: 404 });
    }

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    console.log("GET prompts error:", error);
    return new Response("Failed to fetch prompt", { status: 500 });
  }
};

//PATCH(update)
export const PATCH = async (req, { params }) => {
  try {
    const { prompt, tag } = await req.json();
    const { id } = await params;

    await connectToDB();

    const existingPrompt = await Prompt.findById(id);

    if (!existingPrompt)
      return new Response("Prompt not found", { status: 404 });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    console.log("PATCH prompts error:", error);
    return new Response("Failed to update prompt", { status: 500 });
  }
};

//DELETE(delete)

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    const { id } = await params;

    await Prompt.findByIdAndDelete(id);
    return new Response("Prompt deleted successsfully", { status: 200 });
  } catch (error) {
    console.log("DELETE prompts error:", error);
    return new Response("Failed to delete prompt", { status: 500 });
  }
};
