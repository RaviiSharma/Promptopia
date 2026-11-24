import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
import User from "@models/user"; // registers the model so populate("creator") works

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const { id } = await params;

    const prompts = await Prompt.find({
      creator: id,
    }).populate("creator");

    console.log(prompts);
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log("GET user prompts error:", error);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
