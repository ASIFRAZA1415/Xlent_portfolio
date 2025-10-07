"use client";
import { useState, useEffect, useRef } from "react";

import { Star, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";


export default function FeedbackSection() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [video, setVideo] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const [success, setSuccess] = useState(false);
  const scrollRef = useRef(null);


  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedbacks(saved);
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = direction === "left" ? -400 : 400;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideo(URL.createObjectURL(file));
    } else {
      alert("Please upload a valid video file.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = { name, rating, feedback, video, date: new Date().toLocaleDateString() };
    const updated = [newFeedback, ...feedbacks];
    setFeedbacks(updated);
    localStorage.setItem("feedbacks", JSON.stringify(updated));

    setSuccess(true);
    setName("");
    setRating(0);
    setHover(0);
    setFeedback("");
    setVideo(null);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <section className="w-full px-[12%] py-10 scroll-mt-20 
     bg-no-repeat bg-center bg-[length:90%_auto]">
      {/* Header & Form */}
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-5xl  mb-6 font-Ovo">Student Feedback</h2>
        <p className="text-gray-950 mb-10">
          Rate your experience and share a review!
        </p>
        

        <form onSubmit={handleSubmit} className="space-y-6 ">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full p-3 rounded-lg bg-gray-100  focus:ring-2 focus:ring-yellow-400"
            required
          />

          {/* Star Rating */}
          <div className="flex justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => {
              const starValue = i + 1;
              return (
                <Star
                  key={i}
                  size={35}
                  onClick={() => setRating(starValue)}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(0)}
                  className={`cursor-pointer transition ${
                    starValue <= (hover || rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-400"
                  }`}
                />
              );
            })}
          </div>

          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write your feedback..."
            className="w-full p-3 rounded-lg bg-gray-100  focus:ring-2 focus:ring-yellow-400"
            rows={4}
            required
          />

          {/* <div className="space-y-3">
            <label className="block font-medium ">
              Upload your video feedback:
            </label>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              className="block w-full  bg-gray-100 p-2 rounded-lg border border-gray-700 cursor-pointer"
            />
            {video && (
              <video
                controls
                className="w-full rounded-lg mt-3 border border-gray-700"
              >
                <source src={video} type="video/mp4" />
              </video>
            )}
          </div> */}

          <button
            type="submit"
            className="  bg-yellow-500 hover:bg-yellow-600 rounded-full text-black font-semibold py-2 px-6 rounded-lg transition mt-7"
          >
            Submit Feedback
          </button>

          {success && (
            <div className="flex justify-center items-center space-x-2 mt-3 text-green-400">
              <CheckCircle size={22} />
              <span>Feedback submitted successfully!</span>
            </div>
          )}
        </form>
      </div>

      {/* Google Rating Badge */}
  <div className="flex flex-col items-center mb-6 mt-20 ">
  <div className="flex items-center space-x-2">
    <img src="/google.svg" alt="Google" className="w-9 h-9" />
    <h3 className="text-lg font-semibold text-gray-900">
      Excellent on Google
    </h3>
  </div>
  <div className="flex items-center mt-2 space-x-1 text-gray-700">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={18}
        className="fill-yellow-400 text-yellow-400"
      />
    ))}
    <span className="ml-2 font-semibold text-gray-900">4.7</span>
    <span className="text-sm text-gray-600">
      out of 5 based on 194 reviews
    </span>
  </div>
</div>


      {/* Modern Vertical Timeline */}
     {feedbacks.length > 0 && (
        <div className="max-w-6xl mx-auto relative ">
          {/* Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow z-10"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow z-10"
          >
            <ChevronRight />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 scroll-smooth px-10 py-4 scrollbar-hide"
          >
            {feedbacks.map((fb, i) => (
        <div
         key={i}
        className="min-w-[280px] sm:min-w-[320px] md:min-w-[380px] max-w-[400px] bg-white border border-gray-200 rounded-2xl shadow-md p-5 flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
        >

    
    {/* User Header */}
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
          {fb.name[0]}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-base sm:text-lg">{fb.name}</h4>
          <p className="text-xs sm:text-sm text-gray-500">{fb.date}</p>
        </div>
      </div>
      <img
        src="google.svg"
        alt="Google"
        className="w-5 h-5 sm:w-6 sm:h-6"
      />
      
      
    </div>

    {/* Rating Stars */}
    <div className="flex space-x-1 mb-2">
      {[...Array(fb.rating)].map((_, i) => (
        <Star
          key={i}
          size={18}
          className="fill-yellow-400 text-yellow-400"
        />
      ))}
    </div>

    {/* Feedback Text */}
    <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-3 break-words whitespace-pre-wrap">
      {fb.feedback}
    </p>

    {/* Video (optional) */}
    {/* {fb.video && (
      <video
        controls
        className="w-full rounded-xl border border-gray-200"
      >
        <source src={fb.video} type="video/mp4" />
      </video>
    )} */}
  </div>
    ))}

          </div>
        </div>
      )}
    </section>
  );
}
