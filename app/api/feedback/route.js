import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Feedback from "@/models/Feedback";

export async function POST(req) {
  try {
    const { name, rating, feedback, video } = await req.json();

    if (!name || !rating || !feedback) {
      return NextResponse.json(
        { message: "Name, rating, and feedback are required." },
        { status: 400 }
      );
    }

    await connectDB();

    const newFeedback = new Feedback({
      name,
      rating,
      feedback,
      video: video || null,
      date: new Date(),
    });

    await newFeedback.save();

    return NextResponse.json(
      { message: "Feedback saved successfully!", feedback: newFeedback },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving feedback:", error);
    return NextResponse.json(
      { message: "Error saving feedback" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const feedbacks = await Feedback.find().sort({ date: -1 });
    return NextResponse.json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedback:", error);
    return NextResponse.json(
      { message: "Error fetching feedback" },
      { status: 500 }
    );
  }
}
